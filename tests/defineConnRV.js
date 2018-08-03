/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.10 Define Connections RV Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a RV Connection successfully.
    //
    it('Should add a RV Connection successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delConnRvYes("ConnRV0001");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRVA0001");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0001", "", undefined, "EndpointRVA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a RV Connection successfully, then replicate it.
    //
    it('Should add a RV Connection, then replicate it successfully', function () {
        Page.delConnRvYes("ConnRV0002-copy").then(function () {
            Page.delConnRvYes("ConnRV0002");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRVA0002");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0002", "", undefined, "EndpointRVA0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateConnRv("ConnRV0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a RV Connection successfully, then update it.
    //
    it('Should add a RV Connection, then update it successfully', function () {
        Page.delConnRvYes("ConnRV0003").then(function () {
            Page.delEndpointRvYes("EndpointRVA0003");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRVA0004");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0001");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0002");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0003", "abc", false, "EndpointRVA0003", "1234", "N1", "NCP1", "HCP1", "Discard None", "111", "T1", "IntfRVA0001", true, "11", "33", "1111", "33333", "ABCDEFG");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateConnRv("ConnRV0003", "hij", true, "EndpointRVA0004", "5678", "N2", "NCP2", "HCP2", "Discard New", "222", "T2", "IntfRVA0002", true, "22", "44", "2222", "44444", "HIJKLMN");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnRV0003').to.be.true;
        }).then(function () {
            return Page.eleConnRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hij').to.be.true;
        }).then(function () {
            return Page.eleConnRvStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnRvEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRVA0004').to.be.true;
        }).then(function () {
            return Page.eleConnRvServiceInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '5678').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'N2').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'NCP2').to.be.true;
        }).then(function () {
            return Page.eleConnRvHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HCP2').to.be.true;
        }).then(function () {
            return Page.eleConnRvPolicyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Discard New').to.be.true;
        }).then(function () {
            return Page.eleConnRvMaxEventsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleConnRvTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'T2').to.be.true;
        }).then(function () {
            return Page.eleConnRvIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVA0002').to.be.true;
        }).then(function () {
            return Page.eleConnRvDistributedQueueCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqSchedulerSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMemoryLimitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMsgLimitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqIdentityInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HIJKLMN').to.be.true;
        });
    });

    // Add a RV Connection, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a RV Connection, cancel the changes, then confirm the cancel operation', function () {
        Page.delConnRvYes("ConnRV0004").then(function () {
            Page.delEndpointRvYes("EndpointRVA0005");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRVA0006");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0003");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0004");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0004", "abc", false, "EndpointRVA0005", "1234", "N1", "NCP1", "HCP1", "Discard None", "111", "T1", "IntfRVA0003", true, "11", "33", "1111", "33333", "ABCDEFG");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelConnRvYes("ConnRV0004", "hij", true, "EndpointRVA0006", "5678", "N2", "NCP2", "HCP2", "Discard New", "222", "T2", "IntfRVA0004", true, "22", "44", "2222", "44444", "HIJKLMN");
        }).then(function () {
            Page.eleConnsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("ConnRV0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvNameInput);
        }).then(function () {
            return Page.eleConnRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnRV0004').to.be.true;
        }).then(function () {
            return Page.eleConnRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abc').to.be.true;
        }).then(function () {
            return Page.eleConnRvStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnRvEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRVA0005').to.be.true;
        }).then(function () {
            return Page.eleConnRvServiceInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '1234').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'N1').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'NCP1').to.be.true;
        }).then(function () {
            return Page.eleConnRvHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HCP1').to.be.true;
        }).then(function () {
            return Page.eleConnRvPolicyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Discard None').to.be.true;
        }).then(function () {
            return Page.eleConnRvMaxEventsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleConnRvTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'T1').to.be.true;
        }).then(function () {
            return Page.eleConnRvIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVA0003').to.be.true;
        }).then(function () {
            return Page.eleConnRvDistributedQueueCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqSchedulerSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMemoryLimitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMsgLimitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqIdentityInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ABCDEFG').to.be.true;
        });
    });

    // Add a RV Connection, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a RV Connection, cancel the changes, then discard the cancel operation', function () {
        Page.delConnRvYes("ConnRV0005").then(function () {
            Page.delEndpointRvYes("EndpointRVA0007");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRVA0008");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0005");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0006");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0005", "abc", false, "EndpointRVA0007", "1234", "N1", "NCP1", "HCP1", "Discard None", "111", "T1", "IntfRVA0005", true, "11", "33", "1111", "33333", "ABCDEFG");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelConnRvNo("ConnRV0005", "hij", true, "EndpointRVA0008", "5678", "N2", "NCP2", "HCP2", "Discard New", "222", "T2", "IntfRVA0006", true, "22", "44", "2222", "44444", "HIJKLMN");
        }).then(function () {
            return Page.eleConnRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnRV0005').to.be.true;
        }).then(function () {
            return Page.eleConnRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hij').to.be.true;
        }).then(function () {
            return Page.eleConnRvStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnRvEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRVA0008').to.be.true;
        }).then(function () {
            return Page.eleConnRvServiceInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '5678').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'N2').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'NCP2').to.be.true;
        }).then(function () {
            return Page.eleConnRvHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HCP2').to.be.true;
        }).then(function () {
            return Page.eleConnRvPolicyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Discard New').to.be.true;
        }).then(function () {
            return Page.eleConnRvMaxEventsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleConnRvTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'T2').to.be.true;
        }).then(function () {
            return Page.eleConnRvIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVA0006').to.be.true;
        }).then(function () {
            return Page.eleConnRvDistributedQueueCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqSchedulerSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMemoryLimitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMsgLimitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqIdentityInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HIJKLMN').to.be.true;
        });
    });

    // Add a RV Connection, make some changes, then reset it.
    //
    it('Should add a RV Connection, make some changes, then reset it', function () {
        Page.delConnRvYes("ConnRV0006").then(function () {
            Page.delEndpointRvYes("EndpointRVA0009");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRVA0010");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0007");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0008");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0006", "abc", false, "EndpointRVA0009", "1234", "N1", "NCP1", "HCP1", "Discard None", "111", "T1", "IntfRVA0007", true, "11", "33", "1111", "33333", "ABCDEFG");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetConnRv("ConnRV0006", "hij", true, "EndpointRVA0010", "5678", "N2", "NCP2", "HCP2", "Discard New", "222", "T2", "IntfRVA0008", true, "22", "44", "2222", "44444", "HIJKLMN");
        }).then(function () {
            return Page.eleConnRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnRV0006').to.be.true;
        }).then(function () {
            return Page.eleConnRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abc').to.be.true;
        }).then(function () {
            return Page.eleConnRvStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnRvEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRVA0009').to.be.true;
        }).then(function () {
            return Page.eleConnRvServiceInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '1234').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'N1').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'NCP1').to.be.true;
        }).then(function () {
            return Page.eleConnRvHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HCP1').to.be.true;
        }).then(function () {
            return Page.eleConnRvPolicyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Discard None').to.be.true;
        }).then(function () {
            return Page.eleConnRvMaxEventsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleConnRvTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'T1').to.be.true;
        }).then(function () {
            return Page.eleConnRvIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVA0007').to.be.true;
        }).then(function () {
            return Page.eleConnRvDistributedQueueCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqSchedulerSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMemoryLimitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMsgLimitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqIdentityInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ABCDEFG').to.be.true;
        });
    });

    // Add a RV Connection, then add a RV Connection with the same name, then confirm the overwrite operation.
    //
    it('Should add a RV Connection to overwrite a RV Connection, then confirm the overwrite operation', function () {
        Page.delConnRvYes("ConnRV0007").then(function () {
            Page.delEndpointRvYes("EndpointRVA0011");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRVA0012");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0009");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0010");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0007", "abc", false, "EndpointRVA0011", "1234", "N1", "NCP1", "HCP1", "Discard None", "111", "T1", "IntfRVA0009", true, "11", "33", "1111", "33333", "ABCDEFG");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addConnRv("ConnRV0007", "hij", true, "EndpointRVA0012", "5678", "N2", "NCP2", "HCP2", "Discard New", "222", "T2", "IntfRVA0010", true, "22", "44", "2222", "44444", "HIJKLMN");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleConnRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnRV0007').to.be.true;
        }).then(function () {
            return Page.eleConnRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'hij').to.be.true;
        }).then(function () {
            return Page.eleConnRvStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnRvEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRVA0012').to.be.true;
        }).then(function () {
            return Page.eleConnRvServiceInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '5678').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'N2').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'NCP2').to.be.true;
        }).then(function () {
            return Page.eleConnRvHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HCP2').to.be.true;
        }).then(function () {
            return Page.eleConnRvPolicyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Discard New').to.be.true;
        }).then(function () {
            return Page.eleConnRvMaxEventsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '222').to.be.true;
        }).then(function () {
            return Page.eleConnRvTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'T2').to.be.true;
        }).then(function () {
            return Page.eleConnRvIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVA0010').to.be.true;
        }).then(function () {
            return Page.eleConnRvDistributedQueueCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqSchedulerSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '22').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMemoryLimitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '2222').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMsgLimitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '44444').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqIdentityInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HIJKLMN').to.be.true;
        });
    });

    // Add a RV Connection, then add a RV Connection with the same name, then discard the overwrite operation.
    //
    it('Should add a RV Connection to overwrite a RV Connection, then discard the overwrite operation', function () {
        Page.delConnRvYes("ConnRV0008").then(function () {
            Page.delEndpointRvYes("EndpointRVA0013");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRVA0014");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0011");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0012");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0013");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0014");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0008", "abc", false, "EndpointRVA0013", "1234", "N1", "NCP1", "HCP1", "Discard None", "111", "T1", "IntfRVA0011", true, "11", "33", "1111", "33333", "ABCDEFG");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.addConnRv("ConnRV0008", "hij", true, "EndpointRVA0014", "5678", "N2", "NCP2", "HCP2", "Discard New", "222", "T2", "IntfRVA0012", true, "22", "44", "2222", "44444", "HIJKLMN");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleConnsRvLeftmenu);
        }).then(function () {
            Page.eleConnsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("ConnRV0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleConnRvNameInput);
        }).then(function () {
            return Page.eleConnRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnRV0008').to.be.true;
        }).then(function () {
            return Page.eleConnRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'abc').to.be.true;
        }).then(function () {
            return Page.eleConnRvStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnRvEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRVA0013').to.be.true;
        }).then(function () {
            return Page.eleConnRvServiceInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '1234').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'N1').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'NCP1').to.be.true;
        }).then(function () {
            return Page.eleConnRvHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HCP1').to.be.true;
        }).then(function () {
            return Page.eleConnRvPolicyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Discard None').to.be.true;
        }).then(function () {
            return Page.eleConnRvMaxEventsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '111').to.be.true;
        }).then(function () {
            return Page.eleConnRvTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'T1').to.be.true;
        }).then(function () {
            return Page.eleConnRvIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVA0011').to.be.true;
        }).then(function () {
            return Page.eleConnRvDistributedQueueCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqSchedulerSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '11').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqWorkersSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMemoryLimitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '1111').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMsgLimitSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '33333').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqIdentityInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ABCDEFG').to.be.true;
        });
    });

    // Add a RV Connection, delete it, then confirm the delete operation.
    //
    it('Should add a RV Connection, delete it, then confirm the delete operation', function () {
        Page.delConnRvYes("ConnRV0009").then(function () {
            Page.delEndpointRvYes("EndpointRVA0015");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0009", "", undefined, "EndpointRVA0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delConnRvYes("ConnRV0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("ConnRV0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a RV Connection, delete it, then discard the delete operation.
    //
    it('Should add a RV Connection, delete it, then discard the delete operation', function () {
        Page.delConnRvYes("ConnRV0010").then(function () {
            Page.delEndpointRvYes("EndpointRVA0016");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0010", "", undefined, "EndpointRVA0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delConnRvNo("ConnRV0010");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("ConnRV0010");
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
        Page.delConnRvYes("ConnRV0011").then(function () {
            Page.delEndpointRvYes("EndpointRVA0017");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0017");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0011", "", undefined, "EndpointRVA0017");
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

    // Test RV Connection Details panel fields default value.
    //
    it('Test RV Connection Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleConnsRvLeftmenu);
        }).then(function () {
            Page.eleConnsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvNameInput);
        }).then(function () {
            return Page.eleConnRvNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnRvDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnRvStartupCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleConnRvEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnRvServiceInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '7555').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnRvHostCodepageInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnRvPolicyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Discard First').to.be.true;
        }).then(function () {
            return Page.eleConnRvMaxEventsSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '20000').to.be.true;
        }).then(function () {
            return Page.eleConnRvTcpipStackNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnRvIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleConnRvDistributedQueueCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleConnRvDistributedQueueCheck.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvDqSchedulerSpinner);
        }).then(function () {
            return Page.eleConnRvDqSchedulerSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMemoryLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMsgLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqIdentityInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test RV Connection Details panel mandatory fields.
    //
    it('Test RV Connection Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleConnsRvLeftmenu);
        }).then(function () {
            Page.eleConnsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvServiceInput);
        }).then(function () {
            Page.eleConnRvServiceInput.clear();
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
            return Page.eleConnRvNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleConnRvEndpointValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleConnRvServiceValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test field 'RV Connection Details panel' -> 'Name'
    //
    it('Test field RV Connection -> Name', function () {
        Page.delConnRvYes("ConnRV0012_@#$_222223333333333444444444").then(function () {
            Page.delConnRvYes("ConnRV0013_@#$_222223333333333444444444");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRVA0018");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0012_@#$_222223333333333444444444", "", undefined, "EndpointRVA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConnRV0012_@#$_222223333333333444444444').to.be.true;
        }).then(function () {
            Page.addConnRv("ConnRV0013_@#$_2222233333333334444444444", "", undefined, "EndpointRVA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConnRV0013_@#$_222223333333333444444444').to.be.true;
        });
    });

    // Test field 'RV Connection Details panel' -> 'Description'
    //
    it('Test field RV Connection -> Description', function () {
        Page.delConnRvYes("ConnRV0014").then(function () {
            Page.delConnRvYes("ConnRV0015");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRVA0019");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111", undefined, "EndpointRVA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addConnRv("ConnRV0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111", undefined, "EndpointRVA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvDescValidateMsg);
        }).then(function () {
            return Page.eleConnRvDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvDescInput);
        }).then(function () {
            Page.eleConnRvDescInput.clear().sendKeys("Corrected");
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

    // Test field 'RV Connection Details panel' -> 'RV Endpoint'
    //
    it('Test field RV Connection -> RV Endpoint', function () {
        Page.delConnRvYes("ConnRV0016").then(function () {
            Page.delEndpointRvYes("EndpointRVA0020_@#$_3333333333444444444");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0020_@#$_3333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0016", "", undefined, "EndpointRVA0020_@#$_3333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvEndpointInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointRVA0020_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'RV Connection Details panel' -> 'Service Port'
    //
    it('Test field RV Connection -> Service Port', function () {
        Page.delConnRvYes("ConnRV0017").then(function () {
            Page.delConnRvYes("ConnRV0018");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRVA0021");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0021");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0017", "", undefined, "EndpointRVA0021", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvServiceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.addConnRv("ConnRV0018", "", undefined, "EndpointRVA0021", "abc");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnRvServiceValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvServiceInput.clear().sendKeys("ABC");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnRvServiceValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Not a valid number').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvServiceInput.clear().sendKeys("65536");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnRvServiceValidateMsg.getText();
        }).then(function (message) {
            expect(message === '65536 is invalid, must be equal to or less than 65,535').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvServiceInput.clear().sendKeys("65535");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvServiceInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '65535').to.be.true;
        });
    });

    // Test field 'RV Connection Details panel' -> 'Network'
    //
    it('Test field RV Connection -> Network', function () {
        Page.delConnRvYes("ConnRV0019").then(function () {
            Page.delConnRvYes("ConnRV0020");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRVA0022");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0022");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0019", "", undefined, "EndpointRVA0022", undefined, "ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333').to.be.true;
        }).then(function () {
            Page.addConnRv("ConnRV0020", "", undefined, "EndpointRVA0022", undefined, "ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^1111111111222222222233333333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333').to.be.true;
        });
    });

    // Test field 'RV Connection Details panel' -> 'Network Code Page' & 'Host Code Page'
    //
    it('Test field RV Connection -> Network Code Page & Host Code Page', function () {
        Page.delConnRvYes("ConnRV0021").then(function () {
            Page.delConnRvYes("ConnRV0022");
        }).then(function () {
            Page.delEndpointRvYes("EndpointRVA0023");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0023");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0021", "", undefined, "EndpointRVA0023", undefined, undefined, "1Ab@#$&?%!^C345", "1Ab@#$&?%!^C345");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkCodepageInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '1Ab@#$&?%!^C345').to.be.true;
        }).then(function () {
            return Page.eleConnRvHostCodepageInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '1Ab@#$&?%!^C345').to.be.true;
        }).then(function () {
            Page.addConnRv("ConnRV0022", "", undefined, "EndpointRVA0023", undefined, undefined, "1Ab@#$&?%!^C3456", "1Ab@#$&?%!^C3456");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvNetworkCodepageInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '1Ab@#$&?%!^C345').to.be.true;
        }).then(function () {
            return Page.eleConnRvHostCodepageInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '1Ab@#$&?%!^C345').to.be.true;
        });
    });

    // Test field 'RV Connection Details panel' -> 'Policy'
    //
    it('Test field RV Connection -> Policy', function () {
        Page.delConnRvYes("ConnRV0023").then(function () {
            Page.delEndpointRvYes("EndpointRVA0024");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0023", "", undefined, "EndpointRVA0024", undefined, undefined, undefined, undefined, "Discard First");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvPolicyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Discard First').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page._policyConnRv("Discard None");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvPolicyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Discard None').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page._policyConnRv("Discard New");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvPolicyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Discard New').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page._policyConnRv("Discard Last");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvPolicyDropdown.getText();
        }).then(function (message) {
            expect(message === 'Discard Last').to.be.true;
        });
    });

    // Test field 'RV Connection Details panel' -> 'Maximum Events'
    //
    it('Test field RV Connection -> Maximum Events', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delConnRvYes("ConnRV0024").then(function () {
            Page.delEndpointRvYes("EndpointRVA0025");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0025");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0024", "", undefined, "EndpointRVA0025", undefined, undefined, undefined, undefined, undefined, "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvMaxEventsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvMaxEventsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleConnRvMaxEventsSpinner.clear().sendKeys("300000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvMaxEventsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '300000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvMaxEventsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleConnRvMaxEventsSpinner.clear().sendKeys("300001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvMaxEventsSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '300000').to.be.true;
        });
    });

    // Test field 'RV Connection Details panel' -> 'TCP/IP Stack Name'
    //
    it('Test field RV Connection -> TCP/IP Stack Name', function () {
        Page.delConnRvYes("ConnRV0025").then(function () {
            Page.delEndpointRvYes("EndpointRVA0026");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0026");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0025", "", undefined, "EndpointRVA0026", undefined, undefined, undefined, undefined, undefined, undefined, "@#$AB123");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvTcpipStackNameInput.clear().sendKeys("#@$123AB");
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
            Page.eleConnRvTcpipStackNameInput.clear().sendKeys("$#@123AB");
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
            Page.eleConnRvTcpipStackNameInput.clear().sendKeys("AB120@#$");
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
            Page.eleConnRvTcpipStackNameInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvTcpipStackNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvTcpipStackNameInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnRvTcpipStackNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvTcpipStackNameInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnRvTcpipStackNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvTcpipStackNameInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnRvTcpipStackNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvTcpipStackNameInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnRvTcpipStackNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleConnRvTcpipStackNameInput.clear().sendKeys("A");
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
            Page.eleConnRvTcpipStackNameInput.clear().sendKeys("A2");
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

    // Test field 'RV Connection Details panel' -> 'Interfaces'
    //
    it('Test field RV Connection -> Interfaces', function () {
        Page.delConnRvYes("ConnRV0026").then(function () {
            Page.delEndpointRvYes("EndpointRVA0027");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0027");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0013");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0014");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0015");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0016");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0017");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0018");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0019");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0020");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0021");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0022");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0023");
        }).then(function () {
            Page.delIntfRvYes("IntfRVA0024");
        }).then(function () {
            Page.addIntfRv("IntfRVA0013");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0014");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0017");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0020");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0021");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0022");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0023");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addIntfRv("IntfRVA0024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0026", "", undefined, "EndpointRVA0027");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntfValidateMsg);
        }).then(function () {
            return Page.eleConnRvIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Empty Value').to.be.true;
        }).then(function () {
            Page.eleConnRvIntfInput.clear().sendKeys("IntfRVA0013");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntf2Input);
        }).then(function () {
            Page.eleConnRvIntf2Input.clear().sendKeys("IntfRVA0014");
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntf3Input);
        }).then(function () {
            Page.eleConnRvIntf3Input.clear().sendKeys("IntfRVA0015");
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntf4Input);
        }).then(function () {
            Page.eleConnRvIntf4Input.clear().sendKeys("IntfRVA0016");
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntf5Input);
        }).then(function () {
            Page.eleConnRvIntf5Input.clear().sendKeys("IntfRVA0017");
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntf6Input);
        }).then(function () {
            Page.eleConnRvIntf6Input.clear().sendKeys("IntfRVA0018");
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntf7Input);
        }).then(function () {
            Page.eleConnRvIntf7Input.clear().sendKeys("IntfRVA0019");
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntf8Input);
        }).then(function () {
            Page.eleConnRvIntf8Input.clear().sendKeys("IntfRVA0020");
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntf9Input);
        }).then(function () {
            Page.eleConnRvIntf9Input.clear().sendKeys("IntfRVA0021");
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntf10Input);
        }).then(function () {
            Page.eleConnRvIntf10Input.clear().sendKeys("IntfRVA0022");
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntf11Input);
        }).then(function () {
            Page.eleConnRvIntf11Input.clear().sendKeys("IntfRVA0023");
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntf12Input);
        }).then(function () {
            Page.eleConnRvIntf12Input.clear().sendKeys("IntfRVA0024");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningInfo);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === 'Max number of entries is 12').to.be.true;
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            Page.eleConnRvIntf12RemoveButton.click();
        }).then(function () {
            Page.eleConnRvIntf10RemoveButton.click();
        }).then(function () {
            Page.eleConnRvIntf8RemoveButton.click();
        }).then(function () {
            Page.eleConnRvIntf6RemoveButton.click();
        }).then(function () {
            Page.eleConnRvIntf4RemoveButton.click();
        }).then(function () {
            Page.eleConnRvIntf2RemoveButton.click();
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvIntfInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVA0013').to.be.true;
        }).then(function () {
            return Page.eleConnRvIntf2Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVA0015').to.be.true;
        }).then(function () {
            return Page.eleConnRvIntf3Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVA0017').to.be.true;
        }).then(function () {
            return Page.eleConnRvIntf4Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVA0019').to.be.true;
        }).then(function () {
            return Page.eleConnRvIntf5Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVA0021').to.be.true;
        }).then(function () {
            return Page.eleConnRvIntf6Input.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IntfRVA0023').to.be.true;
        }).then(function () {
            Page.eleConnRvIntfAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntf7Input);
        }).then(function () {
            Page.eleConnRvIntf7Input.clear().sendKeys("IntfRVA0019");
        }).then(function () {
            Page.eleConnRvIntf5Input.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnRvIntfValidateMsg);
        }).then(function () {
            return Page.eleConnRvIntfValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Duplicate Reference').to.be.true;
        }).then(function () {
            Page.eleConnRvIntf7RemoveButton.click();
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

    // Test field 'RV Connection Details panel -> rvdq Scheduler, Workers, Memory Limit, Message Limit'
    //
    it('Test field RV Connection -> rvdq Scheduler, Workers, Memory Limit, Message Limit', function () {
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        Page.delConnRvYes("ConnRV0027").then(function () {
            Page.delEndpointRvYes("EndpointRVA0028");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0028");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0027", "", undefined, "EndpointRVA0028", "", "", "", "", undefined, undefined, "", "", true, "0", "0", "0", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqSchedulerSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMemoryLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMsgLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvDqSchedulerSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleConnRvDqSchedulerSpinner.clear().sendKeys("64");
        }).then(function () {
            Page.eleConnRvDqWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleConnRvDqWorkersSpinner.clear().sendKeys("80");
        }).then(function () {
            Page.eleConnRvDqMemoryLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleConnRvDqMemoryLimitSpinner.clear().sendKeys("3000");
        }).then(function () {
            Page.eleConnRvDqMsgLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleConnRvDqMsgLimitSpinner.clear().sendKeys("100000");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqSchedulerSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '64').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '80').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMemoryLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3000').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMsgLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100000').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvDqSchedulerSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleConnRvDqSchedulerSpinner.clear().sendKeys("65");
        }).then(function () {
            Page.eleConnRvDqWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleConnRvDqWorkersSpinner.clear().sendKeys("81");
        }).then(function () {
            Page.eleConnRvDqMemoryLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleConnRvDqMemoryLimitSpinner.clear().sendKeys("3001");
        }).then(function () {
            Page.eleConnRvDqMsgLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleConnRvDqMsgLimitSpinner.clear().sendKeys("100001");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqSchedulerSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '64').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqWorkersSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '80').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMemoryLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3000').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqMsgLimitSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '100000').to.be.true;
        });
    });

    // Test field 'RV Connection Details panel -> rvdq Identity'
    //
    it('Test field RV Connection -> rvdq Identity', function () {
        Page.delConnRvYes("ConnRV0028").then(function () {
            Page.delEndpointRvYes("EndpointRVA0029");
        }).then(function () {
            Page.addEndpointRv("EndpointRVA0029");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnRv("ConnRV0028", "", undefined, "EndpointRVA0029", "", "", "", "", undefined, undefined, "", "", true, "0", "0", "100", "100", "@#$AB123");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvDqIdentityInput.clear().sendKeys("#@$123AB");
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
            Page.eleConnRvDqIdentityInput.clear().sendKeys("$#@123AB");
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
            Page.eleConnRvDqIdentityInput.clear().sendKeys("AB120@#$");
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
            Page.eleConnRvDqIdentityInput.clear().sendKeys("A23456789");
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
            Page.eleConnRvDqIdentityInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqIdentityValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvDqIdentityInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqIdentityValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvDqIdentityInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqIdentityValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvDqIdentityInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleConnRvDqIdentityValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleConnRvDqIdentityInput.clear().sendKeys("A");
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
            Page.eleConnRvDqIdentityInput.clear().sendKeys("A2");
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

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});