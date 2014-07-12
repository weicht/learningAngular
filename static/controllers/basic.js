var basicAppModule = angular.module('basicApp', []);

basicAppModule.controller('BasicController',
	function($scope) {
		var someText = {}; //hashmap that could hold other strings if we needed
		someText.message = 'Basic Angular stuff';
		$scope.someText = someText;
		
		var beers = [
			{title: 'Pale Ale', price: 4.50},
			{title: 'Wheat Beer', price: 5.50},
			{title: 'PBR', price: 2.50}];
		$scope.beers = beers;
		
		$scope.newBeer = "needANewBeer";
		
		$scope.remove = function(index){
			if(confirm('Remove this beer?')){
				$scope.beers.splice(index, 1);
			}
		};

		$scope.addBeer = function(name, price){
			if(confirm('Add '+name+' for '+price+'?')){
				$scope.beers.splice(beers.length, 0, {title: name, price: price});
			}
		};

});

