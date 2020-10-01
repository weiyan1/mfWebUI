/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var globalCommons = require('../utility/common.js');

var Page = (function () {
  /**
   * The constructor of page object, it is a base class for each page.
   * All of the pageObject class need to be the children of this class and they need to define their own pathURL and screenElement.
   * @constructor
   */
  function Page() {
    this.pathURL = "";
    this.eleScreenElement = null;
  }

  /**
   * The method for visit one page.
   */
  Page.prototype.visitPage = function (url) {
    return browser.get(url || this.pathURL);
  };

  /**
   * The method for visit one page.
   */
  Page.prototype.untils = globalCommons;

  /**
   * The method for get the flag element of one page to verify if the certain page is shown.
   */
  Page.prototype.getPageElement = function () {
    return this.eleScreenElement;
  };

  Page.prototype.waitForPageShown = function () {
    return this.untils.waitForElementPresent(element(this.getPageElement()));
  };

  /**
   * The method for reload the current page.
   */
  Page.prototype.refreshPage = function () {
    return browser.refresh();
  };


  return Page;
})();
module.exports = Page;