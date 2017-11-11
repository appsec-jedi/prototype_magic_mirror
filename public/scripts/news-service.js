app.service('NewsService', function($http){

  this.fetchNews = function() {
    return $http({
      type: "GET",
      url: "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=fb547a973ff54e5192169abf7e7eb58c"
    }).then(function(response){
      console.log("Here is the news!", response);
      return response.data;
    }).catch(function(err){
      console.log("error gerring info from API");
    });
  }; //end of fetchNews

})
