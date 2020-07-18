const express = require('express');
const router = express.Router();
const UserPermessions = require('../models/UserPermessions');
const Permessions = require('../models/Permessions');

module.exports = {
  hasPermission: async function (UserId, URL) {
    const perm = await Permessions.findOne({ name: URL });
    const UserPerm = await UserPermessions.findOne({
      user: UserId,
      permession: perm.id,
    });
    if (UserPerm) {
      return true;
    } else {
      return false;
    }
  },
};
