app.service('MirrorService', function($http){

  this.fetchWeather = function() {
    return $http({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?id=5037649&units=imperial&APPID=e63b67657f31e133d336f9c983aa22a1"
    }).then(function(response){
      console.log("Here is your weather!", response);
      return response.data;
    }).catch(function(err){
      console.log("error getting info from API");
    });
  }; //end of fetchWeather

})
