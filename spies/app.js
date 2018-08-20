const db = require('./db.js')

module.exports.handleSignup = (email, password) => {
  // Check if emails already exist

  // Save the user to DB
  db.saveUser({ email, password })

  // Send welcome email
}