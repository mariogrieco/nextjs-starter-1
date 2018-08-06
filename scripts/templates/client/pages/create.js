const { capitalizeFirstLetter } = require("../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import React from "react";

import Create${Model} from "../../src/features/${featureName}/create/create${Model}.container";

const Create${Model}Page = () => <Create${Model} />;

export default Create${Model}Page;
  `;
};
