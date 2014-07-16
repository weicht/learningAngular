var dataAppModule = angular.module('dataApp', []);

dataAppModule.controller('JsonpController',
	function($scope, $http) {
	
		$scope.title = 'Requesting json data with $http.jsonp() service';

		//http://api.npr.org/query?id=1001&apiKey=MDE1MTYxMTEwMDE0MDU0NjAxNzgxY2Y1YQ001&output=JSON&callback=JSON_CALLBACK
		$http.jsonp('http://api.npr.org/query', {
			params: {
			  id: 1001,
			  apiKey: 'MDE1MTYxMTEwMDE0MDU0NjAxNzgxY2Y1YQ001',
			  output: 'JSON',
			  callback: 'JSON_CALLBACK'	  
			}
		}).then( function ( response ) {
			// from looking at the json, the 'list' element is one level deeper and has the
			// story elements we will want in the UI
			$scope.shows = response.data.list;
//	alert('List: '+JSON.stringify(response.data.list));
		});
});


dataAppModule.controller('JsonController',
	function($scope, $http) {
	
		$http.get('/data', {
		}).then( function ( response ) {
			$scope.users = response.data.users;
//	alert('Users: '+JSON.stringify(response.data));
		});
});
