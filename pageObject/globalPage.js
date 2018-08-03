/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var Page = require('../utility/page.js');
var globalCommons = require('../utility/common.js');
var globalPage = (function () {
    function globalPage() {
        // Warning Dialog
        this.eleWarningDialog = element(by.css('.gwt-DialogBox'));
        this.eleOKButton = element(by.css('.mfwebui-form-buttons button[title="OK"]'));
        this.eleYesButton = element(by.css('.mfwebui-form-buttons button[title="Yes"]'));
        this.eleNoButton = element(by.css('.mfwebui-form-buttons button[title="No"]'));
        this.eleWarningInfo = element(by.css('.gwt-DialogBox .gwt-HTML'));
        this.eleWarningClose = element(by.css('.GCOBQG-CFR'));
        // Select Dialog
        this.eleEntitySearchInput = element(by.css('.GCOBQG-CGR .GCOBQG-CLM'));
        this.eleEntitySearchIcon = element(by.css('.GCOBQG-CGR .GCOBQG-CKM'));
        this.eleEntitySearched = element(by.css('.GCOBQG-CGR .GCOBQG-CAN'));
        this.eleSelectButton = element(by.css('.mfwebui-form-buttons button[title="OK"]'));
        this.eleCancelButton = element(by.css('.mfwebui-form-buttons button[title="No"]'));
    };

    globalPage.prototype = new Page();
    globalPage.prototype.constructor = globalPage;

    globalPage.prototype.isWarningOK = function () {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForClickable(that.eleOKButton).then(function () {
            that.eleOKButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    globalPage.prototype.isWarningYes = function () {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForClickable(that.eleYesButton).then(function () {
            that.eleYesButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    globalPage.prototype.isWarningNo = function () {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForClickable(that.eleNoButton).then(function () {
            that.eleNoButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    globalPage.prototype.entitySelect = function (entityName) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForDisplayed(that.eleEntitySearchInput).then(function () {
            that.eleEntitySearchInput.clear().sendKeys(entityName);
        }).then(function () {
            that.eleEntitySearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEntitySearched);
        }).then(function () {
            that.eleEntitySearched.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleSelectButton);
        }).then(function () {
            that.eleSelectButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    globalPage.prototype.entitySelectCancel = function (entityName) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForDisplayed(that.eleEntitySearchInput).then(function () {
            that.eleEntitySearchInput.clear().sendKeys(entityName);
        }).then(function () {
            that.eleEntitySearchIcon.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEntitySearched);
        }).then(function () {
            that.eleEntitySearched.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleCancelButton);
        }).then(function () {
            that.eleCancelButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    return globalPage;
})();
module.exports = globalPage;