const {Builder, By} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .build();
    await driver.get('https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/');

    const input_id = await driver.findElement(By.id('id'));
    input_id.sendKeys('ddarahakit2023');

    const input_pw = await driver.findElement(By.id('pw'));
    input_pw.sendKeys('qwer1234');

    const login_btn = await driver.findElement(By.id('log.login'));
    login_btn.click();

})();