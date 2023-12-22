// Callbacks

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfCubes(a, b) {
  let square1 = cube(a);
  let square2 = cube(b);
  return square1 + square2;
}

let ans = sumOfCubes(1, 2);
console.log(ans);

// Callback hell
function myOwnSetTimeout(fn, duration) {
  setTimeout(fn, duration);
}

myOwnSetTimeout(function () {
  console.log("log the first thing");
  myOwnSetTimeout(function () {
    console.log("log the second thing");
  }, 2000);
}, 1000);

// Promises -- cleaner way to call callbacks

function myOwnSetTimeout(duration) {
  let p = new Promise(function (resolve) {
    // after 1 second, call resolve
    setTimeout(resolve, 1000);
  });
  return p;
}

myOwnSetTimeout(1000)
  // .then method
  .then(function () {
    console.log("log the first thing");
  });

// Async await syntax
async function main() {
  await myOwnSetTimeout(1000);
  console.log("Ahead");
}
