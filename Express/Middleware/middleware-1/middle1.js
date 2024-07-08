const express = require('express')

const app = express();

app.get('/health-checkup', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const kidneyId = req.query.kidneyId;

  if (!(username === 'aman' && password === 'pass')) {
    res.status(400).json({ "msg": "Something with inputs" });
    return;
  }

  if (kidneyId === 1 || kidneyId === 2) {
    res.status(400).json({ "msg": "Something with inputs" });
    return;
  }

  res.json({
    msg: "Your kidney is healthy"
  });
});

app.listen(3000, () => {
  console.log('Express server initialized');
});
