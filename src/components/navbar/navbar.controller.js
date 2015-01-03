'use strict';

angular.module('tokobagas')
  .controller('NavbarCtrl', function ($scope, $rootScope, Facebook) {
    $scope.date = new Date();
    
    $scope.$watch(
    	function() {
        	return Facebook.isReady();
        },
    	function(newVal) {
        	if (newVal) {
        		$scope.fbReady = true;
        	}
        }
    );

    $scope.userIsConnected = false;
    Facebook.getLoginStatus(function(response) {
    	if (response.status === 'connected') {
        	$scope.userIsConnected = true;
    	}
    });

    $scope.doLogin = function() {
        if(!$scope.userIsConnected) {
       		Facebook.login(function(response) {
        		if (response.status === 'connected') {
            		$scope.logged = true;
            		//get fb user detail
            		$scope.me();
        		}
        	});
    	} else {
    		$scope.logged = true;
    		$scope.me();
    	}
	};

	$scope.me = function() {
    	Facebook.api('/me', function(response) {
        	$scope.$apply(function() {
            	$scope.user = response;
            	$rootScope.$broadcast('user:loggedin', $scope.user);
        	});
        });
    };

    $scope.doLogout = function() {
        Facebook.logout(function() {
        	$scope.$apply(function() {
            	$scope.user   = {};
            	$scope.logged = false;
            	$rootScope.$broadcast('user:loggedout', $scope.user);
        	});
        });
    };

  });
