// Complete the js code
function Car(make, model) {
	make: "steel",
	model:"BMW",
	getMakeModel: function getMakeModel (getMakeModel){
		return getMakeModel;
	}	
}

function SportsCar(make, model, topSpeed) {
	make: "steel",
	model:"BMW",
	topSpeed: function topSpeed(topSpeed) {
		return topSpeed;
	}
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());
