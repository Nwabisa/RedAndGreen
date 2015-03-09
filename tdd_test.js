TestMyCode.run("test hello", function(assert) {
	var result = helloWorld();
	// is the result as we expected?
	assert.equals("hello world!", result,"");
});
