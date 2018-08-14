import config from "../../config";

import * as jwt from "jsonwebtoken";

export const getUserId = req => {
  const userToken = req.session.userToken;
  if (userToken) {
    const decoded = jwt.verify(userToken, config.jwt.secret);
    return (<any>decoded)._id;
  }
};
