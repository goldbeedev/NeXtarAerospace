(function(){
'use strict'

//initialize the angular module
angular.module('app')
.controller('mainController', ['$scope', '$location', function($scope, $location){

//set location to equal $location for data binding on the template
$scope.$location = $location;






}]);	//end controller
})(); //end self invoked function