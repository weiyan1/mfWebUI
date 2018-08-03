/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.14 Define Interfaces IMS Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        //browser.manage().timeouts().implicitlyWait(5000);
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a IMS Interface with EMS Output Interface.
    //
    it('Should add a IMS Interface with EMS Output Interface successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delIntfImsYes("IntfIMS0001");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSC0001");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0001");
        }).then(function () {
            Page.addIntfEms("IntfEMSC0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0001", "", undefined, undefined, undefined, undefined, "IntfEMSC0001", "EndpointIMSA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a IMS Interface with RV Output Interface, then replicate it.
    //
    it('Should add a IMS Interface with RV Output Interface, then replicate it successfully', function () {
        Page.delIntfImsYes("IntfIMS0002-copy").then(function () {
            Page.delIntfImsYes("IntfIMS0002");
        }).then(function () {
            Page.delIntfRvYes("IntfRVC0001");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0002");
        }).then(function () {
            Page.addIntfRv("IntfRVC0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0002", "", undefined, undefined, undefined, undefined, "IntfRVC0001", "EndpointIMSA0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateIntfIms("IntfIMS0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a IMS Interface successfully, then update it.
    //
    it('Should add a IMS Interface, then update it successfully', function () {
        Page.delIntfImsYes("IntfIMS0003").then(function () {
            Page.delIntfEmsYes("IntfEMSC0002");
        }).then(function () {
            Page.delIntfRvYes("IntfRVC0002");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0003");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0004");
        }).then(function () {
            Page.addIntfEms("IntfEMSC0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVC0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0003", "abcdefg", "INTFID01", "AAA", "BBB", "CCC", "IntfEMSC0002", "EndpointIMSA0003", "DDD", "EEE", "FFF", true, false, "11", "21", "13", "5", "333", "111", "33333", "555", "7777", "33", "9999", true, false, "1", "3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateIntfIms("IntfIMS0003", "hijklmn", "INTFID02", "HHH", "III", "JJJ", "IntfRVC0002", "EndpointIMSA0004", "KKK", "LLL", "MMM", false, true, "12", "22", "14", "6", "444", "122", "44444", "666", "8888", "44", "2222", false, true, "2", "4");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMS0003').to.be.true;
        }).then(function () {
            return Page.eleIntfImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfImsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfImsXcfMemberNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHH').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipeNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'III').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipePrefixInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJJ').to.be.true;
        }).then(function () {
            return Page.eleIntfImsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVC0002').to.be.true;
        }).then(function () {
            return Page.eleIntfImsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointIMSA0004').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGuaranteedInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'KKK').to.be.true;
        }).then(function () {
            return Page.eleIntfImsReliableInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LLL').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSyncCalloutInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MMM').to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode0Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode1Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '12').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '14').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '122').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '666').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '8888').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        });
    });

    // Add a IMS Interface, make some changes, cancel the changes, then confirm the cancel operation.
    // Related jiras: ZWUI-949(fixed)
    it('Should add a IMS Interface, cancel the changes, then confirm the cancel operation', function () {
        Page.delIntfImsYes("IntfIMS0004").then(function () {
            Page.delIntfEmsYes("IntfEMSC0003");
        }).then(function () {
            Page.delIntfRvYes("IntfRVC0003");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0005");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0006");
        }).then(function () {
            Page.addIntfEms("IntfEMSC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0004", "abcdefg", "INTFID01", "AAA", "BBB", "CCC", "IntfEMSC0003", "EndpointIMSA0005", "DDD", "EEE", "FFF", true, false, "11", "21", "13", "5", "333", "111", "33333", "555", "7777", "33", "9999", true, false, "1", "3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfImsYes("IntfIMS0004", "hijklmn", "INTFID02", "HHH", "III", "JJJ", "IntfRVC0003", "EndpointIMSA0006", "KKK", "LLL", "MMM", false, true, "12", "22", "14", "6", "444", "122", "44444", "666", "8888", "44", "2222", false, true, "2", "4");
        }).then(function () {
            Page.eleIntfsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfIMS0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfImsNameInput);
        }).then(function () {
            return Page.eleIntfImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMS0004').to.be.true;
        }).then(function () {
            return Page.eleIntfImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfImsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfImsXcfMemberNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAA').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipeNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBB').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipePrefixInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CCC').to.be.true;
        }).then(function () {
            return Page.eleIntfImsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSC0003').to.be.true;
        }).then(function () {
            return Page.eleIntfImsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointIMSA0005').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGuaranteedInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'DDD').to.be.true;
        }).then(function () {
            return Page.eleIntfImsReliableInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EEE').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSyncCalloutInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'FFF').to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode0Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode1Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '21').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '13').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '555').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '7777').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '9999').to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        });
    });

    // Add a IMS Interface, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a IMS Interface, cancel the changes, then discard the cancel operation', function () {
        Page.delIntfImsYes("IntfIMS0005").then(function () {
            Page.delIntfEmsYes("IntfEMSC0004");
        }).then(function () {
            Page.delIntfRvYes("IntfRVC0004");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0007");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0008");
        }).then(function () {
            Page.addIntfEms("IntfEMSC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0005", "abcdefg", "INTFID01", "AAA", "BBB", "CCC", "IntfEMSC0004", "EndpointIMSA0007", "DDD", "EEE", "FFF", true, false, "11", "21", "13", "5", "333", "111", "33333", "555", "7777", "33", "9999", true, false, "1", "3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelIntfImsNo("IntfIMS0005", "hijklmn", "INTFID02", "HHH", "III", "JJJ", "IntfRVC0004", "EndpointIMSA0008", "KKK", "LLL", "MMM", false, true, "12", "22", "14", "6", "444", "122", "44444", "666", "8888", "44", "2222", false, true, "2", "4");
        }).then(function () {
            return Page.eleIntfImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMS0005').to.be.true;
        }).then(function () {
            return Page.eleIntfImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfImsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfImsXcfMemberNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHH').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipeNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'III').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipePrefixInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJJ').to.be.true;
        }).then(function () {
            return Page.eleIntfImsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVC0004').to.be.true;
        }).then(function () {
            return Page.eleIntfImsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointIMSA0008').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGuaranteedInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'KKK').to.be.true;
        }).then(function () {
            return Page.eleIntfImsReliableInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LLL').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSyncCalloutInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MMM').to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode0Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode1Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '12').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '14').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '122').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '666').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '8888').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        });
    });

    // Add a IMS Interface, make some changes, then reset it.
    // Related jiras: ZWUI-949(fixed)
    it('Should add a IMS Interface, make some changes, then reset it', function () {
        Page.delIntfImsYes("IntfIMS0006").then(function () {
            Page.delIntfEmsYes("IntfEMSC0005");
        }).then(function () {
            Page.delIntfRvYes("IntfRVC0005");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0009");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0010");
        }).then(function () {
            Page.addIntfEms("IntfEMSC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0006", "abcdefg", "INTFID01", "AAA", "BBB", "CCC", "IntfEMSC0005", "EndpointIMSA0009", "DDD", "EEE", "FFF", true, false, "11", "21", "13", "5", "333", "111", "33333", "555", "7777", "33", "9999", true, false, "1", "3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetIntfIms("IntfIMS0006", "hijklmn", "INTFID02", "HHH", "III", "JJJ", "IntfRVC0005", "EndpointIMSA0010", "KKK", "LLL", "MMM", false, true, "12", "22", "14", "6", "444", "122", "44444", "666", "8888", "44", "2222", false, true, "2", "4");
        }).then(function () {
            return Page.eleIntfImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMS0006').to.be.true;
        }).then(function () {
            return Page.eleIntfImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfImsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfImsXcfMemberNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAA').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipeNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBB').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipePrefixInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CCC').to.be.true;
        }).then(function () {
            return Page.eleIntfImsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSC0005').to.be.true;
        }).then(function () {
            return Page.eleIntfImsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointIMSA0009').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGuaranteedInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'DDD').to.be.true;
        }).then(function () {
            return Page.eleIntfImsReliableInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EEE').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSyncCalloutInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'FFF').to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode0Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode1Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '21').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '13').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '555').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '7777').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '9999').to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        });
    });

    // Add a IMS Interface, then add a IMS Interface with the same name, then confirm the overwrite operation.
    //
    it('Should add a IMS Interface to overwrite a IMS Interface, then confirm the overwrite operation', function () {
        Page.delIntfImsYes("IntfIMS0007").then(function () {
            Page.delIntfEmsYes("IntfEMSC0006");
        }).then(function () {
            Page.delIntfRvYes("IntfRVC0006");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0011");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0012");
        }).then(function () {
            Page.addIntfEms("IntfEMSC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0007", "abcdefg", "INTFID01", "AAA", "BBB", "CCC", "IntfEMSC0006", "EndpointIMSA0011", "DDD", "EEE", "FFF", true, false, "11", "21", "13", "5", "333", "111", "33333", "555", "7777", "33", "9999", true, false, "1", "3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfIms("IntfIMS0007", "hijklmn", "INTFID02", "HHH", "III", "JJJ", "IntfRVC0006", "EndpointIMSA0012", "KKK", "LLL", "MMM", false, true, "12", "22", "14", "6", "444", "122", "44444", "666", "8888", "44", "2222", false, true, "2", "4");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleIntfImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMS0007').to.be.true;
        }).then(function () {
            return Page.eleIntfImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hijklmn').to.be.true;
        }).then(function () {
            return Page.eleIntfImsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID02').to.be.true;
        }).then(function () {
            return Page.eleIntfImsXcfMemberNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHH').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipeNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'III').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipePrefixInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJJ').to.be.true;
        }).then(function () {
            return Page.eleIntfImsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVC0006').to.be.true;
        }).then(function () {
            return Page.eleIntfImsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointIMSA0012').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGuaranteedInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'KKK').to.be.true;
        }).then(function () {
            return Page.eleIntfImsReliableInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LLL').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSyncCalloutInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'MMM').to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode0Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode1Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '12').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '14').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '6').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '122').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '666').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '8888').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        });
    });

    // Add a IMS Interface, then add a IMS Interface with the same name, then discard the overwrite operation.
    // Related jiras: ZWUI-949(fixed)
    it('Should add a IMS Interface to overwrite a IMS Interface, then discard the overwrite operation', function () {
        Page.delIntfImsYes("IntfIMS0008").then(function () {
            Page.delIntfEmsYes("IntfEMSC0007");
        }).then(function () {
            Page.delIntfRvYes("IntfRVC0007");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0013");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0014");
        }).then(function () {
            Page.addIntfEms("IntfEMSC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVC0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0013");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0014");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0008", "abcdefg", "INTFID01", "AAA", "BBB", "CCC", "IntfEMSC0007", "EndpointIMSA0013", "DDD", "EEE", "FFF", true, false, "11", "21", "13", "5", "333", "111", "33333", "555", "7777", "33", "9999", true, false, "1", "3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addIntfIms("IntfIMS0008", "hijklmn", "INTFID02", "HHH", "III", "JJJ", "IntfRVC0007", "EndpointIMSA0014", "KKK", "LLL", "MMM", false, true, "12", "22", "14", "6", "444", "122", "44444", "666", "8888", "44", "2222", false, true, "2", "4");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsImsLeftmenu);
        }).then(function () {
            Page.eleIntfsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfIMS0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfImsNameInput);
        }).then(function () {
            return Page.eleIntfImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfIMS0008').to.be.true;
        }).then(function () {
            return Page.eleIntfImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abcdefg').to.be.true;
        }).then(function () {
            return Page.eleIntfImsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'INTFID01').to.be.true;
        }).then(function () {
            return Page.eleIntfImsXcfMemberNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAA').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipeNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBB').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipePrefixInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CCC').to.be.true;
        }).then(function () {
            return Page.eleIntfImsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSC0007').to.be.true;
        }).then(function () {
            return Page.eleIntfImsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointIMSA0013').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGuaranteedInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'DDD').to.be.true;
        }).then(function () {
            return Page.eleIntfImsReliableInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EEE').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSyncCalloutInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'FFF').to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode0Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode1Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '21').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '13').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '555').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '7777').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '9999').to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        });
    });

    // Add a IMS Interface, delete it, then confirm the delete operation.
    //
    it('Should add a IMS Interface, delete it, then confirm the delete operation', function () {
        Page.delIntfImsYes("IntfIMS0009").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0015");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0009", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfImsYes("IntfIMS0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfIMS0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a IMS Interface, delete it, then discard the delete operation.
    //
    it('Should add a IMS Interface, delete it, then discard the delete operation', function () {
        Page.delIntfImsYes("IntfIMS0010").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0016");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0010", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delIntfImsNo("IntfIMS0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("IntfIMS0010");
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
        Page.delIntfImsYes("IntfIMS0011").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0017");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0017");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0011", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0017");
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

    // Test IMS Interface Details panel fields default value.
    //
    it('Test IMS Interface Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsImsLeftmenu);
        }).then(function () {
            Page.eleIntfsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfImsNameInput);
        }).then(function () {
            return Page.eleIntfImsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfImsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfImsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfImsXcfMemberNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SXI#XCFMBR').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipeNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SXITPIPE').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipePrefixInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SXITP').to.be.true;
        }).then(function () {
            return Page.eleIntfImsOutputIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfImsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGuaranteedInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfImsReliableInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSyncCalloutInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode0Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsCommitMode1Radio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '30').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '20').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '4096').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '64').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '4096').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '8').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '2048').to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackNoRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleIntfImsLoopbackYesRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlTrgSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2').to.be.true;
        });
    });

    // Test IMS Interface Details panel mandatory fields.
    //
    it('Test IMS Interface Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleIntfsImsLeftmenu);
        }).then(function () {
            Page.eleIntfsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleIntfImsNameInput);
        }).then(function () {
            Page.eleIntfImsNameInput.clear();
        }).then(function () {
            Page.eleIntfImsDescInput.clear();
        }).then(function () {
            Page.eleIntfImsIntfidInput.clear();
        }).then(function () {
            Page.eleIntfImsXcfMemberNameInput.clear();
        }).then(function () {
            Page.eleIntfImsTpipeNameInput.clear();
        }).then(function () {
            Page.eleIntfImsTpipePrefixInput.clear();
        }).then(function () {
            Page.eleIntfImsOutputIntfInput.clear();
        }).then(function () {
            Page.eleIntfImsEndpointInput.clear();
        }).then(function () {
            Page.eleIntfImsGuaranteedInput.clear();
        }).then(function () {
            Page.eleIntfImsReliableInput.clear();
        }).then(function () {
            Page.eleIntfImsSyncCalloutInput.clear();
        }).then(function () {
            Page.eleIntfImsWaitInitializationInput.clear();
        }).then(function () {
            Page.eleIntfImsWaitOtmaInput.clear();
        }).then(function () {
            Page.eleIntfImsWaitMsgInput.clear();
        }).then(function () {
            Page.eleIntfImsTranAllocationInput.clear();
        }).then(function () {
            Page.eleIntfImsTranSizeInput.clear();
        }).then(function () {
            Page.eleIntfImsSrbAllocationInput.clear();
        }).then(function () {
            Page.eleIntfImsSrbSizeInput.clear();
        }).then(function () {
            Page.eleIntfImsGrpAllocationInput.clear();
        }).then(function () {
            Page.eleIntfImsGrpSizeInput.clear();
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
            return Page.eleIntfImsNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfImsIntfidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipeNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipePrefixValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfImsEndpointValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test field 'IMS Interface Details panel' -> 'Name'
    //
    it('Test field IMS Interface -> Name', function () {
        Page.delIntfImsYes("IntfIMS0012_@#$_22223333333333444444444").then(function () {
            Page.delIntfImsYes("IntfIMS0013_@#$_22223333333333444444444");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0018");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0012_@#$_22223333333333444444444", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfIMS0012_@#$_22223333333333444444444').to.be.true;
        }).then(function () {
            Page.addIntfIms("IntfIMS0013_@#$_222233333333334444444444", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfIMS0013_@#$_22223333333333444444444').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'Description'
    //
    it('Test field IMS Interface -> Description', function () {
        Page.delIntfImsYes("IntfIMS0014").then(function () {
            Page.delIntfImsYes("IntfIMS0015");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0019");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", undefined, undefined, undefined, undefined, "", "EndpointIMSA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addIntfIms("IntfIMS0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111", undefined, undefined, undefined, undefined, "", "EndpointIMSA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfImsDescValidateMsg);
        }).then(function () {
            return Page.eleIntfImsDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleIntfImsDescInput);
        }).then(function () {
            Page.eleIntfImsDescInput.clear().sendKeys("Corrected");
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

    // Test field 'IMS Interface Details panel' -> 'Interface ID'
    //
    it('Test field IMS Interface -> Interface ID', function () {
        Page.delIntfImsYes("IntfIMS0016").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0020");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0020");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0016", "", "!@#$%^&*", undefined, undefined, undefined, "", "EndpointIMSA0020");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsIntfidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '!@#$%^&*').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsIntfidInput.clear().sendKeys("aBcDeFgH");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'aBcDeFgH').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsIntfidInput.clear().sendKeys("123456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsIntfidInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '12345678').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'XCF Member Name'
    //
    it('Test field IMS Interface -> XCF Member Name', function () {
        Page.delIntfImsYes("IntfIMS0017").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0021");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0021");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0017", "", undefined, "@#$AB12390123456", undefined, undefined, "", "EndpointIMSA0021");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsXcfMemberNameInput.clear().sendKeys("#@$123ABCDEFGHIJ");
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
            Page.eleIntfImsXcfMemberNameInput.clear().sendKeys("$#@123ABCDEFG@#$");
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
            Page.eleIntfImsXcfMemberNameInput.clear().sendKeys("AB120@#$90123456");
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
            Page.eleIntfImsXcfMemberNameInput.clear().sendKeys("A2345678901234567");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsXcfMemberNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A234567890123456').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsXcfMemberNameInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsXcfMemberNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsXcfMemberNameInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsXcfMemberNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsXcfMemberNameInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsXcfMemberNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsXcfMemberNameInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsXcfMemberNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleIntfImsXcfMemberNameInput.clear().sendKeys("A");
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
            Page.eleIntfImsXcfMemberNameInput.clear().sendKeys("A2");
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

    // Test field 'IMS Interface Details panel' -> 'TPIPE Name'
    //
    it('Test field IMS Interface -> TPIPE Name', function () {
        Page.delIntfImsYes("IntfIMS0018").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0022");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0022");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0018", "", undefined, undefined, "@#$AB123", undefined, "", "EndpointIMSA0022");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTpipeNameInput.clear().sendKeys("#@$123AB");
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
            Page.eleIntfImsTpipeNameInput.clear().sendKeys("$#@123AB");
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
            Page.eleIntfImsTpipeNameInput.clear().sendKeys("AB120@#$");
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
            Page.eleIntfImsTpipeNameInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipeNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTpipeNameInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipeNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTpipeNameInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipeNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTpipeNameInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipeNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTpipeNameInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipeNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTpipeNameInput.clear().sendKeys("A");
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
            Page.eleIntfImsTpipeNameInput.clear().sendKeys("A2");
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

    // Test field 'IMS Interface Details panel' -> 'TPIPE Prefix'
    //
    it('Test field IMS Interface -> TPIPE Prefix', function () {
        Page.delIntfImsYes("IntfIMS0019").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0023");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0023");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0019", "", undefined, undefined, undefined, "@#$A5", "", "EndpointIMSA0023");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTpipePrefixInput.clear().sendKeys("#@$4A");
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
            Page.eleIntfImsTpipePrefixInput.clear().sendKeys("$#@4A");
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
            Page.eleIntfImsTpipePrefixInput.clear().sendKeys("A2@#$");
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
            Page.eleIntfImsTpipePrefixInput.clear().sendKeys("A23456");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipePrefixInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2345').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTpipePrefixInput.clear().sendKeys("1@#$A");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipePrefixValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTpipePrefixInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipePrefixValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTpipePrefixInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipePrefixValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTpipePrefixInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTpipePrefixValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTpipePrefixInput.clear().sendKeys("A");
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
            Page.eleIntfImsTpipePrefixInput.clear().sendKeys("A2");
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

    // Test field 'IMS Interface Details panel -> Output Interface & IMS Endpoint'
    //
    it('Test field IMS Interface -> Output Interface & IMS Endpoint', function () {
        Page.delIntfImsYes("IntfIMS0020").then(function () {
            Page.delIntfEmsYes("IntfEMSC0008_@#$_2223333333333444444444");
        }).then(function () {
            Page.delEndpointImsYes("EndpointIMSA0024_@#$_333333333444444444");
        }).then(function () {
            Page.addIntfEms("IntfEMSC0008_@#$_2223333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0024_@#$_333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0020", "", undefined, undefined, undefined, undefined, "AAA", "BBB");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsOutputIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            return Page.eleIntfImsEndpointValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Invalid Reference').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsOutputIntfInput.clear().sendKeys("IntfEMSC0008_@#$_2223333333333444444444");
        }).then(function () {
            Page.eleIntfImsEndpointInput.clear().sendKeys("EndpointIMSA0024_@#$_333333333444444444");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsOutputIntfInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'IntfEMSC0008_@#$_2223333333333444444444').to.be.true;
        }).then(function () {
            return Page.eleIntfImsEndpointInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointIMSA0024_@#$_333333333444444444').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel -> TPIPE Name for trigger services Guaranteed'
    //
    it('Test field IMS Interface -> TPIPE Name for trigger services Guaranteed', function () {
        Page.delIntfImsYes("IntfIMS0021").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0025");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0025");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0021", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0025", "@#$AB12390123456");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGuaranteedInput.clear().sendKeys("#@$123ABCDEFGHIJ");
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
            Page.eleIntfImsGuaranteedInput.clear().sendKeys("$#@123ABCDEFG@#$");
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
            Page.eleIntfImsGuaranteedInput.clear().sendKeys("AB120@#$90123456");
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
            Page.eleIntfImsGuaranteedInput.clear().sendKeys("A2345678901234567");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGuaranteedInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A234567890123456').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGuaranteedInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGuaranteedValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGuaranteedInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGuaranteedValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGuaranteedInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGuaranteedValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGuaranteedInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGuaranteedValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleIntfImsGuaranteedInput.clear().sendKeys("A");
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
            Page.eleIntfImsGuaranteedInput.clear().sendKeys("A2");
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

    // Test field 'IMS Interface Details panel -> TPIPE Name for trigger services Reliable'
    //
    it('Test field IMS Interface -> TPIPE Name for trigger services Reliable', function () {
        Page.delIntfImsYes("IntfIMS0022").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0026");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0026");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0022", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0026", "", "@#$AB12390123456");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsReliableInput.clear().sendKeys("#@$123ABCDEFGHIJ");
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
            Page.eleIntfImsReliableInput.clear().sendKeys("$#@123ABCDEFG@#$");
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
            Page.eleIntfImsReliableInput.clear().sendKeys("AB120@#$90123456");
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
            Page.eleIntfImsReliableInput.clear().sendKeys("A2345678901234567");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsReliableInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A234567890123456').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsReliableInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsReliableValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsReliableInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsReliableValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsReliableInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsReliableValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsReliableInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsReliableValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsReliableInput.clear().sendKeys("A");
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
            Page.eleIntfImsReliableInput.clear().sendKeys("A2");
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

    // Test field 'IMS Interface Details panel -> TPIPE Name for trigger services Sync Call-out'
    //
    it('Test field IMS Interface -> TPIPE Name for trigger services Sync Call-out', function () {
        Page.delIntfImsYes("IntfIMS0023").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0027");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0027");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0023", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0027", "", "", "@#$AB12390123456");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSyncCalloutInput.clear().sendKeys("#@$123ABCDEFGHIJ");
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
            Page.eleIntfImsSyncCalloutInput.clear().sendKeys("$#@123ABCDEFG@#$");
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
            Page.eleIntfImsSyncCalloutInput.clear().sendKeys("AB120@#$90123456");
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
            Page.eleIntfImsSyncCalloutInput.clear().sendKeys("A2345678901234567");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSyncCalloutInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A234567890123456').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSyncCalloutInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSyncCalloutValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSyncCalloutInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSyncCalloutValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSyncCalloutInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSyncCalloutValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSyncCalloutInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSyncCalloutValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSyncCalloutInput.clear().sendKeys("A");
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
            Page.eleIntfImsSyncCalloutInput.clear().sendKeys("A2");
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

    // Test field 'IMS Interface Details panel' -> 'Workers ESB Request/Reply'
    //
    it('Test field IMS Interface -> Workers ESB Request/Reply', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfImsYes("IntfIMS0024").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0028");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0028");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0024", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0028", "", "", "", false, true, "2");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWorkersEsbRRSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsWorkersEsbRRSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWorkersEsbRRSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsWorkersEsbRRSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWorkersEsbRRSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsWorkersEsbRRSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWorkersEsbRRSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsWorkersEsbRRSpinner.clear().sendKeys("33");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWorkersEsbRRSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsWorkersEsbRRSpinner.clear().sendKeys("40");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWorkersEsbRRSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsWorkersEsbRRSpinner.clear().sendKeys("41");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersEsbRRSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '40').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'Workers Service Trigger'
    //
    it('Test field IMS Interface -> Workers Service Trigger', function () {
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        Page.delIntfImsYes("IntfIMS0025").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0029");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0029");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0025", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0029", "", "", "", false, true, "2", "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWorkersTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsWorkersTrgSpinner.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWorkersTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsWorkersTrgSpinner.clear().sendKeys("11");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWorkersTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsWorkersTrgSpinner.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWorkersTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsWorkersTrgSpinner.clear().sendKeys("32");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '32').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWorkersTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsWorkersTrgSpinner.clear().sendKeys("33");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWorkersTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '32').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'OTMA Wait time Initialization'
    //
    it('Test field IMS Interface -> OTMA Wait time Initialization', function () {
        Page.delIntfImsYes("IntfIMS0026").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0030");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0030");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0026", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0030", "", "", "", false, true, "2", "2", "a");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitInitializationInput.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationValidateMsg.getText();
        }).then(function (message) {
            expect(message === '0 is invalid, must be equal to or greater than 1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitInitializationInput.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitInitializationInput.clear().sendKeys("11");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitInitializationInput.clear().sendKeys("22");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitInitializationInput.clear().sendKeys("31");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationValidateMsg.getText();
        }).then(function (message) {
            expect(message === '31 is invalid, must be equal to or less than 30').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitInitializationInput.clear().sendKeys("30");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitInitializationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '30').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'OTMA Wait time OTMA'
    //
    it('Test field IMS Interface -> OTMA Wait time OTMA', function () {
        Page.delIntfImsYes("IntfIMS0027").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0031");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0031");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0027", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0031", "", "", "", false, true, "2", "2", "2", "A");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitOtmaInput.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaValidateMsg.getText();
        }).then(function (message) {
            expect(message === '0 is invalid, must be equal to or greater than 1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitOtmaInput.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitOtmaInput.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitOtmaInput.clear().sendKeys("9");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitOtmaInput.clear().sendKeys("11");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaValidateMsg.getText();
        }).then(function (message) {
            expect(message === '11 is invalid, must be equal to or less than 10').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitOtmaInput.clear().sendKeys("10");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitOtmaInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '10').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'OTMA Wait time Message'
    //
    it('Test field IMS Interface -> OTMA Wait time Message', function () {
        Page.delIntfImsYes("IntfIMS0028").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0032");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0032");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0028", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0032", "", "", "", false, true, "2", "2", "2", "2", "#");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitMsgInput.clear().sendKeys("0");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgValidateMsg.getText();
        }).then(function (message) {
            expect(message === '0 is invalid, must be equal to or greater than 1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitMsgInput.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitMsgInput.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitMsgInput.clear().sendKeys("599");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '599').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitMsgInput.clear().sendKeys("601");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgValidateMsg.getText();
        }).then(function (message) {
            expect(message === '601 is invalid, must be equal to or less than 600').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsWaitMsgInput.clear().sendKeys("600");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsWaitMsgInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '600').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'Transaction Buffer Allocation Value'
    //
    it('Test field IMS Interface -> Transaction Buffer Allocation Value', function () {
        Page.delIntfImsYes("IntfIMS0029").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0033");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0033");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0029", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0033", "", "", "", false, true, "2", "2", "2", "2", "30", "15");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '15 is invalid, must be equal to or greater than 16').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTranAllocationInput.clear().sendKeys("16");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '16').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTranAllocationInput.clear().sendKeys("17");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '17').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTranAllocationInput.clear().sendKeys("127");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '127').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTranAllocationInput.clear().sendKeys("129");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '129 is invalid, must be equal to or less than 128').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTranAllocationInput.clear().sendKeys("128");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranAllocationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '128').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'Transaction Buffer Size Value (bytes)'
    //
    it('Test field IMS Interface -> Transaction Buffer Size Value (bytes)', function () {
        Page.delIntfImsYes("IntfIMS0030").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0034");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0034");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0030", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0034", "", "", "", false, true, "2", "2", "2", "2", "30", "20", "4095");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '4095 is invalid, must be equal to or greater than 4,096').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTranSizeInput.clear().sendKeys("4096");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '4096').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTranSizeInput.clear().sendKeys("4097");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '4097').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTranSizeInput.clear().sendKeys("4095999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTranSizeInput.clear().sendKeys("4096001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '4096001 is invalid, must be equal to or less than 4,096,000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTranSizeInput.clear().sendKeys("4096000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTranSizeInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '4096000').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'SRB Buffer Allocation Value'
    //
    it('Test field IMS Interface -> SRB Buffer Allocation Value', function () {
        Page.delIntfImsYes("IntfIMS0031").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0035");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0035");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0031", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0035", "", "", "", false, true, "2", "2", "2", "2", "30", "20", "4096", "31");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '31 is invalid, must be equal to or greater than 32').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSrbAllocationInput.clear().sendKeys("32");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '32').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSrbAllocationInput.clear().sendKeys("33");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSrbAllocationInput.clear().sendKeys("1023");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '1023').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSrbAllocationInput.clear().sendKeys("1025");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '1025 is invalid, must be equal to or less than 1,024').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSrbAllocationInput.clear().sendKeys("1024");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbAllocationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '1024').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'SRB Buffer Size Value (bytes)'
    //
    it('Test field IMS Interface -> SRB Buffer Size Value (bytes)', function () {
        Page.delIntfImsYes("IntfIMS0032").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0036");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0036");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0032", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0036", "", "", "", false, true, "2", "2", "2", "2", "30", "20", "4096", "64", "4095");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '4095 is invalid, must be equal to or greater than 4,096').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSrbSizeInput.clear().sendKeys("4096");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '4096').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSrbSizeInput.clear().sendKeys("4097");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '4097').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSrbSizeInput.clear().sendKeys("4095999");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '4095999').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSrbSizeInput.clear().sendKeys("4096001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '4096001 is invalid, must be equal to or less than 4,096,000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsSrbSizeInput.clear().sendKeys("4096000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsSrbSizeInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '4096000').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'Group Buffer Allocation Value'
    //
    it('Test field IMS Interface -> Group Buffer Allocation Value', function () {
        Page.delIntfImsYes("IntfIMS0033").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0037");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0037");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0033", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0037", "", "", "", false, true, "2", "2", "2", "2", "30", "20", "4096", "64", "4096", "7");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '7 is invalid, must be equal to or greater than 8').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGrpAllocationInput.clear().sendKeys("8");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '8').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGrpAllocationInput.clear().sendKeys("9");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGrpAllocationInput.clear().sendKeys("63");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '63').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGrpAllocationInput.clear().sendKeys("65");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '65 is invalid, must be equal to or less than 64').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGrpAllocationInput.clear().sendKeys("64");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpAllocationInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '64').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'Group Buffer Size Value (bytes)'
    //
    it('Test field IMS Interface -> Group Buffer Size Value (bytes)', function () {
        Page.delIntfImsYes("IntfIMS0034").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0038");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0038");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0034", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0038", "", "", "", false, true, "2", "2", "2", "2", "30", "20", "4096", "64", "4096", "8", "511");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '511 is invalid, must be equal to or greater than 512').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGrpSizeInput.clear().sendKeys("512");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '512').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGrpSizeInput.clear().sendKeys("513");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '513').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGrpSizeInput.clear().sendKeys("65535");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '65535').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGrpSizeInput.clear().sendKeys("65537");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message === '65537 is invalid, must be equal to or less than 65,536').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsGrpSizeInput.clear().sendKeys("65536");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsGrpSizeInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '65536').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'Trace Level Trigger'
    //
    it('Test field IMS Interface -> Trace Level Trigger', function () {
        var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
        Page.delIntfImsYes("IntfIMS0035").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0039");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0039");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0035", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0039", "", "", "", false, true, "2", "2", "2", "2", "30", "20", "4096", "64", "4096", "8", "2048", true, false, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsTrcLvlTrgSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsTrcLvlTrgSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsTrcLvlTrgSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsTrcLvlTrgSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlTrgSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        });
    });

    // Test field 'IMS Interface Details panel' -> 'Trace Level OTMA'
    //
    it('Test field IMS Interface -> Trace Level OTMA', function () {
        var backspaceSeries = Array(2).join(protractor.Key.BACK_SPACE);
        Page.delIntfImsYes("IntfIMS0036").then(function () {
            Page.delEndpointImsYes("EndpointIMSA0040");
        }).then(function () {
            Page.addEndpointIms("EndpointIMSA0040");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfIms("IntfIMS0036", "", undefined, undefined, undefined, undefined, "", "EndpointIMSA0040", "", "", "", false, true, "2", "2", "2", "2", "30", "20", "4096", "64", "4096", "8", "2048", true, false, "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTrcLvlOtmaSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsTrcLvlOtmaSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTrcLvlOtmaSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsTrcLvlOtmaSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTrcLvlOtmaSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsTrcLvlOtmaSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTrcLvlOtmaSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsTrcLvlOtmaSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTrcLvlOtmaSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsTrcLvlOtmaSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleIntfImsTrcLvlOtmaSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleIntfImsTrcLvlOtmaSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleIntfImsTrcLvlOtmaSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        });
    });


    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});