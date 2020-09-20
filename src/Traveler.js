// const moment = require('moment')
const moment = require('moment');


class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.travelersTrips = [];
  }

  pastTrips() {
    let today = moment(Date.now()).format('YYYY/MM/DD')
    let pastTrips = this.travelersTrips.filter(trip => {
      return moment(trip.date).add(trip.duration, 'day').isBefore(today)
    })
    return pastTrips
  }

  futureTrips() {
    let today = moment(Date.now()).format('YYYY/MM/DD')
    this.findTrips()

  }

};
export default Traveler
