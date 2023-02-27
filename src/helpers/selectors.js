//returns array of appointment objects
export function getAppointmentsForDay(state, day) {
  //returns an array of appointments for that day
  const days = state.days;
  const appointments = state.appointments;
  let dayAppointments = [];

  if (days.length === 0) {
    return []
  } else {
    const filteredDay = days.filter(d => d.name === day)
    if (filteredDay[0]) {
      dayAppointments = filteredDay[0].appointments;
    } else {
      return [];
    }
  }

  let appointmentsObjects = [];

  for (const id of dayAppointments) {
    appointmentsObjects.push(appointments[id])
  }

  return appointmentsObjects;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewerId = interview.interviewer;
  const interviewerObject = state.interviewers[`${interviewerId}`];

  const interviewObject = {
    "student": interview.student,
    "interviewer": interviewerObject
  }

  return interviewObject;
}