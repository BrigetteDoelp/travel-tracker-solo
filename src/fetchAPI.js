const fetchAPI = {
  getTravelers() {
    const travelerDataApi = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers'
    const promise = fetch(travelerDataApi)
      .then (response => response.json())
    return promise;
  },



}
