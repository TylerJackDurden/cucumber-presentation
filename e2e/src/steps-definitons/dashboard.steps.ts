

import { Given, When, Then } from 'cucumber';
import { Dashboard } from '../page-objects/dashboard.po';
import { expect } from 'chai';



const dashboard: Dashboard = new Dashboard;

Given(/^Dashboard page is open$/, async () => {
    await dashboard.navigateTo();
});

When(/^I click on Heroes button$/, async () => {
    await dashboard.getHeroesButton().click();

});

When(/^I click on Magenta hero$/, async () => {
  await dashboard.getHeroLiEltById(12).click();
});

Then(/^I can see list of heroes$/, async () => {
    expect(await dashboard.heroesList.isPresent()).to.equal(true);
});

Then(/^I see Magenta details$/, async () => {
  expect(await dashboard.detailOfhero.getText()).to.equal('MAGNETA Details');
});


