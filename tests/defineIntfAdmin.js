/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var ConfigurePage = require('../pageObject/configurePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.17 Define Interfaces Admin Page', function () {
    var Page = new definePage();
    var configurePage = new ConfigurePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a Admin Interface.
    //
    it('Should add a Admin Interface successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delIntfAdmYes("IntfAdmin0001");
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0001");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0001", "", undefined, "EndpointAdminA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a Admin Interface, then replicate it.
    //
    it('Should add a Admin Interface, then replicate it successfully', function () {
        Page.delIntfAdmYes("IntfAdmin0002-copy").then(function () {
            Page.delIntfAdmYes("IntfAdmin0002");
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0002");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0002", "", undefined, "EndpointAdminA0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateIntfAdm("IntfAdmin0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a Admin Interface successfully, then update it.
    //
    it('Should add a Admin Interface, then update it successfully', function () {
        Page.delIntfAdmYes("IntfAdmin0003").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0003");
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0004");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSE0001");
        }).then(function () {
            Page.delIntfRvYes("IntfRVE0001");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSE0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVE0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.delTrgYes("TriggerA0001");
        }).then(function () {
            configurePage.delTrgYes("TriggerA0002");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.delConnEmsYes("ConnEMSB0001");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSB0001");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMSB0001", "", false, false, "EndpointEMSB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.addTrg("TriggerA0001", "", "ConnEMSB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            configurePage.addTrg("TriggerA0002", "", "ConnEMSB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0003", "abcdefg", "INTFID01", "EndpointAdminA0003", "11", "3", false, "111", "TriggerA0001", "IntfEMSE0001", "cmd1", "cmd3", "cmd5", "cmd7", "cmd9");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateIntfAdm("IntfAdmin0003", "hijklmn", "INTFID02", "EndpointAdminA0004", "22", "4", true, "222", "TriggerA0002", "IntfRVE0001", "cmd2", "cmd4", "cmd6", "cmd8", "cmd10");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfAdmin0003').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointAdminA0004').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmLogRemoteCmdsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TriggerA0002').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVE0001').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd2').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd4').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd6').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd8').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd10').to.be.true;
        });
    });

    // Add a Admin Interface, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a Admin Interface, cancel the changes, then confirm the cancel operation', function () {
        Page.delIntfAdmYes("IntfAdmin0004").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0005");
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0006");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSE0002");
        }).then(function () {
            Page.delIntfRvYes("IntfRVE0002");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSE0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVE0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.delTrgYes("TriggerA0003");
        }).then(function () {
            configurePage.delTrgYes("TriggerA0004");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.delConnEmsYes("ConnEMSB0002");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSB0002");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMSB0002", "", false, false, "EndpointEMSB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.addTrg("TriggerA0003", "", "ConnEMSB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            configurePage.addTrg("TriggerA0004", "", "ConnEMSB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0004", "abcdefg", "INTFID01", "EndpointAdminA0005", "11", "3", false, "111", "TriggerA0003", "IntfEMSE0002", "cmd1", "cmd3", "cmd5", "cmd7", "cmd9");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfAdmYes("IntfAdmin0004", "hijklmn", "INTFID02", "EndpointAdminA0006", "22", "4", true, "222", "TriggerA0004", "IntfRVE0002", "cmd2", "cmd4", "cmd6", "cmd8", "cmd10");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsAdmLeftmenu);
        }).then(function () {
            Page.eleIntfsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfAdmin0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfAdmNameInput);
        }).then(function () {
            return Page.eleIntfAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfAdmin0004').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointAdminA0005').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmLogRemoteCmdsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TriggerA0003').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSE0002').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd1').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd3').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd5').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd7').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd9').to.be.true;
        });
    });

    // Add a Admin Interface, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a Admin Interface, cancel the changes, then discard the cancel operation', function () {
        Page.delIntfAdmYes("IntfAdmin0005").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0007");
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0008");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSE0003");
        }).then(function () {
            Page.delIntfRvYes("IntfRVE0003");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSE0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVE0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.delTrgYes("TriggerA0005");
        }).then(function () {
            configurePage.delTrgYes("TriggerA0006");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.delConnEmsYes("ConnEMSB0003");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSB0003");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMSB0003", "", false, false, "EndpointEMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.addTrg("TriggerA0005", "", "ConnEMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            configurePage.addTrg("TriggerA0006", "", "ConnEMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0005", "abcdefg", "INTFID01", "EndpointAdminA0007", "11", "3", false, "111", "TriggerA0005", "IntfEMSE0003", "cmd1", "cmd3", "cmd5", "cmd7", "cmd9");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfAdmNo("IntfAdmin0005", "hijklmn", "INTFID02", "EndpointAdminA0008", "22", "4", true, "222", "TriggerA0006", "IntfRVE0003", "cmd2", "cmd4", "cmd6", "cmd8", "cmd10");
        }).then(function () {
            return Page.eleIntfAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfAdmin0005').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointAdminA0008').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmLogRemoteCmdsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TriggerA0006').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVE0003').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd2').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd4').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd6').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd8').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd10').to.be.true;
        });
    });

    // Add a Admin Interface, make some changes, then reset it.
    //
    it('Should add a Admin Interface, make some changes, then reset it', function () {
        Page.delIntfAdmYes("IntfAdmin0006").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0009");
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0010");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSE0004");
        }).then(function () {
            Page.delIntfRvYes("IntfRVE0004");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSE0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVE0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.delTrgYes("TriggerA0007");
        }).then(function () {
            configurePage.delTrgYes("TriggerA0008");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.delConnEmsYes("ConnEMSB0004");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSB0004");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMSB0004", "", false, false, "EndpointEMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.addTrg("TriggerA0007", "", "ConnEMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            configurePage.addTrg("TriggerA0008", "", "ConnEMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0006", "abcdefg", "INTFID01", "EndpointAdminA0009", "11", "3", false, "111", "TriggerA0007", "IntfEMSE0004", "cmd1", "cmd3", "cmd5", "cmd7", "cmd9");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetIntfAdm("IntfAdmin0006", "hijklmn", "INTFID02", "EndpointAdminA0010", "22", "4", true, "222", "TriggerA0008", "IntfRVE0004", "cmd2", "cmd4", "cmd6", "cmd8", "cmd10");
        }).then(function () {
            return Page.eleIntfAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfAdmin0006').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointAdminA0009').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmLogRemoteCmdsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TriggerA0007').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSE0004').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd1').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd3').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd5').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd7').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd9').to.be.true;
        });
    });

    // Add a Admin Interface, then add a Admin Interface with the same name, then confirm the overwrite operation.
    //
    it('Should add a Admin Interface to overwrite a Admin Interface, then confirm the overwrite operation', function () {
        Page.delIntfAdmYes("IntfAdmin0007").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0011");
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0012");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSE0005");
        }).then(function () {
            Page.delIntfRvYes("IntfRVE0005");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSE0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVE0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.delTrgYes("TriggerA0009");
        }).then(function () {
            configurePage.delTrgYes("TriggerA0010");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.delConnEmsYes("ConnEMSB0005");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSB0005");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMSB0005", "", false, false, "EndpointEMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.addTrg("TriggerA0009", "", "ConnEMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            configurePage.addTrg("TriggerA0010", "", "ConnEMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0007", "abcdefg", "INTFID01", "EndpointAdminA0011", "11", "3", false, "111", "TriggerA0009", "IntfEMSE0005", "cmd1", "cmd3", "cmd5", "cmd7", "cmd9");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0007", "hijklmn", "INTFID02", "EndpointAdminA0012", "22", "4", true, "222", "TriggerA0010", "IntfRVE0005", "cmd2", "cmd4", "cmd6", "cmd8", "cmd10");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleIntfAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfAdmin0007').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointAdminA0012').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmLogRemoteCmdsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TriggerA0010').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVE0005').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd2').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd4').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd6').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd8').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd10').to.be.true;
        });
    });

    // Add a Admin Interface, then add a Admin Interface with the same name, then discard the overwrite operation.
    //
    it('Should add a Admin Interface to overwrite a Admin Interface, then discard the overwrite operation', function () {
        Page.delIntfAdmYes("IntfAdmin0008").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0013");
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0014");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSE0006");
        }).then(function () {
            Page.delIntfRvYes("IntfRVE0006");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0013");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0014");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSE0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVE0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.delTrgYes("TriggerA0011");
        }).then(function () {
            configurePage.delTrgYes("TriggerA0012");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.delConnEmsYes("ConnEMSB0006");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSB0006");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMSB0006", "", false, false, "EndpointEMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.addTrg("TriggerA0011", "", "ConnEMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            configurePage.addTrg("TriggerA0012", "", "ConnEMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0008", "abcdefg", "INTFID01", "EndpointAdminA0013", "11", "3", false, "111", "TriggerA0011", "IntfEMSE0006", "cmd1", "cmd3", "cmd5", "cmd7", "cmd9");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0008", "hijklmn", "INTFID02", "EndpointAdminA0014", "22", "4", true, "222", "TriggerA0012", "IntfRVE0006", "cmd2", "cmd4", "cmd6", "cmd8", "cmd10");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsAdmLeftmenu);
        }).then(function () {
            Page.eleIntfsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfAdmin0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfAdmNameInput);
        }).then(function () {
            return Page.eleIntfAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfAdmin0008').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointAdminA0013').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmLogRemoteCmdsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TriggerA0011').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSE0006').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd1').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd3').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd5').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd7').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'cmd9').to.be.true;
        });
    });

    // Add a Admin Interface, delete it, then confirm the delete operation.
    //
    it('Should add a Admin Interface, delete it, then confirm the delete operation', function () {
        Page.delIntfAdmYes("IntfAdmin0009").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0015");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0009", "", undefined, "EndpointAdminA0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfAdmYes("IntfAdmin0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfAdmin0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a Admin Interface, delete it, then discard the delete operation.
    //
    it('Should add a Admin Interface, delete it, then discard the delete operation', function () {
        Page.delIntfAdmYes("IntfAdmin0010").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0016");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0010", "", undefined, "EndpointAdminA0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfAdmNo("IntfAdmin0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfAdmin0010");
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
        Page.delIntfAdmYes("IntfAdmin0011").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0017");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0017");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0011", "", undefined, "EndpointAdminA0017");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            browser.sleep(500);
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

    // Test Admin Interface Details panel fields default value.
    //
    it('Test Admin Interface Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsAdmLeftmenu);
        }).then(function () {
            Page.eleIntfsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfAdmNameInput);
        }).then(function () {
            return Page.eleIntfAdmNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmLogRemoteCmdsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                Page.eleIntfAdmHeartbeatExtend.click().then(function () {
                    globalCommons.waitForDisplayed(Page.eleIntfAdmIntervalSpinner);
                });
            }
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test Admin Interface Details panel mandatory fields.
    //
    it('Test Admin Interface Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsAdmLeftmenu);
        }).then(function () {
            Page.eleIntfsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfAdmNameInput);
        }).then(function () {
            Page.eleIntfAdmNameInput.clear();
        }).then(function () {
            Page.eleIntfAdmDescInput.clear();
        }).then(function () {
            Page.eleIntfAdmIntfidInput.clear();
        }).then(function () {
            Page.eleIntfAdmEndpointInput.clear();
        }).then(function () {
            return Page.eleIntfAdmServiceTrgInput.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                Page.eleIntfAdmHeartbeatExtend.click().then(function () {
                    globalCommons.waitForDisplayed(Page.eleIntfAdmServiceTrgInput);
                });
            }
        }).then(function () {
            Page.eleIntfAdmServiceTrgInput.clear();
        }).then(function () {
            Page.eleIntfAdmOutputIntfInput.clear();
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmdInput.clear();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntfidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmEndpointValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'Admin Interface Details panel' -> 'Name'
    //
    it('Test field Admin Interface -> Name', function () {
        Page.delIntfAdmYes("IntfAdmin0012_@#$_223333333333444444444").then(function () {
            Page.delIntfAdmYes("IntfAdmin0013_@#$_223333333333444444444")
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0018");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0012_@#$_223333333333444444444", "", undefined, "EndpointAdminA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfAdmin0012_@#$_223333333333444444444').to.be.true;
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0013_@#$_2233333333334444444444", "", undefined, "EndpointAdminA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfAdmin0013_@#$_223333333333444444444').to.be.true;
        });
    });

    // Test field 'Admin Interface Details panel' -> 'Description'
    //
    it('Test field Admin Interface -> Description', function () {
        Page.delIntfAdmYes("IntfAdmin0014").then(function () {
            Page.delIntfAdmYes("IntfAdmin0015");
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0019");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", undefined, "EndpointAdminA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111", undefined, "EndpointAdminA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfAdmDescValidateMsg);
        }).then(function () {
            return Page.eleIntfAdmDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfAdmDescInput);
        }).then(function () {
            Page.eleIntfAdmDescInput.clear().sendKeys("Corrected");
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

    // Test field 'Admin Interface Details panel' -> 'Interface ID'
    //
    it('Test field Admin Interface -> Interface ID', function () {
        Page.delIntfAdmYes("IntfAdmin0016").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0020");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0020");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0016", "", "!@#$%^&*", "EndpointAdminA0020");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '!@#$%^&*').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmIntfidInput.clear().sendKeys("aBcDeFgH");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'aBcDeFgH').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmIntfidInput.clear().sendKeys("123456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '12345678').to.be.true;
        });
    });

    // Test field 'Admin Interface Details panel -> Admin Endpoint'
    //
    it('Test field Admin Interface -> Admin Endpoint', function () {
        Page.delIntfAdmYes("IntfAdmin0017").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0021_@#$_3333333444444444");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0021_@#$_3333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0017", "", undefined, "ABC");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmEndpointValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmEndpointInput.clear().sendKeys("EndpointAdminA0021_@#$_3333333444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmEndpointInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointAdminA0021_@#$_3333333444444444').to.be.true;
        });
    });

    // Test field 'Admin Interface Details panel -> Workers'
    //
    it('Test field Admin Interface -> Workers', function () {
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        Page.delIntfAdmYes("IntfAdmin0018").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0022");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0022");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0018", "", undefined, "EndpointAdminA0022", "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmWorkersSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmWorkersSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmWorkersSpinner.clear().sendKeys("20");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '20').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmWorkersSpinner.clear().sendKeys("29");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '29').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmWorkersSpinner.clear().sendKeys("30");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmWorkersSpinner.clear().sendKeys("31");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        });
    });

    // Test field 'Admin Interface Details panel -> Trace Level: Operational Commands'
    //
    it('Test field Admin Interface -> Trace Level: Operational Commands', function () {
        var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
        Page.delIntfAdmYes("IntfAdmin0019").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0023");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0023");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0019", "", undefined, "EndpointAdminA0023", "3", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmTrcLvlOpsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmTrcLvlOpsSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmTrcLvlOpsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmTrcLvlOpsSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmTrcLvlOpsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmTrcLvlOpsSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmTrcLvlOpsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmTrcLvlOpsSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmTrcLvlOpsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmTrcLvlOpsSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmTrcLvlOpsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmTrcLvlOpsSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmTrcLvlOpsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        });
    });

    // Test field 'Admin Interface Details panel -> Heartbeat -> Interval(sec)'
    //
    it('Test field Admin Interface -> Heartbeat -> Interval(sec)', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfAdmYes("IntfAdmin0020").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0024");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSE0007");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSE0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.delTrgYes("TriggerA0013");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.delConnEmsYes("ConnEMSB0007");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSB0007");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMSB0007", "", false, false, "EndpointEMSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.addTrg("TriggerA0013", "", "ConnEMSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0020", "", undefined, "EndpointAdminA0024", "3", "0", false, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmIntervalSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmIntervalSpinner.clear().sendKeys("1");
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
            return Page.eleIntfAdmServiceTrgValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmOutputIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmdValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A value is required').to.be.true;
        }).then(function () {
            Page.eleIntfAdmServiceTrgInput.clear().sendKeys("TriggerA0013");
        }).then(function () {
            Page.eleIntfAdmOutputIntfInput.clear().sendKeys("IntfEMSE0007");
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmdInput.clear().sendKeys("SHOW,INTF,CONN");
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
            return Page.eleIntfAdmIntervalSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmIntervalSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmIntervalSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmIntervalSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmIntervalSpinner.clear().sendKeys("200");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '200').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmIntervalSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmIntervalSpinner.clear().sendKeys("299");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '299').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmIntervalSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmIntervalSpinner.clear().sendKeys("300");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '300').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmIntervalSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfAdmIntervalSpinner.clear().sendKeys("301");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmIntervalSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '300').to.be.true;
        });
    });

    // Test field 'Admin Interface Details panel -> Heartbeat -> Service: Trigger'
    // Related jiras: ZWUI-954(fixed), ZWUI-955(fixed)
    it('Test field Admin Interface -> Heartbeat -> Service: Trigger', function () {
        Page.delIntfAdmYes("IntfAdmin0021").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0025");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0025");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.delTrgYes("TriggerA0014_@#$_2223333333333444444444");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.delConnEmsYes("ConnEMSB0008");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSB0008");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMSB0008", "", false, false, "EndpointEMSB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu)
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            configurePage.addTrg("TriggerA0014_@#$_2223333333333444444444", "", "ConnEMSB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu)
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0021", "", undefined, "EndpointAdminA0025", "3", "0", false, "0", "AAA");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmServiceTrgValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfAdmServiceTrgInput.clear().sendKeys("TriggerA0014_@#$_2223333333333444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmServiceTrgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'TriggerA0014_@#$_2223333333333444444444').to.be.true;
        });
    });

    // Test field 'Admin Interface Details panel -> Heartbeat -> Output Interface'
    // Related jiras: ZWUI-1005(fixed)
    it('Test field Admin Interface -> Heartbeat -> Output Interface', function () {
        Page.delIntfAdmYes("IntfAdmin0022").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0026");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSE0008_@#$_2223333333333444444444");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0026");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSE0008_@#$_2223333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0022", "desc", undefined, "EndpointAdminA0026", "3", "0", false, "0", "", "NOEXIST");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmOutputIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleIntfAdmOutputIntfInput.clear().sendKeys("IntfEMSE0008_@#$_2223333333333444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmOutputIntfInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfEMSE0008_@#$_2223333333333444444444').to.be.true;
        });
    });

    // Test field 'Admin Interface Details panel -> Heartbeat -> Heartbeat Command'
    //
    it('Test field Admin Interface -> Heartbeat -> Heartbeat Command', function () {
        Page.delIntfAdmYes("IntfAdmin0023").then(function () {
            Page.delEndpointAdmYes("EndpointAdminA0027");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminA0027");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdmin0023", "", undefined, "EndpointAdminA0027", "3", "0", false, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmdInput.getText();
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfAdmHeartbeatCmdAddButton);
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmdAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfAdmHeartbeatCmdValidateMsg);
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmdValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Empty Value').to.be.true;
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmdInput.clear().sendKeys("!@#$%^&*()ZXCVBNM<>?asdfghjklz44444444445");
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
            return Page.eleIntfAdmHeartbeatCmdValidateMsg.getText();
        }).then(function (message) {
            expect(message === '"!@#$%^&*()...": the value is too long, must be at most 40 characters').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmdInput.clear().sendKeys("!@#$%^&*()ZXCVBNM<>?asdfghjklz4444444444");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfAdmHeartbeatCmdAddButton);
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmdAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfAdmHeartbeatCmd2Input);
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmd2Input.clear().sendKeys("!@#$%^&*()ZXCVBNM<>?asdfghjklz4444444444");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfAdmHeartbeatCmdAddButton);
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmdAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfAdmHeartbeatCmd3Input);
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmd3Input.clear().sendKeys("A  bb CCC");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfAdmHeartbeatCmdAddButton);
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmdAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfAdmHeartbeatCmd4Input);
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmd4Input.clear().sendKeys("Command4");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfAdmHeartbeatCmdAddButton);
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmdAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfAdmHeartbeatCmd5Input);
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmd5Input.clear().sendKeys("Command5");
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
            return Page.eleIntfAdmHeartbeatCmdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()ZXCVBNM<>?asdfghjklz4444444444').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()ZXCVBNM<>?asdfghjklz4444444444').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A  bb CCC').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd4Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'Command4').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd5Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'Command5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfAdmHeartbeatCmdAddButton);
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmdAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === 'Max number of entries is 5').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfAdmHeartbeatCmd4RemoveButton);
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmd4RemoveButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfAdmHeartbeatCmd2RemoveButton);
        }).then(function () {
            Page.eleIntfAdmHeartbeatCmd2RemoveButton.click();
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()ZXCVBNM<>?asdfghjklz4444444444').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A  bb CCC').to.be.true;
        }).then(function () {
            return Page.eleIntfAdmHeartbeatCmd3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'Command5').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});