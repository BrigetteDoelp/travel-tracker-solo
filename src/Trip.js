const moment = require('moment');

class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status || 'pending';
    this.suggestedActivities = [];
  }

}

export default Trip

//
