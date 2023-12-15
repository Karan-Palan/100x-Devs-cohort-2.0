// Callbacks lead to unnecessary indentation

// This is called callback hell

function myOwnSetTimeout(fn, duration) {
    setTimeout(fn, duration);
  }
  
  myOwnSetTimeout(function() {
    console.log("log the first thing");
    myOwnSetTimeout(function() {
      console.log("log the second thing");
    }, 2000)
  }, 1000)

// Approach 2, using promises -- Basically syntactical sugar
// Syntax == Promise-resolve-.then

function myOwnSetTimeout(duration) {
  new Promise(function(resolve,)  {
    setTimeout(resolve, 1000)
  })
}

myOwnSetTimeout(1000).then(function(){
  console.log("x");
})


// or you can use asyncs--await
function myOwnSetTimeout(duration) {
  new Promise(function(resolve,)  {
    setTimeout(resolve, 1000)
  })
}

async function main() {
  await myOwnSetTimeout(1000)
  console.log("x");
}

