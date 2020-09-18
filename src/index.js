// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

import api from './api.js'

let userID = Math.floor((Math.random() * 50) + 1);
let travelers;
let trips;
let destinations;

window.onload = onLoadContent;

function onLoadContent() {
  let promise1 = api.fetchAllTravelers();
  let promise2 = api.fetchAllTrips();
  let promise3 = api.fetchAllDestinations();

  Promise.all([promise1, promise2, promise3])
    .then(values => {
      console.log(values)
      travelers = values[0].travelers;
      trips = values[1].trips;
      destinations = values[2].destinations;
    })
}
