const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { putText, getText, clickElement } = require("../../lib/commands.js");
const { generateRandomInt } = require("../../lib/util.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on start page",{timeout: 10000}, async function () {
  return await this.page.goto("http://qamid.tmweb.ru/client/index.php");
});

When("user click on need hall",{timeout: 10000}, async function () {
  return await clickElement(this.page, "section:nth-child(1) > div:nth-child(2) > ul > li > a");
});

When("user set place in hall",{timeout: 10000}, async function () {
  const select = generateRandomInt();
  return await clickElement(this.page, `div:nth-child(${select.row}) > span:nth-child(${select.place})`);
});

When("user click on submit button",{timeout: 10000}, async function () {
  return await clickElement(this.page, ".acceptin-button");
});

Then('user sees text {string}',{timeout: 10000},async function (string) {
  const actual = await getText(this.page, ".ticket__check-title");
  const expected = await string;
  expect(actual).contains(expected);
});

When("user click on get QR code button",{timeout: 10000}, async function () {
  return await clickElement(this.page, ".acceptin-button");
});

Then("user sees message {string}",{timeout: 10000}, async function (string) {
  const actual = await getText(this.page, "div > p:nth-child(8)");
  const expected = string;
  expect(actual).contains(expected);
});

When("user click on needs date",{timeout: 10000}, async function () {
  return await clickElement(this.page, "body > nav > a:nth-child(2)");
});

When("user choose need hall",{timeout: 10000}, async function () {
  return await clickElement(this.page, "section:nth-child(2) > div:nth-child(2) > ul > li > a");
});

When("user set place in VIP hall",{timeout: 10000}, async function () {
  return await clickElement(this.page, "div:nth-child(3) > span.buying-scheme__chair.buying-scheme__chair_vip");
});


