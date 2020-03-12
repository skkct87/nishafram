class LoginPage  {

    
    get username() { return $('#login_email') }
    get password() { return $('#login_pass') }
    get signin() { return $('#login_submit > span') }
    get alert() { return $('#div > p-messages > div') }
    get logout(){ return $('body > app-root > app-main > div > div > div.layout-main > app-breadcrumb > div > div > a:nth-child(3) > i')}
    get dashboard(){ return $('body > app-root > app-main > div > div > div.layout-menu > p-scrollpanel > div > div.ui-scrollpanel-wrapper > div > app-menu > ul > li.ng-tns-c2-18.ng-star-inserted.active-menuitem > a > span')}
    get loginerr() {return $('=Incorrect usermail or password.')}

}

module.exports = new LoginPage();

