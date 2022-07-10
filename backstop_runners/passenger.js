const settings = require('./settings');
const passengerScenarios = require('../scenarios').passengerScenarios;
const allViewports = require('../helpers').allViewports;

// Clone main settings to new object
const backstopLauncherObject = Object.assign({}, settings);

// Add properties to backstop settings
backstopLauncherObject.viewports = allViewports;
backstopLauncherObject.scenarios = passengerScenarios;

module.exports = backstopLauncherObject;
