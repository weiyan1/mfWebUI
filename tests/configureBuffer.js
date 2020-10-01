/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var configurePage = require('../pageObject/configurePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.6.2 Configure Buffer Page', function () {
    var Page = new configurePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleConfigureMenu.click();
    });

    // Add a Buffer successfully.
    //
    it('Add a Buffer successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delBufYes("Buffer0001");
        }).then(function () {
            Page.addBuf("Buffer0001", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a Buffer successfully, then replicate it.
    //
    it('Add a Buffer, then replicate it successfully', function () {
        Page.delBufYes("Buffer0002-copy").then(function () {
            Page.delBufYes("Buffer0002");
        }).then(function () {
            Page.addBuf("Buffer0002", "", undefined, "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateBuf("Buffer0002");
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleBufNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Buffer0002-copy').to.be.true;
        });
    });

    // Add a Buffer successfully, then update it.
    //
    it('Add a Buffer, then update it successfully', function () {
        Page.delBufYes("Buffer0003").then(function () {
            Page.addBuf("Buffer0003", "aBcDeFg", "11111", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateBuf("Buffer0003", "HiJkLmN", "22222", "bufField0001B", "PDEC", "22", "44", "2", "bufField0002B", "FLOAT", "444", "666", "4", "bufField0003B", "UZDEC", "6666", "8888", "6");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleBufNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Buffer0003').to.be.true;
        }).then(function () {
            return Page.eleBufDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleBufMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22222').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(1).getText();
        }).then(function (message) {
            expect(message === 'bufField0001B').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(1).getText();
        }).then(function (message) {
            expect(message === 'PDEC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(1).getText();
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(1).getText();
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(1).getText();
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(2).getText();
        }).then(function (message) {
            expect(message === 'bufField0002B').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(2).getText();
        }).then(function (message) {
            expect(message === 'FLOAT').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(2).getText();
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(2).getText();
        }).then(function (message) {
            expect(message === '666').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(2).getText();
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(3).getText();
        }).then(function (message) {
            expect(message === 'bufField0003B').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(3).getText();
        }).then(function (message) {
            expect(message === 'UZDEC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(3).getText();
        }).then(function (message) {
            expect(message === '6666').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(3).getText();
        }).then(function (message) {
            expect(message === '8888').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(3).getText();
        }).then(function (message) {
            expect(message === '6').to.be.true;
        });
    });

    // Add a Buffer, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Add a Buffer, cancel the changes, then confirm the cancel operation', function () {
        Page.delBufYes("Buffer0004").then(function () {
            Page.addBuf("Buffer0004", "aBcDeFg", "11111", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelBufYes("Buffer0004", "HiJkLmN", "22222", "bufField0001B", "PDEC", "22", "44", "2", "bufField0002B", "FLOAT", "444", "666", "4", "bufField0003B", "UZDEC", "6666", "8888", "6");
        }).then(function () {
            Page.eleBufLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Buffer0004");
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
            return Page.eleBufNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Buffer0004').to.be.true;
        }).then(function () {
            return Page.eleBufDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'aBcDeFg').to.be.true;
        }).then(function () {
            return Page.eleBufMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '11111').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(1).getText();
        }).then(function (message) {
            expect(message === 'bufField0001').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(1).getText();
        }).then(function (message) {
            expect(message === 'BIN').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(1).getText();
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(1).getText();
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(1).getText();
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(2).getText();
        }).then(function (message) {
            expect(message === 'bufField0002').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(2).getText();
        }).then(function (message) {
            expect(message === 'STR').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(2).getText();
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(2).getText();
        }).then(function (message) {
            expect(message === '555').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(2).getText();
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(3).getText();
        }).then(function (message) {
            expect(message === 'bufField0003').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(3).getText();
        }).then(function (message) {
            expect(message === 'TEXT').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(3).getText();
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(3).getText();
        }).then(function (message) {
            expect(message === '7777').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(3).getText();
        }).then(function (message) {
            expect(message === '5').to.be.true;
        });
    });

    // Add a Buffer, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Add a Buffer, cancel the changes, then discard the cancel operation', function () {
        Page.delBufYes("Buffer0005").then(function () {
            Page.addBuf("Buffer0005", "aBcDeFg", "11111", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelBufNo("Buffer0005", "HiJkLmN", "22222", "bufField0001B", "PDEC", "22", "44", "2", "bufField0002B", "FLOAT", "444", "666", "4", "bufField0003B", "UZDEC", "6666", "8888", "6");
        }).then(function () {
            return Page.eleBufNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Buffer0005').to.be.true;
        }).then(function () {
            return Page.eleBufDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleBufMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22222').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(1).getText();
        }).then(function (message) {
            expect(message === 'bufField0001B').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(1).getText();
        }).then(function (message) {
            expect(message === 'PDEC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(1).getText();
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(1).getText();
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(1).getText();
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(2).getText();
        }).then(function (message) {
            expect(message === 'bufField0002B').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(2).getText();
        }).then(function (message) {
            expect(message === 'FLOAT').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(2).getText();
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(2).getText();
        }).then(function (message) {
            expect(message === '666').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(2).getText();
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(3).getText();
        }).then(function (message) {
            expect(message === 'bufField0003B').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(3).getText();
        }).then(function (message) {
            expect(message === 'UZDEC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(3).getText();
        }).then(function (message) {
            expect(message === '6666').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(3).getText();
        }).then(function (message) {
            expect(message === '8888').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(3).getText();
        }).then(function (message) {
            expect(message === '6').to.be.true;
        });
    });

    // Add a Buffer, make some changes, then reset it.
    //
    it('Add a Buffer, make some changes, then reset it', function () {
        Page.delBufYes("Buffer0006").then(function () {
            Page.addBuf("Buffer0006", "aBcDeFg", "11111", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetBuf("Buffer0006", "HiJkLmN", "22222", "bufField0001B", "PDEC", "22", "44", "2", "bufField0002B", "FLOAT", "444", "666", "4", "bufField0003B", "UZDEC", "6666", "8888", "6");
        }).then(function () {
            return Page.eleBufNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Buffer0006').to.be.true;
        }).then(function () {
            return Page.eleBufDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'aBcDeFg').to.be.true;
        }).then(function () {
            return Page.eleBufMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '11111').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(1).getText();
        }).then(function (message) {
            expect(message === 'bufField0001').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(1).getText();
        }).then(function (message) {
            expect(message === 'BIN').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(1).getText();
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(1).getText();
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(1).getText();
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(2).getText();
        }).then(function (message) {
            expect(message === 'bufField0002').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(2).getText();
        }).then(function (message) {
            expect(message === 'STR').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(2).getText();
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(2).getText();
        }).then(function (message) {
            expect(message === '555').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(2).getText();
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(3).getText();
        }).then(function (message) {
            expect(message === 'bufField0003').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(3).getText();
        }).then(function (message) {
            expect(message === 'TEXT').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(3).getText();
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(3).getText();
        }).then(function (message) {
            expect(message === '7777').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(3).getText();
        }).then(function (message) {
            expect(message === '5').to.be.true;
        });
    });

    // Add a Buffer, then add a Buffer with the same name, then confirm the overwrite operation.
    //
    it('Add a Buffer to overwrite an existing Buffer, then confirm the overwrite operation', function () {
        Page.delBufYes("Buffer0007").then(function () {
            Page.addBuf("Buffer0007", "aBcDeFg", "11111", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addBuf("Buffer0007", "HiJkLmN", "22222", "bufField0001B", "PDEC", "22", "44", "2", "bufField0002B", "FLOAT", "444", "666", "4", "bufField0003B", "UZDEC", "6666", "8888", "6");
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
            return Page.eleBufNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Buffer0007').to.be.true;
        }).then(function () {
            return Page.eleBufDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleBufMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22222').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(1).getText();
        }).then(function (message) {
            expect(message === 'bufField0001B').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(1).getText();
        }).then(function (message) {
            expect(message === 'PDEC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(1).getText();
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(1).getText();
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(1).getText();
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(2).getText();
        }).then(function (message) {
            expect(message === 'bufField0002B').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(2).getText();
        }).then(function (message) {
            expect(message === 'FLOAT').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(2).getText();
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(2).getText();
        }).then(function (message) {
            expect(message === '666').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(2).getText();
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(3).getText();
        }).then(function (message) {
            expect(message === 'bufField0003B').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(3).getText();
        }).then(function (message) {
            expect(message === 'UZDEC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(3).getText();
        }).then(function (message) {
            expect(message === '6666').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(3).getText();
        }).then(function (message) {
            expect(message === '8888').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(3).getText();
        }).then(function (message) {
            expect(message === '6').to.be.true;
        });
    });

    // Add a Buffer, then add a Buffer with the same name, then discard the overwrite operation.
    //
    it('Add a Buffer to overwrite an existing Buffer, then discard the overwrite operation', function () {
        Page.delBufYes("Buffer0008").then(function () {
            Page.addBuf("Buffer0008", "aBcDeFg", "11111", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addBuf("Buffer0008", "HiJkLmN", "22222", "bufField0001B", "PDEC", "22", "44", "2", "bufField0002B", "FLOAT", "444", "666", "4", "bufField0003B", "UZDEC", "6666", "8888", "6");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufLeftmenu);
        }).then(function () {
            Page.eleBufLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Buffer0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleBufNameInput);
        }).then(function () {
            return Page.eleBufNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Buffer0008').to.be.true;
        }).then(function () {
            return Page.eleBufDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'aBcDeFg').to.be.true;
        }).then(function () {
            return Page.eleBufMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '11111').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(1).getText();
        }).then(function (message) {
            expect(message === 'bufField0001').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(1).getText();
        }).then(function (message) {
            expect(message === 'BIN').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(1).getText();
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(1).getText();
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(1).getText();
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(2).getText();
        }).then(function (message) {
            expect(message === 'bufField0002').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(2).getText();
        }).then(function (message) {
            expect(message === 'STR').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(2).getText();
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(2).getText();
        }).then(function (message) {
            expect(message === '555').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(2).getText();
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(3).getText();
        }).then(function (message) {
            expect(message === 'bufField0003').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(3).getText();
        }).then(function (message) {
            expect(message === 'TEXT').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(3).getText();
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(3).getText();
        }).then(function (message) {
            expect(message === '7777').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(3).getText();
        }).then(function (message) {
            expect(message === '5').to.be.true;
        });
    });

    // Add a Buffer, delete it, then confirm the delete operation.
    //
    it('Add a Buffer, delete it, then confirm the delete operation', function () {
        Page.delBufYes("Buffer0009").then(function () {
            Page.addBuf("Buffer0009", "aBcDeFg", "11111", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delBufYes("Buffer0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Buffer0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a Buffer, delete it, then discard the delete operation.
    //
    it('Should add a Buffer, delete it, then discard the delete operation', function () {
        Page.delBufYes("Buffer0010").then(function () {
            Page.addBuf("Buffer0010", "aBcDeFg", "11111", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delBufNo("Buffer0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Buffer0010");
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
        Page.delBufYes("Buffer0011").then(function () {
            Page.addBuf("Buffer0011", "aBcDeFg", "11111", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            browser.sleep(500);
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
            globalCommons.waitForClickable(Page.eleAuditButton);
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

    // Test Buffer Details panel fields default value.
    //
    it('Test Buffer Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForDisplayed(Page.eleBufLeftmenu);
        }).then(function () {
            Page.eleBufLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufNameInput);
        }).then(function () {
            return Page.eleBufFieldName(1).isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldAddButton);
        }).then(function () {
            Page.eleBufFieldAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleBufFieldExtendButton2);
        }).then(function () {
            Page.eleBufFieldExtendButton2.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldNameInput);
        }).then(function () {
            return Page.eleBufNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleBufDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleBufMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldTypeInput.getText();
        }).then(function (message) {
            expect(message === 'BIN').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPositionSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDecSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'New_field').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLeadingSignCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldSeparateSignCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldJustifyRightCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === 'Space').to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === ' ').to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test Buffer Details panel mandatory fields.
    //
    it('Test Buffer Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForDisplayed(Page.eleBufLeftmenu);
        }).then(function () {
            Page.eleBufLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleAddButton);
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
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleBufNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'Buffer Details panel' -> 'Name'
    //
    it('Test field Buffer -> Name', function () {
        Page.delBufYes("Buffer0012_@#$_222223333333333444444444").then(function () {
            Page.addBuf("Buffer0012_@#$_222223333333333444444444", "aBcDeFg", "11111", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleBufNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'Buffer0012_@#$_222223333333333444444444').to.be.true;
        }).then(function () {
            Page.delBufYes("Buffer0013_@#$_222223333333333444444444");
        }).then(function () {
            Page.addBuf("Buffer0013_@#$_2222233333333334444444444", "aBcDeFg", "11111", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleBufNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'Buffer0013_@#$_222223333333333444444444').to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'Description'
    //
    it('Test field Buffer -> Description', function () {
        Page.delBufYes("Buffer0014").then(function () {
            Page.addBuf("Buffer0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", "11111", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleBufDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.delBufYes("Buffer0015");
        }).then(function () {
            Page.addBuf("Buffer0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111","11111", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufDescValidateMsg);
        }).then(function () {
            return Page.eleBufDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufDescInput);
        }).then(function () {
            Page.eleBufDescInput.clear().sendKeys("Corrected");
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
        });
    });

    // Test field 'Buffer Details panel' -> 'Max Size'
    //
    it('Test field Buffer -> Max Size', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delBufYes("Buffer0016").then(function () {
            Page.addBuf("Buffer0016", "", "0", "bufField0001", "BIN", "11", "33", "1", "bufField0002", "STR", "333", "555", "3", "bufField0003", "TEXT", "5555", "7777", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleBufMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleBufMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleBufMaxSizeSpinner.clear().sendKeys("1");
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
            return Page.eleBufMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleBufMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleBufMaxSizeSpinner.clear().sendKeys("99");
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
            return Page.eleBufMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '99').to.be.true;
        }).then(function () {
            Page.eleBufMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleBufMaxSizeSpinner.clear().sendKeys("2222");
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
            return Page.eleBufMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            Page.eleBufMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleBufMaxSizeSpinner.clear().sendKeys("3333333");
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
            return Page.eleBufMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3333333').to.be.true;
        }).then(function () {
            Page.eleBufMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleBufMaxSizeSpinner.clear().sendKeys("4095999");
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
            return Page.eleBufMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4095999').to.be.true;
        }).then(function () {
            Page.eleBufMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleBufMaxSizeSpinner.clear().sendKeys("4096000");
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
            return Page.eleBufMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4096000').to.be.true;
        }).then(function () {
            Page.eleBufMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleBufMaxSizeSpinner.clear().sendKeys("4096001");
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
            return Page.eleBufMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4096000').to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'Buffer Fields Type'
    //
    it('Test field Buffer -> Buffer Fields Type', function () {
        Page.delBufYes("Buffer0017").then(function () {
            Page.addBuf("Buffer0017", "", "0", "bufField0001", "PDEC", "0", "0", "0", "bufField0002", "ZDEC", "2", "0", "0", "bufField0003", "STR", "3", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldAddButton);
        }).then(function () {
            Page.eleBufFieldAddButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldTypeDropdown);
        }).then(function () {
            Page.eleBufFieldTypeDropdown.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldType01);
        }).then(function () {
            return Page.eleBufFieldType01.getText();
        }).then(function (message) {
            expect(message === 'PDEC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType02.getText();
        }).then(function (message) {
            expect(message === 'ZDEC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType03.getText();
        }).then(function (message) {
            expect(message === 'STR').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType04.getText();
        }).then(function (message) {
            expect(message === 'UBIN').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType05.getText();
        }).then(function (message) {
            expect(message === 'FLOAT').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType06.getText();
        }).then(function (message) {
            expect(message === 'OPA').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType07.getText();
        }).then(function (message) {
            expect(message === 'TEXT').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType08.getText();
        }).then(function (message) {
            expect(message === 'BIN').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType09.getText();
        }).then(function (message) {
            expect(message === 'UPDEC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType10.getText();
        }).then(function (message) {
            expect(message === 'UZDEC').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleResetButton);
        }).then(function () {
            Page.eleResetButton.click();
        }).then(function () {
            Page._addBufField("bufField0004", "UBIN", "4", "4", "0");
        }).then(function () {
            Page._addBufField("bufField0005", "FLOAT", "5", "8", "0");
        }).then(function () {
            Page._addBufField("bufField0006", "OPA", "6", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0007", "TEXT", "7", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0008", "BIN", "8", "4", "0");
        }).then(function () {
            Page._addBufField("bufField0009", "UPDEC", "9", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0010", "UZDEC", "10", "0", "0");
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
            globalCommons.waitForElementPresent(Page.eleBufFieldType(1));
        }).then(function () {
            return Page.eleBufFieldType(1).getText();
        }).then(function (message) {
            expect(message === 'PDEC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(2).getText();
        }).then(function (message) {
            expect(message === 'ZDEC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(3).getText();
        }).then(function (message) {
            expect(message === 'STR').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(4).getText();
        }).then(function (message) {
            expect(message === 'UBIN').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(5).getText();
        }).then(function (message) {
            expect(message === 'FLOAT').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(6).getText();
        }).then(function (message) {
            expect(message === 'OPA').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(7).getText();
        }).then(function (message) {
            expect(message === 'TEXT').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(8).getText();
        }).then(function (message) {
            expect(message === 'BIN').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(9).getText();
        }).then(function (message) {
            expect(message === 'UPDEC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(10).getText();
        }).then(function (message) {
            expect(message === 'UZDEC').to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'Buffer Start Position'
    //
    it('Test field Buffer -> Buffer Start Position', function () {
        Page.delBufYes("Buffer0018").then(function () {
            Page.addBuf("Buffer0018", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "STR", "1", "0", "0", "bufField0003", "STR", "999", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addBufField("bufField0004", "STR", "22222", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0005", "STR", "3333333", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0006", "STR", "4095998", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0007", "STR", "4095999", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0008", "STR", "4096000", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0009", "STR", "4096001", "0", "0");
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
            globalCommons.waitForElementPresent(Page.eleBufFieldStartPosition(1));
        }).then(function () {
            return Page.eleBufFieldStartPosition(1).getText();
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(2).getText();
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(3).getText();
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(4).getText();
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(5).getText();
        }).then(function (message) {
            expect(message === '999').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(6).getText();
        }).then(function (message) {
            expect(message === '22222').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(7).getText();
        }).then(function (message) {
            expect(message === '3333333').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(8).getText();
        }).then(function (message) {
            expect(message === '4095998').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(9).getText();
        }).then(function (message) {
            expect(message === '4095999').to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'Buffer Fields Length'
    //
    it('Test field Buffer -> Buffer Fields Length', function () {
        Page.delBufYes("Buffer0019").then(function () {
            Page.addBuf("Buffer0019", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "STR", "2", "1", "0", "bufField0003", "STR", "3", "999", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addBufField("bufField0004", "STR", "4", "22222", "0");
        }).then(function () {
            Page._addBufField("bufField0005", "STR", "5", "3333333", "0");
        }).then(function () {
            Page._addBufField("bufField0006", "STR", "6", "4095999", "0");
        }).then(function () {
            Page._addBufField("bufField0007", "STR", "7", "4096000", "0");
        }).then(function () {
            Page._addBufField("bufField0008", "STR", "8", "4096001", "0");
        }).then(function () {
            Page._addBufField("bufField0009", "STR", "9", "4096002", "0");
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
            globalCommons.waitForElementPresent(Page.eleBufFieldLength(1));
        }).then(function () {
            return Page.eleBufFieldLength(1).getText();
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(2).getText();
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(3).getText();
        }).then(function (message) {
            expect(message === '999').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(4).getText();
        }).then(function (message) {
            expect(message === '22222').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(5).getText();
        }).then(function (message) {
            expect(message === '3333333').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(6).getText();
        }).then(function (message) {
            expect(message === '4095999').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(7).getText();
        }).then(function (message) {
            expect(message === '4096000').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(8).getText();
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(9).getText();
        }).then(function (message) {
            expect(message === '0').to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'Buffer Fields Decimals'
    //
    it('Test field Buffer -> Buffer Fields Decimals', function () {
        Page.delBufYes("Buffer0020").then(function () {
            Page.addBuf("Buffer0020", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "STR", "0", "0", "1", "bufField0003", "STR", "0", "0", "2");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addBufField("bufField0004", "STR", "0", "0", "3");
        }).then(function () {
            Page._addBufField("bufField0005", "STR", "0", "0", "4");
        }).then(function () {
            Page._addBufField("bufField0006", "STR", "0", "0", "5");
        }).then(function () {
            Page._addBufField("bufField0007", "STR", "0", "0", "6");
        }).then(function () {
            Page._addBufField("bufField0008", "STR", "0", "0", "7");
        }).then(function () {
            Page._addBufField("bufField0009", "STR", "0", "0", "8");
        }).then(function () {
            Page._addBufField("bufField0010", "STR", "0", "0", "9");
        }).then(function () {
            Page._addBufField("bufField0011", "STR", "0", "0", "10");
        }).then(function () {
            Page._addBufField("bufField0012", "STR", "0", "0", "22");
        }).then(function () {
            Page._addBufField("bufField0013", "STR", "0", "0", "333");
        }).then(function () {
            Page._addBufField("bufField0014", "STR", "0", "0", "4444");
        }).then(function () {
            Page._addBufField("bufField0015", "STR", "0", "0", "55555");
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
            globalCommons.waitForElementPresent(Page.eleBufFieldDec(1));
        }).then(function () {
            return Page.eleBufFieldDec(1).getText();
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(2).getText();
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(3).getText();
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(4).getText();
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(5).getText();
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(6).getText();
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(7).getText();
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(8).getText();
        }).then(function (message) {
            expect(message === '7').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(9).getText();
        }).then(function (message) {
            expect(message === '8').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(10).getText();
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(11).getAttribute("textContent");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(12).getAttribute("textContent");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(13).getAttribute("textContent");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(14).getAttribute("textContent");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(15).getAttribute("textContent");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'Buffer Fields Name'
    //
    it('Test field Buffer -> Buffer Fields Name', function () {
        Page.delBufYes("Buffer0021").then(function () {
            Page.delBufYes("Buffer0022");
        }).then(function () {
            Page.addBuf("Buffer0021", "", "0", "c", "STR", "0", "0", "0", "B", "STR", "0", "0", "0", "321", "STR", "0", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addBufField("000", "STR", "0", "0", "0");
        }).then(function () {
            Page._addBufField("@", "STR", "0", "0", "0");
        }).then(function () {
            Page._addBufField("d0ABc", "STR", "0", "0", "0");
        }).then(function () {
            Page._addBufField("aaaaa", "STR", "0", "0", "0");
        }).then(function () {
            Page._addBufField("#", "STR", "0", "0", "0");
        }).then(function () {
            Page._addBufField("231", "STR", "0", "0", "0");
        }).then(function () {
            Page._addBufField("ABC", "STR", "0", "0", "0");
        }).then(function () {
            Page._addBufField("&", "STR", "0", "0", "0");
        }).then(function () {
            Page._addBufField("aBC", "STR", "0", "0", "0");
        }).then(function () {
            Page._addBufField("ddd", "STR", "0", "0", "0");
        }).then(function () {
            Page._addBufField("buf@#&0000012222222233333333334444444444555555555566666666667777777777888888888", "STR", "0", "0", "0");
        }).then(function () {
            Page._addBufField("$&@#!%*Field22222222333333333344444444445555555555666666666677777777778888888888", "STR", "0", "0", "0");
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
            globalCommons.waitForElementPresent(Page.eleBufFieldName(1));
        }).then(function () {
            return Page.eleBufFieldName(1).getText();
        }).then(function (message) {
            expect(message === '#').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(2).getText();
        }).then(function (message) {
            expect(message === '$&@#!%*Field2222222233333333334444444444555555555566666666667777777777888888888').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(3).getText();
        }).then(function (message) {
            expect(message === '&').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(4).getText();
        }).then(function (message) {
            expect(message === '000').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(5).getText();
        }).then(function (message) {
            expect(message === '231').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(6).getText();
        }).then(function (message) {
            expect(message === '321').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(7).getText();
        }).then(function (message) {
            expect(message === '@').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(8).getText();
        }).then(function (message) {
            expect(message === 'aaaaa').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(9).getText();
        }).then(function (message) {
            expect(message === 'ABC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(10).getText();
        }).then(function (message) {
            expect(message === 'aBC').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(11).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'B').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(12).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'buf@#&0000012222222233333333334444444444555555555566666666667777777777888888888').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(13).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'c').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(14).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'd0ABc').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(15).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'ddd').to.be.true;
        }).then(function () {
            Page.addBuf("Buffer0022", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "STR", "0", "0", "0", "bufField0003", "STR", "0", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0004", "STR", "0", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0004", "STR", "0", "0", "0");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldNameValidateMsg);
        }).then(function () {
            return Page.eleBufFieldNameValidateMsg.getAttribute("title");
        }).then(function (message) {
            expect(message === 'Duplicate row').to.be.true;
        }).then(function () {
            Page.eleBufFieldNameInput.clear().sendKeys("bufField0005");
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
            globalCommons.waitForElementPresent(Page.eleBufFieldName(4));
        }).then(function () {
            return Page.eleBufFieldName(4).getText();
        }).then(function (message) {
            expect(message === 'bufField0004').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(5).getText();
        }).then(function (message) {
            expect(message === 'bufField0005').to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'Leading Sign'
    //
    it('Test field Buffer -> Leading Sign', function () {
        Page.delBufYes("Buffer0023").then(function () {
            Page.addBuf("Buffer0023", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "FLOAT", "1", "8", "0", "bufField0003", "OPA", "2", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._setExtensionBufField("1", false, false, false, "Space", "", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("2", true, false, false, "Space", "", false, "0", "");
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
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(1));
        }).then(function () {
            Page.eleBufFieldExtendButton(1).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldLeadingSignCheck);
        }).then(function () {
            return Page.eleBufFieldLeadingSignCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(2));
        }).then(function () {
            Page.eleBufFieldExtendButton(2).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldLeadingSignCheck);
        }).then(function () {
            return Page.eleBufFieldLeadingSignCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'Separate Sign'
    //
    it('Test field Buffer -> Separate Sign', function () {
        Page.delBufYes("Buffer0024").then(function () {
            Page.addBuf("Buffer0024", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "FLOAT", "1", "8", "0", "bufField0003", "OPA", "2", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._setExtensionBufField("1", true, false, false, "Space", "", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("2", true, true, false, "Space", "", false, "0", "");
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
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(1));
        }).then(function () {
            Page.eleBufFieldExtendButton(1).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldSeparateSignCheck);
        }).then(function () {
            return Page.eleBufFieldSeparateSignCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(2));
        }).then(function () {
            Page.eleBufFieldExtendButton(2).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldSeparateSignCheck);
        }).then(function () {
            return Page.eleBufFieldSeparateSignCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'Justify Right'
    //
    it('Test field Buffer -> Justify Right', function () {
        Page.delBufYes("Buffer0025").then(function () {
            Page.addBuf("Buffer0025", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "FLOAT", "1", "8", "0", "bufField0003", "OPA", "2", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._setExtensionBufField("1", true, true, false, "Space", "", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("2", true, true, true, "Space", "", false, "0", "");
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
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(1));
        }).then(function () {
            Page.eleBufFieldExtendButton(1).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldJustifyRightCheck);
        }).then(function () {
            return Page.eleBufFieldJustifyRightCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(2));
        }).then(function () {
            Page.eleBufFieldExtendButton(2).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldJustifyRightCheck);
        }).then(function () {
            return Page.eleBufFieldJustifyRightCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'Pad Character'
    //
    it('Test field Buffer -> Pad Character', function () {
        Page.delBufYes("Buffer0026").then(function () {
            Page.addBuf("Buffer0026", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "FLOAT", "1", "8", "0", "bufField0003", "OPA", "2", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._setExtensionBufField("1", false, false, false, "Space", "", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("2", true, true, true, "Character", "a", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("3", true, false, true, "Hexadecimal", "AE", false, "0", "");
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
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(1));
        }).then(function () {
            Page.eleBufFieldExtendButton(1).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Space").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getText();
        }).then(function (message) {
            expect(message === "").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(2));
        }).then(function () {
            Page.eleBufFieldExtendButton(2).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Character").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "a").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(3));
        }).then(function () {
            Page.eleBufFieldExtendButton(3).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "AE").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'Pad Value'
    //
    it('Test field Buffer -> Pad Value', function () {
        Page.delBufYes("Buffer0027").then(function () {
            Page.delBufYes("Buffer0028");
        }).then(function () {
            Page.addBuf("Buffer0027", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "FLOAT", "2", "8", "0", "bufField0003", "OPA", "3", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addBufField("bufField0004", "PDEC", "4", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0005", "ZDEC", "5", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0006", "STR", "6", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0007", "UBIN", "7", "4", "0");
        }).then(function () {
            Page._addBufField("bufField0008", "FLOAT", "8", "8", "0");
        }).then(function () {
            Page._addBufField("bufField0009", "OPA", "9", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0010", "TEXT", "10", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0011", "BIN", "11", "4", "0");
        }).then(function () {
            Page._addBufField("bufField0012", "PDEC", "12", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0013", "UPDEC", "13", "0", "0");
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
            Page._setExtensionBufField("1", false, false, false, "Space", "", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("2", false, false, false, "Character", "a", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("3", true, true, true, "Character", "B", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("4", true, true, false, "Character", "0", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("5", false, true, true, "Character", "9", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("6", true, false, true, "Character", "!", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("7", false, false, true, "Character", "@", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("8", false, true, false, "Character", "#", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("9", true, false, false, "Character", "$", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("10", false, false, false, "Character", "%", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("11", false, false, false, "Character", "&", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("12", false, false, false, "Character", "*", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("13", false, false, false, "Character", "x", false, "0", "");
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
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(1));
        }).then(function () {
            Page.eleBufFieldExtendButton(1).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Space").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getText();
        }).then(function (message) {
            expect(message === "").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(2));
        }).then(function () {
            Page.eleBufFieldExtendButton(2).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Character").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "a").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(3));
        }).then(function () {
            Page.eleBufFieldExtendButton(3).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Character").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "B").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(4));
        }).then(function () {
            Page.eleBufFieldExtendButton(4).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Character").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "0").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(5));
        }).then(function () {
            Page.eleBufFieldExtendButton(5).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Character").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "9").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(6));
        }).then(function () {
            Page.eleBufFieldExtendButton(6).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Character").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "!").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(7));
        }).then(function () {
            Page.eleBufFieldExtendButton(7).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Character").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "@").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(8));
        }).then(function () {
            Page.eleBufFieldExtendButton(8).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Character").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "#").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(9));
        }).then(function () {
            Page.eleBufFieldExtendButton(9).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Character").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "$").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(10));
        }).then(function () {
            Page.eleBufFieldExtendButton(10).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Character").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "%").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(11));
        }).then(function () {
            Page.eleBufFieldExtendButton(11).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Character").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "&").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(12));
        }).then(function () {
            Page.eleBufFieldExtendButton(12).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Character").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "*").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(13));
        }).then(function () {
            Page.eleBufFieldExtendButton(13).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Character").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "x").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueInput);
        }).then(function () {
            Page.eleBufFieldPadValueInput.clear().sendKeys("");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldPadValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Exactly one character required").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueInput);
        }).then(function () {
            Page.eleBufFieldPadValueInput.clear().sendKeys("BB");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldPadValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Exactly one character required").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueInput);
        }).then(function () {
            Page.eleBufFieldPadValueInput.clear().sendKeys("Y");
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
            Page.addBuf("Buffer0028", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "FLOAT", "2", "8", "0", "bufField0003", "OPA", "3", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addBufField("bufField0004", "PDEC", "4", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0005", "ZDEC", "5", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0006", "STR", "6", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0007", "UBIN", "7", "4", "0");
        }).then(function () {
            Page._addBufField("bufField0008", "FLOAT", "8", "8", "0");
        }).then(function () {
            Page._addBufField("bufField0009", "OPA", "9", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0010", "TEXT", "10", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0011", "BIN", "11", "4", "0");
        }).then(function () {
            Page._addBufField("bufField0012", "PDEC", "12", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0013", "UPDEC", "13", "0", "0");
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
            Page._setExtensionBufField("1", false, false, false, "Hexadecimal", "19", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("2", false, false, false, "Hexadecimal", "999", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("3", true, true, true, "Hexadecimal", "1234", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("4", true, true, false, "Hexadecimal", "A9", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("5", false, true, true, "Hexadecimal", "7e", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("6", true, false, true, "Hexadecimal", "Fb", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("7", false, false, true, "Hexadecimal", "BF", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("8", false, true, false, "Hexadecimal", "ed", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("9", true, false, false, "Hexadecimal", "cA", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("10", false, false, false, "Hexadecimal", "00", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("11", false, false, false, "Hexadecimal", "FF", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("12", false, false, false, "Hexadecimal", "ff", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("13", false, false, false, "Hexadecimal", "11", false, "0", "");
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
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(1));
        }).then(function () {
            Page.eleBufFieldExtendButton(1).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "19").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(2));
        }).then(function () {
            Page.eleBufFieldExtendButton(2).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "99").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(3));
        }).then(function () {
            Page.eleBufFieldExtendButton(3).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "12").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(4));
        }).then(function () {
            Page.eleBufFieldExtendButton(4).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "A9").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(5));
        }).then(function () {
            Page.eleBufFieldExtendButton(5).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "7e").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(6));
        }).then(function () {
            Page.eleBufFieldExtendButton(6).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "Fb").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(7));
        }).then(function () {
            Page.eleBufFieldExtendButton(7).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "BF").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(8));
        }).then(function () {
            Page.eleBufFieldExtendButton(8).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "ed").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(9));
        }).then(function () {
            Page.eleBufFieldExtendButton(9).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "cA").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(10));
        }).then(function () {
            Page.eleBufFieldExtendButton(10).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "00").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(11));
        }).then(function () {
            Page.eleBufFieldExtendButton(11).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "FF").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(12));
        }).then(function () {
            Page.eleBufFieldExtendButton(12).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "ff").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(13));
        }).then(function () {
            Page.eleBufFieldExtendButton(13).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadCharacterDropdown);
        }).then(function () {
            return Page.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            expect(message === "Hexadecimal").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("value");
        }).then(function (message) {
            expect(message === "11").to.be.true;
        }).then(function () {
            return Page.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueInput);
        }).then(function () {
            Page.eleBufFieldPadValueInput.clear().sendKeys("");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldPadValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Exactly two hexadecimal digits required").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueInput);
        }).then(function () {
            Page.eleBufFieldPadValueInput.clear().sendKeys("1");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldPadValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Exactly two hexadecimal digits required").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueInput);
        }).then(function () {
            Page.eleBufFieldPadValueInput.clear().sendKeys("a");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldPadValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Exactly two hexadecimal digits required").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueInput);
        }).then(function () {
            Page.eleBufFieldPadValueInput.clear().sendKeys("B");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldPadValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Exactly two hexadecimal digits required").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueInput);
        }).then(function () {
            Page.eleBufFieldPadValueInput.clear().sendKeys("#");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldPadValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Exactly two hexadecimal digits required").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueInput);
        }).then(function () {
            Page.eleBufFieldPadValueInput.clear().sendKeys("AG");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldPadValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Exactly two hexadecimal digits required").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueInput);
        }).then(function () {
            Page.eleBufFieldPadValueInput.clear().sendKeys("ha");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldPadValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Exactly two hexadecimal digits required").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueInput);
        }).then(function () {
            Page.eleBufFieldPadValueInput.clear().sendKeys("#$");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldPadValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Exactly two hexadecimal digits required").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueInput);
        }).then(function () {
            Page.eleBufFieldPadValueInput.clear().sendKeys("@&");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldPadValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Exactly two hexadecimal digits required").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldPadValueInput);
        }).then(function () {
            Page.eleBufFieldPadValueInput.clear().sendKeys("AA");
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

    // Test field 'Buffer Details panel' -> 'Initialize entire field'
    //
    it('Test field Buffer -> Initialize entire field', function () {
        Page.delBufYes("Buffer0029").then(function () {
            Page.addBuf("Buffer0029", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "FLOAT", "1", "8", "0", "bufField0003", "OPA", "2", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._setExtensionBufField("1", false, false, false, "Space", "", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("2", true, true, true, "Character", "X", false, "7", "abcdefg");
        }).then(function () {
            Page._setExtensionBufField("3", true, true, false, "Hexadecimal", "ae", true, "0", "");
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
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(1));
        }).then(function () {
            Page.eleBufFieldExtendButton(1).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(2));
        }).then(function () {
            Page.eleBufFieldExtendButton(2).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '7').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(3));
        }).then(function () {
            Page.eleBufFieldExtendButton(3).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'Initial value length'
    //
    it('Test field Buffer -> Initial value length', function () {
        Page.delBufYes("Buffer0030").then(function () {
            Page.addBuf("Buffer0030", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "FLOAT", "2", "8", "0", "bufField0003", "OPA", "3", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addBufField("bufField0004", "PDEC", "4", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0005", "ZDEC", "5", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0006", "STR", "6", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0007", "UBIN", "7", "4", "0");
        }).then(function () {
            Page._addBufField("bufField0008", "FLOAT", "8", "8", "0");
        }).then(function () {
            Page._addBufField("bufField0009", "OPA", "9", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0010", "TEXT", "10", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0011", "BIN", "11", "4", "0");
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
            Page._setExtensionBufField("1", false, false, false, "Space", "", true, "0", "");
        }).then(function () {
            Page._setExtensionBufField("2", true, true, true, "Character", "X", true, "0", "a");
        }).then(function () {
            Page._setExtensionBufField("3", true, true, false, "Hexadecimal", "ae", true, "0", "1");
        }).then(function () {
            Page._setExtensionBufField("4", false, true, false, "Space", "", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("5", true, false, true, "Character", "X", false, "1", "9");
        }).then(function () {
            Page._setExtensionBufField("6", false, true, false, "Hexadecimal", "ae", false, "2", "Xy");
        }).then(function () {
            Page._setExtensionBufField("7", true, true, false, "Space", "", false, "11", "!@#$%^&*?><");
        }).then(function () {
            Page._setExtensionBufField("8", true, false, true, "Character", "X", false, "39", "123456789012345678901234567890123456789");
        }).then(function () {
            Page._setExtensionBufField("9", false, true, true, "Hexadecimal", "ae", false, "40", "1234567890123456789012345678901234567890");
        }).then(function () {
            Page._setExtensionBufField("10", false, true, false, "Space", "", false, "41", "");
        }).then(function () {
            Page._setExtensionBufField("11", true, false, true, "Character", "X", false, "42", "");
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
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(1));
        }).then(function () {
            Page.eleBufFieldExtendButton(1).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(2));
        }).then(function () {
            Page.eleBufFieldExtendButton(2).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'a').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(3));
        }).then(function () {
            Page.eleBufFieldExtendButton(3).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(4));
        }).then(function () {
            Page.eleBufFieldExtendButton(4).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(5));
        }).then(function () {
            Page.eleBufFieldExtendButton(5).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '9').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(6));
        }).then(function () {
            Page.eleBufFieldExtendButton(6).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Xy').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(7));
        }).then(function () {
            Page.eleBufFieldExtendButton(7).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '!@#$%^&*?><').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(8));
        }).then(function () {
            Page.eleBufFieldExtendButton(8).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '39').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '123456789012345678901234567890123456789').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(9));
        }).then(function () {
            Page.eleBufFieldExtendButton(9).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '1234567890123456789012345678901234567890').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(10));
        }).then(function () {
            Page.eleBufFieldExtendButton(10).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(11));
        }).then(function () {
            Page.eleBufFieldExtendButton(11).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'Initial value'
    //
    it('Test field Buffer -> Initial value', function () {
        Page.delBufYes("Buffer0031").then(function () {
            Page.delBufYes("Buffer0032");
        }).then(function () {
            Page.addBuf("Buffer0031", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "FLOAT", "2", "8", "0", "bufField0003", "OPA", "3", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addBufField("bufField0004", "PDEC", "4", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0005", "ZDEC", "5", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0006", "STR", "6", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0007", "UBIN", "7", "4", "0");
        }).then(function () {
            Page._addBufField("bufField0008", "FLOAT", "8", "8", "0");
        }).then(function () {
            Page._addBufField("bufField0009", "OPA", "9", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0010", "TEXT", "10", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0011", "BIN", "11", "4", "0");
        }).then(function () {
            Page._addBufField("bufField0012", "PDEC", "12", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0013", "UPDEC", "13", "0", "0");
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
            Page._setExtensionBufField("1", false, false, false, "Space", "", true, "0", "a");
        }).then(function () {
            Page._setExtensionBufField("2", true, true, true, "Character", "X", true, "0", "Z");
        }).then(function () {
            Page._setExtensionBufField("3", true, true, false, "Hexadecimal", "ae", true, "0", "0");
        }).then(function () {
            Page._setExtensionBufField("4", false, true, false, "Space", "", true, "0", "9");
        }).then(function () {
            Page._setExtensionBufField("5", true, false, true, "Character", "X", true, "0", "!");
        }).then(function () {
            Page._setExtensionBufField("6", false, true, false, "Hexadecimal", "ae", true, "0", "@");
        }).then(function () {
            Page._setExtensionBufField("7", true, true, false, "Space", "", true, "0", "#");
        }).then(function () {
            Page._setExtensionBufField("8", true, false, true, "Character", "X", true, "0", "$");
        }).then(function () {
            Page._setExtensionBufField("9", false, true, true, "Hexadecimal", "ae", true, "0", "%");
        }).then(function () {
            Page._setExtensionBufField("10", false, true, false, "Space", "", true, "0", "&");
        }).then(function () {
            Page._setExtensionBufField("11", true, false, true, "Character", "X", true, "0", "*");
        }).then(function () {
            Page._setExtensionBufField("12", false, true, false, "Hexadecimal", "ae", true, "0", "?");
        }).then(function () {
            Page._setExtensionBufField("13", false, true, true, "Space", "", true, "0", "X");
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
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(1));
        }).then(function () {
            Page.eleBufFieldExtendButton(1).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'a').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(2));
        }).then(function () {
            Page.eleBufFieldExtendButton(2).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Z').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(3));
        }).then(function () {
            Page.eleBufFieldExtendButton(3).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(4));
        }).then(function () {
            Page.eleBufFieldExtendButton(4).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '9').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(5));
        }).then(function () {
            Page.eleBufFieldExtendButton(5).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '!').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(6));
        }).then(function () {
            Page.eleBufFieldExtendButton(6).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '@').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(7));
        }).then(function () {
            Page.eleBufFieldExtendButton(7).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '#').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(8));
        }).then(function () {
            Page.eleBufFieldExtendButton(8).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '$').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(9));
        }).then(function () {
            Page.eleBufFieldExtendButton(9).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '%').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(10));
        }).then(function () {
            Page.eleBufFieldExtendButton(10).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '&').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(11));
        }).then(function () {
            Page.eleBufFieldExtendButton(11).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '*').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(12));
        }).then(function () {
            Page.eleBufFieldExtendButton(12).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '?').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(13));
        }).then(function () {
            Page.eleBufFieldExtendButton(13).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'X').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueInput);
        }).then(function () {
            Page.eleBufFieldInitialValueInput.clear().sendKeys("12");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldInitialValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Zero or one character required").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueInput);
        }).then(function () {
            Page.eleBufFieldInitialValueInput.clear().sendKeys("abc");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldInitialValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Zero or one character required").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueInput);
        }).then(function () {
            Page.eleBufFieldInitialValueInput.clear();
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
            Page.addBuf("Buffer0032", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "FLOAT", "2", "8", "0", "bufField0003", "OPA", "3", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addBufField("bufField0004", "PDEC", "4", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0005", "ZDEC", "5", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0006", "STR", "6", "0", "0");
        }).then(function () {
            Page._addBufField("bufField0007", "UBIN", "7", "4", "0");
        }).then(function () {
            Page._addBufField("bufField0008", "FLOAT", "8", "8", "0");
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
            Page._setExtensionBufField("1", false, false, false, "Space", "", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("2", true, true, true, "Character", "X", false, "1", "a");
        }).then(function () {
            Page._setExtensionBufField("3", true, true, false, "Hexadecimal", "ae", false, "2", "Bc");
        }).then(function () {
            Page._setExtensionBufField("4", false, true, false, "Space", "", false, "10", "a2C4@#&890");
        }).then(function () {
            Page._setExtensionBufField("5", true, false, true, "Character", "X", false, "11", "!@#$%^&*><?");
        }).then(function () {
            Page._setExtensionBufField("6", false, true, false, "Hexadecimal", "ae", false, "0", "");
        }).then(function () {
            Page._setExtensionBufField("7", true, true, false, "Space", "", false, "6", "123456");
        }).then(function () {
            Page._setExtensionBufField("8", true, false, true, "Character", "X", false, "40", "1234567890123456789012345678901234567890");
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
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(1));
        }).then(function () {
            Page.eleBufFieldExtendButton(1).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(2));
        }).then(function () {
            Page.eleBufFieldExtendButton(2).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'a').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(3));
        }).then(function () {
            Page.eleBufFieldExtendButton(3).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Bc').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(4));
        }).then(function () {
            Page.eleBufFieldExtendButton(4).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '10').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'a2C4@#&890').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(5));
        }).then(function () {
            Page.eleBufFieldExtendButton(5).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '!@#$%^&*><?').to.be.true;
        }).then(function () {
            Page.eleBufDescInput.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(6));
        }).then(function () {
            Page.eleBufFieldExtendButton(6).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueInput);
        }).then(function () {
            Page.eleBufFieldInitialValueInput.clear().sendKeys("1");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldInitialValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Invalid Value.").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueInput);
        }).then(function () {
            Page.eleBufFieldInitialValueInput.clear().sendKeys("ab");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldInitialValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Invalid Value.").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueInput);
        }).then(function () {
            Page.eleBufFieldInitialValueInput.clear();
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
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(7));
        }).then(function () {
            Page.eleBufFieldExtendButton(7).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '123456').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueInput);
        }).then(function () {
            Page.eleBufFieldInitialValueInput.clear().sendKeys("12345");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldInitialValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Invalid Value.").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueInput);
        }).then(function () {
            Page.eleBufFieldInitialValueInput.clear().sendKeys("1234567");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldInitialValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Invalid Value.").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueInput);
        }).then(function () {
            Page.eleBufFieldInitialValueInput.clear().sendKeys("123456");
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
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(8));
        }).then(function () {
            Page.eleBufFieldExtendButton(8).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '1234567890123456789012345678901234567890').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueInput);
        }).then(function () {
            Page.eleBufFieldInitialValueInput.clear().sendKeys("123456789012345678901234567890123456789");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueValidateMsg);
        }).then(function () {
            return Page.eleBufFieldInitialValueValidateMsg.getText();
        }).then(function (message) {
            expect(message === "Invalid Value.").to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitialValueInput);
        }).then(function () {
            Page.eleBufFieldInitialValueInput.clear().sendKeys("aaaaaaaaaabbbbbbbbbbccccccccccdddddddddde");
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
            globalCommons.waitForClickable(Page.eleBufFieldExtendButton(8));
        }).then(function () {
            Page.eleBufFieldExtendButton(8).click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldInitializeEntireFieldCheck);
        }).then(function () {
            return Page.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('readonly');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueLengthSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            return Page.eleBufFieldInitialValueInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'aaaaaaaaaabbbbbbbbbbccccccccccdddddddddd').to.be.true;
        });
    });

    // Test field 'Buffer Details panel' -> 'The sorting criteria of fields'
    // Primary sorting criteria: Start Position
    // Secondary sorting criteria: Length
    // Third sorting criteria: Name
    it('Test Buffer -> The sorting criteria of fields', function () {
        Page.delBufYes("Buffer0033").then(function () {
            Page.addBuf("Buffer0033", "", "0", "444", "STR", "33", "666", "3", "ZZZ", "FLOAT", "22", "555", "8", "111", "TEXT", "33", "555", "7");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addBufField("#", "PDEC", "33", "666", "5");
        }).then(function () {
            Page._addBufField("zzz", "ZDEC", "22", "666", "6");
        }).then(function () {
            Page._addBufField("CCC", "STR", "33", "444", "2");
        }).then(function () {
            Page._addBufField("555", "UBIN", "11", "666", "1");
        }).then(function () {
            Page._addBufField("&", "FLOAT", "33", "666", "3");
        }).then(function () {
            Page._addBufField("DDD", "OPA", "33", "555", "6");
        }).then(function () {
            Page._addBufField("@", "TEXT", "33", "666", "0");
        }).then(function () {
            Page._addBufField("000", "BIN", "33", "666", "3");
        }).then(function () {
            Page._addBufField("YYY", "PDEC", "33", "666", "7");
        }).then(function () {
            Page._addBufField("333", "UPDEC", "11", "555", "1");
        }).then(function () {
            Page._addBufField("BBB", "UZDEC", "33", "666", "8");
        }).then(function () {
            Page._addBufField("TTT", "TEXT", "22", "444", "4");
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
            globalCommons.waitForElementPresent(Page.eleBufFieldName(1));
        }).then(function () {
            return Page.eleBufFieldName(1).getText();
        }).then(function (message) {
            expect(message === '555').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(2).getText();
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(3).getText();
        }).then(function (message) {
            expect(message === 'zzz').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(4).getText();
        }).then(function (message) {
            expect(message === 'ZZZ').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(5).getText();
        }).then(function (message) {
            expect(message === 'TTT').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(6).getText();
        }).then(function (message) {
            expect(message === '#').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(7).getText();
        }).then(function (message) {
            expect(message === '&').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(8).getText();
        }).then(function (message) {
            expect(message === '000').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(9).getText();
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(10).getText();
        }).then(function (message) {
            expect(message === '@').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(11).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'BBB').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(12).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'YYY').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(13).getAttribute("textContent");
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(14).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'DDD').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(15).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'CCC').to.be.true;
        });
    });

    // Test Buffer -> Add 600 fields
    //
    it('Test Buffer -> Add 600 fields', function () {
        Page.delBufYes("Buffer0034").then(function () {
            Page.addBuf("Buffer0034", "", "0", "bufField0001", "BIN", "0", "4", "0", "bufField0002", "BIN", "0", "4", "0", "bufField0003", "BIN", "0", "4", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addBufField2("bufField0004");
        }).then(function () {
            Page._addBufField2("bufField0005");
        }).then(function () {
            Page._addBufField2("bufField0006");
        }).then(function () {
            Page._addBufField2("bufField0007");
        }).then(function () {
            Page._addBufField2("bufField0008");
        }).then(function () {
            Page._addBufField2("bufField0009");
        }).then(function () {
            Page._addBufField2("bufField0010");
        }).then(function () {
            Page._addBufField2("bufField0011");
        }).then(function () {
            Page._addBufField2("bufField0012");
        }).then(function () {
            Page._addBufField2("bufField0013");
        }).then(function () {
            Page._addBufField2("bufField0014");
        }).then(function () {
            Page._addBufField2("bufField0015");
        }).then(function () {
            Page._addBufField2("bufField0016");
        }).then(function () {
            Page._addBufField2("bufField0017");
        }).then(function () {
            Page._addBufField2("bufField0018");
        }).then(function () {
            Page._addBufField2("bufField0019");
        }).then(function () {
            Page._addBufField2("bufField0020");
        }).then(function () {
            Page._addBufField2("bufField0021");
        }).then(function () {
            Page._addBufField2("bufField0022");
        }).then(function () {
            Page._addBufField2("bufField0023");
        }).then(function () {
            Page._addBufField2("bufField0024");
        }).then(function () {
            Page._addBufField2("bufField0025");
        }).then(function () {
            Page._addBufField2("bufField0026");
        }).then(function () {
            Page._addBufField2("bufField0027");
        }).then(function () {
            Page._addBufField2("bufField0028");
        }).then(function () {
            Page._addBufField2("bufField0029");
        }).then(function () {
            Page._addBufField2("bufField0030");
        }).then(function () {
            Page._addBufField2("bufField0031");
        }).then(function () {
            Page._addBufField2("bufField0032");
        }).then(function () {
            Page._addBufField2("bufField0033");
        }).then(function () {
            Page._addBufField2("bufField0034");
        }).then(function () {
            Page._addBufField2("bufField0035");
        }).then(function () {
            Page._addBufField2("bufField0036");
        }).then(function () {
            Page._addBufField2("bufField0037");
        }).then(function () {
            Page._addBufField2("bufField0038");
        }).then(function () {
            Page._addBufField2("bufField0039");
        }).then(function () {
            Page._addBufField2("bufField0040");
        }).then(function () {
            Page._addBufField2("bufField0041");
        }).then(function () {
            Page._addBufField2("bufField0042");
        }).then(function () {
            Page._addBufField2("bufField0043");
        }).then(function () {
            Page._addBufField2("bufField0044");
        }).then(function () {
            Page._addBufField2("bufField0045");
        }).then(function () {
            Page._addBufField2("bufField0046");
        }).then(function () {
            Page._addBufField2("bufField0047");
        }).then(function () {
            Page._addBufField2("bufField0048");
        }).then(function () {
            Page._addBufField2("bufField0049");
        }).then(function () {
            Page._addBufField2("bufField0050");
        }).then(function () {
            Page._addBufField2("bufField0051");
        }).then(function () {
            Page._addBufField2("bufField0052");
        }).then(function () {
            Page._addBufField2("bufField0053");
        }).then(function () {
            Page._addBufField2("bufField0054");
        }).then(function () {
            Page._addBufField2("bufField0055");
        }).then(function () {
            Page._addBufField2("bufField0056");
        }).then(function () {
            Page._addBufField2("bufField0057");
        }).then(function () {
            Page._addBufField2("bufField0058");
        }).then(function () {
            Page._addBufField2("bufField0059");
        }).then(function () {
            Page._addBufField2("bufField0060");
        }).then(function () {
            Page._addBufField2("bufField0061");
        }).then(function () {
            Page._addBufField2("bufField0062");
        }).then(function () {
            Page._addBufField2("bufField0063");
        }).then(function () {
            Page._addBufField2("bufField0064");
        }).then(function () {
            Page._addBufField2("bufField0065");
        }).then(function () {
            Page._addBufField2("bufField0066");
        }).then(function () {
            Page._addBufField2("bufField0067");
        }).then(function () {
            Page._addBufField2("bufField0068");
        }).then(function () {
            Page._addBufField2("bufField0069");
        }).then(function () {
            Page._addBufField2("bufField0070");
        }).then(function () {
            Page._addBufField2("bufField0071");
        }).then(function () {
            Page._addBufField2("bufField0072");
        }).then(function () {
            Page._addBufField2("bufField0073");
        }).then(function () {
            Page._addBufField2("bufField0074");
        }).then(function () {
            Page._addBufField2("bufField0075");
        }).then(function () {
            Page._addBufField2("bufField0076");
        }).then(function () {
            Page._addBufField2("bufField0077");
        }).then(function () {
            Page._addBufField2("bufField0078");
        }).then(function () {
            Page._addBufField2("bufField0079");
        }).then(function () {
            Page._addBufField2("bufField0080");
        }).then(function () {
            Page._addBufField2("bufField0081");
        }).then(function () {
            Page._addBufField2("bufField0082");
        }).then(function () {
            Page._addBufField2("bufField0083");
        }).then(function () {
            Page._addBufField2("bufField0084");
        }).then(function () {
            Page._addBufField2("bufField0085");
        }).then(function () {
            Page._addBufField2("bufField0086");
        }).then(function () {
            Page._addBufField2("bufField0087");
        }).then(function () {
            Page._addBufField2("bufField0088");
        }).then(function () {
            Page._addBufField2("bufField0089");
        }).then(function () {
            Page._addBufField2("bufField0090");
        }).then(function () {
            Page._addBufField2("bufField0091");
        }).then(function () {
            Page._addBufField2("bufField0092");
        }).then(function () {
            Page._addBufField2("bufField0093");
        }).then(function () {
            Page._addBufField2("bufField0094");
        }).then(function () {
            Page._addBufField2("bufField0095");
        }).then(function () {
            Page._addBufField2("bufField0096");
        }).then(function () {
            Page._addBufField2("bufField0097");
        }).then(function () {
            Page._addBufField2("bufField0098");
        }).then(function () {
            Page._addBufField2("bufField0099");
        }).then(function () {
            Page._addBufField2("bufField0100");
        }).then(function () {
            Page._addBufField2("bufField0101");
        }).then(function () {
            Page._addBufField2("bufField0102");
        }).then(function () {
            Page._addBufField2("bufField0103");
        }).then(function () {
            Page._addBufField2("bufField0104");
        }).then(function () {
            Page._addBufField2("bufField0105");
        }).then(function () {
            Page._addBufField2("bufField0106");
        }).then(function () {
            Page._addBufField2("bufField0107");
        }).then(function () {
            Page._addBufField2("bufField0108");
        }).then(function () {
            Page._addBufField2("bufField0109");
        }).then(function () {
            Page._addBufField2("bufField0110");
        }).then(function () {
            Page._addBufField2("bufField0111");
        }).then(function () {
            Page._addBufField2("bufField0112");
        }).then(function () {
            Page._addBufField2("bufField0113");
        }).then(function () {
            Page._addBufField2("bufField0114");
        }).then(function () {
            Page._addBufField2("bufField0115");
        }).then(function () {
            Page._addBufField2("bufField0116");
        }).then(function () {
            Page._addBufField2("bufField0117");
        }).then(function () {
            Page._addBufField2("bufField0118");
        }).then(function () {
            Page._addBufField2("bufField0119");
        }).then(function () {
            Page._addBufField2("bufField0120");
        }).then(function () {
            Page._addBufField2("bufField0121");
        }).then(function () {
            Page._addBufField2("bufField0122");
        }).then(function () {
            Page._addBufField2("bufField0123");
        }).then(function () {
            Page._addBufField2("bufField0124");
        }).then(function () {
            Page._addBufField2("bufField0125");
        }).then(function () {
            Page._addBufField2("bufField0126");
        }).then(function () {
            Page._addBufField2("bufField0127");
        }).then(function () {
            Page._addBufField2("bufField0128");
        }).then(function () {
            Page._addBufField2("bufField0129");
        }).then(function () {
            Page._addBufField2("bufField0130");
        }).then(function () {
            Page._addBufField2("bufField0131");
        }).then(function () {
            Page._addBufField2("bufField0132");
        }).then(function () {
            Page._addBufField2("bufField0133");
        }).then(function () {
            Page._addBufField2("bufField0134");
        }).then(function () {
            Page._addBufField2("bufField0135");
        }).then(function () {
            Page._addBufField2("bufField0136");
        }).then(function () {
            Page._addBufField2("bufField0137");
        }).then(function () {
            Page._addBufField2("bufField0138");
        }).then(function () {
            Page._addBufField2("bufField0139");
        }).then(function () {
            Page._addBufField2("bufField0140");
        }).then(function () {
            Page._addBufField2("bufField0141");
        }).then(function () {
            Page._addBufField2("bufField0142");
        }).then(function () {
            Page._addBufField2("bufField0143");
        }).then(function () {
            Page._addBufField2("bufField0144");
        }).then(function () {
            Page._addBufField2("bufField0145");
        }).then(function () {
            Page._addBufField2("bufField0146");
        }).then(function () {
            Page._addBufField2("bufField0147");
        }).then(function () {
            Page._addBufField2("bufField0148");
        }).then(function () {
            Page._addBufField2("bufField0149");
        }).then(function () {
            Page._addBufField2("bufField0150");
        }).then(function () {
            Page._addBufField2("bufField0151");
        }).then(function () {
            Page._addBufField2("bufField0152");
        }).then(function () {
            Page._addBufField2("bufField0153");
        }).then(function () {
            Page._addBufField2("bufField0154");
        }).then(function () {
            Page._addBufField2("bufField0155");
        }).then(function () {
            Page._addBufField2("bufField0156");
        }).then(function () {
            Page._addBufField2("bufField0157");
        }).then(function () {
            Page._addBufField2("bufField0158");
        }).then(function () {
            Page._addBufField2("bufField0159");
        }).then(function () {
            Page._addBufField2("bufField0160");
        }).then(function () {
            Page._addBufField2("bufField0161");
        }).then(function () {
            Page._addBufField2("bufField0162");
        }).then(function () {
            Page._addBufField2("bufField0163");
        }).then(function () {
            Page._addBufField2("bufField0164");
        }).then(function () {
            Page._addBufField2("bufField0165");
        }).then(function () {
            Page._addBufField2("bufField0166");
        }).then(function () {
            Page._addBufField2("bufField0167");
        }).then(function () {
            Page._addBufField2("bufField0168");
        }).then(function () {
            Page._addBufField2("bufField0169");
        }).then(function () {
            Page._addBufField2("bufField0170");
        }).then(function () {
            Page._addBufField2("bufField0171");
        }).then(function () {
            Page._addBufField2("bufField0172");
        }).then(function () {
            Page._addBufField2("bufField0173");
        }).then(function () {
            Page._addBufField2("bufField0174");
        }).then(function () {
            Page._addBufField2("bufField0175");
        }).then(function () {
            Page._addBufField2("bufField0176");
        }).then(function () {
            Page._addBufField2("bufField0177");
        }).then(function () {
            Page._addBufField2("bufField0178");
        }).then(function () {
            Page._addBufField2("bufField0179");
        }).then(function () {
            Page._addBufField2("bufField0180");
        }).then(function () {
            Page._addBufField2("bufField0181");
        }).then(function () {
            Page._addBufField2("bufField0182");
        }).then(function () {
            Page._addBufField2("bufField0183");
        }).then(function () {
            Page._addBufField2("bufField0184");
        }).then(function () {
            Page._addBufField2("bufField0185");
        }).then(function () {
            Page._addBufField2("bufField0186");
        }).then(function () {
            Page._addBufField2("bufField0187");
        }).then(function () {
            Page._addBufField2("bufField0188");
        }).then(function () {
            Page._addBufField2("bufField0189");
        }).then(function () {
            Page._addBufField2("bufField0190");
        }).then(function () {
            Page._addBufField2("bufField0191");
        }).then(function () {
            Page._addBufField2("bufField0192");
        }).then(function () {
            Page._addBufField2("bufField0193");
        }).then(function () {
            Page._addBufField2("bufField0194");
        }).then(function () {
            Page._addBufField2("bufField0195");
        }).then(function () {
            Page._addBufField2("bufField0196");
        }).then(function () {
            Page._addBufField2("bufField0197");
        }).then(function () {
            Page._addBufField2("bufField0198");
        }).then(function () {
            Page._addBufField2("bufField0199");
        }).then(function () {
            Page._addBufField2("bufField0200");
        }).then(function () {
            Page._addBufField2("bufField0201");
        }).then(function () {
            Page._addBufField2("bufField0202");
        }).then(function () {
            Page._addBufField2("bufField0203");
        }).then(function () {
            Page._addBufField2("bufField0204");
        }).then(function () {
            Page._addBufField2("bufField0205");
        }).then(function () {
            Page._addBufField2("bufField0206");
        }).then(function () {
            Page._addBufField2("bufField0207");
        }).then(function () {
            Page._addBufField2("bufField0208");
        }).then(function () {
            Page._addBufField2("bufField0209");
        }).then(function () {
            Page._addBufField2("bufField0210");
        }).then(function () {
            Page._addBufField2("bufField0211");
        }).then(function () {
            Page._addBufField2("bufField0212");
        }).then(function () {
            Page._addBufField2("bufField0213");
        }).then(function () {
            Page._addBufField2("bufField0214");
        }).then(function () {
            Page._addBufField2("bufField0215");
        }).then(function () {
            Page._addBufField2("bufField0216");
        }).then(function () {
            Page._addBufField2("bufField0217");
        }).then(function () {
            Page._addBufField2("bufField0218");
        }).then(function () {
            Page._addBufField2("bufField0219");
        }).then(function () {
            Page._addBufField2("bufField0220");
        }).then(function () {
            Page._addBufField2("bufField0221");
        }).then(function () {
            Page._addBufField2("bufField0222");
        }).then(function () {
            Page._addBufField2("bufField0223");
        }).then(function () {
            Page._addBufField2("bufField0224");
        }).then(function () {
            Page._addBufField2("bufField0225");
        }).then(function () {
            Page._addBufField2("bufField0226");
        }).then(function () {
            Page._addBufField2("bufField0227");
        }).then(function () {
            Page._addBufField2("bufField0228");
        }).then(function () {
            Page._addBufField2("bufField0229");
        }).then(function () {
            Page._addBufField2("bufField0230");
        }).then(function () {
            Page._addBufField2("bufField0231");
        }).then(function () {
            Page._addBufField2("bufField0232");
        }).then(function () {
            Page._addBufField2("bufField0233");
        }).then(function () {
            Page._addBufField2("bufField0234");
        }).then(function () {
            Page._addBufField2("bufField0235");
        }).then(function () {
            Page._addBufField2("bufField0236");
        }).then(function () {
            Page._addBufField2("bufField0237");
        }).then(function () {
            Page._addBufField2("bufField0238");
        }).then(function () {
            Page._addBufField2("bufField0239");
        }).then(function () {
            Page._addBufField2("bufField0240");
        }).then(function () {
            Page._addBufField2("bufField0241");
        }).then(function () {
            Page._addBufField2("bufField0242");
        }).then(function () {
            Page._addBufField2("bufField0243");
        }).then(function () {
            Page._addBufField2("bufField0244");
        }).then(function () {
            Page._addBufField2("bufField0245");
        }).then(function () {
            Page._addBufField2("bufField0246");
        }).then(function () {
            Page._addBufField2("bufField0247");
        }).then(function () {
            Page._addBufField2("bufField0248");
        }).then(function () {
            Page._addBufField2("bufField0249");
        }).then(function () {
            Page._addBufField2("bufField0250");
        }).then(function () {
            Page._addBufField2("bufField0251");
        }).then(function () {
            Page._addBufField2("bufField0252");
        }).then(function () {
            Page._addBufField2("bufField0253");
        }).then(function () {
            Page._addBufField2("bufField0254");
        }).then(function () {
            Page._addBufField2("bufField0255");
        }).then(function () {
            Page._addBufField2("bufField0256");
        }).then(function () {
            Page._addBufField2("bufField0257");
        }).then(function () {
            Page._addBufField2("bufField0258");
        }).then(function () {
            Page._addBufField2("bufField0259");
        }).then(function () {
            Page._addBufField2("bufField0260");
        }).then(function () {
            Page._addBufField2("bufField0261");
        }).then(function () {
            Page._addBufField2("bufField0262");
        }).then(function () {
            Page._addBufField2("bufField0263");
        }).then(function () {
            Page._addBufField2("bufField0264");
        }).then(function () {
            Page._addBufField2("bufField0265");
        }).then(function () {
            Page._addBufField2("bufField0266");
        }).then(function () {
            Page._addBufField2("bufField0267");
        }).then(function () {
            Page._addBufField2("bufField0268");
        }).then(function () {
            Page._addBufField2("bufField0269");
        }).then(function () {
            Page._addBufField2("bufField0270");
        }).then(function () {
            Page._addBufField2("bufField0271");
        }).then(function () {
            Page._addBufField2("bufField0272");
        }).then(function () {
            Page._addBufField2("bufField0273");
        }).then(function () {
            Page._addBufField2("bufField0274");
        }).then(function () {
            Page._addBufField2("bufField0275");
        }).then(function () {
            Page._addBufField2("bufField0276");
        }).then(function () {
            Page._addBufField2("bufField0277");
        }).then(function () {
            Page._addBufField2("bufField0278");
        }).then(function () {
            Page._addBufField2("bufField0279");
        }).then(function () {
            Page._addBufField2("bufField0280");
        }).then(function () {
            Page._addBufField2("bufField0281");
        }).then(function () {
            Page._addBufField2("bufField0282");
        }).then(function () {
            Page._addBufField2("bufField0283");
        }).then(function () {
            Page._addBufField2("bufField0284");
        }).then(function () {
            Page._addBufField2("bufField0285");
        }).then(function () {
            Page._addBufField2("bufField0286");
        }).then(function () {
            Page._addBufField2("bufField0287");
        }).then(function () {
            Page._addBufField2("bufField0288");
        }).then(function () {
            Page._addBufField2("bufField0289");
        }).then(function () {
            Page._addBufField2("bufField0290");
        }).then(function () {
            Page._addBufField2("bufField0291");
        }).then(function () {
            Page._addBufField2("bufField0292");
        }).then(function () {
            Page._addBufField2("bufField0293");
        }).then(function () {
            Page._addBufField2("bufField0294");
        }).then(function () {
            Page._addBufField2("bufField0295");
        }).then(function () {
            Page._addBufField2("bufField0296");
        }).then(function () {
            Page._addBufField2("bufField0297");
        }).then(function () {
            Page._addBufField2("bufField0298");
        }).then(function () {
            Page._addBufField2("bufField0299");
        }).then(function () {
            Page._addBufField2("bufField0300");
        }).then(function () {
            Page._addBufField2("bufField0301");
        }).then(function () {
            Page._addBufField2("bufField0302");
        }).then(function () {
            Page._addBufField2("bufField0303");
        }).then(function () {
            Page._addBufField2("bufField0304");
        }).then(function () {
            Page._addBufField2("bufField0305");
        }).then(function () {
            Page._addBufField2("bufField0306");
        }).then(function () {
            Page._addBufField2("bufField0307");
        }).then(function () {
            Page._addBufField2("bufField0308");
        }).then(function () {
            Page._addBufField2("bufField0309");
        }).then(function () {
            Page._addBufField2("bufField0310");
        }).then(function () {
            Page._addBufField2("bufField0311");
        }).then(function () {
            Page._addBufField2("bufField0312");
        }).then(function () {
            Page._addBufField2("bufField0313");
        }).then(function () {
            Page._addBufField2("bufField0314");
        }).then(function () {
            Page._addBufField2("bufField0315");
        }).then(function () {
            Page._addBufField2("bufField0316");
        }).then(function () {
            Page._addBufField2("bufField0317");
        }).then(function () {
            Page._addBufField2("bufField0318");
        }).then(function () {
            Page._addBufField2("bufField0319");
        }).then(function () {
            Page._addBufField2("bufField0320");
        }).then(function () {
            Page._addBufField2("bufField0321");
        }).then(function () {
            Page._addBufField2("bufField0322");
        }).then(function () {
            Page._addBufField2("bufField0323");
        }).then(function () {
            Page._addBufField2("bufField0324");
        }).then(function () {
            Page._addBufField2("bufField0325");
        }).then(function () {
            Page._addBufField2("bufField0326");
        }).then(function () {
            Page._addBufField2("bufField0327");
        }).then(function () {
            Page._addBufField2("bufField0328");
        }).then(function () {
            Page._addBufField2("bufField0329");
        }).then(function () {
            Page._addBufField2("bufField0330");
        }).then(function () {
            Page._addBufField2("bufField0331");
        }).then(function () {
            Page._addBufField2("bufField0332");
        }).then(function () {
            Page._addBufField2("bufField0333");
        }).then(function () {
            Page._addBufField2("bufField0334");
        }).then(function () {
            Page._addBufField2("bufField0335");
        }).then(function () {
            Page._addBufField2("bufField0336");
        }).then(function () {
            Page._addBufField2("bufField0337");
        }).then(function () {
            Page._addBufField2("bufField0338");
        }).then(function () {
            Page._addBufField2("bufField0339");
        }).then(function () {
            Page._addBufField2("bufField0340");
        }).then(function () {
            Page._addBufField2("bufField0341");
        }).then(function () {
            Page._addBufField2("bufField0342");
        }).then(function () {
            Page._addBufField2("bufField0343");
        }).then(function () {
            Page._addBufField2("bufField0344");
        }).then(function () {
            Page._addBufField2("bufField0345");
        }).then(function () {
            Page._addBufField2("bufField0346");
        }).then(function () {
            Page._addBufField2("bufField0347");
        }).then(function () {
            Page._addBufField2("bufField0348");
        }).then(function () {
            Page._addBufField2("bufField0349");
        }).then(function () {
            Page._addBufField2("bufField0350");
        }).then(function () {
            Page._addBufField2("bufField0351");
        }).then(function () {
            Page._addBufField2("bufField0352");
        }).then(function () {
            Page._addBufField2("bufField0353");
        }).then(function () {
            Page._addBufField2("bufField0354");
        }).then(function () {
            Page._addBufField2("bufField0355");
        }).then(function () {
            Page._addBufField2("bufField0356");
        }).then(function () {
            Page._addBufField2("bufField0357");
        }).then(function () {
            Page._addBufField2("bufField0358");
        }).then(function () {
            Page._addBufField2("bufField0359");
        }).then(function () {
            Page._addBufField2("bufField0360");
        }).then(function () {
            Page._addBufField2("bufField0361");
        }).then(function () {
            Page._addBufField2("bufField0362");
        }).then(function () {
            Page._addBufField2("bufField0363");
        }).then(function () {
            Page._addBufField2("bufField0364");
        }).then(function () {
            Page._addBufField2("bufField0365");
        }).then(function () {
            Page._addBufField2("bufField0366");
        }).then(function () {
            Page._addBufField2("bufField0367");
        }).then(function () {
            Page._addBufField2("bufField0368");
        }).then(function () {
            Page._addBufField2("bufField0369");
        }).then(function () {
            Page._addBufField2("bufField0370");
        }).then(function () {
            Page._addBufField2("bufField0371");
        }).then(function () {
            Page._addBufField2("bufField0372");
        }).then(function () {
            Page._addBufField2("bufField0373");
        }).then(function () {
            Page._addBufField2("bufField0374");
        }).then(function () {
            Page._addBufField2("bufField0375");
        }).then(function () {
            Page._addBufField2("bufField0376");
        }).then(function () {
            Page._addBufField2("bufField0377");
        }).then(function () {
            Page._addBufField2("bufField0378");
        }).then(function () {
            Page._addBufField2("bufField0379");
        }).then(function () {
            Page._addBufField2("bufField0380");
        }).then(function () {
            Page._addBufField2("bufField0381");
        }).then(function () {
            Page._addBufField2("bufField0382");
        }).then(function () {
            Page._addBufField2("bufField0383");
        }).then(function () {
            Page._addBufField2("bufField0384");
        }).then(function () {
            Page._addBufField2("bufField0385");
        }).then(function () {
            Page._addBufField2("bufField0386");
        }).then(function () {
            Page._addBufField2("bufField0387");
        }).then(function () {
            Page._addBufField2("bufField0388");
        }).then(function () {
            Page._addBufField2("bufField0389");
        }).then(function () {
            Page._addBufField2("bufField0390");
        }).then(function () {
            Page._addBufField2("bufField0391");
        }).then(function () {
            Page._addBufField2("bufField0392");
        }).then(function () {
            Page._addBufField2("bufField0393");
        }).then(function () {
            Page._addBufField2("bufField0394");
        }).then(function () {
            Page._addBufField2("bufField0395");
        }).then(function () {
            Page._addBufField2("bufField0396");
        }).then(function () {
            Page._addBufField2("bufField0397");
        }).then(function () {
            Page._addBufField2("bufField0398");
        }).then(function () {
            Page._addBufField2("bufField0399");
        }).then(function () {
            Page._addBufField2("bufField0400");
        }).then(function () {
            Page._addBufField2("bufField0401");
        }).then(function () {
            Page._addBufField2("bufField0402");
        }).then(function () {
            Page._addBufField2("bufField0403");
        }).then(function () {
            Page._addBufField2("bufField0404");
        }).then(function () {
            Page._addBufField2("bufField0405");
        }).then(function () {
            Page._addBufField2("bufField0406");
        }).then(function () {
            Page._addBufField2("bufField0407");
        }).then(function () {
            Page._addBufField2("bufField0408");
        }).then(function () {
            Page._addBufField2("bufField0409");
        }).then(function () {
            Page._addBufField2("bufField0410");
        }).then(function () {
            Page._addBufField2("bufField0411");
        }).then(function () {
            Page._addBufField2("bufField0412");
        }).then(function () {
            Page._addBufField2("bufField0413");
        }).then(function () {
            Page._addBufField2("bufField0414");
        }).then(function () {
            Page._addBufField2("bufField0415");
        }).then(function () {
            Page._addBufField2("bufField0416");
        }).then(function () {
            Page._addBufField2("bufField0417");
        }).then(function () {
            Page._addBufField2("bufField0418");
        }).then(function () {
            Page._addBufField2("bufField0419");
        }).then(function () {
            Page._addBufField2("bufField0420");
        }).then(function () {
            Page._addBufField2("bufField0421");
        }).then(function () {
            Page._addBufField2("bufField0422");
        }).then(function () {
            Page._addBufField2("bufField0423");
        }).then(function () {
            Page._addBufField2("bufField0424");
        }).then(function () {
            Page._addBufField2("bufField0425");
        }).then(function () {
            Page._addBufField2("bufField0426");
        }).then(function () {
            Page._addBufField2("bufField0427");
        }).then(function () {
            Page._addBufField2("bufField0428");
        }).then(function () {
            Page._addBufField2("bufField0429");
        }).then(function () {
            Page._addBufField2("bufField0430");
        }).then(function () {
            Page._addBufField2("bufField0431");
        }).then(function () {
            Page._addBufField2("bufField0432");
        }).then(function () {
            Page._addBufField2("bufField0433");
        }).then(function () {
            Page._addBufField2("bufField0434");
        }).then(function () {
            Page._addBufField2("bufField0435");
        }).then(function () {
            Page._addBufField2("bufField0436");
        }).then(function () {
            Page._addBufField2("bufField0437");
        }).then(function () {
            Page._addBufField2("bufField0438");
        }).then(function () {
            Page._addBufField2("bufField0439");
        }).then(function () {
            Page._addBufField2("bufField0440");
        }).then(function () {
            Page._addBufField2("bufField0441");
        }).then(function () {
            Page._addBufField2("bufField0442");
        }).then(function () {
            Page._addBufField2("bufField0443");
        }).then(function () {
            Page._addBufField2("bufField0444");
        }).then(function () {
            Page._addBufField2("bufField0445");
        }).then(function () {
            Page._addBufField2("bufField0446");
        }).then(function () {
            Page._addBufField2("bufField0447");
        }).then(function () {
            Page._addBufField2("bufField0448");
        }).then(function () {
            Page._addBufField2("bufField0449");
        }).then(function () {
            Page._addBufField2("bufField0450");
        }).then(function () {
            Page._addBufField2("bufField0451");
        }).then(function () {
            Page._addBufField2("bufField0452");
        }).then(function () {
            Page._addBufField2("bufField0453");
        }).then(function () {
            Page._addBufField2("bufField0454");
        }).then(function () {
            Page._addBufField2("bufField0455");
        }).then(function () {
            Page._addBufField2("bufField0456");
        }).then(function () {
            Page._addBufField2("bufField0457");
        }).then(function () {
            Page._addBufField2("bufField0458");
        }).then(function () {
            Page._addBufField2("bufField0459");
        }).then(function () {
            Page._addBufField2("bufField0460");
        }).then(function () {
            Page._addBufField2("bufField0461");
        }).then(function () {
            Page._addBufField2("bufField0462");
        }).then(function () {
            Page._addBufField2("bufField0463");
        }).then(function () {
            Page._addBufField2("bufField0464");
        }).then(function () {
            Page._addBufField2("bufField0465");
        }).then(function () {
            Page._addBufField2("bufField0466");
        }).then(function () {
            Page._addBufField2("bufField0467");
        }).then(function () {
            Page._addBufField2("bufField0468");
        }).then(function () {
            Page._addBufField2("bufField0469");
        }).then(function () {
            Page._addBufField2("bufField0470");
        }).then(function () {
            Page._addBufField2("bufField0471");
        }).then(function () {
            Page._addBufField2("bufField0472");
        }).then(function () {
            Page._addBufField2("bufField0473");
        }).then(function () {
            Page._addBufField2("bufField0474");
        }).then(function () {
            Page._addBufField2("bufField0475");
        }).then(function () {
            Page._addBufField2("bufField0476");
        }).then(function () {
            Page._addBufField2("bufField0477");
        }).then(function () {
            Page._addBufField2("bufField0478");
        }).then(function () {
            Page._addBufField2("bufField0479");
        }).then(function () {
            Page._addBufField2("bufField0480");
        }).then(function () {
            Page._addBufField2("bufField0481");
        }).then(function () {
            Page._addBufField2("bufField0482");
        }).then(function () {
            Page._addBufField2("bufField0483");
        }).then(function () {
            Page._addBufField2("bufField0484");
        }).then(function () {
            Page._addBufField2("bufField0485");
        }).then(function () {
            Page._addBufField2("bufField0486");
        }).then(function () {
            Page._addBufField2("bufField0487");
        }).then(function () {
            Page._addBufField2("bufField0488");
        }).then(function () {
            Page._addBufField2("bufField0489");
        }).then(function () {
            Page._addBufField2("bufField0490");
        }).then(function () {
            Page._addBufField2("bufField0491");
        }).then(function () {
            Page._addBufField2("bufField0492");
        }).then(function () {
            Page._addBufField2("bufField0493");
        }).then(function () {
            Page._addBufField2("bufField0494");
        }).then(function () {
            Page._addBufField2("bufField0495");
        }).then(function () {
            Page._addBufField2("bufField0496");
        }).then(function () {
            Page._addBufField2("bufField0497");
        }).then(function () {
            Page._addBufField2("bufField0498");
        }).then(function () {
            Page._addBufField2("bufField0499");
        }).then(function () {
            Page._addBufField2("bufField0500");
        }).then(function () {
            Page._addBufField2("bufField0501");
        }).then(function () {
            Page._addBufField2("bufField0502");
        }).then(function () {
            Page._addBufField2("bufField0503");
        }).then(function () {
            Page._addBufField2("bufField0504");
        }).then(function () {
            Page._addBufField2("bufField0505");
        }).then(function () {
            Page._addBufField2("bufField0506");
        }).then(function () {
            Page._addBufField2("bufField0507");
        }).then(function () {
            Page._addBufField2("bufField0508");
        }).then(function () {
            Page._addBufField2("bufField0509");
        }).then(function () {
            Page._addBufField2("bufField0510");
        }).then(function () {
            Page._addBufField2("bufField0511");
        }).then(function () {
            Page._addBufField2("bufField0512");
        }).then(function () {
            Page._addBufField2("bufField0513");
        }).then(function () {
            Page._addBufField2("bufField0514");
        }).then(function () {
            Page._addBufField2("bufField0515");
        }).then(function () {
            Page._addBufField2("bufField0516");
        }).then(function () {
            Page._addBufField2("bufField0517");
        }).then(function () {
            Page._addBufField2("bufField0518");
        }).then(function () {
            Page._addBufField2("bufField0519");
        }).then(function () {
            Page._addBufField2("bufField0520");
        }).then(function () {
            Page._addBufField2("bufField0521");
        }).then(function () {
            Page._addBufField2("bufField0522");
        }).then(function () {
            Page._addBufField2("bufField0523");
        }).then(function () {
            Page._addBufField2("bufField0524");
        }).then(function () {
            Page._addBufField2("bufField0525");
        }).then(function () {
            Page._addBufField2("bufField0526");
        }).then(function () {
            Page._addBufField2("bufField0527");
        }).then(function () {
            Page._addBufField2("bufField0528");
        }).then(function () {
            Page._addBufField2("bufField0529");
        }).then(function () {
            Page._addBufField2("bufField0530");
        }).then(function () {
            Page._addBufField2("bufField0531");
        }).then(function () {
            Page._addBufField2("bufField0532");
        }).then(function () {
            Page._addBufField2("bufField0533");
        }).then(function () {
            Page._addBufField2("bufField0534");
        }).then(function () {
            Page._addBufField2("bufField0535");
        }).then(function () {
            Page._addBufField2("bufField0536");
        }).then(function () {
            Page._addBufField2("bufField0537");
        }).then(function () {
            Page._addBufField2("bufField0538");
        }).then(function () {
            Page._addBufField2("bufField0539");
        }).then(function () {
            Page._addBufField2("bufField0540");
        }).then(function () {
            Page._addBufField2("bufField0541");
        }).then(function () {
            Page._addBufField2("bufField0542");
        }).then(function () {
            Page._addBufField2("bufField0543");
        }).then(function () {
            Page._addBufField2("bufField0544");
        }).then(function () {
            Page._addBufField2("bufField0545");
        }).then(function () {
            Page._addBufField2("bufField0546");
        }).then(function () {
            Page._addBufField2("bufField0547");
        }).then(function () {
            Page._addBufField2("bufField0548");
        }).then(function () {
            Page._addBufField2("bufField0549");
        }).then(function () {
            Page._addBufField2("bufField0550");
        }).then(function () {
            Page._addBufField2("bufField0551");
        }).then(function () {
            Page._addBufField2("bufField0552");
        }).then(function () {
            Page._addBufField2("bufField0553");
        }).then(function () {
            Page._addBufField2("bufField0554");
        }).then(function () {
            Page._addBufField2("bufField0555");
        }).then(function () {
            Page._addBufField2("bufField0556");
        }).then(function () {
            Page._addBufField2("bufField0557");
        }).then(function () {
            Page._addBufField2("bufField0558");
        }).then(function () {
            Page._addBufField2("bufField0559");
        }).then(function () {
            Page._addBufField2("bufField0560");
        }).then(function () {
            Page._addBufField2("bufField0561");
        }).then(function () {
            Page._addBufField2("bufField0562");
        }).then(function () {
            Page._addBufField2("bufField0563");
        }).then(function () {
            Page._addBufField2("bufField0564");
        }).then(function () {
            Page._addBufField2("bufField0565");
        }).then(function () {
            Page._addBufField2("bufField0566");
        }).then(function () {
            Page._addBufField2("bufField0567");
        }).then(function () {
            Page._addBufField2("bufField0568");
        }).then(function () {
            Page._addBufField2("bufField0569");
        }).then(function () {
            Page._addBufField2("bufField0570");
        }).then(function () {
            Page._addBufField2("bufField0571");
        }).then(function () {
            Page._addBufField2("bufField0572");
        }).then(function () {
            Page._addBufField2("bufField0573");
        }).then(function () {
            Page._addBufField2("bufField0574");
        }).then(function () {
            Page._addBufField2("bufField0575");
        }).then(function () {
            Page._addBufField2("bufField0576");
        }).then(function () {
            Page._addBufField2("bufField0577");
        }).then(function () {
            Page._addBufField2("bufField0578");
        }).then(function () {
            Page._addBufField2("bufField0579");
        }).then(function () {
            Page._addBufField2("bufField0580");
        }).then(function () {
            Page._addBufField2("bufField0581");
        }).then(function () {
            Page._addBufField2("bufField0582");
        }).then(function () {
            Page._addBufField2("bufField0583");
        }).then(function () {
            Page._addBufField2("bufField0584");
        }).then(function () {
            Page._addBufField2("bufField0585");
        }).then(function () {
            Page._addBufField2("bufField0586");
        }).then(function () {
            Page._addBufField2("bufField0587");
        }).then(function () {
            Page._addBufField2("bufField0588");
        }).then(function () {
            Page._addBufField2("bufField0589");
        }).then(function () {
            Page._addBufField2("bufField0590");
        }).then(function () {
            Page._addBufField2("bufField0591");
        }).then(function () {
            Page._addBufField2("bufField0592");
        }).then(function () {
            Page._addBufField2("bufField0593");
        }).then(function () {
            Page._addBufField2("bufField0594");
        }).then(function () {
            Page._addBufField2("bufField0595");
        }).then(function () {
            Page._addBufField2("bufField0596");
        }).then(function () {
            Page._addBufField2("bufField0597");
        }).then(function () {
            Page._addBufField2("bufField0598");
        }).then(function () {
            Page._addBufField2("bufField0599");
        }).then(function () {
            Page._addBufField2("bufField0600");
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
            globalCommons.waitForElementPresent(Page.eleBufFieldName(1));
        }).then(function () {
            return Page.eleBufFieldName(1).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'bufField0001').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(50).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'bufField0050').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(100).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'bufField0100').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(200).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'bufField0200').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(300).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'bufField0300').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(400).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'bufField0400').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(500).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'bufField0500').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(600).getAttribute("textContent");
        }).then(function (message) {
            expect(message === 'bufField0600').to.be.true;
        });
    });

    // Test Buffer -> Delete several fields
    //
    it('Test Buffer -> Delete several fields', function () {
        Page.delBufYes("Buffer0023").then(function () {
            Page.addBuf("Buffer0023", "", "0", "bufField0001", "STR", "0", "0", "0", "bufField0002", "STR", "0", "0", "0", "bufField0003", "STR", "0", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addBufField2("bufField0004");
        }).then(function () {
            Page._addBufField2("bufField0005");
        }).then(function () {
            Page._addBufField2("bufField0006");
        }).then(function () {
            Page._addBufField2("bufField0007");
        }).then(function () {
            Page._addBufField2("bufField0008");
        }).then(function () {
            Page._addBufField2("bufField0009");
        }).then(function () {
            Page._addBufField2("bufField0010");
        }).then(function () {
            Page._addBufField2("bufField0011");
        }).then(function () {
            Page._addBufField2("bufField0012");
        }).then(function () {
            Page._addBufField2("bufField0013");
        }).then(function () {
            Page._addBufField2("bufField0014");
        }).then(function () {
            Page._addBufField2("bufField0015");
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
            Page._delBufField("bufField0011");
        }).then(function () {
            Page._delBufField("bufField0015");
        }).then(function () {
            Page._delBufField("bufField0003");
        }).then(function () {
            Page._delBufField("bufField0013");
        }).then(function () {
            Page._delBufField("bufField0001");
        }).then(function () {
            Page._delBufField("bufField0007");
        }).then(function () {
            Page._delBufField("bufField0005");
        }).then(function () {
            Page._delBufField("bufField0009");
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
            globalCommons.waitForElementPresent(Page.eleBufFieldName(1));
        }).then(function () {
            return Page.eleBufFieldName(1).getText();
        }).then(function (message) {
            expect(message === 'bufField0004').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(2).getText();
        }).then(function (message) {
            expect(message === 'bufField0006').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(3).getText();
        }).then(function (message) {
            expect(message === 'bufField0008').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(4).getText();
        }).then(function (message) {
            expect(message === 'bufField0010').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(5).getText();
        }).then(function (message) {
            expect(message === 'bufField0012').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(6).getText();
        }).then(function (message) {
            expect(message === 'bufField0014').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(7).getText();
        }).then(function (message) {
            expect(message === 'bufField0002').to.be.true;
        });
    });

    // Test Buffer -> Replicate several fields
    //
    it('Test Buffer -> Replicate several fields', function () {
        Page.delBufYes("Buffer0035").then(function () {
            Page.addBuf("Buffer0035", "", "0", "bufField0001", "STR", "11", "1", "0", "bufField0002", "TEXT", "22", "2", "1", "bufField0003", "BIN", "33", "3", "2");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page._addBufField("bufField0004", "FLOAT", "44", "4", "3");
        }).then(function () {
            Page._addBufField("bufField0005", "OPA", "55", "5", "4");
        }).then(function () {
            Page._addBufField("bufField0006", "PDEC", "66", "6", "5");
        }).then(function () {
            Page._addBufField("bufField0007", "UZDEC", "77", "7", "6");
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
            Page._replicateBufField("bufField0006", "a_bufField0006");
        }).then(function () {
            Page._replicateBufField("bufField0003", "b_bufField0003");
        }).then(function () {
            Page._replicateBufField("bufField0007", "c_bufField0007");
        }).then(function () {
            Page._replicateBufField("bufField0002", "m_bufField0002");
        }).then(function () {
            Page._replicateBufField("bufField0001", "x_bufField0001");
        }).then(function () {
            Page._replicateBufField("bufField0005", "y_bufField0005");
        }).then(function () {
            Page._replicateBufField("bufField0004", "z_bufField0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldNameSelected("bufField0002"));
        }).then(function () {
            Page.eleBufFieldNameSelected("bufField0002").click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleBufFieldReplicateButton);
        }).then(function () {
            Page.eleBufFieldReplicateButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleBufFieldNameInput);
        }).then(function () {
            return Page.eleBufFieldNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'New_null').to.be.true;
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
            globalCommons.waitForElementPresent(Page.eleBufFieldName(1));
        }).then(function () {
            return Page.eleBufFieldName(2).getText();
        }).then(function (message) {
            expect(message === 'x_bufField0001').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(4).getText();
        }).then(function (message) {
            expect(message === 'm_bufField0002').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(7).getText();
        }).then(function (message) {
            expect(message === 'b_bufField0003').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(9).getText();
        }).then(function (message) {
            expect(message === 'z_bufField0004').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(11).getText();
        }).then(function (message) {
            expect(message === 'y_bufField0005').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(12).getText();
        }).then(function (message) {
            expect(message === 'a_bufField0006').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(15).getText();
        }).then(function (message) {
            expect(message === 'c_bufField0007').to.be.true;
        }).then(function () {
            return Page.eleBufFieldName(5).getText();
        }).then(function (message) {
            expect(message === 'New_null').to.be.true;
        }).then(function () {
            return Page.eleBufFieldType(5).getText();
        }).then(function (message) {
            expect(message === 'TEXT').to.be.true;
        }).then(function () {
            return Page.eleBufFieldStartPosition(5).getText();
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleBufFieldLength(5).getText();
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleBufFieldDec(5).getText();
        }).then(function (message) {
            expect(message === '1').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});