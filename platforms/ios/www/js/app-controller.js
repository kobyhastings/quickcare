var app = angular.module('QuickCareApp');

app.controller('AppController', function ($scope, $http, $window) {
	
	alert('HERE');

	// Parse.initialize("Wj1kvASxa8H3OWEBEfnU3wUHShFPouztcJ8fIGqG", "ciuoDHJMUQ3CHpavURDZzoMu9uut5bwr5AbuYTp7");
	// $scope.config = {
	// 	appUrl: 'http://quickcare.parseapp.com'
	// };
	// $scope.appMode = false;

	// $scope.user = {
	// 	name: null,
	// 	occupation: null,
	// 	email: null,
	// 	password: null,
	// 	passwordConfirm: null
	// };

	// $scope.setOccupation = function(occupation) {
	// 	$('.occupationSelection.nurse').removeClass('selected');
	// 	$('.occupationSelection.doctor').removeClass('selected');
	// 	$('.occupationSelection.fire').removeClass('selected');
	// 	$('.occupationSelection.lawenforcement').removeClass('selected');
	// 	$('.occupationSelection.other').removeClass('selected');

	// 	$('.occupationSelection.'+occupation).addClass('selected');
	// 	$scope.user.occupation = occupation;
	// }

	// $scope.saveUser = function() {
	// 	alert(device.uuid);
	// 	if($scope.user.password == $scope.user.passwordConfirm) {
	// 		if(!$scope.user.occupation)
	// 			alert("Please select your occupation.");
	// 		else if(!$scope.user.name)
	// 			alert("Please enter your name.");
	// 		else if(!$scope.user.email)
	// 			alert("Please enter your email.");
	// 		else if(!$scope.user.password)
	// 			alert("Please enter your password.");
	// 		else {
	// 			Parse.User.signUp($scope.user.email, $scope.user.password, {name: $scope.user.name, occupation: $scope.user.occupation, uuid: device.uuid}, {
	// 	        	success: function() {  
	// 	            $scope.appMode = true;
	// 	            $scope.$apply();
	// 	        	},
	// 	        	error: function(error) {
	// 					alert("An error occured while trying to create your account. Please try again.");
	// 	        	}
	// 	    	});
	// 		}
	//     } else
	//     	alert("Please confirm your password correctly.");
	// }

	// $(document).ready(function() {
	// 	$('.ui-loader').remove();
	// });

});

app.filter('iif', function () {
   return function(input, trueValue, falseValue) {
        return input ? trueValue : falseValue;
   };
});
