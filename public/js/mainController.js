(function(){
'use strict'

//initialize the angular module
angular.module('app')
.controller('mainController', ['$scope', '$location', '$http', function($scope, $location, $http){

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

NasaData();


}]);	//end controller
})(); //end self invoked function