const ScenariosGenerator = require('../scenarios_generator');
// Import helpers to pass them as arguments
const allLanguages = require('../helpers').allLanguages;
const allCurrencies = require('../helpers').allCurrencies;
const allDistanceUnits = require('../helpers').allDistanceUnits;
const rootUrl = require('../helpers').stageRootUrl;

const passengerScenarios = [
  ...ScenariosGenerator.generateScenario('passenger', 'new transfer',
    {
      urlLanguages: allLanguages,
      currencies: allCurrencies,
      rootUrl,
      rootReferenceUrl: 'https://example.org/',
      distanceUnits: allDistanceUnits,
      onBeforeScript: 'passenger/onBefore.js',
      onReadyScript: 'passenger/onReady.js',
      cookiePath: 'engine_scripts/passenger/cookies.json',
      clickSelectors: ['input#transport_type_economy', 'main'],
      hideSelectors: ['div#gmap'],
      postInteractionWait: 'span#route_speed',
      keyPressSelectors: [
        {
          selector: '#from',
          keyPress: 'Moscow, Russia',
        },
        {
          selector: '#to',
          keyPress: 'Saint Petersburg, Russia',
        },
      ],
    },
  ),
  ...ScenariosGenerator.generateScenario('passenger', 'account settings',
    {
      urlLanguages: allLanguages,
      currencies: ['USD'],
      rootUrl,
      rootReferenceUrl: 'https://example.org/',
      distanceUnits: ['km'],
      onBeforeScript: 'passenger/onBefore.js',
      onReadyScript: 'passenger/onReady.js',
      cookiePath: 'engine_scripts/passenger/cookies.json',
    },
  ),
];

// eslint-disable-next-line no-console
console.log('Generating passenger scenarios...');

module.exports = passengerScenarios;
