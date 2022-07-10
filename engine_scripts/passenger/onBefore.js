/* const rootUrl = require('../../helpers').stageRootUrl;
const allAuthData = require('../../helpers').allAuthData; */

module.exports = async (page, scenario, vp) => {
  await require('./loadCookies')(page, scenario);

  /* 	await page.goto(`${rootUrl}en/account/login`);
    await page.waitFor('button.btn.btn-yellow.btn-block');
    await page.type('input#email-or-phone', allAuthData.passenger.login, {delay: 50});
    await page.type('input#password', allAuthData.passenger.password, {delay: 50});
    await page.click('button.btn.btn-yellow.btn-block');
    await page.waitForNavigation(); */
};
