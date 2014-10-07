function CartController($scope) {
	$scope.items = [
		{title: 'Pain pots', quantity: 8, price: 3.95}, 
		{title: 'Polka dots', quantity: 17, price: 12.95}, 
		{title: 'Pebbles', quantity: 5, price: 6.95}
	];
/**
 * removes current index in items array
 * @param  {array} index current iteration value 
 * @return {array}       uses splice to remove 1 index in array
 */
	$scope.remove = function (index) {

		$scope.items.splice(index, 1);
	}
}