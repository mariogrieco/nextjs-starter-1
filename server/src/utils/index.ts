import * as jwt from "jsonwebtoken";

export const getUserId = req => {
  const userToken = req.session.userToken;
  if (userToken) {
    const decoded = jwt.verify(userToken, process.env.JWT_SECRET);
    return (<any>decoded)._id;
  }
};
