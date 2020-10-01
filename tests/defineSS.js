/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.18 Define Substation Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });
    //
    // // Add a Substation.
    // //
    // it('Should add a Substation successfully', function () {
    //     browser.sleep(1000).then(function () {
    //         Page.delSsYes("SS0001");
    //     }).then(function () {
    //         Page.addSs("SS0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     });
    // });
    //
    // // Add a Substation, then replicate it.
    // //
    // it('Should add a Substation, then replicate it successfully', function () {
    //     Page.delSsYes("SS0002-copy").then(function () {
    //         Page.delSsYes("SS0002");
    //     }).then(function () {
    //         Page.addSs("SS0002", "", "SSID002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.replicateSs("SS0002", "SSID002COPY");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     });
    // });
    //
    // // Add a Substation successfully, then update it.
    // //
    // it('Should add a Substation, then update it successfully', function () {
    //     Page.delSsYes("SS0003").then(function () {
    //         Page.delIntfAdmYes("IntfAdminA0001");
    //     }).then(function () {
    //         Page.delIntfAdmYes("IntfAdminA0002");
    //     }).then(function () {
    //         Page.delEndpointAdmYes("EndpointAdminB0001");
    //     }).then(function () {
    //         Page.addEndpointAdm("EndpointAdminB0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addIntfAdm("IntfAdminA0001", "", undefined, "EndpointAdminB0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addIntfAdm("IntfAdminA0002", "", undefined, "EndpointAdminB0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addSs("SS0003", "abcdefg", "SSID003A", "3", "1", "AAAAAAAA", "Print", "1", "4", true, false, "5", "3", "BBBBBBBB", "Syslog", "3", false, "MSGF1", "STSF1", "TRCF1", "555", "11", "33", "7777", false, false, "11111", "IntfAdminA0001");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.updateSs("SS0003", "hijklmn", "SSID003B", "4", "2", "HHHHHHHH", "Syslog", "2", "8", false, true, "2", "2", "IIIIIIII", "Print","4", true, "MSGF2", "STSF2", "TRCF2", "666", "22", "34", "8888", true, true, "22222", "IntfAdminA0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'SS0003').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'hijklmn').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsSsidInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'SSID003B').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFormatSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFileDdnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'HHHHHHHH').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFileDestDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Syslog').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDebugLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogLogToSyslogSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '8').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogConsoleOutputMsgLogRadio.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogConsoleOutputMsgConsoleRadio.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFormatSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFileDdnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IIIIIIII').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFileDestDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Print').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDebugLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStatisticsRecordingCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsMsgStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'MSGF2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStsStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'STSF2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'TRCF2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '666').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsWorkersSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsWorkersEndOfTaskSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '34').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsSnapshotSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '8888').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgProtectCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgFreeCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgSizeMaxSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '22222').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsAdmIntfInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfAdminA0002').to.be.true;
    //     });
    // });
    //
    // // Add a Substation, make some changes, cancel the changes, then confirm the cancel operation.
    // //
    // it('Should add a Substation, cancel the changes, then confirm the cancel operation', function () {
    //     Page.delSsYes("SS0004").then(function () {
    //         Page.delIntfAdmYes("IntfAdminA0003");
    //     }).then(function () {
    //         Page.delIntfAdmYes("IntfAdminA0004");
    //     }).then(function () {
    //         Page.delEndpointAdmYes("EndpointAdminB0002");
    //     }).then(function () {
    //         Page.addEndpointAdm("EndpointAdminB0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addIntfAdm("IntfAdminA0003", "", undefined, "EndpointAdminB0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addIntfAdm("IntfAdminA0004", "", undefined, "EndpointAdminB0002");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addSs("SS0004", "abcdefg", "SSID004A", "3", "1", "AAAAAAAA", "Print","1", "4", true, false, "5", "3", "BBBBBBBB", "Syslog","3", false, "MSGF1", "STSF1", "TRCF1", "555", "11", "33", "7777", false, false, "11111", "IntfAdminA0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.cancelSsYes("SS0004", "hijklmn", "SSID004B", "4", "2", "HHHHHHHH", "Syslog","2", "8", false, true, "2", "2", "IIIIIIII", "Print","4", true, "MSGF2", "STSF2", "TRCF2", "666", "22", "34", "8888", true, true, "22222", "IntfAdminA0004");
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSsLeftmenu);
    //     }).then(function () {
    //         Page.eleSsLeftmenu.click();
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleSearchInput);
    //     }).then(function () {
    //         Page.eleSearchInput.clear().sendKeys("SS0004");
    //     }).then(function () {
    //         Page.eleSearchIcon.click();
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
    //     }).then(function () {
    //         Page.eleEntityNameSearched.click();
    //     }).then(function () {
    //         Page.eleDetailSlideBar.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSsNameInput);
    //     }).then(function () {
    //         return Page.eleSsNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'SS0004').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'abcdefg').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsSsidInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'SSID004A').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFormatSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFileDdnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'AAAAAAAA').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFileDestDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Print').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDebugLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogLogToSyslogSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogConsoleOutputMsgLogRadio.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogConsoleOutputMsgConsoleRadio.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '5').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFormatSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFileDdnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'BBBBBBBB').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFileDestDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Syslog').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDebugLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStatisticsRecordingCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsMsgStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'MSGF1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStsStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'STSF1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'TRCF1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '555').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsWorkersSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '11').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsWorkersEndOfTaskSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '33').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsSnapshotSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '7777').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgProtectCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgFreeCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgSizeMaxSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '11111').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsAdmIntfInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfAdminA0003').to.be.true;
    //     });
    // });
    //
    // // Add a Substation, make some changes, cancel the changes, then discard the cancel operation.
    // //
    // it('Should add a Substation, cancel the changes, then discard the cancel operation', function () {
    //     Page.delSsYes("SS0005").then(function () {
    //         Page.delIntfAdmYes("IntfAdminA0005");
    //     }).then(function () {
    //         Page.delIntfAdmYes("IntfAdminA0006");
    //     }).then(function () {
    //         Page.delEndpointAdmYes("EndpointAdminB0003");
    //     }).then(function () {
    //         Page.addEndpointAdm("EndpointAdminB0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addIntfAdm("IntfAdminA0005", "", undefined, "EndpointAdminB0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addIntfAdm("IntfAdminA0006", "", undefined, "EndpointAdminB0003");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addSs("SS0005", "abcdefg", "SSID005A", "3", "1", "AAAAAAAA", "Print","1", "4", true, false, "5", "3", "BBBBBBBB", "Syslog","3", false, "MSGF1", "STSF1", "TRCF1", "555", "11", "33", "7777", false, false, "11111", "IntfAdminA0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.cancelSsNo("SS0005", "hijklmn", "SSID005B", "4", "2", "HHHHHHHH", "Syslog","2", "8", false, true, "2", "2", "IIIIIIII", "Print","4", true, "MSGF2", "STSF2", "TRCF2", "666", "22", "34", "8888", true, true, "22222", "IntfAdminA0006");
    //     }).then(function () {
    //         return Page.eleSsNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'SS0005').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'hijklmn').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsSsidInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'SSID005B').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFormatSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFileDdnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'HHHHHHHH').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFileDestDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Syslog').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDebugLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogLogToSyslogSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '8').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogConsoleOutputMsgLogRadio.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogConsoleOutputMsgConsoleRadio.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFormatSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFileDdnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IIIIIIII').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFileDestDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Print').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDebugLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStatisticsRecordingCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsMsgStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'MSGF2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStsStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'STSF2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'TRCF2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '666').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsWorkersSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsWorkersEndOfTaskSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '34').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsSnapshotSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '8888').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgProtectCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgFreeCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgSizeMaxSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '22222').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsAdmIntfInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfAdminA0006').to.be.true;
    //     });
    // });
    //
    // // Add a Substation, make some changes, then reset it.
    // //
    // it('Should add a Substation, make some changes, then reset it', function () {
    //     Page.delSsYes("SS0006").then(function () {
    //         Page.delIntfAdmYes("IntfAdminA0007");
    //     }).then(function () {
    //         Page.delIntfAdmYes("IntfAdminA0008");
    //     }).then(function () {
    //         Page.delEndpointAdmYes("EndpointAdminB0004");
    //     }).then(function () {
    //         Page.addEndpointAdm("EndpointAdminB0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addIntfAdm("IntfAdminA0007", "", undefined, "EndpointAdminB0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addIntfAdm("IntfAdminA0008", "", undefined, "EndpointAdminB0004");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addSs("SS0006", "abcdefg", "SSID006A", "3", "1", "AAAAAAAA", "Print","1", "4", true, false, "5", "3", "BBBBBBBB", "Syslog","3", false, "MSGF1", "STSF1", "TRCF1", "555", "11", "33", "7777", false, false, "11111", "IntfAdminA0007");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.resetSs("SS0006", "hijklmn", "SSID006B", "4", "2", "HHHHHHHH", "Syslog","2", "8", false, true, "2", "2", "IIIIIIII", "Print","4", true, "MSGF2", "STSF2", "TRCF2", "666", "22", "34", "8888", true, true, "22222", "IntfAdminA0008");
    //     }).then(function () {
    //         return Page.eleSsNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'SS0006').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'abcdefg').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsSsidInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'SSID006A').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFormatSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFileDdnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'AAAAAAAA').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFileDestDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Print').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDebugLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogLogToSyslogSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogConsoleOutputMsgLogRadio.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogConsoleOutputMsgConsoleRadio.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '5').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFormatSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFileDdnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'BBBBBBBB').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFileDestDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Syslog').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDebugLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStatisticsRecordingCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsMsgStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'MSGF1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStsStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'STSF1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'TRCF1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '555').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsWorkersSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '11').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsWorkersEndOfTaskSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '33').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsSnapshotSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '7777').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgProtectCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgFreeCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgSizeMaxSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '11111').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsAdmIntfInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfAdminA0007').to.be.true;
    //     });
    // });
    //
    // // Add a Substation, then add a Substation with the same name, then confirm the overwrite operation.
    // //
    // it('Should add a Substation to overwrite a Substation, then confirm the overwrite operation', function () {
    //     Page.delSsYes("SS0007").then(function () {
    //         Page.delIntfAdmYes("IntfAdminA0009");
    //     }).then(function () {
    //         Page.delIntfAdmYes("IntfAdminA0010");
    //     }).then(function () {
    //         Page.delEndpointAdmYes("EndpointAdminB0005");
    //     }).then(function () {
    //         Page.addEndpointAdm("EndpointAdminB0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addIntfAdm("IntfAdminA0009", "", undefined, "EndpointAdminB0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addIntfAdm("IntfAdminA0010", "", undefined, "EndpointAdminB0005");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addSs("SS0007", "abcdefg", "SSID007A", "3", "1", "AAAAAAAA", "Print","1", "4", true, false, "5", "3", "BBBBBBBB", "Syslog","3", false, "MSGF1", "STSF1", "TRCF1", "555", "11", "33", "7777", false, false, "11111", "IntfAdminA0009");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.addSs("SS0007", "hijklmn", "SSID007B", "4", "2", "HHHHHHHH", "Syslog","2", "8", false, true, "2", "2", "IIIIIIII", "Print","4", true, "MSGF2", "STSF2", "TRCF2", "666", "22", "34", "8888", true, true, "22222", "IntfAdminA0010");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalPage.eleOKButton);
    //     }).then(function () {
    //         globalPage.eleOKButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSsNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'SS0007').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'hijklmn').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsSsidInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'SSID007B').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFormatSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFileDdnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'HHHHHHHH').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFileDestDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Syslog').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDebugLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogLogToSyslogSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '8').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogConsoleOutputMsgLogRadio.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogConsoleOutputMsgConsoleRadio.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFormatSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFileDdnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IIIIIIII').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFileDestDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Print').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDebugLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStatisticsRecordingCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsMsgStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'MSGF2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStsStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'STSF2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'TRCF2').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '666').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsWorkersSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '22').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsWorkersEndOfTaskSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '34').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsSnapshotSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '8888').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgProtectCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgFreeCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgSizeMaxSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '22222').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsAdmIntfInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfAdminA0010').to.be.true;
    //     });
    // });
    //
    // // Add a Substation, then add a Substation with the same name, then discard the overwrite operation.
    // //
    // it('Should add a Substation to overwrite a Substation, then discard the overwrite operation', function () {
    //     Page.delSsYes("SS0008").then(function () {
    //         Page.delIntfAdmYes("IntfAdminA0011");
    //     }).then(function () {
    //         Page.delIntfAdmYes("IntfAdminA0012");
    //     }).then(function () {
    //         Page.delEndpointAdmYes("EndpointAdminB0006");
    //     }).then(function () {
    //         Page.addEndpointAdm("EndpointAdminB0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addIntfAdm("IntfAdminA0011", "", undefined, "EndpointAdminB0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addIntfAdm("IntfAdminA0012", "", undefined, "EndpointAdminB0006");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         Page.addSs("SS0008", "abcdefg", "SSID008A", "3", "1", "AAAAAAAA", "Print","1", "4", true, false, "5", "3", "BBBBBBBB", "Syslog","3", false, "MSGF1", "STSF1", "TRCF1", "555", "11", "33", "7777", false, false, "11111", "IntfAdminA0011");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.addSs("SS0008", "hijklmn", "SSID008B", "4", "2", "HHHHHHHH", "Syslog","2", "8", false, true, "2", "2", "IIIIIIII", "Print","4", true, "MSGF2", "STSF2", "TRCF2", "666", "22", "34", "8888", true, true, "22222", "IntfAdminA0012");
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalPage.eleNoButton);
    //     }).then(function () {
    //         globalPage.eleNoButton.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSsLeftmenu);
    //     }).then(function () {
    //         Page.eleSsLeftmenu.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(globalPage.eleYesButton);
    //     }).then(function () {
    //         globalPage.eleYesButton.click();
    //     }).then(function () {
    //         Page.eleSearchInput.clear().sendKeys("SS0008");
    //     }).then(function () {
    //         Page.eleSearchIcon.click();
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
    //     }).then(function () {
    //         Page.eleEntityNameSearched.click();
    //     }).then(function () {
    //         Page.eleDetailSlideBar.click();
    //     }).then(function () {
    //         globalCommons.waitForDisplayed(Page.eleSsNameInput);
    //     }).then(function () {
    //         return Page.eleSsNameInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'SS0008').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsDescInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'abcdefg').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsSsidInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'SSID008A').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFormatSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFileDdnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'AAAAAAAA').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogFileDestDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Print').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDebugLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogLogToSyslogSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '4').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogConsoleOutputMsgLogRadio.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === "true").to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogConsoleOutputMsgConsoleRadio.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '5').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFormatSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFileDdnInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'BBBBBBBB').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcFileDestDropdown.getText();
    //     }).then(function (message) {
    //         expect(message === 'Syslog').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDebugLvlSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '3').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStatisticsRecordingCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsMsgStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'MSGF1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStsStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'STSF1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcStreamInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'TRCF1').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '555').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsWorkersSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '11').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsWorkersEndOfTaskSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '33').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsSnapshotSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '7777').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgProtectCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgFreeCheck.getAttribute("checked");
    //     }).then(function (message) {
    //         expect(message === null).to.be.true;
    //     }).then(function () {
    //         return Page.eleSsStgSizeMaxSpinner.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === '11111').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsAdmIntfInput.getAttribute('value');
    //     }).then(function (message) {
    //         expect(message === 'IntfAdminA0011').to.be.true;
    //     });
    // });

    // Add a Substation, delete it, then confirm the delete operation.
    //
    it('Should add a Substation, delete it, then confirm the delete operation', function () {
        Page.delSsYes("SS0009").then(function () {
            Page.addSs("SS0009", "", "SSID009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delSsYes("SS0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("SS0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a Substation, delete it, then discard the delete operation.
    //
    it('Should add a Substation, delete it, then discard the delete operation', function () {
        Page.delSsYes("SS0010").then(function () {
            Page.addSs("SS0010", "", "SSID010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delSsNo("SS0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("SS0010");
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
        Page.delSsYes("SS0011").then(function () {
            Page.addSs("SS0011", "", "SSID011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            browser.sleep(500);
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
            Page.eleAuditButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleTableHeader5.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Test Substation Details panel fields default value.
    //
    it('Test Substation Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleSsLeftmenu);
        }).then(function () {
            Page.eleSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSsNameInput);
        }).then(function () {
            return Page.eleSsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleSsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleSsSsidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '&JOBNAME').to.be.true;
        }).then(function () {
            return Page.eleSsLogLvlSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                Page.eleSsLogTrcExtend.click().then(function () {
                    globalCommons.waitForElementPresent(Page.eleSsLogLvlSpinner);
                });
            }
        }).then(function () {
            return Page.eleSsLogLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleSsLogFormatSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleSsLogFileDdnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TIBLOGPR').to.be.true;
        }).then(function () {
            return Page.eleSsLogFileDestDropdown.getText();
        }).then(function (message) {
            expect(message === 'Print').to.be.true;
        }).then(function () {
            return Page.eleSsLogDebugLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleSsLogLogToSyslogSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '20').to.be.true;
        }).then(function () {
            return Page.eleSsLogConsoleOutputMsgLogRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleSsLogConsoleOutputMsgConsoleRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleSsTrcLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFormatSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFileDdnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TIBTRCPR').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFileDestDropdown.getText();
        }).then(function (message) {
            expect(message === 'Print').to.be.true;
        }).then(function () {
            return Page.eleSsTrcDebugLvlSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleSsStatisticsRecordingCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleSsMsgStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleSsStsStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleSsTrcStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleSsMaxUnitsOfWorkSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                Page.eleSsInitializationExtend.click().then(function () {
                    globalCommons.waitForElementPresent(Page.eleSsMaxUnitsOfWorkSpinner);
                });
            }
        }).then(function () {
            return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '400').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '10').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersEndOfTaskSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '10').to.be.true;
        }).then(function () {
            return Page.eleSsSnapshotSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            return Page.eleSsStgProtectCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleSsStgFreeCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleSsStgSizeMaxSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '50000').to.be.true;
        }).then(function () {
            return Page.eleSsAdmIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test Substation Details panel mandatory fields.
    //
    it('Test Substation Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleSsLeftmenu);
        }).then(function () {
            Page.eleSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSsNameInput);
        }).then(function () {
            Page.eleSsNameInput.clear();
        }).then(function () {
            Page.eleSsDescInput.clear();
        }).then(function () {
            Page.eleSsSsidInput.clear();
        }).then(function () {
            return Page.eleSsLogFileDdnInput.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                Page.eleSsLogTrcExtend.click().then(function () {
                    globalCommons.waitForDisplayed(Page.eleSsLogFileDdnInput);
                });
            }
        }).then(function () {
            Page.eleSsLogFileDdnInput.clear();
        }).then(function () {
            Page.eleSsTrcFileDdnInput.clear();
        }).then(function () {
            return Page.eleSsAdmIntfInput.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                Page.eleSsInitializationExtend.click().then(function () {
                    globalCommons.waitForDisplayed(Page.eleSsAdmIntfInput);
                });
            }
        }).then(function () {
            Page.eleSsAdmIntfInput.clear();
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
            return Page.eleSsNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleSsSsidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &JOBNAME or use $,#,@,A-Z, and 0-9; do not start with 0-9,A-I,SXX,SYS,UNDESIG').to.be.true;
        }).then(function () {
            return Page.eleSsLogFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test field 'Substation Details panel' -> 'Name'
    //
    it('Test field Substation -> Name', function () {
        Page.delSsYes("SS0012_@#$_2222222223333333333444444444").then(function () {
            Page.delSsYes("SS0013_@#$_2222222223333333333444444444");
        }).then(function () {
            Page.addSs("SS0012_@#$_2222222223333333333444444444", "", "SSID012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'SS0012_@#$_2222222223333333333444444444').to.be.true;
        }).then(function () {
            Page.addSs("SS0013_@#$_22222222233333333334444444444", "", "SSID013");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'SS0013_@#$_2222222223333333333444444444').to.be.true;
        });
    });

    // Test field 'Substation Details panel' -> 'Description'
    //
    it('Test field Substation -> Description', function () {
        Page.delSsYes("SS0014").then(function () {
            Page.delSsYes("SS0015");
        }).then(function () {
            Page.addSs("SS0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", "SSID014");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addSs("SS0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111", "SSID015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSsDescValidateMsg);
        }).then(function () {
            return Page.eleSsDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSsDescInput);
        }).then(function () {
            Page.eleSsDescInput.clear().sendKeys("Corrected");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Test field 'Substation Details panel' -> 'Substation ID'
    //
    it('Test field Substation -> Substation ID', function () {
        Page.delSsYes("SS0016").then(function () {
            Page.addSs("SS0016", "", "SSID015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSsSsidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please specify a unique value').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("&JOBNAME");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSsidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '&JOBNAME').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("OPQRSTUVW");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSsidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'OPQRSTUV').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("X");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSsidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'X').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("X2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSsidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'X2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("@#$A1B2C");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSsidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '@#$A1B2C').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("#$A1B2C@");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSsidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#$A1B2C@').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("$A1B2C@#");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSsidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '$A1B2C@#').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("XY-Z");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSsSsidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &JOBNAME or use $,#,@,A-Z, and 0-9; do not start with 0-9,A-I,SXX,SYS,UNDESIG').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("3Y");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSsSsidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &JOBNAME or use $,#,@,A-Z, and 0-9; do not start with 0-9,A-I,SXX,SYS,UNDESIG').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("XyZ");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSsSsidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &JOBNAME or use $,#,@,A-Z, and 0-9; do not start with 0-9,A-I,SXX,SYS,UNDESIG').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("xYZ");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSsSsidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &JOBNAME or use $,#,@,A-Z, and 0-9; do not start with 0-9,A-I,SXX,SYS,UNDESIG').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("AX");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSsSsidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &JOBNAME or use $,#,@,A-Z, and 0-9; do not start with 0-9,A-I,SXX,SYS,UNDESIG').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("EX");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSsSsidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &JOBNAME or use $,#,@,A-Z, and 0-9; do not start with 0-9,A-I,SXX,SYS,UNDESIG').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("IX");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSsSsidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &JOBNAME or use $,#,@,A-Z, and 0-9; do not start with 0-9,A-I,SXX,SYS,UNDESIG').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("SXXY");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSsSsidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &JOBNAME or use $,#,@,A-Z, and 0-9; do not start with 0-9,A-I,SXX,SYS,UNDESIG').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("SYSY");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSsSsidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &JOBNAME or use $,#,@,A-Z, and 0-9; do not start with 0-9,A-I,SXX,SYS,UNDESIG').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("UNDESIGZ");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSsSsidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter &JOBNAME or use $,#,@,A-Z, and 0-9; do not start with 0-9,A-I,SXX,SYS,UNDESIG').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSsidInput.clear().sendKeys("JA");
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
            return Page.eleSsSsidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'JA').to.be.true;
        });
    });

    // Test field 'Substation Details panel -> Log & Trace Level'
    //
    it('Test field Substation -> Log & Trace Level', function () {
        var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
        Page.delSsYes("SS0017").then(function () {
            Page.addSs("SS0017", "", "SSID017", "0", undefined, undefined, undefined, undefined, undefined, true, false, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleSsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogLvlSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcLvlSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleSsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogLvlSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcLvlSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleSsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogLvlSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcLvlSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleSsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogLvlSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcLvlSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleSsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogLvlSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcLvlSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleSsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogLvlSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcLvlSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleSsTrcLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        });
    });

    // Test field 'Substation Details panel -> Log & Trace Format'
    //
    it('Test field Substation -> Log & Trace Format', function () {
        var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
        Page.delSsYes("SS0018").then(function () {
            Page.addSs("SS0018", "", "SSID018", undefined, "1", undefined, undefined,undefined, undefined, true, false, undefined, "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogFormatSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFormatSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogFormatSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSsTrcFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcFormatSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogFormatSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFormatSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogFormatSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSsTrcFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcFormatSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogFormatSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFormatSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogFormatSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSsTrcFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcFormatSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogFormatSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFormatSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogFormatSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSsTrcFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcFormatSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogFormatSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFormatSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        });
    });

    // Test field 'Substation Details panel -> Log & Trace File DDName'
    //
    it('Test field Substation -> Log & Trace File DDName', function () {
        Page.delSsYes("SS0019").then(function () {
            Page.addSs("SS0019", "", "SSID019", undefined, undefined, "@#$123AB", undefined,undefined, undefined, true, false, undefined, undefined, "@#$123HI");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogFileDdnInput.clear().sendKeys("#@$123AB");
        }).then(function () {
            Page.eleSsTrcFileDdnInput.clear().sendKeys("#@$123HI");
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
            Page.eleSsLogFileDdnInput.clear().sendKeys("$#@123AB");
        }).then(function () {
            Page.eleSsTrcFileDdnInput.clear().sendKeys("$#@123HI");
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
            Page.eleSsLogFileDdnInput.clear().sendKeys("AB120@#$");
        }).then(function () {
            Page.eleSsTrcFileDdnInput.clear().sendKeys("HI120@#$");
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
            Page.eleSsLogFileDdnInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleSsTrcFileDdnInput.clear().sendKeys("H23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogFileDdnInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFileDdnInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'H2345678').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogFileDdnInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSsTrcFileDdnInput.clear().sendKeys("123@#$HI");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleSsLogFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogFileDdnInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSsTrcFileDdnInput.clear().sendKeys("hIJKL");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleSsLogFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogFileDdnInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSsTrcFileDdnInput.clear().sendKeys("HiJKL");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleSsLogFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogFileDdnInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSsTrcFileDdnInput.clear().sendKeys("HIJKl");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleSsLogFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleSsTrcFileDdnValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogFileDdnInput.clear().sendKeys("A");
        }).then(function () {
            Page.eleSsTrcFileDdnInput.clear().sendKeys("H");
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
            Page.eleSsLogFileDdnInput.clear().sendKeys("A2");
        }).then(function () {
            Page.eleSsTrcFileDdnInput.clear().sendKeys("H2");
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

    // // Test field 'Substation Details panel -> Log & Trace Disk File DDName'
    // // Related jiras: ZWUI-956(fixed)
    // it('Test field Substation -> Log & Trace Disk File DDName', function () {
    //     Page.delSsYes("SS0020").then(function () {
    //         Page.delSsYes("SS0021");
    //     }).then(function () {
    //         Page.delSsYes("SS0022");
    //     }).then(function () {
    //         Page.addSs("SS0020", "", "SSID020");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSsLogDiskFileAddButton);
    //     }).then(function () {
    //         Page.eleSsLogDiskFileAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSsLogDiskFileDdnValidateMsg);
    //     }).then(function () {
    //         return Page.eleSsLogDiskFileDdnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Empty Value').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSsTrcDiskFileAddButton);
    //     }).then(function () {
    //         Page.eleSsTrcDiskFileAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSsTrcDiskFileDdnValidateMsg);
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Empty Value').to.be.true;
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleCancelButton);
    //     }).then(function () {
    //         Page.eleCancelButton.click();
    //     }).then(function () {
    //         Page.addSs("SS0021", "", "SSID021", undefined, undefined, undefined, undefined, "AAAAAAAAA", "BBBBBBBBB", "CCCCCCCCC", "DDDDDDDDD", "EEEEEEEEE", true, false, false, undefined, undefined, true, false, undefined, undefined, undefined, undefined, "HHHHHHHHH", "IIIIIIIII", "JJJJJJJJJ", "KKKKKKKKK", "LLLLLLLLL");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDiskFileDdnInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'AAAAAAAA').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDiskFileDdn2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'BBBBBBBB').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDiskFileDdn3Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'CCCCCCCC').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDiskFileDdn4Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'DDDDDDDD').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDiskFileDdn5Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'EEEEEEEE').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdnInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'HHHHHHHH').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdn2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'IIIIIIII').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdn3Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'JJJJJJJJ').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdn4Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'KKKKKKKK').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdn5Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'LLLLLLLL').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSsLogDiskFileAddButton);
    //     }).then(function () {
    //         Page.eleSsLogDiskFileAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
    //     }).then(function () {
    //         return globalPage.eleWarningInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Max number of entries is 5').to.be.true;
    //     }).then(function () {
    //         globalPage.eleWarningClose.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSsTrcDiskFileAddButton);
    //     }).then(function () {
    //         Page.eleSsTrcDiskFileAddButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
    //     }).then(function () {
    //         return globalPage.eleWarningInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Max number of entries is 5').to.be.true;
    //     }).then(function () {
    //         globalPage.eleWarningClose.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSsLogDiskFile4RemoveButton);
    //     }).then(function () {
    //         Page.eleSsLogDiskFile4RemoveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSsLogDiskFile2RemoveButton);
    //     }).then(function () {
    //         Page.eleSsLogDiskFile2RemoveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSsTrcDiskFile4RemoveButton);
    //     }).then(function () {
    //         Page.eleSsTrcDiskFile4RemoveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForClickable(Page.eleSsTrcDiskFile2RemoveButton);
    //     }).then(function () {
    //         Page.eleSsTrcDiskFile2RemoveButton.click();
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
    //         return Page.eleSsLogDiskFileDdnInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'AAAAAAAA').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDiskFileDdn2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'CCCCCCCC').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDiskFileDdn3Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'EEEEEEEE').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdnInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'HHHHHHHH').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdn2Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'JJJJJJJJ').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdn3Input.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'LLLLLLLL').to.be.true;
    //     }).then(function () {
    //         Page.addSs("SS0022", "", "SSID022", undefined, undefined, undefined, undefined, "@#$123AB", undefined, undefined, undefined, undefined, true, false, false, undefined, undefined, true, false, undefined, undefined, undefined, undefined, "@#$123HI");
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleSsLogDiskFileDdnInput.clear().sendKeys("#$@123AB");
    //     }).then(function () {
    //         Page.eleSsTrcDiskFileDdnInput.clear().sendKeys("#$@123HI");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleSsLogDiskFileDdnInput.clear().sendKeys("$#@123AB");
    //     }).then(function () {
    //         Page.eleSsTrcDiskFileDdnInput.clear().sendKeys("$#@123HI");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleSsLogDiskFileDdnInput.clear().sendKeys("AB120@#$");
    //     }).then(function () {
    //         Page.eleSsTrcDiskFileDdnInput.clear().sendKeys("HI120@#$");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleSsLogDiskFileDdnInput.clear().sendKeys("A23456789");
    //     }).then(function () {
    //         Page.eleSsTrcDiskFileDdnInput.clear().sendKeys("H23456789");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDiskFileDdnInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'A2345678').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdnInput.getAttribute("value");
    //     }).then(function (message) {
    //         expect(message === 'H2345678').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleSsLogDiskFileDdnInput.clear().sendKeys("123@#$AB");
    //     }).then(function () {
    //         Page.eleSsTrcDiskFileDdnInput.clear().sendKeys("123@#$HI");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSsLogDiskFileDdnValidateMsg);
    //     // }).then(function () {
    //     //     return Page.eleSaveInfo.getText();
    //     // }).then(function (message) {
    //     //     expect(message === 'There are errors on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDiskFileDdnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
    //     // }).then(function () {
    //     //     Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleSsLogDiskFileDdnInput.clear().sendKeys("aBCDE");
    //     }).then(function () {
    //         Page.eleSsTrcDiskFileDdnInput.clear().sendKeys("hIJKL");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSsLogDiskFileDdnValidateMsg);
    //     // }).then(function () {
    //     //     return Page.eleSaveInfo.getText();
    //     // }).then(function (message) {
    //     //     expect(message === 'There are errors on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDiskFileDdnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
    //     // }).then(function () {
    //     //     Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleSsLogDiskFileDdnInput.clear().sendKeys("AbCDE");
    //     }).then(function () {
    //         Page.eleSsTrcDiskFileDdnInput.clear().sendKeys("HiJKL");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSsLogDiskFileDdnValidateMsg);
    //     // }).then(function () {
    //     //     return Page.eleSaveInfo.getText();
    //     // }).then(function (message) {
    //     //     expect(message === 'There are errors on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDiskFileDdnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
    //     // }).then(function () {
    //     //     Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleSsLogDiskFileDdnInput.clear().sendKeys("ABCDe");
    //     }).then(function () {
    //         Page.eleSsTrcDiskFileDdnInput.clear().sendKeys("HIJKl");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSsLogDiskFileDdnValidateMsg);
    //     // }).then(function () {
    //     //     return Page.eleSaveInfo.getText();
    //     // }).then(function (message) {
    //     //     expect(message === 'There are errors on this form').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsLogDiskFileDdnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
    //     }).then(function () {
    //         return Page.eleSsTrcDiskFileDdnValidateMsg.getText();
    //     }).then(function (message) {
    //         expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
    //     // }).then(function () {
    //     //     Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleSsLogDiskFileDdnInput.clear().sendKeys("A");
    //     }).then(function () {
    //         Page.eleSsTrcDiskFileDdnInput.clear().sendKeys("H");
    //     }).then(function () {
    //         Page.eleSaveButton.click();
    //     }).then(function () {
    //         globalCommons.waitForElementPresent(Page.eleSaveInfo);
    //     }).then(function () {
    //         return Page.eleSaveInfo.getText();
    //     }).then(function (message) {
    //         expect(message === 'Saved successfully.').to.be.true;
    //     }).then(function () {
    //         Page.eleSaveInfoClose.click();
    //     }).then(function () {
    //         Page.eleSsLogDiskFileDdnInput.clear().sendKeys("A2");
    //     }).then(function () {
    //         Page.eleSsTrcDiskFileDdnInput.clear().sendKeys("H2");
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

    // Test field 'Substation Details panel -> Log & Trace Debug Level'
    //
    it('Test field Substation -> Log & Trace Debug Level', function () {
        var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
        Page.delSsYes("SS0020").then(function () {
            Page.addSs("SS0020", "", "SSID020", undefined, undefined, undefined, undefined,"0", undefined, true, false, undefined, undefined, undefined, undefined,"0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleSsTrcDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogDebugLvlSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSsTrcDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcDebugLvlSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleSsTrcDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogDebugLvlSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSsTrcDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcDebugLvlSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleSsTrcDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogDebugLvlSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSsTrcDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcDebugLvlSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleSsTrcDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogDebugLvlSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSsTrcDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcDebugLvlSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleSsTrcDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogDebugLvlSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSsTrcDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcDebugLvlSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleSsTrcDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogDebugLvlSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSsTrcDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsTrcDebugLvlSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleSsTrcDebugLvlSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        });
    });

    // Test field 'Substation Details panel -> Log to SYSLOG'
    //
    it('Test field Substation -> Log to SYSLOG', function () {
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        Page.delSsYes("SS0021").then(function () {
            Page.addSs("SS0021", "", "SSID021");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLogToSyslogSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '20').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogLogToSyslogSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogLogToSyslogSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLogToSyslogSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogLogToSyslogSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogLogToSyslogSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLogToSyslogSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogLogToSyslogSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogLogToSyslogSpinner.clear().sendKeys("10");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLogToSyslogSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogLogToSyslogSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogLogToSyslogSpinner.clear().sendKeys("19");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLogToSyslogSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '19').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogLogToSyslogSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogLogToSyslogSpinner.clear().sendKeys("21");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLogToSyslogSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '19').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsLogLogToSyslogSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsLogLogToSyslogSpinner.clear().sendKeys("123");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsLogLogToSyslogSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '12').to.be.true;
        });
    });

    // Test field 'Substation Details panel -> Substation Messages Stream, Substation Statistics Stream, Substation Trace Stream'
    //
    it('Test field Substation -> Substation Messages Stream, Substation Statistics Stream, Substation Trace Stream', function () {
        Page.delSsYes("SS0022").then(function () {
            Page.addSs("SS0022", "", "SSID022");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMsgStreamInput.clear().sendKeys("@#$MSG7890123456....123456");
        }).then(function () {
            Page.eleSsStsStreamInput.clear().sendKeys("#STS.7890123456.123456.$@");
        }).then(function () {
            Page.eleSsTrcStreamInput.clear().sendKeys("$7890.123456..123456.@#TRC");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMsgStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '@#$MSG7890123456....123456').to.be.true;
        }).then(function () {
            return Page.eleSsStsStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '#STS.7890123456.123456.$@').to.be.true;
        }).then(function () {
            return Page.eleSsTrcStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '$7890.123456..123456.@#TRC').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMsgStreamInput.clear().sendKeys("MSG@#$78.01234567890ABC.EF");
        }).then(function () {
            Page.eleSsStsStreamInput.clear().sendKeys("STS@#$ABC0123456789012345.");
        }).then(function () {
            Page.eleSsTrcStreamInput.clear().sendKeys("TRC7890.123456.7.123456.@#");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMsgStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MSG@#$78.01234567890ABC.EF').to.be.true;
        }).then(function () {
            return Page.eleSsStsStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'STS@#$ABC0123456789012345.').to.be.true;
        }).then(function () {
            return Page.eleSsTrcStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'TRC7890.123456.7.123456.@#').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMsgStreamInput.clear().sendKeys("ABC@#$123");
        }).then(function () {
            Page.eleSsStsStreamInput.clear().sendKeys("#ABC123@$");
        }).then(function () {
            Page.eleSsTrcStreamInput.clear().sendKeys("@#$123ABC");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMsgStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ABC@#$123').to.be.true;
        }).then(function () {
            return Page.eleSsStsStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '#ABC123@$').to.be.true;
        }).then(function () {
            return Page.eleSsTrcStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '@#$123ABC').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMsgStreamInput.clear().sendKeys("X");
        }).then(function () {
            Page.eleSsStsStreamInput.clear().sendKeys("#");
        }).then(function () {
            Page.eleSsTrcStreamInput.clear().sendKeys("@");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMsgStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'X').to.be.true;
        }).then(function () {
            return Page.eleSsStsStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '#').to.be.true;
        }).then(function () {
            return Page.eleSsTrcStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '@').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMsgStreamInput.clear().sendKeys("123A");
        }).then(function () {
            Page.eleSsStsStreamInput.clear().sendKeys("ABCd");
        }).then(function () {
            Page.eleSsTrcStreamInput.clear().sendKeys(".ABC");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleSsMsgStreamValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,., and 0-9; do not start with 0-9 or .').to.be.true;
        }).then(function () {
            return Page.eleSsStsStreamValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,., and 0-9; do not start with 0-9 or .').to.be.true;
        }).then(function () {
            return Page.eleSsTrcStreamValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,., and 0-9; do not start with 0-9 or .').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMsgStreamInput.clear().sendKeys("A23456789012345678901234567");
        }).then(function () {
            Page.eleSsStsStreamInput.clear().sendKeys("@@@@@@@@@@##########$$$$$$$");
        }).then(function () {
            Page.eleSsTrcStreamInput.clear().sendKeys("AAAAAAAAAABBBBBBBBBB.......");
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
            return Page.eleSsMsgStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'A2345678901234567890123456').to.be.true;
        }).then(function () {
            return Page.eleSsStsStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '@@@@@@@@@@##########$$$$$$').to.be.true;
        }).then(function () {
            return Page.eleSsTrcStreamInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBB......').to.be.true;
        });
    });

    // Test field 'Substation Details panel -> Maximum Units of Work'
    //
    it('Test field Substation -> Maximum Units of Work', function () {
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);
        Page.delSsYes("SS0023").then(function () {
            Page.addSs("SS0023", "", "SSID023");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '400').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys("200");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '200').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys("199");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '200').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '200').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys("201");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '201').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys("1000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys("2000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys("2047");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2047').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys("2048");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2048').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys("2049");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsMaxUnitsOfWorkSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2048').to.be.true;
        });
    });

    // Test field 'Substation Details panel -> Workers'
    //
    it('Test field Substation -> Workers', function () {
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        Page.delSsYes("SS0024").then(function () {
            Page.addSs("SS0024", "", "SSID024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersSpinner.clear().sendKeys("9");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersSpinner.clear().sendKeys("11");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersSpinner.clear().sendKeys("20");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '20').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersSpinner.clear().sendKeys("30");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersSpinner.clear().sendKeys("35");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '35').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersSpinner.clear().sendKeys("39");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '39').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersSpinner.clear().sendKeys("40");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersSpinner.clear().sendKeys("41");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        });
    });

    // Test field 'Substation Details panel -> Workers(End of Task)'
    //
    it('Test field Substation -> Workers(End of Task)', function () {
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        Page.delSsYes("SS0025").then(function () {
            Page.addSs("SS0025", "", "SSID025");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersEndOfTaskSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersEndOfTaskSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersEndOfTaskSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersEndOfTaskSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersEndOfTaskSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.clear().sendKeys("20");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersEndOfTaskSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '20').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.clear().sendKeys("30");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersEndOfTaskSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.clear().sendKeys("39");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersEndOfTaskSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '39').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.clear().sendKeys("40");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersEndOfTaskSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsWorkersEndOfTaskSpinner.clear().sendKeys("41");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsWorkersEndOfTaskSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        });
    });

    // Test field 'Substation Details panel -> Snapshot'
    //
    it('Test field Substation -> Snapshot', function () {
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        Page.delSsYes("SS0026").then(function () {
            Page.addSs("SS0026", "", "SSID026");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSnapshotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsSnapshotSpinner.clear().sendKeys("99");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSnapshotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsSnapshotSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSnapshotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsSnapshotSpinner.clear().sendKeys("101");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSnapshotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '101').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsSnapshotSpinner.clear().sendKeys("444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSnapshotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsSnapshotSpinner.clear().sendKeys("5555");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSnapshotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsSnapshotSpinner.clear().sendKeys("8888");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSnapshotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '8888').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsSnapshotSpinner.clear().sendKeys("9999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSnapshotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '9999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsSnapshotSpinner.clear().sendKeys("10000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSnapshotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsSnapshotSpinner.clear().sendKeys("10001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsSnapshotSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10000').to.be.true;
        });
    });

    // Test field 'Substation Details panel -> Storage Size Maximum (bytes)'
    //
    it('Test field Substation -> Storage Size Maximum (bytes)', function () {
        var backspaceSeries = Array(7).join(protractor.Key.BACK_SPACE);
        Page.delSsYes("SS0027").then(function () {
            Page.addSs("SS0027", "", "SSID027");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsStgSizeMaxSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '50000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.clear().sendKeys("4000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsStgSizeMaxSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.clear().sendKeys("3999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsStgSizeMaxSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsStgSizeMaxSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.clear().sendKeys("4001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsStgSizeMaxSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4001').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.clear().sendKeys("5555");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsStgSizeMaxSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5555').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.clear().sendKeys("66666");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsStgSizeMaxSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '66666').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.clear().sendKeys("100000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsStgSizeMaxSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.clear().sendKeys("199999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsStgSizeMaxSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '199999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.clear().sendKeys("200000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsStgSizeMaxSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '200000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleSsStgSizeMaxSpinner.clear().sendKeys("200001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsStgSizeMaxSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '200000').to.be.true;
        });
    });

    // Test field 'Substation Details panel -> Admin Interface'
    //
    it('Test field Substation -> Admin Interface', function () {
        Page.delSsYes("SS0028").then(function () {
            Page.delIntfAdmYes("IntfAdminA0013_@#$_23333333333444444444");
        }).then(function () {
            Page.delEndpointAdmYes("EndpointAdminB0007");
        }).then(function () {
            Page.addEndpointAdm("EndpointAdminB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfAdm("IntfAdminA0013_@#$_23333333333444444444", "", undefined, "EndpointAdminB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addSs("SS0028", "", "SSID028");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsAdmIntfInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleSsAdmIntfInput.clear().sendKeys("ABC");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleSsAdmIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleSsAdmIntfInput.clear().sendKeys("IntfAdminA0013_@#$_233333333334444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleSsAdmIntfInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfAdminA0013_@#$_23333333333444444444').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});