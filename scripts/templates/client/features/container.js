const { capitalizeFirstLetter } = require("../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import { connect } from "react-redux";

import ${Model}s from "./${featureName}.component";
import { get${Model}s } from "./${featureName}.selector";
import { delete${Model} } from "./${featureName}.action";

const mapStateToProps = state => ({
  ${featureName}s: get${Model}s(state)
});

const mapDispatchToProps = dispatch => ({
  delete${Model}: ({ _id }) => dispatch(delete${Model}({ _id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(${Model}s);
`;
};
