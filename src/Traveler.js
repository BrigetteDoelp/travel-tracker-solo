// const moment = require('moment')
import moment from 'moment';


class Traveler {
  constructor(traveler, trips) {
    this.id = traveler.id;
    this.name = traveler.name;
    this.travelerType = traveler.travelerType;
    this.allTrips = trips;
    this.travelersTrips = [];
  }

  findTrips() {
    this.travelersTrips = this.allTrips.filter(trip => trip.userID === this.id)
  };

  pastTrips() {
    let today = moment(Date.now())
    this.findTrips()
    console.log(this.travelersTrips)
    this.travelersTrips.filter(trip => {
      moment(trip.date).isBefore(today).add(trip.duration, 'day')
    })
  }

}
export default Traveler
