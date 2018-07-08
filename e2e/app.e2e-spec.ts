import { TestBankAppPage } from './app.po';

describe('test-bank-app App', function() {
  let page: TestBankAppPage;

  beforeEach(() => {
    page = new TestBankAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
