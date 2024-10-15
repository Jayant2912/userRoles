const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "no token auth denied" });
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      console.log("the decode user is ", req.user);
      next();
    } catch (error) {
      res.status(400).json({ message: " token not valid" });
    }
  } else {
    return res.status(401).json({ message: "no token auth denied" });
  }
};

module.exports = verifyToken;
