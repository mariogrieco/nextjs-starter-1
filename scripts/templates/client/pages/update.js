const { capitalizeFirstLetter } = require("../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import React from "react";

import Update${Model} from "../../src/features/${featureName}/update/update${Model}.container";
import { getSingle${Model} } from "../../src/features/${featureName}/detail/${featureName}Detail.action";

const Update${Model}Page = () => <Update${Model} />;

Update${Model}Page.getInitialProps = async ctx => {
  const { query, store } = ctx;
  store.dispatch(
    getSingle${Model}({
      _id: query._id
    })
  );
  return {};
};

export default Update${Model}Page;
  `;
};
