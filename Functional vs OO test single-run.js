	/*********************/
	/****** Helpers ******/
	/*********************/
	function startTimer(){
		return new Date().getTime();
	}
	
	function stopTimer(exampleName, startTime){
		var endTime = new Date().getTime();
		var difference = endTime - startTime;
		console.log(exampleName + ": " + difference + "ms");
		return difference;
	}
	
	function dummyFunc(){
		// Do some random meaningless math 
		// just to have something fun in the loop
		var a = 50000 * 10000 * 159753159753 / 951753951;
		return a;
	}
		
	/*********************/
	/******* Main ********/
	/*********************/
	function run(){
		var iterationCount = prompt('Enter iteration count');
		
		try{
			/****************** OO Style ********************/
			var startTime1 = startTimer();
			for (var i = 0; i < iterationCount; i++){
				//console.trace();
				dummyFunc();
			}
			stopTimer('Object Oriented', startTime1);
			
			
			/**************** Functional Style ***************/
			var startTime2 = startTimer();
			var recurse = function(n){
				//console.trace();
				if (n >= iterationCount) {
					return n;
				}
				else {
					dummyFunc();
					return recurse(n + 1);
				}
			};
			recurse(0);
			stopTimer('Functional', startTime2);
		} catch(e){
			console.log(e);
		}
	};