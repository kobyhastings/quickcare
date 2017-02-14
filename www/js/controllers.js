var app = angular.module('QuickCareApp', []);

app.controller('LoginController', function ($scope, $http, $window) {

	Parse.initialize("Wj1kvASxa8H3OWEBEfnU3wUHShFPouztcJ8fIGqG", "ciuoDHJMUQ3CHpavURDZzoMu9uut5bwr5AbuYTp7");

	$scope.config = {
		appUrl: 'http://quickcare.parseapp.com'
	};
	$scope.login = {};
	$scope.invalidCredentials = false;
	$scope.customError = '';

	$scope.getParameterByName = function(name) {
		var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
		return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
	}
	if($scope.getParameterByName('loggedin') == 'false')
		$scope.customError = "You must be logged in to use this site.";

	$scope.validateUser = function() {
		Parse.User.logIn($scope.login.username, $scope.login.password, {
	     	success: function(results) {
	         window.location = $scope.config.appUrl + "/dashboard.html";
	     	},
	     	error: function() {
				$scope.invalidCredentials = true;
	     		$scope.$apply();
	     	}
	 	});
	}
});

app.filter('iif', function () {
   return function(input, trueValue, falseValue) {
        return input ? trueValue : falseValue;
   };
});
