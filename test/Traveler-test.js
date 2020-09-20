import { expect } from 'chai';

import Traveler from '../src/Traveler';
import travelerData from '../src/test-data/Traveler-test-data';
import tripsData from '../src/test-data/Trip-test-data';

describe('Traveler', () => {
  let traveler;

  beforeEach(() => {
    traveler = new Traveler(travelerData[0]);
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceof(Traveler);
  })
  //
  // it('should find past trips of a traveler', () => {
  //   console.log(traveler.pastTrips())
  //   // expect(traveler.pastTrips()).to.deep.equal([
  //   //   {"id":3,"userID":1,"destinationID":22,"travelers":4,"date":"2020/05/22","duration":17,"status":"pending","suggestedActivities":[]},
  //   // ])
  // })



})




//
