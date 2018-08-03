/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var Page = require('../utility/page.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var deployPage = (function () {
    var globalPage = new GlobalPage();

    function deployPage() {
        this.eleScreenElement = element(by.xpath('//div[text()="Workspaces"]'));
        //Left Menu
        this.eleWorkspacesLeftmenu = element(by.xpath('//div[text()="Workspaces"]'));
        //Workspaces List
        this.eleAddButton = element(by.xpath('//button[text()="Add"]'));
        this.eleDeleteButton = element(by.xpath('//button[text()="Delete"]'));
        this.eleAuditButton = element(by.xpath('//button[text()="Audit"]'));
        this.eleRefreshButton = element(by.xpath('//button[text()="Refresh"]'));
        this.eleLoadButton = element(by.xpath('//button[text()="Load"]'));
        this.eleSearchInput = element(by.css('.GCOBQG-CLM'));
        this.eleSearchIcon = element(by.css('.GCOBQG-CKM'));
        this.eleWorkspaceNameSearched = element(by.css('.GCOBQG-CJO'));
        this.eleTableHeader2 = element(by.css('.cell-table-header-nowrap thead th:nth-child(2)'));
        this.eleMsgInfo = element(by.css('.g__msg_message'));
        //Workspace Details
        this.eleDetailSlideBar = element(by.css('.slide-bar'));
        this.eleDetailHeader = element(by.css('.detailHeader'));
        this.eleNameInput = element(by.css('.form_text_box'));
        this.eleDescriptionInput = element(by.css('.form_text_area'));
        this.eleDescription2Input = element(by.css('.form_text_box_warning'));

        this.eleSaveButton = element(by.xpath('//button[text()="Save"]'));
        this.eleCancelButton = element(by.xpath('//button[text()="Cancel"]'));
        this.eleResetButton = element(by.xpath('//button[text()="Reset"]'));
        this.eleSaveInfo = element(by.css('.form-info-content'));
        this.eleSaveInfoClose = element(by.css('.form-info-close'));
        //Load Workspace
        this.eleFromFileRadio = element(by.xpath('//label[text()="From a file(path):"]/..//input'));
        this.eleFromWorkspaceRadio = element(by.xpath('//label[text()="From an existing workspace:"]/..//input'));
        this.eleFiliPathInput = element(by.css('.gwt-DialogBox .form_text_box'));
        this.eleWorkspaceDropdown = element(by.css('.GCOBQG-CPQ'));
        this.eleLoadFromWorkspaceName = function (loadFromWorkspaceName) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + loadFromWorkspaceName + '"]'));
        }
        this.eleDialogInfo = element(by.css('.gwt-DialogBox .form-info-content'));
        this.eleDialogInfoClose = element(by.css('.gwt-DialogBox .form-info-close'));
        this.eleLoadLoadButton = element(by.css('.mfwebui-form-buttons button[title="OK"]'));
        this.eleLoadCancelButton = element(by.css('.mfwebui-form-buttons button[title="No"]'));
        this.eleLoadDialogClose = element(by.css('.GCOBQG-CFR'));
        this.eleValidateMsg = element(by.css('.validate_msg_show'));
    };
    deployPage.prototype = new Page();
    deployPage.prototype.constructor = deployPage;

    /**
     * The function is used for add a workspace.
     *
     */
    deployPage.prototype.addWorkspace = function (workspacename, description) {
        var deferred = protractor.promise.defer(), that = this;
        description = description || "";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleWorkspacesLeftmenu);
        }).then(function () {
            that.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleNameInput);
        }).then(function () {
            that.eleNameInput.clear().sendKeys(workspacename);
        }).then(function () {
            that.eleDescriptionInput.clear().sendKeys(description);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSaveButton);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    /**
     * The function is used for delete a workspace, then confirm the delete operation.
     *
     */
    deployPage.prototype.delWorkspaceYes = function (workspacename) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(40).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleWorkspacesLeftmenu);
        }).then(function () {
            that.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(workspacename);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleWorkspaceNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleWorkspaceNameSearched.click().then(function () {
                    globalCommons.waitForClickable(that.eleDeleteButton);
                }).then(function () {
                    that.eleDeleteButton.click();
                }).then(function () {
                    globalPage.isWarningOK();
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                deferred.fulfill();
            }
        });
        return deferred.promise;
    };
    /**
     * The function is used for delete a workspace, then discard the delete operation.
     *
     */
    deployPage.prototype.delWorkspaceNo = function (workspacename) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleWorkspacesLeftmenu);
        }).then(function () {
            that.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(workspacename);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleWorkspaceNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleWorkspaceNameSearched.click().then(function () {
                    globalCommons.waitForClickable(that.eleDeleteButton);
                }).then(function () {
                    that.eleDeleteButton.click();
                }).then(function () {
                    globalPage.isWarningNo();
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                deferred.fulfill();
            }
        });
        return deferred.promise;
    };

    /**
     * The function is used for update a workspace.
     *
     */
    deployPage.prototype.updateWorkspace = function (workspacename, description) {
        var deferred = protractor.promise.defer(), that = this;
        description = description === undefined ? "" : description;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleWorkspacesLeftmenu);
        }).then(function () {
            that.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(workspacename);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleWorkspaceNameSearched);
        }).then(function () {
            that.eleWorkspaceNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleDescriptionInput);
        }).then(function () {
            that.eleDescriptionInput.clear().sendKeys(description);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    /**
     * The function is used for cancel the changes of a workspace, then comfirm the cancel operation.
     *
     */
    deployPage.prototype.cancelWorkspaceYes = function (workspacename, description) {
        var deferred = protractor.promise.defer(), that = this;
        description = description === undefined ? "" : description;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleWorkspacesLeftmenu);
        }).then(function () {
            that.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(workspacename);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleWorkspaceNameSearched);
        }).then(function () {
            that.eleWorkspaceNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleDescriptionInput);
        }).then(function () {
            that.eleDescriptionInput.clear().sendKeys(description);
        }).then(function () {
            that.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    /**
     * The function is used for cancel the changes of a workspace, then discard the cancel operation.
     *
     */
    deployPage.prototype.cancelWorkspaceNo = function (workspacename, description) {
        var deferred = protractor.promise.defer(), that = this;
        description = description === undefined ? "" : description;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleWorkspacesLeftmenu);
        }).then(function () {
            that.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(workspacename);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleWorkspaceNameSearched);
        }).then(function () {
            that.eleWorkspaceNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleDescriptionInput);
        }).then(function () {
            that.eleDescriptionInput.clear().sendKeys(description);
        }).then(function () {
            that.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningNo();
        }).then(function () {
            globalCommons.waitForClickable(that.eleSaveButton);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    /**
     * The function is used for reset a workspace.
     *
     */
    deployPage.prototype.resetWorkspace = function (workspacename, description) {
        var deferred = protractor.promise.defer(), that = this;
        description = description === undefined ? "" : description;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleWorkspacesLeftmenu);
        }).then(function () {
            that.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(workspacename);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleWorkspaceNameSearched);
        }).then(function () {
            that.eleWorkspaceNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleDescriptionInput);
        }).then(function () {
            that.eleDescriptionInput.clear().sendKeys(description);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    /**
     * The function is used for load a workspace from file.
     *
     */
    deployPage.prototype.loadWorkspaceFromFile = function (workspacename, loadFromFilePath) {
        var deferred = protractor.promise.defer(), that = this;
        loadFromFilePath = loadFromFilePath || browser.params.workspace.loadFromFilePath;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleWorkspacesLeftmenu);
        }).then(function () {
            that.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(workspacename);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleWorkspaceNameSearched);
        }).then(function () {
            that.eleWorkspaceNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleLoadButton);
        }).then(function () {
            that.eleLoadButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleFromFileRadio);
        }).then(function () {
            that.eleFromFileRadio.click();
        }).then(function () {
            that.eleFiliPathInput.clear().sendKeys(loadFromFilePath);
        }).then(function () {
            that.eleLoadLoadButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    /**
     * The function is used for load a workspace from an empty file.
     *
     */
    deployPage.prototype.loadWorkspaceFromEmptyFile = function (workspacename, loadFromEmptyFilePath) {
        var deferred = protractor.promise.defer(), that = this;
        loadFromEmptyFilePath = loadFromEmptyFilePath || browser.params.workspace.loadFromEmptyFilePath;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleWorkspacesLeftmenu);
        }).then(function () {
            that.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(workspacename);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleWorkspaceNameSearched);
        }).then(function () {
            that.eleWorkspaceNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleLoadButton);
        }).then(function () {
            that.eleLoadButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleFromFileRadio);
        }).then(function () {
            that.eleFromFileRadio.click();
        }).then(function () {
            that.eleFiliPathInput.clear().sendKeys(loadFromEmptyFilePath);
        }).then(function () {
            that.eleLoadLoadButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    /**
     * The function is used for load a workspace from an empty file.
     *
     */
    deployPage.prototype.loadWorkspaceFromInvalidDataFile = function (workspacename, loadFromInvalidDataFilePath) {
        var deferred = protractor.promise.defer(), that = this;
        loadFromInvalidDataFilePath = loadFromInvalidDataFilePath || browser.params.workspace.loadFromInvalidDataFilePath;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleWorkspacesLeftmenu);
        }).then(function () {
            that.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(workspacename);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleWorkspaceNameSearched);
        }).then(function () {
            that.eleWorkspaceNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleLoadButton);
        }).then(function () {
            that.eleLoadButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleFromFileRadio);
        }).then(function () {
            that.eleFromFileRadio.click();
        }).then(function () {
            that.eleFiliPathInput.clear().sendKeys(loadFromInvalidDataFilePath);
        }).then(function () {
            that.eleLoadLoadButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    //
    // This function is used for set 'Load Workspaces' -> 'From an existing workspace'
    //
    deployPage.prototype._loadFromWorkspace = function (loadFromWorkspaceName) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleWorkspaceDropdown).then(function () {
            return that.eleWorkspaceDropdown.getText();
        }).then(function (message) {
            if (message === loadFromWorkspaceName) {
                deferred.fulfill();
            } else {
                that.eleWorkspaceDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleLoadFromWorkspaceName(loadFromWorkspaceName));
                }).then(function () {
                    that.eleLoadFromWorkspaceName(loadFromWorkspaceName).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };

    /**
     * The function is used for load a workspace from an existing workspace.
     *
     */
    deployPage.prototype.loadWorkspaceFromWorkspace = function (workspacename, loadFromWorkspaceName) {
        var deferred = protractor.promise.defer(), that = this;
        loadFromWorkspaceName = loadFromWorkspaceName || browser.params.workspace.loadFromWorkspaceName;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleWorkspacesLeftmenu);
        }).then(function () {
            that.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(workspacename);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleWorkspaceNameSearched);
        }).then(function () {
            that.eleWorkspaceNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleLoadButton);
        }).then(function () {
            that.eleLoadButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleFromWorkspaceRadio);
        }).then(function () {
            that.eleFromWorkspaceRadio.click();
        }).then(function () {
            that._loadFromWorkspace(loadFromWorkspaceName);
        }).then(function () {
            that.eleLoadLoadButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    /**
     * The function is used for cancel load a workspace.
     *
     */
    deployPage.prototype.cancelLoadWorkspace = function (workspacename) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleWorkspacesLeftmenu);
        }).then(function () {
            that.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(workspacename);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleWorkspaceNameSearched);
        }).then(function () {
            that.eleWorkspaceNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleLoadButton);
        }).then(function () {
            that.eleLoadButton.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleLoadCancelButton);
        }).then(function () {
            that.eleLoadCancelButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    /**
     * The function is used for add a workspace if the workspace is not existing.
     *
     */
    deployPage.prototype.addWorkspace2 = function (workspacename, description) {
        var deferred = protractor.promise.defer(), that = this;
        workspacename = workspacename || browser.params.workspace.name;
        description = description || browser.params.workspace.description;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleWorkspacesLeftmenu);
        }).then(function () {
            that.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(workspacename);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleWorkspaceNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                deferred.fulfill();
            } else {
                that.eleAddButton.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleNameInput);
                }).then(function () {
                    that.eleNameInput.clear().sendKeys(workspacename);
                }).then(function () {
                    that.eleDescriptionInput.clear().sendKeys(description);
                }).then(function () {
                    that.eleSaveButton.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };

    return deployPage;
})();
module.exports = deployPage;