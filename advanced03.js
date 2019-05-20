function color() {
	var ram = Math.floor(Math.random()*256);
	var ram1 = Math.floor(Math.random()*256);
	var ram2 = Math.floor(Math.random()*256);
	var x = "rgb(" + ram + ", " + ram1 + ", " + ram2 + ")";
document.write(x);

	document.body.style.background = x;
	}

color();