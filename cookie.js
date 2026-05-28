const express = require('express');
const router = express.Router();

// create cookie
router.get('/set', (req, res) => {
  res.cookie('username', 'ali', { maxAge: 60000, httpOnly: true });
  res.send('Cookie created!');
});

// read Cookie
router.get('/get', (req, res) => {
  const user = req.cookies.username;
  user ? res.send(`Cookie value: ${user}`) : res.send('No cookie found!');
});

// delete Cookie
router.get('/delete', (req, res) => {
  res.clearCookie('username');
  res.send('Cookie deleted.');
});

// update Cookie 
router.get('/update', (req, res) => {
  res.cookie('username', 'reza', { maxAge: 60000, httpOnly: true });
  res.send('Cookie updated!');
});

module.exports = router;
