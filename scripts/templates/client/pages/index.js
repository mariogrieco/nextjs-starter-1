const { capitalizeFirstLetter } = require("../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import React from "react";

import ${Model} from "../../src/features/${featureName}/${featureName}.container";
import { get${Model}s } from "../../src/features/${featureName}/${featureName}.action";

const ${Model}Page = () => <${Model} />;

${Model}Page.getInitialProps = async ctx => {
  const { store, req, isServer } = ctx;

  if (isServer) {
    store.dispatch(get${Model}s({ cookie: req.headers.cookie }));
  } else {
    store.dispatch(get${Model}s());
  }

  return {};
};

export default ${Model}Page;
  `;
};
