//Create an object that simulates a class representing a car with properties like make, model, and year. Add a method to start the car.

const car = {
  make: "Toyota",
  model: "Mini",
  year: 2020,
  start: function () {
    console.log("Start the car");
  },
};
car.start()

//Extend the previous car class object with a method to drive the car. Print a message when you start and drive the car instance.

const car = {
  make: "Toyota",
  model: "Mini",
  year: 2020,
  start: function () {
    console.log("Start the car");
  },
  drive: function () {
    console.log("Drive the car");
  },
};


car.drive()