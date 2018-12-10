import { browser, by, element, ElementFinder, promise, ElementArrayFinder } from 'protractor';

export class Dashboard {

  public navButtons: ElementArrayFinder;
  public heroesList: ElementFinder;


  constructor(){
    this.navButtons =  element.all(by.css('app-root nav a'));
    this.heroesList = element(by.className('heroes'));
  }
    navigateTo() {
      return browser.get('/');
    }

    getSpecyficButton(): ElementFinder{
      return this.navButtons.get(1);
    }



}
