function realTimeClock() {
	var rtClock = new Date();
	var hours = rtClock.getHours();
	var minutes = rtClock.getMinutes();
	var seconds = rtClock.getSeconds();

	//Add AM and PM system
	var AM_PM = (hours < 12) ? "AM" : "PM";

	//convert the hours component to 12-hour formattedDate
	hours = (hours > 12) ? hours - 12 : hours;

	var dateObj = new Date();
	var month = dateObj.getMonth() + 1; //months from 1-12
	var day = dateObj.getDate();
	var year = dateObj.getFullYear();

	newdate = month + " / " + day + " / " + year + " - ";

	//Pad the hours, minutes, and seconds with leading zeros
	hours = ("0" + hours).slice(-2);
	minutes = ("0" + minutes).slice(-2);
	seconds = ("0" + seconds).slice(-2);

	//Display the rtClock
	document.getElementById("clock").innerHTML = newdate + " " + hours + " : " + minutes + " : " + seconds + " " + AM_PM;
	var t = setTimeout(realTimeClock, 500);
}

function darkMode() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}

function placeIcons() {
	//nav 57 pixels = 0.251101321585 in
	//get the x & y values of my map in Photoshop and then guess the ones for my symbols
	//also assigned id(s) for each one
	const badge = document.getElementsByClassName("badge");
	const victim = document.getElementsByClassName("victim_symbol");
	const riots = document.getElementsByClassName("fire");
	const protest = document.getElementsByClassName("fist");

	const iconArray = [badge, victim, riots, protest];

	for (i = 0; i < iconArray.length; i++) {
		var icon = document.createElement("icon");
		icon = iconArray;
		// icon.src = "images/badge.svg" + i;
		document.body.appendChild(icon);
	}
}
