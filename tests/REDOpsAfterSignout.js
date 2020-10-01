/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var REDOpsPage = require('../pageObject/REDOpsPage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.4.2 RED Ops Page After Signout', function () {
    var Page = new REDOpsPage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleREDMenu.click();
    });

    // Add a connection successfully:
    // Connection Name: REDOpsConn00001
    // Host (URL): defined in conf.js (EndpointRED.url)
    // User Name: defined in conf.js (EndpointRED.userid)
    // Password: defined in conf.js (EndpointRED.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Should add a connection successfully', function () {
        globalNaviPage.signout().then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleREDMenu);
        }).then(function () {
            globalNaviPage.eleREDMenu.click();
        }).then(function () {
            Page.delConnYes("REDOpsConn00001");
        }).then(function () {
            Page.addConn("REDOpsConn00001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'REDOpsConn00001').to.be.true;
        }).then(function () {
            return Page.eleHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.endpointRED.url).to.be.true;
        }).then(function () {
            return Page.eleUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.endpointRED.userid).to.be.true;
        }).then(function () {
            return Page.elePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.endpointRED.password).to.be.true;
        }).then(function () {
            return Page.eleTLSConnectionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleSelectionListCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a connection successfully, then replicate it.
    // Connection Name: REDOpsConn00002, REDOpsConn00002-copy
    // Host (URL): defined in conf.js (EndpointRED.url)
    // User Name: defined in conf.js (EndpointRED.userid)
    // Password: defined in conf.js (EndpointRED.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Should add a connection, then replicate it successfully', function () {
        Page.delConnYes("REDOpsConn00002-copy").then(function () {
            Page.delConnYes("REDOpsConn00002");
        }).then(function () {
            Page.addConn("REDOpsConn00002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateConn("REDOpsConn00002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'REDOpsConn00002-copy').to.be.true;
        }).then(function () {
            return Page.eleHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.endpointRED.url).to.be.true;
        }).then(function () {
            return Page.eleUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.endpointRED.userid).to.be.true;
        }).then(function () {
            return Page.elePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.endpointRED.password).to.be.true;
        }).then(function () {
            return Page.eleTLSConnectionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleSelectionListCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a connection successfully, then update it.
    // Connection Name: REDOpsConn00003
    // Host (URL): HiJkLmN:5678
    // User Name: CCCCC
    // Password: ddddd
    // Use TLS Connection: selected
    // Selection List: not selected
    //
    it('Should add a connection, then update it successfully', function () {
        Page.delConnYes("REDOpsConn00003").then(function () {
            Page.addConn("REDOpsConn00003", "AbCdEfG:1234", "AAAAA", "bbbbb", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateConn("REDOpsConn00003", "HiJkLmN:5678", "CCCCC", "ddddd", true, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'REDOpsConn00003').to.be.true;
        }).then(function () {
            return Page.eleHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'CCCCC').to.be.true;
        }).then(function () {
            return Page.elePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ddddd').to.be.true;
        }).then(function () {
            return Page.eleTLSConnectionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleSelectionListCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a connection, make some changes, cancel the changes, then confirm the cancel operation.
    // Connection Name: REDOpsConn00004
    // Host (URL): AbCdEfG:1234
    // User Name: AAAAA
    // Password: bbbbb
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Should add a connection, cancel the changes, then confirm the cancel operation', function () {
        Page.delConnYes("REDOpsConn00004").then(function () {
            Page.addConn("REDOpsConn00004", "AbCdEfG:1234", "AAAAA", "bbbbb", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelConnYes("REDOpsConn00004", "HiJkLmN:5678", "CCCCC", "ddddd", true, false);
        }).then(function () {
            Page.eleConnectionsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("REDOpsConn00004");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnNameSearched, true, {timeout: 10000});
        }).then(function () {
            Page.eleConnNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleDetailHeader, true, {timeout: 10000});
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'REDOpsConn00004').to.be.true;
        }).then(function () {
            return Page.eleHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAA').to.be.true;
        }).then(function () {
            return Page.elePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'bbbbb').to.be.true;
        }).then(function () {
            return Page.eleTLSConnectionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleSelectionListCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a connection, make some changes, cancel the changes, then discard the cancel operation.
    // Connection Name: REDOpsConn00005
    // Host (URL): HiJkLmN:5678
    // User Name: CCCCC
    // Password: ddddd
    // Use TLS Connection: selected
    // Selection List: not selected
    //
    it('Should add a connection, cancel the changes, then discard the cancel operation', function () {
        Page.delConnYes("REDOpsConn00005").then(function () {
            Page.addConn("REDOpsConn00005", "AbCdEfG:1234", "AAAAA", "bbbbb", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelConnNo("REDOpsConn00005", "HiJkLmN:5678", "CCCCC", "ddddd", true, false);
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'REDOpsConn00005').to.be.true;
        }).then(function () {
            return Page.eleHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'CCCCC').to.be.true;
        }).then(function () {
            return Page.elePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ddddd').to.be.true;
        }).then(function () {
            return Page.eleTLSConnectionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleSelectionListCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a connection, make some changes, then reset it.
    // Connection Name: REDOpsConn00006
    // Host (URL): AbCdEfG:1234
    // User Name: AAAAA
    // Password: bbbbb
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Should add a connection, make some changes, then reset it', function () {
        Page.delConnYes("REDOpsConn00006").then(function () {
            Page.addConn("REDOpsConn00006", "AbCdEfG:1234", "AAAAA", "bbbbb", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetConn("REDOpsConn00006", "HiJkLmN:5678", "CCCCC", "ddddd", true, false);
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'REDOpsConn00006').to.be.true;
        }).then(function () {
            return Page.eleHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAA').to.be.true;
        }).then(function () {
            return Page.elePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'bbbbb').to.be.true;
        }).then(function () {
            return Page.eleTLSConnectionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleSelectionListCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a connection, then add a connection with the same name, then confirm the overwrite operation.
    // Connection Name: REDOpsConn00007
    // Host (URL): AbCdEfG:1234
    // User Name: AAAAA
    // Password: bbbbb
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Should add a connection to overwrite a connection, then confirm the overwrite operation', function () {
        Page.delConnYes("REDOpsConn00007").then(function () {
            Page.addConn("REDOpsConn00007", "AbCdEfG:1234", "AAAAA", "bbbbb", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConn("REDOpsConn00007", "HiJkLmN:5678", "CCCCC", "ddddd", true, false);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'REDOpsConn00007').to.be.true;
        }).then(function () {
            return Page.eleHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'HiJkLmN:5678').to.be.true;
        }).then(function () {
            return Page.eleUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'CCCCC').to.be.true;
        }).then(function () {
            return Page.elePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ddddd').to.be.true;
        }).then(function () {
            return Page.eleTLSConnectionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        }).then(function () {
            return Page.eleSelectionListCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Add a connection, then add a connection with the same name, then discard the overwrite operation.
    // Connection Name: REDOpsConn00008
    // Host (URL): HiJkLmN:5678
    // User Name: CCCCC
    // Password: ddddd
    // Use TLS Connection: selected
    // Selection List: not selected
    //
    it('Should add a connection to overwrite a connection, then discard the overwrite operation', function () {
        Page.delConnYes("REDOpsConn00008").then(function () {
            Page.addConn("REDOpsConn00008", "AbCdEfG:1234", "AAAAA", "bbbbb", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConn("REDOpsConn00008", "HiJkLmN:5678", "CCCCC", "ddddd", true, false);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleNoButton);
        }).then(function () {
            globalPage.eleNoButton.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleConnectionsLeftmenu);
        }).then(function () {
            Page.eleConnectionsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleYesButton);
        }).then(function () {
            globalPage.eleYesButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("REDOpsConn00008");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleConnNameSearched);
        }).then(function () {
            Page.eleConnNameSearched.click();
        }).then(function () {
            Page.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleConnNameInput);
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'REDOpsConn00008').to.be.true;
        }).then(function () {
            return Page.eleHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AbCdEfG:1234').to.be.true;
        }).then(function () {
            return Page.eleUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAA').to.be.true;
        }).then(function () {
            return Page.elePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'bbbbb').to.be.true;
        }).then(function () {
            return Page.eleTLSConnectionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleSelectionListCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === 'true').to.be.true;
        });
    });

    // Add a connection, delete it, then confirm the delete operation.
    //
    it('Should add a connection, delete it, then confirm the delete operation', function () {
        Page.delConnYes("REDOpsConn00009").then(function () {
            Page.addConn("REDOpsConn00009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delConnYes("REDOpsConn00009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("REDOpsConn00009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleConnNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a connection, delete it, then discard the delete operation.
    // Connection Name: REDOpsConn00010
    // Host (URL): defined in conf.js (EndpointRED.url)
    // User Name: defined in conf.js (EndpointRED.userid)
    // Password: defined in conf.js (EndpointRED.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Should add a connection, delete it, then discard the delete operation', function () {
        Page.delConnYes("REDOpsConn00010").then(function () {
            Page.addConn("REDOpsConn00010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delConnNo("REDOpsConn00010");
        }).then(function () {
            return Page.eleConnNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.true;
        });
    });

    // Add a available connection, then click 'CHECK' & 'Connect'
    // Connection Name: REDOpsConn11
    // Host (URL): defined in conf.js (EndpointRED.url)
    // User Name: defined in conf.js (EndpointRED.userid)
    // Password: defined in conf.js (EndpointRED.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Test CHECK & Connect button', function () {
        Page.delConnYes("REDOpsConn00011").then(function () {
            Page.addConn("REDOpsConn00011");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
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
        }).then(function () {
            Page.eleConnectButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Connected successfully').to.be.true;
        });
    });

    // Add a connection with correct host & username, incorrect password, then click 'CHECK' & 'Connect'
    // Connection Name: REDOpsConn00012
    // Host (URL): defined in conf.js (EndpointRED.url)
    // User Name: defined in conf.js (EndpointRED.userid)
    // Password: bbbbb
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Test CHECK & Connect button with incorrect password', function () {
        Page.delConnYes("REDOpsConn00012_Invalid_Password").then(function () {
            Page.addConn("REDOpsConn00012_Invalid_Password", undefined, undefined, "bbbbb");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message.includes("Host Application Failure")).to.be.true;
        }).then(function () {
            Page.eleConnectButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getAttribute('title');
        }).then(function (message) {
            expect(message.includes("Host Application Failure")).to.be.true;
        });
    });

    // Add a connection with correct host & username, incorrect username, then click 'CHECK' & 'Connect'
    // Connection Name: REDOpsConn00013
    // Host (URL): defined in conf.js (EndpointRED.url)
    // User Name: AAAAA
    // Password: defined in conf.js (EndpointRED.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Test CHECK & Connect button with incorrect username', function () {
        Page.delConnYes("REDOpsConn00013_Invalid_Username").then(function () {
            Page.addConn("REDOpsConn00013_Invalid_Username", undefined, "AAAAA");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message.includes("Host Application Failure")).to.be.true;
        }).then(function () {
            Page.eleConnectButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getAttribute('title');
        }).then(function (message) {
            expect(message.includes("Host Application Failure")).to.be.true;
        });
    });

    // Add a connection with incorrect host, then click 'CHECK' & 'Connect'
    // Connection Name: REDOpsConn00014
    // Host (URL): AbCdEfG:1234
    // User Name: AAAAA
    // Password: bbbbb
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Test CHECK & Connect button with incorrect host', function () {
        Page.delConnYes("REDOpsConn00014_Invalid_Host").then(function () {
            Page.addConn("REDOpsConn00014_Invalid_Host", "AbCdEfG:1234");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            Page.eleCheckButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message.includes("TCP Failure: unable to connect to TCP")).to.be.true;
        }).then(function () {
            Page.eleConnectButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getAttribute('title');
        }).then(function (message) {
            expect(message.includes("TCP Failure: unable to connect to TCP")).to.be.true;
        });
    });

    // Add a connection successfully, then click 'Audit' button.
    // Connection Name: REDOpsConn00015
    // Host (URL): defined in conf.js (EndpointRED.url)
    // User Name: defined in conf.js (EndpointRED.userid)
    // Password: defined in conf.js (EndpointRED.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Test Audit button', function () {
        Page.delConnYes("REDOpsConn00015").then(function () {
            Page.addConn("REDOpsConn00015");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.eleSaveInfoClose.click();
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
            return Page.eleTableHeader4.getText();
        }).then(function (message) {
            expect(message === 'URL').to.be.true;
        });
    });

    // Submit a command without a connection.
    // Expect warning message pop-up.
    //
    it('Submit a command without a connection', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleConsoleLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandInput);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningDialog);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === 'A connection is required before using the function').to.be.true;
        }).then(function () {
            globalPage.eleWarningClose.click();
        });
    });

    // Submit commands without an available connection.
    // Related jiras: ZWUI-963(fixed)
    it('Submit commands with an available connection', function () {
        var backspaceSeries = Array(40).join(protractor.Key.BACK_SPACE);
        var projectPath = process.cwd();
        Page.delConnYes("REDOpsConn00016").then(function () {
            Page.addConn("REDOpsConn00016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.eleConnectionsLeftmenu.click()
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("REDOpsConn00016");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnNameSearched);
        }).then(function () {
            Page.eleConnNameSearched.click();
        }).then(function () {
            Page.eleConnectButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Connected successfully').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleConsoleLeftmenu);
        }).then(function () {
            Page.eleConsoleLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleCommandInput);
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/redCommandOutput/help.txt";
            var dataStr = message.split("\n").slice(0).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("?");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/redCommandOutput/help.txt";
            var dataStr = message.split("\n").slice(0).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,HUB");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message.substr(0, 18) === "SXX8220I HUB Name:").to.be.true;
            expect(message.substr(25, 8) === "JobName:").to.be.true;
            expect(message.substr(43, 9) === "Status: A" || message.substr(43, 9) === "Status: I").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,PLEX");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message.substr(0, 18) === "SXX8227I HUB Name:").to.be.true;
            expect(message.substr(25, 4) === "CID:").to.be.true;
            expect(message.substr(35, 4) === "SYS:").to.be.true;
            expect(message.substr(46, 4) === "JOB:").to.be.true;
        // }).then(function () {
        //     Page.eleCommandInput.sendKeys(backspaceSeries);
        // }).then(function () {
        //     Page.eleCommandInput.clear().sendKeys("SHOW,USAGE");
        // }).then(function () {
        //     Page.eleCommandSubmit.click();
        // }).then(function () {
        //     globalCommons.waitForElementPresent(Page.eleCommandOutput);
        // }).then(function () {
        //     return Page.eleCommandOutput.getText();
        // }).then(function (message) {
        //     expect(message.substr(0, 8) === "SXX8215I").to.be.true;
        //     expect(message.substr(27, 17) === "System/CPU-Time :").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,USAGE,AS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "No data returned from the above command").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("ENABLE,zIIP");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "The above command may only be entered via Host Console").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("DISABLE,zIIP");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "The above command may only be entered via Host Console").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("Set,zIIPPCT=100");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "The above command may only be entered via Host Console").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("QUIESCE,RED");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "The above command may only be entered via Host Console").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("RESTART,RED");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "The above command may only be entered via Host Console").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("UNLOAD,DLPA");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "The above command may only be entered via Host Console").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("REFRESH,DLPA");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "The above command may only be entered via Host Console").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("RELOAD,ALL");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "The above command may only be entered via Host Console").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("ENABLE,STATS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "Invalid HUB command detected").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("DISABLE,STATS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "Invalid HUB command detected").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("REFRESH,WebUI");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "The above command may only be entered via Host Console").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("Set,TF=11");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "The above command may only be entered via Host Console").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHUT");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message === "The above command may only be entered via Host Console").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("AAA");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message.includes("Invalid HUB command detected")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("BBB");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message.includes("Invalid HUB command detected")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("CCC");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message.includes("Invalid HUB command detected")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("DDD");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message.includes("Invalid HUB command detected")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("eee");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message.includes("Invalid HUB command detected")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("fff");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message.includes("Invalid HUB command detected")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("ggg");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message.includes("Invalid HUB command detected")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("111111111122222222223333333333444444444455555555556666666666777777777788888888889999999999000000000011111111112222222222");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            expect(message.includes("Invalid HUB command detected")).to.be.true;
        });
    });

    // Test Connection Details panel fields default value.
    //
    it('Test Connection Details panel fields default value', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleConnectionsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleAddButton);
        }).then(function () {
            Page.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleConnNameInput);
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'zSeries-Link-1').to.be.true;
        }).then(function () {
            return Page.eleHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'ADMIN').to.be.true;
        }).then(function () {
            return Page.elePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '').to.be.true;
        }).then(function () {
            return Page.eleTLSConnectionCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        }).then(function () {
            return Page.eleSelectionListCheck.getAttribute("checked");
        }).then(function (message) {
            expect(message === null).to.be.true;
        });
    });

    // Test field 'Connection Details panel' -> 'Connection Name'
    //
    it('Test field "Connection Name"', function () {
        Page.delConnYes("REDOpsConn00017_@#$_3333333333444444444").then(function () {
            Page.addConn("REDOpsConn00017_@#$_3333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'REDOpsConn00017_@#$_3333333333444444444').to.be.true;
        }).then(function () {
            Page.delConnYes("REDOpsConn00018_@#$_3333333333444444444");
        }).then(function () {
            Page.addConn("REDOpsConn00018_@#$_33333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'REDOpsConn00018_@#$_3333333333444444444').to.be.true;
        });
    });

    // Test field 'Connection Details panel' -> 'Host(URL)'
    //
    it('Test field "Host(URL)"', function () {
        Page.delConnYes("REDOpsConn00019").then(function () {
            Page.addConn("REDOpsConn00019", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        }).then(function () {
            Page.delConnYes("REDOpsConn00020");
        }).then(function () {
            Page.addConn("REDOpsConn00020", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111').to.be.true;
        });
    });

    // Test field 'Connection Details panel' -> 'User Name'
    //
    it('Test field "User Name"', function () {
        Page.delConnYes("REDOpsConn00021").then(function () {
            Page.addConn("REDOpsConn00021", undefined, "@#$%&/!^");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '@#$%&/!^').to.be.true;
        }).then(function () {
            Page.delConnYes("REDOpsConn00022");
        }).then(function () {
            Page.addConn("REDOpsConn00022", undefined, "AbC4Ef7hIj");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'AbC4Ef7h').to.be.true;
        });
    });

    // Test field 'Connection Details panel' -> 'Password'
    //
    it('Test field "Password"', function () {
        Page.delConnYes("REDOpsConn00023").then(function () {
            Page.addConn("REDOpsConn00023", undefined, undefined, "!@#$%^&*()<>?/a1");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.elePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === '!@#$%^&*()<>?/a1').to.be.true;
        }).then(function () {
            Page.delConnYes("REDOpsConn00024");
        }).then(function () {
            Page.addConn("REDOpsConn00024", undefined, undefined, "QWERTasdfg1234567");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.elePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'QWERTasdfg123456').to.be.true;
        });
    });

    it('It is only for console', function () {
        Page.visitPage("/MF_WebUI").then(function () {
            globalNaviPage.signin();
        }).then(function () {
            console.log("Finish run " + __filename.slice(__dirname.length + 1));
        }).then(function () {
            browser.sleep(1000);
        });
    });
});