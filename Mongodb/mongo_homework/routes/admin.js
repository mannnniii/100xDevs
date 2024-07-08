const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin , Course} = require("../db")
const router = Router();
const express = require('express');
const { message } = require("prompt");
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
const username = req.body.username;
const password = req.body.password;

await Admin.create({
    username:username,
    password:password,
})
res.json({
    message:"Admin Created successfully"
})

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const discription = req.body.discription;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

 const newCourse = await  Course.create({
        title,
        discription,
        imageLink,
        price
    })
    res.json({
        message:"Course Created Successfully", courseId : newCourse._id
    })



});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({});
        res.json({
            courses: response
        })




});

module.exports = router;