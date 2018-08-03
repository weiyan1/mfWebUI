/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.16 Define Interfaces TCP Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a TCP Interface.
    //
    it('Should add a TCP Interface successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delIntfTcpYes("IntfTCP0001");
        }).then(function () {
            Page.addIntfTcp("IntfTCP0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a TCP Interface, then replicate it.
    //
    it('Should add a TCP Interface, then replicate it successfully', function () {
        Page.delIntfTcpYes("IntfTCP0002-copy").then(function () {
            Page.delIntfTcpYes("IntfTCP0002");
        }).then(function () {
            Page.addIntfTcp("IntfTCP0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateIntfTcp("IntfTCP0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a TCP Interface successfully, then update it.
    //
    it('Should add a TCP Interface, then update it successfully', function () {
        Page.delIntfTcpYes("IntfTCP0003").then(function () {
            Page.addIntfTcp("IntfTCP0003", "abcdefg", "INTFID01", "AbCdEfG:1111", false, "AAAAAAAA", "1", "3", "5", "77777", "11", false, "333", "53", "55", "1111", "BBBBBBBB", "CCC", "DDD", "EEE", false, "FFF", "33");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateIntfTcp("IntfTCP0003", "hijklmn", "INTFID02", "HiJkLmN:2222", true, "HHHHHHHH", "2", "4", "6", "88888", "22", true, "444", "64", "66", "2222", "IIIIIIII", "JJJ", "KKK", "LLL", true, "MMM", "44");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfTCP0003').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:2222').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHHHHHHH').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '88888').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpKeepAliveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '64').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostLogFileDdnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IIIIIIII').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJJ').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'KKK').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LLL').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpClientAuthCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfTcpGskFileNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MMM').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        });
    });

    // Add a TCP Interface, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a TCP Interface, cancel the changes, then confirm the cancel operation', function () {
        Page.delIntfTcpYes("IntfTCP0004").then(function () {
            Page.addIntfTcp("IntfTCP0004", "abcdefg", "INTFID01", "AbCdEfG:1111", false, "AAAAAAAA", "1", "3", "5", "77777", "11", false, "333", "53", "55", "1111", "BBBBBBBB", "CCC", "DDD", "EEE", false, "FFF", "33");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfTcpYes("IntfTCP0004", "hijklmn", "INTFID02", "HiJkLmN:2222", true, "HHHHHHHH", "2", "4", "6", "88888", "22", true, "444", "64", "66", "2222", "IIIIIIII", "JJJ", "KKK", "LLL", true, "MMM", "44");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsTcpLeftmenu);
        }).then(function () {
            Page.eleIntfsTcpLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfTCP0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfTcpNameInput);
        }).then(function () {
            return Page.eleIntfTcpNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfTCP0004').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1111').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAAAA').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '77777').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpKeepAliveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '53').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostLogFileDdnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBBBBBBB').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CCC').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'DDD').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EEE').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpClientAuthCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfTcpGskFileNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'FFF').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        });
    });

    // Add a TCP Interface, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a TCP Interface, cancel the changes, then discard the cancel operation', function () {
        Page.delIntfTcpYes("IntfTCP0005").then(function () {
            Page.addIntfTcp("IntfTCP0005", "abcdefg", "INTFID01", "AbCdEfG:1111", false, "AAAAAAAA", "1", "3", "5", "77777", "11", false, "333", "53", "55", "1111", "BBBBBBBB", "CCC", "DDD", "EEE", false, "FFF", "33");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfTcpNo("IntfTCP0005", "hijklmn", "INTFID02", "HiJkLmN:2222", true, "HHHHHHHH", "2", "4", "6", "88888", "22", true, "444", "64", "66", "2222", "IIIIIIII", "JJJ", "KKK", "LLL", true, "MMM", "44");
        }).then(function () {
            return Page.eleIntfTcpNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfTCP0005').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:2222').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHHHHHHH').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '88888').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpKeepAliveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '64').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostLogFileDdnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IIIIIIII').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJJ').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'KKK').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LLL').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpClientAuthCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfTcpGskFileNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MMM').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        });
    });

    // Add a TCP Interface, make some changes, then reset it.
    //
    it('Should add a TCP Interface, make some changes, then reset it', function () {
        Page.delIntfTcpYes("IntfTCP0006").then(function () {
            Page.addIntfTcp("IntfTCP0006", "abcdefg", "INTFID01", "AbCdEfG:1111", false, "AAAAAAAA", "1", "3", "5", "77777", "11", false, "333", "53", "55", "1111", "BBBBBBBB", "CCC", "DDD", "EEE", false, "FFF", "33");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetIntfTcp("IntfTCP0006", "hijklmn", "INTFID02", "HiJkLmN:2222", true, "HHHHHHHH", "2", "4", "6", "88888", "22", true, "444", "64", "66", "2222", "IIIIIIII", "JJJ", "KKK", "LLL", true, "MMM", "44");
        }).then(function () {
            return Page.eleIntfTcpNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfTCP0006').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1111').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAAAA').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '77777').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpKeepAliveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '53').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostLogFileDdnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBBBBBBB').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CCC').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'DDD').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EEE').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpClientAuthCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfTcpGskFileNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'FFF').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        });
    });

    // Add a TCP Interface, then add a TCP Interface with the same name, then confirm the overwrite operation.
    //
    it('Should add a TCP Interface to overwrite a TCP Interface, then confirm the overwrite operation', function () {
        Page.delIntfTcpYes("IntfTCP0007").then(function () {
            Page.addIntfTcp("IntfTCP0007", "abcdefg", "INTFID01", "AbCdEfG:1111", false, "AAAAAAAA", "1", "3", "5", "77777", "11", false, "333", "53", "55", "1111", "BBBBBBBB", "CCC", "DDD", "EEE", false, "FFF", "33");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfTcp("IntfTCP0007", "hijklmn", "INTFID02", "HiJkLmN:2222", true, "HHHHHHHH", "2", "4", "6", "88888", "22", true, "444", "64", "66", "2222", "IIIIIIII", "JJJ", "KKK", "LLL", true, "MMM", "44");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleIntfTcpNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfTCP0007').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:2222').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHHHHHHH').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '88888').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpKeepAliveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '64').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostLogFileDdnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IIIIIIII').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJJ').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'KKK').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LLL').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpClientAuthCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfTcpGskFileNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MMM').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        });
    });

    // Add a TCP Interface, then add a TCP Interface with the same name, then discard the overwrite operation.
    //
    it('Should add a TCP Interface to overwrite a TCP Interface, then discard the overwrite operation', function () {
        Page.delIntfTcpYes("IntfTCP0008").then(function () {
            Page.addIntfTcp("IntfTCP0008", "abcdefg", "INTFID01", "AbCdEfG:1111", false, "AAAAAAAA", "1", "3", "5", "77777", "11", false, "333", "53", "55", "1111", "BBBBBBBB", "CCC", "DDD", "EEE", false, "FFF", "33");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfTcp("IntfTCP0008", "hijklmn", "INTFID02", "HiJkLmN:2222", true, "HHHHHHHH", "2", "4", "6", "88888", "22", true, "444", "64", "66", "2222", "IIIIIIII", "JJJ", "KKK", "LLL", true, "MMM", "44");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsTcpLeftmenu);
        }).then(function () {
            Page.eleIntfsTcpLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfTCP0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfTcpNameInput);
        }).then(function () {
            return Page.eleIntfTcpNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfTCP0008').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1111').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAAAA').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '77777').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpKeepAliveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '53').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostLogFileDdnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBBBBBBB').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CCC').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'DDD').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EEE').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpClientAuthCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfTcpGskFileNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'FFF').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        });
    });

    // Add a TCP Interface, delete it, then confirm the delete operation.
    //
    it('Should add a TCP Interface, delete it, then confirm the delete operation', function () {
        Page.delIntfTcpYes("IntfTCP0009").then(function () {
            Page.addIntfTcp("IntfTCP0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfTcpYes("IntfTCP0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfTCP0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a TCP Interface, delete it, then discard the delete operation.
    //
    it('Should add a TCP Interface, delete it, then discard the delete operation', function () {
        Page.delIntfTcpYes("IntfTCP0010").then(function () {
            Page.addIntfTcp("IntfTCP0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfTcpNo("IntfTCP0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfTCP0010");
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
        Page.delIntfTcpYes("IntfTCP0011").then(function () {
            Page.addIntfTcp("IntfTCP0011");
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

    // Test TCP Interface Details -> CHECK button.
    //
    it('Test TCP Interface Details CHECK button', function () {
        Page.delIntfTcpYes("IntfTCP0012").then(function () {
            Page.addIntfTcp("IntfTCP0012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCheckButton);
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Checked successfully').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostInput.clear();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCheckButton);
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Please specify a non-empty, non-blank value for URL').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostInput.clear().sendKeys("CAFE");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCheckButton);
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Port "null" invalid').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostInput.clear().sendKeys("1234");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCheckButton);
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Port "null" invalid').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostInput.clear().sendKeys("CAFE:abc");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCheckButton);
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Port "null" invalid').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostInput.clear().sendKeys("CAFE:1234");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCheckButton);
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'TCP Failure: unable to connect to TCP://CAFE:1234').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostInput.clear().sendKeys("CAFE:65535");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCheckButton);
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'TCP Failure: unable to connect to TCP://CAFE:65535').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostInput.clear().sendKeys("CAFE:99999");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCheckButton);
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Port "99999" invalid').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostInput.clear().sendKeys("CAFE:8100");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCheckButton);
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Checked successfully').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
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

    // Test TCP Interface Details panel fields default value.
    //
    it('Test TCP Interface Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsTcpLeftmenu);
        }).then(function () {
            Page.eleIntfsTcpLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfTcpNameInput);
        }).then(function () {
            return Page.eleIntfTcpNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '8192').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpKeepAliveCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '60').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '120').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '32').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '64000').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostLogFileDdnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingFileInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingLabelInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsCipherInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpGskFileNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test TCP Interface Details panel mandatory fields.
    //
    it('Test TCP Interface Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsTcpLeftmenu);
        }).then(function () {
            Page.eleIntfsTcpLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfTcpNameInput);
        }).then(function () {
            Page.eleIntfTcpNameInput.clear();
        }).then(function () {
            Page.eleIntfTcpDescInput.clear();
        }).then(function () {
            Page.eleIntfTcpIntfidInput.clear();
        }).then(function () {
            Page.eleIntfTcpHostInput.clear();
        }).then(function () {
            Page.eleIntfTcpHostStackNameInput.clear();
        }).then(function () {
            return Page.eleIntfTcpHostLogFileDdnInput.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                Page.eleIntfTcpTcpDirectivesExtend.click();
            }
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfTcpHostLogFileDdnInput);
        }).then(function () {
            Page.eleIntfTcpHostLogFileDdnInput.clear();
        }).then(function () {
            return Page.eleIntfTcpTlsRingFileInput.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                Page.eleIntfTcpSslDirectivesExtend.click();
            }
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfTcpTlsRingFileInput);
        }).then(function () {
            Page.eleIntfTcpTlsRingFileInput.clear();
        }).then(function () {
            Page.eleIntfTcpTlsRingLabelInput.clear();
        }).then(function () {
            Page.eleIntfTcpTlsCipherInput.clear();
        }).then(function () {
            Page.eleIntfTcpGskFileNameInput.clear();
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
            return Page.eleIntfTcpNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpIntfidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'TCP Interface Details panel' -> 'Name'
    //
    it('Test field TCP Interface -> Name', function () {
        Page.delIntfTcpYes("IntfTCP0013_@#$_22223333333333444444444").then(function () {
            Page.delIntfTcpYes("IntfTCP0014_@#$_22223333333333444444444");
        }).then(function () {
            Page.addIntfTcp("IntfTCP0013_@#$_22223333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfTCP0013_@#$_22223333333333444444444').to.be.true;
        }).then(function () {
            Page.addIntfTcp("IntfTCP0014_@#$_222233333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfTCP0014_@#$_22223333333333444444444').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel' -> 'Description'
    //
    it('Test field TCP Interface -> Description', function () {
        Page.delIntfTcpYes("IntfTCP0015").then(function () {
            Page.delIntfTcpYes("IntfTCP0016");
        }).then(function () {
            Page.addIntfTcp("IntfTCP0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addIntfTcp("IntfTCP0016", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfTcpDescValidateMsg);
        }).then(function () {
            return Page.eleIntfTcpDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfTcpDescInput);
        }).then(function () {
            Page.eleIntfTcpDescInput.clear().sendKeys("Corrected");
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

    // Test field 'TCP Interface Details panel' -> 'Interface ID'
    //
    it('Test field TCP Interface -> Interface ID', function () {
        Page.delIntfTcpYes("IntfTCP0017").then(function () {
            Page.addIntfTcp("IntfTCP0017", "", "!@#$%^&*");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '!@#$%^&*').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpIntfidInput.clear().sendKeys("aBcDeFgH");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'aBcDeFgH').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpIntfidInput.clear().sendKeys("123456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '12345678').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> HOST(URL)'
    //
    it('Test field TCP Interface -> HOST(URL)', function () {
        Page.delIntfTcpYes("IntfTCP0018").then(function () {
            Page.delIntfTcpYes("IntfTCP0019");
        }).then(function () {
            Page.addIntfTcp("IntfTCP0018", "", undefined, "!@#$%^&*()AAAAAAAAAAbbbbbbbbbb!@#$%^&*()?5555555556666666666777");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()AAAAAAAAAAbbbbbbbbbb!@#$%^&*()?5555555556666666666777').to.be.true;
        }).then(function () {
            Page.addIntfTcp("IntfTCP0019", "", undefined, "!@#$%^&*()AAAAAAAAAAbbbbbbbbbb!@#$%^&*()?55555555566666666667777");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '!@#$%^&*()AAAAAAAAAAbbbbbbbbbb!@#$%^&*()?5555555556666666666777').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> Host Stack Name'
    //
    it('Test field TCP Interface -> Host Stack Name', function () {
        Page.delIntfTcpYes("IntfTCP0020").then(function () {
            Page.addIntfTcp("IntfTCP0020", "", undefined, undefined, false, "@#$AB123");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostStackNameInput.clear().sendKeys("#@$123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostStackNameInput.clear().sendKeys("$#@123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostStackNameInput.clear().sendKeys("AB120@#$");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostStackNameInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostStackNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostStackNameInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostStackNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostStackNameInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostStackNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostStackNameInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostStackNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostStackNameInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostStackNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleIntfTcpHostStackNameInput.clear().sendKeys("A");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostStackNameInput.clear().sendKeys("A2");
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

    // Test field 'TCP Interface Details panel -> Trace Level'
    //
    it('Test field TCP Interface -> Trace Level', function () {
        var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
        Page.delIntfTcpYes("IntfTCP0021").then(function () {
            Page.addIntfTcp("IntfTCP0021", "", undefined, undefined, false, "", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTrcLvlSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTrcLvlSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTrcLvlSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTrcLvlSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTrcLvlSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTrcLvlSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> Dispatchers'
    //
    it('Test field TCP Interface -> Dispatchers', function () {
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        Page.delIntfTcpYes("IntfTCP0022").then(function () {
            Page.addIntfTcp("IntfTCP0022", "", undefined, undefined, false, "", "0", "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpDispatchersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpDispatchersSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpDispatchersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpDispatchersSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpDispatchersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpDispatchersSpinner.clear().sendKeys("30");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpDispatchersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpDispatchersSpinner.clear().sendKeys("39");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '39').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpDispatchersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpDispatchersSpinner.clear().sendKeys("40");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpDispatchersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpDispatchersSpinner.clear().sendKeys("41");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpDispatchersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> Workers'
    //
    it('Test field TCP Interface -> Workers', function () {
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        Page.delIntfTcpYes("IntfTCP0023").then(function () {
            Page.addIntfTcp("IntfTCP0023", "", undefined, undefined, false, "", "0", "2", "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWorkersSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWorkersSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWorkersSpinner.clear().sendKeys("30");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWorkersSpinner.clear().sendKeys("39");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '39').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWorkersSpinner.clear().sendKeys("40");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWorkersSpinner.clear().sendKeys("41");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> WebUI Buffer Size (bytes)'
    //
    it('Test field TCP Interface -> WebUI Buffer Size (bytes)', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delIntfTcpYes("IntfTCP0024").then(function () {
            Page.addIntfTcp("IntfTCP0024", "", undefined, undefined, false, "", "0", "2", "2", "8192");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '8192').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.clear().sendKeys("8191");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '8192').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '8192').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.clear().sendKeys("8193");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '8193').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.clear().sendKeys("77777");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '77777').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.clear().sendKeys("100000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.clear().sendKeys("127999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '127999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.clear().sendKeys("128000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '128000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpWebUIBufSizeSpinner.clear().sendKeys("128001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpWebUIBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '128000').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> TCP Directives -> Connections'
    //
    it('Test field TCP Interface -> TCP Directives -> Connections', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfTcpYes("IntfTCP0025").then(function () {
            Page.addIntfTcp("IntfTCP0025", "", undefined, undefined, false, "", "0", "2", "2", "8192", "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.clear().sendKeys("222");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.clear().sendKeys("333");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.clear().sendKeys("444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.clear().sendKeys("499");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '499').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.clear().sendKeys("500");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '500').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpConnsSpinner.clear().sendKeys("501");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpConnsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '500').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> TCP Directives -> Lazy Retry (sec)'
    //
    it('Test field TCP Interface -> TCP Directives -> Lazy Retry (sec)', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfTcpYes("IntfTCP0026").then(function () {
            Page.addIntfTcp("IntfTCP0026", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.clear().sendKeys("222");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.clear().sendKeys("333");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.clear().sendKeys("444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.clear().sendKeys("599");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '599').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.clear().sendKeys("600");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '600').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpLazyRetrySpinner.clear().sendKeys("601");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpLazyRetrySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '600').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> TCP Directives -> Timeout (sec)'
    //
    it('Test field TCP Interface -> TCP Directives -> Timeout (sec)', function () {
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);
        Page.delIntfTcpYes("IntfTCP0027").then(function () {
            Page.addIntfTcp("IntfTCP0027", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "60", "30");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.clear().sendKeys("29");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.clear().sendKeys("28");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.clear().sendKeys("10");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.clear().sendKeys("31");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '31').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.clear().sendKeys("32");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '32').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.clear().sendKeys("222");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.clear().sendKeys("299");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '299').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.clear().sendKeys("300");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '300').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTimeoutSpinner.clear().sendKeys("301");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTimeoutSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '300').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> TCP Directives -> Chunk Buffers'
    //
    it('Test field TCP Interface -> TCP Directives -> Chunk Buffers', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfTcpYes("IntfTCP0028").then(function () {
            Page.addIntfTcp("IntfTCP0028", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "60", "10", "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.clear().sendKeys("55");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.clear().sendKeys("88");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '88').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.clear().sendKeys("99");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.clear().sendKeys("100");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkBufsSpinner.clear().sendKeys("101");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> TCP Directives -> Chunk Max Size (bytes)'
    //
    it('Test field TCP Interface -> TCP Directives -> Chunk Max Size (bytes)', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delIntfTcpYes("IntfTCP0029").then(function () {
            Page.addIntfTcp("IntfTCP0029", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "60", "10", "32", "1024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1024').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.clear().sendKeys("1023");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1024').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1024').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.clear().sendKeys("1025");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1025').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.clear().sendKeys("22222");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22222').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.clear().sendKeys("333333");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '333333').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.clear().sendKeys("4000000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4000000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.clear().sendKeys("4095999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.clear().sendKeys("4096000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4096000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpChunkMaxSizeSpinner.clear().sendKeys("4096001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpChunkMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4096000').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> TCP Directives -> Host Log File DDN'
    //
    it('Test field TCP Interface -> TCP Directives -> Host Log File DDN', function () {
        Page.delIntfTcpYes("IntfTCP0030").then(function () {
            Page.addIntfTcp("IntfTCP0030", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "60", "10", "32", "64000", "@#$AB123");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostLogFileDdnInput.clear().sendKeys("#@$123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostLogFileDdnInput.clear().sendKeys("$#@123AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostLogFileDdnInput.clear().sendKeys("AB120@#$");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostLogFileDdnInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostLogFileDdnInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostLogFileDdnInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostLogFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostLogFileDdnInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostLogFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostLogFileDdnInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostLogFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostLogFileDdnInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpHostLogFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleIntfTcpHostLogFileDdnInput.clear().sendKeys("A");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpHostLogFileDdnInput.clear().sendKeys("A2");
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

    // Test field 'TCP Interface Details panel -> SSL Directives -> TLS Ring File'
    //
    it('Test field TCP Interface -> SSL Directives -> TLS Ring File', function () {
        Page.delIntfTcpYes("IntfTCP0031").then(function () {
            Page.delIntfTcpYes("IntfTCP0032")
        }).then(function () {
            Page.addIntfTcp("IntfTCP0031", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "60", "10", "32", "64000", "", "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./55555555556666666666777777777788888888889999999999123456789");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingFileInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./55555555556666666666777777777788888888889999999999123456789').to.be.true;
        }).then(function () {
            Page.addIntfTcp("IntfTCP0032", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "60", "10", "32", "64000", "", "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999991234567890");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingFileInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./55555555556666666666777777777788888888889999999999123456789').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> SSL Directives -> TLS Ring Label'
    //
    it('Test field TCP Interface -> SSL Directives -> TLS Ring Label', function () {
        Page.delIntfTcpYes("IntfTCP0033").then(function () {
            Page.delIntfTcpYes("IntfTCP0034")
        }).then(function () {
            Page.addIntfTcp("IntfTCP0033", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "60", "10", "32", "64000", "", "", "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingLabelInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567').to.be.true;
        }).then(function () {
            Page.addIntfTcp("IntfTCP0034", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "60", "10", "32", "64000", "", "", "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./5555555555666666666677777777778888888888999999999900000000001111111111222222222212345678");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsRingLabelInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> SSL Directives -> TLS Cipher'
    //
    it('Test field TCP Interface -> SSL Directives -> TLS Cipher', function () {
        Page.delIntfTcpYes("IntfTCP0035").then(function () {
            Page.delIntfTcpYes("IntfTCP0036")
        }).then(function () {
            Page.addIntfTcp("IntfTCP0035", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "60", "10", "32", "64000", "", "", "", "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsCipherInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567').to.be.true;
        }).then(function () {
            Page.addIntfTcp("IntfTCP0036", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "60", "10", "32", "64000", "", "", "", "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./5555555555666666666677777777778888888888999999999900000000001111111111222222222212345678");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsCipherInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> SSL Directives -> GSK File Name'
    //
    it('Test field TCP Interface -> SSL Directives -> GSK File Name', function () {
        Page.delIntfTcpYes("IntfTCP0037").then(function () {
            Page.delIntfTcpYes("IntfTCP0038")
        }).then(function () {
            Page.addIntfTcp("IntfTCP0037", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "60", "10", "32", "64000", "", "", "", "", false, "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpGskFileNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567').to.be.true;
        }).then(function () {
            Page.addIntfTcp("IntfTCP0038", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "60", "10", "32", "64000", "", "", "", "", false, "!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./5555555555666666666677777777778888888888999999999900000000001111111111222222222212345678");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpGskFileNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()QWERTYUIOPasdfghjkl;zxcvbnm,./555555555566666666667777777777888888888899999999990000000000111111111122222222221234567').to.be.true;
        });
    });

    // Test field 'TCP Interface Details panel -> SSL Directives -> TLS Trace Level'
    //
    it('Test field TCP Interface -> SSL Directives -> TLS Trace Level', function () {
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        Page.delIntfTcpYes("IntfTCP0039").then(function () {
            Page.addIntfTcp("IntfTCP0039", "", undefined, undefined, false, "", "0", "2", "2", "8192", "5", true, "60", "10", "32", "64000", "", "", "", "", false, "", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.clear().sendKeys("33");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.clear().sendKeys("44");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.clear().sendKeys("62");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '62').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.clear().sendKeys("63");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '63').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfTcpTlsTrcLvlSpinner.clear().sendKeys("64");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfTcpTlsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '63').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});