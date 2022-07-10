const anonScenarios = require('./anonScenarios');
const passengerScenarios = require('./passengerScenarios');
const carrierScenarios = require('./carrierScenarios');

const allScenarios = [
  ...anonScenarios,
  ...passengerScenarios,
  ...carrierScenarios,
];

// eslint-disable-next-line no-console
console.log('Concatenation all scenarios...');

module.exports = allScenarios;
