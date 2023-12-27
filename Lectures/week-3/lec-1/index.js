// Standard -- No middlewares

const express = require('express');

const app = express();

app.get("/health-checkup", (req, res)=> {
    const username =  re.headers.username
    const password =  re.headers.password

    if (username != "karan" || password != "pass") {
        res.status(400).json("Something up with your inut")
    }

    if (username === "karan" && password === "pass") {
        res.send("Kidney ok")
    }
})

// Create functions at top so that you dont write the saem code again and again

// app.use() -- After this, any request that comes you write will first go through the middleware

// It is your job to do input validation so that your server does not crash

// Global catches -- a middleware at the end of the codebase which will take 4 functions and hadle all the errors of the website





