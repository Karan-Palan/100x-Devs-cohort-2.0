const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://KaranPalan:y57DxYsnZTQUrNb3@cluster0.niccpsb.mongodb.net/?retryWrites=true&w=majority"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username : String,
  password : String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username : String,
  password : String,
  purchasedCourses : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Course'
  }]

  
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};