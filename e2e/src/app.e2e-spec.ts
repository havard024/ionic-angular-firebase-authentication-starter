import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be blank', async () => {
    // browser.waitForAngularEnabled(false); // this allows the test the continue far enough to print out the page source
    try {
      console.log(page)
      page.navigateTo();
      page.waitForRedirect('/login')
      console.log('hei heii hi')
      console.log(browser.getPageSource())
      expect(page.getParagraphText()).toContain('The world is your oyster.');
    } catch {
      console.log(browser.getPageSource())
    }
  });
});
