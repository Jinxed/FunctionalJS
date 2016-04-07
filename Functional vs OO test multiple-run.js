	/*********************/
	/****** Helpers ******/
	/*********************/
	function startTimer(){
		return new Date().getTime();
	}
	
	function stopTimer(exampleName, startTime){
		var endTime = new Date().getTime();
		var difference = endTime - startTime;
		//console.log(exampleName + ": " + difference + "ms");
		return difference;
	}
	
	function dummyFunc(){
		// Do some random meaningless math 
		// just to have something in the loop
		//var a = 50000 * 10000 * 159753159753 / 951753951;
		var a = 50 + 100;
		return a;
	}
	
	function avg(arr){
		var sum = 0;
		for (var ii = 0; ii<arr.length; ii++){
			sum += arr[ii];
		}
		var avg = sum / arr.length;
		return avg;
	}
	
	var ooTimes = [];
	var funcTimes = [];
		
	/*********************/
	/******* Main ********/
	/*********************/
	function run(){
		var iterationCount = 12345;//prompt('Enter iteration count');
		var broadIterationCount = 50000;
		
		for (var jj = 0; jj < broadIterationCount; jj++) {
			/****************** OO ********************/
			var startTime1 = startTimer();
			for (var i = 0; i < iterationCount; i++){
				dummyFunc();
			}
			ooTimes.push(stopTimer('Object Oriented', startTime1));
			
			/**************** Functional ***************/
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
			funcTimes.push(stopTimer('Functional', startTime2));
		}
		
		console.log("Object oriented: " + avg(ooTimes) + ", Functional: " + avg(funcTimes));
	};
	
	run();