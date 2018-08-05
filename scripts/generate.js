const inquirer = require("inquirer");
const fs = require("fs");
const mkdirp = require("mkdirp");

const CURR_DIR = process.cwd();

const QUESTIONS = [
  {
    name: "feature-name",
    type: "input",
    message: "What feature would you like to generate?"
  }
];

inquirer.prompt(QUESTIONS).then(answers => {
  const featureName = answers["feature-name"];
  createPages(featureName);
  createFeature(featureName);
  createModle(featureName);
  createRoute(featureName);
});

const createPages = featureName => {
  mkdirp.sync(`${CURR_DIR}/client/pages/${featureName}`);
  const templatePath = `${CURR_DIR}/scripts/templates/client/pages`;
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const contents = require(`${templatePath}/${file}`)(featureName);
    const writePath = `${CURR_DIR}/client/pages/${featureName}/${file}`;
    fs.writeFileSync(writePath, contents, "utf8");
  });
};

const createFeature = featureName => {
  mkdirp.sync(`${CURR_DIR}/client/src/features/${featureName}`);
  const templatePath = `${CURR_DIR}/scripts/templates/client/features`;
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const contents = require(`${templatePath}/${file}`)(featureName);
    const writePath = `${CURR_DIR}/client/src/features/${featureName}/${file}`;
    fs.writeFileSync(writePath, contents, "utf8");
  });
};

const createModle = featureName => {
  const contents = require(`${CURR_DIR}/scripts/templates/server/model.js`)(
    featureName
  );
  const writePath = `${CURR_DIR}/server/src/models/${featureName}.js`;
  fs.writeFileSync(writePath, contents, "utf8");
};

const createRoute = featureName => {
  const contents = require(`${CURR_DIR}/scripts/templates/server/route.js`)(
    featureName
  );
  const writePath = `${CURR_DIR}/server/src/routes/${featureName}.js`;
  fs.writeFileSync(writePath, contents, "utf8");
};
