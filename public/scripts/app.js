var app = angular.module('smartMirror', []);

  app.controller('mirrorController', function($scope,MirrorService,NewsService,VideoService){
    console.log("mirrorController loaded!");

    var ctrl = this;
    ctrl.showVideo = false;
    ctrl.displayNews1 = false;
    ctrl.news;

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

    // ctrl.getWeather();

    ctrl.toggleNews = function(){
      console.log("running toggleNews");
      // var myEl = angular.element( document.querySelector( '.news' ) );
      setInterval( function(){
        console.log("switching the news");
        // myEl.empty();
        if (ctrl.displayNews1 == true){
          $scope.$apply(function(){
                ctrl.displayNews1 = false;
                ctrl.news = ctrl.news2;
            });
          console.log("switching to news2");
          // ctrl.displayNews1 = false;
          // ctrl.displayNews2 = true;
        } else {
          $scope.$apply(function(){
                ctrl.displayNews1 = true;
                ctrl.news = ctrl.news1;
            });

          console.log("switching to news1");
          // ctrl.displayNews1 = true;
          // ctrl.displayNews2 = false;
        }
      }, 5000);
    }//end of toggleNews

    ctrl.getNews = function(){
      console.log("Getting the news");
      NewsService.fetchNews().then(function(news){
        ctrl.displayNews1 = true;
        ctrl.news1 = news.articles.slice(0,5);
        ctrl.news2 = news.articles.slice(5,10);

        // ctrl.toggleNews();
      })
    }//end of getNews
    ctrl.getNews();

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

    ctrl.getVideo = function(){
      $scope.$apply(function(){
            ctrl.showVideo = true;
        });
      console.log(ctrl.showVideo);
      // VideoService.fetchVideo().then(function(video){
      //   console.log(video);

      // });
    };//end of getVideo


    ctrl.greeting = ["Sup meatbag?","Looking good player!","That's what you're wearing?","Life is meaningless"];


    // if (annyang) {
    //   var spotify = function(input) {
    //     alert("searching spotify for " + input);
    //   }
    //   var youtube = function(input) {
    //     // alert("searching youtube for " + input);
    //     ctrl.getVideo();
    //   }
    //   var main = function(){
    //     $scope.$apply(function(){
    //           ctrl.showVideo = false;
    //       });
    //     console.log(ctrl.showVideo);
    //   }
    //
    //
    //   // Let's define a command.
    //   var commands = {
    //     'play *input': spotify,
    //     'search youtube for *input': youtube,
    //     'back to main': main,
    //     'hello': function() { alert('Hello world!'); },
    //
    //   };
    //
    //   // Add our commands to annyang
    //   annyang.addCommands(commands);
    //
    //
    //
    //   // Start listening.
    //   annyang.start();
    // }

  }); //end of smartMirror
