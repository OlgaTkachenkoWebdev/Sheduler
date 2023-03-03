//returns array of appointment objects
export function getAppointmentsForDay(state, day) {
  //returns an array of appointments for that day
  const days = state.days;
  const appointments = state.appointments;
  let dayAppointments = [];

  if (days.length === 0) {
    return [];
  } else {
    const filteredDay = days.filter(d => d.name === day);
    if (filteredDay[0]) {
      dayAppointments = filteredDay[0].appointments;
    } else {
      return [];
    }
  }

  let appointmentsObjects = [];

  for (const id of dayAppointments) {
    appointmentsObjects.push(appointments[id]);
  }

  return appointmentsObjects;
}


// returns object with student name and interviewer id, name and avatar
export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewerId = interview.interviewer;
  const interviewerObject = state.interviewers[interviewerId];

  const interviewObject = {
    "student": interview.student,
    "interviewer": interviewerObject
  };

  return interviewObject;
}


//returns array of appointment objects for given day
export function getInterviewersForDay(state, day) {
  const days = state.days;
  const interviewers = state.interviewers;
  let dayInterviewers = [];

  if (days.length === 0) {
    return [];
  } else {
    const filteredDay = days.filter(d => d.name === day);
    if (filteredDay[0]) {
      dayInterviewers = filteredDay[0].interviewers;
    } else {
      return [];
    }
  }

  let interviewersObjects = [];

  for (const id of dayInterviewers) {
    interviewersObjects.push(interviewers[id]);
  }

  return interviewersObjects;
}


//returns updated array of days
export function updateDays(allAppointments, allDays, thisDay) {
  //returns array of appointments
  function getAppointments(appointments, days, day) {
    let dayAppointments = [];

    const filteredDay = days.filter(d => d.name === day);
    if (filteredDay[0]) {
      dayAppointments = filteredDay[0].appointments;
    }

    let appointmentsObjects = [];

    for (const id of dayAppointments) {
      appointmentsObjects.push(appointments[id]);
    }
    return appointmentsObjects;
  }
  // returns number of available spots that equals the number of interviews with null value 
  function getSpots(appointments) {
    const appointmentsValues = Object.values(appointments);
    let spots = 0;

    for (const appointment of appointmentsValues) {
      if (appointment.interview === null) {
        spots++;
      }
    }
    return spots;
  }
  //returns object of chosen day
  function getDay(days, day) {
    const chosenDay = days.find((d) => d.name === day);
    return chosenDay;
  }
  //returns updated days array 
  function newDays(days, oldDay, newDay) {
    const index = days.indexOf(oldDay);
    const daysArray = days;
    daysArray[index] = newDay;
    return daysArray;
  }

  const dailyAppointments = getAppointments(allAppointments, allDays, thisDay);
  const newSpots = getSpots(dailyAppointments);
  const day = getDay(allDays, thisDay);
  const newDay = { ...day, spots: newSpots };
  const days = newDays(allDays, day, newDay);

  return days;
}