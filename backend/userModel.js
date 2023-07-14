const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  googleId: String // Add googleId field to the schema
});

module.exports = mongoose.model('User', userSchema);
