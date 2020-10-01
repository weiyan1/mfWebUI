/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var configurePage = require('../pageObject/configurePage.js');
var DefinePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.6.5 Configure Recipe With CICS & RV Page', function () {
    var Page = new configurePage();
    var definePage = new DefinePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleConfigureMenu.click();
    });
    //
    // // Add a Recipe with CICS interface & RV Connection successfully.
    // //
    // it('Add a Recipe with CICS Interface & RV Connection successfully', function () {
    //     browser.sleep(1000).then(function () {
    //         Page.delRecYes("RecipeCR0001");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionI0101");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0101");
    //     }).then(function () {
    //         Page.delMsgYes("MessageE0001");
    //     }).then(function () {
    //         Page.delBufYes("BufferE0001");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0001");
    //     }).then(function () {
    //         definePage.delEndpointRvYes("EndpointRVD0001");
    //     }).then(function () {
    //         definePage.addEndpointRv("EndpointRVD0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0001", "", false, "EndpointRVD0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0001");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0001");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0001");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0001");
    //     }).then(function () {
    //         definePage.delEndpointCicsYes("EndpointCICSD0001");
    //     }).then(function () {
    //         definePage.addEndpointCics("EndpointCICSD0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0001", "", undefined, "", "EndpointCICSD0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0001", "", undefined, "", "EndpointCICSD0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0001", "", undefined, "", "EndpointCICSD0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0001", "", undefined, "", "EndpointCICSD0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageE0001", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferE0001", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0101", "MessageE0001", "BufferE0001", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0101", "MessageE0001", "BufferE0001", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0001", "", "IntfCICSE0001", true, "IntfCICSF0001", true, "IntfCICSG0001", true, "IntfCICSH0001", true, "ConnRVB0001", true, "0", "0", "0", "ConversionI0101", true, "ConversionO0101", true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     });
    // });
    //
    // // Add a Recipe with CICS Interface & RV Connection successfully, then replicate it.
    // //
    // it('Add a Recipe with CICS Interface & RV Connection, then replicate it successfully', function () {
    //     Page.delRecYes("RecipeCR0002-copy").then(function () {
    //         Page.delRecYes("RecipeCR0002");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionI0102");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0102");
    //     }).then(function () {
    //         Page.delMsgYes("MessageE0002");
    //     }).then(function () {
    //         Page.delBufYes("BufferE0002");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0002");
    //     }).then(function () {
    //         definePage.delEndpointRvYes("EndpointRVD0002");
    //     }).then(function () {
    //         definePage.addEndpointRv("EndpointRVD0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0002", "", false, "EndpointRVD0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0002");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0002");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0002");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0002");
    //     }).then(function () {
    //         definePage.delEndpointCicsYes("EndpointCICSD0002");
    //     }).then(function () {
    //         definePage.addEndpointCics("EndpointCICSD0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0002", "", undefined, "", "EndpointCICSD0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0002", "", undefined, "", "EndpointCICSD0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0002", "", undefined, "", "EndpointCICSD0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0002", "", undefined, "", "EndpointCICSD0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageE0002", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferE0002", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0102", "MessageE0002", "BufferE0002", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0102", "MessageE0002", "BufferE0002", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0002", "", "IntfCICSE0002", true, "IntfCICSF0002", true, "IntfCICSG0002", true, "IntfCICSH0002", true, "ConnRVB0002", true, "0", "0", "0", "ConversionI0102", true, "ConversionO0102", true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.replicateRec("RecipeCR0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RecipeCR0002-copy').to.be.true;
    //     });
    // });
    //
    // // Add a Recipe with CICS Interface & RV Connection successfully, then update it.
    // //
    // it('Add a Recipe with CICS Interface & RV Connection, then update it successfully', function () {
    //     Page.delRecYes("RecipeCR0003").then(function () {
    //         Page.delCvrYes("ConversionI0103");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionI0104");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0103");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0104");
    //     }).then(function () {
    //         Page.delMsgYes("MessageE0003");
    //     }).then(function () {
    //         Page.delBufYes("BufferE0003");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0003");
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0004");
    //     }).then(function () {
    //         definePage.delEndpointRvYes("EndpointRVD0003");
    //     }).then(function () {
    //         definePage.addEndpointRv("EndpointRVD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0003", "", false, "EndpointRVD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0004", "", false, "EndpointRVD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0003");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0004");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0003");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0004");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0003");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0004");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0003");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0004");
    //     }).then(function () {
    //         definePage.delEndpointCicsYes("EndpointCICSD0003");
    //     }).then(function () {
    //         definePage.addEndpointCics("EndpointCICSD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0003", "", undefined, "", "EndpointCICSD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0004", "", undefined, "", "EndpointCICSD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0003", "", undefined, "", "EndpointCICSD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0004", "", undefined, "", "EndpointCICSD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0003", "", undefined, "", "EndpointCICSD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0004", "", undefined, "", "EndpointCICSD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0003", "", undefined, "", "EndpointCICSD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0004", "", undefined, "", "EndpointCICSD0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageE0003", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferE0003", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0103", "MessageE0003", "BufferE0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0104", "MessageE0003", "BufferE0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0103", "MessageE0003", "BufferE0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0104", "MessageE0003", "BufferE0003", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0003", "AbCdEfG", "IntfCICSE0003", true, "IntfCICSF0003", true, "IntfCICSG0003", true, "IntfCICSH0003", true, "ConnRVB0003", true, "111", "33", "1", "ConversionI0103", true, "ConversionO0103", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnSubj1", "replytoSubj1", false, "55", "77", "111", "errSubj1");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.updateRecWithCicsRv("RecipeCR0003", "HiJkLmN", "IntfCICSE0004", true, "IntfCICSF0004", true, "IntfCICSG0004", true, "IntfCICSH0004", true, "ConnRVB0004", true, "222", "44", "2", "ConversionI0104", true, "ConversionO0104", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnSubj2", "replytoSubj2", true, "66", "88", "222", "errSubj2");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RecipeCR0003').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'HiJkLmN').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntfInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSE0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf2Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSF0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf3Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSG0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf4Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSH0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConnRVB0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '44').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecInputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionI0104').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionO0104').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecResourceNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAMA').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecSsidFilterCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecMethodReplyDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'None').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMethodInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Storage').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'MRT2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRETranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RRT2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRESysNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RRS2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'CHANNEL2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'CONTAINER2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Transaction').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerCreationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Message').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource2Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAMB').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource3Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAMC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource4Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAMD').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource5Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAME').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvListentoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'lsnSubj2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'replytoSubj2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoAlwaysCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '66').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '88').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvErrorMsgSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'errSubj2').to.be.true;
    //     });
    // });
    //
    // // Add a Recipe with CICS Interface & RV Connection , make some changes, cancel the changes, then confirm the cancel operation.
    // //
    // it('Add a Recipe with CICS Interface & RV Connection, cancel the changes, then confirm the cancel operation', function () {
    //     Page.delRecYes("RecipeCR0004").then(function () {
    //         Page.delCvrYes("ConversionI0105");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionI0106");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0105");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0106");
    //     }).then(function () {
    //         Page.delMsgYes("MessageE0004");
    //     }).then(function () {
    //         Page.delBufYes("BufferE0004");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0005");
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0006");
    //     }).then(function () {
    //         definePage.delEndpointRvYes("EndpointRVD0004");
    //     }).then(function () {
    //         definePage.addEndpointRv("EndpointRVD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0005", "", false, "EndpointRVD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0006", "", false, "EndpointRVD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0005");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0006");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0005");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0006");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0005");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0006");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0005");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0006");
    //     }).then(function () {
    //         definePage.delEndpointCicsYes("EndpointCICSD0004");
    //     }).then(function () {
    //         definePage.addEndpointCics("EndpointCICSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0005", "", undefined, "", "EndpointCICSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0006", "", undefined, "", "EndpointCICSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0005", "", undefined, "", "EndpointCICSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0006", "", undefined, "", "EndpointCICSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0005", "", undefined, "", "EndpointCICSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0006", "", undefined, "", "EndpointCICSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0005", "", undefined, "", "EndpointCICSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0006", "", undefined, "", "EndpointCICSD0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageE0004", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferE0004", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0105", "MessageE0004", "BufferE0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0106", "MessageE0004", "BufferE0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0105", "MessageE0004", "BufferE0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0106", "MessageE0004", "BufferE0004", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0004", "AbCdEfG", "IntfCICSE0005", true, "IntfCICSF0005", true, "IntfCICSG0005", true, "IntfCICSH0005", true, "ConnRVB0005", true, "111", "33", "1", "ConversionI0105", true, "ConversionO0105", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnSubj1", "replytoSubj1", false, "55", "77", "111", "errSubj1");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.cancelRecWithCicsRvYes("RecipeCR0004", "HiJkLmN", "IntfCICSE0006", true, "IntfCICSF0006", true, "IntfCICSG0006", true, "IntfCICSH0006", true, "ConnRVB0006", true, "222", "44", "2", "ConversionI0106", true, "ConversionO0106", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnSubj2", "replytoSubj2", true, "66", "88", "222", "errSubj2");
    //     }).then(function () {
    //         Page.eleRecLeftmenu.click();
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleSearchInput);
    //     }).then(function () {
    //         Page.eleSearchInput.clear().sendKeys("RecipeCR0004");
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
    //         return Page.eleRecNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RecipeCR0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'AbCdEfG').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntfInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSE0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf2Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSF0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf3Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSG0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf4Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSH0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConnRVB0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '111').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '33').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecInputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionI0105').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionO0105').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecResourceNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecSsidFilterCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecMethodReplyDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'None').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMethodInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Container').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'MRT1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRETranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RRT1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRESysNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RRS1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'CHANNEL1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'CONTAINER1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Program').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerCreationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Single').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource2Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource3Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM3').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource4Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM4').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource5Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM5').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvListentoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'lsnSubj1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'replytoSubj1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoAlwaysCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '55').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '77').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '111').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvErrorMsgSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'errSubj1').to.be.true;
    //     });
    // });
    //
    // // Add a Recipe with CICS Interface & RV Connection, make some changes, cancel the changes, then discard the cancel operation.
    // //
    // it('Add a Recipe with CICS Interface & RV Connection, cancel the changes, then discard the cancel operation', function () {
    //     Page.delRecYes("RecipeCR0005").then(function () {
    //         Page.delCvrYes("ConversionI0107");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionI0108");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0107");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0108");
    //     }).then(function () {
    //         Page.delMsgYes("MessageE0005");
    //     }).then(function () {
    //         Page.delBufYes("BufferE0005");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0007");
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0008");
    //     }).then(function () {
    //         definePage.delEndpointRvYes("EndpointRVD0005");
    //     }).then(function () {
    //         definePage.addEndpointRv("EndpointRVD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0007", "", false, "EndpointRVD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0008", "", false, "EndpointRVD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0007");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0008");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0007");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0008");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0007");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0008");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0007");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0008");
    //     }).then(function () {
    //         definePage.delEndpointCicsYes("EndpointCICSD0005");
    //     }).then(function () {
    //         definePage.addEndpointCics("EndpointCICSD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0007", "", undefined, "", "EndpointCICSD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0008", "", undefined, "", "EndpointCICSD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0007", "", undefined, "", "EndpointCICSD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0008", "", undefined, "", "EndpointCICSD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0007", "", undefined, "", "EndpointCICSD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0008", "", undefined, "", "EndpointCICSD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0007", "", undefined, "", "EndpointCICSD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0008", "", undefined, "", "EndpointCICSD0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageE0005", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferE0005", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0107", "MessageE0005", "BufferE0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0108", "MessageE0005", "BufferE0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0107", "MessageE0005", "BufferE0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0108", "MessageE0005", "BufferE0005", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0005", "AbCdEfG", "IntfCICSE0007", true, "IntfCICSF0007", true, "IntfCICSG0007", true, "IntfCICSH0007", true, "ConnRVB0007", true, "111", "33", "1", "ConversionI0107", true, "ConversionO0107", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnSubj1", "replytoSubj1", false, "55", "77", "111", "errSubj1");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.cancelRecWithCicsRvNo("RecipeCR0005", "HiJkLmN", "IntfCICSE0008", true, "IntfCICSF0008", true, "IntfCICSG0008", true, "IntfCICSH0008", true, "ConnRVB0008", true, "222", "44", "2", "ConversionI0108", true, "ConversionO0108", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnSubj2", "replytoSubj2", true, "66", "88", "222", "errSubj2");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecNameInput);
    //     }).then(function () {
    //         return Page.eleRecNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RecipeCR0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'HiJkLmN').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntfInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSE0008').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf2Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSF0008').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf3Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSG0008').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf4Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSH0008').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConnRVB0008').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '44').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecInputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionI0108').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionO0108').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecResourceNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAMA').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecSsidFilterCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecMethodReplyDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'None').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMethodInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Storage').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'MRT2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRETranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RRT2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRESysNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RRS2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'CHANNEL2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'CONTAINER2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Transaction').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerCreationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Message').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource2Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAMB').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource3Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAMC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource4Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAMD').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource5Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAME').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvListentoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'lsnSubj2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'replytoSubj2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoAlwaysCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '66').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '88').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvErrorMsgSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'errSubj2').to.be.true;
    //     });
    // });
    //
    // // Add a Recipe with CICS Interface & RV Connection, make some changes, then reset it.
    // //
    // it('Add a Recipe with CICS Interface & RV Connection, make some changes, then reset it', function () {
    //     Page.delRecYes("RecipeCR0006").then(function () {
    //         Page.delCvrYes("ConversionI0109");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionI0110");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0109");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0110");
    //     }).then(function () {
    //         Page.delMsgYes("MessageE0006");
    //     }).then(function () {
    //         Page.delBufYes("BufferE0006");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0009");
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0010");
    //     }).then(function () {
    //         definePage.delEndpointRvYes("EndpointRVD0006");
    //     }).then(function () {
    //         definePage.addEndpointRv("EndpointRVD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0009", "", false, "EndpointRVD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0010", "", false, "EndpointRVD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0009");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0010");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0009");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0010");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0009");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0010");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0009");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0010");
    //     }).then(function () {
    //         definePage.delEndpointCicsYes("EndpointCICSD0006");
    //     }).then(function () {
    //         definePage.addEndpointCics("EndpointCICSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0009", "", undefined, "", "EndpointCICSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0010", "", undefined, "", "EndpointCICSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0009", "", undefined, "", "EndpointCICSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0010", "", undefined, "", "EndpointCICSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0009", "", undefined, "", "EndpointCICSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0010", "", undefined, "", "EndpointCICSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0009", "", undefined, "", "EndpointCICSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0010", "", undefined, "", "EndpointCICSD0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageE0006", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferE0006", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0109", "MessageE0006", "BufferE0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0110", "MessageE0006", "BufferE0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0109", "MessageE0006", "BufferE0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0110", "MessageE0006", "BufferE0006", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0006", "AbCdEfG", "IntfCICSE0009", true, "IntfCICSF0009", true, "IntfCICSG0009", true, "IntfCICSH0009", true, "ConnRVB0009", true, "111", "33", "1", "ConversionI0109", true, "ConversionO0109", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnSubj1", "replytoSubj1", false, "55", "77", "111", "errSubj1");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.resetRecWithCicsRv("RecipeCR0006", "HiJkLmN", "IntfCICSE0010", true, "IntfCICSF0010", true, "IntfCICSG0010", true, "IntfCICSH0010", true, "ConnRVB0010", true, "222", "44", "2", "ConversionI0110", true, "ConversionO0110", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnSubj2", "replytoSubj2", true, "66", "88", "222", "errSubj2");
    //     }).then(function () {
    //         return Page.eleRecNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RecipeCR0006').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'AbCdEfG').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntfInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSE0009').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf2Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSF0009').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf3Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSG0009').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf4Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSH0009').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConnRVB0009').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '111').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '33').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecInputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionI0109').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionO0109').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecResourceNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecSsidFilterCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecMethodReplyDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'None').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMethodInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Container').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'MRT1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRETranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RRT1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRESysNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RRS1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'CHANNEL1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'CONTAINER1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Program').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerCreationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Single').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource2Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource3Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM3').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource4Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM4').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource5Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM5').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvListentoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'lsnSubj1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'replytoSubj1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoAlwaysCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '55').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '77').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '111').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvErrorMsgSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'errSubj1').to.be.true;
    //     });
    // });
    //
    // // Add a Recipe with CICS Interface & RV Connection, then add a Recipe with the same name, then confirm the overwrite operation.
    // //
    // it('Add a Recipe with CICS Interface & RV Connection to overwrite an existing Recipe, then confirm the overwrite operation', function () {
    //     Page.delRecYes("RecipeCR0007").then(function () {
    //         Page.delCvrYes("ConversionI0111");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionI0112");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0111");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0112");
    //     }).then(function () {
    //         Page.delMsgYes("MessageE0007");
    //     }).then(function () {
    //         Page.delBufYes("BufferE0007");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0011");
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0012");
    //     }).then(function () {
    //         definePage.delEndpointRvYes("EndpointRVD0007");
    //     }).then(function () {
    //         definePage.addEndpointRv("EndpointRVD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0011", "", false, "EndpointRVD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0012", "", false, "EndpointRVD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0011");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0012");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0011");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0012");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0011");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0012");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0011");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0012");
    //     }).then(function () {
    //         definePage.delEndpointCicsYes("EndpointCICSD0007");
    //     }).then(function () {
    //         definePage.addEndpointCics("EndpointCICSD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0011", "", undefined, "", "EndpointCICSD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0012", "", undefined, "", "EndpointCICSD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0011", "", undefined, "", "EndpointCICSD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0012", "", undefined, "", "EndpointCICSD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0011", "", undefined, "", "EndpointCICSD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0012", "", undefined, "", "EndpointCICSD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0011", "", undefined, "", "EndpointCICSD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0012", "", undefined, "", "EndpointCICSD0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageE0007", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferE0007", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0111", "MessageE0007", "BufferE0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0112", "MessageE0007", "BufferE0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0111", "MessageE0007", "BufferE0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0112", "MessageE0007", "BufferE0007", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0007", "AbCdEfG", "IntfCICSE0011", true, "IntfCICSF0011", true, "IntfCICSG0011", true, "IntfCICSH0011", true, "ConnRVB0011", true, "111", "33", "1", "ConversionI0111", true, "ConversionO0111", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnSubj1", "replytoSubj1", false, "55", "77", "111", "errSubj1");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0007", "HiJkLmN", "IntfCICSE0012", true, "IntfCICSF0012", true, "IntfCICSG0012", true, "IntfCICSH0012", true, "ConnRVB0012", true, "222", "44", "2", "ConversionI0112", true, "ConversionO0112", true, "PROGRAMA", true, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnSubj2", "replytoSubj2", true, "66", "88", "222", "errSubj2");
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
    //         return Page.eleRecNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RecipeCR0007').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'HiJkLmN').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntfInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSE0012').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf2Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSF0012').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf3Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSG0012').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf4Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSH0012').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConnRVB0012').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '44').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecInputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionI0112').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionO0112').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecResourceNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAMA').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecSsidFilterCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecMethodReplyDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'None').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMethodInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Storage').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'MRT2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRETranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RRT2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRESysNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RRS2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'CHANNEL2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'CONTAINER2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Transaction').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerCreationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Message').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource2Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAMB').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource3Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAMC').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource4Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAMD').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource5Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAME').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvListentoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'lsnSubj2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'replytoSubj2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoAlwaysCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '66').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '88').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '222').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvErrorMsgSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'errSubj2').to.be.true;
    //     });
    // });
    //
    // // Add a Recipe with CICS Interface & RV Connection, then add a Recipe with the same name, then discard the overwrite operation.
    // //
    // it('Add a Recipe with CICS Interface & RV Connection to overwrite an existing Recipe, then discard the overwrite operation', function () {
    //     Page.delRecYes("RecipeCR0008").then(function () {
    //         Page.delCvrYes("ConversionI0113");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionI0114");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0113");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0114");
    //     }).then(function () {
    //         Page.delMsgYes("MessageE0008");
    //     }).then(function () {
    //         Page.delBufYes("BufferE0008");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0013");
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0014");
    //     }).then(function () {
    //         definePage.delEndpointRvYes("EndpointRVD0008");
    //     }).then(function () {
    //         definePage.addEndpointRv("EndpointRVD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0013", "", false, "EndpointRVD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0014", "", false, "EndpointRVD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0013");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0014");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0013");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0014");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0013");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0014");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0013");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0014");
    //     }).then(function () {
    //         definePage.delEndpointCicsYes("EndpointCICSD0008");
    //     }).then(function () {
    //         definePage.addEndpointCics("EndpointCICSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0013", "", undefined, "", "EndpointCICSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0014", "", undefined, "", "EndpointCICSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0013", "", undefined, "", "EndpointCICSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0014", "", undefined, "", "EndpointCICSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0013", "", undefined, "", "EndpointCICSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0014", "", undefined, "", "EndpointCICSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0013", "", undefined, "", "EndpointCICSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0014", "", undefined, "", "EndpointCICSD0008");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageE0008", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferE0008", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0113", "MessageE0008", "BufferE0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0114", "MessageE0008", "BufferE0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0113", "MessageE0008", "BufferE0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0114", "MessageE0008", "BufferE0008", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0008", "AbCdEfG", "IntfCICSE0013", true, "IntfCICSF0013", true, "IntfCICSG0013", true, "IntfCICSH0013", true, "ConnRVB0013", true, "111", "33", "1", "ConversionI0113", true, "ConversionO0113", true, "PROGRAM1", false, "None", "Container", "MRT1", false, "RRT1", "RRS1", "CHANNEL1", "CONTAINER1", "Program", "Single", false, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5", "lsnSubj1", "replytoSubj1", false, "55", "77", "111", "errSubj1");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0008", "HiJkLmN", "IntfCICSE0014", true, "IntfCICSF0014", true, "IntfCICSG0014", true, "IntfCICSH0014", true, "ConnRVB0014", true, "222", "44", "2", "ConversionI0114", true, "ConversionO0114", true, "PROGRAMA", false, "None", "Storage", "MRT2", true, "RRT2", "RRS2", "CHANNEL2", "CONTAINER2", "Transaction", "Message", true, "PROGRAMB", "PROGRAMC", "PROGRAMD", "PROGRAME", "lsnSubj2", "replytoSubj2", true, "66", "88", "222", "errSubj2");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalPage.eleNoButton);
    //     }).then(function () {
    //         globalPage.eleNoButton.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecLeftmenu);
    //     }).then(function () {
    //         Page.eleRecLeftmenu.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalPage.eleYesButton);
    //     }).then(function () {
    //         globalPage.eleYesButton.click();
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleSearchInput);
    //     }).then(function () {
    //         Page.eleSearchInput.clear().sendKeys("RecipeCR0008");
    //     }).then(function () {
    //         Page.eleSearchIcon.click();
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
    //     }).then(function () {
    //         Page.eleEntityNameSearched.click();
    //     }).then(function () {
    //         Page.eleDetailSlideBar.click();
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleRecNameInput);
    //     }).then(function () {
    //         return Page.eleRecNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RecipeCR0008').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'AbCdEfG').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntfInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSE0013').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf2Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSF0013').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf3Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSG0013').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf4Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfCICSH0013').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConnRVB0013').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '111').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '33').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecInputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionI0113').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'ConversionO0113').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecResourceNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecSsidFilterCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecMethodReplyDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'None').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMethodInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Container').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'MRT1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRETranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RRT1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRESysNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'RRS1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'CHANNEL1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'CONTAINER1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Program').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerCreationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Single').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource2Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM2').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource3Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM3').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource4Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM4').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource5Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'PROGRAM5').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvListentoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'lsnSubj1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'replytoSubj1').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoAlwaysCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '55').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '77').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '111').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvErrorMsgSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'errSubj1').to.be.true;
    //     });
    // });
    //
    // // Add a Recipe with CICS Interface & RV Connection, delete it, then confirm the delete operation.
    // //
    // it('Add a Recipe with CICS Interface & RV Connection, delete it, then confirm the delete operation', function () {
    //     Page.delRecYes("RecipeCR0009").then(function () {
    //         Page.delCvrYes("ConversionI0115");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0115");
    //     }).then(function () {
    //         Page.delMsgYes("MessageE0009");
    //     }).then(function () {
    //         Page.delBufYes("BufferE0009");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0015");
    //     }).then(function () {
    //         definePage.delEndpointRvYes("EndpointRVD0009");
    //     }).then(function () {
    //         definePage.addEndpointRv("EndpointRVD0009");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0015", "", false, "EndpointRVD0009");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0015");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0015");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0015");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0015");
    //     }).then(function () {
    //         definePage.delEndpointCicsYes("EndpointCICSD0009");
    //     }).then(function () {
    //         definePage.addEndpointCics("EndpointCICSD0009");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0015", "", undefined, "", "EndpointCICSD0009");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0015", "", undefined, "", "EndpointCICSD0009");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0015", "", undefined, "", "EndpointCICSD0009");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0015", "", undefined, "", "EndpointCICSD0009");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageE0009", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferE0009", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0115", "MessageE0009", "BufferE0009", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0115", "MessageE0009", "BufferE0009", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0009", "", "IntfCICSE0015", true, "IntfCICSF0015", true, "IntfCICSG0015", true, "IntfCICSH0015", true, "ConnRVB0015", true, "0", "0", "0", "ConversionI0115", true, "ConversionO0115", true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.delRecYes("RecipeCR0009");
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleSearchInput);
    //     }).then(function () {
    //         Page.eleSearchInput.clear().sendKeys("RecipeCR0009");
    //     }).then(function () {
    //         Page.eleSearchIcon.click();
    //     }).then(function () {
    //         return Page.eleEntityNameSearched.isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     });
    // });
    //
    // // Add a Recipe with CICS Interface & RV Connection, delete it, then discard the delete operation.
    // //
    // it('Add a Recipe with CICS Interface & RV Connection, delete it, then discard the delete operation', function () {
    //     Page.delRecYes("RecipeCR0010").then(function () {
    //         Page.delCvrYes("ConversionI0116");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0116");
    //     }).then(function () {
    //         Page.delMsgYes("MessageE0010");
    //     }).then(function () {
    //         Page.delBufYes("BufferE0010");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0016");
    //     }).then(function () {
    //         definePage.delEndpointRvYes("EndpointRVD0010");
    //     }).then(function () {
    //         definePage.addEndpointRv("EndpointRVD0010");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0016", "", false, "EndpointRVD0010");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0016");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSF0016");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSG0016");
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSH0016");
    //     }).then(function () {
    //         definePage.delEndpointCicsYes("EndpointCICSD0010");
    //     }).then(function () {
    //         definePage.addEndpointCics("EndpointCICSD0010");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0016", "", undefined, "", "EndpointCICSD0010");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSF0016", "", undefined, "", "EndpointCICSD0010");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSG0016", "", undefined, "", "EndpointCICSD0010");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSH0016", "", undefined, "", "EndpointCICSD0010");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageE0010", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferE0010", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0116", "MessageE0010", "BufferE0010", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0116", "MessageE0010", "BufferE0010", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0010", "", "IntfCICSE0016", true, "IntfCICSF0016", true, "IntfCICSG0016", true, "IntfCICSH0016", true, "ConnRVB0016", true, "0", "0", "0", "ConversionI0116", true, "ConversionO0116", true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.delRecNo("RecipeCR0010");
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleSearchInput);
    //     }).then(function () {
    //         Page.eleSearchInput.clear().sendKeys("RecipeCR0010");
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
    //     Page.delRecYes("RecipeCR0011").then(function () {
    //         Page.delCvrYes("ConversionI0117");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0117");
    //     }).then(function () {
    //         Page.delMsgYes("MessageE0011");
    //     }).then(function () {
    //         Page.delBufYes("BufferE0011");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0017");
    //     }).then(function () {
    //         definePage.delEndpointRvYes("EndpointRVD0011");
    //     }).then(function () {
    //         definePage.addEndpointRv("EndpointRVD0011");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0017", "", false, "EndpointRVD0011");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0017");
    //     }).then(function () {
    //         definePage.delEndpointCicsYes("EndpointCICSD0011");
    //     }).then(function () {
    //         definePage.addEndpointCics("EndpointCICSD0011");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0017", "", undefined, "", "EndpointCICSD0011");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageE0011", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferE0011", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0117", "MessageE0011", "BufferE0011", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0117", "MessageE0011", "BufferE0011", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0011", "", "IntfCICSE0017", true, "", false, "", false, "", false, "ConnRVB0017", true, "0", "0", "0", "ConversionI0117", true, "ConversionO0117", true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
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
    //         return Page.eleTableHeader5.isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleAuditButton);
    //     }).then(function () {
    //         Page.eleAuditButton.click();
    //     }).then(function () {
    //         browser.sleep(500);
    //     }).then(function () {
    //         return Page.eleTableHeader5.getText();
    //     }).then(function (message) {
    //         expect(message === 'Modified On').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleAuditButton);
    //     }).then(function () {
    //         Page.eleAuditButton.click();
    //     }).then(function () {
    //         browser.sleep(500);
    //     }).then(function () {
    //         return Page.eleTableHeader5.isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     });
    // });
    //
    // //Test Recipe Details panel fields default value.
    // //
    // it('Test Recipe Details panel fields default value', function () {
    //     globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecLeftmenu);
    //     }).then(function () {
    //         Page.eleRecLeftmenu.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleAddButton);
    //     }).then(function () {
    //         Page.eleAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecNameInput);
    //     }).then(function () {
    //         return Page.eleRecCicsDetailsExtension.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleRecIntfExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecCicsDetailsExtension);
    //     }).then(function () {
    //         return Page.eleRecCicsMethodInvocationDropdown.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleRecCicsDetailsExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecCicsMethodInvocationDropdown);
    //     }).then(function () {
    //         return Page.eleRecRvDetailsExtension.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleRecConnectionExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecRvDetailsExtension);
    //     }).then(function () {
    //         return Page.eleRecRvListentoSubjInput.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleRecRvDetailsExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecRvListentoSubjInput);
    //     }).then(function () {
    //         return Page.eleRecNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntfInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf2Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf3Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntf4Input.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecConnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorNumSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecDisableOnErrorPercentSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecTrclvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecInputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecOutputConversionInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecResourceNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecSsidFilterCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecMethodReplyDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Message').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMethodInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'DPL').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMirrorTranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRETranIdInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsRRESysNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnChannelNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerInvocationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Program').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnContainerCreationDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Single').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource2Input.isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource3Input.isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource4Input.isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     }).then(function () {
    //         return Page.eleRecCicsMultiExecResource5Input.isPresent();
    //     }).then(function (result) {
    //         expect(result).to.be.false;
    //     }).then(function () {
    //         return Page.eleRecRvListentoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvReplytoAlwaysCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === 'true').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '0').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvErrorMsgSubjInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === '').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleCancelButton);
    //     }).then(function () {
    //         Page.eleCancelButton.click();
    //     });
    // });
    //
    // // Test Recipe Details panel mandatory fields.
    // //
    // it('Test Recipe Details panel mandatory fields', function () {
    //     globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
    //         globalCommons.waitForClickable(Page.eleRecLeftmenu);
    //     }).then(function () {
    //         Page.eleRecLeftmenu.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleAddButton);
    //     }).then(function () {
    //         Page.eleAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecNameInput);
    //     }).then(function () {
    //         return Page.eleRecCicsDetailsExtension.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleRecIntfExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecCicsDetailsExtension);
    //     }).then(function () {
    //         return Page.eleRecCicsMethodInvocationDropdown.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleRecCicsDetailsExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecCicsMethodInvocationDropdown);
    //     }).then(function () {
    //         return Page.eleRecRvDetailsExtension.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleRecConnectionExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecRvDetailsExtension);
    //     }).then(function () {
    //         return Page.eleRecRvListentoSubjInput.isPresent();
    //     }).then(function (result) {
    //         if (result = false) {
    //             Page.eleRecRvDetailsExtension.click();
    //         }
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleRecRvListentoSubjInput);
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There are errors on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecIntfValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'A value is required').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecConnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'A value is required').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveInfoClose);
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleRecIntfInput.clear().sendKeys("IntfCICSE0017");
    //     }).then(function () {
    //         Page.eleRecConnInput.clear().sendKeys("ConnRVB0017");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSaveButton);
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'There are errors on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecNameValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'A non-empty value is required').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecRvListentoSubjValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'A non-empty value is required').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleCancelButton);
    //     }).then(function () {
    //         Page.eleCancelButton.click();
    //     }).then(function () {
    //         globalPage.isWarningYes();
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Name'
    // //
    // it('Test Recipe -> Name', function () {
    //     Page.delRecYes("RecipeCR0012_@#$_2223333333333444444444").then(function () {
    //         Page.delRecYes("RecipeCR0013_@#$_2223333333333444444444");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionI0118");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0118");
    //     }).then(function () {
    //         Page.delMsgYes("MessageE0012");
    //     }).then(function () {
    //         Page.delBufYes("BufferE0012");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0018");
    //     }).then(function () {
    //         definePage.delEndpointRvYes("EndpointRVD0012");
    //     }).then(function () {
    //         definePage.addEndpointRv("EndpointRVD0012");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0018", "", false, "EndpointRVD0012");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0018");
    //     }).then(function () {
    //         definePage.delEndpointCicsYes("EndpointCICSD0012");
    //     }).then(function () {
    //         definePage.addEndpointCics("EndpointCICSD0012");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0018", "", undefined, "", "EndpointCICSD0012");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageE0012", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferE0012", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0118", "MessageE0012", "BufferE0012", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0118", "MessageE0012", "BufferE0012", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0012_@#$_2223333333333444444444", "", "IntfCICSE0018", true, "", false, "", false, "", false, "ConnRVB0018", true, "0", "0", "0", "ConversionI0118", true, "ConversionO0118", true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecNameInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'RecipeCR0012_@#$_2223333333333444444444').to.be.true;
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0013_@#$_22233333333334444444444", "", "IntfCICSE0018", true, "", false, "", false, "", false, "ConnRVB0018", true, "0", "0", "0", "ConversionI0118", true, "ConversionO0118", true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleRecNameInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'RecipeCR0013_@#$_2223333333333444444444').to.be.true;
    //     });
    // });
    //
    // // Test field 'Recipe Details panel' -> 'Description'
    // //
    // it('Test Recipe -> Description', function () {
    //     Page.delRecYes("RecipeCR0014").then(function () {
    //         Page.delRecYes("RecipeCR0015");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionI0119");
    //     }).then(function () {
    //         Page.delCvrYes("ConversionO0119");
    //     }).then(function () {
    //         Page.delMsgYes("MessageE0013");
    //     }).then(function () {
    //         Page.delBufYes("BufferE0013");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
    //     }).then(function () {
    //         globalNaviPage.eleDefineMenu.click();
    //     }).then(function () {
    //         definePage.delConnRvYes("ConnRVB0019");
    //     }).then(function () {
    //         definePage.delEndpointRvYes("EndpointRVD0013");
    //     }).then(function () {
    //         definePage.addEndpointRv("EndpointRVD0013");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addConnRv("ConnRVB0019", "", false, "EndpointRVD0013");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.delIntfCicsYes("IntfCICSE0019");
    //     }).then(function () {
    //         definePage.delEndpointCicsYes("EndpointCICSD0013");
    //     }).then(function () {
    //         definePage.addEndpointCics("EndpointCICSD0013");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         definePage.addIntfCics("IntfCICSE0019", "", undefined, "", "EndpointCICSD0013");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(definePage.eleSaveInfo);
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
    //     }).then(function () {
    //         globalNaviPage.eleConfigureMenu.click();
    //     }).then(function () {
    //         Page.addMsg("MessageE0013", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addBuf("BufferE0013", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionI0119", "MessageE0013", "BufferE0013", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addCvr("ConversionO0119", "MessageE0013", "BufferE0013", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addRecWithCicsRv("RecipeCR0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", "IntfCICSE0019", true, "", false, "", false, "", false, "ConnRVB0019", true, "0", "0", "0", "ConversionI0119", true, "ConversionO0119", true);
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
    //         Page.addRecWithCicsRv("RecipeCR0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111", "IntfCICSE0019", true, "", false, "", false, "", false, "ConnRVB0019", true, "0", "0", "0", "ConversionI0119", true, "ConversionO0119", true);
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
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     });
    // });

    // Test field 'Recipe Details panel' -> 'Interface Name'
    //
    it('Test Recipe -> Interface Name', function () {
        Page.delRecYes("RecipeCR0016").then(function () {
            Page.delCvrYes("ConversionI0120");
        }).then(function () {
            Page.delCvrYes("ConversionO0120");
        }).then(function () {
            Page.delMsgYes("MessageE0014");
        }).then(function () {
            Page.delBufYes("BufferE0014");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0020");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0014");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0020", "", false, "EndpointRVD0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0020_@#$_223333333333444444444");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0014");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0020_@#$_223333333333444444444", "", undefined, "", "EndpointCICSD0014");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0014", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0014", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0120", "MessageE0014", "BufferE0014", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0120", "MessageE0014", "BufferE0014", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0016", "", "IntfCICSE0020_@#$_223333333333444444444", true, "", false, "", false, "", false, "ConnRVB0020", true, "0", "0", "0", "ConversionI0120", true, "ConversionO0120", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntfInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSE0020_@#$_223333333333444444444').to.be.true;
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
        Page.delRecYes("RecipeCR0017").then(function () {
            Page.delCvrYes("ConversionI0121");
        }).then(function () {
            Page.delCvrYes("ConversionO0121");
        }).then(function () {
            Page.delMsgYes("MessageE0015");
        }).then(function () {
            Page.delBufYes("BufferE0015");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0021");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0015");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0021", "", false, "EndpointRVD0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0021");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSF0017_@#$_223333333333444444444");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0015");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0021", "", undefined, "", "EndpointCICSD0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSF0017_@#$_223333333333444444444", "", undefined, "", "EndpointCICSD0015");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0015", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0015", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0121", "MessageE0015", "BufferE0015", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0121", "MessageE0015", "BufferE0015", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0017", "", "IntfCICSE0021", true, "IntfCICSE0021", true, "", false, "", false, "ConnRVB0021", true, "0", "0", "0", "ConversionI0121", true, "ConversionO0121", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntf2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSE0021').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf2Input.clear().sendKeys("IntfCICSF0017_@#$_223333333333444444444");
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
            expect(message === 'IntfCICSF0017_@#$_223333333333444444444').to.be.true;
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
        Page.delRecYes("RecipeCR0018").then(function () {
            Page.delCvrYes("ConversionI0122");
        }).then(function () {
            Page.delCvrYes("ConversionO0122");
        }).then(function () {
            Page.delMsgYes("MessageE0016");
        }).then(function () {
            Page.delBufYes("BufferE0016");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0022");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0016");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0022", "", false, "EndpointRVD0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0022");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSF0018");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSG0017_@#$_223333333333444444444");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0016");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0022", "", undefined, "", "EndpointCICSD0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSF0018", "", undefined, "", "EndpointCICSD0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSG0017_@#$_223333333333444444444", "", undefined, "", "EndpointCICSD0016");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0016", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0016", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0122", "MessageE0016", "BufferE0016", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0122", "MessageE0016", "BufferE0016", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0018", "", "IntfCICSE0022", true, "IntfCICSF0018", true, "IntfCICSE0022", true, "", false, "ConnRVB0022", true, "0", "0", "0", "ConversionI0122", true, "ConversionO0122", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntf3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSE0022').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf3Input.clear().sendKeys("IntfCICSF0018");
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
            expect(message === 'IntfCICSF0018').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf3Input.clear().sendKeys("IntfCICSG0017_@#$_223333333333444444444");
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
            expect(message === 'IntfCICSG0017_@#$_223333333333444444444').to.be.true;
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
        Page.delRecYes("RecipeCR0019").then(function () {
            Page.delCvrYes("ConversionI0123");
        }).then(function () {
            Page.delCvrYes("ConversionO0123");
        }).then(function () {
            Page.delMsgYes("MessageE0017");
        }).then(function () {
            Page.delBufYes("BufferE0017");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0023");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0017");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0023", "", false, "EndpointRVD0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0023");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSF0019");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSG0018");
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSH0017_@#$_223333333333444444444");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0017");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0023", "", undefined, "", "EndpointCICSD0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSF0019", "", undefined, "", "EndpointCICSD0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSG0018", "", undefined, "", "EndpointCICSD0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSH0017_@#$_223333333333444444444", "", undefined, "", "EndpointCICSD0017");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0017", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0017", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0123", "MessageE0017", "BufferE0017", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0123", "MessageE0017", "BufferE0017", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0019", "", "IntfCICSE0023", true, "IntfCICSF0019", true, "IntfCICSG0018", true, "IntfCICSE0023", true, "ConnRVB0023", true, "0", "0", "0", "ConversionI0123", true, "ConversionO0123", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecIntf4Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICSE0023').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf4Input.clear().sendKeys("IntfCICSF0019");
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
            expect(message === 'IntfCICSF0019').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf4Input.clear().sendKeys("IntfCICSG0018");
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
            expect(message === 'IntfCICSG0018').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecIntf4Input.clear().sendKeys("IntfCICSH0017_@#$_223333333333444444444");
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
            expect(message === 'IntfCICSH0017_@#$_223333333333444444444').to.be.true;
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
        Page.delRecYes("RecipeCR0020").then(function () {
            Page.delCvrYes("ConversionI0124");
        }).then(function () {
            Page.delCvrYes("ConversionO0124");
        }).then(function () {
            Page.delMsgYes("MessageE0018");
        }).then(function () {
            Page.delBufYes("BufferE0018");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0024_@#$_22223333333333444444444");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0018");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0024_@#$_22223333333333444444444", "", false, "EndpointRVD0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0024");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0018");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0024", "", undefined, "", "EndpointCICSD0018");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0018", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0018", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0124", "MessageE0018", "BufferE0018", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0124", "MessageE0018", "BufferE0018", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0020", "", "IntfCICSE0024", true, "", false, "", false, "", false, "ConnRVB0024_@#$_22223333333333444444444", true, "0", "0", "0", "ConversionI0124", true, "ConversionO0124", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecConnInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConnRVB0024_@#$_22223333333333444444444').to.be.true;
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
        Page.delRecYes("RecipeCR0021").then(function () {
            Page.delCvrYes("ConversionI0125");
        }).then(function () {
            Page.delCvrYes("ConversionO0125");
        }).then(function () {
            Page.delMsgYes("MessageE0019");
        }).then(function () {
            Page.delBufYes("BufferE0019");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0025");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0019");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0025", "", false, "EndpointRVD0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0025");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0019");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0025", "", undefined, "", "EndpointCICSD0019");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0019", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0019", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0125", "MessageE0019", "BufferE0019", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0125", "MessageE0019", "BufferE0019", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0021", "", "IntfCICSE0025", true, "", false, "", false, "", false, "ConnRVB0025", true, "0", "0", "0", "ConversionI0125", true, "ConversionO0125", true);
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
        Page.delRecYes("RecipeCR0022").then(function () {
            Page.delCvrYes("ConversionI0126");
        }).then(function () {
            Page.delCvrYes("ConversionO0126");
        }).then(function () {
            Page.delMsgYes("MessageE0020");
        }).then(function () {
            Page.delBufYes("BufferE0020");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0026");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0020");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0026", "", false, "EndpointRVD0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0026");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0020");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0026", "", undefined, "", "EndpointCICSD0020");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0020", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0020", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0126", "MessageE0020", "BufferE0020", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0126", "MessageE0020", "BufferE0020", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0022", "", "IntfCICSE0026", true, "", false, "", false, "", false, "ConnRVB0026", true, "0", "0", "0", "ConversionI0126", true, "ConversionO0126", true);
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
        Page.delRecYes("RecipeCR0023").then(function () {
            Page.delCvrYes("ConversionI0127");
        }).then(function () {
            Page.delCvrYes("ConversionO0127");
        }).then(function () {
            Page.delMsgYes("MessageE0021");
        }).then(function () {
            Page.delBufYes("BufferE0021");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0027");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0021");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0027", "", false, "EndpointRVD0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0027");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0021");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0027", "", undefined, "", "EndpointCICSD0021");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0021", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0021", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0127", "MessageE0021", "BufferE0021", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0127", "MessageE0021", "BufferE0021", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0023", "", "IntfCICSE0027", true, "", false, "", false, "", false, "ConnRVB0027", true, "0", "0", "0", "ConversionI0127", true, "ConversionO0127", true);
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
        Page.delRecYes("RecipeCR0024").then(function () {
            Page.delCvrYes("ConversionI0128_@#$_3333333333444444444");
        }).then(function () {
            Page.delCvrYes("ConversionO0128");
        }).then(function () {
            Page.delMsgYes("MessageE0022");
        }).then(function () {
            Page.delBufYes("BufferE0022");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0028");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0022");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0028", "", false, "EndpointRVD0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0028");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0022");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0028", "", undefined, "", "EndpointCICSD0022");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0022", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0022", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0128_@#$_3333333333444444444", "MessageE0022", "BufferE0022", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0128", "MessageE0022", "BufferE0022", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0024", "", "IntfCICSE0028", true, "", false, "", false, "", false, "ConnRVB0028", true, "0", "0", "0", "INVALID", false, "ConversionO0128", true);
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
            Page.eleRecInputConversionInput.clear().sendKeys("ConversionI0128_@#$_3333333333444444444");
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
            expect(message === 'ConversionI0128_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Output Conversion'
    //
    it('Test Recipe -> Output Conversion', function () {
        Page.delRecYes("RecipeCR0025").then(function () {
            Page.delCvrYes("ConversionI0129");
        }).then(function () {
            Page.delCvrYes("ConversionO0129_@#$_3333333333444444444");
        }).then(function () {
            Page.delMsgYes("MessageE0023");
        }).then(function () {
            Page.delBufYes("BufferE0023");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0029");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0023");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0029", "", false, "EndpointRVD0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0029");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0023");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0029", "", undefined, "", "EndpointCICSD0023");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0023", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0023", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0129", "MessageE0023", "BufferE0023", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0129_@#$_3333333333444444444", "MessageE0023", "BufferE0023", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0025", "", "IntfCICSE0029", true, "", false, "", false, "", false, "ConnRVB0029", true, "0", "0", "0", "ConversionI0129", true, "invalid", false);
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
        }).then(function () {
            Page.eleRecOutputConversionInput.clear().sendKeys("ConversionI0129");
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
            expect(message === 'ConversionI0129').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecOutputConversionInput.clear().sendKeys("ConversionO0129_@#$_3333333333444444444");
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
            expect(message === 'ConversionO0129_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'Resource Name'
    //
    it('Test Recipe -> Resource Name', function () {
        Page.delRecYes("RecipeCR0026").then(function () {
            Page.delCvrYes("ConversionI0130");
        }).then(function () {
            Page.delCvrYes("ConversionO0130");
        }).then(function () {
            Page.delMsgYes("MessageE0024");
        }).then(function () {
            Page.delBufYes("BufferE0024");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0030");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0024");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0030", "", false, "EndpointRVD0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0030");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0024");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0030", "", undefined, "", "EndpointCICSD0024");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0024", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0024", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0130", "MessageE0024", "BufferE0024", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0130", "MessageE0024", "BufferE0024", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0026", "", "IntfCICSE0030", true, "", false, "", false, "", false, "ConnRVB0030", true, "0", "0", "0", "ConversionI0130", true, "ConversionO0130", true);
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
        Page.delRecYes("RecipeCR0027").then(function () {
            Page.delCvrYes("ConversionI0131");
        }).then(function () {
            Page.delCvrYes("ConversionO0131");
        }).then(function () {
            Page.delMsgYes("MessageE0025");
        }).then(function () {
            Page.delBufYes("BufferE0025");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0031");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0025");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0031", "", false, "EndpointRVD0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0031");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0025");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0031", "", undefined, "", "EndpointCICSD0025");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0025", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0025", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0131", "MessageE0025", "BufferE0025", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0131", "MessageE0025", "BufferE0025", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0027", "", "IntfCICSE0031", true, "", false, "", false, "", false, "ConnRVB0031", true, "0", "0", "0", "ConversionI0131", true, "ConversionO0131", true);
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
        Page.delRecYes("RecipeCR0028").then(function () {
            Page.delRecYes("RecipeCR0029");
        }).then(function () {
            Page.delRecYes("RecipeCR0030");
        }).then(function () {
            Page.delRecYes("RecipeCR0031");
        }).then(function () {
            Page.delCvrYes("ConversionI0132");
        }).then(function () {
            Page.delCvrYes("ConversionO0132");
        }).then(function () {
            Page.delMsgYes("MessageE0026");
        }).then(function () {
            Page.delBufYes("BufferE0026");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0032");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0026");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0032", "", false, "EndpointRVD0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0032");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0026");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0032", "", undefined, "", "EndpointCICSD0026");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0026", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0026", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0132", "MessageE0026", "BufferE0026", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0132", "MessageE0026", "BufferE0026", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0028", "", "IntfCICSE0032", true, "", false, "", false, "", false, "ConnRVB0032", true, "0", "0", "0", "ConversionI0132", true, "ConversionO0132", true, undefined, undefined, "Message");
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
            Page.addRecWithCicsRv("RecipeCR0029", "", "IntfCICSE0032", true, "", false, "", false, "", false, "ConnRVB0032", true, "0", "0", "0", "ConversionI0132", true, "ConversionO0132", true, undefined, undefined, "None");
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
            Page.addRecWithCicsRv("RecipeCR0030", "", "IntfCICSE0032", true, "", false, "", false, "", false, "ConnRVB0032", true, "0", "0", "0", "ConversionI0132", true, "ConversionO0132", true, undefined, undefined, "Status");
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
            Page.addRecWithCicsRv("RecipeCR0031", "", "IntfCICSE0032", true, "", false, "", false, "", false, "ConnRVB0032", true, "0", "0", "0", "ConversionI0132", true, "ConversionO0132", true, undefined, undefined, "Status and Message");
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
        Page.delRecYes("RecipeCR0032").then(function () {
            Page.delRecYes("RecipeCR0033");
        }).then(function () {
            Page.delRecYes("RecipeCR0034");
        }).then(function () {
            Page.delRecYes("RecipeCR0035");
        }).then(function () {
            Page.delRecYes("RecipeCR0036");
        }).then(function () {
            Page.delRecYes("RecipeCR0037");
        }).then(function () {
            Page.delRecYes("RecipeCR0038");
        }).then(function () {
            Page.delRecYes("RecipeCR0039");
        }).then(function () {
            Page.delRecYes("RecipeCR0040");
        }).then(function () {
            Page.delCvrYes("ConversionI0133");
        }).then(function () {
            Page.delCvrYes("ConversionO0133");
        }).then(function () {
            Page.delMsgYes("MessageE0027");
        }).then(function () {
            Page.delBufYes("BufferE0027");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0033");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0027");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0033", "", false, "EndpointRVD0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0033");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0027");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0033", "", undefined, "", "EndpointCICSD0027");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0027", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0027", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0133", "MessageE0027", "BufferE0027", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0133", "MessageE0027", "BufferE0027", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0032", "", "IntfCICSE0033", true, "", false, "", false, "", false, "ConnRVB0033", true, "0", "0", "0", "ConversionI0133", true, "ConversionO0133", true, undefined, undefined, undefined, "DPL");
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
            Page.addRecWithCicsRv("RecipeCR0033", "", "IntfCICSE0033", true, "", false, "", false, "", false, "ConnRVB0033", true, "0", "0", "0", "ConversionI0133", true, "ConversionO0133", true, undefined, undefined, undefined, "PGM");
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
            Page.addRecWithCicsRv("RecipeCR0034", "", "IntfCICSE0033", true, "", false, "", false, "", false, "ConnRVB0033", true, "0", "0", "0", "ConversionI0133", true, "ConversionO0133", true, undefined, undefined, undefined, "Start Task");
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
            Page.addRecWithCicsRv("RecipeCR0035", "", "IntfCICSE0033", true, "", false, "", false, "", false, "ConnRVB0033", true, "0", "0", "0", "ConversionI0133", true, "ConversionO0133", true, undefined, undefined, undefined, "TDQ Write");
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
            Page.addRecWithCicsRv("RecipeCR0036", "", "IntfCICSE0033", true, "", false, "", false, "", false, "ConnRVB0033", true, "0", "0", "0", "ConversionI0133", true, "ConversionO0133", true, undefined, undefined, undefined, "TSQ Write");
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
            Page.addRecWithCicsRv("RecipeCR0037", "", "IntfCICSE0033", true, "", false, "", false, "", false, "ConnRVB0033", true, "0", "0", "0", "ConversionI0133", true, "ConversionO0133", true, undefined, undefined, undefined, "DPL MRO");
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
            Page.addRecWithCicsRv("RecipeCR0038", "", "IntfCICSE0033", true, "", false, "", false, "", false, "ConnRVB0033", true, "0", "0", "0", "ConversionI0133", true, "ConversionO0133", true, undefined, undefined, undefined, "Container");
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
            Page.addRecWithCicsRv("RecipeCR0039", "", "IntfCICSE0033", true, "", false, "", false, "", false, "ConnRVB0033", true, "0", "0", "0", "ConversionI0133", true, "ConversionO0133", true, undefined, undefined, undefined, "Storage");
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
            Page.addRecWithCicsRv("RecipeCR0040", "", "IntfCICSE0033", true, "", false, "", false, "", false, "ConnRVB0033", true, "0", "0", "0", "ConversionI0133", true, "ConversionO0133", true, undefined, undefined, undefined, "DPL TSQ");
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
        Page.delRecYes("RecipeCR0041").then(function () {
            Page.delCvrYes("ConversionI0134");
        }).then(function () {
            Page.delCvrYes("ConversionO0134");
        }).then(function () {
            Page.delMsgYes("MessageE0028");
        }).then(function () {
            Page.delBufYes("BufferE0028");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0034");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0028");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0028");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0034", "", false, "EndpointRVD0028");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0034");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0028");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0028");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0034", "", undefined, "", "EndpointCICSD0028");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0028", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0028", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0134", "MessageE0028", "BufferE0028", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0134", "MessageE0028", "BufferE0028", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0041", "", "IntfCICSE0034", true, "", false, "", false, "", false, "ConnRVB0034", true, "0", "0", "0", "ConversionI0134", true, "ConversionO0134", true);
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
        Page.delRecYes("RecipeCR0042").then(function () {
            Page.delCvrYes("ConversionI0135");
        }).then(function () {
            Page.delCvrYes("ConversionO0135");
        }).then(function () {
            Page.delMsgYes("MessageE0029");
        }).then(function () {
            Page.delBufYes("BufferE0029");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0035");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0029");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0029");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0035", "", false, "EndpointRVD0029");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0035");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0029");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0029");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0035", "", undefined, "", "EndpointCICSD0029");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0029", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0029", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0135", "MessageE0029", "BufferE0029", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0135", "MessageE0029", "BufferE0029", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0042", "", "IntfCICSE0035", true, "", false, "", false, "", false, "ConnRVB0035", true, "0", "0", "0", "ConversionI0135", true, "ConversionO0135", true);
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
        Page.delRecYes("RecipeCR0043").then(function () {
            Page.delCvrYes("ConversionI0136");
        }).then(function () {
            Page.delCvrYes("ConversionO0136");
        }).then(function () {
            Page.delMsgYes("MessageE0030");
        }).then(function () {
            Page.delBufYes("BufferE0030");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0036");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0030");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0030");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0036", "", false, "EndpointRVD0030");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0036");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0030");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0030");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0036", "", undefined, "", "EndpointCICSD0030");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0030", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0030", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0136", "MessageE0030", "BufferE0030", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0136", "MessageE0030", "BufferE0030", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0043", "", "IntfCICSE0036", true, "", false, "", false, "", false, "ConnRVB0036", true, "0", "0", "0", "ConversionI0136", true, "ConversionO0136", true);
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
        Page.delRecYes("RecipeCR0044").then(function () {
            Page.delCvrYes("ConversionI0137");
        }).then(function () {
            Page.delCvrYes("ConversionO0137");
        }).then(function () {
            Page.delMsgYes("MessageE0031");
        }).then(function () {
            Page.delBufYes("BufferE0031");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0037");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0031");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0031");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0037", "", false, "EndpointRVD0031");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0037");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0031");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0031");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0037", "", undefined, "", "EndpointCICSD0031");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0031", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0031", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0137", "MessageE0031", "BufferE0031", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0137", "MessageE0031", "BufferE0031", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0044", "", "IntfCICSE0037", true, "", false, "", false, "", false, "ConnRVB0037", true, "0", "0", "0", "ConversionI0137", true, "ConversionO0137", true);
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
        Page.delRecYes("RecipeCR0045").then(function () {
            Page.delCvrYes("ConversionI0138");
        }).then(function () {
            Page.delCvrYes("ConversionO0138");
        }).then(function () {
            Page.delMsgYes("MessageE0032");
        }).then(function () {
            Page.delBufYes("BufferE0032");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0038");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0032");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0032");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0038", "", false, "EndpointRVD0032");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0038");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0032");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0032");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0038", "", undefined, "", "EndpointCICSD0032");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0032", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0032", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0138", "MessageE0032", "BufferE0032", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0138", "MessageE0032", "BufferE0032", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0045", "", "IntfCICSE0038", true, "", false, "", false, "", false, "ConnRVB0038", true, "0", "0", "0", "ConversionI0138", true, "ConversionO0138", true);
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
        Page.delRecYes("RecipeCR0046").then(function () {
            Page.delCvrYes("ConversionI0139");
        }).then(function () {
            Page.delCvrYes("ConversionO0139");
        }).then(function () {
            Page.delMsgYes("MessageE0033");
        }).then(function () {
            Page.delBufYes("BufferE0033");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0039");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0033");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0033");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0039", "", false, "EndpointRVD0033");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0039");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0033");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0033");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0039", "", undefined, "", "EndpointCICSD0033");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0033", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0033", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0139", "MessageE0033", "BufferE0033", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0139", "MessageE0033", "BufferE0033", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0046", "", "IntfCICSE0039", true, "", false, "", false, "", false, "ConnRVB0039", true, "0", "0", "0", "ConversionI0139", true, "ConversionO0139", true);
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
        Page.delRecYes("RecipeCR0047").then(function () {
            Page.delRecYes("RecipeCR0048");
        }).then(function () {
            Page.delRecYes("RecipeCR0049");
        }).then(function () {
            Page.delRecYes("RecipeCR0050");
        }).then(function () {
            Page.delCvrYes("ConversionI0140");
        }).then(function () {
            Page.delCvrYes("ConversionO0140");
        }).then(function () {
            Page.delMsgYes("MessageE0034");
        }).then(function () {
            Page.delBufYes("BufferE0034");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0040");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0034");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0034");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0040", "", false, "EndpointRVD0034");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0040");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0034");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0034");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0040", "", undefined, "", "EndpointCICSD0034");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0034", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0034", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0140", "MessageE0034", "BufferE0034", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0140", "MessageE0034", "BufferE0034", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0047", "", "IntfCICSE0040", true, "", false, "", false, "", false, "ConnRVB0040", true, "0", "0", "0", "ConversionI0140", true, "ConversionO0140", true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Program", "Single");
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
            Page.addRecWithCicsRv("RecipeCR0048", "", "IntfCICSE0040", true, "", false, "", false, "", false, "ConnRVB0040", true, "0", "0", "0", "ConversionI0140", true, "ConversionO0140", true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Program", "Message");
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
            Page.addRecWithCicsRv("RecipeCR0049", "", "IntfCICSE0040", true, "", false, "", false, "", false, "ConnRVB0040", true, "0", "0", "0", "ConversionI0140", true, "ConversionO0140", true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Transaction", "Single");
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
            Page.addRecWithCicsRv("RecipeCR0050", "", "IntfCICSE0040", true, "", false, "", false, "", false, "ConnRVB0040", true, "0", "0", "0", "ConversionI0140", true, "ConversionO0140", true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "Transaction", "Message");
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
        Page.delRecYes("RecipeCR0051").then(function () {
            Page.delCvrYes("ConversionI0141");
        }).then(function () {
            Page.delCvrYes("ConversionO0141");
        }).then(function () {
            Page.delMsgYes("MessageE0035");
        }).then(function () {
            Page.delBufYes("BufferE0035");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0041");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0035");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0035");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0041", "", false, "EndpointRVD0035");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0041");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0035");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0035");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0041", "", undefined, "", "EndpointCICSD0035");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0035", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0035", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0141", "MessageE0035", "BufferE0035", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0141", "MessageE0035", "BufferE0035", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0051", "", "IntfCICSE0041", true, "", false, "", false, "", false, "ConnRVB0041", true, "0", "0", "0", "ConversionI0141", true, "ConversionO0141", true);
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
        Page.delRecYes("RecipeCR0052").then(function () {
            Page.delRecYes("RecipeCR0053");
        }).then(function () {
            Page.delRecYes("RecipeCR0054");
        }).then(function () {
            Page.delCvrYes("ConversionI0142");
        }).then(function () {
            Page.delCvrYes("ConversionO0142");
        }).then(function () {
            Page.delMsgYes("MessageE0036");
        }).then(function () {
            Page.delBufYes("BufferE0036");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0042");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0036");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0036");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0042", "", false, "EndpointRVD0036");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0042");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0036");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0036");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0042", "", undefined, "", "EndpointCICSD0036");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0036", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0036", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0142", "MessageE0036", "BufferE0036", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0142", "MessageE0036", "BufferE0036", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0052", "", "IntfCICSE0042", true, "", false, "", false, "", false, "ConnRVB0042", true, "0", "0", "0", "ConversionI0142", true, "ConversionO0142", true, "", false, "Message");
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
            Page.addRecWithCicsRv("RecipeCR0053", "", "IntfCICSE0042", true, "", false, "", false, "", false, "ConnRVB0042", true, "0", "0", "0", "ConversionI0142", true, "ConversionO0142", true, "PROGRAM1", false, "None", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "PROGRAM2", "PROGRAM3", "PROGRAM4", "PROGRAM5");
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
            Page.addRecWithCicsRv("RecipeCR0054", "", "IntfCICSE0042", true, "", false, "", false, "", false, "ConnRVB0042", true, "0", "0", "0", "ConversionI0142", true, "ConversionO0142", true, "PROGRAM1", false, "None", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "@#$123AB", "@#$123AB", "@#$123AB", "@#$123AB");
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
            expect(message === 'D').to.be.true;}).then(function () {
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

    // Test field 'Recipe Details panel' -> 'RV Details' -> 'Listen-to Subject, Reply-to Subject, Error Message Subject'
    //
    it('Test Recipe -> RV Details -> Listen-to Subject, Reply-to Subject, Error Message Subject', function () {
        Page.delRecYes("RecipeCR0055").then(function () {
            Page.delCvrYes("ConversionI0143");
        }).then(function () {
            Page.delCvrYes("ConversionO0143");
        }).then(function () {
            Page.delMsgYes("MessageE0037");
        }).then(function () {
            Page.delBufYes("BufferE0037");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0043");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0037");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0037");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0043", "", false, "EndpointRVD0037");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0043");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0037");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0037");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0043", "", undefined, "", "EndpointCICSD0037");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0037", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0037", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0143", "MessageE0037", "BufferE0037", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0143", "MessageE0037", "BufferE0037", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0055", "", "IntfCICSE0043", true, "", false, "", false, "", false, "ConnRVB0043", true, "0", "0", "0", "ConversionI0143", true, "ConversionO0143", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvListentoSubjInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.recipe.listenToSubj").to.be.true;
        }).then(function () {
            return Page.eleRecRvReplytoSubjInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "").to.be.true;
        }).then(function () {
            return Page.eleRecRvErrorMsgSubjInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvListentoSubjInput.clear().sendKeys("tibss.rec.listenToSubj._3D!@2c#$1B%&0a*?-5555555556666666666777");
        }).then(function () {
            Page.eleRecRvReplytoSubjInput.clear().sendKeys("tibss.rec.reply_toSubj._3D!@2c#$1B%&0a*?-5555555556666666666777");
        }).then(function () {
            Page.eleRecRvErrorMsgSubjInput.clear().sendKeys("tibss.rec.errorMsgSubj._3D!@2c#$1B%&0a*?-5555555556666666666777");
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
            return Page.eleRecRvListentoSubjInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.rec.listenToSubj._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleRecRvReplytoSubjInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.rec.reply_toSubj._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleRecRvErrorMsgSubjInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.rec.errorMsgSubj._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvListentoSubjInput.clear().sendKeys("tibss.rec.listenToSubj._3D!@2c#$1B%&0a*?-55555555566666666667777");
        }).then(function () {
            Page.eleRecRvReplytoSubjInput.clear().sendKeys("tibss.rec.reply_toSubj._3D!@2c#$1B%&0a*?-55555555566666666667777");
        }).then(function () {
            Page.eleRecRvErrorMsgSubjInput.clear().sendKeys("tibss.rec.errorMsgSubj._3D!@2c#$1B%&0a*?-55555555566666666667777");
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
            return Page.eleRecRvListentoSubjInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.rec.listenToSubj._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleRecRvReplytoSubjInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.rec.reply_toSubj._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        }).then(function () {
            return Page.eleRecRvErrorMsgSubjInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "tibss.rec.errorMsgSubj._3D!@2c#$1B%&0a*?-5555555556666666666777").to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'RV Details' -> 'Reply-to Always'
    //
    it('Test Recipe -> RV Details -> Reply-to Always', function () {
        Page.delRecYes("RecipeCR0056").then(function () {
            Page.delCvrYes("ConversionI0144");
        }).then(function () {
            Page.delCvrYes("ConversionO0144");
        }).then(function () {
            Page.delMsgYes("MessageE0038");
        }).then(function () {
            Page.delBufYes("BufferE0038");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0044");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0038");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0038");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0044", "", false, "EndpointRVD0038");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0044");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0038");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0038");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0044", "", undefined, "", "EndpointCICSD0038");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0038", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0038", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0144", "MessageE0038", "BufferE0038", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0144", "MessageE0038", "BufferE0038", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0056", "", "IntfCICSE0044", true, "", false, "", false, "", false, "ConnRVB0044", true, "0", "0", "0", "ConversionI0144", true, "ConversionO0144", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvReplytoAlwaysCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRecRvReplytoAlwaysCheck);
        }).then(function () {
            Page.eleRecRvReplytoAlwaysCheck.click();
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
            return Page.eleRecRvReplytoAlwaysCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'RV Details' -> 'Dynamic Subject Length'
    //
    it('Test Recipe -> RV Details -> Dynamic Subject Length', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delRecYes("RecipeCR0057").then(function () {
            Page.delCvrYes("ConversionI0145");
        }).then(function () {
            Page.delCvrYes("ConversionO0145");
        }).then(function () {
            Page.delMsgYes("MessageE0039");
        }).then(function () {
            Page.delBufYes("BufferE0039");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0045");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0039");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0039");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0045", "", false, "EndpointRVD0039");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0045");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0039");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0039");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0045", "", undefined, "", "EndpointCICSD0039");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0039", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0039", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0145", "MessageE0039", "BufferE0039", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0145", "MessageE0039", "BufferE0039", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0057", "", "IntfCICSE0045", true, "", false, "", false, "", false, "ConnRVB0045", true, "0", "0", "0", "ConversionI0145", true, "ConversionO0145", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjLengthSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjLengthSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjLengthSpinner.clear().sendKeys("100");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjLengthSpinner.clear().sendKeys("127");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '127').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjLengthSpinner.clear().sendKeys("128");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '127').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjLengthSpinner.clear().sendKeys("999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjLengthSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '127').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'RV Details' -> 'Dynamic Subject Start'
    //
    it('Test Recipe -> RV Details -> Dynamic Subject Start', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delRecYes("RecipeCR0058").then(function () {
            Page.delCvrYes("ConversionI0146");
        }).then(function () {
            Page.delCvrYes("ConversionO0146");
        }).then(function () {
            Page.delMsgYes("MessageE0040");
        }).then(function () {
            Page.delBufYes("BufferE0040");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0046");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0040");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0040");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0046", "", false, "EndpointRVD0040");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0046");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0040");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0040");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0046", "", undefined, "", "EndpointCICSD0040");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0040", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0040", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0146", "MessageE0040", "BufferE0040", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0146", "MessageE0040", "BufferE0040", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0058", "", "IntfCICSE0046", true, "", false, "", false, "", false, "ConnRVB0046", true, "0", "0", "0", "ConversionI0146", true, "ConversionO0146", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.clear().sendKeys("2222");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.clear().sendKeys("33333");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.clear().sendKeys("444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '444444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.clear().sendKeys("4095872");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095872').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.clear().sendKeys("4095873");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095873').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.clear().sendKeys("4095874");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095873').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvDynamicSubjStartSpinner.clear().sendKeys("9999999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvDynamicSubjStartSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095873').to.be.true;
        });
    });

    // Test field 'Recipe Details panel' -> 'RV Details' -> 'Usage Limit'
    //
    it('Test Recipe -> RV Details -> Usage Limit', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delRecYes("RecipeCR0059").then(function () {
            Page.delCvrYes("ConversionI0147");
        }).then(function () {
            Page.delCvrYes("ConversionO0147");
        }).then(function () {
            Page.delMsgYes("MessageE0041");
        }).then(function () {
            Page.delBufYes("BufferE0041");
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleDefineMenu);
        }).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delConnRvYes("ConnRVB0047");
        }).then(function () {
            definePage.delEndpointRvYes("EndpointRVD0041");
        }).then(function () {
            definePage.addEndpointRv("EndpointRVD0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addConnRv("ConnRVB0047", "", false, "EndpointRVD0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.delIntfCicsYes("IntfCICSE0047");
        }).then(function () {
            definePage.delEndpointCicsYes("EndpointCICSD0041");
        }).then(function () {
            definePage.addEndpointCics("EndpointCICSD0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            definePage.addIntfCics("IntfCICSE0047", "", undefined, "", "EndpointCICSD0041");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleConfigureMenu);
        }).then(function () {
            globalNaviPage.eleConfigureMenu.click();
        }).then(function () {
            Page.addMsg("MessageE0041", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferE0041", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionI0147", "MessageE0041", "BufferE0041", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("ConversionO0147", "MessageE0041", "BufferE0041", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addRecWithCicsRv("RecipeCR0059", "", "IntfCICSE0047", true, "", false, "", false, "", false, "ConnRVB0047", true, "0", "0", "0", "ConversionI0147", true, "ConversionO0147", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvUsageLimitSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvUsageLimitSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvUsageLimitSpinner.clear().sendKeys("333");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvUsageLimitSpinner.clear().sendKeys("998");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '998').to.be.true;}).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvUsageLimitSpinner.clear().sendKeys("999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '999').to.be.true;}).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleRecRvUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleRecRvUsageLimitSpinner.clear().sendKeys("1000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleRecRvUsageLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});