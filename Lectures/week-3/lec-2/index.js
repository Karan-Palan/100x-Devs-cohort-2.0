const jwt = require("jsonwebtoken");

// Decode, verify , generate

const value = {
  name: "Karan",
  password: 13566163545453,
};

// generate
const token = jwt.sign(value, "secret");
console.log(token);

const jwtVerify = jwt.verify(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiS2FyYW4iLCJwYXNzd29yZCI6MTM1NjYxNjM1NDU0NTMsImlhdCI6MTcwNDI1MjMzNn0.wjWfXIgm_MhlZfSKtz338NToRH5L1ODt1QYp9VpZUGU", "secret"
);
console.log(jwtVerify)
