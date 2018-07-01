const expect = require('chai').expect;

describe('My react Test', function () {
  beforeEach(function () {
    browser.url('./');
    browser.waitForText('[data-reactroot]');
  })

  it('should find moana', function () {
      browser.setValue('#q','moana');
      browser.waitForText('.tt-dropdown-menu');
      browser.keys('Down arrow');
      browser.keys('Enter');
      browser.pause(2500);
      browser.saveScreenshot('./snapshot.png');
      let pageHeading = browser.getText('h1');
      expect(pageHeading).to.equal('MONA');
      expect(browser.getText('.tagline')).to.equal('The ocean is calling.');
  })
})
