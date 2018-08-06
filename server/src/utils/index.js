const jwt = require("jsonwebtoken");

const getUserId = req => {
  const userToken = req.session.userToken;
  if (userToken) {
    const { _id } = jwt.verify(userToken, process.env.JWT_SECRET);
    return _id;
  }
};

module.exports = {
  getUserId
};
