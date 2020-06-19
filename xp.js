
describe('Xpertrak EnterpriseSearch & Performance Application ', function()
{
    var toolTipCount;
    var TotalRegionChartsResults;
    var TotalSystemChartsResults;
    var mouseEle3;
    beforeEach(function()
		{
            browser.ignoreSynchronization = true;       
		originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1500000;
    });
    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });


    function barChartToolTipData()
    {
     element.all(by.css("g.highcharts-tooltip tspan")).count().then(function(size)
     {
         toolTipCount = size;
         console.log(toolTipCount);
     }) 

     element.all(by.css("g.highcharts-tooltip")).each(function(item)			
        {                        
            for(var Counter = 1; Counter<=toolTipCount; Counter++)
                {
                    item.element(by.css("tspan:nth-of-type("+Counter+")")).getText().then(function(value)
                        {
                            console.log("TooltipText="+ value);
                        })
                }        
        })
    }

    
    function RegionHighChartItems()
    {
        element.all(by.xpath("//split-area[1]/regionchart[1]/div[1]/div[2]/div[1]/div[2]/chart[1]/div[1]/*[local-name()='svg'][1]/*[name()='g'][5]/*[name()='g'][1]/*[name()='rect']")).count().then(function(size)
        {
            TotalRegionChartsResults = size;
            //console.log("RegionChartsCount:" +TotalRegionChartsResults);  
            
            for(var i = 1; i<=TotalRegionChartsResults; i++)
                {                    
                var mouseEle = element(by.xpath("//split-area[1]/regionchart[1]/div[1]/div[2]/div[1]/div[2]/chart[1]/div[1]/*[local-name()='svg'][1]/*[name()='g'][5]/*[name()='g'][1]/*[name()='rect']["+i+"]"));
                browser.actions().mouseMove(mouseEle).perform();
                mouseEle.click().then(function()
                    {
                    browser.sleep(10000);
                    barChartToolTipData();
                    })
                }

                expect(TotalRegionChartsResults).toBe(4);  

            })  
        }
        function SystemHighChartItems()
        {
            /* To click on Daily button */
            element(by.xpath("//body//systemchart//button[1]")).click().then(function()
                {
                    browser.sleep(5000);
                })
            element.all(by.xpath("//split-area[2]/systemchart[1]/div[1]/div[2]/div[1]/div[2]/chart[1]/div[1]/*[local-name()='svg'][1]/*[name()='g'][5]/*[name()='g'][1]/*[name()='rect']")).count().then(function(size)
            {
                TotalSystemChartsResults = size;
                //console.log("SystemChartsCount:" +TotalSystemChartsResults);
                
                for(var i = 1; i<=TotalSystemChartsResults; i++)
                    {                    
                    var mouseEle3 = element(by.xpath("//split-area[2]/systemchart[1]/div[1]/div[2]/div[1]/div[2]/chart[1]/div[1]/*[local-name()='svg'][1]/*[name()='g'][5]/*[name()='g'][1]/*[name()='rect']["+i+"]"));
                    browser.actions().mouseMove(mouseEle3).perform();
                    mouseEle3.click().then(function()
                        {
                        browser.sleep(10000);
                        barChartToolTipData();
                        })
                    }

                    expect(TotalSystemChartsResults).toBe(7); 
                })  
            }




it('Login',function()
        {  
            browser.get("http://173.165.99.69/pathtrak/login/view.html#/login");    
            browser.sleep(5000);
            element(by.css("input[placeholder='Username']")).sendKeys("xptadmin");
            element(by.css("input[placeholder='Password']")).sendKeys("xptadmin");
            element(by.buttonText("Sign In")).click().then(function()
	            {
                    browser.sleep(15000);
                    expect(element(by.id('txtSeachBox')).isDisplayed()).toBe(true);	   
                })
                
            //expect(element(by.xpath('/html/body/app/view/div/header-component/div/div[2]/img[2]')).isDisplayed()).toBe(true);

                
       })

       it('Enterprise search rpm',function()
       {
        browser.get('http://173.165.99.69/pathtrak/enterprise/view.html#/entsearch'); 
          element(by.xpath('//*[@id="searchBox"]')).sendKeys("RPM" + protractor.Key.ARROW_DOWN).then(function()
          {
            browser.sleep(5000); 
          })
          element(by.xpath('//*[@id="suggestions"]/li[1]')).click().then(function()
          {
            browser.sleep(5000); 
          })
          expect(element.all(by.css("a[class='ng-binding']")).isPresent()).toBe(false);
          element(by.xpath('//*[@id="searchBox"]')).clear();
         })


it('Enterprise Search Validations',function()
    {

      // To verify Viavi logo is displayed or not

	browser.get('http://173.165.99.69/pathtrak/enterprise/view.html#/entsearch');
		mypic = element(by.css("img[src*='images/viavi-purple-logo.png']"));
                 browser.isElementPresent(mypic).then(function (result) {
                  if(result){
                                        console.log(result);
                                        expect(mypic.getAttribute('src')).toContain('assets/images/viavi-purple-logo.png');
                                   }
                    });
    })
    it('verification of xperttrak header',function()
           {
                element(by.css("div.descriptor:nth-child(3) > p.header-trademark.product")).getText().then(function(value)
                            {
                                expect(value).toBe('XPERTrak™ Enterprise');
                            })
             })
    it('verification of toggle menu header',function()
         {
             element(by.css("button.menu-button.menu-toggle")).click().then(function()
             {
                 element(by.css("span[class='menu-text-ellipse menu-text darkMenu']")).getText().then(function(text)
                     {
                        expect(text).toBe('Regional Performance');
                     })  
             })
            })   
  it('xpertrack theme',function()
     {
               
        
        element(by.xpath('//*[@id="menu-toggle"]/i')).click().then(function()
        {
            browser.sleep(3000);   
        }) 

               expect(element(by.className('dark-theme')).isPresent()).toBe(true);
        
    })

   



it('Enterprise search with invalid text',function()
{ 
  browser.get('http://173.165.99.69/pathtrak/enterprise/view.html#/entsearch');
  element(by.xpath('//*[@id="searchBox"]')).sendKeys("QWE" + protractor.Key.ENTER);
  element(by.xpath('//*[@id="spltcontnr"]/section/div/div[1]/div/div/div/div[2]/div[1]/div/span')).getText().then(function(text)
  {
    expect(text).toBe('QWE - Pick one from the suggested list, if there are no suggestions popping up then element not present.');
    
  })
})



it('Regional performance',function()
     {
      
        
        browser.get("http://173.165.99.69/pathtrak/enterprise/view.html#/entsearch");  
        element(by.id("menuToggle")).click();
        element(by.className("menu-text-ellipse menu-text darkMenu")).click().then(function()
        {
            browser.sleep(3000);
            
        })
        expect(element(by.xpath("//*[local-name() ='g'][4]/*[name()='text']")).isPresent()).toBe(true);


        element(by.xpath('//*[@id="mnrgL"]/i')).click().then(function()
        {
           
            expect(element(by.xpath('//*[@id="selall"]')).isDisplayed()).toBe(false);
            browser.sleep(3000);
            
        })
      
        element(by.xpath('//*[@id="mnrgL"]/i')).click().then(function()
        {
           
            expect(element(by.xpath('//*[@id="selall"]')).isDisplayed()).toBe(true);
            browser.sleep(3000);
            
        })
       

    })




 it('Enterprise Performance',function()
   {
     browser.get('http://173.165.99.69/pathtrak/enterprise/view.html#/home');
     browser.sleep(3000);
   expect(element(by.xpath("//*[local-name() ='g'][4]/*[name()='text']")).isPresent()).toBe(true);
   element(by.xpath('//*[@id="fstdiv2 "]/div/div[3]/select')).$('[value="West"]').click();
})

   

it('verification of system&region charts',function()
   {
    browser.get('http://173.165.99.69/pathtrak/enterprise/view.html#/home');
    RegionHighChartItems();
    browser.refresh();    
    SystemHighChartItems();

   })

   it('Enterprise module Logout',function()
   {
   browser.get('http://173.165.99.69/pathtrak/enterprise/view.html#/entsearch');
   element(by.xpath('//button[@title="Logout"]')).click();
   browser.getTitle().then(function(title)
   {
     console.log(title);
   })
  expect (browser.getTitle()).toBe('XPERTrak™');
})


})

	
            
            