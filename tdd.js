var passes = 0;
var fail = 0;
var assert = {
	equals: function(expectedResult, returnResult) {
var rg = new RedOrGreen("mySquare");
		 if(expectedResult === returnResult){
		 	rg.makeGreen();
		 	

		 }
		 else if(expectedResult !== returnResult) {
            rg.makeRed();
          

		 }


}
};

var TestMyCode = {
	run: function(testdescription,testFunction ) {
		testFunction(assert);
	}
}
