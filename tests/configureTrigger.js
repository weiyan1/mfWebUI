/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var configurePage = require('../pageObject/configurePage.js');
var DefinePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.6.4 Configure Trigger Page', function () {
    var Page = new configurePage();
    var definePage = new DefinePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleConfigureMenu.click();
    });

    // // Add a Trigger with EMS Connection successfully.
    // //
    // it('Add a Trigger with EMS Connection successfully', function () {
    //     browser.sleep(1000).then(function () {
    //         Page.delTrgYes("TriggerEMS0001");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0001");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0001");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0001");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0001");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0001");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0001", "", false, false, "EndpointEMSD0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0001", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0001", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0001", "MessageB0001", "BufferB0001", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0001", "", "ConnEMSA0001", "ConversionA0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     });
    // });
    //
    // // Add a Trigger with EMS Connection successfully, then replicate it.
    // //
    // it('Add a Trigger with EMS Connection, then replicate it successfully', function () {
    //     Page.delTrgYes("TriggerEMS0002-copy").then(function () {
    //         Page.delTrgYes("TriggerEMS0002");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0002");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0002");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0002");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0002");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0002");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0002", "", false, false, "EndpointEMSD0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0002", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0002", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0002", "MessageB0002", "BufferB0002", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0002", "", "ConnEMSA0002", "ConversionA0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.replicateTrg("TriggerEMS0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'TriggerEMS0002-copy').to.be.true;
    //     });
    // });
    //
    // // Add a Trigger with EMS Connection successfully, then update it.
    // //
    // it('Add a Trigger with EMS Connection, then update it successfully', function () {
    //     Page.delTrgYes("TriggerEMS0003").then(function () {
    //         Page.delCvrYes("ConversionA0003");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0004");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0003");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0004");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0003");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0004");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0003");
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0004");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0003");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0004");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0003", "", false, false, "EndpointEMSD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0004", "", false, false, "EndpointEMSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0003", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addMsg("MessageB0004", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0003", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0004", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0003", "MessageB0003", "BufferB0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0004", "MessageB0004", "BufferB0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0003", "AbCdEfG", "ConnEMSA0003", "ConversionA0003", "111", "33", "1", "Message", "5555", "11", "oPqRsT", false, "tibss.trg.publish1", "TOPIC", "77", "999", "tibss.trg.publishSec1", "tibss.trg.reply1", "TOPIC", "tibss.trg.error1", "TOPIC", "Reliable No-Ack", "Reliable", false, "1", false, "33333", "Minutes", false, false, false, "Map");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.updateTrgWithEms("TriggerEMS0003", "HiJkLmN", "ConnEMSA0004", "ConversionA0004", "222", "44", "2", "Status", "6666", "22", "uVwXyZ", true, "tibss.trg.publish2", "QUEUE", "88", "1000", "tibss.trg.publishSec2", "tibss.trg.reply2", "QUEUE", "tibss.trg.error2", "QUEUE", "Guaranteed All", "Persistent", true, "2", true, "44444", "Days", true, true, true, "Text");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'TriggerEMS0003').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'HiJkLmN').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConnEMSA0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionA0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '44').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMethodDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Status').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '6666').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'uVwXyZ').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.publish2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '88').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1000').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.publishSec2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.reply2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.error2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '44444').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Days').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgCompressionCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPreserveCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgBodyTraceCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Text').to.be.true;
    //     });
    // });
    //
    // // Add a Trigger with EMS Connection , make some changes, cancel the changes, then confirm the cancel operation.
    // //
    // it('Add a Trigger with EMS Connection, cancel the changes, then confirm the cancel operation', function () {
    //     Page.delTrgYes("TriggerEMS0004").then(function () {
    //         Page.delCvrYes("ConversionA0005");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0006");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0005");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0006");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0005");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0006");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0005");
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0006");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0005");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0006");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0005", "", false, false, "EndpointEMSD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0006", "", false, false, "EndpointEMSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0005", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addMsg("MessageB0006", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0005", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0006", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0005", "MessageB0005", "BufferB0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0006", "MessageB0006", "BufferB0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0004", "AbCdEfG", "ConnEMSA0005", "ConversionA0005", "111", "33", "1", "Message", "5555", "11", "oPqRsT", false, "tibss.trg.publish1", "TOPIC", "77", "999", "tibss.trg.publishSec1", "tibss.trg.reply1", "TOPIC", "tibss.trg.error1", "TOPIC", "Reliable No-Ack", "Reliable", false, "1", false, "33333", "Minutes", false, false, false, "Map");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.cancelTrgWithEmsYes("TriggerEMS0004", "HiJkLmN", "ConnEMSA0006", "ConversionA0006", "222", "44", "2", "Status", "6666", "22", "uVwXyZ", true, "tibss.trg.publish2", "QUEUE", "88", "1000", "tibss.trg.publishSec2", "tibss.trg.reply2", "QUEUE", "tibss.trg.error2", "QUEUE", "Guaranteed All", "Persistent", true, "2", true, "44444", "Days", true, true, true, "Text");
    //     }).then(function () {
    //         Page.eleTrgLeftmenu.click();
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleSearchInput);
    //     }).then(function () {
    //         Page.eleSearchInput.clear().sendKeys("TriggerEMS0004");
    //     }).then(function () {
    //         Page.eleSearchIcon.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleEntityNameSearched);
    //     }).then(function () {
    //         Page.eleEntityNameSearched.click();
    //     }).then(function () {
    //         Page.eleDetailSlideBar.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleDetailHeader);
    //     }).then(function () {
    //         return Page.eleTrgNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'TriggerEMS0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'AbCdEfG').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConnEMSA0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionA0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '111').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '33').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMethodDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Message').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5555').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '11').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'oPqRsT').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.publish1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '77').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '999').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.publishSec1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.reply1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.error1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '33333').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Minutes').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgCompressionCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPreserveCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgBodyTraceCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Map').to.be.true;
    //     });
    // });
    //
    // // Add a Trigger with EMS Connection, make some changes, cancel the changes, then discard the cancel operation.
    // //
    // it('Add a Trigger with EMS Connection, cancel the changes, then discard the cancel operation', function () {
    //     Page.delTrgYes("TriggerEMS0005").then(function () {
    //         Page.delCvrYes("ConversionA0007");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0008");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0007");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0008");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0007");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0008");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0007");
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0008");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0007");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0008");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0007", "", false, false, "EndpointEMSD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0008", "", false, false, "EndpointEMSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0007", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addMsg("MessageB0008", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0007", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0008", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0007", "MessageB0007", "BufferB0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0008", "MessageB0008", "BufferB0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0005", "AbCdEfG", "ConnEMSA0007", "ConversionA0007", "111", "33", "1", "Message", "5555", "11", "oPqRsT", false, "tibss.trg.publish1", "TOPIC", "77", "999", "tibss.trg.publishSec1", "tibss.trg.reply1", "TOPIC", "tibss.trg.error1", "TOPIC", "Reliable No-Ack", "Reliable", false, "1", false, "33333", "Minutes", false, false, false, "Map");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.cancelTrgWithEmsNo("TriggerEMS0005", "HiJkLmN", "ConnEMSA0008", "ConversionA0008", "222", "44", "2", "Status", "6666", "22", "uVwXyZ", true, "tibss.trg.publish2", "QUEUE", "88", "1000", "tibss.trg.publishSec2", "tibss.trg.reply2", "QUEUE", "tibss.trg.error2", "QUEUE", "Guaranteed All", "Persistent", true, "2", true, "44444", "Days", true, true, true, "Text");
    //     }).then(function () {
    //         return Page.eleTrgNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'TriggerEMS0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'HiJkLmN').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConnEMSA0008').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionA0008').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '44').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMethodDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Status').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '6666').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'uVwXyZ').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.publish2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '88').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1000').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.publishSec2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.reply2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.error2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '44444').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Days').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgCompressionCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPreserveCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgBodyTraceCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Text').to.be.true;
    //     });
    // });
    //
    // // Add a Trigger with EMS Connection, make some changes, then reset it.
    // //
    // it('Add a Trigger with EMS Connection, make some changes, then reset it', function () {
    //     Page.delTrgYes("TriggerEMS0006").then(function () {
    //         Page.delCvrYes("ConversionA0009");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0010");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0009");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0010");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0009");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0010");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0009");
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0010");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0009");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0010");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0009");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0010");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0009", "", false, false, "EndpointEMSD0009");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0010", "", false, false, "EndpointEMSD0010");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0009", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addMsg("MessageB0010", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0009", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0010", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0009", "MessageB0009", "BufferB0009", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0010", "MessageB0010", "BufferB0010", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0006", "AbCdEfG", "ConnEMSA0009", "ConversionA0009", "111", "33", "1", "Message", "5555", "11", "oPqRsT", false, "tibss.trg.publish1", "TOPIC", "77", "999", "tibss.trg.publishSec1", "tibss.trg.reply1", "TOPIC", "tibss.trg.error1", "TOPIC", "Reliable No-Ack", "Reliable", false, "1", false, "33333", "Minutes", false, false, false, "Map");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.resetTrgWithEms("TriggerEMS0006", "HiJkLmN", "ConnEMSA0010", "ConversionA0010", "222", "44", "2", "Status", "6666", "22", "uVwXyZ", true, "tibss.trg.publish2", "QUEUE", "88", "1000", "tibss.trg.publishSec2", "tibss.trg.reply2", "QUEUE", "tibss.trg.error2", "QUEUE", "Guaranteed All", "Persistent", true, "2", true, "44444", "Days", true, true, true, "Text");
    //     }).then(function () {
    //         return Page.eleTrgNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'TriggerEMS0006').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'AbCdEfG').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConnEMSA0009').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionA0009').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '111').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '33').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMethodDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Message').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5555').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '11').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'oPqRsT').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.publish1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '77').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '999').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.publishSec1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.reply1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.error1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '33333').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Minutes').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgCompressionCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPreserveCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgBodyTraceCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Map').to.be.true;
    //     });
    // });
    //
    // // Add a Trigger with EMS Connection, then add a Trigger with the same name, then confirm the overwrite operation.
    // //
    // it('Add a Trigger with EMS Connection to overwrite an existing Trigger, then confirm the overwrite operation', function () {
    //     Page.delTrgYes("TriggerEMS0007").then(function () {
    //         Page.delCvrYes("ConversionA0011");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0012");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0011");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0012");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0011");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0012");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0011");
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0012");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0011");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0012");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0011");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0012");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0011", "", false, false, "EndpointEMSD0011");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0012", "", false, false, "EndpointEMSD0012");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0011", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addMsg("MessageB0012", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0011", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0012", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0011", "MessageB0011", "BufferB0011", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0012", "MessageB0012", "BufferB0012", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0007", "AbCdEfG", "ConnEMSA0011", "ConversionA0011", "111", "33", "1", "Message", "5555", "11", "oPqRsT", false, "tibss.trg.publish1", "TOPIC", "77", "999", "tibss.trg.publishSec1", "tibss.trg.reply1", "TOPIC", "tibss.trg.error1", "TOPIC", "Reliable No-Ack", "Reliable", false, "1", false, "33333", "Minutes", false, false, false, "Map");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0007", "HiJkLmN", "ConnEMSA0012", "ConversionA0012", "222", "44", "2", "Status", "6666", "22", "uVwXyZ", true, "tibss.trg.publish2", "QUEUE", "88", "1000", "tibss.trg.publishSec2", "tibss.trg.reply2", "QUEUE", "tibss.trg.error2", "QUEUE", "Guaranteed All", "Persistent", true, "2", true, "44444", "Days", true, true, true, "Text");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalPage.eleOKButton);
    //     }).then(function () {
    //         globalPage.eleOKButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'TriggerEMS0007').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'HiJkLmN').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConnEMSA0012').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionA0012').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '44').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMethodDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Status').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '6666').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'uVwXyZ').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.publish2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '88').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1000').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.publishSec2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.reply2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.error2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '44444').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Days').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgCompressionCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPreserveCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgBodyTraceCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Text').to.be.true;
    //     });
    // });
    //
    // // Add a Trigger with EMS Connection, then add a Trigger with the same name, then discard the overwrite operation.
    // //
    // it('Add a Trigger with EMS Connection to overwrite an existing Trigger, then discard the overwrite operation', function () {
    //     Page.delTrgYes("TriggerEMS0008").then(function () {
    //         Page.delCvrYes("ConversionA0013");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0014");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0013");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0014");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0013");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0014");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0013");
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0014");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0013");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0014");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0013");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0014");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0013", "", false, false, "EndpointEMSD0013");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0014", "", false, false, "EndpointEMSD0014");
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
    //         Page.addMsg("MessageB0014", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0013", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0014", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0013", "MessageB0013", "BufferB0013", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0014", "MessageB0014", "BufferB0014", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0008", "AbCdEfG", "ConnEMSA0013", "ConversionA0013", "111", "33", "1", "Message", "5555", "11", "oPqRsT", false, "tibss.trg.publish1", "TOPIC", "77", "999", "tibss.trg.publishSec1", "tibss.trg.reply1", "TOPIC", "tibss.trg.error1", "TOPIC", "Reliable No-Ack", "Reliable", false, "1", false, "33333", "Minutes", false, false, false, "Map");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0008", "HiJkLmN", "ConnEMSA0014", "ConversionA0014", "222", "44", "2", "Status", "6666", "22", "uVwXyZ", true, "tibss.trg.publish2", "QUEUE", "88", "1000", "tibss.trg.publishSec2", "tibss.trg.reply2", "QUEUE", "tibss.trg.error2", "QUEUE", "Guaranteed All", "Persistent", true, "2", true, "44444", "Days", true, true, true, "Text");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalPage.eleNoButton);
    //     }).then(function () {
    //         globalPage.eleNoButton.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgLeftmenu);
    //     }).then(function () {
    //         Page.eleTrgLeftmenu.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalPage.eleYesButton);
    //     }).then(function () {
    //         globalPage.eleYesButton.click();
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleSearchInput);
    //     }).then(function () {
    //         Page.eleSearchInput.clear().sendKeys("TriggerEMS0008");
    //     }).then(function () {
    //         Page.eleSearchIcon.click();
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
    //     }).then(function () {
    //         Page.eleEntityNameSearched.click();
    //     }).then(function () {
    //         Page.eleDetailSlideBar.click();
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleTrgNameInput);
    //     }).then(function () {
    //         return Page.eleTrgNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'TriggerEMS0008').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'AbCdEfG').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConnEMSA0013').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionA0013').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '111').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '33').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMethodDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Message').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5555').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '11').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'oPqRsT').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.publish1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '77').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '999').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.publishSec1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.reply1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'tibss.trg.error1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '33333').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Minutes').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgCompressionCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPreserveCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgBodyTraceCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Map').to.be.true;
    //     });
    // });
    //
    // // Add a Trigger with EMS Connection, delete it, then confirm the delete operation.
    // //
    // it('Add a Trigger with EMS Connection, delete it, then confirm the delete operation', function () {
    //     Page.delTrgYes("TriggerEMS0009").then(function () {
    //         Page.delCvrYes("ConversionA0015");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0015");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0015");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0015");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0015");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0015");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0015", "", false, false, "EndpointEMSD0015");
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
    //         Page.addCvr("ConversionA0015", "MessageB0015", "BufferB0015", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0009", "AbCdEfG", "ConnEMSA0015", "ConversionA0015");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0009");
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleSearchInput);
    //     }).then(function () {
    //         Page.eleSearchInput.clear().sendKeys("TriggerEMS0009");
    //     }).then(function () {
    //         Page.eleSearchIcon.click();
    //     }).then(function () {
    //         return Page.eleEntityNameSearched.isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     });
    // });
    //
    // // Add a Trigger with EMS Connection, delete it, then discard the delete operation.
    // //
    // it('Should add a Trigger with EMS Connection, delete it, then discard the delete operation', function () {
    //     Page.delTrgYes("TriggerEMS0010").then(function () {
    //         Page.delCvrYes("ConversionA0016");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0016");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0016");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0016");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0016");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0016");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0016", "", false, false, "EndpointEMSD0016");
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
    //         Page.addCvr("ConversionA0016", "MessageB0016", "BufferB0016", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0010", "AbCdEfG", "ConnEMSA0016", "ConversionA0016");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.delTrgNo("TriggerEMS0010");
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleSearchInput);
    //     }).then(function () {
    //         Page.eleSearchInput.clear().sendKeys("TriggerEMS0010");
    //     }).then(function () {
    //         Page.eleSearchIcon.click();
    //     }).then(function () {
    //         return Page.eleEntityNameSearched.isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.true;
    //     });
    // });

    // Add a Trigger with RV Connection successfully.
    //
    it('Add a Trigger with RV Connection successfully', function () {
        Page.delTrgYes("TriggerRV0001").then(function () {
        }).then(function () {
            Page.delCvrYes("ConversionB0001");
        }).then(function () {
            Page.delMsgYes("MessageC0001");
        }).then(function () {
            Page.delBufYes("BufferC0001");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0001");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0001");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0001", "", false, "EndpointRVC0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0001", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0001", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0001", "MessageC0001", "BufferC0001", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0001", "", "ConnRVA0001", "ConversionB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // // Test 'Audit' & 'Refresh' button.
    // //
    // it('Test Audit & Refresh button', function () {
    //     Page.delTrgYes("Trigger0011").then(function () {
    //         Page.addTrg("Trigger0011", "aBcDeFg", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleDeleteButton.getAttribute('disabled');
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRefreshButton);
    //     }).then(function () {
    //         Page.eleRefreshButton.click();
    //     }).then(function () {
    //         browser.sleep(500);
    //     }).then(function () {
    //         return Page.eleDeleteButton.getAttribute('disabled');
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleAuditButton);
    //     }).then(function () {
    //         return Page.eleTableHeader3.isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleAuditButton);
    //     }).then(function () {
    //         Page.eleAuditButton.click();
    //     }).then(function () {
    //         browser.sleep(500);
    //     }).then(function () {
    //         return Page.eleTableHeader3.getText();
    //     }).then(function (message) {
    //         expect(message === 'Modified On').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleAuditButton);
    //     }).then(function () {
    //         Page.eleAuditButton.click();
    //     }).then(function () {
    //         browser.sleep(500);
    //     }).then(function () {
    //         return Page.eleTableHeader3.isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     });
    // });
    //
    // //Test Trigger Details panel fields default value.
    // //
    // it('Test Trigger Details panel fields default value', function () {
    //     globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
    //         Page.eleTrgLeftmenu.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleAddButton);
    //     }).then(function () {
    //         Page.eleAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgNameInput);
    //     }).then(function () {
    //         return Page.eleTrgFieldName(1).isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgFieldAddButton);
    //     }).then(function () {
    //         Page.eleTrgFieldAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgFieldNameInput);
    //     }).then(function () {
    //         return Page.eleTrgNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldTypeInput.getText();
    //     }).then(function (message) {
    //         expect(message === 'STR').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldIdNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldSeqSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDecSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'New_field').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleCancelButton);
    //     }).then(function () {
    //         Page.eleCancelButton.click();
    //     }).then(function () {
    //         globalPage.isWarningYes();
    //     });
    // });
    //
    // // Test Trigger Details panel mandatory fields.
    // //
    // it('Test Trigger Details panel mandatory fields', function () {
    //     globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgLeftmenu);
    //     }).then(function () {
    //         Page.eleTrgLeftmenu.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleAddButton);
    //     }).then(function () {
    //         Page.eleAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgNameValidateTrg.getText();
    //     }).then(function (message) {
    //         expect(message === 'A non-empty value is required').to.be.true;
    //     }).then(function () {
    //         Page.eleCancelButton.click();
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Name'
    // //
    // it('Test field Trigger -> Name', function () {
    //     Page.delTrgYes("Trigger0012_@#$_22223333333333444444444").then(function () {
    //         Page.addTrg("Trigger0012_@#$_22223333333333444444444", "aBcDeFg", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgNameInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'Trigger0012_@#$_22223333333333444444444').to.be.true;
    //     }).then(function () {
    //         Page.delTrgYes("Trigger0013_@#$_22223333333333444444444");
    //     }).then(function () {
    //         Page.addTrg("Trigger0013_@#$_222233333333334444444444", "aBcDeFg", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgNameInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'Trigger0013_@#$_22223333333333444444444').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Description'
    // //
    // it('Test field Trigger -> Description', function () {
    //     Page.delTrgYes("Trigger0014").then(function () {
    //         Page.addTrg("Trigger0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDescInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
    //     }).then(function () {
    //         Page.delTrgYes("Trigger0015");
    //     }).then(function () {
    //         Page.addTrg("Trigger0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111","msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgDescValidateTrg);
    //     }).then(function () {
    //         return Page.eleTrgDescValidateTrg.getText();
    //     }).then(function (message) {
    //         expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgDescInput);
    //     }).then(function () {
    //         Page.eleTrgDescInput.clear().sendKeys("Corrected");
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
    // // Test field 'Trigger Details panel' -> 'Trigger Fields Type'
    // //
    // it('Test field Trigger -> Trigger Fields Type', function () {
    //     Page.delTrgYes("Trigger0016").then(function () {
    //         Page.addTrg("Trigger0016", "", "msgField0001", "DAT", "0", "0", "0", "msgField0002", "OPA", "0", "1", "0", "msgField0003", "MSG", "0", "2", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgFieldAddButton);
    //     }).then(function () {
    //         Page.eleTrgFieldAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgFieldTypeDropdown);
    //     }).then(function () {
    //         Page.eleTrgFieldTypeDropdown.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgFieldType01);
    //     }).then(function () {
    //         return Page.eleTrgFieldType01.getText();
    //     }).then(function (message) {
    //         expect(message === 'DAT').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType02.getText();
    //     }).then(function (message) {
    //         expect(message === 'OPA').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType03.getText();
    //     }).then(function (message) {
    //         expect(message === 'MSG').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType04.getText();
    //     }).then(function (message) {
    //         expect(message === 'STR').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType05.getText();
    //     }).then(function (message) {
    //         expect(message === 'BOL').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType06.getText();
    //     }).then(function (message) {
    //         expect(message === 'I8').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType07.getText();
    //     }).then(function (message) {
    //         expect(message === 'U8').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType08.getText();
    //     }).then(function (message) {
    //         expect(message === 'I16').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType09.getText();
    //     }).then(function (message) {
    //         expect(message === 'U16').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType10.getText();
    //     }).then(function (message) {
    //         expect(message === 'I32').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType11.getText();
    //     }).then(function (message) {
    //         expect(message === 'U32').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType12.getText();
    //     }).then(function (message) {
    //         expect(message === 'I64').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType13.getText();
    //     }).then(function (message) {
    //         expect(message === 'U64').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType14.getText();
    //     }).then(function (message) {
    //         expect(message === 'F32').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType15.getText();
    //     }).then(function (message) {
    //         expect(message === 'F64').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType16.getText();
    //     }).then(function (message) {
    //         expect(message === 'POR').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType17.getText();
    //     }).then(function (message) {
    //         expect(message === 'IPA').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleResetButton);
    //     }).then(function () {
    //         Page.eleResetButton.click();
    //     }).then(function () {
    //         Page._addTrgField("msgField0004", "STR", "0", "3", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0005", "BOL", "0", "4", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0006", "I8", "0", "5", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0007", "U8", "0", "6", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0008", "I16", "0", "7", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0009", "U16", "0", "8", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0010", "I32", "0", "9", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0011", "U32", "0", "10", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0012", "I64", "0", "11", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0013", "U64", "0", "12", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0014", "F32", "0", "13", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0015", "F64", "0", "14", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0016", "POR", "0", "15", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0017", "IPA", "0", "16", "0");
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
    //         globalCommons.waitForElementPresent(Page.eleTrgFieldType(1));
    //     }).then(function () {
    //         return Page.eleTrgFieldType(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'DAT').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(2).getText();
    //     }).then(function (message) {
    //         expect(message === 'OPA').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(3).getText();
    //     }).then(function (message) {
    //         expect(message === 'MSG').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(4).getText();
    //     }).then(function (message) {
    //         expect(message === 'STR').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(5).getText();
    //     }).then(function (message) {
    //         expect(message === 'BOL').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(6).getText();
    //     }).then(function (message) {
    //         expect(message === 'I8').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(7).getText();
    //     }).then(function (message) {
    //         expect(message === 'U8').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(8).getText();
    //     }).then(function (message) {
    //         expect(message === 'I16').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(9).getText();
    //     }).then(function (message) {
    //         expect(message === 'U16').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(10).getText();
    //     }).then(function (message) {
    //         expect(message === 'I32').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(11).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'U32').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(12).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'I64').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(13).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'U64').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(14).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'F32').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(15).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'F64').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(16).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'POR').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(17).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'IPA').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Trigger Fields ID #'
    // //
    // it('Test field Trigger -> Trigger Fields ID #', function () {
    //     Page.delTrgYes("Trigger0017").then(function () {
    //         Page.addTrg("Trigger0017", "", "msgField0001", "STR", "0", "0", "0", "msgField0002", "STR", "1", "0", "0", "msgField0003", "STR", "999", "0", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addTrgField("msgField0004", "STR", "9000", "0", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0005", "STR", "9998", "0", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0006", "STR", "9999", "0", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0007", "STR", "10000", "0", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0008", "STR", "12345", "0", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0009", "STR", "654321", "0", "0");
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
    //         globalCommons.waitForElementPresent(Page.eleTrgFieldIdNum(1));
    //     }).then(function () {
    //         return Page.eleTrgFieldIdNum(1).getText();
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldIdNum(2).getText();
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldIdNum(3).getText();
    //     }).then(function (message) {
    //         expect(message === '999').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldIdNum(4).getText();
    //     }).then(function (message) {
    //         expect(message === '9000').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldIdNum(5).getText();
    //     }).then(function (message) {
    //         expect(message === '9998').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldIdNum(6).getText();
    //     }).then(function (message) {
    //         expect(message === '9999').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldIdNum(7).getText();
    //     }).then(function (message) {
    //         expect(message === '1000').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldIdNum(8).getText();
    //     }).then(function (message) {
    //         expect(message === '1234').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldIdNum(9).getText();
    //     }).then(function (message) {
    //         expect(message === '6543').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Trigger Fields Sequence #'
    // //
    // it('Test field Trigger -> Trigger Fields Sequence #', function () {
    //     Page.delTrgYes("Trigger0018").then(function () {
    //         Page.addTrg("Trigger0018", "", "msgField0001", "STR", "0", "0", "0", "msgField0002", "STR", "0", "1", "0", "msgField0003", "STR", "0", "999", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addTrgField("msgField0004", "STR", "0", "9000", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0005", "STR", "0", "9998", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0006", "STR", "0", "9999", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0007", "STR", "0", "10000", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0008", "STR", "0", "12345", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0009", "STR", "0", "654321", "0");
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
    //         globalCommons.waitForElementPresent(Page.eleTrgFieldSeq(1));
    //     }).then(function () {
    //         return Page.eleTrgFieldSeq(1).getText();
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldSeq(2).getText();
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldSeq(3).getText();
    //     }).then(function (message) {
    //         expect(message === '999').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldSeq(4).getText();
    //     }).then(function (message) {
    //         expect(message === '1000').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldSeq(5).getText();
    //     }).then(function (message) {
    //         expect(message === '1234').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldSeq(6).getText();
    //     }).then(function (message) {
    //         expect(message === '6543').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldSeq(7).getText();
    //     }).then(function (message) {
    //         expect(message === '9000').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldSeq(8).getText();
    //     }).then(function (message) {
    //         expect(message === '9998').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldSeq(9).getText();
    //     }).then(function (message) {
    //         expect(message === '9999').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Trigger Fields Decimals'
    // //
    // it('Test field Trigger -> Trigger Fields Decimals', function () {
    //     Page.delTrgYes("Trigger0019").then(function () {
    //         Page.addTrg("Trigger0019", "", "msgField0001", "STR", "0", "0", "0", "msgField0002", "STR", "0", "0", "1", "msgField0003", "STR", "0", "0", "2");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addTrgField("msgField0004", "STR", "0", "0", "3");
    //     }).then(function () {
    //         Page._addTrgField("msgField0005", "STR", "0", "0", "4");
    //     }).then(function () {
    //         Page._addTrgField("msgField0006", "STR", "0", "0", "5");
    //     }).then(function () {
    //         Page._addTrgField("msgField0007", "STR", "0", "0", "6");
    //     }).then(function () {
    //         Page._addTrgField("msgField0008", "STR", "0", "0", "7");
    //     }).then(function () {
    //         Page._addTrgField("msgField0009", "STR", "0", "0", "8");
    //     }).then(function () {
    //         Page._addTrgField("msgField0010", "STR", "0", "0", "9");
    //     }).then(function () {
    //         Page._addTrgField("msgField0011", "STR", "0", "0", "10");
    //     }).then(function () {
    //         Page._addTrgField("msgField0012", "STR", "0", "0", "22");
    //     }).then(function () {
    //         Page._addTrgField("msgField0013", "STR", "0", "0", "333");
    //     }).then(function () {
    //         Page._addTrgField("msgField0014", "STR", "0", "0", "4444");
    //     }).then(function () {
    //         Page._addTrgField("msgField0015", "STR", "0", "0", "55555");
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
    //         globalCommons.waitForElementPresent(Page.eleTrgFieldDec(1));
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(1).getText();
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(2).getText();
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(3).getText();
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(4).getText();
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(5).getText();
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(6).getText();
    //     }).then(function (message) {
    //         expect(message === '5').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(7).getText();
    //     }).then(function (message) {
    //         expect(message === '6').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(8).getText();
    //     }).then(function (message) {
    //         expect(message === '7').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(9).getText();
    //     }).then(function (message) {
    //         expect(message === '8').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(10).getText();
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(11).getText();
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(12).getText();
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(13).getText();
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(14).getText();
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(15).getText();
    //     }).then(function (message) {
    //         expect(message === '5').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Trigger Fields Name'
    // //
    // it('Test field Trigger -> Trigger Fields Name', function () {
    //     Page.delTrgYes("Trigger0020").then(function () {
    //         Page.delTrgYes("Trigger0021");
    //     }).then(function () {
    //         Page.addTrg("Trigger0020", "", "c", "STR", "0", "0", "0", "B", "STR", "0", "0", "0", "321", "STR", "0", "0", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addTrgField("000");
    //     }).then(function () {
    //         Page._addTrgField("@");
    //     }).then(function () {
    //         Page._addTrgField("d0ABc");
    //     }).then(function () {
    //         Page._addTrgField("aaaaa");
    //     }).then(function () {
    //         Page._addTrgField("#");
    //     }).then(function () {
    //         Page._addTrgField("231");
    //     }).then(function () {
    //         Page._addTrgField("ABC");
    //     }).then(function () {
    //         Page._addTrgField("&");
    //     }).then(function () {
    //         Page._addTrgField("aBC");
    //     }).then(function () {
    //         Page._addTrgField("ddd");
    //     }).then(function () {
    //         Page._addTrgField("msg@#&0000012222222233333333334444444444555555555566666666667777777777888888888");
    //     }).then(function () {
    //         Page._addTrgField("$&@#!%*Field22222222333333333344444444445555555555666666666677777777778888888888");
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
    //         globalCommons.waitForElementPresent(Page.eleTrgFieldName(1));
    //     }).then(function () {
    //         return Page.eleTrgFieldName(1).getText();
    //     }).then(function (message) {
    //         expect(message === '#').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(2).getText();
    //     }).then(function (message) {
    //         expect(message === '$&@#!%*Field2222222233333333334444444444555555555566666666667777777777888888888').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(3).getText();
    //     }).then(function (message) {
    //         expect(message === '&').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(4).getText();
    //     }).then(function (message) {
    //         expect(message === '000').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(5).getText();
    //     }).then(function (message) {
    //         expect(message === '231').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(6).getText();
    //     }).then(function (message) {
    //         expect(message === '321').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(7).getText();
    //     }).then(function (message) {
    //         expect(message === '@').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(8).getText();
    //     }).then(function (message) {
    //         expect(message === 'aaaaa').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(9).getText();
    //     }).then(function (message) {
    //         expect(message === 'ABC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(10).getText();
    //     }).then(function (message) {
    //         expect(message === 'aBC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(11).getText();
    //     }).then(function (message) {
    //         expect(message === 'B').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(12).getText();
    //     }).then(function (message) {
    //         expect(message === 'c').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(13).getText();
    //     }).then(function (message) {
    //         expect(message === 'd0ABc').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(14).getText();
    //     }).then(function (message) {
    //         expect(message === 'ddd').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(15).getText();
    //     }).then(function (message) {
    //         expect(message === 'msg@#&0000012222222233333333334444444444555555555566666666667777777777888888888').to.be.true;
    //     }).then(function () {
    //         Page.addTrg("Trigger0021", "", "msgField0001", "STR", "0", "0", "0", "msgField0002", "STR", "0", "0", "0", "msgField0003", "STR", "0", "0", "0");
    //     }).then(function () {
    //         Page._addTrgField("msgField0004");
    //     }).then(function () {
    //         Page._addTrgField("msgField0004");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgFieldNameValidateTrg);
    //     }).then(function () {
    //         return Page.eleTrgFieldNameValidateTrg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Duplicate row').to.be.true;
    //     }).then(function () {
    //         Page.eleTrgFieldNameInput.clear().sendKeys("msgField0005");
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
    //         globalCommons.waitForElementPresent(Page.eleTrgFieldName(4));
    //     }).then(function () {
    //         return Page.eleTrgFieldName(4).getText();
    //     }).then(function (message) {
    //         expect(message === 'msgField0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(5).getText();
    //     }).then(function (message) {
    //         expect(message === 'msgField0005').to.be.true;
    //     });
    // });
    //
    // // Test Trigger -> Add 600 fields
    // //
    // it('Test Trigger -> Add 600 fields', function () {
    //     Page.delTrgYes("Trigger0022").then(function () {
    //         Page.addTrg("Trigger0022", "", "msgField0001", "STR", "0", "0", "0", "msgField0002", "STR", "0", "0", "0", "msgField0003", "STR", "0", "0", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addTrgField2("msgField0004");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0005");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0006");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0007");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0008");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0009");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0010");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0011");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0012");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0013");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0014");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0015");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0016");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0017");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0018");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0019");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0020");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0021");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0022");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0023");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0024");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0025");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0026");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0027");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0028");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0029");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0030");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0031");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0032");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0033");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0034");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0035");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0036");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0037");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0038");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0039");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0040");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0041");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0042");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0043");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0044");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0045");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0046");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0047");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0048");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0049");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0050");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0051");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0052");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0053");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0054");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0055");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0056");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0057");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0058");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0059");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0060");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0061");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0062");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0063");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0064");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0065");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0066");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0067");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0068");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0069");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0070");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0071");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0072");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0073");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0074");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0075");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0076");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0077");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0078");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0079");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0080");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0081");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0082");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0083");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0084");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0085");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0086");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0087");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0088");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0089");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0090");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0091");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0092");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0093");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0094");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0095");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0096");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0097");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0098");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0099");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0100");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0101");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0102");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0103");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0104");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0105");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0106");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0107");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0108");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0109");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0110");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0111");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0112");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0113");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0114");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0115");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0116");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0117");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0118");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0119");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0120");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0121");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0122");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0123");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0124");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0125");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0126");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0127");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0128");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0129");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0130");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0131");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0132");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0133");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0134");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0135");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0136");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0137");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0138");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0139");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0140");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0141");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0142");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0143");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0144");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0145");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0146");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0147");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0148");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0149");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0150");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0151");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0152");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0153");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0154");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0155");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0156");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0157");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0158");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0159");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0160");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0161");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0162");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0163");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0164");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0165");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0166");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0167");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0168");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0169");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0170");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0171");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0172");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0173");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0174");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0175");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0176");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0177");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0178");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0179");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0180");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0181");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0182");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0183");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0184");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0185");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0186");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0187");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0188");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0189");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0190");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0191");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0192");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0193");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0194");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0195");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0196");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0197");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0198");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0199");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0200");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0201");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0202");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0203");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0204");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0205");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0206");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0207");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0208");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0209");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0210");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0211");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0212");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0213");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0214");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0215");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0216");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0217");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0218");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0219");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0220");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0221");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0222");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0223");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0224");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0225");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0226");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0227");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0228");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0229");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0230");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0231");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0232");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0233");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0234");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0235");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0236");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0237");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0238");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0239");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0240");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0241");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0242");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0243");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0244");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0245");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0246");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0247");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0248");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0249");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0250");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0251");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0252");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0253");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0254");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0255");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0256");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0257");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0258");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0259");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0260");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0261");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0262");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0263");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0264");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0265");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0266");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0267");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0268");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0269");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0270");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0271");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0272");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0273");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0274");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0275");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0276");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0277");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0278");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0279");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0280");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0281");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0282");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0283");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0284");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0285");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0286");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0287");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0288");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0289");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0290");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0291");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0292");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0293");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0294");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0295");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0296");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0297");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0298");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0299");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0300");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0301");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0302");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0303");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0304");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0305");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0306");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0307");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0308");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0309");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0310");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0311");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0312");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0313");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0314");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0315");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0316");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0317");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0318");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0319");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0320");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0321");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0322");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0323");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0324");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0325");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0326");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0327");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0328");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0329");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0330");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0331");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0332");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0333");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0334");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0335");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0336");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0337");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0338");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0339");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0340");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0341");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0342");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0343");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0344");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0345");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0346");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0347");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0348");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0349");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0350");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0351");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0352");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0353");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0354");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0355");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0356");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0357");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0358");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0359");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0360");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0361");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0362");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0363");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0364");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0365");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0366");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0367");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0368");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0369");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0370");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0371");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0372");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0373");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0374");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0375");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0376");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0377");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0378");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0379");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0380");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0381");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0382");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0383");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0384");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0385");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0386");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0387");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0388");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0389");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0390");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0391");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0392");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0393");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0394");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0395");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0396");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0397");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0398");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0399");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0400");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0401");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0402");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0403");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0404");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0405");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0406");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0407");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0408");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0409");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0410");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0411");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0412");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0413");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0414");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0415");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0416");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0417");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0418");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0419");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0420");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0421");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0422");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0423");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0424");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0425");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0426");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0427");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0428");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0429");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0430");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0431");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0432");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0433");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0434");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0435");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0436");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0437");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0438");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0439");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0440");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0441");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0442");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0443");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0444");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0445");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0446");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0447");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0448");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0449");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0450");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0451");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0452");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0453");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0454");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0455");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0456");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0457");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0458");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0459");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0460");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0461");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0462");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0463");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0464");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0465");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0466");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0467");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0468");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0469");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0470");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0471");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0472");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0473");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0474");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0475");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0476");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0477");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0478");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0479");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0480");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0481");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0482");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0483");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0484");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0485");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0486");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0487");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0488");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0489");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0490");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0491");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0492");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0493");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0494");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0495");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0496");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0497");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0498");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0499");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0500");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0501");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0502");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0503");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0504");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0505");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0506");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0507");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0508");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0509");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0510");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0511");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0512");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0513");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0514");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0515");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0516");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0517");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0518");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0519");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0520");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0521");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0522");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0523");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0524");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0525");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0526");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0527");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0528");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0529");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0530");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0531");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0532");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0533");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0534");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0535");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0536");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0537");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0538");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0539");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0540");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0541");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0542");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0543");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0544");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0545");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0546");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0547");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0548");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0549");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0550");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0551");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0552");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0553");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0554");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0555");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0556");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0557");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0558");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0559");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0560");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0561");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0562");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0563");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0564");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0565");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0566");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0567");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0568");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0569");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0570");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0571");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0572");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0573");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0574");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0575");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0576");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0577");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0578");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0579");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0580");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0581");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0582");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0583");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0584");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0585");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0586");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0587");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0588");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0589");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0590");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0591");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0592");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0593");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0594");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0595");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0596");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0597");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0598");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0599");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0600");
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
    //         globalCommons.waitForElementPresent(Page.eleTrgFieldName(1));
    //     }).then(function () {
    //         return Page.eleTrgFieldName(1).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'msgField0001').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(50).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'msgField0050').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(100).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'msgField0100').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(200).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'msgField0200').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(300).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'msgField0300').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(400).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'msgField0400').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(500).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'msgField0500').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(600).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'msgField0600').to.be.true;
    //     });
    // });
    //
    // // Test Trigger -> Delete several fields
    // //
    // it('Test Trigger -> Delete several fields', function () {
    //     Page.delTrgYes("Trigger0023").then(function () {
    //         Page.addTrg("Trigger0023", "", "msgField0001", "STR", "0", "0", "0", "msgField0002", "STR", "0", "0", "0", "msgField0003", "STR", "0", "0", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addTrgField2("msgField0004");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0005");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0006");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0007");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0008");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0009");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0010");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0011");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0012");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0013");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0014");
    //     }).then(function () {
    //         Page._addTrgField2("msgField0015");
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
    //         Page._delTrgField("msgField0011");
    //     }).then(function () {
    //         Page._delTrgField("msgField0015");
    //     }).then(function () {
    //         Page._delTrgField("msgField0003");
    //     }).then(function () {
    //         Page._delTrgField("msgField0013");
    //     }).then(function () {
    //         Page._delTrgField("msgField0001");
    //     }).then(function () {
    //         Page._delTrgField("msgField0007");
    //     }).then(function () {
    //         Page._delTrgField("msgField0005");
    //     }).then(function () {
    //         Page._delTrgField("msgField0009");
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
    //         globalCommons.waitForElementPresent(Page.eleTrgFieldName(1));
    //     }).then(function () {
    //         return Page.eleTrgFieldName(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'msgField0002').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(2).getText();
    //     }).then(function (message) {
    //         expect(message === 'msgField0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(3).getText();
    //     }).then(function (message) {
    //         expect(message === 'msgField0006').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(4).getText();
    //     }).then(function (message) {
    //         expect(message === 'msgField0008').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(5).getText();
    //     }).then(function (message) {
    //         expect(message === 'msgField0010').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(6).getText();
    //     }).then(function (message) {
    //         expect(message === 'msgField0012').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(7).getText();
    //     }).then(function (message) {
    //         expect(message === 'msgField0014').to.be.true;
    //     });
    // });
    //
    // // Test Trigger -> Replicate several fields & fields sorting criteria
    // //
    // it('Test Trigger -> Replicate several fields & fields sorting criteria', function () {
    //     Page.delTrgYes("Trigger0024").then(function () {
    //         Page.addTrg("Trigger0024", "", "msgField0001", "STR", "11", "1", "0", "msgField0002", "BOL", "22", "2", "1", "msgField0003", "I32", "33", "3", "2");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addTrgField("msgField0004", "DAT", "44", "4", "3");
    //     }).then(function () {
    //         Page._addTrgField("msgField0005", "OPA", "55", "5", "4");
    //     }).then(function () {
    //         Page._addTrgField("msgField0006", "MSG", "66", "6", "5");
    //     }).then(function () {
    //         Page._addTrgField("msgField0007", "U64", "77", "7", "6");
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
    //         Page._replicateTrgField("msgField0006", "a_msgField0006");
    //     }).then(function () {
    //         Page._replicateTrgField("msgField0003", "b_msgField0003");
    //     }).then(function () {
    //         Page._replicateTrgField("msgField0007", "c_msgField0007");
    //     }).then(function () {
    //         Page._replicateTrgField("msgField0002", "m_msgField0002");
    //     }).then(function () {
    //         Page._replicateTrgField("msgField0001", "x_msgField0001");
    //     }).then(function () {
    //         Page._replicateTrgField("msgField0005", "y_msgField0005");
    //     }).then(function () {
    //         Page._replicateTrgField("msgField0004", "z_msgField0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgFieldNameSelected("msgField0002"));
    //     }).then(function () {
    //         Page.eleTrgFieldNameSelected("msgField0002").click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgFieldReplicateButton);
    //     }).then(function () {
    //         Page.eleTrgFieldReplicateButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgFieldNameInput);
    //     }).then(function () {
    //         return Page.eleTrgFieldNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'New_null').to.be.true;
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
    //         globalCommons.waitForElementPresent(Page.eleTrgFieldName(1));
    //     }).then(function () {
    //         return Page.eleTrgFieldName(2).getText();
    //     }).then(function (message) {
    //         expect(message === 'x_msgField0001').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(4).getText();
    //     }).then(function (message) {
    //         expect(message === 'm_msgField0002').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(6).getText();
    //     }).then(function (message) {
    //         expect(message === 'b_msgField0003').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(9).getText();
    //     }).then(function (message) {
    //         expect(message === 'z_msgField0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(11).getText();
    //     }).then(function (message) {
    //         expect(message === 'y_msgField0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(12).getText();
    //     }).then(function (message) {
    //         expect(message === 'a_msgField0006').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(14).getText();
    //     }).then(function (message) {
    //         expect(message === 'c_msgField0007').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldName(5).getText();
    //     }).then(function (message) {
    //         expect(message === 'New_null').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldType(5).getText();
    //     }).then(function (message) {
    //         expect(message === 'BOL').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldIdNum(5).getText();
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldSeq(5).getText();
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgFieldDec(5).getText();
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     });
    // });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});