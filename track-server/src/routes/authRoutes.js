const express = require('express');
const moongose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', (req, res) => {
  res.send('post to signup');
});

module.exports = router;