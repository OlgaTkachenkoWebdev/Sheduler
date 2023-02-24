export function getAppointmentsForDay(state, day) {
  //returns an array of appointments for that day
  const days = state.days;
  const appointments = state.appointments;
  let dayAppointments = [];
  let appointmentsObjects = [];

  if (days.length === 0) {
    return []
  } else {
    days.map(d => {
      if (d.name == day) {
        dayAppointments = d.appointments;
      } else {
        return [];
      }
    })
  }

  const appointmentsNumbers = Object.keys(appointments);

  for (const number of appointmentsNumbers) {
    for (const id in dayAppointments) {
      if (number == dayAppointments[id]) {
        appointmentsObjects.push(appointments[number])
      }
    }
  }
  return appointmentsObjects;
}
