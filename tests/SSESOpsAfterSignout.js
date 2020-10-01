/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var SSESOpsPage = require('../pageObject/SSESOpsPage.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var GlobalNaviPage = require('../pageObject/globalNaviPage.js');
describe('6.3.2 SS-ES Ops Page After Signout', function () {
    var Page = new SSESOpsPage();
    var globalPage = new GlobalPage();
    var globalNaviPage = new GlobalNaviPage();
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        globalNaviPage.eleSSESMenu.click();
    });

    // Add a connection successfully:
    // Connection Name: SSESOpsConn00001
    // Host (URL): defined in conf.js (EndpointSSES.url)
    // User Name: defined in conf.js (EndpointSSES.userid)
    // Password: defined in conf.js (EndpointSSES.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Should add a connection successfully', function () {
        globalNaviPage.signout().then(function () {
            globalCommons.waitForClickable(globalNaviPage.eleSSESMenu);
        }).then(function () {
            globalNaviPage.eleSSESMenu.click();
        }).then(function () {
            Page.delConnYes("SSESOpsConn00001");
        }).then(function () {
            Page.addConn("SSESOpsConn00001");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'SSESOpsConn00001').to.be.true;
        }).then(function () {
            return Page.eleHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.endpointSSES.url).to.be.true;
        }).then(function () {
            return Page.eleUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.endpointSSES.userid).to.be.true;
        }).then(function () {
            return Page.elePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.endpointSSES.password).to.be.true;
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
    // Connection Name: SSESOpsConn00002, SSESOpsConn00002-copy
    // Host (URL): defined in conf.js (EndpointSSES.url)
    // User Name: defined in conf.js (EndpointSSES.userid)
    // Password: defined in conf.js (EndpointSSES.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Should add a connection, then replicate it successfully', function () {
        Page.delConnYes("SSESOpsConn00002-copy").then(function () {
            Page.delConnYes("SSESOpsConn00002");
        }).then(function () {
            Page.addConn("SSESOpsConn00002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.replicateConn("SSESOpsConn00002");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'SSESOpsConn00002-copy').to.be.true;
        }).then(function () {
            return Page.eleHostInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.endpointSSES.url).to.be.true;
        }).then(function () {
            return Page.eleUserNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.endpointSSES.userid).to.be.true;
        }).then(function () {
            return Page.elePasswordInput.getAttribute("value");
        }).then(function (message) {
            expect(message === browser.params.endpointSSES.password).to.be.true;
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
    // Connection Name: SSESOpsConn00003
    // Host (URL): HiJkLmN:5678
    // User Name: CCCCC
    // Password: ddddd
    // Use TLS Connection: selected
    // Selection List: not selected
    //
    it('Should add a connection, then update it successfully', function () {
        Page.delConnYes("SSESOpsConn00003").then(function () {
            Page.addConn("SSESOpsConn00003", "AbCdEfG:1234", "AAAAA", "bbbbb", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.updateConn("SSESOpsConn00003", "HiJkLmN:5678", "CCCCC", "ddddd", true, false);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'SSESOpsConn00003').to.be.true;
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
    // Connection Name: SSESOpsConn00004
    // Host (URL): AbCdEfG:1234
    // User Name: AAAAA
    // Password: bbbbb
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Should add a connection, cancel the changes, then confirm the cancel operation', function () {
        Page.delConnYes("SSESOpsConn00004").then(function () {
            Page.addConn("SSESOpsConn00004", "AbCdEfG:1234", "AAAAA", "bbbbb", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelConnYes("SSESOpsConn00004", "HiJkLmN:5678", "CCCCC", "ddddd", true, false);
        }).then(function () {
            Page.eleConnectionsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("SSESOpsConn00004");
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
            expect(message === 'SSESOpsConn00004').to.be.true;
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
    // Connection Name: SSESOpsConn00005
    // Host (URL): HiJkLmN:5678
    // User Name: CCCCC
    // Password: ddddd
    // Use TLS Connection: selected
    // Selection List: not selected
    //
    it('Should add a connection, cancel the changes, then discard the cancel operation', function () {
        Page.delConnYes("SSESOpsConn00005").then(function () {
            Page.addConn("SSESOpsConn00005", "AbCdEfG:1234", "AAAAA", "bbbbb", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.cancelConnNo("SSESOpsConn00005", "HiJkLmN:5678", "CCCCC", "ddddd", true, false);
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'SSESOpsConn00005').to.be.true;
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
    // Connection Name: SSESOpsConn00006
    // Host (URL): AbCdEfG:1234
    // User Name: AAAAA
    // Password: bbbbb
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Should add a connection, make some changes, then reset it', function () {
        Page.delConnYes("SSESOpsConn00006").then(function () {
            Page.addConn("SSESOpsConn00006", "AbCdEfG:1234", "AAAAA", "bbbbb", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.resetConn("SSESOpsConn00006", "HiJkLmN:5678", "CCCCC", "ddddd", true, false);
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'SSESOpsConn00006').to.be.true;
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
    // Connection Name: SSESOpsConn00007
    // Host (URL): AbCdEfG:1234
    // User Name: AAAAA
    // Password: bbbbb
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Should add a connection to overwrite a connection, then confirm the overwrite operation', function () {
        Page.delConnYes("SSESOpsConn00007").then(function () {
            Page.addConn("SSESOpsConn00007", "AbCdEfG:1234", "AAAAA", "bbbbb", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConn("SSESOpsConn00007", "HiJkLmN:5678", "CCCCC", "ddddd", true, false);
        }).then(function () {
            globalCommons.waitForClickable(globalPage.eleOKButton);
        }).then(function () {
            globalPage.eleOKButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'SSESOpsConn00007').to.be.true;
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
    // Connection Name: SSESOpsConn00008
    // Host (URL): HiJkLmN:5678
    // User Name: CCCCC
    // Password: ddddd
    // Use TLS Connection: selected
    // Selection List: not selected
    //
    it('Should add a connection to overwrite a connection, then discard the overwrite operation', function () {
        Page.delConnYes("SSESOpsConn00008").then(function () {
            Page.addConn("SSESOpsConn00008", "AbCdEfG:1234", "AAAAA", "bbbbb", false, true);
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.addConn("SSESOpsConn00008", "HiJkLmN:5678", "CCCCC", "ddddd", true, false);
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
            Page.eleSearchInput.clear().sendKeys("SSESOpsConn00008");
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
            expect(message === 'SSESOpsConn00008').to.be.true;
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
        Page.delConnYes("SSESOpsConn00009").then(function () {
            Page.addConn("SSESOpsConn00009");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delConnYes("SSESOpsConn00009");
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("SSESOpsConn00009");
        }).then(function () {
            Page.eleSearchIcon.click();
        }).then(function () {
            return Page.eleConnNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.false;
        });
    });

    // Add a connection, delete it, then discard the delete operation.
    // Connection Name: SSESOpsConn00010
    // Host (URL): defined in conf.js (EndpointSSES.url)
    // User Name: defined in conf.js (EndpointSSES.userid)
    // Password: defined in conf.js (EndpointSSES.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Should add a connection, delete it, then discard the delete operation', function () {
        Page.delConnYes("SSESOpsConn00010").then(function () {
            Page.addConn("SSESOpsConn00010");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo, true, {timeout: 10000});
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            Page.delConnNo("SSESOpsConn00010");
        }).then(function () {
            return Page.eleConnNameSearched.isPresent();
        }).then(function (result) {
            expect(result).to.be.true;
        });
    });

    // Add a available connection, then click 'CHECK' & 'Connect'
    // Connection Name: SSESOpsConn11
    // Host (URL): defined in conf.js (EndpointSSES.url)
    // User Name: defined in conf.js (EndpointSSES.userid)
    // Password: defined in conf.js (EndpointSSES.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Test CHECK & Connect button', function () {
        Page.delConnYes("SSESOpsConn00011").then(function () {
            Page.addConn("SSESOpsConn00011");
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
    // Connection Name: SSESOpsConn00012
    // Host (URL): defined in conf.js (EndpointSSES.url)
    // User Name: defined in conf.js (EndpointSSES.userid)
    // Password: bbbbb
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Test CHECK & Connect button with incorrect password', function () {
        Page.delConnYes("SSESOpsConn00012_Invalid_Password").then(function () {
            Page.addConn("SSESOpsConn00012_Invalid_Password", undefined, undefined, "bbbbb");
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
    // Connection Name: SSESOpsConn00013
    // Host (URL): defined in conf.js (EndpointSSES.url)
    // User Name: AAAAA
    // Password: defined in conf.js (EndpointSSES.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Test CHECK & Connect button with incorrect username', function () {
        Page.delConnYes("SSESOpsConn00013_Invalid_Username").then(function () {
            Page.addConn("SSESOpsConn00013_Invalid_Username", undefined, "AAAAA");
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
    // Connection Name: SSESOpsConn00014
    // Host (URL): AbCdEfG:1234
    // User Name: AAAAA
    // Password: bbbbb
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Test CHECK & Connect button with incorrect host', function () {
        Page.delConnYes("SSESOpsConn00014_Invalid_Host").then(function () {
            Page.addConn("SSESOpsConn00014_Invalid_Host", "AbCdEfG:1234");
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
    // Connection Name: SSESOpsConn00015
    // Host (URL): defined in conf.js (EndpointSSES.url)
    // User Name: defined in conf.js (EndpointSSES.userid)
    // Password: defined in conf.js (EndpointSSES.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Test Audit button', function () {
        Page.delConnYes("SSESOpsConn00015").then(function () {
            Page.addConn("SSESOpsConn00015");
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

    // Click 'Real Time' without a connection.
    // Expect warning message pop-up.
    //
    it('Click Real Time without a connection', function () {
        globalCommons.waitForElementPresent(Page.eleScreenElement).then(function () {
            Page.eleRealtimeLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningDialog);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === 'A connection is required before using the function').to.be.true;
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            Page.eleEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningDialog);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === 'A connection is required before using the function').to.be.true;
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            Page.eleRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningDialog);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === 'A connection is required before using the function').to.be.true;
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            Page.eleCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningDialog);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === 'A connection is required before using the function').to.be.true;
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            Page.eleRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(globalPage.eleWarningDialog);
        }).then(function () {
            return globalPage.eleWarningInfo.getText();
        }).then(function (message) {
            expect(message === 'A connection is required before using the function').to.be.true;
        }).then(function () {
            globalPage.eleWarningClose.click();
        }).then(function () {
            Page.eleImsLeftmenu.click();
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

    // Add a available connection, click ‘Connect', then click the left menu: Real Time, EMS, RV, CICS, RED, IMS.
    // Connection Name: SSESOpsConn00016
    // Host (URL): defined in conf.js (EndpointSSES.url)
    // User Name: defined in conf.js (EndpointSSES.userid)
    // Password: defined in conf.js (EndpointSSES.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    //
    it('Click Real Time menus with an available connection', function () {
        Page.delConnYes("SSESOpsConn00016").then(function () {
            Page.addConn("SSESOpsConn00016");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            globalCommons.waitForClickable(Page.eleSaveInfoClose);
        }).then(function () {
            Page.eleSaveInfoClose.click();
        }).then(function () {
            globalCommons.waitForClickable(Page.eleConnectButton);
        }).then(function () {
            Page.eleConnectButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleMsgInfo);
        }).then(function () {
            return Page.eleMsgInfo.getAttribute('title');
        }).then(function (message) {
            expect(message === 'Connected successfully').to.be.true;
        }).then(function () {
            globalCommons.waitForClickable(Page.eleRealtimeLeftmenu);
        }).then(function () {
            Page.eleRealtimeLeftmenu.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleOutputConnName);
        }).then(function () {
            return Page.eleOutputConnName.getText();
        }).then(function (message) {
            expect(message === 'SSESOpsConn00016').to.be.true;
        }).then(function () {
            Page.eleEmsLeftmenu.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleOutputConnName);
        }).then(function () {
            return Page.eleOutputConnName.getText();
        }).then(function (message) {
            expect(message === 'SSESOpsConn00016').to.be.true;
        }).then(function () {
            Page.eleRvLeftmenu.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleOutputConnName);
        }).then(function () {
            return Page.eleOutputConnName.getText();
        }).then(function (message) {
            expect(message === 'SSESOpsConn00016').to.be.true;
        }).then(function () {
            Page.eleCicsLeftmenu.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleOutputConnName);
        }).then(function () {
            return Page.eleOutputConnName.getText();
        }).then(function (message) {
            expect(message === 'SSESOpsConn00016').to.be.true;
        }).then(function () {
            Page.eleRedLeftmenu.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleOutputConnName);
        }).then(function () {
            return Page.eleOutputConnName.getText();
        }).then(function (message) {
            expect(message === 'SSESOpsConn00016').to.be.true;
        }).then(function () {
            Page.eleImsLeftmenu.click();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleOutputConnName);
        }).then(function () {
            return Page.eleOutputConnName.getText();
        }).then(function (message) {
            expect(message === 'SSESOpsConn00016').to.be.true;
        });
    });


    // Add an available connection, then submit 'Display' commands.
    // Connection Name: SSESOpsConn00017
    // Host (URL): defined in conf.js (EndpointSSES.url)
    // User Name: defined in conf.js (EndpointSSES.userid)
    // Password: defined in conf.js (EndpointSSES.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    // Related jiras: ZWUI-963(fixed)
    it('Submit Display commands with an available connection', function () {
        var backspaceSeries = Array(40).join(protractor.Key.BACK_SPACE);
        var projectPath = process.cwd();
        Page.delConnYes("SSESOpsConn00017").then(function () {
            Page.addConn("SSESOpsConn00017");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.eleConnectionsLeftmenu.click()
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("SSESOpsConn00017");
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
            Page.eleConsoleLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandInput);
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
            var filePath = projectPath + "/testData/ssesCommandOutput/display/help.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,CONN");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpConn.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,CONNECT");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpConnect.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,DISABLE");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpDisable.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,DISCONN");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpDisconn.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,DISCONNECT");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpDisconnect.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,ENABLE");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpEnable.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,HELP");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpHelp.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SHOW");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpShow.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SHOW,ACTIVE");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpShowActive.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SHOW,CICS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpShowCics.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SHOW,DISA");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpShowDisa.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SHOW,DISABLED");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpShowDisabled.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SHOW,EMS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpShowEms.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SHOW,IMS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpShowIms.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SHOW,RED");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpShowRed.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SHOW,RV");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpShowRv.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,RECOVER");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpRecover.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,REFR");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpRefr.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,REFRESH");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpRefresh.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SET");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpSet.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SET,CICS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpSetCics.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SET,IMS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpSetIms.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SET,RED");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpSetRed.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SHUT");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpShut.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SUSPEND");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpSuspend.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,SWITCH");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpSwitch.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,TERM");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpTerm.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,UNL");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpUnl.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("HELP,UNLOAD");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var filePath = projectPath + "/testData/ssesCommandOutput/display/helpUnload.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,SYS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2].substr(0, 39);
            var msgLine04 = message.split("\n")[3].substr(0, 39);
            var msgLine05 = message.split("\n")[4].substr(0, 39);
            var msgLine06 = message.split("\n")[5].substr(0, 39);
            var msgLine07 = message.split("\n")[6].substr(0, 39);
            var msgLine08 = message.split("\n")[7].substr(0, 39);
            var msgLine09 = message.split("\n")[8].substr(0, 39);
            var msgLine10 = message.split("\n")[9].substr(0, 39);
            var msgLine11 = message.split("\n")[10].substr(0, 39);
            var msgLine12 = message.split("\n")[11].substr(0, 39);
            var msgLine13 = message.split("\n")[12].substr(0, 39);
            var msgLine14 = message.split("\n")[13].substr(0, 39);
            var msgLine15 = message.split("\n")[14].substr(0, 39);
            var msgLine16 = message.split("\n")[15].substr(0, 39);
            var msgLine17 = message.split("\n")[16];
            var msgData = msgLine02 + msgLine03 + msgLine04 + msgLine05 + msgLine06 + msgLine07 + msgLine08 + msgLine09 + msgLine10 + msgLine11 + msgLine12 + msgLine13 + msgLine14 + msgLine15 + msgLine16 + msgLine17;
            var filePath = projectPath + "/testData/ssesCommandOutput/display/showSys.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                var bufLine01 = buffer.split("\n")[0];
                var bufLine02 = buffer.split("\n")[1].substr(0, 39);
                var bufLine03 = buffer.split("\n")[2].substr(0, 39);
                var bufLine04 = buffer.split("\n")[3].substr(0, 39);
                var bufLine05 = buffer.split("\n")[4].substr(0, 39);
                var bufLine06 = buffer.split("\n")[5].substr(0, 39);
                var bufLine07 = buffer.split("\n")[6].substr(0, 39);
                var bufLine08 = buffer.split("\n")[7].substr(0, 39);
                var bufLine09 = buffer.split("\n")[8].substr(0, 39);
                var bufLine10 = buffer.split("\n")[9].substr(0, 39);
                var bufLine11 = buffer.split("\n")[10].substr(0, 39);
                var bufLine12 = buffer.split("\n")[11].substr(0, 39);
                var bufLine13 = buffer.split("\n")[12].substr(0, 39);
                var bufLine14 = buffer.split("\n")[13].substr(0, 39);
                var bufLine15 = buffer.split("\n")[14].substr(0, 39);
                var bufLine16 = buffer.split("\n")[15];
                var bufData = bufLine01 + bufLine02 + bufLine03 + bufLine04 + bufLine05 + bufLine06 + bufLine07 + bufLine08 + bufLine09 + bufLine10 + bufLine11 + bufLine12 + bufLine13 + bufLine14 + bufLine15 + bufLine16;
                expect(bufData === msgData).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,SYS,LOCK");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2].substr(0, 39);
            var msgLine04 = message.split("\n")[3].substr(0, 39);
            var msgLine05 = message.split("\n")[4].substr(0, 39);
            var msgLine06 = message.split("\n")[5].substr(0, 39);
            var msgLine07 = message.split("\n")[6].substr(0, 39);
            var msgLine08 = message.split("\n")[7].substr(0, 39);
            var msgLine09 = message.split("\n")[8].substr(0, 39);
            var msgLine10 = message.split("\n")[9].substr(0, 39);
            var msgLine11 = message.split("\n")[10].substr(0, 39);
            var msgLine12 = message.split("\n")[11].substr(0, 39);
            var msgLine13 = message.split("\n")[12].substr(0, 39);
            var msgLine14 = message.split("\n")[13].substr(0, 39);
            var msgLine15 = message.split("\n")[14].substr(0, 39);
            var msgLine16 = message.split("\n")[15].substr(0, 39);
            var msgLine17 = message.split("\n")[16];
            var msgData = msgLine02 + msgLine03 + msgLine04 + msgLine05 + msgLine06 + msgLine07 + msgLine08 + msgLine09 + msgLine10 + msgLine11 + msgLine12 + msgLine13 + msgLine14 + msgLine15 + msgLine16 + msgLine17;
            var filePath = projectPath + "/testData/ssesCommandOutput/display/showSys.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                var bufLine01 = buffer.split("\n")[0];
                var bufLine02 = buffer.split("\n")[1].substr(0, 39);
                var bufLine03 = buffer.split("\n")[2].substr(0, 39);
                var bufLine04 = buffer.split("\n")[3].substr(0, 39);
                var bufLine05 = buffer.split("\n")[4].substr(0, 39);
                var bufLine06 = buffer.split("\n")[5].substr(0, 39);
                var bufLine07 = buffer.split("\n")[6].substr(0, 39);
                var bufLine08 = buffer.split("\n")[7].substr(0, 39);
                var bufLine09 = buffer.split("\n")[8].substr(0, 39);
                var bufLine10 = buffer.split("\n")[9].substr(0, 39);
                var bufLine11 = buffer.split("\n")[10].substr(0, 39);
                var bufLine12 = buffer.split("\n")[11].substr(0, 39);
                var bufLine13 = buffer.split("\n")[12].substr(0, 39);
                var bufLine14 = buffer.split("\n")[13].substr(0, 39);
                var bufLine15 = buffer.split("\n")[14].substr(0, 39);
                var bufLine16 = buffer.split("\n")[15];
                var bufData = bufLine01 + bufLine02 + bufLine03 + bufLine04 + bufLine05 + bufLine06 + bufLine07 + bufLine08 + bufLine09 + bufLine10 + bufLine11 + bufLine12 + bufLine13 + bufLine14 + bufLine15 + bufLine16;
                expect(bufData === msgData).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,SYS,DEBUG");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2].substr(0, 39);
            var msgLine04 = message.split("\n")[3].substr(0, 39);
            var msgLine05 = message.split("\n")[4].substr(0, 39);
            var msgLine06 = message.split("\n")[5].substr(0, 39);
            var msgLine07 = message.split("\n")[6].substr(0, 39);
            var msgLine08 = message.split("\n")[7].substr(0, 39);
            var msgLine09 = message.split("\n")[8].substr(0, 39);
            var msgLine10 = message.split("\n")[9].substr(0, 39);
            var msgLine11 = message.split("\n")[10].substr(0, 39);
            var msgLine12 = message.split("\n")[11].substr(0, 39);
            var msgLine13 = message.split("\n")[12].substr(0, 39);
            var msgLine14 = message.split("\n")[13].substr(0, 39);
            var msgLine15 = message.split("\n")[14].substr(0, 39);
            var msgLine16 = message.split("\n")[15].substr(0, 39);
            var msgLine17 = message.split("\n")[16];
            var msgData = msgLine02 + msgLine03 + msgLine04 + msgLine05 + msgLine06 + msgLine07 + msgLine08 + msgLine09 + msgLine10 + msgLine11 + msgLine12 + msgLine13 + msgLine14 + msgLine15 + msgLine16 + msgLine17;
            var filePath = projectPath + "/testData/ssesCommandOutput/display/showSys.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                var bufLine01 = buffer.split("\n")[0];
                var bufLine02 = buffer.split("\n")[1].substr(0, 39);
                var bufLine03 = buffer.split("\n")[2].substr(0, 39);
                var bufLine04 = buffer.split("\n")[3].substr(0, 39);
                var bufLine05 = buffer.split("\n")[4].substr(0, 39);
                var bufLine06 = buffer.split("\n")[5].substr(0, 39);
                var bufLine07 = buffer.split("\n")[6].substr(0, 39);
                var bufLine08 = buffer.split("\n")[7].substr(0, 39);
                var bufLine09 = buffer.split("\n")[8].substr(0, 39);
                var bufLine10 = buffer.split("\n")[9].substr(0, 39);
                var bufLine11 = buffer.split("\n")[10].substr(0, 39);
                var bufLine12 = buffer.split("\n")[11].substr(0, 39);
                var bufLine13 = buffer.split("\n")[12].substr(0, 39);
                var bufLine14 = buffer.split("\n")[13].substr(0, 39);
                var bufLine15 = buffer.split("\n")[14].substr(0, 39);
                var bufLine16 = buffer.split("\n")[15];
                var bufData = bufLine01 + bufLine02 + bufLine03 + bufLine04 + bufLine05 + bufLine06 + bufLine07 + bufLine08 + bufLine09 + bufLine10 + bufLine11 + bufLine12 + bufLine13 + bufLine14 + bufLine15 + bufLine16;
                expect(bufData === msgData).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,ACTIVE,LISTENERS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02.includes("The following listeners are active:")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,ACT,LSNS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02.includes("The following listeners are active:")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,ACTIVE,RECIPE");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02.includes("The following recipes are active:")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,ACT,RID");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02.includes("The following recipes are active:")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,ACTIVE,TRIGGER");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02.includes("The following triggers are active")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,ACT,TID");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02.includes("The following triggers are active")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,COUNTERS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02 === "SXS0950I Substation ES Interface Information").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,DISABLED");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02.includes("The following recipes/triggers are Disabled")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,DISA");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02.includes("The following recipes/triggers are Disabled")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,INTF");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02 === "SXS0950I Substation ES Interface Information").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,INTF,CONN");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02 === "SXS0950I Substation ES Interface Information").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,IID");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02 === "SXS0950I Substation ES Interface Information").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,IID,CONN");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02 === "SXS0950I Substation ES Interface Information").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,TPORT");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02.includes("SXT5669I IId:")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,ESB");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02.includes("SXT5669I IId:")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,UOW");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2].substr(0, 39);
            var msgLine04 = message.split("\n")[3].substr(0, 39);
            var msgLine05 = message.split("\n")[4].substr(0, 39);
            var msgLine06 = message.split("\n")[5].substr(0, 39);
            var msgLine07 = message.split("\n")[6].substr(0, 39);
            var msgLine08 = message.split("\n")[7].substr(0, 39);
            var msgLine09 = message.split("\n")[8].substr(0, 39);
            var msgLine10 = message.split("\n")[9].substr(0, 39);
            var msgLine11 = message.split("\n")[10].substr(0, 39);
            var msgLine12 = message.split("\n")[11].substr(0, 39);
            var msgLine13 = message.split("\n")[12].substr(0, 39);
            var msgLine14 = message.split("\n")[13].substr(0, 39);
            var msgLine15 = message.split("\n")[14].substr(0, 39);
            var msgLine16 = message.split("\n")[15].substr(0, 39);
            var msgLine17 = message.split("\n")[16];
            var msgLine18 = message.split("\n")[17];
            var msgData = msgLine02 + msgLine03 + msgLine04 + msgLine05 + msgLine06 + msgLine07 + msgLine08 + msgLine09 + msgLine10 + msgLine11 + msgLine12 + msgLine13 + msgLine14 + msgLine15 + msgLine16 + msgLine17 + msgLine18;
            var filePath = projectPath + "/testData/ssesCommandOutput/display/showUow.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                var bufLine01 = buffer.split("\n")[0];
                var bufLine02 = buffer.split("\n")[1].substr(0, 39);
                var bufLine03 = buffer.split("\n")[2].substr(0, 39);
                var bufLine04 = buffer.split("\n")[3].substr(0, 39);
                var bufLine05 = buffer.split("\n")[4].substr(0, 39);
                var bufLine06 = buffer.split("\n")[5].substr(0, 39);
                var bufLine07 = buffer.split("\n")[6].substr(0, 39);
                var bufLine08 = buffer.split("\n")[7].substr(0, 39);
                var bufLine09 = buffer.split("\n")[8].substr(0, 39);
                var bufLine10 = buffer.split("\n")[9].substr(0, 39);
                var bufLine11 = buffer.split("\n")[10].substr(0, 39);
                var bufLine12 = buffer.split("\n")[11].substr(0, 39);
                var bufLine13 = buffer.split("\n")[12].substr(0, 39);
                var bufLine14 = buffer.split("\n")[13].substr(0, 39);
                var bufLine15 = buffer.split("\n")[14].substr(0, 39);
                var bufLine16 = buffer.split("\n")[15];
                var bufLine17 = buffer.split("\n")[16];
                var bufData = bufLine01 + bufLine02 + bufLine03 + bufLine04 + bufLine05 + bufLine06 + bufLine07 + bufLine08 + bufLine09 + bufLine10 + bufLine11 + bufLine12 + bufLine13 + bufLine14 + bufLine15 + bufLine16 + bufLine17;
                expect(bufData === msgData).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,SSID");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02.includes("Substation ES ID:")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,SSHOT");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var filePath = projectPath + "/testData/ssesCommandOutput/display/showSshot.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === msgLine02).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,SSHOT,DETAIL");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var filePath = projectPath + "/testData/ssesCommandOutput/display/showSshot.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === msgLine02).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,SSHOT,ENTRY");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var filePath = projectPath + "/testData/ssesCommandOutput/display/showSshot.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === msgLine02).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,SUSPENDED");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02.includes("SXT5594I IId:") || msgLine02.includes("SXT5595I IId:")).to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,LOGSTATS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02 === "SXS0880I -  LTA:LOG Disk File statistics request" || msgLine02 === "SXG1815E LTA Admin call <ROUTE> Failed with RC:8").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,TRCSTATS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02 === "SXS0880I -  LTA:TRACE Disk File statistics request" || msgLine02 === "SXG1815E LTA Admin call <ROUTE> Failed with RC:8").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SHOW,LTAVERS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            expect(msgLine02.includes("SXG1821I LTA Version:")).to.be.true;
        });
    });

    // Add an available connection, then submit 'Update' commands.
    // Connection Name: SSESOpsConn00018
    // Host (URL): defined in conf.js (EndpointSSES.url)
    // User Name: defined in conf.js (EndpointSSES.userid)
    // Password: defined in conf.js (EndpointSSES.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    it('Submit Update commands with an available connection', function () {
        var backspaceSeries = Array(40).join(protractor.Key.BACK_SPACE);
        var projectPath = process.cwd();
        Page.delConnYes("SSESOpsConn00018").then(function () {
            Page.addConn("SSESOpsConn00018");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.eleConnectionsLeftmenu.click()
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("SSESOpsConn00018");
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
            Page.eleConsoleLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandInput);
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("REFRESH,COUNTERS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var filePath = projectPath + "/testData/ssesCommandOutput/update/refreshCounters.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("REFR,COUNTERS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var filePath = projectPath + "/testData/ssesCommandOutput/update/refreshCounters.txt";
            var dataStr = message.split("\n").slice(1).join("\n");
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        });
    });

    // Add an available connection, then submit 'Initialization' commands.
    // Connection Name: SSESOpsConn0019
    // Host (URL): defined in conf.js (EndpointSSES.url)
    // User Name: defined in conf.js (EndpointSSES.userid)
    // Password: defined in conf.js (EndpointSSES.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    it('Submit Initialization commands with an available connection', function () {
        var backspaceSeries = Array(40).join(protractor.Key.BACK_SPACE);
        var projectPath = process.cwd();
        Page.delConnYes("SSESOpsConn00019").then(function () {
            Page.addConn("SSESOpsConn00019");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.eleConnectionsLeftmenu.click()
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("SSESOpsConn00019");
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
            Page.eleConsoleLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandInput);
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("DISCONN,ESB=EMS-SERVER,INTF=ESB01");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/initialization/disconnEsb.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("DISCONN,INTF=CICS01");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/initialization/disconnIntf.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("DISCONN,APPLID=C412YW1G");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/initialization/disconnApplid.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("CONN,ESB=EMS-SERVER,INTF=ESB01");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/initialization/connEsb.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("CONN,INTF=CICS01");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/initialization/connIntf.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("CONN,APPLID=C412YW1G");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/initialization/connApplid.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        });
    });

    // Add an available connection, then submit 'Control' commands.
    // Connection Name: SSESOpsConn00020
    // Host (URL): defined in conf.js (EndpointSSES.url)
    // User Name: defined in conf.js (EndpointSSES.userid)
    // Password: defined in conf.js (EndpointSSES.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    it('Submit Control commands with an available connection', function () {
        var backspaceSeries = Array(40).join(protractor.Key.BACK_SPACE);
        var projectPath = process.cwd();
        Page.delConnYes("SSESOpsConn00020").then(function () {
            Page.addConn("SSESOpsConn00020");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.eleConnectionsLeftmenu.click()
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("SSESOpsConn00020");
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
            Page.eleConsoleLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandInput);
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,CICS,TRCLVL-HVS=3");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setCicsTrclvlHvs.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,CICS,TRCLVL-TRIG=3");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setCicsTrclvlTrig.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,IMS,BUFFER-PURGE");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setImsBufferPurge.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,IMS,TRCLVL-TRIG=3");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setImsTrclvlTrig.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,IMS,REL-TRANK,SXITRNAK");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setImsRelTrankSxitrnak.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,IMS,REL-TRANK,DFS$$TOQ");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setImsRelTrankDfs$$toq.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,IMS,HOLD-TRIG");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setImsHoldTrig.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,IMS,FREE-TRIG");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setImsFreeTrig.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,RED,ABEND-RESET=2");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setRedAbendReset.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,RED,TRCLVL-AMSG=2");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setRedTrclvlAmsg.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,RED,TRCLVL-SSRED=2");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setRedTrclvlSSRed.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,RED,TRCLVL-CICS=2");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setRedTrclvlCics.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,RED,TRCLVL-#RED=2");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setRedTrclvl#Red.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,RED,TRCLVL-TRG=2");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setRedTrclvlTrg.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,RED,TRCLVL-VIEW=2");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setRedTrclvlView.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,LOGDEST=P");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setLogdestP.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,LOGDEST=D");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setLogdestD.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,LOGLVL=3");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setLoglvl.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,LOGFWRITE=10");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setLogfwrite.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,TRC-ENTRY=CONFIG,DETAIL");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setTrcEntry.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,TRCDEST=P");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setTrcdestP.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,TRCDEST=D");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setTrcdestD.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,TRCLVL=3");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setTrclvl.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,TRCLVL=3,OTMA");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setTrclvlOtma.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,TRCLVL=3,OPS");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setTrclvlOps.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,TRCLVL=3,RR");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setTrclvlRr.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SET,TRCFWRITE=10");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/setTrcfwrite.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
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
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/shut.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SWITCH,LOGFILE");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/switchLogfile.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("SWITCH,TRCFILE");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/switchTrcfile.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("TERM");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var dataStr = message.split("\n").slice(1).join("\n");
            var filePath = projectPath + "/testData/ssesCommandOutput/control/term.txt";
            var readTextFile = require('fs');
            readTextFile.readFile(filePath, "utf8", function (err, buffer) {
                expect(buffer === dataStr).to.be.true;
            });
        });
    });

    // Add an available connection, then submit invalid commands.
    // Connection Name: SSESOpsConn00021
    // Host (URL): defined in conf.js (EndpointSSES.url)
    // User Name: defined in conf.js (EndpointSSES.userid)
    // Password: defined in conf.js (EndpointSSES.password)
    // Use TLS Connection: not selected
    // Selection List: selected
    it('Submit invalid commands with an available connection', function () {
        var backspaceSeries = Array(40).join(protractor.Key.BACK_SPACE);
        var projectPath = process.cwd();
        Page.delConnYes("SSESOpsConn00021").then(function () {
            Page.addConn("SSESOpsConn00021");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            Page.eleConnectionsLeftmenu.click()
        }).then(function () {
            globalCommons.waitForDisplayed(Page.eleSearchInput);
        }).then(function () {
            Page.eleSearchInput.clear().sendKeys("SSESOpsConn00021");
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
            Page.eleConsoleLeftmenu.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandInput);
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
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'AAA'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
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
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'BBB'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
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
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'CCC'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
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
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'DDD'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("EEE");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'EEE'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("FFF");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'FFF'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("GGG");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'GGG'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("hhh");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'HHH'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("iii");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'III'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("jjj");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'JJJ'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("kkk");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'KKK'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("lll");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'LLL'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("mmm");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'MMM'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
        }).then(function () {
            Page.eleCommandInput.sendKeys(backspaceSeries);
        }).then(function () {
            Page.eleCommandInput.clear().sendKeys("nnn");
        }).then(function () {
            Page.eleCommandSubmit.click();
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleCommandOutput);
        }).then(function () {
            return Page.eleCommandOutput.getText();
        }).then(function (message) {
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied 'NNN'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
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
            var msgLine02 = message.split("\n")[1];
            var msgLine03 = message.split("\n")[2];
            expect(msgLine02 === "SXA2610E Invalid Keyword supplied '111111111122222222223333333333444444444455555555556666666666777777777788888888889999999999000000000011111111112222222222'").to.be.true;
            expect(msgLine03 === "SXA2666I End-of-Command ").to.be.true;
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
            globalCommons.waitForElementPresent(Page.eleDetailHeader);
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
        Page.delConnYes("SSESOpsConn00022_@#$_333333333444444444").then(function () {
            Page.addConn("SSESOpsConn00022_@#$_333333333444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'SSESOpsConn00022_@#$_333333333444444444').to.be.true;
        }).then(function () {
            Page.delConnYes("SSESOpsConn00023_@#$_333333333444444444");
        }).then(function () {
            Page.addConn("SSESOpsConn00023_@#$_3333333334444444444");
        }).then(function () {
            globalCommons.waitForElementPresent(Page.eleSaveInfo);
        }).then(function () {
            return Page.eleSaveInfo.getText();
        }).then(function (message) {
            expect(message === 'Saved successfully.').to.be.true;
        }).then(function () {
            return Page.eleConnNameInput.getAttribute("value");
        }).then(function (message) {
            expect(message === 'SSESOpsConn00023_@#$_333333333444444444').to.be.true;
        });
    });

    // Test field 'Connection Details panel' -> 'Host(URL)'
    //
    it('Test field "Host(URL)"', function () {
        Page.delConnYes("SSESOpsConn00024").then(function () {
            Page.addConn("SSESOpsConn00024", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????11111111112222222222333333333344444444445555555555111111111122222222223333333333444444444455555555551111");
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
            Page.delConnYes("SSESOpsConn00025");
        }).then(function () {
            Page.addConn("SSESOpsConn00025", "AAAAAAAAAABBBBBBBBBBCCCCCCCCCCDDDDDDDDDDEEEEEEEEEEaaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeee@@@@@@@@@@##########$$$$$$$$$$&&&&&&&&&&??????????111111111122222222223333333333444444444455555555551111111111222222222233333333334444444444555555555511111");
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
        Page.delConnYes("SSESOpsConn00026").then(function () {
            Page.addConn("SSESOpsConn00026", undefined, "@#$%&/!^");
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
            Page.delConnYes("SSESOpsConn00027");
        }).then(function () {
            Page.addConn("SSESOpsConn00027", undefined, "AbC4Ef7hIj");
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
        Page.delConnYes("SSESOpsConn00028").then(function () {
            Page.addConn("SSESOpsConn00028", undefined, undefined, "!@#$%^&*()<>?/a1");
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
            Page.delConnYes("SSESOpsConn00029");
        }).then(function () {
            Page.addConn("SSESOpsConn00029", undefined, undefined, "QWERTasdfg1234567");
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