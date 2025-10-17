const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new Error("No token provided or token is not a Bearer token"));
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = isAuthenticated;