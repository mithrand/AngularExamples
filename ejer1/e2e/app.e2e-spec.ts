import { Ejer1Page } from './app.po';

describe('ejer1 App', function() {
  let page: Ejer1Page;

  beforeEach(() => {
    page = new Ejer1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
