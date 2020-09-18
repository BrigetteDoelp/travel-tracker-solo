const fetchAPI = {
  getAllTravelers() {
    const travelerDataApi = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers'
    const promise = fetch(travelerDataApi)
      .then (response => response.json())
    return promise;
  },

  getAllTrips() {
    const tripDataApi = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips'
    const promise = fetch(tripDataApi)
      .then (response => response.json())
    return promise;
  },



}
