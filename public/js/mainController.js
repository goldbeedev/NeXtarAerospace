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

$scope.camera = null;

//instantiate cameraCode on the scope to manipulate what code is chosen
$scope.cameraCode = null;

$scope.cams = [
	{name: "Front Hazard Avoidance Camera", code: "fhaz"},
	{name: "Rear Hazard Avoidance Camera", code: "rhaz"},
	{name: "Mast Camera", code: "mast"},
	{name: "Chemistry and Camera Complex", code: "chemcam"}
]

$scope.toggleDisplay = function(index) {
 console.log("This is the current cam code: " + $scope.cams[index].code);
}

console.log("these are the cams on the scope " + $scope.cams[0].name);

$scope.rovercam = function(index){
//when cam is changed grab that options index code property and set it to camera code scope, 
console.log("This is the current cam code: " + $scope.cams[index].code);
}

$scope.anotherAPICall = function(){
	// $scope.yyyy;
	// $scope.mm;
	// $scope.dd;
	// $scope.camera = "fhaz";
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