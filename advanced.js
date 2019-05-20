//Advanced01
function minutesToHours(minutes){
	var min = minutes % 60;
	var h = Math.floor(minutes / 60);
	return minutes + "=" + h + "hours" + min + "minutes"
}
document.write(minutesToHours(200));
document.write("<br>")
//Advanced02
(function(date){
	
	date.setDate(date.getDate() - 1);
	document.write(date.toDateString());
}(new Date()));






