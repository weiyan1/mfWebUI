/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var definePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.8.3 Define Endpoints CICS Page', function () {
    var Page = new definePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDefineMenu.click();
    });

    // Add a CICS Endpoint successfully.
    //
    it('Should add a CICS Endpoint successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delEndpointCicsYes("EndpointCICS0001");
        }).then(function () {
            Page.addEndpointCics("EndpointCICS0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a CICS Endpoint successfully, then replicate it.
    //
    it('Should add a CICS Endpoint, then replicate it successfully', function () {
        Page.delEndpointCicsYes("EndpointCICS0002-copy").then(function () {
            Page.delEndpointCicsYes("EndpointCICS0002");
        }).then(function () {
            Page.addEndpointCics("EndpointCICS0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateEndpointCics("EndpointCICS0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a CICS Endpoint successfully, then update it.
    //
    it('Should add a CICS Endpoint, then update it successfully', function () {
        Page.delEndpointCicsYes("EndpointCICS0003").then(function () {
            Page.addEndpointCics("EndpointCICS0003", "AbCdEfG", "C512XX1G", "AAAAAAAA", "BBBBBBBB", false, false, "CCCCCCCC", "3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateEndpointCics("EndpointCICS0003", "HiJkLmN", "C512XX2G", "HHHHHHHH", "IIIIIIII", true, true, "JJJJJJJJ", "4");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICS0003').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'C512XX2G').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsAdministrationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHHHHHHH').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceRecInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IIIIIIII').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsSpecificRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsGenericRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJJJJJJJ').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        });
    });

    // Add a CICS Endpoint, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a CICS Endpoint, cancel the changes, then confirm the cancel operation', function () {
        Page.delEndpointCicsYes("EndpointCICS0004").then(function () {
            Page.addEndpointCics("EndpointCICS0004", "AbCdEfG", "C512XX1G", "AAAAAAAA", "BBBBBBBB", false, false, "CCCCCCCC", "3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointCicsYes("EndpointCICS0004", "HiJkLmN", "C512XX2G", "HHHHHHHH", "IIIIIIII", true, true, "JJJJJJJJ", "4");
        }).then(function () {
            Page.eleEndpointsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointCICS0004");
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
            return Page.eleEndpointCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICS0004').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'C512XX1G').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsAdministrationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAAAA').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceRecInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBBBBBBB').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsSpecificRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsGenericRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CCCCCCCC').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        });
    });

    // Add a CICS Endpoint, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a CICS Endpoint, cancel the changes, then discard the cancel operation', function () {
        Page.delEndpointCicsYes("EndpointCICS0005").then(function () {
            Page.addEndpointCics("EndpointCICS0005", "AbCdEfG", "C512XX1G", "AAAAAAAA", "BBBBBBBB", false, false, "CCCCCCCC", "3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelEndpointCicsNo("EndpointCICS0005", "HiJkLmN", "C512XX2G", "HHHHHHHH", "IIIIIIII", true, true, "JJJJJJJJ", "4");
        }).then(function () {
            return Page.eleEndpointCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICS0005').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'C512XX2G').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsAdministrationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHHHHHHH').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceRecInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IIIIIIII').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsSpecificRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsGenericRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJJJJJJJ').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        });
    });

    // Add a CICS Endpoint, make some changes, then reset it.
    //
    it('Should add a CICS Endpoint, make some changes, then reset it', function () {
        Page.delEndpointCicsYes("EndpointCICS0006").then(function () {
            Page.addEndpointCics("EndpointCICS0006", "AbCdEfG", "C512XX1G", "AAAAAAAA", "BBBBBBBB", false, false, "CCCCCCCC", "3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetEndpointCics("EndpointCICS0006", "HiJkLmN", "C512XX2G", "HHHHHHHH", "IIIIIIII", true, true, "JJJJJJJJ", "4");
        }).then(function () {
            return Page.eleEndpointCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICS0006').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'C512XX1G').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsAdministrationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAAAA').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceRecInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBBBBBBB').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsSpecificRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsGenericRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CCCCCCCC').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        });
    });

    // Add a CICS Endpoint, then add a CICS Endpoint with the same name, then confirm the overwrite operation.
    //
    it('Should add a CICS Endpoint to overwrite a CICS Endpoint, then confirm the overwrite operation', function () {
        Page.delEndpointCicsYes("EndpointCICS0007").then(function () {
            Page.addEndpointCics("EndpointCICS0007", "AbCdEfG", "C512XX1G", "AAAAAAAA", "BBBBBBBB", false, false, "CCCCCCCC", "3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICS0007", "HiJkLmN", "C512XX2G", "HHHHHHHH", "IIIIIIII", true, true, "JJJJJJJJ", "4");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleEndpointCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICS0007').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HiJkLmN').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'C512XX2G').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsAdministrationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HHHHHHHH').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceRecInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'IIIIIIII').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsSpecificRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsGenericRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'JJJJJJJJ').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '4').to.be.true;
        });
    });

    // Add a CICS Endpoint, then add a CICS Endpoint with the same name, then discard the overwrite operation.
    //
    it('Should add a CICS Endpoint to overwrite a CICS Endpoint, then discard the overwrite operation', function () {
        Page.delEndpointCicsYes("EndpointCICS0008").then(function () {
            Page.addEndpointCics("EndpointCICS0008", "AbCdEfG", "C512XX1G", "AAAAAAAA", "BBBBBBBB", false, false, "CCCCCCCC", "3");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addEndpointCics("EndpointCICS0008", "HiJkLmN", "C512XX2G", "HHHHHHHH", "IIIIIIII", true, true, "JJJJJJJJ", "4");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEndpointsCicsLeftmenu);
        }).then(function () {
            Page.eleEndpointsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointCICS0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleEndpointCicsNameInput);
        }).then(function () {
            return Page.eleEndpointCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EndpointCICS0008').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AbCdEfG').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'C512XX1G').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsAdministrationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAAAA').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceRecInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBBBBBBB').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsSpecificRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsGenericRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'CCCCCCCC').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '3').to.be.true;
        });
    });

    // Add a CICS Endpoint, delete it, then confirm the delete operation.
    //
    it('Should add a CICS Endpoint, delete it, then confirm the delete operation', function () {
        Page.delEndpointCicsYes("EndpointCICS0009").then(function () {
            Page.addEndpointCics("EndpointCICS0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICS0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointCICS0009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a CICS Endpoint, delete it, then discard the delete operation.
    //
    it('Should add a CICS Endpoint, delete it, then discard the delete operation', function () {
        Page.delEndpointCicsYes("EndpointCICS0010").then(function () {
            Page.addEndpointCics("EndpointCICS0010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delEndpointCicsNo("EndpointCICS0010");
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.true;
        });
    });

    // Test 'Audit' & 'Refresh' button.
    //
    it('Test Audit & Refresh button', function () {
        Page.delEndpointCicsYes("EndpointCICS0011").then(function () {
            Page.addEndpointCics("EndpointCICS0011");
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

    // Test CICS Endpoint Details panel fields default value.
    //
    it('Test CICS Endpoint Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleEndpointsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointCicsNameInput);
        }).then(function () {
            return Page.eleEndpointCicsNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsDescInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsAdministrationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SXCSSADM').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceRecInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SXCSSDPL').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsSpecificRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsGenericRadio.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SXCSSTRG').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute('value');
        }).then(function (message) {
            expect(message === '0').to.be.true;
        });
    });

    // Test CICS Endpoint Details panel mandatory fields.
    //
    it('Test CICS Endpoint Details panel mandatory fields', function () {
        Page.delEndpointCicsYes("EndpointCICS0011").then(function () {
            globalCommons.waitForElementPresent(Page.eleScreenElement);
        }).then(function () {
            Page.eleEndpointsCicsLeftmenu.click();
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointCicsAdministrationInput);
        }).then(function () {
            Page.eleEndpointCicsAdministrationInput.clear();
        }).then(function () {
            Page.eleEndpointCicsServiceRecInput.clear();
        }).then(function () {
            Page.eleEndpointCicsServiceTrgInput.clear();
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsApplidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointCicsNameInput);
        }).then(function () {
            Page.eleEndpointCicsNameInput.clear().sendKeys("EndpointCICS0011");
        }).then(function () {
            Page.eleEndpointCicsApplidInput.clear().sendKeys("C512XX1G");
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

    // Test field 'CICS Endpoint Details panel' -> 'Name'
    //
    it('Test field CICS Endpoint -> Name', function () {
        Page.delEndpointCicsYes("EndpointCICS0012_@#$_333333333444444444").then(function () {
            Page.addEndpointCics("EndpointCICS0012_@#$_333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointCICS0012_@#$_333333333444444444').to.be.true;
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICS0013_@#$_333333333444444444");
        }).then(function () {
            Page.addEndpointCics("EndpointCICS0013_@#$_3333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'EndpointCICS0013_@#$_333333333444444444').to.be.true;
        });
    });

    // Test field 'CICS Endpoint Details panel' -> 'Description'
    //
    it('Test field CICS Endpoint -> Description', function () {
        Page.delEndpointCicsYes("EndpointCICS0014").then(function () {
            Page.addEndpointCics("EndpointCICS0014", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsDescInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.delEndpointCicsYes("EndpointCICS0015");
        }).then(function () {
            Page.addEndpointCics("EndpointCICS0015", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointCicsDescValidateMsg);
        }).then(function () {
            return Page.eleEndpointCicsDescValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEndpointCicsDescInput);
        }).then(function () {
            Page.eleEndpointCicsDescInput.clear().sendKeys("Corrected");
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

    // Test field 'CICS Endpoint Details panel' -> 'Application ID'
    //
    it('Test field CICS Endpoint -> Application ID', function () {
        Page.delEndpointCicsYes("EndpointCICS0016").then(function () {
            Page.addEndpointCics("EndpointCICS0016", "", "@#$AB123");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsApplidInput.clear().sendKeys("#@$123AB");
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
            Page.eleEndpointCicsApplidInput.clear().sendKeys("$#@123AB");
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
            Page.eleEndpointCicsApplidInput.clear().sendKeys("AB120@#$");
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
            Page.eleEndpointCicsApplidInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsApplidInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsApplidInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsApplidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsApplidInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsApplidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsApplidInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsApplidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsApplidInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsApplidValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleEndpointCicsApplidInput.clear().sendKeys("A");
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
            Page.eleEndpointCicsApplidInput.clear().sendKeys("A2");
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

    // Test field 'CICS Endpoint Details panel' -> 'Administration, Service:Recipe, Service:Trigger'
    //
    it('Test field CICS Endpoint -> Administration, Service:Recipe, Service:Trigger', function () {
        Page.delEndpointCicsYes("EndpointCICS0017").then(function () {
            Page.addEndpointCics("EndpointCICS0017", "", undefined, "", "", false, false, "", "0");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsAdministrationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SXCSSADM').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceRecInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SXCSSDPL').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'SXCSSTRG').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsAdministrationInput.clear().sendKeys("@#$AB123");
        }).then(function () {
            Page.eleEndpointCicsServiceRecInput.clear().sendKeys("#@$HI456");
        }).then(function () {
            Page.eleEndpointCicsServiceTrgInput.clear().sendKeys("$@#UV789");
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
            Page.eleEndpointCicsAdministrationInput.clear().sendKeys("AB120@#$");
        }).then(function () {
            Page.eleEndpointCicsServiceRecInput.clear().sendKeys("HI450@$#");
        }).then(function () {
            Page.eleEndpointCicsServiceTrgInput.clear().sendKeys("UV780$#@");
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
            Page.eleEndpointCicsAdministrationInput.clear().sendKeys("$#@123AB");
        }).then(function () {
            Page.eleEndpointCicsServiceRecInput.clear().sendKeys("@#$456HI");
        }).then(function () {
            Page.eleEndpointCicsServiceTrgInput.clear().sendKeys("#@$789UV");
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
            Page.eleEndpointCicsAdministrationInput.clear().sendKeys("A23456789");
        }).then(function () {
            Page.eleEndpointCicsServiceRecInput.clear().sendKeys("H23456789");
        }).then(function () {
            Page.eleEndpointCicsServiceTrgInput.clear().sendKeys("U23456789");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsAdministrationInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'A2345678').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceRecInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'H2345678').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceTrgInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'U2345678').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsAdministrationInput.clear().sendKeys("123@#$AB");
        }).then(function () {
            Page.eleEndpointCicsServiceRecInput.clear().sendKeys("456@#$HI");
        }).then(function () {
            Page.eleEndpointCicsServiceTrgInput.clear().sendKeys("789@#$UV");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsAdministrationValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceRecValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceTrgValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsAdministrationInput.clear().sendKeys("aBCDE");
        }).then(function () {
            Page.eleEndpointCicsServiceRecInput.clear().sendKeys("hIJKL");
        }).then(function () {
            Page.eleEndpointCicsServiceTrgInput.clear().sendKeys("uVWXY");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsAdministrationValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceRecValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceTrgValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsAdministrationInput.clear().sendKeys("AbCDE");
        }).then(function () {
            Page.eleEndpointCicsServiceRecInput.clear().sendKeys("HiJKL");
        }).then(function () {
            Page.eleEndpointCicsServiceTrgInput.clear().sendKeys("UvWXY");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsAdministrationValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceRecValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceTrgValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsAdministrationInput.clear().sendKeys("ABCDe");
        }).then(function () {
            Page.eleEndpointCicsServiceRecInput.clear().sendKeys("HIJKl");
        }).then(function () {
            Page.eleEndpointCicsServiceTrgInput.clear().sendKeys("UVWXy");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There are errors on this form').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsAdministrationValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceRecValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsServiceTrgValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please use $,#,@,A-Z, and 0-9; do not start with 0-9').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleEndpointCicsAdministrationInput.clear().sendKeys("A");
        }).then(function () {
            Page.eleEndpointCicsServiceRecInput.clear().sendKeys("H");
        }).then(function () {
            Page.eleEndpointCicsServiceTrgInput.clear().sendKeys("U");
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
            Page.eleEndpointCicsAdministrationInput.clear().sendKeys("A2");
        }).then(function () {
            Page.eleEndpointCicsServiceRecInput.clear().sendKeys("H2");
        }).then(function () {
            Page.eleEndpointCicsServiceTrgInput.clear().sendKeys("U2");
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

    // Test field 'CICS Endpoint Details panel' -> 'Trace Level: Online'
    //
    it('Test field CICS Endpoint -> Trace Level: Online', function () {
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);
        Page.delEndpointCicsYes("EndpointCICS0018").then(function () {
            Page.addEndpointCics("EndpointCICS0018", "", undefined, "AAA", "BBB", false, false, "CCC", "0");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsTrcLvlOnlineSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleEndpointCicsTrcLvlOnlineSpinner.clear().sendKeys("1");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '1').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsTrcLvlOnlineSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleEndpointCicsTrcLvlOnlineSpinner.clear().sendKeys("2");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '2').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsTrcLvlOnlineSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleEndpointCicsTrcLvlOnlineSpinner.clear().sendKeys("3");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '3').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsTrcLvlOnlineSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleEndpointCicsTrcLvlOnlineSpinner.clear().sendKeys("4");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '4').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsTrcLvlOnlineSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleEndpointCicsTrcLvlOnlineSpinner.clear().sendKeys("5");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEndpointCicsTrcLvlOnlineSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleEndpointCicsTrcLvlOnlineSpinner.clear().sendKeys("6");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleEndpointCicsTrcLvlOnlineSpinner.getAttribute("value");
        }).then(function (message) {
            expect(message === '5').to.be.true;
        });
    });


    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});