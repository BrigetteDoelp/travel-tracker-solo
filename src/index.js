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

let userID = Math.floor((Math.random() * 50) + 1);
let travelers;
let traveler;
let trips;
let destinations;

window.onload = onLoadContent;

function onLoadContent() {
  let userID = Math.floor((Math.random() * 50) + 1);
  console.log(userID)

  let promise1 = api.fetchAllTrips();
  let promise2 = api.fetchAllDestinations();
  let promise3 = api.fetchOneTraveler(userID)

  Promise.all([promise1, promise2, promise3])
    .then(values => {
      console.log(values)
      traveler = values[2]
      trips = values[0].trips;
      destinations = values[2].destinations;
      getTravelersTrips()
    })
}

//GENERAL FUNCTIONS
function getTravelersTrips(solo, trippys) {
  let soloTraveler = new Traveler(traveler, trips)
  soloTraveler.findTrips()
  console.log(soloTraveler.pastTrips())
}

// travlers.maps













//
