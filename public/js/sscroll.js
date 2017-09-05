(function(){
'use strict'


var mission = document.querySelector('#mission');

var exampleDestination = document.querySelector('#page2');

var handleClick = function(event) {
	event.preventDefault();

	smoothScroll(exampleDestination);
}; //end handleClick

mission.addEventListener('click', handleClick);

})(); //end self invoked function