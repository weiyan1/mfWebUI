/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.12 Define Interfaces RV Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a RV Interface successfully.
    //
    it('Should add a RV Interface successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delIntfRvYes("IntfRV0001");
        }).then(function () {
            Page.addIntfRv("IntfRV0001", "", undefined, "EndpointRVA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a RV Interface successfully, then replicate it.
    //
    it('Should add a RV Interface, then replicate it successfully', function () {
        Page.delIntfRvYes("IntfRV0002-copy").then(function () {
            Page.delIntfRvYes("IntfRV0002");
        }).then(function () {
            Page.addIntfRv("IntfRV0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateIntfRv("IntfRV0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a RV Interface successfully, then update it.
    //
    it('Should add a RV Interface, then update it successfully', function () {
        Page.delIntfRvYes("IntfRV0003").then(function () {
            Page.addIntfRv("IntfRV0003", "abcdefg", "INTFID01", "11", "33", "111", false, false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateIntfRv("IntfRV0003", "hijklmn", "INTFID02", "22", "34", "222", true, true, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRV0003').to.be.true;
        }).then(function () {
            return Page.eleIntfRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfRvIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '34').to.be.true;
        }).then(function () {
            return Page.eleIntfRvMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfRvSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgReceiptCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgDeliveryCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a RV Interface, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a RV Interface, cancel the changes, then confirm the cancel operation', function () {
        Page.delIntfRvYes("IntfRV0004").then(function () {
            Page.addIntfRv("IntfRV0004", "abcdefg", "INTFID01", "11", "33", "111", false, false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfRvYes("IntfRV0004", "hijklmn", "INTFID02", "22", "34", "222", true, true, true);
        }).then(function () {
            Page.eleIntfsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfRV0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfRvNameInput);
        }).then(function () {
            return Page.eleIntfRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRV0004').to.be.true;
        }).then(function () {
            return Page.eleIntfRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfRvIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleIntfRvMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfRvSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgReceiptCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgDeliveryCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a RV Interface, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a RV Interface, cancel the changes, then discard the cancel operation', function () {
        Page.delIntfRvYes("IntfRV0005").then(function () {
            Page.addIntfRv("IntfRV0005", "abcdefg", "INTFID01", "11", "33", "111", false, false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfRvNo("IntfRV0005", "hijklmn", "INTFID02", "22", "34", "222", true, true, true);
        }).then(function () {
            return Page.eleIntfRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRV0005').to.be.true;
        }).then(function () {
            return Page.eleIntfRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfRvIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '34').to.be.true;
        }).then(function () {
            return Page.eleIntfRvMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfRvSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgReceiptCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgDeliveryCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a RV Interface, make some changes, then reset it.
    //
    it('Should add a RV Interface, make some changes, then reset it', function () {
        Page.delIntfRvYes("IntfRV0006").then(function () {
            Page.addIntfRv("IntfRV0006", "abcdefg", "INTFID01", "11", "33", "111", false, false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetIntfRv("IntfRV0006", "hijklmn", "INTFID02", "22", "34", "222", true, true, true);
        }).then(function () {
            return Page.eleIntfRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRV0006').to.be.true;
        }).then(function () {
            return Page.eleIntfRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfRvIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleIntfRvMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfRvSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgReceiptCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgDeliveryCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a RV Interface, then add a RV Interface with the same name, then confirm the overwrite operation.
    //
    it('Should add a RV Interface to overwrite a RV Interface, then confirm the overwrite operation', function () {
        Page.delIntfRvYes("IntfRV0007").then(function () {
            Page.addIntfRv("IntfRV0007", "abcdefg", "INTFID01", "11", "33", "111", false, false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfRv("IntfRV0007", "hijklmn", "INTFID02", "22", "34", "222", true, true, true);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleIntfRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRV0007').to.be.true;
        }).then(function () {
            return Page.eleIntfRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfRvIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '34').to.be.true;
        }).then(function () {
            return Page.eleIntfRvMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfRvSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgReceiptCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgDeliveryCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a RV Interface, then add a RV Interface with the same name, then discard the overwrite operation.
    //
    it('Should add a RV Interface to overwrite a RV Interface, then discard the overwrite operation', function () {
        Page.delIntfRvYes("IntfRV0008").then(function () {
            Page.addIntfRv("IntfRV0008", "abcdefg", "INTFID01", "11", "33", "111", false, false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfRv("IntfRV0008", "hijklmn", "INTFID02", "22", "34", "222", true, true, true);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsRvLeftmenu);
        }).then(function () {
            Page.eleIntfsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfRV0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfRvNameInput);
        }).then(function () {
            return Page.eleIntfRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRV0008').to.be.true;
        }).then(function () {
            return Page.eleIntfRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfRvIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleIntfRvMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfRvSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgReceiptCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgDeliveryCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a RV Interface, delete it, then confirm the delete operation.
    //
    it('Should add a RV Interface, delete it, then confirm the delete operation', function () {
        Page.delIntfRvYes("IntfRV0009").then(function () {
            Page.addIntfRv("IntfRV0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfRvYes("IntfRV0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfRV0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a RV Interface, delete it, then discard the delete operation.
    //
    it('Should add a RV Interface, delete it, then discard the delete operation', function () {
        Page.delIntfRvYes("IntfRV0010").then(function () {
            Page.addIntfRv("IntfRV0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfRvNo("IntfRV0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfRV0010");
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
        Page.delIntfRvYes("IntfRV0011").then(function () {
            Page.addIntfRv("IntfRV0011");
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

    // Test RV Interface Details panel fields default value.
    //
    it('Test RV Interface Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsRvLeftmenu);
        }).then(function () {
            Page.eleIntfsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfRvNameInput);
        }).then(function () {
            return Page.eleIntfRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfRvIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            return Page.eleIntfRvMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRvSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgReceiptCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfRvEnableMsgDeliveryCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test RV Interface Details panel mandatory fields.
    //
    it('Test RV Interface Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsRvLeftmenu);
        }).then(function () {
            Page.eleIntfsRvLeftmenu.click();
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
            return Page.eleIntfRvNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfRvIntfidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'RV Interface Details panel' -> 'Name'
    //
    it('Test field RV Interface -> Name', function () {
        Page.delIntfRvYes("IntfRV0012_@#$_222223333333333444444444").then(function () {
            Page.delIntfRvYes("IntfRV0013_@#$_222223333333333444444444");
        }).then(function () {
            Page.addIntfRv("IntfRV0012_@#$_222223333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfRV0012_@#$_222223333333333444444444').to.be.true;
        }).then(function () {
            Page.addIntfRv("IntfRV0013_@#$_2222233333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfRV0013_@#$_222223333333333444444444').to.be.true;
        });
    });

    // Test field 'RV Interface Details panel' -> 'Description'
    //
    it('Test field RV Interface -> Description', function () {
        Page.delIntfRvYes("IntfRV0014").then(function () {
            Page.delIntfRvYes("IntfRV0015");
        }).then(function () {
            Page.addIntfRv("IntfRV0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addIntfRv("IntfRV0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfRvDescValidateMsg);
        }).then(function () {
            return Page.eleIntfRvDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfRvDescInput);
        }).then(function () {
            Page.eleIntfRvDescInput.clear().sendKeys("Corrected");
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

    // Test field 'RV Interface Details panel' -> 'Interface ID'
    //
    it('Test field RV Interface -> Interface ID', function () {
        Page.delIntfRvYes("IntfRV0016").then(function () {
            Page.addIntfRv("IntfRV0016", "", "!@#$%^&*");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '!@#$%^&*').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRvIntfidInput.clear().sendKeys("aBcDeFgH");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'aBcDeFgH').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRvIntfidInput.clear().sendKeys("123456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '12345678').to.be.true;
        });
    });

    // Test field 'RV Interface Details panel' -> 'Workers'
    //
    it('Test field RV Interface -> Workers', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfRvYes("IntfRV0017").then(function () {
            Page.addIntfRv("IntfRV0017", "", undefined, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRvWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRvWorkersSpinner.clear().sendKeys("40");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRvWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRvWorkersSpinner.clear().sendKeys("41");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        });
    });

    // Test field 'RV Interface Details panel' -> 'Workers EOT'
    //
    it('Test field RV Interface -> Workers EOT', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfRvYes("IntfRV0018").then(function () {
            Page.addIntfRv("IntfRV0018", "", undefined, undefined, "2");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersEotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRvWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRvWorkersEotSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersEotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRvWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRvWorkersEotSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersEotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRvWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRvWorkersEotSpinner.clear().sendKeys("40");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersEotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRvWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRvWorkersEotSpinner.clear().sendKeys("41");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvWorkersEotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        });
    });

    // Test field 'RV Interface Details panel' -> 'Message Free List Size'
    //
    it('Test field RV Interface -> Message Free List Size', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delIntfRvYes("IntfRV0019").then(function () {
            Page.addIntfRv("IntfRV0019", "", undefined, undefined, undefined, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvMsgFreeListSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRvMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRvMsgFreeListSizeSpinner.clear().sendKeys("300000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvMsgFreeListSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '300000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRvMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRvMsgFreeListSizeSpinner.clear().sendKeys("300001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRvMsgFreeListSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '300000').to.be.true;
        });
    });


    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});