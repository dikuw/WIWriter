import mongoose from "mongoose";

// // start from Hely, maybe want to add this in the future
// const validator = require('validator');
// const mongodbErrorHandler = require('mongoose-mongodb-errors');
// const passportLocalMongoose = require('passport-local-mongoose');
// // end from Hely

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Please enter a valid email'],
    required: 'Please enter an email address'
  },
  name: {
    type: String,
    required: 'Please enter a name',
    trim: true
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  isAdmin: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
// // start from Hely, maybe want to add this in the future
// userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
// userSchema.plugin(mongodbErrorHandler);
// // end from Hely