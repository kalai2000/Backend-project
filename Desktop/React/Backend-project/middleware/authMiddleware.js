const jwt = require('jsonwebtoken');
const SECRET_KEY = "your_jwt_secret"; // Replace with your actual secret key

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Get token from the Authorization header

  if (!token) return res.sendStatus(401); // If no token, send Unauthorized (401)

  jwt.verify(token, SECRET_KEY, (err, user) => {  // Verify the token
    if (err) return res.sendStatus(403);  // If invalid token, send Forbidden (403)
    req.user = user;  // Store the user data in the request object
    next();  // Proceed to the next middleware or route handler
  });
};

module.exports = { authenticateToken };
