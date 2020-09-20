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

  presentTrips() {
    let today = moment(Date.now()).format('YYYY/MM/DD')
    let presentTrips = this.travelersTrips.filter(trip => {
      if (moment(trip.date).isBefore(today) && moment(trip.date).add(trip.duration, 'day').isAfter(today)) {
        return trip
      }
    })
    return presentTrips
  }

  futureTrips() {
    let today = moment(Date.now()).format('YYYY/MM/DD')
    let futureTrips = this.travelersTrips.filter(trip => {
      return moment(trip.date).add(trip.duration, 'day').isAfter(today)
    })
    return futureTrips
  }

  pendingTrips() {
    let pendingTrips = this.travelersTrips.filter(trip => {
      return trip.status === 'pending'
    })
    return pendingTrips
  }




};
export default Traveler
