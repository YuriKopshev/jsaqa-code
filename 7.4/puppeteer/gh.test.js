let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team", { timeout: 6000 });
  });
  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Sign up for free");
  });
});

describe("Githab marketplaceTest", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/marketplace", { timeout: 6000 });
  });
  test("The h1 header content", async () => {
    const title = await page.title();
    expect(title).toEqual(
      "GitHub Marketplace · to improve your workflow · GitHub"
    );
  });

  test("Page contain link - Explore free apps", async () => {
    await page.waitForSelector("[class = 'btn btn-large']", { visible: true });
    const input = await page.$eval(
      "[class = 'btn btn-large']",
      (link) => link.innerText
    );
    expect(input).toContain("Explore free apps");
  });

  test("Check explore free apps button", async () => {
    await page.click("[class = 'btn btn-large']");
    await page.waitForSelector("h1.h2", {
      visible: true,
    });
    const actual = await page.$eval("h1.h2", (link) => link.textContent);
    expect(actual).toContain("Free");
  });
});
