const mongoose = require('mongoose')
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  message: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now

  }
});

const contact = mongoose.model("contact", contactSchema);

module.exports = contact;


