function countDown(time){
	var intervalID = setInterval(function() {
		if(time === 0){
			clearInterval(intervalID);
			console.log("Ring Ring Ring!!!");
			return;
		}
		else
			console.log("Timer: " + time);
		time--;
	}, 1000);
}