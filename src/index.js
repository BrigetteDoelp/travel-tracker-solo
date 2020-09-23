import './css/styles.scss';
import moment from 'moment';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

import Traveler from './Traveler.js';
import updateDom from './domUpdate.js';
import api from './api.js';

let travelers;
let traveler;
let trips;
let destinations;
let requestedTrip;
let userID = Math.floor((Math.random() * 50) + 1);
let submitBtn = document.querySelector('.submit-button');
let errorMessage = document.querySelector('.error-message');
let dateInput = document.querySelector('.date-input')
let dropdown = document.querySelector('.dropdown');
let durationInput = document.querySelector('.duration-input');
let travelerInput = document.querySelector('.traveler-input');


window.onload = onLoadData;

submitBtn.addEventListener('click', submitTrip);

function onLoadData() {
  let promise0 = api.fetchAllTrips();
  let promise1 = api.fetchAllDestinations();
  let promise2 = api.fetchOneTraveler(userID);
  Promise.all([promise0, promise1, promise2])
    .then(values => {
      trips = values[0].trips;
      destinations = values[1].destinations;
      traveler = values[2]
      let newTraveler = generateTraveler()
      onLoadDisplay(newTraveler, destinations)
    })
}

function onSubmitData() {
  let promise0 = api.fetchAllTrips();
  let promise1 = api.fetchAllDestinations();
  let promise2 = api.fetchOneTraveler(userID);
  Promise.all([promise0, promise1, promise2])
    .then(values => {
      trips = values[0].trips;
      destinations = values[1].destinations;
      traveler = values[2]
      let newTraveler = generateTraveler()
    })
}

function clearInput() {
  let dateInput = document.getElementById('startdate');
  let durationInput = document.getElementById('duration');
  let partySizeInput = document.getElementById('partysize');

  dateInput.value = '';
  durationInput.value = '';
  partySizeInput.value = '';
}

function fetchUserData(travelerID) {
  let user = api.fetchOneTraveler(travelerID)
}

function getDestinations(destinations) {
  let allDestinations = destinations
  return allDestinations
}

function onLoadDisplay(traveler, destinations) {
  updateDom.welcomeMessage(traveler);
  updateDom.updatePastTrips(traveler);
  updateDom.updatePresentTrips(traveler);
  updateDom.updateFutureTrips(traveler);
  updateDom.updatePendingTrips(traveler);
  updateDom.generateDestinationList(destinations);
  updateDom.displayMoneySpent(traveler);
}

function submitTrip() {
  if(validateDateEntry() && validateDuration() && validateTravelers() && validateDestination() === true) {
    let trip = generateNewTrip()
    clearInput()
    postTrip()
    errorMessage.classList.add('hidden')
  } else {
    errorMessage.classList.remove('hidden')
  }
}

function generateNewTrip() {
  let newTrip = {
    id: Math.floor((Math.random() * 100) + 50),
    userID: userID,
    destinationID: parseInt(dropdown.value),
    travelers: parseInt(travelerInput.value),
    date: dateInput.value,
    duration: parseInt(durationInput.value),
    status: 'pending',
    suggestedActivities: []
  }
  convertTripForPost(newTrip)
  return newTrip
}

function convertTripForPost(trip) {
  requestedTrip = {
    id: Date.now(),
    userID: +trip.userID,
    destinationID: +trip.destinationID,
    travelers: +trip.travelers,
    date: dateInput.value,
    duration: +trip.duration,
    status: 'pending',
    suggestedActivities: []
  }
}

function postTrip() {
  let postTrip = requestedTrip
   // console.log(postTrip)
  let postRequest = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postTrip)
  };
  let postedTrip = api.fetchNewTrip(postRequest);
  let promise0 = api.fetchOneTraveler(userID);
  Promise.all([postedTrip, promise0])
    .then(onSubmitData())
    .then(values => {
      let traveler = values[1]
      let newTraveler = generateTraveler()
      let tripCost = generateNewTripCost(requestedTrip, destinations)
      updateDom.displayNewTripCost(tripCost)
      newTraveler.travelersTrips.push(requestedTrip)
      updateDom.updatePendingTrips(newTraveler)
    })
}

function generateTraveler() {
  let soloTraveler = new Traveler(traveler);
  generateTravelerTripData(soloTraveler);
  findYearOfDestinations(soloTraveler);
  generateTripCosts(soloTraveler);
  return soloTraveler
}

function generateTravelerTripData(traveler) {
  let travelerDestinations = [];
  traveler.travelersDestinations = travelerDestinations;
  traveler.travelersTrips = trips.filter(trip => trip.userID === traveler.id);
  let travelersTrips = traveler.travelersTrips
  destinations.forEach(destination => {
    travelersTrips.forEach(trip => {
      if (destination.id === trip.destinationID) {
        travelerDestinations.push(destination)
      }
    })
  });
}

function findYearOfDestinations(traveler) {
  let yearOfTrips = traveler.yearOfTrips();
  let allDestinations = traveler.travelersDestinations;
  let thisYearsDestinations = [];
  allDestinations.forEach(destination => {
    yearOfTrips.forEach(trip => {
      if (destination.id === trip.destinationID) {
        thisYearsDestinations.push(destination)
      }
    })
  });
  return thisYearsDestinations
}

function generateTripCosts(traveler) {
  let trips = traveler.yearOfTrips();
  let destinations = findYearOfDestinations(traveler);
  let totalSpent = destinations.reduce((acc, destination) => {
    let lodging;
    let lodgingAndFlight;
    let totalCostsForAll;
    trips.forEach(trip => {
      lodging = (destination.estimatedLodgingCostPerDay * trip.duration);
      lodgingAndFlight = (lodging + destination.estimatedFlightCostPerPerson);
      totalCostsForAll = (lodgingAndFlight * trip.travelers);
    })
    acc += totalCostsForAll
    return acc
  }, 0);
  let includingAgentFee = (totalSpent * 1.1);
  traveler.moneySpent = includingAgentFee
}

function generateNewTripCost(passedInTrip, destinations) {
  let trip = passedInTrip
  let singleDestination = destinations.find(destination => {
    return destination.id === trip.destinationID
  })
  let lodging = (singleDestination.estimatedLodgingCostPerDay * trip.duration);
  let plusFlight = (lodging + singleDestination.estimatedFlightCostPerPerson);
  let baseCostForAll = (plusFlight * trip.travelers);
  let plusAgentFee = (baseCostForAll * 1.1)
  let roundedTotal = plusAgentFee.toFixed(2)
  return roundedTotal
}

function validateDateEntry() {
  if(moment(dateInput.value)._isValid || moment(dateInput.value).isAfter(moment(Date.now()))) {
    return true
  } else {
    return false
  }
}

function validateDuration() {
  if(typeof durationInput.value == 'number' || durationInput.value > 1) {
    return true
  } else {
    return false
  }
}

function validateTravelers() {
  if(typeof travelerInput.value == 'number' || travelerInput.value > 0) {
    return true
  } else {
    return false
  }
}

function validateDestination() {
  if(dropdown.value == 'question') {
    return false
  } else {
    return true
  }
}




// export default generateTripCosts
/// END OF THE JAVASCRIPT ///
