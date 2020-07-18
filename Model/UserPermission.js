const mongoose = require('mongoose');

const UserPermessionsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  permession: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'permession',
  },
});

module.exports = UserPermessions = mongoose.model(
  'user_permessions',
  UserPermessionsSchema
);
