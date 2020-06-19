const { browser } = require("protractor");
browser.waitForAngularEnabled(false);

describe('Enterprise homepage EnterpriseSearchValidations',function()
{
    //browserwaitForSyncEnabled
    function OpenRegionalSearchPageVerification()
    {      
        browser.get('http://173.165.99.66/pathtrak/enterprise/image.html#/entsearch');
        browser.sleep(10000);
        //element(by.id("menuToggle")).click();
        element(by.css("button.menu-button.menu-toggle")).click().then(function()
        {
            element(by.css("span[class='menu-text-ellipse menu-text darkMenu']")).getText().then(function(text)
                     {
                        //expect(text).toBe('Regional Search');
                        browser.sleep(3000);
                        expect(element(by.xpath('//*[@id="searchBox"]')).isDisplayed()).toBe(true);
                     })
        })
       /*element(by.className("menu-text-ellipse menu-text darkMenu")).click().then(function()
       {
           browser.sleep(3000);
           expect(element(by.xpath('//*[@id="searchBox"]')).isDisplayed()).toBe(true);
       })*/
    }
function VIAVIImageVerification()
    {
      // To verify Viavi logo is displayed or not

    mypic = element(by.css("img[src*='images/viavi-purple-logo.png']"));
    browser.isElementPresent(mypic).then(function (result) {
    if(result){
                console.log(result);
                expect(mypic.getAttribute('src')).toContain('assets/images/viavi-purple-logo.png');
              }
        });
    }
    function XperttrakContentVerification() 
           {
                element(by.css("div.descriptor:nth-child(3) > p.header-trademark.product")).getText().then(function(value)
                    {
                        expect(value).toBe('XPERTrak™ Enterprise');
                    })
            }

    function ToggleHeaderVerification()
    
         {
             element(by.css("button.menu-button.menu-toggle")).click().then(function()
             {
                 element(by.css("span[class='menu-text-ellipse menu-text darkMenu']")).getText().then(function(text)
                     {
                        expect(text).toBe('Regional Performance');
                     })  
             })
            }
    function XpertrackThemeVerification()
      {              
        
        element(by.xpath('//*[@id="menu-toggle"]/i')).click().then(function()
        {
            browser.sleep(3000);   
        })

            expect(element(by.className('dark-theme')).isPresent()).toBe(true);
        
    }
    it('Header verifications', function()
    {
        browser.ignoreSynchronization = true
        OpenRegionalSearchPageVerification();
        VIAVIImageVerification();
        XperttrakContentVerification();
        ToggleHeaderVerification();
        XpertrackThemeVerification();
    })

})