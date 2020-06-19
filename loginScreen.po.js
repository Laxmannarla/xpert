const { browser } = require("protractor");

function LoginObj()
{
    var userName_input = element(by.css("input[placeholder='Username']"));
    var passWord_input = element(by.css("input[placeholder='Password']"));
    var signIn = element(by.buttonText("Sign In"));
    var result = element(by.id('txtSeachBox'));

    this.get = function(url)
    {
        browser.get(url);
    };

    this.enterUserName = function(userName)
    {
        userName_input.sendKeys(userName);
    };

    this.enterpassWord = function(pwd)
    {
        passWord_input.sendKeys(pwd);
    };

    this.clickSignin = function()
    {
        signIn.click();
    };

    this.verifyResult = function()
    {
        expect(result.isDisplayed()).toBe(true);
    };

};
module.exports = new LoginObj();