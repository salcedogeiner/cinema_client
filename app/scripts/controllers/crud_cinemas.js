'use strict';

/**
 * @ngdoc function
 * @name cinemaApp.controller:CrudCinemasCtrl
 * @description
 * # CrudCinemasCtrl
 * Controller of the cinemaApp
 */
angular.module('cinemaApp')
  .controller('CrudCinemasCtrl', function (cinemaRequest) {
    var self = this;
    self.ncinema={movies:[]};

    self.load_movies=function(){
      cinemaRequest.get("movie","").then(function(response){
        self.smovies=response.data;
      });
    }
    self.load_movies();

    self.load_cinemas=function(){
      cinemaRequest.get("cinema","").then(function(response){
        self.cinemas=response.data;
      });
    }
    self.load_cinemas();
    self.createCinema=function(){
      console.log(self.ncinema);
      if (self.ncinema._id != undefined) {
        cinemaRequest.put("cinema",self.ncinema).then(function(response){
          self.res=response.data;
          alert("Updated");
          self.load_cinemas();
        });
      } else {
        cinemaRequest.post("cinema",self.ncinema).then(function(response){
          alert("Created");
          self.res=response.data;
          self.load_cinemas();
        });
      }
    }
    self.deleteCinema=function(id){
      cinemaRequest.delete("cinema",id).then(function(response){
        alert("Deleted");
        self.res=response.data;
        self.load_cinemas();
      });
    }
    self.addMovie=function(movie) {
      var contains=false;
      self.ncinema.movies.forEach(element => {
        if (element._id == movie._id) {
          contains=true;
        }
      });
      if (!contains) {
        self.ncinema.movies.push(movie);
      }

    }
    self.removeMovie=function(index){
      self.ncinema.movies.splice(index,1);
    }

  });
