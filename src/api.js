const api = {
  fetchOneTraveler(id) {
    const soloTravelerDataApi = `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${id}`
    const promise = fetch(soloTravelerDataApi)
      .then (response => response.json())
    return promise;
  },

  fetchAllTravelers() {
    const travelerDataApi = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers'
    const promise = fetch(travelerDataApi)
      .then (response => response.json())
    return promise;
  },

  fetchAllTrips() {
    const tripDataApi = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips'
    const promise = fetch(tripDataApi)
      .then (response => response.json())
    return promise;
  },

  fetchAllDestinations() {
    const destinationDataApi = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations'
    const promise = fetch(destinationDataApi)
      .then (response => response.json())
    return promise;
  },

  //post new trip https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips
  //post new destination https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations
  //post (modify) single trip https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/updateTrip
}

export default api
