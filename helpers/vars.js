const languages = new Set(
  [
    'en', 'de', 'fr', 'it',
    'es', 'pt', 'nl', 'ru',
    'zh', 'ar', 'tr', 'pl',
    'hu', 'cs', 'el', 'sk',
    'he', 'sv', 'fi', 'no',
    'ja', 'bn',
  ],
);

const currencies = new Set(
  [
    'USD', 'EUR', 'GBR', 'RUB', 'THB',
    'CNY', 'AUD', 'AZN', 'ARS', 'BHD',
    'BGN', 'BRL', 'HUF', 'HKD', 'GEL',
    'DKK', 'AED', 'FJD', 'EGP', 'ILS',
    'INR', 'IDR', 'JOD', 'KZT', 'CAD',
    'QAR', 'COP', 'KWD', 'MYR', 'MXN',
    'MDL', 'NAD', 'NZD', 'RON', 'NOK',
    'OMR', 'PLN', 'SAR', 'SGD', 'TWD',
    'TRY', 'UAH', 'XOF', 'CZK', 'CLP',
    'SEK', 'CHF', 'ZAR', 'KRW', 'JPY',
    'PHP',
  ],
);

const distanceUnits = new Set(['km', 'mi']);

// "viewports" property must be Array!
const viewports =
  [
    {
      label: 'desktop_wxga',
      width: 1440,
      height: 900,
    },
    {
      label: 'desktop_hd',
      width: 1920,
      height: 1080,
    },
  ];

const stageRootUrl = 'https://example.org/';

module.exports =
{
  allLanguages: languages,
  allCurrencies: currencies,
  allDistanceUnits: distanceUnits,
  allViewports: viewports,
  stageRootUrl,
};
