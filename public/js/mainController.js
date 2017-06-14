(function(){
'use strict'

//initialize the angular module
angular.module('app')
.controller('mainController', ['$scope', '$location', '$http', '$log', function($scope, $location, $http, $log){

//set location to equal $location for data binding on the template
$scope.$location = $location;

function NasaData(){
	$http.get("https://api.nasa.gov/planetary/apod?api_key=e9i490OQTmaJm70cRYYo5LiyhG9UWQ9j0Uxl8xoQ")
	.then(function(response){
		console.log(response);
		$scope.test = response.data;
		$scope.test2 = $scope.test.hdurl;
		console.log($scope.test);
		console.log($scope.test2);
	}); //end function response

} //end function NasaData

$scope.testfunc = function(){
	$http.get("https://api.nasa.gov/planetary/earth/imagery?api_key=e9i490OQTmaJm70cRYYo5LiyhG9UWQ9j0Uxl8xoQ")
	.then(function(response){
		$scope.imagedata = response.data
		console.log("this is the earth imagery data: " + $scope.imagedata);
	}); //$http.get function(response)
	console.log("test func working"); 
} //end testfunc

NasaData(); //calling the Nasa APOD api picture for testing purposes, may have this be the default API call upon page load.


}]);	//end controller
})(); //end self invoked function