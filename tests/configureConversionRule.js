/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var configurePage = require('../pageObject/configurePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.6.3 Configure Conversion Rule Page', function () {
    var Page = new configurePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleConfigureMenu.click();
    });

    // Add a Conversion Rule successfully.
    //
    it('Add a Conversion Rule successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delCvrYes("Conversion0001");
        }).then(function () {
            Page.delMsgYes("MessageA0001");
        }).then(function () {
            Page.delBufYes("BufferA0001");
        }).then(function () {
            Page.addMsg("MessageA0001", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0001", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0001", "MessageA0001", "BufferA0001", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a Conversion Rule successfully, then replicate it.
    //
    it('Add a Conversion Rule, then replicate it successfully', function () {
        Page.delCvrYes("Conversion0002-copy").then(function () {
            Page.delCvrYes("Conversion0002");
        }).then(function () {
            Page.delMsgYes("MessageA0002");
        }).then(function () {
            Page.delBufYes("BufferA0002");
        }).then(function () {
            Page.addMsg("MessageA0002", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0002", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0002", "MessageA0002", "BufferA0002", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateCvr("Conversion0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Conversion0002-copy').to.be.true;
        });
    });

    // Add a Conversion Rule successfully, then update it.
    //
    it('Add a Conversion Rule, then update it successfully', function () {
        Page.delCvrYes("Conversion0003").then(function () {
            Page.delMsgYes("MessageA0003");
        }).then(function () {
            Page.delMsgYes("MessageA0004");
        }).then(function () {
            Page.delBufYes("BufferA0003");
        }).then(function () {
            Page.delBufYes("BufferA0004");
        }).then(function () {
            Page.addMsg("MessageA0003", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addMsg("MessageA0004", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0003", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0004", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0003", "MessageA0003", "BufferA0003", "1111111", "Map", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateCvr("Conversion0003", "MessageA0004", "BufferA0004", "2222222", "Text", "Buffer");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Conversion0003').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MessageA0003').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BufferA0003').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2222222').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        }).then(function () {
            return Page.eleCvrUseSizeFromDropdown.getText();
        }).then(function (message) {
            expect(message === 'Buffer').to.be.true;
        });
    });

    // Add a Conversion Rule, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Add a Conversion Rule, cancel the changes, then confirm the cancel operation', function () {
        Page.delCvrYes("Conversion0004").then(function () {
            Page.delMsgYes("MessageA0005");
        }).then(function () {
            Page.delMsgYes("MessageA0006");
        }).then(function () {
            Page.delBufYes("BufferA0005");
        }).then(function () {
            Page.delBufYes("BufferA0006");
        }).then(function () {
            Page.addMsg("MessageA0005", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addMsg("MessageA0006", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0005", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0006", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0004", "MessageA0005", "BufferA0005", "1111111", "Map", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelCvrYes("Conversion0004", "MessageA0006", "BufferA0006", "2222222", "Text", "Buffer");
        }).then(function () {
            Page.eleCvrLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Conversion0004");
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
            return Page.eleCvrNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Conversion0004').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MessageA0005').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BufferA0005').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1111111').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Map').to.be.true;
        }).then(function () {
            return Page.eleCvrUseSizeFromDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        });
    });

    // Add a Conversion Rule, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Add a Conversion Rule, cancel the changes, then discard the cancel operation', function () {
        Page.delCvrYes("Conversion0005").then(function () {
            Page.delMsgYes("MessageA0007");
        }).then(function () {
            Page.delMsgYes("MessageA0008");
        }).then(function () {
            Page.delBufYes("BufferA0007");
        }).then(function () {
            Page.delBufYes("BufferA0008");
        }).then(function () {
            Page.addMsg("MessageA0007", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addMsg("MessageA0008", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0007", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0008", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0005", "MessageA0007", "BufferA0007", "1111111", "Map", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelCvrNo("Conversion0005", "MessageA0008", "BufferA0008", "2222222", "Text", "Buffer");
        }).then(function () {
            return Page.eleCvrNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Conversion0005').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MessageA0007').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BufferA0007').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2222222').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        }).then(function () {
            return Page.eleCvrUseSizeFromDropdown.getText();
        }).then(function (message) {
            expect(message === 'Buffer').to.be.true;
        });
    });

    // Add a Conversion Rule, make some changes, then reset it.
    //
    it('Add a Conversion Rule, make some changes, then reset it', function () {
        Page.delCvrYes("Conversion0006").then(function () {
            Page.delMsgYes("MessageA0009");
        }).then(function () {
            Page.delMsgYes("MessageA0010");
        }).then(function () {
            Page.delBufYes("BufferA0009");
        }).then(function () {
            Page.delBufYes("BufferA0010");
        }).then(function () {
            Page.addMsg("MessageA0009", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addMsg("MessageA0010", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0009", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0010", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0006", "MessageA0009", "BufferA0009", "1111111", "Map", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetCvr("Conversion0006", "MessageA0010", "BufferA0010", "2222222", "Text", "Buffer");
        }).then(function () {
            Page.eleCvrLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Conversion0006");
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
            return Page.eleCvrNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Conversion0006').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MessageA0009').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BufferA0009').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1111111').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Map').to.be.true;
        }).then(function () {
            return Page.eleCvrUseSizeFromDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        });
    });

    // Add a Conversion Rule, then add a Conversion Rule with the same name, then confirm the overwrite operation.
    //
    it('Add a Conversion Rule to overwrite an existing Conversion Rule, then confirm the overwrite operation', function () {
        Page.delCvrYes("Conversion0007").then(function () {
            Page.delMsgYes("MessageA0011");
        }).then(function () {
            Page.delMsgYes("MessageA0012");
        }).then(function () {
            Page.delBufYes("BufferA0011");
        }).then(function () {
            Page.delBufYes("BufferA0012");
        }).then(function () {
            Page.addMsg("MessageA0011", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addMsg("MessageA0012", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0011", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0012", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0007", "MessageA0011", "BufferA0011", "1111111", "Map", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addCvr("Conversion0007", "MessageA0012", "BufferA0012", "2222222", "Text", "Buffer", "Y", "msgField0003", "bufField0002", "msgField0002", "bufField0003", "msgField0001", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
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
            return Page.eleCvrNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Conversion0007').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MessageA0012').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BufferA0012').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2222222').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        }).then(function () {
            return Page.eleCvrUseSizeFromDropdown.getText();
        }).then(function (message) {
            expect(message === 'Buffer').to.be.true;
        });
    });

    // Add a Conversion Rule, then add a Conversion Rule with the same name, then discard the overwrite operation.
    //
    it('Add a Conversion Rule to overwrite an existing Conversion Rule, then discard the overwrite operation', function () {
        Page.delCvrYes("Conversion0008").then(function () {
            Page.delMsgYes("MessageA0013");
        }).then(function () {
            Page.delMsgYes("MessageA0014");
        }).then(function () {
            Page.delBufYes("BufferA0013");
        }).then(function () {
            Page.delBufYes("BufferA0014");
        }).then(function () {
            Page.addMsg("MessageA0013", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addMsg("MessageA0014", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0013", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0014", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0008", "MessageA0013", "BufferA0013", "1111111", "Map", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addCvr("Conversion0008", "MessageA0014", "BufferA0014", "2222222", "Text", "Buffer", "Y", "msgField0003", "bufField0002", "msgField0002", "bufField0003", "msgField0001", "bufField0001", "1", true, true, false, "2", false, true, true, "3", true, false, true);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCvrLeftmenu);
        }).then(function () {
            Page.eleCvrLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Conversion0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleCvrNameInput);
        }).then(function () {
            return Page.eleCvrNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Conversion0008').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MessageA0013').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BufferA0013').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1111111').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Map').to.be.true;
        }).then(function () {
            return Page.eleCvrUseSizeFromDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        });
    });

    // Add a Conversion Rule, delete it, then confirm the delete operation.
    //
    it('Add a Conversion Rule, delete it, then confirm the delete operation', function () {
        Page.delCvrYes("Conversion0009").then(function () {
            Page.delMsgYes("MessageA0015");
        }).then(function () {
            Page.delBufYes("BufferA0015");
        }).then(function () {
            Page.addMsg("MessageA0015", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0015", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0009", "MessageA0015", "BufferA0015", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delCvrYes("Conversion0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Conversion0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a Conversion Rule, delete it, then discard the delete operation.
    //
    it('Should add a Conversion Rule, delete it, then discard the delete operation', function () {
        Page.delCvrYes("Conversion0010").then(function () {
            Page.delMsgYes("MessageA0016");
        }).then(function () {
            Page.delBufYes("BufferA0016")
        }).then(function () {
            Page.addMsg("MessageA0016", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0016", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0010", "MessageA0016", "BufferA0016", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delCvrNo("Conversion0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Conversion0010");
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
        Page.delCvrYes("Conversion0011").then(function () {
            Page.delMsgYes("MessageA0017");
        }).then(function () {
            Page.delBufYes("BufferA0017");
        }).then(function () {
            Page.addMsg("MessageA0017", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0017", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0011", "MessageA0017", "BufferA0017", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
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

    // Test Conversion Rule Details panel fields default value.
    //
    it('Test Conversion Rule Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleCvrLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCvrNameInput);
        }).then(function () {
            return Page.eleCvrNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleCvrMaxBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleCvrMappingButton.getAttribute('disabled');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Bytes').to.be.true;
        }).then(function () {
            return Page.eleCvrUseSizeFromDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test Conversion Rule Details panel mandatory fields.
    //
    it('Test Conversion Rule Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleCvrLeftmenu);
        }).then(function () {
            Page.eleCvrLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
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
            return Page.eleCvrNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleCvrBufValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'Conversion Rule Details panel' -> 'Name'
    //
    it('Test field Conversion Rule -> Name', function () {
        Page.delCvrYes("Conversion0012_@#$_23333333333444444444").then(function () {
            Page.delCvrYes("Conversion0013_@#$_23333333333444444444");
        }).then(function () {
            Page.delMsgYes("MessageA0018");
        }).then(function () {
            Page.delBufYes("BufferA0018");
        }).then(function () {
            Page.addMsg("MessageA0018", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0018", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0012_@#$_23333333333444444444", "MessageA0018", "BufferA0018", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'Conversion0012_@#$_23333333333444444444').to.be.true;
        }).then(function () {
            Page.addCvr("Conversion0013_@#$_233333333334444444444", "MessageA0018", "BufferA0018", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'Conversion0013_@#$_23333333333444444444').to.be.true;
        });
    });

    // Test field 'Conversion Rule Details panel' -> 'Message'
    //
    it('Test field Conversion Rule -> Message', function () {
        Page.delCvrYes("Conversion0014").then(function () {
            Page.delCvrYes("Conversion0015");
        }).then(function () {
            Page.delMsgYes("MessageA0019_@#$_2223333333333444444444");
        }).then(function () {
            Page.delBufYes("BufferA0019");
        }).then(function () {
            Page.addMsg("MessageA0019_@#$_2223333333333444444444", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0019", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0014", "MessageA0019_@#$_2223333333333444444444", "BufferA0019", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'MessageA0019_@#$_2223333333333444444444').to.be.true;
        }).then(function () {
            Page.addCvr("Conversion0015", "MessageA0019_@#$_22233333333334444444444", "BufferA0019", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrMsgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'MessageA0019_@#$_2223333333333444444444').to.be.true;
        });
    });

    // Test field 'Conversion Rule Details panel' -> 'Buffer'
    //
    it('Test field Conversion Rule -> Buffer', function () {
        Page.delCvrYes("Conversion0016").then(function () {
            Page.delCvrYes("Conversion0017");
        }).then(function () {
            Page.delMsgYes("MessageA0020");
        }).then(function () {
            Page.delBufYes("BufferA0020_@#$_22223333333333444444444");
        }).then(function () {
            Page.addMsg("MessageA0020", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0020_@#$_22223333333333444444444", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0016", "MessageA0020", "BufferA0020_@#$_22223333333333444444444", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'BufferA0020_@#$_22223333333333444444444').to.be.true;
        }).then(function () {
            Page.addCvr("Conversion0017", "MessageA0020", "BufferA0020_@#$_222233333333334444444444", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrBufInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'BufferA0020_@#$_22223333333333444444444').to.be.true;
        });
    });

    // Test field 'Conversion Rule Details panel' -> 'Max Buffer Size (bytes)'
    //
    it('Test field Conversion Rule -> Max Buffer Size (bytes)', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delCvrYes("Conversion0018").then(function () {
            Page.delMsgYes("MessageA0021");
        }).then(function () {
            Page.delBufYes("BufferA0021");
        }).then(function () {
            Page.addMsg("MessageA0021", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0021", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0018", "MessageA0021", "BufferA0021", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.clear().sendKeys("1");
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
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.clear().sendKeys("222");
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
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.clear().sendKeys("33333");
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
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.clear().sendKeys("444444");
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
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '444444').to.be.true;
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.clear().sendKeys("5555555");
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
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '444444').to.be.true;
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.clear().sendKeys("4095999");
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
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095999').to.be.true;
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.clear().sendKeys("4096000");
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
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4096000').to.be.true;
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.clear().sendKeys("4096001");
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
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4096000').to.be.true;
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCvrMaxBufSizeSpinner.clear().sendKeys("12345678");
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
            return Page.eleCvrMaxBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1234567').to.be.true;
        });
    });

    // Test field 'Conversion Rule Details panel' -> 'Input Message Type'
    //
    it('Test field Conversion Rule -> Input Message Type', function () {
        Page.delCvrYes("Conversion0019").then(function () {
            Page.delCvrYes("Conversion0020");
        }).then(function () {
            Page.delCvrYes("Conversion0021");
        }).then(function () {
            Page.delCvrYes("Conversion0022");
        }).then(function () {
            Page.delMsgYes("MessageA0022");
        }).then(function () {
            Page.delBufYes("BufferA0022");
        }).then(function () {
            Page.addMsg("MessageA0022", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0022", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0019", "MessageA0022", "BufferA0022", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Bytes').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCvrInputMsgTypeDropdown);
        }).then(function () {
            Page.eleCvrInputMsgTypeDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCvrInputMsgType01);
        }).then(function () {
            return Page.eleCvrInputMsgType01.getText();
        }).then(function (message) {
            expect(message === 'Bytes').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgType02.getText();
        }).then(function (message) {
            expect(message === 'Map').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgType03.getText();
        }).then(function (message) {
            expect(message === 'Stream').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgType04.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        }).then(function () {
            Page.addCvr("Conversion0020", "MessageA0022", "BufferA0022", "0", "Map", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Map').to.be.true;
        }).then(function () {
            Page.addCvr("Conversion0021", "MessageA0022", "BufferA0022", "0", "Stream", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Stream').to.be.true;
        }).then(function () {
            Page.addCvr("Conversion0022", "MessageA0022", "BufferA0022", "0", "Text", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrInputMsgTypeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Text').to.be.true;
        });
    });

    // Test field 'Conversion Rule Details panel' -> 'Use Size From'
    //
    it('Test field Conversion Rule -> Use Size From', function () {
        Page.delCvrYes("Conversion0023").then(function () {
            Page.delCvrYes("Conversion0024");
        }).then(function () {
            Page.delMsgYes("MessageA0023");
        }).then(function () {
            Page.delBufYes("BufferA0023");
        }).then(function () {
            Page.addMsg("MessageA0023", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0023", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0023", "MessageA0023", "BufferA0023", "0", "Bytes", "Message", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrUseSizeFromDropdown.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCvrUseSizeFromDropdown);
        }).then(function () {
            Page.eleCvrUseSizeFromDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCvrUseSizeFrom01);
        }).then(function () {
            return Page.eleCvrUseSizeFrom01.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleCvrUseSizeFrom02.getText();
        }).then(function (message) {
            expect(message === 'Buffer').to.be.true;
        }).then(function () {
            Page.addCvr("Conversion0024", "MessageA0023", "BufferA0023", "0", "Bytes", "Buffer", "Y", "msgField0001", "bufField0002", "msgField0002", "bufField0003", "msgField0003", "bufField0001", "1", true, false, false, "2", false, true, false, "3", false, false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleCvrUseSizeFromDropdown.getText();
        }).then(function (message) {
            expect(message === 'Buffer').to.be.true;
        });
    });

    // Add a Conversion Rule without creating Mapping
    //
    it('Add a Conversion Rule without creating Mapping', function () {
        Page.delCvrYes("Conversion0025").then(function () {
            Page.delMsgYes("MessageA0024");
        }).then(function () {
            Page.delBufYes("BufferA0024");
        }).then(function () {
            Page.addMsg("MessageA0024", "", "msgField0001", "STR", "11", "33", "1", "msgField0002", "BOL", "333", "555", "3", "msgField0003", "I32", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addBuf("BufferA0024", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addCvr("Conversion0025", "MessageA0024", "BufferA0024", "0", "Bytes", "Message", "N");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Mapping must not be empty').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});