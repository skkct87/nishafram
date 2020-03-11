const LoginPage = require("E:/skumar-auto/page-object/loginpage.js")



describe('whitehall next gen page', function() {


        it('should have open the login page', function() {
        
        browser.url("https://nexgntest.whitehallfinance.com");
        browser.maximizeWindow();
        //assert.equal("https://nexgntest.whitehallfinance.com", url);
        browser.pause(1000)});

        it('should deny access with wrong creds', function() {
                       
            LoginPage.username.click()
            browser.pause(1000)
            LoginPage.username.setValue('admin@gmail.com')
            browser.pause(1000)
            LoginPage.password.click()
            browser.pause(1000)
            LoginPage.password.setValue('@Tarun$123')
            browser.pause(1000)
            LoginPage.signin.click()  
            //expect(LoginPage.alert.getText()).to.contain('Incorrect usermail or password.')
        })


        it('should allow access with creds', function() {
        LoginPage.username.click()
        browser.pause(1000)
        LoginPage.username.setValue('tecdune@tecdune.com')
        browser.pause(1000)
        LoginPage.password.click()
        browser.pause(1000);
        LoginPage.password.setValue('Whitehall2020!')
        browser.pause(1000)
        LoginPage.signin.click()
        browser.takeScreenshot()
        browser.pause(10000)
        LoginPage.logout.click()
       
    })});

    

