function something() {
	return true
}
module.exports = {
	something: something
}


// var workFunc = () => {var snd = new Audio("Britney Spears - Work Bch.mp3")
// 		snd.play()}
// var linkinFunc = () => {var snd = new Audio("07 - Faint.m4a")
// 		snd.play()}
// var bushFunc = () => {var snd = new Audio("12 - X-Girlfriend.m4a")
// 		snd.play()}
// var beatlesFunc = () => {var snd = new Audio("17 - Her Majesty.mp3")	// 23
		// snd.play()}


// var counter

// let setUpTimer = (counter) => {
// 	timeRemaining = new Date(counter)
// 	counter = (counter / 1000) - 1
// 	let timerId = setInterval(() => {
// 		secs = counter % 60;
// 	  mins = (counter-secs)/60;
// 		counter--
// 		document.getElementById("readout").innerHTML = `${(mins < 10)  ? "0" + mins : mins}:${(secs < 10)  ? "0" + secs : secs}`
// 	}, 1000)
// 	return timerId
// }

// let pauseTimer = (timerId) => {
// 	clearInterval(timerId)
// }

// let pwm = (duration1, action1, duration2, action2) => { 
// 	return () => {
// 		pauseTimer(timerId); 
// 		timerId = setUpTimer(duration1); 
// 		action1()
// 		setTimeout(   pwm(duration2, action2, duration1, action1),   duration1   )
// 	}
// }

// let timerId = setUpTimer()
// pauseTimer(timerId)


// document.addEventListener("DOMContentLoaded", function(event) {
// 	var workButton = document.getElementById("workStart");
// 	var breakButton = document.getElementById("breakStart");

// 	workButton.onclick = pwm(3120000, bushFunc, 1020000, beatlesFunc)
// 	breakButton.onclick = pwm(1020000, beatlesFunc, 3120000, bushFunc)

// });
