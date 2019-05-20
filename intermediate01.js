//Intermediate01
(function(){
	var text = "i am a web developer";
	document.write( text.charAt(0).toUpperCase() + text.slice(1));
}())

document.write("<br>")

//Intermediate02
 function grad(math, physics, english){
 	if (isNaN(math, physics, english)){
 		return "Not a number!"
 	}
 	var sum = math + physics + english;
 	var average = sum / 3
 	return "Sum" + sum + "<br>" + "Average" + average;
 }
 document.write(grad(3,4,5));