/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.8 Define Connections EMS Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a EMS Connection successfully.
    //
    it('Should add a EMS Connection successfully', function () {
        browser.sleep(2000).then(function () {
            Page.delConnEmsYes("ConnEMS0001");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0001");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0001", "", false, false, "EndpointEMSA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a EMS Connection successfully, then replicate it.
    //
    it('Should add a EMS Connection, then replicate it successfully', function () {
        Page.delConnEmsYes("ConnEMS0002-copy").then(function () {
            Page.delConnEmsYes("ConnEMS0002");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0002");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0002", "", false, false, "EndpointEMSA0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateConnEms("ConnEMS0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a EMS Connection successfully, then update it.
    //
    it('Should add a EMS Connection, then update it successfully', function () {
        Page.delConnEmsYes("ConnEMS0003").then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0003");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0004");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLB0001");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLB0002");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0001");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0002");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLB0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLB0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0003", "abc", false, false, "EndpointEMSA0003", "ConnEMSSSLB0001", "U1", "P1", "111", "333", "555", "777", "17777", "19999", "Connections", "N1", "H1", "T1", "IntfEMSA0001", true, "U3", "P3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateConnEms("ConnEMS0003", "hij", true, true, "EndpointEMSA0004", "ConnEMSSSLB0002", "U2", "P2", "222", "444", "666", "888", "28888", "30000", "Byterate", "N2", "H2", "T2", "IntfEMSA0002", true, "U4", "P4");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMS0003').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hij').to.be.true;
        }).then(function () {
            return Page.eleConnEmsStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsMultiSessionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointEMSA0004').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLB0002').to.be.true;
        }).then(function () {
            return Page.eleConnEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'U2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '666').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '888').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '28888').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '30000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsMetricDropdown.getText();
        }).then(function (message) {
            expect(message === 'Byterate').to.be.true;
        }).then(function () {
            return Page.eleConnEmsNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'N2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'H2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'T2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSA0002').to.be.true;
        }).then(function () {
            return Page.eleConnEmsCreateAdmConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnUserInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'U4').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P4').to.be.true;
        });
    });

    // Add a EMS Connection, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a EMS Connection, cancel the changes, then confirm the cancel operation', function () {
        Page.delConnEmsYes("ConnEMS0004").then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0005");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0006");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLB0003");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLB0004");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0003");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0004");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLB0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLB0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0004", "abc", false, false, "EndpointEMSA0005", "ConnEMSSSLB0003", "U1", "P1", "111", "333", "555", "777", "17777", "19999", "Connections", "N1", "H1", "T1", "IntfEMSA0003", true, "U3", "P3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelConnEmsYes("ConnEMS0004", "hij", true, true, "EndpointEMSA0006", "ConnEMSSSLB0004", "U2", "P2", "222", "444", "666", "888", "28888", "30000", "Byterate", "N2", "H2", "T2", "IntfEMSA0004", true, "U4", "P4");
        }).then(function () {
            Page.eleConnsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("ConnEMS0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsNameInput);
        }).then(function () {
            return Page.eleConnEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMS0004').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abc').to.be.true;
        }).then(function () {
            return Page.eleConnEmsStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsMultiSessionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointEMSA0005').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLB0003').to.be.true;
        }).then(function () {
            return Page.eleConnEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'U1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '555').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '777').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '17777').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '19999').to.be.true;
        }).then(function () {
            return Page.eleConnEmsMetricDropdown.getText();
        }).then(function (message) {
            expect(message === 'Connections').to.be.true;
        }).then(function () {
            return Page.eleConnEmsNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'N1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'H1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'T1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSA0003').to.be.true;
        }).then(function () {
            return Page.eleConnEmsCreateAdmConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnUserInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'U3').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P3').to.be.true;
        });
    });

    // Add a EMS Connection, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a EMS Connection, cancel the changes, then discard the cancel operation', function () {
        Page.delConnEmsYes("ConnEMS0005").then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0007");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0008");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLB0005");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLB0006");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0005");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0006");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLB0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLB0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0005", "abc", false, false, "EndpointEMSA0007", "ConnEMSSSLB0005", "U1", "P1", "111", "333", "555", "777", "17777", "19999", "Connections", "N1", "H1", "T1", "IntfEMSA0005", true, "U3", "P3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelConnEmsNo("ConnEMS0005", "hij", true, true, "EndpointEMSA0008", "ConnEMSSSLB0006", "U2", "P2", "222", "444", "666", "888", "28888", "30000", "Byterate", "N2", "H2", "T2", "IntfEMSA0006", true, "U4", "P4");
        }).then(function () {
            return Page.eleConnEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMS0005').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hij').to.be.true;
        }).then(function () {
            return Page.eleConnEmsStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsMultiSessionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointEMSA0008').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLB0006').to.be.true;
        }).then(function () {
            return Page.eleConnEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'U2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '666').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '888').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '28888').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '30000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsMetricDropdown.getText();
        }).then(function (message) {
            expect(message === 'Byterate').to.be.true;
        }).then(function () {
            return Page.eleConnEmsNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'N2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'H2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'T2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSA0006').to.be.true;
        }).then(function () {
            return Page.eleConnEmsCreateAdmConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnUserInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'U4').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P4').to.be.true;
        });
    });

    // Add a EMS Connection, make some changes, then reset it.
    //
    it('Should add a EMS Connection, make some changes, then reset it', function () {
        Page.delConnEmsYes("ConnEMS0006").then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0009");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0010");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLB0007");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLB0008");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0007");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0008");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLB0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLB0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0006", "abc", false, false, "EndpointEMSA0009", "ConnEMSSSLB0007", "U1", "P1", "111", "333", "555", "777", "17777", "19999", "Connections", "N1", "H1", "T1", "IntfEMSA0007", true, "U3", "P3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetConnEms("ConnEMS0006", "hij", true, true, "EndpointEMSA0010", "ConnEMSSSLB0008", "U2", "P2", "222", "444", "666", "888", "28888", "30000", "Byterate", "N2", "H2", "T2", "IntfEMSA0008", true, "U4", "P4");
        }).then(function () {
            return Page.eleConnEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMS0006').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abc').to.be.true;
        }).then(function () {
            return Page.eleConnEmsStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsMultiSessionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointEMSA0009').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLB0007').to.be.true;
        }).then(function () {
            return Page.eleConnEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'U1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '555').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '777').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '17777').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '19999').to.be.true;
        }).then(function () {
            return Page.eleConnEmsMetricDropdown.getText();
        }).then(function (message) {
            expect(message === 'Connections').to.be.true;
        }).then(function () {
            return Page.eleConnEmsNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'N1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'H1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'T1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSA0007').to.be.true;
        }).then(function () {
            return Page.eleConnEmsCreateAdmConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnUserInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'U3').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P3').to.be.true;
        });
    });

    // Add a EMS Connection, then add a EMS Connection with the same name, then confirm the overwrite operation.
    //
    it('Should add a EMS Connection to overwrite a EMS Connection, then confirm the overwrite operation', function () {
        Page.delConnEmsYes("ConnEMS0007").then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0011");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0012");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLB0009");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLB0010");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0009");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0010");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLB0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLB0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0007", "abc", false, false, "EndpointEMSA0011", "ConnEMSSSLB0009", "U1", "P1", "111", "333", "555", "777", "17777", "19999", "Connections", "N1", "H1", "T1", "IntfEMSA0009", true, "U3", "P3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addConnEms("ConnEMS0007", "hij", true, true, "EndpointEMSA0012", "ConnEMSSSLB0010", "U2", "P2", "222", "444", "666", "888", "28888", "30000", "Byterate", "N2", "H2", "T2", "IntfEMSA0010", true, "U4", "P4");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleConnEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMS0007').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hij').to.be.true;
        }).then(function () {
            return Page.eleConnEmsStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsMultiSessionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointEMSA0012').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLB0010').to.be.true;
        }).then(function () {
            return Page.eleConnEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'U2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '444').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '666').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '888').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '28888').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '30000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsMetricDropdown.getText();
        }).then(function (message) {
            expect(message === 'Byterate').to.be.true;
        }).then(function () {
            return Page.eleConnEmsNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'N2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'H2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'T2').to.be.true;
        }).then(function () {
            return Page.eleConnEmsIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSA0010').to.be.true;
        }).then(function () {
            return Page.eleConnEmsCreateAdmConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnUserInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'U4').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P4').to.be.true;
        });
    });

    // Add a EMS Connection, then add a EMS Connection with the same name, then discard the overwrite operation.
    //
    it('Should add a EMS Connection to overwrite a EMS Connection, then discard the overwrite operation', function () {
        Page.delConnEmsYes("ConnEMS0008").then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0013");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0014");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLB0011");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLB0012");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0011");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0012");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0013");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0014");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLB0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLB0012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0008", "abc", false, false, "EndpointEMSA0013", "ConnEMSSSLB0011", "U1", "P1", "111", "333", "555", "777", "17777", "19999", "Connections", "N1", "H1", "T1", "IntfEMSA0011", true, "U3", "P3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addConnEms("ConnEMS0008", "hij", true, true, "EndpointEMSA0014", "ConnEMSSSLB0012", "U2", "P2", "222", "444", "666", "888", "28888", "30000", "Byterate", "N2", "H2", "T2", "IntfEMSA0012", true, "U4", "P4");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleConnsEmsLeftmenu);
        }).then(function () {
            Page.eleConnsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("ConnEMS0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleConnEmsNameInput);
        }).then(function () {
            return Page.eleConnEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMS0008').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abc').to.be.true;
        }).then(function () {
            return Page.eleConnEmsStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsMultiSessionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointEMSA0013').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLB0011').to.be.true;
        }).then(function () {
            return Page.eleConnEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'U1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '333').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '555').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '777').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '17777').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '19999').to.be.true;
        }).then(function () {
            return Page.eleConnEmsMetricDropdown.getText();
        }).then(function (message) {
            expect(message === 'Connections').to.be.true;
        }).then(function () {
            return Page.eleConnEmsNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'N1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'H1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'T1').to.be.true;
        }).then(function () {
            return Page.eleConnEmsIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSA0011').to.be.true;
        }).then(function () {
            return Page.eleConnEmsCreateAdmConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnUserInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'U3').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'P3').to.be.true;
        });
    });

    // Add a EMS Connection, delete it, then confirm the delete operation.
    //
    it('Should add a EMS Connection, delete it, then confirm the delete operation', function () {
        Page.delConnEmsYes("ConnEMS0009").then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0015");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0009", "", false, false, "EndpointEMSA0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delConnEmsYes("ConnEMS0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("ConnEMS0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a EMS Connection, delete it, then discard the delete operation.
    //
    it('Should add a EMS Connection, delete it, then discard the delete operation', function () {
        Page.delConnEmsYes("ConnEMS0010").then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0016");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0010", "", false, false, "EndpointEMSA0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delConnEmsNo("ConnEMS0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("ConnEMS0010");
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
        Page.delConnEmsYes("ConnEMS0011").then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0017");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0017");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0011", "", false, false, "EndpointEMSA0017");
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
            Page.eleAuditButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleTableHeader4.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Test EMS Connection Details panel fields default value.
    //
    it('Test EMS Connection Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleConnsEmsLeftmenu);
        }).then(function () {
            Page.eleConnsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsNameInput);
        }).then(function () {
            return Page.eleConnEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsMultiSessionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnEmsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '9999999').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '9999999').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '500').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '500').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '15000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '15000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsMetricDropdown.getText();
        }).then(function (message) {
            expect(message === 'None').to.be.true;
        }).then(function () {
            return Page.eleConnEmsNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnEmsCreateAdmConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test EMS Connection Details panel mandatory fields.
    //
    it('Test EMS Connection Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleConnsEmsLeftmenu);
        }).then(function () {
            Page.eleConnsEmsLeftmenu.click();
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
            return Page.eleConnEmsNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleConnEmsEndpointValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'EMS Connection Details panel' -> 'Name'
    //
    it('Test field EMS Connection -> Name', function () {
        Page.delConnEmsYes("ConnEMS0012_@#$_22223333333333444444444").then(function () {
            Page.delConnEmsYes("ConnEMS0013_@#$_22223333333333444444444");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0018");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0012_@#$_22223333333333444444444", "", false, false, "EndpointEMSA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConnEMS0012_@#$_22223333333333444444444').to.be.true;
        }).then(function () {
            Page.addConnEms("ConnEMS0013_@#$_222233333333334444444444", "", false, false, "EndpointEMSA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConnEMS0013_@#$_22223333333333444444444').to.be.true;
        });
    });

    // Test field 'EMS Connection Details panel' -> 'Description'
    //
    it('Test field EMS Connection -> Description', function () {
        Page.delConnEmsYes("ConnEMS0014").then(function () {
            Page.delConnEmsYes("ConnEMS0015");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0019");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", false, false, "EndpointEMSA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addConnEms("ConnEMS0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111", false, false, "EndpointEMSA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsDescValidateMsg);
        }).then(function () {
            return Page.eleConnEmsDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsDescInput);
        }).then(function () {
            Page.eleConnEmsDescInput.clear().sendKeys("Corrected");
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

    // Test field 'EMS Connection Details panel' -> 'EMS Endpoint' & 'EMS SSL'
    //
    it('Test field EMS Connection -> EMS Endpoint & EMS SSL', function () {
        Page.delConnEmsYes("ConnEMS0016").then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0020_@#$_333333333444444444");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0020_@#$_333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLB0013_@#$_3333333333444444444");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLB0013_@#$_3333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0016", "", false, false, "EndpointEMSA0020_@#$_333333333444444444", "ConnEMSSSLB0013_@#$_3333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointEMSA0020_@#$_333333333444444444').to.be.true;
        }).then(function () {
            return Page.eleConnEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLB0013_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'EMS Connection Details panel' -> 'Userid & Password'
    // Related jiras: ZWUI-948(fixed)
    it('Test field EMS Connection -> Userid & Password', function () {
        Page.delConnEmsYes("ConnEMS0017").then(function () {
            Page.delConnEmsYes("ConnEMS0018");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0021");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0021");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0017", "", false, false, "EndpointEMSA0021", "", "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111", "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsUseridInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        }).then(function () {
            return Page.eleConnEmsPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        }).then(function () {
            Page.addConnEms("ConnEMS0018", "", false, false, "EndpointEMSA0021", "", "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????1111", "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????1111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsUseridInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        }).then(function () {
            return Page.eleConnEmsPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        });
    });

    // Test field 'EMS Connection Details panel' -> 'ECF Parameters'
    // Related jiras: ZWUI-993(fixed)
    it('Test field EMS Connection -> ECF Parameters', function () {
        Page.delConnEmsYes("ConnEMS0019").then(function () {
            Page.delConnEmsYes("ConnEMS0020");
        }).then(function () {
            Page.delConnEmsYes("ConnEMS0021");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0022");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0022");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0019", "", false, false, "EndpointEMSA0022", "", "", "", "0", "0", "250", "250", "15000", "15000");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '250').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '250').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '15000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '15000').to.be.true;
        }).then(function () {
            Page.addConnEms("ConnEMS0020", "", false, false, "EndpointEMSA0022", "", "", "", "9999999", "9999999", "20000", "20000", "30000", "30000");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '9999999').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '9999999').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '20000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '20000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '30000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '30000').to.be.true;
        }).then(function () {
            Page.addConnEms("ConnEMS0021", "", false, false, "EndpointEMSA0022", "", "", "", "", "", "", "", "", "");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsConnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === 'Not a valid number').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsReconnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === 'Not a valid number').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === 'Not a valid number').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayReconnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === 'Not a valid number').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === 'Not a valid number').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutReconnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === 'Not a valid number').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        }).then(function () {
            Page.addConnEms("ConnEMS0021", "", false, false, "EndpointEMSA0022", "", "", "", "0", "0", "249", "249", "14999", "14999");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === '249 is invalid, must be equal to or greater than 250').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayReconnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === 'Please enter 0 or value between 250 and 20000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === '14999 is invalid, must be equal to or greater than 15,000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutReconnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === 'Please enter 0 or value between 15000 and 30000').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        }).then(function () {
            Page.addConnEms("ConnEMS0021", "", false, false, "EndpointEMSA0022", "", "", "", "10000000", "10000000", "20001", "20001", "30001", "30001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsConnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === '10000000 is invalid, must be equal to or less than 9,999,999').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsReconnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === '10000000 is invalid, must be equal to or less than 9,999,999').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === '20001 is invalid, must be equal to or less than 20,000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayReconnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === 'Please enter 0 or value between 250 and 20000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === '30001 is invalid, must be equal to or less than 30,000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutReconnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === 'Please enter 0 or value between 15000 and 30000').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        }).then(function () {
            Page.addConnEms("ConnEMS0021", "", false, false, "EndpointEMSA0022", "", "", "", "9999999", "9999999", "0", "500", "0", "15000");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === '0 is invalid, must be equal to or greater than 250').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnValidateMsg.getAttribute('title');
        }).then(function (message) {
            expect(message.toString() === '0 is invalid, must be equal to or greater than 15,000').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        }).then(function () {
            Page.addConnEms("ConnEMS0021", "", false, false, "EndpointEMSA0022", "", "", "", "9999999", "9999999", "500", "0", "15000", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '9999999').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAttemptsReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '9999999').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '500').to.be.true;
        }).then(function () {
            return Page.eleConnEmsDelayReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutConnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '15000').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTimeoutReconnInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        });
    });

    // Test field 'EMS Connection Details panel' -> 'Network Code Page' & 'Host Code Page'
    //
    it('Test field EMS Connection -> Network Code Page & Host Code Page', function () {
        Page.delConnEmsYes("ConnEMS0022").then(function () {
            Page.delConnEmsYes("ConnEMS0023");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0024");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0022", "", false, false, "EndpointEMSA0024", "", "", "", "0", "0", '500', "500", "15000", "15000", "Connections", "1Ab@#$&?%!^C345", "1Ab@#$&?%!^C345");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsNetworkCodepageInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '1Ab@#$&?%!^C345').to.be.true;
        }).then(function () {
            return Page.eleConnEmsHostCodepageInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '1Ab@#$&?%!^C345').to.be.true;
        }).then(function () {
            Page.addConnEms("ConnEMS0023", "", false, false, "EndpointEMSA0024", "", "", "", "0", "0", '500', "500", "15000", "15000", "Connections", "1Ab@#$&?%!^C3456", "1Ab@#$&?%!^C3456");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsNetworkCodepageInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '1Ab@#$&?%!^C345').to.be.true;
        }).then(function () {
            return Page.eleConnEmsHostCodepageInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '1Ab@#$&?%!^C345').to.be.true;
        });
    });

    // Test field 'EMS Connection Details panel' -> 'TCP/IP Stack Name'
    //
    it('Test field EMS Connection -> TCP/IP Stack Name', function () {
        Page.delConnEmsYes("ConnEMS0024").then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0025");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0025");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0024", "", false, false, "EndpointEMSA0025", "", "", "", "0", "0", '500', "500", "15000", "15000", "Connections", "", "", "@#$AB123");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnEmsTcpipStackNameInput.clear().sendKeys("#@$123AB");
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
            Page.eleConnEmsTcpipStackNameInput.clear().sendKeys("$#@123AB");
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
            Page.eleConnEmsTcpipStackNameInput.clear().sendKeys("AB120@#$");
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
            Page.eleConnEmsTcpipStackNameInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTcpipStackNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnEmsTcpipStackNameInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTcpipStackNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnEmsTcpipStackNameInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTcpipStackNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnEmsTcpipStackNameInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTcpipStackNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnEmsTcpipStackNameInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnEmsTcpipStackNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleConnEmsTcpipStackNameInput.clear().sendKeys("A");
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
            Page.eleConnEmsTcpipStackNameInput.clear().sendKeys("A2");
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

    // Test field 'EMS Connection Details panel' -> 'Interfaces'
    //
    it('Test field EMS Connection -> Interfaces', function () {
        Page.delConnEmsYes("ConnEMS0025").then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0026");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0026");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0013");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0014");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0015");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0016");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0017");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0018");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0019");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0020");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0021");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0022");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0023");
        }).then(function () {
            Page.delIntfEmsYes("IntfEMSA0024");
        }).then(function () {
            Page.addIntfEms("IntfEMSA0013");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0014");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0017");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0020");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0021");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0022");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0023");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfEms("IntfEMSA0024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0025", "", false, false, "EndpointEMSA0026");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsIntfValidateMsg);
        }).then(function () {
            return Page.eleConnEmsIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Empty Value').to.be.true;
        }).then(function () {
            Page.eleConnEmsIntfInput.clear().sendKeys("IntfEMSA0013");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsIntf2Input);
        }).then(function () {
            Page.eleConnEmsIntf2Input.clear().sendKeys("IntfEMSA0014");
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsIntf3Input);
        }).then(function () {
            Page.eleConnEmsIntf3Input.clear().sendKeys("IntfEMSA0015");
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsIntf4Input);
        }).then(function () {
            Page.eleConnEmsIntf4Input.clear().sendKeys("IntfEMSA0016");
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsIntf5Input);
        }).then(function () {
            Page.eleConnEmsIntf5Input.clear().sendKeys("IntfEMSA0017");
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsIntf6Input);
        }).then(function () {
            Page.eleConnEmsIntf6Input.clear().sendKeys("IntfEMSA0018");
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsIntf7Input);
        }).then(function () {
            Page.eleConnEmsIntf7Input.clear().sendKeys("IntfEMSA0019");
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsIntf8Input);
        }).then(function () {
            Page.eleConnEmsIntf8Input.clear().sendKeys("IntfEMSA0020");
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsIntf9Input);
        }).then(function () {
            Page.eleConnEmsIntf9Input.clear().sendKeys("IntfEMSA0021");
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsIntf10Input);
        }).then(function () {
            Page.eleConnEmsIntf10Input.clear().sendKeys("IntfEMSA0022");
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsIntf11Input);
        }).then(function () {
            Page.eleConnEmsIntf11Input.clear().sendKeys("IntfEMSA0023");
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsIntf12Input);
        }).then(function () {
            Page.eleConnEmsIntf12Input.clear().sendKeys("IntfEMSA0024");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === 'Max number of entries is 12').to.be.true;
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            Page.eleConnEmsIntf12RemoveButton.click();
        }).then(function () {
            Page.eleConnEmsIntf10RemoveButton.click();
        }).then(function () {
            Page.eleConnEmsIntf8RemoveButton.click();
        }).then(function () {
            Page.eleConnEmsIntf6RemoveButton.click();
        }).then(function () {
            Page.eleConnEmsIntf4RemoveButton.click();
        }).then(function () {
            Page.eleConnEmsIntf2RemoveButton.click();
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSA0013').to.be.true;
        }).then(function () {
            return Page.eleConnEmsIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSA0015').to.be.true;
        }).then(function () {
            return Page.eleConnEmsIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSA0017').to.be.true;
        }).then(function () {
            return Page.eleConnEmsIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSA0019').to.be.true;
        }).then(function () {
            return Page.eleConnEmsIntf5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSA0021').to.be.true;
        }).then(function () {
            return Page.eleConnEmsIntf6Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfEMSA0023').to.be.true;
        }).then(function () {
            Page.eleConnEmsIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnEmsIntf7Input);
        }).then(function () {
            Page.eleConnEmsIntf7Input.clear().sendKeys("IntfEMSA0019");
        }).then(function () {
            Page.eleConnEmsIntf5Input.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleConnEmsIntfValidateMsg);
        }).then(function () {
            return Page.eleConnEmsIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Duplicate Reference').to.be.true;
        }).then(function () {
            Page.eleConnEmsIntf7RemoveButton.click();
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

    // Test field 'EMS Connection Details panel' -> 'Admin Connection User & Password'
    // Related jiras: ZWUI-948(fixed)
    it('Test field EMS Connection -> Admin Connection User & Password', function () {
        Page.delConnEmsYes("ConnEMS0026").then(function () {
            Page.delConnEmsYes("ConnEMS0027");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMSA0027");
        }).then(function () {
            Page.addEndpointEms("EndpointEMSA0027");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEms("ConnEMS0026", "", false, false, "EndpointEMSA0027", "", "", "", "0", "0", '500', "500", "15000", "15000", "Connections", "", "", "", "", true, "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111", "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnUserInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        }).then(function () {
            Page.addConnEms("ConnEMS0027", "", false, false, "EndpointEMSA0027", "", "", "", "0", "0", '500', "500", "15000", "15000", "Connections", "", "", "", "", true, "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????1111", "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????1111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnUserInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        }).then(function () {
            return Page.eleConnEmsAdmConnPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});