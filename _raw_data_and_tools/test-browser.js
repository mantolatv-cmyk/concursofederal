import puppeteer from 'puppeteer';
import path from 'path';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  console.log('Navigating to http://localhost:5173/');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
  
  const screenshotPath = 'C:/Users/martm/.gemini/antigravity-ide/brain/e00c22dd-b591-4eeb-8720-048e89e17734/artifacts/screenshot.png';
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log('Screenshot saved to', screenshotPath);

  const html = await page.content();
  console.log('--- HTML PREVIEW ---');
  console.log(html.substring(0, 1500));

  await browser.close();
})();
