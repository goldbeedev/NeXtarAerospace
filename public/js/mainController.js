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
	}); //end function respons

} //end function NasaData

$scope.testfunc = function(){
	// $scope.testlon = 100.75;
	// $scope.testlat = 1.5;
	// question mark marks beginning of query string, & sign separates indidvual variables within the string
	$http.get("https://api.nasa.gov/planetary/earth/imagery?lon=" + $scope.testlon + "&lat=" + $scope.testlat + "&date=2014-02-01&cloud_score=True&api_key=e9i490OQTmaJm70cRYYo5LiyhG9UWQ9j0Uxl8xoQ")
	.then(function(response){
		console.log(response);
		console.log("this is the testlon data: " + $scope.testlon);
		$scope.imagedata = response.data
		console.log("this is the earth imagery data: " + $scope.imagedata);
		$scope.test2 = $scope.imagedata.url;
	}); //end $http.get function(response)
	console.log("test func working"); 
} //end testfunc

$scope.anotherAPICall = function(){
	$scope.yyyy = 2014;
	$scope.mm = 1;
	$scope.dd = 24;
	$scope.camera = "fhaz";
	// question mark marks beginning of query string, & sign separates indidvual variables within the string
	$http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + $scope.yyyy + "-" + $scope.mm + "-" + $scope.dd + "camera=" + $scope.camera + "&api_key=e9i490OQTmaJm70cRYYo5LiyhG9UWQ9j0Uxl8xoQ")
	.then(function(response){
		console.log(response);
		$scope.imagedata = response.data
		console.log("this is the mars rover data: " + $scope.imagedata);
	}); //end $http.get function(response)
	console.log("test func working"); 
} //end testfunc

NasaData(); //calling the Nasa APOD api picture for testing purposes, may have this be the default API call upon page load.


}]);	//end controller
})(); //end self invoked function