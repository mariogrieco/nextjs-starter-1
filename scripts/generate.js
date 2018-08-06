const inquirer = require("inquirer");
const fs = require("fs");
const mkdirp = require("mkdirp");

const { capitalizeFirstLetter } = require("./templates/utils");

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
  [createPages, createFeature, createModle, createRoute].map(fn =>
    fn({ featureName })
  );
});

const createPages = ({ featureName }) => {
  mkdirp.sync(`${CURR_DIR}/client/pages/${featureName}`);
  const templatePath = `${CURR_DIR}/scripts/templates/client/pages`;
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const contents = require(`${templatePath}/${file}`)(featureName);
    const writePath = `${CURR_DIR}/client/pages/${featureName}/${file}`;
    fs.writeFileSync(writePath, contents, "utf8");
  });
};

const createFeature = ({
  featureName,
  templateDir = `${CURR_DIR}/scripts/templates/client/features`,
  newProjectDir = `${CURR_DIR}/client/src/features/${featureName}`,
  isTopDir = true,
  dirName = undefined
}) => {
  mkdirp.sync(newProjectDir);

  const filesToCreate = fs.readdirSync(templateDir);

  filesToCreate.forEach(file => {
    const filePath = `${templateDir}/${file}`;
    // get stats about the current file
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      const contents = require(`${templateDir}/${file}`)(featureName);
      const writePath = isTopDir
        ? `${newProjectDir}/${featureName}.${file}`
        : `${newProjectDir}/${dirName}${capitalizeFirstLetter(
            featureName
          )}.${file}`;
      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      // recursive call
      createFeature({
        featureName,
        templateDir: `${templateDir}/${file}`,
        newProjectDir: `${newProjectDir}/${file}`,
        isTopDir: false,
        dirName: file
      });
    }
  });
};

const createModle = ({ featureName }) => {
  const contents = require(`${CURR_DIR}/scripts/templates/server/model.js`)(
    featureName
  );
  const writePath = `${CURR_DIR}/server/src/models/${featureName}.js`;
  fs.writeFileSync(writePath, contents, "utf8");
};

const createRoute = ({ featureName }) => {
  const contents = require(`${CURR_DIR}/scripts/templates/server/route.js`)(
    featureName
  );
  const writePath = `${CURR_DIR}/server/src/routes/${featureName}.js`;
  fs.writeFileSync(writePath, contents, "utf8");
};
