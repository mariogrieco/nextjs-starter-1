const { capitalizeFirstLetter } = require("../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import React from "react";

import Show${Model} from "../../src/features/${featureName}/show/show${Model}.container";
import { getSingle${Model} } from "../../src/features/${featureName}/${featureName}.action";

const Show${Model}Page = () => <Show${Model} />;

Show${Model}Page.getInitialProps = async ctx => {
  const { query, store } = ctx;
  store.dispatch(
    getSingle${Model}({
      _id: query._id
    })
  );
  return {};
};

export default Show${Model}Page;
  `;
};
