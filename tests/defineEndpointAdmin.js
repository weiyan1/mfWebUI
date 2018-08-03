/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.5 Define Endpoints Admin Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a Admin Endpoint successfully.
    //
    it('Should add a Admin Endpoint successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delEndpointAdmYes("EndpointAdmin0001");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdmin0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a Admin Endpoint successfully, then replicate it.
    //
    it('Should add a Admin Endpoint, then replicate it successfully', function () {
        Page.delEndpointAdmYes("EndpointAdmin0002-copy").then(function () {
            Page.delEndpointAdmYes("EndpointAdmin0002");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdmin0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateEndpointAdm("EndpointAdmin0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a Admin Endpoint successfully, then update it.
    //
    it('Should add a Admin Endpoint, then update it successfully', function () {
        Page.delEndpointAdmYes("EndpointAdmin0003").then(function () {
            Page.addEndpointAdm("EndpointAdmin0003", "AbCdEfG");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateEndpointAdm("EndpointAdmin0003", "HiJkLmN");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointAdmin0003').to.be.true;
        }).then(function () {
            return Page.eleEndpointAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        });
    });

    // Add a Admin Endpoint, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a Admin Endpoint, cancel the changes, then confirm the cancel operation', function () {
        Page.delEndpointAdmYes("EndpointAdmin0004").then(function () {
            Page.addEndpointAdm("EndpointAdmin0004", "AbCdEfG");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointAdmYes("EndpointAdmin0004", "HiJkLmN");
        }).then(function () {
            Page.eleEndpointsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointAdmin0004");
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
            return Page.eleEndpointAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointAdmin0004').to.be.true;
        }).then(function () {
            return Page.eleEndpointAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        });
    });

    // Add a Admin Endpoint, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a Admin Endpoint, cancel the changes, then discard the cancel operation', function () {
        Page.delEndpointAdmYes("EndpointAdmin0005").then(function () {
            Page.addEndpointAdm("EndpointAdmin0005", "AbCdEfG");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointAdmNo("EndpointAdmin0005", "HiJkLmN");
        }).then(function () {
            return Page.eleEndpointAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointAdmin0005').to.be.true;
        }).then(function () {
            return Page.eleEndpointAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        });
    });

    // Add a Admin Endpoint, make some changes, then reset it.
    //
    it('Should add a Admin Endpoint, make some changes, then reset it', function () {
        Page.delEndpointAdmYes("EndpointAdmin0006").then(function () {
            Page.addEndpointAdm("EndpointAdmin0006", "AbCdEfG");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetEndpointAdm("EndpointAdmin0006", "HiJkLmN");
        }).then(function () {
            return Page.eleEndpointAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointAdmin0006').to.be.true;
        }).then(function () {
            return Page.eleEndpointAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        });
    });

    // Add a Admin Endpoint, then add a Admin Endpoint with the same name, then confirm the overwrite operation.
    //
    it('Should add a Admin Endpoint to overwrite a Admin Endpoint, then confirm the overwrite operation', function () {
        Page.delEndpointAdmYes("EndpointAdmin0007").then(function () {
            Page.addEndpointAdm("EndpointAdmin0007", "AbCdEfG");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointAdm("EndpointAdmin0007", "HiJkLmN");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleEndpointAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointAdmin0007').to.be.true;
        }).then(function () {
            return Page.eleEndpointAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        });
    });

    // Add a Admin Endpoint, then add a Admin Endpoint with the same name, then discard the overwrite operation.
    //
    it('Should add a Admin Endpoint to overwrite a Admin Endpoint, then discard the overwrite operation', function () {
        Page.delEndpointAdmYes("EndpointAdmin0008").then(function () {
            Page.addEndpointAdm("EndpointAdmin0008", "AbCdEfG");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointAdm("EndpointAdmin0008", "HiJkLmN");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEndpointsAdmLeftmenu);
        }).then(function () {
            Page.eleEndpointsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointAdmin0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEndpointAdmNameInput);
        }).then(function () {
            return Page.eleEndpointAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointAdmin0008').to.be.true;
        }).then(function () {
            return Page.eleEndpointAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        });
    });

    // Add a Admin Endpoint, delete it, then confirm the delete operation.
    //
    it('Should add a Admin Endpoint, delete it, then confirm the delete operation', function () {
        Page.delEndpointAdmYes("EndpointAdmin0009").then(function () {
            Page.addEndpointAdm("EndpointAdmin0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdmin0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointAdmin0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a Admin Endpoint, delete it, then discard the delete operation.
    //
    it('Should add a Admin Endpoint, delete it, then discard the delete operation', function () {
        Page.delEndpointAdmYes("EndpointAdmin0010").then(function () {
            Page.addEndpointAdm("EndpointAdmin0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointAdmNo("EndpointAdmin0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointAdmin0010");
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
        Page.delEndpointAdmYes("EndpointAdmin0011").then(function () {
            Page.addEndpointAdm("EndpointAdmin0011");
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
            return Page.eleTableHeader2.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
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
            return Page.eleTableHeader2.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Test Admin Endpoint Details panel fields default value.
    //
    it('Test Admin Endpoint Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleEndpointsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointAdmNameInput);
        }).then(function () {
            return Page.eleEndpointAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test Admin Endpoint Details panel mandatory fields.
    //
    it('Test Admin Endpoint Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleEndpointsAdmLeftmenu.click();
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
            return Page.eleEndpointAdmNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'Admin Endpoint Details panel' -> 'Name'
    //
    it('Test field Admin Endpoint -> Name', function () {
        Page.delEndpointAdmYes("EndpointAdmin0012_@#$_33333333444444444").then(function () {
            Page.addEndpointAdm("EndpointAdmin0012_@#$_33333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointAdmNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointAdmin0012_@#$_33333333444444444').to.be.true;
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdmin0013_@#$_33333333444444444");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdmin0013_@#$_333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointAdmNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointAdmin0013_@#$_33333333444444444').to.be.true;
        });
    });

    // Test field 'Admin Endpoint Details panel' -> 'Description'
    //
    it('Test field Admin Endpoint -> Description', function () {
        Page.delEndpointAdmYes("EndpointAdmin0014").then(function () {
            Page.addEndpointAdm("EndpointAdmin0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointAdmDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdmin0015");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdmin0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointAdmDescValidateMsg);
        }).then(function () {
            return Page.eleEndpointAdmDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointAdmDescInput);
        }).then(function () {
            Page.eleEndpointAdmDescInput.clear().sendKeys("Corrected");
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

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});