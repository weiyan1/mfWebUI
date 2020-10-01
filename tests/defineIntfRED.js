/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.15 Define Interfaces RED Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a RED Interface with Outbound EMS Interface.
    //
    it('Should add a RED Interface with Outbound EMS Interface successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delIntfRedYes("IntfRED0001");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSD0001");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0001");
        }).then(function () {
            Page.addIntfEms("IntfEMSD0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0001", "", undefined, "ESB", "IntfEMSD0001", null, null, null, null, "EndpointCICSB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a RED Interface with Outbound RV Interface, then replicate it.
    //
    it('Should add a RED Interface with Outbound RV Interface, then replicate it successfully', function () {
        Page.delIntfRedYes("IntfRED0002-copy").then(function () {
            Page.delIntfRedYes("IntfRED0002");
        }).then(function () {
            Page.delIntfRvYes("IntfRVD0001");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0002");
        }).then(function () {
            Page.addIntfRv("IntfRVD0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0002", "", undefined, "ESB", "IntfRVD0001", null, null, null, null, "EndpointCICSB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateIntfRed("IntfRED0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a RED Interface successfully, then update it.
    //
    it('Should add a RED Interface, then update it successfully', function () {
        Page.delIntfRedYes("IntfRED0003").then(function () {
            Page.delIntfEmsYes("IntfEMSD0002");
        }).then(function () {
            Page.delIntfRvYes("IntfRVD0002");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0003");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0004");
        }).then(function () {
            Page.addIntfEms("IntfEMSD0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVD0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0003", "abcdefg", "INTFID01", "ESB", "IntfEMSD0002", null, null, null, null, "EndpointCICSB0003", "AA", "BB", "1", "3", "CC", "DD", "EE", "FF", false, "11", "333", "1111", "555", "7", false, "First", "33", "5555", "1111", "5", "333", "111", "777", "999", "1111", "11", "333", "5555", "1", "3", "5", "11", "21", "31", "P1", "P3", "P5", "41", "111", "3333", "55", "7777", "9999", "1", "33333", "77", false, false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateIntfRed("IntfRED0003", "hijklmn", "INTFID02", "ESB", "IntfRVD0002", null, null, null, null, "EndpointCICSB0004", "HH", "II", "2", "4", "JJ", "KK", "LL", "MM", true, "22", "340", "2222", "666", "8", true, "Round Robin", "44", "6666", "2222", "6", "444", "222", "888", "1000", "2222", "22", "444", "6666", "0", "2", "4", "12", "22", "32", "P2", "P4", "P6", "42", "222", "4444", "66", "8888", "10000", "2", "444444", "88", true, true, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRED0003').to.be.true;
        }).then(function () {
            return Page.eleIntfRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfRedIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVD0002').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICSB0004').to.be.true;
        }).then(function () {
            return Page.eleIntfRedHubNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HH').to.be.true;
        }).then(function () {
            return Page.eleIntfRedAdminNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'II').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfRedGrpMonitorNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJ').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'KK').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LL').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MM').to.be.true;
        }).then(function () {
            return Page.eleIntfRedClearTranWorkareaCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '340').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '666').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '8').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrg64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgModeDropdown.getText();
        }).then(function (message) {
            expect(message === "Round Robin").to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '6666').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '888').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '1000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '6666').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '12').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '32').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P4').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P6').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '42').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '8888').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '88').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRec64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecSendWithComfimCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a RED Interface, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a RED Interface, cancel the changes, then confirm the cancel operation', function () {
        Page.delIntfRedYes("IntfRED0004").then(function () {
            Page.delIntfEmsYes("IntfEMSD0003");
        }).then(function () {
            Page.delIntfRvYes("IntfRVD0003");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0005");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0006");
        }).then(function () {
            Page.addIntfEms("IntfEMSD0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVD0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0004", "abcdefg", "INTFID01", "ESB", "IntfEMSD0003", null, null, null, null, "EndpointCICSB0005", "AA", "BB", "1", "3", "CC", "DD", "EE", "FF", false, "11", "333", "1111", "555", "7", false, "First", "33", "5555", "1111", "5", "333", "111", "777", "999", "1111", "11", "333", "5555", "1", "3", "5", "11", "21", "31", "P1", "P3", "P5", "41", "111", "3333", "55", "7777", "9999", "1", "33333", "77", false, false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfRedYes("IntfRED0004", "hijklmn", "INTFID02", "ESB", "IntfRVD0003", null, null, null, null, "EndpointCICSB0006", "HH", "II", "2", "4", "JJ", "KK", "LL", "MM", true, "22", "340", "2222", "666", "8", true, "Round Robin", "44", "6666", "2222", "6", "444", "222", "888", "1000", "2222", "22", "444", "6666", "0", "2", "4", "12", "22", "32", "P2", "P4", "P6", "42", "222", "4444", "66", "8888", "10000", "2", "444444", "88", true, true, true);
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsRedLeftmenu);
        }).then(function () {
            Page.eleIntfsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfRED0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfRedNameInput);
        }).then(function () {
            return Page.eleIntfRedNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRED0004').to.be.true;
        }).then(function () {
            return Page.eleIntfRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfRedIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSD0003').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICSB0005').to.be.true;
        }).then(function () {
            return Page.eleIntfRedHubNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AA').to.be.true;
        }).then(function () {
            return Page.eleIntfRedAdminNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BB').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfRedGrpMonitorNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CC').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'DD').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EE').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'FF').to.be.true;
        }).then(function () {
            return Page.eleIntfRedClearTranWorkareaCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '555').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '7').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrg64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgModeDropdown.getText();
        }).then(function (message) {
            expect(message === "First").to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '777').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '999').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '21').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '31').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P3').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '41').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '7777').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '9999').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '77').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRec64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecSendWithComfimCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a RED Interface, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a RED Interface, cancel the changes, then discard the cancel operation', function () {
        Page.delIntfRedYes("IntfRED0005").then(function () {
            Page.delIntfEmsYes("IntfEMSD0004");
        }).then(function () {
            Page.delIntfRvYes("IntfRVD0004");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0007");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0008");
        }).then(function () {
            Page.addIntfEms("IntfEMSD0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVD0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0005", "abcdefg", "INTFID01", "ESB", "IntfEMSD0004", null, null, null, null, "EndpointCICSB0007", "AA", "BB", "1", "3", "CC", "DD", "EE", "FF", false, "11", "333", "1111", "555", "7", false, "First", "33", "5555", "1111", "5", "333", "111", "777", "999", "1111", "11", "333", "5555", "1", "3", "5", "11", "21", "31", "P1", "P3", "P5", "41", "111", "3333", "55", "7777", "9999", "1", "33333", "77", false, false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfRedNo("IntfRED0005", "hijklmn", "INTFID02", "ESB", "IntfRVD0004", null, null, null, null, "EndpointCICSB0008", "HH", "II", "2", "4", "JJ", "KK", "LL", "MM", true, "22", "340", "2222", "666", "8", true, "Round Robin", "44", "6666", "2222", "6", "444", "222", "888", "1000", "2222", "22", "444", "6666", "0", "2", "4", "12", "22", "32", "P2", "P4", "P6", "42", "222", "4444", "66", "8888", "10000", "2", "444444", "88", true, true, true);
        }).then(function () {
            return Page.eleIntfRedNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRED0005').to.be.true;
        }).then(function () {
            return Page.eleIntfRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfRedIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVD0004').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICSB0008').to.be.true;
        }).then(function () {
            return Page.eleIntfRedHubNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HH').to.be.true;
        }).then(function () {
            return Page.eleIntfRedAdminNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'II').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfRedGrpMonitorNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJ').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'KK').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LL').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MM').to.be.true;
        }).then(function () {
            return Page.eleIntfRedClearTranWorkareaCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '340').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '666').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '8').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrg64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgModeDropdown.getText();
        }).then(function (message) {
            expect(message === "Round Robin").to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '6666').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '888').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '1000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '6666').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '12').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '32').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P4').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P6').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '42').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '8888').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '88').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRec64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecSendWithComfimCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a RED Interface, make some changes, then reset it.
    //
    it('Should add a RED Interface, make some changes, then reset it', function () {
        Page.delIntfRedYes("IntfRED0006").then(function () {
            Page.delIntfEmsYes("IntfEMSD0005");
        }).then(function () {
            Page.delIntfRvYes("IntfRVD0005");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0009");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0010");
        }).then(function () {
            Page.addIntfEms("IntfEMSD0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVD0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0006", "abcdefg", "INTFID01", "ESB", "IntfEMSD0005", null, null, null, null, "EndpointCICSB0009", "AA", "BB", "1", "3", "CC", "DD", "EE", "FF", false, "11", "333", "1111", "555", "7", false, "First", "33", "5555", "1111", "5", "333", "111", "777", "999", "1111", "11", "333", "5555", "1", "3", "5", "11", "21", "31", "P1", "P3", "P5", "41", "111", "3333", "55", "7777", "9999", "1", "33333", "77", false, false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetIntfRed("IntfRED0006", "hijklmn", "INTFID02", "ESB", "IntfRVD0005", null, null, null, null, "EndpointCICSB0010", "HH", "II", "2", "4", "JJ", "KK", "LL", "MM", true, "22", "340", "2222", "666", "8", true, "Round Robin", "44", "6666", "2222", "6", "444", "222", "888", "1000", "2222", "22", "444", "6666", "0", "2", "4", "12", "22", "32", "P2", "P4", "P6", "42", "222", "4444", "66", "8888", "10000", "2", "444444", "88", true, true, true);
        }).then(function () {
            return Page.eleIntfRedNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRED0006').to.be.true;
        }).then(function () {
            return Page.eleIntfRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfRedIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSD0005').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICSB0009').to.be.true;
        }).then(function () {
            return Page.eleIntfRedHubNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AA').to.be.true;
        }).then(function () {
            return Page.eleIntfRedAdminNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BB').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfRedGrpMonitorNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CC').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'DD').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EE').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'FF').to.be.true;
        }).then(function () {
            return Page.eleIntfRedClearTranWorkareaCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '555').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '7').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrg64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgModeDropdown.getText();
        }).then(function (message) {
            expect(message === "First").to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '777').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '999').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '21').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '31').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P3').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '41').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '7777').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '9999').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '77').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRec64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecSendWithComfimCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a RED Interface, then add a RED Interface with the same name, then confirm the overwrite operation.
    //
    it('Should add a RED Interface to overwrite a RED Interface, then confirm the overwrite operation', function () {
        Page.delIntfRedYes("IntfRED0007").then(function () {
            Page.delIntfEmsYes("IntfEMSD0006");
        }).then(function () {
            Page.delIntfRvYes("IntfRVD0006");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0011");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0012");
        }).then(function () {
            Page.addIntfEms("IntfEMSD0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVD0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0007", "abcdefg", "INTFID01", "ESB", "IntfEMSD0006", null, null, null, null, "EndpointCICSB0011", "AA", "BB", "1", "3", "CC", "DD", "EE", "FF", false, "11", "333", "1111", "555", "7", false, "First", "33", "5555", "1111", "5", "333", "111", "777", "999", "1111", "11", "333", "5555", "1", "3", "5", "11", "21", "31", "P1", "P3", "P5", "41", "111", "3333", "55", "7777", "9999", "1", "33333", "77", false, false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfRed("IntfRED0007", "hijklmn", "INTFID02", "ESB", "IntfRVD0006", null, null, null, null, "EndpointCICSB0012", "HH", "II", "2", "4", "JJ", "KK", "LL", "MM", true, "22", "340", "2222", "666", "8", true, "Round Robin", "44", "6666", "2222", "6", "444", "222", "888", "1000", "2222", "22", "444", "6666", "0", "2", "4", "12", "22", "32", "P2", "P4", "P6", "42", "222", "4444", "66", "8888", "10000", "2", "444444", "88", true, true, true);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleIntfRedNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRED0007').to.be.true;
        }).then(function () {
            return Page.eleIntfRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfRedIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVD0006').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICSB0012').to.be.true;
        }).then(function () {
            return Page.eleIntfRedHubNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HH').to.be.true;
        }).then(function () {
            return Page.eleIntfRedAdminNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'II').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfRedGrpMonitorNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJ').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'KK').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LL').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MM').to.be.true;
        }).then(function () {
            return Page.eleIntfRedClearTranWorkareaCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '340').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '666').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '8').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrg64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgModeDropdown.getText();
        }).then(function (message) {
            expect(message === "Round Robin").to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '6666').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '888').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '1000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '6666').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '12').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '32').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P4').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P6').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '42').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '8888').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '88').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRec64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecSendWithComfimCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a RED Interface, then add a RED Interface with the same name, then discard the overwrite operation.
    //
    it('Should add a RED Interface to overwrite a RED Interface, then discard the overwrite operation', function () {
        Page.delIntfRedYes("IntfRED0008").then(function () {
            Page.delIntfEmsYes("IntfEMSD0007");
        }).then(function () {
            Page.delIntfRvYes("IntfRVD0007");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0013");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0014");
        }).then(function () {
            Page.addIntfEms("IntfEMSD0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVD0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0013");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0014");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0008", "abcdefg", "INTFID01", "ESB", "IntfEMSD0007", null, null, null, null, "EndpointCICSB0013", "AA", "BB", "1", "3", "CC", "DD", "EE", "FF", false, "11", "333", "1111", "555", "7", false, "First", "33", "5555", "1111", "5", "333", "111", "777", "999", "1111", "11", "333", "5555", "1", "3", "5", "11", "21", "31", "P1", "P3", "P5", "41", "111", "3333", "55", "7777", "9999", "1", "33333", "77", false, false, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfRed("IntfRED0008", "hijklmn", "INTFID02", "ESB", "IntfRVD0007", null, null, null, null, "EndpointCICSB0014", "HH", "II", "2", "4", "JJ", "KK", "LL", "MM", true, "22", "340", "2222", "666", "8", true, "Round Robin", "44", "6666", "2222", "6", "444", "222", "888", "1000", "2222", "22", "444", "6666", "0", "2", "4", "12", "22", "32", "P2", "P4", "P6", "42", "222", "4444", "66", "8888", "10000", "2", "444444", "88", true, true, true);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsRedLeftmenu);
        }).then(function () {
            Page.eleIntfsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfRED0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfRedNameInput);
        }).then(function () {
            return Page.eleIntfRedNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRED0008').to.be.true;
        }).then(function () {
            return Page.eleIntfRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfRedIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSD0007').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICSB0013').to.be.true;
        }).then(function () {
            return Page.eleIntfRedHubNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AA').to.be.true;
        }).then(function () {
            return Page.eleIntfRedAdminNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BB').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfRedGrpMonitorNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CC').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'DD').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EE').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'FF').to.be.true;
        }).then(function () {
            return Page.eleIntfRedClearTranWorkareaCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '555').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '7').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrg64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgModeDropdown.getText();
        }).then(function (message) {
            expect(message === "First").to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '777').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '999').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '21').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '31').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P3').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '41').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '55').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '7777').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '9999').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '77').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRec64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecSendWithComfimCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a RED Interface, delete it, then confirm the delete operation.
    //
    it('Should add a RED Interface, delete it, then confirm the delete operation', function () {
        Page.delIntfRedYes("IntfRED0009").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0015");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0009", "", undefined, "ESB", null, null, null, null, null, "EndpointCICSB0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfRedYes("IntfRED0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfRED0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a RED Interface, delete it, then discard the delete operation.
    //
    it('Should add a RED Interface, delete it, then discard the delete operation', function () {
        Page.delIntfRedYes("IntfRED0010").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0016");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0010", "", undefined, "ESB", null, null, null, null, null, "EndpointCICSB0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfRedNo("IntfRED0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfRED0010");
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
        Page.delIntfRedYes("IntfRED0011").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0017");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0017");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0011", "", undefined, "ESB", null, null, null, null, null, "EndpointCICSB0017");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            browser.sleep(500);
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

    // Test RED Interface Details panel fields default value.
    //
    it('Test RED Interface Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsRedLeftmenu);
        }).then(function () {
            Page.eleIntfsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfRedNameInput);
        }).then(function () {
            return Page.eleIntfRedNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfRedDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfRedIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfRedOutboundModeDropdown.getText();
        }).then(function (message) {
            expect(message === "ESB").to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedTcpIntfInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTcpIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfRedHubNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfRedAdminNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'REDADM').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedGrpMonitorNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TIBMON').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TIBSS').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '&APPLID').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '#RED').to.be.true;
        }).then(function () {
            return Page.eleIntfRedClearTranWorkareaCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '21').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '50').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '500').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrg64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgModeDropdown.getText();
        }).then(function (message) {
            expect(message === "First").to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '300').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '40000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '1000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '1000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '1000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '8192').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '8192').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '8192').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P1AMSG').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P2AMSG').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P3AMSG').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '10').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '16382').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4096').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '20').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '70').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRec64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecSendWithComfimCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test RED Interface Details panel mandatory fields.
    //
    it('Test RED Interface Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsRedLeftmenu);
        }).then(function () {
            Page.eleIntfsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfRedNameInput);
        }).then(function () {
            Page.eleIntfRedNameInput.clear();
        }).then(function () {
            Page.eleIntfRedDescInput.clear();
        }).then(function () {
            Page.eleIntfRedIntfidInput.clear();
        }).then(function () {
            Page.eleIntfRedEsbIntfInput.clear();
        }).then(function () {
            Page.eleIntfRedEndpointInput.clear();
        }).then(function () {
            Page.eleIntfRedHubNameInput.clear();
        }).then(function () {
            Page.eleIntfRedAdminNameInput.clear();
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpInput.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                Page.eleIntfRedCicsParasExtend.click();
            }
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfRedMyCicsGrpInput);
        }).then(function () {
            Page.eleIntfRedMyCicsGrpInput.clear();
        }).then(function () {
            Page.eleIntfRedGrpMonitorNameInput.clear();
        }).then(function () {
            Page.eleIntfRedLsnNameInput.clear();
        }).then(function () {
            Page.eleIntfRedLsnTranidInput.clear();
        }).then(function () {
            return Page.eleIntfRedTrg64bitBufsCheck.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                Page.eleIntfRedTrgOutboundExtend.click();
            }
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfRedTrgNumOfBufsPool1Input);
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool1Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool2Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool3Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool1Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool2Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool3Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgPacingPool1Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgPacingPool2Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgPacingPool3Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool1Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool2Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool3Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool1Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool2Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool3Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool1Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2Input.clear();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3Input.clear();
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
            return Page.eleIntfRedNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfRedIntfidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEndpointValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfRedAdminNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfRedGrpMonitorNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnTranidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test field 'RED Interface Details panel' -> 'Name'
    //
    it('Test field RED Interface -> Name', function () {
        Page.delIntfRedYes("IntfRED0012_@#$_22223333333333444444444").then(function () {
            Page.delIntfRedYes("IntfRED0013_@#$_22223333333333444444444");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0018");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0012_@#$_22223333333333444444444", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfRED0012_@#$_22223333333333444444444').to.be.true;
        }).then(function () {
            Page.addIntfRed("IntfRED0013_@#$_222233333333334444444444", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfRED0013_@#$_22223333333333444444444').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel' -> 'Description'
    //
    it('Test field RED Interface -> Description', function () {
        Page.delIntfRedYes("IntfRED0014").then(function () {
            Page.delIntfRedYes("IntfRED0015");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0019");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", undefined, undefined, null, null, null, null, null, "EndpointCICSB0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addIntfRed("IntfRED0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111", undefined, undefined, null, null, null, null, null, "EndpointCICSB0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfRedDescValidateMsg);
        }).then(function () {
            return Page.eleIntfRedDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfRedDescInput);
        }).then(function () {
            Page.eleIntfRedDescInput.clear().sendKeys("Corrected");
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

    // Test field 'RED Interface Details panel' -> 'Interface ID'
    //
    it('Test field RED Interface -> Interface ID', function () {
        Page.delIntfRedYes("IntfRED0016").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0020");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0020");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0016", "", "!@#$%^&*", undefined, null, null, null, null, null, "EndpointCICSB0020");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '!@#$%^&*').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedIntfidInput.clear().sendKeys("aBcDeFgH");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'aBcDeFgH').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedIntfidInput.clear().sendKeys("123456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '12345678').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Outbound ESB Interface'
    // Related jiras: ZWUI-951(fixed)
    it('Test field RED Interface -> Outbound ESB Interface', function () {
        Page.delIntfRedYes("IntfRED0017").then(function () {
            Page.delIntfRedYes("IntfRED0018");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSD0008_@#$_2223333333333444444444");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSD0009");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSD0010");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSD0011");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0021");
        }).then(function () {
            Page.addIntfEms("IntfEMSD0008_@#$_2223333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSD0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSD0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSD0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0021");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0017", "", undefined, "ESB", "IntfEMSD0008_@#$_2223333333333444444444", null, null, null, null, "EndpointCICSB0021");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfEMSD0008_@#$_2223333333333444444444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedEsbIntfInput.clear().sendKeys("AAA");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedEsbIntfInput.clear().sendKeys("IntfEMSD0008_@#$_22233333333334444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === '"IntfEMSD00...": the value is too long, must be at most 39 characters').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedEsbIntfInput.clear();
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
            return Page.eleIntfRedEsbIntfInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfRedEsbIntfAddButton);
        }).then(function () {
            Page.eleIntfRedEsbIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfRedEsbIntfValidateMsg)
        }).then(function () {
            return Page.eleIntfRedEsbIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Empty Value').to.be.true;
        }).then(function () {
            Page.addIntfRed("IntfRED0018", "", undefined, "ESB", "IntfEMSD0008_@#$_2223333333333444444444", "IntfEMSD0009", "IntfEMSD0010", "IntfEMSD0011", null, "EndpointCICSB0021");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSD0008_@#$_2223333333333444444444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSD0009').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSD0010').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSD0011').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedEsbIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === 'Max number of entries is 4').to.be.true;
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            Page.eleIntfRedEsbIntf4RemoveButton.click();
        }).then(function () {
            Page.eleIntfRedEsbIntf2RemoveButton.click();
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSD0008_@#$_2223333333333444444444').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSD0010').to.be.true;
        }).then(function () {
            Page.eleIntfRedEsbIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfRedEsbIntf3PickButton);
        }).then(function () {
            Page.eleIntfRedEsbIntf3PickButton.click();
        }).then(function () {
            globalPage.entitySelect("IntfEMSD0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfRedEsbIntfValidateMsg);
        }).then(function () {
            return Page.eleIntfRedEsbIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Duplicate Interface!').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfRedEsbIntf3RemoveButton);
        }).then(function () {
            Page.eleIntfRedEsbIntf3RemoveButton.click();
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

    // Test field 'RED Interface Details panel -> CICS Endpoint'
    //
    it('Test field RED Interface -> CICS Endpoint', function () {
        Page.delIntfRedYes("IntfRED0019").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0022_@#$_33333333444444444");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0022_@#$_33333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0019", "", undefined, undefined, null, null, null, null, null, "ABC");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEndpointValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedEndpointInput.clear().sendKeys("EndpointCICSB0022_@#$_33333333444444444");
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
            return Page.eleIntfRedEndpointInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointCICSB0022_@#$_33333333444444444').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel' -> 'Hub Name'
    //
    it('Test field RED Interface -> Hub Name', function () {
        Page.delIntfRedYes("IntfRED0020").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0023");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0023");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0020", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0023", "@#$A");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedHubNameInput.clear().sendKeys("#1@$");
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
            Page.eleIntfRedHubNameInput.clear().sendKeys("$#1@");
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
            Page.eleIntfRedHubNameInput.clear().sendKeys("A@#1");
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
            Page.eleIntfRedHubNameInput.clear().sendKeys("A2345");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedHubNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A234').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedHubNameInput.clear().sendKeys("1@$A");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedHubNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedHubNameInput.clear().sendKeys("aBCD");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedHubNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedHubNameInput.clear().sendKeys("AbCD");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedHubNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedHubNameInput.clear().sendKeys("ABCd");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedHubNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedHubNameInput.clear().sendKeys("A");
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
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedHubNameInput.clear().sendKeys("A2");
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

    // Test field 'RED Interface Details panel' -> 'Admin Name'
    //
    it('Test field RED Interface -> Admin Name', function () {
        Page.delIntfRedYes("IntfRED0021").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0024");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0021", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0024", undefined, "@#$ABC789012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedAdminNameInput.clear().sendKeys("#@$456789ABC");
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
            Page.eleIntfRedAdminNameInput.clear().sendKeys("$#@456ABC012");
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
            Page.eleIntfRedAdminNameInput.clear().sendKeys("ABC456@#$012");
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
            Page.eleIntfRedAdminNameInput.clear().sendKeys("ABC456789@#$");
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
            Page.eleIntfRedAdminNameInput.clear().sendKeys("A234567890123");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedAdminNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A23456789012').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedAdminNameInput.clear().sendKeys("123@#$ABC");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedAdminNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedAdminNameInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedAdminNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedAdminNameInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedAdminNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedAdminNameInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedAdminNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedAdminNameInput.clear().sendKeys("A");
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
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedAdminNameInput.clear().sendKeys("A2");
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

    // Test field 'RED Interface Details panel' -> 'Trace Level: BES' & 'Trace Level: RED'
    //
    it('Test field RED Interface -> Trace Level:BES & Trace Level:RED', function () {
        var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0022").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0025");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0025");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0022", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0025", undefined, undefined, "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrcLvlBesSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrcLvlBesSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleIntfRedTrcLvlRedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrcLvlRedSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrcLvlBesSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrcLvlBesSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleIntfRedTrcLvlRedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrcLvlRedSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrcLvlBesSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrcLvlBesSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleIntfRedTrcLvlRedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrcLvlRedSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrcLvlBesSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrcLvlBesSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleIntfRedTrcLvlRedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrcLvlRedSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrcLvlBesSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrcLvlBesSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleIntfRedTrcLvlRedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrcLvlRedSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrcLvlBesSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrcLvlBesSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleIntfRedTrcLvlRedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrcLvlRedSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlBesSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrcLvlRedSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> CICS Related Parameters -> Group Monitor Name'
    //
    it('Test field RED Interface -> CICS Related Parameters -> Group Monitor Name', function () {
        Page.delIntfRedYes("IntfRED0023").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0026");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0026");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0023", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0026", undefined, undefined, "0", "0", "@#$AB123");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedGrpMonitorNameInput.clear().sendKeys("#@$123AB");
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
            Page.eleIntfRedGrpMonitorNameInput.clear().sendKeys("$#@123AB");
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
            Page.eleIntfRedGrpMonitorNameInput.clear().sendKeys("AB120@#$");
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
            Page.eleIntfRedGrpMonitorNameInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedGrpMonitorNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedGrpMonitorNameInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedGrpMonitorNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedGrpMonitorNameInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedGrpMonitorNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedGrpMonitorNameInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedGrpMonitorNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedGrpMonitorNameInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedGrpMonitorNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedGrpMonitorNameInput.clear().sendKeys("A");
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
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedGrpMonitorNameInput.clear().sendKeys("A2");
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

    // Test field 'RED Interface Details panel -> CICS Related Parameters -> My CICS Group'
    //
    it('Test field RED Interface -> CICS Related Parameters -> My CICS Group', function () {
        Page.delIntfRedYes("IntfRED0024").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0027");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0027");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0024", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0027", undefined, undefined, "0", "0", undefined, "@#$AB123");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMyCicsGrpInput.clear().sendKeys("#@$123AB");
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
            Page.eleIntfRedMyCicsGrpInput.clear().sendKeys("$#@123AB");
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
            Page.eleIntfRedMyCicsGrpInput.clear().sendKeys("AB120@#$");
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
            Page.eleIntfRedMyCicsGrpInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMyCicsGrpInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMyCicsGrpInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMyCicsGrpInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMyCicsGrpInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMyCicsGrpValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMyCicsGrpInput.clear().sendKeys("A");
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
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMyCicsGrpInput.clear().sendKeys("A2");
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

    // Test field 'RED Interface Details panel -> CICS Related Parameters -> Listener Name'
    //
    it('Test field RED Interface -> CICS Related Parameters -> Listener Name', function () {
        Page.delIntfRedYes("IntfRED0025").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0028");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0028");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0025", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0028", undefined, undefined, "0", "0", undefined, undefined, "@#$AB6789012345");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnNameInput.clear().sendKeys("#@$123ABCDEFGHI");
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
            Page.eleIntfRedLsnNameInput.clear().sendKeys("$#@123ABCDEF@#$");
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
            Page.eleIntfRedLsnNameInput.clear().sendKeys("AB120@#$9012345");
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
            Page.eleIntfRedLsnNameInput.clear().sendKeys("A234567890123456");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A23456789012345').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnNameInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &APPLID or use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnNameInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &APPLID or use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnNameInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &APPLID or use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnNameInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &APPLID or use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnNameInput.clear().sendKeys("A");
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
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnNameInput.clear().sendKeys("A2");
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
            Page.eleIntfRedLsnNameInput.clear().sendKeys("&APPLID");
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

    // Test field 'RED Interface Details panel -> CICS Related Parameters -> Listener Transaction Id'
    //
    it('Test field RED Interface -> CICS Related Parameters -> Listener Transaction Id', function () {
        Page.delIntfRedYes("IntfRED0026").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0029");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0029");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0026", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0029", undefined, undefined, "0", "0", undefined, undefined, undefined, "@#$A");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnTranidInput.clear().sendKeys("#1@$");
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
            Page.eleIntfRedLsnTranidInput.clear().sendKeys("$#1@");
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
            Page.eleIntfRedLsnTranidInput.clear().sendKeys("A@#1");
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
            Page.eleIntfRedLsnTranidInput.clear().sendKeys("A2345");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnTranidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A234').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnTranidInput.clear().sendKeys("1@$A");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnTranidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnTranidInput.clear().sendKeys("aBCD");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnTranidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnTranidInput.clear().sendKeys("AbCD");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnTranidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnTranidInput.clear().sendKeys("ABCd");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedLsnTranidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnTranidInput.clear().sendKeys("A");
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
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedLsnTranidInput.clear().sendKeys("A2");
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

    // Test field 'RED Interface Details panel -> CICS Related Parameters -> Maximum Transactions Concurrency Listener'
    //
    it('Test field RED Interface -> CICS Related Parameters -> Maximum Transactions Concurrency Listener', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0027").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0030");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0030");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0027", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0030", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyLsnSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyLsnSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyLsnSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyLsnSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyLsnSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyLsnSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyLsnSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyLsnSpinner.clear().sendKeys("799");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '799').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyLsnSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyLsnSpinner.clear().sendKeys("800");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '800').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyLsnSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyLsnSpinner.clear().sendKeys("801");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyLsnSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '800').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> CICS Related Parameters -> Maximum Transactions Concurrency User'
    //
    it('Test field RED Interface -> CICS Related Parameters -> Maximum Transactions Concurrency User', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0028").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0031");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0031");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0028", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0031", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyUserSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyUserSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyUserSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyUserSpinner.clear().sendKeys("300");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '300').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyUserSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyUserSpinner.clear().sendKeys("400");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '400').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyUserSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyUserSpinner.clear().sendKeys("499");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '499').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyUserSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyUserSpinner.clear().sendKeys("500");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '500').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyUserSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedMaxTransConcurrencyUserSpinner.clear().sendKeys("501");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedMaxTransConcurrencyUserSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '500').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> CICS Related Parameters -> Maximum Transactions Concurrency Inactive (ms)'
    //
    it('Test field RED Interface -> CICS Related Parameters -> Maximum Transactions Concurrency Inactive (ms)', function () {
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0029").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0032");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0032");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0029", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0032", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, "500");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '500').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedInactiveSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedInactiveSpinner.clear().sendKeys("499");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '500').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedInactiveSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedInactiveSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '500').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedInactiveSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedInactiveSpinner.clear().sendKeys("5000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedInactiveSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedInactiveSpinner.clear().sendKeys("9999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '9999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedInactiveSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedInactiveSpinner.clear().sendKeys("10000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedInactiveSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedInactiveSpinner.clear().sendKeys("10001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedInactiveSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> CICS Related Parameters -> Timeout For Transaction Message Reply'
    //
    it('Test field RED Interface -> CICS Related Parameters -> Timeout For Transaction Message Reply', function () {
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0030").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0033");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0033");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0030", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0033", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTimeoutMsgReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTimeoutMsgReplySpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTimeoutMsgReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTimeoutMsgReplySpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTimeoutMsgReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTimeoutMsgReplySpinner.clear().sendKeys("10000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTimeoutMsgReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTimeoutMsgReplySpinner.clear().sendKeys("29999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '29999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTimeoutMsgReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTimeoutMsgReplySpinner.clear().sendKeys("30000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTimeoutMsgReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTimeoutMsgReplySpinner.clear().sendKeys("30001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgReplySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30000').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> CICS Related Parameters -> Timeout For Transaction Message Completion'
    //
    it('Test field RED Interface -> CICS Related Parameters -> Timeout For Transaction Message Completion', function () {
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0031").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0034");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0034");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0031", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0034", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTimeoutMsgCompletionSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTimeoutMsgCompletionSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTimeoutMsgCompletionSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTimeoutMsgCompletionSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTimeoutMsgCompletionSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTimeoutMsgCompletionSpinner.clear().sendKeys("20");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '20').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTimeoutMsgCompletionSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTimeoutMsgCompletionSpinner.clear().sendKeys("29");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '29').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTimeoutMsgCompletionSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTimeoutMsgCompletionSpinner.clear().sendKeys("30");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTimeoutMsgCompletionSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTimeoutMsgCompletionSpinner.clear().sendKeys("31");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTimeoutMsgCompletionSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Trigger Service -> Mode'
    //
    it('Test field RED Interface -> Trigger Service -> Mode', function () {
        Page.delIntfRedYes("IntfRED0032").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0035");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0035");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0032", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0035", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "First");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'First').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfRedTrgModeDropdown);
        }).then(function () {
            Page.eleIntfRedTrgModeDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfRedTrgMode01);
        }).then(function () {
            return Page.eleIntfRedTrgMode01.getText();
        }).then(function (message) {
            expect(message === 'First').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMode02.getText();
        }).then(function (message) {
            expect(message === 'Round Robin').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page._modeIntfRed("Round Robin");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'Round Robin').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Trigger Service -> Priority'
    //
    it('Test field RED Interface -> Trigger Service -> Priority', function () {
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0033").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0036");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0036");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0033", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0036", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgPrioritySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgPrioritySpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgPrioritySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgPrioritySpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgPrioritySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgPrioritySpinner.clear().sendKeys("50");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '50').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgPrioritySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgPrioritySpinner.clear().sendKeys("98");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '98').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgPrioritySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgPrioritySpinner.clear().sendKeys("99");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgPrioritySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgPrioritySpinner.clear().sendKeys("100");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPrioritySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Trigger Service -> Stress Delay (ms)'
    //
    it('Test field RED Interface -> Trigger Service -> Stress Delay (ms)', function () {
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0034").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0037");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0037");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0034", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0037", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgStressDelaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgStressDelaySpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgStressDelaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgStressDelaySpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgStressDelaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgStressDelaySpinner.clear().sendKeys("5000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgStressDelaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgStressDelaySpinner.clear().sendKeys("9999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '9999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgStressDelaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgStressDelaySpinner.clear().sendKeys("10000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgStressDelaySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgStressDelaySpinner.clear().sendKeys("10001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgStressDelaySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Trigger Service -> Maximum Message Length (bytes)'
    //
    it('Test field RED Interface -> Trigger Service -> Maximum Message Length (bytes)', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0035").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0038");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0038");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0035", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0038", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "1024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1024').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.clear().sendKeys("1023");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1024').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1024').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.clear().sendKeys("1025");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1025').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.clear().sendKeys("500000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '500000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.clear().sendKeys("999999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '999999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.clear().sendKeys("1000000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1000000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedTrgMaxMsgLenSpinner.clear().sendKeys("1000001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1000000').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Trigger Service -> Number of Buffers'
    //
    it('Test field RED Interface -> Trigger Service -> Number of Buffers', function () {
        Page.delIntfRedYes("IntfRED0036").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0039");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0039");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0036", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0039", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "4", "3", "2");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '4 is invalid, must be equal to or greater than 5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '3 is invalid, must be equal to or greater than 5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '2 is invalid, must be equal to or greater than 5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool1ValidateMsg.clear().sendKeys("5");
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool2ValidateMsg.clear().sendKeys("5");
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool3ValidateMsg.clear().sendKeys("5");
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
            return Page.eleIntfRedTrgNumOfBufsPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool1Input.clear().sendKeys("6");
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool2Input.clear().sendKeys("7");
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool3Input.clear().sendKeys("8");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '7').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '8').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool1Input.clear().sendKeys("49999");
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool2Input.clear().sendKeys("49998");
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool3Input.clear().sendKeys("49997");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '49999').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '49998').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '49997').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool1Input.clear().sendKeys("50001");
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool2Input.clear().sendKeys("50002");
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool3Input.clear().sendKeys("50003");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '50001 is invalid, must be equal to or less than 50,000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '50002 is invalid, must be equal to or less than 50,000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '50003 is invalid, must be equal to or less than 50,000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool1ValidateMsg.clear().sendKeys("50000");
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool2ValidateMsg.clear().sendKeys("50000");
        }).then(function () {
            Page.eleIntfRedTrgNumOfBufsPool3ValidateMsg.clear().sendKeys("50000");
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
            return Page.eleIntfRedTrgNumOfBufsPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '50000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '50000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgNumOfBufsPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '50000').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Trigger Service -> Buffer Size (bytes)'
    //
    it('Test field RED Interface -> Trigger Service -> Buffer Size (bytes)', function () {
        Page.delIntfRedYes("IntfRED0037").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0040");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0040");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0037", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0040", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "255", "254", "253");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '255 is invalid, must be equal to or greater than 256').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '254 is invalid, must be equal to or greater than 256').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '253 is invalid, must be equal to or greater than 256').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool1ValidateMsg.clear().sendKeys("256");
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool2ValidateMsg.clear().sendKeys("256");
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool3ValidateMsg.clear().sendKeys("256");
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
            return Page.eleIntfRedTrgBufSizePool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '256').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '256').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '256').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool1Input.clear().sendKeys("257");
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool2Input.clear().sendKeys("258");
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool3Input.clear().sendKeys("259");
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
            return Page.eleIntfRedTrgBufSizePool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '257').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '258').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '259').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool1Input.clear().sendKeys("499999");
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool2Input.clear().sendKeys("499998");
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool3Input.clear().sendKeys("499997");
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
            return Page.eleIntfRedTrgBufSizePool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '499999').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '499998').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '499997').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool1Input.clear().sendKeys("500001");
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool2Input.clear().sendKeys("500002");
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool3Input.clear().sendKeys("500003");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '500001 is invalid, must be equal to or less than 500,000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '500002 is invalid, must be equal to or less than 500,000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '500003 is invalid, must be equal to or less than 500,000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool1ValidateMsg.clear().sendKeys("500000");
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool2ValidateMsg.clear().sendKeys("500000");
        }).then(function () {
            Page.eleIntfRedTrgBufSizePool3ValidateMsg.clear().sendKeys("500000");
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
            return Page.eleIntfRedTrgBufSizePool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '500000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '500000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgBufSizePool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '500000').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Trigger Service -> Pacing (μs)'
    //
    it('Test field RED Interface -> Trigger Service -> Pacing (μs)', function () {
        Page.delIntfRedYes("IntfRED0038").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0041");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0041");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0038", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0041", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "0", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgPacingPool1Input.clear().sendKeys("1");
        }).then(function () {
            Page.eleIntfRedTrgPacingPool2Input.clear().sendKeys("2");
        }).then(function () {
            Page.eleIntfRedTrgPacingPool3Input.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgPacingPool1Input.clear().sendKeys("4999999");
        }).then(function () {
            Page.eleIntfRedTrgPacingPool2Input.clear().sendKeys("4999998");
        }).then(function () {
            Page.eleIntfRedTrgPacingPool3Input.clear().sendKeys("4999997");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '4999999').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '4999998').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '4999997').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgPacingPool1Input.clear().sendKeys("5000001");
        }).then(function () {
            Page.eleIntfRedTrgPacingPool2Input.clear().sendKeys("5000002");
        }).then(function () {
            Page.eleIntfRedTrgPacingPool3Input.clear().sendKeys("5000003");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '5000001 is invalid, must be equal to or less than 5,000,000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '5000002 is invalid, must be equal to or less than 5,000,000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '5000003 is invalid, must be equal to or less than 5,000,000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgPacingPool1ValidateMsg.clear().sendKeys("5000000");
        }).then(function () {
            Page.eleIntfRedTrgPacingPool2ValidateMsg.clear().sendKeys("5000000");
        }).then(function () {
            Page.eleIntfRedTrgPacingPool3ValidateMsg.clear().sendKeys("5000000");
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
            return Page.eleIntfRedTrgPacingPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '5000000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '5000000').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgPacingPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '5000000').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Trigger Service -> Trace Level'
    //
    it('Test field RED Interface -> Trigger Service -> Trace Level', function () {
        Page.delIntfRedYes("IntfRED0039").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0042");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0042");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0039", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0042", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "0", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool1Input.clear().sendKeys("1");
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool2Input.clear().sendKeys("1");
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool3Input.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool1Input.clear().sendKeys("2");
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool2Input.clear().sendKeys("2");
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool3Input.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool1Input.clear().sendKeys("3");
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool2Input.clear().sendKeys("3");
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool3Input.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool1Input.clear().sendKeys("4");
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool2Input.clear().sendKeys("4");
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool3Input.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool1Input.clear().sendKeys("6");
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool2Input.clear().sendKeys("7");
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool3Input.clear().sendKeys("8");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '6 is invalid, must be equal to or less than 5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '7 is invalid, must be equal to or less than 5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '8 is invalid, must be equal to or less than 5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool1ValidateMsg.clear().sendKeys("5");
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool2ValidateMsg.clear().sendKeys("5");
        }).then(function () {
            Page.eleIntfRedTrgTrcLvlPool3ValidateMsg.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgTrcLvlPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Trigger Service -> Workers'
    //
    it('Test field RED Interface -> Trigger Service -> Workers', function () {
        Page.delIntfRedYes("IntfRED0040").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0043");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0043");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0040", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0043", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "0", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool1Input.clear().sendKeys("1");
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool2Input.clear().sendKeys("2");
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool3Input.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool1Input.clear().sendKeys("11");
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool2Input.clear().sendKeys("12");
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool3Input.clear().sendKeys("13");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '12').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '13').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool1Input.clear().sendKeys("21");
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool2Input.clear().sendKeys("22");
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool3Input.clear().sendKeys("23");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '21').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '23').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool1Input.clear().sendKeys("31");
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool2Input.clear().sendKeys("32");
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool3Input.clear().sendKeys("33");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '31').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '32').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool1Input.clear().sendKeys("41");
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool2Input.clear().sendKeys("42");
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool3Input.clear().sendKeys("43");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '41 is invalid, must be equal to or less than 40').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '42 is invalid, must be equal to or less than 40').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '43 is invalid, must be equal to or less than 40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool1ValidateMsg.clear().sendKeys("40");
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool2ValidateMsg.clear().sendKeys("40");
        }).then(function () {
            Page.eleIntfRedTrgWorkersPool3ValidateMsg.clear().sendKeys("40");
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
            return Page.eleIntfRedTrgWorkersPool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgWorkersPool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Trigger Service -> Message Name'
    // Related jiras: ZWUI-952(fixed)
    it('Test field RED Interface -> Trigger Service -> Message Name', function () {
        Page.delIntfRedYes("IntfRED0041").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0044");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0044");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0041", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0044", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "@#$ABC789012", "@#$HIJ789012", "@#$OPQ789012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool1Input.clear().sendKeys("#@$456789ABC");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2Input.clear().sendKeys("#@$456789HIJ");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3Input.clear().sendKeys("#@$456789OPQ");
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
            Page.eleIntfRedTrgMsgNamePool1Input.clear().sendKeys("$#@456ABC012");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2Input.clear().sendKeys("$#@456HIJ012");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3Input.clear().sendKeys("$#@456OPQ012");
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
            Page.eleIntfRedTrgMsgNamePool1Input.clear().sendKeys("ABC456@#$012");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2Input.clear().sendKeys("HIJ456@#$012");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3Input.clear().sendKeys("OPQ456@#$012");
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
            Page.eleIntfRedTrgMsgNamePool1Input.clear().sendKeys("ABC456789@#$");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2Input.clear().sendKeys("HIJ456789@#$");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3Input.clear().sendKeys("OPQ456789@#$");
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
            Page.eleIntfRedTrgMsgNamePool1Input.clear().sendKeys("A234567890123");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2Input.clear().sendKeys("H234567890123");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3Input.clear().sendKeys("O234567890123");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A23456789012').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'H23456789012').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3Input.getAttribute("value");
        }).then(function (message) {
            expect(message === 'O23456789012').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool1Input.clear().sendKeys("123@#$ABC");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2Input.clear().sendKeys("123@#$HIJ");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3Input.clear().sendKeys("123@#$OPQ");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool1ValidateMsg.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2ValidateMsg.clear().sendKeys("hIJKL");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3ValidateMsg.clear().sendKeys("oPQRS");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool1ValidateMsg.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2ValidateMsg.clear().sendKeys("HiJKL");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3ValidateMsg.clear().sendKeys("OpQRS");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool1ValidateMsg.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2ValidateMsg.clear().sendKeys("HIJKl");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3ValidateMsg.clear().sendKeys("OPQRs");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool1ValidateMsg.clear().sendKeys("A");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2ValidateMsg.clear().sendKeys("H");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3ValidateMsg.clear().sendKeys("O");
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
            Page.eleIntfRedTrgMsgNamePool1Input.clear().sendKeys("A2");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2Input.clear().sendKeys("H2");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3Input.clear().sendKeys("O2");
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
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool1Input.clear().sendKeys("AA");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2Input.clear().sendKeys("AA");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3Input.clear().sendKeys("AA");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Message Name must be unique among pools').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Message Name must be unique among pools').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Message Name must be unique among pools').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool1ValidateMsg.clear().sendKeys("BB");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2ValidateMsg.clear().sendKeys("BB");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3ValidateMsg.clear().sendKeys("CC");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Message Name must be unique among pools').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Message Name must be unique among pools').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool1ValidateMsg.clear().sendKeys("DD");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2ValidateMsg.clear().sendKeys("EE");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3Input.clear().sendKeys("DD");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool1ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Message Name must be unique among pools').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Message Name must be unique among pools').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool1ValidateMsg.clear().sendKeys("FF");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2Input.clear().sendKeys("GG");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3ValidateMsg.clear().sendKeys("GG");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool2ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Message Name must be unique among pools').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTrgMsgNamePool3ValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Message Name must be unique among pools').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool1Input.clear().sendKeys("HH");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool2ValidateMsg.clear().sendKeys("II");
        }).then(function () {
            Page.eleIntfRedTrgMsgNamePool3ValidateMsg.clear().sendKeys("JJ");
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

    // Test field 'RED Interface Details panel -> Recipe Service -> Workers'
    //
    it('Test field RED Interface -> Recipe Service -> Workers', function () {
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0042").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0045");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0045");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0042", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0045", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.clear().sendKeys("10");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.clear().sendKeys("25");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '25').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.clear().sendKeys("40");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.clear().sendKeys("49");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '49').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.clear().sendKeys("50");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '50').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecWorkersSpinner.clear().sendKeys("51");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '50').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Recipe Service -> Start Dynamic Listeners Level'
    //
    it('Test field RED Interface -> Recipe Service -> Start Dynamic Listeners Level', function () {
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0043").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0046");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0046");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0043", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0046", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "2");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.clear().sendKeys("1000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.clear().sendKeys("1999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.clear().sendKeys("2000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecStartDynLsnsLvlSpinner.clear().sendKeys("2001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecStartDynLsnsLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2000').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Recipe Service -> Maximum Message Length (bytes)'
    //
    it('Test field RED Interface -> Recipe Service -> Maximum Message Length (bytes)', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0044").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0047");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0047");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0044", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0047", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "1024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1024').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.clear().sendKeys("1023");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1024').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1024').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.clear().sendKeys("1025");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1025').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.clear().sendKeys("500000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '500000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.clear().sendKeys("999999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '999999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.clear().sendKeys("1000000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1000000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecMaxMsgLenSpinner.clear().sendKeys("1000001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecMaxMsgLenSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1000000').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Recipe Service -> Number of Buffers'
    //
    it('Test field RED Interface -> Recipe Service -> Number of Buffers', function () {
        var backspaceSeries = Array(7).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0045").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0048");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0048");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0045", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0048", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.clear().sendKeys("50000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '50000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.clear().sendKeys("99999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '99999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.clear().sendKeys("100000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecNumOfBufsSpinner.clear().sendKeys("100001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecNumOfBufsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100000').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Recipe Service -> Buffer Size (bytes)'
    //
    it('Test field RED Interface -> Recipe Service -> Buffer Size (bytes)', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0046").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0049");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0049");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0046", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0049", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "1024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1024').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.clear().sendKeys("1023");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1024').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1024').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.clear().sendKeys("1025");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1025').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.clear().sendKeys("300000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '300000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.clear().sendKeys("499999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '499999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.clear().sendKeys("500000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '500000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufSizeSpinner.clear().sendKeys("500001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '500000').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Recipe Service -> Pacing (μs)'
    //
    it('Test field RED Interface -> Recipe Service -> Pacing (μs)', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0047").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0050");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0050");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0047", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0050", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.clear().sendKeys("6000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '6000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.clear().sendKeys("700000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '700000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.clear().sendKeys("4000000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4000000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.clear().sendKeys("4999999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4999999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.clear().sendKeys("5000000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5000000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecPacingSpinner.clear().sendKeys("5000001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecPacingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5000000').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Recipe Service -> Wait (sec)'
    //
    it('Test field RED Interface -> Recipe Service -> Wait (sec)', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0048").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0051");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0051");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0048", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0051", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecWaitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecWaitSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecWaitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecWaitSpinner.clear().sendKeys("66");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecWaitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecWaitSpinner.clear().sendKeys("100");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecWaitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecWaitSpinner.clear().sendKeys("119");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '119').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecWaitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecWaitSpinner.clear().sendKeys("120");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '120').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecWaitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecWaitSpinner.clear().sendKeys("121");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '120').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Recipe Service -> CICS to Wait (ms)'
    //
    it('Test field RED Interface -> Recipe Service -> CICS to Wait (ms)', function () {
        var backspaceSeries = Array(7).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0049").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0052");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0052");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0049", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0052", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "5000");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.clear().sendKeys("4999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.clear().sendKeys("11111");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '11111').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.clear().sendKeys("44444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.clear().sendKeys("59999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '59999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.clear().sendKeys("60000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '60000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecCicsToWaitSpinner.clear().sendKeys("60001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecCicsToWaitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '60000').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Recipe Service -> Buffer Throttling'
    //
    it('Test field RED Interface -> Recipe Service -> Buffer Throttling', function () {
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        Page.delIntfRedYes("IntfRED0050").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0053");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0053");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0050", "", undefined, undefined, null, null, null, null, null, "EndpointCICSB0053", undefined, undefined, "0", "0", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "40");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.clear().sendKeys("39");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.clear().sendKeys("66");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '66').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.clear().sendKeys("77");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '77').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.clear().sendKeys("94");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '94').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.clear().sendKeys("95");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '95').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfRedRecBufThrottlingSpinner.clear().sendKeys("96");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedRecBufThrottlingSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '95').to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Outbound Mode'
    //
    it('Test field RED Interface -> Outbound Mode', function () {
        Page.delIntfRedYes("IntfRED0051").then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0054");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0054");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0051", "", undefined, "TCP", null, null, null, null, null, "EndpointCICSB0054");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedOutboundModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'TCP').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleIntfRedTcpIntfInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfRedOutboundModeDropdown);
        }).then(function () {
            Page.eleIntfRedOutboundModeDropdown.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfRedOutboundMode01);
        }).then(function () {
            return Page.eleIntfRedOutboundMode01.getText();
        }).then(function (message) {
            expect(message === 'ESB').to.be.true;
        }).then(function () {
            return Page.eleIntfRedOutboundMode02.getText();
        }).then(function (message) {
            expect(message === 'TCP').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page._outboundModeIntfRed("ESB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedOutboundModeDropdown.getText();
        }).then(function (message) {
            expect(message === 'ESB').to.be.true;
        }).then(function () {
            return Page.eleIntfRedEsbIntfInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfRedTcpIntfInput.getAttribute("readonly");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test field 'RED Interface Details panel -> Outbound TCP Interface'
    //
    it('Test field RED Interface -> Outbound TCP Interface', function () {
        Page.delIntfRedYes("IntfRED0052").then(function () {
            Page.delIntfTcpYes("IntfTCPA0001_@#$_2223333333333444444444");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSB0055");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSB0055");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfTcp("IntfTCPA0001_@#$_2223333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRed("IntfRED0052", "", undefined, "TCP", null, null, null, null, "IntfTCPA0001_@#$_2223333333333444444444", "EndpointCICSB0055");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTcpIntfInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfTCPA0001_@#$_2223333333333444444444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTcpIntfInput.clear().sendKeys("ABC");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTcpIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfRedTcpIntfInput.clear().sendKeys("IntfTCPA0001_@#$_22233333333334444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            browser.sleep(500);
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfRedTcpIntfInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfTCPA0001_@#$_2223333333333444444444').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});