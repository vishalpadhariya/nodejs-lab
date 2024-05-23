const EventEmitter = require("node:events");
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("trafficLight", () => {
	console.log("It's Red, Please stop!");
	console.log("Wait! Few Seconds left...");
	/** After 3 Seconds the timer will ticking to turn lights to green */
	let a = 5;
	setTimeout(() => {
		/** Timer ticking for last 5 seconds */
		const trafficInterval = setInterval(() => {
			console.log(a);
			if (a == 1) {
				clearInterval(trafficInterval);
				console.log("Let's Go!");
			}
			a--;
		}, 1000);
	}, 3000);
});

myEmitter.emit("trafficLight");
