const { capitalizeFirstLetter } = require("../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `const get${Model}s = state => state.${featureName}.${featureName}s;

const get${Model} = state => state.${featureName}.${featureName};
  
export { get${Model}s, get${Model} };
`;
};
