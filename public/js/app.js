(function(){

'use strict';

//instantiate angular app and setup config for template routes
angular
.module('app', ['ngRoute','ngAnimate'])
.config(config);

//config function for routes
function config($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
	//Home page route
	.when('/', {
		templateUrl:'templates/home.html',
		controller: 'mainController'		
	})
	//when all else fails home page
	.otherwise({
		redirectTo: '/'
});


} //end function config
})(); //end self invoking function.