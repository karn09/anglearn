
// create myApp service to share data model between controllers without parent scope
var myApp = angular.module('myApp', []);

myApp.factory('Data',function(){
	return { message: "I'm data from a service" };
})

// Injecting Data service into each controller as a parameter. 
// data.model is attached to an app service
function FirstCtrl ($scope, Data) {
	$scope.data = Data;
}

function SecondCtrl ($scope, Data) {
	$scope.data = Data;

	//define method on the scope, called from view by calling defined function reversedMethod()
	$scope.reversedMessage2 = function () {
		return $scope.data.message.split("").reverse().join("");
	};

	//cleaner way to define method on scope, is to pass the binding into the function, which will look like:
	$scope.reversedMessage = function(message) {
		return message.split("").reverse().join("");
	};

	
}