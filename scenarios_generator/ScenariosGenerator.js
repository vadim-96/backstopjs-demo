// Import class with default scenario properties
const ScenarioProperties = require('./ScenarioProperties');
// Import functions to help generate the "label" and "urlAction" properties
const getRoleName = require('./propertiesHelper').getRoleName;
const getPageAction = require('./propertiesHelper').getPageAction;

class ScenariosGenerator {
  static generateScenario(role, pageAction, { urlLanguages, currencies, distanceUnits, ...args }) {
    const scenarios = [];
    const rolePageLabel = `${getRoleName(role)}_${getPageAction(pageAction).pageLabel}`;

    for (const lang of urlLanguages) {
      for (const currency of currencies) {
        for (const distanceUnit of distanceUnits) {
          // Generate an unique "label" property for each scenario
          let label = `${rolePageLabel}_${lang}_${currency}_${distanceUnit}`;

          // Generate new scenarios and add them to array
          scenarios.push(
            // Parameters must be named parameters, for ex. ({ label: label, url: url })
            new ScenarioProperties({
              urlLanguage: lang,
              label,
              currency,
              distanceUnit,
              urlAction: getPageAction(pageAction).urlAction,
              ...args,
            }).getProperties(),
          );
        }
      }
    }

    return scenarios;
  }
}

module.exports = ScenariosGenerator;
