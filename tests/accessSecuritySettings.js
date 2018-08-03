/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var accessPage = require('../pageObject/accessPage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.9.5 Access Security Settings Page', function () {
    var Page = new accessPage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleAccessMenu.click();
    });

    // Test Security Settings -> Save Security
    //
    it('Test Security Settings -> Save Security', function () {
        browser.sleep(1000).then(function () {
            Page.saveSecurity("keystoreFileName1", "keystorePassword1", "cipherSpec1", "11111", "33333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetKeystoreFileNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "keystoreFileName1").to.be.true;
        }).then(function () {
            return Page.eleSecuritySetKeystorePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "keystorePassword1").to.be.true;
        }).then(function () {
            return Page.eleSecuritySetCipherSpecInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "cipherSpec1").to.be.true;
            // }).then(function () {
            //     return Page.eleSecuritySetClientAuthCheck.getAttribute("checked");
            // }).then(function (message) {
            //     expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleSecuritySetSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "11111").to.be.true;
        }).then(function () {
            return Page.eleSecuritySetNonSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "33333").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test Security Settings -> Reset Security
    //
    it('Test Security Settings -> Reset Security', function () {
        Page.saveSecurity("keystoreFileName1", "keystorePassword1", "cipherSpec1", "11111", "33333").then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.resetSecurity("keystoreFileName2", "keystorePassword2", "cipherSpec2", "22222", "44444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSecuritySetKeystoreFileNameInput);
        }).then(function () {
            return Page.eleSecuritySetKeystoreFileNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "keystoreFileName1").to.be.true;
        }).then(function () {
            return Page.eleSecuritySetKeystorePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "keystorePassword1").to.be.true;
        }).then(function () {
            return Page.eleSecuritySetCipherSpecInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "cipherSpec1").to.be.true;
            // }).then(function () {
            //     return Page.eleSecuritySetClientAuthCheck.getAttribute("checked");
            // }).then(function (message) {
            //     expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleSecuritySetSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "11111").to.be.true;
        }).then(function () {
            return Page.eleSecuritySetNonSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "33333").to.be.true;
        });
    });

    // Test Security Settings -> Keystore File Name
    //
    it('Test Security Settings -> Keystore File Name', function () {
        Page.saveSecurity("!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567", "keystorePassword", "cipherSpec", false, 11111, 33333).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetKeystoreFileNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.saveSecurity("!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./5555555555666666666677777777778888888888999999999900000000001111111111222222222212345678", "keystorePassword", "cipherSpec", false, 11111, 33333);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetKeystoreFileNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test Security Settings -> Keystore Password
    //
    it('Test Security Settings -> Keystore Password', function () {
        Page.saveSecurity("keystoreFileName", "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567", "cipherSpec", "11111", "33333").then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetKeystorePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.saveSecurity("keystoreFileName", "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./5555555555666666666677777777778888888888999999999900000000001111111111222222222212345678", "cipherSpec", "11111", "33333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetKeystorePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test Security Settings -> Cipher Specification
    //
    it('Test Security Settings -> Cipher Specification', function () {
        Page.saveSecurity("keystoreFileName", "keystorePassword", "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567", "11111", "33333").then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetCipherSpecInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.saveSecurity("keystoreFileName", "keystorePassword", "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./5555555555666666666677777777778888888888999999999900000000001111111111222222222212345678", "11111", "33333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetCipherSpecInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test Security Settings -> Secure Port
    //
    it('Test Security Settings -> Secure Port', function () {
        Page.saveSecurity("keystoreFileName", "keystorePassword", "cipherSpec", "0", "33333").then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "0").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSecuritySetSecurePortInput.clear().sendKeys("1");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "1").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSecuritySetSecurePortInput.clear().sendKeys("100");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "100").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSecuritySetSecurePortInput.clear().sendKeys("9999");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "9999").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSecuritySetSecurePortInput.clear().sendKeys("44444");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "44444").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSecuritySetSecurePortInput.clear().sendKeys("65535");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "65535").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSecuritySetSecurePortInput.clear().sendKeys("65536");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetSecurePortValidateMsg.getText();
        }).then(function (message) {
            expect(message === '65536 is invalid, must be equal to or less than 65,535').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(2000);
        }).then(function () {
            Page.eleSecuritySetSecurePortInput.clear().sendKeys("65535");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "65535").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test Security Settings -> Non-secure Port
    //
    it('Test Security Settings -> Non-secure Port', function () {
        Page.saveSecurity("keystoreFileName", "keystorePassword", "cipherSpec", "11111", "0").then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetNonSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "0").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSecuritySetNonSecurePortInput.clear().sendKeys("1");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetNonSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "1").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSecuritySetNonSecurePortInput.clear().sendKeys("100");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetNonSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "100").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSecuritySetNonSecurePortInput.clear().sendKeys("9999");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetNonSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "9999").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSecuritySetNonSecurePortInput.clear().sendKeys("44444");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetNonSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "44444").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSecuritySetNonSecurePortInput.clear().sendKeys("65535");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetNonSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "65535").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSecuritySetNonSecurePortInput.clear().sendKeys("65536");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetNonSecurePortValidateMsg.getText();
        }).then(function (message) {
            expect(message === '65536 is invalid, must be equal to or less than 65,535').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(2000);
        }).then(function () {
            Page.eleSecuritySetNonSecurePortInput.clear().sendKeys("65535");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSecuritySetNonSecurePortInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "65535").to.be.true;
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