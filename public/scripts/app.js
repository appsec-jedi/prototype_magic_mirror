var app = angular.module('smartMirror', []);

  app.controller('mirrorController', function(MirrorService,NewsService){
    console.log("mirrorController loaded!");

    var ctrl = this;

    ctrl.getWeather = function(){
      console.log("Getting the weather");
      MirrorService.fetchWeather().then(function(weather){
        ctrl.temp = weather.main.temp;
        ctrl.high = weather.main.temp_max;
        ctrl.low = weather.main.temp_min;
        ctrl.humidity = weather.main.humidity;
        ctrl.icon = "http://openweathermap.org/img/w/"+weather.weather[0].icon+".png";
        ctrl.wind = weather.wind.speed;
      })
    }//end of getWeather

    ctrl.getNews = function(){
      console.log("Getting the news");
      NewsService.fetchNews().then(function(news){
        ctrl.news = news.articles;
        console.log(ctrl.news);
      })
    }
    //
    ctrl.getTime = function() {
    // Create a date object with the current time
      var now = new Date();
    // Create an array with the current month, day and time
      var date = [ now.getMonth() + 1, now.getDate(), now.getFullYear() ];
    // Create an array with the current hour, minute and second
      var time = [ now.getHours(), now.getMinutes() ];
    // Determine AM or PM suffix based on the hour
      var suffix = ( time[0] < 12 ) ? "AM" : "PM";
    // Convert hour from military time
      time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
    // If hour is 0, set it to 12
      time[0] = time[0] || 12;
    // If seconds and minutes are less than 10, add a zero
      for ( var i = 1; i < 3; i++ ) {
        if ( time[i] < 10 ) {
          time[i] = "0" + time[i];
        }
      }
    // Return the formatted string
      ctrl.time = date.join("/") + " " + time.join(":") + " " + suffix;
    };

    ctrl.getTime();

  }); //end of smartMirror

  // , now.getSeconds() ]
