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
            Page.addRecWithCicsEms("RecipeCE0001", "", "IntfCICSA0001", true, "IntfCICSB0001", true, "ConnEMSC0001", true, "0", "0", "0", "ConversionI0001", true, "ConversionO0001", true);
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
            Page.addRecWithCicsEms("RecipeCE0002", "", "IntfCICSA0002", true, "IntfCICSB0002", true, "ConnEMSC0002", true, "0", "0", "0", "ConversionI0002", true, "ConversionO0002", true);
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
            Page.addRecWithCicsEms("RecipeCE0003", "AbCdEfG", "IntfCICSA0003", true, "IntfCICSB0003", true, "ConnEMSC0003", true, "111", "33", "1", "ConversionI0003", true, "ConversionO0003", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.updateRecWithCicsEms("RecipeCE0003", "HiJkLmN", "IntfCICSA0004", true, "IntfCICSB0004", true, "ConnEMSC0004", true, "222", "44", "2", "ConversionI0004", true, "ConversionO0004", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
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
            return Page.eleRecEmsDurableClientIdInput.getAttribute("value");
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
            Page.addRecWithCicsEms("RecipeCE0004", "AbCdEfG", "IntfCICSA0005", true, "IntfCICSB0005", true, "ConnEMSC0005", true, "111", "33", "1", "ConversionI0005", true, "ConversionO0005", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.cancelRecWithCicsEmsYes("RecipeCE0004", "HiJkLmN", "IntfCICSA0006", true, "IntfCICSB0006", true, "ConnEMSC0006", true, "222", "44", "2", "ConversionI0006", true, "ConversionO0006", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
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
            return Page.eleRecEmsDurableClientIdInput.getAttribute("value");
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
            Page.addRecWithCicsEms("RecipeCE0005", "AbCdEfG", "IntfCICSA0007", true, "IntfCICSB0007", true, "ConnEMSC0007", true, "111", "33", "1", "ConversionI0007", true, "ConversionO0007", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.cancelRecWithCicsEmsNo("RecipeCE0005", "HiJkLmN", "IntfCICSA0008", true, "IntfCICSB0008", true, "ConnEMSC0008", true, "222", "44", "2", "ConversionI0008", true, "ConversionO0008", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
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
            return Page.eleRecEmsDurableClientIdInput.getAttribute("value");
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
            Page.addRecWithCicsEms("RecipeCE0006", "AbCdEfG", "IntfCICSA0009", true, "IntfCICSB0009", true, "ConnEMSC0009", true, "111", "33", "1", "ConversionI0009", true, "ConversionO0009", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.resetRecWithCicsEms("RecipeCE0006", "HiJkLmN", "IntfCICSA0010", true, "IntfCICSB0010", true, "ConnEMSC0010", true, "222", "44", "2", "ConversionI0010", true, "ConversionO0010", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
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
            return Page.eleRecEmsDurableClientIdInput.getAttribute("value");
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
            Page.addRecWithCicsEms("RecipeCE0007", "AbCdEfG", "IntfCICSA0011", true, "IntfCICSB0011", true, "ConnEMSC0011", true, "111", "33", "1", "ConversionI0011", true, "ConversionO0011", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0007", "HiJkLmN", "IntfCICSA0012", true, "IntfCICSB0012", true, "ConnEMSC0012", true, "222", "44", "2", "ConversionI0012", true, "ConversionO0012", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
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
            return Page.eleRecEmsDurableClientIdInput.getAttribute("value");
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
            Page.addRecWithCicsEms("RecipeCE0008", "AbCdEfG", "IntfCICSA0013", true, "IntfCICSB0013", true, "ConnEMSC0013", true, "111", "33", "1", "ConversionI0013", true, "ConversionO0013", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsEms("RecipeCE0008", "HiJkLmN", "IntfCICSA0014", true, "IntfCICSB0014", true, "ConnEMSC0014", true, "222", "44", "2", "ConversionI0014", true, "ConversionO0014", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
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
            return Page.eleRecEmsDurableClientIdInput.getAttribute("value");
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
            Page.addRecWithCicsEms("RecipeCE0009", "", "IntfCICSA0015", true, "IntfCICSB0015", true, "ConnEMSC0015", true, "0", "0", "0", "ConversionI0015", true, "ConversionO0015", true);
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
            Page.addRecWithCicsEms("RecipeCE0010", "", "IntfCICSA0016", true, "IntfCICSB0016", true, "ConnEMSC0016", true, "0", "0", "0", "ConversionI0016", true, "ConversionO0016", true);
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
            definePage.delIntfCicsYes("IntfCICSB0017");
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
            definePage.addIntfCics("IntfCICSB0017", "", undefined, "", "EndpointCICSC0011");
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
            Page.addRecWithCicsEms("RecipeCE0011", "", "IntfCICSA0017", true, "IntfCICSB0017", true, "ConnEMSC0017", true, "0", "0", "0", "ConversionI0017", true, "ConversionO0017", true);
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
            return Page.eleRecEmsDurableClientIdInput.getAttribute("value");
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
        // }).then(function () {
        //     return Page.eleRecNameValidateMsg.getText();
        // }).then(function (message) {
        //     expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleRecIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A value is required').to.be.true;
        }).then(function () {
            return Page.eleRecConnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A value is required').to.be.true;
        // }).then(function () {
        //     return Page.eleRecEmsListentoDestValidateMsg.getText();
        // }).then(function (message) {
        //     expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // // Test field 'Recipe Details panel' -> 'Name'
    // //
    // it('Test field Recipe -> Name', function () {
    //     Page.delRecYes("RecipeCE0012_@#$_23333333333444444444").then(function () {
    //         Page.delRecYes("RecipeCE0013_@#$_23333333333444444444");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0018");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0012");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0012");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0018");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0012");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0012");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0018", "", false, false, "EndpointEMSD0012");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0012", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0012", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0018", "MessageB0012", "BufferB0012", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0012_@#$_23333333333444444444", "", "ConnEMSA0018", "ConversionA0018");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecNameInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'RecipeCE0012_@#$_23333333333444444444').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0013_@#$_233333333334444444444", "", "ConnEMSA0018", "ConversionA0018");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecNameInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'RecipeCE0013_@#$_23333333333444444444').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Description'
    // //
    // it('Test field Recipe -> Description', function () {
    //     Page.delRecYes("RecipeCE0014").then(function () {
    //         Page.delRecYes("RecipeCE0015");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0019");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0013");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0013");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0019");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0013");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0013");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0019", "", false, false, "EndpointEMSD0013");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0013", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0013", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0019", "MessageB0013", "BufferB0013", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", "ConnEMSA0019", "ConversionA0019");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDescInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111", "ConnEMSA0019", "ConversionA0019");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecDescValidateMsg);
    //     }).then(function () {
    //         return Page.eleRecDescValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecDescInput);
    //     }).then(function () {
    //         Page.eleRecDescInput.clear().sendKeys("Corrected");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Connection'
    // //
    // it('Test field Recipe -> Connection', function () {
    //     Page.delRecYes("RecipeCE0016").then(function () {
    //         Page.delCvrYes("ConversionA0020");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0014");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0014");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0020_@#$_2223333333333444444444");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0014");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0014");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0020_@#$_2223333333333444444444", "", false, false, "EndpointEMSD0014");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0014", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0014", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0020", "MessageB0014", "BufferB0014", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0016", "", "INVALID", "ConversionA0020");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecConnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Invalid Reference').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecConnInput.clear().sendKeys("ConnEMSA0020_@#$_2223333333333444444444");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecConnInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'ConnEMSA0020_@#$_2223333333333444444444').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Output Conversion'
    // //
    // it('Test field Recipe -> Output Conversion', function () {
    //     Page.delRecYes("RecipeCE0017").then(function () {
    //         Page.delCvrYes("ConversionA0021_@#$_3333333333444444444");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0015");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0015");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0021");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0015");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0015");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0021", "", false, false, "EndpointEMSD0015");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0015", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0015", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0021_@#$_3333333333444444444", "MessageB0015", "BufferB0015", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0017", "", "ConnEMSA0021", "INVALID");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputConversionValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Invalid Reference').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputConversionInput.clear().sendKeys("ConversionA0021_@#$_3333333333444444444");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputConversionInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'ConversionA0021_@#$_3333333333444444444').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Disable on Error (#)'
    // //
    // it('Test field Recipe -> Disable on Error (#)', function () {
    //     var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
    //     Page.delRecYes("RecipeCE0018").then(function () {
    //         Page.delCvrYes("ConversionA0022");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0016");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0016");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0022");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0016");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0016");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0022", "", false, false, "EndpointEMSD0016");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0016", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0016", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0022", "MessageB0016", "BufferB0016", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0018", "", "ConnEMSA0022", "ConversionA0022", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorNumSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorNumSpinner.clear().sendKeys("22");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorNumSpinner.clear().sendKeys("3333");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '3333').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorNumSpinner.clear().sendKeys("44444");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '44444').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorNumSpinner.clear().sendKeys("99999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99999').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorNumSpinner.clear().sendKeys("111111");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '11111').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Disable on Error (%)'
    // //
    // it('Test field Recipe -> Disable on Error (%)', function () {
    //     var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
    //     Page.delRecYes("RecipeCE0019").then(function () {
    //         Page.delCvrYes("ConversionA0023");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0017");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0017");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0023");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0017");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0017");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0023", "", false, false, "EndpointEMSD0017");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0017", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0017", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0023", "MessageB0017", "BufferB0017", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0019", "", "ConnEMSA0023", "ConversionA0023", "0", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorPercentSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorPercentSpinner.clear().sendKeys("22");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorPercentSpinner.clear().sendKeys("99");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorPercentSpinner.clear().sendKeys("100");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '100').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorPercentSpinner.clear().sendKeys("101");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '100').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecDisableOnErrorPercentSpinner.clear().sendKeys("999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '100').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Trace Level'
    // //
    // it('Test field Recipe -> Trace Level', function () {
    //     var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
    //     Page.delRecYes("RecipeCE0020").then(function () {
    //         Page.delCvrYes("ConversionA0024");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0018");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0018");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0024");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0018");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0018");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0024", "", false, false, "EndpointEMSD0018");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0018", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0018", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0024", "MessageB0018", "BufferB0018", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0020", "", "ConnEMSA0024", "ConversionA0024", "0", "0", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.clear().sendKeys("2");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.clear().sendKeys("3");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.clear().sendKeys("4");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.clear().sendKeys("5");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.clear().sendKeys("6");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.clear().sendKeys("9");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecTrclvlSpinner.clear().sendKeys("11");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Output Method'
    // //
    // it('Test field Recipe -> Output Method', function () {
    //     Page.delRecYes("RecipeCE0021").then(function () {
    //         Page.delRecYes("RecipeCE0022");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0023");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0025");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0019");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0019");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0025");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0019");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0019");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0025", "", false, false, "EndpointEMSD0019");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0019", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0019", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0025", "MessageB0019", "BufferB0019", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0021", "", "ConnEMSA0025", "ConversionA0025", "0", "0", "0", "Message");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMethodDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Message').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecOutputMethodDropdown);
    //     }).then(function () {
    //         Page.eleRecOutputMethodDropdown.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecOutputMethod01);
    //     }).then(function () {
    //         return Page.eleRecOutputMethod01.getText();
    //     }).then(function (message) {
    //         expect(message === 'Status').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMethod02.getText();
    //     }).then(function (message) {
    //         expect(message === 'Message').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMethod03.getText();
    //     }).then(function (message) {
    //         expect(message === 'Status and Message').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0022", "", "ConnEMSA0025", "ConversionA0025", "0", "0", "0", "Status");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMethodDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Status').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0023", "", "ConnEMSA0025", "ConversionA0025", "0", "0", "0", "Status and Message");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMethodDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Status and Message').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Service Key Locator Start'
    // //
    // it('Test field Recipe -> Service Key Locator Start', function () {
    //     var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
    //     Page.delRecYes("RecipeCE0024").then(function () {
    //         Page.delCvrYes("ConversionA0026");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0020");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0020");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0026");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0020");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0020");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0026", "", false, false, "EndpointEMSD0020");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0020", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0020", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0026", "MessageB0020", "BufferB0020", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0024", "", "ConnEMSA0026", "ConversionA0026", "0", "0", "0", "Message", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.clear().sendKeys("11111");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '11111').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.clear().sendKeys("222222");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '222222').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.clear().sendKeys("3333333");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '3333333').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.clear().sendKeys("4095936");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095936').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.clear().sendKeys("4095937");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095937').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.clear().sendKeys("4095938");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095937').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorStartSpinner.clear().sendKeys("333333333");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '3333333').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Service Key Locator Length'
    // // Related jiras: ZWUI-1094
    // //
    // it('Test field Recipe -> Service Key Locator Length', function () {
    //     Page.delRecYes("RecipeCE0025").then(function () {
    //         Page.delCvrYes("ConversionA0027");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0021");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0021");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0027");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0021");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0021");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0027", "", false, false, "EndpointEMSD0021");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0021", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0021", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0027", "MessageB0021", "BufferB0021", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0025", "", "ConnEMSA0027", "ConversionA0027", "0", "0", "0", "Message", "0", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorLengthInput.clear().sendKeys("abc");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorLengthValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Not a valid number').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorLengthInput.clear().sendKeys("ABC");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorLengthValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Not a valid number').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorLengthInput.clear().sendKeys("64");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorLengthValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === '64 is invalid, must be equal to or less than 63').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorLengthInput.clear().sendKeys("77777");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorLengthValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === '77777 is invalid, must be equal to or less than 63').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorLengthInput.clear().sendKeys("999999999999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorLengthValidateMsg.getText();
    //         // }).then(function (message) {
    //         //     expect(message === '999999999999 is invalid, must be equal to or less than 63').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorLengthInput.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorLengthInput.clear().sendKeys("22");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorLengthInput.clear().sendKeys("55");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '55').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorLengthInput.clear().sendKeys("63");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '63').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Service Key Locator Value'
    // //
    // it('Test field Recipe -> Service Key Locator Value', function () {
    //     Page.delRecYes("RecipeCE0026").then(function () {
    //         Page.delCvrYes("ConversionA0028");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0022");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0022");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0028");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0022");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0022");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0028", "", false, false, "EndpointEMSD0022");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0022", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0022", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0028", "MessageB0022", "BufferB0022", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0026", "", "ConnEMSA0028", "ConversionA0028", "0", "0", "0", "Message", "0", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorValueInput.clear().sendKeys("a0!@B1#$c2%&D3*?");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'a0!@B1#$c2%&D3*?').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorValueInput.clear().sendKeys("D3!@c2#$B1%&a0*?");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'D3!@c2#$B1%&a0*?').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorValueInput.clear().sendKeys("3D!@2c#$1B%&0a*?4");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '3D!@2c#$1B%&0a*?4').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorValueInput.clear().sendKeys("!@#$3D2c1B0a*?%&");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '!@#$3D2c1B0a*?%&').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorValueInput.clear().sendKeys("!@#$3D2c1B0a*?%&22223333333333444444444455555555556666666666777");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '!@#$3D2c1B0a*?%&22223333333333444444444455555555556666666666777').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecServiceKeyLocatorValueInput.clear().sendKeys("!@#$3D2c1B0a*?%&222233333333334444444444555555555566666666667777");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '!@#$3D2c1B0a*?%&22223333333333444444444455555555556666666666777').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Requeue on Error'
    // //
    // it('Test field Recipe -> Requeue on Error', function () {
    //     Page.delRecYes("RecipeCE0027").then(function () {
    //         Page.delCvrYes("ConversionA0029");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0023");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0023");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0029");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0023");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0023");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0029", "", false, false, "EndpointEMSD0023");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0023", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0023", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0029", "MessageB0023", "BufferB0023", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0027", "", "ConnEMSA0029", "ConversionA0029", "0", "0", "0", "Message", "0", "0", "");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRequeueOnErrorCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecRequeueOnErrorCheck);
    //     }).then(function () {
    //         Page.eleRecRequeueOnErrorCheck.click();
    //     }).then(function () {
    //         return Page.eleRecRequeueOnErrorCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRequeueOnErrorCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Publish Destination, Publish Destination (Secondary), Reply-to Destination, Error Message Destination'
    // //
    // it('Test field Recipe -> Publish Destination, Publish Destination (Secondary), Reply-to Destination, Error Message Destination', function () {
    //     Page.delRecYes("RecipeCE0028").then(function () {
    //         Page.delCvrYes("ConversionA0030");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0024");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0024");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0030");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0024");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0024");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0030", "", false, false, "EndpointEMSD0024");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0024", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0024", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0030", "MessageB0024", "BufferB0024", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0028", "", "ConnEMSA0030", "ConversionA0030");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.rec.publishDest").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "").to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsPublishDestInput.clear().sendKeys("tibss.rec.publishDest._3D!@2c#$1B%&0a*?-55555555556666666666777");
    //     }).then(function () {
    //         Page.eleRecEmsPublishDest2Input.clear().sendKeys("tibss.rec.publishDest2._3D!@2c#$1B%&0a*?-5555555556666666666777");
    //     }).then(function () {
    //         Page.eleRecEmsReplyDestInput.clear().sendKeys("tibss.rec.replyToDest._3D!@2c#$1B%&0a*?-55555555556666666666777");
    //     }).then(function () {
    //         Page.eleRecEmsErrorMsgDestInput.clear().sendKeys("tibss.rec.errorMsgDest._3D!@2c#$1B%&0a*?-5555555556666666666777");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.rec.publishDest._3D!@2c#$1B%&0a*?-55555555556666666666777").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.rec.publishDest2._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.rec.replyToDest._3D!@2c#$1B%&0a*?-55555555556666666666777").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.rec.errorMsgDest._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsPublishDestInput.clear().sendKeys("tibss.rec.publishDest3333333334444444444555555555566666666667777");
    //     }).then(function () {
    //         Page.eleRecEmsPublishDest2Input.clear().sendKeys("tibss.rec.publishDest2333333334444444444555555555566666666667777");
    //     }).then(function () {
    //         Page.eleRecEmsReplyDestInput.clear().sendKeys("tibss.rec.replyToDest3333333334444444444555555555566666666667777");
    //     }).then(function () {
    //         Page.eleRecEmsErrorMsgDestInput.clear().sendKeys("tibss.rec.errorMsgDest333333334444444444555555555566666666667777");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.rec.publishDest333333333444444444455555555556666666666777").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.rec.publishDest233333333444444444455555555556666666666777").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.rec.replyToDest333333333444444444455555555556666666666777").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.rec.errorMsgDest33333333444444444455555555556666666666777").to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Type of Publish Destination, Publish Destination (Secondary), Reply-to Destination, Error Message Destination'
    // //
    // it('Test field Recipe -> Type of Publish Destination, Publish Destination (Secondary), Reply-to Destination, Error Message Destination', function () {
    //     Page.delRecYes("RecipeCE0029").then(function () {
    //         Page.delRecYes("RecipeCE0030");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0031");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0032");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0033");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0034");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0035");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0036");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0031");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0025");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0025");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0031");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0025");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0025");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0031", "", false, false, "EndpointEMSD0025");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0025", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0025", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0031", "MessageB0025", "BufferB0025", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0029", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0030", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0031", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "TOPIC");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0032", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "TOPIC", "", "QUEUE");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0033", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "TOPIC", "0", "0", "", "", "QUEUE", "", "QUEUE");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0034", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "TOPIC", "", "TOPIC");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0035", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "TOPIC", "0", "0", "", "", "QUEUE", "", "TOPIC");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0036", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "QUEUE");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Dynamic Destination suffix Length'
    // //
    // it('Test field Recipe -> Dynamic Destination suffix Length', function () {
    //     var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
    //     Page.delRecYes("RecipeCE0037").then(function () {
    //         Page.delCvrYes("ConversionA0032");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0026");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0026");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0032");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0026");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0026");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0032", "", false, false, "EndpointEMSD0026");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0026", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0026", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0032", "MessageB0026", "BufferB0026", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0037", "", "ConnEMSA0032", "ConversionA0032");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixLengthSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixLengthSpinner.clear().sendKeys("22");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixLengthSpinner.clear().sendKeys("100");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '100').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixLengthSpinner.clear().sendKeys("127");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '127').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixLengthSpinner.clear().sendKeys("128");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '127').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixLengthSpinner.clear().sendKeys("999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '127').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Dynamic Destination suffix Start'
    // //
    // it('Test field Recipe -> Dynamic Destination suffix Start', function () {
    //     var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
    //     Page.delRecYes("RecipeCE0038").then(function () {
    //         Page.delCvrYes("ConversionA0033");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0027");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0027");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0033");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0027");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0027");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0033", "", false, false, "EndpointEMSD0027");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0027", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0027", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0033", "MessageB0027", "BufferB0027", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0038", "", "ConnEMSA0033", "ConversionA0033");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.clear().sendKeys("2222");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '2222').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.clear().sendKeys("33333");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '33333').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.clear().sendKeys("444444");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '444444').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.clear().sendKeys("4095872");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095872').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.clear().sendKeys("4095873");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095873').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.clear().sendKeys("4095874");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095873').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecEmsDynamicDestSuffixStartSpinner.clear().sendKeys("9999999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095873').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'SMSL Mode, Delivery Mode'
    // //
    // it('Test field Recipe -> SMSL Mode, Delivery Mode', function () {
    //     Page.delRecYes("RecipeCE0039").then(function () {
    //         Page.delRecYes("RecipeCE0040");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0041");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0042");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0043");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0044");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0045");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0046");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0047");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0048");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0049");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0050");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0034");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0028");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0028");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0034");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0028");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0028");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0034", "", false, false, "EndpointEMSD0028");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0028", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0028", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0034", "MessageB0028", "BufferB0028", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0039", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsSmslModeDropdown);
    //     }).then(function () {
    //         Page.eleRecEmsSmslModeDropdown.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsSmslMode01);
    //     }).then(function () {
    //         return Page.eleRecEmsSmslMode01.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslMode02.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsDeliveryModeDropdown);
    //     }).then(function () {
    //         Page.eleRecEmsDeliveryModeDropdown.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsDeliveryMode01);
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryMode01.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryMode02.getText();
    //     }).then(function (message) {
    //         expect(message === 'Non-Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryMode03.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0040", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC", "Reliable No-Ack", "Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0041", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", "Reliable No-Ack", "Non-Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Non-Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0042", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC", "Reliable No-Ack", "Non-Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Non-Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0043", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", "Reliable No-Ack", "Reliable");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0044", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC", "Reliable No-Ack", "Reliable");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0045", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", "Guaranteed All", "Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0046", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC", "Guaranteed All", "Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0047", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", "Guaranteed All", "Non-Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0048", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC", "Guaranteed All", "Non-Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0049", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", "Guaranteed All", "Reliable");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0050", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC", "Guaranteed All", "Reliable");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Priority & Value'
    // //
    // it('Test field Recipe -> Priority & Value', function () {
    //     var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
    //     Page.delRecYes("RecipeCE0051").then(function () {
    //         Page.delRecYes("RecipeCE0052");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0035");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0029");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0029");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0035");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0029");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0029");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0035", "", false, false, "EndpointEMSD0029");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0029", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0029", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0035", "MessageB0029", "BufferB0029", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0051", "", "ConnEMSA0035", "ConversionA0035", "0", "0", "0", "Message", "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.clear().sendKeys("2");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.clear().sendKeys("5");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.clear().sendKeys("8");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '8').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.clear().sendKeys("9");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '9').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.clear().sendKeys("10");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0052", "", "ConnEMSA0035", "ConversionA0035", "0", "0", "0", "Message", "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, true, "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.clear().sendKeys("3");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.clear().sendKeys("4");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.clear().sendKeys("7");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '7').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.clear().sendKeys("9");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '9').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgPriorityValueSpinner.clear().sendKeys("67");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '6').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Expiration, Value & Unit'
    // //
    // it('Test field Recipe -> Expiration, Value & Unit', function () {
    //     var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
    //     Page.delRecYes("RecipeCE0053").then(function () {
    //         Page.delRecYes("RecipeCE0054");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0055");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0056");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0036");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0030");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0030");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0036");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0030");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0030");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0036", "", false, false, "EndpointEMSD0030");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0030", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0030", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0036", "MessageB0030", "BufferB0030", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0053", "", "ConnEMSA0036", "ConversionA0036", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', "Seconds");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Seconds').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecOutputMsgExpirationUnitDropdown);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationUnitDropdown.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecOutputMsgExpirationUnit01);
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationUnit01.getText();
    //     }).then(function (message) {
    //         expect(message === 'Seconds').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationUnit02.getText();
    //     }).then(function (message) {
    //         expect(message === 'Minutes').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationUnit03.getText();
    //     }).then(function (message) {
    //         expect(message === 'Hours').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationUnit04.getText();
    //     }).then(function (message) {
    //         expect(message === 'Days').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("222");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("5555");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5555').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("99998");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99998').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("99999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99999').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("100000");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '10000').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("123456");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '12345').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0054", "", "ConnEMSA0036", "ConversionA0036", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", true, '0', "Minutes");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Minutes').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("222");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("5555");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5555').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("99998");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99998').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("99999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99999').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("100000");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '10000').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("123456");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '12345').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0055", "", "ConnEMSA0036", "ConversionA0036", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', "Hours");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Hours').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("222");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("5555");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5555').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("99998");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99998').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("99999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99999').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("100000");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '10000').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("123456");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '12345').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0056", "", "ConnEMSA0036", "ConversionA0036", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", true, '0', "Days");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Days').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("222");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("5555");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5555').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("99998");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99998').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("99999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99999').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("100000");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '10000').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleRecOutputMsgExpirationValueSpinner.clear().sendKeys("123456");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '12345').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Compression'
    // //
    // it('Test field Recipe -> Compression', function () {
    //     Page.delRecYes("RecipeCE0057").then(function () {
    //         Page.delRecYes("RecipeCE0058");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0037");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0031");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0031");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0037");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0031");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0031");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0037", "", false, false, "EndpointEMSD0031");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0031", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0031", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0037", "MessageB0031", "BufferB0031", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0057", "", "ConnEMSA0037", "ConversionA0037", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, false);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgCompressionCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0058", "", "ConnEMSA0037", "ConversionA0037", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgCompressionCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Preserve'
    // //
    // it('Test field Recipe -> Preserve', function () {
    //     Page.delRecYes("RecipeCE0059").then(function () {
    //         Page.delRecYes("RecipeCE0060");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0038");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0032");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0032");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0038");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0032");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0032");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0038", "", false, false, "EndpointEMSD0032");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0032", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0032", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0038", "MessageB0032", "BufferB0032", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0059", "", "ConnEMSA0038", "ConversionA0038", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, false);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPreserveCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0060", "", "ConnEMSA0038", "ConversionA0038", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgPreserveCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Body Trace'
    // //
    // it('Test field Recipe -> Body Trace', function () {
    //     Page.delRecYes("RecipeCE0061").then(function () {
    //         Page.delRecYes("RecipeCE0062");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0039");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0033");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0033");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0039");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0033");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0033");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0039", "", false, false, "EndpointEMSD0033");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0033", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0033", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0039", "MessageB0033", "BufferB0033", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0061", "", "ConnEMSA0039", "ConversionA0039", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, false);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgBodyTraceCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0062", "", "ConnEMSA0039", "ConversionA0039", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgBodyTraceCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Message Type'
    // //
    // it('Test field Recipe -> Message Type', function () {
    //     Page.delRecYes("RecipeCE0063").then(function () {
    //         Page.delRecYes("RecipeCE0064");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0065");
    //     }).then(function () {
    //         Page.delRecYes("RecipeCE0066");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0040");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0034");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0034");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0040");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0034");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0034");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0040", "", false, false, "EndpointEMSD0034");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0034", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0034", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0040", "MessageB0034", "BufferB0034", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0063", "", "ConnEMSA0040", "ConversionA0040", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, undefined, "Bytes");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Bytes').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecOutputMsgMsgTypeDropdown);
    //     }).then(function () {
    //         Page.eleRecOutputMsgMsgTypeDropdown.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecOutputMsgMsgType01);
    //     }).then(function () {
    //         return Page.eleRecOutputMsgMsgType01.getText();
    //     }).then(function (message) {
    //         expect(message === 'Bytes').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgMsgType02.getText();
    //     }).then(function (message) {
    //         expect(message === 'Map').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgMsgType03.getText();
    //     }).then(function (message) {
    //         expect(message === 'Stream').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgMsgType04.getText();
    //     }).then(function (message) {
    //         expect(message === 'Text').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0064", "", "ConnEMSA0040", "ConversionA0040", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, undefined, "Map");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Map').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0065", "", "ConnEMSA0040", "ConversionA0040", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, undefined, "Stream");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Stream').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0066", "", "ConnEMSA0040", "ConversionA0040", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, undefined, "Text");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Text').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'EMS Properties Type'
    // //
    // it('Test Recipe -> EMS Properties Type', function () {
    //     Page.delRecYes("RecipeCE0067").then(function () {
    //         Page.delCvrYes("ConversionA0041");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0035");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0035");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0041");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0035");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0035");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0041", "", false, false, "EndpointEMSD0035");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0035", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0035", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0041", "MessageB0035", "BufferB0035", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0067", "", "ConnEMSA0041", "ConversionA0041", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, undefined, "Bytes");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropExtension.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleRecConnectionExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropExtension);
    //     }).then(function () {
    //         return Page.eleRecEmsPropAddButton.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleRecEmsPropExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsPropAddButton);
    //     }).then(function () {
    //         Page.eleRecEmsPropAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropTypeDropdown);
    //     }).then(function () {
    //         return Page.eleRecEmsPropTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'System').to.be.true;
    //     }).then(function () {
    //         Page.eleRecEmsPropTypeDropdown.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropType01);
    //     }).then(function () {
    //         return Page.eleRecEmsPropType01.getText();
    //     }).then(function (message) {
    //         expect(message === 'Value').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropType02.getText();
    //     }).then(function (message) {
    //         expect(message === 'Buffer').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropType03.getText();
    //     }).then(function (message) {
    //         expect(message === 'System').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V01", "Property_Value01");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B01", "bufField0002");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropType(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'Buffer').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropType(2).getText();
    //     }).then(function (message) {
    //         expect(message === 'Value').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropType(3).getText();
    //     }).then(function (message) {
    //         expect(message === 'System').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'EMS Properties Name'
    // //
    // it('Test Recipe -> EMS Properties Name', function () {
    //     Page.delRecYes("RecipeCE0068").then(function () {
    //         Page.delRecYes("RecipeCE0069");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0042");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0036");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0036");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0042");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0036");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0036");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0042", "", false, false, "EndpointEMSD0036");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0036", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0036", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0042", "MessageB0036", "BufferB0036", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0068", "", "ConnEMSA0042", "ConversionA0042");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "000", "Property_Value01");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "@", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-envelope");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "d0ABc", "Property_Value02");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "aaaaa", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-ss-id");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "#", "Property_Value03");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "231", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-service-id");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "ABC", "Property_Value04");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "&", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-BES");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "aBC", "Property_Value05");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "ddd", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop@#&000001222222233333333334", "Property_Value06");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "$&@#!%*Field22222222333333333344", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "uvw", "Property_Value07");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "XYZ", "bufField0001");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(1).getText();
    //     }).then(function (message) {
    //         expect(message === '#').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(2).getText();
    //     }).then(function (message) {
    //         expect(message === '$&@#!%*Field2222222233333333334').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(3).getText();
    //     }).then(function (message) {
    //         expect(message === '&').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(4).getText();
    //     }).then(function (message) {
    //         expect(message === '000').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(5).getText();
    //     }).then(function (message) {
    //         expect(message === '231').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(6).getText();
    //     }).then(function (message) {
    //         expect(message === '@').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(7).getText();
    //     }).then(function (message) {
    //         expect(message === 'aaaaa').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(8).getText();
    //     }).then(function (message) {
    //         expect(message === 'ABC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(9).getText();
    //     }).then(function (message) {
    //         expect(message === 'aBC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(10).getText();
    //     }).then(function (message) {
    //         expect(message === 'd0ABc').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(11).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'ddd').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(12).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'prop@#&000001222222233333333334').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(13).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-BES').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(14).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-envelope').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(15).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-service-id').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(16).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-ss-id').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(17).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'uvw').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(18).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'XYZ').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0069", "", "ConnEMSA0042", "ConversionA0042");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop01", "Property_Value01");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop02", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-envelope");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsPropAddButton);
    //     }).then(function () {
    //         Page.eleRecEmsPropAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropTypeDropdown);
    //     }).then(function () {
    //         return Page.eleRecEmsPropTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'System').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropNameDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'tibss-BES').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "", "Property_Value");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleRecEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Please enter a non-empty property name').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleRecEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "", "bufField0002");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleRecEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Please enter a non-empty property name').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleRecEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop01", "Property_Value");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleRecEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Duplicate row').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleRecEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop02", "Property_Value");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleRecEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Duplicate row').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleRecEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "tibss-envelope", "Property_Value");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleRecEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Duplicate row').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleRecEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop01", "bufField0002");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleRecEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Duplicate row').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleRecEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop02", "bufField0002");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleRecEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Duplicate row').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleRecEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "tibss-envelope", "bufField0002");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleRecEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Duplicate row').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleRecEmsPropDelButton.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'EMS Properties Value'
    // //
    // it('Test Recipe -> EMS Properties Value', function () {
    //     Page.delRecYes("RecipeCE0070").then(function () {
    //         Page.delRecYes("RecipeCE0071");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0043");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0037");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0037");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0043");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0037");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0037");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0043", "", false, false, "EndpointEMSD0037");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0037", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0037", "", undefined, "bufField00012222222233333333334444444444555555555566666666667777777777888888888", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField00032222222233333333334444444444555555555566666666667777777777888888888", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0043", "MessageB0037", "BufferB0037", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField00032222222233333333334444444444555555555566666666667777777777888888888", "msgField0003", "bufField00012222222233333333334444444444555555555566666666667777777777888888888", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0070", "", "ConnEMSA0043", "ConversionA0043");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B001", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B002", "bufField00012222222233333333334444444444555555555566666666667777777777888888888");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B003", "bufField00032222222233333333334444444444555555555566666666667777777777888888888");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B004", "bufField00012222222233333333334444444444555555555566666666667777777777888888888");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V001", "a");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V002", "B");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V003", "1");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V004", "@#$&aB1");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V005", "@#$&aB1");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V006", "!@#$%^&*?/2222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000111111111122222222223333333333444444444455555555556666");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V007", "!@#$%^&*?/22222222223333333333444444444455555555556666666666777777777788888888889999999999000000000011111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-BES");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-envelope");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-service-id");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-ss-id");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'bufField0002').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(2).getText();
    //     }).then(function (message) {
    //         expect(message === 'bufField00012222222233333333334444444444555555555566666666667777777777888888888').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(3).getText();
    //     }).then(function (message) {
    //         expect(message === 'bufField00032222222233333333334444444444555555555566666666667777777777888888888').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(4).getText();
    //     }).then(function (message) {
    //         expect(message === 'bufField00012222222233333333334444444444555555555566666666667777777777888888888').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(5).getText();
    //     }).then(function (message) {
    //         expect(message === 'a').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(6).getText();
    //     }).then(function (message) {
    //         expect(message === 'B').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(7).getText();
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(8).getText();
    //     }).then(function (message) {
    //         expect(message === '@#$&aB1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(9).getText();
    //     }).then(function (message) {
    //         expect(message === '@#$&aB1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(10).getText();
    //     }).then(function (message) {
    //         expect(message === '!@#$%^&*?/2222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000111111111122222222223333333333444444444455555555556666').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(11).getText();
    //     }).then(function (message) {
    //         expect(message === '!@#$%^&*?/2222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000111111111122222222223333333333444444444455555555556666').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(12).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(13).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(14).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropValue(15).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0071", "", "ConnEMSA0043", "ConversionA0043");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop01", "Property_Value01");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop02", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-envelope");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsPropAddButton);
    //     }).then(function () {
    //         Page.eleRecEmsPropAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropTypeDropdown);
    //     }).then(function () {
    //         return Page.eleRecEmsPropTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'System').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropNameDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'tibss-BES').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropSysValueInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop03", "");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleRecEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'For type "Value", please enter a non-empty value').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleRecEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop04", "");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleRecEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'For type "Buffer", please pick a buffer field').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropBufValueInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleRecEmsPropDelButton.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     });
    // });
    //
    // // Test Recipe -> Add 204 EMS Properties for a recipe
    // //
    // it('Test Recipe -> Add 204 EMS Properties for a recipe', function () {
    //     Page.delRecYes("RecipeCE0072").then(function () {
    //         Page.delCvrYes("ConversionA0044");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0038");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0038");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0044");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0038");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0038");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0044", "", false, false, "EndpointEMSD0038");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0038", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0038", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0044", "MessageB0038", "BufferB0038", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0072", "", "ConnEMSA0044", "ConversionA0044");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0001", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0002", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0003", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0004", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0005", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0006", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0007", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0008", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0009", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0010", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0011", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0012", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0013", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0014", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0015", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0016", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0017", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0018", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0019", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0020", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0021", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0022", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0023", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0024", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0025", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0026", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0027", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0028", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0029", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0030", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0031", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0032", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0033", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0034", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0035", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0036", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0037", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0038", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0039", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0040", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0041", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0042", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0043", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0044", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0045", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0046", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0047", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0048", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0049", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0050", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0051", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0052", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0053", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0054", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0055", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0056", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0057", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0058", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0059", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0060", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0061", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0062", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0063", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0064", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0065", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0066", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0067", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0068", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0069", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0070", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0071", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0072", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0073", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0074", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0075", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0076", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0077", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0078", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0079", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0080", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0081", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0082", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0083", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0084", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0085", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0086", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0087", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0088", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0089", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0090", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0091", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0092", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0093", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0094", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0095", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0096", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0097", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0098", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0099", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0100", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0101", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0102", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0103", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0104", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0105", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0106", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0107", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0108", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0109", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0110", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0111", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0112", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0113", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0114", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0115", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0116", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0117", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0118", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0119", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0120", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0121", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0122", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0123", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0124", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0125", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0126", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0127", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0128", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0129", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0130", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0131", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0132", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0133", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0134", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0135", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0136", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0137", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0138", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0139", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0140", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0141", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0142", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0143", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0144", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0145", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0146", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0147", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0148", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0149", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0150", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0151", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0152", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0153", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0154", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0155", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0156", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0157", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0158", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0159", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0160", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0161", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0162", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0163", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0164", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0165", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0166", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0167", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0168", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0169", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0170", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0171", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0172", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0173", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0174", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0175", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0176", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0177", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0178", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0179", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0180", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0181", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0182", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0183", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0184", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0185", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0186", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0187", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0188", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0189", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0190", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0191", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0192", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0193", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0194", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0195", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0196", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0197", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0198", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0199", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0200", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-BES");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-envelope");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-service-id");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-ss-id");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0001').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(50).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'prop-B0050').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(150).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'prop-V0150').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(200).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'prop-V0200').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(204).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-ss-id').to.be.true;
    //     });
    // });
    //
    // // Test Recipe -> Delete several EMS Properties
    // //
    // it('Test Recipe -> Delete several EMS Properties', function () {
    //     Page.delRecYes("RecipeCE0073").then(function () {
    //         Page.delCvrYes("ConversionA0045");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0039");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0039");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0045");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0039");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0039");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0045", "", false, false, "EndpointEMSD0039");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0039", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0039", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0045", "MessageB0039", "BufferB0039", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0073", "", "ConnEMSA0045", "ConversionA0045");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0001", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0002", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0003", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0004", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0005", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0001", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0002", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0003", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0004", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0005", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-BES");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-envelope");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-service-id");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-ss-id");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._delEmsPropertyRec("tibss-BES");
    //     }).then(function () {
    //         Page._delEmsPropertyRec("tibss-ss-id");
    //     }).then(function () {
    //         Page._delEmsPropertyRec("prop-B0001");
    //     }).then(function () {
    //         Page._delEmsPropertyRec("prop-V0004");
    //     }).then(function () {
    //         Page._delEmsPropertyRec("prop-V0002");
    //     }).then(function () {
    //         Page._delEmsPropertyRec("prop-B0003");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0002').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(2).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(3).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(4).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0001').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(5).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0003').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(6).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(7).getText();
    //     }).then(function (message) {
    //         expect(message === 'tibss-envelope').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(8).getText();
    //     }).then(function (message) {
    //         expect(message === 'tibss-service-id').to.be.true;
    //     });
    // });
    //
    // // Test Recipe -> Replicate several EMS Properties
    // //
    // it('Test Recipe -> Replicate several EMS Properties', function () {
    //     Page.delRecYes("RecipeCE0074").then(function () {
    //         Page.delCvrYes("ConversionA0046");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0040");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0040");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0046");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0040");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0040");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0046", "", false, false, "EndpointEMSD0040");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0040", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0040", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0046", "MessageB0040", "BufferB0040", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0074", "", "ConnEMSA0046", "ConversionA0046");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0001", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0002", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0003", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0001", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0002", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0003", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-BES");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-service-id");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._replicateEmsPropertyRec("prop-V0001", "prop-V0004");
    //     }).then(function () {
    //         Page._replicateEmsPropertyRec("prop-B0003", "prop-B0004");
    //     }).then(function () {
    //         Page._replicateEmsPropertyRec("tibss-BES", "tibss-ss-id");
    //     }).then(function () {
    //         Page._replicateEmsPropertyRec("prop-V0002", "prop-V0005");
    //     }).then(function () {
    //         Page._replicateEmsPropertyRec("prop-B0001", "prop-B0005");
    //     }).then(function () {
    //         Page._replicateEmsPropertyRec("tibss-BES", "tibss-envelope");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0001').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(2).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0002').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(3).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0003').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(4).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(5).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(6).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0001').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(7).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0002').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(8).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0003').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(9).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(10).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(11).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-BES').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(12).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-envelope').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(13).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-service-id').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(14).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-ss-id').to.be.true;
    //     });
    // });
    //
    // // Test Recipe -> Reset Output Conversion, and then all the buffer type EMS properties will be cleared
    // //
    // it('Test Recipe -> Reset Output Conversion, and then all the buffer type EMS properties will be cleared', function () {
    //     Page.delRecYes("RecipeCE0075").then(function () {
    //         Page.delRecYes("RecipeCE0076");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0047");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0048");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0041");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0041");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0047");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0041");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0041");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0047", "", false, false, "EndpointEMSD0041");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0041", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0041", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0047", "MessageB0041", "BufferB0041", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0048", "MessageB0041", "BufferB0041", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0075", "", "ConnEMSA0047", "ConversionA0047");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0001", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0002", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0001", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0002", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-BES");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-service-id");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page._outputConversionRec("ConversionA0048");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
    //     }).then(function () {
    //         return globalPage.eleWarningInfo.getText();
    //     }).then(function (message) {
    //         expect(message === "Corresponding EMS properties will be removed.\n" +
    //             "Would you like to continue?").to.be.true;
    //     }).then(function () {
    //         globalPage.isWarningNo();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecOutputConversionInput);
    //     }).then(function () {
    //         return Page.eleRecOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionA0047').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0001').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(2).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0002').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(3).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0001').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(4).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0002').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(5).getText();
    //     }).then(function (message) {
    //         expect(message === 'tibss-BES').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(6).getText();
    //     }).then(function (message) {
    //         expect(message === 'tibss-service-id').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsEms("RecipeCE0076", "", "ConnEMSA0047", "ConversionA0047");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0001", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Buffer", "prop-B0002", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0001", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("Value", "prop-V0002", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-BES");
    //     }).then(function () {
    //         Page._addEmsPropertyRec("System", "tibss-service-id");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page._outputConversionRec("ConversionA0048");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
    //     }).then(function () {
    //         return globalPage.eleWarningInfo.getText();
    //     }).then(function (message) {
    //         expect(message === "Corresponding EMS properties will be removed.\n" +
    //             "Would you like to continue?").to.be.true;
    //     }).then(function () {
    //         globalPage.isWarningYes();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecOutputConversionInput);
    //     }).then(function () {
    //         return Page.eleRecOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionA0048').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0001').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(2).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0002').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(3).getText();
    //     }).then(function (message) {
    //         expect(message === 'tibss-BES').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(4).getText();
    //     }).then(function (message) {
    //         expect(message === 'tibss-service-id').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecEmsPropName(5).isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     });
    // });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});