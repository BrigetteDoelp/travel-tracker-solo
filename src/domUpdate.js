const updateDom = {

  welcomeMessage(traveler) {
    let welcome = document.querySelector('.greeting');
    welcome.innerHTML = `Welcome, Adventurer ${traveler.name}!`
  },

  updatePastTrips(traveler) {
    let pastData = traveler.pastTrips()
    let pastArea = document.querySelector('.past-trip-card');
    pastData.forEach(trip => {
      pastArea.innerHTML += `
        <p class='past-trip'> Quest to ${trip.destinationID} <br>• Party Size : ${trip.travelers}<br>• Start Date: ${trip.date}<br>• Quest Duration: ${trip.duration} days.</p>
      `
    })
  },

  updatePresentTrips(traveler) {
    let presentData = traveler.presentTrips()
    let presentArea = document.querySelector('.present-trip-card');
    presentData.forEach(trip => {
      presentArea.innerHTML += `
        <p class = 'present-trip'>You have an active quest in ${trip.destinationID}. Best of luck, adventurer!</p>
      `
    })
  },

  updateFutureTrips(traveler) {
    let futureData = traveler.futureTrips()
    let futureArea = document.querySelector('.future-trip-card');
    futureData.forEach(trip => {
      futureArea.innerHTML += `
        <p class = 'future-trip'>You have an upcoming quest in ${trip.destinationID}.<br>It begins on ${trip.date} and will last for ${trip.duration} days.</p>
      `
    })
  },

  updatePendingTrips(traveler) {
    let pendingData = traveler.pendingTrips()
    let pendingArea = document.querySelector('.pending-trip-card');
    pendingData.forEach(trip => {
      pendingArea.innerHTML += `
        <p class = 'pending-trip'>Your quest to ${trip.destinationID} is pending approval of the guild master.<br> Thank you for your patience.</p>
      `
    })
  },

  generateDestinationList(destinations) {
    let destinationList = document.querySelector('.dropdown')
    destinations.forEach(destination => {
      destinationList.insertAdjacentHTML('beforeend', `<option value="${destination.id}">${destination.destination}</option>`)
    })
  },

  displayMoneySpent(traveler) {
    let moneyArea = document.querySelector('.moneyarea')
    let money = traveler.moneySpent
    let roundedMonies = money.toFixed(2)
    moneyArea.insertAdjacentHTML('beforeend', `You and your party have earned ${roundedMonies} gold this year!`)
  },







}

export default updateDom
