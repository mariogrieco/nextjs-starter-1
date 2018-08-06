const { capitalizeFirstLetter } = require("../../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import { connect } from "react-redux";

import show${Model} from "./show${Model}.component";
import { get${Model} } from "../${featureName}.selector";

const mapStateToProps = state => {
  return {
    ${featureName}: get${Model}(state)
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(show${Model});  
`;
};
