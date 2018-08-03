/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var deployPage = require('../pageObject/deployPage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.7 Deploy Page', function () {
    var Page = new deployPage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleDeployMenu.click();
    });

    // Add a workspace successfully.
    //
    it('Should add a workspace successfully', function () {
        browser.sleep(1000).then(function () {
            Page.delWorkspaceYes("Workspace0001");
        }).then(function () {
            Page.addWorkspace("Workspace0001", "AAAAAaaaaa11111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Workspace0001').to.be.true;
        }).then(function () {
            return Page.eleDescriptionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAaaaaa11111').to.be.true;
        });
    });

    // Add a workspace successfully, then update it.
    //
    it('Should add a workspace, then update it successfully', function () {
        Page.delWorkspaceYes("Workspace0002").then(function () {
            Page.addWorkspace("Workspace0002", "AAAAAaaaaa11111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateWorkspace("Workspace0002", "BBBBBbbbbb22222");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Workspace0002').to.be.true;
        }).then(function () {
            return Page.eleDescriptionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBBBBbbbbb22222').to.be.true;
        });
    });

    // Add a workspace, make some changes, cancel the changes, then confirm the cancel operation.
    //
    it('Should add a workspace, cancel the changes, then confirm the cancel operation', function () {
        Page.delWorkspaceYes("Workspace0003").then(function () {
            Page.addWorkspace("Workspace0003", "AAAAAaaaaa11111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelWorkspaceYes("Workspace0003", "BBBBBbbbbb22222");
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0003");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleWorkspaceNameSearched);
        }).then(function () {
            Page.eleWorkspaceNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleDetailHeader);
        }).then(function () {
            return Page.eleNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Workspace0003').to.be.true;
        }).then(function () {
            return Page.eleDescriptionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAaaaaa11111').to.be.true;
        });
    });

    // Add a workspace, make some changes, cancel the changes, then discard the cancel operation.
    //
    it('Should add a workspace, cancel the changes, then discard the cancel operation', function () {
        Page.delWorkspaceYes("Workspace0004").then(function () {
            Page.addWorkspace("Workspace0004", "AAAAAaaaaa11111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelWorkspaceNo("Workspace0004", "BBBBBbbbbb22222");
        }).then(function () {
            return Page.eleNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Workspace0004').to.be.true;
        }).then(function () {
            return Page.eleDescriptionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBBBBbbbbb22222').to.be.true;
        });
    });

    // Add a workspace, make some changes, then reset it.
    //
    it('Should add a workspace, make some changes, then reset it', function () {
        Page.delWorkspaceYes("Workspace0005").then(function () {
            Page.addWorkspace("Workspace0005", "AAAAAaaaaa11111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetWorkspace("Workspace0005", "BBBBBbbbbb22222");
        }).then(function () {
            return Page.eleNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Workspace0005').to.be.true;
        }).then(function () {
            return Page.eleDescriptionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAaaaaa11111').to.be.true;
        });
    });

    // Add a workspace, then add a workspace with the same name, then confirm the overwrite operation.
    //
    it('Should add a workspace to overwrite a workspace, then confirm the overwrite operation', function () {
        Page.delWorkspaceYes("Workspace0006").then(function () {
            Page.addWorkspace("Workspace0006", "AAAAAaaaaa11111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addWorkspace("Workspace0006", "BBBBBbbbbb22222");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Workspace0006').to.be.true;
        }).then(function () {
            return Page.eleDescriptionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'BBBBBbbbbb22222').to.be.true;
        });
    });

    // Add a workspace, then add a workspace with the same name, then discard the overwrite operation.
    //
    it('Should add a workspace to overwrite a workspace, then discard the overwrite operation', function () {
        Page.delWorkspaceYes("Workspace0007").then(function () {
            Page.addWorkspace("Workspace0007", "AAAAAaaaaa11111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addWorkspace("Workspace0007", "BBBBBbbbbb22222");
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0007");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleWorkspaceNameSearched);
        }).then(function () {
            Page.eleWorkspaceNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleNameInput);
        }).then(function () {
            return Page.eleNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'Workspace0007').to.be.true;
        }).then(function () {
            return Page.eleDescriptionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === 'AAAAAaaaaa11111').to.be.true;
        });
    });

    // Add a workspace, delete it, then confirm the delete operation.
    //
    it('Should add a workspace, delete it, then confirm the delete operation', function () {
        Page.delWorkspaceYes("Workspace0008").then(function () {
            Page.addWorkspace("Workspace0008", "AAAAAaaaaa11111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delWorkspaceYes("Workspace0008");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleWorkspaceNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a workspace, delete it, then discard the delete operation.
    //
    it('Should add a workspace, delete it, then discard the delete operation', function () {
        Page.delWorkspaceYes("Workspace0009").then(function () {
            Page.addWorkspace("Workspace0009", "AAAAAaaaaa11111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delWorkspaceNo("Workspace0009");
        }).then(function () {
            return Page.eleWorkspaceNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.true;
        });
    });

    // Add a workspace successfully, then click 'Audit' button.
    //
    it('Test Audit button', function () {
        Page.delWorkspaceYes("Workspace0010").then(function () {
            Page.addWorkspace("Workspace0010", "AAAAAaaaaa11111")
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return Page.eleTableHeader2.getText();
        }).then(function (message) {
            expect(message === 'Description').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAuditButton);
        }).then(function () {
            Page.eleAuditButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleTableHeader2.getText();
        }).then(function (message) {
            expect(message === 'Modified On').to.be.true;
        }).then(function () {
            Page.eleAuditButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleTableHeader2.getText();
        }).then(function (message) {
            expect(message === 'Description').to.be.true;
        });
    });

    // Add a workspace successfully, then click 'Refresh' button.
    //
    it('Test Refresh button', function () {
        Page.delWorkspaceYes("Workspace0011").then(function () {
            Page.addWorkspace("Workspace0011", "AAAAAaaaaa11111");
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
            return Page.eleLoadButton.getAttribute('disabled');
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            Page.eleRefreshButton.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            return Page.eleDeleteButton.getAttribute('disabled');
        }).then(function (message) {
            expect(message === "true").to.be.true;
        }).then(function () {
            return Page.eleLoadButton.getAttribute('disabled');
        }).then(function (message) {
            expect(message === "true").to.be.true;
        });
    });

    // Add a workspace successfully, then load workspace from a file.
    // Related jiras: ZWUI-902
    /*
    it('Test load workspace from a normal file', function () {
        Page.delWorkspaceYes("Workspace0012").then(function () {
            Page.addWorkspace("Workspace0012", "Load workspace from a file");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.loadWorkspaceFromFile("Workspace0012", undefined);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getText();
        }).then(function (message) {
            expect(message === 'Workspace(Workspace0012) loaded successfully!').to.be.true;
        });
    });
    */
    // Add a workspace successfully, then load workspace from an empty file.
    //
    it('Test load workspace from an empty file', function () {
        Page.delWorkspaceYes("Workspace0013").then(function () {
            Page.addWorkspace("Workspace0013", "Load workspace from an empty file");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0013");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.loadWorkspaceFromEmptyFile("Workspace0013", undefined);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getText();
        }).then(function (message) {
            expect(message === 'Workspace(Workspace0013) loaded successfully!').to.be.true;
        });
    });

    // Add a workspace successfully, then load workspace from an existing workspace(CICS_EMS)
    //
    it('Test load workspace from an existing workspace(CICS_EMS)', function () {
        Page.delWorkspaceYes("Workspace0014").then(function () {
            Page.addWorkspace("Workspace0014", "Load workspace from an existing workspace CICS_EMS");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0014");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.loadWorkspaceFromWorkspace("Workspace0014", undefined);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getText();
        }).then(function (message) {
            expect(message === 'Workspace(Workspace0014) loaded successfully!').to.be.true;
        });
    });

    // Add a workspace successfully, then load workspace from an existing workspace(CICS_RV)
    //
    it('Test load workspace from an existing workspace(CICS_RV)', function () {
        Page.delWorkspaceYes("Workspace0015").then(function () {
            Page.addWorkspace("Workspace0015", "Load workspace from an existing workspace CICS_RV");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0015");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.loadWorkspaceFromWorkspace("Workspace0015", "CICS_RV");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getText();
        }).then(function (message) {
            expect(message === 'Workspace(Workspace0015) loaded successfully!').to.be.true;
        });
    });
    /*
        // Add a workspace successfully, then load workspace from an existing workspace(IMS_EMS)
        //
        it('Test load workspace from an existing workspace(IMS_EMS)', function () {
            Page.delWorkspaceYes("Workspace0016").then(function () {
                Page.addWorkspace("Workspace0016", "Load workspace from an existing workspace IMS_EMS");
            }).then(function () {
                globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
            }).then(function () {
                Page.eleWorkspacesLeftmenu.click();
            }).then(function () {
                globalCommons.waitForDisplayed(Page.eleSearchInput);
            }).then(function () {
                Page.eleSearchInput.clear().sendKeys("Workspace0016");
            }).then(function () {
                Page.eleSearchIcon.click();
            }).then(function () {
                expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
            }).then(function () {
                Page.loadWorkspaceFromWorkspace("Workspace0016", "IMS_EMS");
            }).then(function () {
                globalCommons.waitForElementPresent(Page.eleMsgInfo);
            }).then(function () {
                return Page.eleMsgInfo.getText();
            }).then(function (message) {
                expect(message === 'Workspace(Workspace0016) loaded successfully!').to.be.true;
            });
        });

        // Add a workspace successfully, then load workspace from an existing workspace(IMS_RV)
        //
        it('Test load workspace from an existing workspace(IMS_RV)', function () {
            Page.delWorkspaceYes("Workspace0017").then(function () {
                Page.addWorkspace("Workspace0017", "Load workspace from an existing workspace IMS_RV");
            }).then(function () {
                globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
            }).then(function () {
                Page.eleWorkspacesLeftmenu.click();
            }).then(function () {
                globalCommons.waitForDisplayed(Page.eleSearchInput);
            }).then(function () {
                Page.eleSearchInput.clear().sendKeys("Workspace0017");
            }).then(function () {
                Page.eleSearchIcon.click();
            }).then(function () {
                expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
            }).then(function () {
                Page.loadWorkspaceFromWorkspace("Workspace0017", "IMS_RV");
            }).then(function () {
                globalCommons.waitForElementPresent(Page.eleMsgInfo);
            }).then(function () {
                return Page.eleMsgInfo.getText();
            }).then(function (message) {
                expect(message === 'Workspace(Workspace0017) loaded successfully!').to.be.true;
            });
        });
    */
    // Add a workspace successfully, then load workspace from an empty workspace
    //
    it('Test load workspace from an empty workspace', function () {
        Page.delWorkspaceYes("Workspace0018").then(function () {
            Page.addWorkspace("Workspace0018", "Empty workspace");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0018");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.delWorkspaceYes("Workspace0019");
        }).then(function () {
            Page.addWorkspace("Workspace0019", "Load workspace from an empty workspace");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0019");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.loadWorkspaceFromWorkspace("Workspace0019", "Workspace0018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getText();
        }).then(function (message) {
            expect(message === 'Workspace(Workspace0019) loaded successfully!').to.be.true;
        });
    });

    // Add a workspace successfully, then load workspace from a file, but no filepath provided.
    //
    it('Test load workspace from a file with no filepath', function () {
        Page.delWorkspaceYes("Workspace0020").then(function () {
            Page.addWorkspace("Workspace0020", "Load workspace from a file with no filepath");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0020");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.eleWorkspaceNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleLoadButton);
        }).then(function () {
            Page.eleLoadButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleFromFileRadio);
        }).then(function () {
            Page.eleFromFileRadio.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleLoadLoadButton);
        }).then(function () {
            Page.eleLoadLoadButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleDialogInfo);
        }).then(function () {
            return Page.eleDialogInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleValidateMsg);
        }).then(function () {
            return Page.eleValidateMsg.getText();
        }).then(function (message) {
            expect(message === 'A value is required').to.be.true;
        }).then(function () {
            Page.eleLoadCancelButton.click();
        });
    });

    // Add a workspace successfully, then load workspace from a file with invalid data.
    //
    it('Test load workspace from a file with invalid data', function () {
        Page.delWorkspaceYes("Workspace0021").then(function () {
            Page.addWorkspace("Workspace0021", "Load workspace from a file with invalid data");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0021");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.loadWorkspaceFromInvalidDataFile("Workspace0021", undefined);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleDialogInfo);
        }).then(function () {
            return Page.eleDialogInfo.getText();
        }).then(function (message) {
            expect(message.includes("com.tibco.json.error.JsonException: Invalid JSON Error:")).to.be.true;
        }).then(function () {
            Page.eleLoadCancelButton.click();
        });
    });

    // Add a workspace successfully, then load workspace from a non existing file
    //
    it('Test load workspace from a non existing file', function () {
        Page.delWorkspaceYes("Workspace0022").then(function () {
            Page.addWorkspace("Workspace0022", "Test load workspace from a non existing file");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0022");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.loadWorkspaceFromFile("Workspace0022", "C:/noexist.DATA");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleDialogInfo);
        }).then(function () {
            return Page.eleDialogInfo.getText();
        }).then(function (message) {
            expect(message.includes("The system cannot find the file specified") || message.includes("No such file or directory")).to.be.true;
        }).then(function () {
            Page.eleLoadCancelButton.click();
        });
    });

    // Add a workspace successfully, then load workspace successfully, and then load workspace from file again
    //
    it('Test load workspace from file for a non empty workspace', function () {
        Page.delWorkspaceYes("Workspace0023").then(function () {
            Page.addWorkspace("Workspace0023", "Test load workspace for a non empty workspace");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0023");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.loadWorkspaceFromEmptyFile("Workspace0023", undefined);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getText();
        }).then(function (message) {
            expect(message === 'Workspace(Workspace0023) loaded successfully!').to.be.true;
        }).then(function () {
            Page.loadWorkspaceFromEmptyFile("Workspace0023", undefined);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleDialogInfo);
        }).then(function () {
            return Page.eleDialogInfo.getText();
        }).then(function (message) {
            expect(message === 'Workspace(Workspace0023) must be empty').to.be.true;
        }).then(function () {
            Page.eleLoadCancelButton.click();
        });
    });

    // Add a workspace successfully, then load workspace successfully, and then load workspace from workspace again
    //
    it('Test load workspace from workspace for a non empty workspace', function () {
        Page.delWorkspaceYes("Workspace0024").then(function () {
            Page.addWorkspace("Workspace0024", "Empty workspace");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0024");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.delWorkspaceYes("Workspace0025");
        }).then(function () {
            Page.addWorkspace("Workspace0025", "Load workspace for a non empty workspace");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0025");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.loadWorkspaceFromWorkspace("Workspace0025", "Workspace0024");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getText();
        }).then(function (message) {
            expect(message === 'Workspace(Workspace0025) loaded successfully!').to.be.true;
        }).then(function () {
            Page.loadWorkspaceFromWorkspace("Workspace0025", "CICS_RV");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleDialogInfo);
        }).then(function () {
            return Page.eleDialogInfo.getText();
        }).then(function (message) {
            expect(message === 'Workspace(Workspace0025) must be empty').to.be.true;
        }).then(function () {
            Page.eleLoadCancelButton.click();
        });
    });

    // Test workspace Details panel fields default values.
    //
    it('Test workspace Details panel fields default values', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleNameInput);
        }).then(function () {
            return Page.eleNameInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleDescriptionInput.getAttribute('value');
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            Page.eleCancelButton.click();
        });
    });

    // Test field 'Workspace Details' -> 'Name'
    //
    it('Test field Name', function () {
        Page.delWorkspaceYes("Workspace0026_@#$_223333333333444444444").then(function () {
            Page.addWorkspace("Workspace0026_@#$_223333333333444444444", "Test Name");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0026_@#$_223333333333444444444");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.eleWorkspaceNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleDetailSlideBar);
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleNameInput);
        }).then(function () {
            return Page.eleNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'Workspace0026_@#$_223333333333444444444').to.be.true;
        }).then(function () {
            Page.delWorkspaceYes("Workspace0027_@#$_223333333333444444444");
        }).then(function () {
            Page.addWorkspace("Workspace0027_@#$_2233333333334444444444", "Test Name");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0027_@#$_223333333333444444444");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.eleWorkspaceNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleDetailSlideBar);
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleNameInput);
        }).then(function () {
            return Page.eleNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'Workspace0027_@#$_223333333333444444444').to.be.true;
        });
    });

    // Test field 'Workspace Details' -> 'Description'
    //
    it('Test field Description', function () {
        Page.delWorkspaceYes("Workspace0028").then(function () {
            Page.addWorkspace("Workspace0028", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForClickable(Page.eleWorkspacesLeftmenu);
        }).then(function () {
            Page.eleWorkspacesLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("Workspace0028");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            expect(Page.eleWorkspaceNameSearched.isDisplayed()).to.eventually.be.true;
        }).then(function () {
            Page.eleWorkspaceNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleDetailSlideBar);
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleNameInput);
        }).then(function () {
            return Page.eleDescriptionInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.delWorkspaceYes("Workspace0029");
        }).then(function () {
            Page.addWorkspace("Workspace0029", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'There is an error on this form').to.be.true;
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleValidateMsg);
        }).then(function () {
            return Page.eleValidateMsg.getText();
        }).then(function (message) {
            expect(message.includes("the value is too long, must be at most 254 characters")).to.be.true;
        }).then(function () {
            Page.eleDescription2Input.clear().sendKeys("Corrected");
        }).then(function () {
            Page.eleSaveButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        });
    });

    it('It is only for console', function () {
        console.log("Finish run " + __filename.slice(__dirname.length + 1));
        browser.sleep(1000);
    });
});