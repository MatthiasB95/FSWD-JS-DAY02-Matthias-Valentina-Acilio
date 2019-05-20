var arr = [7,5,3,6,2];
var counter = 0;

do {
	counter = 0;
	
	for (i = 0; i <= arr.length; i++) {
		var a = arr[i];
		var b = arr[i+1];
		if (a>b) {
			arr[i+1] = a;
			arr[i] = b;
			counter++
		}
	}
} while (counter != 0)

	document.write(arr+"<br>");
	document.write(counter);
