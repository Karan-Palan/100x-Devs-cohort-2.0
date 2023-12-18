// HTTP protocol
/*
1. Browser parses the URL
2. Does a DNS Lookup (converts google.com to an IP)
3. Establishes a connection to the IP (does handshake...)
*/


// Program for a hospital

const express = require("express");
const app = express;

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function(req,res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i =0; i<johnKidneys; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        johnKidneys,
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthKidneys
    })
})

app.post("/", function(req,res) {
    const isHealthy = req.body.isHealthy;
    users.kidneys[0].push({
        healthy:isHealthy
    });
    res.json({
        msg : "Done!"
    })
})

app.put("/", function(req,res) {
    for(let i=0; i<users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true
    }
    res.json();
})

app.delete("/", function(req, res) {
    const newKidneys = [];
    for(let i=0; i<users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push ({
                healthy:true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "done"});
})

app.listen(3000);