'use strict';

/**
 * @ngdoc overview
 * @name angularCordovaApp
 * @description
 * # angularCordovaApp
 *
 * Main module of the application.
 */
angular
  .module('angularCordovaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCordova'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
