const ScenariosGenerator = require('../scenarios_generator');
// Import helpers to pass them as arguments
const allLanguages = require('../helpers').allLanguages;
const allCurrencies = require('../helpers').allCurrencies;
const allDistanceUnits = require('../helpers').allDistanceUnits;
const rootUrl = require('../helpers').stageRootUrl;

const carrierScenarios = [
  ...ScenariosGenerator.generateScenario('carrier', 'cabinet instructions',
    {
      urlLanguages: allLanguages,
      currencies: allCurrencies,
      rootUrl,
      rootReferenceUrl: 'https://example.org/',
      distanceUnits: allDistanceUnits,
      onBeforeScript: 'carrier/onBefore.js',
      onReadyScript: 'carrier/onReady.js',
      cookiePath: 'engine_scripts/carrier/cookies.json',
      readySelector: 'span.icon-user',
    },
  ),
];

// eslint-disable-next-line no-console
console.log('Generating carrier scenarios...');

module.exports = carrierScenarios;
