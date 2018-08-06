const { capitalizeFirstLetter } = require("../../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import { connect } from "react-redux";

import Create${Model} from "./create${Model}.component";
import { create${Model} } from "../${featureName}.action";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  create${Model}: ({ name, description }) =>
    dispatch(create${Model}({ name, description }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create${Model});
`;
};
