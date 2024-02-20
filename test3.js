const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
(async function loginMacro() {
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
    try {
        // 대상 웹사이트의 로그인 페이지 URL로 이동
        await driver.get('https://nxlogin.nexon.com/common/login.aspx?redirect=https://trade.sa.nexon.com/');
        // 사용자 이름 입력 필드를 찾아 입력을 시뮬레이션합니다.
        const input_txtNexonID = await driver.findElement(By.id('txtNexonID'));
        await input_txtNexonID.sendKeys('lchlch8142');
        // 비밀번호 입력 필드를 찾아 입력을 시뮬레이션합니다.
        const input_txtPWD = await driver.findElement(By.id('txtPWD'));
        await input_txtPWD.sendKeys('wnrlwjrqusrud!!');
        // 로그인 버튼을 찾아 클릭합니다.
        const loginButton = await driver.findElement(By.xpath("//button[@class='button01' and contains(text(), '넥슨ID 로그인')]"));
        await loginButton.click();
        // 로그인 성공 후 특정 페이지로 이동을 대기합니다. 성공 여부를 확인하는 더 나은 방법이 있다면 추가하세요.
        await driver.wait(until.urlContains('trade.sa.nexon.com'), 10000);
        // 로그인 후의 작업을 추가할 수 있습니다.
        // 예: 로그인 성공 확인, 특정 페이지로 이동, 데이터 추출 등
    } catch (error) {
        console.error(error);
    } finally {
        // 필요에 따라 브라우저를 닫거나 열린 상태로 유지하세요.
        // await driver.quit();
    }
})();