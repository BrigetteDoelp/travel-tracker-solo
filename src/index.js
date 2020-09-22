// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.scss';
import moment from 'moment';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

import Traveler from './Traveler.js';
import updateDom from './domUpdate.js';
import api from './api.js';

// let userID = Math.floor((Math.random() * 50) + 1);
let travelers;
let traveler;
let trips;
let destinations;
let submitBtn = document.querySelector('.submit-button');
let errorMessage = document.querySelector('.error-message');

window.onload = onLoadData;

submitBtn.addEventListener('click', submitTrip);

function onLoadData() {
  let userID = Math.floor((Math.random() * 50) + 1);
  let promise0 = api.fetchAllTrips();
  let promise1 = api.fetchAllDestinations();
  let promise2 = api.fetchOneTraveler(userID);
  Promise.all([promise0, promise1, promise2])
    .then(values => {
      console.log(values)
      trips = values[0].trips;
      destinations = values[1].destinations;
      traveler = values[2]
      let newTraveler = generateTraveler()
      // console.log(newTraveler.pastTrips());

      onLoadDisplay(newTraveler, destinations)
    })
}

function onLoadDisplay(traveler, destinations) {
  updateDom.welcomeMessage(traveler);
  updateDom.updatePastTrips(traveler);
  updateDom.updatePresentTrips(traveler);
  updateDom.updateFutureTrips(traveler);
  updateDom.updatePendingTrips(traveler);
  updateDom.generateDestinationList(destinations);

}

function submitTrip() {
  if(validateDateEntry() && validateDuration() && validateTravelers() && validateDestination() === true) {
    let newTrip = generateNewTrip()
    //post the new trip here!!!
    errorMessage.classList.add('hidden')
  } else {
    errorMessage.classList.remove('hidden')
  }
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
  return includingAgentFee
}

function generateNewTrip() {
  //create a new trip object!

//if the validate functions all evaluate to true, run the thingy
//if not, dont and display error knight

}

function validateDateEntry() {
  let dateInput = document.querySelector('.date-input')
  if(moment(dateInput.value)._isValid || moment(dateInput.value).isAfter(moment(Date.now()))) {
    return true
  } else {
    return false
  }
}

function validateDuration() {
  let durationInput = document.querySelector('.duration-input');
  if(typeof durationInput.value == 'number' || durationInput.value > 1) {
    return true
  } else {
    return false
  }
}

function validateTravelers() {
  let travelerInput = document.querySelector('.traveler-input');
  if(typeof travelerInput.value == 'number' || travelerInput.value > 0) {
    return true
  } else {
    return false
  }
}

function validateDestination() {
  let dropdown = document.querySelector('.dropdown');
  if(dropdown.value == 'question') {
    return false
  } else {
    return true
  }
}











/// END OF THE JAVASCRIPT ///
