'use strict';

angular.module('tokobagas', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, FacebookProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
    
    //CORS
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = false;
    //facebook APP ID
    FacebookProvider.init('888819274486027');

  })
;
