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

  it('should be able to check for past trips', () => {
    console.log(traveler.pastTrips())
  })

  it('should be able to check for present trips', () => {

  })

  it('should be able to check for future trips', () => {

  })

  it('should be able to check for pending trips', () => {
    
  })

})




//
