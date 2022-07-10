const settings = require('./settings');
const anonScenarios = require('../scenarios').anonScenarios;
const allViewports = require('../helpers').allViewports;

// Clone main settings to new object
const backstopLauncherObject = Object.assign({}, settings);

// Add properties to backstop settings
backstopLauncherObject.viewports = allViewports;
backstopLauncherObject.scenarios = anonScenarios;

module.exports = backstopLauncherObject;
