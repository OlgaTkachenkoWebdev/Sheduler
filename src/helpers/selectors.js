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

// returns object with student name and interviewer id, name and avatar
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

//returns array of appointment objects
export function getInterviewersForDay(state, day) {
  //returns an array of appointments for that day
  const days = state.days;
  console.log(days)
  console.log('days', days.length)
  const interviewers = state.interviewers;
  let dayInterviewers = [];

  if (days.length === 0) {
    return []
  } else {
    const filteredDay = days.filter(d => d.name === day)
    if (filteredDay[0]) {
      dayInterviewers = filteredDay[0].interviewers;
    } else {
      return [];
    }
  }

  let interviewersObjects = [];

  for (const id of dayInterviewers) {
    interviewersObjects.push(interviewers[id])
  }

  return interviewersObjects;
}