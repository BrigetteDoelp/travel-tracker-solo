// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import moment from 'moment';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

import Traveler from './Traveler.js';

import updateDOM from './domUpdate.js';
import api from './api.js';

// let userID = Math.floor((Math.random() * 50) + 1);
let travelers;
let traveler;
let trips;
let destinations;

window.onload = onLoadContent;

function onLoadContent() {
  let userID = Math.floor((Math.random() * 50) + 1);
  console.log(userID)

  let promise0 = api.fetchAllTrips();
  let promise1 = api.fetchAllDestinations();
  let promise2 = api.fetchOneTraveler(userID)

  Promise.all([promise0, promise1, promise2])
    .then(values => {
      // console.log(values)
      trips = values[0].trips;
      destinations = values[1].destinations;
      traveler = values[2]
      generateTraveler()
    })
}

//GENERAL FUNCTIONS
function generateTraveler() {
  let soloTraveler = new Traveler(traveler)
  generateTravelerTripData(soloTraveler)
  return soloTraveler
}

function generateTravelerTripData(traveler) {
  let travelerDestinations = [];
  traveler.travelersDestinations = travelerDestinations
  traveler.travelersTrips = trips.filter(trip => trip.userID === traveler.id)
  let travelersTrips = traveler.travelersTrips
  destinations.forEach(destination => {
    travelersTrips.forEach(trip => {
      if (destination.id === trip.destinationID) {
        travelerDestinations.push(destination)
      }
    })
  })
}

function generateTripCosts() {
  let soloTraveler = generateTraveler()
  let yearOfTrips = soloTraveler.yearOfTrips()
  let totalCosts = yearOfTrips.reduce((acc, trip) => {

    return acc
  }, 0)
}















//
