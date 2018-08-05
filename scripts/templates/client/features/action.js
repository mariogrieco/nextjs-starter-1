const { capitalizeFirstLetter } = require("../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import { createActions } from "redux-actions";

const {
  create${Model},
  create${Model}Success,
  get${Model}s,
  get${Model}sSuccess,
  getSingle${Model},
  getSingle${Model}Success,
  update${Model},
  update${Model}Success,
  delete${Model},
  delete${Model}Success
} = createActions({
  CREATE_${featureName.toUpperCase()}: ({ name } = {}) => ({
    name
  }),
  CREATE_${featureName.toUpperCase()}_SUCCESS: ({ _id, userId, name } = {}) => ({
    _id,
    userId,
    name
  }),
  GET_${featureName.toUpperCase()}S: ({ cookie } = {}) => ({ cookie }),
  GET_${featureName.toUpperCase()}S_SUCCESS: ({ ${featureName}s } = {}) => ({ ${featureName}s }),
  GET_SINGLE_${featureName.toUpperCase()}: ({ _id } = {}) => ({ _id }),
  GET_SINGLE_${featureName.toUpperCase()}_SUCCESS: ({ ${featureName} } = {}) => ({ ${featureName} }),
  UPDATE_${featureName.toUpperCase()}: ({ _id, name } = {}) => ({
    _id,
    name
  }),
  UPDATE_${featureName.toUpperCase()}_SUCCESS: () => ({}),
  DELETE_${featureName.toUpperCase()}: ({ _id } = {}) => ({
    _id
  }),
  DELETE_${featureName.toUpperCase()}_SUCCESS: ({} = {}) => ({})
});

export {
  create${Model},
  create${Model}Success,
  get${Model}s,
  get${Model}sSuccess,
  getSingle${Model},
  getSingle${Model}Success,
  update${Model},
  update${Model}Success,
  delete${Model},
  delete${Model}Success
};
`;
};
