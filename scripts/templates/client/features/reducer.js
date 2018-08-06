const { capitalizeFirstLetter } = require("../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import { handleActions } from "redux-actions";
import {
  getSingle${Model}Success,
  get${Model}sSuccess,
  create${Model}Success
} from "./${featureName}.action";
import { Object } from "core-js";

const defaultState = {
  ${featureName}s: [],
  ${featureName}: {}
};

const reducer = handleActions(
  {
    [create${Model}Success]: (
      state,
      { payload: { _id, name, description } }
    ) => {
      return Object.assign({}, state, {
        ${featureName}s: [
          ...state.${featureName}s,
          {
            _id,
            name,
            description
          }
        ]
      });
    },
    [get${Model}sSuccess]: (state, { payload: { ${featureName}s } }) => {
      return Object.assign({}, state, {
        ${featureName}s
      });
    },
    [getSingle${Model}Success]: (state, { payload: { ${featureName} } }) => {
      return Object.assign({}, state, { ${featureName} });
    }
  },
  defaultState
);

export default reducer;
`;
};
