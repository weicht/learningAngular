var basicAppModule = angular.module('basicApp', []);

basicAppModule.controller('BasicController',
	function($scope) {
		var someText = {};
		someText.message = 'Basic Angular structure.';
		$scope.someText = someText;
});