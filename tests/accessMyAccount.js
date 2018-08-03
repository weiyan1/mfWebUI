/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var accessPage = require('../pageObject/accessPage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.9.2 Access My Account Page', function () {
    var Page = new accessPage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleAccessMenu.click();
    });

    // Test My Account -> User Name
    //
    it('Test My Account -> User Name', function () {
        browser.sleep(1000).then(function () {
            globalCommons.waitForClickable(Page.eleMyAccountLeftmenu);
        }).then(function () {
            Page.eleMyAccountLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMyAccountUserNameInput);
        }).then(function () {
            return Page.eleMyAccountUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.signin.username).to.be.true;
        }).then(function () {
            return Page.eleMyAccountUserNameInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        });
    });

    // Test My Account -> Password & Confirm Password
    // Related jiras: ZWUI-959(fixed)
    it('Test My Account -> Password & Confirm Password', function () {
        globalCommons.waitForClickable(Page.eleMyAccountLeftmenu).then(function () {
            Page.eleMyAccountLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleMyAccountPasswordInput);
        }).then(function () {
            return Page.eleMyAccountPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleMyAccountConfirmPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleMyAccountPasswordInput.clear().sendKeys("aBc");
        }).then(function () {
            Page.eleMyAccountConfirmPasswordInput.clear().sendKeys("ABc");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "There is an error on this form").to.be.true;
        }).then(function () {
            return Page.eleMyAccountConfirmPasswordValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Please confirm new password").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountPasswordInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?55555555556666666666777");
        }).then(function () {
            Page.eleMyAccountConfirmPasswordInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?55555555556666666666777");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountPasswordInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?555555555566666666667777");
        }).then(function () {
            Page.eleMyAccountConfirmPasswordInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?555555555566666666667777");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "There is an error on this form").to.be.true;
        }).then(function () {
            return Page.eleMyAccountConfirmPasswordValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Please confirm new password").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountConfirmPasswordInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?55555555556666666666777");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountPasswordInput.clear().sendKeys(browser.params.signin.password);
        }).then(function () {
            Page.eleMyAccountConfirmPasswordInput.clear().sendKeys(browser.params.signin.password);
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        });
    });

    // Test My Account -> Last Name & First Name
    //
    it('Test My Account -> Last Name & First Name', function () {
        globalCommons.waitForClickable(Page.eleMyAccountLeftmenu).then(function () {
            Page.eleMyAccountLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleMyAccountLastNameInput);
        }).then(function () {
            Page.eleMyAccountLastNameInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:1234567<>?");
        }).then(function () {
            Page.eleMyAccountFirstNameInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:1111111<>?");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountLastNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "!@#$%^&*()QWERTYUIOPasdfghjkl:1234567<>?").to.be.true;
        }).then(function () {
            return Page.eleMyAccountFirstNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "!@#$%^&*()QWERTYUIOPasdfghjkl:1111111<>?").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountLastNameInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:1234567<>?1");
        }).then(function () {
            Page.eleMyAccountFirstNameInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:1111111<>?1");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountLastNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "!@#$%^&*()QWERTYUIOPasdfghjkl:1234567<>?").to.be.true;
        }).then(function () {
            return Page.eleMyAccountFirstNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "!@#$%^&*()QWERTYUIOPasdfghjkl:1111111<>?").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountLastNameInput.clear().sendKeys("Security");
        }).then(function () {
            Page.eleMyAccountFirstNameInput.clear().sendKeys("Admin");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountLastNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "Security").to.be.true;
        }).then(function () {
            return Page.eleMyAccountFirstNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "Admin").to.be.true;
        });
    });

    // Test My Account -> Rows To Display
    //
    it('Test My Account -> Rows To Display', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        globalCommons.waitForClickable(Page.eleMyAccountLeftmenu).then(function () {
            Page.eleMyAccountLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleMyAccountRowsToDisplaySpinner);
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.clear().sendKeys("10");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountRowsToDisplaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "10").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.clear().sendKeys("9");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountRowsToDisplaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "10").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.clear().sendKeys("5");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountRowsToDisplaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "10").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.clear().sendKeys("0");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountRowsToDisplaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "10").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.clear().sendKeys("11");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountRowsToDisplaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "11").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.clear().sendKeys("20");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountRowsToDisplaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "20").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.clear().sendKeys("50");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountRowsToDisplaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "50").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.clear().sendKeys("80");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountRowsToDisplaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "80").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.clear().sendKeys("99");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountRowsToDisplaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "99").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.clear().sendKeys("100");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountRowsToDisplaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "100").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.clear().sendKeys("101");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountRowsToDisplaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "100").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountRowsToDisplaySpinner.clear().sendKeys("30");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountRowsToDisplaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "30").to.be.true;
        });
    });

    // Test My Account -> Seconds To Show Error
    //
    it('Test My Account -> Seconds To Show Error', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        globalCommons.waitForClickable(Page.eleMyAccountLeftmenu).then(function () {
            Page.eleMyAccountLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleMyAccountRowsToDisplaySpinner);
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.clear().sendKeys("1");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountSndsToShowErrSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "1").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.clear().sendKeys("0");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountSndsToShowErrSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "1").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.clear().sendKeys("2");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountSndsToShowErrSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "2").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.clear().sendKeys("11");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountSndsToShowErrSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "11").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.clear().sendKeys("15");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountSndsToShowErrSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "15").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.clear().sendKeys("20");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountSndsToShowErrSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "20").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.clear().sendKeys("50");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountSndsToShowErrSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "50").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.clear().sendKeys("80");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountSndsToShowErrSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "80").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.clear().sendKeys("99");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountSndsToShowErrSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "99").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.clear().sendKeys("100");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountSndsToShowErrSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "100").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.clear().sendKeys("101");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountSndsToShowErrSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "100").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountSndsToShowErrSpinner.clear().sendKeys("10");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountSndsToShowErrSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "10").to.be.true;
        });
    });

    // Test My Account -> Idle Session Timeout (min)
    //
    it('Test My Account -> Idle Session Timeout (min)', function () {
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        globalCommons.waitForClickable(Page.eleMyAccountLeftmenu).then(function () {
            Page.eleMyAccountLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleMyAccountIdleSessionTOSpinner);
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.clear().sendKeys("1");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountIdleSessionTOSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "1").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.clear().sendKeys("0");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountIdleSessionTOSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "1").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.clear().sendKeys("2");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountIdleSessionTOSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "2").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.clear().sendKeys("5");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountIdleSessionTOSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "5").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.clear().sendKeys("10");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountIdleSessionTOSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "10").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.clear().sendKeys("16");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountIdleSessionTOSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "16").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.clear().sendKeys("19");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountIdleSessionTOSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "19").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.clear().sendKeys("20");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountIdleSessionTOSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "20").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.clear().sendKeys("29");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountIdleSessionTOSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "29").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.clear().sendKeys("30");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountIdleSessionTOSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "30").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.clear().sendKeys("31");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountIdleSessionTOSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "30").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleMyAccountIdleSessionTOSpinner.clear().sendKeys("15");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleMyAccountIdleSessionTOSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === "15").to.be.true;
        });
    });

    // Test My Account -> Workspace Status
    //
    it('Test My Account -> Workspace Status', function () {
        globalCommons.waitForClickable(Page.eleMyAccountLeftmenu).then(function () {
            Page.eleMyAccountLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMyAccountWorkspaceStatus);
        }).then(function () {
            return Page.eleMyAccountWorkspaceStatus.getText();
        }).then(function (message) {
            expect(message === 'Workspace: access granted' || message === 'Workspace: access denied').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});