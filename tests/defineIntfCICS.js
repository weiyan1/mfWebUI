/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.13 Define Interfaces CICS Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a CICS Interface with EMS Output Interface.
    //
    it('Should add a CICS Interface with EMS Output Interface successfully', function () {
        browser.sleep(2000).then(function () {
            Page.delIntfCicsYes("IntfCICS0001");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSB0001");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0001");
        }).then(function () {
            Page.addIntfEms("IntfEMSB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0001", "", undefined, "IntfEMSB0001", "EndpointCICSA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a CICS Interface with RV Output Interface, then replicate it.
    //
    it('Should add a CICS Interface with RV Output Interface, then replicate it successfully', function () {
        Page.delIntfCicsYes("IntfCICS0002-copy").then(function () {
            Page.delIntfCicsYes("IntfCICS0002");
        }).then(function () {
            Page.delIntfRvYes("IntfRVB0001");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0002");
        }).then(function () {
            Page.addIntfRv("IntfRVB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0002", "", undefined, "IntfRVB0001", "EndpointCICSA0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateIntfCics("IntfCICS0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a CICS Interface successfully, then update it.
    //
    it('Should add a CICS Interface, then update it successfully', function () {
        Page.delIntfCicsYes("IntfCICS0003").then(function () {
            Page.delIntfEmsYes("IntfEMSB0002");
        }).then(function () {
            Page.delIntfRvYes("IntfRVB0002");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0003");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0004");
        }).then(function () {
            Page.addIntfEms("IntfEMSB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0003", "abcdefg", "INTFID01", "IntfEMSB0002", "EndpointCICSA0003", "ABCD", "USERID01", false, false, "11", "1", "3", "11111", true, false, "1", true, false, "3", "111", "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateIntfCics("IntfCICS0003", "hijklmn", "INTFID02", "IntfRVB0002", "EndpointCICSA0004", "HIJK", "USERID02", true, true, "22", "2", "4", "22222", true, "2", false, true, "4", "222", "2");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICS0003').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVB0002').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICSA0004').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HIJK').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID02').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRequestReplyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEsbRequestReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsGuaranteedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRRMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22222').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTsqSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        });
    });

    // Add a CICS Interface, make some changes, cancel the changes, then confirm the cancel operation.
    // Related jiras: ZWUI-949(fixed)
    it('Should add a CICS Interface, cancel the changes, then confirm the cancel operation', function () {
        Page.delIntfCicsYes("IntfCICS0004").then(function () {
            Page.delIntfEmsYes("IntfEMSB0003");
        }).then(function () {
            Page.delIntfRvYes("IntfRVB0003");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0005");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0006");
        }).then(function () {
            Page.addIntfEms("IntfEMSB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0004", "abcdefg", "INTFID01", "IntfEMSB0003", "EndpointCICSA0005", "ABCD", "USERID01", false, false, "11", "1", "3", "11111", true, false, "1", true, false, "3", "111", "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfCicsYes("IntfCICS0004", "hijklmn", "INTFID02", "IntfRVB0003", "EndpointCICSA0006", "HIJK", "USERID02", true, true, "22", "2", "4", "22222", false, true, "2", false, true, "4", "222", "2");
        }).then(function () {
            Page.eleIntfsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfCICS0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfCicsNameInput);
        }).then(function () {
            return Page.eleIntfCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICS0004').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSB0003').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICSA0005').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ABCD').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID01').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRequestReplyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEsbRequestReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsGuaranteedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRRMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11111').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTsqSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        });
    });

    // Add a CICS Interface, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a CICS Interface, cancel the changes, then discard the cancel operation', function () {
        Page.delIntfCicsYes("IntfCICS0005").then(function () {
            Page.delIntfEmsYes("IntfEMSB0004");
        }).then(function () {
            Page.delIntfRvYes("IntfRVB0004");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0007");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0008");
        }).then(function () {
            Page.addIntfEms("IntfEMSB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0005", "abcdefg", "INTFID01", "IntfEMSB0004", "EndpointCICSA0007", "ABCD", "USERID01", false, false, "11", "1", "3", "11111", true, false, "1", true, false, "3", "111", "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfCicsNo("IntfCICS0005", "hijklmn", "INTFID02", "IntfRVB0004", "EndpointCICSA0008", "HIJK", "USERID02", true, true, "22", "2", "4", "22222", false, true, "2", false, true, "4", "222", "2");
        }).then(function () {
            return Page.eleIntfCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICS0005').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVB0004').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICSA0008').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HIJK').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID02').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRequestReplyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEsbRequestReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsGuaranteedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRRMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22222').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTsqSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        });
    });

    // Add a CICS Interface, make some changes, then reset it.
    // Related jiras: ZWUI-949(fixed)
    it('Should add a CICS Interface, make some changes, then reset it', function () {
        Page.delIntfCicsYes("IntfCICS0006").then(function () {
            Page.delIntfEmsYes("IntfEMSB0005");
        }).then(function () {
            Page.delIntfRvYes("IntfRVB0005");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0009");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0010");
        }).then(function () {
            Page.addIntfEms("IntfEMSB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0006", "abcdefg", "INTFID01", "IntfEMSB0005", "EndpointCICSA0009", "ABCD", "USERID01", false, false, "11", "1", "3", "11111", true, false, "1", true, false, "3", "111", "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetIntfCics("IntfCICS0006", "hijklmn", "INTFID02", "IntfRVB0005", "EndpointCICSA0010", "HIJK", "USERID02", true, true, "22", "2", "4", "22222", false, true, "2", false, true, "4", "222", "2");
        }).then(function () {
            return Page.eleIntfCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICS0006').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSB0005').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICSA0009').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ABCD').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID01').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRequestReplyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEsbRequestReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsGuaranteedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRRMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11111').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTsqSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        });
    });

    // Add a CICS Interface, then add a CICS Interface with the same name, then confirm the overwrite operation.
    //
    it('Should add a CICS Interface to overwrite a CICS Interface, then confirm the overwrite operation', function () {
        Page.delIntfCicsYes("IntfCICS0007").then(function () {
            Page.delIntfEmsYes("IntfEMSB0006");
        }).then(function () {
            Page.delIntfRvYes("IntfRVB0006");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0011");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0012");
        }).then(function () {
            Page.addIntfEms("IntfEMSB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0007", "abcdefg", "INTFID01", "IntfEMSB0006", "EndpointCICSA0011", "ABCD", "USERID01", false, false, "11", "1", "3", "11111", true, false, "1", true, false, "3", "111", "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfCics("IntfCICS0007", "hijklmn", "INTFID02", "IntfRVB0006", "EndpointCICSA0012", "HIJK", "USERID02", true, true, "22", "2", "4", "22222", false, true, "2", false, true, "4", "222", "2");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleIntfCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICS0007').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVB0006').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICSA0012').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HIJK').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID02').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRequestReplyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEsbRequestReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsGuaranteedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRRMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22222').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTsqSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        });
    });

    // Add a CICS Interface, then add a CICS Interface with the same name, then discard the overwrite operation.
    // Related jiras: ZWUI-949(fixed)
    it('Should add a CICS Interface to overwrite a CICS Interface, then discard the overwrite operation', function () {
        Page.delIntfCicsYes("IntfCICS0008").then(function () {
            Page.delIntfEmsYes("IntfEMSB0007");
        }).then(function () {
            Page.delIntfRvYes("IntfRVB0007");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0013");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0014");
        }).then(function () {
            Page.addIntfEms("IntfEMSB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0013");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0014");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0008", "abcdefg", "INTFID01", "IntfEMSB0007", "EndpointCICSA0013", "ABCD", "USERID01", false, false, "11", "1", "3", "11111", true, false, "1", true, false, "3", "111", "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfCics("IntfCICS0008", "hijklmn", "INTFID02", "IntfRVB0007", "EndpointCICSA0014", "HIJK", "USERID02", true, true, "22", "2", "4", "22222", false, true, "2", false, true, "4", "222", "2");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsCicsLeftmenu);
        }).then(function () {
            Page.eleIntfsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfCICS0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfCicsNameInput);
        }).then(function () {
            return Page.eleIntfCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfCICS0008').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSB0007').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICSA0013').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ABCD').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'USERID01').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRequestReplyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEsbRequestReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsGuaranteedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRRMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11111').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTsqSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        });
    });

    // Add a CICS Interface, delete it, then confirm the delete operation.
    //
    it('Should add a CICS Interface, delete it, then confirm the delete operation', function () {
        Page.delIntfCicsYes("IntfCICS0009").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0015");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0009", "", undefined, "", "EndpointCICSA0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfCicsYes("IntfCICS0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfCICS0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a CICS Interface, delete it, then discard the delete operation.
    //
    it('Should add a CICS Interface, delete it, then discard the delete operation', function () {
        Page.delIntfCicsYes("IntfCICS0010").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0016");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0010", "", undefined, "", "EndpointCICSA0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfCicsNo("IntfCICS0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfCICS0010");
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
        Page.delIntfCicsYes("IntfCICS0015").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0019");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0015", "", undefined, "", "EndpointCICSA0019");
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
            Page.eleAuditButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleTableHeader3.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Test CICS Interface Details panel fields default value.
    //
    it('Test CICS Interface Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsCicsLeftmenu);
        }).then(function () {
            Page.eleIntfsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfCicsNameInput);
        }).then(function () {
            return Page.eleIntfCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRequestReplyCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEsbRequestReplySpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsGuaranteedSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRRMaxSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '16000').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchingYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '50').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTsqSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test CICS Interface Details panel mandatory fields.
    //
    it('Test CICS Interface Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsCicsLeftmenu);
        }).then(function () {
            Page.eleIntfsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleAddButton);
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
            return Page.eleIntfCicsNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsIntfidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEndpointValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'CICS Interface Details panel' -> 'Name'
    //
    it('Test field CICS Interface -> Name', function () {
        Page.delIntfCicsYes("IntfCICS0011_@#$_2223333333333444444444").then(function () {
            Page.delIntfCicsYes("IntfCICS0012_@#$_2223333333333444444444");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0017");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0017");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0011_@#$_2223333333333444444444", "", undefined, "", "EndpointCICSA0017");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICS0011_@#$_2223333333333444444444').to.be.true;
        }).then(function () {
            Page.addIntfCics("IntfCICS0012_@#$_22233333333334444444444", "", undefined, "", "EndpointCICSA0017");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfCICS0012_@#$_2223333333333444444444').to.be.true;
        });
    });

    // Test field 'CICS Interface Details panel' -> 'Description'
    //
    it('Test field CICS Interface -> Description', function () {
        Page.delIntfCicsYes("IntfCICS0013").then(function () {
            Page.delIntfCicsYes("IntfCICS0014");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0018");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0013", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", undefined, "", "EndpointCICSA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addIntfCics("IntfCICS0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111", undefined, "", "EndpointCICSA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfCicsDescValidateMsg);
        }).then(function () {
            return Page.eleIntfCicsDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfCicsDescInput);
        }).then(function () {
            Page.eleIntfCicsDescInput.clear().sendKeys("Corrected");
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

    // Test field 'CICS Interface Details panel' -> 'Interface ID'
    //
    it('Test field CICS Interface -> Interface ID', function () {
        Page.delIntfCicsYes("IntfCICS0015").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0019");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0015", "", "!@#$%^&*", "", "EndpointCICSA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '!@#$%^&*').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsIntfidInput.clear().sendKeys("aBcDeFgH");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'aBcDeFgH').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsIntfidInput.clear().sendKeys("123456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '12345678').to.be.true;
        });
    });

    // Test field 'CICS Interface Details panel -> Output Interface & CICS Endpoint'
    //
    it('Test field CICS Interface -> Output Interface & CICS Endpoint', function () {
        Page.delIntfCicsYes("IntfCICS0016").then(function () {
            Page.delIntfEmsYes("IntfEMSB0008_@#$_2223333333333444444444");
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0020_@#$_33333333444444444");
        }).then(function () {
            Page.addIntfEms("IntfEMSB0008_@#$_2223333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0020_@#$_33333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0016", "", undefined, "AAA", "BBB");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOutputIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEndpointValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsOutputIntfInput.clear().sendKeys("IntfEMSB0008_@#$_2223333333333444444444");
        }).then(function () {
            Page.eleIntfCicsEndpointInput.clear().sendKeys("EndpointCICSA0020_@#$_33333333444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsOutputIntfInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfEMSB0008_@#$_2223333333333444444444').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEndpointInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointCICSA0020_@#$_33333333444444444').to.be.true;
        });
    });

    // Test field 'CICS Interface Details panel -> Mirror Transaction ID'
    //
    it('Test field CICS Interface -> Mirror Transaction ID', function () {
        Page.delIntfCicsYes("IntfCICS0017").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0021");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0021");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0017", "", undefined, "", "EndpointCICSA0021", "@#$&");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsMirrorTranidInput.clear().sendKeys("@Aa2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsMirrorTranidInput.clear().sendKeys("a");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z,0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleIntfCicsMirrorTranidInput.clear().sendKeys("#");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsMirrorTranidInput.clear().sendKeys("A");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsMirrorTranidInput.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsMirrorTranidInput.clear().sendKeys("#@A2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '#@A2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsMirrorTranidInput.clear().sendKeys("A$#2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A$#2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsMirrorTranidInput.clear().sendKeys("2A$@");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsMirrorTranidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '2A$@').to.be.true;
        });
    });

    // Test field 'CICS Interface Details panel -> User ID'
    //
    it('Test field CICS Interface -> User ID', function () {
        Page.delIntfCicsYes("IntfCICS0018").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0022");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0022");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0018", "", undefined, "", "EndpointCICSA0022", "", "@#$AB123");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsUseridInput.clear().sendKeys("#@$123AB");
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
            Page.eleIntfCicsUseridInput.clear().sendKeys("$#@123AB");
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
            Page.eleIntfCicsUseridInput.clear().sendKeys("AB120@#$");
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
            Page.eleIntfCicsUseridInput.clear().sendKeys("A23456789");
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
            Page.eleIntfCicsUseridInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsUseridValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsUseridInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsUseridValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsUseridInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsUseridValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsUseridInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsUseridValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleIntfCicsUseridInput.clear().sendKeys("A");
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
            Page.eleIntfCicsUseridInput.clear().sendKeys("A2");
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

    // Test field 'CICS Interface Details panel' -> 'Workers ESB Request/Reply'
    //
    it('Test field CICS Interface -> Workers ESB Request/Reply', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfCicsYes("IntfCICS0019").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0023");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0023");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0019", "", undefined, "", "EndpointCICSA0023", "", "", false, false, "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEsbRequestReplySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsEsbRequestReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsEsbRequestReplySpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEsbRequestReplySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsEsbRequestReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsEsbRequestReplySpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEsbRequestReplySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsEsbRequestReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsEsbRequestReplySpinner.clear().sendKeys("33");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEsbRequestReplySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsEsbRequestReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsEsbRequestReplySpinner.clear().sendKeys("40");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEsbRequestReplySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsEsbRequestReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsEsbRequestReplySpinner.clear().sendKeys("41");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsEsbRequestReplySpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        });
    });

    // Test field 'CICS Interface Details panel' -> 'Workers Triggers Guaranteed'
    //
    it('Test field CICS Interface -> Workers Triggers Guaranteed', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfCicsYes("IntfCICS0020").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0024");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0020", "", undefined, "", "EndpointCICSA0024", "", "", false, false, "1", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsGuaranteedSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsGuaranteedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsGuaranteedSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsGuaranteedSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsGuaranteedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsGuaranteedSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsGuaranteedSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsGuaranteedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsGuaranteedSpinner.clear().sendKeys("7");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsGuaranteedSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '7').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsGuaranteedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsGuaranteedSpinner.clear().sendKeys("10");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsGuaranteedSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsGuaranteedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsGuaranteedSpinner.clear().sendKeys("11");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsGuaranteedSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10').to.be.true;
        });
    });

    // Test field 'CICS Interface Details panel' -> 'Workers Triggers Reliable'
    //
    it('Test field CICS Interface -> Workers Triggers Reliable', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfCicsYes("IntfCICS0021").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0025");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0025");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0021", "", undefined, "", "EndpointCICSA0025", "", "", false, false, "1", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsReliableSpinner.clear().sendKeys("7");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsReliableSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '6').to.be.true;
        });
    });

    // Test field 'CICS Interface Details panel' -> 'CICS Request/Reply Max Size (bytes)'
    //
    it('Test field CICS Interface -> CICS Request/Reply Max Size (bytes)', function () {
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        Page.delIntfCicsYes("IntfCICS0022").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0026");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0026");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0022", "", undefined, "", "EndpointCICSA0026", "", "", false, false, "1", "0", "0", "256");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRRMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '256').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsRRMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsRRMaxSizeSpinner.clear().sendKeys("255");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRRMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '256').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsRRMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsRRMaxSizeSpinner.clear().sendKeys("20000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRRMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '20000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsRRMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsRRMaxSizeSpinner.clear().sendKeys("30001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRRMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '30001').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsRRMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsRRMaxSizeSpinner.clear().sendKeys("32000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRRMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '32000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsRRMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsRRMaxSizeSpinner.clear().sendKeys("32001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsRRMaxSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '32000').to.be.true;
        });
    });

    // Test field 'CICS Interface Details panel' -> 'Trace Level: Trigger'
    //
    it('Test field CICS Interface -> Trace Level: Trigger', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfCicsYes("IntfCICS0023").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0027");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0027");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0023", "", undefined, "", "EndpointCICSA0027", "", "", false, false, "1", "0", "0", "16000", false, false, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsTrcLvlTrgSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsTrcLvlTrgSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsTrcLvlTrgSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsTrcLvlTrgSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        });
    });

    // Test field 'CICS Interface Details panel' -> 'TSQ Processing Workers'
    //
    it('Test field CICS Interface -> TSQ Processing Workers', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfCicsYes("IntfCICS0024").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0028");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0028");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0024", "", undefined, "", "EndpointCICSA0028", "", "", false, false, "1", "0", "0", "16000", false, false, "0", false, false, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsWorkersSpinner.clear().sendKeys("7");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '6').to.be.true;
        });
    });

    // Test field 'CICS Interface Details panel' -> 'TSQ Processing Batch Size'
    //
    it('Test field CICS Interface -> TSQ Processing Batch Size', function () {
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);
        Page.delIntfCicsYes("IntfCICS0025").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0029");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0029");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0025", "", undefined, "", "EndpointCICSA0029", "", "", false, false, "1", "0", "0", "16000", false, false, "0", false, false, "0", "5");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsBatchSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsBatchSizeSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsBatchSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsBatchSizeSpinner.clear().sendKeys("10");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '10').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsBatchSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsBatchSizeSpinner.clear().sendKeys("900");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '900').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsBatchSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsBatchSizeSpinner.clear().sendKeys("2047");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2047').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsBatchSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsBatchSizeSpinner.clear().sendKeys("2048");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2048').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsBatchSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsBatchSizeSpinner.clear().sendKeys("2049");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsBatchSizeSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2048').to.be.true;
        });
    });

    // Test field 'CICS Interface Details panel' -> 'TSQ Processing Trace Level: TSQ'
    //
    it('Test field CICS Interface -> TSQ Processing Trace Level: TSQ', function () {
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);
        Page.delIntfCicsYes("IntfCICS0026").then(function () {
            Page.delEndpointCicsYes("EndpointCICSA0030");
        }).then(function () {
            Page.addEndpointCics("EndpointCICSA0030");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfCics("IntfCICS0026", "", undefined, "", "EndpointCICSA0030", "", "", false, false, "1", "0", "0", "16000", false, false, "0", false, false, "0", "50", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTsqSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsTrcLvlTsqSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsTrcLvlTsqSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTsqSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsTrcLvlTsqSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsTrcLvlTsqSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTsqSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsTrcLvlTsqSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsTrcLvlTsqSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTsqSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfCicsTrcLvlTsqSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfCicsTrcLvlTsqSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfCicsTrcLvlTsqSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});