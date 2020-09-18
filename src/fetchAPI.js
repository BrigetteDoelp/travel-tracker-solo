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

  getAllDestinations() {
    const destinationDataApi = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations'
    const promise = fetch(destinationDataApi)
      .then (response => response.json())
    return promise;
  },

  // getOneTraveler(id) {
  //   const soloTravelerDataApi = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/<id>id<id> '
  //   const promise = fetch(soloTravelerDataApi)
  //     .then (response => response.json())
  //   return promise;
  // }, need advice/research with this one. not actually sure if this works like this, gonna have to double check.
}
