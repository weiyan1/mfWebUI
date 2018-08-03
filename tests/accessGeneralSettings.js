/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var accessPage = require('../pageObject/accessPage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.9.6 Access General Settings Page', function () {
    var Page = new accessPage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleAccessMenu.click();
    });

    // Test General Settings -> Save a valid RV Installation Path
    //
    it('Test General Settings -> Save a valid RV Installation Path', function () {
        browser.sleep(1000).then(function () {
            Page.saveGeneral();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo)
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleGeneralSetRvInstallPathInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.access.rvInstallationPath).to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test General Settings -> Reset RV Installation Path
    //
    it('Test General Settings -> Reset RV Installation Path', function () {
        Page.saveGeneral().then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.resetGeneral("abc");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleGeneralSetRvInstallPathInput);
        }).then(function () {
            return Page.eleGeneralSetRvInstallPathInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.access.rvInstallationPath).to.be.true;
        });
    });

    // Test General Settings -> Save an invalid RV Installation Path
    //
    it('Test General Settings -> Save an invalid RV Installation Path', function () {
        Page.saveGeneral("abc").then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo)
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleGeneralSetRvInstallPathValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("tibrvj.jar does not exist")).to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleGeneralSetRvInstallPathInput.clear().sendKeys(browser.params.access.rvInstallationPath);
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo)
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test General Settings -> Save an empty RV Installation Path
    //
    it('Test General Settings -> Save an empty RV Installation Path', function () {
        Page.saveGeneral().then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo)
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleGeneralSetRvInstallPathInput);
        }).then(function () {
            Page.eleGeneralSetRvInstallPathInput.clear();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo)
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleGeneralSetRvInstallPathInput.clear().sendKeys(browser.params.access.rvInstallationPath);
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});