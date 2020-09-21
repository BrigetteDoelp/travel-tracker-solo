// const moment = require('moment')
const moment = require('moment');

class Traveler {
  constructor(traveler) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.travelersTrips = [];
    this.travelersDestinations = [];
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
      if (moment(trip.date).add(trip.duration, 'day').isAfter(today)) {
        return trip
      }
    })
    let notPendingTrips = futureTrips.filter(trip => {
      return trip.status === 'approved'
    })
    return notPendingTrips
  }

  pendingTrips() {
    let pendingTrips = this.travelersTrips.filter(trip => {
      return trip.status === 'pending'
    })
    return pendingTrips
  }

  yearOfTrips() {
    let today = new Date()
    let thisYear = today.getFullYear()
    let thisYearsTrips = this.travelersTrips.filter(trip => {
      return trip.date.includes(thisYear)
    })
    return thisYearsTrips
  }




};
export default Traveler
