# How to install
1. Install [Node.js LTS](https://nodejs.org/)
2. Go to the project directory
3. Run `npm install` to install all dependencies or `npm install --production` to install only production dependencies

# Instructions
* Run `backstop:test '{filter}'` to create screenshots and compare them with reference version (after 'backstop:approve') or with different point (after 'backstop:reference')
* Run `backstop:approve '{filter}'` to set the new master reference screenshots
* Run `backstop:report` open report in the browser
* (optional) Run `backstop:reference '{filter}'` to create screenshots on different point (example scenario: to compare 123.example.org and example.org). Before run this command, you should define a "rootReferenceUrl" property in scenario file you need in 'scenarios' folder)

Paste RegExp expression (or just a string) of filter instead `{filter}`, for example:

* `backstop:test 'anon_login_page_'`
* `backstop:test 'anon_registration_page_en_'`
* `backstop:reference 'anon_new_transfer_page_ru_USD_mi'`
* etc...

Don't forget set the cookie in 'engine_scripts' folder before run tests with non-anonymous user

# Available filters
* anon_login_page_
* anon_registration_page_
* anon_new_transfer_page_
* passenger_account_settings_
* passenger_new_transfer_page_
* carrier_cabinet_instructions_page_

`{role}_{action_page}_{language}_{CURRENCY}_{distanceUnit}`, example: carrier_cabinet_instructions_page_en_RUB_mi

# Advanced
* All scenarios can be found in 'scenarios' folder. To generate scenario you should call static method `ScenariosGenerator.generateScenario()` with these parameters:
    ```
    generateScenario(role: string, urlAction: string, {}: object with named parameters)
    ```
    In the object {} you can pass these optional [parameters](https://github.com/garris/BackstopJS#advanced-scenarios) (**EXCEPT:** 'clickSelector', 'hoverSelector', 'viewports', 'label', 'url', 'referenceUrl') plus custom 'rootReferenceUrl: string' .

    These custom parameters are **required**: 'urlLanguages: iterable', 'currencies: iterable', 'distanceUnits: iterable', 'rootUrl: string',

    Example:
    ```
    ScenariosGenerator.generateScenario('anon', 'registration',
        {
            urlLanguages: allLanguages,
            currencies: ['USD'],
            rootUrl,
            rootReferenceUrl: 'https://example.org/',
            distanceUnits: ['km'],
            onBeforeScript: 'anon/onBefore.js',
            onReadyScript: 'anon/onReady.js'
        }
    )
    ```
* Unused files: 'anon.js', 'carrier.js', 'passenger.js' in 'backstop_runners' folder

# Used tools
* [BackstopJS](https://github.com/garris/BackstopJS)
* [Puppeteer](https://github.com/puppeteer/puppeteer)

# IDEs
* ## VS Code:
    * Extensions:
        1. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
        2. [EditorConfig](https://marketplace.visualstudio.com/items?itemName=editorconfig.editorconfig)
        3. [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
        4. [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=visualstudioexptteam.vscodeintellicode)
        5. [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
