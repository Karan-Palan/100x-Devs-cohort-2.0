const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  Admin.create({
    username: username,
    password: password,
  })
    .then(() => {
      res.json({ msg: "Done" });
    })
    .catch(() => {
      res.json({ msg: "Not created" });
    });
});

app.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  const newCourse = await Course.create({
    title: title,
    imageLink: imageLink,
    price: price,
    description: description,
  });
  res.json({
    msg: "Created sucessfully",
    courseId: newCourse._id, // MongoDb creates a random Id
  });
});

app.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find({}).then(() => {
    res.json({
      courses : response
    });
  });
});

module.exports = router;
