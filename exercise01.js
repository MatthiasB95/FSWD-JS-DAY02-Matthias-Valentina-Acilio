//Basic1
function crystalGazer(children, partner, location, job){

	
	return "You will be a " + job + " in " + location + 
	" and married to " + partner + " with " + children + ".";
	
}
 document.write(crystalGazer("2", "Susi", "Vienna", "Web Developer"));
 document.write("<br>")

//Basic 2
function ageCalculator(birth_year, current_year){
	var age1 = current_year - birth_year;
	var age2 = current_year - birth_year + 1;
	return "You are either " + age2 + "or " + age1;
}
document.write(ageCalculator(1995, 2019));
document.write("<br>");
//Basic3
var year = new Date().getFullYear();

function newageCalculator(birth_year){
	var newage1 = year - birth_year;
	var newage2 = year - birth_year + 1;
	return "You are either " + newage2 + "or " + newage1;
}
document.write(newageCalculator(1995));
document.write("<br>");
//Baxic4
function degreeToRadian(degree){
	var radian = degree * (Math.PI/180);
	return radian
}
document.write(degreeToRadian(90));
document.write("<br>");

//Basic5
function box(width, height, depth){
	var area = width * height;
	var volume = width * height * depth;
	 var result = [area, volume];
	 return result;
}
document.write(box(2,7)[0]);
document.write("<br>");
document.write(box(2,7,5)[1]);


