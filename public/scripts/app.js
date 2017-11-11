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
    // ctrl.getTime = function(){
    //   ctrl.time = date.today();
    // };
    //
    // ctrl.getTime();

  }); //end of smartMirror
