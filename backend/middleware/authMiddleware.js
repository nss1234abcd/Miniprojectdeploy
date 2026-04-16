const jwt = require("jsonwebtoken");

// ================= VERIFY TOKEN =================
const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  // Check if token exists
  if (!token) {
    return res.status(401).json({ msg: "No token, access denied" });
  }

  try {
    // Verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user data to request
    req.user = verified;

    next();
  } catch (error) {
    return res.status(400).json({ msg: "Invalid token" });
  }
};

// ================= EXPORT =================
module.exports = authMiddleware;
