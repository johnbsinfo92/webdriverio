const expect = require('chai').expect;
const assert = require('chai').assert;

  describe('Front End Test', function () {
  beforeEach(function () {
    browser.url('./');
    browser.waitForText('[data-reactroot]');
  })

  it('should find moana', function () {
      browser.pause(2500);
      browser.setValue('#q','moana');
      browser.waitForText('.tt-dropdown-menu');
      browser.keys('Down arrow');
      browser.keys('Enter');
      browser.pause(2500);
      //browser.saveScreenshot('./test-screenshots/snapshot.png');
      let pageHeading = browser.getText('h1');
      //expect(pageHeading).to.equal('MOANA');
      //expect(browser.getText('.tagline')).to.equal('The ocean is calling.');
      assert(pageHeading === 'MOANA', 'It is not MOANA');
  })
})
