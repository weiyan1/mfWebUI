/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var configurePage = require('../pageObject/configurePage.js');
var DefinePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.6.5 Configure Recipe With CICS & EMS Page', function () {
    var Page = new configurePage();
    var definePage = new DefinePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleConfigureMenu.click();
    });

    // Add a Recipe with CICS interface & EMS Connection successfully.
    //
    it('Add a Recipe with CICS Interface & EMS Connection successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delRecYes("RecipeCE0001");
        }).then(function () {
            Page.delCvrYes("ConversionI0001");
        }).then(function () {
            Page.delCvrYes("ConversionO0001");
        }).then(function () {
            Page.delMsgYes("MessageD0001");
        }).then(function () {
            Page.delBufYes("BufferD0001");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0001");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0001");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0001", "", false, false, "EndpointEMSE0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0001");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0001");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0001");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0001");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0001");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0001", "", undefined, "", "EndpointCICSC0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0001", "", undefined, "", "EndpointCICSC0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0001", "", undefined, "", "EndpointCICSC0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0001", "", undefined, "", "EndpointCICSC0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0001", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0001", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0001", "MessageD0001", "BufferD0001", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0001", "MessageD0001", "BufferD0001", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0001", "", "IntfCICSA0001", true, "IntfCICSB0001", true, "IntfCICSC0001", true, "IntfCICSD0001", true, "ConnEMSC0001", true, "0", "0", "0", "ConversionI0001", true, "ConversionO0001", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a Recipe with CICS Interface & EMS Connection successfully, then replicate it.
    //
    it('Add a Recipe with CICS Interface & EMS Connection, then replicate it successfully', function () {
        Page.delRecYes("RecipeCE0002-copy").then(function () {
            Page.delRecYes("RecipeCE0002");
        }).then(function () {
            Page.delCvrYes("ConversionI0002");
        }).then(function () {
            Page.delCvrYes("ConversionO0002");
        }).then(function () {
            Page.delMsgYes("MessageD0002");
        }).then(function () {
            Page.delBufYes("BufferD0002");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0002");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0002");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0002", "", false, false, "EndpointEMSE0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0002");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0002");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0002");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0002");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0002");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0002", "", undefined, "", "EndpointCICSC0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0002", "", undefined, "", "EndpointCICSC0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0002", "", undefined, "", "EndpointCICSC0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0002", "", undefined, "", "EndpointCICSC0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0002", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0002", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0002", "MessageD0002", "BufferD0002", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0002", "MessageD0002", "BufferD0002", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0002", "", "IntfCICSA0002", true, "IntfCICSB0002", true, "IntfCICSC0002", true, "IntfCICSD0002", true, "ConnEMSC0002", true, "0", "0", "0", "ConversionI0002", true, "ConversionO0002", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.replicateRec("RecipeCE0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RecipeCE0002-copy').to.be.true;
        });
    });

    // Add a Recipe with CICS Interface & EMS Connection successfully, then update it.
    //
    it('Add a Recipe with CICS Interface & EMS Connection, then update it successfully', function () {
        Page.delRecYes("RecipeCE0003").then(function () {
            Page.delCvrYes("ConversionI0003");
        }).then(function () {
            Page.delCvrYes("ConversionI0004");
        }).then(function () {
            Page.delCvrYes("ConversionO0003");
        }).then(function () {
            Page.delCvrYes("ConversionO0004");
        }).then(function () {
            Page.delMsgYes("MessageD0003");
        }).then(function () {
            Page.delBufYes("BufferD0003");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0003");
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0004");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0003");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0003", "", false, false, "EndpointEMSE0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0004", "", false, false, "EndpointEMSE0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0003");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0004");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0003");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0004");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0003");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0004");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0003");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0004");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0003");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0003", "", undefined, "", "EndpointCICSC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0004", "", undefined, "", "EndpointCICSC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0003", "", undefined, "", "EndpointCICSC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0004", "", undefined, "", "EndpointCICSC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0003", "", undefined, "", "EndpointCICSC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0004", "", undefined, "", "EndpointCICSC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0003", "", undefined, "", "EndpointCICSC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0004", "", undefined, "", "EndpointCICSC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0003", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0003", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0003", "MessageD0003", "BufferD0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0004", "MessageD0003", "BufferD0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0003", "MessageD0003", "BufferD0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0004", "MessageD0003", "BufferD0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0003", "AbCdEfG", "IntfCICSA0003", true, "IntfCICSB0003", true, "IntfCICSC0003", true, "IntfCICSD0003", true, "ConnEMSC0003", true, "111", "33", "1", "ConversionI0003", true, "ConversionO0003", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.updateRecWithCicsEms("RecipeCE0003", "HiJkLmN", "IntfCICSA0004", true, "IntfCICSB0004", true, "IntfCICSC0004", true, "IntfCICSD0004", true, "ConnEMSC0004", true, "222", "44", "2", "ConversionI0004", true, "ConversionO0004", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RecipeCE0003').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSA0004').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSB0004').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSC0004').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSD0004').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSC0004').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleRecInputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionI0004').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionO0004').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAMA').to.be.true;
        }).then(function () {
            return Page.eleRecSsidFilterCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecMethodReplyDropdown.getText();
        }).then(function (message) {
            expect(message === 'None').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Storage').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MRT2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRETranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RRT2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRESysNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RRS2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CHANNEL2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CONTAINER2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Transaction').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerCreationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAMB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAMC').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAMD').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAME').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'lsnDest2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'responseDest2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsRespondAlwaysCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '88').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'errDest2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable Auto-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDurableSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSharedSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'durCid2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnitDropdown.getText();
        }).then(function (message) {
            expect(message === 'Days').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCompressionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPreserveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgBodyTraceCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message Id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSelectorInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SEL2').to.be.true;
        });
    });

    // Add a Recipe with CICS Interface & EMS Connection , make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Add a Recipe with CICS Interface & EMS Connection, cancel the changes, then confirm the cancel operation', function () {
        Page.delRecYes("RecipeCE0004").then(function () {
            Page.delCvrYes("ConversionI0005");
        }).then(function () {
            Page.delCvrYes("ConversionI0006");
        }).then(function () {
            Page.delCvrYes("ConversionO0005");
        }).then(function () {
            Page.delCvrYes("ConversionO0006");
        }).then(function () {
            Page.delMsgYes("MessageD0004");
        }).then(function () {
            Page.delBufYes("BufferD0004");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0005");
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0006");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0004");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0005", "", false, false, "EndpointEMSE0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0006", "", false, false, "EndpointEMSE0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0005");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0006");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0005");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0006");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0005");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0006");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0005");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0006");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0004");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0005", "", undefined, "", "EndpointCICSC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0006", "", undefined, "", "EndpointCICSC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0005", "", undefined, "", "EndpointCICSC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0006", "", undefined, "", "EndpointCICSC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0005", "", undefined, "", "EndpointCICSC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0006", "", undefined, "", "EndpointCICSC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0005", "", undefined, "", "EndpointCICSC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0006", "", undefined, "", "EndpointCICSC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0004", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0004", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0005", "MessageD0004", "BufferD0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0006", "MessageD0004", "BufferD0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0005", "MessageD0004", "BufferD0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0006", "MessageD0004", "BufferD0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0004", "AbCdEfG", "IntfCICSA0005", true, "IntfCICSB0005", true, "IntfCICSC0005", true, "IntfCICSD0005", true, "ConnEMSC0005", true, "111", "33", "1", "ConversionI0005", true, "ConversionO0005", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.cancelRecWithCicsEmsYes("RecipeCE0004", "HiJkLmN", "IntfCICSA0006", true, "IntfCICSB0006", true, "IntfCICSC0006", true, "IntfCICSD0006", true, "ConnEMSC0006", true, "222", "44", "2", "ConversionI0006", true, "ConversionO0006", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
        }).then(function () {
            Page.eleRecLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("RecipeCE0004");
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
            return Page.eleRecNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RecipeCE0004').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSA0005').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSB0005').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSC0005').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSD0005').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSC0005').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleRecInputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionI0005').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionO0005').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM1').to.be.true;
        }).then(function () {
            return Page.eleRecSsidFilterCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecMethodReplyDropdown.getText();
        }).then(function (message) {
            expect(message === 'None').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Container').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MRT1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRETranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RRT1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRESysNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RRS1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CHANNEL1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CONTAINER1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Program').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerCreationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Single').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM3').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM4').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM5').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'lsnDest1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'responseDest1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsRespondAlwaysCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '77').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'errDest1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable No-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Non-Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDurableSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsSharedSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'durCid1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnitDropdown.getText();
        }).then(function (message) {
            expect(message === 'Minutes').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCompressionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPreserveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgBodyTraceCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Map').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Envelope').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSelectorInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SEL1').to.be.true;
        });
    });

    // Add a Recipe with CICS Interface & EMS Connection, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Add a Recipe with CICS Interface & EMS Connection, cancel the changes, then discard the cancel operation', function () {
        Page.delRecYes("RecipeCE0005").then(function () {
            Page.delCvrYes("ConversionI0007");
        }).then(function () {
            Page.delCvrYes("ConversionI0008");
        }).then(function () {
            Page.delCvrYes("ConversionO0007");
        }).then(function () {
            Page.delCvrYes("ConversionO0008");
        }).then(function () {
            Page.delMsgYes("MessageD0005");
        }).then(function () {
            Page.delBufYes("BufferD0005");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0007");
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0008");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0005");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0007", "", false, false, "EndpointEMSE0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0008", "", false, false, "EndpointEMSE0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0007");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0008");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0007");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0008");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0007");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0008");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0007");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0008");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0005");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0007", "", undefined, "", "EndpointCICSC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0008", "", undefined, "", "EndpointCICSC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0007", "", undefined, "", "EndpointCICSC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0008", "", undefined, "", "EndpointCICSC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0007", "", undefined, "", "EndpointCICSC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0008", "", undefined, "", "EndpointCICSC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0007", "", undefined, "", "EndpointCICSC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0008", "", undefined, "", "EndpointCICSC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0005", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0005", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0007", "MessageD0005", "BufferD0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0008", "MessageD0005", "BufferD0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0007", "MessageD0005", "BufferD0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0008", "MessageD0005", "BufferD0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0005", "AbCdEfG", "IntfCICSA0007", true, "IntfCICSB0007", true, "IntfCICSC0007", true, "IntfCICSD0007", true, "ConnEMSC0007", true, "111", "33", "1", "ConversionI0007", true, "ConversionO0007", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.cancelRecWithCicsEmsNo("RecipeCE0005", "HiJkLmN", "IntfCICSA0008", true, "IntfCICSB0008", true, "IntfCICSC0008", true, "IntfCICSD0008", true, "ConnEMSC0008", true, "222", "44", "2", "ConversionI0008", true, "ConversionO0008", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecNameInput);
        }).then(function () {
            return Page.eleRecNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RecipeCE0005').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSA0008').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSB0008').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSC0008').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSD0008').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSC0008').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleRecInputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionI0008').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionO0008').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAMA').to.be.true;
        }).then(function () {
            return Page.eleRecSsidFilterCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecMethodReplyDropdown.getText();
        }).then(function (message) {
            expect(message === 'None').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Storage').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MRT2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRETranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RRT2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRESysNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RRS2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CHANNEL2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CONTAINER2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Transaction').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerCreationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAMB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAMC').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAMD').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAME').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'lsnDest2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'responseDest2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsRespondAlwaysCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '88').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'errDest2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable Auto-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDurableSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSharedSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'durCid2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnitDropdown.getText();
        }).then(function (message) {
            expect(message === 'Days').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCompressionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPreserveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgBodyTraceCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message Id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSelectorInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SEL2').to.be.true;
        });
    });

    // Add a Recipe with CICS Interface & EMS Connection, make some changes, then reset it.
    //
    it('Add a Recipe with CICS Interface & EMS Connection, make some changes, then reset it', function () {
        Page.delRecYes("RecipeCE0006").then(function () {
            Page.delCvrYes("ConversionI0009");
        }).then(function () {
            Page.delCvrYes("ConversionI0010");
        }).then(function () {
            Page.delCvrYes("ConversionO0009");
        }).then(function () {
            Page.delCvrYes("ConversionO0010");
        }).then(function () {
            Page.delMsgYes("MessageD0006");
        }).then(function () {
            Page.delBufYes("BufferD0006");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0009");
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0010");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0006");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0009", "", false, false, "EndpointEMSE0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0010", "", false, false, "EndpointEMSE0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0009");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0010");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0009");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0010");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0009");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0010");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0009");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0010");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0006");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0009", "", undefined, "", "EndpointCICSC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0010", "", undefined, "", "EndpointCICSC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0009", "", undefined, "", "EndpointCICSC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0010", "", undefined, "", "EndpointCICSC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0009", "", undefined, "", "EndpointCICSC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0010", "", undefined, "", "EndpointCICSC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0009", "", undefined, "", "EndpointCICSC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0010", "", undefined, "", "EndpointCICSC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0006", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0006", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0009", "MessageD0006", "BufferD0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0010", "MessageD0006", "BufferD0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0009", "MessageD0006", "BufferD0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0010", "MessageD0006", "BufferD0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0006", "AbCdEfG", "IntfCICSA0009", true, "IntfCICSB0009", true, "IntfCICSC0009", true, "IntfCICSD0009", true, "ConnEMSC0009", true, "111", "33", "1", "ConversionI0009", true, "ConversionO0009", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.resetRecWithCicsEms("RecipeCE0006", "HiJkLmN", "IntfCICSA0010", true, "IntfCICSB0010", true, "IntfCICSC0010", true, "IntfCICSD0010", true, "ConnEMSC0010", true, "222", "44", "2", "ConversionI0010", true, "ConversionO0010", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
        }).then(function () {
            return Page.eleRecNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RecipeCE0006').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSA0009').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSB0009').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSC0009').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSD0009').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSC0009').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleRecInputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionI0009').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionO0009').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM1').to.be.true;
        }).then(function () {
            return Page.eleRecSsidFilterCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecMethodReplyDropdown.getText();
        }).then(function (message) {
            expect(message === 'None').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Container').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MRT1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRETranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RRT1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRESysNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RRS1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CHANNEL1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CONTAINER1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Program').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerCreationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Single').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM3').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM4').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM5').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'lsnDest1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'responseDest1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsRespondAlwaysCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '77').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'errDest1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable No-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Non-Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDurableSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsSharedSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'durCid1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnitDropdown.getText();
        }).then(function (message) {
            expect(message === 'Minutes').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCompressionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPreserveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgBodyTraceCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Map').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Envelope').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSelectorInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SEL1').to.be.true;
        });
    });

    // Add a Recipe with CICS Interface & EMS Connection, then add a Recipe with the same name, then confirm the overwrite operation.
    //
    it('Add a Recipe with CICS Interface & EMS Connection to overwrite an existing Recipe, then confirm the overwrite operation', function () {
        Page.delRecYes("RecipeCE0007").then(function () {
            Page.delCvrYes("ConversionI0011");
        }).then(function () {
            Page.delCvrYes("ConversionI0012");
        }).then(function () {
            Page.delCvrYes("ConversionO0011");
        }).then(function () {
            Page.delCvrYes("ConversionO0012");
        }).then(function () {
            Page.delMsgYes("MessageD0007");
        }).then(function () {
            Page.delBufYes("BufferD0007");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0011");
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0012");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0007");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0011", "", false, false, "EndpointEMSE0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0012", "", false, false, "EndpointEMSE0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0011");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0012");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0011");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0012");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0011");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0012");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0011");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0012");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0007");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0011", "", undefined, "", "EndpointCICSC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0012", "", undefined, "", "EndpointCICSC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0011", "", undefined, "", "EndpointCICSC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0012", "", undefined, "", "EndpointCICSC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0011", "", undefined, "", "EndpointCICSC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0012", "", undefined, "", "EndpointCICSC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0011", "", undefined, "", "EndpointCICSC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0012", "", undefined, "", "EndpointCICSC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0007", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0007", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0011", "MessageD0007", "BufferD0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0012", "MessageD0007", "BufferD0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0011", "MessageD0007", "BufferD0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0012", "MessageD0007", "BufferD0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0007", "AbCdEfG", "IntfCICSA0011", true, "IntfCICSB0011", true, "IntfCICSC0011", true, "IntfCICSD0011", true, "ConnEMSC0011", true, "111", "33", "1", "ConversionI0011", true, "ConversionO0011", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0007", "HiJkLmN", "IntfCICSA0012", true, "IntfCICSB0012", true, "IntfCICSC0012", true, "IntfCICSD0012", true, "ConnEMSC0012", true, "222", "44", "2", "ConversionI0012", true, "ConversionO0012", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RecipeCE0007').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSA0012').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSB0012').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSC0012').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSD0012').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSC0012').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleRecInputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionI0012').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionO0012').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAMA').to.be.true;
        }).then(function () {
            return Page.eleRecSsidFilterCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecMethodReplyDropdown.getText();
        }).then(function (message) {
            expect(message === 'None').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Storage').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MRT2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRETranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RRT2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRESysNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RRS2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CHANNEL2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CONTAINER2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Transaction').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerCreationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAMB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAMC').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAMD').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAME').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'lsnDest2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'responseDest2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsRespondAlwaysCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '88').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'errDest2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable Auto-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDurableSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSharedSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'durCid2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnitDropdown.getText();
        }).then(function (message) {
            expect(message === 'Days').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCompressionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPreserveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgBodyTraceCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message Id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSelectorInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SEL2').to.be.true;
        });
    });

    // Add a Recipe with CICS Interface & EMS Connection, then add a Recipe with the same name, then discard the overwrite operation.
    //
    it('Add a Recipe with CICS Interface & EMS Connection to overwrite an existing Recipe, then discard the overwrite operation', function () {
        Page.delRecYes("RecipeCE0008").then(function () {
            Page.delCvrYes("ConversionI0013");
        }).then(function () {
            Page.delCvrYes("ConversionI0014");
        }).then(function () {
            Page.delCvrYes("ConversionO0013");
        }).then(function () {
            Page.delCvrYes("ConversionO0014");
        }).then(function () {
            Page.delMsgYes("MessageD0008");
        }).then(function () {
            Page.delBufYes("BufferD0008");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0013");
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0014");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0008");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0013", "", false, false, "EndpointEMSE0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0014", "", false, false, "EndpointEMSE0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0013");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0014");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0013");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0014");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0013");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0014");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0013");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0014");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0008");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0013", "", undefined, "", "EndpointCICSC0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0014", "", undefined, "", "EndpointCICSC0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0013", "", undefined, "", "EndpointCICSC0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0014", "", undefined, "", "EndpointCICSC0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0013", "", undefined, "", "EndpointCICSC0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0014", "", undefined, "", "EndpointCICSC0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0013", "", undefined, "", "EndpointCICSC0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0014", "", undefined, "", "EndpointCICSC0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0008", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0008", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0013", "MessageD0008", "BufferD0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0014", "MessageD0008", "BufferD0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0013", "MessageD0008", "BufferD0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0014", "MessageD0008", "BufferD0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0008", "AbCdEfG", "IntfCICSA0013", true, "IntfCICSB0013", true, "IntfCICSC0013", true, "IntfCICSD0013", true, "ConnEMSC0013", true, "111", "33", "1", "ConversionI0013", true, "ConversionO0013", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0008", "HiJkLmN", "IntfCICSA0014", true, "IntfCICSB0014", true, "IntfCICSC0014", true, "IntfCICSD0014", true, "ConnEMSC0014", true, "222", "44", "2", "ConversionI0014", true, "ConversionO0014", true, "PROGRAMA", false, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecLeftmenu);
        }).then(function () {
            Page.eleRecLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("RecipeCE0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleRecNameInput);
        }).then(function () {
            return Page.eleRecNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RecipeCE0008').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSA0013').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSB0013').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSC0013').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICSD0013').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSC0013').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleRecInputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionI0013').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionO0013').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM1').to.be.true;
        }).then(function () {
            return Page.eleRecSsidFilterCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecMethodReplyDropdown.getText();
        }).then(function (message) {
            expect(message === 'None').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Container').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MRT1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRETranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RRT1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRESysNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RRS1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CHANNEL1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CONTAINER1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Program').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerCreationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Single').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM3').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM4').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'PROGRAM5').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'lsnDest1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'responseDest1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsRespondAlwaysCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '77').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'errDest1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable No-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Non-Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDurableSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsSharedSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'durCid1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnitDropdown.getText();
        }).then(function (message) {
            expect(message === 'Minutes').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCompressionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPreserveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgBodyTraceCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Map').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Envelope').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSelectorInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SEL1').to.be.true;
        });
    });

    // Add a Recipe with CICS Interface & EMS Connection, delete it, then confirm the delete operation.
    //
    it('Add a Recipe with CICS Interface & EMS Connection, delete it, then confirm the delete operation', function () {
        Page.delRecYes("RecipeCE0009").then(function () {
            Page.delCvrYes("ConversionI0015");
        }).then(function () {
            Page.delCvrYes("ConversionO0015");
        }).then(function () {
            Page.delMsgYes("MessageD0009");
        }).then(function () {
            Page.delBufYes("BufferD0009");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0015");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0009");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0015", "", false, false, "EndpointEMSE0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0015");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0015");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0015");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0015");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0009");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0015", "", undefined, "", "EndpointCICSC0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0015", "", undefined, "", "EndpointCICSC0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0015", "", undefined, "", "EndpointCICSC0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0015", "", undefined, "", "EndpointCICSC0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0009", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0009", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0015", "MessageD0009", "BufferD0009", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0015", "MessageD0009", "BufferD0009", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0009", "", "IntfCICSA0015", true, "IntfCICSB0015", true, "IntfCICSC0015", true, "IntfCICSD0015", true, "ConnEMSC0015", true, "0", "0", "0", "ConversionI0015", true, "ConversionO0015", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.delRecYes("RecipeCE0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("RecipeCE0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a Recipe with CICS Interface & EMS Connection, delete it, then discard the delete operation.
    //
    it('Add a Recipe with CICS Interface & EMS Connection, delete it, then discard the delete operation', function () {
        Page.delRecYes("RecipeCE0010").then(function () {
            Page.delCvrYes("ConversionI0016");
        }).then(function () {
            Page.delCvrYes("ConversionO0016");
        }).then(function () {
            Page.delMsgYes("MessageD0010");
        }).then(function () {
            Page.delBufYes("BufferD0010");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0016");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0010");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0016", "", false, false, "EndpointEMSE0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0016");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0016");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0016");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0016");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0010");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0016", "", undefined, "", "EndpointCICSC0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0016", "", undefined, "", "EndpointCICSC0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0016", "", undefined, "", "EndpointCICSC0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0016", "", undefined, "", "EndpointCICSC0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0010", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0010", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0016", "MessageD0010", "BufferD0010", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0016", "MessageD0010", "BufferD0010", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0010", "", "IntfCICSA0016", true, "IntfCICSB0016", true, "IntfCICSC0016", true, "IntfCICSD0016", true, "ConnEMSC0016", true, "0", "0", "0", "ConversionI0016", true, "ConversionO0016", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.delRecNo("RecipeCE0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("RecipeCE0010");
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
        Page.delRecYes("RecipeCE0011").then(function () {
            Page.delCvrYes("ConversionI0017");
        }).then(function () {
            Page.delCvrYes("ConversionO0017");
        }).then(function () {
            Page.delMsgYes("MessageD0011");
        }).then(function () {
            Page.delBufYes("BufferD0011");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0017");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0011");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0011");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0017", "", false, false, "EndpointEMSE0011");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0017");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0011");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0011");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0017", "", undefined, "", "EndpointCICSC0011");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0011", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0011", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0017", "MessageD0011", "BufferD0011", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0017", "MessageD0011", "BufferD0011", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0011", "", "IntfCICSA0017", false, "", false, "", false, "", false, "ConnEMSC0017", false, "0", "0", "0", "ConversionI0017", false, "ConversionO0017", false);
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
            return Page.eleTableHeader5.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAuditButton);
        }).then(function () {
            Page.eleAuditButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleTableHeader5.getText();
        }).then(function (message) {
            expect(message === 'Modified On').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAuditButton);
        }).then(function () {
            Page.eleAuditButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleTableHeader5.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    //Test Recipe Details panel fields default value.
    //
    it('Test Recipe Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleRecLeftmenu);
        }).then(function () {
            Page.eleRecLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecNameInput);
        }).then(function () {
            return Page.eleRecCicsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecIntfExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecCicsDetailsExtension);
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecCicsDetailsExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecCicsMethodInvocationDropdown);
        }).then(function () {
            return Page.eleRecEmsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecConnectionExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsDetailsExtension);
        }).then(function () {
            return Page.eleRecEmsListentoDestInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecEmsDetailsExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsListentoDestInput);
        }).then(function () {
            return Page.eleRecNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleRecInputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecSsidFilterCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecMethodReplyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'DPL').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRETranIdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRESysNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Program').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerCreationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Single').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        }).then(function () {
            return Page.eleRecEmsListentoDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsRespondAlwaysCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable Auto-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDurableSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsSharedSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnitDropdown.getText();
        }).then(function (message) {
            expect(message === 'Seconds').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCompressionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPreserveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgBodyTraceCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Bytes').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelationDropdown.getText();
        }).then(function (message) {
            expect(message === 'No').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSelectorInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test Recipe Details panel mandatory fields.
    //
    it('Test Recipe Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleRecLeftmenu);
        }).then(function () {
            Page.eleRecLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecNameInput);
        }).then(function () {
            return Page.eleRecCicsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecIntfExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecCicsDetailsExtension);
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecCicsDetailsExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecCicsMethodInvocationDropdown);
        }).then(function () {
            return Page.eleRecEmsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecConnectionExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsDetailsExtension);
        }).then(function () {
            return Page.eleRecEmsListentoDestInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecEmsDetailsExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsListentoDestInput);
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
            return Page.eleRecIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A value is required').to.be.true;
        }).then(function () {
            return Page.eleRecConnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A value is required').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A value is required').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntfInput.clear().sendKeys("IntfCICSA0017");
        }).then(function () {
            Page.eleRecConnInput.clear().sendKeys("ConnEMSC0017");
        }).then(function () {
            Page.eleRecEmsListentoDestInput.clear().sendKeys("tibss.recipe.listenToDest");
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
            return Page.eleRecNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test field 'Recipe Details panel' -> 'Name'
    //
    it('Test Recipe -> Name', function () {
        Page.delRecYes("RecipeCE0012_@#$_2223333333333444444444").then(function () {
            Page.delRecYes("RecipeCE0013_@#$_2223333333333444444444");
        }).then(function () {
            Page.delCvrYes("ConversionI0018");
        }).then(function () {
            Page.delCvrYes("ConversionO0018");
        }).then(function () {
            Page.delMsgYes("MessageD0012");
        }).then(function () {
            Page.delBufYes("BufferD0012");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0018");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0012");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0012");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0018", "", false, false, "EndpointEMSE0012");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0018");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0012");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0012");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0018", "", undefined, "", "EndpointCICSC0012");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0012", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0012", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0018", "MessageD0012", "BufferD0012", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0018", "MessageD0012", "BufferD0012", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0012_@#$_2223333333333444444444", "", "IntfCICSA0018", false, "", false, "", false, "", false, "ConnEMSC0018", false, "0", "0", "0", "ConversionI0018", false, "ConversionO0018", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'RecipeCE0012_@#$_2223333333333444444444').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0013_@#$_22233333333334444444444", "", "IntfCICSA0018", false, "", false, "", false, "", false, "ConnEMSC0018", false, "0", "0", "0", "ConversionI0018", false, "ConversionO0018", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'RecipeCE0013_@#$_2223333333333444444444').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Description'
    //
    it('Test Recipe -> Description', function () {
        Page.delRecYes("RecipeCE0014").then(function () {
            Page.delRecYes("RecipeCE0015");
        }).then(function () {
            Page.delCvrYes("ConversionI0019");
        }).then(function () {
            Page.delCvrYes("ConversionO0019");
        }).then(function () {
            Page.delMsgYes("MessageD0013");
        }).then(function () {
            Page.delBufYes("BufferD0013");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0019");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0013");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0013");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0019", "", false, false, "EndpointEMSE0013");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0019");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0013");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0013");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0019", "", undefined, "", "EndpointCICSC0013");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0013", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0013", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0019", "MessageD0013", "BufferD0013", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0019", "MessageD0013", "BufferD0013", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", "IntfCICSA0019", false, "", false, "", false, "", false, "ConnEMSC0019", false, "0", "0", "0", "ConversionI0019", false, "ConversionO0019", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111", "IntfCICSA0019", false, "", false, "", false, "", false, "ConnEMSC0019", false, "0", "0", "0", "ConversionI0019", false, "ConversionO0019", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecDescValidateMsg);
        }).then(function () {
            return Page.eleRecDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecDescInput);
        }).then(function () {
            Page.eleRecDescInput.clear().sendKeys("Corrected");
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

    // Test field 'Recipe Details panel' -> 'Interface Name'
    //
    it('Test Recipe -> Interface Name', function () {
        Page.delRecYes("RecipeCE0016").then(function () {
            Page.delCvrYes("ConversionI0020");
        }).then(function () {
            Page.delCvrYes("ConversionO0020");
        }).then(function () {
            Page.delMsgYes("MessageD0014");
        }).then(function () {
            Page.delBufYes("BufferD0014");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0020");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0014");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0020", "", false, false, "EndpointEMSE0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0020_@#$_223333333333444444444");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0014");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0020_@#$_223333333333444444444", "", undefined, "", "EndpointCICSC0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0014", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0014", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0020", "MessageD0014", "BufferD0014", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0020", "MessageD0014", "BufferD0014", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0016", "", "IntfCICSA0020_@#$_223333333333444444444", true, "", false, "", false, "", false, "ConnEMSC0020", false, "0", "0", "0", "ConversionI0020", false, "ConversionO0020", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSA0020_@#$_223333333333444444444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntfInput.clear().sendKeys("INVALID");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test field 'Recipe Details panel' -> 'Interface Names (alternate) First'
    //
    it('Test Recipe -> Interface Names (alternate) First', function () {
        Page.delRecYes("RecipeCE0017").then(function () {
            Page.delCvrYes("ConversionI0021");
        }).then(function () {
            Page.delCvrYes("ConversionO0021");
        }).then(function () {
            Page.delMsgYes("MessageD0015");
        }).then(function () {
            Page.delBufYes("BufferD0015");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0021");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0015");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0021", "", false, false, "EndpointEMSE0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0021");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0017_@#$_223333333333444444444");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0015");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0021", "", undefined, "", "EndpointCICSC0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0017_@#$_223333333333444444444", "", undefined, "", "EndpointCICSC0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0015", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0015", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0021", "MessageD0015", "BufferD0015", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0021", "MessageD0015", "BufferD0015", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0017", "", "IntfCICSA0021", true, "IntfCICSA0021", true, "", false, "", false, "ConnEMSC0021", false, "0", "0", "0", "ConversionI0021", false, "ConversionO0021", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSA0021').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf2Input.clear().sendKeys("IntfCICSB0017_@#$_223333333333444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSB0017_@#$_223333333333444444444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf2Input.clear().sendKeys("INVALID");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test field 'Recipe Details panel' -> 'Interface Names (alternate) Second'
    //
    it('Test Recipe -> Interface Names (alternate) Second', function () {
        Page.delRecYes("RecipeCE0018").then(function () {
            Page.delCvrYes("ConversionI0022");
        }).then(function () {
            Page.delCvrYes("ConversionO0022");
        }).then(function () {
            Page.delMsgYes("MessageD0016");
        }).then(function () {
            Page.delBufYes("BufferD0016");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0022");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0016");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0022", "", false, false, "EndpointEMSE0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0022");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0018");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0017_@#$_223333333333444444444");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0016");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0022", "", undefined, "", "EndpointCICSC0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0018", "", undefined, "", "EndpointCICSC0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0017_@#$_223333333333444444444", "", undefined, "", "EndpointCICSC0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0016", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0016", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0022", "MessageD0016", "BufferD0016", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0022", "MessageD0016", "BufferD0016", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0018", "", "IntfCICSA0022", true, "IntfCICSB0018", true, "IntfCICSA0022", true, "", false, "ConnEMSC0022", false, "0", "0", "0", "ConversionI0022", false, "ConversionO0022", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSA0022').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf3Input.clear().sendKeys("IntfCICSB0018");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSB0018').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf3Input.clear().sendKeys("IntfCICSC0017_@#$_223333333333444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSC0017_@#$_223333333333444444444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf3Input.clear().sendKeys("INVALID");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test field 'Recipe Details panel' -> 'Interface Names (alternate) Third'
    //
    it('Test Recipe -> Interface Names (alternate) Third', function () {
        Page.delRecYes("RecipeCE0019").then(function () {
            Page.delCvrYes("ConversionI0023");
        }).then(function () {
            Page.delCvrYes("ConversionO0023");
        }).then(function () {
            Page.delMsgYes("MessageD0017");
        }).then(function () {
            Page.delBufYes("BufferD0017");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0023");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0017");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0023", "", false, false, "EndpointEMSE0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0023");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSB0019");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSC0018");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSD0017_@#$_223333333333444444444");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0017");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0023", "", undefined, "", "EndpointCICSC0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSB0019", "", undefined, "", "EndpointCICSC0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSC0018", "", undefined, "", "EndpointCICSC0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSD0017_@#$_223333333333444444444", "", undefined, "", "EndpointCICSC0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0017", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0017", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0023", "MessageD0017", "BufferD0017", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0023", "MessageD0017", "BufferD0017", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0019", "", "IntfCICSA0023", true, "IntfCICSB0019", true, "IntfCICSC0018", true, "IntfCICSA0023", true, "ConnEMSC0023", false, "0", "0", "0", "ConversionI0023", false, "ConversionO0023", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSA0023').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf4Input.clear().sendKeys("IntfCICSB0019");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSB0019').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf4Input.clear().sendKeys("IntfCICSC0018");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSC0018').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf4Input.clear().sendKeys("IntfCICSD0017_@#$_223333333333444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSD0017_@#$_223333333333444444444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf4Input.clear().sendKeys("INVALID");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test field 'Recipe Details panel' -> 'Connection'
    //
    it('Test Recipe -> Connection', function () {
        Page.delRecYes("RecipeCE0020").then(function () {
            Page.delCvrYes("ConversionI0024");
        }).then(function () {
            Page.delCvrYes("ConversionO0024");
        }).then(function () {
            Page.delMsgYes("MessageD0018");
        }).then(function () {
            Page.delBufYes("BufferD0018");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0024_@#$_2223333333333444444444");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0018");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0024_@#$_2223333333333444444444", "", false, false, "EndpointEMSE0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0024");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0018");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0024", "", undefined, "", "EndpointCICSC0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0018", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0018", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0024", "MessageD0018", "BufferD0018", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0024", "MessageD0018", "BufferD0018", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0020", "", "IntfCICSA0024", true, "", false, "", false, "", false, "ConnEMSC0024_@#$_2223333333333444444444", true, "0", "0", "0", "ConversionI0024", true, "ConversionO0024", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConnEMSC0024_@#$_2223333333333444444444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecConnInput.clear().sendKeys("INVALID");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecConnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test field 'Recipe Details panel' -> 'Disable on Error (#)'
    //
    it('Test Recipe -> Disable on Error (#)', function () {
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        Page.delRecYes("RecipeCE0021").then(function () {
            Page.delCvrYes("ConversionI0025");
        }).then(function () {
            Page.delCvrYes("ConversionO0025");
        }).then(function () {
            Page.delMsgYes("MessageD0019");
        }).then(function () {
            Page.delBufYes("BufferD0019");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0025");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0019");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0025", "", false, false, "EndpointEMSE0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0025");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0019");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0025", "", undefined, "", "EndpointCICSC0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0019", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0019", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0025", "MessageD0019", "BufferD0019", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0025", "MessageD0019", "BufferD0019", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0021", "", "IntfCICSA0025", false, "", false, "", false, "", false, "ConnEMSC0025", false, "0", "0", "0", "ConversionI0025", false, "ConversionO0025", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecDisableOnErrorNumSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecDisableOnErrorNumSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecDisableOnErrorNumSpinner.clear().sendKeys("3333");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3333').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecDisableOnErrorNumSpinner.clear().sendKeys("44444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecDisableOnErrorNumSpinner.clear().sendKeys("99999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecDisableOnErrorNumSpinner.clear().sendKeys("111111");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '11111').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Disable on Error (%)'
    //
    it('Test Recipe -> Disable on Error (%)', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delRecYes("RecipeCE0022").then(function () {
            Page.delCvrYes("ConversionI0026");
        }).then(function () {
            Page.delCvrYes("ConversionO0026");
        }).then(function () {
            Page.delMsgYes("MessageD0020");
        }).then(function () {
            Page.delBufYes("BufferD0020");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0026");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0020");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0026", "", false, false, "EndpointEMSE0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0026");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0020");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0026", "", undefined, "", "EndpointCICSC0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0020", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0020", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0026", "MessageD0020", "BufferD0020", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0026", "MessageD0020", "BufferD0020", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0022", "", "IntfCICSA0026", false, "", false, "", false, "", false, "ConnEMSC0026", false, "0", "0", "0", "ConversionI0026", false, "ConversionO0026", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecDisableOnErrorPercentSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecDisableOnErrorPercentSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecDisableOnErrorPercentSpinner.clear().sendKeys("99");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecDisableOnErrorPercentSpinner.clear().sendKeys("100");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecDisableOnErrorPercentSpinner.clear().sendKeys("101");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecDisableOnErrorPercentSpinner.clear().sendKeys("999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Trace Level'
    //
    it('Test Recipe -> Trace Level', function () {
        var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
        Page.delRecYes("RecipeCE0023").then(function () {
            Page.delCvrYes("ConversionI0027");
        }).then(function () {
            Page.delCvrYes("ConversionO0027");
        }).then(function () {
            Page.delMsgYes("MessageD0021");
        }).then(function () {
            Page.delBufYes("BufferD0021");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0027");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0021");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0027", "", false, false, "EndpointEMSE0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0027");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0021");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0027", "", undefined, "", "EndpointCICSC0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0021", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0021", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0027", "MessageD0021", "BufferD0021", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0027", "MessageD0021", "BufferD0021", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0023", "", "IntfCICSA0027", false, "", false, "", false, "", false, "ConnEMSC0027", false, "0", "0", "0", "ConversionI0027", false, "ConversionO0027", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecTrclvlSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecTrclvlSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecTrclvlSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecTrclvlSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecTrclvlSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecTrclvlSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecTrclvlSpinner.clear().sendKeys("9");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecTrclvlSpinner.clear().sendKeys("11");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Input Conversion'
    //
    it('Test Recipe -> Input Conversion', function () {
        Page.delRecYes("RecipeCE0024").then(function () {
            Page.delCvrYes("ConversionI0028_@#$_3333333333444444444");
        }).then(function () {
            Page.delCvrYes("ConversionO0028");
        }).then(function () {
            Page.delMsgYes("MessageD0022");
        }).then(function () {
            Page.delBufYes("BufferD0022");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0028");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0022");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0028", "", false, false, "EndpointEMSE0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0028");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0022");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0028", "", undefined, "", "EndpointCICSC0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0022", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0022", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0028_@#$_3333333333444444444", "MessageD0022", "BufferD0022", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0028", "MessageD0022", "BufferD0022", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0024", "", "IntfCICSA0028", true, "", false, "", false, "", false, "ConnEMSC0028", true, "0", "0", "0", "INVALID", false, "ConversionO0028", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecInputConversionValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecInputConversionInput.clear().sendKeys("ConversionI0028_@#$_3333333333444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecInputConversionInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConversionI0028_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Output Conversion'
    //
    it('Test Recipe -> Output Conversion', function () {
        Page.delRecYes("RecipeCE0025").then(function () {
            Page.delCvrYes("ConversionI0029");
        }).then(function () {
            Page.delCvrYes("ConversionO0029_@#$_3333333333444444444");
        }).then(function () {
            Page.delMsgYes("MessageD0023");
        }).then(function () {
            Page.delBufYes("BufferD0023");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0029");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0023");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0029", "", false, false, "EndpointEMSE0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0029");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0023");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0029", "", undefined, "", "EndpointCICSC0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0023", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0023", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0029", "MessageD0023", "BufferD0023", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0029_@#$_3333333333444444444", "MessageD0023", "BufferD0023", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0025", "", "IntfCICSA0029", true, "", false, "", false, "", false, "ConnEMSC0029", true, "0", "0", "0", "ConversionI0029", true, "invalid", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
            // }).then(function () {
            //     Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecOutputConversionInput.clear().sendKeys("ConversionI0029");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConversionI0029').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecOutputConversionInput.clear().sendKeys("ConversionO0029_@#$_3333333333444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConversionO0029_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Resource Name'
    //
    it('Test Recipe -> Resource Name', function () {
        Page.delRecYes("RecipeCE0026").then(function () {
            Page.delCvrYes("ConversionI0030");
        }).then(function () {
            Page.delCvrYes("ConversionO0030");
        }).then(function () {
            Page.delMsgYes("MessageD0024");
        }).then(function () {
            Page.delBufYes("BufferD0024");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0030");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0024");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0030", "", false, false, "EndpointEMSE0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0030");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0024");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0030", "", undefined, "", "EndpointCICSC0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0024", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0024", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0030", "MessageD0024", "BufferD0024", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0030", "MessageD0024", "BufferD0024", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0026", "", "IntfCICSA0030", false, "", false, "", false, "", false, "ConnEMSC0030", false, "0", "0", "0", "ConversionI0030", false, "ConversionO0030", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getText();
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getText();
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecResourceNameInput.clear().sendKeys("@#$AB123");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '@#$AB123').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '@#$AB123').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecResourceNameInput.clear().sendKeys("#@$123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#@$123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#@$123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecResourceNameInput.clear().sendKeys("$#@123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '$#@123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '$#@123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecResourceNameInput.clear().sendKeys("AB120@#$");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AB120@#$').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AB120@#$').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecResourceNameInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecResourceNameInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource1ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecResourceNameInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource1ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecResourceNameInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource1ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecResourceNameInput.clear().sendKeys("A");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecResourceNameInput.clear().sendKeys("A2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecResourceNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'SS-Id Filter'
    //
    it('Test Recipe -> SS-Id Filter', function () {
        Page.delRecYes("RecipeCE0027").then(function () {
            Page.delCvrYes("ConversionI0031");
        }).then(function () {
            Page.delCvrYes("ConversionO0031");
        }).then(function () {
            Page.delMsgYes("MessageD0025");
        }).then(function () {
            Page.delBufYes("BufferD0025");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0031");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0025");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0031", "", false, false, "EndpointEMSE0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0031");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0025");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0031", "", undefined, "", "EndpointCICSC0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0025", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0025", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0031", "MessageD0025", "BufferD0025", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0031", "MessageD0025", "BufferD0025", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0027", "", "IntfCICSA0031", false, "", false, "", false, "", false, "ConnEMSC0031", false, "0", "0", "0", "ConversionI0031", false, "ConversionO0031", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecSsidFilterCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecSsidFilterCheck);
        }).then(function () {
            Page.eleRecSsidFilterCheck.click();
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
            return Page.eleRecSsidFilterCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Method of Reply'
    //
    it('Test Recipe -> Method of Reply', function () {
        Page.delRecYes("RecipeCE0028").then(function () {
            Page.delRecYes("RecipeCE0029");
        }).then(function () {
            Page.delRecYes("RecipeCE0030");
        }).then(function () {
            Page.delRecYes("RecipeCE0031");
        }).then(function () {
            Page.delCvrYes("ConversionI0032");
        }).then(function () {
            Page.delCvrYes("ConversionO0032");
        }).then(function () {
            Page.delMsgYes("MessageD0026");
        }).then(function () {
            Page.delBufYes("BufferD0026");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0032");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0026");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0032", "", false, false, "EndpointEMSE0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0032");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0026");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0032", "", undefined, "", "EndpointCICSC0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0026", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0026", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0032", "MessageD0026", "BufferD0026", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0032", "MessageD0026", "BufferD0026", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0028", "", "IntfCICSA0032", false, "", false, "", false, "", false, "ConnEMSC0032", false, "0", "0", "0", "ConversionI0032", false, "ConversionO0032", false, undefined, undefined, "Message");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecMethodReplyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecMethodReplyDropdown);
        }).then(function () {
            Page.eleRecMethodReplyDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecMethodReply01);
        }).then(function () {
            return Page.eleRecMethodReply01.getText();
        }).then(function (message) {
            expect(message === 'None').to.be.true;
        }).then(function () {
            return Page.eleRecMethodReply02.getText();
        }).then(function (message) {
            expect(message === 'Status').to.be.true;
        }).then(function () {
            return Page.eleRecMethodReply03.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleRecMethodReply04.getText();
        }).then(function (message) {
            expect(message === 'Status and Message').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0029", "", "IntfCICSA0032", false, "", false, "", false, "", false, "ConnEMSC0032", false, "0", "0", "0", "ConversionI0032", false, "ConversionO0032", false, undefined, undefined, "None");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecMethodReplyDropdown.getText();
        }).then(function (message) {
            expect(message === 'None').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0030", "", "IntfCICSA0032", false, "", false, "", false, "", false, "ConnEMSC0032", false, "0", "0", "0", "ConversionI0032", false, "ConversionO0032", false, undefined, undefined, "Status");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecMethodReplyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Status').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0031", "", "IntfCICSA0032", false, "", false, "", false, "", false, "ConnEMSC0032", false, "0", "0", "0", "ConversionI0032", false, "ConversionO0032", false, undefined, undefined, "Status and Message");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecMethodReplyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Status and Message').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'CICS Details' -> 'Method of Invocation'
    //
    it('Test Recipe -> CICS Details -> Method of Invocation', function () {
        Page.delRecYes("RecipeCE0032").then(function () {
            Page.delRecYes("RecipeCE0033");
        }).then(function () {
            Page.delRecYes("RecipeCE0034");
        }).then(function () {
            Page.delRecYes("RecipeCE0035");
        }).then(function () {
            Page.delRecYes("RecipeCE0036");
        }).then(function () {
            Page.delRecYes("RecipeCE0037");
        }).then(function () {
            Page.delRecYes("RecipeCE0038");
        }).then(function () {
            Page.delRecYes("RecipeCE0039");
        }).then(function () {
            Page.delRecYes("RecipeCE0040");
        }).then(function () {
            Page.delCvrYes("ConversionI0033");
        }).then(function () {
            Page.delCvrYes("ConversionO0033");
        }).then(function () {
            Page.delMsgYes("MessageD0027");
        }).then(function () {
            Page.delBufYes("BufferD0027");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0033");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0027");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0033", "", false, false, "EndpointEMSE0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0033");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0027");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0033", "", undefined, "", "EndpointCICSC0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0027", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0027", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0033", "MessageD0027", "BufferD0027", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0033", "MessageD0027", "BufferD0027", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0032", "", "IntfCICSA0033", false, "", false, "", false, "", false, "ConnEMSC0033", false, "0", "0", "0", "ConversionI0033", false, "ConversionO0033", false, undefined, undefined, undefined, "DPL");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'DPL').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecCicsMethodInvocationDropdown);
        }).then(function () {
            Page.eleRecCicsMethodInvocationDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecCicsMethodInvocation01);
        }).then(function () {
            return Page.eleRecCicsMethodInvocation01.getText();
        }).then(function (message) {
            expect(message === 'DPL').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocation02.getText();
        }).then(function (message) {
            expect(message === 'PGM').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocation03.getText();
        }).then(function (message) {
            expect(message === 'Start Task').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocation04.getText();
        }).then(function (message) {
            expect(message === 'TDQ Write').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocation05.getText();
        }).then(function (message) {
            expect(message === 'TSQ Write').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocation06.getText();
        }).then(function (message) {
            expect(message === 'DPL MRO').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocation07.getText();
        }).then(function (message) {
            expect(message === 'Container').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocation08.getText();
        }).then(function (message) {
            expect(message === 'Storage').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocation09.getText();
        }).then(function (message) {
            expect(message === 'DPL TSQ').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0033", "", "IntfCICSA0033", false, "", false, "", false, "", false, "ConnEMSC0033", false, "0", "0", "0", "ConversionI0033", false, "ConversionO0033", false, undefined, undefined, undefined, "PGM");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'PGM').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0034", "", "IntfCICSA0033", false, "", false, "", false, "", false, "ConnEMSC0033", false, "0", "0", "0", "ConversionI0033", false, "ConversionO0033", false, undefined, undefined, undefined, "Start Task");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Start Task').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0035", "", "IntfCICSA0033", false, "", false, "", false, "", false, "ConnEMSC0033", false, "0", "0", "0", "ConversionI0033", false, "ConversionO0033", false, undefined, undefined, undefined, "TDQ Write");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'TDQ Write').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0036", "", "IntfCICSA0033", false, "", false, "", false, "", false, "ConnEMSC0033", false, "0", "0", "0", "ConversionI0033", false, "ConversionO0033", false, undefined, undefined, undefined, "TSQ Write");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'TSQ Write').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0037", "", "IntfCICSA0033", false, "", false, "", false, "", false, "ConnEMSC0033", false, "0", "0", "0", "ConversionI0033", false, "ConversionO0033", false, undefined, undefined, undefined, "DPL MRO");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'DPL MRO').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0038", "", "IntfCICSA0033", false, "", false, "", false, "", false, "ConnEMSC0033", false, "0", "0", "0", "ConversionI0033", false, "ConversionO0033", false, undefined, undefined, undefined, "Container");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Container').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0039", "", "IntfCICSA0033", false, "", false, "", false, "", false, "ConnEMSC0033", false, "0", "0", "0", "ConversionI0033", false, "ConversionO0033", false, undefined, undefined, undefined, "Storage");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Storage').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0040", "", "IntfCICSA0033", false, "", false, "", false, "", false, "ConnEMSC0033", false, "0", "0", "0", "ConversionI0033", false, "ConversionO0033", false, undefined, undefined, undefined, "DPL TSQ");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'DPL TSQ').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'CICS Details' -> 'Mirror Transaction ID'
    //
    it('Test Recipe -> CICS Details -> Mirror Transaction ID', function () {
        Page.delRecYes("RecipeCE0041").then(function () {
            Page.delCvrYes("ConversionI0034");
        }).then(function () {
            Page.delCvrYes("ConversionO0034");
        }).then(function () {
            Page.delMsgYes("MessageD0028");
        }).then(function () {
            Page.delBufYes("BufferD0028");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0034");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0028");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0028");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0034", "", false, false, "EndpointEMSE0028");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0034");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0028");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0028");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0034", "", undefined, "", "EndpointCICSC0028");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0028", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0028", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0034", "MessageD0028", "BufferD0028", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0034", "MessageD0028", "BufferD0028", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0041", "", "IntfCICSA0034", false, "", false, "", false, "", false, "ConnEMSC0034", false, "0", "0", "0", "ConversionI0034", false, "ConversionO0034", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMirrorTranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMirrorTranIdInput.clear().sendKeys("@#$&");
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
            return Page.eleRecCicsMirrorTranIdValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMirrorTranIdInput.clear().sendKeys("@Aa2");
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
            return Page.eleRecCicsMirrorTranIdValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMirrorTranIdInput.clear().sendKeys("a");
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
            return Page.eleRecCicsMirrorTranIdValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMirrorTranIdInput.clear().sendKeys("#");
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
            return Page.eleRecCicsMirrorTranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMirrorTranIdInput.clear().sendKeys("A");
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
            return Page.eleRecCicsMirrorTranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMirrorTranIdInput.clear().sendKeys("2");
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
            return Page.eleRecCicsMirrorTranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMirrorTranIdInput.clear().sendKeys("#@A2");
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
            return Page.eleRecCicsMirrorTranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#@A2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMirrorTranIdInput.clear().sendKeys("A$#2");
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
            return Page.eleRecCicsMirrorTranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A$#2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMirrorTranIdInput.clear().sendKeys("2A$@5");
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
            return Page.eleRecCicsMirrorTranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '2A$@').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'CICS Details' -> 'CSMI User Transaction'
    //
    it('Test Recipe -> CICS Details -> CSMI User Transaction', function () {
        Page.delRecYes("RecipeCE0042").then(function () {
            Page.delCvrYes("ConversionI0035");
        }).then(function () {
            Page.delCvrYes("ConversionO0035");
        }).then(function () {
            Page.delMsgYes("MessageD0029");
        }).then(function () {
            Page.delBufYes("BufferD0029");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0035");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0029");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0029");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0035", "", false, false, "EndpointEMSE0029");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0035");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0029");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0029");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0035", "", undefined, "", "EndpointCICSC0029");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0029", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0029", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0035", "MessageD0029", "BufferD0029", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0035", "MessageD0029", "BufferD0029", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0042", "", "IntfCICSA0035", false, "", false, "", false, "", false, "ConnEMSC0035", false, "0", "0", "0", "ConversionI0035", false, "ConversionO0035", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecCicsCsmiUserTranCheck);
        }).then(function () {
            Page.eleRecCicsCsmiUserTranCheck.click();
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
            return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'CICS Details' -> 'Remote Region Execution Transaction ID'
    //
    it('Test Recipe -> CICS Details -> Remote Region Execution Transaction ID', function () {
        Page.delRecYes("RecipeCE0043").then(function () {
            Page.delCvrYes("ConversionI0036");
        }).then(function () {
            Page.delCvrYes("ConversionO0036");
        }).then(function () {
            Page.delMsgYes("MessageD0030");
        }).then(function () {
            Page.delBufYes("BufferD0030");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0036");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0030");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0030");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0036", "", false, false, "EndpointEMSE0030");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0036");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0030");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0030");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0036", "", undefined, "", "EndpointCICSC0030");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0030", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0030", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0036", "MessageD0030", "BufferD0030", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0036", "MessageD0030", "BufferD0030", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0043", "", "IntfCICSA0036", false, "", false, "", false, "", false, "ConnEMSC0036", false, "0", "0", "0", "ConversionI0036", false, "ConversionO0036", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRETranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRETranIdInput.clear().sendKeys("@#$&");
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
            return Page.eleRecCicsRRETranIdValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRETranIdInput.clear().sendKeys("@Aa2");
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
            return Page.eleRecCicsRRETranIdValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRETranIdInput.clear().sendKeys("a");
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
            return Page.eleRecCicsRRETranIdValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRETranIdInput.clear().sendKeys("#");
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
            return Page.eleRecCicsRRETranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRETranIdInput.clear().sendKeys("A");
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
            return Page.eleRecCicsRRETranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRETranIdInput.clear().sendKeys("2");
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
            return Page.eleRecCicsRRETranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRETranIdInput.clear().sendKeys("#@A2");
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
            return Page.eleRecCicsRRETranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#@A2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRETranIdInput.clear().sendKeys("A$#2");
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
            return Page.eleRecCicsRRETranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A$#2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRETranIdInput.clear().sendKeys("2A$@5");
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
            return Page.eleRecCicsRRETranIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '2A$@').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'CICS Details' -> 'Remote Region Execution System Name'
    //
    it('Test Recipe -> CICS Details -> Remote Region Execution System Name', function () {
        Page.delRecYes("RecipeCE0044").then(function () {
            Page.delCvrYes("ConversionI0037");
        }).then(function () {
            Page.delCvrYes("ConversionO0037");
        }).then(function () {
            Page.delMsgYes("MessageD0031");
        }).then(function () {
            Page.delBufYes("BufferD0031");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0037");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0031");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0031");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0037", "", false, false, "EndpointEMSE0031");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0037");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0031");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0031");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0037", "", undefined, "", "EndpointCICSC0031");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0031", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0031", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0037", "MessageD0031", "BufferD0031", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0037", "MessageD0031", "BufferD0031", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0044", "", "IntfCICSA0037", false, "", false, "", false, "", false, "ConnEMSC0037", false, "0", "0", "0", "ConversionI0037", false, "ConversionO0037", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsRRESysNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRESysNameInput.clear().sendKeys("@#$&");
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
            return Page.eleRecCicsRRESysNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRESysNameInput.clear().sendKeys("@Aa2");
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
            return Page.eleRecCicsRRESysNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRESysNameInput.clear().sendKeys("a");
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
            return Page.eleRecCicsRRESysNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRESysNameInput.clear().sendKeys("#");
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
            return Page.eleRecCicsRRESysNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRESysNameInput.clear().sendKeys("A");
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
            return Page.eleRecCicsRRESysNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRESysNameInput.clear().sendKeys("2");
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
            return Page.eleRecCicsRRESysNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRESysNameInput.clear().sendKeys("#@A2");
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
            return Page.eleRecCicsRRESysNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#@A2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRESysNameInput.clear().sendKeys("A$#2");
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
            return Page.eleRecCicsRRESysNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A$#2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsRRESysNameInput.clear().sendKeys("2A$@5");
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
            return Page.eleRecCicsRRESysNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '2A$@').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'CICS Details' -> 'Container Extended Options Channel Name'
    //
    it('Test Recipe -> CICS Details -> Container Extended Options Channel Name', function () {
        Page.delRecYes("RecipeCE0045").then(function () {
            Page.delCvrYes("ConversionI0038");
        }).then(function () {
            Page.delCvrYes("ConversionO0038");
        }).then(function () {
            Page.delMsgYes("MessageD0032");
        }).then(function () {
            Page.delBufYes("BufferD0032");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0038");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0032");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0032");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0038", "", false, false, "EndpointEMSE0032");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0038");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0032");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0032");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0038", "", undefined, "", "EndpointCICSC0032");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0032", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0032", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0038", "MessageD0032", "BufferD0032", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0038", "MessageD0032", "BufferD0032", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0045", "", "IntfCICSA0038", false, "", false, "", false, "", false, "ConnEMSC0038", false, "0", "0", "0", "ConversionI0038", false, "ConversionO0038", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnChannelNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnChannelNameInput.clear().sendKeys("123@#$AB");
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
            return Page.eleRecCicsCtnChannelNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnChannelNameInput.clear().sendKeys("aBCDE");
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
            return Page.eleRecCicsCtnChannelNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnChannelNameInput.clear().sendKeys("AbCDE");
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
            return Page.eleRecCicsCtnChannelNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnChannelNameInput.clear().sendKeys("ABCDe");
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
            return Page.eleRecCicsCtnChannelNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnChannelNameInput.clear().sendKeys("@#$AB12390123456");
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
            return Page.eleRecCicsCtnChannelNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '@#$AB12390123456').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnChannelNameInput.clear().sendKeys("#@$123ABCDEFGHIJ");
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
            return Page.eleRecCicsCtnChannelNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#@$123ABCDEFGHIJ').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnChannelNameInput.clear().sendKeys("$#@123ABCDEFG@#$");
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
            return Page.eleRecCicsCtnChannelNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '$#@123ABCDEFG@#$').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnChannelNameInput.clear().sendKeys("A23456@#$01234567");
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
            return Page.eleRecCicsCtnChannelNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A23456@#$0123456').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'CICS Details' -> 'Container Extended Options Container Name'
    //
    it('Test Recipe -> CICS Details -> Container Extended Options Container Name', function () {
        Page.delRecYes("RecipeCE0046").then(function () {
            Page.delCvrYes("ConversionI0039");
        }).then(function () {
            Page.delCvrYes("ConversionO0039");
        }).then(function () {
            Page.delMsgYes("MessageD0033");
        }).then(function () {
            Page.delBufYes("BufferD0033");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0039");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0033");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0033");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0039", "", false, false, "EndpointEMSE0033");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0039");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0033");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0033");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0039", "", undefined, "", "EndpointCICSC0033");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0033", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0033", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0039", "MessageD0033", "BufferD0033", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0039", "MessageD0033", "BufferD0033", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0046", "", "IntfCICSA0039", false, "", false, "", false, "", false, "ConnEMSC0039", false, "0", "0", "0", "ConversionI0039", false, "ConversionO0039", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnContainerNameInput.clear().sendKeys("123@#$AB");
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
            return Page.eleRecCicsCtnContainerNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnContainerNameInput.clear().sendKeys("aBCDE");
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
            return Page.eleRecCicsCtnContainerNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnContainerNameInput.clear().sendKeys("AbCDE");
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
            return Page.eleRecCicsCtnContainerNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnContainerNameInput.clear().sendKeys("ABCDe");
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
            return Page.eleRecCicsCtnContainerNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnContainerNameInput.clear().sendKeys("@#$AB12390123456");
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
            return Page.eleRecCicsCtnContainerNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '@#$AB12390123456').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnContainerNameInput.clear().sendKeys("#@$123ABCDEFGHIJ");
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
            return Page.eleRecCicsCtnContainerNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#@$123ABCDEFGHIJ').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnContainerNameInput.clear().sendKeys("$#@123ABCDEFG@#$");
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
            return Page.eleRecCicsCtnContainerNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '$#@123ABCDEFG@#$').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsCtnContainerNameInput.clear().sendKeys("A23456@#$01234567");
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
            return Page.eleRecCicsCtnContainerNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A23456@#$0123456').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'CICS Details' -> 'Container Extended Options Container Invocation & Creation'
    //
    it('Test Recipe -> CICS Details -> Container Extended Options Container Invocation & Creation', function () {
        Page.delRecYes("RecipeCE0047").then(function () {
            Page.delRecYes("RecipeCE0048");
        }).then(function () {
            Page.delRecYes("RecipeCE0049");
        }).then(function () {
            Page.delRecYes("RecipeCE0050");
        }).then(function () {
            Page.delCvrYes("ConversionI0040");
        }).then(function () {
            Page.delCvrYes("ConversionO0040");
        }).then(function () {
            Page.delMsgYes("MessageD0034");
        }).then(function () {
            Page.delBufYes("BufferD0034");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0040");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0034");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0034");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0040", "", false, false, "EndpointEMSE0034");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0040");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0034");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0034");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0040", "", undefined, "", "EndpointCICSC0034");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0034", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0034", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0040", "MessageD0034", "BufferD0034", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0040", "MessageD0034", "BufferD0034", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0047", "", "IntfCICSA0040", false, "", false, "", false, "", false, "ConnEMSC0040", false, "0", "0", "0", "ConversionI0040", false, "ConversionO0040", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Program", "Single");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Program').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerCreationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Single').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecCicsCtnContainerInvocationDropdown);
        }).then(function () {
            Page.eleRecCicsCtnContainerInvocationDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecCicsCtnContainerInvocation01);
        }).then(function () {
            return Page.eleRecCicsCtnContainerInvocation01.getText();
        }).then(function (message) {
            expect(message === 'Program').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerInvocation02.getText();
        }).then(function (message) {
            expect(message === 'Transaction').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecCicsCtnContainerCreationDropdown);
        }).then(function () {
            Page.eleRecCicsCtnContainerCreationDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecCicsCtnContainerCreation01);
        }).then(function () {
            return Page.eleRecCicsCtnContainerCreation01.getText();
        }).then(function (message) {
            expect(message === 'Single').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerCreation02.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0048", "", "IntfCICSA0040", false, "", false, "", false, "", false, "ConnEMSC0040", false, "0", "0", "0", "ConversionI0040", false, "ConversionO0040", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Program", "Message");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Program').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerCreationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0049", "", "IntfCICSA0040", false, "", false, "", false, "", false, "ConnEMSC0040", false, "0", "0", "0", "ConversionI0040", false, "ConversionO0040", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Transaction", "Single");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Transaction').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerCreationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Single').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0050", "", "IntfCICSA0040", false, "", false, "", false, "", false, "ConnEMSC0040", false, "0", "0", "0", "ConversionI0040", false, "ConversionO0040", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Transaction", "Message");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Transaction').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnContainerCreationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'CICS Details' -> 'Container Extended Options Forward Destination as Container'
    //
    it('Test Recipe -> CICS Details -> Container Extended Options Forward Destination as Container', function () {
        Page.delRecYes("RecipeCE0051").then(function () {
            Page.delCvrYes("ConversionI0041");
        }).then(function () {
            Page.delCvrYes("ConversionO0041");
        }).then(function () {
            Page.delMsgYes("MessageD0035");
        }).then(function () {
            Page.delBufYes("BufferD0035");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0041");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0035");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0035");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0041", "", false, false, "EndpointEMSE0035");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0041");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0035");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0035");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0041", "", undefined, "", "EndpointCICSC0035");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0035", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0035", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0041", "MessageD0035", "BufferD0035", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0041", "MessageD0035", "BufferD0035", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0051", "", "IntfCICSA0041", false, "", false, "", false, "", false, "ConnEMSC0041", false, "0", "0", "0", "ConversionI0041", false, "ConversionO0041", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecCicsCtnForwardDestAsCtnCheck);
        }).then(function () {
            Page.eleRecCicsCtnForwardDestAsCtnCheck.click();
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
            return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'CICS Details' -> 'Multi-Execution Resource'
    //
    it('Test Recipe -> CICS Details -> Multi-Execution Resource', function () {
        Page.delRecYes("RecipeCE0052").then(function () {
            Page.delRecYes("RecipeCE0053");
        }).then(function () {
            Page.delRecYes("RecipeCE0054");
        }).then(function () {
            Page.delCvrYes("ConversionI0042");
        }).then(function () {
            Page.delCvrYes("ConversionO0042");
        }).then(function () {
            Page.delMsgYes("MessageD0036");
        }).then(function () {
            Page.delBufYes("BufferD0036");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0042");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0036");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0036");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0042", "", false, false, "EndpointEMSE0036");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0042");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0036");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0036");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0042", "", undefined, "", "EndpointCICSC0036");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0036", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0036", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0042", "MessageD0036", "BufferD0036", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0042", "MessageD0036", "BufferD0036", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0052", "", "IntfCICSA0042", false, "", false, "", false, "", false, "ConnEMSC0042", false, "0", "0", "0", "ConversionI0042", false, "ConversionO0042", false, "", false, "Message");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "").to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecCicsMultiExecResourceAddButton);
        }).then(function () {
            Page.eleRecCicsMultiExecResourceAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === 'Please specify a non-empty Resource Name to set up Multi-Execution Resource').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecResourceNameInput);
        }).then(function () {
            Page.eleRecResourceNameInput.clear().sendKeys("PROGRAM1");
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
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "PROGRAM1").to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecCicsMultiExecResourceAddButton);
        }).then(function () {
            Page.eleRecCicsMultiExecResourceAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === 'Please select "None" for "Method of Reply" to set up Multi-Execution Resource').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecMethodReplyDropdown);
        }).then(function () {
            Page._methodOfReplyRec("None");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecCicsMultiExecResourceAddButton);
        }).then(function () {
            Page.eleRecCicsMultiExecResourceAddButton.click();
        }).then(function () {
            expect(Page.eleRecCicsMultiExecResource2Input.isPresent()).to.eventually.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecCicsMultiExecResourceAddButton);
        }).then(function () {
            Page.eleRecCicsMultiExecResourceAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecCicsMultiExecResourceValidateMsg);
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please fill in the last one.').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0053", "", "IntfCICSA0042", false, "", false, "", false, "", false, "ConnEMSC0042", false, "0", "0", "0", "ConversionI0042", false, "ConversionO0042", false, "PROGRAM1", false, "None", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'PROGRAM1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'PROGRAM2').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'PROGRAM3').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'PROGRAM4').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'PROGRAM5').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecCicsMultiExecResourceAddButton);
        }).then(function () {
            Page.eleRecCicsMultiExecResourceAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === 'Max number of resources is 5').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleWarningClose);
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecCicsMultiExecResource4RemoveButton);
        }).then(function () {
            Page.eleRecCicsMultiExecResource4RemoveButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecCicsMultiExecResource2RemoveButton);
        }).then(function () {
            Page.eleRecCicsMultiExecResource2RemoveButton.click();
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
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'PROGRAM1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'PROGRAM3').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'PROGRAM5').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0054", "", "IntfCICSA0042", false, "", false, "", false, "", false, "ConnEMSC0042", false, "0", "0", "0", "ConversionI0042", false, "ConversionO0042", false, "PROGRAM1", false, "None", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "@#$123AB", "@#$123AB", "@#$123AB", "@#$123AB");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'PROGRAM1').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResourceInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '@#$123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '@#$123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '@#$123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '@#$123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMultiExecResource2Input.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleRecCicsMultiExecResource3Input.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleRecCicsMultiExecResource4Input.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleRecCicsMultiExecResource5Input.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecCicsMultiExecResource2ValidateMsg);
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleRecCicsMultiExecResource2Input.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleRecCicsMultiExecResource3Input.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleRecCicsMultiExecResource4Input.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleRecCicsMultiExecResource5Input.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecCicsMultiExecResource2ValidateMsg);
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleRecCicsMultiExecResource2Input.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleRecCicsMultiExecResource3Input.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleRecCicsMultiExecResource4Input.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleRecCicsMultiExecResource5Input.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecCicsMultiExecResource2ValidateMsg);
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleRecCicsMultiExecResource2Input.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleRecCicsMultiExecResource3Input.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleRecCicsMultiExecResource4Input.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleRecCicsMultiExecResource5Input.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecCicsMultiExecResource2ValidateMsg);
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5ValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleRecCicsMultiExecResource2Input.clear().sendKeys("$#@123AB");
        }).then(function () {
            Page.eleRecCicsMultiExecResource3Input.clear().sendKeys("$#@123AB");
        }).then(function () {
            Page.eleRecCicsMultiExecResource4Input.clear().sendKeys("$#@123AB");
        }).then(function () {
            Page.eleRecCicsMultiExecResource5Input.clear().sendKeys("$#@123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '$#@123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '$#@123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '$#@123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '$#@123AB').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMultiExecResource2Input.clear().sendKeys("#$@123AB");
        }).then(function () {
            Page.eleRecCicsMultiExecResource3Input.clear().sendKeys("#$@123AB");
        }).then(function () {
            Page.eleRecCicsMultiExecResource4Input.clear().sendKeys("#$@123AB");
        }).then(function () {
            Page.eleRecCicsMultiExecResource5Input.clear().sendKeys("#$@123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '#$@123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '#$@123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '#$@123AB').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '#$@123AB').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMultiExecResource2Input.clear().sendKeys("AB120@#$");
        }).then(function () {
            Page.eleRecCicsMultiExecResource3Input.clear().sendKeys("AB120@#$");
        }).then(function () {
            Page.eleRecCicsMultiExecResource4Input.clear().sendKeys("AB120@#$");
        }).then(function () {
            Page.eleRecCicsMultiExecResource5Input.clear().sendKeys("AB120@#$");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AB120@#$').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AB120@#$').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AB120@#$').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AB120@#$').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMultiExecResource2Input.clear().sendKeys("A");
        }).then(function () {
            Page.eleRecCicsMultiExecResource3Input.clear().sendKeys("B");
        }).then(function () {
            Page.eleRecCicsMultiExecResource4Input.clear().sendKeys("C");
        }).then(function () {
            Page.eleRecCicsMultiExecResource5Input.clear().sendKeys("D");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'B').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'C').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'D').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecCicsMultiExecResource2Input.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleRecCicsMultiExecResource3Input.clear().sendKeys("B23456789");
        }).then(function () {
            Page.eleRecCicsMultiExecResource4Input.clear().sendKeys("C23456789");
        }).then(function () {
            Page.eleRecCicsMultiExecResource5Input.clear().sendKeys("D23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'B2345678').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource4Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'C2345678').to.be.true;
        }).then(function () {
            return Page.eleRecCicsMultiExecResource5Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'D2345678').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Listen-to Destination, Response Destination, Error Message Destination'
    //
    it('Test Recipe -> EMS Details -> Listen-to Destination, Response Destination, Error Message Destination', function () {
        Page.delRecYes("RecipeCE0055").then(function () {
            Page.delCvrYes("ConversionI0043");
        }).then(function () {
            Page.delCvrYes("ConversionO0043");
        }).then(function () {
            Page.delMsgYes("MessageD0037");
        }).then(function () {
            Page.delBufYes("BufferD0037");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0043");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0037");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0037");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0043", "", false, false, "EndpointEMSE0037");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0043");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0037");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0037");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0043", "", undefined, "", "EndpointCICSC0037");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0037", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0037", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0043", "MessageD0037", "BufferD0037", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0043", "MessageD0037", "BufferD0037", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0055", "", "IntfCICSA0043", false, "", false, "", false, "", false, "ConnEMSC0043", false, "0", "0", "0", "ConversionI0043", false, "ConversionO0043", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.recipe.listenToDest").to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "").to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsListentoDestInput.clear().sendKeys("tibss.rec.listenToDest._3D!@2c#$1B%&0a*?-5555555556666666666777");
        }).then(function () {
            Page.eleRecEmsResponseDestInput.clear().sendKeys("tibss.rec.responseDest._3D!@2c#$1B%&0a*?-5555555556666666666777");
        }).then(function () {
            Page.eleRecEmsErrorMsgDestInput.clear().sendKeys("tibss.rec.errorMsgDest._3D!@2c#$1B%&0a*?-5555555556666666666777");
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
            return Page.eleRecEmsListentoDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.rec.listenToDest._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.rec.responseDest._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.rec.errorMsgDest._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsListentoDestInput.clear().sendKeys("tibss.rec.listenToDest._3D!@2c#$1B%&0a*?-55555555566666666667777");
        }).then(function () {
            Page.eleRecEmsResponseDestInput.clear().sendKeys("tibss.rec.responseDest._3D!@2c#$1B%&0a*?-55555555566666666667777");
        }).then(function () {
            Page.eleRecEmsErrorMsgDestInput.clear().sendKeys("tibss.rec.errorMsgDest._3D!@2c#$1B%&0a*?-55555555566666666667777");
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
            return Page.eleRecEmsListentoDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.rec.listenToDest._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.rec.responseDest._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.rec.errorMsgDest._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Type of Listen-to Destination, Response Destination, Error Message Destination'
    //
    it('Test Recipe -> EMS Details -> Type of Listen-to Destination, Response Destination, Error Message Destination', function () {
        Page.delRecYes("RecipeCE0056").then(function () {
            Page.delRecYes("RecipeCE0057");
        }).then(function () {
            Page.delRecYes("RecipeCE0058");
        }).then(function () {
            Page.delRecYes("RecipeCE0059");
        }).then(function () {
            Page.delRecYes("RecipeCE0060");
        }).then(function () {
            Page.delRecYes("RecipeCE0061");
        }).then(function () {
            Page.delRecYes("RecipeCE0062");
        }).then(function () {
            Page.delRecYes("RecipeCE0063");
        }).then(function () {
            Page.delCvrYes("ConversionI0044");
        }).then(function () {
            Page.delCvrYes("ConversionO0044");
        }).then(function () {
            Page.delMsgYes("MessageD0038");
        }).then(function () {
            Page.delBufYes("BufferD0038");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0044");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0038");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0038");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0044", "", false, false, "EndpointEMSE0038");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0044");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0038");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0038");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0044", "", undefined, "", "EndpointCICSC0038");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0038", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0038", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0044", "MessageD0038", "BufferD0038", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0044", "MessageD0038", "BufferD0038", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0056", "", "IntfCICSA0044", false, "", false, "", false, "", false, "ConnEMSC0044", false, "0", "0", "0", "ConversionI0044", false, "ConversionO0044", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "QUEUE", "tibss.rec.responseDest", "QUEUE", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "QUEUE");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "QUEUE").to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "QUEUE").to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "QUEUE").to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0057", "", "IntfCICSA0044", false, "", false, "", false, "", false, "ConnEMSC0044", false, "0", "0", "0", "ConversionI0044", false, "ConversionO0044", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "TOPIC", "tibss.rec.responseDest", "TOPIC", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "TOPIC");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "TOPIC").to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "TOPIC").to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "TOPIC").to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0058", "", "IntfCICSA0044", false, "", false, "", false, "", false, "ConnEMSC0044", false, "0", "0", "0", "ConversionI0044", false, "ConversionO0044", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "QUEUE", "tibss.rec.responseDest", "QUEUE", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "TOPIC");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "QUEUE").to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "QUEUE").to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "TOPIC").to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0059", "", "IntfCICSA0044", false, "", false, "", false, "", false, "ConnEMSC0044", false, "0", "0", "0", "ConversionI0044", false, "ConversionO0044", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "QUEUE", "tibss.rec.responseDest", "TOPIC", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "QUEUE");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "QUEUE").to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "TOPIC").to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "QUEUE").to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0060", "", "IntfCICSA0044", false, "", false, "", false, "", false, "ConnEMSC0044", false, "0", "0", "0", "ConversionI0044", false, "ConversionO0044", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "TOPIC", "tibss.rec.responseDest", "QUEUE", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "QUEUE");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "TOPIC").to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "QUEUE").to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "QUEUE").to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0061", "", "IntfCICSA0044", false, "", false, "", false, "", false, "ConnEMSC0044", false, "0", "0", "0", "ConversionI0044", false, "ConversionO0044", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "QUEUE", "tibss.rec.responseDest", "TOPIC", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "TOPIC");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "QUEUE").to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "TOPIC").to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "TOPIC").to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0062", "", "IntfCICSA0044", false, "", false, "", false, "", false, "ConnEMSC0044", false, "0", "0", "0", "ConversionI0044", false, "ConversionO0044", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "TOPIC", "tibss.rec.responseDest", "QUEUE", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "TOPIC");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "TOPIC").to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "QUEUE").to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "TOPIC").to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0063", "", "IntfCICSA0044", false, "", false, "", false, "", false, "ConnEMSC0044", false, "0", "0", "0", "ConversionI0044", false, "ConversionO0044", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "TOPIC", "tibss.rec.responseDest", "TOPIC", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "QUEUE");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "TOPIC").to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "TOPIC").to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === "QUEUE").to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Respond Always'
    //
    it('Test Recipe -> EMS Details -> Respond Always', function () {
        Page.delRecYes("RecipeCE0064").then(function () {
            Page.delCvrYes("ConversionI0045");
        }).then(function () {
            Page.delCvrYes("ConversionO0045");
        }).then(function () {
            Page.delMsgYes("MessageD0039");
        }).then(function () {
            Page.delBufYes("BufferD0039");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0045");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0039");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0039");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0045", "", false, false, "EndpointEMSE0039");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0045");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0039");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0039");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0045", "", undefined, "", "EndpointCICSC0039");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0039", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0039", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0045", "MessageD0039", "BufferD0039", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0045", "MessageD0039", "BufferD0039", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0064", "", "IntfCICSA0045", false, "", false, "", false, "", false, "ConnEMSC0045", false, "0", "0", "0", "ConversionI0045", false, "ConversionO0045", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsRespondAlwaysCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsRespondAlwaysCheck);
        }).then(function () {
            Page.eleRecEmsRespondAlwaysCheck.click();
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
            return Page.eleRecEmsRespondAlwaysCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Dynamic Destination Length'
    //
    it('Test Recipe -> EMS Details -> Dynamic Destination Length', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delRecYes("RecipeCE0065").then(function () {
            Page.delCvrYes("ConversionI0046");
        }).then(function () {
            Page.delCvrYes("ConversionO0046");
        }).then(function () {
            Page.delMsgYes("MessageD0040");
        }).then(function () {
            Page.delBufYes("BufferD0040");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0046");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0040");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0040");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0046", "", false, false, "EndpointEMSE0040");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0046");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0040");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0040");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0046", "", undefined, "", "EndpointCICSC0040");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0040", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0040", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0046", "MessageD0040", "BufferD0040", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0046", "MessageD0040", "BufferD0040", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0065", "", "IntfCICSA0046", false, "", false, "", false, "", false, "ConnEMSC0046", false, "0", "0", "0", "ConversionI0046", false, "ConversionO0046", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestLengthSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestLengthSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestLengthSpinner.clear().sendKeys("100");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestLengthSpinner.clear().sendKeys("127");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '127').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestLengthSpinner.clear().sendKeys("128");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '127').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestLengthSpinner.clear().sendKeys("999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '127').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Dynamic Destination Start'
    //
    it('Test Recipe -> EMS Details -> Dynamic Destination Start', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delRecYes("RecipeCE0066").then(function () {
            Page.delCvrYes("ConversionI0047");
        }).then(function () {
            Page.delCvrYes("ConversionO0047");
        }).then(function () {
            Page.delMsgYes("MessageD0041");
        }).then(function () {
            Page.delBufYes("BufferD0041");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0047");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0041");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0047", "", false, false, "EndpointEMSE0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0047");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0041");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0047", "", undefined, "", "EndpointCICSC0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0041", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0041", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0047", "MessageD0041", "BufferD0041", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0047", "MessageD0041", "BufferD0041", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0066", "", "IntfCICSA0047", false, "", false, "", false, "", false, "ConnEMSC0047", false, "0", "0", "0", "ConversionI0047", false, "ConversionO0047", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.clear().sendKeys("2222");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.clear().sendKeys("33333");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.clear().sendKeys("444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '444444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.clear().sendKeys("4095872");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095872').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.clear().sendKeys("4095873");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095873').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.clear().sendKeys("4095874");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095873').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsDynamicDestStartSpinner.clear().sendKeys("9999999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDynamicDestStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095873').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Usage Limit'
    //
    it('Test Recipe -> EMS Details -> Usage Limit', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delRecYes("RecipeCE0067").then(function () {
            Page.delCvrYes("ConversionI0048");
        }).then(function () {
            Page.delCvrYes("ConversionO0048");
        }).then(function () {
            Page.delMsgYes("MessageD0042");
        }).then(function () {
            Page.delBufYes("BufferD0042");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0048");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0042");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0042");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0048", "", false, false, "EndpointEMSE0042");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0048");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0042");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0042");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0048", "", undefined, "", "EndpointCICSC0042");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0042", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0042", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0048", "MessageD0042", "BufferD0042", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0048", "MessageD0042", "BufferD0042", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0067", "", "IntfCICSA0048", false, "", false, "", false, "", false, "ConnEMSC0048", false, "0", "0", "0", "ConversionI0048", false, "ConversionO0048", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsUsageLimitSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsUsageLimitSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsUsageLimitSpinner.clear().sendKeys("333");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsUsageLimitSpinner.clear().sendKeys("998");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '998').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsUsageLimitSpinner.clear().sendKeys("999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsUsageLimitSpinner.clear().sendKeys("1000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'SMSL Mode, Delivery Mode'
    //
    it('Test Recipe -> EMS Details -> SMSL Mode, Delivery Mode', function () {
        Page.delRecYes("RecipeCE0068").then(function () {
            Page.delRecYes("RecipeCE0069");
        }).then(function () {
            Page.delRecYes("RecipeCE0070");
        }).then(function () {
            Page.delRecYes("RecipeCE0071");
        }).then(function () {
            Page.delRecYes("RecipeCE0072");
        }).then(function () {
            Page.delRecYes("RecipeCE0073");
        }).then(function () {
            Page.delRecYes("RecipeCE0074");
        }).then(function () {
            Page.delRecYes("RecipeCE0075");
        }).then(function () {
            Page.delCvrYes("ConversionI0049");
        }).then(function () {
            Page.delCvrYes("ConversionO0049");
        }).then(function () {
            Page.delMsgYes("MessageD0043");
        }).then(function () {
            Page.delBufYes("BufferD0043");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0049");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0043");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0043");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0049", "", false, false, "EndpointEMSE0043");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0049");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0043");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0043");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0049", "", undefined, "", "EndpointCICSC0043");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0043", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0043", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0049", "MessageD0043", "BufferD0043", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0049", "MessageD0043", "BufferD0043", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0068", "", "IntfCICSA0049", false, "", false, "", false, "", false, "ConnEMSC0049", false, "0", "0", "0", "ConversionI0049", false, "ConversionO0049", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Reliable Auto-Ack", "Persistent");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable Auto-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsSmslModeDropdown);
        }).then(function () {
            Page.eleRecEmsSmslModeDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsSmslMode01);
        }).then(function () {
            return Page.eleRecEmsSmslMode01.getText();
        }).then(function (message) {
            expect(message === 'Reliable No-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslMode02.getText();
        }).then(function (message) {
            expect(message === 'Guaranteed All').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslMode03.getText();
        }).then(function (message) {
            expect(message === 'Reliable Auto-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslMode04.getText();
        }).then(function (message) {
            expect(message === 'Guaranteed SSES').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsDeliveryModeDropdown);
        }).then(function () {
            Page.eleRecEmsDeliveryModeDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsDeliveryMode01);
        }).then(function () {
            return Page.eleRecEmsDeliveryMode01.getText();
        }).then(function (message) {
            expect(message === 'Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryMode02.getText();
        }).then(function (message) {
            expect(message === 'Non-Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryMode03.getText();
        }).then(function (message) {
            expect(message === 'Reliable').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0069", "", "IntfCICSA0049", false, "", false, "", false, "", false, "ConnEMSC0049", false, "0", "0", "0", "ConversionI0049", false, "ConversionO0049", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Reliable Auto-Ack", "Non-Persistent");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable Auto-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Non-Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0070", "", "IntfCICSA0049", false, "", false, "", false, "", false, "ConnEMSC0049", false, "0", "0", "0", "ConversionI0049", false, "ConversionO0049", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Reliable Auto-Ack", "Reliable");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable Auto-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0071", "", "IntfCICSA0049", false, "", false, "", false, "", false, "ConnEMSC0049", false, "0", "0", "0", "ConversionI0049", false, "ConversionO0049", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Reliable No-Ack", "Persistent");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable No-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0072", "", "IntfCICSA0049", false, "", false, "", false, "", false, "ConnEMSC0049", false, "0", "0", "0", "ConversionI0049", false, "ConversionO0049", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Reliable No-Ack", "Non-Persistent");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable No-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Non-Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0073", "", "IntfCICSA0049", false, "", false, "", false, "", false, "ConnEMSC0049", false, "0", "0", "0", "ConversionI0049", false, "ConversionO0049", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Reliable No-Ack", "Reliable");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable No-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0074", "", "IntfCICSA0049", false, "", false, "", false, "", false, "ConnEMSC0049", false, "0", "0", "0", "ConversionI0049", false, "ConversionO0049", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Guaranteed All");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Guaranteed All').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0075", "", "IntfCICSA0049", false, "", false, "", false, "", false, "ConnEMSC0049", false, "0", "0", "0", "ConversionI0049", false, "ConversionO0049", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "TOPIC", undefined, "TOPIC", undefined, undefined, undefined, undefined, undefined, "TOPIC", "Guaranteed SSES");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Guaranteed SSES').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Durable Subscriber & Shared Subscriber'
    //
    it('Test Recipe -> EMS Details -> Durable Subscriber & Shared Subscriber', function () {
        Page.delRecYes("RecipeCE0076").then(function () {
            Page.delRecYes("RecipeCE0077");
        }).then(function () {
            Page.delRecYes("RecipeCE0078");
        }).then(function () {
            Page.delRecYes("RecipeCE0079");
        }).then(function () {
            Page.delCvrYes("ConversionI0050");
        }).then(function () {
            Page.delCvrYes("ConversionO0050");
        }).then(function () {
            Page.delMsgYes("MessageD0044");
        }).then(function () {
            Page.delBufYes("BufferD0044");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0050");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0044");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0044");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0050", "", false, false, "EndpointEMSE0044");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0050");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0044");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0044");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0050", "", undefined, "", "EndpointCICSC0044");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0044", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0044", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0050", "MessageD0044", "BufferD0044", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0050", "MessageD0044", "BufferD0044", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0076", "", "IntfCICSA0050", false, "", false, "", false, "", false, "ConnEMSC0050", false, "0", "0", "0", "ConversionI0050", false, "ConversionO0050", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDurableSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsSharedSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable Auto-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0077", "", "IntfCICSA0050", false, "", false, "", false, "", false, "ConnEMSC0050", false, "0", "0", "0", "ConversionI0050", false, "ConversionO0050", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDurableSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleRecEmsSharedSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable Auto-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0078", "", "IntfCICSA0050", false, "", false, "", false, "", false, "ConnEMSC0050", false, "0", "0", "0", "ConversionI0050", false, "ConversionO0050", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDurableSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsSharedSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable Auto-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0079", "", "IntfCICSA0050", false, "", false, "", false, "", false, "ConnEMSC0050", false, "0", "0", "0", "ConversionI0050", false, "ConversionO0050", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDurableSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleRecEmsSharedSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Reliable Auto-Ack').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Persistent').to.be.true;
        }).then(function () {
            return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TOPIC').to.be.true;
        }).then(function () {
            return Page.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'QUEUE').to.be.true;
        }).then(function () {
            return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            expect(message).to.not.include('background-color:');
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Subscriber Client ID'
    //
    it('Test Recipe -> EMS Details -> Subscriber Client ID', function () {
        Page.delRecYes("RecipeCE0080").then(function () {
            Page.delCvrYes("ConversionI0051");
        }).then(function () {
            Page.delCvrYes("ConversionO0051");
        }).then(function () {
            Page.delMsgYes("MessageD0045");
        }).then(function () {
            Page.delBufYes("BufferD0045");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0051");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0045");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0045");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0051", "", false, false, "EndpointEMSE0045");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0051");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0045");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0045");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0051", "", undefined, "", "EndpointCICSC0045");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0045", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0045", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0051", "MessageD0045", "BufferD0045", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0051", "MessageD0045", "BufferD0045", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0080", "", "IntfCICSA0051", false, "", false, "", false, "", false, "ConnEMSC0051", false, "0", "0", "0", "ConversionI0051", false, "ConversionO0051", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSubscriberClientIdInput.clear().sendKeys("1");
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
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "1").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSubscriberClientIdInput.clear().sendKeys("@#$&2Ab!?");
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
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "@#$&2Ab!?").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSubscriberClientIdInput.clear().sendKeys("&@#$2Ab!?");
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
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "&@#$2Ab!?").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSubscriberClientIdInput.clear().sendKeys("b&@#$2A!?");
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
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "b&@#$2A!?").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSubscriberClientIdInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?55555555556666666666777");
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
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?55555555556666666666777").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSubscriberClientIdInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?555555555566666666667774");
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
            return Page.eleRecEmsSubscriberClientIdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?55555555556666666666777").to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Priority & Value'
    //
    it('Test Recipe -> EMS Details -> Priority & Value', function () {
        var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
        Page.delRecYes("RecipeCE0081").then(function () {
            Page.delRecYes("RecipeCE0082");
        }).then(function () {
            Page.delCvrYes("ConversionI0052");
        }).then(function () {
            Page.delCvrYes("ConversionO0052");
        }).then(function () {
            Page.delMsgYes("MessageD0046");
        }).then(function () {
            Page.delBufYes("BufferD0046");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0052");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0046");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0046");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0052", "", false, false, "EndpointEMSE0046");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0052");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0046");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0046");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0052", "", undefined, "", "EndpointCICSC0046");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0046", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0046", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0052", "MessageD0046", "BufferD0046", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0052", "MessageD0046", "BufferD0046", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0081", "", "IntfCICSA0052", false, "", false, "", false, "", false, "ConnEMSC0052", false, "0", "0", "0", "ConversionI0052", false, "ConversionO0052", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys("8");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '8').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys("9");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys("10");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0082", "", "IntfCICSA0052", false, "", false, "", false, "", false, "ConnEMSC0052", false, "0", "0", "0", "ConversionI0052", false, "ConversionO0052", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys("7");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '7').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys("9");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys("67");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPriorityValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '6').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Expiration, Value & Unit'
    //
    it('Test Recipe -> EMS Details -> Expiration, Value & Unit', function () {
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        Page.delRecYes("RecipeCE0083").then(function () {
            Page.delRecYes("RecipeCE0084");
        }).then(function () {
            Page.delRecYes("RecipeCE0085");
        }).then(function () {
            Page.delRecYes("RecipeCE0086");
        }).then(function () {
            Page.delCvrYes("ConversionI0053");
        }).then(function () {
            Page.delCvrYes("ConversionO0053");
        }).then(function () {
            Page.delMsgYes("MessageD0047");
        }).then(function () {
            Page.delBufYes("BufferD0047");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0053");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0047");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0047");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0053", "", false, false, "EndpointEMSE0047");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0053");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0047");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0047");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0053", "", undefined, "", "EndpointCICSC0047");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0047", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0047", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0053", "MessageD0047", "BufferD0047", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0053", "MessageD0047", "BufferD0047", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0083", "", "IntfCICSA0053", false, "", false, "", false, "", false, "ConnEMSC0053", false, "0", "0", "0", "ConversionI0053", false, "ConversionO0053", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false, "0", "Seconds");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnitDropdown.getText();
        }).then(function (message) {
            expect(message === 'Seconds').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsOutputMsgExpirationUnitDropdown);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationUnitDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsOutputMsgExpirationUnit01);
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnit01.getText();
        }).then(function (message) {
            expect(message === 'Seconds').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnit02.getText();
        }).then(function (message) {
            expect(message === 'Minutes').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnit03.getText();
        }).then(function (message) {
            expect(message === 'Hours').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnit04.getText();
        }).then(function (message) {
            expect(message === 'Days').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("222");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("5555");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("99998");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99998').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("99999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("100000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("123456");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '12345').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0084", "", "IntfCICSA0053", false, "", false, "", false, "", false, "ConnEMSC0053", false, "0", "0", "0", "ConversionI0053", false, "ConversionO0053", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true, '0', "Minutes");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnitDropdown.getText();
        }).then(function (message) {
            expect(message === 'Minutes').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("222");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("5555");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("99998");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99998').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("99999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("100000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("123456");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '12345').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0085", "", "IntfCICSA0053", false, "", false, "", false, "", false, "ConnEMSC0053", false, "0", "0", "0", "ConversionI0053", false, "ConversionO0053", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false, '0', "Hours");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnitDropdown.getText();
        }).then(function (message) {
            expect(message === 'Hours').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("222");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("5555");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("99998");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99998').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("99999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("100000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("123456");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '12345').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0086", "", "IntfCICSA0053", false, "", false, "", false, "", false, "ConnEMSC0053", false, "0", "0", "0", "ConversionI0053", false, "ConversionO0053", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true, '0', "Days");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationUnitDropdown.getText();
        }).then(function (message) {
            expect(message === 'Days').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("222");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("5555");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("99998");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99998').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("99999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("100000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys("123456");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgExpirationValueSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '12345').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Compression'
    //
    it('Test Recipe -> EMS Details -> Compression', function () {
        Page.delRecYes("RecipeCE0087").then(function () {
            Page.delRecYes("RecipeCE0088");
        }).then(function () {
            Page.delCvrYes("ConversionI0054");
        }).then(function () {
            Page.delCvrYes("ConversionO0054");
        }).then(function () {
            Page.delMsgYes("MessageD0048");
        }).then(function () {
            Page.delBufYes("BufferD0048");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0054");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0048");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0048");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0054", "", false, false, "EndpointEMSE0048");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0054");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0048");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0048");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0054", "", undefined, "", "EndpointCICSC0048");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0048", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0048", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0054", "MessageD0048", "BufferD0048", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0054", "MessageD0048", "BufferD0048", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0087", "", "IntfCICSA0054", false, "", false, "", false, "", false, "ConnEMSC0054", false, "0", "0", "0", "ConversionI0054", false, "ConversionO0054", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCompressionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0088", "", "IntfCICSA0054", false, "", false, "", false, "", false, "ConnEMSC0054", false, "0", "0", "0", "ConversionI0054", false, "ConversionO0054", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCompressionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Preserve'
    //
    it('Test Recipe -> EMS Details -> Preserve', function () {
        Page.delRecYes("RecipeCE0089").then(function () {
            Page.delRecYes("RecipeCE0090");
        }).then(function () {
            Page.delCvrYes("ConversionI0055");
        }).then(function () {
            Page.delCvrYes("ConversionO0055");
        }).then(function () {
            Page.delMsgYes("MessageD0049");
        }).then(function () {
            Page.delBufYes("BufferD0049");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0055");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0049");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0049");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0055", "", false, false, "EndpointEMSE0049");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0055");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0049");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0049");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0055", "", undefined, "", "EndpointCICSC0049");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0049", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0049", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0055", "MessageD0049", "BufferD0049", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0055", "MessageD0049", "BufferD0049", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0089", "", "IntfCICSA0055", false, "", false, "", false, "", false, "ConnEMSC0055", false, "0", "0", "0", "ConversionI0055", false, "ConversionO0055", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPreserveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0090", "", "IntfCICSA0055", false, "", false, "", false, "", false, "ConnEMSC0055", false, "0", "0", "0", "ConversionI0055", false, "ConversionO0055", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgPreserveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Body Trace'
    //
    it('Test Recipe -> EMS Details -> Body Trace', function () {
        Page.delRecYes("RecipeCE0091").then(function () {
            Page.delRecYes("RecipeCE0092");
        }).then(function () {
            Page.delCvrYes("ConversionI0056");
        }).then(function () {
            Page.delCvrYes("ConversionO0056");
        }).then(function () {
            Page.delMsgYes("MessageD0050");
        }).then(function () {
            Page.delBufYes("BufferD0050");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0056");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0050");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0050");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0056", "", false, false, "EndpointEMSE0050");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0056");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0050");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0050");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0056", "", undefined, "", "EndpointCICSC0050");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0050", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0050", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0056", "MessageD0050", "BufferD0050", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0056", "MessageD0050", "BufferD0050", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0091", "", "IntfCICSA0056", false, "", false, "", false, "", false, "ConnEMSC0056", false, "0", "0", "0", "ConversionI0056", false, "ConversionO0056", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgBodyTraceCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0092", "", "IntfCICSA0056", false, "", false, "", false, "", false, "ConnEMSC0056", false, "0", "0", "0", "ConversionI0056", false, "ConversionO0056", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgBodyTraceCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Message Type'
    //
    it('Test Recipe -> EMS Details -> Message Type', function () {
        Page.delRecYes("RecipeCE0093").then(function () {
            Page.delRecYes("RecipeCE0094");
        }).then(function () {
            Page.delRecYes("RecipeCE0095");
        }).then(function () {
            Page.delRecYes("RecipeCE0096");
        }).then(function () {
            Page.delCvrYes("ConversionI0057");
        }).then(function () {
            Page.delCvrYes("ConversionO0057");
        }).then(function () {
            Page.delMsgYes("MessageD0051");
        }).then(function () {
            Page.delBufYes("BufferD0051");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0057");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0051");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0051");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0057", "", false, false, "EndpointEMSE0051");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0057");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0051");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0051");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0057", "", undefined, "", "EndpointCICSC0051");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0051", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0051", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0057", "MessageD0051", "BufferD0051", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0057", "MessageD0051", "BufferD0051", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0093", "", "IntfCICSA0057", false, "", false, "", false, "", false, "ConnEMSC0057", false, "0", "0", "0", "ConversionI0057", false, "ConversionO0057", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Bytes");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Bytes').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsOutputMsgMsgTypeDropdown);
        }).then(function () {
            Page.eleRecEmsOutputMsgMsgTypeDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsOutputMsgMsgType01);
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgType01.getText();
        }).then(function (message) {
            expect(message === 'Bytes').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgType02.getText();
        }).then(function (message) {
            expect(message === 'Map').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgType03.getText();
        }).then(function (message) {
            expect(message === 'Stream').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgType04.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0094", "", "IntfCICSA0057", false, "", false, "", false, "", false, "ConnEMSC0057", false, "0", "0", "0", "ConversionI0057", false, "ConversionO0057", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Map");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Map').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0095", "", "IntfCICSA0057", false, "", false, "", false, "", false, "ConnEMSC0057", false, "0", "0", "0", "ConversionI0057", false, "ConversionO0057", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Stream");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Stream').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0096", "", "IntfCICSA0057", false, "", false, "", false, "", false, "ConnEMSC0057", false, "0", "0", "0", "ConversionI0057", false, "ConversionO0057", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Text");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Copy JMSCorrelation'
    //
    it('Test Recipe -> EMS Details -> Copy JMSCorrelation', function () {
        Page.delRecYes("RecipeCE0097").then(function () {
            Page.delRecYes("RecipeCE0098");
        }).then(function () {
            Page.delRecYes("RecipeCE0099");
        }).then(function () {
            Page.delRecYes("RecipeCE0100");
        }).then(function () {
            Page.delRecYes("RecipeCE0101");
        }).then(function () {
            Page.delCvrYes("ConversionI0058");
        }).then(function () {
            Page.delCvrYes("ConversionO0058");
        }).then(function () {
            Page.delMsgYes("MessageD0052");
        }).then(function () {
            Page.delBufYes("BufferD0052");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0058");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0052");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0052");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0058", "", false, false, "EndpointEMSE0052");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0058");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0052");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0052");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0058", "", undefined, "", "EndpointCICSC0052");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0052", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0052", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0058", "MessageD0052", "BufferD0052", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0058", "MessageD0052", "BufferD0052", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0097", "", "IntfCICSA0058", false, "", false, "", false, "", false, "ConnEMSC0058", false, "0", "0", "0", "ConversionI0058", false, "ConversionO0058", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Yes");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Yes').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsOutputMsgCopyCorrelationDropdown);
        }).then(function () {
            Page.eleRecEmsOutputMsgCopyCorrelationDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsOutputMsgCopyCorrelation01);
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelation01.getText();
        }).then(function (message) {
            expect(message === 'Yes').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelation02.getText();
        }).then(function (message) {
            expect(message === 'No').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelation03.getText();
        }).then(function (message) {
            expect(message === 'Envelope').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelation04.getText();
        }).then(function (message) {
            expect(message === 'Message Id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelation05.getText();
        }).then(function (message) {
            expect(message === 'Correlation Id or Message Id').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0098", "", "IntfCICSA0058", false, "", false, "", false, "", false, "ConnEMSC0058", false, "0", "0", "0", "ConversionI0058", false, "ConversionO0058", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "No");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelationDropdown.getText();
        }).then(function (message) {
            expect(message === 'No').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0099", "", "IntfCICSA0058", false, "", false, "", false, "", false, "ConnEMSC0058", false, "0", "0", "0", "ConversionI0058", false, "ConversionO0058", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Envelope");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Envelope').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0100", "", "IntfCICSA0058", false, "", false, "", false, "", false, "ConnEMSC0058", false, "0", "0", "0", "ConversionI0058", false, "ConversionO0058", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Message Id");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message Id').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0101", "", "IntfCICSA0058", false, "", false, "", false, "", false, "ConnEMSC0058", false, "0", "0", "0", "ConversionI0058", false, "ConversionO0058", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Correlation Id or Message Id");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsOutputMsgCopyCorrelationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Correlation Id or Message Id').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Properties Type'
    //
    it('Test Recipe -> EMS Properties Type', function () {
        Page.delRecYes("RecipeCE0102").then(function () {
            Page.delCvrYes("ConversionI0059");
        }).then(function () {
            Page.delCvrYes("ConversionO0059");
        }).then(function () {
            Page.delMsgYes("MessageD0053");
        }).then(function () {
            Page.delBufYes("BufferD0053");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0059");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0053");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0053");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0059", "", false, false, "EndpointEMSE0053");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0059");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0053");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0053");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0059", "", undefined, "", "EndpointCICSC0053");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0053", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0053", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0059", "MessageD0053", "BufferD0053", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0059", "MessageD0053", "BufferD0053", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0102", "", "IntfCICSA0059", false, "", false, "", false, "", false, "ConnEMSC0059", false, "0", "0", "0", "ConversionI0059", false, "ConversionO0059", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecConnectionExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropExtension);
        }).then(function () {
            return Page.eleRecEmsPropAddButton.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecEmsPropExtension.click();
            }
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropAddButton);
        }).then(function () {
            Page.eleRecEmsPropAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropTypeDropdown);
        }).then(function () {
            return Page.eleRecEmsPropTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'System').to.be.true;
        }).then(function () {
            Page.eleRecEmsPropTypeDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropType01);
        }).then(function () {
            return Page.eleRecEmsPropType01.getText();
        }).then(function (message) {
            expect(message === 'Value').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropType02.getText();
        }).then(function (message) {
            expect(message === 'Buffer').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropType03.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropType04.getText();
        }).then(function (message) {
            expect(message === 'System').to.be.true;
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V02", "Property_Value01");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B01", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M01", "bufField0001");
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
            return Page.eleRecEmsPropType(1).getText();
        }).then(function (message) {
            expect(message === 'Buffer').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropType(2).getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropType(3).getText();
        }).then(function (message) {
            expect(message === 'Value').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropType(4).getText();
        }).then(function (message) {
            expect(message === 'System').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Properties Name'
    // Related jiras: ZWUI-1139
    it('Test Recipe -> EMS Properties Name', function () {
        Page.delRecYes("RecipeCE0103").then(function () {
            Page.delRecYes("RecipeCE0104");
        }).then(function () {
            Page.delCvrYes("ConversionI0060");
        }).then(function () {
            Page.delCvrYes("ConversionO0060");
        }).then(function () {
            Page.delMsgYes("MessageD0054");
        }).then(function () {
            Page.delBufYes("BufferD0054");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0060");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0054");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0054");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0060", "", false, false, "EndpointEMSE0054");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0060");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0054");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0054");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0060", "", undefined, "", "EndpointCICSC0054");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0054", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0054", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0060", "MessageD0054", "BufferD0054", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0060", "MessageD0054", "BufferD0054", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0103", "", "IntfCICSA0060", false, "", false, "", false, "", false, "ConnEMSC0060", false, "0", "0", "0", "ConversionI0060", false, "ConversionO0060", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "000", "Property_Value01");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "@", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "456", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-envelope");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "d0ABc", "Property_Value02");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "aaaaa", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "hij", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-userid");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "#", "Property_Value03");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "231", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "&#@", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-service-id");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "ABC", "Property_Value04");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "&", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "OPQ", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-resource");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "aBC", "Property_Value05");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "ddd", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "rst", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-password");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop@#&0000012222222333333333344", "Property_Value06");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "$&@#!%*Field22222222333333333344", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop!@#$%&2222222222333333333344", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-BES");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "uvw", "Property_Value07");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "XYZ", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "lMn", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-tran-code");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-MFS-Name");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-ss-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-RRO-Tran-Code");
            // }).then(function () {
            //     Page._addEmsPropertyRec("System", "Request-Optional", "tibss-BES");
            // }).then(function () {
            //     Page._addEmsPropertyRec("System", "Reply", "tibss-envelope");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-RRO-SysId");
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
            // }).then(function () {
            //     return Page.eleRecEmsPropName(1).getText();
            // }).then(function (message) {
            //     expect(message === '#').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(2).getText();
            // }).then(function (message) {
            //     expect(message === '$&@#!%*Field2222222233333333334').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(3).getText();
            // }).then(function (message) {
            //     expect(message === '&').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(4).getText();
            // }).then(function (message) {
            //     expect(message === '000').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(5).getText();
            // }).then(function (message) {
            //     expect(message === '231').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(6).getText();
            // }).then(function (message) {
            //     expect(message === '@').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(7).getText();
            // }).then(function (message) {
            //     expect(message === 'aaaaa').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(8).getText();
            // }).then(function (message) {
            //     expect(message === 'ABC').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(9).getText();
            // }).then(function (message) {
            //     expect(message === 'aBC').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(10).getText();
            // }).then(function (message) {
            //     expect(message === 'd0ABc').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(11).getAttribute("textContent");
            // }).then(function (message) {
            //     expect(message === 'ddd').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(12).getAttribute("textContent");
            // }).then(function (message) {
            //     expect(message === 'prop@#&000001222222233333333334').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(13).getAttribute("textContent");
            // }).then(function (message) {
            //     expect(message === 'tibss-BES').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(14).getAttribute("textContent");
            // }).then(function (message) {
            //     expect(message === 'tibss-envelope').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(15).getAttribute("textContent");
            // }).then(function (message) {
            //     expect(message === 'tibss-service-id').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(16).getAttribute("textContent");
            // }).then(function (message) {
            //     expect(message === 'tibss-ss-id').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(17).getAttribute("textContent");
            // }).then(function (message) {
            //     expect(message === 'uvw').to.be.true;
            // }).then(function () {
            //     return Page.eleRecEmsPropName(18).getAttribute("textContent");
            // }).then(function (message) {
            //     expect(message === 'XYZ').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0104", "", "IntfCICSA0060", false, "", false, "", false, "", false, "ConnEMSC0060", false, "0", "0", "0", "ConversionI0060", false, "ConversionO0060", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop01", "Property_Value01");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop02", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop03", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-resource");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropAddButton);
        }).then(function () {
            Page.eleRecEmsPropAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropTypeDropdown);
        }).then(function () {
            return Page.eleRecEmsPropTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'System').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropNameDropdown.getText();
        }).then(function (message) {
            expect(message === 'tibss-BES').to.be.true;
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "", "Property_Value");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
        }).then(function () {
            return Page.eleRecEmsPropValidateMsg.getAttribute("title");
        }).then(function (message) {
            expect(message === 'Please enter a non-empty property name').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
        }).then(function () {
            Page.eleRecEmsPropDelButton.click();
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "", "bufField0002");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
        }).then(function () {
            return Page.eleRecEmsPropValidateMsg.getAttribute("title");
        }).then(function (message) {
            expect(message === 'Please enter a non-empty property name').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
        }).then(function () {
            Page.eleRecEmsPropDelButton.click();
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop01", "Property_Value");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
        }).then(function () {
            return Page.eleRecEmsPropValidateMsg.getAttribute("title");
        }).then(function (message) {
            expect(message === 'Duplicate row').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
        }).then(function () {
            Page.eleRecEmsPropDelButton.click();
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop02", "Property_Value");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
        }).then(function () {
            return Page.eleRecEmsPropValidateMsg.getAttribute("title");
        }).then(function (message) {
            expect(message === 'Duplicate row').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
        }).then(function () {
            Page.eleRecEmsPropDelButton.click();
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "tibss-resource", "Property_Value");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
        }).then(function () {
            return Page.eleRecEmsPropValidateMsg.getAttribute("title");
        }).then(function (message) {
            expect(message === 'Duplicate row').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
        }).then(function () {
            Page.eleRecEmsPropDelButton.click();
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop01", "bufField0002");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
        }).then(function () {
            return Page.eleRecEmsPropValidateMsg.getAttribute("title");
        }).then(function (message) {
            expect(message === 'Duplicate row').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
        }).then(function () {
            Page.eleRecEmsPropDelButton.click();
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop02", "bufField0002");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
        }).then(function () {
            return Page.eleRecEmsPropValidateMsg.getAttribute("title");
        }).then(function (message) {
            expect(message === 'Duplicate row').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
        }).then(function () {
            Page.eleRecEmsPropDelButton.click();
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "tibss-resource", "bufField0002");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
        }).then(function () {
            return Page.eleRecEmsPropValidateMsg.getAttribute("title");
        }).then(function (message) {
            expect(message === 'Duplicate row').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
        }).then(function () {
            Page.eleRecEmsPropDelButton.click();
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-BES");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-BES");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-envelope");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-envelope");
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
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Properties Value'
    //
    it('Test Recipe -> EMS Properties Value', function () {
        Page.delRecYes("RecipeCE0105").then(function () {
            Page.delRecYes("RecipeCE0106");
        }).then(function () {
            Page.delCvrYes("ConversionI0061");
        }).then(function () {
            Page.delCvrYes("ConversionO0061");
        }).then(function () {
            Page.delMsgYes("MessageD0055");
        }).then(function () {
            Page.delBufYes("BufferD0055");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0061");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0055");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0055");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0061", "", false, false, "EndpointEMSE0055");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0061");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0055");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0055");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0061", "", undefined, "", "EndpointCICSC0055");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0055", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0055", "", undefined, "bufField00012222222233333333334444444444555555555566666666667777777777888888888", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField00032222222233333333334444444444555555555566666666667777777777888888888", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0061", "MessageD0055", "BufferD0055", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField00032222222233333333334444444444555555555566666666667777777777888888888", "msgField0003", "bufField00012222222233333333334444444444555555555566666666667777777777888888888", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0061", "MessageD0055", "BufferD0055", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField00032222222233333333334444444444555555555566666666667777777777888888888", "msgField0003", "bufField00012222222233333333334444444444555555555566666666667777777777888888888", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0105", "", "IntfCICSA0061", false, "", false, "", false, "", false, "ConnEMSC0061", false, "0", "0", "0", "ConversionI0061", false, "ConversionO0061", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B001", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B002", "bufField00012222222233333333334444444444555555555566666666667777777777888888888");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B003", "bufField00032222222233333333334444444444555555555566666666667777777777888888888");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B004", "bufField00012222222233333333334444444444555555555566666666667777777777888888888");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V001", "a");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V002", "B");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V003", "1");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V004", "@#$&aB1");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V005", "@#$&aB1");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V006", "!@#$%^&*?/2222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000111111111122222222223333333333444444444455555555556666");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V007", "!@#$%^&*?/22222222223333333333444444444455555555556666666666777777777788888888889999999999000000000011111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-BES");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-envelope");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-service-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-ss-id");
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
            return Page.eleRecEmsPropValue(1).getText();
        }).then(function (message) {
            expect(message === 'bufField0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(2).getText();
        }).then(function (message) {
            expect(message === 'bufField00012222222233333333334444444444555555555566666666667777777777888888888').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(3).getText();
        }).then(function (message) {
            expect(message === 'bufField00032222222233333333334444444444555555555566666666667777777777888888888').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(4).getText();
        }).then(function (message) {
            expect(message === 'bufField00012222222233333333334444444444555555555566666666667777777777888888888').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(5).getText();
        }).then(function (message) {
            expect(message === 'a').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(6).getText();
        }).then(function (message) {
            expect(message === 'B').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(7).getText();
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(8).getText();
        }).then(function (message) {
            expect(message === '@#$&aB1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(9).getText();
        }).then(function (message) {
            expect(message === '@#$&aB1').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(10).getText();
        }).then(function (message) {
            expect(message === '!@#$%^&*?/2222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000111111111122222222223333333333444444444455555555556666').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(11).getText();
        }).then(function (message) {
            expect(message === '!@#$%^&*?/2222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000111111111122222222223333333333444444444455555555556666').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(12).getAttribute("textContent");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(13).getAttribute("textContent");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(14).getAttribute("textContent");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValue(15).getAttribute("textContent");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0106", "", "IntfCICSA0061", false, "", false, "", false, "", false, "ConnEMSC0061", false, "0", "0", "0", "ConversionI0061", false, "ConversionO0061", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop01", "Property_Value01");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop02", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-envelope");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropAddButton);
        }).then(function () {
            Page.eleRecEmsPropAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropTypeDropdown);
        }).then(function () {
            return Page.eleRecEmsPropTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'System').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropNameDropdown.getText();
        }).then(function (message) {
            expect(message === 'tibss-BES').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropValueInput.getAttribute("aria-hidden");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop03", "");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
        }).then(function () {
            return Page.eleRecEmsPropValidateMsg.getAttribute("title");
        }).then(function (message) {
            expect(message === 'For type "Value", please enter a non-empty value').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
        }).then(function () {
            Page.eleRecEmsPropDelButton.click();
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop04", "");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
        }).then(function () {
            return Page.eleRecEmsPropValidateMsg.getAttribute("title");
        }).then(function (message) {
            expect(message === 'For type "Buffer", please pick a buffer field').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropBufValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
        }).then(function () {
            Page.eleRecEmsPropDelButton.click();
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop05", "");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
        }).then(function () {
            return Page.eleRecEmsPropValidateMsg.getAttribute("title");
        }).then(function (message) {
            expect(message === 'For type "Message", please pick a buffer field').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropMsgValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
        }).then(function () {
            Page.eleRecEmsPropDelButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);  //There is an issue here, no response after click Save button
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Test Recipe -> Add hundreds of EMS Properties for a recipe
    //
    it('Test Recipe -> Add hundreds of EMS Properties for a recipe', function () {
        Page.delRecYes("RecipeCE0107").then(function () {
            Page.delCvrYes("ConversionI0062");
        }).then(function () {
            Page.delCvrYes("ConversionO0062");
        }).then(function () {
            Page.delMsgYes("MessageD0056");
        }).then(function () {
            Page.delBufYes("BufferD0056");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0062");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0056");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0056");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0062", "", false, false, "EndpointEMSE0056");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0062");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0056");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0056");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0062", "", undefined, "", "EndpointCICSC0056");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0056", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0056", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0062", "MessageD0056", "BufferD0056", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0062", "MessageD0056", "BufferD0056", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0107", "", "IntfCICSA0062", true, "", false, "", false, "", false, "ConnEMSC0062", true, "0", "0", "0", "ConversionI0062", true, "ConversionO0062", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0003", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0004", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0005", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0006", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0007", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0008", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0009", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0010", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0011", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0012", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0013", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0014", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0015", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0016", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0017", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0018", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0019", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0020", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0021", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0022", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0023", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0024", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0025", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0026", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0027", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0028", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0029", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0030", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0031", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0032", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0033", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0034", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0035", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0036", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0037", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0038", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0039", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0040", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0041", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0042", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0043", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0044", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0045", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0046", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0047", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0048", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0049", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0050", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0051", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0052", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0053", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0054", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0055", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0056", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0057", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0058", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0059", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0060", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0061", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0062", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0063", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0064", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0065", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0066", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0067", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0068", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0069", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0070", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0071", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0072", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0073", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0074", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0075", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0076", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0077", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0078", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0079", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0080", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0081", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0082", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0083", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0084", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0085", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0086", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0087", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0088", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0089", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0090", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0091", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0092", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0093", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0094", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0095", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0096", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0097", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0098", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0099", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0100", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0201", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0202", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0203", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0204", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0205", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0206", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0207", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0208", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0209", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0210", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0211", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0212", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0213", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0214", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0215", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0216", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0217", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0218", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0219", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0220", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0221", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0222", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0223", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0224", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0225", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0226", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0227", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0228", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0229", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0230", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0231", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0232", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0233", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0234", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0235", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0236", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0237", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0238", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0239", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0240", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0241", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0242", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0243", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0244", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0245", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0246", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0247", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0248", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0249", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0250", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0251", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0252", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0253", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0254", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0255", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0256", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0257", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0258", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0259", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0260", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0261", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0262", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0263", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0264", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0265", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0266", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0267", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0268", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0269", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0270", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0271", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0272", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0273", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0274", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0275", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0276", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0277", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0278", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0279", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0280", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0281", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0282", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0283", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0284", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0285", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0286", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0287", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0288", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0289", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0290", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0291", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0292", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0293", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0294", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0295", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0296", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0297", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0298", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0299", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0300", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0101", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0102", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0103", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0104", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0105", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0106", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0107", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0108", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0109", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0110", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0111", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0112", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0113", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0114", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0115", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0116", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0117", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0118", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0119", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0120", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0121", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0122", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0123", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0124", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0125", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0126", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0127", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0128", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0129", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0130", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0131", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0132", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0133", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0134", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0135", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0136", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0137", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0138", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0139", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0140", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0141", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0142", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0143", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0144", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0145", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0146", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0147", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0148", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0149", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0150", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0151", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0152", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0153", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0154", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0155", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0156", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0157", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0158", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0159", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0160", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0161", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0162", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0163", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0164", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0165", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0166", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0167", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0168", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0169", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0170", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0171", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0172", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0173", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0174", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0175", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0176", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0177", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0178", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0179", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0180", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0181", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0182", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0183", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0184", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0185", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0186", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0187", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0188", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0189", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0190", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0191", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0192", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0193", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0194", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0195", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0196", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0197", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0198", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0199", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0200", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-BES");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-envelope");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-service-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-ss-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-BES");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-envelope");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-MFS-Name");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-password");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-resource");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-RRO-SysId");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-RRO-Tran-Code");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-tran-code");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-userid");
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
            return Page.eleRecEmsPropName(1).getText();
        }).then(function (message) {
            expect(message === 'prop-B0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(50).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'prop-B0050').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(150).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'prop-M0150').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(200).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'prop-M0200').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(250).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'prop-V0250').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(300).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'prop-V0300').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(304).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'tibss-password').to.be.true;
        });
    });

    // Test Recipe -> Delete several EMS Properties
    //
    it('Test Recipe -> Delete several EMS Properties', function () {
        Page.delRecYes("RecipeCE0108").then(function () {
            Page.delCvrYes("ConversionI0063");
        }).then(function () {
            Page.delCvrYes("ConversionO0063");
        }).then(function () {
            Page.delMsgYes("MessageD0057");
        }).then(function () {
            Page.delBufYes("BufferD0057");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0063");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0057");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0057");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0063", "", false, false, "EndpointEMSE0057");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0063");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0057");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0057");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0063", "", undefined, "", "EndpointCICSC0057");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0057", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0057", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0063", "MessageD0057", "BufferD0057", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0063", "MessageD0057", "BufferD0057", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0108", "", "IntfCICSA0063", true, "", false, "", false, "", false, "ConnEMSC0063", true, "0", "0", "0", "ConversionI0063", true, "ConversionO0063", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0003", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0004", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0005", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0003", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0004", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0005", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0001", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0002", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0003", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0004", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0005", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-BES");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-envelope");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-service-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-ss-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-MFS-Name");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-password");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-resource");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-RRO-SysId");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-RRO-Tran-Code");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-tran-code");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-userid");
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
            // }).then(function () {
            //     browser.actions().mouseMove(Page.eleRecEmsSelectorInput).perform();
        }).then(function () {
            Page._delEmsPropertyRec("tibss-tran-code");
        }).then(function () {
            Page._delEmsPropertyRec("tibss-ss-id");
        }).then(function () {
            Page._delEmsPropertyRec("tibss-RRO-Tran-Code");
        }).then(function () {
            Page._delEmsPropertyRec("tibss-resource");
        }).then(function () {
            Page._delEmsPropertyRec("prop-M0005");
        }).then(function () {
            Page._delEmsPropertyRec("prop-B0005");
        }).then(function () {
            Page._delEmsPropertyRec("prop-V0002");
        }).then(function () {
            Page._delEmsPropertyRec("tibss-MFS-Name");
        }).then(function () {
            Page._delEmsPropertyRec("prop-M0003");
        }).then(function () {
            Page._delEmsPropertyRec("prop-V0004");
        }).then(function () {
            Page._delEmsPropertyRec("prop-M0004");
        }).then(function () {
            Page._delEmsPropertyRec("prop-B0003");
        }).then(function () {
            Page._delEmsPropertyRec("prop-V0001");
        }).then(function () {
            Page._delEmsPropertyRec("tibss-BES");
        }).then(function () {
            Page._delEmsPropertyRec("tibss-password");
        }).then(function () {
            Page._delEmsPropertyRec("prop-B0001");
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
            return Page.eleRecEmsPropName(1).getText();
        }).then(function (message) {
            expect(message === 'prop-B0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-B0004').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'prop-M0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'prop-M0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(5).getText();
        }).then(function (message) {
            expect(message === 'prop-V0003').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(6).getText();
        }).then(function (message) {
            expect(message === 'prop-V0005').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(7).getText();
        }).then(function (message) {
            expect(message === 'tibss-envelope').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(8).getText();
        }).then(function (message) {
            expect(message === 'tibss-RRO-SysId').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(9).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(10).getText();
        }).then(function (message) {
            expect(message === 'tibss-userid').to.be.true;
        });
    });

    // Test Recipe -> Replicate several EMS Properties
    //
    it('Test Recipe -> Replicate several EMS Properties', function () {
        Page.delRecYes("RecipeCE0109").then(function () {
            Page.delCvrYes("ConversionI0064");
        }).then(function () {
            Page.delCvrYes("ConversionO0064");
        }).then(function () {
            Page.delMsgYes("MessageD0058");
        }).then(function () {
            Page.delBufYes("BufferD0058");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0064");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0058");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0058");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0064", "", false, false, "EndpointEMSE0058");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0064");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0058");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0058");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0064", "", undefined, "", "EndpointCICSC0058");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0058", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0058", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0064", "MessageD0058", "BufferD0058", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0064", "MessageD0058", "BufferD0058", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0109", "", "IntfCICSA0064", true, "", false, "", false, "", false, "ConnEMSC0064", true, "0", "0", "0", "ConversionI0064", true, "ConversionO0064", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0003", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0001", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0002", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0003", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-service-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-MFS-Name");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-password");
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
            Page._replicateEmsPropertyRec("prop-V0001", "prop-V0004");
        }).then(function () {
            Page._replicateEmsPropertyRec("prop-B0003", "prop-B0004");
        }).then(function () {
            Page._replicateEmsPropertyRec("tibss-service-id", "tibss-ss-id");
        }).then(function () {
            Page._replicateEmsPropertyRec("prop-V0002", "prop-V0005");
        }).then(function () {
            Page._replicateEmsPropertyRec("prop-B0001", "prop-B0005");
        }).then(function () {
            Page._replicateEmsPropertyRec("tibss-MFS-Name", "tibss-userid");
        }).then(function () {
            Page._replicateEmsPropertyRec("tibss-password", "tibss-resource");
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
            return Page.eleRecEmsPropName(1).getText();
        }).then(function (message) {
            expect(message === 'prop-B0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-B0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'prop-B0003').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'prop-B0004').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(5).getText();
        }).then(function (message) {
            expect(message === 'prop-B0005').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(6).getText();
        }).then(function (message) {
            expect(message === 'prop-V0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(7).getText();
        }).then(function (message) {
            expect(message === 'prop-V0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(8).getText();
        }).then(function (message) {
            expect(message === 'prop-V0003').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(9).getText();
        }).then(function (message) {
            expect(message === 'prop-V0004').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(10).getText();
        }).then(function (message) {
            expect(message === 'prop-V0005').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(11).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'tibss-MFS-Name').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(12).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'tibss-password').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(13).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'tibss-resource').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(14).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(15).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'tibss-ss-id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(16).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'tibss-userid').to.be.true;
        });
    });

    // Test Recipe -> Reset Output Conversion, and then all the buffer type EMS properties will be cleared
    //
    it('Test Recipe -> Reset Output Conversion, and then all the buffer type EMS properties will be cleared', function () {
        Page.delRecYes("RecipeCE0110").then(function () {
            Page.delRecYes("RecipeCE0111");
        }).then(function () {
            Page.delRecYes("RecipeCE0112");
        }).then(function () {
            Page.delCvrYes("ConversionI0065");
        }).then(function () {
            Page.delCvrYes("ConversionO0065");
        }).then(function () {
            Page.delCvrYes("Conversion_O0065");
        }).then(function () {
            Page.delMsgYes("MessageD0059");
        }).then(function () {
            Page.delBufYes("BufferD0059");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0065");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0059");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0059");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0065", "", false, false, "EndpointEMSE0059");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0065");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0059");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0059");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0065", "", undefined, "", "EndpointCICSC0059");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0059", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0059", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0065", "MessageD0059", "BufferD0059", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0065", "MessageD0059", "BufferD0059", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion_O0065", "MessageD0059", "BufferD0059", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0110", "", "IntfCICSA0065", true, "", false, "", false, "", false, "ConnEMSC0065", true, "0", "0", "0", "ConversionI0065", true, "ConversionO0065", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0001", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0002", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-service-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-MFS-Name");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-password");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._outputConversionRec("Conversion_O0065");
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Corresponding EMS properties will be removed.\n" +
                "Would you like to continue?").to.be.true;
        }).then(function () {
            globalPage.isWarningNo();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecOutputConversionInput);
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionO0065').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(1).getText();
        }).then(function (message) {
            expect(message === 'prop-B0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-B0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'prop-M0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'prop-M0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(5).getText();
        }).then(function (message) {
            expect(message === 'prop-V0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(6).getText();
        }).then(function (message) {
            expect(message === 'prop-V0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(7).getText();
        }).then(function (message) {
            expect(message === 'tibss-MFS-Name').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(8).getText();
        }).then(function (message) {
            expect(message === 'tibss-password').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(9).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0111", "", "IntfCICSA0065", true, "", false, "", false, "", false, "ConnEMSC0065", true, "0", "0", "0", "ConversionI0065", true, "ConversionO0065", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0001", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0002", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-service-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-MFS-Name");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-password");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._outputConversionRec("Conversion_O0065", true);
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Corresponding EMS properties will be removed.\n" +
                "Would you like to continue?").to.be.true;
        }).then(function () {
            globalPage.isWarningYes();
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
            globalCommons.waitForElementPresent(Page.eleRecOutputConversionInput);
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Conversion_O0065').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(1).getText();
        }).then(function (message) {
            expect(message === 'prop-M0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-M0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'prop-V0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'prop-V0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(5).getText();
        }).then(function (message) {
            expect(message === 'tibss-MFS-Name').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(6).getText();
        }).then(function (message) {
            expect(message === 'tibss-password').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(7).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(8).isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0112", "", "IntfCICSA0065", true, "", false, "", false, "", false, "ConnEMSC0065", true, "0", "0", "0", "ConversionI0065", true, "ConversionO0065", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0001", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0002", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-service-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-MFS-Name");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-password");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecOutputConversionInput);
        }).then(function () {
            Page.eleRecOutputConversionInput.clear();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Corresponding EMS properties will be removed.\n" +
                "Would you like to continue?").to.be.true;
        }).then(function () {
            globalPage.isWarningYes();
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
            globalCommons.waitForElementPresent(Page.eleRecOutputConversionInput);
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(1).getText();
        }).then(function (message) {
            expect(message === 'prop-M0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-M0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'prop-V0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'prop-V0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(5).getText();
        }).then(function (message) {
            expect(message === 'tibss-MFS-Name').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(6).getText();
        }).then(function (message) {
            expect(message === 'tibss-password').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(7).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(8).isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Test Recipe -> Reset Input Conversion, and then all the message type EMS properties will be cleared
    //
    it('Test Recipe -> Reset Input Conversion, and then all the message type EMS properties will be cleared', function () {
        Page.delRecYes("RecipeCE0113").then(function () {
            Page.delRecYes("RecipeCE0114");
        }).then(function () {
            Page.delRecYes("RecipeCE0115");
        }).then(function () {
            Page.delCvrYes("ConversionI0066");
        }).then(function () {
            Page.delCvrYes("ConversionO0066");
        }).then(function () {
            Page.delCvrYes("Conversion_I0066");
        }).then(function () {
            Page.delMsgYes("MessageD0060");
        }).then(function () {
            Page.delBufYes("BufferD0060");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0066");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0060");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0060");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0066", "", false, false, "EndpointEMSE0060");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0066");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0060");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0060");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0066", "", undefined, "", "EndpointCICSC0060");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0060", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0060", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0066", "MessageD0060", "BufferD0060", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0066", "MessageD0060", "BufferD0060", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion_I0066", "MessageD0060", "BufferD0060", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0113", "", "IntfCICSA0066", true, "", false, "", false, "", false, "ConnEMSC0066", true, "0", "0", "0", "ConversionI0066", true, "ConversionO0066", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0001", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0002", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-service-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-MFS-Name");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-password");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._inputConversionRec("Conversion_I0066");
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Corresponding EMS properties will be removed.\n" +
                "Would you like to continue?").to.be.true;
        }).then(function () {
            globalPage.isWarningNo();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecInputConversionInput);
        }).then(function () {
            return Page.eleRecInputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionI0066').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(1).getText();
        }).then(function (message) {
            expect(message === 'prop-B0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-B0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'prop-M0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'prop-M0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(5).getText();
        }).then(function (message) {
            expect(message === 'prop-V0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(6).getText();
        }).then(function (message) {
            expect(message === 'prop-V0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(7).getText();
        }).then(function (message) {
            expect(message === 'tibss-MFS-Name').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(8).getText();
        }).then(function (message) {
            expect(message === 'tibss-password').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(9).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0114", "", "IntfCICSA0066", true, "", false, "", false, "", false, "ConnEMSC0066", true, "0", "0", "0", "ConversionI0066", true, "ConversionO0066", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0001", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0002", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-service-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-MFS-Name");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-password");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._inputConversionRec("Conversion_I0066", true);
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Corresponding EMS properties will be removed.\n" +
                "Would you like to continue?").to.be.true;
        }).then(function () {
            globalPage.isWarningYes();
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
            globalCommons.waitForElementPresent(Page.eleRecInputConversionInput);
        }).then(function () {
            return Page.eleRecInputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Conversion_I0066').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(1).getText();
        }).then(function (message) {
            expect(message === 'prop-B0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-B0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'prop-V0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'prop-V0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(5).getText();
        }).then(function (message) {
            expect(message === 'tibss-MFS-Name').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(6).getText();
        }).then(function (message) {
            expect(message === 'tibss-password').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(7).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(8).isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0115", "", "IntfCICSA0066", true, "", false, "", false, "", false, "ConnEMSC0066", true, "0", "0", "0", "ConversionI0066", true, "ConversionO0066", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Buffer", "Reply", "prop-B0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0001", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0002", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Reply", "tibss-service-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Optional", "tibss-MFS-Name");
        }).then(function () {
            Page._addEmsPropertyRec("System", "Request-Required", "tibss-password");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecInputConversionInput);
        }).then(function () {
            Page.eleRecInputConversionInput.clear();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === "Corresponding EMS properties will be removed.\n" +
                "Would you like to continue?").to.be.true;
        }).then(function () {
            globalPage.isWarningYes();
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
            globalCommons.waitForElementPresent(Page.eleRecInputConversionInput);
        }).then(function () {
            return Page.eleRecInputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(1).getText();
        }).then(function (message) {
            expect(message === 'prop-B0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-B0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'prop-V0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'prop-V0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(5).getText();
        }).then(function (message) {
            expect(message === 'tibss-MFS-Name').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(6).getText();
        }).then(function (message) {
            expect(message === 'tibss-password').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(7).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(8).isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Test Recipe -> EMS Selector
    //
    it('Test Recipe -> EMS Selector', function () {
        Page.delRecYes("RecipeCE0116").then(function () {
            Page.delCvrYes("ConversionI0067");
        }).then(function () {
            Page.delCvrYes("ConversionO0067");
        }).then(function () {
            Page.delMsgYes("MessageD0061");
        }).then(function () {
            Page.delBufYes("BufferD0061");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSC0067");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSE0061");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSE0061");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSC0067", "", false, false, "EndpointEMSE0061");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSA0067");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSC0061");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSC0061");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSA0067", "", undefined, "", "EndpointCICSC0061");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageD0061", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferD0061", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0067", "MessageD0061", "BufferD0061", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0067", "MessageD0061", "BufferD0061", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0116", "", "IntfCICSA0067", true, "", false, "", false, "", false, "ConnEMSC0067", true, "0", "0", "0", "ConversionI0067", true, "ConversionO0067", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecEmsSelectorInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSelectorInput.clear().sendKeys("A");
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
            return Page.eleRecEmsSelectorInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSelectorInput.clear().sendKeys("b");
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
            return Page.eleRecEmsSelectorInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'b').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSelectorInput.clear().sendKeys("0123");
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
            return Page.eleRecEmsSelectorInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '0123').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSelectorInput.clear().sendKeys("@#$&");
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
            return Page.eleRecEmsSelectorInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '@#$&').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSelectorInput.clear().sendKeys("Sel1 >= 0");
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
            return Page.eleRecEmsSelectorInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'Sel1 >= 0').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSelectorInput.clear().sendKeys("AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????6666666666777777777788888888889999999999000000000011111111112222222222333333333344444");
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
            return Page.eleRecEmsSelectorValidateMsg.getText();
        }).then(function (message) {
            expect(message === '"AAAAAAAAAA...": the value is too long, must be at most 234 characters').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSelectorInput.clear().sendKeys("AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????666666666677777777778888888888999999999900000000001111111111222222222233333333334444");
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
            return Page.eleRecEmsSelectorInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????666666666677777777778888888888999999999900000000001111111111222222222233333333334444').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});