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

  // it('is a function', () =>{
  //   expect(Traveler).to.be.a('function');
  // });
  //
  // it('should be an instance of Traveler', () => {
  //   expect(traveler).to.be.an.instanceof(Traveler);
  // });



})




//
