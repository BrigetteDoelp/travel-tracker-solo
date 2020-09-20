import { expect } from 'chai';

import Traveler from '../src/Traveler';
import travelerData from '../src/test-data/Traveler-test-data';

describe('Traveler', () => {
  let traveler;
  let destination;
  let trip1;
  let trip2;

  beforeEach(() => {
    traveler = new Traveler(travelerData[0]);
  });

  it('is a function', () =>{
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceof(Traveler);
  });



})




//
