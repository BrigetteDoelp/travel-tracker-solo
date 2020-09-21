import { expect } from 'chai';

import Traveler from '../src/Traveler';
import travelerData from '../src/test-data/Traveler-test-data';
import tripsData from '../src/test-data/Trip-test-data';
import destinationData from '../src/test-data/Destination-test-data';

describe('Traveler', () => {
  let traveler;

  beforeEach(() => {
    traveler = new Traveler(travelerData[0]);
    traveler.travelersTrips = [
      {"id":1,"userID":1,"destinationID":49,"travelers":1,"date":"2019/09/16","duration":8,"status":"approved","suggestedActivities":[]},
      {"id":2,"userID":1,"destinationID":25,"travelers":5,"date":"2020/10/04","duration":18,"status":"pending","suggestedActivities":[]},
      {"id":3,"userID":1,"destinationID":22,"travelers":4,"date":"2020/05/22","duration":17,"status":"pending","suggestedActivities":[]},
      {"id":4,"userID":1,"destinationID":14,"travelers":2,"date":"2019/02/25","duration":10,"status":"approved","suggestedActivities":[]},
      {"id":5,"userID":1,"destinationID":29,"travelers":3,"date":"2020/04/30","duration":18,"status":"approved","suggestedActivities":[]},
      {"id":6,"userID":1,"destinationID":35,"travelers":3,"date":"2021/06/29","duration":9,"status":"approved","suggestedActivities":[]},
      {"id":7,"userID":1,"destinationID":17,"travelers":5,"date":"2019/5/28","duration":20,"status":"approved","suggestedActivities":[]},
      {"id":8,"userID":1,"destinationID":39,"travelers":6,"date":"2021/02/07","duration":4,"status":"pending","suggestedActivities":[]},
      {"id":9,"userID":1,"destinationID":19,"travelers":5,"date":"2019/12/19","duration":19,"status":"approved","suggestedActivities":[]},
      {"id":10,"userID":1,"destinationID":49,"travelers":1,"date":"2020/09/16","duration":8,"status":"approved","suggestedActivities":[]},
    ]
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceof(Traveler);
  });

  it('should be able to check for past trips', () => {
    expect(traveler.pastTrips()).to.deep.equal(
      [
        {
          id: 1,
          userID: 1,
          destinationID: 49,
          travelers: 1,
          date: '2019/09/16',
          duration: 8,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 3,
          userID: 1,
          destinationID: 22,
          travelers: 4,
          date: '2020/05/22',
          duration: 17,
          status: 'pending',
          suggestedActivities: []
        },
        {
          id: 4,
          userID: 1,
          destinationID: 14,
          travelers: 2,
          date: '2019/02/25',
          duration: 10,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 5,
          userID: 1,
          destinationID: 29,
          travelers: 3,
          date: '2020/04/30',
          duration: 18,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 7,
          userID: 1,
          destinationID: 17,
          travelers: 5,
          date: '2019/5/28',
          duration: 20,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 9,
          userID: 1,
          destinationID: 19,
          travelers: 5,
          date: '2019/12/19',
          duration: 19,
          status: 'approved',
          suggestedActivities: []
        }
      ]
    )
  });

  it('should be able to check for present trips', () => {
    expect(traveler.presentTrips()).to.deep.equal(
      [
        {
          id: 10,
          userID: 1,
          destinationID: 49,
          travelers: 1,
          date: '2020/09/16',
          duration: 8,
          status: 'approved',
          suggestedActivities: []
        }
      ]
    )
  });

  it('should be able to check for future trips', () => {
    expect(traveler.futureTrips()).to.deep.equal(
      [
        {
          id: 6,
          userID: 1,
          destinationID: 35,
          travelers: 3,
          date: '2021/06/29',
          duration: 9,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 10,
          userID: 1,
          destinationID: 49,
          travelers: 1,
          date: '2020/09/16',
          duration: 8,
          status: 'approved',
          suggestedActivities: []
        }
      ]
    )
  });

  it('should be able to check for pending trips', () => {
    expect(traveler.pendingTrips()).to.deep.equal(
      [
        {
          id: 2,
          userID: 1,
          destinationID: 25,
          travelers: 5,
          date: '2020/10/04',
          duration: 18,
          status: 'pending',
          suggestedActivities: []
        },
        {
          id: 3,
          userID: 1,
          destinationID: 22,
          travelers: 4,
          date: '2020/05/22',
          duration: 17,
          status: 'pending',
          suggestedActivities: []
        },
        {
          id: 8,
          userID: 1,
          destinationID: 39,
          travelers: 6,
          date: '2021/02/07',
          duration: 4,
          status: 'pending',
          suggestedActivities: []
        }
      ]
    )
  });

  it('should be able to get a full year of trips', () => {
    expect(traveler.yearOfTrips()).to.deep.equal(
      [
        {
          id: 2,
          userID: 1,
          destinationID: 25,
          travelers: 5,
          date: '2020/10/04',
          duration: 18,
          status: 'pending',
          suggestedActivities: []
        },
        {
          id: 3,
          userID: 1,
          destinationID: 22,
          travelers: 4,
          date: '2020/05/22',
          duration: 17,
          status: 'pending',
          suggestedActivities: []
        },
        {
          id: 5,
          userID: 1,
          destinationID: 29,
          travelers: 3,
          date: '2020/04/30',
          duration: 18,
          status: 'approved',
          suggestedActivities: []
        },
        {
          id: 10,
          userID: 1,
          destinationID: 49,
          travelers: 1,
          date: '2020/09/16',
          duration: 8,
          status: 'approved',
          suggestedActivities: []
        }
      ]
    )
  });

  it('should be able to calculate the total amount spent on trips for that year', () => {

  })

})




//
