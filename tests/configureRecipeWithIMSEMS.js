/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var configurePage = require('../pageObject/configurePage.js');
var DefinePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.6.5 Configure Recipe With IMS & EMS Page', function () {
    var Page = new configurePage();
    var definePage = new DefinePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleConfigureMenu.click();
    });

    // Add a Recipe with IMS Interface & EMS Connection successfully.
    //
    it('Add a Recipe with IMS Interface & EMS Connection successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delRecYes("RecipeIE0001");
        }).then(function () {
            Page.delCvrYes("ConversionI0201");
        }).then(function () {
            Page.delCvrYes("ConversionO0201");
        }).then(function () {
            Page.delMsgYes("MessageF0001");
        }).then(function () {
            Page.delBufYes("BufferF0001");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0001");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0001");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0001", "", false, false, "EndpointEMSF0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0001");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0001");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0001");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0001");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0001");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0001", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0001", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0001", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0001", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0001", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0001", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0201", "MessageF0001", "BufferF0001", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0201", "MessageF0001", "BufferF0001", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0001", "", "IntfIMSA0001", true, "IntfIMSB0001", true, "IntfIMSC0001", true, "IntfIMSD0001", true, "ConnEMSD0001", true, "0", "0", "0", "ConversionI0201", true, "ConversionO0201", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a Recipe with IMS Interface & EMS Connection successfully, then replicate it.
    //
    it('Add a Recipe with IMS Interface & EMS Connection, then replicate it successfully', function () {
        Page.delRecYes("RecipeIE0002-copy").then(function () {
            Page.delRecYes("RecipeIE0002");
        }).then(function () {
            Page.delCvrYes("ConversionI0202");
        }).then(function () {
            Page.delCvrYes("ConversionO0202");
        }).then(function () {
            Page.delMsgYes("MessageF0002");
        }).then(function () {
            Page.delBufYes("BufferF0002");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0002");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0002");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0002", "", false, false, "EndpointEMSF0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0002");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0002");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0002");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0002");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0002");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0002", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0002", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0002", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0002", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0002", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0002", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0202", "MessageF0002", "BufferF0002", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0202", "MessageF0002", "BufferF0002", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0002", "", "IntfIMSA0002", true, "IntfIMSB0002", true, "IntfIMSC0002", true, "IntfIMSD0002", true, "ConnEMSD0002", true, "0", "0", "0", "ConversionI0202", true, "ConversionO0202", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.replicateRec("RecipeIE0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RecipeIE0002-copy').to.be.true;
        });
    });

    // Add a Recipe with IMS Interface & EMS Connection successfully, then update it.
    //
    it('Add a Recipe with IMS Interface & EMS Connection, then update it successfully', function () {
        Page.delRecYes("RecipeIE0003").then(function () {
            Page.delCvrYes("ConversionI0203");
        }).then(function () {
            Page.delCvrYes("ConversionI0204");
        }).then(function () {
            Page.delCvrYes("ConversionO0203");
        }).then(function () {
            Page.delCvrYes("ConversionO0204");
        }).then(function () {
            Page.delMsgYes("MessageF0003");
        }).then(function () {
            Page.delBufYes("BufferF0003");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0003");
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0004");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0003");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0003", "", false, false, "EndpointEMSF0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0004", "", false, false, "EndpointEMSF0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0003");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0004");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0003");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0004");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0003");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0004");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0003");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0004");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0003");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0003", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0004", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0003", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0004", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0003", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0004", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0003", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0004", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0003", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0003", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0203", "MessageF0003", "BufferF0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0204", "MessageF0003", "BufferF0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0203", "MessageF0003", "BufferF0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0204", "MessageF0003", "BufferF0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0003", "AbCdEfG", "IntfIMSA0003", true, "IntfIMSB0003", true, "IntfIMSC0003", true, "IntfIMSD0003", true, "ConnEMSD0003", true, "111", "33", "1", "ConversionI0203", true, "ConversionO0203", true, "PROGRAM1", false, "None", "Transaction", false, "3", "User", "AAAAAAAA", "11111", "MAP1", "CMD1", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.updateRecWithImsEms("RecipeIE0003", "HiJkLmN", "IntfIMSA0004", true, "IntfIMSB0004", true, "IntfIMSC0004", true, "IntfIMSD0004", true, "ConnEMSD0004", true, "222", "44", "2", "ConversionI0204", true, "ConversionO0204", true, "PROGRAMA", true, "None", "Command", true, "4", "Full", "bbbbbbbb", "22222", "MAP2", "CMD2", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RecipeIE0003').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSA0004').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSB0004').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSC0004').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSD0004').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSD0004').to.be.true;
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
            expect(message === 'ConversionI0204').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionO0204').to.be.true;
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
            return Page.eleRecImsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Command').to.be.true;
        }).then(function () {
            return Page.eleRecImsVariableLengthTransCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleRecImsSecurityCheckDropdown.getText();
        }).then(function (message) {
            expect(message === 'Full').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentBreakInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'bbbbbbbb').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentLengthInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '22222').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MAP2').to.be.true;
        }).then(function () {
            return Page.eleRecImsNaturalStackCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CMD2').to.be.true;
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

    // Add a Recipe with IMS Interface & EMS Connection , make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Add a Recipe with IMS Interface & EMS Connection, cancel the changes, then confirm the cancel operation', function () {
        Page.delRecYes("RecipeIE0004").then(function () {
            Page.delCvrYes("ConversionI0205");
        }).then(function () {
            Page.delCvrYes("ConversionI0206");
        }).then(function () {
            Page.delCvrYes("ConversionO0205");
        }).then(function () {
            Page.delCvrYes("ConversionO0206");
        }).then(function () {
            Page.delMsgYes("MessageF0004");
        }).then(function () {
            Page.delBufYes("BufferF0004");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0005");
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0006");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0004");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0005", "", false, false, "EndpointEMSF0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0006", "", false, false, "EndpointEMSF0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0005");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0006");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0005");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0006");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0005");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0006");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0005");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0006");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0004");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0005", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0006", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0005", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0006", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0005", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0006", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0005", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0006", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0004", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0004", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0205", "MessageF0004", "BufferF0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0206", "MessageF0004", "BufferF0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0205", "MessageF0004", "BufferF0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0206", "MessageF0004", "BufferF0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0004", "AbCdEfG", "IntfIMSA0005", true, "IntfIMSB0005", true, "IntfIMSC0005", true, "IntfIMSD0005", true, "ConnEMSD0005", true, "111", "33", "1", "ConversionI0205", true, "ConversionO0205", true, "PROGRAM1", false, "None", "Transaction", false, "3", "User", "AAAAAAAA", "11111", "MAP1", "CMD1", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.cancelRecWithImsEmsYes("RecipeIE0004", "HiJkLmN", "IntfIMSA0006", true, "IntfIMSB0006", true, "IntfIMSC0006", true, "IntfIMSD0006", true, "ConnEMSD0006", true, "222", "44", "2", "ConversionI0206", true, "ConversionO0206", true, "PROGRAMA", true, "None", "Command", true, "4", "Full", "bbbbbbbb", "22222", "MAP2", "CMD2", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
        }).then(function () {
            Page.eleRecLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("RecipeIE0004");
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
            expect(message === 'RecipeIE0004').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSA0005').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSB0005').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSC0005').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSD0005').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSD0005').to.be.true;
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
            expect(message === 'ConversionI0205').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionO0205').to.be.true;
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
            return Page.eleRecImsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Transaction').to.be.true;
        }).then(function () {
            return Page.eleRecImsVariableLengthTransCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleRecImsSecurityCheckDropdown.getText();
        }).then(function (message) {
            expect(message === 'User').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentBreakInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAAAA').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentLengthInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '11111').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MAP1').to.be.true;
        }).then(function () {
            return Page.eleRecImsNaturalStackCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CMD1').to.be.true;
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

    // Add a Recipe with IMS Interface & EMS Connection, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Add a Recipe with IMS Interface & EMS Connection, cancel the changes, then discard the cancel operation', function () {
        Page.delRecYes("RecipeIE0005").then(function () {
            Page.delCvrYes("ConversionI0207");
        }).then(function () {
            Page.delCvrYes("ConversionI0208");
        }).then(function () {
            Page.delCvrYes("ConversionO0207");
        }).then(function () {
            Page.delCvrYes("ConversionO0208");
        }).then(function () {
            Page.delMsgYes("MessageF0005");
        }).then(function () {
            Page.delBufYes("BufferF0005");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0007");
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0008");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0005");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0007", "", false, false, "EndpointEMSF0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0008", "", false, false, "EndpointEMSF0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0007");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0008");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0007");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0008");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0007");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0008");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0007");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0008");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0005");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0007", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0008", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0007", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0008", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0007", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0008", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0007", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0008", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0005", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0005", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0207", "MessageF0005", "BufferF0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0208", "MessageF0005", "BufferF0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0207", "MessageF0005", "BufferF0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0208", "MessageF0005", "BufferF0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0005", "AbCdEfG", "IntfIMSA0007", true, "IntfIMSB0007", true, "IntfIMSC0007", true, "IntfIMSD0007", true, "ConnEMSD0007", true, "111", "33", "1", "ConversionI0207", true, "ConversionO0207", true, "PROGRAM1", false, "None", "Transaction", false, "3", "User", "AAAAAAAA", "11111", "MAP1", "CMD1", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.cancelRecWithImsEmsNo("RecipeIE0005", "HiJkLmN", "IntfIMSA0008", true, "IntfIMSB0008", true, "IntfIMSC0008", true, "IntfIMSD0008", true, "ConnEMSD0008", true, "222", "44", "2", "ConversionI0208", true, "ConversionO0208", true, "PROGRAMA", true, "None", "Command", true, "4", "Full", "bbbbbbbb", "22222", "MAP2", "CMD2", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecNameInput);
        }).then(function () {
            return Page.eleRecNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RecipeIE0005').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSA0008').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSB0008').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSC0008').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSD0008').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSD0008').to.be.true;
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
            expect(message === 'ConversionI0208').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionO0208').to.be.true;
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
            return Page.eleRecImsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Command').to.be.true;
        }).then(function () {
            return Page.eleRecImsVariableLengthTransCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleRecImsSecurityCheckDropdown.getText();
        }).then(function (message) {
            expect(message === 'Full').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentBreakInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'bbbbbbbb').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentLengthInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '22222').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MAP2').to.be.true;
        }).then(function () {
            return Page.eleRecImsNaturalStackCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CMD2').to.be.true;
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

    // Add a Recipe with IMS Interface & EMS Connection, make some changes, then reset it.
    //
    it('Add a Recipe with IMS Interface & EMS Connection, make some changes, then reset it', function () {
        Page.delRecYes("RecipeIE0006").then(function () {
            Page.delCvrYes("ConversionI0209");
        }).then(function () {
            Page.delCvrYes("ConversionI0210");
        }).then(function () {
            Page.delCvrYes("ConversionO0209");
        }).then(function () {
            Page.delCvrYes("ConversionO0210");
        }).then(function () {
            Page.delMsgYes("MessageF0006");
        }).then(function () {
            Page.delBufYes("BufferF0006");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0009");
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0010");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0006");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0009", "", false, false, "EndpointEMSF0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0010", "", false, false, "EndpointEMSF0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0009");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0010");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0009");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0010");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0009");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0010");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0009");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0010");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0006");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0009", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0010", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0009", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0010", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0009", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0010", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0009", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0010", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0006", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0006", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0209", "MessageF0006", "BufferF0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0210", "MessageF0006", "BufferF0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0209", "MessageF0006", "BufferF0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0210", "MessageF0006", "BufferF0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0006", "AbCdEfG", "IntfIMSA0009", true, "IntfIMSB0009", true, "IntfIMSC0009", true, "IntfIMSD0009", true, "ConnEMSD0009", true, "111", "33", "1", "ConversionI0209", true, "ConversionO0209", true, "PROGRAM1", false, "None", "Transaction", false, "3", "User", "AAAAAAAA", "11111", "MAP1", "CMD1", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.resetRecWithImsEms("RecipeIE0006", "HiJkLmN", "IntfIMSA0010", true, "IntfIMSB0010", true, "IntfIMSC0010", true, "IntfIMSD0010", true, "ConnEMSD0010", true, "222", "44", "2", "ConversionI0210", true, "ConversionO0210", true, "PROGRAMA", true, "None", "Command", true, "4", "Full", "bbbbbbbb", "22222", "MAP2", "CMD2", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
        }).then(function () {
            return Page.eleRecNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'RecipeIE0006').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSA0009').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSB0009').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSC0009').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSD0009').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSD0009').to.be.true;
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
            expect(message === 'ConversionI0209').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionO0209').to.be.true;
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
            return Page.eleRecImsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Transaction').to.be.true;
        }).then(function () {
            return Page.eleRecImsVariableLengthTransCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleRecImsSecurityCheckDropdown.getText();
        }).then(function (message) {
            expect(message === 'User').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentBreakInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAAAA').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentLengthInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '11111').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MAP1').to.be.true;
        }).then(function () {
            return Page.eleRecImsNaturalStackCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CMD1').to.be.true;
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

    // Add a Recipe with IMS Interface & EMS Connection, then add a Recipe with the same name, then confirm the overwrite operation.
    //
    it('Add a Recipe with IMS Interface & EMS Connection to overwrite an existing Recipe, then confirm the overwrite operation', function () {
        Page.delRecYes("RecipeIE0007").then(function () {
            Page.delCvrYes("ConversionI0211");
        }).then(function () {
            Page.delCvrYes("ConversionI0212");
        }).then(function () {
            Page.delCvrYes("ConversionO0211");
        }).then(function () {
            Page.delCvrYes("ConversionO0212");
        }).then(function () {
            Page.delMsgYes("MessageF0007");
        }).then(function () {
            Page.delBufYes("BufferF0007");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0011");
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0012");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0007");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0011", "", false, false, "EndpointEMSF0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0012", "", false, false, "EndpointEMSF0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0011");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0012");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0011");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0012");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0011");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0012");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0011");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0012");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0007");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0011", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0012", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0011", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0012", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0011", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0012", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0011", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0012", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0007", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0007", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0211", "MessageF0007", "BufferF0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0212", "MessageF0007", "BufferF0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0211", "MessageF0007", "BufferF0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0212", "MessageF0007", "BufferF0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0007", "AbCdEfG", "IntfIMSA0011", true, "IntfIMSB0011", true, "IntfIMSC0011", true, "IntfIMSD0011", true, "ConnEMSD0011", true, "111", "33", "1", "ConversionI0211", true, "ConversionO0211", true, "PROGRAM1", false, "None", "Transaction", false, "3", "User", "AAAAAAAA", "11111", "MAP1", "CMD1", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0007", "HiJkLmN", "IntfIMSA0012", true, "IntfIMSB0012", true, "IntfIMSC0012", true, "IntfIMSD0012", true, "ConnEMSD0012", true, "222", "44", "2", "ConversionI0212", true, "ConversionO0212", true, "PROGRAMA", true, "None", "Command", true, "4", "Full", "bbbbbbbb", "22222", "MAP2", "CMD2", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
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
            expect(message === 'RecipeIE0007').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSA0012').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSB0012').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSC0012').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSD0012').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSD0012').to.be.true;
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
            expect(message === 'ConversionI0212').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionO0212').to.be.true;
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
            return Page.eleRecImsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Command').to.be.true;
        }).then(function () {
            return Page.eleRecImsVariableLengthTransCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleRecImsSecurityCheckDropdown.getText();
        }).then(function (message) {
            expect(message === 'Full').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentBreakInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'bbbbbbbb').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentLengthInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '22222').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MAP2').to.be.true;
        }).then(function () {
            return Page.eleRecImsNaturalStackCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CMD2').to.be.true;
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

    // Add a Recipe with IMS Interface & EMS Connection, then add a Recipe with the same name, then discard the overwrite operation.
    //
    it('Add a Recipe with IMS Interface & EMS Connection to overwrite an existing Recipe, then discard the overwrite operation', function () {
        Page.delRecYes("RecipeIE0008").then(function () {
            Page.delCvrYes("ConversionI0213");
        }).then(function () {
            Page.delCvrYes("ConversionI0214");
        }).then(function () {
            Page.delCvrYes("ConversionO0213");
        }).then(function () {
            Page.delCvrYes("ConversionO0214");
        }).then(function () {
            Page.delMsgYes("MessageF0008");
        }).then(function () {
            Page.delBufYes("BufferF0008");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0013");
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0014");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0008");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0013", "", false, false, "EndpointEMSF0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0014", "", false, false, "EndpointEMSF0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0013");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0014");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0013");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0014");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0013");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0014");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0013");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0014");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0008");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0013", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0014", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0013", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0014", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0013", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0014", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0013", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0014", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0008", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0008", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0213", "MessageF0008", "BufferF0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0214", "MessageF0008", "BufferF0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0213", "MessageF0008", "BufferF0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0214", "MessageF0008", "BufferF0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0008", "AbCdEfG", "IntfIMSA0013", true, "IntfIMSB0013", true, "IntfIMSC0013", true, "IntfIMSD0013", true, "ConnEMSD0013", true, "111", "33", "1", "ConversionI0213", true, "ConversionO0213", true, "PROGRAM1", false, "None", "Transaction", false, "3", "User", "AAAAAAAA", "11111", "MAP1", "CMD1", "lsnDest1", "QUEUE", "responseDest1", "QUEUE", false, "55", "77", "111", "errDest1", "QUEUE", "Reliable No-Ack", "Non-Persistent", false, false, "durCid1", false, "1", false, "33333", "Minutes", false, false, false, "Map", "Envelope", "SEL1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0008", "HiJkLmN", "IntfIMSA0014", true, "IntfIMSB0014", true, "IntfIMSC0014", true, "IntfIMSD0014", true, "ConnEMSD0014", true, "222", "44", "2", "ConversionI0214", true, "ConversionO0214", true, "PROGRAMA", false, "None", "Command", true, "4", "Full", "bbbbbbbb", "22222", "MAP2", "CMD2", "lsnDest2", "TOPIC", "responseDest2", "TOPIC", true, "66", "88", "222", "errDest2", "TOPIC", "Reliable Auto-Ack", "Reliable", true, true, "durCid2", true, "2", true, "44444", "Days", true, true, true, "Text", "Message Id", "SEL2");
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
            Page.eleSearchInput.clear().sendKeys("RecipeIE0008");
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
            expect(message === 'RecipeIE0008').to.be.true;
        }).then(function () {
            return Page.eleRecDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSA0013').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSB0013').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSC0013').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMSD0013').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSD0013').to.be.true;
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
            expect(message === 'ConversionI0213').to.be.true;
        }).then(function () {
            return Page.eleRecOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionO0213').to.be.true;
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
            return Page.eleRecImsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Transaction').to.be.true;
        }).then(function () {
            return Page.eleRecImsVariableLengthTransCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleRecImsSecurityCheckDropdown.getText();
        }).then(function (message) {
            expect(message === 'User').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentBreakInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAAAA').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentLengthInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '11111').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MAP1').to.be.true;
        }).then(function () {
            return Page.eleRecImsNaturalStackCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CMD1').to.be.true;
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

    // Add a Recipe with IMS Interface & EMS Connection, delete it, then confirm the delete operation.
    //
    it('Add a Recipe with IMS Interface & EMS Connection, delete it, then confirm the delete operation', function () {
        Page.delRecYes("RecipeIE0009").then(function () {
            Page.delCvrYes("ConversionI0215");
        }).then(function () {
            Page.delCvrYes("ConversionO0215");
        }).then(function () {
            Page.delMsgYes("MessageF0009");
        }).then(function () {
            Page.delBufYes("BufferF0009");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0015");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0009");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0015", "", false, false, "EndpointEMSF0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0015");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0015");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0015");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0015");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0009");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0015", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0015", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0015", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0015", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0009", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0009", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0215", "MessageF0009", "BufferF0009", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0215", "MessageF0009", "BufferF0009", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0009", "", "IntfIMSA0015", true, "IntfIMSB0015", true, "IntfIMSC0015", true, "IntfIMSD0015", true, "ConnEMSD0015", true, "0", "0", "0", "ConversionI0215", true, "ConversionO0215", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.delRecYes("RecipeIE0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("RecipeIE0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a Recipe with IMS Interface & EMS Connection, delete it, then discard the delete operation.
    //
    it('Add a Recipe with IMS Interface & EMS Connection, delete it, then discard the delete operation', function () {
        Page.delRecYes("RecipeIE0010").then(function () {
            Page.delCvrYes("ConversionI0216");
        }).then(function () {
            Page.delCvrYes("ConversionO0216");
        }).then(function () {
            Page.delMsgYes("MessageF0010");
        }).then(function () {
            Page.delBufYes("BufferF0010");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0016");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0010");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0016", "", false, false, "EndpointEMSF0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0016");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0016");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0016");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0016");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0010");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0016", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0016", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0016", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0016", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0010", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0010", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0216", "MessageF0010", "BufferF0010", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0216", "MessageF0010", "BufferF0010", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0010", "", "IntfIMSA0016", true, "IntfIMSB0016", true, "IntfIMSC0016", true, "IntfIMSD0016", true, "ConnEMSD0016", true, "0", "0", "0", "ConversionI0216", true, "ConversionO0216", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.delRecNo("RecipeIE0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("RecipeIE0010");
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
        Page.delRecYes("RecipeIE0011").then(function () {
            Page.delCvrYes("ConversionI0217");
        }).then(function () {
            Page.delCvrYes("ConversionO0217");
        }).then(function () {
            Page.delMsgYes("MessageF0011");
        }).then(function () {
            Page.delBufYes("BufferF0011");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0017");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0011");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0011");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0017", "", false, false, "EndpointEMSF0011");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0017");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0011");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0011");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0017", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0011");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0011", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0011", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0217", "MessageF0011", "BufferF0011", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0217", "MessageF0011", "BufferF0011", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0011", "", "IntfIMSA0017", false, "", false, "", false, "", false, "ConnEMSD0017", false, "0", "0", "0", "ConversionI0217", false, "ConversionO0217", false);
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
            return Page.eleRecImsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecIntfExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecImsDetailsExtension);
        }).then(function () {
            return Page.eleRecImsMethodInvocationDropdown.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecImsDetailsExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecImsMethodInvocationDropdown);
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
            return Page.eleRecImsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Transaction').to.be.true;
        }).then(function () {
            return Page.eleRecImsVariableLengthTransCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleRecImsSecurityCheckDropdown.getText();
        }).then(function (message) {
            expect(message === 'None').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentBreakInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentLengthInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleRecImsNaturalStackCmdInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
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
            return Page.eleRecImsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecIntfExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecImsDetailsExtension);
        }).then(function () {
            return Page.eleRecImsMethodInvocationDropdown.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleRecImsDetailsExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecImsMethodInvocationDropdown);
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
            Page.eleRecIntfInput.clear().sendKeys("IntfIMSA0017");
        }).then(function () {
            Page.eleRecConnInput.clear().sendKeys("ConnEMSD0017");
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
        Page.delRecYes("RecipeIE0012_@#$_2223333333333444444444").then(function () {
            Page.delRecYes("RecipeIE0013_@#$_2223333333333444444444");
        }).then(function () {
            Page.delCvrYes("ConversionI0218");
        }).then(function () {
            Page.delCvrYes("ConversionO0218");
        }).then(function () {
            Page.delMsgYes("MessageF0012");
        }).then(function () {
            Page.delBufYes("BufferF0012");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0018");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0012");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0012");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0018", "", false, false, "EndpointEMSF0012");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0018");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0012");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0012");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0018", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0012");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0012", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0012", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0218", "MessageF0012", "BufferF0012", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0218", "MessageF0012", "BufferF0012", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0012_@#$_2223333333333444444444", "", "IntfIMSA0018", false, "", false, "", false, "", false, "ConnEMSD0018", false, "0", "0", "0", "ConversionI0218", false, "ConversionO0218", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'RecipeIE0012_@#$_2223333333333444444444').to.be.true;
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0013_@#$_22233333333334444444444", "", "IntfIMSA0018", false, "", false, "", false, "", false, "ConnEMSD0018", false, "0", "0", "0", "ConversionI0218", false, "ConversionO0218", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'RecipeIE0013_@#$_2223333333333444444444').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Description'
    //
    it('Test Recipe -> Description', function () {
        Page.delRecYes("RecipeIE0014").then(function () {
            Page.delRecYes("RecipeIE0015");
        }).then(function () {
            Page.delCvrYes("ConversionI0219");
        }).then(function () {
            Page.delCvrYes("ConversionO0219");
        }).then(function () {
            Page.delMsgYes("MessageF0013");
        }).then(function () {
            Page.delBufYes("BufferF0013");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0019");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0013");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0013");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0019", "", false, false, "EndpointEMSF0013");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0019");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0013");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0013");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0019", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0013");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0013", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0013", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0219", "MessageF0013", "BufferF0013", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0219", "MessageF0013", "BufferF0013", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", "IntfIMSA0019", false, "", false, "", false, "", false, "ConnEMSD0019", false, "0", "0", "0", "ConversionI0219", false, "ConversionO0219", false);
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
            Page.addRecWithImsEms("RecipeIE0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111", "IntfIMSA0019", false, "", false, "", false, "", false, "ConnEMSD0019", false, "0", "0", "0", "ConversionI0219", false, "ConversionO0219", false);
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
        Page.delRecYes("RecipeIE0016").then(function () {
            Page.delCvrYes("ConversionI0220");
        }).then(function () {
            Page.delCvrYes("ConversionO0220");
        }).then(function () {
            Page.delMsgYes("MessageF0014");
        }).then(function () {
            Page.delBufYes("BufferF0014");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0020");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0014");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0020", "", false, false, "EndpointEMSF0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0020_@#$_2223333333333444444444");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0014");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0020_@#$_2223333333333444444444", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0014", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0014", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0220", "MessageF0014", "BufferF0014", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0220", "MessageF0014", "BufferF0014", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0016", "", "INVALID", false, "", false, "", false, "", false, "ConnEMSD0020", false, "0", "0", "0", "ConversionI0220", false, "ConversionO0220", false);
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
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntfInput.clear().sendKeys("IntfIMSA0020_@#$_2223333333333444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfIMSA0020_@#$_223333333333444444444').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Interface Names (alternate) First'
    //
    it('Test Recipe -> Interface Names (alternate) First', function () {
        Page.delRecYes("RecipeIE0017").then(function () {
            Page.delCvrYes("ConversionI0221");
        }).then(function () {
            Page.delCvrYes("ConversionO0221");
        }).then(function () {
            Page.delMsgYes("MessageF0015");
        }).then(function () {
            Page.delBufYes("BufferF0015");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0021");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0015");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0021", "", false, false, "EndpointEMSF0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0021");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0017_@#$_2223333333333444444444");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0015");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0021", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0017_@#$_2223333333333444444444", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0015", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0015", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0221", "MessageF0015", "BufferF0015", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0221", "MessageF0015", "BufferF0015", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0017", "", "IntfIMSA0021", true, "INVALID", false, "", false, "", false, "ConnEMSD0021", false, "0", "0", "0", "ConversionI0221", false, "ConversionO0221", false);
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
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf2Input.clear().sendKeys("IntfIMSA0021");
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
            expect(message === 'IntfIMSA0021').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf2Input.clear().sendKeys("IntfIMSB0017_@#$_2223333333333444444444");
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
            expect(message === 'IntfIMSB0017_@#$_223333333333444444444').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Interface Names (alternate) Second'
    //
    it('Test Recipe -> Interface Names (alternate) Second', function () {
        Page.delRecYes("RecipeIE0018").then(function () {
            Page.delCvrYes("ConversionI0222");
        }).then(function () {
            Page.delCvrYes("ConversionO0222");
        }).then(function () {
            Page.delMsgYes("MessageF0016");
        }).then(function () {
            Page.delBufYes("BufferF0016");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0022");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0016");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0022", "", false, false, "EndpointEMSF0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0022");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0018");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0017_@#$_2223333333333444444444");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0016");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0022", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0018", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0017_@#$_2223333333333444444444", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0016", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0016", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0222", "MessageF0016", "BufferF0016", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0222", "MessageF0016", "BufferF0016", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0018", "", "IntfIMSA0022", true, "IntfIMSB0018", true, "INVALID", false, "", false, "ConnEMSD0022", false, "0", "0", "0", "ConversionI0222", false, "ConversionO0222", false);
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
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf3Input.clear().sendKeys("IntfIMSA0022");
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
            expect(message === 'IntfIMSA0022').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf3Input.clear().sendKeys("IntfIMSB0018");
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
            expect(message === 'IntfIMSB0018').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf3Input.clear().sendKeys("IntfIMSC0017_@#$_2223333333333444444444");
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
            expect(message === 'IntfIMSC0017_@#$_2223333333333444444444').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Interface Names (alternate) Third'
    //
    it('Test Recipe -> Interface Names (alternate) Third', function () {
        Page.delRecYes("RecipeIE0019").then(function () {
            Page.delCvrYes("ConversionI0223");
        }).then(function () {
            Page.delCvrYes("ConversionO0223");
        }).then(function () {
            Page.delMsgYes("MessageF0017");
        }).then(function () {
            Page.delBufYes("BufferF0017");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0023");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0017");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0023", "", false, false, "EndpointEMSF0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0023");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSB0019");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSC0018");
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSD0017_@#$_2223333333333444444444");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0017");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0023", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSB0019", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSC0018", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSD0017_@#$_2223333333333444444444", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0017", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0017", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0223", "MessageF0017", "BufferF0017", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0223", "MessageF0017", "BufferF0017", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0019", "", "IntfIMSA0023", true, "IntfIMSB0019", true, "IntfIMSC0018", true, "invalid", false, "ConnEMSD0022", false, "0", "0", "0", "ConversionI0222", false, "ConversionO0222", false);
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
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf4Input.clear().sendKeys("IntfIMSA0023");
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
            expect(message === 'IntfIMSA0023').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf4Input.clear().sendKeys("IntfIMSB0019");
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
            expect(message === 'IntfIMSB0019').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf4Input.clear().sendKeys("IntfIMSC0018");
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
            expect(message === 'IntfIMSC0018').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf4Input.clear().sendKeys("IntfIMSD0017_@#$_2223333333333444444444");
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
            expect(message === 'IntfIMSD0017_@#$_2223333333333444444444').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Connection'
    //
    it('Test Recipe -> Interface4 Name', function () {
        Page.delRecYes("RecipeIE0020").then(function () {
            Page.delCvrYes("ConversionI0224");
        }).then(function () {
            Page.delCvrYes("ConversionO0224");
        }).then(function () {
            Page.delMsgYes("MessageF0018");
        }).then(function () {
            Page.delBufYes("BufferF0018");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0024_@#$_2223333333333444444444");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0018");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0024_@#$_2223333333333444444444", "", false, false, "EndpointEMSF0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0024");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0018");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0024", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0018", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0018", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0224", "MessageF0018", "BufferF0018", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0224", "MessageF0018", "BufferF0018", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0020", "", "IntfIMSA0024", false, "", false, "", false, "", false, "invalid", false, "0", "0", "0", "ConversionI0224", false, "ConversionO0224", false);
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
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecConnInput.clear().sendKeys("ConnEMSD0024_@#$_2223333333333444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConnEMSD0024_@#$_2223333333333444444444').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Disable on Error (#)'
    //
    it('Test Recipe -> Disable on Error (#)', function () {
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        Page.delRecYes("RecipeIE0021").then(function () {
            Page.delCvrYes("ConversionI0225");
        }).then(function () {
            Page.delCvrYes("ConversionO0225");
        }).then(function () {
            Page.delMsgYes("MessageF0019");
        }).then(function () {
            Page.delBufYes("BufferF0019");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0025");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0019");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0025", "", false, false, "EndpointEMSF0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0025");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0019");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0025", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0019", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0019", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0225", "MessageF0019", "BufferF0019", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0225", "MessageF0019", "BufferF0019", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0021", "", "IntfIMSA0025", false, "", false, "", false, "", false, "ConnEMSD0025", false, "0", "0", "0", "ConversionI0225", false, "ConversionO0225", false);
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
        Page.delRecYes("RecipeIE0022").then(function () {
            Page.delCvrYes("ConversionI0226");
        }).then(function () {
            Page.delCvrYes("ConversionO0226");
        }).then(function () {
            Page.delMsgYes("MessageF0020");
        }).then(function () {
            Page.delBufYes("BufferF0020");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0026");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0020");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0026", "", false, false, "EndpointEMSF0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0026");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0020");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0026", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0020", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0020", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0226", "MessageF0020", "BufferF0020", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0226", "MessageF0020", "BufferF0020", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0022", "", "IntfIMSA0026", false, "", false, "", false, "", false, "ConnEMSD0026", false, "0", "0", "0", "ConversionI0226", false, "ConversionO0226", false);
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
        Page.delRecYes("RecipeIE0023").then(function () {
            Page.delCvrYes("ConversionI0227");
        }).then(function () {
            Page.delCvrYes("ConversionO0227");
        }).then(function () {
            Page.delMsgYes("MessageF0021");
        }).then(function () {
            Page.delBufYes("BufferF0021");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0027");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0021");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0027", "", false, false, "EndpointEMSF0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0027");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0021");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0027", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0021", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0021", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0227", "MessageF0021", "BufferF0021", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0227", "MessageF0021", "BufferF0021", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0023", "", "IntfIMSA0027", false, "", false, "", false, "", false, "ConnEMSD0027", false, "0", "0", "0", "ConversionI0227", false, "ConversionO0227", false);
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
        Page.delRecYes("RecipeIE0024").then(function () {
            Page.delCvrYes("ConversionI0228_@#$_3333333333444444444");
        }).then(function () {
            Page.delCvrYes("ConversionO0228");
        }).then(function () {
            Page.delMsgYes("MessageF0022");
        }).then(function () {
            Page.delBufYes("BufferF0022");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0028");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0022");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0028", "", false, false, "EndpointEMSF0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0028");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0022");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0028", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0022", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0022", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0228_@#$_3333333333444444444", "MessageF0022", "BufferF0022", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0228", "MessageF0022", "BufferF0022", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0024", "", "IntfIMSA0028", false, "", false, "", false, "", false, "ConnEMSD0028", false, "0", "0", "0", "INVALID", false, "ConversionO0228", false);
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
            Page.eleRecInputConversionInput.clear().sendKeys("ConversionI0228_@#$_3333333333444444444");
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
            expect(message === 'ConversionI0228_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Output Conversion'
    //
    it('Test Recipe -> Output Conversion', function () {
        Page.delRecYes("RecipeIE0025").then(function () {
            Page.delCvrYes("ConversionI0229");
        }).then(function () {
            Page.delCvrYes("ConversionO0229_@#$_3333333333444444444");
        }).then(function () {
            Page.delMsgYes("MessageF0023");
        }).then(function () {
            Page.delBufYes("BufferF0023");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0029");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0023");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0029", "", false, false, "EndpointEMSF0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0029");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0023");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0029", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0023", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0023", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0229", "MessageF0023", "BufferF0023", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0229_@#$_3333333333444444444", "MessageF0023", "BufferF0023", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0025", "", "IntfIMSA0029", false, "", false, "", false, "", false, "ConnEMSD0029", false, "0", "0", "0", "ConversionI0229", false, "invalid", false);
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
            Page.eleRecOutputConversionInput.clear().sendKeys("ConversionI0229");
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
            expect(message === 'ConversionI0229').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecOutputConversionInput.clear().sendKeys("ConversionO0229_@#$_3333333333444444444");
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
            expect(message === 'ConversionO0229_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Resource Name'
    //
    it('Test Recipe -> Resource Name', function () {
        Page.delRecYes("RecipeIE0026").then(function () {
            Page.delCvrYes("ConversionI0230");
        }).then(function () {
            Page.delCvrYes("ConversionO0230");
        }).then(function () {
            Page.delMsgYes("MessageF0024");
        }).then(function () {
            Page.delBufYes("BufferF0024");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0030");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0024");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0030", "", false, false, "EndpointEMSF0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0030");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0024");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0030", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0024", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0024", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0230", "MessageF0024", "BufferF0024", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0230", "MessageF0024", "BufferF0024", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0026", "", "IntfIMSA0030", false, "", false, "", false, "", false, "ConnEMSD0030", false, "0", "0", "0", "ConversionI0230", false, "ConversionO0230", false);
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
        Page.delRecYes("RecipeIE0027").then(function () {
            Page.delCvrYes("ConversionI0231");
        }).then(function () {
            Page.delCvrYes("ConversionO0231");
        }).then(function () {
            Page.delMsgYes("MessageF0025");
        }).then(function () {
            Page.delBufYes("BufferF0025");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0031");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0025");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0031", "", false, false, "EndpointEMSF0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0031");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0025");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0031", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0025", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0025", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0231", "MessageF0025", "BufferF0025", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0231", "MessageF0025", "BufferF0025", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0027", "", "IntfIMSA0031", false, "", false, "", false, "", false, "ConnEMSD0031", false, "0", "0", "0", "ConversionI0231", false, "ConversionO0231", false);
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
        Page.delRecYes("RecipeIE0028").then(function () {
            Page.delRecYes("RecipeIE0029");
        }).then(function () {
            Page.delRecYes("RecipeIE0030");
        }).then(function () {
            Page.delRecYes("RecipeIE0031");
        }).then(function () {
            Page.delCvrYes("ConversionI0232");
        }).then(function () {
            Page.delCvrYes("ConversionO0232");
        }).then(function () {
            Page.delMsgYes("MessageF0026");
        }).then(function () {
            Page.delBufYes("BufferF0026");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0032");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0026");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0032", "", false, false, "EndpointEMSF0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0032");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0026");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0032", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0026", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0026", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0232", "MessageF0026", "BufferF0026", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0232", "MessageF0026", "BufferF0026", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0028", "", "IntfIMSA0032", false, "", false, "", false, "", false, "ConnEMSD0032", false, "0", "0", "0", "ConversionI0232", false, "ConversionO0232", false, undefined, undefined, "Message");
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
            Page.addRecWithImsEms("RecipeIE0029", "", "IntfIMSA0032", false, "", false, "", false, "", false, "ConnEMSD0032", false, "0", "0", "0", "ConversionI0232", false, "ConversionO0232", false, undefined, undefined, "None");
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
            Page.addRecWithImsEms("RecipeIE0030", "", "IntfIMSA0032", false, "", false, "", false, "", false, "ConnEMSD0032", false, "0", "0", "0", "ConversionI0232", false, "ConversionO0232", false, undefined, undefined, "Status");
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
            Page.addRecWithImsEms("RecipeIE0031", "", "IntfIMSA0032", false, "", false, "", false, "", false, "ConnEMSD0032", false, "0", "0", "0", "ConversionI0232", false, "ConversionO0232", false, undefined, undefined, "Status and Message");
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

    // Test field 'Recipe Details panel' -> 'IMS Details' -> 'Method of Invocation'
    //
    it('Test Recipe -> IMS Details -> Method of Invocation', function () {
        Page.delRecYes("RecipeIE0032").then(function () {
            Page.delRecYes("RecipeIE0033");
        }).then(function () {
            Page.delRecYes("RecipeIE0034");
        }).then(function () {
            Page.delCvrYes("ConversionI0233");
        }).then(function () {
            Page.delCvrYes("ConversionO0233");
        }).then(function () {
            Page.delMsgYes("MessageF0027");
        }).then(function () {
            Page.delBufYes("BufferF0027");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0033");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0027");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0033", "", false, false, "EndpointEMSF0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0033");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0027");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0033", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0027", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0027", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0233", "MessageF0027", "BufferF0027", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0233", "MessageF0027", "BufferF0027", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0032", "", "IntfIMSA0033", false, "", false, "", false, "", false, "ConnEMSD0033", false, "0", "0", "0", "ConversionI0233", false, "ConversionO0233", false, undefined, undefined, undefined, "Transaction");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Transaction').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecImsMethodInvocationDropdown);
        }).then(function () {
            Page.eleRecImsMethodInvocationDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecImsMethodInvocation01);
        }).then(function () {
            return Page.eleRecImsMethodInvocation01.getText();
        }).then(function (message) {
            expect(message === 'Transaction').to.be.true;
        }).then(function () {
            return Page.eleRecImsMethodInvocation02.getText();
        }).then(function (message) {
            expect(message === 'Conversational Transaction').to.be.true;
        }).then(function () {
            return Page.eleRecImsMethodInvocation03.getText();
        }).then(function (message) {
            expect(message === 'Command').to.be.true;
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0033", "", "IntfIMSA0033", false, "", false, "", false, "", false, "ConnEMSD0033", false, "0", "0", "0", "ConversionI0233", false, "ConversionO0233", false, undefined, undefined, undefined, "Conversational Transaction");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Conversational Transaction').to.be.true;
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0034", "", "IntfIMSA0033", false, "", false, "", false, "", false, "ConnEMSD0033", false, "0", "0", "0", "ConversionI0233", false, "ConversionO0233", false, undefined, undefined, undefined, "Command");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsMethodInvocationDropdown.getText();
        }).then(function (message) {
            expect(message === 'Command').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'IMS Details' -> 'Variable Length Transaction'
    //
    it('Test Recipe -> IMS Details -> Variable Length Transaction', function () {
        Page.delRecYes("RecipeIE0035").then(function () {
            Page.delCvrYes("ConversionI0234");
        }).then(function () {
            Page.delCvrYes("ConversionO0234");
        }).then(function () {
            Page.delMsgYes("MessageF0028");
        }).then(function () {
            Page.delBufYes("BufferF0028");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0034");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0028");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0028");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0034", "", false, false, "EndpointEMSF0028");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0034");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0028");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0028");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0034", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0028");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0028", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0028", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0234", "MessageF0028", "BufferF0028", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0234", "MessageF0028", "BufferF0028", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0035", "", "IntfIMSA0034", false, "", false, "", false, "", false, "ConnEMSD0034", false, "0", "0", "0", "ConversionI0234", false, "ConversionO0234", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsVariableLengthTransCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecImsVariableLengthTransCheck);
        }).then(function () {
            Page.eleRecImsVariableLengthTransCheck.click();
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
            return Page.eleRecImsVariableLengthTransCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'IMS Details' -> 'Transaction Length'
    //
    it('Test Recipe -> IMS Details -> Transaction Length', function () {
        var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
        Page.delRecYes("RecipeIE0036").then(function () {
            Page.delCvrYes("ConversionI0235");
        }).then(function () {
            Page.delCvrYes("ConversionO0235");
        }).then(function () {
            Page.delMsgYes("MessageF0029");
        }).then(function () {
            Page.delBufYes("BufferF0029");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0035");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0029");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0029");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0035", "", false, false, "EndpointEMSF0029");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0035");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0029");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0029");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0035", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0029");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0029", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0029", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0235", "MessageF0029", "BufferF0029", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0235", "MessageF0029", "BufferF0029", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0036", "", "IntfIMSA0035", false, "", false, "", false, "", false, "ConnEMSD0035", false, "0", "0", "0", "ConversionI0235", false, "ConversionO0235", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.clear().sendKeys("7");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '7').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.clear().sendKeys("8");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '8').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.clear().sendKeys("9");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '8').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecImsTranLengthSpinner.clear().sendKeys("10");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsTranLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'IMS Details' -> 'Security Check'
    //
    it('Test Recipe -> IMS Details -> Security Check', function () {
        Page.delRecYes("RecipeIE0037").then(function () {
            Page.delRecYes("RecipeIE0038");
        }).then(function () {
            Page.delRecYes("RecipeIE0039");
        }).then(function () {
            Page.delCvrYes("ConversionI0236");
        }).then(function () {
            Page.delCvrYes("ConversionO0236");
        }).then(function () {
            Page.delMsgYes("MessageF0030");
        }).then(function () {
            Page.delBufYes("BufferF0030");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0036");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0030");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0030");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0036", "", false, false, "EndpointEMSF0030");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0036");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0030");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0030");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0036", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0030");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0030", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0030", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0236", "MessageF0030", "BufferF0030", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0236", "MessageF0030", "BufferF0030", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0037", "", "IntfIMSA0036", false, "", false, "", false, "", false, "ConnEMSD0036", false, "0", "0", "0", "ConversionI0236", false, "ConversionO0236", false, undefined, undefined, undefined, undefined, undefined, undefined, "None");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsSecurityCheckDropdown.getText();
        }).then(function (message) {
            expect(message === 'None').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecImsSecurityCheckDropdown);
        }).then(function () {
            Page.eleRecImsSecurityCheckDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleRecImsSecurityCheck01);
        }).then(function () {
            return Page.eleRecImsSecurityCheck01.getText();
        }).then(function (message) {
            expect(message === 'None').to.be.true;
        }).then(function () {
            return Page.eleRecImsSecurityCheck02.getText();
        }).then(function (message) {
            expect(message === 'User').to.be.true;
        }).then(function () {
            return Page.eleRecImsSecurityCheck03.getText();
        }).then(function (message) {
            expect(message === 'Full').to.be.true;
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0038", "", "IntfIMSA0033", false, "", false, "", false, "", false, "ConnEMSD0033", false, "0", "0", "0", "ConversionI0233", false, "ConversionO0233", false, undefined, undefined, undefined, undefined, undefined, undefined, "User");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsSecurityCheckDropdown.getText();
        }).then(function (message) {
            expect(message === 'User').to.be.true;
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0039", "", "IntfIMSA0033", false, "", false, "", false, "", false, "ConnEMSD0033", false, "0", "0", "0", "ConversionI0233", false, "ConversionO0233", false, undefined, undefined, undefined, undefined, undefined, undefined, "Full");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsSecurityCheckDropdown.getText();
        }).then(function (message) {
            expect(message === 'Full').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'IMS Details' -> 'Segment Break'
    //
    it('Test Recipe -> IMS Details -> Segment Break', function () {
        Page.delRecYes("RecipeIE0040").then(function () {
            Page.delCvrYes("ConversionI0237");
        }).then(function () {
            Page.delCvrYes("ConversionO0237");
        }).then(function () {
            Page.delMsgYes("MessageF0031");
        }).then(function () {
            Page.delBufYes("BufferF0031");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0037");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0031");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0031");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0037", "", false, false, "EndpointEMSF0031");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0037");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0031");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0031");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0037", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0031");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0031", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0031", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0237", "MessageF0031", "BufferF0031", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0237", "MessageF0031", "BufferF0031", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0040", "", "IntfIMSA0037", false, "", false, "", false, "", false, "ConnEMSD0037", false, "0", "0", "0", "ConversionI0237", false, "ConversionO0237", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "A");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecImsSegmentBreakValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes('the value is too short, must be at least 8 characters')).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsSegmentBreakInput.clear().sendKeys("abc");
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
            return Page.eleRecImsSegmentBreakValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes('the value is too short, must be at least 8 characters')).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsSegmentBreakInput.clear().sendKeys("AbCdEfG");
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
            return Page.eleRecImsSegmentBreakValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes('the value is too short, must be at least 8 characters')).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsSegmentBreakInput.clear().sendKeys("hijklmn");
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
            return Page.eleRecImsSegmentBreakValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes('the value is too short, must be at least 8 characters')).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsSegmentBreakInput.clear().sendKeys("@#$%&");
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
            return Page.eleRecImsSegmentBreakValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes('the value is too short, must be at least 8 characters')).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsSegmentBreakInput.clear().sendKeys("ABCDEFGH");
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
            return Page.eleRecImsSegmentBreakValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use A-F,a-f,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsSegmentBreakInput.clear().sendKeys("abcdghef");
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
            return Page.eleRecImsSegmentBreakValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use A-F,a-f,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsSegmentBreakInput.clear().sendKeys("ABC@$&DE");
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
            return Page.eleRecImsSegmentBreakValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use A-F,a-f,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsSegmentBreakInput.clear().sendKeys("ABC123de");
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
            return Page.eleRecImsSegmentBreakInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABC123de').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsSegmentBreakInput.clear().sendKeys("deABC456");
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
            return Page.eleRecImsSegmentBreakInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'deABC456').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsSegmentBreakInput.clear().sendKeys("089deABC");
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
            return Page.eleRecImsSegmentBreakInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '089deABC').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsSegmentBreakInput.clear().sendKeys("1234567890");
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
            return Page.eleRecImsSegmentBreakInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '12345678').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'IMS Details' -> 'MFS Map Name'
    //
    it('Test Recipe -> IMS Details -> MFS Map Name', function () {
        Page.delRecYes("RecipeIE0041").then(function () {
            Page.delCvrYes("ConversionI0238");
        }).then(function () {
            Page.delCvrYes("ConversionO0238");
        }).then(function () {
            Page.delMsgYes("MessageF0032");
        }).then(function () {
            Page.delBufYes("BufferF0032");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0038");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0032");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0032");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0038", "", false, false, "EndpointEMSF0032");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0038");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0032");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0032");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0038", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0032");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0032", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0032", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0238", "MessageF0032", "BufferF0032", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0238", "MessageF0032", "BufferF0032", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0041", "", "IntfIMSA0038", false, "", false, "", false, "", false, "ConnEMSD0038", false, "0", "0", "0", "ConversionI0238", false, "ConversionO0238", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsMfsMapNameInput.clear().sendKeys("#@$123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#@$123AB').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsMfsMapNameInput.clear().sendKeys("$#@123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '$#@123AB').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsMfsMapNameInput.clear().sendKeys("AB120@#$");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AB120@#$').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsMfsMapNameInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsMfsMapNameInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsMfsMapNameInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsMfsMapNameInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsMfsMapNameInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsMfsMapNameInput.clear().sendKeys("A");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsMfsMapNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsMfsMapNameInput.clear().sendKeys("A2");
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
            return Page.eleRecImsMfsMapNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'IMS Details' -> 'Natural Stack Command'
    //
    it('Test Recipe -> IMS Details -> Natural Stack Command', function () {
        Page.delRecYes("RecipeIE0042").then(function () {
            Page.delCvrYes("ConversionI0239");
        }).then(function () {
            Page.delCvrYes("ConversionO0239");
        }).then(function () {
            Page.delMsgYes("MessageF0033");
        }).then(function () {
            Page.delBufYes("BufferF0033");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0039");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0033");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0033");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0039", "", false, false, "EndpointEMSF0033");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0039");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0033");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0033");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0039", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0033");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0033", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0033", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0239", "MessageF0033", "BufferF0033", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0239", "MessageF0033", "BufferF0033", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0042", "", "IntfIMSA0039", false, "", false, "", false, "", false, "ConnEMSD0039", false, "0", "0", "0", "ConversionI0239", false, "ConversionO0239", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecImsNaturalStackCmdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsNaturalStackCmdInput.clear().sendKeys("A");
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
            return Page.eleRecImsNaturalStackCmdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsNaturalStackCmdInput.clear().sendKeys("bb");
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
            return Page.eleRecImsNaturalStackCmdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'bb').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsNaturalStackCmdInput.clear().sendKeys("123");
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
            return Page.eleRecImsNaturalStackCmdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '123').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsNaturalStackCmdInput.clear().sendKeys("!@#$%^&*()?");
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
            return Page.eleRecImsNaturalStackCmdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()?').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsNaturalStackCmdInput.clear().sendKeys("@&#!$%^*()abcdeHIJKL123456789");
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
            return Page.eleRecImsNaturalStackCmdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '@&#!$%^*()abcdeHIJKL123456789').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecImsNaturalStackCmdInput.clear().sendKeys("@&#!$%^*()abcdeHIJKL1234567890");
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
            return Page.eleRecImsNaturalStackCmdInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '@&#!$%^*()abcdeHIJKL123456789').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'EMS Details' -> 'Listen-to Destination, Response Destination, Error Message Destination'
    //
    it('Test Recipe -> EMS Details -> Listen-to Destination, Response Destination, Error Message Destination', function () {
        Page.delRecYes("RecipeIE0055").then(function () {
            Page.delCvrYes("ConversionI0243");
        }).then(function () {
            Page.delCvrYes("ConversionO0243");
        }).then(function () {
            Page.delMsgYes("MessageF0037");
        }).then(function () {
            Page.delBufYes("BufferF0037");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0043");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0037");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0037");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0043", "", false, false, "EndpointEMSF0037");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0043");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0037");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0037");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0043", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0037");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0037", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0037", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0243", "MessageF0037", "BufferF0037", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0243", "MessageF0037", "BufferF0037", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0055", "", "IntfIMSA0043", false, "", false, "", false, "", false, "ConnEMSD0043", false, "0", "0", "0", "ConversionI0243", false, "ConversionO0243", false);
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
        Page.delRecYes("RecipeIE0056").then(function () {
            Page.delRecYes("RecipeIE0057");
        }).then(function () {
            Page.delRecYes("RecipeIE0058");
        }).then(function () {
            Page.delRecYes("RecipeIE0059");
        }).then(function () {
            Page.delRecYes("RecipeIE0060");
        }).then(function () {
            Page.delRecYes("RecipeIE0061");
        }).then(function () {
            Page.delRecYes("RecipeIE0062");
        }).then(function () {
            Page.delRecYes("RecipeIE0063");
        }).then(function () {
            Page.delCvrYes("ConversionI0244");
        }).then(function () {
            Page.delCvrYes("ConversionO0244");
        }).then(function () {
            Page.delMsgYes("MessageF0038");
        }).then(function () {
            Page.delBufYes("BufferF0038");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0044");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0038");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0038");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0044", "", false, false, "EndpointEMSF0038");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0044");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0038");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0038");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0044", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0038");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0038", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0038", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0244", "MessageF0038", "BufferF0038", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0244", "MessageF0038", "BufferF0038", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0056", "", "IntfIMSA0044", false, "", false, "", false, "", false, "ConnEMSD0044", false, "0", "0", "0", "ConversionI0244", false, "ConversionO0244", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "QUEUE", "tibss.rec.responseDest", "QUEUE", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "QUEUE");
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
            Page.addRecWithImsEms("RecipeIE0057", "", "IntfIMSA0044", false, "", false, "", false, "", false, "ConnEMSD0044", false, "0", "0", "0", "ConversionI0244", false, "ConversionO0244", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "TOPIC", "tibss.rec.responseDest", "TOPIC", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "TOPIC");
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
            Page.addRecWithImsEms("RecipeIE0058", "", "IntfIMSA0044", false, "", false, "", false, "", false, "ConnEMSD0044", false, "0", "0", "0", "ConversionI0244", false, "ConversionO0244", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "QUEUE", "tibss.rec.responseDest", "QUEUE", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "TOPIC");
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
            Page.addRecWithImsEms("RecipeIE0059", "", "IntfIMSA0044", false, "", false, "", false, "", false, "ConnEMSD0044", false, "0", "0", "0", "ConversionI0244", false, "ConversionO0244", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "QUEUE", "tibss.rec.responseDest", "TOPIC", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "QUEUE");
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
            Page.addRecWithImsEms("RecipeIE0060", "", "IntfIMSA0044", false, "", false, "", false, "", false, "ConnEMSD0044", false, "0", "0", "0", "ConversionI0244", false, "ConversionO0244", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "TOPIC", "tibss.rec.responseDest", "QUEUE", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "QUEUE");
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
            Page.addRecWithImsEms("RecipeIE0061", "", "IntfIMSA0044", false, "", false, "", false, "", false, "ConnEMSD0044", false, "0", "0", "0", "ConversionI0244", false, "ConversionO0244", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "QUEUE", "tibss.rec.responseDest", "TOPIC", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "TOPIC");
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
            Page.addRecWithImsEms("RecipeIE0062", "", "IntfIMSA0044", false, "", false, "", false, "", false, "ConnEMSD0044", false, "0", "0", "0", "ConversionI0244", false, "ConversionO0244", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "TOPIC", "tibss.rec.responseDest", "QUEUE", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "TOPIC");
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
            Page.addRecWithImsEms("RecipeIE0063", "", "IntfIMSA0044", false, "", false, "", false, "", false, "ConnEMSD0044", false, "0", "0", "0", "ConversionI0244", false, "ConversionO0244", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "tibss.rec.listenToDest", "TOPIC", "tibss.rec.responseDest", "TOPIC", undefined, undefined, undefined, undefined, "tibss.rec.errorMsgDest", "QUEUE");
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
        Page.delRecYes("RecipeIE0064").then(function () {
            Page.delCvrYes("ConversionI0245");
        }).then(function () {
            Page.delCvrYes("ConversionO0245");
        }).then(function () {
            Page.delMsgYes("MessageF0039");
        }).then(function () {
            Page.delBufYes("BufferF0039");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0045");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0039");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0039");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0045", "", false, false, "EndpointEMSF0039");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0045");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0039");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0039");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0045", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0039");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0039", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0039", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0245", "MessageF0039", "BufferF0039", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0245", "MessageF0039", "BufferF0039", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0064", "", "IntfIMSA0045", false, "", false, "", false, "", false, "ConnEMSD0045", false, "0", "0", "0", "ConversionI0245", false, "ConversionO0245", false);
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
        Page.delRecYes("RecipeIE0065").then(function () {
            Page.delCvrYes("ConversionI0246");
        }).then(function () {
            Page.delCvrYes("ConversionO0246");
        }).then(function () {
            Page.delMsgYes("MessageF0040");
        }).then(function () {
            Page.delBufYes("BufferF0040");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0046");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0040");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0040");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0046", "", false, false, "EndpointEMSF0040");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0046");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0040");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0040");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0046", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0040");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0040", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0040", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0246", "MessageF0040", "BufferF0040", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0246", "MessageF0040", "BufferF0040", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0065", "", "IntfIMSA0046", false, "", false, "", false, "", false, "ConnEMSD0046", false, "0", "0", "0", "ConversionI0246", false, "ConversionO0246", false);
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
        Page.delRecYes("RecipeIE0066").then(function () {
            Page.delCvrYes("ConversionI0247");
        }).then(function () {
            Page.delCvrYes("ConversionO0247");
        }).then(function () {
            Page.delMsgYes("MessageF0041");
        }).then(function () {
            Page.delBufYes("BufferF0041");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0047");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0041");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0047", "", false, false, "EndpointEMSF0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0047");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0041");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0047", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0041", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0041", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0247", "MessageF0041", "BufferF0041", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0247", "MessageF0041", "BufferF0041", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0066", "", "IntfIMSA0047", false, "", false, "", false, "", false, "ConnEMSD0047", false, "0", "0", "0", "ConversionI0247", false, "ConversionO0247", false);
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
        Page.delRecYes("RecipeIE0067").then(function () {
            Page.delCvrYes("ConversionI0248");
        }).then(function () {
            Page.delCvrYes("ConversionO0248");
        }).then(function () {
            Page.delMsgYes("MessageF0042");
        }).then(function () {
            Page.delBufYes("BufferF0042");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0048");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0042");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0042");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0048", "", false, false, "EndpointEMSF0042");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0048");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0042");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0042");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0048", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0042");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0042", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0042", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0248", "MessageF0042", "BufferF0042", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0248", "MessageF0042", "BufferF0042", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0067", "", "IntfIMSA0048", false, "", false, "", false, "", false, "ConnEMSD0048", false, "0", "0", "0", "ConversionI0248", false, "ConversionO0248", false);
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
            expect(message === '998').to.be.true;}).then(function () {
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
            expect(message === '999').to.be.true;}).then(function () {
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
        Page.delRecYes("RecipeIE0068").then(function () {
            Page.delRecYes("RecipeIE0069");
        }).then(function () {
            Page.delRecYes("RecipeIE0070");
        }).then(function () {
            Page.delRecYes("RecipeIE0071");
        }).then(function () {
            Page.delRecYes("RecipeIE0072");
        }).then(function () {
            Page.delRecYes("RecipeIE0073");
        }).then(function () {
            Page.delRecYes("RecipeIE0074");
        }).then(function () {
            Page.delRecYes("RecipeIE0075");
        }).then(function () {
            Page.delCvrYes("ConversionI0249");
        }).then(function () {
            Page.delCvrYes("ConversionO0249");
        }).then(function () {
            Page.delMsgYes("MessageF0043");
        }).then(function () {
            Page.delBufYes("BufferF0043");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0049");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0043");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0043");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0049", "", false, false, "EndpointEMSF0043");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0049");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0043");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0043");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0049", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0043");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0043", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0043", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0249", "MessageF0043", "BufferF0043", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0249", "MessageF0043", "BufferF0043", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0068", "", "IntfIMSA0049", false, "", false, "", false, "", false, "ConnEMSD0049", false, "0", "0", "0", "ConversionI0249", false, "ConversionO0249", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Reliable Auto-Ack", "Persistent");
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
            Page.addRecWithImsEms("RecipeIE0069", "", "IntfIMSA0049", false, "", false, "", false, "", false, "ConnEMSD0049", false, "0", "0", "0", "ConversionI0249", false, "ConversionO0249", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Reliable Auto-Ack", "Non-Persistent");
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
            Page.addRecWithImsEms("RecipeIE0070", "", "IntfIMSA0049", false, "", false, "", false, "", false, "ConnEMSD0049", false, "0", "0", "0", "ConversionI0249", false, "ConversionO0249", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Reliable Auto-Ack", "Reliable");
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
            Page.addRecWithImsEms("RecipeIE0071", "", "IntfIMSA0049", false, "", false, "", false, "", false, "ConnEMSD0049", false, "0", "0", "0", "ConversionI0249", false, "ConversionO0249", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Reliable No-Ack", "Persistent");
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
            Page.addRecWithImsEms("RecipeIE0072", "", "IntfIMSA0049", false, "", false, "", false, "", false, "ConnEMSD0049", false, "0", "0", "0", "ConversionI0249", false, "ConversionO0249", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Reliable No-Ack", "Non-Persistent");
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
            Page.addRecWithImsEms("RecipeIE0073", "", "IntfIMSA0049", false, "", false, "", false, "", false, "ConnEMSD0049", false, "0", "0", "0", "ConversionI0249", false, "ConversionO0249", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Reliable No-Ack", "Reliable");
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
            Page.addRecWithImsEms("RecipeIE0074", "", "IntfIMSA0049", false, "", false, "", false, "", false, "ConnEMSD0049", false, "0", "0", "0", "ConversionI0249", false, "ConversionO0249", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Guaranteed All");
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
            Page.addRecWithImsEms("RecipeIE0075", "", "IntfIMSA0049", false, "", false, "", false, "", false, "ConnEMSD0049", false, "0", "0", "0", "ConversionI0249", false, "ConversionO0249", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "TOPIC", undefined, "TOPIC", undefined, undefined, undefined, undefined, undefined, "TOPIC", "Guaranteed SSES");
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
        Page.delRecYes("RecipeIE0076").then(function () {
            Page.delRecYes("RecipeIE0077");
        }).then(function () {
            Page.delRecYes("RecipeIE0078");
        }).then(function () {
            Page.delRecYes("RecipeIE0079");
        }).then(function () {
            Page.delCvrYes("ConversionI0250");
        }).then(function () {
            Page.delCvrYes("ConversionO0250");
        }).then(function () {
            Page.delMsgYes("MessageF0044");
        }).then(function () {
            Page.delBufYes("BufferF0044");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0050");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0044");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0044");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0050", "", false, false, "EndpointEMSF0044");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0050");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0044");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0044");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0050", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0044");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0044", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0044", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0250", "MessageF0044", "BufferF0044", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0250", "MessageF0044", "BufferF0044", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0076", "", "IntfIMSA0050", false, "", false, "", false, "", false, "ConnEMSD0050", false, "0", "0", "0", "ConversionI0250", false, "ConversionO0250", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false, false);
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
            Page.addRecWithImsEms("RecipeIE0077", "", "IntfIMSA0050", false, "", false, "", false, "", false, "ConnEMSD0050", false, "0", "0", "0", "ConversionI0250", false, "ConversionO0250", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true, false);
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
            Page.addRecWithImsEms("RecipeIE0078", "", "IntfIMSA0050", false, "", false, "", false, "", false, "ConnEMSD0050", false, "0", "0", "0", "ConversionI0250", false, "ConversionO0250", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false, true);
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
            Page.addRecWithImsEms("RecipeIE0079", "", "IntfIMSA0050", false, "", false, "", false, "", false, "ConnEMSD0050", false, "0", "0", "0", "ConversionI0250", false, "ConversionO0250", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true, true);
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
        Page.delRecYes("RecipeIE0080").then(function () {
            Page.delCvrYes("ConversionI0251");
        }).then(function () {
            Page.delCvrYes("ConversionO0251");
        }).then(function () {
            Page.delMsgYes("MessageF0045");
        }).then(function () {
            Page.delBufYes("BufferF0045");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0051");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0045");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0045");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0051", "", false, false, "EndpointEMSF0045");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0051");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0045");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0045");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0051", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0045");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0045", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0045", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0251", "MessageF0045", "BufferF0045", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0251", "MessageF0045", "BufferF0045", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0080", "", "IntfIMSA0051", false, "", false, "", false, "", false, "ConnEMSD0051", false, "0", "0", "0", "ConversionI0251", false, "ConversionO0251", false);
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
        Page.delRecYes("RecipeIE0081").then(function () {
            Page.delRecYes("RecipeIE0082");
        }).then(function () {
            Page.delCvrYes("ConversionI0252");
        }).then(function () {
            Page.delCvrYes("ConversionO0252");
        }).then(function () {
            Page.delMsgYes("MessageF0046");
        }).then(function () {
            Page.delBufYes("BufferF0046");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0052");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0046");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0046");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0052", "", false, false, "EndpointEMSF0046");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0052");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0046");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0046");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0052", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0046");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0046", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0046", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0252", "MessageF0046", "BufferF0046", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0252", "MessageF0046", "BufferF0046", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0081", "", "IntfIMSA0052", false, "", false, "", false, "", false, "ConnEMSD0052", false, "0", "0", "0", "ConversionI0252", false, "ConversionO0252", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false, "0");
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
            Page.addRecWithImsEms("RecipeIE0082", "", "IntfIMSA0052", false, "", false, "", false, "", false, "ConnEMSD0052", false, "0", "0", "0", "ConversionI0252", false, "ConversionO0252", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true, "0");
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
        Page.delRecYes("RecipeIE0083").then(function () {
            Page.delRecYes("RecipeIE0084");
        }).then(function () {
            Page.delRecYes("RecipeIE0085");
        }).then(function () {
            Page.delRecYes("RecipeIE0086");
        }).then(function () {
            Page.delCvrYes("ConversionI0253");
        }).then(function () {
            Page.delCvrYes("ConversionO0253");
        }).then(function () {
            Page.delMsgYes("MessageF0047");
        }).then(function () {
            Page.delBufYes("BufferF0047");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0053");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0047");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0047");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0053", "", false, false, "EndpointEMSF0047");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0053");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0047");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0047");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0053", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0047");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0047", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0047", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0253", "MessageF0047", "BufferF0047", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0253", "MessageF0047", "BufferF0047", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0083", "", "IntfIMSA0053", false, "", false, "", false, "", false, "ConnEMSD0053", false, "0", "0", "0", "ConversionI0253", false, "ConversionO0253", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false, "0", "Seconds");
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
            Page.addRecWithImsEms("RecipeIE0084", "", "IntfIMSA0053", false, "", false, "", false, "", false, "ConnEMSD0053", false, "0", "0", "0", "ConversionI0253", false, "ConversionO0253", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true, '0', "Minutes");
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
            Page.addRecWithImsEms("RecipeIE0085", "", "IntfIMSA0053", false, "", false, "", false, "", false, "ConnEMSD0053", false, "0", "0", "0", "ConversionI0253", false, "ConversionO0253", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false, '0', "Hours");
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
            Page.addRecWithImsEms("RecipeIE0086", "", "IntfIMSA0053", false, "", false, "", false, "", false, "ConnEMSD0053", false, "0", "0", "0", "ConversionI0253", false, "ConversionO0253", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true, '0', "Days");
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
        Page.delRecYes("RecipeIE0087").then(function () {
            Page.delRecYes("RecipeIE0088");
        }).then(function () {
            Page.delCvrYes("ConversionI0254");
        }).then(function () {
            Page.delCvrYes("ConversionO0254");
        }).then(function () {
            Page.delMsgYes("MessageF0048");
        }).then(function () {
            Page.delBufYes("BufferF0048");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0054");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0048");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0048");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0054", "", false, false, "EndpointEMSF0048");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0054");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0048");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0048");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0054", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0048");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0048", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0048", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0254", "MessageF0048", "BufferF0048", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0254", "MessageF0048", "BufferF0048", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0087", "", "IntfIMSA0054", false, "", false, "", false, "", false, "ConnEMSD0054", false, "0", "0", "0", "ConversionI0254", false, "ConversionO0254", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false);
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
            Page.addRecWithImsEms("RecipeIE0088", "", "IntfIMSA0054", false, "", false, "", false, "", false, "ConnEMSD0054", false, "0", "0", "0", "ConversionI0254", false, "ConversionO0254", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true);
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
        Page.delRecYes("RecipeIE0089").then(function () {
            Page.delRecYes("RecipeIE0090");
        }).then(function () {
            Page.delCvrYes("ConversionI0255");
        }).then(function () {
            Page.delCvrYes("ConversionO0255");
        }).then(function () {
            Page.delMsgYes("MessageF0049");
        }).then(function () {
            Page.delBufYes("BufferF0049");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0055");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0049");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0049");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0055", "", false, false, "EndpointEMSF0049");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0055");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0049");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0049");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0055", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0049");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0049", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0049", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0255", "MessageF0049", "BufferF0049", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0255", "MessageF0049", "BufferF0049", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0089", "", "IntfIMSA0055", false, "", false, "", false, "", false, "ConnEMSD0055", false, "0", "0", "0", "ConversionI0255", false, "ConversionO0255", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false);
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
            Page.addRecWithImsEms("RecipeIE0090", "", "IntfIMSA0055", false, "", false, "", false, "", false, "ConnEMSD0055", false, "0", "0", "0", "ConversionI0255", false, "ConversionO0255", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true);
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
        Page.delRecYes("RecipeIE0091").then(function () {
            Page.delRecYes("RecipeIE0092");
        }).then(function () {
            Page.delCvrYes("ConversionI0256");
        }).then(function () {
            Page.delCvrYes("ConversionO0256");
        }).then(function () {
            Page.delMsgYes("MessageF0050");
        }).then(function () {
            Page.delBufYes("BufferF0050");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0056");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0050");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0050");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0056", "", false, false, "EndpointEMSF0050");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0056");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0050");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0050");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0056", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0050");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0050", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0050", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0256", "MessageF0050", "BufferF0050", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0256", "MessageF0050", "BufferF0050", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0091", "", "IntfIMSA0056", false, "", false, "", false, "", false, "ConnEMSD0056", false, "0", "0", "0", "ConversionI0256", false, "ConversionO0256", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, false);
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
            Page.addRecWithImsEms("RecipeIE0092", "", "IntfIMSA0056", false, "", false, "", false, "", false, "ConnEMSD0056", false, "0", "0", "0", "ConversionI0256", false, "ConversionO0256", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, true);
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
        Page.delRecYes("RecipeIE0093").then(function () {
            Page.delRecYes("RecipeIE0094");
        }).then(function () {
            Page.delRecYes("RecipeIE0095");
        }).then(function () {
            Page.delRecYes("RecipeIE0096");
        }).then(function () {
            Page.delCvrYes("ConversionI0257");
        }).then(function () {
            Page.delCvrYes("ConversionO0257");
        }).then(function () {
            Page.delMsgYes("MessageF0051");
        }).then(function () {
            Page.delBufYes("BufferF0051");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0057");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0051");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0051");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0057", "", false, false, "EndpointEMSF0051");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0057");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0051");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0051");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0057", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0051");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0051", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0051", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0257", "MessageF0051", "BufferF0051", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0257", "MessageF0051", "BufferF0051", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0093", "", "IntfIMSA0057", false, "", false, "", false, "", false, "ConnEMSD0057", false, "0", "0", "0", "ConversionI0257", false, "ConversionO0257", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Bytes");
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
            Page.addRecWithImsEms("RecipeIE0094", "", "IntfIMSA0057", false, "", false, "", false, "", false, "ConnEMSD0057", false, "0", "0", "0", "ConversionI0257", false, "ConversionO0257", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Map");
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
            Page.addRecWithImsEms("RecipeIE0095", "", "IntfIMSA0057", false, "", false, "", false, "", false, "ConnEMSD0057", false, "0", "0", "0", "ConversionI0257", false, "ConversionO0257", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Stream");
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
            Page.addRecWithImsEms("RecipeIE0096", "", "IntfIMSA0057", false, "", false, "", false, "", false, "ConnEMSD0057", false, "0", "0", "0", "ConversionI0257", false, "ConversionO0257", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Text");
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
        Page.delRecYes("RecipeIE0097").then(function () {
            Page.delRecYes("RecipeIE0098");
        }).then(function () {
            Page.delRecYes("RecipeIE0099");
        }).then(function () {
            Page.delRecYes("RecipeIE0100");
        }).then(function () {
            Page.delRecYes("RecipeIE0101");
        }).then(function () {
            Page.delCvrYes("ConversionI0258");
        }).then(function () {
            Page.delCvrYes("ConversionO0258");
        }).then(function () {
            Page.delMsgYes("MessageF0052");
        }).then(function () {
            Page.delBufYes("BufferF0052");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0058");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0052");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0052");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0058", "", false, false, "EndpointEMSF0052");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0058");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0052");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0052");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0058", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0052");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0052", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0052", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0258", "MessageF0052", "BufferF0052", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0258", "MessageF0052", "BufferF0052", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0097", "", "IntfIMSA0058", false, "", false, "", false, "", false, "ConnEMSD0058", false, "0", "0", "0", "ConversionI0258", false, "ConversionO0258", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Yes");
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
            Page.addRecWithImsEms("RecipeIE0098", "", "IntfIMSA0058", false, "", false, "", false, "", false, "ConnEMSD0058", false, "0", "0", "0", "ConversionI0258", false, "ConversionO0258", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "No");
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
            Page.addRecWithImsEms("RecipeIE0099", "", "IntfIMSA0058", false, "", false, "", false, "", false, "ConnEMSD0058", false, "0", "0", "0", "ConversionI0258", false, "ConversionO0258", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Envelope");
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
            Page.addRecWithImsEms("RecipeIE0100", "", "IntfIMSA0058", false, "", false, "", false, "", false, "ConnEMSD0058", false, "0", "0", "0", "ConversionI0258", false, "ConversionO0258", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Message Id");
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
            Page.addRecWithImsEms("RecipeIE0101", "", "IntfIMSA0058", false, "", false, "", false, "", false, "ConnEMSD0058", false, "0", "0", "0", "ConversionI0258", false, "ConversionO0258", false, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Correlation Id or Message Id");
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
        Page.delRecYes("RecipeIE0102").then(function () {
            Page.delCvrYes("ConversionI0259");
        }).then(function () {
            Page.delCvrYes("ConversionO0259");
        }).then(function () {
            Page.delMsgYes("MessageF0053");
        }).then(function () {
            Page.delBufYes("BufferF0053");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0059");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0053");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0053");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0059", "", false, false, "EndpointEMSF0053");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0059");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0053");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0053");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0059", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0053");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0053", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0053", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0259", "MessageF0053", "BufferF0053", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0259", "MessageF0053", "BufferF0053", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0102", "", "IntfIMSA0059", false, "", false, "", false, "", false, "ConnEMSD0059", false, "0", "0", "0", "ConversionI0259", false, "ConversionO0259", false);
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
            Page._addEmsPropertyRec("Value", "Reply", "prop-V01", "Property_Value01");
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
        Page.delRecYes("RecipeIE0103").then(function () {
            Page.delRecYes("RecipeIE0104");
        }).then(function () {
            Page.delCvrYes("ConversionI0260");
        }).then(function () {
            Page.delCvrYes("ConversionO0260");
        }).then(function () {
            Page.delMsgYes("MessageF0054");
        }).then(function () {
            Page.delBufYes("BufferF0054");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0060");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0054");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0054");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0060", "", false, false, "EndpointEMSF0054");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0060");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0054");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0054");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0060", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0054");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0054", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0054", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0260", "MessageF0054", "BufferF0054", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0260", "MessageF0054", "BufferF0054", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0103", "", "IntfIMSA0060", false, "", false, "", false, "", false, "ConnEMSD0060", false, "0", "0", "0", "ConversionI0260", false, "ConversionO0260", false);
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
            Page.addRecWithImsEms("RecipeIE0104", "", "IntfIMSA0060", false, "", false, "", false, "", false, "ConnEMSD0060", false, "0", "0", "0", "ConversionI0260", false, "ConversionO0260", false);
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
        Page.delRecYes("RecipeIE0105").then(function () {
            Page.delRecYes("RecipeIE0106");
        }).then(function () {
            Page.delCvrYes("ConversionI0261");
        }).then(function () {
            Page.delCvrYes("ConversionO0261");
        }).then(function () {
            Page.delMsgYes("MessageF0055");
        }).then(function () {
            Page.delBufYes("BufferF0055");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0061");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0055");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0055");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0061", "", false, false, "EndpointEMSF0055");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0061");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0055");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0055");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0061", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0055");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0055", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0055", "", undefined, "bufField00012222222233333333334444444444555555555566666666667777777777888888888", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField00032222222233333333334444444444555555555566666666667777777777888888888", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0261", "MessageF0055", "BufferF0055", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField00032222222233333333334444444444555555555566666666667777777777888888888", "msgField0003", "bufField00012222222233333333334444444444555555555566666666667777777777888888888", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0261", "MessageF0055", "BufferF0055", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField00032222222233333333334444444444555555555566666666667777777777888888888", "msgField0003", "bufField00012222222233333333334444444444555555555566666666667777777777888888888", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0105", "", "IntfIMSA0061", false, "", false, "", false, "", false, "ConnEMSD0061", false, "0", "0", "0", "ConversionI0261", false, "ConversionO0261", false);
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
            Page.addRecWithImsEms("RecipeIE0106", "", "IntfIMSA0061", false, "", false, "", false, "", false, "ConnEMSD0061", false, "0", "0", "0", "ConversionI0261", false, "ConversionO0261", false);
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
            return Page.eleRecEmsPropSysValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
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
            return Page.eleRecEmsPropValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecEmsPropDelButton);
        }).then(function () {
            Page.eleRecEmsPropDelButton.click();
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Required-Optional", "prop05", "");
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
            return Page.eleRecEmsPropValueInput.getAttribute("readonly");
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
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Test Recipe -> Add hundreds of EMS Properties for a recipe
    //
    it('Test Recipe -> Add hundreds of EMS Properties for a recipe', function () {
        Page.delRecYes("RecipeIE0107").then(function () {
            Page.delCvrYes("ConversionI0262");
        }).then(function () {
            Page.delCvrYes("ConversionO0262");
        }).then(function () {
            Page.delMsgYes("MessageF0056");
        }).then(function () {
            Page.delBufYes("BufferF0056");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0062");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0056");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0056");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0062", "", false, false, "EndpointEMSF0056");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0062");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0056");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0056");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0062", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0056");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0056", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0056", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0262", "MessageF0056", "BufferF0056", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0262", "MessageF0056", "BufferF0056", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0107", "", "IntfIMSA0062", false, "", false, "", false, "", false, "ConnEMSD0062", false, "0", "0", "0", "ConversionI0262", false, "ConversionO0262", false);
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
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0101", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0102", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0103", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0104", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0105", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0106", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0107", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0108", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0109", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0110", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0111", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0112", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0113", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0114", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0115", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0116", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0117", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0118", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0119", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0120", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0121", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0122", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0123", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0124", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0125", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0126", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0127", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0128", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0129", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0130", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0131", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0132", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0133", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0134", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0135", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0136", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0137", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0138", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0139", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0140", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0141", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0142", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0143", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0144", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0145", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0146", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0147", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0148", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0149", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0150", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0151", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0152", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0153", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0154", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0155", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0156", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0157", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0158", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0159", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0160", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0161", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0162", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0163", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0164", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0165", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0166", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0167", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0168", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0169", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0170", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0171", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0172", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0173", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0174", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0175", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0176", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0177", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0178", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0179", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0180", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0181", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0182", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0183", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0184", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0185", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0186", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0187", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0188", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0189", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0190", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0191", "value0001");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0192", "value0002");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0193", "value0003");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0194", "value0004");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0195", "value0005");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0196", "value0006");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0197", "value0007");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0198", "value0008");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0199", "value0009");
        }).then(function () {
            Page._addEmsPropertyRec("Value", "Reply", "prop-V0200", "value0010");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0201", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0202", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0203", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0204", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0205", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0206", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0207", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0208", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0209", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0210", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0211", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0212", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0213", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0214", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0215", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0216", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0217", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0218", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0219", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0220", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0221", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0222", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0223", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0224", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0225", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0226", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0227", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0228", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0229", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0230", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0231", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0232", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0233", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0234", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0235", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0236", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0237", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0238", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0239", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0240", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0241", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0242", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0243", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0244", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0245", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0246", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0247", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0248", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0249", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0250", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0251", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0252", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0253", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0254", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0255", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0256", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0257", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0258", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0259", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0260", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0261", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0262", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0263", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0264", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0265", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0266", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0267", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0268", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0269", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0270", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0271", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0272", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0273", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0274", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0275", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0276", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0277", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0278", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0279", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0280", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0281", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0282", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0283", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0284", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0285", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0286", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0287", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0288", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0289", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0290", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0291", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0292", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0293", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0294", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0295", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0296", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0297", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0298", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Optional", "prop-M0299", "bufField0003");
        }).then(function () {
            Page._addEmsPropertyRec("Message", "Request-Required", "prop-M0300", "bufField0001");
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
            expect(message === 'prop-V0150').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(200).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'prop-V0200').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(250).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'prop-M0250').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(300).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'prop-M0300').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(204).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'tibss-ss-id').to.be.true;
        });
    });

    // Test Recipe -> Delete several EMS Properties
    //
    it('Test Recipe -> Delete several EMS Properties', function () {
        Page.delRecYes("RecipeIE0108").then(function () {
            Page.delCvrYes("ConversionI0263");
        }).then(function () {
            Page.delCvrYes("ConversionO0263");
        }).then(function () {
            Page.delMsgYes("MessageF0057");
        }).then(function () {
            Page.delBufYes("BufferF0057");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0063");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0057");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0057");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0063", "", false, false, "EndpointEMSF0057");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0063");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0057");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0057");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0063", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0057");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0057", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0057", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0263", "MessageF0057", "BufferF0057", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0263", "MessageF0057", "BufferF0057", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0108", "", "IntfIMSA0063", false, "", false, "", false, "", false, "ConnEMSD0063", false, "0", "0", "0", "ConversionI0263", false, "ConversionO0263", false);
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
            Page._addEmsPropertyRec("System", "tibss-BES");
        }).then(function () {
            Page._addEmsPropertyRec("System", "tibss-envelope");
        }).then(function () {
            Page._addEmsPropertyRec("System", "tibss-service-id");
        }).then(function () {
            Page._addEmsPropertyRec("System", "tibss-ss-id");
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
            Page._delEmsPropertyRec("tibss-BES");
        }).then(function () {
            Page._delEmsPropertyRec("tibss-resource");
        }).then(function () {
            Page._delEmsPropertyRec("tibss-ss-id");
        }).then(function () {
            Page._delEmsPropertyRec("tibss-tran-code");
        }).then(function () {
            Page._delEmsPropertyRec("tibss-password");
        }).then(function () {
            Page._delEmsPropertyRec("tibss-MFS-Name");
        }).then(function () {
            Page._delEmsPropertyRec("prop-M0003");
        }).then(function () {
            Page._delEmsPropertyRec("prop-B0001");
        }).then(function () {
            Page._delEmsPropertyRec("prop-V0004");
        }).then(function () {
            Page._delEmsPropertyRec("prop-V0002");
        }).then(function () {
            Page._delEmsPropertyRec("prop-B0003");
        }).then(function () {
            Page._delEmsPropertyRec("prop-M0005");
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
            expect(message === 'prop-B0005').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'prop-V0001').to.be.true;
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
            expect(message === 'tibss-service-id').to.be.true;
        });
    });

    // Test Recipe -> Replicate several EMS Properties
    //
    it('Test Recipe -> Replicate several EMS Properties', function () {
        Page.delRecYes("RecipeIE0109").then(function () {
            Page.delCvrYes("ConversionI0264");
        }).then(function () {
            Page.delCvrYes("ConversionO0264");
        }).then(function () {
            Page.delMsgYes("MessageF0058");
        }).then(function () {
            Page.delBufYes("BufferF0058");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0064");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0058");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0058");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0064", "", false, false, "EndpointEMSF0058");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0064");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0058");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0058");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0064", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0058");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0058", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0058", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0264", "MessageF0058", "BufferF0058", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0264", "MessageF0058", "BufferF0058", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0109", "", "IntfIMSA0064", false, "", false, "", false, "", false, "ConnEMSD0064", false, "0", "0", "0", "ConversionI0264", false, "ConversionO0264", false);
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
            expect(message === 'tibss-BES').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(12).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'tibss-envelope').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(13).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(14).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'tibss-ss-id').to.be.true;
        });
    });

    // Test Recipe -> Reset Output Conversion, and then all the buffer type EMS properties will be cleared
    //
    it('Test Recipe -> Reset Output Conversion, and then all the buffer type EMS properties will be cleared', function () {
        Page.delRecYes("RecipeIE0110").then(function () {
            Page.delRecYes("RecipeIE0111");
        }).then(function () {
            Page.delRecYes("RecipeIE0112");
        }).then(function () {
            Page.delCvrYes("ConversionI0265");
        }).then(function () {
            Page.delCvrYes("ConversionO0265");
        }).then(function () {
            Page.delMsgYes("MessageF0059");
        }).then(function () {
            Page.delBufYes("BufferF0059");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0065");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0059");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0059");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0065", "", false, false, "EndpointEMSF0059");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0065");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0059");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0059");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0065", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0059");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0059", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0059", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0265", "MessageF0059", "BufferF0059", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0265", "MessageF0059", "BufferF0059", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion_O0065", "MessageF0059", "BufferF0059", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0110", "", "IntfIMSA0065", false, "", false, "", false, "", false, "ConnEMSD0065", false, "0", "0", "0", "ConversionI0265", false, "ConversionO0265", false);
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
            expect(message === 'ConversionO0265').to.be.true;
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
            expect(message === 'tibss-BES').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(6).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0111", "", "IntfIMSA0065", false, "", false, "", false, "", false, "ConnEMSD0065", false, "0", "0", "0", "ConversionI0265", false, "ConversionO0265", false);
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
            expect(message === 'prop-V0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-V0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'tibss-BES').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(5).isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0112", "", "IntfIMSA0065", false, "", false, "", false, "", false, "ConnEMSD0065", false, "0", "0", "0", "ConversionI0265", false, "ConversionO0265", false);
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
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
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
            expect(message === 'prop-V0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-V0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'tibss-BES').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(5).isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Test Recipe -> Reset Input Conversion, and then all the message type EMS properties will be cleared
    //
    it('Test Recipe -> Reset Input Conversion, and then all the message type EMS properties will be cleared', function () {
        Page.delRecYes("RecipeIE0113").then(function () {
            Page.delRecYes("RecipeIE0114");
        }).then(function () {
            Page.delRecYes("RecipeIE0115");
        }).then(function () {
            Page.delCvrYes("ConversionI0266");
        }).then(function () {
            Page.delCvrYes("ConversionO0266");
        }).then(function () {
            Page.delMsgYes("MessageF0060");
        }).then(function () {
            Page.delBufYes("BufferF0060");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0066");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0060");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0060");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0066", "", false, false, "EndpointEMSF0060");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0066");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0060");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0060");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0066", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0060");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0060", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0060", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0266", "MessageF0060", "BufferF0060", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0266", "MessageF0060", "BufferF0060", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion_I0066", "MessageF0060", "BufferF0060", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0113", "", "IntfIMSA0066", false, "", false, "", false, "", false, "ConnEMSD0066", false, "0", "0", "0", "ConversionI0266", false, "ConversionO0266", false);
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
            expect(message === 'ConversionI0266').to.be.true;
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
            expect(message === 'tibss-BES').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(6).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0114", "", "IntfIMSA0066", false, "", false, "", false, "", false, "ConnEMSD0066", false, "0", "0", "0", "ConversionI0266", false, "ConversionO0266", false);
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
            expect(message === 'prop-V0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-V0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'tibss-BES').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(5).isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0115", "", "IntfIMSA0066", false, "", false, "", false, "", false, "ConnEMSD0066", false, "0", "0", "0", "ConversionI0266", false, "ConversionO0266", false);
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
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
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
            expect(message === 'prop-V0001').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-V0002').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'tibss-BES').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            return Page.eleRecEmsPropName(5).isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Test Recipe -> EMS Selector
    //
    it('Test Recipe -> EMS Selector', function () {
        Page.delRecYes("RecipeIE0116").then(function () {
            Page.delCvrYes("ConversionI0267");
        }).then(function () {
            Page.delCvrYes("ConversionO0267");
        }).then(function () {
            Page.delMsgYes("MessageF0061");
        }).then(function () {
            Page.delBufYes("BufferF0061");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSD0067");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSF0061");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSF0061");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSD0067", "", false, false, "EndpointEMSF0061");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfImsYes("IntfIMSA0067");
        }).then(function () {
            definePage.delEndpointImsYes("EndpointIMSB0061");
        }).then(function () {
            definePage.addEndpointIms("EndpointIMSB0061");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfIms("IntfIMSA0067", undefined, undefined, undefined, undefined, undefined, undefined, "EndpointIMSB0061");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageF0061", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferF0061", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0267", "MessageF0061", "BufferF0061", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0267", "MessageF0061", "BufferF0061", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithImsEms("RecipeIE0116", "", "IntfIMSA0067", false, "", false, "", false, "", false, "ConnEMSD0067", false, "0", "0", "0", "ConversionI0267", false, "ConversionO0267", false);
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
            Page.eleRecEmsSelectorInput.clear().sendKeys("AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444");
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
            return Page.eleRecEmsSelectorValidateMsg.getAttribute("value");
        }).then(function (message) {
            expect(message === '"AAAAAAAAAA...": the value is too long, must be at most 234 characters').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecEmsSelectorInput.clear().sendKeys("AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????1111111111222222222233333333334444");
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
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????1111111111222222222233333333334444').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});