/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.4 Define Endpoints IMS Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a IMS Endpoint successfully.
    //
    it('Should add a IMS Endpoint successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delEndpointImsYes("EndpointIMS0001");
        }).then(function () {
            Page.addEndpointIms("EndpointIMS0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a IMS Endpoint successfully, then replicate it.
    //
    it('Should add a IMS Endpoint, then replicate it successfully', function () {
        Page.delEndpointImsYes("EndpointIMS0002-copy").then(function () {
            Page.delEndpointImsYes("EndpointIMS0002");
        }).then(function () {
            Page.addEndpointIms("EndpointIMS0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateEndpointIms("EndpointIMS0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a IMS Endpoint successfully, then update it.
    //
    it('Should add a IMS Endpoint, then update it successfully', function () {
        Page.delEndpointImsYes("EndpointIMS0003").then(function () {
            Page.addEndpointIms("EndpointIMS0003", "AbCdEfG", "AAAAAAAA", "BBBBBBBB");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateEndpointIms("EndpointIMS0003", "HiJkLmN", "HHHHHHHH", "IIIIIIII");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointIMS0003').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHHHHHHH').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsXcfGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IIIIIIII').to.be.true;
        });
    });

    // Add a IMS Endpoint, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a IMS Endpoint, cancel the changes, then confirm the cancel operation', function () {
        Page.delEndpointImsYes("EndpointIMS0004").then(function () {
            Page.addEndpointIms("EndpointIMS0004", "AbCdEfG", "AAAAAAAA", "BBBBBBBB");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointImsYes("EndpointIMS0004", "HiJkLmN", "HHHHHHHH", "IIIIIIII");
        }).then(function () {
            Page.eleEndpointsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointIMS0004");
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
            return Page.eleEndpointImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointIMS0004').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAAAA').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsXcfGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBBBBBBB').to.be.true;
        });
    });

    // Add a IMS Endpoint, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a IMS Endpoint, cancel the changes, then discard the cancel operation', function () {
        Page.delEndpointImsYes("EndpointIMS0005").then(function () {
            Page.addEndpointIms("EndpointIMS0005", "AbCdEfG", "AAAAAAAA", "BBBBBBBB");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointImsNo("EndpointIMS0005", "HiJkLmN", "HHHHHHHH", "IIIIIIII");
        }).then(function () {
            return Page.eleEndpointImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointIMS0005').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHHHHHHH').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsXcfGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IIIIIIII').to.be.true;
        });
    });

    // Add a IMS Endpoint, make some changes, then reset it.
    //
    it('Should add a IMS Endpoint, make some changes, then reset it', function () {
        Page.delEndpointImsYes("EndpointIMS0006").then(function () {
            Page.addEndpointIms("EndpointIMS0006", "AbCdEfG", "AAAAAAAA", "BBBBBBBB");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetEndpointIms("EndpointIMS0006", "HiJkLmN", "HHHHHHHH", "IIIIIIII");
        }).then(function () {
            return Page.eleEndpointImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointIMS0006').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAAAA').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsXcfGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBBBBBBB').to.be.true;
        });
    });

    // Add a IMS Endpoint, then add a IMS Endpoint with the same name, then confirm the overwrite operation.
    //
    it('Should add a IMS Endpoint to overwrite a IMS Endpoint, then confirm the overwrite operation', function () {
        Page.delEndpointImsYes("EndpointIMS0007").then(function () {
            Page.addEndpointIms("EndpointIMS0007", "AbCdEfG", "AAAAAAAA", "BBBBBBBB");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMS0007", "HiJkLmN", "HHHHHHHH", "IIIIIIII");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleEndpointImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointIMS0007').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHHHHHHH').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsXcfGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IIIIIIII').to.be.true;
        });
    });

    // Add a IMS Endpoint, then add a IMS Endpoint with the same name, then discard the overwrite operation.
    //
    it('Should add a IMS Endpoint to overwrite a IMS Endpoint, then discard the overwrite operation', function () {
        Page.delEndpointImsYes("EndpointIMS0008").then(function () {
            Page.addEndpointIms("EndpointIMS0008", "AbCdEfG", "AAAAAAAA", "BBBBBBBB");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMS0008", "HiJkLmN", "HHHHHHHH", "IIIIIIII");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEndpointsImsLeftmenu);
        }).then(function () {
            Page.eleEndpointsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointIMS0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEndpointImsNameInput);
        }).then(function () {
            return Page.eleEndpointImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointIMS0008').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAAAA').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsXcfGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBBBBBBB').to.be.true;
        });
    });

    // Add a IMS Endpoint, delete it, then confirm the delete operation.
    //
    it('Should add a IMS Endpoint, delete it, then confirm the delete operation', function () {
        Page.delEndpointImsYes("EndpointIMS0009").then(function () {
            Page.addEndpointIms("EndpointIMS0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMS0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointIMS0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a IMS Endpoint, delete it, then discard the delete operation.
    //
    it('Should add a IMS Endpoint, delete it, then discard the delete operation', function () {
        Page.delEndpointImsYes("EndpointIMS0010").then(function () {
            Page.addEndpointIms("EndpointIMS0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointImsNo("EndpointIMS0010");
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.true;
        });
    });

    // Test 'Audit' & 'Refresh' button.
    //
    it('Test Audit & Refresh button', function () {
        Page.delEndpointImsYes("EndpointIMS0011").then(function () {
            Page.addEndpointIms("EndpointIMS0011");
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
            return Page.eleTableHeader3.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
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
            return Page.eleTableHeader3.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Test IMS Endpoint Details panel fields default value.
    //
    it('Test IMS Endpoint Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleEndpointsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointImsNameInput);
        }).then(function () {
            return Page.eleEndpointImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsXcfGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test IMS Endpoint Details panel mandatory fields.
    //
    it('Test IMS Endpoint Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleEndpointsImsLeftmenu.click();
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
            return Page.eleEndpointImsNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsApplidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsXcfGrpValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'IMS Endpoint Details panel' -> 'Name'
    //
    it('Test field IMS Endpoint -> Name', function () {
        Page.delEndpointImsYes("EndpointIMS0012_@#$_3333333333444444444").then(function () {
            Page.addEndpointIms("EndpointIMS0012_@#$_3333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointIMS0012_@#$_3333333333444444444').to.be.true;
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMS0013_@#$_3333333333444444444");
        }).then(function () {
            Page.addEndpointIms("EndpointIMS0013_@#$_33333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointIMS0013_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'IMS Endpoint Details panel' -> 'Description'
    //
    it('Test field IMS Endpoint -> Description', function () {
        Page.delEndpointImsYes("EndpointIMS0014").then(function () {
            Page.addEndpointIms("EndpointIMS0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMS0015");
        }).then(function () {
            Page.addEndpointIms("EndpointIMS0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointImsDescValidateMsg);
        }).then(function () {
            return Page.eleEndpointImsDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointImsDescInput);
        }).then(function () {
            Page.eleEndpointImsDescInput.clear().sendKeys("Corrected");
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

    // Test field 'IMS Endpoint Details panel' -> 'Application ID'
    //
    it('Test field IMS Endpoint -> Application ID', function () {
        Page.delEndpointImsYes("EndpointIMS0016").then(function () {
            Page.addEndpointIms("EndpointIMS0016", "", "@#$AB123");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsApplidInput.clear().sendKeys("#@$123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsApplidInput.clear().sendKeys("$#@123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsApplidInput.clear().sendKeys("AB120@#$");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsApplidInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsApplidInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsApplidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsApplidInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsApplidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsApplidInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsApplidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsApplidInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsApplidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsApplidInput.clear().sendKeys("A");
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
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsApplidInput.clear().sendKeys("A2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Test field 'IMS Endpoint Details panel' -> 'XCF Group'
    //
    it('Test field IMS Endpoint -> XCF Group', function () {
        Page.delEndpointImsYes("EndpointIMS0017").then(function () {
            Page.addEndpointIms("EndpointIMS0017", "", undefined, "@#$AB123");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsXcfGrpInput.clear().sendKeys("#@$123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsXcfGrpInput.clear().sendKeys("$#@123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsXcfGrpInput.clear().sendKeys("AB120@#$");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsXcfGrpInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsXcfGrpInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsXcfGrpValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsXcfGrpInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsXcfGrpValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsXcfGrpInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsXcfGrpValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsXcfGrpInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointImsXcfGrpValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsXcfGrpInput.clear().sendKeys("A");
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
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointImsXcfGrpInput.clear().sendKeys("A2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
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