const LoginPage = require("E:/skumar-auto/page-object/loginpage.js")
const AdminDashboard = require("E:/skumar-auto/page-object/admindashboardpage.js")



describe('whitehall next gen Dashboard & Tabs', function() {


        it('should have open the login page', function() {
            browser.url("https://nexgntest.whitehallfinance.com");
        browser.maximizeWindow();
        browser.pause(1000)
    });  



        it('should allow access with creds', function() {
            LoginPage.username.click()
            browser.pause(1000)
            LoginPage.username.setValue('tecdune@tecdune.com')
            assert.equal('tecdune@tecdune.com',LoginPage.username.getValue())
            browser.pause(1000)
            LoginPage.password.click()
            browser.pause(1000);
            LoginPage.password.setValue('Whitehall2020!')
            assert.equal('Whitehall2020!',LoginPage.password.getValue())
            browser.pause(1000)
            LoginPage.signin.click()
            browser.takeScreenshot()
            browser.pause(1000)
        });


        it('should click on dashboards', function() {

            AdminDashboard.operations.click()
            browser.pause(1000)
            AdminDashboard.operationsinv.click()
            browser.pause(1000)
        });


        it('should click on Invoice tabs & screens', function() {
            AdminDashboard.invoices.click()
            browser.pause(1000)
            AdminDashboard.invoicesnew.click()
            browser.pause(1000)
            AdminDashboard.publishinvoice.click()
            browser.pause(1000)
            AdminDashboard.uploadinvoice.click()
            browser.pause(1000)
            AdminDashboard.invoicehistory.click()
        });

        it('should click on Supplier Setup tabs & screens', function() {

            AdminDashboard.suppliersetup.click()
            browser.pause(1000)
            AdminDashboard.suppliercompnies.click()
            browser.pause(1000)
            AdminDashboard.uploadsupplier.click()
            browser.pause(1000)
        });



})
