import { browser, by, element, ElementFinder, promise, ElementArrayFinder } from 'protractor';

export class Dashboard {

  public navButtons: ElementArrayFinder;
  public heroesList: ElementFinder;
  public heroes: ElementArrayFinder;
  public detailOfhero: ElementFinder;


  constructor() {
    this.navButtons = element.all(by.css('app-root nav a'));
    this.heroesList = element(by.className('heroes'));
    this.heroes = element.all(by.className('hero'));
    this.detailOfhero = element(by.xpath('app-hero-detail div h2'))
  }
  navigateTo() {
    return browser.get('/');
  }

  getHeroesButton(): ElementFinder {
    return this.navButtons.get(1);
  }
  getDashboardButton(): ElementFinder {
    return this.navButtons.get(0);
  }

  clickOnSpecyficHero(specyficHero: string) {
    return this.heroes.filter(async (hero) => {
      return await hero.getText() === specyficHero
    }).first();
  }

  getHeroLiEltById(id: number): ElementFinder {
    let spanForId = element(by.cssContainingText('li span.badge', id.toString()));
    return spanForId.element(by.xpath('../..'));
  }






}
