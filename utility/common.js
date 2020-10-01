/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var globalCommons = {
    waitForElementPresent: function (elm, _bool, options) {
        _bool = _bool === undefined ? true : _bool;
        var timeout = options && options.timeout ? options.timeout : 35000;
        if (_bool) {
            return browser.wait(protractor.ExpectedConditions.visibilityOf(elm), timeout);
        } else {
            return browser.wait(protractor.ExpectedConditions.invisibilityOf(elm), timeout);
        }
    },
    repeatUntilDone: function (workPromise, work, _expire, resolvedFn) {
        var t = this;
        work = work || null;
        _expire = _expire ? _expire : 20;
        _expire--;
        if (_expire > 0) {
            return workPromise().then(resolvedFn ? resolvedFn : null, function (err) {
                return browser.sleep(500).then(function () {
                    if (work) {
                        work();
                    }
                    t.repeatUntilDone(workPromise, work, _expire, resolvedFn);
                });
            });
        } else {
            return browser.sleep(0);
        }
    },
    waitForElementsCountToEqual: function (elem, _count) {
        return browser.wait(function () {
            return element.all(elem).count().then(function (count) {
                return _count === count;
            });
        }, 20000);
    },
    waitForClickable: function (elem, timeout) {
        var EC = protractor.ExpectedConditions;
        timeout = timeout || 30000;
        return browser.wait(EC.elementToBeClickable(elem), timeout);
    },

    waitForDisplayed: function (elem, timeout) {
        var deferred = protractor.promise.defer(), that = this;
        timeout = timeout || 10000;
        //browser.sleep(5000).then(function(){
        browser.wait(function(){
            return elem.isPresent();
        },timeout).then(function(){
            browser.wait(function(){
                return elem.isDisplayed();
            },timeout);
        }).then(function(){
            browser.sleep(500);
        }).then(function(){
            deferred.fulfill();
        });
        return deferred.promise;
    },
};

module.exports = globalCommons;

/*
 waitForDisplayed: function (elem, timeout) {
 var deferred = protractor.promise.defer(), that = this;
 timeout = timeout || 2000;
 browser.sleep(timeout).then(function(){
 return elem.isDisplayed();
 }).then(function(bool){
 console.log("xxx"+bool);
 deferred.fulfill(bool);
 });
 return deferred.promise;
 },

 waitForDisplayed: function (elem, timeout) {
 var deferred = protractor.promise.defer(), that = this;
 timeout = timeout || 30000;
 browser.wait(function(){
 return elem.isPresent();
 },timeout).then(function(result){
 if (result) {
 browser.wait(function(){
 return elem.isDisplayed();
 },timeout).then(function(result){
 deferred.fulfill(result);
 });
 } else {
 deferred.fulfill(result);
 }
 });
 return deferred.promise;
 },
 */
