const { capitalizeFirstLetter } = require("../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import React from "react";

import ${Model}Detail from "../../src/features/${featureName}/detail/${featureName}Detail.container";
import { getSingle${Model} } from "../../src/features/${featureName}/detail/${featureName}Detail.action";

const ${Model}DetailPage = () => <${Model}Detail />;

${Model}DetailPage.getInitialProps = async ctx => {
  const { query, store } = ctx;
  store.dispatch(
    getSingle${Model}({
      _id: query._id
    })
  );
  return {};
};

export default ${Model}DetailPage;  
  `;
};
