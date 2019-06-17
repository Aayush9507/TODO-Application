const express = require('express')
const router = new express.Router()
const Task = require('../models/task')
module.exports = router

router.get('/tasks/:id', async (req,res) => {
    const _id = req.params.id

    try{
        const task = await Task.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.status(201).send(task)
    }
    catch(e){
        res.status(500).send(e)
    }
})


router.get('/tasks', async (req,  res) => {
    const tasks = await Task.find({})

    try{
        if(!tasks){
            return  res.status(400).send()
        }
        res.status(201).send(tasks)
    }
    catch(e){
        res.status(500).send(e)
    }
})

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try{
        await task.save()
        res.status(201).send(task)
    }
    catch(e){
        res.status(500).send(e)
    }
})



router.patch('/tasks/:id', async (req,res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['completed','desc']
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidUpdate){
        return res.status(400).send({error: 'Invalid Update'})
    }

    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true})

        if (!task){
            return res.status(404).send()
        }
        res.send(task)
    }
    catch(e){
        res.status(500).send(e)
    }
})



router.delete('/tasks/:id', async(req,res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }
    catch(e){
        res.status(500).send(e)
    }
})