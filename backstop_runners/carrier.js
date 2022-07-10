const settings = require('./settings');
const carrierScenarios = require('../scenarios').carrierScenarios;
const allViewports = require('../helpers').allViewports;

// Clone main settings to new object
const backstopLauncherObject = Object.assign({}, settings);

// Add properties to backstop settings
backstopLauncherObject.viewports = allViewports;
backstopLauncherObject.scenarios = carrierScenarios;

module.exports = backstopLauncherObject;
