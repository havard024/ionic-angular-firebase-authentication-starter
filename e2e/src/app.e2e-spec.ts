import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be blank', async () => {
    await page.navigateTo();
    console.log(browser.getPageSource())
    expect(page.getParagraphText()).toContain('The world is your oyster.');
  });
});
