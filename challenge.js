function atm(amount){
	var result1 = Math.floor(amount / 100);
	var remainder1 = amount % 100;

	var result2 = Math.floor(remainder1 / 50);
	var remainder2 = remainder1 % 50;

	var result3 = Math.floor(remainder2 / 20);
	var remainder3 = remainder2 % 20;

	var result4 = Math.floor(remainder3 / 10);
	var remainder4 = remainder3 % 10;

 document.write("You will have "+result1+" 100 notes<br>");
 document.write("You will have "+result2+" 50 notes<br>");
 document.write("You will have "+result3+" 20 notes<br>");
 document.write("You will have "+result4+" 10 notes<br>");
}
atm(2080);