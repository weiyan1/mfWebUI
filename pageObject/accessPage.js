/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var Page = require('../utility/page.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var accessPage = (function () {
    var globalPage = new GlobalPage();

    function accessPage() {
        this.eleScreenElement = element(by.xpath('//div[@role="treeitem" and text()="Entities"]'));
        // Left Menu
        this.eleEntitiesLeftmenu = element(by.xpath('//div[@role="treeitem" and text()="Entities"]'));
        this.eleMyAccountLeftmenu = element(by.xpath('//div[@role="treeitem" and text()="My Account"]'));
        this.eleUserManageLeftmenu = element(by.xpath('//div[@role="treeitem" and text()="User Management"]'));
        this.eleUsageManageLeftmenu = element(by.xpath('//div[@role="treeitem" and text()="Usage Management"]'));
        this.eleSecuritySetLeftmenu = element(by.xpath('//div[@role="treeitem" and text()="Security Settings"]'));
        this.eleGeneralSetLeftmenu = element(by.xpath('//div[@role="treeitem" and text()="General Settings"]'));
        // Entities
        this.eleEntitiesTypeDropdown = element(by.css('.GCOBQG-CPQ'));
        this.eleEntitiesTypeSelected = function (entityType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + entityType + '"]'))
        };
        this.eleEntitiesTypeDropdownList1 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[1]/td'));  // Define-Configure
        this.eleEntitiesTypeDropdownList2 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[3]/td'));  // Configure
        this.eleEntitiesTypeDropdownList3 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[4]/td'));  // Message
        this.eleEntitiesTypeDropdownList4 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[5]/td'));  // Buffer
        this.eleEntitiesTypeDropdownList5 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[6]/td'));  // Conversion Rule
        this.eleEntitiesTypeDropdownList6 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[7]/td'));  // Trigger Service
        this.eleEntitiesTypeDropdownList7 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[8]/td'));  // Recipe Service
        this.eleEntitiesTypeDropdownList8 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[10]/td'));  // Define
        this.eleEntitiesTypeDropdownList9 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[11]/td'));  // Endpoint
        this.eleEntitiesTypeDropdownList10 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[12]/td'));  // Connection
        this.eleEntitiesTypeDropdownList11 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[13]/td'));  // Interface
        this.eleEntitiesTypeDropdownList12 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[14]/td'));  // Substation
        this.eleEntitiesTypeDropdownList13 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[15]/td'));  // BES
        this.eleEntitiesTypeDropdownList14 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[16]/td'));  // ESB
        this.eleEntitiesTypeDropdownList15 = element(by.xpath('//div[@class="uxcore-dropdown-PopupPanel"]//div[@class="popupContent"]//tr[17]/td'));  // EMS SSL Definitions
        // Entity Security Details
        this.eleEntityNameSearched = element(by.css('.GCOBQG-CJO'));
        this.eleEntitySecuName = element(by.css('.GCOBQG-CMW'));
        this.eleEntitySecuOwnerGlobalCheck = element(by.xpath('//label[text()="Owner"]/..//input'));
        this.eleEntitySecuViewerGlobalCheck = element(by.xpath('//label[text()="Viewer"]/..//input'));
        this.eleEntitySecuPermissionRow1Name = element(by.xpath('//div[@class="GCOBQG-CMH"]//tr[1]/td[1]/div'));
        this.eleEntitySecuPermissionRow1OwnerCheck = element(by.xpath('//div[@class="GCOBQG-CMH"]//tr[1]/td[2]/div/input'));
        this.eleEntitySecuPermissionRow1ViewerCheck = element(by.xpath('//div[@class="GCOBQG-CMH"]//tr[1]/td[3]/div/input'));
        this.eleEntitySecuPermissionRow2Name = element(by.xpath('//div[@class="GCOBQG-CMH"]//tr[2]/td[1]/div'));
        this.eleEntitySecuPermissionRow2OwnerCheck = element(by.xpath('//div[@class="GCOBQG-CMH"]//tr[2]/td[2]/div/input'));
        this.eleEntitySecuPermissionRow2ViewerCheck = element(by.xpath('//div[@class="GCOBQG-CMH"]//tr[2]/td[3]/div/input'));
        this.eleEntitySecuPermissionRow3Name = element(by.xpath('//div[@class="GCOBQG-CMH"]//tr[3]/td[1]/div'));
        this.eleEntitySecuPermissionRow3OwnerCheck = element(by.xpath('//div[@class="GCOBQG-CMH"]//tr[3]/td[2]/div/input'));
        this.eleEntitySecuPermissionRow3ViewerCheck = element(by.xpath('//div[@class="GCOBQG-CMH"]//tr[3]/td[3]/div/input'));
        // My Account
        this.eleMyAccountUserNameInput = element(by.css('.form_text_box-readonly'));
        this.eleMyAccountPasswordInput = element(by.xpath('//div[text()="Password"]/../../..//input'));
        this.eleMyAccountConfirmPasswordInput = element(by.xpath('//div[text()="Confirm Password"]/../../..//input'));
        this.eleMyAccountLastNameInput = element(by.xpath('//div[text()="Last Name"]/../../..//input'));
        this.eleMyAccountFirstNameInput = element(by.xpath('//div[text()="First Name"]/../../..//input'));
        this.eleMyAccountRowsToDisplaySpinner = element(by.xpath('//div[text()="Rows To Display (10-100)"]/../../..//input'));
        this.eleMyAccountSndsToShowErrSpinner = element(by.xpath('//div[text()="Seconds To Show Error"]/../../..//input'));
        this.eleMyAccountIdleSessionTOSpinner = element(by.xpath('//div[text()="Idle Session Timeout (min)"]/../../..//input'));
        this.eleMyAccountWorkspaceStatus = element(by.css('.GCOBQG-CHX'));
        this.eleMyAccountConfirmPasswordValidateMsg = element(by.xpath('//div[text()="Confirm Password"]/../../../..//div[@class="validate_msg_show"]'));
        // User Management
        this.eleAddButton = element(by.xpath('//button[text()="Add"]'));
        this.eleDeleteButton = element(by.xpath('//button[text()="Delete"]'));
        this.eleAuditButton = element(by.xpath('//button[text()="Audit"]'));
        this.eleRefreshButton = element(by.xpath('//button[text()="Refresh"]'));
        this.eleSearchInput = element(by.css('.GCOBQG-CLM'));
        this.eleSearchIcon = element(by.css('.GCOBQG-CKM'));
        this.eleUserNameSearched = element(by.css('.GCOBQG-CJO'));
        this.eleMsgInfo = element(by.css('.g__msg_message'));
        this.eleTableHeader1 = element(by.css('.cell-table-header-nowrap thead th:nth-child(1)'));
        this.eleTableHeader2 = element(by.css('.cell-table-header-nowrap thead th:nth-child(2)'));
        this.eleTableHeader3 = element(by.css('.cell-table-header-nowrap thead th:nth-child(3)'));
        this.eleTableHeader4 = element(by.css('.cell-table-header-nowrap thead th:nth-child(4)'));
        this.eleTableHeader5 = element(by.css('.cell-table-header-nowrap thead th:nth-child(5)'));
        // User Details
        this.eleUserDetailsUserNameInput = element(by.xpath('//div[text()="User Name"]/../../..//input'));
        this.eleUserDetailsPasswordInput = element(by.xpath('//div[text()="Password"]/../../..//input'));
        this.eleUserDetailsLastNameInput = element(by.xpath('//div[text()="Last Name"]/../../..//input'));
        this.eleUserDetailsFirstNameInput = element(by.xpath('//div[text()="First Name"]/../../..//input'));
        this.eleUserDetailsInitialWorkspaceDropdown = element(by.xpath('//div[text()="Initial Workspace"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleUserDetailsWorkspaceDropdown = element(by.xpath('//div[text()="Workspace"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleUserDetailsWorkspaceSelected = function (workspace) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + workspace + '"]'));
        };
        this.eleUserDetailsAccessDeniedCheck = element(by.xpath('//label[text()="Access denied"]/..//input'));
        this.eleUserDetailsSsesOpsCheck = element(by.xpath('//div[@class="GCOBQG-CPW"]//tr[2]/td[1]//input'));
        this.eleUserDetailsRedOpsCheck = element(by.xpath('//div[@class="GCOBQG-CPW"]//tr[2]/td[2]//input'));
        this.eleUserDetailsConfigureCheck = element(by.xpath('//div[@class="GCOBQG-CPW"]//tr[2]/td[3]//input'));
        this.eleUserDetailsDeployCheck = element(by.xpath('//div[@class="GCOBQG-CPW"]//tr[2]/td[4]//input'));
        this.eleUserDetailsDefineCheck = element(by.xpath('//div[@class="GCOBQG-CPW"]//tr[2]/td[5]//input'));
        this.eleUserDetailsAccessCheck = element(by.xpath('//div[@class="GCOBQG-CPW"]//tr[2]/td[6]//input'));
        this.eleUserDetailsEntityPermissionDropdown = element(by.xpath('//div[text()="Entity Permission"]/..//div[@class="GCOBQG-CPQ"]'));
        this.eleUserDetailsEntityPermissionSelected = function (entityType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + entityType + '"]'));
        };
        this.eleUserDetailsOwnerGlobalCheck = element(by.xpath('//label[text()="Owner"]/..//input'));
        this.eleUserDetailsViewerGlobalCheck = element(by.xpath('//label[text()="Viewer"]/..//input'));
        this.eleUserDetailsUserNameValidateMsg = element(by.xpath('//div[text()="User Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleUserDetailsPasswordValidateMsg = element(by.xpath('//div[text()="Password"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleUserDetailsLastNameValidateMsg = element(by.xpath('//div[text()="Last Name"]/../../../..//div[@class="validate_msg_show"]'));

        this.eleDetailSlideBar = element(by.css('.slide-bar'));
        this.eleDetailHeader = element(by.css('.detailHeader'));
        this.eleSaveButton = element(by.xpath('//button[text()="Save"]'));
        this.eleReplicateButton = element(by.xpath('//button[text()="Replicate"]'));
        this.eleCancelButton = element(by.xpath('//button[text()="Cancel"]'));
        this.eleResetButton = element(by.xpath('//button[text()="Reset"]'));
        this.eleSaveInfo = element(by.css('.form-info-content'));
        this.eleSaveInfoClose = element(by.css('.form-info-close'));
        // Usage Management
        this.eleUsageManageSsesOpsCheck = element(by.xpath('//label[text()="SS-ES Ops"]/..//input'));
        this.eleUsageManageRedOpsCheck = element(by.xpath('//label[text()="RED Ops"]/..//input'));
        this.eleUsageManageEmsCheck = element(by.xpath('//label[text()="EMS"]/..//input'));
        this.eleUsageManageRvCheck = element(by.xpath('//label[text()="RV"]/..//input'));
        this.eleUsageManageCicsCheck = element(by.xpath('//label[text()="CICS"]/..//input'));
        this.eleUsageManageRedCheck = element(by.xpath('//label[text()="RED"]/..//input'));
        this.eleUsageManageImsCheck = element(by.xpath('//label[text()="IMS"]/..//input'));
        this.eleUsageManageBatchCheck = element(by.xpath('//label[text()="Batch"]/..//input'));
        // Security Settings
        this.eleSecuritySetKeystoreFileNameInput = element(by.xpath('//div[text()="Keystore File Name"]/../../..//input'));
        this.eleSecuritySetKeystorePasswordInput = element(by.xpath('//div[text()="Keystore Password"]/../../..//input'));
        this.eleSecuritySetCipherSpecInput = element(by.xpath('//div[text()="Cipher Specification"]/../../..//input'));
        // this.eleSecuritySetClientAuthCheck = element(by.xpath('//label[text()="Client Authentication"]/..//input'));
        this.eleSecuritySetSecurePortInput = element(by.xpath('//div[text()="Secure Port"]/../../..//input'));
        this.eleSecuritySetNonSecurePortInput = element(by.xpath('//div[text()="Non-secure Port"]/../../..//input'));
        this.eleSecuritySetSecurePortValidateMsg = element(by.xpath('//div[text()="Secure Port"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleSecuritySetNonSecurePortValidateMsg = element(by.xpath('//div[text()="Non-secure Port"]/../../../..//div[@class="validate_msg_show"]'));
        // General Settings
        this.eleGeneralSetRvInstallPathInput = element(by.xpath('//div[text()="Rendezvous Installation Path"]/../../..//input'));
        this.eleGeneralSetRvInstallPathValidateMsg = element(by.xpath('//div[text()="Rendezvous Installation Path"]/../../../..//div[@class="validate_msg_show"]'));
    };

    accessPage.prototype = new Page();
    accessPage.prototype.constructor = accessPage;

    //
    // This function is used for set 'Entities -> Entities Type Dropdown'
    //
    accessPage.prototype._entityTypeEntities = function (entityType) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForClickable(that.eleEntitiesTypeDropdown).then(function () {
            return that.eleEntitiesTypeDropdown.getText();
        }).then(function (message) {
            if (message === entityType) {
                deferred.fulfill();
            } else {
                that.eleEntitiesTypeDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleEntitiesTypeSelected(entityType));
                }).then(function () {
                    that.eleEntitiesTypeSelected(entityType).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };

    //
    // This function is used for set 'User Details' -> 'Initial Workspace'
    //
    accessPage.prototype._initialWorkspaceUserDetails = function (workspace) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForClickable(that.eleUserDetailsInitialWorkspaceDropdown).then(function () {
            return that.eleUserDetailsInitialWorkspaceDropdown.getText();
        }).then(function (message) {
            if (message === workspace) {
                deferred.fulfill();
            } else {
                that.eleUserDetailsInitialWorkspaceDropdown.click().then(function () {
                    globalCommons.waitForClickable(that.eleUserDetailsWorkspaceSelected(workspace));
                }).then(function () {
                    that.eleUserDetailsWorkspaceSelected(workspace).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'User Details' -> 'Workspace'
    //
    accessPage.prototype._workspaceUserDetails = function (workspace) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForClickable(that.eleUserDetailsWorkspaceDropdown).then(function () {
            return that.eleUserDetailsWorkspaceDropdown.getText();
        }).then(function (message) {
            if (message === workspace) {
                deferred.fulfill();
            } else {
                that.eleUserDetailsWorkspaceDropdown.click().then(function () {
                    globalCommons.waitForClickable(that.eleUserDetailsWorkspaceSelected(workspace));
                }).then(function () {
                    that.eleUserDetailsWorkspaceSelected(workspace).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'User Details' -> 'Access denied'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._accessDeniedUserDetails = function (accessDenied) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUserDetailsAccessDeniedCheck).then(function () {
            return that.eleUserDetailsAccessDeniedCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (accessDenied) {
                    that.eleUserDetailsAccessDeniedCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (accessDenied) {
                    deferred.fulfill();
                } else {
                    that.eleUserDetailsAccessDeniedCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'User Details' -> 'Access Permission SS-ES Ops'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._accessPermissionSsesOpsUserDetails = function (ssesOps) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUserDetailsSsesOpsCheck).then(function () {
            return that.eleUserDetailsSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (ssesOps) {
                    that.eleUserDetailsSsesOpsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (ssesOps) {
                    deferred.fulfill();
                } else {
                    that.eleUserDetailsSsesOpsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'User Details' -> 'Access Permission RED Ops'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._accessPermissionRedOpsUserDetails = function (redOps) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUserDetailsRedOpsCheck).then(function () {
            return that.eleUserDetailsRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (redOps) {
                    that.eleUserDetailsRedOpsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (redOps) {
                    deferred.fulfill();
                } else {
                    that.eleUserDetailsRedOpsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'User Details' -> 'Access Permission Configure'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._accessPermissionConfigureUserDetails = function (configure) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUserDetailsConfigureCheck).then(function () {
            return that.eleUserDetailsConfigureCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (configure) {
                    that.eleUserDetailsConfigureCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (configure) {
                    deferred.fulfill();
                } else {
                    that.eleUserDetailsConfigureCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'User Details' -> 'Access Permission Deploy'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._accessPermissionDeployUserDetails = function (deploy) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUserDetailsDeployCheck).then(function () {
            return that.eleUserDetailsDeployCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (deploy) {
                    that.eleUserDetailsDeployCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (deploy) {
                    deferred.fulfill();
                } else {
                    that.eleUserDetailsDeployCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'User Details' -> 'Access Permission Define'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._accessPermissionDefineUserDetails = function (define) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUserDetailsDefineCheck).then(function () {
            return that.eleUserDetailsDefineCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (define) {
                    that.eleUserDetailsDefineCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (define) {
                    deferred.fulfill();
                } else {
                    that.eleUserDetailsDefineCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'User Details' -> 'Access Permission Access'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._accessPermissionAccessUserDetails = function (access) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUserDetailsAccessCheck).then(function () {
            return that.eleUserDetailsAccessCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (access) {
                    that.eleUserDetailsAccessCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (access) {
                    deferred.fulfill();
                } else {
                    that.eleUserDetailsAccessCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'User Details' -> 'Entity Permission Type Dropdown'
    //
    accessPage.prototype._entityPermissionTypeUserDetails = function (entityType) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForClickable(that.eleUserDetailsEntityPermissionDropdown).then(function () {
            return that.eleUserDetailsEntityPermissionDropdown.getText();
        }).then(function (message) {
            if (message === entityType) {
                deferred.fulfill();
            } else {
                that.eleUserDetailsEntityPermissionDropdown.click().then(function () {
                    globalCommons.waitForClickable(that.eleUserDetailsEntityPermissionSelected(entityType));
                }).then(function () {
                    that.eleUserDetailsEntityPermissionSelected(entityType).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'User Details' -> 'Entity Permission Owner Global check button'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._entityPermissionOwnerGlobalUserDetails = function (ownerGlobal) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUserDetailsOwnerGlobalCheck).then(function () {
            return that.eleUserDetailsOwnerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (ownerGlobal) {
                    that.eleUserDetailsOwnerGlobalCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (ownerGlobal) {
                    deferred.fulfill();
                } else {
                    that.eleUserDetailsOwnerGlobalCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'User Details' -> 'Entity Permission Viewer Global check button'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._entityPermissionViewerGlobalUserDetails = function (viewerGlobal) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUserDetailsViewerGlobalCheck).then(function () {
            return that.eleUserDetailsViewerGlobalCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (viewerGlobal) {
                    that.eleUserDetailsViewerGlobalCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (viewerGlobal) {
                    deferred.fulfill();
                } else {
                    that.eleUserDetailsViewerGlobalCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for add a User.
    //
    accessPage.prototype.addUser = function (username, password, lastname, firstname, workspace, accessDenied, ssesOps, redOps, configure, deploy, define, access, entityType, ownerGlobal, viewerGlobal) {
        var deferred = protractor.promise.defer(), that = this;
        lastname = lastname || "MFQA";
        firstname = firstname || "WebUI";
        workspace = workspace || browser.params.workspace.name;
        entityType = entityType || "Define-Configure";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleUserManageLeftmenu);
        }).then(function () {
            that.eleUserManageLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleUserDetailsUserNameInput);
        }).then(function () {
            that.eleUserDetailsUserNameInput.clear().sendKeys(username);
        }).then(function () {
            that.eleUserDetailsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleUserDetailsLastNameInput.clear().sendKeys(lastname);
        }).then(function () {
            that.eleUserDetailsFirstNameInput.clear().sendKeys(firstname);
        }).then(function () {
            that._initialWorkspaceUserDetails(workspace);
        }).then(function () {
            that._accessDeniedUserDetails(accessDenied);
        }).then(function () {
            that._accessPermissionSsesOpsUserDetails(ssesOps);
        }).then(function () {
            that._accessPermissionRedOpsUserDetails(redOps);
        }).then(function () {
            that._accessPermissionConfigureUserDetails(configure);
        }).then(function () {
            that._accessPermissionDeployUserDetails(deploy);
        }).then(function () {
            that._accessPermissionDefineUserDetails(define);
        }).then(function () {
            that._accessPermissionAccessUserDetails(access);
        }).then(function () {
            that._entityPermissionTypeUserDetails(entityType);
        }).then(function () {
            that._entityPermissionOwnerGlobalUserDetails(ownerGlobal);
        }).then(function () {
            that._entityPermissionViewerGlobalUserDetails(viewerGlobal);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a User, then confirm the delete operation.
    //
    accessPage.prototype.delUserYes = function (username) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleUserManageLeftmenu);
        }).then(function () {
            that.eleUserManageLeftmenu.click();
            // }).then(function () {
            //     browser.sleep(200);
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(username);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleUserNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleUserNameSearched.click().then(function () {
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
    //
    // The function is used for delete a User, then discard the delete operation.
    //
    accessPage.prototype.delUserNo = function (username) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleUserManageLeftmenu);
        }).then(function () {
            that.eleUserManageLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(username);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleUserNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleUserNameSearched.click().then(function () {
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
    //
    // The function is used for replicate a User.
    //
    accessPage.prototype.replicateUser = function (username) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleUserManageLeftmenu);
        }).then(function () {
            that.eleUserManageLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(username);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleUserNameSearched);
        }).then(function () {
            that.eleUserNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleReplicateButton);
        }).then(function () {
            that.eleReplicateButton.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleSaveButton);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for update a User.
    //
    accessPage.prototype.updateUser = function (username, password, lastname, firstname, workspace, accessDenied, ssesOps, redOps, configure, deploy, define, access, entityType, ownerGlobal, viewerGlobal) {
        var deferred = protractor.promise.defer(), that = this;
        workspace = workspace || browser.params.workspace.name;
        entityType = entityType || "Define-Configure";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleUserManageLeftmenu);
        }).then(function () {
            that.eleUserManageLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(username);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleUserNameSearched);
        }).then(function () {
            that.eleUserNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            that._workspaceUserDetails(workspace);
        }).then(function () {
            that._entityPermissionTypeUserDetails(entityType);
        }).then(function () {
            that.eleUserDetailsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleUserDetailsLastNameInput.clear().sendKeys(lastname);
        }).then(function () {
            that.eleUserDetailsFirstNameInput.clear().sendKeys(firstname);
        }).then(function () {
            that._accessDeniedUserDetails(accessDenied);
        }).then(function () {
            that._accessPermissionSsesOpsUserDetails(ssesOps);
        }).then(function () {
            that._accessPermissionRedOpsUserDetails(redOps);
        }).then(function () {
            that._accessPermissionConfigureUserDetails(configure);
        }).then(function () {
            that._accessPermissionDeployUserDetails(deploy);
        }).then(function () {
            that._accessPermissionDefineUserDetails(define);
        }).then(function () {
            that._accessPermissionAccessUserDetails(access);
        }).then(function () {
            that._entityPermissionOwnerGlobalUserDetails(ownerGlobal);
        }).then(function () {
            that._entityPermissionViewerGlobalUserDetails(viewerGlobal);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a User, then confirm the cancel operation.
    //
    accessPage.prototype.cancelUserYes = function (username, password, lastname, firstname, workspace, accessDenied, ssesOps, redOps, configure, deploy, define, access, entityType, ownerGlobal, viewerGlobal) {
        var deferred = protractor.promise.defer(), that = this;
        workspace = workspace || browser.params.workspace.name;
        entityType = entityType || "Define-Configure";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleUserManageLeftmenu);
        }).then(function () {
            that.eleUserManageLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(username);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleUserNameSearched);
        }).then(function () {
            that.eleUserNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            that._workspaceUserDetails(workspace);
        }).then(function () {
            that._entityPermissionTypeUserDetails(entityType);
        }).then(function () {
            that.eleUserDetailsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleUserDetailsLastNameInput.clear().sendKeys(lastname);
        }).then(function () {
            that.eleUserDetailsFirstNameInput.clear().sendKeys(firstname);
        }).then(function () {
            that._accessDeniedUserDetails(accessDenied);
        }).then(function () {
            that._accessPermissionSsesOpsUserDetails(ssesOps);
        }).then(function () {
            that._accessPermissionRedOpsUserDetails(redOps);
        }).then(function () {
            that._accessPermissionConfigureUserDetails(configure);
        }).then(function () {
            that._accessPermissionDeployUserDetails(deploy);
        }).then(function () {
            that._accessPermissionDefineUserDetails(define);
        }).then(function () {
            that._accessPermissionAccessUserDetails(access);
        }).then(function () {
            that._entityPermissionOwnerGlobalUserDetails(ownerGlobal);
        }).then(function () {
            that._entityPermissionViewerGlobalUserDetails(viewerGlobal);
        }).then(function () {
            that.eleCancelButton.click();
        }).then(function () {
            globalPage.isWarningYes();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a User, then discard the cancel operation.
    //
    accessPage.prototype.cancelUserNo = function (username, password, lastname, firstname, workspace, accessDenied, ssesOps, redOps, configure, deploy, define, access, entityType, ownerGlobal, viewerGlobal) {
        var deferred = protractor.promise.defer(), that = this;
        workspace = workspace || browser.params.workspace.name;
        entityType = entityType || "Define-Configure";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleUserManageLeftmenu);
        }).then(function () {
            that.eleUserManageLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(username);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleUserNameSearched);
        }).then(function () {
            that.eleUserNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            that._workspaceUserDetails(workspace);
        }).then(function () {
            that._entityPermissionTypeUserDetails(entityType);
        }).then(function () {
            that.eleUserDetailsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleUserDetailsLastNameInput.clear().sendKeys(lastname);
        }).then(function () {
            that.eleUserDetailsFirstNameInput.clear().sendKeys(firstname);
        }).then(function () {
            that._accessDeniedUserDetails(accessDenied);
        }).then(function () {
            that._accessPermissionSsesOpsUserDetails(ssesOps);
        }).then(function () {
            that._accessPermissionRedOpsUserDetails(redOps);
        }).then(function () {
            that._accessPermissionConfigureUserDetails(configure);
        }).then(function () {
            that._accessPermissionDeployUserDetails(deploy);
        }).then(function () {
            that._accessPermissionDefineUserDetails(define);
        }).then(function () {
            that._accessPermissionAccessUserDetails(access);
        }).then(function () {
            that._entityPermissionOwnerGlobalUserDetails(ownerGlobal);
        }).then(function () {
            that._entityPermissionViewerGlobalUserDetails(viewerGlobal);
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
    //
    // The function is used for reset a User.
    //
    accessPage.prototype.resetUser = function (username, password, lastname, firstname, workspace, accessDenied, ssesOps, redOps, configure, deploy, define, access, entityType, ownerGlobal, viewerGlobal) {
        var deferred = protractor.promise.defer(), that = this;
        workspace = workspace || browser.params.workspace.name;
        entityType = entityType || "Define-Configure";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleUserManageLeftmenu);
        }).then(function () {
            that.eleUserManageLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(username);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleUserNameSearched);
        }).then(function () {
            that.eleUserNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            that._workspaceUserDetails(workspace);
        }).then(function () {
            that._entityPermissionTypeUserDetails(entityType);
        }).then(function () {
            that.eleUserDetailsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleUserDetailsLastNameInput.clear().sendKeys(lastname);
        }).then(function () {
            that.eleUserDetailsFirstNameInput.clear().sendKeys(firstname);
        }).then(function () {
            that._accessDeniedUserDetails(accessDenied);
        }).then(function () {
            that._accessPermissionSsesOpsUserDetails(ssesOps);
        }).then(function () {
            that._accessPermissionRedOpsUserDetails(redOps);
        }).then(function () {
            that._accessPermissionConfigureUserDetails(configure);
        }).then(function () {
            that._accessPermissionDeployUserDetails(deploy);
        }).then(function () {
            that._accessPermissionDefineUserDetails(define);
        }).then(function () {
            that._accessPermissionAccessUserDetails(access);
        }).then(function () {
            that._entityPermissionOwnerGlobalUserDetails(ownerGlobal);
        }).then(function () {
            that._entityPermissionViewerGlobalUserDetails(viewerGlobal);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    //
    // This function is used for set 'Usage Management' -> 'SS-ES Ops check button'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._ssesOpsUsageManage = function (ssesOps) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUsageManageSsesOpsCheck).then(function () {
            return that.eleUsageManageSsesOpsCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (ssesOps) {
                    that.eleUsageManageSsesOpsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (ssesOps) {
                    deferred.fulfill();
                } else {
                    that.eleUsageManageSsesOpsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Usage Management' -> 'RED Ops check button'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._redOpsUsageManage = function (redOps) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUsageManageRedOpsCheck).then(function () {
            return that.eleUsageManageRedOpsCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (redOps) {
                    that.eleUsageManageRedOpsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (redOps) {
                    deferred.fulfill();
                } else {
                    that.eleUsageManageRedOpsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Usage Management' -> 'EMS check button'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._emsUsageManage = function (ems) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUsageManageEmsCheck).then(function () {
            return that.eleUsageManageEmsCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (ems) {
                    that.eleUsageManageEmsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (ems) {
                    deferred.fulfill();
                } else {
                    that.eleUsageManageEmsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Usage Management' -> 'RV check button'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._rvUsageManage = function (rv) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUsageManageRvCheck).then(function () {
            return that.eleUsageManageRvCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (rv) {
                    that.eleUsageManageRvCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (rv) {
                    deferred.fulfill();
                } else {
                    that.eleUsageManageRvCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Usage Management' -> 'CICS check button'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._cicsUsageManage = function (cics) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUsageManageCicsCheck).then(function () {
            return that.eleUsageManageCicsCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (cics) {
                    that.eleUsageManageCicsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (cics) {
                    deferred.fulfill();
                } else {
                    that.eleUsageManageCicsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Usage Management' -> 'RED check button'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._redUsageManage = function (red) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUsageManageRedCheck).then(function () {
            return that.eleUsageManageRedCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (red) {
                    that.eleUsageManageRedCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (red) {
                    deferred.fulfill();
                } else {
                    that.eleUsageManageRedCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Usage Management' -> 'IMS check button'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._imsUsageManage = function (ims) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUsageManageImsCheck).then(function () {
            return that.eleUsageManageImsCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (ims) {
                    that.eleUsageManageImsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (ims) {
                    deferred.fulfill();
                } else {
                    that.eleUsageManageImsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Usage Management' -> 'Batch check button'
    // false: not selected
    // true: selected
    //
    accessPage.prototype._batchUsageManage = function (batch) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleUsageManageBatchCheck).then(function () {
            return that.eleUsageManageBatchCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (batch) {
                    that.eleUsageManageBatchCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (batch) {
                    deferred.fulfill();
                } else {
                    that.eleUsageManageBatchCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for save Usage.
    //
    accessPage.prototype.saveUsage = function (ssesOps, redOps, ems, rv, cics, red, ims, batch) {
        var deferred = protractor.promise.defer(), that = this;
        ssesOps = ssesOps === undefined ? "true" : ssesOps;
        redOps = redOps === undefined ? "true" : redOps;
        ems = ems === undefined ? "true" : ems;
        rv = rv === undefined ? "true" : rv;
        cics = cics === undefined ? "true" : cics;
        red = red === undefined ? "true" : red;
        ims = ims === undefined ? "true" : ims;
        batch = batch === undefined ? "true" : batch;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleUsageManageLeftmenu);
        }).then(function () {
            that.eleUsageManageLeftmenu.click();
        }).then(function () {
            that._ssesOpsUsageManage(ssesOps);
        }).then(function () {
            that._redOpsUsageManage(redOps);
        }).then(function () {
            that._emsUsageManage(ems);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return globalPage.eleWarningInfo.isPresent();
        }).then(function (result) {
            if (result) {
                globalPage.eleWarningClose.click();
            }
        }).then(function () {
            that._rvUsageManage(rv);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return globalPage.eleWarningInfo.isPresent();
        }).then(function (result) {
            if (result) {
                globalPage.eleWarningClose.click();
            }
        }).then(function () {
            that._cicsUsageManage(cics);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return globalPage.eleWarningInfo.isPresent();
        }).then(function (result) {
            if (result) {
                globalPage.eleWarningClose.click();
            }
        }).then(function () {
            that._redUsageManage(red);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return globalPage.eleWarningInfo.isPresent();
        }).then(function (result) {
            if (result) {
                globalPage.eleWarningClose.click();
            }
        }).then(function () {
            that._imsUsageManage(ims);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return globalPage.eleWarningInfo.isPresent();
        }).then(function (result) {
            if (result) {
                globalPage.eleWarningClose.click();
            }
        }).then(function () {
            that._batchUsageManage(batch);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSaveButton);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for reset Usage.
    //
    accessPage.prototype.resetUsage = function (ssesOps, redOps, ems, rv, cics, red, ims, batch) {
        var deferred = protractor.promise.defer(), that = this;
        ssesOps = ssesOps === undefined ? "true" : ssesOps;
        redOps = redOps === undefined ? "true" : redOps;
        ems = ems === undefined ? "true" : ems;
        rv = rv === undefined ? "true" : rv;
        cics = cics === undefined ? "true" : cics;
        red = red === undefined ? "true" : red;
        ims = ims === undefined ? "true" : ims;
        batch = batch === undefined ? "true" : batch;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleUsageManageLeftmenu);
        }).then(function () {
            that.eleUsageManageLeftmenu.click();
        }).then(function () {
            that._ssesOpsUsageManage(ssesOps);
        }).then(function () {
            that._redOpsUsageManage(redOps);
        }).then(function () {
            that._emsUsageManage(ems);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return globalPage.eleWarningInfo.isPresent();
        }).then(function (result) {
            if (result) {
                globalPage.eleWarningClose.click();
            }
        }).then(function () {
            that._rvUsageManage(rv);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return globalPage.eleWarningInfo.isPresent();
        }).then(function (result) {
            if (result) {
                globalPage.eleWarningClose.click();
            }
        }).then(function () {
            that._cicsUsageManage(cics);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return globalPage.eleWarningInfo.isPresent();
        }).then(function (result) {
            if (result) {
                globalPage.eleWarningClose.click();
            }
        }).then(function () {
            that._redUsageManage(red);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return globalPage.eleWarningInfo.isPresent();
        }).then(function (result) {
            if (result) {
                globalPage.eleWarningClose.click();
            }
        }).then(function () {
            that._imsUsageManage(ims);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return globalPage.eleWarningInfo.isPresent();
        }).then(function (result) {
            if (result) {
                globalPage.eleWarningClose.click();
            }
        }).then(function () {
            that._batchUsageManage(batch);
        }).then(function () {
            globalCommons.waitForClickable(that.eleResetButton);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    //
    // The function is used for save Security Settings.
    //
    accessPage.prototype.saveSecurity = function (keystoreFileName, keystorePassword, cipher, securePort, nonSecurePort) {
        var deferred = protractor.promise.defer(), that = this;
        keystoreFileName = keystoreFileName || "";
        keystorePassword = keystorePassword || "";
        cipher = cipher || "";
        securePort = securePort || "";
        nonSecurePort = nonSecurePort || "";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleSecuritySetLeftmenu);
        }).then(function () {
            that.eleSecuritySetLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSecuritySetKeystoreFileNameInput);
        }).then(function () {
            that.eleSecuritySetKeystoreFileNameInput.clear().sendKeys(keystoreFileName);
        }).then(function () {
            that.eleSecuritySetKeystorePasswordInput.clear().sendKeys(keystorePassword);
        }).then(function () {
            that.eleSecuritySetCipherSpecInput.clear().sendKeys(cipher);
        }).then(function () {
            that.eleSecuritySetSecurePortInput.clear().sendKeys(securePort);
        }).then(function () {
            that.eleSecuritySetNonSecurePortInput.clear().sendKeys(nonSecurePort);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSaveButton);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for reset Security Settings.
    //
    accessPage.prototype.resetSecurity = function (keystoreFileName, keystorePassword, cipher, securePort, nonSecurePort) {
        var deferred = protractor.promise.defer(), that = this;
        keystoreFileName = keystoreFileName || "";
        keystorePassword = keystorePassword || "";
        cipher = cipher || "";
        securePort = securePort || "";
        nonSecurePort = nonSecurePort || "";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleSecuritySetLeftmenu);
        }).then(function () {
            that.eleSecuritySetLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSecuritySetKeystoreFileNameInput);
        }).then(function () {
            that.eleSecuritySetKeystoreFileNameInput.clear().sendKeys(keystoreFileName);
        }).then(function () {
            that.eleSecuritySetKeystorePasswordInput.clear().sendKeys(keystorePassword);
        }).then(function () {
            that.eleSecuritySetCipherSpecInput.clear().sendKeys(cipher);
        }).then(function () {
            that.eleSecuritySetSecurePortInput.clear().sendKeys(securePort);
        }).then(function () {
            that.eleSecuritySetNonSecurePortInput.clear().sendKeys(nonSecurePort);
        }).then(function () {
            globalCommons.waitForClickable(that.eleResetButton);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    //
    // The function is used for save General Settings.
    //
    accessPage.prototype.saveGeneral = function (rvInstallationPath) {
        var deferred = protractor.promise.defer(), that = this;
        rvInstallationPath = rvInstallationPath || browser.params.access.rvInstallationPath;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleGeneralSetLeftmenu);
        }).then(function () {
            that.eleGeneralSetLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleGeneralSetRvInstallPathInput);
        }).then(function () {
            that.eleGeneralSetRvInstallPathInput.clear().sendKeys(rvInstallationPath);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSaveButton);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for reset General Settings.
    //
    accessPage.prototype.resetGeneral = function (rvInstallationPath) {
        var deferred = protractor.promise.defer(), that = this;
        rvInstallationPath = rvInstallationPath || browser.params.access.rvInstallationPath;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleGeneralSetLeftmenu);
        }).then(function () {
            that.eleGeneralSetLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleGeneralSetRvInstallPathInput);
        }).then(function () {
            that.eleGeneralSetRvInstallPathInput.clear().sendKeys(rvInstallationPath);
        }).then(function () {
            globalCommons.waitForClickable(that.eleResetButton);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    return accessPage;
})();
module.exports = accessPage;