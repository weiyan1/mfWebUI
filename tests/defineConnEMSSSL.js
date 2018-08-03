/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.9 Define Connections EMS SSL Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a EMS SSL Definition successfully.
    //
    it('Should add a EMS SSL Definition successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSL0001");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a EMS SSL Definition successfully, then replicate it.
    //
    it('Should add a EMS SSL Definition, then replicate it successfully', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0002-copy").then(function () {
            Page.delConnEmsSslYes("ConnEMSSSL0002");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateConnEmsSsl("ConnEMSSSL0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a EMS SSL Definition successfully, then update it.
    //
    it('Should add a EMS SSL Definition, then update it successfully', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0003").then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0003", "abcdefg", false, "AAA", "BBB", "CCC", false, false, false, "DDD", false, "EEE", "FFF", "GGG", false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateConnEmsSsl("ConnEMSSSL0003", "hijklmn", true, "HHH", "III", "JJJ", true, true, true, "KKK", true, "LLL", "MMM", "NNN", true, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSL0003').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslAuthOnlyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHH').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'III').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJJ').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableFipsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableSslv3Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTls1Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslExpectEmsHostnameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'KKK').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslVerifyHostnameCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LLL').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MMM').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'NNN').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableDebugTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a EMS SSL Definition, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a EMS SSL Definition, cancel the changes, then confirm the cancel operation', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0004").then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0004", "abcdefg", false, "AAA", "BBB", "CCC", false, false, false, "DDD", false, "EEE", "FFF", "GGG", false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelConnEmsSslYes("ConnEMSSSL0004", "hijklmn", true, "HHH", "III", "JJJ", true, true, true, "KKK", true, "LLL", "MMM", "NNN", true, true);
        }).then(function () {
            Page.eleConnsEmsSslLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("ConnEMSSSL0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsSslNameInput);
        }).then(function () {
            return Page.eleConnEmsSslNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSL0004').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslAuthOnlyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAA').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBB').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CCC').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableFipsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableSslv3Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTls1Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslExpectEmsHostnameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'DDD').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslVerifyHostnameCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EEE').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'FFF').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'GGG').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableDebugTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a EMS SSL Definition, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a EMS SSL Definition, cancel the changes, then discard the cancel operation', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0005").then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0005", "abcdefg", false, "AAA", "BBB", "CCC", false, false, false, "DDD", false, "EEE", "FFF", "GGG", false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelConnEmsSslNo("ConnEMSSSL0005", "hijklmn", true, "HHH", "III", "JJJ", true, true, true, "KKK", true, "LLL", "MMM", "NNN", true, true);
        }).then(function () {
            return Page.eleConnEmsSslNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSL0005').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslAuthOnlyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHH').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'III').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJJ').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableFipsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableSslv3Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTls1Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslExpectEmsHostnameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'KKK').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslVerifyHostnameCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LLL').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MMM').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'NNN').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableDebugTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a EMS SSL Definition, make some changes, then reset it.
    //
    it('Should add a EMS SSL Definition, make some changes, then reset it', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0006").then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0006", "abcdefg", false, "AAA", "BBB", "CCC", false, false, false, "DDD", false, "EEE", "FFF", "GGG", false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetConnEmsSsl("ConnEMSSSL0006", "hijklmn", true, "HHH", "III", "JJJ", true, true, true, "KKK", true, "LLL", "MMM", "NNN", true, true);
        }).then(function () {
            return Page.eleConnEmsSslNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSL0006').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslAuthOnlyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAA').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBB').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CCC').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableFipsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableSslv3Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTls1Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslExpectEmsHostnameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'DDD').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslVerifyHostnameCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EEE').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'FFF').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'GGG').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableDebugTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a EMS SSL Definition, then add a EMS SSL Definition with the same name, then confirm the overwrite operation.
    //
    it('Should add a EMS SSL Definition to overwrite a EMS SSL Definition, then confirm the overwrite operation', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0007").then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0007", "abcdefg", false, "AAA", "BBB", "CCC", false, false, false, "DDD", false, "EEE", "FFF", "GGG", false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0007", "hijklmn", true, "HHH", "III", "JJJ", true, true, true, "KKK", true, "LLL", "MMM", "NNN", true, true);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleConnEmsSslNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSL0007').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslAuthOnlyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHH').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'III').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJJ').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableFipsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableSslv3Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTls1Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslExpectEmsHostnameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'KKK').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslVerifyHostnameCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LLL').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MMM').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'NNN').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableDebugTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a EMS SSL Definition, then add a EMS SSL Definition with the same name, then discard the overwrite operation.
    //
    it('Should add a EMS SSL Definition to overwrite a EMS SSL Definition, then discard the overwrite operation', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0008").then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0008", "abcdefg", false, "AAA", "BBB", "CCC", false, false, false, "DDD", false, "EEE", "FFF", "GGG", false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0008", "hijklmn", true, "HHH", "III", "JJJ", true, true, true, "KKK", true, "LLL", "MMM", "NNN", true, true);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleConnsEmsSslLeftmenu);
        }).then(function () {
            Page.eleConnsEmsSslLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("ConnEMSSSL0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleConnEmsSslNameInput);
        }).then(function () {
            return Page.eleConnEmsSslNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSL0008').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslAuthOnlyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAA').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBB').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CCC').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableFipsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableSslv3Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTls1Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslExpectEmsHostnameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'DDD').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslVerifyHostnameCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EEE').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'FFF').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'GGG').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableDebugTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a EMS SSL Definition, delete it, then confirm the delete operation.
    //
    it('Should add a EMS SSL Definition, delete it, then confirm the delete operation', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0009").then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSL0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("ConnEMSSSL0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a EMS SSL Definition, delete it, then discard the delete operation.
    //
    it('Should add a EMS SSL Definition, delete it, then discard the delete operation', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0010").then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delConnEmsSslNo("ConnEMSSSL0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("ConnEMSSSL0010");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.true;
        });
    });

    // Test 'Audit' & 'Refresh' button.
    //
    it('Test Audit & Refresh button', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0011").then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0011");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleDeleteButton.getAttribute('disabled');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRefreshButton);
        }).then(function () {
            Page.eleRefreshButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleDeleteButton.getAttribute('disabled');
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAuditButton);
        }).then(function () {
            return Page.eleTableHeader3.getText();
        }).then(function (message) {
            expect(message === 'LDAP URL').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAuditButton);
        }).then(function () {
            Page.eleAuditButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleTableHeader3.getText();
        }).then(function (message) {
            expect(message === 'Modified On').to.be.true;
        }).then(function () {
            Page.eleAuditButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleTableHeader3.getText();
        }).then(function (message) {
            expect(message === 'LDAP URL').to.be.true;
        });
    });

    // Test EMS SSL Definition Details panel fields default value.
    //
    it('Test EMS SSL Definition Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleConnsEmsSslLeftmenu);
        }).then(function () {
            Page.eleConnsEmsSslLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsSslNameInput);
        }).then(function () {
            return Page.eleConnEmsSslNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslAuthOnlyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableFipsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableSslv3Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTls1Check.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslExpectEmsHostnameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslVerifyHostnameCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslEnableDebugTrcCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test EMS SSL Definition Details panel mandatory fields.
    //
    it('Test EMS SSL Definition Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleConnsEmsSslLeftmenu);
        }).then(function () {
            Page.eleConnsEmsSslLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'EMS SSL Definition Details panel' -> 'Name'
    //
    it('Test field EMS SSL Definition -> Name', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0012_@#$_23333333333444444444").then(function () {
            Page.delConnEmsSslYes("ConnEMSSSL0013_@#$_23333333333444444444");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0012_@#$_23333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConnEMSSSL0012_@#$_23333333333444444444').to.be.true;
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0013_@#$_233333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConnEMSSSL0013_@#$_23333333333444444444').to.be.true;
        });
    });

    // Test field 'EMS SSL Definition Details panel' -> 'Description'
    //
    it('Test field EMS SSL Definition -> Description', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0014").then(function () {
            Page.delConnEmsSslYes("ConnEMSSSL0015");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsSslDescValidateMsg);
        }).then(function () {
            return Page.eleConnEmsSslDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsSslDescInput);
        }).then(function () {
            Page.eleConnEmsSslDescInput.clear().sendKeys("Corrected");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Test field 'EMS SSL Definition Details panel' -> 'Key Ring File'
    //
    it('Test field EMS SSL Definition -> Key Ring File', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0016").then(function () {
            Page.delConnEmsSslYes("ConnEMSSSL0017");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0016", "", false, "ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingFileInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333').to.be.true;
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0017", "", false, "ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^1111111111222222222233333333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingFileInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333').to.be.true;
        });
    });

    // Test field 'EMS SSL Definition Details panel' -> 'Key Ring Label'
    //
    it('Test field EMS SSL Definition -> Key Ring Label', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0018").then(function () {
            Page.delConnEmsSslYes("ConnEMSSSL0019");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0018", "", false, "", "ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingLabelInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333').to.be.true;
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0019", "", false, "", "ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^1111111111222222222233333333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslKeyRingLabelInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333').to.be.true;
        });
    });

    // Test field 'EMS SSL Definition Details panel' -> 'Cipher'
    //
    it('Test field EMS SSL Definition -> Cipher', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0020").then(function () {
            Page.delConnEmsSslYes("ConnEMSSSL0021");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0020", "", false, "", "", "ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslCipherInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333').to.be.true;
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0021", "", false, "", "", "ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^1111111111222222222233333333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslCipherInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333').to.be.true;
        });
    });

    // Test field 'EMS SSL Definition Details panel' -> 'Expect EMS Host Name'
    //
    it('Test field EMS SSL Definition -> Expect EMS Host Name', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0022").then(function () {
            Page.delConnEmsSslYes("ConnEMSSSL0023");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0022", "", false, "", "", "", false, false, false, "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslExpectEmsHostnameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0023", "", false, "", "", "", false, false, false, "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????1111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslExpectEmsHostnameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        });
    });

    // Test field 'EMS SSL Definition Details panel' -> 'LDAP URL'
    //
    it('Test field EMS SSL Definition -> LDAP URL', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0024").then(function () {
            Page.delConnEmsSslYes("ConnEMSSSL0025");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0024", "", false, "", "", "", false, false, false, "", false, "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUrlInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0025", "", false, "", "", "", false, false, false, "", false, "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUrlInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        });
    });

    // Test field 'EMS SSL Definition Details panel' -> 'LDAP UserID & Password'
    // Related jiras: ZWUI-948(fixed)
    it('Test field EMS SSL Definition -> LDAP UserID & Password', function () {
        Page.delConnEmsSslYes("ConnEMSSSL0026").then(function () {
            Page.delConnEmsSslYes("ConnEMSSSL0027");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0026", "", false, "", "", "", false, false, false, "", false, "", "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111", "CCCCCddddd@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUseridInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'CCCCCddddd@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSL0027", "", false, "", "", "", false, false, false, "", false, "", "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????1111", "CCCCCddddd@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????1111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapUseridInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslLdapPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'CCCCCddddd@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});