const mongoose = require("mongoose");

// Connection setup
const MONGODB_URL = "mongodb+srv://ragunanthan:sece2021@cluster0.swyryga.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URL);

// User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

// Task Schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    descrption: {
        type: String
    },
    date: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }
});




const Task = mongoose.model('Task', taskSchema);


const stickyNotesSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }
})

const stickWall = mongoose.model('sticky', stickyNotesSchema)
console.log("connection created successfully");

module.exports = {
    User,
    Task,
    stickWall
};