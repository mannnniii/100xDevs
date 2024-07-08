const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User , Course } = require("../db/index")
const { JWT_SECRET } = require("../config")

const jwt = require("jsonwebtoken");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password,
    })
    res.json({
        message: "Admin Created successfully"
    })

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic

const username = req.body.username;
const password = req.body.password;

const user = await User.find({
username,
password,
})
if(user){
    const token = jwt.sign({
        username,
    }, JWT_SECRET)
    res.json({
        token
    })
}else{
    res.status(411).json({
        message : "Incorrect email and password"
    })
}

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

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({});
    res.json({
        courses: response
    })



});

module.exports = router;