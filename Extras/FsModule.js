const fs = require("fs");

fileContents = fs.readFileSync("./a.txt", "utf-8"); // For reading the file, sync way of reading the file
console.log(fileContents);

fs.readFile("a.txt", flag("a") (error, data) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log(data)
    }
})

fs.writeFileSync("a.txt", "Bye")

fs.writeFile("a.txt", "Understood fs module", (error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("Overwritten")
    }
})