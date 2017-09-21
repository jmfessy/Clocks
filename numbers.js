var myarray = ["fuck","you"];

function setup() {
  createCanvas(1000,1000);
  textSize(20);
  textFont("Comic Sans MS");
  var 
	linelength = 0, // assign each number a linelength
	endCanvas = 1000,
	s = 0,
	m = 0,
	h = 0;
	
}

function draw(){
background(50);
  var date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();


//seconds
if (s == seconds){
	print(seconds);
	text(myarray, 20,20,1000,1000);
}
else{
	fill(0);
	text("help", 20,20,1000,1000);
	append( myarray, seconds);
	text(str(myarray), 20, 20, 1000, 1000);
	s = seconds;
}

//minutes
if (m == minutes){

}
else{
append(myarray, nf(minutes));
m = minutes;
text(nf(myarray), 10, 10, 1000, 1000);
}

//hours
if (h == hours){

}
else{
append(myarray, nf(hours));
text(nf(myarray), 10, 10, 1000, 1000);
h = hours;
}


//if (seconds > 9) {
//	linelength = linelength + 2
//	}
//	else{
//	linelength = linelength + 1
//	}
//if (linelength > endCanvas ){
//	linelength = 0;
//}


} 