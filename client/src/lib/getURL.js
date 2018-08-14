const config = require("../../config");

module.exports = path =>
  process.browser
    ? `${config.clientRender.apiUrl}${path}`
    : `${config.serverRender.apiUrl}${path}`;
