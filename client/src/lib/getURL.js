module.export = path =>
  process.browser
    ? `${process.env.SERVER_URL}${path}`
    : `${process.env.DOCKER_URL}${path}`;
