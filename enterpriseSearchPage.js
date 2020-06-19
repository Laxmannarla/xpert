
var common = require('../commonMethods/startUpSyncMethod');
var enterprisesearch = require('../../../pages/enterpriseSearchPO/enterpriseSearch.po');
var sync = require('../../../util/testData/constantTime');
const { get } = require('../../../pages/enterpriseSearchPO/enterpriseSearch.po');

describe('Xpertrak Application Login Page:', function()
{        
    
    common.startUp();
    it('Enterprise search field editable validation ',function()
    {
      enterprisesearch.enterSearchitem(RPM 1).then(function()
      {
        enterprisesearch.verifySugession();
      })
    })

    it('Enterprise search with valid text ',function()
        {             
          enterprisesearch.searchAllitems()-accordionit('Enterprise search addding one rpm port',function(){

            enterprisesearch.get('http://173.165.99.66/pathtrak/enterprise/view.html#/entsearch');

            enterprisesearch.enterSearchitem(RPM 1 Port 1);
               enterprisesearch.clickSugessionItem.then(function()
             {
              sync.wait(5000);
             })

             enterprisesearch.verifySugession();
          })

        })

         /* element.all(by.xpath('//div[@class="search-wrapper"]/div'))-accordionit('Enterprise search addding one rpm port',function()
            {
              browser.waitForAngularEnabled(false);
              browser.get('http://173.165.99.66/pathtrak/enterprise/view.html#/entsearch');
          
              
               browser.get('http://173.165.99.66/pathtrak/enterprise/index.html#');
          browser.actions().mouseMove(element(by.id("searchBox")).sendKeys(protractor.Key.ENTER)).perform().then(function()
               {                 
                element(by.xpath('//*[@id="searchBox"]')).sendKeys(RPM 1 Port 1).then(function()
              {
                browser.sleep(5000);
              })
            })
          element(by.xpath('//*[@id="suggestions"]/li[1]')).click().then(function()
             {
               browser.sleep(5000);
             })
          expect(element.all(by.css("a[class='ng-binding']")).isPresent()).toBe(true);
          })*/
          
          
          it('Enterprise search with invalid text',function()
          { 
            browser.waitForAngularEnabled(false);
            browser.get('http://173.165.99.67/pathtrak/enterprise/view.html#/entsearch');
            browser.get('http://173.165.99.66/pathtrak/enterprise/index.html#');
          browser.actions().mouseMove(element(by.id("searchBox")).sendKeys(protractor.Key.ENTER)).perform().then(function()
               {                 
                element(by.xpath('//*[@id="searchBox"]')).sendKeys("QWE" + protractor.Key.ENTER).then(function()
              {
                browser.sleep(5000);
              })
            })
            
            element(by.xpath('//*[@id="spltcontnr"]/section/div/div[1]/div/div/div/div[2]/div[1]/div/span')).getText().then(function(text)
            {
             console.log(text);
            })
          })

          it('Enterprise search field validation after sugession added',function()
              {
                   enterprisesearch.enterSearchitem(RPM 1).then(function()
                   {
                        enterprisesearch.clickSugessionItem();
                        enterprisesearch.verifyEditsearchbox();
                   })
               })
          
          function searchrpm(name)
              {
                var name;
                browser.actions().mouseMove(element(by.id("searchBox")).sendKeys(protractor.Key.ENTER)).perform().then(function()
               {                 
                element(by.xpath('//*[@id="searchBox"]')).sendKeys(name).then(function()
              {
                browser.sleep(5000);
              })
            })
              element.all(by.xpath('//*[@id="suggestions"]/li')).count().then(function(count)
              //element.all(by.className("blockSpan ng-binding ng-scope")).count().then(function(count)
                {
                   
                   element.all(by.xpath('//*[@id="suggestions"]/li')).getText().then(function(item)
                 {
                
                
                    for(var i=0;i<count;i++)
                  {
                      //if(expect(item[i]).toContain(name))
                      if(item[i].indexOf(name) != -1)
                   {
                     
                      
                     
                       element(by.xpath('//*[@id="suggestions"]/li['+(i+1)+']')).click().then(function()
                       {
                         browser.sleep(3000);
                       })
                      // element(by.xpath('//div[@class="panel panel-default panel-open"]/div/h4/a/span')).getText().then(function(text)
                      //{
                        //console.log(text);
                      //})
                     //element(by.css('#suggestions > li:nth-child("+(i+1)+")')).click().then(function()
                      //element(by.xpath('//*[@id="searchBox"]')).clear();
                    }
                  }
                }); 
            });
          //
          it('Enterprise search rpm port addding multiple suggestions',function()
            {
              browser.waitForAngularEnabled(false);
              browser.get('http://173.165.99.66/pathtrak/enterprise/view.html#/entsearch');
          
              
               browser.get('http://173.165.99.66/pathtrak/enterprise/index.html#');
          searchrpm("RPM 1 Port 4");
            element(by.xpath('//*[@id="searchBox"]')).clear();
            searchrpm("RPM 1 Port 3");
            element(by.xpath('//*[@id="searchBox"]')).clear();
            searchrpm("RPM 1 Port 5");
            element(by.xpath('//*[@id="searchBox"]')).clear();
            searchrpm("RPM 1 Port 6");
            element(by.xpath('//*[@id="searchBox"]')).clear();
            searchrpm("RPM 1 Port 7");
            element.all(by.xpath('//div[@class="search-wrapper"]/div')).getText().then(function(text)
            {
              var valid = "RPM 1 Port 4";
              if(text.indexOf(valid) == -1)
              {
                console.log(text);
              }
              
            })


        })
    }
            
    
          


   



  
