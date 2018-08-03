/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.6 Define Endpoints Substation Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a SS Endpoint successfully.
    //
    it('Should add a SS Endpoint successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delEndpointSsYes("EndpointSS0001");
        }).then(function () {
            Page.addEndpointSs("EndpointSS0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a SS Endpoint successfully, then replicate it.
    //
    it('Should add a SS Endpoint, then replicate it successfully', function () {
        Page.delEndpointSsYes("EndpointSS0002-copy").then(function () {
            Page.delEndpointSsYes("EndpointSS0002");
        }).then(function () {
            Page.addEndpointSs("EndpointSS0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateEndpointSs("EndpointSS0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a SS Endpoint successfully, then update it.
    //
    it('Should add a SS Endpoint, then update it successfully', function () {
        Page.delEndpointSsYes("EndpointSS0003").then(function () {
            Page.addEndpointSs("EndpointSS0003", "AbCdEfG", "USERID01", "Password01", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateEndpointSs("EndpointSS0003", "HiJkLmN", "USERID02", "Password02", "HiJkLmN:5678", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointSS0003').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID02').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Password02').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a SS Endpoint, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a SS Endpoint, cancel the changes, then confirm the cancel operation', function () {
        Page.delEndpointSsYes("EndpointSS0004").then(function () {
            Page.addEndpointSs("EndpointSS0004", "AbCdEfG", "USERID01", "Password01", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointSsYes("EndpointSS0004", "HiJkLmN", "USERID02", "Password02", "HiJkLmN:5678", true);
        }).then(function () {
            Page.eleEndpointsSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointSS0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleDetailHeader);
        }).then(function () {
            return Page.eleEndpointSsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointSS0004').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID01').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Password01').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a SS Endpoint, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a SS Endpoint, cancel the changes, then discard the cancel operation', function () {
        Page.delEndpointSsYes("EndpointSS0005").then(function () {
            Page.addEndpointSs("EndpointSS0005", "AbCdEfG", "USERID01", "Password01", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointSsNo("EndpointSS0005", "HiJkLmN", "USERID02", "Password02", "HiJkLmN:5678", true);
        }).then(function () {
            return Page.eleEndpointSsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointSS0005').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID02').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Password02').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a SS Endpoint, make some changes, then reset it.
    //
    it('Should add a SS Endpoint, make some changes, then reset it', function () {
        Page.delEndpointSsYes("EndpointSS0006").then(function () {
            Page.addEndpointSs("EndpointSS0006", "AbCdEfG", "USERID01", "Password01", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetEndpointSs("EndpointSS0006", "HiJkLmN", "USERID02", "Password02", "HiJkLmN:5678", true);
        }).then(function () {
            return Page.eleEndpointSsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointSS0006').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID01').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Password01').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a SS Endpoint, then add a SS Endpoint with the same name, then confirm the overwrite operation.
    //
    it('Should add a SS Endpoint to overwrite a SS Endpoint, then confirm the overwrite operation', function () {
        Page.delEndpointSsYes("EndpointSS0007").then(function () {
            Page.addEndpointSs("EndpointSS0007", "AbCdEfG", "USERID01", "Password01", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointSs("EndpointSS0007", "HiJkLmN", "USERID02", "Password02", "HiJkLmN:5678", true);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleEndpointSsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointSS0007').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID02').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Password02').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a SS Endpoint, then add a SS Endpoint with the same name, then discard the overwrite operation.
    //
    it('Should add a SS Endpoint to overwrite a SS Endpoint, then discard the overwrite operation', function () {
        Page.delEndpointSsYes("EndpointSS0008").then(function () {
            Page.addEndpointSs("EndpointSS0008", "AbCdEfG", "USERID01", "Password01", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointSs("EndpointSS0008", "HiJkLmN", "USERID02", "Password02", "HiJkLmN:5678", true);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEndpointsSsLeftmenu);
        }).then(function () {
            Page.eleEndpointsSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointSS0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEndpointSsNameInput);
        }).then(function () {
            return Page.eleEndpointSsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointSS0008').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID01').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Password01').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a SS Endpoint, delete it, then confirm the delete operation.
    //
    it('Should add a SS Endpoint, delete it, then confirm the delete operation', function () {
        Page.delEndpointSsYes("EndpointSS0009").then(function () {
            Page.addEndpointSs("EndpointSS0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointSsYes("EndpointSS0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointSS0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a SS Endpoint, delete it, then discard the delete operation.
    //
    it('Should add a SS Endpoint, delete it, then discard the delete operation', function () {
        Page.delEndpointSsYes("EndpointSS0010").then(function () {
            Page.addEndpointSs("EndpointSS0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointSsNo("EndpointSS0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointSS0010");
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
        Page.delEndpointSsYes("EndpointSS0011").then(function () {
            Page.addEndpointSs("EndpointSS0011");
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
            return Page.eleTableHeader2.getText();
        }).then(function (message) {
            expect(message === 'URL').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAuditButton);
        }).then(function () {
            Page.eleAuditButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleTableHeader2.getText();
        }).then(function (message) {
            expect(message === 'Modified On').to.be.true;
        }).then(function () {
            Page.eleAuditButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleTableHeader2.getText();
        }).then(function (message) {
            expect(message === 'URL').to.be.true;
        });
    });

    // Test 'SS Endpoint Details panel' -> 'CHECK' button normally
    //
    it('Test field SS Endpoint -> CHECK normally', function () {
        Page.delEndpointSsYes("EndpointSS0011").then(function () {
            Page.addEndpointSs("EndpointSS0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Checked successfully').to.be.true;
        });
    });

    // Test 'SS Endpoint Details panel' -> 'CHECK' button with invalid password
    //
    it('Test field SS Endpoint -> CHECK with invalid password', function () {
        Page.delEndpointSsYes("EndpointSS0012_Invalid_Password").then(function () {
            Page.addEndpointSs("EndpointSS0012_Invalid_Password", "", undefined, "invalid", undefined, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message.includes('Host Validation Failed RC:8 RC=8 Reason=105')).to.be.true;
        });
    });

    // Test 'SS Endpoint Details panel' -> 'CHECK' button with invalid userid
    //
    it('Test field SS Endpoint -> CHECK with invalid userid', function () {
        Page.delEndpointSsYes("EndpointSS0013_Invalid_Userid").then(function () {
            Page.addEndpointSs("EndpointSS0013_Invalid_Userid", "", "invalid", undefined, undefined, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message.includes('Host Validation Failed RC:8 RC=8 Reason=105')).to.be.true;
        });
    });

    // Test 'SS Endpoint Details panel' -> 'CHECK' button with invalid url
    //
    it('Test field SS Endpoint -> CHECK with invalid url', function () {
        Page.delEndpointSsYes("EndpointSS0014_Invalid_Url").then(function () {
            Page.addEndpointSs("EndpointSS0014_Invalid_Url", "", undefined, undefined, "invalid", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Port "null" invalid').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointSsUrlInput.clear().sendKeys("AAA:1234");
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message.includes('TCP Failure: unable to connect to')).to.be.true;
        }).then(function () {
            Page.eleSaveButton.click();
        });
    });

    // Test field 'SS Endpoint Details panel' -> 'CHECK' button with 'Use TLS Connection' checked.
    //
    it('Test field SS Endpoint -> CHECK with Use TLS Connection checked', function () {
        Page.delEndpointSsYes("EndpointSS0015_UseTLSConn").then(function () {
            Page.addEndpointSs("EndpointSS0015_UseTLSConn", "", undefined, undefined, undefined, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Invalid TLS configuration: Keystore password not provided').to.be.true;
        });
    });

    // Test SS Endpoint Details panel fields default value.
    //
    it('Test SS Endpoint Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleEndpointsSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointSsNameInput);
        }).then(function () {
            return Page.eleEndpointSsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Test SS Endpoint Details panel mandatory fields.
    //
    it('Test SS Endpoint Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleEndpointsSsLeftmenu.click();
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
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUrlValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'SS Endpoint Details panel' -> 'Name'
    //
    it('Test field SS Endpoint -> Name', function () {
        Page.delEndpointSsYes("EndpointSS0016_@#$_23333333333444444444").then(function () {
            Page.addEndpointSs("EndpointSS0016_@#$_23333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointSS0016_@#$_23333333333444444444').to.be.true;
        }).then(function () {
            Page.delEndpointSsYes("EndpointSS0017_@#$_23333333333444444444");
        }).then(function () {
            Page.addEndpointSs("EndpointSS0017_@#$_233333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointSS0017_@#$_23333333333444444444').to.be.true;
        });
    });

    // Test field 'SS Endpoint Details panel' -> 'Description'
    //
    it('Test field SS Endpoint -> Description', function () {
        Page.delEndpointSsYes("EndpointSS0018").then(function () {
            Page.addEndpointSs("EndpointSS0018", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.delEndpointSsYes("EndpointSS0019");
        }).then(function () {
            Page.addEndpointSs("EndpointSS0019", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointSsDescValidateMsg);
        }).then(function () {
            return Page.eleEndpointSsDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointSsDescInput);
        }).then(function () {
            Page.eleEndpointSsDescInput.clear().sendKeys("Corrected");
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

    // Test field 'SS Endpoint Details panel' -> 'User ID'
    //
    it('Test field SS Endpoint -> User ID', function () {
        Page.delEndpointSsYes("EndpointSS0020").then(function () {
            Page.addEndpointSs("EndpointSS0020", "", "@#$%&/!^");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseridInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '@#$%&/!^').to.be.true;
        }).then(function () {
            Page.delEndpointSsYes("EndpointSS0021");
        }).then(function () {
            Page.addEndpointSs("EndpointSS0021", "", "AbC4Ef7hIj");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUseridInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AbC4Ef7h').to.be.true;
        });
    });

    // Test field 'SS Endpoint Details panel' -> 'Password'
    //
    it('Test field SS Endpoint -> Password', function () {
        Page.delEndpointSsYes("EndpointSS0022").then(function () {
            Page.addEndpointSs("EndpointSS0022", "", undefined, "!@#$%^&*()<>?/a1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()<>?/a1').to.be.true;
        }).then(function () {
            Page.delEndpointSsYes("EndpointSS0023");
        }).then(function () {
            Page.addEndpointSs("EndpointSS0023", "", undefined, "QWERTasdfg1234567");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'QWERTasdfg123456').to.be.true;
        });
    });

    // Test field 'SS Endpoint Details panel' -> 'URL'
    //
    it('Test field SS Endpoint -> URL', function () {
        Page.delEndpointSsYes("EndpointSS0024").then(function () {
            Page.addEndpointSs("EndpointSS0024", "", undefined, undefined, "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUrlInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.delEndpointSsYes("EndpointSS0025");
        }).then(function () {
            Page.addEndpointSs("EndpointSS0025", "", undefined, undefined, "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointSsUrlInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});