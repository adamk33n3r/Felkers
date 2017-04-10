import { FelkersPage } from './app.po';

describe('felkers App', () => {
  let page: FelkersPage;

  beforeEach(() => {
    page = new FelkersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('felk works!');
  });
});
