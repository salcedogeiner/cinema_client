'use strict';

/**
 * @ngdoc function
 * @name cinemaApp.controller:CrudMoviesCtrl
 * @description
 * # CrudMoviesCtrl
 * Controller of the cinemaApp
 */
angular.module('cinemaApp')
  .controller('CrudMoviesCtrl', function (cinemaRequest) {
    var self = this;
    self.nmovie={};

    self.load_movies=function(){
      cinemaRequest.get("movie","").then(function(response){
        self.movies=response.data;
      });
    }
    self.load_movies();
    self.createMovie=function(){
      console.log(self.nmovie);
      if (self.nmovie._id != undefined) {
        cinemaRequest.put("movie",self.nmovie).then(function(response){
          alert("Updated");
          self.res=response.data;
          self.load_movies();
        });
      } else {
        cinemaRequest.post("movie",self.nmovie).then(function(response){
          alert("Created");
          self.res=response.data;
          self.load_movies();
        });
      }
    }

    self.deleteMovie=function(id){
      cinemaRequest.delete("movie",id).then(function(response){
        alert("Deleted");
        self.res=response.data;
        self.load_movies();
      });
    }





  });
