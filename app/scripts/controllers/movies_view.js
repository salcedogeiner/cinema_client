'use strict';

/**
 * @ngdoc function
 * @name cinemaApp.controller:MoviesViewCtrl
 * @description
 * # MoviesViewCtrl
 * Controller of the cinemaApp
 */
angular.module('cinemaApp')
  .controller('MoviesViewCtrl', function (cinemaRequest) {
    var self = this;

    cinemaRequest.get("cinema","").then(function(response){
      self.cinemas=response.data;
    });
  });
