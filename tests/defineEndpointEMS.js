/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.1 Define Endpoints EMS Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a EMS Endpoint successfully.
    //
    it('Should add a EMS Endpoint successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delEndpointEmsYes("EndpointEMS0001");
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a EMS Endpoint successfully, then replicate it.
    //
    it('Should add a EMS Endpoint, then replicate it successfully', function () {
        Page.delConnEmsYes("EndpointEMS0002-copy").then(function () {
            Page.delConnEmsYes("EndpointEMS0002");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMS0002-copy");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMS0002");
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateEndpointEms("EndpointEMS0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a EMS Endpoint successfully, then update it.
    //
    it('Should add a EMS Endpoint, then update it successfully', function () {
        Page.delConnEmsYes("EndpointEMS0003").then(function () {
            Page.delEndpointEmsYes("EndpointEMS0003");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLA0001");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLA0002");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLA0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLA0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0003", "AbCdEfG", "UserID01", "Pawd01", "AbCdEfG:1234", "ConnEMSSSLA0001", "ECF01", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateEndpointEms("EndpointEMS0003", "HiJkLmN", "UserID02", "Pawd02", "HiJkLmN:5678", "ConnEMSSSLA0002", "ECF02");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointEMS0003').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'UserID02').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Pawd02').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLA0002').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnFactoryInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ECF02').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnObjectListed.getText();
        }).then(function (message) {
            expect(message === 'EndpointEMS0003').to.be.true;
        });
    });

    // Add a EMS Endpoint, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a EMS Endpoint, cancel the changes, then confirm the cancel operation', function () {
        Page.delEndpointEmsYes("EndpointEMS0004").then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLA0003");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLA0004");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLA0003");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLA0004");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0004", "AbCdEfG", "UserID01", "Pawd01", "AbCdEfG:1234", "ConnEMSSSLA0003", "ECF01", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointEmsYes("EndpointEMS0004", "HiJkLmN", "UserID02", "Pawd02", "HiJkLmN:5678", "ConnEMSSSLA0004", "ECF02");
        }).then(function () {
            Page.eleEndpointsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointEMS0004");
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
            return Page.eleEndpointEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointEMS0004').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'UserID01').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Pawd01').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLA0003').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnFactoryInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ECF01').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnObjectListed.getText();
        }).then(function (message) {
            expect(message === '').to.be.true;
        });
    });

    // Add a EMS Endpoint, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a EMS Endpoint, cancel the changes, then discard the cancel operation', function () {
        Page.delConnEmsYes("EndpointEMS0005").then(function () {
            Page.delEndpointEmsYes("EndpointEMS0005");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLA0005");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLA0006");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLA0005");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLA0006");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0005", "AbCdEfG", "UserID01", "Pawd01", "AbCdEfG:1234", "ConnEMSSSLA0001", "ECF01", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointEmsNo("EndpointEMS0005", "HiJkLmN", "UserID02", "Pawd02", "HiJkLmN:5678", "ConnEMSSSLA0006", "ECF02");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEndpointEmsNameInput);
        }).then(function () {
            return Page.eleEndpointEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointEMS0005').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'UserID02').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Pawd02').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLA0006').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnFactoryInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ECF02').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnObjectListed.getText();
        }).then(function (message) {
            expect(message === 'EndpointEMS0005').to.be.true;
        });
    });

    // Add a EMS Endpoint, make some changes, then reset it.
    //
    it('Should add a EMS Endpoint, make some changes, then reset it', function () {
        Page.delEndpointEmsYes("EndpointEMS0006").then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLA0007");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLA0008");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLA0007");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLA0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0006", "AbCdEfG", "UserID01", "Pawd01", "AbCdEfG:1234", "ConnEMSSSLA0007", "ECF01", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetEndpointEms("EndpointEMS0006", "HiJkLmN", "UserID02", "Pawd02", "HiJkLmN:5678", "ConnEMSSSLA0008", "ECF02");
        }).then(function () {
            return Page.eleEndpointEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointEMS0006').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'UserID01').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Pawd01').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLA0007').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnFactoryInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ECF01').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnObjectListed.getText();
        }).then(function (message) {
            expect(message === '').to.be.true;
        });
    });

    // Add a EMS Endpoint, then add a EMS Endpoint with the same name, then confirm the overwrite operation.
    //
    it('Should add a EMS Endpoint to overwrite a EMS Endpoint, then confirm the overwrite operation', function () {
        Page.delConnEmsYes("EndpointEMS0007").then(function () {
            Page.delEndpointEmsYes("EndpointEMS0007");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLA0009");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLA0010");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLA0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLA0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0007", "AbCdEfG", "UserID01", "Pawd01", "AbCdEfG:1234", "ConnEMSSSLA0009", "ECF01", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0007", "HiJkLmN", "UserID02", "Pawd02", "HiJkLmN:5678", "ConnEMSSSLA0010", "ECF02", false);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleEndpointEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointEMS0007').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'UserID02').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Pawd02').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLA0010').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnFactoryInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ECF02').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnObjectListed.getText();
        }).then(function (message) {
            expect(message === 'EndpointEMS0007').to.be.true;
        });
    });

    // Add a EMS Endpoint, then add a EMS Endpoint with the same name, then discard the overwrite operation.
    //
    it('Should add a EMS Endpoint to overwrite a EMS Endpoint, then discard the overwrite operation', function () {
        Page.delEndpointEmsYes("EndpointEMS0008").then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLA0011");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLA0012");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLA0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLA0012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0008", "AbCdEfG", "UserID01", "Pawd01", "AbCdEfG:1234", "ConnEMSSSLA0011", "ECF01", false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0008", "HiJkLmN", "UserID02", "Pawd02", "HiJkLmN:5678", "ConnEMSSSLA0012", "ECF02", true);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            Page.eleEndpointsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointEMS0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEndpointEmsNameInput);
        }).then(function () {
            return Page.eleEndpointEmsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointEMS0008').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'UserID01').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Pawd01').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLA0011').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnFactoryInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ECF01').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnObjectListed.getText();
        }).then(function (message) {
            expect(message === '').to.be.true;
        });
    });

    // Add a EMS Endpoint, delete it, then confirm the delete operation.
    //
    it('Should add a EMS Endpoint, delete it, then confirm the delete operation', function () {
        Page.delEndpointEmsYes("EndpointEMS0009").then(function () {
            Page.addEndpointEms("EndpointEMS0009", "", "", "", undefined, "", "", true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMS0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getAttribute('title');
        }).then(function (message) {
            expect(message.includes("Not allowed to delete EMS Endpoint")).to.be.true;
        }).then(function () {
            Page.delConnEmsYes("EndpointEMS0009");
        }).then(function () {
            Page.delEndpointEmsYes("EndpointEMS0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointEMS0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a EMS Endpoint, delete it, then discard the delete operation.
    //
    it('Should add a EMS Endpoint, delete it, then discard the delete operation', function () {
        Page.delEndpointEmsYes("EndpointEMS0010").then(function () {
            Page.addEndpointEms("EndpointEMS0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointEmsNo("EndpointEMS0010");
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.true;
        });
    });

    // Test 'Audit' & 'Refresh' button.
    //
    it('Test Audit & Refresh button', function () {
        Page.delEndpointEmsYes("EndpointEMS0011").then(function () {
            Page.addEndpointEms("EndpointEMS0011");
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
            return Page.eleTableHeader3.getText();
        }).then(function (message) {
            expect(message === 'URL').to.be.true;
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
            return Page.eleTableHeader3.getText();
        }).then(function (message) {
            expect(message === 'URL').to.be.true;
        });
    });

    // Test field 'EMS Endpoint Details panel' -> 'CHECK' button normally
    //
    it('Test field EMS Endpoint -> CHECK normally', function () {
        Page.delEndpointEmsYes("EndpointEMS0011").then(function () {
            Page.addEndpointEms("EndpointEMS0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Checked successfully').to.be.true;
        });
    });

    // Test field 'EMS Endpoint Details panel' -> 'CHECK' button with invalid password
    //
    it('Test field EMS Endpoint -> CHECK with invalid password', function () {
        Page.delEndpointEmsYes("EndpointEMS0012_Invalid_Password").then(function () {
            Page.addEndpointEms("EndpointEMS0012_Invalid_Password", "", undefined, "invalid");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Checked successfully').to.be.true;
        });
    });

    // Test field 'EMS Endpoint Details panel' -> 'CHECK' button with invalid userid
    //
    it('Test field EMS Endpoint -> CHECK with invalid userid', function () {
        Page.delEndpointEmsYes("EndpointEMS0013_Invalid_Userid").then(function () {
            Page.addEndpointEms("EndpointEMS0013_Invalid_Userid", "", "invalid");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Checked successfully').to.be.true;
        });
    });

    // Test field 'EMS Endpoint Details panel' -> 'CHECK' button with invalid url
    //
    it('Test field EMS Endpoint -> CHECK with invalid url', function () {
        Page.delEndpointEmsYes("EndpointEMS0014_Invalid_Url").then(function () {
            Page.addEndpointEms("EndpointEMS0014_Invalid_Url", "", undefined, undefined, "invalid");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message.includes("Failed to connect to the server")).to.be.true;
        });
    });

    // Test EMS Endpoint Details panel fields default value.
    // Related jiras: ZWUI-947(fixed)
    it('Test EMS Endpoint Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleEndpointsEmsLeftmenu);
        }).then(function () {
            Page.eleEndpointsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointEmsNameInput);
        }).then(function () {
            return Page.eleEndpointEmsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUseridInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUrlInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnFactoryInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsAutoCreateConnCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Test EMS Endpoint Details panel mandatory fields.
    //
    it('Test EMS Endpoint Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            globalCommons.waitForClickable(Page.eleEndpointsEmsLeftmenu);
        }).then(function () {
            Page.eleEndpointsEmsLeftmenu.click();
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
            return Page.eleEndpointEmsNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUrlValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'EMS Endpoint Details panel' -> 'Name'
    //
    it('Test field EMS Endpoint -> Name', function () {
        Page.delEndpointEmsYes("EndpointEMS0015_@#$_3333333333444444444").then(function () {
            Page.delEndpointEmsYes("EndpointEMS0016_@#$_3333333333444444444");
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0015_@#$_3333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointEMS0015_@#$_3333333333444444444').to.be.true;
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0016_@#$_33333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointEMS0016_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'EMS Endpoint Details panel' -> 'Description'
    //
    it('Test field EMS Endpoint -> Description', function () {
        Page.delEndpointEmsYes("EndpointEMS0017").then(function () {
            Page.delEndpointEmsYes("EndpointEMS0018");
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0017", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0018", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointEmsDescValidateMsg);
        }).then(function () {
            return Page.eleEndpointEmsDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointEmsDescInput);
        }).then(function () {
            Page.eleEndpointEmsDescInput.clear().sendKeys("Corrected");
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

    // Test field 'EMS Endpoint Details panel' -> 'Userid & Password'
    // Related jiras: ZWUI-948(fixed)
    it('Test field EMS Endpoint -> Userid & Password', function () {
        Page.delEndpointEmsYes("EndpointEMS0019").then(function () {
            Page.delEndpointEmsYes("EndpointEMS0020");
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0019", "", "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111", "CCCCCddddd@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUseridInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'CCCCCddddd@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0020", "", "AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????1111", "CCCCCddddd@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????1111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUseridInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAbbbbb@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'CCCCCddddd@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111').to.be.true;
        });
    });

    // Test field 'EMS Endpoint Details panel' -> 'URL'
    //
    it('Test field EMS Endpoint -> URL', function () {
        Page.delEndpointEmsYes("EndpointEMS0021").then(function () {
            Page.delEndpointEmsYes("EndpointEMS0022");
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0021", "", undefined, undefined, "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUrlInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0022", "", undefined, undefined, "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsUrlInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        });
    });

    // Test field 'EMS Endpoint Details panel' -> 'SSL'
    //
    it('Test field EMS Endpoint -> SSL', function () {
        Page.delEndpointEmsYes("EndpointEMS0023").then(function () {
            Page.delEndpointEmsYes("EndpointEMS0024");
        }).then(function () {
            Page.delConnEmsSslYes("ConnEMSSSLA0013_@#$_3333333333444444444");
        }).then(function () {
            Page.addConnEmsSsl("ConnEMSSSLA0013_@#$_3333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0023", "", undefined, undefined, undefined, "ConnEMSSSLA0013_@#$_3333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsSslInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ConnEMSSSLA0013_@#$_3333333333444444444').to.be.true;
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0024", "", undefined, undefined, undefined, "ConnEMSSSLA0013_@#$_33333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsSslInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ConnEMSSSLA0013_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'EMS Endpoint Details panel' -> 'Connection Factory Name'
    //
    it('Test field EMS Endpoint -> Connection Factory Name', function () {
        Page.delEndpointEmsYes("EndpointEMS0025").then(function () {
            Page.delEndpointEmsYes("EndpointEMS0026");
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0025", "", undefined, undefined, undefined, "", "ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnFactoryInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333').to.be.true;
        }).then(function () {
            Page.addEndpointEms("EndpointEMS0026", "", undefined, undefined, undefined, "", "ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^1111111111222222222233333333");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointEmsConnFactoryInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABCDEFGHIJklmnopqrst@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????%%%%%%%%%%!!!!!!!!!!^^^^^^^^^^111111111122222222223333333').to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});