const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,  // Ensures the username is unique
    minlength: 3,  // Minimum length of 3 characters
    maxlength: 30, // Maximum length of 30 characters
  },
  password: {
    type: String,
    required: true,  // Password is mandatory
    minlength: 6,    // Minimum length of 6 characters
  },
});

// Encrypt password before saving it to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10); // Hash password
  next();
});

// Password comparison method
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password); // Compare plain password with hashed password
};

module.exports = mongoose.model("User", userSchema); // Export User model
