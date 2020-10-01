/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.7 Define Endpoints RED Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a RED Endpoint successfully.
    //
    it('Should add a RED Endpoint successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delEndpointRedYes("EndpointRED0001");
        }).then(function () {
            Page.addEndpointRed("EndpointRED0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a RED Endpoint successfully, then replicate it.
    //
    it('Should add a RED Endpoint, then replicate it successfully', function () {
        Page.delEndpointRedYes("EndpointRED0002-copy").then(function () {
            Page.delEndpointRedYes("EndpointRED0002");
        }).then(function () {
            Page.addEndpointRed("EndpointRED0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateEndpointRed("EndpointRED0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a RED Endpoint successfully, then update it.
    //
    it('Should add a RED Endpoint, then update it successfully', function () {
        Page.delEndpointRedYes("EndpointRED0003").then(function () {
            Page.addEndpointRed("EndpointRED0003", "AbCdEfG", "USERID01", "Password01", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateEndpointRed("EndpointRED0003", "HiJkLmN", "USERID02", "Password02", "HiJkLmN:5678", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRED0003').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID02').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Password02').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a RED Endpoint, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a RED Endpoint, cancel the changes, then confirm the cancel operation', function () {
        Page.delEndpointRedYes("EndpointRED0004").then(function () {
            Page.addEndpointRed("EndpointRED0004", "AbCdEfG", "USERID01", "Password01", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointRedYes("EndpointRED0004", "HiJkLmN", "USERID02", "Password02", "HiJkLmN:5678", true);
        }).then(function () {
            Page.eleEndpointsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointRED0004");
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
            return Page.eleEndpointRedNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRED0004').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID01').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Password01').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a RED Endpoint, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a RED Endpoint, cancel the changes, then discard the cancel operation', function () {
        Page.delEndpointRedYes("EndpointRED0005").then(function () {
            Page.addEndpointRed("EndpointRED0005", "AbCdEfG", "USERID01", "Password01", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointRedNo("EndpointRED0005", "HiJkLmN", "USERID02", "Password02", "HiJkLmN:5678", true);
        }).then(function () {
            return Page.eleEndpointRedNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRED0005').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID02').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Password02').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a RED Endpoint, make some changes, then reset it.
    //
    it('Should add a RED Endpoint, make some changes, then reset it', function () {
        Page.delEndpointRedYes("EndpointRED0006").then(function () {
            Page.addEndpointRed("EndpointRED0006", "AbCdEfG", "USERID01", "Password01", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetEndpointRed("EndpointRED0006", "HiJkLmN", "USERID02", "Password02", "HiJkLmN:5678", true);
        }).then(function () {
            return Page.eleEndpointRedNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRED0006').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID01').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Password01').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a RED Endpoint, then add a RED Endpoint with the same name, then confirm the overwrite operation.
    //
    it('Should add a RED Endpoint to overwrite a RED Endpoint, then confirm the overwrite operation', function () {
        Page.delEndpointRedYes("EndpointRED0007").then(function () {
            Page.addEndpointRed("EndpointRED0007", "AbCdEfG", "USERID01", "Password01", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointRed("EndpointRED0007", "HiJkLmN", "USERID02", "Password02", "HiJkLmN:5678", true);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleEndpointRedNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRED0007').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID02').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Password02').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a RED Endpoint, then add a RED Endpoint with the same name, then discard the overwrite operation.
    //
    it('Should add a RED Endpoint to overwrite a RED Endpoint, then discard the overwrite operation', function () {
        Page.delEndpointRedYes("EndpointRED0008").then(function () {
            Page.addEndpointRed("EndpointRED0008", "AbCdEfG", "USERID01", "Password01", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointRed("EndpointRED0008", "HiJkLmN", "USERID02", "Password02", "HiJkLmN:5678", true);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEndpointsRedLeftmenu);
        }).then(function () {
            Page.eleEndpointsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointRED0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEndpointRedNameInput);
        }).then(function () {
            return Page.eleEndpointRedNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRED0008').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID01').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Password01').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a RED Endpoint, delete it, then confirm the delete operation.
    //
    it('Should add a RED Endpoint, delete it, then confirm the delete operation', function () {
        Page.delEndpointRedYes("EndpointRED0009").then(function () {
            Page.addEndpointRed("EndpointRED0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointRedYes("EndpointRED0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointRED0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a RED Endpoint, delete it, then discard the delete operation.
    //
    it('Should add a RED Endpoint, delete it, then discard the delete operation', function () {
        Page.delEndpointRedYes("EndpointRED0010").then(function () {
            Page.addEndpointRed("EndpointRED0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointRedNo("EndpointRED0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointRED0010");
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
        Page.delEndpointRedYes("EndpointRed0011").then(function () {
            Page.addEndpointRed("EndpointRed0011");
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
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

    // Test 'RED Endpoint Details panel' -> 'CHECK' button normally
    //
    it('Test field RED Endpoint -> CHECK normally', function () {
        Page.delEndpointRedYes("EndpointRED0011").then(function () {
            Page.addEndpointRed("EndpointRED0011");
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

    // Test 'RED Endpoint Details panel' -> 'CHECK' button with invalid password
    //
    it('Test field RED Endpoint -> CHECK with invalid password', function () {
        Page.delEndpointRedYes("EndpointRED0012_Invalid_Password").then(function () {
            Page.addEndpointRed("EndpointRED0012_Invalid_Password", "", undefined, "invalid", undefined, false);
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
            expect(message.includes('Host Application Failure: Host Validation Failed RC=20')).to.be.true;
        });
    });

    // Test 'RED Endpoint Details panel' -> 'CHECK' button with invalid userid
    //
    it('Test field RED Endpoint -> CHECK with invalid userid', function () {
        Page.delEndpointRedYes("EndpointRED0013_Invalid_Userid").then(function () {
            Page.addEndpointRed("EndpointRED0013_Invalid_Userid", "", "invalid", undefined, undefined, false);
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
            expect(message.includes('Host Application Failure: Host Validation Failed RC=20')).to.be.true;
        });
    });

    // Test 'RED Endpoint Details panel' -> 'CHECK' button with invalid url
    //
    it('Test field RED Endpoint -> CHECK with invalid url', function () {
        Page.delEndpointRedYes("EndpointRED0014_Invalid_Url").then(function () {
            Page.addEndpointRed("EndpointRED0014_Invalid_Url", "", undefined, undefined, "invalid", false);
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
            Page.eleEndpointRedUrlInput.clear().sendKeys("AAA:1234");
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

    // Test field 'RED Endpoint Details panel' -> 'CHECK' button with 'Use TLS Connection' checked.
    //
    it('Test field RED Endpoint -> CHECK with Use TLS Connection checked', function () {
        Page.delEndpointRedYes("EndpointRED0015_UseTLSConn").then(function () {
            Page.addEndpointRed("EndpointRED0015_UseTLSConn", "", undefined, undefined, undefined, true);
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

    // Test RED Endpoint Details panel fields default value.
    //
    it('Test RED Endpoint Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleEndpointsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointRedNameInput);
        }).then(function () {
            return Page.eleEndpointRedNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Test RED Endpoint Details panel mandatory fields.
    //
    it('Test RED Endpoint Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleEndpointsRedLeftmenu.click();
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
            return Page.eleEndpointRedNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUrlValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'RED Endpoint Details panel' -> 'Name'
    //
    it('Test field RED Endpoint -> Name', function () {
        Page.delEndpointRedYes("EndpointRED0016_@#$_3333333333444444444").then(function () {
            Page.addEndpointRed("EndpointRED0016_@#$_3333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointRED0016_@#$_3333333333444444444').to.be.true;
        }).then(function () {
            Page.delEndpointRedYes("EndpointRED0017_@#$_3333333333444444444");
        }).then(function () {
            Page.addEndpointRed("EndpointRED0017_@#$_33333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointRED0017_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'RED Endpoint Details panel' -> 'Description'
    //
    it('Test field RED Endpoint -> Description', function () {
        Page.delEndpointRedYes("EndpointRED0018").then(function () {
            Page.addEndpointRed("EndpointRED0018", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.delEndpointRedYes("EndpointRED0019");
        }).then(function () {
            Page.addEndpointRed("EndpointRED0019", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointRedDescValidateMsg);
        }).then(function () {
            return Page.eleEndpointRedDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointRedDescInput);
        }).then(function () {
            Page.eleEndpointRedDescInput.clear().sendKeys("Corrected");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Test field 'RED Endpoint Details panel' -> 'User ID'
    //
    it('Test field RED Endpoint -> User ID', function () {
        Page.delEndpointRedYes("EndpointRED0020").then(function () {
            Page.addEndpointRed("EndpointRED0020", "", "@#$%&/!^");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseridInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '@#$%&/!^').to.be.true;
        }).then(function () {
            Page.delEndpointRedYes("EndpointRED0021");
        }).then(function () {
            Page.addEndpointRed("EndpointRED0021", "", "AbC4Ef7hIj");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUseridInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AbC4Ef7h').to.be.true;
        });
    });

    // Test field 'RED Endpoint Details panel' -> 'Password'
    //
    it('Test field RED Endpoint -> Password', function () {
        Page.delEndpointRedYes("EndpointRED0022").then(function () {
            Page.addEndpointRed("EndpointRED0022", "", undefined, "!@#$%^&*()<>?/a1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()<>?/a1').to.be.true;
        }).then(function () {
            Page.delEndpointRedYes("EndpointRED0023");
        }).then(function () {
            Page.addEndpointRed("EndpointRED0023", "", undefined, "QWERTasdfg1234567");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'QWERTasdfg123456').to.be.true;
        });
    });

    // Test field 'RED Endpoint Details panel' -> 'URL'
    //
    it('Test field RED Endpoint -> URL', function () {
        Page.delEndpointRedYes("EndpointRED0024").then(function () {
            Page.addEndpointRed("EndpointRED0024", "", undefined, undefined, "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUrlInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.delEndpointRedYes("EndpointRED0025");
        }).then(function () {
            Page.addEndpointRed("EndpointRED0025", "", undefined, undefined, "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRedUrlInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});