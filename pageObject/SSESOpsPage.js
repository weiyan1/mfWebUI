/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var Page = require('../utility/page.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var SSESOpsPage = (function () {
    var globalPage = new GlobalPage();

    function SSESOpsPage() {
        this.eleScreenElement = element(by.id('gwt-debug-treeItemConnection-content'));
        //Left Menu
        this.eleConnectionsLeftmenu = element(by.id('gwt-debug-treeItemConnection-content'));
        this.eleConsoleLeftmenu = element(by.xpath('//div[text()="Console"]'));
        this.eleRealtimeLeftmenu = element(by.xpath('//div[text()="Real Time"]'));
        this.eleEmsLeftmenu = element(by.xpath('//div[text()="EMS"]'));
        this.eleRvLeftmenu = element(by.xpath('//div[text()="RV"]'));
        this.eleCicsLeftmenu = element(by.xpath('//div[text()="CICS"]'));
        this.eleRedLeftmenu = element(by.xpath('//div[text()="RED"]'));
        this.eleImsLeftmenu = element(by.xpath('//div[text()="IMS"]'));
        //Connections List
        this.eleAddButton = element(by.xpath('//button[text()="Add"]'));
        this.eleDeleteButton = element(by.xpath('//button[text()="Delete"]'));
        this.eleConnectButton = element(by.xpath('//button[text()="Connect"]'));
        this.eleAuditButton = element(by.xpath('//button[text()="Audit"]'));
        this.eleSearchInput = element(by.css('.GCOBQG-CLM'));
        this.eleSearchIcon = element(by.css('.GCOBQG-CKM'));
        this.eleConnNameSearched = element(by.css('.GCOBQG-CJO'));
        this.eleMsgInfo = element(by.css('.g__msg_message'));
        this.eleMsgInfoClose = element(by.css('g__msg_close'));
        //this.eleModifiedOnHeader = element(by.xpath('//table[contains(@class,'cell-table-header-nowrap')]/thead/tr/th[text()='Modified On']'));
        //this.eleModifiedOnHeader = element(by.xpath('//table[contains(@class,'cell-table-header-nowrap')]/thead/tr/th[contains(text(),'Modified On')]'));
        this.eleTableHeader4 = element(by.css('.cell-table-header-nowrap thead th:nth-child(4)'));
        //Connection Details
        this.eleDetailSlideBar = element(by.css('.slide-bar'));
        this.eleDetailHeader = element(by.css('.detailHeader'));
        this.eleConnNameInput = element(by.css('#gwt-debug-connectionName input'));
        this.eleSsEndpointInput = element(by.css('#gwt-debug-substationEndpoint input'));
        this.eleSsEndpointPickButton = element(by.css('.pick-list-text-box-button'));
        this.eleHostInput = element(by.css('#gwt-debug-host input'));
        this.eleHostCheckButton = element(by.css('#gwt-debug-host input'));
        this.eleUserNameInput = element(by.css('#gwt-debug-userName input'));
        this.elePasswordInput = element(by.css('#gwt-debug-password input'));
        this.eleTLSConnectionCheck = element(by.xpath('//label[text()="Use TLS Connection"]/..//input'));
        this.eleSelectionListCheck = element(by.xpath('//label[text()="Selection List"]/..//input'));

        this.eleCheckButton = element(by.css('.GCOBQG-CLY'));
        this.eleSaveButton = element(by.xpath('//button[text()="Save"]'));
        this.eleReplicateButton = element(by.xpath('//button[text()="Replicate"]'));
        this.eleCancelButton = element(by.xpath('//button[text()="Cancel"]'));
        this.eleResetButton = element(by.xpath('//button[text()="Reset"]'));
        this.eleSaveInfo = element(by.css('.form-info-content'));
        this.eleSaveInfoClose = element(by.css('.form-info-close'));

        this.eleCommandInput = element(by.css('.manageConsole-dropdownListBox'));
        this.eleCommandSubmit = element(by.css('.inputPanelsearch'));
        this.eleCommandOutput = element(by.css('.gwt-HTML'));
        this.eleCommandError = element(by.css('.message-error'));
        this.eleOutputConnName = element(by.css('.GCOBQG-CPQ'));
        this.eleIntfTotalNum = element(by.css('.GCOBQG-CD-'));
    };

    SSESOpsPage.prototype = new Page();
    SSESOpsPage.prototype.constructor = SSESOpsPage;

    /**
     * This function is used for set 'Use TLS Connection'
     * false: not selected
     * true: selected
     */
    SSESOpsPage.prototype._tls = function (tls) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleTLSConnectionCheck).then(function () {
            return that.eleTLSConnectionCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (tls) {
                    that.eleTLSConnectionCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (tls) {
                    deferred.fulfill();
                } else {
                    that.eleTLSConnectionCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    /**
     * This function is used for set 'Selection List'
     * false: not selected
     * true: selected
     */
    SSESOpsPage.prototype._selectionlist = function (selectionlist) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleSelectionListCheck).then(function () {
            return that.eleSelectionListCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (selectionlist) {
                    that.eleSelectionListCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (selectionlist) {
                    deferred.fulfill();
                } else {
                    that.eleSelectionListCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    /**
     * The function is used for add a connection.
     *
     */
    SSESOpsPage.prototype.addConn = function (connname, host, username, password, tls, selectionlist) {
        var deferred = protractor.promise.defer(), that = this;
        host = host || browser.params.endpointSSES.url;
        username = username || browser.params.endpointSSES.userid;
        password = password || browser.params.endpointSSES.password;
        selectionlist = selectionlist === undefined ? "true" : selectionlist;

        globalCommons.waitForElementPresent(that.eleScreenElement, true, {timeout: 10000}).then(function () {
            globalCommons.waitForClickable(that.eleConnectionsLeftmenu);
        }).then(function () {
            that.eleConnectionsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnNameInput);
        }).then(function () {
            that.eleConnNameInput.clear().sendKeys(connname);
        }).then(function () {
            that.eleHostInput.clear().sendKeys(host);
        }).then(function () {
            that.eleUserNameInput.clear().sendKeys(username);
        }).then(function () {
            that.elePasswordInput.clear().sendKeys(password);
        }).then(function () {
            that._tls(tls);
        }).then(function () {
            that._selectionlist(selectionlist);
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
     * The function is used for add a connection (The TCP connection parameter values come from Substation Endpoint).
     *
     */
    SSESOpsPage.prototype.addConn2 = function (connname, ssEndpoint, selectionlist) {
        var deferred = protractor.promise.defer(), that = this;
        selectionlist = selectionlist === undefined ? "true" : selectionlist;

        globalCommons.waitForElementPresent(that.eleScreenElement, true, {timeout: 10000}).then(function () {
            globalCommons.waitForClickable(that.eleConnectionsLeftmenu);
        }).then(function () {
            that.eleConnectionsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnNameInput);
        }).then(function () {
            that.eleConnNameInput.clear().sendKeys(connname);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSsEndpointPickButton);
        }).then(function () {
            that.eleSsEndpointPickButton.click();
        }).then(function () {
            globalPage.entitySelect(ssEndpoint);
        }).then(function () {
            that._selectionlist(selectionlist);
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
     * The function is used for delete a connection, then confirm the delete operation.
     *
     */
    SSESOpsPage.prototype.delConnYes = function (connname) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(this.eleScreenElement, true, {timeout: 10000}).then(function () {
            globalCommons.waitForClickable(that.eleConnectionsLeftmenu);
        }).then(function () {
            that.eleConnectionsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(connname);
        }).then(function () {
            that.eleSearchIcon.click();
            // }).then(function(){
            //   browser.sleep(1000);
        }).then(function () {
            return that.eleConnNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleConnNameSearched.click().then(function () {
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
     * The function is used for delete a connection, then discard the delete operation.
     *
     */
    SSESOpsPage.prototype.delConnNo = function (connname) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(this.eleScreenElement, true, {timeout: 10000}).then(function () {
            globalCommons.waitForClickable(that.eleConnectionsLeftmenu);
        }).then(function () {
            that.eleConnectionsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(connname);
        }).then(function () {
            that.eleSearchIcon.click();
            // }).then(function(){
            //   browser.sleep(1000);
        }).then(function () {
            return that.eleConnNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleConnNameSearched.click().then(function () {
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
     * The function is used for replicate a connection.
     *
     */
    SSESOpsPage.prototype.replicateConn = function (connname) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement, true, {timeout: 10000}).then(function () {
            globalCommons.waitForClickable(that.eleConnectionsLeftmenu);
        }).then(function () {
            that.eleConnectionsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(connname);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleConnNameSearched);
        }).then(function () {
            that.eleConnNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleReplicateButton);
            // }).then(function(){
            //   browser.sleep(500);
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
    /**
     * The function is used for update a connection.
     *
     */
    SSESOpsPage.prototype.updateConn = function (connname, host, username, password, tls, selectionlist) {
        var deferred = protractor.promise.defer(), that = this;
        host = host || browser.params.endpointSSES.url;
        username = username || browser.params.endpointSSES.userid;
        password = password || browser.params.endpointSSES.password;
        selectionlist = selectionlist === undefined ? "true" : selectionlist;

        globalCommons.waitForElementPresent(this.eleScreenElement, true, {timeout: 10000}).then(function () {
            globalCommons.waitForClickable(that.eleConnectionsLeftmenu);
        }).then(function () {
            that.eleConnectionsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(connname);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleConnNameSearched);
        }).then(function () {
            that.eleConnNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnNameInput);
        }).then(function () {
            that.eleConnNameInput.clear().sendKeys(connname);
        }).then(function () {
            that.eleHostInput.clear().sendKeys(host);
        }).then(function () {
            that.eleUserNameInput.clear().sendKeys(username);
        }).then(function () {
            that.elePasswordInput.clear().sendKeys(password);
        }).then(function () {
            that._tls(tls);
        }).then(function () {
            that._selectionlist(selectionlist);
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
     * The function is used for cancel the changes of a connection, then comfirm the cancel operation.
     *
     */
    SSESOpsPage.prototype.cancelConnYes = function (connname, host, username, password, tls, selectionlist) {
        var deferred = protractor.promise.defer(), that = this;
        host = host || browser.params.endpointSSES.url;
        username = username || browser.params.endpointSSES.userid;
        password = password || browser.params.endpointSSES.password;
        selectionlist = selectionlist === undefined ? "true" : selectionlist;

        globalCommons.waitForElementPresent(this.eleScreenElement, true, {timeout: 10000}).then(function () {
            globalCommons.waitForClickable(that.eleConnectionsLeftmenu);
        }).then(function () {
            that.eleConnectionsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(connname);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleConnNameSearched);
        }).then(function () {
            that.eleConnNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnNameInput);
        }).then(function () {
            that.eleConnNameInput.clear().sendKeys(connname);
        }).then(function () {
            that.eleHostInput.clear().sendKeys(host);
        }).then(function () {
            that.eleUserNameInput.clear().sendKeys(username);
        }).then(function () {
            that.elePasswordInput.clear().sendKeys(password);
        }).then(function () {
            that._tls(tls);
        }).then(function () {
            that._selectionlist(selectionlist);
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
     * The function is used for cancel the changes of a connection, then discard the cancel operation.
     *
     */
    SSESOpsPage.prototype.cancelConnNo = function (connname, host, username, password, tls, selectionlist) {
        var deferred = protractor.promise.defer(), that = this;
        host = host || browser.params.endpointSSES.url;
        username = username || browser.params.endpointSSES.userid;
        password = password || browser.params.endpointSSES.password;
        selectionlist = selectionlist === undefined ? "true" : selectionlist;

        globalCommons.waitForElementPresent(this.eleScreenElement, true, {timeout: 10000}).then(function () {
            globalCommons.waitForClickable(that.eleConnectionsLeftmenu);
        }).then(function () {
            that.eleConnectionsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(connname);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleConnNameSearched);
        }).then(function () {
            that.eleConnNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnNameInput);
        }).then(function () {
            that.eleConnNameInput.clear().sendKeys(connname);
        }).then(function () {
            that.eleHostInput.clear().sendKeys(host);
        }).then(function () {
            that.eleUserNameInput.clear().sendKeys(username);
        }).then(function () {
            that.elePasswordInput.clear().sendKeys(password);
        }).then(function () {
            that._tls(tls);
        }).then(function () {
            that._selectionlist(selectionlist);
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
     * The function is used for reset a connection.
     *
     */
    SSESOpsPage.prototype.resetConn = function (connname, host, username, password, tls, selectionlist) {
        var deferred = protractor.promise.defer(), that = this;
        host = host || browser.params.endpointSSES.url;
        username = username || browser.params.endpointSSES.userid;
        password = password || browser.params.endpointSSES.password;
        selectionlist = selectionlist === undefined ? "true" : selectionlist;

        globalCommons.waitForElementPresent(this.eleScreenElement, true, {timeout: 10000}).then(function () {
            globalCommons.waitForClickable(that.eleConnectionsLeftmenu);
        }).then(function () {
            that.eleConnectionsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(connname);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleConnNameSearched);
        }).then(function () {
            that.eleConnNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnNameInput);
        }).then(function () {
            that.eleConnNameInput.clear().sendKeys(connname);
        }).then(function () {
            that.eleHostInput.clear().sendKeys(host);
        }).then(function () {
            that.eleUserNameInput.clear().sendKeys(username);
        }).then(function () {
            that.elePasswordInput.clear().sendKeys(password);
        }).then(function () {
            that._tls(tls);
        }).then(function () {
            that._selectionlist(selectionlist);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    return SSESOpsPage;
})();
module.exports = SSESOpsPage;