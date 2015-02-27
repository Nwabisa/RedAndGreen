var rg = new RedOrGreen("myElement");

rg.makeGreen();

if (document.getElementById('myElement').style.backgroundColor === "green") {
	alert("Box is green");
} else{
	alert("Box not green");
};

rg.makeRed();

if (document.getElementById('myElement').style.backgroundColor === "red") {
	alert("Box is red");
} else{
	alert("Box not red");
};