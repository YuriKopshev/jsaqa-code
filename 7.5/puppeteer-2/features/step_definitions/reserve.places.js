const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { putText, getText, clickElement } = require("../../lib/commands.js");

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

Given("user is on page", async function () {
  return await this.page.goto("http://qamid.tmweb.ru/client/index.php",{setTimeout: 60000});
});

When("user click on need hall", async function () {
  return await clickElement(this.page, "[data-seance-id='139']");
});

When("user set place {string} in hall", async function (place) {
  return await clickElement(
    this.page,
    place
  );
});

When("user click on submit button", async function () {
  return await clickElement(this.page, ".acceptin-button");
});

When('user sees text {string}',async function (string) {
  const actual = await getText(this.page, ".ticket__check-title");
  const expected = await string;
  expect(actual).contains(expected);
});

When("user click on submit button", async function () {
  return await clickElement(this.page, ".acceptin-button");
});

Then("user sees message {string}", async function (string) {
  const actual = await getText(this.page, "div > p:nth-child(8)");
  const expected = string;
  expect(actual).contains(expected);
});


Given("user is on start page", async function () {
  return await this.page.goto("http://qamid.tmweb.ru/client/index.php",{setTimeout: 60000});
});

When("user click on needs date", async function () {
  return await clickElement(this.page, "body > nav > a:nth-child(2)");
});

When("user click on needs hall", async function () {
  return await clickElement(this.page, "[data-seance-id='94']");
});

When("user set place {string} in VIP hall", async function (place) {
  return await clickElement(
    this.page,
   place
  );
});

When("user click on submit button", async function () {
  return await clickElement(this.page, ".acceptin-button");
});

When('user sees next text {string}',async function (string) {
  const actual = await getText(this.page, ".ticket__check-title");
  const expected = await string;
  expect(actual).contains(expected);
});

When("user click on submit button", async function () {
  return await clickElement(this.page, ".acceptin-button");
});

Then("user sees next message {string}", async function (string) {
  const actual = await getText(this.page, "div > p:nth-child(8)");
  const expected = string;
  expect(actual).contains(expected);
});

