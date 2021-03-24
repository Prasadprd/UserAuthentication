const express = require('express')
const passport =require('passport')
const User = require('../models/User')
const initialize = require('../passport/passport')

initialize(passport)

const router = express.Router()


// Creating a user
router.post('/users',async(req,res)=>{
    
    try {
        const user = new User(req.body)
        console.log(user)
        await user.save()
        //req.session.user = user
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

//Login a user
router.get('/users/login',passport.authenticate('local',{
successRedirect: '/welcome',
    failureRedirect: '/users/login'}),(req,res)=>{res.send('successS')})

router.get('/users/login/callback',passport.authenticate('local'),(req,res)=>{
    // res.send('Hey')
    res.redirect('/welcome')
})


//Loging out a user

router.post('/users/logout',async(req,res)=>{
    try {
        req.user.session = null
        res.send()
    } catch (e) {
        
    }
})

module.exports = router