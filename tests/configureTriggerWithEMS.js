/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var configurePage = require('../pageObject/configurePage.js');
var DefinePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.6.4 Configure Trigger With EMS ESB Page', function () {
    var Page = new configurePage();
    var definePage = new DefinePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleConfigureMenu.click();
    });

    // Add a Trigger with EMS Connection successfully.
    //
    it('Add a Trigger with EMS Connection successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delTrgYes("TriggerEMS0001");
        }).then(function () {
            Page.delCvrYes("ConversionA0001");
        }).then(function () {
            Page.delMsgYes("MessageB0001");
        }).then(function () {
            Page.delBufYes("BufferB0001");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSA0001");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSD0001");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSD0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSA0001", "", false, false, "EndpointEMSD0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageB0001", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferB0001", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionA0001", "MessageB0001", "BufferB0001", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithEms("TriggerEMS0001", "", "ConnEMSA0001", "ConversionA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

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
    //         Page.delBufYes("BufferB0003");
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
    //         definePage.addEndpointEms("EndpointEMSD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0003", "", false, false, "EndpointEMSD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0004", "", false, false, "EndpointEMSD0003");
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
    //         Page.addBuf("BufferB0003", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0003", "MessageB0003", "BufferB0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0004", "MessageB0003", "BufferB0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
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
    //         Page.delMsgYes("MessageB0004");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0004");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0005");
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0006");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0004");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0005", "", false, false, "EndpointEMSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0006", "", false, false, "EndpointEMSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0004", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0004", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0005", "MessageB0004", "BufferB0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0006", "MessageB0004", "BufferB0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
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
    // // Add a Trigger with EMS Connection, make some changes, cancel the changes, then discard the cancel operation.
    // //
    // it('Add a Trigger with EMS Connection, cancel the changes, then discard the cancel operation', function () {
    //     Page.delTrgYes("TriggerEMS0005").then(function () {
    //         Page.delCvrYes("ConversionA0007");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0008");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0005");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0005");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0007");
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0008");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0005");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0007", "", false, false, "EndpointEMSD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0008", "", false, false, "EndpointEMSD0005");
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
    //         Page.addBuf("BufferB0005", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0007", "MessageB0005", "BufferB0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0008", "MessageB0005", "BufferB0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
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
    //         Page.delMsgYes("MessageB0006");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0006");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0009");
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0010");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0006");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0009", "", false, false, "EndpointEMSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0010", "", false, false, "EndpointEMSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0006", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0006", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0009", "MessageB0006", "BufferB0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0010", "MessageB0006", "BufferB0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
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
    // // Add a Trigger with EMS Connection, then add a Trigger with the same name, then confirm the overwrite operation.
    // //
    // it('Add a Trigger with EMS Connection to overwrite an existing Trigger, then confirm the overwrite operation', function () {
    //     Page.delTrgYes("TriggerEMS0007").then(function () {
    //         Page.delCvrYes("ConversionA0011");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionA0012");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0007");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0007");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0011");
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0012");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0007");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0011", "", false, false, "EndpointEMSD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0012", "", false, false, "EndpointEMSD0007");
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
    //         Page.addBuf("BufferB0007", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0011", "MessageB0007", "BufferB0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0012", "MessageB0007", "BufferB0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
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
    //         Page.delMsgYes("MessageB0008");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0008");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0013");
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0014");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0008");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0013", "", false, false, "EndpointEMSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0014", "", false, false, "EndpointEMSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0008", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0008", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0013", "MessageB0008", "BufferB0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0014", "MessageB0008", "BufferB0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
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
    //         Page.delMsgYes("MessageB0009");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0009");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0015");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0009");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0009");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0015", "", false, false, "EndpointEMSD0009");
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
    //         Page.addBuf("BufferB0009", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0015", "MessageB0009", "BufferB0009", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
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
    // it('Add a Trigger with EMS Connection, delete it, then discard the delete operation', function () {
    //     Page.delTrgYes("TriggerEMS0010").then(function () {
    //         Page.delCvrYes("ConversionA0016");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0010");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0010");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0016");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0010");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0010");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0016", "", false, false, "EndpointEMSD0010");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageB0010", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferB0010", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0016", "MessageB0010", "BufferB0010", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0010", "", "ConnEMSA0016", "ConversionA0016");
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
    //
    // // Test 'Audit' & 'Refresh' button.
    // //
    // it('Test Audit & Refresh button', function () {
    //     Page.delTrgYes("TriggerEMS0011").then(function () {
    //         Page.delCvrYes("ConversionA0017");
    //     }).then(function () {
    //         Page.delMsgYes("MessageB0011");
    //     }).then(function () {
    //         Page.delBufYes("BufferB0011");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnEmsYes("ConnEMSA0017");
    //     }).then(function () {
    //         definePage.delEndpointEmsYes("EndpointEMSD0011");
    //     }).then(function () {
    //         definePage.addEndpointEms("EndpointEMSD0011");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnEms("ConnEMSA0017", "", false, false, "EndpointEMSD0011");
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
    //         Page.addBuf("BufferB0011", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionA0017", "MessageB0011", "BufferB0011", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0011", "", "ConnEMSA0017", "ConversionA0017");
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
    //         return Page.eleTableHeader4.isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleAuditButton);
    //     }).then(function () {
    //         Page.eleAuditButton.click();
    //     }).then(function () {
    //         browser.sleep(500);
    //     }).then(function () {
    //         return Page.eleTableHeader4.getText();
    //     }).then(function (message) {
    //         expect(message === 'Modified On').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleAuditButton);
    //     }).then(function () {
    //         Page.eleAuditButton.click();
    //     }).then(function () {
    //         browser.sleep(500);
    //     }).then(function () {
    //         return Page.eleTableHeader4.isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     });
    // });
    //
    // //Test Trigger Details panel fields default value.
    // //
    // it('Test Trigger Details panel fields default value', function () {
    //     globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgLeftmenu);
    //     }).then(function () {
    //         Page.eleTrgLeftmenu.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleAddButton);
    //     }).then(function () {
    //         Page.eleAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgNameInput);
    //     }).then(function () {
    //         return Page.eleTrgNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMethodDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Message').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDetailsExtension.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleTrgConnectionExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsDetailsExtension);
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestInput.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleTrgEmsDetailsExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPublishDestInput);
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
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
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
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
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Seconds').to.be.true;
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
    //         expect(message === 'Bytes').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleCancelButton);
    //     }).then(function () {
    //         Page.eleCancelButton.click();
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
    //         return Page.eleTrgEmsDetailsExtension.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleTrgConnectionExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsDetailsExtension);
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestInput.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleTrgEmsDetailsExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPublishDestInput);
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
    //         return Page.eleTrgConnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'A value is required').to.be.true;
    //         // }).then(function () {
    //         //     return Page.eleTrgNameValidateMsg.getText();
    //         // }).then(function (message) {
    //         //     expect(message === 'A non-empty value is required').to.be.true;
    //         // }).then(function () {
    //         //     return Page.eleTrgEmsPublishDestValidateMsg.getText();
    //         // }).then(function (message) {
    //         //     expect(message === 'A non-empty value is required').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleCancelButton);
    //     }).then(function () {
    //         Page.eleCancelButton.click();
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Name'
    // //
    // it('Test field Trigger -> Name', function () {
    //     Page.delTrgYes("TriggerEMS0012_@#$_23333333333444444444").then(function () {
    //         Page.delTrgYes("TriggerEMS0013_@#$_23333333333444444444");
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
    //         Page.addTrgWithEms("TriggerEMS0012_@#$_23333333333444444444", "", "ConnEMSA0018", "ConversionA0018");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgNameInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'TriggerEMS0012_@#$_23333333333444444444').to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0013_@#$_233333333334444444444", "", "ConnEMSA0018", "ConversionA0018");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgNameInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'TriggerEMS0013_@#$_23333333333444444444').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Description'
    // //
    // it('Test field Trigger -> Description', function () {
    //     Page.delTrgYes("TriggerEMS0014").then(function () {
    //         Page.delTrgYes("TriggerEMS0015");
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
    //         Page.addTrgWithEms("TriggerEMS0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", "ConnEMSA0019", "ConversionA0019");
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
    //         Page.addTrgWithEms("TriggerEMS0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111", "ConnEMSA0019", "ConversionA0019");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgDescValidateMsg);
    //     }).then(function () {
    //         return Page.eleTrgDescValidateMsg.getText();
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
    // // Test field 'Trigger Details panel' -> 'Connection'
    // //
    // it('Test field Trigger -> Connection', function () {
    //     Page.delTrgYes("TriggerEMS0016").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0016", "", "INVALID", "ConversionA0020");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgConnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Invalid Reference').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgConnInput.clear().sendKeys("ConnEMSA0020_@#$_2223333333333444444444");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgConnInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'ConnEMSA0020_@#$_2223333333333444444444').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Output Conversion'
    // //
    // it('Test field Trigger -> Output Conversion', function () {
    //     Page.delTrgYes("TriggerEMS0017").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0017", "", "ConnEMSA0021", "INVALID");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputConversionValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Invalid Reference').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputConversionInput.clear().sendKeys("ConversionA0021_@#$_3333333333444444444");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputConversionInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'ConversionA0021_@#$_3333333333444444444').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Disable on Error (#)'
    // //
    // it('Test field Trigger -> Disable on Error (#)', function () {
    //     var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
    //     Page.delTrgYes("TriggerEMS0018").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0018", "", "ConnEMSA0022", "ConversionA0022", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorNumSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorNumSpinner.clear().sendKeys("22");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorNumSpinner.clear().sendKeys("3333");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '3333').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorNumSpinner.clear().sendKeys("44444");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '44444').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorNumSpinner.clear().sendKeys("99999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99999').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorNumSpinner.clear().sendKeys("111111");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '11111').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Disable on Error (%)'
    // //
    // it('Test field Trigger -> Disable on Error (%)', function () {
    //     var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
    //     Page.delTrgYes("TriggerEMS0019").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0019", "", "ConnEMSA0023", "ConversionA0023", "0", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys("22");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys("99");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys("100");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '100').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys("101");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '100').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys("999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '100').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Trace Level'
    // //
    // it('Test field Trigger -> Trace Level', function () {
    //     var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
    //     Page.delTrgYes("TriggerEMS0020").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0020", "", "ConnEMSA0024", "ConversionA0024", "0", "0", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.clear().sendKeys("2");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.clear().sendKeys("3");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.clear().sendKeys("4");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.clear().sendKeys("5");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.clear().sendKeys("6");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.clear().sendKeys("9");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgTrclvlSpinner.clear().sendKeys("11");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgTrclvlSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Output Method'
    // //
    // it('Test field Trigger -> Output Method', function () {
    //     Page.delTrgYes("TriggerEMS0021").then(function () {
    //         Page.delTrgYes("TriggerEMS0022");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0023");
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
    //         Page.addTrgWithEms("TriggerEMS0021", "", "ConnEMSA0025", "ConversionA0025", "0", "0", "0", "Message");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMethodDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Message').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgOutputMethodDropdown);
    //     }).then(function () {
    //         Page.eleTrgOutputMethodDropdown.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgOutputMethod01);
    //     }).then(function () {
    //         return Page.eleTrgOutputMethod01.getText();
    //     }).then(function (message) {
    //         expect(message === 'Status').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMethod02.getText();
    //     }).then(function (message) {
    //         expect(message === 'Message').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMethod03.getText();
    //     }).then(function (message) {
    //         expect(message === 'Status and Message').to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0022", "", "ConnEMSA0025", "ConversionA0025", "0", "0", "0", "Status");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMethodDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Status').to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0023", "", "ConnEMSA0025", "ConversionA0025", "0", "0", "0", "Status and Message");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMethodDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Status and Message').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Service Key Locator Start'
    // //
    // it('Test field Trigger -> Service Key Locator Start', function () {
    //     var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
    //     Page.delTrgYes("TriggerEMS0024").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0024", "", "ConnEMSA0026", "ConversionA0026", "0", "0", "0", "Message", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("11111");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '11111').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("222222");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '222222').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("3333333");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '3333333').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("4095936");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095936').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("4095937");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095937').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("4095938");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095937').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("333333333");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '3333333').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Service Key Locator Length'
    // // Related jiras: ZWUI-1094
    // //
    // it('Test field Trigger -> Service Key Locator Length', function () {
    //     Page.delTrgYes("TriggerEMS0025").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0025", "", "ConnEMSA0027", "ConversionA0027", "0", "0", "0", "Message", "0", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys("abc");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Not a valid number').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys("ABC");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Not a valid number').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys("64");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === '64 is invalid, must be equal to or less than 63').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys("77777");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === '77777 is invalid, must be equal to or less than 63').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys("999999999999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There is an error on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthValidateMsg.getText();
    //         // }).then(function (message) {
    //         //     expect(message === '999999999999 is invalid, must be equal to or less than 63').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys("22");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys("55");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '55').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys("63");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorLengthInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '63').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Service Key Locator Value'
    // //
    // it('Test field Trigger -> Service Key Locator Value', function () {
    //     Page.delTrgYes("TriggerEMS0026").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0026", "", "ConnEMSA0028", "ConversionA0028", "0", "0", "0", "Message", "0", "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorValueInput.clear().sendKeys("a0!@B1#$c2%&D3*?");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'a0!@B1#$c2%&D3*?').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorValueInput.clear().sendKeys("D3!@c2#$B1%&a0*?");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'D3!@c2#$B1%&a0*?').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorValueInput.clear().sendKeys("3D!@2c#$1B%&0a*?4");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '3D!@2c#$1B%&0a*?4').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorValueInput.clear().sendKeys("!@#$3D2c1B0a*?%&");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '!@#$3D2c1B0a*?%&').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorValueInput.clear().sendKeys("!@#$3D2c1B0a*?%&22223333333333444444444455555555556666666666777");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '!@#$3D2c1B0a*?%&22223333333333444444444455555555556666666666777').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgServiceKeyLocatorValueInput.clear().sendKeys("!@#$3D2c1B0a*?%&222233333333334444444444555555555566666666667777");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '!@#$3D2c1B0a*?%&22223333333333444444444455555555556666666666777').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Requeue on Error'
    // //
    // it('Test field Trigger -> Requeue on Error', function () {
    //     Page.delTrgYes("TriggerEMS0027").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0027", "", "ConnEMSA0029", "ConversionA0029", "0", "0", "0", "Message", "0", "0", "");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgRequeueOnErrorCheck);
    //     }).then(function () {
    //         Page.eleTrgRequeueOnErrorCheck.click();
    //     }).then(function () {
    //         return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
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
    //         return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Publish Destination, Publish Destination (Secondary), Reply-to Destination, Error Message Destination'
    // //
    // it('Test field Trigger -> Publish Destination, Publish Destination (Secondary), Reply-to Destination, Error Message Destination', function () {
    //     Page.delTrgYes("TriggerEMS0028").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0028", "", "ConnEMSA0030", "ConversionA0030");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.trg.publishDest").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "").to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsPublishDestInput.clear().sendKeys("tibss.trg.publishDest._3D!@2c#$1B%&0a*?-55555555556666666666777");
    //     }).then(function () {
    //         Page.eleTrgEmsPublishDest2Input.clear().sendKeys("tibss.trg.publishDest2._3D!@2c#$1B%&0a*?-5555555556666666666777");
    //     }).then(function () {
    //         Page.eleTrgEmsReplyDestInput.clear().sendKeys("tibss.trg.replyToDest._3D!@2c#$1B%&0a*?-55555555556666666666777");
    //     }).then(function () {
    //         Page.eleTrgEmsErrorMsgDestInput.clear().sendKeys("tibss.trg.errorMsgDest._3D!@2c#$1B%&0a*?-5555555556666666666777");
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
    //         return Page.eleTrgEmsPublishDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.trg.publishDest._3D!@2c#$1B%&0a*?-55555555556666666666777").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.trg.publishDest2._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.trg.replyToDest._3D!@2c#$1B%&0a*?-55555555556666666666777").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.trg.errorMsgDest._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsPublishDestInput.clear().sendKeys("tibss.trg.publishDest3333333334444444444555555555566666666667777");
    //     }).then(function () {
    //         Page.eleTrgEmsPublishDest2Input.clear().sendKeys("tibss.trg.publishDest2333333334444444444555555555566666666667777");
    //     }).then(function () {
    //         Page.eleTrgEmsReplyDestInput.clear().sendKeys("tibss.trg.replyToDest3333333334444444444555555555566666666667777");
    //     }).then(function () {
    //         Page.eleTrgEmsErrorMsgDestInput.clear().sendKeys("tibss.trg.errorMsgDest333333334444444444555555555566666666667777");
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
    //         return Page.eleTrgEmsPublishDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.trg.publishDest333333333444444444455555555556666666666777").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.trg.publishDest233333333444444444455555555556666666666777").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.trg.replyToDest333333333444444444455555555556666666666777").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "tibss.trg.errorMsgDest33333333444444444455555555556666666666777").to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Type of Publish Destination, Publish Destination (Secondary), Reply-to Destination, Error Message Destination'
    // //
    // it('Test field Trigger -> Type of Publish Destination, Publish Destination (Secondary), Reply-to Destination, Error Message Destination', function () {
    //     Page.delTrgYes("TriggerEMS0029").then(function () {
    //         Page.delTrgYes("TriggerEMS0030");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0031");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0032");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0033");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0034");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0035");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0036");
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
    //         Page.addTrgWithEms("TriggerEMS0029", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0030", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0031", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "TOPIC");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0032", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "TOPIC", "", "QUEUE");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0033", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "TOPIC", "0", "0", "", "", "QUEUE", "", "QUEUE");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0034", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "TOPIC", "", "TOPIC");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0035", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "TOPIC", "0", "0", "", "", "QUEUE", "", "TOPIC");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0036", "", "ConnEMSA0031", "ConversionA0031", "0", "0", "0", "Message", "0", "0", "", false, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "QUEUE");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDest2TypeInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "TOPIC").to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === "QUEUE").to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Dynamic Destination suffix Length'
    // //
    // it('Test field Trigger -> Dynamic Destination suffix Length', function () {
    //     var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
    //     Page.delTrgYes("TriggerEMS0037").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0037", "", "ConnEMSA0032", "ConversionA0032");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixLengthSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixLengthSpinner.clear().sendKeys("22");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixLengthSpinner.clear().sendKeys("100");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '100').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixLengthSpinner.clear().sendKeys("127");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '127').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixLengthSpinner.clear().sendKeys("128");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '127').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixLengthSpinner.clear().sendKeys("999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '127').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Dynamic Destination suffix Start'
    // //
    // it('Test field Trigger -> Dynamic Destination suffix Start', function () {
    //     var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
    //     Page.delTrgYes("TriggerEMS0038").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0038", "", "ConnEMSA0033", "ConversionA0033");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.clear().sendKeys("2222");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '2222').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.clear().sendKeys("33333");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '33333').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.clear().sendKeys("444444");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '444444').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.clear().sendKeys("4095872");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095872').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.clear().sendKeys("4095873");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095873').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.clear().sendKeys("4095874");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095873').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgEmsDynamicDestSuffixStartSpinner.clear().sendKeys("9999999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDynamicDestSuffixStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4095873').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'SMSL Mode, Delivery Mode'
    // //
    // it('Test field Trigger -> SMSL Mode, Delivery Mode', function () {
    //     Page.delTrgYes("TriggerEMS0039").then(function () {
    //         Page.delTrgYes("TriggerEMS0040");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0041");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0042");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0043");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0044");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0045");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0046");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0047");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0048");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0049");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0050");
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
    //         Page.addTrgWithEms("TriggerEMS0039", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsSmslModeDropdown);
    //     }).then(function () {
    //         Page.eleTrgEmsSmslModeDropdown.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsSmslMode01);
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslMode01.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslMode02.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsDeliveryModeDropdown);
    //     }).then(function () {
    //         Page.eleTrgEmsDeliveryModeDropdown.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsDeliveryMode01);
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryMode01.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryMode02.getText();
    //     }).then(function (message) {
    //         expect(message === 'Non-Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryMode03.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable').to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0040", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC", "Reliable No-Ack", "Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0041", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", "Reliable No-Ack", "Non-Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Non-Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0042", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC", "Reliable No-Ack", "Non-Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Non-Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0043", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", "Reliable No-Ack", "Reliable");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0044", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC", "Reliable No-Ack", "Reliable");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable No-Ack').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Reliable').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0045", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", "Guaranteed All", "Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0046", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC", "Guaranteed All", "Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0047", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", "Guaranteed All", "Non-Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0048", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC", "Guaranteed All", "Non-Persistent");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0049", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", "Guaranteed All", "Reliable");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0050", "", "ConnEMSA0034", "ConversionA0034", "0", "0", "0", "Message", "0", "0", "", true, undefined, "TOPIC", "0", "0", "", "", "TOPIC", "", "TOPIC", "Guaranteed All", "Reliable");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Guaranteed All').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsSmslModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Persistent').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'QUEUE').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsReplyDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'TOPIC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsErrorMsgDestTypeDropdown.getAttribute("style");
    //     }).then(function (message) {
    //         expect(message).to.not.include('background-color:');
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Priority & Value'
    // //
    // it('Test field Trigger -> Priority & Value', function () {
    //     var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
    //     Page.delTrgYes("TriggerEMS0051").then(function () {
    //         Page.delTrgYes("TriggerEMS0052");
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
    //         Page.addTrgWithEms("TriggerEMS0051", "", "ConnEMSA0035", "ConversionA0035", "0", "0", "0", "Message", "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys("2");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys("5");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys("8");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '8').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys("9");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '9').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys("10");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0052", "", "ConnEMSA0035", "ConversionA0035", "0", "0", "0", "Message", "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, true, "0");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys("3");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys("4");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys("7");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '7').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys("9");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '9').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys("67");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPriorityValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '6').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Expiration, Value & Unit'
    // //
    // it('Test field Trigger -> Expiration, Value & Unit', function () {
    //     var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
    //     Page.delTrgYes("TriggerEMS0053").then(function () {
    //         Page.delTrgYes("TriggerEMS0054");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0055");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0056");
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
    //         Page.addTrgWithEms("TriggerEMS0053", "", "ConnEMSA0036", "ConversionA0036", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', "Seconds");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Seconds').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgOutputMsgExpirationUnitDropdown);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationUnitDropdown.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgOutputMsgExpirationUnit01);
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnit01.getText();
    //     }).then(function (message) {
    //         expect(message === 'Seconds').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnit02.getText();
    //     }).then(function (message) {
    //         expect(message === 'Minutes').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnit03.getText();
    //     }).then(function (message) {
    //         expect(message === 'Hours').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnit04.getText();
    //     }).then(function (message) {
    //         expect(message === 'Days').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("222");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("5555");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5555').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("99998");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99998').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("99999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99999').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("100000");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '10000').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("123456");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '12345').to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0054", "", "ConnEMSA0036", "ConversionA0036", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", true, '0', "Minutes");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Minutes').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("222");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("5555");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5555').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("99998");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99998').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("99999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99999').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("100000");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '10000').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("123456");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '12345').to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0055", "", "ConnEMSA0036", "ConversionA0036", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', "Hours");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Hours').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("222");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("5555");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5555').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("99998");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99998').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("99999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99999').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("100000");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '10000').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("123456");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '12345').to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0056", "", "ConnEMSA0036", "ConversionA0036", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", true, '0', "Days");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationUnitDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Days').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("1");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("222");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("5555");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '5555').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("99998");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99998').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("99999");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '99999').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("100000");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '10000').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys("123456");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgExpirationValueSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '12345').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Compression'
    // //
    // it('Test field Trigger -> Compression', function () {
    //     Page.delTrgYes("TriggerEMS0057").then(function () {
    //         Page.delTrgYes("TriggerEMS0058");
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
    //         Page.addTrgWithEms("TriggerEMS0057", "", "ConnEMSA0037", "ConversionA0037", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, false);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgCompressionCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0058", "", "ConnEMSA0037", "ConversionA0037", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgCompressionCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Preserve'
    // //
    // it('Test field Trigger -> Preserve', function () {
    //     Page.delTrgYes("TriggerEMS0059").then(function () {
    //         Page.delTrgYes("TriggerEMS0060");
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
    //         Page.addTrgWithEms("TriggerEMS0059", "", "ConnEMSA0038", "ConversionA0038", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, false);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPreserveCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0060", "", "ConnEMSA0038", "ConversionA0038", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgPreserveCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Body Trace'
    // //
    // it('Test field Trigger -> Body Trace', function () {
    //     Page.delTrgYes("TriggerEMS0061").then(function () {
    //         Page.delTrgYes("TriggerEMS0062");
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
    //         Page.addTrgWithEms("TriggerEMS0061", "", "ConnEMSA0039", "ConversionA0039", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, false);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgBodyTraceCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0062", "", "ConnEMSA0039", "ConversionA0039", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgBodyTraceCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'Message Type'
    // //
    // it('Test field Trigger -> Message Type', function () {
    //     Page.delTrgYes("TriggerEMS0063").then(function () {
    //         Page.delTrgYes("TriggerEMS0064");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0065");
    //     }).then(function () {
    //         Page.delTrgYes("TriggerEMS0066");
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
    //         Page.addTrgWithEms("TriggerEMS0063", "", "ConnEMSA0040", "ConversionA0040", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, undefined, "Bytes");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Bytes').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgOutputMsgMsgTypeDropdown);
    //     }).then(function () {
    //         Page.eleTrgOutputMsgMsgTypeDropdown.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgOutputMsgMsgType01);
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgType01.getText();
    //     }).then(function (message) {
    //         expect(message === 'Bytes').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgType02.getText();
    //     }).then(function (message) {
    //         expect(message === 'Map').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgType03.getText();
    //     }).then(function (message) {
    //         expect(message === 'Stream').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgType04.getText();
    //     }).then(function (message) {
    //         expect(message === 'Text').to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0064", "", "ConnEMSA0040", "ConversionA0040", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, undefined, "Map");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Map').to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0065", "", "ConnEMSA0040", "ConversionA0040", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, undefined, "Stream");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Stream').to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0066", "", "ConnEMSA0040", "ConversionA0040", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, undefined, "Text");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgOutputMsgMsgTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Text').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'EMS Properties Type'
    // //
    // it('Test Trigger -> EMS Properties Type', function () {
    //     Page.delTrgYes("TriggerEMS0067").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0067", "", "ConnEMSA0041", "ConversionA0041", "0", "0", "0", undefined, "0", "0", "", false, undefined, "QUEUE", "0", "0", "", "", "QUEUE", "", "QUEUE", undefined, undefined, false, "0", false, '0', undefined, undefined, undefined, undefined, "Bytes");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropExtension.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleTrgConnectionExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropExtension);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropAddButton.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleTrgEmsPropExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsPropAddButton);
    //     }).then(function () {
    //         Page.eleTrgEmsPropAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropTypeDropdown);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'System').to.be.true;
    //     }).then(function () {
    //         Page.eleTrgEmsPropTypeDropdown.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropType01);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropType01.getText();
    //     }).then(function (message) {
    //         expect(message === 'Value').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropType02.getText();
    //     }).then(function (message) {
    //         expect(message === 'Buffer').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropType03.getText();
    //     }).then(function (message) {
    //         expect(message === 'System').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V01", "Property_Value01");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B01", "bufField0002");
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
    //         return Page.eleTrgEmsPropType(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'Buffer').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropType(2).getText();
    //     }).then(function (message) {
    //         expect(message === 'Value').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropType(3).getText();
    //     }).then(function (message) {
    //         expect(message === 'System').to.be.true;
    //     });
    // });
    //
    // // Test field 'Trigger Details panel' -> 'EMS Properties Name'
    // //
    // it('Test Trigger -> EMS Properties Name', function () {
    //     Page.delTrgYes("TriggerEMS0068").then(function () {
    //         Page.delTrgYes("TriggerEMS0069");
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
    //         Page.addTrgWithEms("TriggerEMS0068", "", "ConnEMSA0042", "ConversionA0042");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "000", "Property_Value01");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "@", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-envelope");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "d0ABc", "Property_Value02");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "aaaaa", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-ss-id");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "#", "Property_Value03");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "231", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-service-id");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "ABC", "Property_Value04");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "&", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-BES");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "aBC", "Property_Value05");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "ddd", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop@#&000001222222233333333334", "Property_Value06");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "$&@#!%*Field22222222333333333344", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "uvw", "Property_Value07");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "XYZ", "bufField0001");
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
    //         return Page.eleTrgEmsPropName(1).getText();
    //     }).then(function (message) {
    //         expect(message === '#').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(2).getText();
    //     }).then(function (message) {
    //         expect(message === '$&@#!%*Field2222222233333333334').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(3).getText();
    //     }).then(function (message) {
    //         expect(message === '&').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(4).getText();
    //     }).then(function (message) {
    //         expect(message === '000').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(5).getText();
    //     }).then(function (message) {
    //         expect(message === '231').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(6).getText();
    //     }).then(function (message) {
    //         expect(message === '@').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(7).getText();
    //     }).then(function (message) {
    //         expect(message === 'aaaaa').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(8).getText();
    //     }).then(function (message) {
    //         expect(message === 'ABC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(9).getText();
    //     }).then(function (message) {
    //         expect(message === 'aBC').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(10).getText();
    //     }).then(function (message) {
    //         expect(message === 'd0ABc').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(11).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'ddd').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(12).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'prop@#&000001222222233333333334').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(13).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-BES').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(14).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-envelope').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(15).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-service-id').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(16).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-ss-id').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(17).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'uvw').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(18).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'XYZ').to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0069", "", "ConnEMSA0042", "ConversionA0042");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop01", "Property_Value01");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop02", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-envelope");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsPropAddButton);
    //     }).then(function () {
    //         Page.eleTrgEmsPropAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropTypeDropdown);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'System').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropNameDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'tibss-BES').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "", "Property_Value");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Please enter a non-empty property name').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleTrgEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "", "bufField0002");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Please enter a non-empty property name').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleTrgEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop01", "Property_Value");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Duplicate row').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleTrgEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop02", "Property_Value");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Duplicate row').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleTrgEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "tibss-envelope", "Property_Value");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Duplicate row').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleTrgEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop01", "bufField0002");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Duplicate row').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleTrgEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop02", "bufField0002");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Duplicate row').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleTrgEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "tibss-envelope", "bufField0002");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'Duplicate row').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleTrgEmsPropDelButton.click();
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
    // // Test field 'Trigger Details panel' -> 'EMS Properties Value'
    // //
    // it('Test Trigger -> EMS Properties Value', function () {
    //     Page.delTrgYes("TriggerEMS0070").then(function () {
    //         Page.delTrgYes("TriggerEMS0071");
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
    //         Page.addTrgWithEms("TriggerEMS0070", "", "ConnEMSA0043", "ConversionA0043");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B001", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B002", "bufField00012222222233333333334444444444555555555566666666667777777777888888888");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B003", "bufField00032222222233333333334444444444555555555566666666667777777777888888888");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B004", "bufField00012222222233333333334444444444555555555566666666667777777777888888888");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V001", "a");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V002", "B");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V003", "1");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V004", "@#$&aB1");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V005", "@#$&aB1");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V006", "!@#$%^&*?/2222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000111111111122222222223333333333444444444455555555556666");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V007", "!@#$%^&*?/22222222223333333333444444444455555555556666666666777777777788888888889999999999000000000011111111112222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-BES");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-envelope");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-service-id");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-ss-id");
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
    //         return Page.eleTrgEmsPropValue(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'bufField0002').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(2).getText();
    //     }).then(function (message) {
    //         expect(message === 'bufField00012222222233333333334444444444555555555566666666667777777777888888888').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(3).getText();
    //     }).then(function (message) {
    //         expect(message === 'bufField00032222222233333333334444444444555555555566666666667777777777888888888').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(4).getText();
    //     }).then(function (message) {
    //         expect(message === 'bufField00012222222233333333334444444444555555555566666666667777777777888888888').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(5).getText();
    //     }).then(function (message) {
    //         expect(message === 'a').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(6).getText();
    //     }).then(function (message) {
    //         expect(message === 'B').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(7).getText();
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(8).getText();
    //     }).then(function (message) {
    //         expect(message === '@#$&aB1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(9).getText();
    //     }).then(function (message) {
    //         expect(message === '@#$&aB1').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(10).getText();
    //     }).then(function (message) {
    //         expect(message === '!@#$%^&*?/2222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000111111111122222222223333333333444444444455555555556666').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(11).getText();
    //     }).then(function (message) {
    //         expect(message === '!@#$%^&*?/2222222222333333333344444444445555555555666666666677777777778888888888999999999900000000001111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000111111111122222222223333333333444444444455555555556666').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(12).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(13).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(14).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValue(15).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         Page.addTrgWithEms("TriggerEMS0071", "", "ConnEMSA0043", "ConversionA0043");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop01", "Property_Value01");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop02", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-envelope");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsPropAddButton);
    //     }).then(function () {
    //         Page.eleTrgEmsPropAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropTypeDropdown);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropTypeDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'System').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropNameDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'tibss-BES').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropSysValueInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop03", "");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'For type "Value", please enter a non-empty value').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleTrgEmsPropDelButton.click();
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop04", "");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleTrgEmsPropValidateMsg);
    //     }).then(function () {
    //         return Page.eleTrgEmsPropValidateMsg.getAttribute("title");
    //     }).then(function (message) {
    //         expect(message === 'For type "Buffer", please pick a buffer field').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropBufValueInput.getAttribute("readonly");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleTrgEmsPropDelButton);
    //     }).then(function () {
    //         Page.eleTrgEmsPropDelButton.click();
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
    // // Test Trigger -> Add 204 EMS Properties for a trigger
    // //
    // it('Test Trigger -> Add 204 EMS Properties for a trigger', function () {
    //     Page.delTrgYes("TriggerEMS0072").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0072", "", "ConnEMSA0044", "ConversionA0044");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0001", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0002", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0003", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0004", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0005", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0006", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0007", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0008", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0009", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0010", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0011", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0012", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0013", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0014", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0015", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0016", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0017", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0018", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0019", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0020", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0021", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0022", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0023", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0024", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0025", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0026", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0027", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0028", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0029", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0030", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0031", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0032", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0033", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0034", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0035", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0036", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0037", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0038", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0039", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0040", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0041", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0042", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0043", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0044", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0045", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0046", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0047", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0048", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0049", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0050", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0051", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0052", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0053", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0054", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0055", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0056", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0057", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0058", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0059", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0060", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0061", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0062", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0063", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0064", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0065", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0066", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0067", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0068", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0069", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0070", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0071", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0072", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0073", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0074", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0075", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0076", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0077", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0078", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0079", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0080", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0081", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0082", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0083", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0084", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0085", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0086", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0087", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0088", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0089", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0090", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0091", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0092", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0093", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0094", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0095", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0096", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0097", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0098", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0099", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0100", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0101", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0102", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0103", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0104", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0105", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0106", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0107", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0108", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0109", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0110", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0111", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0112", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0113", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0114", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0115", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0116", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0117", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0118", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0119", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0120", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0121", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0122", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0123", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0124", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0125", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0126", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0127", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0128", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0129", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0130", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0131", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0132", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0133", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0134", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0135", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0136", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0137", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0138", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0139", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0140", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0141", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0142", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0143", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0144", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0145", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0146", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0147", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0148", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0149", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0150", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0151", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0152", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0153", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0154", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0155", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0156", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0157", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0158", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0159", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0160", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0161", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0162", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0163", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0164", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0165", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0166", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0167", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0168", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0169", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0170", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0171", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0172", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0173", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0174", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0175", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0176", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0177", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0178", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0179", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0180", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0181", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0182", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0183", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0184", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0185", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0186", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0187", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0188", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0189", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0190", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0191", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0192", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0193", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0194", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0195", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0196", "value0006");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0197", "value0007");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0198", "value0008");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0199", "value0009");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0200", "value0010");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-BES");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-envelope");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-service-id");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-ss-id");
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
    //         return Page.eleTrgEmsPropName(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0001').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(50).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'prop-B0050').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(150).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'prop-V0150').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(200).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'prop-V0200').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(204).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-ss-id').to.be.true;
    //     });
    // });
    //
    // // Test Trigger -> Delete several EMS Properties
    // //
    // it('Test Trigger -> Delete several EMS Properties', function () {
    //     Page.delTrgYes("TriggerEMS0073").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0073", "", "ConnEMSA0045", "ConversionA0045");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0001", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0002", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0003", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0004", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0005", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0001", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0002", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0003", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0004", "value0004");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0005", "value0005");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-BES");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-envelope");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-service-id");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-ss-id");
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
    //         Page._delEmsPropertyTrg("tibss-BES");
    //     }).then(function () {
    //         Page._delEmsPropertyTrg("tibss-ss-id");
    //     }).then(function () {
    //         Page._delEmsPropertyTrg("prop-B0001");
    //     }).then(function () {
    //         Page._delEmsPropertyTrg("prop-V0004");
    //     }).then(function () {
    //         Page._delEmsPropertyTrg("prop-V0002");
    //     }).then(function () {
    //         Page._delEmsPropertyTrg("prop-B0003");
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
    //         return Page.eleTrgEmsPropName(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0002').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(2).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(3).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(4).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0001').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(5).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0003').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(6).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(7).getText();
    //     }).then(function (message) {
    //         expect(message === 'tibss-envelope').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(8).getText();
    //     }).then(function (message) {
    //         expect(message === 'tibss-service-id').to.be.true;
    //     });
    // });
    //
    // // Test Trigger -> Replicate several EMS Properties
    // //
    // it('Test Trigger -> Replicate several EMS Properties', function () {
    //     Page.delTrgYes("TriggerEMS0074").then(function () {
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
    //         Page.addTrgWithEms("TriggerEMS0074", "", "ConnEMSA0046", "ConversionA0046");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0001", "bufField0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0002", "bufField0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Buffer", "prop-B0003", "bufField0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0001", "value0001");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0002", "value0002");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("Value", "prop-V0003", "value0003");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-BES");
    //     }).then(function () {
    //         Page._addEmsPropertyTrg("System", "tibss-service-id");
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
    //         Page._replicateEmsPropertyTrg("prop-V0001", "prop-V0004");
    //     }).then(function () {
    //         Page._replicateEmsPropertyTrg("prop-B0003", "prop-B0004");
    //     }).then(function () {
    //         Page._replicateEmsPropertyTrg("tibss-BES", "tibss-ss-id");
    //     }).then(function () {
    //         Page._replicateEmsPropertyTrg("prop-V0002", "prop-V0005");
    //     }).then(function () {
    //         Page._replicateEmsPropertyTrg("prop-B0001", "prop-B0005");
    //     }).then(function () {
    //         Page._replicateEmsPropertyTrg("tibss-BES", "tibss-envelope");
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
    //         return Page.eleTrgEmsPropName(1).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0001').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(2).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0002').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(3).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0003').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(4).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(5).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-B0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(6).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0001').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(7).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0002').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(8).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0003').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(9).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(10).getText();
    //     }).then(function (message) {
    //         expect(message === 'prop-V0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(11).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-BES').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(12).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-envelope').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(13).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-service-id').to.be.true;
    //     }).then(function () {
    //         return Page.eleTrgEmsPropName(14).getAttribute("textContent");
    //     }).then(function (message) {
    //         expect(message === 'tibss-ss-id').to.be.true;
    //     });
    // });

    // Test Trigger -> Reset Output Conversion, and then all the buffer type EMS properties will be cleared
    //
    it('Test Trigger -> Reset Output Conversion, and then all the buffer type EMS properties will be cleared', function () {
        Page.delTrgYes("TriggerEMS0075").then(function () {
            Page.delTrgYes("TriggerEMS0076");
        }).then(function () {
            Page.delCvrYes("ConversionA0047");
        }).then(function () {
            Page.delCvrYes("ConversionA0048");
        }).then(function () {
            Page.delMsgYes("MessageB0041");
        }).then(function () {
            Page.delBufYes("BufferB0041");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnEmsYes("ConnEMSA0047");
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSD0041");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSD0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnEms("ConnEMSA0047", "", false, false, "EndpointEMSD0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageB0041", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferB0041", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionA0047", "MessageB0041", "BufferB0041", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            Page.addCvr("ConversionA0048", "MessageB0041", "BufferB0041", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithEms("TriggerEMS0075", "", "ConnEMSA0047", "ConversionA0047");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._addEmsPropertyTrg("Buffer", "prop-B0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyTrg("Buffer", "prop-B0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyTrg("Value", "prop-V0001", "value0001");
        }).then(function () {
            Page._addEmsPropertyTrg("Value", "prop-V0002", "value0002");
        }).then(function () {
            Page._addEmsPropertyTrg("System", "tibss-BES");
        }).then(function () {
            Page._addEmsPropertyTrg("System", "tibss-service-id");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._outputConversionTrg("ConversionA0048");
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
            globalCommons.waitForElementPresent(Page.eleTrgOutputConversionInput);
        }).then(function () {
            return Page.eleTrgOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionA0047').to.be.true;
        }).then(function () {
            return Page.eleTrgEmsPropName(1).getText();
        }).then(function (message) {
            expect(message === 'prop-B0001').to.be.true;
        }).then(function () {
            return Page.eleTrgEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-B0002').to.be.true;
        }).then(function () {
            return Page.eleTrgEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'prop-V0001').to.be.true;
        }).then(function () {
            return Page.eleTrgEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'prop-V0002').to.be.true;
        }).then(function () {
            return Page.eleTrgEmsPropName(5).getText();
        }).then(function (message) {
            expect(message === 'tibss-BES').to.be.true;
        }).then(function () {
            return Page.eleTrgEmsPropName(6).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            Page.addTrgWithEms("TriggerEMS0076", "", "ConnEMSA0047", "ConversionA0047");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._addEmsPropertyTrg("Buffer", "prop-B0001", "bufField0001");
        }).then(function () {
            Page._addEmsPropertyTrg("Buffer", "prop-B0002", "bufField0002");
        }).then(function () {
            Page._addEmsPropertyTrg("Value", "prop-V0001", "value0001");
        }).then(function () {
            Page._addEmsPropertyTrg("Value", "prop-V0002", "value0002");
        }).then(function () {
            Page._addEmsPropertyTrg("System", "tibss-BES");
        }).then(function () {
            Page._addEmsPropertyTrg("System", "tibss-service-id");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page._outputConversionTrg("ConversionA0048");
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
            globalCommons.waitForElementPresent(Page.eleTrgOutputConversionInput);
        }).then(function () {
            return Page.eleTrgOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionA0048').to.be.true;
        }).then(function () {
            return Page.eleTrgEmsPropName(1).getText();
        }).then(function (message) {
            expect(message === 'prop-V0001').to.be.true;
        }).then(function () {
            return Page.eleTrgEmsPropName(2).getText();
        }).then(function (message) {
            expect(message === 'prop-V0002').to.be.true;
        }).then(function () {
            return Page.eleTrgEmsPropName(3).getText();
        }).then(function (message) {
            expect(message === 'tibss-BES').to.be.true;
        }).then(function () {
            return Page.eleTrgEmsPropName(4).getText();
        }).then(function (message) {
            expect(message === 'tibss-service-id').to.be.true;
        }).then(function () {
            return Page.eleTrgEmsPropName(5).isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});