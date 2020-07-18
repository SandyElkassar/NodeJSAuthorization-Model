const express = require('express');
const router = express.Router();

const User = require('../models/User');
var Authorize = require('../middleware/auth');

//@route Get api/user
// @desc
// @access authorized
router.get('/', async (req, res) => {
  try {
    if (!Authorize.hasPermission(req.body.userId, 'get/user')) {
      return res.status(401).json('Not Authorized');
    }
    let users = await User.find();
    return res.status(200).json({ users: users });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
