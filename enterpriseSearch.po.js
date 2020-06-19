const { browser, ExpectedConditions } = require("protractor");

function EnterpriseSearchobject()
{


var allSearchitems = element.all(by.xpath('//div[@class="search-wrapper"]/div'));
var searchField = element(by.xpath('//*[@id="searchBox"]'));
var searchBox = element(by.id("searchBox");
var sugessionItem = element(by.xpath('//*[@id="suggestions"]/li[1]'));
var verifySugession = element.all(by.css("a[class='ng-binding']"));
var invalidSearch = element(by.xpath('//*[@id="spltcontnr"]/section/div/div[1]/div/div/div/div[2]/div[1]/div/span'));
this.get = function(url){

    browser.get(url);
};

this.searchAllitems = function(){

    allSearchitems();
};

this.enterSearchitem = function(searchitem){

    browser.actions().mouseMove(searchBox).sendKeys(protractor.Key.ENTER).perform().then(function()
    {                 
     element(by.xpath('//*[@id="searchBox"]')).sendKeys("searchitem" + protractor.Key.ENTER).then(function()
   {
     browser.sleep(5000);
   })
 })
    searchField.sendkeys(searchitem);
};

this.verifyEditsearchbox = function()
{
      searchField.getText().then(function(text)
      {
          sugessionItem.getText().then(function(sugessionItemvalue)
          {
            expect(text).toBe(sugessionItemvalue);
          })
                  
      })
};


this.clickSugessionItem = function(){

    sugessionItem.click();
};


this.verifySugession = function(){

    expect((verifySugession).isPresent()).toBe(true);
};

this.invalidErrormsg = function()
{

    expect((invalidSearch).isPresent()).toBe(true);
}


}

module.exports = new EnterpriseSearchobject();