const express = require('express')

const z = require('zod')

const app = express();

app.use(express.json());

app.post("/heath-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("you have " + kidneyLength + "kidneys");
});

// global catches
app.use(function(err,req,res,next){
  res.json({
    msg:"Sorry something is up with your server"
  })
})

app.listen(3000, console.log("server is running on port 3000"));
