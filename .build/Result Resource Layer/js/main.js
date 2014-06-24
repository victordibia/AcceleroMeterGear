//Gear 2 Swipe Gesture Tutorial
//----------------------------------

//Copyright (c)2014 Dibia Victor, Denvycom
//Distributed under MIT license

//https://github.com/chuvidi2003/GearSwipeTutorial
$(window).load(function(){

	//This listens for the back button press
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back")
			tizen.application.getCurrentApplication().exit();
	});

	window.addEventListener('devicemotion', function(e) {
		ax = e.accelerationIncludingGravity.x;
		ay = -e.accelerationIncludingGravity.y;
		az = -e.accelerationIncludingGravity.z;
		document.getElementById("xaccel").innerHTML =  'X : ' +  ax;
		document.getElementById("yaccel").innerHTML = 'Y : ' + ay;
		document.getElementById("zaccel").innerHTML = 'Z : ' + az;

	}); 


});