import { useState, useEffect } from "react";
import { updateDays } from "../helpers/selectors.js";

import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get(`http://localhost:8001/api/days`),
      axios.get(`http://localhost:8001/api/appointments`),
      axios.get(`http://localhost:8001/api/interviewers`)
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
    });
  }, [])

  const setDay = day => setState(prev => ({ ...prev, day }));

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    //returns days with updated spots
    const days = updateDays(appointments, state.days, state.day)

    return axios.put('/api/appointments/' + id, {
      interview: interview
    })
      .then(() => {
        setState({ ...state, appointments, days });
      })
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    //returns days with updated spots
    const days = updateDays(appointments, state.days, state.day)

    return axios.delete('/api/appointments/' + id, {
      interview: null
    })
      .then(() => {
        setState({ ...state, appointments, days});
      })
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}