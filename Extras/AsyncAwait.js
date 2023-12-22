// Real world usecase of Async await


const API_URL = "https://api.github.com/users/Karan-Palan"

async function handlePromise()  {
    const data = await fetch(API_URL);

    const jsonValue = await data.json()
    
    console.log(jsonValue);
    // fetch - response.json() - jsonValue
}   
handlePromise().catch(err => console.log(err));

// Async wait VS Promise.then() -- async await is a syntactical sugar over Promise.then()

// You don't have to do alot of promise cahining for async and await

