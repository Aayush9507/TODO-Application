const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')


const user1id = new mongoose.Types.ObjectId()

const user1 = {
    _id: user1id,
    name:"ramesh",
    email:"mike22@gmail.com",
    password:"mike123",
    tokens:[{
        token: jwt.sign({_id: user1id}, process.env.JWT_TOKEN)
    }]
}

const user2id = new mongoose.Types.ObjectId()

const user2 = {
    _id: user2id,
    name:"suresh",
    email:"suresh22@gmail.com",
    password:"suresh123",
    tokens:[{
        token: jwt.sign({_id: user2id}, process.env.JWT_TOKEN)
    }]
}

const user3id = new mongoose.Types.ObjectId()

const user3 = {
    _id: user3id,
    name:"rakesh",
    email:"rakesh22@gmail.com",
    password:"rakesh123",
    tokens:[{
        token: jwt.sign({_id: user3id}, process.env.JWT_TOKEN)
    }]
}


const task1 = {
    _id: new mongoose.Types.ObjectId(),
    desc:'first task',
    completed:false,
    owner:user1._id
}


const task2 = {
    _id: new mongoose.Types.ObjectId(),
    desc:'second task',
    completed:true,
    owner:user2._id
}


const task3 = {
    _id: new mongoose.Types.ObjectId(),
    desc:'third task',
    completed:false,
    owner:user3._id
}

const setupDatabase = async() => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(user1).save()
    await new User(user2).save()
    await new User(user3).save()
    await new Task(task1).save()
    await new Task(task2).save()
    await new Task(task3).save()
}



module.exports = {
    user1id,
    user1,
    user2id,
    user2,
    user3id,
    user3,
    setupDatabase
}