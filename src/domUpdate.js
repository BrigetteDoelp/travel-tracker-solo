const updateDom = {

  welcomeMessage(traveler) {
    let welcome = document.querySelector('.greeting');
    welcome.innerHTML = `Welcome ${traveler.name}!`
  },

  updatePastTrips(traveler) {
    let pastData = traveler.pastTrips()
    let pastArea = document.querySelector('.past-trip-card');
    pastData.forEach(trip => {
      pastArea.innerHTML += `
        <p class = 'past-trip'>You went to ${trip.destinationID} on ${trip.date} for ${trip.duration} days!</p>
      `
    })
  },

  updatePresentTrips(traveler) {
    let presentData = traveler.presentTrips()
    let presentArea = document.querySelector('.present-trip-card');
    presentData.forEach(trip => {
      presentArea.innerHTML += `
        <p class = 'present-trip'>You are currently in ${trip.destinationID}! Yay!</p>
      `
    })
  },

  updateFutureTrips(traveler) {
    let futureData = traveler.futureTrips()
    let futureArea = document.querySelector('.future-trip-card');
    futureData.forEach(trip => {
      futureArea.innerHTML += `
        <p class = 'future-trip'>You will be going to ${trip.destinationID} on ${trip.date} for ${trip.duration} days!</p>
      `
    })
  },

  updatePendingTrips(traveler) {
    let pendingData = traveler.pendingTrips()
    let pendingArea = document.querySelector('.pending-trip-card');
    pendingData.forEach(trip => {
      pendingArea.innerHTML += `
        <p class = 'pending-trip'>Your trip to ${trip.destinationID} is pending approval!</p>
      `
    })
  },







}

export default updateDom
