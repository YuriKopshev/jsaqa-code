const user = require('../playwright/user');
const { chromium } = require('playwright');
const { expect } = require("@playwright/test");

//positive test
(async () => {
  const browser = await chromium.launch({
   // headless: false,
    slowMo: 5000,
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click('text=Войти');

  await page.fill('[placeholder="Email"]', user.login);
  await page.fill('[placeholder="Пароль"]', user.pass);
  //await page.click('text=Войти');
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page).toHaveURL("https://netology.ru/profile");
  await page.screenshot({ path: 'C:\\LearnProjects\\JSHWAutoTesting\\jsaqa-code\\7.3\\playwright\\scrennshots', fullPage: true });
  await browser.close();
})();

//negative test
(async () => {
  const browser = await chromium.launch({
    //headless: false,
    slowMo: 5000,
  });

  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click('text=Войти');
  await page.fill('[placeholder="Email"]', 'ivan34@mail.ru');
  await page.fill('[placeholder="Пароль"]', '12345');
  await page.click('[data-testid="login-submit-btn"]');
  await expect(
      page.locator(".src-components-ui-Form-Hint--hint--AcxqM")
  ).toBeVisible();
  await page.screenshot({ path: 'C:\\LearnProjects\\JSHWAutoTesting\\jsaqa-code\\7.3\\playwright\\scrennshots', fullPage: true });
  await browser.close();
})();
