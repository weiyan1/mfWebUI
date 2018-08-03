/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var globalNaviPage = require('../pageObject/globalNaviPage.js');
var globalCommons = require('../utility/common.js');
var SSESOpsPage = require('../pageObject/SSESOpsPage.js');
describe('6.2 Global Navigation Page', function () {
    var Page = new globalNaviPage();
    var ssesOpsPage = new SSESOpsPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });

    /**
     * To signin with incorrect username.
     * Expect error occurs.
     */
    it('Should display signin error message', function () {
        browser.sleep(1000).then(function () {
            Page.signout();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleWorkspaceMenu, false, {timeout: 10000});
        }).then(function () {
            Page.signin("incorrect username", undefined);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            expect(Page.eleSigninError.isDisplayed()).to.eventually.be.true;
        });
    });

    /**
     * To signin with incorrect password.
     * Expect error occurs.
     */
    it('Should display signin error message', function () {
        Page.visitPage("/MF_WebUI").then(function () {
            Page.signin(undefined, "incorrect password");
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            expect(Page.eleSigninError.isDisplayed()).to.eventually.be.true;
        });
    });

    /**
     * To signin with correct username & password.
     * username: defined in conf.js
     * password: defined in conf.js
     */
    it('Should Signin System by user defined in conf.js', function () {
        Page.visitPage("/MF_WebUI").then(function () {
            Page.signin();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            //Page.untils.waitForElementPresent(Page.eleWorkspaceMenu);
            expect(Page.eleWorkspaceMenu.isPresent()).to.eventually.be.true;
        });
    });

    /**
     * To re-signin after signout.
     * username: defined in conf.js
     * password: defined in conf.js
     */
    it('Should re-signin after signout', function () {
        Page.signout().then(function () {
            globalCommons.waitForElementPresent(Page.eleWorkspaceMenu, false, {timeout: 10000});
        }).then(function () {
            Page.signin();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            expect(Page.eleWorkspaceMenu.isPresent()).to.eventually.be.true;
        });
    });

    /**
     * Re-signin then click 'master' -> 'My Account'
     */
    it('Test "My Account"', function () {
        Page.signout().then(function () {
            globalCommons.waitForElementPresent(Page.eleWorkspaceMenu, false, {timeout: 10000});
        }).then(function () {
            Page.signin();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleWorkspaceMenu, true, {timeout: 10000});
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSigninMenu);
        }).then(function () {
            Page.eleSigninMenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleMyAccountMenu);
        }).then(function () {
            Page.eleMyAccountMenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMyAccountTitle, true, {timeout: 10000});
        }).then(function () {
            return Page.eleMyAccountTitle.getText();
        }).then(function (message) {
            expect(message === 'My Account').to.be.true;
        });
    });

    /**
     * Re-signin then click 'master' -> 'Errors'
     */
    it('Test "Errors"', function () {
        Page.signout().then(function () {
            globalCommons.waitForElementPresent(Page.eleWorkspaceMenu, false, {timeout: 10000});
        }).then(function () {
            Page.signin();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleWorkspaceMenu, true, {timeout: 10000});
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSSESMenu);
        }).then(function () {
            Page.eleSSESMenu.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            ssesOpsPage.delConnYes("SSESOpsConnA0001");
        }).then(function () {
            ssesOpsPage.addConn("SSESOpsConnA0001", " ", " ", " ");
        }).then(function () {
            globalCommons.waitForElementPresent(ssesOpsPage.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSigninMenu);
        }).then(function () {
            Page.eleSigninMenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleErrorsMenu);
        }).then(function () {
            Page.eleErrorsMenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleErrorsTitle, true, {timeout: 10000});
        }).then(function () {
            return Page.eleErrorsTitle.getText();
        }).then(function (message) {
            expect(message === 'Errors').to.be.true;
        }).then(function () {
            return Page.eleErrorsTableHeader1.getText();
        }).then(function (message) {
            expect(message === 'Error').to.be.true;
        }).then(function () {
            return Page.eleErrorsTableHeader2.getText();
        }).then(function (message) {
            expect(message === 'Date/Time').to.be.true;
        }).then(function () {
            return Page.eleErrorsMsg1.getText();
        }).then(function (message) {
            expect(message === 'Invalid data: ; A non-empty, non-blank value is required; A non-empty, non-blank value is required').to.be.true;
        });
    });

    /**
     * To click 'Contact Master' in signin dialog .
     */
    it('Should display Contact Master info', function () {
        Page.visitPage("/MF_WebUI").then(function () {
            globalCommons.waitForClickable(Page.eleSigninMenu);
        }).then(function () {
            Page.eleSigninMenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleContactMaster);
        }).then(function () {
            Page.eleContactMaster.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleContactMasterDialog);
        }).then(function () {
            expect(Page.eleContactMasterDialog.isPresent()).to.eventually.be.true;
        });
    });

    /**
     * To test About Dialog.
     */
    it('Should display the About Dialog', function () {
        Page.visitPage("/MF_WebUI").then(function () {
            globalCommons.waitForClickable(Page.eleAboutMenu);
        }).then(function () {
            Page.eleAboutMenu.click();
        }).then(function () {
            Page.untils.waitForElementPresent(Page.eleTibcoHomeUrl);
        }).then(function () {
            return Page.eleTibcoHomeUrl.getAttribute('href');
        }).then(function (message) {
            expect(message === 'http://www.tibco.com/').to.be.true;
        });
    });


    it('It is only for console', function () {
        Page.visitPage("/MF_WebUI").then(function () {
            Page.signin();
        }).then(function () {
            console.log("Finish run " + __filename.slice(__dirname.length + 1));
        }).then(function () {
            browser.sleep(1000);
        });
    });
});