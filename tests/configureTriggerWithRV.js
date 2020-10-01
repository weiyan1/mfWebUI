/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var configurePage = require('../pageObject/configurePage.js');
var DefinePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.6.4 Configure Trigger With RV ESB Page', function () {
    var Page = new configurePage();
    var definePage = new DefinePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleConfigureMenu.click();
    });

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

    // Add a Trigger with RV Connection successfully, then replicate it.
    //
    it('Add a Trigger with RV Connection, then replicate it successfully', function () {
        Page.delTrgYes("TriggerRV0002-copy").then(function () {
            Page.delTrgYes("TriggerRV0002");
        }).then(function () {
            Page.delCvrYes("ConversionB0002");
        }).then(function () {
            Page.delMsgYes("MessageC0002");
        }).then(function () {
            Page.delBufYes("BufferC0002");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0002");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0002");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0002", "", false, "EndpointRVC0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0002", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0002", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0002", "MessageC0002", "BufferC0002", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0002", "", "ConnRVA0002", "ConversionB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.replicateTrg("TriggerRV0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TriggerRV0002-copy').to.be.true;
        });
    });

    // Add a Trigger with RV Connection successfully, then update it.
    //
    it('Add a Trigger with RV Connection, then update it successfully', function () {
        Page.delTrgYes("TriggerRV0003").then(function () {
            Page.delCvrYes("ConversionB0003");
        }).then(function () {
            Page.delCvrYes("ConversionB0004");
        }).then(function () {
            Page.delMsgYes("MessageC0003");
        }).then(function () {
            Page.delBufYes("BufferC0003");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0003");
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0004");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0003");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0003", "", false, "EndpointRVC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0004", "", false, "EndpointRVC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0003", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0003", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0003", "MessageC0003", "BufferC0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0004", "MessageC0003", "BufferC0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0003", "AbCdEfG", "ConnRVA0003", "ConversionB0003", "OpQrSt", "111", "33", "1", "Message", "55", "11", "oPqRsT", false, "tibss.trg.publish1", "77", "99", "tibss.trg.publishSec1", "tibss.trg.reply1", "tibss.trg.error1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.updateTrgWithRv("TriggerRV0003", "HiJkLmN", "ConnRVA0004", "ConversionB0004", "UvWxYz", "222", "44", "2", "Status", "66", "22", "uVwXyZ", true, "tibss.trg.publish2", "88", "100", "tibss.trg.publishSec2", "tibss.trg.reply2", "tibss.trg.error2");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TriggerRV0003').to.be.true;
        }).then(function () {
            return Page.eleTrgDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleTrgConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnRVA0004').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionB0004').to.be.true;
        }).then(function () {
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'UvWxYz').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputMethodDropdown.getText();
        }).then(function (message) {
            expect(message === 'Status').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'uVwXyZ').to.be.true;
        }).then(function () {
            return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.publish2').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '88').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubject2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.publishSec2').to.be.true;
        }).then(function () {
            return Page.eleTrgRvReplySubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.reply2').to.be.true;
        }).then(function () {
            return Page.eleTrgRvErrorMsgSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.error2').to.be.true;
        });
    });

    // Add a Trigger with RV Connection , make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Add a Trigger with RV Connection, cancel the changes, then confirm the cancel operation', function () {
        Page.delTrgYes("TriggerRV0004").then(function () {
            Page.delCvrYes("ConversionB0005");
        }).then(function () {
            Page.delCvrYes("ConversionB0006");
        }).then(function () {
            Page.delMsgYes("MessageC0004");
        }).then(function () {
            Page.delBufYes("BufferC0004");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0005");
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0006");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0004");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0005", "", false, "EndpointRVC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0006", "", false, "EndpointRVC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0004", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0004", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0005", "MessageC0004", "BufferC0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0006", "MessageC0004", "BufferC0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0004", "AbCdEfG", "ConnRVA0005", "ConversionB0005", "OpQrSt", "111", "33", "1", "Message", "55", "11", "oPqRsT", false, "tibss.trg.publish1", "77", "99", "tibss.trg.publishSec1", "tibss.trg.reply1", "tibss.trg.error1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.cancelTrgWithRvYes("TriggerRV0004", "HiJkLmN", "ConnRVA0006", "ConversionB0006", "UvWxYz", "222", "44", "2", "Status", "66", "22", "uVwXyZ", true, "tibss.trg.publish2", "88", "100", "tibss.trg.publishSec2", "tibss.trg.reply2", "tibss.trg.error2");
        }).then(function () {
            Page.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("TriggerRV0004");
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
            return Page.eleTrgNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TriggerRV0004').to.be.true;
        }).then(function () {
            return Page.eleTrgDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleTrgConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnRVA0005').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionB0005').to.be.true;
        }).then(function () {
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'OpQrSt').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputMethodDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'oPqRsT').to.be.true;
        }).then(function () {
            return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.publish1').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '77').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99').to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubject2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.publishSec1').to.be.true;
        }).then(function () {
            return Page.eleTrgRvReplySubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.reply1').to.be.true;
        }).then(function () {
            return Page.eleTrgRvErrorMsgSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.error1').to.be.true;
        });
    });

    // Add a Trigger with RV Connection, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Add a Trigger with RV Connection, cancel the changes, then discard the cancel operation', function () {
        Page.delTrgYes("TriggerRV0005").then(function () {
            Page.delCvrYes("ConversionB0007");
        }).then(function () {
            Page.delCvrYes("ConversionB0008");
        }).then(function () {
            Page.delMsgYes("MessageC0005");
        }).then(function () {
            Page.delBufYes("BufferC0005");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0007");
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0008");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0005");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0007", "", false, "EndpointRVC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0008", "", false, "EndpointRVC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0005", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0005", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0007", "MessageC0005", "BufferC0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0008", "MessageC0005", "BufferC0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0005", "AbCdEfG", "ConnRVA0007", "ConversionB0007", "OpQrSt", "111", "33", "1", "Message", "55", "11", "oPqRsT", false, "tibss.trg.publish1", "77", "99", "tibss.trg.publishSec1", "tibss.trg.reply1", "tibss.trg.error1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.cancelTrgWithRvNo("TriggerRV0005", "HiJkLmN", "ConnRVA0008", "ConversionB0008", "UvWxYz", "222", "44", "2", "Status", "66", "22", "uVwXyZ", true, "tibss.trg.publish2", "88", "100", "tibss.trg.publishSec2", "tibss.trg.reply2", "tibss.trg.error2");
        }).then(function () {
            return Page.eleTrgNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TriggerRV0005').to.be.true;
        }).then(function () {
            return Page.eleTrgDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleTrgConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnRVA0008').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionB0008').to.be.true;
        }).then(function () {
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'UvWxYz').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputMethodDropdown.getText();
        }).then(function (message) {
            expect(message === 'Status').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'uVwXyZ').to.be.true;
        }).then(function () {
            return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.publish2').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '88').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubject2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.publishSec2').to.be.true;
        }).then(function () {
            return Page.eleTrgRvReplySubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.reply2').to.be.true;
        }).then(function () {
            return Page.eleTrgRvErrorMsgSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.error2').to.be.true;
        });
    });

    // Add a Trigger with RV Connection, make some changes, then reset it.
    //
    it('Add a Trigger with RV Connection, make some changes, then reset it', function () {
        Page.delTrgYes("TriggerRV0006").then(function () {
            Page.delCvrYes("ConversionB0009");
        }).then(function () {
            Page.delCvrYes("ConversionB0010");
        }).then(function () {
            Page.delMsgYes("MessageC0006");
        }).then(function () {
            Page.delBufYes("BufferC0006");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0009");
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0010");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0006");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0009", "", false, "EndpointRVC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0010", "", false, "EndpointRVC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0006", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0006", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0009", "MessageC0006", "BufferC0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0010", "MessageC0006", "BufferC0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0006", "AbCdEfG", "ConnRVA0009", "ConversionB0009", "OpQrSt", "111", "33", "1", "Message", "55", "11", "oPqRsT", false, "tibss.trg.publish1", "77", "99", "tibss.trg.publishSec1", "tibss.trg.reply1", "tibss.trg.error1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.resetTrgWithRv("TriggerRV0006", "HiJkLmN", "ConnRVA0010", "ConversionB0010", "UvWxYz", "222", "44", "2", "Status", "66", "22", "uVwXyZ", true, "tibss.trg.publish2", "88", "100", "tibss.trg.publishSec2", "tibss.trg.reply2", "tibss.trg.error2");
        }).then(function () {
            return Page.eleTrgNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TriggerRV0006').to.be.true;
        }).then(function () {
            return Page.eleTrgDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleTrgConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnRVA0009').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionB0009').to.be.true;
        }).then(function () {
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'OpQrSt').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputMethodDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'oPqRsT').to.be.true;
        }).then(function () {
            return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.publish1').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '77').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99').to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubject2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.publishSec1').to.be.true;
        }).then(function () {
            return Page.eleTrgRvReplySubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.reply1').to.be.true;
        }).then(function () {
            return Page.eleTrgRvErrorMsgSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.error1').to.be.true;
        });
    });

    // Add a Trigger with RV Connection, then add a Trigger with the same name, then confirm the overwrite operation.
    //
    it('Add a Trigger with RV Connection to overwrite an existing Trigger, then confirm the overwrite operation', function () {
        Page.delTrgYes("TriggerRV0007").then(function () {
            Page.delCvrYes("ConversionB0011");
        }).then(function () {
            Page.delCvrYes("ConversionB0012");
        }).then(function () {
            Page.delMsgYes("MessageC0007");
        }).then(function () {
            Page.delBufYes("BufferC0007");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0011");
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0012");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0007");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0011", "", false, "EndpointRVC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0012", "", false, "EndpointRVC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0007", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0007", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0011", "MessageC0007", "BufferC0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0012", "MessageC0007", "BufferC0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0007", "AbCdEfG", "ConnRVA0011", "ConversionB0011", "OpQrSt", "111", "33", "1", "Message", "55", "11", "oPqRsT", false, "tibss.trg.publish1", "77", "99", "tibss.trg.publishSec1", "tibss.trg.reply1", "tibss.trg.error1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0007", "HiJkLmN", "ConnRVA0012", "ConversionB0012", "UvWxYz", "222", "44", "2", "Status", "66", "22", "uVwXyZ", true, "tibss.trg.publish2", "88", "100", "tibss.trg.publishSec2", "tibss.trg.reply2", "tibss.trg.error2");
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
            return Page.eleTrgNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TriggerRV0007').to.be.true;
        }).then(function () {
            return Page.eleTrgDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleTrgConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnRVA0012').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionB0012').to.be.true;
        }).then(function () {
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'UvWxYz').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputMethodDropdown.getText();
        }).then(function (message) {
            expect(message === 'Status').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'uVwXyZ').to.be.true;
        }).then(function () {
            return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.publish2').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '88').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubject2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.publishSec2').to.be.true;
        }).then(function () {
            return Page.eleTrgRvReplySubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.reply2').to.be.true;
        }).then(function () {
            return Page.eleTrgRvErrorMsgSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.error2').to.be.true;
        });
    });

    // Add a Trigger with RV Connection, then add a Trigger with the same name, then discard the overwrite operation.
    //
    it('Add a Trigger with RV Connection to overwrite an existing Trigger, then discard the overwrite operation', function () {
        Page.delTrgYes("TriggerRV0008").then(function () {
            Page.delCvrYes("ConversionB0013");
        }).then(function () {
            Page.delCvrYes("ConversionB0014");
        }).then(function () {
            Page.delMsgYes("MessageC0008");
        }).then(function () {
            Page.delBufYes("BufferC0008");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0013");
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0014");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0008");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0013", "", false, "EndpointRVC0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0014", "", false, "EndpointRVC0008");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0008", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0008", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0013", "MessageC0008", "BufferC0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0014", "MessageC0008", "BufferC0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0008", "AbCdEfG", "ConnRVA0013", "ConversionB0013", "OpQrSt", "111", "33", "1", "Message", "55", "11", "oPqRsT", false, "tibss.trg.publish1", "77", "99", "tibss.trg.publishSec1", "tibss.trg.reply1", "tibss.trg.error1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0008", "HiJkLmN", "ConnRVA0014", "ConversionB0014", "UvWxYz", "222", "44", "2", "Status", "66", "22", "uVwXyZ", true, "tibss.trg.publish2", "88", "100", "tibss.trg.publishSec2", "tibss.trg.reply2", "tibss.trg.error2");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleTrgLeftmenu);
        }).then(function () {
            Page.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("TriggerRV0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleTrgNameInput);
        }).then(function () {
            return Page.eleTrgNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TriggerRV0008').to.be.true;
        }).then(function () {
            return Page.eleTrgDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleTrgConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnRVA0013').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConversionB0013').to.be.true;
        }).then(function () {
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'OpQrSt').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputMethodDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'oPqRsT').to.be.true;
        }).then(function () {
            return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.publish1').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '77').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99').to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubject2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.publishSec1').to.be.true;
        }).then(function () {
            return Page.eleTrgRvReplySubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.reply1').to.be.true;
        }).then(function () {
            return Page.eleTrgRvErrorMsgSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'tibss.trg.error1').to.be.true;
        });
    });

    // Add a Trigger with RV Connection, delete it, then confirm the delete operation.
    //
    it('Add a Trigger with RV Connection, delete it, then confirm the delete operation', function () {
        Page.delTrgYes("TriggerRV0009").then(function () {
            Page.delCvrYes("ConversionB0015");
        }).then(function () {
            Page.delMsgYes("MessageC0009");
        }).then(function () {
            Page.delBufYes("BufferC0009");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0015");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0009");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0015", "", false, "EndpointRVC0009");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0009", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0009", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0015", "MessageC0009", "BufferC0009", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0009", "", "ConnRVA0015", "ConversionB0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delTrgYes("TriggerRV0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("TriggerRV0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a Trigger with RV Connection, delete it, then discard the delete operation.
    //
    it('Add a Trigger with RV Connection, delete it, then discard the delete operation', function () {
        Page.delTrgYes("TriggerRV0010").then(function () {
            Page.delCvrYes("ConversionB0016");
        }).then(function () {
            Page.delMsgYes("MessageC0010");
        }).then(function () {
            Page.delBufYes("BufferC0010");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0016");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0010");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0016", "", false, "EndpointRVC0010");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0010", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0010", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0016", "MessageC0010", "BufferC0010", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0010", "", "ConnRVA0016", "ConversionB0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delTrgNo("TriggerRV0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("TriggerRV0010");
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
        Page.delTrgYes("TriggerRV0011").then(function () {
            Page.delCvrYes("ConversionB0017");
        }).then(function () {
            Page.delMsgYes("MessageC0011");
        }).then(function () {
            Page.delBufYes("BufferC0011");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0017");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0011");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0011");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0017", "", false, "EndpointRVC0011");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0011", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0011", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0017", "MessageC0011", "BufferC0011", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0011", "", "ConnRVA0017", "ConversionB0017");
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
            return Page.eleTableHeader4.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAuditButton);
        }).then(function () {
            Page.eleAuditButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleTableHeader4.getText();
        }).then(function (message) {
            expect(message === 'Modified On').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAuditButton);
        }).then(function () {
            Page.eleAuditButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleTableHeader4.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    //Test Trigger Details panel fields default value.
    //
    it('Test Trigger Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleTrgLeftmenu);
        }).then(function () {
            Page.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleTrgConnInput);
        }).then(function () {
            return Page.eleTrgConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page._connTrg("ConnRVA0017");
        }).then(function () {
            return Page.eleTrgNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleTrgDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleTrgConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnRVA0017').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputConversionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'DATA').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputMethodDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleTrgRvDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleTrgConnectionExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleTrgRvDetailsExtension);
        }).then(function () {
            return Page.eleTrgRvPublishSubjectInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleTrgRvDetailsExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleTrgRvPublishSubjectInput);
        }).then(function () {
            return Page.eleTrgRvPublishSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubject2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleTrgRvReplySubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleTrgRvErrorMsgSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test Trigger Details panel mandatory fields.
    //
    it('Test Trigger Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleTrgLeftmenu);
        }).then(function () {
            Page.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleTrgConnInput);
        }).then(function () {
            Page._connTrg("ConnRVA0017");
        }).then(function () {
            return Page.eleTrgRvDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleTrgConnectionExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleTrgRvDetailsExtension);
        }).then(function () {
            return Page.eleTrgRvPublishSubjectInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                Page.eleTrgRvDetailsExtension.click();
            }
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleTrgRvPublishSubjectInput);
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
            return Page.eleTrgNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubjectValidateMsg.getText();
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

    // Test field 'Trigger Details panel' -> 'Name'
    //
    it('Test field Trigger -> Name', function () {
        Page.delTrgYes("TriggerRV0012_@#$_223333333333444444444").then(function () {
            Page.delTrgYes("TriggerRV0013_@#$_223333333333444444444");
        }).then(function () {
            Page.delCvrYes("ConversionB0018");
        }).then(function () {
            Page.delMsgYes("MessageC0012");
        }).then(function () {
            Page.delBufYes("BufferC0012");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0018");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0012");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0012");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0018", "", false, "EndpointRVC0012");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0012", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0012", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0018", "MessageC0012", "BufferC0012", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0012_@#$_223333333333444444444", "", "ConnRVA0018", "ConversionB0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'TriggerRV0012_@#$_223333333333444444444').to.be.true;
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0013_@#$_2233333333334444444444", "", "ConnRVA0018", "ConversionB0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'TriggerRV0013_@#$_223333333333444444444').to.be.true;
        });
    });

    // Test field 'Trigger Details panel' -> 'Description'
    //
    it('Test field Trigger -> Description', function () {
        Page.delTrgYes("TriggerRV0014").then(function () {
            Page.delTrgYes("TriggerRV0015");
        }).then(function () {
            Page.delCvrYes("ConversionB0019");
        }).then(function () {
            Page.delMsgYes("MessageC0013");
        }).then(function () {
            Page.delBufYes("BufferC0013");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0019");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0013");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0013");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0019", "", false, "EndpointRVC0013");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0013", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0013", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0019", "MessageC0013", "BufferC0013", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", "ConnRVA0019", "ConversionB0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111", "ConnRVA0019", "ConversionB0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleTrgDescValidateMsg);
        }).then(function () {
            return Page.eleTrgDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleTrgDescInput);
        }).then(function () {
            Page.eleTrgDescInput.clear().sendKeys("Corrected");
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

    // Test field 'Trigger Details panel' -> 'Connection'
    //
    it('Test field Trigger -> Connection', function () {
        Page.delTrgYes("TriggerRV0016").then(function () {
            Page.delCvrYes("ConversionB0020");
        }).then(function () {
            Page.delMsgYes("MessageC0014");
        }).then(function () {
            Page.delBufYes("BufferC0014");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0020_@#$_22223333333333444444444");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0014");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0020_@#$_22223333333333444444444", "", false, "EndpointRVC0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0014", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0014", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0020", "MessageC0014", "BufferC0014", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0016", "", "ConnRVA0020_@#$_22223333333333444444444", "ConversionB0020");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgConnInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConnRVA0020_@#$_22223333333333444444444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgConnInput.clear().sendKeys("INVALID");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleTrgConnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test field 'Trigger Details panel' -> 'Output Conversion'
    // Related jiras: ZWUI-1095
    //
    it('Test field Trigger -> Output Conversion', function () {
        Page.delTrgYes("TriggerRV0017").then(function () {
            Page.delCvrYes("ConversionB0021_@#$_3333333333444444444");
        }).then(function () {
            Page.delMsgYes("MessageC0015");
        }).then(function () {
            Page.delBufYes("BufferC0015");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0021");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0015");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0021", "", false, "EndpointRVC0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0015", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0015", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0021_@#$_3333333333444444444", "MessageC0015", "BufferC0015", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        // }).then(function () {
        //     Page.addTrgWithRv("TriggerRV0017", "", "ConnRVA0021", "INVALID");
        // }).then(function () {
        //     globalCommons.waitForElementPresent(Page.eleSaveInfo);
        // }).then(function () {
        //     return Page.eleSaveInfo.getText();
        // }).then(function (message) {
        //     expect(message === 'There is an error on this form').to.be.true;
        // }).then(function () {
        //     return Page.eleTrgOutputConversionValidateMsg.getText();
        // }).then(function (message) {
        //     expect(message === 'Invalid Reference').to.be.true;
        // }).then(function () {
        //     Page.eleSaveInfoClose.click();
        // }).then(function () {
        //     Page.eleTrgOutputConversionInput.clear().sendKeys("ConversionB0021_@#$_3333333333444444444");
        // }).then(function () {
        //     Page.eleSaveButton.click();
        // }).then(function () {
        //     globalCommons.waitForElementPresent(Page.eleSaveInfo);
        // }).then(function () {
        //     return Page.eleSaveInfo.getText();
        // }).then(function (message) {
        //     expect(message === 'Saved successfully.').to.be.true;
        // }).then(function () {
        //     return Page.eleTrgOutputConversionInput.getAttribute("value");
        // }).then(function (message) {
        //     expect(message === 'ConversionB0021_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'Trigger Details panel' -> 'Disable on Error (#)'
    //
    it('Test field Trigger -> Disable on Error (#)', function () {
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        Page.delTrgYes("TriggerRV0018").then(function () {
            Page.delCvrYes("ConversionB0022");
        }).then(function () {
            Page.delMsgYes("MessageC0016");
        }).then(function () {
            Page.delBufYes("BufferC0016");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0022");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0016");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0022", "", false, "EndpointRVC0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0016", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0016", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0022", "MessageC0016", "BufferC0016", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0018", "", "ConnRVA0022", "ConversionB0022", undefined, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgDisableOnErrorNumSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgDisableOnErrorNumSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgDisableOnErrorNumSpinner.clear().sendKeys("3333");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3333').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgDisableOnErrorNumSpinner.clear().sendKeys("44444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgDisableOnErrorNumSpinner.clear().sendKeys("99999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgDisableOnErrorNumSpinner.clear().sendKeys("111111");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorNumSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '11111').to.be.true;
        });
    });

    // Test field 'Trigger Details panel' -> 'Disable on Error (%)'
    //
    it('Test field Trigger -> Disable on Error (%)', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delTrgYes("TriggerRV0019").then(function () {
            Page.delCvrYes("ConversionB0023");
        }).then(function () {
            Page.delMsgYes("MessageC0017");
        }).then(function () {
            Page.delBufYes("BufferC0017");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0023");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0017");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0023", "", false, "EndpointRVC0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0017", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0017", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0023", "MessageC0017", "BufferC0017", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0019", "", "ConnRVA0023", "ConversionB0023", undefined, "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys("99");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys("100");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys("101");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys("999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgDisableOnErrorPercentSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        });
    });

    // Test field 'Trigger Details panel' -> 'Trace Level'
    //
    it('Test field Trigger -> Trace Level', function () {
        var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
        Page.delTrgYes("TriggerRV0020").then(function () {
            Page.delCvrYes("ConversionB0024");
        }).then(function () {
            Page.delMsgYes("MessageC0018");
        }).then(function () {
            Page.delBufYes("BufferC0018");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0024");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0018");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0024", "", false, "EndpointRVC0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0018", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0018", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0024", "MessageC0018", "BufferC0018", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0020", "", "ConnRVA0024", "ConversionB0024", undefined, "0", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgTrclvlSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgTrclvlSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgTrclvlSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgTrclvlSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgTrclvlSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgTrclvlSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgTrclvlSpinner.clear().sendKeys("9");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgTrclvlSpinner.clear().sendKeys("11");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgTrclvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        });
    });

    // Test field 'Trigger Details panel' -> 'Output Method'
    //
    it('Test field Trigger -> Output Method', function () {
        Page.delTrgYes("TriggerRV0021").then(function () {
            Page.delTrgYes("TriggerRV0022");
        }).then(function () {
            Page.delTrgYes("TriggerRV0023");
        }).then(function () {
            Page.delCvrYes("ConversionB0025");
        }).then(function () {
            Page.delMsgYes("MessageC0019");
        }).then(function () {
            Page.delBufYes("BufferC0019");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0025");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0019");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0025", "", false, "EndpointRVC0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0019", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0019", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0025", "MessageC0019", "BufferC0019", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0021", "", "ConnRVA0025", "ConversionB0025", undefined, "0", "0", "0", "Message");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputMethodDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleTrgOutputMethodDropdown);
        }).then(function () {
            Page.eleTrgOutputMethodDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleTrgOutputMethod01);
        }).then(function () {
            return Page.eleTrgOutputMethod01.getText();
        }).then(function (message) {
            expect(message === 'Status').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputMethod02.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputMethod03.getText();
        }).then(function (message) {
            expect(message === 'Status and Message').to.be.true;
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0022", "", "ConnRVA0025", "ConversionB0025", undefined, "0", "0", "0", "Status");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputMethodDropdown.getText();
        }).then(function (message) {
            expect(message === 'Status').to.be.true;
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0023", "", "ConnRVA0025", "ConversionB0025", undefined, "0", "0", "0", "Status and Message");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgOutputMethodDropdown.getText();
        }).then(function (message) {
            expect(message === 'Status and Message').to.be.true;
        });
    });

    // Test field 'Trigger Details panel' -> 'Service Key Locator Start'
    //
    it('Test field Trigger -> Service Key Locator Start', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delTrgYes("TriggerRV0024").then(function () {
            Page.delCvrYes("ConversionB0026");
        }).then(function () {
            Page.delMsgYes("MessageC0020");
        }).then(function () {
            Page.delBufYes("BufferC0020");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0026");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0020");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0026", "", false, "EndpointRVC0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0020", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0020", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0026", "MessageC0020", "BufferC0020", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0024", "", "ConnRVA0026", "ConversionB0026", undefined, "0", "0", "0", "Message", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("11111");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '11111').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("222222");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '222222').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("3333333");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3333333').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("4095936");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095936').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("4095937");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095937').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("4095938");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095937').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys("333333333");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3333333').to.be.true;
        });
    });

    // Test field 'Trigger Details panel' -> 'Service Key Locator Length'
    // Related jiras: ZWUI-1094
    //
    it('Test field Trigger -> Service Key Locator Length', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delTrgYes("TriggerRV0025").then(function () {
            Page.delCvrYes("ConversionB0027");
        }).then(function () {
            Page.delMsgYes("MessageC0021");
        }).then(function () {
            Page.delBufYes("BufferC0021");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0027");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0021");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0027", "", false, "EndpointRVC0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0021", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0021", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0027", "MessageC0021", "BufferC0021", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0025", "", "ConnRVA0027", "ConversionB0027", undefined, "0", "0", "0", "Message", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgServiceKeyLocatorLengthSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgServiceKeyLocatorLengthSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgServiceKeyLocatorLengthSpinner.clear().sendKeys("55");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgServiceKeyLocatorLengthSpinner.clear().sendKeys("63");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '63').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgServiceKeyLocatorLengthSpinner.clear().sendKeys("64");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '63').to.be.true;
        });
    });

    // Test field 'Trigger Details panel' -> 'Service Key Locator Value'
    //
    it('Test field Trigger -> Service Key Locator Value', function () {
        Page.delTrgYes("TriggerRV0026").then(function () {
            Page.delCvrYes("ConversionB0028");
        }).then(function () {
            Page.delMsgYes("MessageC0022");
        }).then(function () {
            Page.delBufYes("BufferC0022");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0028");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0022");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0028", "", false, "EndpointRVC0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0022", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0022", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0028", "MessageC0022", "BufferC0022", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0026", "", "ConnRVA0028", "ConversionB0028", undefined, "0", "0", "0", "Message", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorValueInput.clear().sendKeys("a0!@B1#$c2%&D3*?");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'a0!@B1#$c2%&D3*?').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorValueInput.clear().sendKeys("D3!@c2#$B1%&a0*?");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'D3!@c2#$B1%&a0*?').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorValueInput.clear().sendKeys("3D!@2c#$1B%&0a*?4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '3D!@2c#$1B%&0a*?4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorValueInput.clear().sendKeys("!@#$3D2c1B0a*?%&");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$3D2c1B0a*?%&').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorValueInput.clear().sendKeys("!@#$3D2c1B0a*?%&22223333333333444444444455555555556666666666777");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$3D2c1B0a*?%&22223333333333444444444455555555556666666666777').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgServiceKeyLocatorValueInput.clear().sendKeys("!@#$3D2c1B0a*?%&222233333333334444444444555555555566666666667777");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgServiceKeyLocatorValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$3D2c1B0a*?%&22223333333333444444444455555555556666666666777').to.be.true;
        });
    });

    // Test field 'Trigger Details panel' -> 'Requeue on Error'
    //
    it('Test field Trigger -> Requeue on Error', function () {
        Page.delTrgYes("TriggerRV0027").then(function () {
            Page.delTrgYes(("TriggerRV0028"));
        }).then(function () {
            Page.delCvrYes("ConversionB0029");
        }).then(function () {
            Page.delMsgYes("MessageC0023");
        }).then(function () {
            Page.delBufYes("BufferC0023");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0029");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0023");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0029", "", false, "EndpointRVC0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0023", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0023", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0029", "MessageC0023", "BufferC0023", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0027", "", "ConnRVA0029", "ConversionB0029", undefined, "0", "0", "0", "Message", "0", "0", "");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0028", "", "ConnRVA0029", "ConversionB0029", undefined, "0", "0", "0", "Message", "0", "0", "", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRequeueOnErrorCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Test field 'Trigger Details panel' -> 'Publish Subject, Publish Subject (Secondary), Reply-to Subject & Error Message Subject'
    //
    it('Test field Trigger -> Publish Subject, Publish Subject (Secondary), Reply-to Subject & Error Message Subject', function () {
        Page.delTrgYes("TriggerRV0029").then(function () {
            Page.delCvrYes("ConversionB0030");
        }).then(function () {
            Page.delMsgYes("MessageC0024");
        }).then(function () {
            Page.delBufYes("BufferC0024");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0030");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0024");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0030", "", false, "EndpointRVC0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0024", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0024", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0030", "MessageC0024", "BufferC0024", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0029", "", "ConnRVA0030", "ConversionB0030");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.trg.publishSubj").to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubject2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === "").to.be.true;
        }).then(function () {
            return Page.eleTrgRvReplySubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "").to.be.true;
        }).then(function () {
            return Page.eleTrgRvErrorMsgSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvPublishSubjectInput.clear().sendKeys("tibss.trg.publishSubj._3D!@2c#$1B%&0a*?-55555555556666666666777");
        }).then(function () {
            Page.eleTrgRvPublishSubject2Input.clear().sendKeys("tibss.trg.publishSubj2._3D!@2c#$1B%&0a*?-5555555556666666666777");
        }).then(function () {
            Page.eleTrgRvReplySubjectInput.clear().sendKeys("tibss.trg.replyToSubj._3D!@2c#$1B%&0a*?-55555555556666666666777");
        }).then(function () {
            Page.eleTrgRvErrorMsgSubjectInput.clear().sendKeys("tibss.trg.errorMsgSubj._3D!@2c#$1B%&0a*?-5555555556666666666777");
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
            return Page.eleTrgRvPublishSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.trg.publishSubj._3D!@2c#$1B%&0a*?-55555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubject2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.trg.publishSubj2._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleTrgRvReplySubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.trg.replyToSubj._3D!@2c#$1B%&0a*?-55555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleTrgRvErrorMsgSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.trg.errorMsgSubj._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvPublishSubjectInput.clear().sendKeys("tibss.trg.publishSubj._3D!@2c#$1B%&0a*?-555555555566666666667777");
        }).then(function () {
            Page.eleTrgRvPublishSubject2Input.clear().sendKeys("tibss.trg.publishSubj2._3D!@2c#$1B%&0a*?-55555555566666666667777");
        }).then(function () {
            Page.eleTrgRvReplySubjectInput.clear().sendKeys("tibss.trg.replyToSubj._3D!@2c#$1B%&0a*?-555555555566666666667777");
        }).then(function () {
            Page.eleTrgRvErrorMsgSubjectInput.clear().sendKeys("tibss.trg.errorMsgSubj._3D!@2c#$1B%&0a*?-55555555566666666667777");
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
            return Page.eleTrgRvPublishSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.trg.publishSubj._3D!@2c#$1B%&0a*?-55555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleTrgRvPublishSubject2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.trg.publishSubj2._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleTrgRvReplySubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.trg.replyToSubj._3D!@2c#$1B%&0a*?-55555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleTrgRvErrorMsgSubjectInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.trg.errorMsgSubj._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        });
    });
    
    // Test field 'Trigger Details panel' -> 'Dynamic Subject suffix Length'
    //
    it('Test field Trigger -> Dynamic Subject suffix Length', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delTrgYes("TriggerRV0030").then(function () {
            Page.delCvrYes("ConversionB0031");
        }).then(function () {
            Page.delMsgYes("MessageC0025");
        }).then(function () {
            Page.delBufYes("BufferC0025");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0031");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0025");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0031", "", false, "EndpointRVC0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0025", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0025", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0031", "MessageC0025", "BufferC0025", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0030", "", "ConnRVA0031", "ConversionB0031");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.clear().sendKeys("100");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.clear().sendKeys("127");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '127').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.clear().sendKeys("128");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '127').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.clear().sendKeys("999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '127').to.be.true;
        });
    });

    // Test field 'Trigger Details panel' -> 'Dynamic Subject suffix Start'
    //
    it('Test field Trigger -> Dynamic Subject suffix Start', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delTrgYes("TriggerRV0031").then(function () {
            Page.delCvrYes("ConversionB0032");
        }).then(function () {
            Page.delMsgYes("MessageC0026");
        }).then(function () {
            Page.delBufYes("BufferC0026");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0032");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0026");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0032", "", false, "EndpointRVC0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0026", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0026", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0032", "MessageC0026", "BufferC0026", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0031", "", "ConnRVA0032", "ConversionB0032");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.clear().sendKeys("2222");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.clear().sendKeys("33333");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.clear().sendKeys("444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '444444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.clear().sendKeys("4095872");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095872').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.clear().sendKeys("4095873");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095873').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.clear().sendKeys("4095874");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095873').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleTrgRvDynamicSubjectSuffixStartSpinner.clear().sendKeys("9999999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgRvDynamicSubjectSuffixStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095873').to.be.true;
        });
    });

    // Test field 'Trigger Details panel' -> 'Field Name for Conversionless Message'
    //
    it('Test field Trigger -> Field Name for Conversionless Message', function () {
        Page.delTrgYes("TriggerRV0032").then(function () {
            Page.delCvrYes("ConversionB0033");
        }).then(function () {
            Page.delMsgYes("MessageC0027");
        }).then(function () {
            Page.delBufYes("BufferC0027");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVA0033");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVC0027");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVC0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVA0033", "", false, "EndpointRVC0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageC0027", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferC0027", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionB0033", "MessageC0027", "BufferC0027", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addTrgWithRv("TriggerRV0032", "", "ConnRVA0033", "ConversionB0033", "");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'DATA').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgFldNameForCvrlessMsgInput.clear().sendKeys("A");
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
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgFldNameForCvrlessMsgInput.clear().sendKeys("b");
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
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'b').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgFldNameForCvrlessMsgInput.clear().sendKeys("0");
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
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgFldNameForCvrlessMsgInput.clear().sendKeys("@");
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
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '@').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgFldNameForCvrlessMsgInput.clear().sendKeys("!@#$%^&*?1CCCCCCCCCCdddddddddd4444444444555555555566666666667777777777888888888");
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
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*?1CCCCCCCCCCdddddddddd4444444444555555555566666666667777777777888888888').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleTrgFldNameForCvrlessMsgInput.clear().sendKeys("!@#$%^&*?1CCCCCCCCCCdddddddddd4444444444555555555566666666667777777777888888888x");
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
            return Page.eleTrgFldNameForCvrlessMsgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*?1CCCCCCCCCCdddddddddd4444444444555555555566666666667777777777888888888').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});