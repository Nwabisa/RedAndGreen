//var backgroundColor = prompt("Enter colour");
var backgroundColor = document.getElementById("mySquare").style.backgroundColor = 'green';
//var id = prompt("Enter Id");
var id = document.getElementById("mySquare");

function setBackgroundColor (id, backgroundColor){

if(document.getElementById("mySquare").style.backgroundColor != 'green'){
window.alert("failure");

}else{

id.style.backgroundColor = backgroundColor;
       window.alert("success");
}

}