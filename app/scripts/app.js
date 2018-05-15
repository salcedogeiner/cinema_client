'use strict';

/**
 * @ngdoc overview
 * @name cinemaApp
 * @description
 * # cinemaApp
 *
 * Main module of the application.
 */
angular
  .module('cinemaApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/', {
        templateUrl: 'views/movies_view.html',
        controller: 'MoviesViewCtrl',
        controllerAs: 'moviesView'
      })
      .when('/crud_movies', {
        templateUrl: 'views/crud_movies.html',
        controller: 'CrudMoviesCtrl',
        controllerAs: 'crudMovies'
      })
      .when('/crud_cinemas', {
        templateUrl: 'views/crud_cinemas.html',
        controller: 'CrudCinemasCtrl',
        controllerAs: 'crudCinemas'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
