// const moment = require('moment')
const moment = require('moment');


class Traveler {
  constructor(traveler, trips) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.allTrips = trips;
    this.travelersTrips = [];
  }

  findTrips() {
    return this.travelersTrips = this.allTrips.filter(trip => trip.userID === this.id)
  };

  pastTrips() {
    let today = moment('2020/05/15').format('YYYY/MM/DD')
    this.findTrips()
    let singleTravelerTrips = this.travelersTrips.filter(trip => {
      return moment(trip.date).add(trip.duration, 'day').isBefore(today)
    })
  }

};
export default Traveler
