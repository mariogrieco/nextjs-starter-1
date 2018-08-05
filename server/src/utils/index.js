const jwt = require("jsonwebtoken");

const getUserId = req => {
  const userToken = req.session.userToken;
  if (userToken) {
    const { _id } = jwt.verify(userToken, "secret");
    return _id;
  }
};

module.exports = {
  getUserId
};
