const mongoose = require('mongoose');

const PermessionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = Permession = mongoose.model('Permession', PermessionSchema);
