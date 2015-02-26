  var rg = new RedOrGreen("myElement");


   rg.makeGreen("myElement");
   if(document.getElementById("myElement").style.backgroundColor === 'green'){
   	window.alert("ok");
   }else{
  window.alert("not ok");

   }

   
   rg.makeRed("myElement");
   
if(document.getElementById("myElement").style.backgroundColor === 'red'){
   	window.alert("ok");
   }else{
  window.alert("not ok");
}