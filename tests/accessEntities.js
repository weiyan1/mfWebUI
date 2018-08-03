/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var accessPage = require('../pageObject/accessPage.js');
var DefinePage = require('../pageObject/definePage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.9.1 Access Entities Page', function () {
    var Page = new accessPage();
    var definePage = new DefinePage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleAccessMenu.click();
    });

    // Test Entities type dropdown list
    //
    it('Test Entities type dropdown list', function () {
        browser.sleep(1000).then(function () {
            globalCommons.waitForClickable(Page.eleEntitiesLeftmenu);
        }).then(function () {
            Page.eleEntitiesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEntitiesTypeDropdown);
        }).then(function () {
            Page.eleEntitiesTypeDropdown.click();
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList1.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList2.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList3.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList4.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList5.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList6.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList7.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList8.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList9.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList10.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList11.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList12.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList13.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList14.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleEntitiesTypeDropdownList15.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList1.getText();
        }).then(function (message) {
            expect(message === 'Define-Configure').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList2.getText();
        }).then(function (message) {
            expect(message === 'Configure').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList3.getText();
        }).then(function (message) {
            expect(message === 'Message').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList4.getText();
        }).then(function (message) {
            expect(message === 'Buffer').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList5.getText();
        }).then(function (message) {
            expect(message === 'Conversion Rule').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList6.getText();
        }).then(function (message) {
            expect(message === 'Trigger Service').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList7.getText();
        }).then(function (message) {
            expect(message === 'Recipe Service').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList8.getText();
        }).then(function (message) {
            expect(message === 'Define').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList9.getText();
        }).then(function (message) {
            expect(message === 'Endpoint').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList10.getText();
        }).then(function (message) {
            expect(message === 'Connection').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList11.getText();
        }).then(function (message) {
            expect(message === 'Interface').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList12.getText();
        }).then(function (message) {
            expect(message === 'Substation').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList13.getText();
        }).then(function (message) {
            expect(message === 'BES').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList14.getText();
        }).then(function (message) {
            expect(message === 'ESB').to.be.true;
        }).then(function () {
            return Page.eleEntitiesTypeDropdownList15.getText();
        }).then(function (message) {
            expect(message === 'EMS SSL Definition').to.be.true;
        });
    });

    // Test Entities list table column header names
    //
    it('Test Entities list table column header names', function () {
        globalCommons.waitForClickable(Page.eleEntitiesLeftmenu).then(function () {
            Page.eleEntitiesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleTableHeader1);
        }).then(function () {
            return Page.eleTableHeader1.getText();
        }).then(function (message) {
            expect(message === 'Name').to.be.true;
        }).then(function () {
            return Page.eleTableHeader2.getText();
        }).then(function (message) {
            expect(message === 'Type').to.be.true;
        }).then(function () {
            return Page.eleTableHeader3.getText();
        }).then(function (message) {
            expect(message === 'Owner').to.be.true;
        }).then(function () {
            return Page.eleTableHeader4.getText();
        }).then(function (message) {
            expect(message === 'Viewer').to.be.true;
        });
    });

    // Test Entity Security Details -> Entity Permission default setting
    //
    it('Test Entity Security Details -> Entity Permission default setting', function () {
        globalCommons.waitForClickable(globalNaviPage.eleDefineMenu).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSC0001");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSC0001");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleAccessMenu);
        }).then(function () {
            globalNaviPage.eleAccessMenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEntitiesLeftmenu);
        }).then(function () {
            Page.eleEntitiesLeftmenu.click();
        }).then(function () {
            Page._entityTypeEntities("Endpoint");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointEMSC0001");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleEntityNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleDetailSlideBar);
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntitySecuName);
        }).then(function () {
            return Page.eleEntitySecuName.getText();
        }).then(function (message) {
            expect(message === 'EndpointEMSC0001').to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1Name.getText();
        }).then(function (message) {
            expect(message === browser.params.signin.username).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test Entity Security Details -> Entity Permission -> Owner global checkbox button
    // Related jiras: ZWUI-976(fixed)
    it('Test Entity Security Details -> Entity Permission -> Owner global checkbox', function () {
        globalCommons.waitForClickable(globalNaviPage.eleDefineMenu).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSC0002");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSC0002");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleAccessMenu);
        }).then(function () {
            globalNaviPage.eleAccessMenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEntitiesLeftmenu);
        }).then(function () {
            Page.eleEntitiesLeftmenu.click();
        }).then(function () {
            Page._entityTypeEntities("Endpoint");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointEMSC0002");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleEntityNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleDetailSlideBar);
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntitySecuName);
        }).then(function () {
            return Page.eleEntitySecuName.getText();
        }).then(function (message) {
            expect(message === 'EndpointEMSC0002').to.be.true;
        }).then(function () {
            Page.eleEntitySecuOwnerGlobalCheck.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleEntitySecuOwnerGlobalCheck.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleEntitySecuOwnerGlobalCheck.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test Entity Security Details -> Entity Permission -> Viewer global checkbox
    //
    it('Test Entity Security Details -> Entity Permission -> Viewer global checkbox', function () {
        globalCommons.waitForClickable(globalNaviPage.eleDefineMenu).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSC0003");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSC0003");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleAccessMenu);
        }).then(function () {
            globalNaviPage.eleAccessMenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEntitiesLeftmenu);
        }).then(function () {
            Page.eleEntitiesLeftmenu.click();
        }).then(function () {
            Page._entityTypeEntities("Endpoint");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointEMSC0003");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleEntityNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleDetailSlideBar);
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntitySecuName);
        }).then(function () {
            return Page.eleEntitySecuName.getText();
        }).then(function (message) {
            expect(message === 'EndpointEMSC0003').to.be.true;
        }).then(function () {
            Page.eleEntitySecuViewerGlobalCheck.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleEntitySecuViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleEntitySecuViewerGlobalCheck.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleEntitySecuViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "An entity instance must have at least one owner").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEntitySecuOwnerGlobalCheck.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleEntitySecuOwnerGlobalCheck.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleEntitySecuViewerGlobalCheck.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page.eleEntitySecuViewerGlobalCheck.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "An entity instance must have at least one owner").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleEntitySecuPermissionRow1OwnerCheck.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "Saved successfully.").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test Entity Security Details -> Cancel the changes
    //
    it('Test Entity Security Details -> Cancel the changes', function () {
        globalCommons.waitForClickable(globalNaviPage.eleDefineMenu).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSC0004");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSC0004");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleAccessMenu);
        }).then(function () {
            globalNaviPage.eleAccessMenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEntitiesLeftmenu);
        }).then(function () {
            Page.eleEntitiesLeftmenu.click();
        }).then(function () {
            Page._entityTypeEntities("Endpoint");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointEMSC0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleEntityNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleDetailSlideBar);
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntitySecuName);
        }).then(function () {
            return Page.eleEntitySecuName.getText();
        }).then(function (message) {
            expect(message === 'EndpointEMSC0004').to.be.true;
        }).then(function () {
            Page.eleEntitySecuPermissionRow1ViewerCheck.click();
        }).then(function () {
            Page.eleEntitySecuPermissionRow2ViewerCheck.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEntitiesLeftmenu);
        }).then(function () {
            Page.eleEntitiesLeftmenu.click();
        }).then(function () {
            Page._entityTypeEntities("Endpoint");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointEMSC0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleEntityNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleDetailSlideBar);
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntitySecuName);
        }).then(function () {
            return Page.eleEntitySecuName.getText();
        }).then(function (message) {
            expect(message === 'EndpointEMSC0004').to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1Name.getText();
        }).then(function (message) {
            expect(message === browser.params.signin.username).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Test Entity Security Details -> Cancel the changes, then discard the cancel operation
    //
    it('Test Entity Security Details -> Cancel the changes, then discard the cancel operation', function () {
        globalCommons.waitForClickable(globalNaviPage.eleDefineMenu).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSC0005");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSC0005");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleAccessMenu);
        }).then(function () {
            globalNaviPage.eleAccessMenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEntitiesLeftmenu);
        }).then(function () {
            Page.eleEntitiesLeftmenu.click();
        }).then(function () {
            Page._entityTypeEntities("Endpoint");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointEMSC0005");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleEntityNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleDetailSlideBar);
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntitySecuName);
        }).then(function () {
            return Page.eleEntitySecuName.getText();
        }).then(function (message) {
            expect(message === 'EndpointEMSC0005').to.be.true;
        }).then(function () {
            Page.eleEntitySecuPermissionRow1ViewerCheck.click();
        }).then(function () {
            Page.eleEntitySecuPermissionRow2ViewerCheck.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningNo();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === "An entity instance must have at least one owner").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test Entity Security Details -> Reset button
    //
    it('Test Entity Security Details -> Reset button', function () {
        globalCommons.waitForClickable(globalNaviPage.eleDefineMenu).then(function () {
            globalNaviPage.eleDefineMenu.click();
        }).then(function () {
            definePage.delEndpointEmsYes("EndpointEMSC0006");
        }).then(function () {
            definePage.addEndpointEms("EndpointEMSC0006");
        }).then(function () {
            globalCommons.waitForElementPresent(definePage.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleAccessMenu);
        }).then(function () {
            globalNaviPage.eleAccessMenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleEntitiesLeftmenu);
        }).then(function () {
            Page.eleEntitiesLeftmenu.click();
        }).then(function () {
            Page._entityTypeEntities("Endpoint");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("EndpointEMSC0006");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleEntityNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleDetailSlideBar);
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntitySecuName);
        }).then(function () {
            return Page.eleEntitySecuName.getText();
        }).then(function (message) {
            expect(message === 'EndpointEMSC0006').to.be.true;
        }).then(function () {
            Page.eleEntitySecuOwnerGlobalCheck.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleResetButton);
        }).then(function () {
            Page.eleResetButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleEntitySecuOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow1ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2OwnerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleEntitySecuPermissionRow2ViewerCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});