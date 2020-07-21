import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should redirect to login when not authorized', async () => {
    page.navigateTo();
    console.log(await browser.getCurrentUrl())
    page.waitForRedirect('/login')
    console.log(await browser.getCurrentUrl())
    expect(browser.getCurrentUrl()).toContain('/login');
  });
});
