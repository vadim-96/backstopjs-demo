const ScenariosGenerator = require('../scenarios_generator');
// Import helpers to pass them as parameters
const allLanguages = require('../helpers').allLanguages;
const allCurrencies = require('../helpers').allCurrencies;
const allDistanceUnits = require('../helpers').allDistanceUnits;
const rootUrl = require('../helpers').stageRootUrl;

const anonScenarios = [
  ...ScenariosGenerator.generateScenario('anon', 'new transfer',
    {
      urlLanguages: allLanguages,
      currencies: allCurrencies,
      rootUrl,
      rootReferenceUrl: 'https://example.org/',
      distanceUnits: allDistanceUnits,
      onBeforeScript: 'anon/onBefore.js',
      onReadyScript: 'anon/onReady.js',
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
  ...ScenariosGenerator.generateScenario('anon', 'registration',
    {
      urlLanguages: allLanguages,
      currencies: ['USD'],
      rootUrl,
      rootReferenceUrl: 'https://example.org/',
      distanceUnits: ['km'],
      onBeforeScript: 'anon/onBefore.js',
      onReadyScript: 'anon/onReady.js',
    },
  ),
  ...ScenariosGenerator.generateScenario('anon', 'login',
    {
      urlLanguages: allLanguages,
      currencies: ['USD'],
      rootUrl,
      rootReferenceUrl: 'https://example.org/',
      distanceUnits: ['km'],
      onBeforeScript: 'anon/onBefore.js',
      onReadyScript: 'anon/onReady.js',
    },
  ),
];

// eslint-disable-next-line no-console
console.log('Generating anon scenarios...');

module.exports = anonScenarios;
