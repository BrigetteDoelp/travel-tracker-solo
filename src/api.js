const api = {
  fetchOneTraveler(id) {
    const soloTravelerDataApi = `https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${id}`
    const promise = fetch(soloTravelerDataApi)
      .then (response => response.json())
      .catch(err => console.log('err', err))
    return promise;

  },

  fetchAllTravelers() {
    const travelerDataApi = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers'
    const promise = fetch(travelerDataApi)
      .then (response => response.json())
      .catch(err => console.log('err', err))
    return promise;
  },

  fetchAllTrips() {
    const tripDataApi = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips'
    const promise = fetch(tripDataApi)
      .then (response => response.json())
      .catch(err => console.log('err', err))
    return promise;
  },

  fetchAllDestinations() {
    const destinationDataApi = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations'
    const promise = fetch(destinationDataApi)
      .then (response => response.json())
      .catch(err => console.log('err', err))
    return promise;
  },

  fetchNewTrip(trip) {
    console.log(trip)
    const promise = fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', trip)
      .then (response => console.log(response))
      .catch(err => console.log('err', err))
    return promise
  },

}



export default api
