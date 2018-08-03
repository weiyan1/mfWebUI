/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var Page = require('../utility/page.js');
var globalCommons = require('../utility/common.js');
var globalNaviPage = (function () {
    function globalNaviPage() {
        this.eleScreenElement = element(by.css('.workSpaceMenuItem'));

        this.eleWorkspaceMenu = element(by.css('.workSpaceMenuItem'));
        this.eleAboutMenu = element(by.css('.aboutMenuItem'));
        this.eleSigninMenu = element(by.id('signInMenuItem'));

        this.eleUsernameInput = element(by.css('#gwt-debug-loginUserName input'));
        this.elePasswordInput = element(by.css('#gwt-debug-loginPassword input'));
        this.eleSigninButton = element(by.id('gwt-debug-signInButton'));
        this.eleContactMaster = element(by.css('#LoginForm .gwt-Anchor'));
        this.eleMyAccountMenu = element(by.xpath('//a[text()="My Account"]'));
        this.eleErrorsMenu = element(by.xpath('//a[text()="Errors"]'));
        this.eleSignoutButton = element(by.xpath('//a[text()="Sign Out"]'));
        this.eleSigninError = element(by.css('#LoginForm .form-info-content'));
        this.eleMyAccountTitle = element(by.css('.content-title-panel'));
        this.eleErrorsTitle = element(by.css('.dialogTopCenterInner'));
        this.eleErrorsTableHeader1 = element(by.css('.GCOBQG-CCN'));
        this.eleErrorsTableHeader2 = element(by.css('.GCOBQG-CMN'));
        this.eleErrorsMsg1 = element(by.xpath('//div[@class="GCOBQG-CH"]//tr[1]/td[1]/div'));

        this.eleAboutDialog = element(by.css('.dialogTopCenterInner'));
        this.eleTibcoHomeUrl = element(by.xpath('//a[text()="TIBCO Home Page"]'));
        this.eleMFProductUrl = element(by.xpath('//a[text()="TIBCO Mainframe Integration Products"]'));

        this.eleContactMasterDialog = element(by.css('.gwt-DialogBox'));

        this.eleSSESMenu = element(by.id('__MENU_ID_MANAGE'));
        this.eleREDMenu = element(by.id('__MENU_ID_RED'));
        this.eleConfigureMenu = element(by.id('__MENU_ID_CONFIGURE'));
        this.eleDeployMenu = element(by.id('__MENU_ID_DEPLOY'));
        this.eleDefineMenu = element(by.id('__MENU_ID_DEFINE'));
        this.eleAccessMenu = element(by.id('__MENU_ID_PERMISSION'));
        this.eleWorkspaceSelected = function (workspacename) {
            return element(by.xpath('//a[text()="' + workspacename + '"]'));
        }

        //this.eleContactMasterInfo = element(by.xpath('//div[text()="master, Admin Security"'))
        //this.eleTibcoHomeUrl = element(by.css('a[href*="http://www.tibco.com"]'));
    }

    globalNaviPage.prototype = new Page();
    globalNaviPage.prototype.constructor = globalNaviPage;
    /**
     * This function is used for Signin
     * @param username
     * @param password
     */
    globalNaviPage.prototype.signin = function (username, password) {
        var deferred = protractor.promise.defer(), that = this;
        username = username || browser.params.signin.username;
        password = password || browser.params.signin.password;

        globalCommons.waitForClickable(this.eleSigninMenu).then(function () {
            globalCommons.waitForElementPresent(that.eleScreenElement, false, {timeout: 10000});
        }).then(function () {
            that.eleSigninMenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleUsernameInput);
        }).then(function () {
            that.elePasswordInput.sendKeys(password);
        }).then(function () {
            that.eleUsernameInput.sendKeys(username);
            // }).then(function () {
            //     globalCommons.waitForClickable(that.eleUsernameInput);
            // }).then(function () {
            //     that.eleUsernameInput.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleSigninButton);
        }).then(function () {
            that.eleSigninButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    /**
     * This function is used for Signout
     */
    globalNaviPage.prototype.signout = function () {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForClickable(that.eleSigninMenu).then(function () {
            return that.eleScreenElement.isDisplayed();
        }).then(function (result) {
            if (result) {
                that.eleSigninMenu.click().then(function () {
                    globalCommons.waitForClickable(that.eleSignoutButton);
                }).then(function () {
                    that.eleSignoutButton.click();
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                deferred.fulfill();
            }
        });
        return deferred.promise;
    };
    /**
     * This function is used for select workspace
     */
    globalNaviPage.prototype.selectWorkspace = function (workspacename) {
        var deferred = protractor.promise.defer(), that = this;
        workspacename = workspacename || browser.params.workspace.name;

        globalCommons.waitForElementPresent(that.eleScreenElement, true, {timeout: 10000}).then(function () {
            that.eleScreenElement.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleWorkspaceSelected(workspacename));
        }).then(function () {
            that.eleWorkspaceSelected(workspacename).click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    return globalNaviPage;
})();

module.exports = globalNaviPage;