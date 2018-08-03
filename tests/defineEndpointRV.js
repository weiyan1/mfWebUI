/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.2 Define Endpoints RV Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a RV Endpoint successfully.
    //
    it('Should add a RV Endpoint successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delEndpointRvYes("EndpointRV0001");
        }).then(function () {
            Page.addEndpointRv("EndpointRV0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a RV Endpoint successfully, then replicate it.
    //
    it('Should add a RV Endpoint, then replicate it successfully', function () {
        Page.delConnRvYes("EndpointRV0002-copy").then(function () {
            Page.delEndpointRvYes("EndpointRV0002-copy");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRV0002");
        }).then(function () {
            Page.addEndpointRv("EndpointRV0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateEndpointRv("EndpointRV0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a RV Endpoint successfully, then update it.
    //
    it('Should add a RV Endpoint, then update it successfully', function () {
        Page.delConnRvYes("EndpointRV0003").then(function () {
            Page.delEndpointRvYes("EndpointRV0003");
        }).then(function () {
            Page.addEndpointRv("EndpointRV0003", "AbCdEfG", "AbCdEfG:1234", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateEndpointRv("EndpointRV0003", "HiJkLmN", "HiJkLmN:5678");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRV0003').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvConnObjectListed.getText();
        }).then(function (message) {
            expect(message === 'EndpointRV0003').to.be.true;
        });
    });

    // Add a RV Endpoint, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a RV Endpoint, cancel the changes, then confirm the cancel operation', function () {
        Page.delEndpointRvYes("EndpointRV0004").then(function () {
            Page.addEndpointRv("EndpointRV0004", "AbCdEfG", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointRvYes("EndpointRV0004", "HiJkLmN", "HiJkLmN:5678");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEndpointsRvLeftmenu);
        }).then(function () {
            Page.eleEndpointsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointRV0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEndpointRvNameInput);
        }).then(function () {
            return Page.eleEndpointRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRV0004').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvConnObjectListed.getText();
        }).then(function (message) {
            expect(message === '').to.be.true;
        });
    });

    // Add a RV Endpoint, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a RV Endpoint, cancel the changes, then discard the cancel operation', function () {
        Page.delConnRvYes("EndpointRV0005").then(function () {
            Page.delEndpointRvYes("EndpointRV0005");
        }).then(function () {
            Page.addEndpointRv("EndpointRV0005", "AbCdEfG", "AbCdEfG:1234", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointRvNo("EndpointRV0005", "HiJkLmN", "HiJkLmN:5678");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEndpointRvNameInput);
        }).then(function () {
            return Page.eleEndpointRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRV0005').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvConnObjectListed.getText();
        }).then(function (message) {
            expect(message === 'EndpointRV0005').to.be.true;
        });
    });

    // Add a RV Endpoint, make some changes, then reset it.
    //
    it('Should add a RV Endpoint, make some changes, then reset it', function () {
        Page.delEndpointRvYes("EndpointRV0006").then(function () {
            Page.addEndpointRv("EndpointRV0006", "AbCdEfG", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetEndpointRv("EndpointRV0006", "HiJkLmN", "HiJkLmN:5678");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEndpointRvNameInput);
        }).then(function () {
            return Page.eleEndpointRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRV0006').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvConnObjectListed.getText();
        }).then(function (message) {
            expect(message === '').to.be.true;
        });
    });

    // Add a RV Endpoint, then add a RV Endpoint with the same name, then confirm the overwrite operation.
    //
    it('Should add a RV Endpoint to overwrite a RV Endpoint, then confirm the overwrite operation', function () {
        Page.delConnRvYes("EndpointRV0007").then(function () {
            Page.delEndpointRvYes("EndpointRV0007");
        }).then(function () {
            Page.addEndpointRv("EndpointRV0007", "AbCdEfG", "AbCdEfG:1234", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointRv("EndpointRV0007", "HiJkLmN", "HiJkLmN:5678", false);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleEndpointRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRV0007').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvConnObjectListed.getText();
        }).then(function (message) {
            expect(message === 'EndpointRV0007').to.be.true;
        });
    });

    // Add a RV Endpoint, then add a RV Endpoint with the same name, then discard the overwrite operation.
    //
    it('Should add a RV Endpoint to overwrite a RV Endpoint, then discard the overwrite operation', function () {
        Page.delEndpointRvYes("EndpointRV0008").then(function () {
            Page.addEndpointRv("EndpointRV0008", "AbCdEfG", "AbCdEfG:1234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointRv("EndpointRV0008", "HiJkLmN", "HiJkLmN:5678", true);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEndpointsRvLeftmenu);
        }).then(function () {
            Page.eleEndpointsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointRV0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEndpointRvNameInput);
        }).then(function () {
            return Page.eleEndpointRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRV0008').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvConnObjectListed.getText();
        }).then(function (message) {
            expect(message === '').to.be.true;
        });
    });

    // Add a RV Endpoint, delete it, then confirm the delete operation.
    //
    it('Should add a RV Endpoint, delete it, then confirm the delete operation', function () {
        Page.delEndpointRvYes("EndpointRV0009").then(function () {
            Page.addEndpointRv("EndpointRV0009", "", undefined, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointRvYes("EndpointRV0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getAttribute('title');
        }).then(function (message) {
            expect(message.includes("Not allowed to delete RV Endpoint")).to.be.true;
        }).then(function () {
            Page.delConnRvYes("EndpointRV0009");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRV0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointRV0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a RV Endpoint, delete it, then discard the delete operation.
    //
    it('Should add a RV Endpoint, delete it, then discard the delete operation', function () {
        Page.delEndpointRvYes("EndpointRV0010").then(function () {
            Page.addEndpointRv("EndpointRV0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointRvNo("EndpointRV0010");
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.true;
        });
    });

    // Test 'Audit' & 'Refresh' button.
    //
    it('Test Audit & Refresh button', function () {
        Page.delEndpointRvYes("EndpointRV0011").then(function () {
            Page.addEndpointRv("EndpointRV0011");
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

    // Test field 'RV Endpoint Details panel' -> 'CHECK' button normally
    //
    it('Test field RV Endpoint -> CHECK normally', function () {
        Page.delEndpointRvYes("EndpointRV0011").then(function () {
            Page.addEndpointRv("EndpointRV0011");
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

    // Test field 'RV Endpoint Details panel' -> 'CHECK' button with invalid url
    //
    it('Test field RV Endpoint -> CHECK with invalid url', function () {
        Page.delEndpointRvYes("EndpointRV0012_Invalid_Url").then(function () {
            Page.addEndpointRv("EndpointRV0012_Invalid_Url", "", "invalid");
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
            expect(message === 'Invalid daemon (URL) [invalid]; should be "host:port"').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointRvUrlInput.clear().sendKeys("AAA:1234");
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message.includes('Failed to connect to daemon')).to.be.true;
        }).then(function () {
            Page.eleSaveButton.click();
        });
    });

    // Test RV Endpoint Details panel fields default value.
    // Related jiras: ZWUI-947(fixed)
    it('Test RV Endpoint Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleEndpointsRvLeftmenu);
        }).then(function () {
            Page.eleEndpointsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointRvNameInput);
        }).then(function () {
            return Page.eleEndpointRvNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvAutoCreateConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Test RV Endpoint Details panel mandatory fields.
    //
    it('Test RV Endpoint Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleEndpointsRvLeftmenu);
        }).then(function () {
            Page.eleEndpointsRvLeftmenu.click();
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
            return Page.eleEndpointRvNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'RV Endpoint Details panel' -> 'Name'
    //
    it('Test field RV Endpoint -> Name', function () {
        Page.delEndpointRvYes("EndpointRV0013_@#$_23333333333444444444").then(function () {
            Page.delEndpointRvYes("EndpointRV0014_@#$_23333333333444444444");
        }).then(function () {
            Page.addEndpointRv("EndpointRV0013_@#$_23333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointRV0013_@#$_23333333333444444444').to.be.true;
        }).then(function () {
            Page.addEndpointRv("EndpointRV0014_@#$_233333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointRV0014_@#$_23333333333444444444').to.be.true;
        });
    });

    // Test field 'RV Endpoint Details panel' -> 'Description'
    //
    it('Test field RV Endpoint -> Description', function () {
        Page.delEndpointRvYes("EndpointRV0015").then(function () {
            Page.delEndpointRvYes("EndpointRV0016");
        }).then(function () {
            Page.addEndpointRv("EndpointRV0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addEndpointRv("EndpointRV0016", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointRvDescValidateMsg);
        }).then(function () {
            return Page.eleEndpointRvDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointRvDescInput);
        }).then(function () {
            Page.eleEndpointRvDescInput.clear().sendKeys("Corrected");
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

    // Test field 'RV Endpoint Details panel' -> 'URL'
    //
    it('Test field RV Endpoint -> URL', function () {
        Page.delEndpointRvYes("EndpointRV0017").then(function () {
            Page.delEndpointRvYes("EndpointRV0018");
        }).then(function () {
            Page.addEndpointRv("EndpointRV0017", "", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvUrlInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addEndpointRv("EndpointRV0018", "", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointRvUrlInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});