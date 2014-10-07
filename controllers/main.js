/**
 * FirstCtrl is the controller being supplied to index.html, passing $scope.data.message into document.
 * @param {object} $scope provides .data.message to main doc
 *
 * this global controller scope is deprecated in 1.3, not sure of migration fix
 */

var FirstCtrl = function($scope){
	$scope.data = {message: "Hello"};
}
