
var loginPage = require('../../../pages/loginPO/loginScreen.po');
var sync = require('../../../util/testData/constantTime');
var common = require('../commonMethods/startUpSyncMethod');
describe('Xpertrak Application Login Page:', function()
{        
    common.startUp();
    it('Login in to application with proper usename and credentials',function()
        {             
            loginPage.get("http://173.165.99.66/pathtrak/login/view.html#/login");
            sync.wait(5000);            
            loginPage.enterUserName("admin");
            loginPage.enterpassWord("admin");
            loginPage.clickSignin();
            sync.wait(15000);
            loginPage.verifyResult();
        })
})

