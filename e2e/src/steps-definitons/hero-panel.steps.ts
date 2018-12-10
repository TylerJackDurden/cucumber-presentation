

import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import { HeroPanel } from '../page-objects/hero-panel.po';



const heroPanel: HeroPanel = new HeroPanel;

Given(/^Dashboard page is open$/, async () => {
    await heroPanel.navigateTo();
});

When(/^I click on Heroes button$/, async () => {
    await heroPanel.getHeroesButton().click();

});

When(/^I click on Magenta hero$/, async () => {
  await heroPanel.clickOnSpecyficHero('magenta').click();
});

Then(/^I can see list of heroes$/, async () => {
    expect(await heroPanel.heroesList.isPresent()).to.equal(true);
});

Then(/^I see Magenta details$/, async () => {
  expect(await heroPanel.detailOfhero.getText()).to.equal('MAGNETA Details');
});


