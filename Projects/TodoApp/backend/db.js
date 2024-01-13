
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://KaranPalan:y57DxYsnZTQUrNb3@cluster0.niccpsb.mongodb.net/?retryWrites=true&w=majority");


const todoSchema = mongoose.Schema({
    title : String,
    completed : Boolean,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todoSchema,
    todo
}