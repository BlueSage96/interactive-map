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
