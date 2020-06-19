function commonMethods()
{
this.startUp = function()
    {
        beforeEach(function()
        {
            browser.ignoreSynchronization = true;            
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 1500000;
        });
        afterEach(function()
        {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    }
}

module.exports = new commonMethods();
