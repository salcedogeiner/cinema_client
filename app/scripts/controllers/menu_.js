'use strict';

/**
 * @ngdoc function
 * @name cinemaApp.controller:MenuCtrlCtrl
 * @description
 * # MenuCtrlCtrl
 * Controller of the cinemaApp
 */
angular.module('cinemaApp')
  .controller('MenuCtrlCtrl', function ($scope,$location) {

     $scope.loadUrl=function(url){
       $location.path(url);
     }
  });
