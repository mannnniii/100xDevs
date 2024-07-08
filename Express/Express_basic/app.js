const express = require("express");
const app = express();
const port = 3000;

// Sample data
var users = [
  {
    name: "Ramukaka",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];



app.get("/", function (req, res) {
  const Ramukakkidneys = users[0].kidneys;
  const nummberOfKidneys = Ramukakkidneys.length;
  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < Ramukakkidneys.length; i++) {
    if (Ramukakkidneys[i].healthy) {
      numberOfHealthyKidneys += 1;
    }
  }
  const numberOfUnHealthyKidneys = nummberOfKidneys - numberOfHealthyKidneys;

  res.json({
    nummberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnHealthyKidneys,
  });
});


// POST operation
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "DONE!",
  });
});

// PUT operation
app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

// DELETE operation
app.delete("/", function (req, res) {
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done!" });
  } else {
    res.status(411).json({
      msg: "NO BAD KIDNEYS!!",
    });
  }
});

app.listen(port)