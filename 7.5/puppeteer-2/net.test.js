//const { expect } = require("chai");
const { clickElement, putText, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("qamid.tmweb.ru tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test("The title test'", async () => {
    const title = await page.title();
   expect(title).toEqual("ИдёмВКино")
  });

  test("Logan film reserve ticket test", async () => {
   await clickElement(page,"[data-seance-id='139']");
   await clickElement(page,"div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(3)");
   await clickElement(page,".acceptin-button");
   await clickElement(page,".acceptin-button");
   const actual = await getText(page,"div > p:nth-child(8)");
   expect(actual).toEqual("Приятного просмотра!");
  });

  test("Фильм 3 film reserve VIP - ticket test", async () => {
    await clickElement(page,"[data-time-stamp='1662930000']");
    await clickElement(page,"[data-seance-id='94']");
    await clickElement(page,"div.buying-scheme__wrapper > div:nth-child(3) > span.buying-scheme__chair.buying-scheme__chair_vip");
    await clickElement(page,".acceptin-button");
    await clickElement(page,".acceptin-button");
    const actual = await getText(page,"div > p:nth-child(8)");
    expect(actual).toEqual("Приятного просмотра!");
   });
});

