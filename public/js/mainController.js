(function(){
'use strict'

//initialize the angular module
angular.module('app')
.controller('mainController', ['$scope', '$location', '$http', '$log', function($scope, $location, $http, $log){

//set location to equal $location for data binding on the template
$scope.$location = $location;

//append function to append class that hides the nav links for responsive design.
function navAppend() {
	var navlinks = angular.element(document.querySelector('.navlinks'));
	navlinks.addClass('js');

} //end function navAppend

//function to get the astronomy photo of the day
function NasaData(){
	$http.get("https://api.nasa.gov/planetary/apod?api_key=e9i490OQTmaJm70cRYYo5LiyhG9UWQ9j0Uxl8xoQ")
	.then(function(response){
		console.log(response);
		//nasa apod response data.
		$scope.apoddata = response.data;
		//sets the image window on mission page to the image returned from the api call.
		$scope.imagewindow = $scope.apoddata.hdurl;
		console.log($scope.imagewindow);
	}); //end function respons

} //end function NasaData

$scope.camera = null;

//instantiate cameraCode on the scope to manipulate what code is chosen
$scope.cameraCode = null;

//create cams array with camera objects.
$scope.cams = [
	{name: "Front Hazard Avoidance Camera", code: "fhaz"},
	{name: "Rear Hazard Avoidance Camera", code: "rhaz"},
	{name: "Mast Camera", code: "mast"},
	{name: "Chemistry and Camera Complex", code: "chemcam"},
	{name: "Mars Hand Lens Imager", code: "mahli"},
	{name: "Mars Descent Imager", code: "mardi"},
	{name: "Navigation Camera", code: "navcam"},
]

//instantiate curCam on the scope
$scope.curCam = $scope.cams[0];


$scope.rovercam = function(){
//when cam is changed grab that options index code property and set it to camera code scope, 

//store selected cam index as a variable 
console.log($scope.curCam);

// console.log("This is the current cam code: " + $scope.cams[camIndex].code); //searching for the code property of the cam index we are on.
}

$scope.yyyy = "Year";
$scope.mm = "Month";
$scope.dd = "Day";

//instantiate rover photos array
$scope.roverphotos = [];

//starting index on the scope for changing purposes
var startingIndex = 0

$scope.anotherAPICall = function(){
	$scope.roverphotos = [];
	startingIndex = 0;
	// $scope.yyyy;
	// $scope.mm;
	// $scope.dd;
	// question mark marks beginning of query string, & sign separates indidvual variables within the string
	$http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + $scope.yyyy + "-" + $scope.mm + "-" + $scope.dd + "&camera=" + $scope.curCam + "&api_key=e9i490OQTmaJm70cRYYo5LiyhG9UWQ9j0Uxl8xoQ")
	.then(function(response){

		console.log(response);
		$scope.roverdata = response.data
		console.log("this is the mars rover data: " + $scope.roverdata);
		

		console.log("This is the length of the rover photos: " + $scope.roverdata.photos.length);

		//for loopo to push images returned 
		for (var i = 0; i < $scope.roverdata.photos.length; i++) {
			//this isnt working below ---- figure out how to just push the img_src!
			$scope.roverphotos.push($scope.roverdata.photos[i].img_src);
		}
		console.log("These are the pushed rover photos: " + $scope.roverphotos);
		console.log("This is the rover photos length: " + $scope.roverphotos.length);

		//just testing the image with the first item in the array, maybe use a loop to push all images returned into their own array and display a gallery-
		$scope.imagewindow = $scope.roverphotos[startingIndex];
		//jquery makes our lives easy showing the gallery scroll arrows.
		if ($scope.roverphotos.length > 1) {
			$(".arrow").show();
	}
		// angular.element(document).find("i").removeClass("hidden");
	}); //end $http.get function(response)
	console.log("test func working"); 
} //end anotherAPICall


//***********************************************************
//***********************************************************
//*********** NOTES *****************************************
//add errors for incorrect date ranges on the rover photo viewer!
//maybe add an image counter for the gallery that shows up?
//Prevent image window from refreshing and date range selected on rover photos when navigating different sections.
//Fix smoothscroll stuff
//Make gallery arrows hidden until rover is selected (maybe add fade effects?).
//style the fuckin site!

$scope.ScrollRight = function(){
	//set roverlength variable
	var roverlength = $scope.roverphotos.length;
	console.log("var roverlength test:" + roverlength);
	//increment the starting index to scroll photos
	startingIndex = startingIndex + 1;
	console.log($scope.test2);
	$scope.imagewindow = $scope.roverphotos[startingIndex];

	console.log("this is the starting index: " + startingIndex);
	//if the photo is at the last index in the gallery start over at the first photo.
	if (startingIndex === $scope.roverphotos.length - 1) {
		console.log("The current image is the last in the gallery");
		startingIndex = -1;
	} else {
		console.log("not at the last image yet");
	}
	//end else
} //end ScrollRight

$scope.ScrollLeft = function(){
	//if the starting index is the starting index make it the last one in the array
	if (startingIndex === 0) {
		startingIndex = $scope.roverphotos.length -1;
	} else {
		startingIndex = startingIndex - 1;
	}
	//set the test2 image to the correct index image
	$scope.imagewindow = $scope.roverphotos[startingIndex];

} //end ScrollLeft

NasaData(); //calling the Nasa APOD api picture for testing purposes, may have this be the default API call upon page load.
navAppend(); //calling navAppend for media query mobile optimization.

//smoothscroll

var mission = document.querySelector('#mission');
var triumph = document.querySelector('#triumph');
var projection = document.querySelector('#projection');

// var exampleDestination = document.querySelector('#page1');

// var handleClick = function(event) {
// 	event.preventDefault();

// 	smoothScroll(exampleDestination);
// }; //end handleClick

mission.addEventListener('click', function(event){
	event.preventDefault();
	smoothScroll(document.querySelector('#page1'));
});

triumph.addEventListener('click', function(event){
	event.preventDefault();
	smoothScroll(document.querySelector('#page2'));
});

projection.addEventListener('click', function(event){
	event.preventDefault();
	smoothScroll(document.querySelector('#page3'));
});


}]);	//end controller
})(); //end self invoked function