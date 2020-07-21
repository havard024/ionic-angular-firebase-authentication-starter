import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
  }

  waitForRedirect(necessaryUrlFragment: string, timeout: number = browser.getPageTimeout) {
    // Before we tell the browser to wait, assume it has not navigated
    let hasRedirected = false;
  
    // Passing a function to browser.wait() tells protractor to call that function repeatedly.
    // This function returns the closure variable hasRedirected, which will be set to true once the
    // necessaryUrlFragment has been found in the url

    browser.wait(() => {
      browser.getCurrentUrl()
      .then(url => {
        console.log(url)
        return url
      })
        // Check to see if necessaryUrlFragment is in the current url
        .then(url => url.includes(necessaryUrlFragment))
        // Update our navigation status
        .then(hasNavigated => {
          hasRedirected = hasNavigated;
        });
  
      // Return our navigation status every time protractor asks for it - even if navigation is
      // not complete
      return hasRedirected;
    }, timeout);
  }
}
