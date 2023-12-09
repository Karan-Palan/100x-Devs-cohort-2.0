// Length
/*
function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
  }
  getLength("Hello World", "World");
*/

// str.slice fnc takes everything from initial query to second last (0,5)=> till 4 output   

//.trim fnc takes trims the value from the beginning and the end

// Arrays new info

// pop removes from the end of the array whereas shift removes from the front

// unshift() -- basically adds a new elemetn at the start of the array
/* 
function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.unshift(element);
    console.log("After unshift:", arr);
  }
  unshiftExample([1, 2, 3], 0);
*/

// Classes — structure that is reusable (minimise the repeated logic) and used for alot of things, returns objects that are of the same kind
/* 
class Animal {
    constructor(name, legCount) {
      this.name = name
      this.legCount = legCount
    }
    describe() {
      return `${this.name} has ${this.legCount} legs`
    }
  }
  
  let Lion = new Animal("Sher", 4);
  console.log(Lion);
*/

// getYear gives you the year -1900 instead use getFullYear()

// JSON -- use stingify when sending data and parse when the data comes 

// Math function in JS
/*
function mathMethods(value) {
  console.log("Original Value:", value);

  let rounded = Math.round(value);
  console.log("After round():", rounded);

  let ceiling = Math.ceil(value); // returns an integer which is greater than or equal to the integer provided value
  console.log("After ceil():", ceiling);

  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  let randomValue = Math.random();
  console.log("After random():", randomValue);

  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);
*/