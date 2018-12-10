

import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import { HeroPanel } from '../page-objects/hero-panel.po';
import { browser } from 'protractor';



const heroPanel: HeroPanel = new HeroPanel;

Given("{string} page is open", async (pageName: string) => {
    if(pageName === 'dashboard'){
        await browser.get('dashboard');
    }else {
        await browser.get('heroes');
    }
});

When(/^I click on Heroes button$/, async () => {
    await heroPanel.getHeroesButton().click();

});

When(/^I click on "(.*)" hero$/, async (hero: string) => {
  await heroPanel.clickOnSpecyficHero(hero.toLowerCase()).click();
});

Then(/^I can see list of heroes$/, async () => {
    expect(await heroPanel.heroesList.isPresent()).to.equal(true);
});

Then(/^I see "(.*)" details$/, async (hero: string) => {
  expect(await heroPanel.detailOfhero.getText()).to.equal(hero.toLocaleUpperCase() + ' Details');
});


