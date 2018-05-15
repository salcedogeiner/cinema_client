'use strict';

/**
 * @ngdoc service
 * @name cinemaApp.datafilms
 * @description
 * # datafilms
 * Service in the cinemaApp.
 */
angular.module('cinemaApp')
  .factory('cinemaRequest', function ($http) {
    // Service logic
    // ...
    var path = "http://127.0.0.1:3000/";
    // Public API here
    return {
      get: function (tabla,params) {
        return $http.get(path+tabla+"/?"+params);
      },
      post: function (tabla,elemento) {
        return $http.post(path+tabla,elemento);
      },
      put: function (tabla,elemento) {
        return $http.put(path+tabla,elemento);
      },
      delete: function (tabla,id) {
        return $http.delete(path+tabla+"/"+id);
      }
    };
  });
