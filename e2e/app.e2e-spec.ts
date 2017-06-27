import { DotnetDemoPage } from './app.po';

describe('dotnet-demo App', () => {
  let page: DotnetDemoPage;

  beforeEach(() => {
    page = new DotnetDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
