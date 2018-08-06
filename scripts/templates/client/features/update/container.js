const { capitalizeFirstLetter } = require("../../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import { connect } from "react-redux";
import Update${Model} from "./update${Model}.component";
import { update${Model} } from "../${featureName}.action";
import { get${Model}Detail } from "../${featureName}.selector";

const mapStateToProps = state => {
  return {
    ${featureName}: get${Model}Detail(state)
  };
};

const mapDispatchToProps = dispatch => ({
  update${Model}: ({ _id, name, description }) =>
    dispatch(update${Model}({ _id, name, description }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Update${Model});
`;
};
