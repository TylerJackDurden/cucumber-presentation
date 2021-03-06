import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class HeroPanel {

  public navButtons: ElementArrayFinder;
  public heroesList: ElementFinder;
  public heroes: ElementArrayFinder;
  public detailOfhero: ElementFinder;
  public detailOfHeroID: ElementFinder;
  browser: any;


  constructor() {
    this.navButtons = element.all(by.css('app-root nav a'));
    this.heroesList = element(by.className('heroes'));
    this.heroes = element.all(by.className('hero'));
    this.detailOfhero = element(by.css('app-hero-detail div h2'));
    this.detailOfHeroID = element(by.className('id'));
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
      let heroName = await hero.getText();
      heroName = heroName.trim().toLowerCase();
      return specyficHero === heroName;
    }).first();
  }







}
