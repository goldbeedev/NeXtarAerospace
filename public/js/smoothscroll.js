(function(){
'use strict'

var smoothScroll = require('smoothscroll');

var mission = document.querySelector('#triumph');

var exampleBtn = document.querySelector('.example-button');
var exampleDestination = document.querySelector('#page2');

var handleClick = function(event) {
	event.preventDefault();

	smoothScroll(exampleDestination);
};

mission.addEventListener('click', handleClick);

})(); //end self invoked function