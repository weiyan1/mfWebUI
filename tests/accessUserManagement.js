/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var accessPage = require('../pageObject/accessPage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.9.3 Access User Management Page', function () {
    var Page = new accessPage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleAccessMenu.click();
    });

    // Add a User successfully.
    //
    it('Should add a User successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delUserYes("User0001");
        }).then(function () {
            Page.addUser("User0001", "Pswd0001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a User successfully, then replicate it.
    //
    it('Should add a User, then replicate it successfully', function () {
        Page.delUserYes("User0002-copy").then(function () {
            Page.delUserYes("User0002");
        }).then(function () {
            Page.addUser("User0002", "Pswd0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateUser("User0002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsPasswordValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter a non-empty password').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsPasswordInput.clear().sendKeys("Pswd0002-copy");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        });
    });

    // Add a User successfully, then update it.
    //
    it('Should add a User, then update it successfully', function () {
        Page.delUserYes("User0003").then(function () {
            Page.addUser("User0003", "Pswd0003", "ABCD", "EFG", browser.params.access.userDetailsWorkspace, false, false, false, false, false, false, false, "Connection", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateUser("User0003", "Pswd000c", "HIJK", "LMN", browser.params.access.userDetailsWorkspace2, false, true, true, true, true, true, true, "Endpoint", true, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'User0003').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsLastNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HIJK').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsFirstNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LMN').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsWorkspaceDropdown.getText();
        }).then(function (message) {
            expect(message === browser.params.access.userDetailsWorkspace2).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessDeniedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsConfigureCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDeployCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDefineCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsEntityPermissionDropdown.getText();
        }).then(function (message) {
            expect(message === 'Endpoint').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a User, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a User, cancel the changes, then confirm the cancel operation', function () {
        Page.delUserYes("User0004").then(function () {
            Page.addUser("User0004", "Pswd0004", "ABCD", "EFG", browser.params.access.userDetailsWorkspace, false, false, false, false, false, false, false, "Connection", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.cancelUserYes("User0004", "Pswd000d", "HIJK", "LMN", browser.params.access.userDetailsWorkspace2, false, true, true, true, true, true, true, "Endpoint", true, false);
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUserManageLeftmenu);
        }).then(function () {
            Page.eleUserManageLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("User0004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            Page._workspaceUserDetails(browser.params.access.userDetailsWorkspace);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            Page._entityPermissionTypeUserDetails("Connection");
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'User0004').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsLastNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ABCD').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsFirstNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EFG').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsWorkspaceDropdown.getText();
        }).then(function (message) {
            expect(message === browser.params.access.userDetailsWorkspace).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessDeniedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsConfigureCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDeployCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDefineCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsEntityPermissionDropdown.getText();
        }).then(function (message) {
            expect(message === 'Connection').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Add a User, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a User, cancel the changes, then discard the cancel operation', function () {
        Page.delUserYes("User0005").then(function () {
            Page.addUser("User0005", "Pswd0005", "ABCD", "EFG", browser.params.access.userDetailsWorkspace, false, false, false, false, false, false, false, "Connection", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.cancelUserNo("User0005", "Pswd000e", "HIJK", "LMN", browser.params.access.userDetailsWorkspace2, false, true, true, true, true, true, true, "Endpoint", true, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'User0005').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsLastNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'HIJK').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsFirstNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'LMN').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsWorkspaceDropdown.getText();
        }).then(function (message) {
            expect(message === browser.params.access.userDetailsWorkspace2).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessDeniedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsConfigureCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDeployCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDefineCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsEntityPermissionDropdown.getText();
        }).then(function (message) {
            expect(message === 'Endpoint').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleUserDetailsViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a User, make some changes, then reset it.
    //
    it('Should add a User, make some changes, then reset it', function () {
        Page.delUserYes("User0006").then(function () {
            Page.addUser("User0006", "Pswd0006", "ABCD", "EFG", browser.params.access.userDetailsWorkspace, false, false, false, false, false, false, false, "Connection", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetUser("User0006", "Pswd000f", "HIJK", "LMN", browser.params.access.userDetailsWorkspace2, false, true, true, true, true, true, true, "Endpoint", true, false);
        }).then(function () {
            Page._workspaceUserDetails(browser.params.access.userDetailsWorkspace);
        }).then(function () {
            Page._entityPermissionTypeUserDetails("Connection");
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'User0006').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsLastNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ABCD').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsFirstNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EFG').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsWorkspaceDropdown.getText();
        }).then(function (message) {
            expect(message === browser.params.access.userDetailsWorkspace).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessDeniedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsConfigureCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDeployCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDefineCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsEntityPermissionDropdown.getText();
        }).then(function (message) {
            expect(message === 'Connection').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Add a User, then add a User with the same name, it is disallowed.
    //
    it('Should try to overwrite a User, it is disallowed', function () {
        Page.delUserYes("User0007").then(function () {
            Page.addUser("User0007", "Pswd0007", "ABCD", "EFG", browser.params.access.userDetailsWorkspace, false, false, false, false, false, false, false, "Connection", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0007", "Pswd000g", "HIJK", "LMN", browser.params.access.userDetailsWorkspace2, false, true, true, true, true, true, true, "Endpoint", true, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message.includes("overwriting the existing User(User0007) is disallowed")).to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleCancelButton);
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUserManageLeftmenu);
        }).then(function () {
            Page.eleUserManageLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("User0007");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleEntityNameSearched);
        }).then(function () {
            Page.eleEntityNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            Page._workspaceUserDetails(browser.params.access.userDetailsWorkspace);
        }).then(function () {
            Page._entityPermissionTypeUserDetails("Connection");
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'User0007').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsLastNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'ABCD').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsFirstNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'EFG').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsWorkspaceDropdown.getText();
        }).then(function (message) {
            expect(message === browser.params.access.userDetailsWorkspace).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessDeniedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsConfigureCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDeployCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDefineCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsEntityPermissionDropdown.getText();
        }).then(function (message) {
            expect(message === 'Connection').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Add a User, delete it, then confirm the delete operation.
    //
    it('Should add a User, delete it, then confirm the delete operation', function () {
        Page.delUserYes("User0008").then(function () {
            Page.addUser("User0008", "Pswd0008");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delUserYes("User0008");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("User0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a User, delete it, then discard the delete operation.
    //
    it('Should add a User, delete it, then discard the delete operation', function () {
        Page.delUserYes("User0009").then(function () {
            Page.addUser("User0009", "Pswd0009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delUserNo("User0009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("User0009");
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
        Page.delUserYes("User0010").then(function () {
            Page.addUser("User0010", "Pswd0010");
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

    // Test User Details panel fields default value.
    //
    it('Test User Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleUserManageLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleUserDetailsUserNameInput);
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsPasswordInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsLastNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsFirstNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsInitialWorkspaceDropdown.getText();
        }).then(function (message) {
            expect(message === browser.params.workspace.name).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessDeniedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsConfigureCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDeployCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDefineCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test User Details panel mandatory fields.
    //
    it('Test User Details panel mandatory fields', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleUserManageLeftmenu.click();
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
            return Page.eleUserDetailsUserNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsLastNameValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A non-empty value is required').to.be.true;
        }).then(function () {
            Page.eleUserDetailsUserNameInput.clear().sendKeys("UserTest");
        }).then(function () {
            Page.eleUserDetailsLastNameInput.clear().sendKeys("LNameTest")
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveButton);
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
            return Page.eleUserDetailsPasswordValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'Please enter a non-empty password').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        });
    });

    // Test User Details panel -> User Name
    //
    it('Test User Details panel -> User Name', function () {
        Page.delUserYes("User0011_@#$_22222223333333333444444444").then(function () {
            Page.addUser("User0011_@#$_22222223333333333444444444", "Pswd0011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'User0011_@#$_22222223333333333444444444').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            Page.delUserYes("User0012_@#$_22222223333333333444444444");
        }).then(function () {
            Page.addUser("User0012_@#$_222222233333333334444444444", "Pswd0012");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'User0012_@#$_22222223333333333444444444').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsUserNameInput.getAttribute('readonly');
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Test User Details panel -> Password
    // Related jiras: ZWUI-962(fixed)
    it('Test User Details panel -> Password', function () {
        Page.delUserYes("User0013").then(function () {
            Page.addUser("User0013", "1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsPasswordInput.clear().sendKeys("aBc");
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
        }).then(function () {
            return Page.eleUserDetailsPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsPasswordInput.clear().sendKeys("AbCdEfGhIj22222222223333333333");
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
        }).then(function () {
            return Page.eleUserDetailsPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsPasswordInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?55555555556666666666777");
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
            return Page.eleUserDetailsPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsPasswordInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?555555555566666666667777");
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
            return Page.eleUserDetailsPasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        });
    });

    // Test User Details panel -> Last Name
    //
    it('Test User Details panel -> Last Name', function () {
        Page.delUserYes("User0014").then(function () {
            Page.addUser("User0014", "Pswd0014");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsLastNameInput.clear().sendKeys("0");
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
        }).then(function () {
            return Page.eleUserDetailsLastNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsLastNameInput.clear().sendKeys("abc");
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
        }).then(function () {
            return Page.eleUserDetailsLastNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'abc').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsLastNameInput.clear().sendKeys("ABC");
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
        }).then(function () {
            return Page.eleUserDetailsLastNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABC').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsLastNameInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?");
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
        }).then(function () {
            return Page.eleUserDetailsLastNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsLastNameInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?1");
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
        }).then(function () {
            return Page.eleUserDetailsLastNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?').to.be.true;
        });
    });

    // Test User Details panel -> First Name
    //
    it('Test User Details panel -> First Name', function () {
        Page.delUserYes("User0015").then(function () {
            Page.addUser("User0015", "Pswd0015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsFirstNameInput.clear().sendKeys("0");
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
        }).then(function () {
            return Page.eleUserDetailsFirstNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '0').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsFirstNameInput.clear().sendKeys("abc");
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
        }).then(function () {
            return Page.eleUserDetailsFirstNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'abc').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsFirstNameInput.clear().sendKeys("ABC");
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
        }).then(function () {
            return Page.eleUserDetailsFirstNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ABC').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsFirstNameInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?");
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
        }).then(function () {
            return Page.eleUserDetailsFirstNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleUserDetailsFirstNameInput.clear().sendKeys("!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?1");
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
        }).then(function () {
            return Page.eleUserDetailsFirstNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()QWERTYUIOPasdfghjkl:ZXCVBNM<>?').to.be.true;
        });
    });

    // Test User Details panel -> Access denied
    //
    it('Test User Details panel -> Access denied', function () {
        Page.delUserYes("User0016").then(function () {
            Page.addUser("User0016", "Pswd0016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessDeniedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsConfigureCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDeployCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDefineCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUserDetailsAccessDeniedCheck);
        }).then(function () {
            Page.eleUserDetailsAccessDeniedCheck.click();
        }).then(function () {
            expect(Page.eleUserDetailsSsesOpsCheck.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleUserDetailsRedOpsCheck.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleUserDetailsAccessCheck.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleUserDetailsConfigureCheck.isDisplayed()).to.eventually.be.false;
        }).then(function () {
            expect(Page.eleUserDetailsDeployCheck.isDisplayed()).to.eventually.be.false;
        }).then(function () {
            expect(Page.eleUserDetailsDefineCheck.isDisplayed()).to.eventually.be.false;
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
        }).then(function () {
            return Page.eleUserDetailsAccessDeniedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            expect(Page.eleUserDetailsSsesOpsCheck.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleUserDetailsRedOpsCheck.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleUserDetailsAccessCheck.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            expect(Page.eleUserDetailsConfigureCheck.isDisplayed()).to.eventually.be.false;
        }).then(function () {
            expect(Page.eleUserDetailsDeployCheck.isDisplayed()).to.eventually.be.false;
        }).then(function () {
            expect(Page.eleUserDetailsDefineCheck.isDisplayed()).to.eventually.be.false;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUserDetailsAccessDeniedCheck);
        }).then(function () {
            Page.eleUserDetailsAccessDeniedCheck.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleUserDetailsAccessDeniedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsConfigureCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDeployCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDefineCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessCheck.getAttribute("checked");
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
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessDeniedCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsConfigureCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDeployCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsDefineCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleUserDetailsAccessCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Test User Details panel -> Entity Permission Dropdown List
    //
    it('Test User Details panel -> Entity Permission Dropdown List', function () {
        Page.delUserYes("User0017").then(function () {
            Page.addUser("User0017", "Pswd0017");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleUserDetailsEntityPermissionDropdown)
        }).then(function () {
            Page.eleUserDetailsEntityPermissionDropdown.click();
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

    // Add 100 users
    //
    it('Add 100 users', function () {
        Page.delUserYes("User0018").then(function () {
            Page.delUserYes("User0019");
        }).then(function () {
            Page.delUserYes("User0020");
        }).then(function () {
            Page.delUserYes("User0021");
        }).then(function () {
            Page.delUserYes("User0022");
        }).then(function () {
            Page.delUserYes("User0023");
        }).then(function () {
            Page.delUserYes("User0024");
        }).then(function () {
            Page.delUserYes("User0025");
        }).then(function () {
            Page.delUserYes("User0026");
        }).then(function () {
            Page.delUserYes("User0027");
        }).then(function () {
            Page.delUserYes("User0028");
        }).then(function () {
            Page.delUserYes("User0029");
        }).then(function () {
            Page.delUserYes("User0030");
        }).then(function () {
            Page.delUserYes("User0031");
        }).then(function () {
            Page.delUserYes("User0032");
        }).then(function () {
            Page.delUserYes("User0033");
        }).then(function () {
            Page.delUserYes("User0034");
        }).then(function () {
            Page.delUserYes("User0035");
        }).then(function () {
            Page.delUserYes("User0036");
        }).then(function () {
            Page.delUserYes("User0037");
        }).then(function () {
            Page.delUserYes("User0038");
        }).then(function () {
            Page.delUserYes("User0039");
        }).then(function () {
            Page.delUserYes("User0040");
        }).then(function () {
            Page.delUserYes("User0041");
        }).then(function () {
            Page.delUserYes("User0042");
        }).then(function () {
            Page.delUserYes("User0043");
        }).then(function () {
            Page.delUserYes("User0044");
        }).then(function () {
            Page.delUserYes("User0045");
        }).then(function () {
            Page.delUserYes("User0046");
        }).then(function () {
            Page.delUserYes("User0047");
        }).then(function () {
            Page.delUserYes("User0048");
        }).then(function () {
            Page.delUserYes("User0049");
        }).then(function () {
            Page.delUserYes("User0050");
        }).then(function () {
            Page.delUserYes("User0051");
        }).then(function () {
            Page.delUserYes("User0052");
        }).then(function () {
            Page.delUserYes("User0053");
        }).then(function () {
            Page.delUserYes("User0054");
        }).then(function () {
            Page.delUserYes("User0055");
        }).then(function () {
            Page.delUserYes("User0056");
        }).then(function () {
            Page.delUserYes("User0057");
        }).then(function () {
            Page.delUserYes("User0058");
        }).then(function () {
            Page.delUserYes("User0059");
        }).then(function () {
            Page.delUserYes("User0060");
        }).then(function () {
            Page.delUserYes("User0061");
        }).then(function () {
            Page.delUserYes("User0062");
        }).then(function () {
            Page.delUserYes("User0063");
        }).then(function () {
            Page.delUserYes("User0064");
        }).then(function () {
            Page.delUserYes("User0065");
        }).then(function () {
            Page.delUserYes("User0066");
        }).then(function () {
            Page.delUserYes("User0067");
        }).then(function () {
            Page.delUserYes("User0068");
        }).then(function () {
            Page.delUserYes("User0069");
        }).then(function () {
            Page.delUserYes("User0070");
        }).then(function () {
            Page.delUserYes("User0071");
        }).then(function () {
            Page.delUserYes("User0072");
        }).then(function () {
            Page.delUserYes("User0073");
        }).then(function () {
            Page.delUserYes("User0074");
        }).then(function () {
            Page.delUserYes("User0075");
        }).then(function () {
            Page.delUserYes("User0076");
        }).then(function () {
            Page.delUserYes("User0077");
        }).then(function () {
            Page.delUserYes("User0078");
        }).then(function () {
            Page.delUserYes("User0079");
        }).then(function () {
            Page.delUserYes("User0080");
        }).then(function () {
            Page.delUserYes("User0081");
        }).then(function () {
            Page.delUserYes("User0082");
        }).then(function () {
            Page.delUserYes("User0083");
        }).then(function () {
            Page.delUserYes("User0084");
        }).then(function () {
            Page.delUserYes("User0085");
        }).then(function () {
            Page.delUserYes("User0086");
        }).then(function () {
            Page.delUserYes("User0087");
        }).then(function () {
            Page.delUserYes("User0088");
        }).then(function () {
            Page.delUserYes("User0089");
        }).then(function () {
            Page.delUserYes("User0090");
        }).then(function () {
            Page.delUserYes("User0091");
        }).then(function () {
            Page.delUserYes("User0092");
        }).then(function () {
            Page.delUserYes("User0093");
        }).then(function () {
            Page.delUserYes("User0094");
        }).then(function () {
            Page.delUserYes("User0095");
        }).then(function () {
            Page.delUserYes("User0096");
        }).then(function () {
            Page.delUserYes("User0097");
        }).then(function () {
            Page.delUserYes("User0098");
        }).then(function () {
            Page.delUserYes("User0099");
        }).then(function () {
            Page.delUserYes("User0100");
        }).then(function () {
            Page.delUserYes("User0101");
        }).then(function () {
            Page.delUserYes("User0102");
        }).then(function () {
            Page.delUserYes("User0103");
        }).then(function () {
            Page.delUserYes("User0104");
        }).then(function () {
            Page.delUserYes("User0105");
        }).then(function () {
            Page.delUserYes("User0106");
        }).then(function () {
            Page.delUserYes("User0107");
        }).then(function () {
            Page.delUserYes("User0108");
        }).then(function () {
            Page.delUserYes("User0109");
        }).then(function () {
            Page.delUserYes("User0110");
        }).then(function () {
            Page.delUserYes("User0111");
        }).then(function () {
            Page.delUserYes("User0112");
        }).then(function () {
            Page.delUserYes("User0113");
        }).then(function () {
            Page.delUserYes("User0114");
        }).then(function () {
            Page.delUserYes("User0115");
        }).then(function () {
            Page.delUserYes("User0116");
        }).then(function () {
            Page.delUserYes("User0117");
        }).then(function () {
            Page.addUser("User0018", "Pswd0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0019", "Pswd0019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0020", "Pswd0020");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0021", "Pswd0021");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0022", "Pswd0022");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0023", "Pswd0023");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0024", "Pswd0024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0025", "Pswd0025");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0026", "Pswd0026");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0027", "Pswd0027");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0028", "Pswd0028");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0029", "Pswd0029");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0030", "Pswd0030");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0031", "Pswd0031");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0032", "Pswd0032");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0033", "Pswd0033");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0034", "Pswd0034");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0035", "Pswd0035");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0036", "Pswd0036");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0037", "Pswd0037");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0038", "Pswd0038");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0039", "Pswd0039");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0040", "Pswd0040");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0041", "Pswd0041");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0042", "Pswd0042");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0043", "Pswd0043");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0044", "Pswd0044");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0045", "Pswd0045");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0046", "Pswd0046");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0047", "Pswd0047");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0048", "Pswd0048");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0049", "Pswd0049");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0050", "Pswd0050");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0051", "Pswd0051");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0052", "Pswd0052");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0053", "Pswd0053");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0054", "Pswd0054");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0055", "Pswd0055");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0056", "Pswd0056");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0057", "Pswd0057");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0058", "Pswd0058");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0059", "Pswd0059");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0060", "Pswd0060");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0061", "Pswd0061");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0062", "Pswd0062");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0063", "Pswd0063");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0064", "Pswd0064");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0065", "Pswd0065");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0066", "Pswd0066");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0067", "Pswd0067");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0068", "Pswd0068");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0069", "Pswd0069");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0070", "Pswd0070");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0071", "Pswd0071");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0072", "Pswd0072");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0073", "Pswd0073");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0074", "Pswd0074");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0075", "Pswd0075");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0076", "Pswd0076");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0077", "Pswd0077");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0078", "Pswd0078");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0079", "Pswd0079");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0080", "Pswd0080");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0081", "Pswd0081");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0082", "Pswd0082");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0083", "Pswd0083");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0084", "Pswd0084");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0085", "Pswd0085");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0086", "Pswd0086");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0087", "Pswd0087");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0088", "Pswd0088");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0089", "Pswd0089");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0090", "Pswd0090");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0091", "Pswd0091");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0092", "Pswd0092");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0093", "Pswd0093");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0094", "Pswd0094");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0095", "Pswd0095");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0096", "Pswd0096");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0097", "Pswd0097");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0098", "Pswd0098");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0099", "Pswd0099");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0100", "Pswd0100");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0101", "Pswd0101");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0102", "Pswd0102");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0103", "Pswd0103");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0104", "Pswd0104");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0105", "Pswd0105");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0106", "Pswd0106");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0107", "Pswd0107");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0108", "Pswd0108");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0109", "Pswd0109");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0110", "Pswd0110");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0111", "Pswd0111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0112", "Pswd0112");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0113", "Pswd0113");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0114", "Pswd0114");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0115", "Pswd0115");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0116", "Pswd0116");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addUser("User0117", "Pswd0117");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
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