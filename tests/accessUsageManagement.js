/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var accessPage = require('../pageObject/accessPage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.9.4 Access Usage Management Page', function () {
    var Page = new accessPage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleAccessMenu.click();
    });

    // Test Usage Management -> Save Usage
    //
    it('Test Usage Management -> Save Usage', function () {
        browser.sleep(1000).then(function () {
            Page.saveUsage(false, false, false, true, false, true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleUsageManageSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageEmsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRvCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageCicsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageImsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageBatchCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test Usage Management -> Reset Usage
    //
    it('Test Usage Management -> Reset Usage', function () {
        Page.saveUsage(false, false, false, true, false, true, false, true).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.resetUsage(true, true, true, false, true, false, true, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleUsageManageSsesOpsCheck);
        }).then(function () {
            return Page.eleUsageManageSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageEmsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRvCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageCicsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageImsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageBatchCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test Usage Management -> SS-ES Ops & RED Ops can be unchecked together
    //
    it('Test Usage Management -> SS-ES Ops & RED Ops can be unchecked together', function () {
        Page.saveUsage(false, false, true, true, true, true, true, true).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleUsageManageSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageEmsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRvCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageCicsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageImsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageBatchCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test Usage Management -> If EMS is unchecked, RV cannot be unchecked.
    //
    it('Test Usage Management -> If EMS is unchecked, RV cannot be unchecked', function () {
        Page.saveUsage(true, true, true, true, true, true, true, true).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageEmsCheck);
        }).then(function () {
            Page.eleUsageManageEmsCheck.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageRvCheck);
        }).then(function () {
            Page.eleUsageManageRvCheck.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Please select EMS or RV").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getText();
        }).then(function (message) {
            expect(message === "Inconsistent settings. Save aborted").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Please select EMS or RV").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageRvCheck);
        }).then(function () {
            Page.eleUsageManageRvCheck.click();
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
            return Page.eleUsageManageSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageEmsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRvCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageCicsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageImsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageBatchCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test Usage Management -> If RV is unchecked, EMS cannot be unchecked.
    //
    it('Test Usage Management -> If RV is unchecked, EMS cannot be unchecked', function () {
        Page.saveUsage(true, true, true, true, true, true, true, true).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageRvCheck);
        }).then(function () {
            Page.eleUsageManageRvCheck.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageEmsCheck);
        }).then(function () {
            Page.eleUsageManageEmsCheck.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Please select EMS or RV").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getText();
        }).then(function (message) {
            expect(message === "Inconsistent settings. Save aborted").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Please select EMS or RV").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageEmsCheck);
        }).then(function () {
            Page.eleUsageManageEmsCheck.click();
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
            return Page.eleUsageManageSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageEmsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRvCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageCicsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageImsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageBatchCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test Usage Management -> If CICS & RED are unchecked, IMS cannot be unchecked.
    //
    it('Test Usage Management -> If CICS & RED are unchecked, IMS cannot be unchecked', function () {
        Page.saveUsage(true, true, true, true, true, true, true, true).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageCicsCheck);
        }).then(function () {
            Page.eleUsageManageCicsCheck.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageRedCheck);
        }).then(function () {
            Page.eleUsageManageRedCheck.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageImsCheck);
        }).then(function () {
            Page.eleUsageManageImsCheck.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Please select CICS, RED or IMS").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getText();
        }).then(function (message) {
            expect(message === "Inconsistent settings. Save aborted").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Please select CICS, RED or IMS").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageImsCheck);
        }).then(function () {
            Page.eleUsageManageImsCheck.click();
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
            return Page.eleUsageManageSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageEmsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRvCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageCicsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageImsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageBatchCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test Usage Management -> If CICS & IMS are unchecked, RED cannot be unchecked.
    //
    it('Test Usage Management -> If CICS & IMS are unchecked, RED cannot be unchecked', function () {
        Page.saveUsage(true, true, true, true, true, true, true, true).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageCicsCheck);
        }).then(function () {
            Page.eleUsageManageCicsCheck.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageImsCheck);
        }).then(function () {
            Page.eleUsageManageImsCheck.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageRedCheck);
        }).then(function () {
            Page.eleUsageManageRedCheck.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Please select CICS, RED or IMS").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getText();
        }).then(function (message) {
            expect(message === "Inconsistent settings. Save aborted").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Please select CICS, RED or IMS").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageRedCheck);
        }).then(function () {
            Page.eleUsageManageRedCheck.click();
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
            return Page.eleUsageManageSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageEmsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRvCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageCicsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageImsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageBatchCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test Usage Management -> If RED & IMS are unchecked, CICS cannot be unchecked.
    //
    it('Test Usage Management -> If RED & IMS are unchecked, CICS cannot be unchecked', function () {
        Page.saveUsage(true, true, true, true, true, true, true, true).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageImsCheck);
        }).then(function () {
            Page.eleUsageManageImsCheck.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageRedCheck);
        }).then(function () {
            Page.eleUsageManageRedCheck.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageCicsCheck);
        }).then(function () {
            Page.eleUsageManageCicsCheck.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Please select CICS, RED or IMS").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getText();
        }).then(function (message) {
            expect(message === "Inconsistent settings. Save aborted").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Please select CICS, RED or IMS").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageCicsCheck);
        }).then(function () {
            Page.eleUsageManageCicsCheck.click();
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
            return Page.eleUsageManageSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageEmsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRvCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageCicsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageImsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageBatchCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test Usage Management -> Batch can be checked or unchecked anytime.
    //
    it('Test Usage Management -> Batch can be checked or unchecked anytime', function () {
        Page.saveUsage(false, false, false, true, true, false, false, true).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleUsageManageSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageEmsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRvCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageCicsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageImsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageBatchCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageBatchCheck);
        }).then(function () {
            Page.eleUsageManageBatchCheck.click();
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
            return Page.eleUsageManageSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageEmsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageRvCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageCicsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageImsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUsageManageBatchCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        });
    });

    // Test Usage Management -> All the checkboxs can be checked together.
    //
    it('Test Usage Management -> All the checkboxs can be checked together', function () {
        Page.saveUsage(true, true, true, true, true, true, true, true).then(function () {
            globalCommons.waitForClickable(Page.eleUsageManageSsesOpsCheck);
        }).then(function () {
            return Page.eleUsageManageSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageEmsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRvCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageCicsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageRedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageImsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUsageManageBatchCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});