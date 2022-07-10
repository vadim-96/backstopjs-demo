const settings = require('./settings');
const allScenarios = require('../scenarios').allScenarios;
const allViewports = require('../helpers').allViewports;

// Clone main settings to new object
const backstopLauncherObject = Object.assign({}, settings);

// Add properties to backstop settings
backstopLauncherObject.viewports = allViewports;
backstopLauncherObject.scenarios = allScenarios;

module.exports = backstopLauncherObject;
