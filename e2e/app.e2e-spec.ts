import { Angular2CordovaPage } from './app.po';

describe('angular2-cordova App', () => {
  let page: Angular2CordovaPage;

  beforeEach(() => {
    page = new Angular2CordovaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
