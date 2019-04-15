const express = require("express");
const router =  new express.Router();
const Room  =  require('../models/room');


router.get('/', async (req, res) => {
    
    try {
        const task = await Room.find()

        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/task',async(req,res)=>{

    res.send({	"title": "this room need to sale",
    "description": "1234",
    "url":"https://s-ec.bstatic.com/images/hotel/max1024x768/731/73118462.jpg",
	"address": "Phuong tan thinh",
	"price":"500$"})
})

router.get('/employee',async(req,res)=>{
    res.json({result: [
        {
            name:"Kevin Pham",
            gender:"Male",
            date:"02/11/1997",
             role:"project manager"
            },
        {
            name:"Minh Duc",
            gender:"Male",
            date:"02/11/1997",
            role:"project manager"
        },
        {
            name:"Mike",
            gender:"Male",
            date:"02/11/1997",
            role:"project manager"
        },
        {
            name:"Lan",
            gender:"FeMale",
            date:"02/11/1997",
            role:"project manager"
        }
    ]})
})


router.post('/', async (req, res) => {
    const task = new Room(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports =  router