/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.11 Define Interfaces EMS Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a EMS Interface successfully.
    //
    it('Should add a EMS Interface successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delIntfEmsYes("IntfEMS0001");
        }).then(function () {
            Page.addIntfEms("IntfEMS0001", "", undefined, "EndpointRVA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a EMS Interface successfully, then replicate it.
    //
    it('Should add a EMS Interface, then replicate it successfully', function () {
        Page.delIntfEmsYes("IntfEMS0002-copy").then(function () {
            Page.delIntfEmsYes("IntfEMS0002");
        }).then(function () {
            Page.addIntfEms("IntfEMS0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateIntfEms("IntfEMS0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a EMS Interface successfully, then update it.
    //
    it('Should add a EMS Interface, then update it successfully', function () {
        Page.delIntfEmsYes("IntfEMS0003").then(function () {
            Page.addIntfEms("IntfEMS0003", "abcdefg", "INTFID01", "11", "33", "111", false, false, "Bytes", "dmq01");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateIntfEms("IntfEMS0003", "hijklmn", "INTFID02", "22", "34", "222", true, true, "Text", "dmq02");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMS0003').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '34').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsUsePropCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsErrMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDeadMsgQueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'dmq02').to.be.true;
        });
    });

    // Add a EMS Interface, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a EMS Interface, cancel the changes, then confirm the cancel operation', function () {
        Page.delIntfEmsYes("IntfEMS0004").then(function () {
            Page.addIntfEms("IntfEMS0004", "abcdefg", "INTFID01", "11", "33", "111", false, false, "Bytes", "dmq01");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfEmsYes("IntfEMS0004", "hijklmn", "INTFID02", "22", "34", "222", true, true, "Text", "dmq02");
        }).then(function () {
            Page.eleIntfsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfEMS0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfEmsNameInput);
        }).then(function () {
            return Page.eleIntfEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMS0004').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfEmsUsePropCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfEmsErrMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "Bytes").to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDeadMsgQueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'dmq01').to.be.true;
        });
    });

    // Add a EMS Interface, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a EMS Interface, cancel the changes, then discard the cancel operation', function () {
        Page.delIntfEmsYes("IntfEMS0005").then(function () {
            Page.addIntfEms("IntfEMS0005", "abcdefg", "INTFID01", "11", "33", "111", false, false, "Bytes", "dmq01");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfEmsNo("IntfEMS0005", "hijklmn", "INTFID02", "22", "34", "222", true, true, "Text", "dmq02");
        }).then(function () {
            return Page.eleIntfEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMS0005').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '34').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsUsePropCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsErrMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDeadMsgQueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'dmq02').to.be.true;
        });
    });

    // Add a EMS Interface, make some changes, then reset it.
    //
    it('Should add a EMS Interface, make some changes, then reset it', function () {
        Page.delIntfEmsYes("IntfEMS0006").then(function () {
            Page.addIntfEms("IntfEMS0006", "abcdefg", "INTFID01", "11", "33", "111", false, false, "Bytes", "dmq01");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetIntfEms("IntfEMS0006", "hijklmn", "INTFID02", "22", "34", "222", true, true, "Text", "dmq02");
        }).then(function () {
            return Page.eleIntfEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMS0006').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfEmsUsePropCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfEmsErrMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "Bytes").to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDeadMsgQueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'dmq01').to.be.true;
        });
    });

    // Add a EMS Interface, then add a EMS Interface with the same name, then confirm the overwrite operation.
    //
    it('Should add a EMS Interface to overwrite a EMS Interface, then confirm the overwrite operation', function () {
        Page.delIntfEmsYes("IntfEMS0007").then(function () {
            Page.addIntfEms("IntfEMS0007", "abcdefg", "INTFID01", "11", "33", "111", false, false, "Bytes", "dmq01");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfEms("IntfEMS0007", "hijklmn", "INTFID02", "22", "34", "222", true, true, "Text", "dmq02");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleIntfEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMS0007').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '34').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsUsePropCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsErrMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDeadMsgQueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'dmq02').to.be.true;
        });
    });

    // Add a EMS Interface, then add a EMS Interface with the same name, then discard the overwrite operation.
    //
    it('Should add a EMS Interface to overwrite a EMS Interface, then discard the overwrite operation', function () {
        Page.delIntfEmsYes("IntfEMS0008").then(function () {
            Page.addIntfEms("IntfEMS0008", "abcdefg", "INTFID01", "11", "33", "111", false, false, "Bytes", "dmq01");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfEms("IntfEMS0008", "hijklmn", "INTFID02", "22", "34", "222", true, true, "Text", "dmq02");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsEmsLeftmenu);
        }).then(function () {
            Page.eleIntfsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfEMS0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfEmsNameInput);
        }).then(function () {
            return Page.eleIntfEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMS0008').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfEmsUsePropCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfEmsErrMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "Bytes").to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDeadMsgQueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'dmq01').to.be.true;
        });
    });

    // Add a EMS Interface, delete it, then confirm the delete operation.
    //
    it('Should add a EMS Interface, delete it, then confirm the delete operation', function () {
        Page.delIntfEmsYes("IntfEMS0009").then(function () {
            Page.addIntfEms("IntfEMS0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfEmsYes("IntfEMS0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfEMS0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a EMS Interface, delete it, then discard the delete operation.
    //
    it('Should add a EMS Interface, delete it, then discard the delete operation', function () {
        Page.delIntfEmsYes("IntfEMS0010").then(function () {
            Page.addIntfEms("IntfEMS0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfEmsNo("IntfEMS0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfEMS0010");
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
        Page.delIntfEmsYes("IntfEMS0011").then(function () {
            Page.addIntfEms("IntfEMS0011");
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

    // Test EMS Interface Details panel fields default value.
    //
    it('Test EMS Interface Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsEmsLeftmenu);
        }).then(function () {
            Page.eleIntfsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfEmsNameInput);
        }).then(function () {
            return Page.eleIntfEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersEotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsMsgFreeListSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfEmsUsePropCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfEmsErrMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "Map").to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDeadMsgQueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'tibss.Dead.Msg.Queue').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test EMS Interface Details panel mandatory fields.
    //
    it('Test EMS Interface Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsEmsLeftmenu);
        }).then(function () {
            Page.eleIntfsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfEmsDeadMsgQueInput);
        }).then(function () {
            Page.eleIntfEmsDeadMsgQueInput.clear();
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
            return Page.eleIntfEmsNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsIntfidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test field 'EMS Interface Details panel' -> 'Name'
    //
    it('Test field EMS Interface -> Name', function () {
        Page.delIntfEmsYes("IntfEMS0012_@#$_22223333333333444444444").then(function () {
            Page.delIntfEmsYes("IntfEMS0013_@#$_22223333333333444444444");
        }).then(function () {
            Page.addIntfEms("IntfEMS0012_@#$_22223333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfEMS0012_@#$_22223333333333444444444').to.be.true;
        }).then(function () {
            Page.addIntfEms("IntfEMS0013_@#$_222233333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfEMS0013_@#$_22223333333333444444444').to.be.true;
        });
    });

    // Test field 'EMS Interface Details panel' -> 'Description'
    //
    it('Test field EMS Interface -> Description', function () {
        Page.delIntfEmsYes("IntfEMS0014").then(function () {
            Page.delIntfEmsYes("IntfEMS0015");
        }).then(function () {
            Page.addIntfEms("IntfEMS0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addIntfEms("IntfEMS0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfEmsDescValidateMsg);
        }).then(function () {
            return Page.eleIntfEmsDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfEmsDescInput);
        }).then(function () {
            Page.eleIntfEmsDescInput.clear().sendKeys("Corrected");
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

    // Test field 'EMS Interface Details panel' -> 'Interface ID'
    //
    it('Test field EMS Interface -> Interface ID', function () {
        Page.delIntfEmsYes("IntfEMS0016").then(function () {
            Page.addIntfEms("IntfEMS0016", "", "!@#$%^&*");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '!@#$%^&*').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfEmsIntfidInput.clear().sendKeys("aBcDeFgH");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'aBcDeFgH').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfEmsIntfidInput.clear().sendKeys("123456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '12345678').to.be.true;
        });
    });

    // Test field 'EMS Interface Details panel' -> 'Workers'
    //
    it('Test field EMS Interface -> Workers', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfEmsYes("IntfEMS0017").then(function () {
            Page.addIntfEms("IntfEMS0017", "", undefined, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfEmsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfEmsWorkersSpinner.clear().sendKeys("40");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfEmsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfEmsWorkersSpinner.clear().sendKeys("41");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        });
    });

    // Test field 'EMS Interface Details panel' -> 'Workers EOT'
    //
    it('Test field EMS Interface -> Workers EOT', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfEmsYes("IntfEMS0018").then(function () {
            Page.addIntfEms("IntfEMS0018", "", undefined, undefined, "2");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersEotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfEmsWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfEmsWorkersEotSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersEotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfEmsWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfEmsWorkersEotSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersEotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfEmsWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfEmsWorkersEotSpinner.clear().sendKeys("40");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersEotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfEmsWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfEmsWorkersEotSpinner.clear().sendKeys("41");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsWorkersEotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        });
    });

    // Test field 'EMS Interface Details panel' -> 'Message Free List Size'
    //
    it('Test field EMS Interface -> Message Free List Size', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delIntfEmsYes("IntfEMS0019").then(function () {
            Page.addIntfEms("IntfEMS0019", "", undefined, undefined, undefined, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsMsgFreeListSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfEmsMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfEmsMsgFreeListSizeSpinner.clear().sendKeys("300000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsMsgFreeListSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '300000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfEmsMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfEmsMsgFreeListSizeSpinner.clear().sendKeys("300001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsMsgFreeListSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '300000').to.be.true;
        });
    });

    // Test field 'EMS Interface Details panel' -> 'Error Message Type'
    //
    it('Test field EMS Interface -> Error Message Type', function () {
        Page.delIntfEmsYes("IntfEMS0020").then(function () {
            Page.addIntfEms("IntfEMS0020", "", undefined, undefined, undefined, undefined, undefined, undefined, "Map");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsErrMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Map').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page._errMsgTypeIntfEms("Bytes");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsErrMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Bytes').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page._errMsgTypeIntfEms("Text");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsErrMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        });
    });

    // Test field 'EMS Interface Details panel' -> 'Dead Message Queue Name'
    //
    it('Test field EMS Interface -> Dead Message Queue Name', function () {
        Page.delIntfEmsYes("IntfEMS0021").then(function () {
            Page.delIntfEmsYes("IntfEMS0022");
        }).then(function () {
            Page.addIntfEms("IntfEMS0021", "", undefined, undefined, undefined, undefined, undefined, undefined, undefined, "ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDeadMsgQueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333').to.be.true;
        }).then(function () {
            Page.addIntfEms("IntfEMS0022", "", undefined, undefined, undefined, undefined, undefined, undefined, undefined, "ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^1111111111222222222233333333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfEmsDeadMsgQueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333').to.be.true;
        });
    });


    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});