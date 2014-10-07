
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

function SecondCtrl ($scope) {
	$scope.data = Data;
}