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
    this.travelersTrips = this.allTrips.filter(trip => trip.userID === this.id)
  };

  pastTrips() {
    let today = moment('2020/05/15').format('YYYY/MM/DD')
    console.log(today)
    this.findTrips()
    console.log(this.travelersTrips)
    let singleTravelerTrips = this.travelersTrips.filter(trip => {
      moment(trip.date).add(trip.duration, 'day').isBefore(today)
  })
  console.log(singleTravelerTrips)

  }

}
export default Traveler
