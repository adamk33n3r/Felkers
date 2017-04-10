import { browser, element, by } from 'protractor';

export class FelkersPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('felk-root h1')).getText();
  }
}
