import { expect } from 'chai';

import Traveler from '../src/Traveler';
import travelerData from '../src/test-data/Traveler-test-data';
import tripsData from '../src/test-data/Trip-test-data';

describe('Traveler', () => {
  let traveler;

  beforeEach(() => {
    traveler = new Traveler(travelerData[0], tripsData);
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceof(Traveler);
  })

  it('should get all of one traveler\'s trips', () => {
    console.log(traveler.pastTrips())
    // expect(traveler.findTrips()).to.deep.equal(
    // [{"id":1,"userID":1,"destinationID":49,"travelers":1,"date":"2019/09/16","duration":8,"status":"approved","suggestedActivities":[]},
    // {"id":2,"userID":1,"destinationID":25,"travelers":5,"date":"2020/10/04","duration":18,"status":"pending","suggestedActivities":[]},
    // {"id":3,"userID":1,"destinationID":22,"travelers":4,"date":"2020/05/22","duration":17,"status":"pending","suggestedActivities":[]},])
  })



})




//
