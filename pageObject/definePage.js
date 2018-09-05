/*
 * Copyright (c) 2016 TIBCO Software Inc.
 * All Rights Reserved.
 */
var Page = require('../utility/page.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var definePage = (function () {
    var globalPage = new GlobalPage();

    function definePage() {
        this.eleScreenElement = element(by.xpath('//div[text()="Library"]'));
        //Left Menu
        this.eleEndpointsEmsLeftmenu = element(by.xpath('//div[text()="Endpoints"]/../../../../..//div[text()="EMS"]'));
        this.eleEndpointsRvLeftmenu = element(by.xpath('//div[text()="Endpoints"]/../../../../..//div[text()="RV"]'));
        this.eleEndpointsCicsLeftmenu = element(by.xpath('//div[text()="Endpoints"]/../../../../..//div[text()="CICS"]'));
        this.eleEndpointsImsLeftmenu = element(by.xpath('//div[text()="Endpoints"]/../../../../..//div[text()="IMS"]'));
        this.eleEndpointsAdmLeftmenu = element(by.xpath('//div[text()="Endpoints"]/../../../../..//div[text()="Admin"]'));
        this.eleEndpointsSsLeftmenu = element(by.xpath('//div[text()="Endpoints"]/../../../../..//div[text()="Substation"]'));
        this.eleEndpointsRedLeftmenu = element(by.xpath('//div[text()="Endpoints"]/../../../../..//div[text()="RED"]'));
        this.eleConnsEmsLeftmenu = element(by.xpath('//div[text()="Connections"]/../../../../..//div[text()="EMS"]'));
        this.eleConnsEmsSslLeftmenu = element(by.xpath('//div[text()="Connections"]/../../../../..//div[text()="EMS SSL"]'));
        this.eleConnsRvLeftmenu = element(by.xpath('//div[text()="Connections"]/../../../../..//div[text()="RV"]'));
        this.eleIntfsEmsLeftmenu = element(by.xpath('//div[text()="Interfaces"]/../../../../..//div[text()="EMS"]'));
        this.eleIntfsRvLeftmenu = element(by.xpath('//div[text()="Interfaces"]/../../../../..//div[text()="RV"]'));
        this.eleIntfsCicsLeftmenu = element(by.xpath('//div[text()="Interfaces"]/../../../../..//div[text()="CICS"]'));
        this.eleIntfsImsLeftmenu = element(by.xpath('//div[text()="Interfaces"]/../../../../..//div[text()="IMS"]'));
        this.eleIntfsRedLeftmenu = element(by.xpath('//div[text()="Interfaces"]/../../../../..//div[text()="RED"]'));
        this.eleIntfsTcpLeftmenu = element(by.xpath('//div[text()="Interfaces"]/../../../../..//div[text()="TCP"]'));
        this.eleIntfsAdmLeftmenu = element(by.xpath('//div[text()="Interfaces"]/../../../../..//div[text()="Admin"]'));
        this.eleSsLeftmenu = element.all(by.xpath('//div[text()="Substation"]')).last();
        // this.eleSsLeftmenu = element(by.xpath('//div[@aria-level="1" and text()="Substation"]'));
        //Entities List
        this.eleAddButton = element(by.xpath('//button[text()="Add"]'));
        this.eleDeleteButton = element(by.xpath('//button[text()="Delete"]'));
        this.eleAuditButton = element(by.xpath('//button[text()="Audit"]'));
        this.eleRefreshButton = element(by.xpath('//button[text()="Refresh"]'));
        this.eleSearchInput = element(by.css('.GCOBQG-CLM'));
        this.eleSearchIcon = element(by.css('.GCOBQG-CKM'));
        this.eleEntityNameSearched = element(by.css('.GCOBQG-CJO'));
        this.eleMsgInfo = element(by.css('.g__msg_message'));
        this.eleTableHeader2 = element(by.css('.cell-table-header-nowrap thead th:nth-child(2)'));
        this.eleTableHeader3 = element(by.css('.cell-table-header-nowrap thead th:nth-child(3)'));
        this.eleTableHeader4 = element(by.css('.cell-table-header-nowrap thead th:nth-child(4)'));
        this.eleTableHeader5 = element(by.css('.cell-table-header-nowrap thead th:nth-child(5)'));
        //Entities Details
        this.eleDetailSlideBar = element(by.css('.slide-bar'));
        this.eleDetailHeader = element(by.css('.detailHeader'));
        this.eleCheckButton = element(by.css('.GCOBQG-CLY'));
        this.eleSaveButton = element(by.xpath('//button[text()="Save"]'));
        this.eleReplicateButton = element(by.xpath('//button[text()="Replicate"]'));
        this.eleCancelButton = element(by.xpath('//button[text()="Cancel"]'));
        this.eleResetButton = element(by.xpath('//button[text()="Reset"]'));
        this.eleSaveInfo = element(by.css('.form-info-content'));
        this.eleSaveInfoClose = element(by.css('.form-info-close'));
        //EMS Endpoint Details
        this.eleEndpointEmsNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleEndpointEmsDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleEndpointEmsUseridInput = element(by.xpath('//div[text()="User ID"]/../../..//input'));
        this.eleEndpointEmsPasswordInput = element(by.xpath('//div[text()="Password"]/../../..//input'));
        this.eleEndpointEmsUrlInput = element(by.xpath('//div[text()="URL"]/../../..//input'));
        this.eleEndpointEmsSslInput = element(by.xpath('//div[text()="SSL"]/../../..//input'));
        this.eleEndpointEmsSslPickButton = element(by.css('.pick-list-text-box-button'));
        this.eleEndpointEmsConnFactoryInput = element(by.xpath('//div[text()="Connection Factory Name"]/../../..//input'));
        this.eleEndpointEmsAutoCreateConnCheck = element(by.xpath('//label[text()="Auto create connection"]/..//input'));
        this.eleEndpointEmsConnObjectListed = element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[1]//div'));
        this.eleEndpointEmsNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointEmsDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointEmsUrlValidateMsg = element(by.xpath('//div[text()="URL"]/../../../..//div[@class="validate_msg_show"]'));
        //RV Endpoint Details
        this.eleEndpointRvNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleEndpointRvDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleEndpointRvUrlInput = element(by.xpath('//div[text()="URL"]/../../..//input'));
        this.eleEndpointRvAutoCreateConnCheck = element(by.xpath('//label[text()="Auto create connection"]/..//input'));
        this.eleEndpointRvConnObjectListed = element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[1]//div'));
        this.eleEndpointRvNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointRvDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        //CICS Endpoint Details
        this.eleEndpointCicsNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleEndpointCicsDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleEndpointCicsApplidInput = element(by.xpath('//div[text()="Application ID"]/../../..//input'));
        this.eleEndpointCicsAdministrationInput = element(by.xpath('//div[text()="Administration"]/../../..//input'));
        this.eleEndpointCicsServiceRecInput = element(by.xpath('//div[text()="Service: Recipe"]/../../..//input'));
        this.eleEndpointCicsSpecificRadio = element(by.xpath('//label[text()="Specific"]/..//input'));
        this.eleEndpointCicsGenericRadio = element(by.xpath('//label[text()="Generic"]/..//input'));
        this.eleEndpointCicsServiceTrgInput = element(by.xpath('//div[text()="Service: Trigger"]/../../..//input'));
        this.eleEndpointCicsTrcLvlOnlineSpinner = element(by.xpath('//div[text()="Trace Level: Online"]/../../..//input'));
        this.eleEndpointCicsNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointCicsDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointCicsApplidValidateMsg = element(by.xpath('//div[text()="Application ID"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointCicsAdministrationValidateMsg = element(by.xpath('//div[text()="Administration"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointCicsServiceRecValidateMsg = element(by.xpath('//div[text()="Service: Recipe"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointCicsServiceTrgValidateMsg = element(by.xpath('//div[text()="Service: Trigger"]/../../../..//div[@class="validate_msg_show"]'));
        //IMS Endpoint Details
        this.eleEndpointImsNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleEndpointImsDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleEndpointImsApplidInput = element(by.xpath('//div[text()="Application ID"]/../../..//input'));
        this.eleEndpointImsXcfGrpInput = element(by.xpath('//div[text()="XCF Group"]/../../..//input'));
        this.eleEndpointImsNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointImsDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointImsApplidValidateMsg = element(by.xpath('//div[text()="Application ID"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointImsXcfGrpValidateMsg = element(by.xpath('//div[text()="XCF Group"]/../../../..//div[@class="validate_msg_show"]'));
        //Admin Endpoint Details
        this.eleEndpointAdmNameInput = element(by.css('.form_text_box'));
        this.eleEndpointAdmDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleEndpointAdmNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointAdmDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        //Substation Endpoint Details
        this.eleEndpointSsNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleEndpointSsDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleEndpointSsUseridInput = element(by.xpath('//div[text()="User ID"]/../../..//input'));
        this.eleEndpointSsPasswordInput = element(by.xpath('//div[text()="Password"]/../../..//input'));
        this.eleEndpointSsUrlInput = element(by.xpath('//div[text()="URL"]/../../..//input'));
        this.eleEndpointSsUseTlsConnCheck = element(by.xpath('//label[text()="Use TLS Connection"]/..//input'));
        this.eleEndpointSsNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointSsDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointSsUrlValidateMsg = element(by.xpath('//div[text()="URL"]/../../../..//div[@class="validate_msg_show"]'));
        //RED Endpoint Details
        this.eleEndpointRedNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleEndpointRedDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleEndpointRedUseridInput = element(by.xpath('//div[text()="User ID"]/../../..//input'));
        this.eleEndpointRedPasswordInput = element(by.xpath('//div[text()="Password"]/../../..//input'));
        this.eleEndpointRedUrlInput = element(by.xpath('//div[text()="URL"]/../../..//input'));
        this.eleEndpointRedUseTlsConnCheck = element(by.xpath('//label[text()="Use TLS Connection"]/..//input'));
        this.eleEndpointRedNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointRedDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleEndpointRedUrlValidateMsg = element(by.xpath('//div[text()="URL"]/../../../..//div[@class="validate_msg_show"]'));
        //EMS Connection Details
        this.eleConnEmsNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleConnEmsDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleConnEmsStartupCheck = element(by.xpath('//label[text()="Startup"]/..//input'));
        this.eleConnEmsMultiSessionCheck = element(by.xpath('//label[text()="Multi Session"]/..//input'));
        this.eleConnEmsEndpointInput = element(by.xpath('//div[text()="EMS Endpoint"]/../../..//input'));
        this.eleConnEmsEndpointPickButton = element(by.xpath('//div[text()="EMS Endpoint"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleConnEmsSslInput = element(by.xpath('//div[text()="EMS SSL"]/../../..//input'));
        this.eleConnEmsSslPickButton = element(by.xpath('//div[text()="EMS SSL"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleConnEmsUseridInput = element(by.xpath('//div[text()="User ID"]/../../..//input'));
        this.eleConnEmsPasswordInput = element.all(by.xpath('//div[text()="Password"]/../../..//input')).first();
        this.eleConnEmsAttemptsConnInput = element.all(by.xpath('//div[text()="Attempts"]/../..//input')).first();
        this.eleConnEmsAttemptsReconnInput = element.all(by.xpath('//div[text()="Attempts"]/../..//input')).last();
        this.eleConnEmsDelayConnInput = element.all(by.xpath('//div[text()="Delay (ms)"]/../..//input[@class="form_text_box"]')).first();
        this.eleConnEmsDelayReconnInput = element.all(by.xpath('//div[text()="Delay (ms)"]/../..//input[@class="form_text_box"]')).last();
        this.eleConnEmsTimeoutConnInput = element.all(by.xpath('//div[text()="Timeout (ms)"]/../..//input[@class="form_text_box"]')).first();
        this.eleConnEmsTimeoutReconnInput = element.all(by.xpath('//div[text()="Timeout (ms)"]/../..//input[@class="form_text_box"]')).last();
        this.eleConnEmsMetricDropdown = element(by.css('.GCOBQG-CPQ'));
        this.eleConnEmsMetricSelected = function (metric) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + metric + '"]'));
        }
        this.eleConnEmsNetworkCodepageInput = element(by.xpath('//div[text()="Network Code Page"]/../../..//input'));
        this.eleConnEmsHostCodepageInput = element(by.xpath('//div[text()="Host Code Page"]/../../..//input'));
        this.eleConnEmsTcpipStackNameInput = element(by.xpath('//div[text()="TCP/IP Stack Name"]/../../..//input'));
        this.eleConnEmsIntfInput = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//input'));
        this.eleConnEmsIntf2Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//input'));
        this.eleConnEmsIntf3Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//input'));
        this.eleConnEmsIntf4Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//input'));
        this.eleConnEmsIntf5Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//input'));
        this.eleConnEmsIntf6Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[6]//tr[1]/td[1]//input'));
        this.eleConnEmsIntf7Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[7]//tr[1]/td[1]//input'));
        this.eleConnEmsIntf8Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[8]//tr[1]/td[1]//input'));
        this.eleConnEmsIntf9Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[9]//tr[1]/td[1]//input'));
        this.eleConnEmsIntf10Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[10]//tr[1]/td[1]//input'));
        this.eleConnEmsIntf11Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[11]//tr[1]/td[1]//input'));
        this.eleConnEmsIntf12Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[12]//tr[1]/td[1]//input'));
        this.eleConnEmsIntfPickButton = element(by.xpath('//div[text()="Interfaces"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleConnEmsIntfAddButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//img'));
        this.eleConnEmsIntf2RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//img'));
        this.eleConnEmsIntf3RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//img'));
        this.eleConnEmsIntf4RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//img'));
        this.eleConnEmsIntf5RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//img'));
        this.eleConnEmsIntf6RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[6]//tr[1]/td[1]//img'));
        this.eleConnEmsIntf7RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[7]//tr[1]/td[1]//img'));
        this.eleConnEmsIntf8RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[8]//tr[1]/td[1]//img'));
        this.eleConnEmsIntf9RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[9]//tr[1]/td[1]//img'));
        this.eleConnEmsIntf10RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[10]//tr[1]/td[1]//img'));
        this.eleConnEmsIntf11RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[11]//tr[1]/td[1]//img'));
        this.eleConnEmsIntf12RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[12]//tr[1]/td[1]//img'));
        this.eleConnEmsCreateAdmConnCheck = element(by.xpath('//label[text()="Create Admin Connection"]/..//input'));
        this.eleConnEmsAdmConnUserInput = element(by.xpath('//div[text()="User"]/../../..//input'));
        this.eleConnEmsAdmConnPasswordInput = element(by.xpath('//table[@class="gwt-DisclosurePanel gwt-DisclosurePanel-open"]/..//div[text()="Password"]/../../..//input'));
        this.eleConnEmsNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleConnEmsDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleConnEmsEndpointValidateMsg = element(by.xpath('//div[text()="EMS Endpoint"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleConnEmsAttemptsConnValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[2]/td[2]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleConnEmsAttemptsReconnValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[2]/td[3]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleConnEmsDelayConnValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[3]/td[2]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleConnEmsDelayReconnValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[3]/td[3]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleConnEmsTimeoutConnValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[4]/td[2]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleConnEmsTimeoutReconnValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[4]/td[3]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleConnEmsTcpipStackNameValidateMsg = element(by.xpath('//div[text()="TCP/IP Stack Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleConnEmsIntfValidateMsg = element.all(by.xpath('//div[text()="Interfaces"]/../../../..//div[@class="validate_msg_show"]')).first();
        //EMS SSL Definition Details
        this.eleConnEmsSslNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleConnEmsSslDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleConnEmsSslAuthOnlyCheck = element(by.xpath('//label[text()="Authorization Only"]/..//input'));
        this.eleConnEmsSslKeyRingFileInput = element(by.xpath('//div[text()="Key Ring File"]/../../..//input'));
        this.eleConnEmsSslKeyRingLabelInput = element(by.xpath('//div[text()="Key Ring Label"]/../../..//input'));
        this.eleConnEmsSslCipherInput = element(by.xpath('//div[text()="Cipher"]/../../..//input'));
        this.eleConnEmsSslEnableFipsCheck = element(by.xpath('//label[text()="Enable FIPS 140-2"]/..//input'));
        this.eleConnEmsSslEnableSslv3Check = element(by.xpath('//label[text()="Enable SSLV3"]/..//input'));
        this.eleConnEmsSslEnableTls1Check = element(by.xpath('//label[text()="Enable TLS1"]/..//input'));
        this.eleConnEmsSslExpectEmsHostnameInput = element(by.xpath('//div[text()="Expect EMS Host Name"]/../../..//input'));
        this.eleConnEmsSslVerifyHostnameCheck = element(by.xpath('//label[text()="Verify Host Name"]/..//input'));
        this.eleConnEmsSslLdapUrlInput = element(by.xpath('//div[text()="LDAP URL"]/../../..//input'));
        this.eleConnEmsSslLdapUseridInput = element(by.xpath('//div[text()="LDAP UserID"]/../../..//input'));
        this.eleConnEmsSslLdapPasswordInput = element(by.xpath('//div[text()="LDAP Password"]/../../..//input'));
        this.eleConnEmsSslEnableTrcCheck = element(by.xpath('//label[text()="Enable Trace"]/..//input'));
        this.eleConnEmsSslEnableDebugTrcCheck = element(by.xpath('//label[text()="Enable Debug Trace"]/..//input'));
        this.eleConnEmsSslNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleConnEmsSslDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        //RV Connection Details
        this.eleConnRvNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleConnRvDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleConnRvStartupCheck = element(by.xpath('//label[text()="Startup"]/..//input'));
        this.eleConnRvEndpointInput = element(by.xpath('//div[text()="RV Endpoint"]/../../..//input'));
        this.eleConnRvServiceInput = element(by.xpath('//div[text()="Service Port"]/../../..//input'));
        this.eleConnRvNetworkInput = element(by.xpath('//div[text()="Network"]/../../..//input'));
        this.eleConnRvNetworkCodepageInput = element(by.xpath('//div[text()="Network Code Page"]/../../..//input'));
        this.eleConnRvHostCodepageInput = element(by.xpath('//div[text()="Host Code Page"]/../../..//input'));
        this.eleConnRvPolicyDropdown = element(by.css('.GCOBQG-CPQ'));
        this.eleConnRvPolicySelected = function (policy) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + policy + '"]'));
        }
        this.eleConnRvMaxEventsSpinner = element(by.xpath('//div[text()="Maximum Events"]/../../..//input'));
        this.eleConnRvTcpipStackNameInput = element(by.xpath('//div[text()="TCP/IP Stack Name"]/../../..//input'));
        this.eleConnRvIntfInput = element(by.xpath('//div[text()="Interfaces"]/../../..//input'));
        this.eleConnRvIntfInput = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//input'));
        this.eleConnRvIntf2Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//input'));
        this.eleConnRvIntf3Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//input'));
        this.eleConnRvIntf4Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//input'));
        this.eleConnRvIntf5Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//input'));
        this.eleConnRvIntf6Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[6]//tr[1]/td[1]//input'));
        this.eleConnRvIntf7Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[7]//tr[1]/td[1]//input'));
        this.eleConnRvIntf8Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[8]//tr[1]/td[1]//input'));
        this.eleConnRvIntf9Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[9]//tr[1]/td[1]//input'));
        this.eleConnRvIntf10Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[10]//tr[1]/td[1]//input'));
        this.eleConnRvIntf11Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[11]//tr[1]/td[1]//input'));
        this.eleConnRvIntf12Input = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[12]//tr[1]/td[1]//input'));
        this.eleConnRvIntfPickButton = element(by.xpath('//div[text()="Interfaces"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleConnRvIntfAddButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//img'));
        this.eleConnRvIntf2RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//img'));
        this.eleConnRvIntf3RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//img'));
        this.eleConnRvIntf4RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//img'));
        this.eleConnRvIntf5RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//img'));
        this.eleConnRvIntf6RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[6]//tr[1]/td[1]//img'));
        this.eleConnRvIntf7RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[7]//tr[1]/td[1]//img'));
        this.eleConnRvIntf8RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[8]//tr[1]/td[1]//img'));
        this.eleConnRvIntf9RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[9]//tr[1]/td[1]//img'));
        this.eleConnRvIntf10RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[10]//tr[1]/td[1]//img'));
        this.eleConnRvIntf11RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[11]//tr[1]/td[1]//img'));
        this.eleConnRvIntf12RemoveButton = element(by.xpath('//div[text()="Interfaces"]/../../..//tr[2]/td[1]//div[1]//div[12]//tr[1]/td[1]//img'));
        this.eleConnRvDistributedQueueCheck = element(by.xpath('//label[text()="RV Distributed Queue"]/..//input'));
        this.eleConnRvDqSchedulerSpinner = element(by.xpath('//div[text()="Scheduler"]/../../..//input'));
        this.eleConnRvDqWorkersSpinner = element(by.xpath('//div[text()="Workers"]/../../..//input'));
        this.eleConnRvDqMemoryLimitSpinner = element(by.xpath('//div[text()="Memory Limit (K)"]/../../..//input'));
        this.eleConnRvDqMsgLimitSpinner = element(by.xpath('//div[text()="Message Limit"]/../../..//input'));
        this.eleConnRvDqIdentityInput = element(by.xpath('//div[text()="Identity"]/../../..//input'));
        this.eleConnRvNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleConnRvDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleConnRvEndpointValidateMsg = element(by.xpath('//div[text()="RV Endpoint"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleConnRvServiceValidateMsg = element(by.xpath('//div[text()="Service Port"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleConnRvTcpipStackNameValidateMsg = element(by.xpath('//div[text()="TCP/IP Stack Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleConnRvIntfValidateMsg = element.all(by.xpath('//div[text()="Interfaces"]/../../../..//div[@class="validate_msg_show"]')).first();
        this.eleConnRvDqIdentityValidateMsg = element(by.xpath('//div[text()="Identity"]/../../../..//div[@class="validate_msg_show"]'));
        //EMS Interface Details
        this.eleIntfEmsNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleIntfEmsDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleIntfEmsIntfidInput = element(by.xpath('//div[text()="Interface ID"]/../../..//input'));
        this.eleIntfEmsWorkersSpinner = element(by.xpath('//div[text()="Workers"]/../../..//input'));
        this.eleIntfEmsWorkersEotSpinner = element(by.xpath('//div[text()="Workers (End of Task)"]/../../..//input'));
        this.eleIntfEmsMsgFreeListSizeSpinner = element(by.xpath('//div[text()="Message Free List Size"]/../../..//input'));
        this.eleIntfEmsSuspendServicesCheck = element(by.xpath('//label[text()="Suspend Services"]/../../..//input'));
        this.eleIntfEmsUsePropCheck = element(by.xpath('//label[text()="Use Properties"]/../../..//input'));
        this.eleIntfEmsErrMsgTypeDropdown = element(by.css('.GCOBQG-CPQ'));
        this.eleIntfEmsErrMsgTypeSelected = function (errMsgType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + errMsgType + '"]'));
        };
        this.eleIntfEmsDeadMsgQueInput = element(by.xpath('//div[text()="Dead Message Queue Name"]/../../..//input'));
        this.eleIntfEmsNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfEmsDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfEmsIntfidValidateMsg = element(by.xpath('//div[text()="Interface ID"]/../../../..//div[@class="validate_msg_show"]'));
        //RV Interface Details
        this.eleIntfRvNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleIntfRvDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleIntfRvIntfidInput = element(by.xpath('//div[text()="Interface ID"]/../../..//input'));
        this.eleIntfRvWorkersSpinner = element(by.xpath('//div[text()="Workers"]/../../..//input'));
        this.eleIntfRvWorkersEotSpinner = element(by.xpath('//div[text()="Workers (End of Task)"]/../../..//input'));
        this.eleIntfRvMsgFreeListSizeSpinner = element(by.xpath('//div[text()="Message Free List Size"]/../../..//input'));
        this.eleIntfRvSuspendServicesCheck = element(by.xpath('//label[text()="Suspend Services"]/../../..//input'));
        this.eleIntfRvEnableMsgReceiptCheck = element(by.xpath('//label[text()="Enable message receipt"]/../../..//input'));
        this.eleIntfRvEnableMsgDeliveryCheck = element(by.xpath('//label[text()="Enable message delivery"]/../../..//input'));
        this.eleIntfRvNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfRvDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfRvIntfidValidateMsg = element(by.xpath('//div[text()="Interface ID"]/../../../..//div[@class="validate_msg_show"]'));
        //CICS Interface Details
        this.eleIntfCicsNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleIntfCicsDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleIntfCicsIntfidInput = element(by.xpath('//div[text()="Interface ID"]/../../..//input'));
        this.eleIntfCicsOutputIntfInput = element(by.xpath('//div[text()="Output Interface"]/../../..//input'));
        this.eleIntfCicsOutputIntfPickButton = element(by.xpath('//div[text()="Output Interface"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleIntfCicsEndpointInput = element(by.xpath('//div[text()="CICS Endpoint"]/../../..//input'));
        this.eleIntfCicsEndpointPickButton = element(by.xpath('//div[text()="CICS Endpoint"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleIntfCicsMirrorTranidInput = element(by.xpath('//div[text()="Mirror Transaction ID"]/../../..//input'));
        this.eleIntfCicsUseridInput = element(by.xpath('//div[text()="User ID"]/../../..//input'));
        this.eleIntfCicsOrderedCheck = element(by.xpath('//label[text()="Ordered"]/../../..//input'));
        this.eleIntfCicsRequestReplyCheck = element(by.xpath('//label[text()="Request/Reply"]/../../..//input'));
        this.eleIntfCicsEsbRequestReplySpinner = element(by.xpath('//div[text()="ESB Request/Reply"]/../../..//input'));
        this.eleIntfCicsGuaranteedSpinner = element(by.xpath('//div[text()="Guaranteed"]/../../..//input'));
        this.eleIntfCicsReliableSpinner = element(by.xpath('//div[text()="Reliable"]/../../..//input'));
        this.eleIntfCicsRRMaxSizeSpinner = element(by.xpath('//div[text()="CICS Request/Reply Max Size (bytes)"]/../../..//input'));
        this.eleIntfCicsLoopbackNoRadio = element(by.xpath('//div[text()="Loopback:"]/../..//label[text()="No"]/..//input'));
        this.eleIntfCicsLoopbackYesRadio = element(by.xpath('//div[text()="Loopback:"]/../..//label[text()="Yes"]/..//input'));
        this.eleIntfCicsTrcLvlTrgSpinner = element(by.xpath('//div[text()="Trace Level: Trigger"]/../../..//input'));
        this.eleIntfCicsTsqProcessingExtend = element(by.xpath('//td[text()="TSQ Processing"]'));
        this.eleIntfCicsBatchingNoRadio = element(by.xpath('//div[text()="Batching"]/../..//label[text()="No"]/..//input'));
        this.eleIntfCicsBatchingYesRadio = element(by.xpath('//div[text()="Batching"]/../..//label[text()="Yes"]/..//input'));
        this.eleIntfCicsWorkersSpinner = element.all(by.xpath('//div[text()="Workers"]/../../..//input')).last();
        this.eleIntfCicsBatchSizeSpinner = element(by.xpath('//div[text()="Batch Size"]/../../..//input'));
        this.eleIntfCicsTrcLvlTsqSpinner = element(by.xpath('//div[text()="Trace Level: TSQ"]/../../..//input'));
        this.eleIntfCicsNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfCicsDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfCicsIntfidValidateMsg = element(by.xpath('//div[text()="Interface ID"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfCicsOutputIntfValidateMsg = element(by.xpath('//div[text()="Output Interface"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfCicsEndpointValidateMsg = element(by.xpath('//div[text()="CICS Endpoint"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfCicsMirrorTranidValidateMsg = element(by.xpath('//div[text()="Mirror Transaction ID"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfCicsUseridValidateMsg = element(by.xpath('//div[text()="User ID"]/../../../..//div[@class="validate_msg_show"]'));
        //IMS Interface Details
        this.eleIntfImsNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleIntfImsDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleIntfImsIntfidInput = element(by.xpath('//div[text()="Interface ID"]/../../..//input'));
        this.eleIntfImsXcfMemberNameInput = element(by.xpath('//div[text()="XCF Member Name"]/../../..//input'));
        this.eleIntfImsTpipeNameInput = element(by.xpath('//div[text()="TPIPE Name"]/../../..//input'));
        this.eleIntfImsTpipePrefixInput = element(by.xpath('//div[text()="TPIPE Prefix"]/../../..//input'));
        this.eleIntfImsOutputIntfInput = element(by.xpath('//div[text()="Output Interface"]/../../..//input'));
        this.eleIntfImsOutputIntfPickButton = element(by.xpath('//div[text()="Output Interface"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleIntfImsEndpointInput = element(by.xpath('//div[text()="IMS Endpoint"]/../../..//input'));
        this.eleIntfImsEndpointPickButton = element(by.xpath('//div[text()="IMS Endpoint"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleIntfImsGuaranteedInput = element(by.xpath('//div[text()="Guaranteed"]/../../..//input'));
        this.eleIntfImsReliableInput = element(by.xpath('//div[text()="Reliable"]/../../..//input'));
        this.eleIntfImsSyncCalloutInput = element(by.xpath('//div[text()="Sync Call-out"]/../../..//input'));
        this.eleIntfImsCommitMode0Radio = element(by.xpath('//label[text()="0"]/..//input'));
        this.eleIntfImsCommitMode1Radio = element(by.xpath('//label[text()="1"]/..//input'));
        this.eleIntfImsWorkersEsbRRSpinner = element(by.xpath('//div[text()="ESB Request/Reply"]/../../..//input'));
        this.eleIntfImsWorkersTrgSpinner = element(by.xpath('//div[text()="Service: Trigger"]/../../..//input'));
        this.eleIntfImsOtmaSettingsExtend = element(by.xpath('//td[text()="OTMA Settings"]'));
        this.eleIntfImsWaitInitializationInput = element(by.xpath('//div[text()="Initialization"]/../../..//input'));
        this.eleIntfImsWaitOtmaInput = element(by.xpath('//div[text()="OTMA"]/../../..//input'));
        this.eleIntfImsWaitMsgInput = element(by.xpath('//div[text()="Message"]/../../..//input'));
        this.eleIntfImsTranAllocationInput = element.all(by.xpath('//div[text()="Transaction"]/../..//input')).first();
        this.eleIntfImsTranSizeInput = element.all(by.xpath('//div[text()="Transaction"]/../..//input')).last();
        this.eleIntfImsSrbAllocationInput = element.all(by.xpath('//div[text()="SRB"]/../..//input')).first();
        this.eleIntfImsSrbSizeInput = element.all(by.xpath('//div[text()="SRB"]/../..//input')).last();
        this.eleIntfImsGrpAllocationInput = element.all(by.xpath('//div[text()="Group"]/../..//input')).first();
        this.eleIntfImsGrpSizeInput = element.all(by.xpath('//div[text()="Group"]/../..//input')).last();
        this.eleIntfImsLoopbackNoRadio = element(by.xpath('//label[text()="No"]/..//input'));
        this.eleIntfImsLoopbackYesRadio = element(by.xpath('//label[text()="Yes"]/..//input'));
        this.eleIntfImsTrcLvlTrgSpinner = element(by.xpath('//div[text()="Trace Level: Trigger"]/../../..//input'));
        this.eleIntfImsTrcLvlOtmaSpinner = element(by.xpath('//div[text()="Trace Level OTMA"]/../../..//input'));
        this.eleIntfImsNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsIntfidValidateMsg = element(by.xpath('//div[text()="Interface ID"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsXcfMemberNameValidateMsg = element(by.xpath('//div[text()="XCF Member Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsTpipeNameValidateMsg = element(by.xpath('//div[text()="TPIPE Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsTpipePrefixValidateMsg = element(by.xpath('//div[text()="TPIPE Prefix"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsOutputIntfValidateMsg = element(by.xpath('//div[text()="Output Interface"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsEndpointValidateMsg = element(by.xpath('//div[text()="IMS Endpoint"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsGuaranteedValidateMsg = element(by.xpath('//div[text()="Guaranteed"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsReliableValidateMsg = element(by.xpath('//div[text()="Reliable"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsSyncCalloutValidateMsg = element(by.xpath('//div[text()="Sync Call-out"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsWaitInitializationValidateMsg = element(by.xpath('//div[text()="Initialization"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsWaitOtmaValidateMsg = element(by.xpath('//div[text()="OTMA"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsWaitMsgValidateMsg = element(by.xpath('//div[text()="Message"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfImsTranAllocationValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[2]/td[2]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfImsTranSizeValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[2]/td[3]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfImsSrbAllocationValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[3]/td[2]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfImsSrbSizeValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[3]/td[3]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfImsGrpAllocationValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[4]/td[2]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfImsGrpSizeValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[4]/td[3]//input[@class="form_text_box form_text_box_warning"]'));
        //RED Interface Details
        this.eleIntfRedNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleIntfRedDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleIntfRedIntfidInput = element(by.xpath('//div[text()="Interface ID"]/../../..//input'));
        this.eleIntfRedOutputIntfInput = element(by.xpath('//div[text()="Output Interface"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//input'));
        this.eleIntfRedOutputIntf2Input = element(by.xpath('//div[text()="Output Interface"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//input'));
        this.eleIntfRedOutputIntf3Input = element(by.xpath('//div[text()="Output Interface"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//input'));
        this.eleIntfRedOutputIntf4Input = element(by.xpath('//div[text()="Output Interface"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//input'));
        this.eleIntfRedOutputIntfPickButton = element(by.xpath('//div[text()="Output Interface"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//div[@class="pick-list-text-box-button"]'));
        this.eleIntfRedOutputIntf2PickButton = element(by.xpath('//div[text()="Output Interface"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//div[@class="pick-list-text-box-button"]'));
        this.eleIntfRedOutputIntf3PickButton = element(by.xpath('//div[text()="Output Interface"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//div[@class="pick-list-text-box-button"]'));
        this.eleIntfRedOutputIntf4PickButton = element(by.xpath('//div[text()="Output Interface"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//div[@class="pick-list-text-box-button"]'));
        this.eleIntfRedOutputIntfAddButton = element(by.xpath('//div[text()="Output Interface"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//img'));
        this.eleIntfRedOutputIntf2RemoveButton = element(by.xpath('//div[text()="Output Interface"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//img'));
        this.eleIntfRedOutputIntf3RemoveButton = element(by.xpath('//div[text()="Output Interface"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//img'));
        this.eleIntfRedOutputIntf4RemoveButton = element(by.xpath('//div[text()="Output Interface"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//img'));
        this.eleIntfRedEndpointInput = element(by.xpath('//div[text()="CICS Endpoint"]/../../..//input'));
        this.eleIntfImsCicsEndpointPickButton = element(by.xpath('//div[text()="CICS Endpoint"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleIntfRedHubNameInput = element(by.xpath('//div[text()="Hub Name"]/../../..//input'));
        this.eleIntfRedAdminNameInput = element(by.xpath('//div[text()="Admin Name"]/../../..//input'));
        this.eleIntfRedTrcLvlBesSpinner = element(by.xpath('//div[text()="Trace Level: BES"]/../../..//input'));
        this.eleIntfRedTrcLvlRedSpinner = element(by.xpath('//div[text()="Trace Level: RED"]/../../..//input'));

        this.eleIntfRedCicsParasExtend = element(by.xpath('//td[text()="CICS Related Parameters"]'));
        this.eleIntfRedGrpNameInput = element(by.xpath('//div[text()="Group Name"]/../../..//input'));
        this.eleIntfRedGrpMonitorNameInput = element(by.xpath('//div[text()="Group Monitor Name"]/../../..//input'));
        this.eleIntfRedLsnNameInput = element(by.xpath('//div[text()="Listener Name"]/../../..//input'));
        this.eleIntfRedLsnTranidInput = element(by.xpath('//div[text()="Listener Transaction Id"]/../../..//input'));
        this.eleIntfRedTransForLsnSpinner = element(by.xpath('//div[text()="Transactions for Listener"]/../../..//input'));
        this.eleIntfRedUserTransSpinner = element(by.xpath('//div[text()="User Transactions"]/../../..//input'));
        this.eleIntfRedTimeoutMsgReplySpinner = element(by.xpath('//div[text()="General Message Reply (ms)"]/../../..//input'));
        this.eleIntfRedTimeoutMsgCompletionSpinner = element(by.xpath('//div[text()="General Message Completion (sec)"]/../../..//input'));

        this.eleIntfRedTrgOutboundExtend = element(by.xpath('//td[text()="Trigger Service - CICS Outbound Messaging"]'));
        this.eleIntfRedTrg64bitBufsCheck = element.all(by.xpath('//label[text()="64-bit Buffers"]/..//input')).first();
        this.eleIntfRedTrgOrderedCheck = element.all(by.xpath('//label[text()="Ordered"]/..//input')).first();
        this.eleIntfRedTrgMaxMsgLenSpinner = element.all(by.xpath('//div[text()="Maximum Message Length (bytes)"]/../../..//input')).first();
        this.eleIntfRedTrgNumOfBufsPool1Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[2]/td[2]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgNumOfBufsPool2Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[2]/td[3]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgNumOfBufsPool3Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[2]/td[4]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgBufSizePool1Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[3]/td[2]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgBufSizePool2Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[3]/td[3]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgBufSizePool3Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[3]/td[4]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgPacingPool1Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[4]/td[2]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgPacingPool2Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[4]/td[3]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgPacingPool3Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[4]/td[4]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgTrcLvlPool1Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[5]/td[2]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgTrcLvlPool2Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[5]/td[3]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgTrcLvlPool3Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[5]/td[4]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgWorkersPool1Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[6]/td[2]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgWorkersPool2Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[6]/td[3]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgWorkersPool3Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[6]/td[4]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgMsgNamePool1Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[7]/td[2]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgMsgNamePool2Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[7]/td[3]//input[@class="form_text_box"]'));
        this.eleIntfRedTrgMsgNamePool3Input = element(by.xpath('//div[@class="groupBoxWrap"]//tr[7]/td[4]//input[@class="form_text_box"]'));

        this.eleIntfRedRecInboundExtend = element(by.xpath('//td[text()="Recipe Service - CICS Inbound Messaging"]'));
        this.eleIntfRedRecWorkersSpinner = element(by.xpath('//div[text()="Workers"]/../../..//input[@class="spinner-textbox"]'));
        this.eleIntfRedRecStartDynLsnsLvlSpinner = element(by.xpath('//div[text()="Start Dynamic Listeners Level"]/../../..//input'));
        this.eleIntfRedRecMaxMsgLenSpinner = element.all(by.xpath('//div[text()="Maximum Message Length (bytes)"]/../../..//input')).last();
        this.eleIntfRedRecNumOfBufsSpinner = element(by.xpath('//div[text()="Number of Buffers"]/../../..//input[@class="spinner-textbox"]'));
        this.eleIntfRedRecBufSizeSpinner = element(by.xpath('//div[text()="Buffer Size (bytes)"]/../../..//input[@class="spinner-textbox"]'));
        this.eleIntfRedRecPacingSpinner = element(by.xpath('//div[text()="Pacing (μs)"]/../../..//input[@class="spinner-textbox"]'));
        this.eleIntfRedRecWaitSpinner = element.all(by.xpath('//td[text()="Recipe Service - CICS Inbound Messaging"]/../../../../../../..//input')).get(6);
        this.eleIntfRedRecCicsToWaitSpinner = element(by.xpath('//div[text()="CICS to Wait (ms)"]/../../..//input'));
        this.eleIntfRedRecBufOverfolwSpinner = element(by.xpath('//div[text()="Buffer Overflow(%)"]/../../..//input'));
        this.eleIntfRedRecBufThrottlingSpinner = element(by.xpath('//div[text()="Buffer Throttling(%)"]/../../..//input'));
        this.eleIntfRedRec64bitBufsCheck = element.all(by.xpath('//label[text()="64-bit Buffers"]/..//input')).last();
        this.eleIntfRedRecOrderedCheck = element.all(by.xpath('//label[text()="Ordered"]/..//input')).last();
        this.eleIntfRedRecSendWithComfimCheck = element(by.xpath('//label[text()="Send With Confirmation"]/..//input'));

        this.eleIntfRedNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfRedDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfRedIntfidValidateMsg = element(by.xpath('//div[text()="Interface ID"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfRedOutputIntfValidateMsg = element(by.css('.GCOBQG-CI- .validate_msg_show'));
        this.eleIntfRedEndpointValidateMsg = element(by.xpath('//div[text()="CICS Endpoint"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfRedHubNameValidateMsg = element(by.xpath('//div[text()="Hub Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfRedAdminNameValidateMsg = element(by.xpath('//div[text()="Admin Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfRedGrpNameValidateMsg = element(by.xpath('//div[text()="Group Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfRedGrpMonitorNameValidateMsg = element(by.xpath('//div[text()="Group Monitor Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfRedLsnNameValidateMsg = element(by.xpath('//div[text()="Listener Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfRedLsnTranidValidateMsg = element(by.xpath('//div[text()="Listener Transaction Id"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfRedTrgNumOfBufsPool1ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[2]/td[2]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgNumOfBufsPool2ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[2]/td[3]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgNumOfBufsPool3ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[2]/td[4]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgBufSizePool1ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[3]/td[2]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgBufSizePool2ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[3]/td[3]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgBufSizePool3ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[3]/td[4]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgPacingPool1ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[4]/td[2]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgPacingPool2ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[4]/td[3]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgPacingPool3ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[4]/td[4]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgTrcLvlPool1ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[5]/td[2]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgTrcLvlPool2ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[5]/td[3]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgTrcLvlPool3ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[5]/td[4]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgWorkersPool1ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[6]/td[2]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgWorkersPool2ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[6]/td[3]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgWorkersPool3ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[6]/td[4]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgMsgNamePool1ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[7]/td[2]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgMsgNamePool2ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[7]/td[3]//input[@class="form_text_box form_text_box_warning"]'));
        this.eleIntfRedTrgMsgNamePool3ValidateMsg = element(by.xpath('//div[@class="groupBoxWrap"]//tr[7]/td[4]//input[@class="form_text_box form_text_box_warning"]'));
        //TCP Interface Details
        this.eleIntfTcpNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleIntfTcpDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleIntfTcpIntfidInput = element(by.xpath('//div[text()="Interface ID"]/../../..//input'));
        this.eleIntfTcpHostInput = element(by.xpath('//div[text()="Host (URL)"]/../../..//input'));
        this.eleIntfTcpUseTlsConnCheck = element(by.xpath('//label[text()="Use TLS Connection"]/..//input'));
        this.eleIntfTcpHostStackNameInput = element.all(by.css('.slide-panel .form_text_box')).get(3);
        this.eleIntfTcpTrcLvlSpinner = element(by.xpath('//div[text()="Trace Level"]/../../..//input'));
        this.eleIntfTcpDispatchersSpinner = element(by.xpath('//div[text()="Dispatchers"]/../../..//input'));
        this.eleIntfTcpWorkersSpinner = element(by.xpath('//div[text()="Workers"]/../../..//input'));
        this.eleIntfTcpWebUIBufSizeSpinner = element(by.xpath('//div[text()="WebUI Buffer Size (bytes)"]/../../..//input'));

        this.eleIntfTcpTcpDirectivesExtend = element(by.xpath('//td[text()="TCP Directives"]'));
        this.eleIntfTcpConnsSpinner = element(by.xpath('//div[text()="Connections"]/../../..//input'));
        this.eleIntfTcpKeepAliveCheck = element(by.xpath('//label[text()="Keep Alive"]/..//input'));
        this.eleIntfTcpLazyRetrySpinner = element(by.xpath('//div[text()="Lazy Retry (sec)"]/../../..//input'));
        this.eleIntfTcpTimeoutSpinner = element(by.xpath('//div[text()="Timeout (sec)"]/../../..//input'));
        this.eleIntfTcpChunkBufsSpinner = element(by.xpath('//div[text()="Chunk Buffers"]/../../..//input'));
        this.eleIntfTcpChunkMaxSizeSpinner = element(by.xpath('//div[text()="Chunk Max Size (bytes)"]/../../..//input'));
        this.eleIntfTcpHostLogFileDdnInput = element(by.xpath('//div[text()="Host Log File DDN"]/../../..//input'));

        this.eleIntfTcpSslDirectivesExtend = element(by.xpath('//td[text()="SSL Directives"]'));
        this.eleIntfTcpTlsRingFileInput = element(by.xpath('//div[text()="TLS Ring File"]/../../..//input'));
        this.eleIntfTcpTlsRingLabelInput = element(by.xpath('//div[text()="TLS Ring Label"]/../../..//input'));
        this.eleIntfTcpTlsCipherInput = element(by.xpath('//div[text()="TLS Cipher"]/../../..//input'));
        this.eleIntfTcpClientAuthCheck = element(by.xpath('//label[text()="Client Authentication"]/..//input'));
        this.eleIntfTcpGskFileNameInput = element(by.xpath('//div[text()="GSK File Name"]/../../..//input'));
        this.eleIntfTcpTlsTrcLvlSpinner = element(by.xpath('//div[text()="TLS Trace Level"]/../../..//input'));

        this.eleIntfTcpNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfTcpDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfTcpIntfidValidateMsg = element(by.xpath('//div[text()="Interface ID"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfTcpHostValidateMsg = element(by.xpath('//div[text()="Host (URL)"]/../../../..//div[@class="validate_msg_show"]'));
        // this.eleIntfTcpHostStackNameValidateMsg = element(by.xpath('//div[contains(text(),"Stack")]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfTcpHostStackNameValidateMsg = element(by.css('.slide-panel .validate_msg_show'));
        this.eleIntfTcpHostLogFileDdnValidateMsg = element(by.xpath('//div[text()="Host Log File DDN"]/../../../..//div[@class="validate_msg_show"]'));
        //Admin Interface Details
        this.eleIntfAdmNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleIntfAdmDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleIntfAdmIntfidInput = element(by.xpath('//div[text()="Interface ID"]/../../..//input'));
        this.eleIntfAdmEndpointInput = element(by.xpath('//div[text()="Admin Endpoint"]/../../..//input'));
        this.eleIntfAdmAdmEndpointPickButton = element(by.xpath('//div[text()="Admin Endpoint"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleIntfAdmWorkersSpinner = element(by.xpath('//div[text()="Workers"]/../../..//input'));
        this.eleIntfAdmTrcLvlOpsSpinner = element(by.xpath('//div[text()="Trace Level: Operational Commands"]/../../..//input'));
        this.eleIntfAdmLogRemoteCmdsCheck = element(by.xpath('//label[text()="Log Remote Commands"]/..//input'));
        this.eleIntfAdmHeartbeatExtend = element(by.xpath('//td[text()="Heartbeat"]'));
        this.eleIntfAdmIntervalSpinner = element(by.xpath('//div[text()="Interval (sec)"]/../../..//input'));
        this.eleIntfAdmServiceTrgInput = element(by.xpath('//div[text()="Service: Trigger"]/../../..//input'));
        this.eleIntfAdmServiceTrgPickButton = element(by.xpath('//div[text()="Service: Trigger"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleIntfAdmOutputIntfInput = element(by.xpath('//div[text()="Output Interface"]/../../..//input'));
        this.eleIntfAdmOutputIntfPickButton = element(by.xpath('//div[text()="Output Interface"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleIntfAdmHeartbeatCmdInput = element(by.xpath('//div[text()="Heartbeat Command"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//input'));
        this.eleIntfAdmHeartbeatCmd2Input = element(by.xpath('//div[text()="Heartbeat Command"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//input'));
        this.eleIntfAdmHeartbeatCmd3Input = element(by.xpath('//div[text()="Heartbeat Command"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//input'));
        this.eleIntfAdmHeartbeatCmd4Input = element(by.xpath('//div[text()="Heartbeat Command"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//input'));
        this.eleIntfAdmHeartbeatCmd5Input = element(by.xpath('//div[text()="Heartbeat Command"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//input'));
        this.eleIntfAdmHeartbeatCmdAddButton = element(by.xpath('//div[text()="Heartbeat Command"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//img'));
        this.eleIntfAdmHeartbeatCmd2RemoveButton = element(by.xpath('//div[text()="Heartbeat Command"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//img'));
        this.eleIntfAdmHeartbeatCmd3RemoveButton = element(by.xpath('//div[text()="Heartbeat Command"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//img'));
        this.eleIntfAdmHeartbeatCmd4RemoveButton = element(by.xpath('//div[text()="Heartbeat Command"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//img'));
        this.eleIntfAdmHeartbeatCmd5RemoveButton = element(by.xpath('//div[text()="Heartbeat Command"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//img'));
        this.eleIntfAdmNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfAdmDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfAdmIntfidValidateMsg = element(by.xpath('//div[text()="Interface ID"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfAdmEndpointValidateMsg = element(by.xpath('//div[text()="Admin Endpoint"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfAdmServiceTrgValidateMsg = element(by.xpath('//div[text()="Service: Trigger"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfAdmOutputIntfValidateMsg = element(by.xpath('//div[text()="Output Interface"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleIntfAdmHeartbeatCmdValidateMsg = element(by.xpath('//div[text()="Heartbeat Command"]/../../../..//div[@class="validate_msg_show"]'));
        //Substation Details
        this.eleSsNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleSsDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleSsSsidInput = element(by.xpath('//div[text()="Substation ID"]/../../..//input'));
        this.eleSsLogTrcExtend = element(by.xpath('//td[text()="Log and Trace Details"]'));
        this.eleSsLogLvlSpinner = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Level"]/../../..//input'));
        this.eleSsLogFormatSpinner = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Format"]/../../..//input'));
        this.eleSsLogFileDdnInput = element(by.xpath('//div[text()="Log"]/../../..//div[text()="File DDName"]/../../..//input'));
        this.eleSsLogFileDestDropdown = element(by.xpath('//div[text()="Log"]/../../..//div[text()="File Destination"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleSsLogFileDestSelected = function (logFileDest) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + logFileDest + '"]'));
        };
        this.eleSsLogDiskFileDdnInput = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//input'));
        this.eleSsLogDiskFileDdn2Input = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//input'));
        this.eleSsLogDiskFileDdn3Input = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//input'));
        this.eleSsLogDiskFileDdn4Input = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//input'));
        this.eleSsLogDiskFileDdn5Input = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//input'));
        this.eleSsLogDiskFileAddButton = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//img'));
        this.eleSsLogDiskFile2RemoveButton = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//img'));
        this.eleSsLogDiskFile3RemoveButton = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//img'));
        this.eleSsLogDiskFile4RemoveButton = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//img'));
        this.eleSsLogDiskFile5RemoveButton = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//img'));
        this.eleSsLogStartupWarmRadio = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Startup Method"]/../../..//label[text()="WARM"]/..//input'));
        this.eleSsLogStartupColdRadio = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Startup Method"]/../../..//label[text()="COLD"]/..//input'));
        this.eleSsLogDiskFileWrapCheck = element(by.xpath('//div[text()="Log"]/../../..//label[text()="Disk File Wrap"]/..//input'));
        this.eleSsLogDebugLvlSpinner = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Debug Level"]/../../..//input'));
        this.eleSsLogLogToSyslogDropdown = element(by.xpath('//div[text()="Log to SYSLOG"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleSsLogLogToSyslogSelected = function (logToSyslog) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + logToSyslog + '"]'));
        };
        this.eleSsLogConsoleOutputMsgLogRadio = element(by.xpath('//div[text()="Console Output Message"]/../../..//label[text()="Log"]/..//input'));
        this.eleSsLogConsoleOutputMsgConsoleRadio = element(by.xpath('//div[text()="Console Output Message"]/../../..//label[text()="Console"]/..//input'));
        this.eleSsTrcLvlSpinner = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Level"]/../../..//input'));
        this.eleSsTrcFormatSpinner = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Format"]/../../..//input'));
        this.eleSsTrcFileDdnInput = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="File DDName"]/../../..//input'));
        this.eleSsTrcFileDestDropdown = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="File Destination"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleSsTrcFileDestSelected = function (trcFileDest) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + trcFileDest + '"]'));
        };
        this.eleSsTrcDiskFileDdnInput = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//input'));
        this.eleSsTrcDiskFileDdn2Input = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//input'));
        this.eleSsTrcDiskFileDdn3Input = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//input'));
        this.eleSsTrcDiskFileDdn4Input = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//input'));
        this.eleSsTrcDiskFileDdn5Input = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//input'));
        this.eleSsTrcDiskFileAddButton = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//img'));
        this.eleSsTrcDiskFile2RemoveButton = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//img'));
        this.eleSsTrcDiskFile3RemoveButton = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//img'));
        this.eleSsTrcDiskFile4RemoveButton = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//img'));
        this.eleSsTrcDiskFile5RemoveButton = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Disk File DDName"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//img'));
        this.eleSsTrcStartupWarmRadio = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Startup Method"]/../../..//label[text()="WARM"]/..//input'));
        this.eleSsTrcStartupColdRadio = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Startup Method"]/../../..//label[text()="COLD"]/..//input'));
        this.eleSsTrcDiskFileWrapCheck = element(by.xpath('//div[text()="Trace"]/../../..//label[text()="Disk File Wrap"]/..//input'));
        this.eleSsTrcDebugLvlSpinner = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Debug Level"]/../../..//input'));
        this.eleSsInitializationExtend = element(by.xpath('//td[text()="Initialization"]'));
        this.eleSsMaxUnitsOfWorkSpinner = element(by.xpath('//div[text()="Maximum Units of Work"]/../../..//input'));
        this.eleSsWorkersSpinner = element(by.xpath('//div[text()="Workers"]/../../..//input'));
        this.eleSsWorkersEndOfTaskSpinner = element(by.xpath('//div[text()="Workers (End of Task)"]/../../..//input'));
        this.eleSsSnapshotSpinner = element(by.xpath('//div[text()="Snapshot"]/../../..//input'));
        this.eleSsStgProtectCheck = element(by.xpath('//label[text()="Storage Protect"]/..//input'));
        this.eleSsStgFreeCheck = element(by.xpath('//label[text()="Storage Free"]/..//input'));
        this.eleSsStgSizeMaxSpinner = element(by.xpath('//div[text()="Storage Size Maximum (bytes)"]/../../..//input'));
        this.eleSsAdmIntfInput = element(by.xpath('//div[text()="Admin Interface"]/../../..//input'));
        this.eleSsNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleSsDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleSsSsidValidateMsg = element(by.xpath('//div[text()="Substation ID"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleSsLogFileDdnValidateMsg = element(by.xpath('//div[text()="Log"]/../../..//div[text()="File DDName"]/../../..//div[@class="validate_msg_show"]'));
        this.eleSsTrcFileDdnValidateMsg = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="File DDName"]/../../..//div[@class="validate_msg_show"]'));
        this.eleSsLogDiskFileDdnValidateMsg = element(by.xpath('//div[text()="Log"]/../../..//div[text()="Disk File DDName"]/../../..//div[@class="validate_msg_show"]'));
        this.eleSsTrcDiskFileDdnValidateMsg = element(by.xpath('//div[text()="Trace"]/../../..//div[text()="Disk File DDName"]/../../..//div[@class="validate_msg_show"]'));
        this.eleSsAdmIntfValidateMsg = element(by.xpath('//div[text()="Admin Interface"]/../../..//div[@class="validate_msg_show"]'));
    };

    definePage.prototype = new Page();
    definePage.prototype.constructor = definePage;

    //
    // This function is used for set 'EMS Endpoint Details' -> 'Auto create connection'
    // false: not selected
    // true: selected
    //
    definePage.prototype._autoCreateConnEndpointEms = function (autoCreateConn) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleEndpointEmsAutoCreateConnCheck).then(function () {
            return that.eleEndpointEmsAutoCreateConnCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (autoCreateConn) {
                    that.eleEndpointEmsAutoCreateConnCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (autoCreateConn) {
                    deferred.fulfill();
                } else {
                    that.eleEndpointEmsAutoCreateConnCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for add a EMS Endpoint.
    //
    definePage.prototype.addEndpointEms = function (name, desc, userid, password, url, ssl, connFactory, autoCreateConn) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointEMS.userid;
        password = password || browser.params.endpointEMS.password;
        url = url || browser.params.endpointEMS.url;
        ssl = ssl || browser.params.endpointEMS.ssl;
        connFactory = connFactory || browser.params.endpointEMS.connFactory;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsEmsLeftmenu);
        }).then(function () {
            that.eleEndpointsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointEmsNameInput);
        }).then(function () {
            that.eleEndpointEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointEmsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointEmsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointEmsUrlInput.clear().sendKeys(url);
        }).then(function () {
            that.eleEndpointEmsSslInput.clear().sendKeys(ssl);
        }).then(function () {
            that.eleEndpointEmsConnFactoryInput.clear().sendKeys(connFactory);
        }).then(function () {
            that._autoCreateConnEndpointEms(autoCreateConn);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a EMS Endpoint, then confirm the delete operation.
    //
    definePage.prototype.delEndpointEmsYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsEmsLeftmenu);
        }).then(function () {
            that.eleEndpointsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a EMS Endpoint, then discard the delete operation.
    //
    definePage.prototype.delEndpointEmsNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsEmsLeftmenu);
        }).then(function () {
            that.eleEndpointsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a EMS Endpoint.
    //
    definePage.prototype.replicateEndpointEms = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsEmsLeftmenu);
        }).then(function () {
            that.eleEndpointsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a EMS Endpoint.
    //
    definePage.prototype.updateEndpointEms = function (name, desc, userid, password, url, ssl, connFactory) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointEMS.userid;
        password = password || browser.params.endpointEMS.password;
        url = url || browser.params.endpointEMS.url;
        connFactory = connFactory || browser.params.endpointEMS.connFactory;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsEmsLeftmenu);
        }).then(function () {
            that.eleEndpointsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointEmsNameInput);
        }).then(function () {
            that.eleEndpointEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointEmsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointEmsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointEmsUrlInput.clear().sendKeys(url);
        }).then(function () {
            that.eleEndpointEmsSslInput.clear().sendKeys(ssl);
        }).then(function () {
            that.eleEndpointEmsConnFactoryInput.clear().sendKeys(connFactory);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a EMS Endpoint, then confirm the cancel operation.
    //
    definePage.prototype.cancelEndpointEmsYes = function (name, desc, userid, password, url, ssl, connFactory) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointEMS.userid;
        password = password || browser.params.endpointEMS.password;
        url = url || browser.params.endpointEMS.url;
        connFactory = connFactory || browser.params.endpointEMS.connFactory;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsEmsLeftmenu);
        }).then(function () {
            that.eleEndpointsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointEmsNameInput);
        }).then(function () {
            that.eleEndpointEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointEmsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointEmsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointEmsUrlInput.clear().sendKeys(url);
        }).then(function () {
            that.eleEndpointEmsSslInput.clear().sendKeys(ssl);
        }).then(function () {
            that.eleEndpointEmsConnFactoryInput.clear().sendKeys(connFactory);
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
    // The function is used for cancel the changes of a EMS Endpoint, then discard the cancel operation.
    //
    definePage.prototype.cancelEndpointEmsNo = function (name, desc, userid, password, url, ssl, connFactory) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointEMS.userid;
        password = password || browser.params.endpointEMS.password;
        url = url || browser.params.endpointEMS.url;
        connFactory = connFactory || browser.params.endpointEMS.connFactory;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsEmsLeftmenu);
        }).then(function () {
            that.eleEndpointsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointEmsNameInput);
        }).then(function () {
            that.eleEndpointEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointEmsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointEmsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointEmsUrlInput.clear().sendKeys(url);
        }).then(function () {
            that.eleEndpointEmsSslInput.clear().sendKeys(ssl);
        }).then(function () {
            that.eleEndpointEmsConnFactoryInput.clear().sendKeys(connFactory);
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
    // The function is used for reset a EMS Endpoint.
    //
    definePage.prototype.resetEndpointEms = function (name, desc, userid, password, url, ssl, connFactory) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointEMS.userid;
        password = password || browser.params.endpointEMS.password;
        url = url || browser.params.endpointEMS.url;
        connFactory = connFactory || browser.params.endpointEMS.connFactory;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsEmsLeftmenu);
        }).then(function () {
            that.eleEndpointsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointEmsNameInput);
        }).then(function () {
            that.eleEndpointEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointEmsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointEmsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointEmsUrlInput.clear().sendKeys(url);
        }).then(function () {
            that.eleEndpointEmsSslInput.clear().sendKeys(ssl);
        }).then(function () {
            that.eleEndpointEmsConnFactoryInput.clear().sendKeys(connFactory);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    //
    // This function is used for set 'RV Endpoint Details' -> 'Auto create connection'
    // false: not selected
    // true: selected
    //
    definePage.prototype._autoCreateConnEndpointRv = function (autoCreateConn) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleEndpointRvAutoCreateConnCheck).then(function () {
            return that.eleEndpointRvAutoCreateConnCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (autoCreateConn) {
                    that.eleEndpointRvAutoCreateConnCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (autoCreateConn) {
                    deferred.fulfill();
                } else {
                    that.eleEndpointRvAutoCreateConnCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for add a RV Endpoint.
    //
    definePage.prototype.addEndpointRv = function (name, desc, url, autoCreateConn) {
        var deferred = protractor.promise.defer(), that = this;
        url = url || browser.params.endpointRV.url;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRvLeftmenu);
        }).then(function () {
            that.eleEndpointsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointRvNameInput);
        }).then(function () {
            that.eleEndpointRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointRvUrlInput.clear().sendKeys(url);
        }).then(function () {
            that._autoCreateConnEndpointRv(autoCreateConn);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a RV Endpoint, then confirm the delete operation.
    //
    definePage.prototype.delEndpointRvYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRvLeftmenu);
        }).then(function () {
            that.eleEndpointsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a RV Endpoint, then discard the delete operation.
    //
    definePage.prototype.delEndpointRvNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRvLeftmenu);
        }).then(function () {
            that.eleEndpointsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a RV Endpoint.
    //
    definePage.prototype.replicateEndpointRv = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRvLeftmenu);
        }).then(function () {
            that.eleEndpointsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a RV Endpoint.
    //
    definePage.prototype.updateEndpointRv = function (name, desc, url) {
        var deferred = protractor.promise.defer(), that = this;
        url = url || browser.params.endpointRV.url;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRvLeftmenu);
        }).then(function () {
            that.eleEndpointsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointRvNameInput);
        }).then(function () {
            that.eleEndpointRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointRvUrlInput.clear().sendKeys(url);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a RV Endpoint, then confirm the cancel operation.
    //
    definePage.prototype.cancelEndpointRvYes = function (name, desc, url) {
        var deferred = protractor.promise.defer(), that = this;
        url = url || browser.params.endpointEMS.url;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRvLeftmenu);
        }).then(function () {
            that.eleEndpointsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointRvNameInput);
        }).then(function () {
            that.eleEndpointRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointRvUrlInput.clear().sendKeys(url);
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
    // The function is used for cancel the changes of a RV Endpoint, then discard the cancel operation.
    //
    definePage.prototype.cancelEndpointRvNo = function (name, desc, url) {
        var deferred = protractor.promise.defer(), that = this;
        url = url || browser.params.endpointEMS.url;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRvLeftmenu);
        }).then(function () {
            that.eleEndpointsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointRvNameInput);
        }).then(function () {
            that.eleEndpointRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointRvUrlInput.clear().sendKeys(url);
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
    // The function is used for reset a RV Endpoint.
    //
    definePage.prototype.resetEndpointRv = function (name, desc, url) {
        var deferred = protractor.promise.defer(), that = this;
        url = url || browser.params.endpointEMS.url;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRvLeftmenu);
        }).then(function () {
            that.eleEndpointsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointRvNameInput);
        }).then(function () {
            that.eleEndpointRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointRvUrlInput.clear().sendKeys(url);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    //
    // This function is used for set 'CICS Endpoint Details' -> 'Specific'
    // false: not click 'Specific'
    // true: click 'Specific'
    //
    definePage.prototype._specificEndpointCics = function (specific) {
        var deferred = protractor.promise.defer(), that = this;
        if (specific) {
            that.eleEndpointCicsSpecificRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        ;
        return deferred.promise;
    };
    //
    // This function is used for set 'CICS Endpoint Details' -> 'Generic'
    // false: not click 'Generic'
    // true: click 'Generic'
    //
    definePage.prototype._genericEndpointCics = function (generic) {
        var deferred = protractor.promise.defer(), that = this;
        if (generic) {
            that.eleEndpointCicsGenericRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        ;
        return deferred.promise;
    };
    //
    // The function is used for add a CICS Endpoint.
    //
    definePage.prototype.addEndpointCics = function (name, desc, applid, administration, serviceRec, specific, generic, serviceTrg, trcLvlOnline) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);
        applid = applid || browser.params.endpointCICS.applid;
        administration = administration || browser.params.endpointCICS.administration;
        serviceRec = serviceRec || browser.params.endpointCICS.serviceRec;
        serviceTrg = serviceTrg || browser.params.endpointCICS.serviceTrg;
        desc = desc === undefined ? "" : desc;
        trcLvlOnline = trcLvlOnline === undefined ? "0" : trcLvlOnline;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsCicsLeftmenu);
        }).then(function () {
            that.eleEndpointsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointCicsNameInput);
        }).then(function () {
            that.eleEndpointCicsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointCicsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointCicsApplidInput.clear().sendKeys(applid);
        }).then(function () {
            that.eleEndpointCicsAdministrationInput.clear().sendKeys(administration);
        }).then(function () {
            that.eleEndpointCicsServiceRecInput.clear().sendKeys(serviceRec);
        }).then(function () {
            that._specificEndpointCics(specific);
        }).then(function () {
            that._genericEndpointCics(generic);
        }).then(function () {
            that.eleEndpointCicsServiceTrgInput.clear().sendKeys(serviceTrg);
        }).then(function () {
            that.eleEndpointCicsTrcLvlOnlineSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleEndpointCicsTrcLvlOnlineSpinner.clear().sendKeys(trcLvlOnline);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a CICS Endpoint, then confirm the delete operation.
    //
    definePage.prototype.delEndpointCicsYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsCicsLeftmenu);
        }).then(function () {
            that.eleEndpointsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a CICS Endpoint, then discard the delete operation.
    //
    definePage.prototype.delEndpointCicsNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsCicsLeftmenu);
        }).then(function () {
            that.eleEndpointsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a CICS Endpoint.
    //
    definePage.prototype.replicateEndpointCics = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsCicsLeftmenu);
        }).then(function () {
            that.eleEndpointsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a CICS Endpoint.
    //
    definePage.prototype.updateEndpointCics = function (name, desc, applid, administration, serviceRec, specific, generic, serviceTrg, trcLvlOnline) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);
        applid = applid || browser.params.endpointCICS.applid;
        administration = administration || browser.params.endpointCICS.administration;
        serviceRec = serviceRec || browser.params.endpointCICS.serviceRec;
        serviceTrg = serviceTrg || browser.params.endpointCICS.serviceTrg;
        desc = desc === undefined ? "" : desc;
        trcLvlOnline = trcLvlOnline === undefined ? "0" : trcLvlOnline;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsCicsLeftmenu);
        }).then(function () {
            that.eleEndpointsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointCicsNameInput);
        }).then(function () {
            that.eleEndpointCicsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointCicsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointCicsApplidInput.clear().sendKeys(applid);
        }).then(function () {
            that.eleEndpointCicsAdministrationInput.clear().sendKeys(administration);
        }).then(function () {
            that.eleEndpointCicsServiceRecInput.clear().sendKeys(serviceRec);
        }).then(function () {
            that._specificEndpointCics(specific);
        }).then(function () {
            that._genericEndpointCics(generic);
        }).then(function () {
            that.eleEndpointCicsServiceTrgInput.clear().sendKeys(serviceTrg);
        }).then(function () {
            that.eleEndpointCicsTrcLvlOnlineSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleEndpointCicsTrcLvlOnlineSpinner.clear().sendKeys(trcLvlOnline);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a CICS Endpoint, then confirm the cancel operation.
    //
    definePage.prototype.cancelEndpointCicsYes = function (name, desc, applid, administration, serviceRec, specific, generic, serviceTrg, trcLvlOnline) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);
        applid = applid || browser.params.endpointCICS.applid;
        administration = administration || browser.params.endpointCICS.administration;
        serviceRec = serviceRec || browser.params.endpointCICS.serviceRec;
        serviceTrg = serviceTrg || browser.params.endpointCICS.serviceTrg;
        desc = desc === undefined ? "" : desc;
        trcLvlOnline = trcLvlOnline === undefined ? "0" : trcLvlOnline;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsCicsLeftmenu);
        }).then(function () {
            that.eleEndpointsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointCicsNameInput);
        }).then(function () {
            that.eleEndpointCicsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointCicsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointCicsApplidInput.clear().sendKeys(applid);
        }).then(function () {
            that.eleEndpointCicsAdministrationInput.clear().sendKeys(administration);
        }).then(function () {
            that.eleEndpointCicsServiceRecInput.clear().sendKeys(serviceRec);
        }).then(function () {
            that._specificEndpointCics(specific);
        }).then(function () {
            that._genericEndpointCics(generic);
        }).then(function () {
            that.eleEndpointCicsServiceTrgInput.clear().sendKeys(serviceTrg);
        }).then(function () {
            that.eleEndpointCicsTrcLvlOnlineSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleEndpointCicsTrcLvlOnlineSpinner.clear().sendKeys(trcLvlOnline);
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
    // The function is used for cancel the changes of a CICS Endpoint, then discard the cancel operation.
    //
    definePage.prototype.cancelEndpointCicsNo = function (name, desc, applid, administration, serviceRec, specific, generic, serviceTrg, trcLvlOnline) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);
        applid = applid || browser.params.endpointCICS.applid;
        administration = administration || browser.params.endpointCICS.administration;
        serviceRec = serviceRec || browser.params.endpointCICS.serviceRec;
        serviceTrg = serviceTrg || browser.params.endpointCICS.serviceTrg;
        desc = desc === undefined ? "" : desc;
        trcLvlOnline = trcLvlOnline === undefined ? "0" : trcLvlOnline;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsCicsLeftmenu);
        }).then(function () {
            that.eleEndpointsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointCicsNameInput);
        }).then(function () {
            that.eleEndpointCicsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointCicsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointCicsApplidInput.clear().sendKeys(applid);
        }).then(function () {
            that.eleEndpointCicsAdministrationInput.clear().sendKeys(administration);
        }).then(function () {
            that.eleEndpointCicsServiceRecInput.clear().sendKeys(serviceRec);
        }).then(function () {
            that._specificEndpointCics(specific);
        }).then(function () {
            that._genericEndpointCics(generic);
        }).then(function () {
            that.eleEndpointCicsServiceTrgInput.clear().sendKeys(serviceTrg);
        }).then(function () {
            that.eleEndpointCicsTrcLvlOnlineSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleEndpointCicsTrcLvlOnlineSpinner.clear().sendKeys(trcLvlOnline);
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
    // The function is used for reset a CICS Endpoint.
    //
    definePage.prototype.resetEndpointCics = function (name, desc, applid, administration, serviceRec, specific, generic, serviceTrg, trcLvlOnline) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);
        applid = applid || browser.params.endpointCICS.applid;
        administration = administration || browser.params.endpointCICS.administration;
        serviceRec = serviceRec || browser.params.endpointCICS.serviceRec;
        serviceTrg = serviceTrg || browser.params.endpointCICS.serviceTrg;
        desc = desc === undefined ? "" : desc;
        trcLvlOnline = trcLvlOnline === undefined ? "0" : trcLvlOnline;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsCicsLeftmenu);
        }).then(function () {
            that.eleEndpointsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointCicsNameInput);
        }).then(function () {
            that.eleEndpointCicsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointCicsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointCicsApplidInput.clear().sendKeys(applid);
        }).then(function () {
            that.eleEndpointCicsAdministrationInput.clear().sendKeys(administration);
        }).then(function () {
            that.eleEndpointCicsServiceRecInput.clear().sendKeys(serviceRec);
        }).then(function () {
            that._specificEndpointCics(specific);
        }).then(function () {
            that._genericEndpointCics(generic);
        }).then(function () {
            that.eleEndpointCicsServiceTrgInput.clear().sendKeys(serviceTrg);
        }).then(function () {
            that.eleEndpointCicsTrcLvlOnlineSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleEndpointCicsTrcLvlOnlineSpinner.clear().sendKeys(trcLvlOnline);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    //
    // The function is used for add a IMS Endpoint.
    //
    definePage.prototype.addEndpointIms = function (name, desc, applid, xcfGrp) {
        var deferred = protractor.promise.defer(), that = this;
        applid = applid || browser.params.endpointIMS.applid;
        xcfGrp = xcfGrp || browser.params.endpointIMS.xcfGrp;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsImsLeftmenu);
        }).then(function () {
            that.eleEndpointsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointImsNameInput);
        }).then(function () {
            that.eleEndpointImsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointImsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointImsApplidInput.clear().sendKeys(applid);
        }).then(function () {
            that.eleEndpointImsXcfGrpInput.clear().sendKeys(xcfGrp);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a IMS Endpoint, then confirm the delete operation.
    //
    definePage.prototype.delEndpointImsYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsImsLeftmenu);
        }).then(function () {
            that.eleEndpointsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a IMS Endpoint, then discard the delete operation.
    //
    definePage.prototype.delEndpointImsNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsImsLeftmenu);
        }).then(function () {
            that.eleEndpointsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a IMS Endpoint.
    //
    definePage.prototype.replicateEndpointIms = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsImsLeftmenu);
        }).then(function () {
            that.eleEndpointsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a IMS Endpoint.
    //
    definePage.prototype.updateEndpointIms = function (name, desc, applid, xcfGrp) {
        var deferred = protractor.promise.defer(), that = this;
        applid = applid || browser.params.endpointIMS.applid;
        xcfGrp = xcfGrp || browser.params.endpointIMS.xcfGrp;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsImsLeftmenu);
        }).then(function () {
            that.eleEndpointsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointImsNameInput);
        }).then(function () {
            that.eleEndpointImsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointImsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointImsApplidInput.clear().sendKeys(applid);
        }).then(function () {
            that.eleEndpointImsXcfGrpInput.clear().sendKeys(xcfGrp);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a IMS Endpoint, then confirm the cancel operation.
    //
    definePage.prototype.cancelEndpointImsYes = function (name, desc, applid, xcfGrp) {
        var deferred = protractor.promise.defer(), that = this;
        applid = applid || browser.params.endpointIMS.applid;
        xcfGrp = xcfGrp || browser.params.endpointIMS.xcfGrp;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsImsLeftmenu);
        }).then(function () {
            that.eleEndpointsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointImsNameInput);
        }).then(function () {
            that.eleEndpointImsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointImsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointImsApplidInput.clear().sendKeys(applid);
        }).then(function () {
            that.eleEndpointImsXcfGrpInput.clear().sendKeys(xcfGrp);
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
    // The function is used for cancel the changes of a IMS Endpoint, then discard the cancel operation.
    //
    definePage.prototype.cancelEndpointImsNo = function (name, desc, applid, xcfGrp) {
        var deferred = protractor.promise.defer(), that = this;
        applid = applid || browser.params.endpointIMS.applid;
        xcfGrp = xcfGrp || browser.params.endpointIMS.xcfGrp;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsImsLeftmenu);
        }).then(function () {
            that.eleEndpointsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointImsNameInput);
        }).then(function () {
            that.eleEndpointImsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointImsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointImsApplidInput.clear().sendKeys(applid);
        }).then(function () {
            that.eleEndpointImsXcfGrpInput.clear().sendKeys(xcfGrp);
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
    // The function is used for reset a IMS Endpoint.
    //
    definePage.prototype.resetEndpointIms = function (name, desc, applid, xcfGrp) {
        var deferred = protractor.promise.defer(), that = this;
        applid = applid || browser.params.endpointIMS.applid;
        xcfGrp = xcfGrp || browser.params.endpointIMS.xcfGrp;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsImsLeftmenu);
        }).then(function () {
            that.eleEndpointsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointImsNameInput);
        }).then(function () {
            that.eleEndpointImsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointImsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointImsApplidInput.clear().sendKeys(applid);
        }).then(function () {
            that.eleEndpointImsXcfGrpInput.clear().sendKeys(xcfGrp);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    //
    // The function is used for add a Admin Endpoint.
    //
    definePage.prototype.addEndpointAdm = function (name, desc) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsAdmLeftmenu);
        }).then(function () {
            that.eleEndpointsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointAdmNameInput);
        }).then(function () {
            that.eleEndpointAdmNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointAdmDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a Admin Endpoint, then confirm the delete operation.
    //
    definePage.prototype.delEndpointAdmYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsAdmLeftmenu);
        }).then(function () {
            that.eleEndpointsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a Admin Endpoint, then discard the delete operation.
    //
    definePage.prototype.delEndpointAdmNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsAdmLeftmenu);
        }).then(function () {
            that.eleEndpointsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a Admin Endpoint.
    //
    definePage.prototype.replicateEndpointAdm = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsAdmLeftmenu);
        }).then(function () {
            that.eleEndpointsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a Admin Endpoint.
    //
    definePage.prototype.updateEndpointAdm = function (name, desc) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsAdmLeftmenu);
        }).then(function () {
            that.eleEndpointsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointAdmNameInput);
        }).then(function () {
            that.eleEndpointAdmNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointAdmDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a Admin Endpoint, then confirm the cancel operation.
    //
    definePage.prototype.cancelEndpointAdmYes = function (name, desc) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsAdmLeftmenu);
        }).then(function () {
            that.eleEndpointsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointAdmNameInput);
        }).then(function () {
            that.eleEndpointAdmNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointAdmDescInput.clear().sendKeys(desc);
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
    // The function is used for cancel the changes of a Admin Endpoint, then discard the cancel operation.
    //
    definePage.prototype.cancelEndpointAdmNo = function (name, desc) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsAdmLeftmenu);
        }).then(function () {
            that.eleEndpointsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointAdmNameInput);
        }).then(function () {
            that.eleEndpointAdmNameInput.clear();
        }).then(function () {
            that.eleEndpointAdmNameInput.sendKeys(name);
        }).then(function () {
            that.eleEndpointAdmDescInput.clear().sendKeys(desc);
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
    // The function is used for reset a Admin Endpoint.
    //
    definePage.prototype.resetEndpointAdm = function (name, desc) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsAdmLeftmenu);
        }).then(function () {
            that.eleEndpointsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointAdmNameInput);
        }).then(function () {
            that.eleEndpointAdmNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointAdmDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    //
    // This function is used for set Substation Endpoint 'Use TLS Connection'
    // false: not click 'Use TLS Connection'
    // true: click 'Use TLS Connection'
    //
    definePage.prototype._useTlsConnEndpointSs = function (tls) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleEndpointSsUseTlsConnCheck).then(function () {
            return that.eleEndpointSsUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (tls) {
                    that.eleEndpointSsUseTlsConnCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (tls) {
                    deferred.fulfill();
                } else {
                    that.eleEndpointSsUseTlsConnCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
            ;
        });
        return deferred.promise;
    };
    //
    // The function is used for add a Substation Endpoint.
    //
    definePage.prototype.addEndpointSs = function (name, desc, userid, password, url, tls) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointSSES.userid;
        password = password || browser.params.endpointSSES.password;
        url = url || browser.params.endpointSSES.url;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsSsLeftmenu);
        }).then(function () {
            that.eleEndpointsSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointSsNameInput);
        }).then(function () {
            that.eleEndpointSsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointSsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointSsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointSsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointSsUrlInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnEndpointSs(tls);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a Substation Endpoint, then confirm the delete operation.
    //
    definePage.prototype.delEndpointSsYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsSsLeftmenu);
        }).then(function () {
            that.eleEndpointsSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a Substation Endpoint, then discard the delete operation.
    //
    definePage.prototype.delEndpointSsNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsSsLeftmenu);
        }).then(function () {
            that.eleEndpointsSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a Substation Endpoint.
    //
    definePage.prototype.replicateEndpointSs = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsSsLeftmenu);
        }).then(function () {
            that.eleEndpointsSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a Substation Endpoint.
    //
    definePage.prototype.updateEndpointSs = function (name, desc, userid, password, url, tls) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointSSES.userid;
        password = password || browser.params.endpointSSES.password;
        url = url || browser.params.endpointSSES.url;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsSsLeftmenu);
        }).then(function () {
            that.eleEndpointsSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointSsNameInput);
        }).then(function () {
            that.eleEndpointSsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointSsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointSsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointSsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointSsUrlInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnEndpointSs(tls);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a Substation Endpoint, then confirm the cancel operation.
    //
    definePage.prototype.cancelEndpointSsYes = function (name, desc, userid, password, url, tls) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointSSES.userid;
        password = password || browser.params.endpointSSES.password;
        url = url || browser.params.endpointSSES.url;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsSsLeftmenu);
        }).then(function () {
            that.eleEndpointsSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointSsNameInput);
        }).then(function () {
            that.eleEndpointSsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointSsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointSsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointSsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointSsUrlInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnEndpointSs(tls);
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
    // The function is used for cancel the changes of a Substation Endpoint, then discard the cancel operation.
    //
    definePage.prototype.cancelEndpointSsNo = function (name, desc, userid, password, url, tls) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointSSES.userid;
        password = password || browser.params.endpointSSES.password;
        url = url || browser.params.endpointSSES.url;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsSsLeftmenu);
        }).then(function () {
            that.eleEndpointsSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointSsNameInput);
        }).then(function () {
            that.eleEndpointSsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointSsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointSsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointSsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointSsUrlInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnEndpointSs(tls);
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
    // The function is used for reset a Substation Endpoint.
    //
    definePage.prototype.resetEndpointSs = function (name, desc, userid, password, url, tls) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointSSES.userid;
        password = password || browser.params.endpointSSES.password;
        url = url || browser.params.endpointSSES.url;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsSsLeftmenu);
        }).then(function () {
            that.eleEndpointsSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointSsNameInput);
        }).then(function () {
            that.eleEndpointSsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointSsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointSsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointSsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointSsUrlInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnEndpointSs(tls);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    //
    // This function is used for set RED Endpoint 'Use TLS Connection'
    // false: not click 'Use TLS Connection'
    // true: click 'Use TLS Connection'
    //
    definePage.prototype._useTlsConnEndpointRed = function (tls) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleEndpointRedUseTlsConnCheck).then(function () {
            return that.eleEndpointRedUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (tls) {
                    that.eleEndpointRedUseTlsConnCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (tls) {
                    deferred.fulfill();
                } else {
                    that.eleEndpointRedUseTlsConnCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
            ;
        });
        return deferred.promise;
    };
    //
    // The function is used for add a RED Endpoint.
    //
    definePage.prototype.addEndpointRed = function (name, desc, userid, password, url, tls) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointRED.userid;
        password = password || browser.params.endpointRED.password;
        url = url || browser.params.endpointRED.url;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRedLeftmenu);
        }).then(function () {
            that.eleEndpointsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointRedNameInput);
        }).then(function () {
            that.eleEndpointRedNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointRedDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointRedUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointRedPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointRedUrlInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnEndpointRed(tls);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a RED Endpoint, then confirm the delete operation.
    //
    definePage.prototype.delEndpointRedYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRedLeftmenu);
        }).then(function () {
            that.eleEndpointsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a RED Endpoint, then discard the delete operation.
    //
    definePage.prototype.delEndpointRedNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRedLeftmenu);
        }).then(function () {
            that.eleEndpointsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a RED Endpoint.
    //
    definePage.prototype.replicateEndpointRed = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRedLeftmenu);
        }).then(function () {
            that.eleEndpointsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a RED Endpoint.
    //
    definePage.prototype.updateEndpointRed = function (name, desc, userid, password, url, tls) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointRED.userid;
        password = password || browser.params.endpointRED.password;
        url = url || browser.params.endpointRED.url;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRedLeftmenu);
        }).then(function () {
            that.eleEndpointsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointRedNameInput);
        }).then(function () {
            that.eleEndpointRedNameInput.clear();
        }).then(function () {
            that.eleEndpointRedNameInput.sendKeys(name);
        }).then(function () {
            that.eleEndpointRedDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointRedUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointRedPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointRedUrlInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnEndpointRed(tls);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a RED Endpoint, then confirm the cancel operation.
    //
    definePage.prototype.cancelEndpointRedYes = function (name, desc, userid, password, url, tls) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointRED.userid;
        password = password || browser.params.endpointRED.password;
        url = url || browser.params.endpointRED.url;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRedLeftmenu);
        }).then(function () {
            that.eleEndpointsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointRedNameInput);
        }).then(function () {
            that.eleEndpointRedNameInput.clear();
        }).then(function () {
            that.eleEndpointRedNameInput.sendKeys(name);
        }).then(function () {
            that.eleEndpointRedDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointRedUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointRedPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointSsUrlInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnEndpointRed(tls);
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
    // The function is used for cancel the changes of a RED Endpoint, then discard the cancel operation.
    //
    definePage.prototype.cancelEndpointRedNo = function (name, desc, userid, password, url, tls) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointRED.userid;
        password = password || browser.params.endpointRED.password;
        url = url || browser.params.endpointRED.url;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRedLeftmenu);
        }).then(function () {
            that.eleEndpointsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointRedNameInput);
        }).then(function () {
            that.eleEndpointRedNameInput.clear();
        }).then(function () {
            that.eleEndpointRedNameInput.sendKeys(name);
        }).then(function () {
            that.eleEndpointRedDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointRedUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointRedPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointSsUrlInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnEndpointRed(tls);
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
    // The function is used for reset a RED Endpoint.
    //
    definePage.prototype.resetEndpointRed = function (name, desc, userid, password, url, tls) {
        var deferred = protractor.promise.defer(), that = this;
        userid = userid || browser.params.endpointRED.userid;
        password = password || browser.params.endpointRED.password;
        url = url || browser.params.endpointRED.url;
        desc = desc === undefined ? "" : desc;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleEndpointsRedLeftmenu);
        }).then(function () {
            that.eleEndpointsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleEndpointRedNameInput);
        }).then(function () {
            that.eleEndpointRedNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleEndpointRedDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleEndpointRedUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleEndpointRedPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleEndpointSsUrlInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnEndpointRed(tls);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    //
    // This function is used for set EMS Connection 'Startup'
    // false: not click
    // true: click
    //
    definePage.prototype._startupConnEms = function (startup) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleConnEmsStartupCheck).then(function () {
            return that.eleConnEmsStartupCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (startup) {
                    that.eleConnEmsStartupCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (startup) {
                    deferred.fulfill();
                } else {
                    that.eleConnEmsStartupCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set EMS Connection 'Multi Session'
    // false: not click
    // true: click
    //
    definePage.prototype._multiSessionConnEms = function (multiSession) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleConnEmsMultiSessionCheck).then(function () {
            return that.eleConnEmsMultiSessionCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (multiSession) {
                    that.eleConnEmsMultiSessionCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (multiSession) {
                    deferred.fulfill();
                } else {
                    that.eleConnEmsMultiSessionCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'EMS Connection Details' -> 'Metric'
    //
    definePage.prototype._metricConnEms = function (metric) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleConnEmsMetricDropdown).then(function () {
            return that.eleConnEmsMetricDropdown.getText();
        }).then(function (message) {
            if (message === metric) {
                deferred.fulfill();
            } else {
                that.eleConnEmsMetricDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleConnEmsMetricSelected(metric));
                }).then(function () {
                    that.eleConnEmsMetricSelected(metric).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set EMS Connection 'Create Admin Connection'
    // false: not click
    // true: click
    //
    definePage.prototype._admConnConnEms = function (admConn, admUserid, admPassword) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleConnEmsCreateAdmConnCheck).then(function () {
            return that.eleConnEmsCreateAdmConnCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (admConn) {
                    that.eleConnEmsCreateAdmConnCheck.click().then(function () {
                        globalCommons.waitForElementPresent(that.eleConnEmsAdmConnUserInput);
                    }).then(function () {
                        that.eleConnEmsAdmConnUserInput.clear().sendKeys(admUserid);
                    }).then(function () {
                        that.eleConnEmsAdmConnPasswordInput.clear().sendKeys(admPassword);
                    }).then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (admConn) {
                    globalCommons.waitForElementPresent(that.eleConnEmsAdmConnUserInput).then(function () {
                        that.eleConnEmsAdmConnUserInput.clear().sendKeys(admUserid);
                    }).then(function () {
                        that.eleConnEmsAdmConnPasswordInput.clear().sendKeys(admPassword);
                    }).then(function () {
                        deferred.fulfill();
                    });
                } else {
                    that.eleConnEmsCreateAdmConnCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for add a EMS Connection.
    //
    definePage.prototype.addConnEms = function (name, desc, startup, multiSession, endpoint, ssl, userid, password, attemptConn, attemptReconn, delayConn, delayReconn, toConn, toReconn, metric, networkCode, hostCode, tcpipStack, intf, admConn, admUserid, admPassword) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;
        ssl = ssl === undefined ? "" : ssl;
        userid = userid || browser.params.connEMS.userid;
        password = password || browser.params.connEMS.password;
        attemptConn = attemptConn === undefined ? "9999999" : attemptConn;
        attemptReconn = attemptReconn === undefined ? "9999999" : attemptReconn;
        delayConn = delayConn === undefined ? "500" : delayConn;
        delayReconn = delayReconn === undefined ? "500" : delayReconn;
        toConn = toConn === undefined ? "15000" : toConn;
        toReconn = toReconn === undefined ? "15000" : toReconn;
        metric = metric === undefined ? "None" : metric;
        networkCode = networkCode === undefined ? "" : networkCode;
        hostCode = hostCode === undefined ? "" : hostCode;
        tcpipStack = tcpipStack === undefined ? "" : tcpipStack;
        intf = intf === undefined ? "" : intf;
        admUserid = admUserid || browser.params.connEMS.admConnUserid;
        admPassword = admPassword || browser.params.connEMS.admConnPassword;


        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsLeftmenu);
        }).then(function () {
            that.eleConnsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnEmsNameInput);
        }).then(function () {
            that.eleConnEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._startupConnEms(startup);
        }).then(function () {
            that._multiSessionConnEms(multiSession);
        }).then(function () {
            that.eleConnEmsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleConnEmsSslInput.clear().sendKeys(ssl);
        }).then(function () {
            that.eleConnEmsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleConnEmsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleConnEmsAttemptsConnInput.clear().sendKeys(attemptConn);
        }).then(function () {
            that.eleConnEmsAttemptsReconnInput.clear().sendKeys(attemptReconn);
        }).then(function () {
            that.eleConnEmsDelayConnInput.clear().sendKeys(delayConn);
        }).then(function () {
            that.eleConnEmsDelayReconnInput.clear().sendKeys(delayReconn);
        }).then(function () {
            that.eleConnEmsTimeoutConnInput.clear().sendKeys(toConn);
        }).then(function () {
            that.eleConnEmsTimeoutReconnInput.clear().sendKeys(toReconn);
        }).then(function () {
            that.eleConnEmsNetworkCodepageInput.clear().sendKeys(networkCode);
        }).then(function () {
            that._metricConnEms(metric);
        }).then(function () {
            that._admConnConnEms(admConn, admUserid, admPassword);
        }).then(function () {
            that.eleConnEmsHostCodepageInput.clear().sendKeys(hostCode);
        }).then(function () {
            that.eleConnEmsTcpipStackNameInput.clear().sendKeys(tcpipStack);
        }).then(function () {
            that.eleConnEmsIntfInput.clear().sendKeys(intf);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a EMS Connection, then confirm the delete operation.
    //
    definePage.prototype.delConnEmsYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsLeftmenu);
        }).then(function () {
            that.eleConnsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a EMS Connection, then discard the delete operation.
    //
    definePage.prototype.delConnEmsNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsLeftmenu);
        }).then(function () {
            that.eleConnsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a EMS Connection.
    //
    definePage.prototype.replicateConnEms = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsLeftmenu);
        }).then(function () {
            that.eleConnsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a EMS Connection.
    //
    definePage.prototype.updateConnEms = function (name, desc, startup, multiSession, endpoint, ssl, userid, password, attemptConn, attemptReconn, delayConn, delayReconn, toConn, toReconn, metric, networkCode, hostCode, tcpipStack, intf, admConn, admUserid, admPassword) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;
        ssl = ssl === undefined ? "" : ssl;
        userid = userid || browser.params.connEMS.userid;
        password = password || browser.params.connEMS.password;
        attemptConn = attemptConn === undefined ? "9999999" : attemptConn;
        attemptReconn = attemptReconn === undefined ? "9999999" : attemptReconn;
        delayConn = delayConn === undefined ? "500" : delayConn;
        delayReconn = delayReconn === undefined ? "500" : delayReconn;
        toConn = toConn === undefined ? "15000" : toConn;
        toReconn = toReconn === undefined ? "15000" : toReconn;
        metric = metric === undefined ? "None" : metric;
        networkCode = networkCode === undefined ? "" : networkCode;
        hostCode = hostCode === undefined ? "" : hostCode;
        tcpipStack = tcpipStack === undefined ? "" : tcpipStack;
        intf = intf === undefined ? "" : intf;
        admUserid = admUserid || browser.params.connEMS.admConnUserid;
        admPassword = admPassword || browser.params.connEMS.admConnPassword;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsLeftmenu);
        }).then(function () {
            that.eleConnsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnEmsNameInput);
        }).then(function () {
            that.eleConnEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._startupConnEms(startup);
        }).then(function () {
            that._multiSessionConnEms(multiSession);
        }).then(function () {
            that.eleConnEmsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleConnEmsSslInput.clear().sendKeys(ssl);
        }).then(function () {
            that.eleConnEmsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleConnEmsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleConnEmsAttemptsConnInput.clear().sendKeys(attemptConn);
        }).then(function () {
            that.eleConnEmsAttemptsReconnInput.clear().sendKeys(attemptReconn);
        }).then(function () {
            that.eleConnEmsDelayConnInput.clear().sendKeys(delayConn);
        }).then(function () {
            that.eleConnEmsDelayReconnInput.clear().sendKeys(delayReconn);
        }).then(function () {
            that.eleConnEmsTimeoutConnInput.clear().sendKeys(toConn);
        }).then(function () {
            that.eleConnEmsTimeoutReconnInput.clear().sendKeys(toReconn);
        }).then(function () {
            that.eleConnEmsNetworkCodepageInput.clear().sendKeys(networkCode);
        }).then(function () {
            that._metricConnEms(metric);
        }).then(function () {
            that._admConnConnEms(admConn, admUserid, admPassword);
        }).then(function () {
            that.eleConnEmsHostCodepageInput.clear().sendKeys(hostCode);
        }).then(function () {
            that.eleConnEmsTcpipStackNameInput.clear().sendKeys(tcpipStack);
        }).then(function () {
            that.eleConnEmsIntfInput.clear().sendKeys(intf);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a EMS Connection, then confirm the cancel operation.
    //
    definePage.prototype.cancelConnEmsYes = function (name, desc, startup, multiSession, endpoint, ssl, userid, password, attemptConn, attemptReconn, delayConn, delayReconn, toConn, toReconn, metric, networkCode, hostCode, tcpipStack, intf, admConn, admUserid, admPassword) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;
        ssl = ssl === undefined ? "" : ssl;
        userid = userid || browser.params.connEMS.userid;
        password = password || browser.params.connEMS.password;
        attemptConn = attemptConn === undefined ? "9999999" : attemptConn;
        attemptReconn = attemptReconn === undefined ? "9999999" : attemptReconn;
        delayConn = delayConn === undefined ? "500" : delayConn;
        delayReconn = delayReconn === undefined ? "500" : delayReconn;
        toConn = toConn === undefined ? "15000" : toConn;
        toReconn = toReconn === undefined ? "15000" : toReconn;
        metric = metric === undefined ? "None" : metric;
        networkCode = networkCode === undefined ? "" : networkCode;
        hostCode = hostCode === undefined ? "" : hostCode;
        tcpipStack = tcpipStack === undefined ? "" : tcpipStack;
        intf = intf === undefined ? "" : intf;
        admUserid = admUserid || browser.params.connEMS.admConnUserid;
        admPassword = admPassword || browser.params.connEMS.admConnPassword;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsLeftmenu);
        }).then(function () {
            that.eleConnsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnEmsNameInput);
        }).then(function () {
            that.eleConnEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._startupConnEms(startup);
        }).then(function () {
            that._multiSessionConnEms(multiSession);
        }).then(function () {
            that.eleConnEmsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleConnEmsSslInput.clear().sendKeys(ssl);
        }).then(function () {
            that.eleConnEmsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleConnEmsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleConnEmsAttemptsConnInput.clear().sendKeys(attemptConn);
        }).then(function () {
            that.eleConnEmsAttemptsReconnInput.clear().sendKeys(attemptReconn);
        }).then(function () {
            that.eleConnEmsDelayConnInput.clear().sendKeys(delayConn);
        }).then(function () {
            that.eleConnEmsDelayReconnInput.clear().sendKeys(delayReconn);
        }).then(function () {
            that.eleConnEmsTimeoutConnInput.clear().sendKeys(toConn);
        }).then(function () {
            that.eleConnEmsTimeoutReconnInput.clear().sendKeys(toReconn);
        }).then(function () {
            that.eleConnEmsNetworkCodepageInput.clear().sendKeys(networkCode);
        }).then(function () {
            that._metricConnEms(metric);
        }).then(function () {
            that._admConnConnEms(admConn, admUserid, admPassword);
        }).then(function () {
            that.eleConnEmsHostCodepageInput.clear().sendKeys(hostCode);
        }).then(function () {
            that.eleConnEmsTcpipStackNameInput.clear().sendKeys(tcpipStack);
        }).then(function () {
            that.eleConnEmsIntfInput.clear().sendKeys(intf);
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
    // The function is used for cancel the changes of a EMS Connection, then discard the cancel operation.
    //
    definePage.prototype.cancelConnEmsNo = function (name, desc, startup, multiSession, endpoint, ssl, userid, password, attemptConn, attemptReconn, delayConn, delayReconn, toConn, toReconn, metric, networkCode, hostCode, tcpipStack, intf, admConn, admUserid, admPassword) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;
        ssl = ssl === undefined ? "" : ssl;
        userid = userid || browser.params.connEMS.userid;
        password = password || browser.params.connEMS.password;
        attemptConn = attemptConn === undefined ? "9999999" : attemptConn;
        attemptReconn = attemptReconn === undefined ? "9999999" : attemptReconn;
        delayConn = delayConn === undefined ? "500" : delayConn;
        delayReconn = delayReconn === undefined ? "500" : delayReconn;
        toConn = toConn === undefined ? "15000" : toConn;
        toReconn = toReconn === undefined ? "15000" : toReconn;
        metric = metric === undefined ? "None" : metric;
        networkCode = networkCode === undefined ? "" : networkCode;
        hostCode = hostCode === undefined ? "" : hostCode;
        tcpipStack = tcpipStack === undefined ? "" : tcpipStack;
        intf = intf === undefined ? "" : intf;
        admUserid = admUserid || browser.params.connEMS.admConnUserid;
        admPassword = admPassword || browser.params.connEMS.admConnPassword;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsLeftmenu);
        }).then(function () {
            that.eleConnsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnEmsNameInput);
        }).then(function () {
            that.eleConnEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._startupConnEms(startup);
        }).then(function () {
            that._multiSessionConnEms(multiSession);
        }).then(function () {
            that.eleConnEmsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleConnEmsSslInput.clear().sendKeys(ssl);
        }).then(function () {
            that.eleConnEmsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleConnEmsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleConnEmsAttemptsConnInput.clear().sendKeys(attemptConn);
        }).then(function () {
            that.eleConnEmsAttemptsReconnInput.clear().sendKeys(attemptReconn);
        }).then(function () {
            that.eleConnEmsDelayConnInput.clear().sendKeys(delayConn);
        }).then(function () {
            that.eleConnEmsDelayReconnInput.clear().sendKeys(delayReconn);
        }).then(function () {
            that.eleConnEmsTimeoutConnInput.clear().sendKeys(toConn);
        }).then(function () {
            that.eleConnEmsTimeoutReconnInput.clear().sendKeys(toReconn);
        }).then(function () {
            that.eleConnEmsNetworkCodepageInput.clear().sendKeys(networkCode);
        }).then(function () {
            that._metricConnEms(metric);
        }).then(function () {
            that._admConnConnEms(admConn, admUserid, admPassword);
        }).then(function () {
            that.eleConnEmsHostCodepageInput.clear().sendKeys(hostCode);
        }).then(function () {
            that.eleConnEmsTcpipStackNameInput.clear().sendKeys(tcpipStack);
        }).then(function () {
            that.eleConnEmsIntfInput.clear().sendKeys(intf);
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
    // The function is used for reset a EMS Connection.
    //
    definePage.prototype.resetConnEms = function (name, desc, startup, multiSession, endpoint, ssl, userid, password, attemptConn, attemptReconn, delayConn, delayReconn, toConn, toReconn, metric, networkCode, hostCode, tcpipStack, intf, admConn, admUserid, admPassword) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;
        ssl = ssl === undefined ? "" : ssl;
        userid = userid || browser.params.connEMS.userid;
        password = password || browser.params.connEMS.password;
        attemptConn = attemptConn === undefined ? "9999999" : attemptConn;
        attemptReconn = attemptReconn === undefined ? "9999999" : attemptReconn;
        delayConn = delayConn === undefined ? "500" : delayConn;
        delayReconn = delayReconn === undefined ? "500" : delayReconn;
        toConn = toConn === undefined ? "15000" : toConn;
        toReconn = toReconn === undefined ? "15000" : toReconn;
        metric = metric === undefined ? "None" : metric;
        networkCode = networkCode === undefined ? "" : networkCode;
        hostCode = hostCode === undefined ? "" : hostCode;
        tcpipStack = tcpipStack === undefined ? "" : tcpipStack;
        intf = intf === undefined ? "" : intf;
        admUserid = admUserid || browser.params.connEMS.admConnUserid;
        admPassword = admPassword || browser.params.connEMS.admConnPassword;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsLeftmenu);
        }).then(function () {
            that.eleConnsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnEmsNameInput);
        }).then(function () {
            that.eleConnEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._startupConnEms(startup);
        }).then(function () {
            that._multiSessionConnEms(multiSession);
        }).then(function () {
            that.eleConnEmsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleConnEmsSslInput.clear().sendKeys(ssl);
        }).then(function () {
            that.eleConnEmsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that.eleConnEmsPasswordInput.clear().sendKeys(password);
        }).then(function () {
            that.eleConnEmsAttemptsConnInput.clear().sendKeys(attemptConn);
        }).then(function () {
            that.eleConnEmsAttemptsReconnInput.clear().sendKeys(attemptReconn);
        }).then(function () {
            that.eleConnEmsDelayConnInput.clear().sendKeys(delayConn);
        }).then(function () {
            that.eleConnEmsDelayReconnInput.clear().sendKeys(delayReconn);
        }).then(function () {
            that.eleConnEmsTimeoutConnInput.clear().sendKeys(toConn);
        }).then(function () {
            that.eleConnEmsTimeoutReconnInput.clear().sendKeys(toReconn);
        }).then(function () {
            that.eleConnEmsNetworkCodepageInput.clear().sendKeys(networkCode);
        }).then(function () {
            that._metricConnEms(metric);
        }).then(function () {
            that._admConnConnEms(admConn, admUserid, admPassword);
        }).then(function () {
            that.eleConnEmsHostCodepageInput.clear().sendKeys(hostCode);
        }).then(function () {
            that.eleConnEmsTcpipStackNameInput.clear().sendKeys(tcpipStack);
        }).then(function () {
            that.eleConnEmsIntfInput.clear().sendKeys(intf);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    //
    // This function is used for set 'EMS SSL Definition Details' -> 'Authorization Only'
    // false: not selected
    // true: selected
    //
    definePage.prototype._authOnlyConnEmsSsl = function (authOnly) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleConnEmsSslAuthOnlyCheck).then(function () {
            return that.eleConnEmsSslAuthOnlyCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (authOnly) {
                    that.eleConnEmsSslAuthOnlyCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (authOnly) {
                    deferred.fulfill();
                } else {
                    that.eleConnEmsSslAuthOnlyCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'EMS SSL Definition Details' -> 'Enable FIPS 140-2'
    // false: not selected
    // true: selected
    //
    definePage.prototype._enableFips1402ConnEmsSsl = function (fips) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleConnEmsSslEnableFipsCheck).then(function () {
            return that.eleConnEmsSslEnableFipsCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (fips) {
                    that.eleConnEmsSslEnableFipsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (fips) {
                    deferred.fulfill();
                } else {
                    that.eleConnEmsSslEnableFipsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'EMS SSL Definition Details' -> 'Enable SSLV3'
    // false: not selected
    // true: selected
    //
    definePage.prototype._enableSslv3ConnEmsSsl = function (sslv3) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleConnEmsSslEnableSslv3Check).then(function () {
            return that.eleConnEmsSslEnableSslv3Check.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (sslv3) {
                    that.eleConnEmsSslEnableSslv3Check.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (sslv3) {
                    deferred.fulfill();
                } else {
                    that.eleConnEmsSslEnableSslv3Check.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'EMS SSL Definition Details' -> 'Enable TLS1'
    // false: not selected
    // true: selected
    //
    definePage.prototype._enableTls1ConnEmsSsl = function (tls1) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleConnEmsSslEnableTls1Check).then(function () {
            return that.eleConnEmsSslEnableTls1Check.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (tls1) {
                    that.eleConnEmsSslEnableTls1Check.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (tls1) {
                    deferred.fulfill();
                } else {
                    that.eleConnEmsSslEnableTls1Check.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'EMS SSL Definition Details' -> 'Verify Host Name'
    // false: not selected
    // true: selected
    //
    definePage.prototype._verifyHostnameConnEmsSsl = function (verifyHost) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleConnEmsSslVerifyHostnameCheck).then(function () {
            return that.eleConnEmsSslVerifyHostnameCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (verifyHost) {
                    that.eleConnEmsSslVerifyHostnameCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (verifyHost) {
                    deferred.fulfill();
                } else {
                    that.eleConnEmsSslVerifyHostnameCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'EMS SSL Definition Details' -> 'Enable Trace'
    // false: not selected
    // true: selected
    //
    definePage.prototype._enableTrcConnEmsSsl = function (Trc) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleConnEmsSslEnableTrcCheck).then(function () {
            return that.eleConnEmsSslEnableTrcCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (Trc) {
                    that.eleConnEmsSslEnableTrcCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (Trc) {
                    deferred.fulfill();
                } else {
                    that.eleConnEmsSslEnableTrcCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'EMS SSL Definition Details' -> 'Enable Debug Trace'
    // false: not selected
    // true: selected
    //
    definePage.prototype._enableDebugTrcConnEmsSsl = function (debugTrc) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleConnEmsSslEnableDebugTrcCheck).then(function () {
            return that.eleConnEmsSslEnableDebugTrcCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (debugTrc) {
                    that.eleConnEmsSslEnableDebugTrcCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (debugTrc) {
                    deferred.fulfill();
                } else {
                    that.eleConnEmsSslEnableDebugTrcCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for add a EMS SSL Definition.
    //
    definePage.prototype.addConnEmsSsl = function (name, desc, authOnly, keyRingFile, keyRingLabel, Cipher, fips, ssv3, tls1, hostname, verifyHost, ldapUrl, ldapUserid, ldapPswd, trc, debugTrc) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;
        authOnly = authOnly === undefined ? "true" : authOnly;
        keyRingFile = keyRingFile === undefined ? "" : keyRingFile;
        keyRingLabel = keyRingLabel === undefined ? "" : keyRingLabel;
        Cipher = Cipher === undefined ? "" : Cipher;
        hostname = hostname === undefined ? "" : hostname;
        ldapUrl = ldapUrl === undefined ? "" : ldapUrl;
        ldapUserid = ldapUserid === undefined ? "" : ldapUserid;
        ldapPswd = ldapPswd === undefined ? "" : ldapPswd;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsSslLeftmenu);
        }).then(function () {
            that.eleConnsEmsSslLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnEmsSslNameInput);
        }).then(function () {
            that.eleConnEmsSslNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnEmsSslDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._authOnlyConnEmsSsl(authOnly);
        }).then(function () {
            that.eleConnEmsSslKeyRingFileInput.clear().sendKeys(keyRingFile);
        }).then(function () {
            that.eleConnEmsSslKeyRingLabelInput.clear().sendKeys(keyRingLabel);
        }).then(function () {
            that.eleConnEmsSslCipherInput.clear().sendKeys(Cipher);
        }).then(function () {
            that._enableFips1402ConnEmsSsl(fips);
        }).then(function () {
            that._enableSslv3ConnEmsSsl(ssv3);
        }).then(function () {
            that._enableTls1ConnEmsSsl(tls1);
        }).then(function () {
            that.eleConnEmsSslExpectEmsHostnameInput.clear().sendKeys(hostname);
        }).then(function () {
            that._verifyHostnameConnEmsSsl(verifyHost);
        }).then(function () {
            that.eleConnEmsSslLdapUrlInput.clear().sendKeys(ldapUrl);
        }).then(function () {
            that.eleConnEmsSslLdapUseridInput.clear().sendKeys(ldapUserid);
        }).then(function () {
            that.eleConnEmsSslLdapPasswordInput.clear().sendKeys(ldapPswd);
        }).then(function () {
            that._enableDebugTrcConnEmsSsl(debugTrc);
        }).then(function () {
            that._enableTrcConnEmsSsl(trc);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a EMS SSL Definition, then confirm the delete operation.
    //
    definePage.prototype.delConnEmsSslYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsSslLeftmenu);
        }).then(function () {
            that.eleConnsEmsSslLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a EMS SSL Definition, then discard the delete operation.
    //
    definePage.prototype.delConnEmsSslNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsSslLeftmenu);
        }).then(function () {
            that.eleConnsEmsSslLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a EMS SSL Definition.
    //
    definePage.prototype.replicateConnEmsSsl = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsSslLeftmenu);
        }).then(function () {
            that.eleConnsEmsSslLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a EMS SSL Definition.
    //
    definePage.prototype.updateConnEmsSsl = function (name, desc, authOnly, keyRingFile, keyRingLabel, Cipher, fips, ssv3, tls1, hostname, verifyHost, ldapUrl, ldapUserid, ldapPswd, trc, debugTrc) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;
        authOnly = authOnly === undefined ? "true" : authOnly;
        keyRingFile = keyRingFile === undefined ? "" : keyRingFile;
        keyRingLabel = keyRingLabel === undefined ? "" : keyRingLabel;
        Cipher = Cipher === undefined ? "" : Cipher;
        hostname = hostname === undefined ? "" : hostname;
        ldapUrl = ldapUrl === undefined ? "" : ldapUrl;
        ldapUserid = ldapUserid === undefined ? "" : ldapUserid;
        ldapPswd = ldapPswd === undefined ? "" : ldapPswd;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsSslLeftmenu);
        }).then(function () {
            that.eleConnsEmsSslLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnEmsSslNameInput);
        }).then(function () {
            that.eleConnEmsSslNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnEmsSslDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._authOnlyConnEmsSsl(authOnly);
        }).then(function () {
            that.eleConnEmsSslKeyRingFileInput.clear().sendKeys(keyRingFile);
        }).then(function () {
            that.eleConnEmsSslKeyRingLabelInput.clear().sendKeys(keyRingLabel);
        }).then(function () {
            that.eleConnEmsSslCipherInput.clear().sendKeys(Cipher);
        }).then(function () {
            that._enableFips1402ConnEmsSsl(fips);
        }).then(function () {
            that._enableSslv3ConnEmsSsl(ssv3);
        }).then(function () {
            that._enableTls1ConnEmsSsl(tls1);
        }).then(function () {
            that.eleConnEmsSslExpectEmsHostnameInput.clear().sendKeys(hostname);
        }).then(function () {
            that._verifyHostnameConnEmsSsl(verifyHost);
        }).then(function () {
            that.eleConnEmsSslLdapUrlInput.clear().sendKeys(ldapUrl);
        }).then(function () {
            that.eleConnEmsSslLdapUseridInput.clear().sendKeys(ldapUserid);
        }).then(function () {
            that.eleConnEmsSslLdapPasswordInput.clear().sendKeys(ldapPswd);
        }).then(function () {
            that._enableDebugTrcConnEmsSsl(debugTrc);
        }).then(function () {
            that._enableTrcConnEmsSsl(trc);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a EMS SSL Definition, then confirm the cancel operation.
    //
    definePage.prototype.cancelConnEmsSslYes = function (name, desc, authOnly, keyRingFile, keyRingLabel, Cipher, fips, ssv3, tls1, hostname, verifyHost, ldapUrl, ldapUserid, ldapPswd, trc, debugTrc) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;
        authOnly = authOnly === undefined ? "true" : authOnly;
        keyRingFile = keyRingFile === undefined ? "" : keyRingFile;
        keyRingLabel = keyRingLabel === undefined ? "" : keyRingLabel;
        Cipher = Cipher === undefined ? "" : Cipher;
        hostname = hostname === undefined ? "" : hostname;
        ldapUrl = ldapUrl === undefined ? "" : ldapUrl;
        ldapUserid = ldapUserid === undefined ? "" : ldapUserid;
        ldapPswd = ldapPswd === undefined ? "" : ldapPswd;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsSslLeftmenu);
        }).then(function () {
            that.eleConnsEmsSslLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnEmsSslNameInput);
        }).then(function () {
            that.eleConnEmsSslNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnEmsSslDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._authOnlyConnEmsSsl(authOnly);
        }).then(function () {
            that.eleConnEmsSslKeyRingFileInput.clear().sendKeys(keyRingFile);
        }).then(function () {
            that.eleConnEmsSslKeyRingLabelInput.clear().sendKeys(keyRingLabel);
        }).then(function () {
            that.eleConnEmsSslCipherInput.clear().sendKeys(Cipher);
        }).then(function () {
            that._enableFips1402ConnEmsSsl(fips);
        }).then(function () {
            that._enableSslv3ConnEmsSsl(ssv3);
        }).then(function () {
            that._enableTls1ConnEmsSsl(tls1);
        }).then(function () {
            that.eleConnEmsSslExpectEmsHostnameInput.clear().sendKeys(hostname);
        }).then(function () {
            that._verifyHostnameConnEmsSsl(verifyHost);
        }).then(function () {
            that.eleConnEmsSslLdapUrlInput.clear().sendKeys(ldapUrl);
        }).then(function () {
            that.eleConnEmsSslLdapUseridInput.clear().sendKeys(ldapUserid);
        }).then(function () {
            that.eleConnEmsSslLdapPasswordInput.clear().sendKeys(ldapPswd);
        }).then(function () {
            that._enableDebugTrcConnEmsSsl(debugTrc);
        }).then(function () {
            that._enableTrcConnEmsSsl(trc);
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
    // The function is used for cancel the changes of a EMS SSL Definition, then discard the cancel operation.
    //
    definePage.prototype.cancelConnEmsSslNo = function (name, desc, authOnly, keyRingFile, keyRingLabel, Cipher, fips, ssv3, tls1, hostname, verifyHost, ldapUrl, ldapUserid, ldapPswd, trc, debugTrc) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;
        authOnly = authOnly === undefined ? "true" : authOnly;
        keyRingFile = keyRingFile === undefined ? "" : keyRingFile;
        keyRingLabel = keyRingLabel === undefined ? "" : keyRingLabel;
        Cipher = Cipher === undefined ? "" : Cipher;
        hostname = hostname === undefined ? "" : hostname;
        ldapUrl = ldapUrl === undefined ? "" : ldapUrl;
        ldapUserid = ldapUserid === undefined ? "" : ldapUserid;
        ldapPswd = ldapPswd === undefined ? "" : ldapPswd;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsSslLeftmenu);
        }).then(function () {
            that.eleConnsEmsSslLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnEmsSslNameInput);
        }).then(function () {
            that.eleConnEmsSslNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnEmsSslDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._authOnlyConnEmsSsl(authOnly);
        }).then(function () {
            that.eleConnEmsSslKeyRingFileInput.clear().sendKeys(keyRingFile);
        }).then(function () {
            that.eleConnEmsSslKeyRingLabelInput.clear().sendKeys(keyRingLabel);
        }).then(function () {
            that.eleConnEmsSslCipherInput.clear().sendKeys(Cipher);
        }).then(function () {
            that._enableFips1402ConnEmsSsl(fips);
        }).then(function () {
            that._enableSslv3ConnEmsSsl(ssv3);
        }).then(function () {
            that._enableTls1ConnEmsSsl(tls1);
        }).then(function () {
            that.eleConnEmsSslExpectEmsHostnameInput.clear().sendKeys(hostname);
        }).then(function () {
            that._verifyHostnameConnEmsSsl(verifyHost);
        }).then(function () {
            that.eleConnEmsSslLdapUrlInput.clear().sendKeys(ldapUrl);
        }).then(function () {
            that.eleConnEmsSslLdapUseridInput.clear().sendKeys(ldapUserid);
        }).then(function () {
            that.eleConnEmsSslLdapPasswordInput.clear().sendKeys(ldapPswd);
        }).then(function () {
            that._enableDebugTrcConnEmsSsl(debugTrc);
        }).then(function () {
            that._enableTrcConnEmsSsl(trc);
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
    // The function is used for reset a EMS SSL Definition.
    //
    definePage.prototype.resetConnEmsSsl = function (name, desc, authOnly, keyRingFile, keyRingLabel, Cipher, fips, ssv3, tls1, hostname, verifyHost, ldapUrl, ldapUserid, ldapPswd, trc, debugTrc) {
        var deferred = protractor.promise.defer(), that = this;
        desc = desc === undefined ? "" : desc;
        authOnly = authOnly === undefined ? "true" : authOnly;
        keyRingFile = keyRingFile === undefined ? "" : keyRingFile;
        keyRingLabel = keyRingLabel === undefined ? "" : keyRingLabel;
        Cipher = Cipher === undefined ? "" : Cipher;
        hostname = hostname === undefined ? "" : hostname;
        ldapUrl = ldapUrl === undefined ? "" : ldapUrl;
        ldapUserid = ldapUserid === undefined ? "" : ldapUserid;
        ldapPswd = ldapPswd === undefined ? "" : ldapPswd;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsEmsSslLeftmenu);
        }).then(function () {
            that.eleConnsEmsSslLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnEmsSslNameInput);
        }).then(function () {
            that.eleConnEmsSslNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnEmsSslDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._authOnlyConnEmsSsl(authOnly);
        }).then(function () {
            that.eleConnEmsSslKeyRingFileInput.clear().sendKeys(keyRingFile);
        }).then(function () {
            that.eleConnEmsSslKeyRingLabelInput.clear().sendKeys(keyRingLabel);
        }).then(function () {
            that.eleConnEmsSslCipherInput.clear().sendKeys(Cipher);
        }).then(function () {
            that._enableFips1402ConnEmsSsl(fips);
        }).then(function () {
            that._enableSslv3ConnEmsSsl(ssv3);
        }).then(function () {
            that._enableTls1ConnEmsSsl(tls1);
        }).then(function () {
            that.eleConnEmsSslExpectEmsHostnameInput.clear().sendKeys(hostname);
        }).then(function () {
            that._verifyHostnameConnEmsSsl(verifyHost);
        }).then(function () {
            that.eleConnEmsSslLdapUrlInput.clear().sendKeys(ldapUrl);
        }).then(function () {
            that.eleConnEmsSslLdapUseridInput.clear().sendKeys(ldapUserid);
        }).then(function () {
            that.eleConnEmsSslLdapPasswordInput.clear().sendKeys(ldapPswd);
        }).then(function () {
            that._enableDebugTrcConnEmsSsl(debugTrc);
        }).then(function () {
            that._enableTrcConnEmsSsl(trc);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    //
    // This function is used for set 'RV Connection Details' -> 'Startup'
    // false: not selected
    // true: selected
    //
    definePage.prototype._startupConnRv = function (startup) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleConnRvStartupCheck).then(function () {
            return that.eleConnRvStartupCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (startup) {
                    that.eleConnRvStartupCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (startup) {
                    deferred.fulfill();
                } else {
                    that.eleConnRvStartupCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'RV Connection Details' -> 'Policy'
    //
    definePage.prototype._policyConnRv = function (policy) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleConnRvPolicyDropdown).then(function () {
            return that.eleConnRvPolicyDropdown.getText();
        }).then(function (message) {
            if (message === policy) {
                deferred.fulfill();
            } else {
                that.eleConnRvPolicyDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleConnRvPolicySelected(policy));
                }).then(function () {
                    that.eleConnRvPolicySelected(policy).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'RV Connection Details' -> 'RV Distributed Queue parameters'
    // rvdq = false: not selected
    // rvdq = true: selected
    //
    definePage.prototype._rvdqConnRv = function (rvdq, scheduler, workers, momeryLimit, msgLimit, identity) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleConnRvDistributedQueueCheck).then(function () {
            return that.eleConnRvDistributedQueueCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (rvdq) {
                    that.eleConnRvDistributedQueueCheck.click().then(function () {
                        globalCommons.waitForElementPresent(that.eleConnRvDqSchedulerSpinner);
                    }).then(function () {
                        that.eleConnRvDqSchedulerSpinner.sendKeys(backspaceSeries);
                    }).then(function () {
                        that.eleConnRvDqSchedulerSpinner.clear().sendKeys(scheduler);
                    }).then(function () {
                        that.eleConnRvDqWorkersSpinner.sendKeys(backspaceSeries);
                    }).then(function () {
                        that.eleConnRvDqWorkersSpinner.clear().sendKeys(workers);
                    }).then(function () {
                        that.eleConnRvDqMemoryLimitSpinner.sendKeys(backspaceSeries);
                    }).then(function () {
                        that.eleConnRvDqMemoryLimitSpinner.clear().sendKeys(momeryLimit);
                    }).then(function () {
                        that.eleConnRvDqMsgLimitSpinner.sendKeys(backspaceSeries);
                    }).then(function () {
                        that.eleConnRvDqMsgLimitSpinner.clear().sendKeys(msgLimit);
                    }).then(function () {
                        that.eleConnRvDqIdentityInput.clear().sendKeys(identity);
                    }).then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (rvdq) {
                    globalCommons.waitForElementPresent(that.eleConnRvDqSchedulerSpinner).then(function () {
                        that.eleConnRvDqSchedulerSpinner.sendKeys(backspaceSeries);
                    }).then(function () {
                        that.eleConnRvDqSchedulerSpinner.clear().sendKeys(scheduler);
                    }).then(function () {
                        that.eleConnRvDqWorkersSpinner.sendKeys(backspaceSeries);
                    }).then(function () {
                        that.eleConnRvDqWorkersSpinner.clear().sendKeys(workers);
                    }).then(function () {
                        that.eleConnRvDqMemoryLimitSpinner.sendKeys(backspaceSeries);
                    }).then(function () {
                        that.eleConnRvDqMemoryLimitSpinner.clear().sendKeys(momeryLimit);
                    }).then(function () {
                        that.eleConnRvDqMsgLimitSpinner.sendKeys(backspaceSeries);
                    }).then(function () {
                        that.eleConnRvDqMsgLimitSpinner.clear().sendKeys(msgLimit);
                    }).then(function () {
                        that.eleConnRvDqIdentityInput.clear().sendKeys(identity);
                    }).then(function () {
                        deferred.fulfill();
                    });
                } else {
                    that.eleConnRvDistributedQueueCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for add a RV Connection.
    //
    definePage.prototype.addConnRv = function (name, desc, startup, endpoint, service, network, networkCode, hostCode, policy, maxEvents, tcpipStack, intf, rvdq, scheduler, workers, momeryLimit, msgLimit, identity) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        service = service || browser.params.connRV.service;
        network = network || browser.params.connRV.network;
        networkCode = networkCode || browser.params.connRV.networkCodepage;
        hostCode = hostCode || browser.params.connRV.hostCodepage;
        tcpipStack = tcpipStack || browser.params.connRV.tcpipStackname;
        startup = startup === undefined ? "true" : startup;
        policy = policy === undefined ? "Discard First" : policy;
        maxEvents = maxEvents === undefined ? "20000" : maxEvents;
        intf = intf === undefined ? "" : intf;
        scheduler = scheduler === undefined ? "0" : scheduler;
        workers = workers === undefined ? "0" : workers;
        momeryLimit = momeryLimit === undefined ? "100" : momeryLimit;
        msgLimit = msgLimit === undefined ? "100" : msgLimit;
        identity = identity === undefined ? "" : identity;


        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsRvLeftmenu);
        }).then(function () {
            that.eleConnsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnRvNameInput);
        }).then(function () {
            that.eleConnRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._startupConnRv(startup);
        }).then(function () {
            that.eleConnRvEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleConnRvServiceInput.clear().sendKeys(service);
        }).then(function () {
            that.eleConnRvNetworkInput.clear().sendKeys(network);
        }).then(function () {
            that.eleConnRvNetworkCodepageInput.clear().sendKeys(networkCode);
        }).then(function () {
            that.eleConnRvHostCodepageInput.clear().sendKeys(hostCode);
        }).then(function () {
            that._policyConnRv(policy);
        }).then(function () {
            that.eleConnRvMaxEventsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleConnRvMaxEventsSpinner.clear().sendKeys(maxEvents);
        }).then(function () {
            that.eleConnRvTcpipStackNameInput.clear().sendKeys(tcpipStack);
        }).then(function () {
            that._rvdqConnRv(rvdq, scheduler, workers, momeryLimit, msgLimit, identity);
        }).then(function () {
            that.eleConnRvIntfInput.clear().sendKeys(intf);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a RV Connection, then confirm the delete operation.
    //
    definePage.prototype.delConnRvYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsRvLeftmenu);
        }).then(function () {
            that.eleConnsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a RV Connection, then discard the delete operation.
    //
    definePage.prototype.delConnRvNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsRvLeftmenu);
        }).then(function () {
            that.eleConnsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a RV Connection.
    //
    definePage.prototype.replicateConnRv = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsRvLeftmenu);
        }).then(function () {
            that.eleConnsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a RV Connection.
    //
    definePage.prototype.updateConnRv = function (name, desc, startup, endpoint, service, network, networkCode, hostCode, policy, maxEvents, tcpipStack, intf, rvdq, scheduler, workers, momeryLimit, msgLimit, identity) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        service = service || browser.params.connRV.service;
        network = network || browser.params.connRV.network;
        networkCode = networkCode || browser.params.connRV.networkCodepage;
        hostCode = hostCode || browser.params.connRV.hostCodepage;
        tcpipStack = tcpipStack || browser.params.connRV.tcpipStackname;
        startup = startup === undefined ? "true" : startup;
        policy = policy === undefined ? "Discard First" : policy;
        maxEvents = maxEvents === undefined ? "20000" : maxEvents;
        intf = intf === undefined ? "" : intf;
        scheduler = scheduler === undefined ? "0" : scheduler;
        workers = workers === undefined ? "0" : workers;
        momeryLimit = momeryLimit === undefined ? "100" : momeryLimit;
        msgLimit = msgLimit === undefined ? "100" : msgLimit;
        identity = identity === undefined ? "" : identity;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsRvLeftmenu);
        }).then(function () {
            that.eleConnsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnRvNameInput);
        }).then(function () {
            that.eleConnRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._startupConnRv(startup);
        }).then(function () {
            that.eleConnRvEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleConnRvServiceInput.clear().sendKeys(service);
        }).then(function () {
            that.eleConnRvNetworkInput.clear().sendKeys(network);
        }).then(function () {
            that.eleConnRvNetworkCodepageInput.clear().sendKeys(networkCode);
        }).then(function () {
            that.eleConnRvHostCodepageInput.clear().sendKeys(hostCode);
        }).then(function () {
            that._policyConnRv(policy);
        }).then(function () {
            that.eleConnRvMaxEventsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleConnRvMaxEventsSpinner.clear().sendKeys(maxEvents);
        }).then(function () {
            that.eleConnRvTcpipStackNameInput.clear().sendKeys(tcpipStack);
        }).then(function () {
            that.eleConnRvIntfInput.clear().sendKeys(intf);
        }).then(function () {
            that._rvdqConnRv(rvdq, scheduler, workers, momeryLimit, msgLimit, identity);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a RV Connection, then confirm the cancel operation.
    //
    definePage.prototype.cancelConnRvYes = function (name, desc, startup, endpoint, service, network, networkCode, hostCode, policy, maxEvents, tcpipStack, intf, rvdq, scheduler, workers, momeryLimit, msgLimit, identity) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        service = service || browser.params.connRV.service;
        network = network || browser.params.connRV.network;
        networkCode = networkCode || browser.params.connRV.networkCodepage;
        hostCode = hostCode || browser.params.connRV.hostCodepage;
        tcpipStack = tcpipStack || browser.params.connRV.tcpipStackname;
        startup = startup === undefined ? "true" : startup;
        policy = policy === undefined ? "Discard First" : policy;
        maxEvents = maxEvents === undefined ? "20000" : maxEvents;
        intf = intf === undefined ? "" : intf;
        scheduler = scheduler === undefined ? "0" : scheduler;
        workers = workers === undefined ? "0" : workers;
        momeryLimit = momeryLimit === undefined ? "100" : momeryLimit;
        msgLimit = msgLimit === undefined ? "100" : msgLimit;
        identity = identity === undefined ? "" : identity;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsRvLeftmenu);
        }).then(function () {
            that.eleConnsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnRvNameInput);
        }).then(function () {
            that.eleConnRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._startupConnRv(startup);
        }).then(function () {
            that.eleConnRvEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleConnRvServiceInput.clear().sendKeys(service);
        }).then(function () {
            that.eleConnRvNetworkInput.clear().sendKeys(network);
        }).then(function () {
            that.eleConnRvNetworkCodepageInput.clear().sendKeys(networkCode);
        }).then(function () {
            that.eleConnRvHostCodepageInput.clear().sendKeys(hostCode);
        }).then(function () {
            that._policyConnRv(policy);
        }).then(function () {
            that.eleConnRvMaxEventsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleConnRvMaxEventsSpinner.clear().sendKeys(maxEvents);
        }).then(function () {
            that.eleConnRvTcpipStackNameInput.clear().sendKeys(tcpipStack);
        }).then(function () {
            that.eleConnRvIntfInput.clear().sendKeys(intf);
        }).then(function () {
            that._rvdqConnRv(rvdq, scheduler, workers, momeryLimit, msgLimit, identity);
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
    // The function is used for cancel the changes of a RV Connection, then discard the cancel operation.
    //
    definePage.prototype.cancelConnRvNo = function (name, desc, startup, endpoint, service, network, networkCode, hostCode, policy, maxEvents, tcpipStack, intf, rvdq, scheduler, workers, momeryLimit, msgLimit, identity) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        service = service || browser.params.connRV.service;
        network = network || browser.params.connRV.network;
        networkCode = networkCode || browser.params.connRV.networkCodepage;
        hostCode = hostCode || browser.params.connRV.hostCodepage;
        tcpipStack = tcpipStack || browser.params.connRV.tcpipStackname;
        startup = startup === undefined ? "true" : startup;
        policy = policy === undefined ? "Discard First" : policy;
        maxEvents = maxEvents === undefined ? "20000" : maxEvents;
        intf = intf === undefined ? "" : intf;
        scheduler = scheduler === undefined ? "0" : scheduler;
        workers = workers === undefined ? "0" : workers;
        momeryLimit = momeryLimit === undefined ? "100" : momeryLimit;
        msgLimit = msgLimit === undefined ? "100" : msgLimit;
        identity = identity === undefined ? "" : identity;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsRvLeftmenu);
        }).then(function () {
            that.eleConnsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnRvNameInput);
        }).then(function () {
            that.eleConnRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._startupConnRv(startup);
        }).then(function () {
            that.eleConnRvEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleConnRvServiceInput.clear().sendKeys(service);
        }).then(function () {
            that.eleConnRvNetworkInput.clear().sendKeys(network);
        }).then(function () {
            that.eleConnRvNetworkCodepageInput.clear().sendKeys(networkCode);
        }).then(function () {
            that.eleConnRvHostCodepageInput.clear().sendKeys(hostCode);
        }).then(function () {
            that._policyConnRv(policy);
        }).then(function () {
            that.eleConnRvMaxEventsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleConnRvMaxEventsSpinner.clear().sendKeys(maxEvents);
        }).then(function () {
            that.eleConnRvTcpipStackNameInput.clear().sendKeys(tcpipStack);
        }).then(function () {
            that.eleConnRvIntfInput.clear().sendKeys(intf);
        }).then(function () {
            that._rvdqConnRv(rvdq, scheduler, workers, momeryLimit, msgLimit, identity);
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
    // The function is used for reset a RV Connection.
    //
    definePage.prototype.resetConnRv = function (name, desc, startup, endpoint, service, network, networkCode, hostCode, policy, maxEvents, tcpipStack, intf, rvdq, scheduler, workers, momeryLimit, msgLimit, identity) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        service = service || browser.params.connRV.service;
        network = network || browser.params.connRV.network;
        networkCode = networkCode || browser.params.connRV.networkCodepage;
        hostCode = hostCode || browser.params.connRV.hostCodepage;
        tcpipStack = tcpipStack || browser.params.connRV.tcpipStackname;
        startup = startup === undefined ? "true" : startup;
        policy = policy === undefined ? "Discard First" : policy;
        maxEvents = maxEvents === undefined ? "20000" : maxEvents;
        intf = intf === undefined ? "" : intf;
        scheduler = scheduler === undefined ? "0" : scheduler;
        workers = workers === undefined ? "0" : workers;
        momeryLimit = momeryLimit === undefined ? "100" : momeryLimit;
        msgLimit = msgLimit === undefined ? "100" : msgLimit;
        identity = identity === undefined ? "" : identity;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleConnsRvLeftmenu);
        }).then(function () {
            that.eleConnsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleConnRvNameInput);
        }).then(function () {
            that.eleConnRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleConnRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._startupConnRv(startup);
        }).then(function () {
            that.eleConnRvEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleConnRvServiceInput.clear().sendKeys(service);
        }).then(function () {
            that.eleConnRvNetworkInput.clear().sendKeys(network);
        }).then(function () {
            that.eleConnRvNetworkCodepageInput.clear().sendKeys(networkCode);
        }).then(function () {
            that.eleConnRvHostCodepageInput.clear().sendKeys(hostCode);
        }).then(function () {
            that._policyConnRv(policy);
        }).then(function () {
            that.eleConnRvMaxEventsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleConnRvMaxEventsSpinner.clear().sendKeys(maxEvents);
        }).then(function () {
            that.eleConnRvTcpipStackNameInput.clear().sendKeys(tcpipStack);
        }).then(function () {
            that.eleConnRvIntfInput.clear().sendKeys(intf);
        }).then(function () {
            that._rvdqConnRv(rvdq, scheduler, workers, momeryLimit, msgLimit, identity);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    //
    // This function is used for set 'EMS Interface Details' -> 'Suspend Services'
    // false: not selected
    // true: selected
    //
    definePage.prototype._suspendServicesIntfEms = function (suspendServices) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfEmsSuspendServicesCheck).then(function () {
            return that.eleIntfEmsSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (suspendServices) {
                    that.eleIntfEmsSuspendServicesCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill()
                }
            } else {
                if (suspendServices) {
                    deferred.fulfill();
                } else {
                    that.eleIntfEmsSuspendServicesCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'EMS Interface Details' -> 'Use Properties'
    // false: not selected
    // true: selected
    //
    definePage.prototype._usePropIntfEms = function (useProp) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfEmsUsePropCheck).then(function () {
            return that.eleIntfEmsUsePropCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (useProp) {
                    that.eleIntfEmsUsePropCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill()
                }
            } else {
                if (useProp) {
                    deferred.fulfill();
                } else {
                    that.eleIntfEmsUsePropCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'EMS Interface Details' -> 'Error Message Type'
    //
    definePage.prototype._errMsgTypeIntfEms = function (errMsgType) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfEmsErrMsgTypeDropdown).then(function () {
            return that.eleIntfEmsErrMsgTypeDropdown.getText();
        }).then(function (message) {
            if (message === errMsgType) {
                deferred.fulfill();
            } else {
                that.eleIntfEmsErrMsgTypeDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleIntfEmsErrMsgTypeSelected(errMsgType));
                }).then(function () {
                    that.eleIntfEmsErrMsgTypeSelected(errMsgType).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for add a EMS Interface.
    //
    definePage.prototype.addIntfEms = function (name, desc, intfid, workers, workersEOT, msgFreeListSize, suspendServices, useProp, errMsgType, deadMsgQue) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfEMS.intfid;
        workers = workers === undefined ? "5" : workers;
        workersEOT = workersEOT === undefined ? "30" : workersEOT;
        msgFreeListSize = msgFreeListSize === undefined ? "0" : msgFreeListSize;
        suspendServices = suspendServices === undefined ? "true" : suspendServices;
        errMsgType = errMsgType === undefined ? "Map" : errMsgType;
        deadMsgQue = deadMsgQue === undefined ? "tibss.Dead.Msg.Queue" : deadMsgQue;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsEmsLeftmenu);
        }).then(function () {
            that.eleIntfsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfEmsNameInput);
        }).then(function () {
            that.eleIntfEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfEmsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfEmsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfEmsWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsWorkersEotSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleIntfEmsMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsMsgFreeListSizeSpinner.clear().sendKeys(msgFreeListSize);
        }).then(function () {
            that._suspendServicesIntfEms(suspendServices);
        }).then(function () {
            that._usePropIntfEms(useProp);
        }).then(function () {
            that._errMsgTypeIntfEms(errMsgType);
        }).then(function () {
            that.eleIntfEmsDeadMsgQueInput.clear().sendKeys(deadMsgQue);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a EMS Interface, then confirm the delete operation.
    //
    definePage.prototype.delIntfEmsYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsEmsLeftmenu);
        }).then(function () {
            that.eleIntfsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a EMS Interface, then discard the delete operation.
    //
    definePage.prototype.delIntfEmsNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsEmsLeftmenu);
        }).then(function () {
            that.eleIntfsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a EMS Interface.
    //
    definePage.prototype.replicateIntfEms = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsEmsLeftmenu);
        }).then(function () {
            that.eleIntfsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a EMS Interface.
    //
    definePage.prototype.updateIntfEms = function (name, desc, intfid, workers, workersEOT, msgFreeListSize, suspendServices, useProp, errMsgType, deadMsgQue) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfEMS.intfid;
        workers = workers === undefined ? "5" : workers;
        workersEOT = workersEOT === undefined ? "30" : workersEOT;
        msgFreeListSize = msgFreeListSize === undefined ? "0" : msgFreeListSize;
        suspendServices = suspendServices === undefined ? "true" : suspendServices;
        errMsgType = errMsgType === undefined ? "Map" : errMsgType;
        deadMsgQue = deadMsgQue === undefined ? "tibss.Dead.Msg.Queue" : deadMsgQue;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsEmsLeftmenu);
            that.eleIntfsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfEmsNameInput);
        }).then(function () {
            that.eleIntfEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfEmsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfEmsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfEmsWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsWorkersEotSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleIntfEmsMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsMsgFreeListSizeSpinner.clear().sendKeys(msgFreeListSize);
        }).then(function () {
            that._suspendServicesIntfEms(suspendServices);
        }).then(function () {
            that._usePropIntfEms(useProp);
        }).then(function () {
            that._errMsgTypeIntfEms(errMsgType);
        }).then(function () {
            that.eleIntfEmsDeadMsgQueInput.clear().sendKeys(deadMsgQue);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a EMS Interface, then confirm the cancel operation.
    //
    definePage.prototype.cancelIntfEmsYes = function (name, desc, intfid, workers, workersEOT, msgFreeListSize, suspendServices, useProp, errMsgType, deadMsgQue) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfEMS.intfid;
        workers = workers === undefined ? "5" : workers;
        workersEOT = workersEOT === undefined ? "30" : workersEOT;
        msgFreeListSize = msgFreeListSize === undefined ? "0" : msgFreeListSize;
        suspendServices = suspendServices === undefined ? "true" : suspendServices;
        errMsgType = errMsgType === undefined ? "Map" : errMsgType;
        deadMsgQue = deadMsgQue === undefined ? "tibss.Dead.Msg.Queue" : deadMsgQue;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsEmsLeftmenu);
        }).then(function () {
            that.eleIntfsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfEmsNameInput);
        }).then(function () {
            that.eleIntfEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfEmsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfEmsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfEmsWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsWorkersEotSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleIntfEmsMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsMsgFreeListSizeSpinner.clear().sendKeys(msgFreeListSize);
        }).then(function () {
            that._suspendServicesIntfEms(suspendServices);
        }).then(function () {
            that._usePropIntfEms(useProp);
        }).then(function () {
            that._errMsgTypeIntfEms(errMsgType);
        }).then(function () {
            that.eleIntfEmsDeadMsgQueInput.clear().sendKeys(deadMsgQue);
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
    // The function is used for cancel the changes of a EMS Interface, then discard the cancel operation.
    //
    definePage.prototype.cancelIntfEmsNo = function (name, desc, intfid, workers, workersEOT, msgFreeListSize, suspendServices, useProp, errMsgType, deadMsgQue) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfEMS.intfid;
        workers = workers === undefined ? "5" : workers;
        workersEOT = workersEOT === undefined ? "30" : workersEOT;
        msgFreeListSize = msgFreeListSize === undefined ? "0" : msgFreeListSize;
        suspendServices = suspendServices === undefined ? "true" : suspendServices;
        errMsgType = errMsgType === undefined ? "Map" : errMsgType;
        deadMsgQue = deadMsgQue === undefined ? "tibss.Dead.Msg.Queue" : deadMsgQue;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsEmsLeftmenu);
        }).then(function () {
            that.eleIntfsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfEmsNameInput);
        }).then(function () {
            that.eleIntfEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfEmsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfEmsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfEmsWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsWorkersEotSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleIntfEmsMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsMsgFreeListSizeSpinner.clear().sendKeys(msgFreeListSize);
        }).then(function () {
            that._suspendServicesIntfEms(suspendServices);
        }).then(function () {
            that._usePropIntfEms(useProp);
        }).then(function () {
            that._errMsgTypeIntfEms(errMsgType);
        }).then(function () {
            that.eleIntfEmsDeadMsgQueInput.clear().sendKeys(deadMsgQue);
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
    // The function is used for reset a EMS Interface.
    //
    definePage.prototype.resetIntfEms = function (name, desc, intfid, workers, workersEOT, msgFreeListSize, suspendServices, useProp, errMsgType, deadMsgQue) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfEMS.intfid;
        workers = workers === undefined ? "5" : workers;
        workersEOT = workersEOT === undefined ? "30" : workersEOT;
        msgFreeListSize = msgFreeListSize === undefined ? "0" : msgFreeListSize;
        suspendServices = suspendServices === undefined ? "true" : suspendServices;
        errMsgType = errMsgType === undefined ? "Map" : errMsgType;
        deadMsgQue = deadMsgQue === undefined ? "tibss.Dead.Msg.Queue" : deadMsgQue;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsEmsLeftmenu);
        }).then(function () {
            that.eleIntfsEmsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfEmsNameInput);
        }).then(function () {
            that.eleIntfEmsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfEmsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfEmsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfEmsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfEmsWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsWorkersEotSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleIntfEmsMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfEmsMsgFreeListSizeSpinner.clear().sendKeys(msgFreeListSize);
        }).then(function () {
            that._suspendServicesIntfEms(suspendServices);
        }).then(function () {
            that._usePropIntfEms(useProp);
        }).then(function () {
            that._errMsgTypeIntfEms(errMsgType);
        }).then(function () {
            that.eleIntfEmsDeadMsgQueInput.clear().sendKeys(deadMsgQue);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    //
    // This function is used for set 'RV Interface Details' -> 'Suspend Services'
    // false: not selected
    // true: selected
    //
    definePage.prototype._suspendServiceIntfRv = function (suspendServices) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfRvSuspendServicesCheck).then(function () {
            return that.eleIntfRvSuspendServicesCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (suspendServices) {
                    that.eleIntfRvSuspendServicesCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (suspendServices) {
                    deferred.fulfill();
                } else {
                    that.eleIntfRvSuspendServicesCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'RV Interface Details' -> 'Enable message receipt'
    // false: not selected
    // true: selected
    //
    definePage.prototype._enableMsgReceiptIntfRv = function (enableMsgReceipt) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfRvEnableMsgReceiptCheck).then(function () {
            return that.eleIntfRvEnableMsgReceiptCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (enableMsgReceipt) {
                    that.eleIntfRvEnableMsgReceiptCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (enableMsgReceipt) {
                    deferred.fulfill();
                } else {
                    that.eleIntfRvEnableMsgReceiptCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'RV Interface Details' -> 'Enable message delivery'
    // false: not selected
    // true: selected
    //
    definePage.prototype._enableMsgDeliveryIntfRv = function (enableMsgDelivery) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfRvEnableMsgDeliveryCheck).then(function () {
            return that.eleIntfRvEnableMsgDeliveryCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (enableMsgDelivery) {
                    that.eleIntfRvEnableMsgDeliveryCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (enableMsgDelivery) {
                    deferred.fulfill();
                } else {
                    that.eleIntfRvEnableMsgDeliveryCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for add a RV Interface.
    //
    definePage.prototype.addIntfRv = function (name, desc, intfid, workers, workersEOT, msgFreeListSize, suspendServices, enableMsgReceipt, enableMsgDelivery) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfRV.intfid;
        workers = workers === undefined ? "5" : workers;
        workersEOT = workersEOT === undefined ? "30" : workersEOT;
        msgFreeListSize = msgFreeListSize === undefined ? "0" : msgFreeListSize;
        suspendServices = suspendServices === undefined ? "true" : suspendServices;
        enableMsgReceipt = enableMsgReceipt === undefined ? "true" : enableMsgReceipt;
        enableMsgDelivery = enableMsgDelivery === undefined ? "true" : enableMsgDelivery;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRvLeftmenu);
        }).then(function () {
            that.eleIntfsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRvNameInput);
        }).then(function () {
            that.eleIntfRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfRvIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfRvWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfRvWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvWorkersEotSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleIntfRvMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvMsgFreeListSizeSpinner.clear().sendKeys(msgFreeListSize);
        }).then(function () {
            that._suspendServiceIntfRv(suspendServices);
        }).then(function () {
            that._enableMsgReceiptIntfRv(enableMsgReceipt);
        }).then(function () {
            that._enableMsgDeliveryIntfRv(enableMsgDelivery);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a RV Interface, then confirm the delete operation.
    //
    definePage.prototype.delIntfRvYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRvLeftmenu);
        }).then(function () {
            that.eleIntfsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a RV Interface, then discard the delete operation.
    //
    definePage.prototype.delIntfRvNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRvLeftmenu);
        }).then(function () {
            that.eleIntfsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a RV Interface.
    //
    definePage.prototype.replicateIntfRv = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRvLeftmenu);
        }).then(function () {
            that.eleIntfsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a RV Interface.
    //
    definePage.prototype.updateIntfRv = function (name, desc, intfid, workers, workersEOT, msgFreeListSize, suspendServices, enableMsgReceipt, enableMsgDelivery) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfRV.intfid;
        workers = workers === undefined ? "5" : workers;
        workersEOT = workersEOT === undefined ? "30" : workersEOT;
        msgFreeListSize = msgFreeListSize === undefined ? "0" : msgFreeListSize;
        suspendServices = suspendServices === undefined ? "true" : suspendServices;
        enableMsgReceipt = enableMsgReceipt === undefined ? "true" : enableMsgReceipt;
        enableMsgDelivery = enableMsgDelivery === undefined ? "true" : enableMsgDelivery;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRvLeftmenu);
        }).then(function () {
            that.eleIntfsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRvNameInput);
        }).then(function () {
            that.eleIntfRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfRvIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfRvWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfRvWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvWorkersEotSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleIntfRvMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvMsgFreeListSizeSpinner.clear().sendKeys(msgFreeListSize);
        }).then(function () {
            that._suspendServiceIntfRv(suspendServices);
        }).then(function () {
            that._enableMsgReceiptIntfRv(enableMsgReceipt);
        }).then(function () {
            that._enableMsgDeliveryIntfRv(enableMsgDelivery);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a RV Interface, then confirm the cancel operation.
    //
    definePage.prototype.cancelIntfRvYes = function (name, desc, intfid, workers, workersEOT, msgFreeListSize, suspendServices, enableMsgReceipt, enableMsgDelivery) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfRV.intfid;
        workers = workers === undefined ? "5" : workers;
        workersEOT = workersEOT === undefined ? "30" : workersEOT;
        msgFreeListSize = msgFreeListSize === undefined ? "0" : msgFreeListSize;
        suspendServices = suspendServices === undefined ? "true" : suspendServices;
        enableMsgReceipt = enableMsgReceipt === undefined ? "true" : enableMsgReceipt;
        enableMsgDelivery = enableMsgDelivery === undefined ? "true" : enableMsgDelivery;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRvLeftmenu);
        }).then(function () {
            that.eleIntfsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRvNameInput);
        }).then(function () {
            that.eleIntfRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfRvIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfRvWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfRvWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvWorkersEotSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleIntfRvMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvMsgFreeListSizeSpinner.clear().sendKeys(msgFreeListSize);
        }).then(function () {
            that._suspendServiceIntfRv(suspendServices);
        }).then(function () {
            that._enableMsgReceiptIntfRv(enableMsgReceipt);
        }).then(function () {
            that._enableMsgDeliveryIntfRv(enableMsgDelivery);
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
    // The function is used for cancel the changes of a RV Interface, then discard the cancel operation.
    //
    definePage.prototype.cancelIntfRvNo = function (name, desc, intfid, workers, workersEOT, msgFreeListSize, suspendServices, enableMsgReceipt, enableMsgDelivery) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfRV.intfid;
        workers = workers === undefined ? "5" : workers;
        workersEOT = workersEOT === undefined ? "30" : workersEOT;
        msgFreeListSize = msgFreeListSize === undefined ? "0" : msgFreeListSize;
        suspendServices = suspendServices === undefined ? "true" : suspendServices;
        enableMsgReceipt = enableMsgReceipt === undefined ? "true" : enableMsgReceipt;
        enableMsgDelivery = enableMsgDelivery === undefined ? "true" : enableMsgDelivery;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRvLeftmenu);
        }).then(function () {
            that.eleIntfsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRvNameInput);
        }).then(function () {
            that.eleIntfRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfRvIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfRvWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfRvWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvWorkersEotSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleIntfRvMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvMsgFreeListSizeSpinner.clear().sendKeys(msgFreeListSize);
        }).then(function () {
            that._suspendServiceIntfRv(suspendServices);
        }).then(function () {
            that._enableMsgReceiptIntfRv(enableMsgReceipt);
        }).then(function () {
            that._enableMsgDeliveryIntfRv(enableMsgDelivery);
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
    // The function is used for reset a RV Interface.
    //
    definePage.prototype.resetIntfRv = function (name, desc, intfid, workers, workersEOT, msgFreeListSize, suspendServices, enableMsgReceipt, enableMsgDelivery) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfRV.intfid;
        workers = workers === undefined ? "5" : workers;
        workersEOT = workersEOT === undefined ? "30" : workersEOT;
        msgFreeListSize = msgFreeListSize === undefined ? "0" : msgFreeListSize;
        suspendServices = suspendServices === undefined ? "true" : suspendServices;
        enableMsgReceipt = enableMsgReceipt === undefined ? "true" : enableMsgReceipt;
        enableMsgDelivery = enableMsgDelivery === undefined ? "true" : enableMsgDelivery;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRvLeftmenu);
        }).then(function () {
            that.eleIntfsRvLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRvNameInput);
        }).then(function () {
            that.eleIntfRvNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfRvDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfRvIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfRvWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfRvWorkersEotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvWorkersEotSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleIntfRvMsgFreeListSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRvMsgFreeListSizeSpinner.clear().sendKeys(msgFreeListSize);
        }).then(function () {
            that._suspendServiceIntfRv(suspendServices);
        }).then(function () {
            that._enableMsgReceiptIntfRv(enableMsgReceipt);
        }).then(function () {
            that._enableMsgDeliveryIntfRv(enableMsgDelivery);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    //
    // This function is used for set 'CICS Interface Details' -> 'Ordered'
    // false: not selected
    // true: selected
    //
    definePage.prototype._orderedIntfCics = function (ordered) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfCicsOrderedCheck).then(function () {
            return that.eleIntfCicsOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (ordered) {
                    that.eleIntfCicsOrderedCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (ordered) {
                    deferred.fulfill();
                } else {
                    that.eleIntfCicsOrderedCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'CICS Interface Details' -> 'Request/Reply'
    // false: not selected
    // true: selected
    //
    definePage.prototype._requestReplyIntfCics = function (requestReply) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfCicsRequestReplyCheck).then(function () {
            return that.eleIntfCicsRequestReplyCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (requestReply) {
                    that.eleIntfCicsRequestReplyCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (requestReply) {
                    deferred.fulfill();
                } else {
                    that.eleIntfCicsRequestReplyCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'CICS Interface Details -> Loopback'
    // false: No
    // true: Yes
    //
    definePage.prototype._loopbackIntfCics = function (loopback) {
        var deferred = protractor.promise.defer(), that = this;
        if (loopback) {
            that.eleIntfCicsLoopbackYesRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            that.eleIntfCicsLoopbackNoRadio.click().then(function () {
                deferred.fulfill();
            });
        }
        return deferred.promise;
    };
    //
    // This function is used for set 'CICS Interface Details -> Loopback No'
    // false: not click
    // true: click

    definePage.prototype._loopbackNoIntfCics = function (loopbackNo) {
        var deferred = protractor.promise.defer(), that = this;
        if (loopbackNo) {
            that.eleIntfCicsLoopbackNoRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        return deferred.promise;
    };
    //
    // This function is used for set 'CICS Interface Details -> Loopback Yes'
    // false: not click
    // true: click
    //
    definePage.prototype._loopbackYesIntfCics = function (loopbackYes) {
        var deferred = protractor.promise.defer(), that = this;
        if (loopbackYes) {
            that.eleIntfCicsLoopbackYesRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        return deferred.promise;
    };
    //
    // This function is used for set 'CICS Interface Details -> Batching No'
    // false: not click
    // true: click
    //
    definePage.prototype._batchingNoIntfCics = function (batchingNo) {
        var deferred = protractor.promise.defer(), that = this;
        if (batchingNo) {
            that.eleIntfCicsBatchingNoRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        return deferred.promise;
    };
    //
    // This function is used for set 'CICS Interface Details -> Batching Yes'
    // false: not click
    // true: click
    //
    definePage.prototype._batchingYesIntfCics = function (batchingYes) {
        var deferred = protractor.promise.defer(), that = this;
        if (batchingYes) {
            that.eleIntfCicsBatchingYesRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        return deferred.promise;
    };
    //
    // This function is used for set 'CICS Interface Details -> TSQ Processing'
    // false: not click
    // true: click
    //
    definePage.prototype._tsqProcessingIntfCics = function (batchingNo, batchingYes, workers, batchSize, trcLvlTsq) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        globalCommons.waitForElementPresent(that.eleIntfCicsTsqProcessingExtend).then(function () {
            return that.eleIntfCicsBatchingNoRadio.isDisplayed();
        }).then(function (result) {
            if (result) {
                that._batchingNoIntfCics(batchingNo).then(function () {
                    that._batchingYesIntfCics(batchingYes);
                }).then(function () {
                    that.eleIntfCicsWorkersSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfCicsWorkersSpinner.clear().sendKeys(workers);
                }).then(function () {
                    that.eleIntfCicsBatchSizeSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfCicsBatchSizeSpinner.clear().sendKeys(batchSize);
                }).then(function () {
                    that.eleIntfCicsTrcLvlTsqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfCicsTrcLvlTsqSpinner.clear().sendKeys(trcLvlTsq);
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                that.eleIntfCicsTsqProcessingExtend.click().then(function () {
                    that._batchingNoIntfCics(batchingNo);
                }).then(function () {
                    that._batchingYesIntfCics(batchingYes);
                }).then(function () {
                    that.eleIntfCicsWorkersSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfCicsWorkersSpinner.clear().sendKeys(workers);
                }).then(function () {
                    that.eleIntfCicsBatchSizeSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfCicsBatchSizeSpinner.clear().sendKeys(batchSize);
                }).then(function () {
                    that.eleIntfCicsTrcLvlTsqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfCicsTrcLvlTsqSpinner.clear().sendKeys(trcLvlTsq);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for add a CICS Interface.
    //
    definePage.prototype.addIntfCics = function (name, desc, intfid, outputIntf, endpoint, mirrorTranid, userid, ordered, requestReply, esbRequestReply, guaranteed, reliable, rrMaxSize, loopbackNo, loopbackYes, trcLvlTrg, batchingNo, batchingYes, workers, batchSize, trcLvlTsq) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfCICS.intfid;
        mirrorTranid = mirrorTranid || browser.params.intfCICS.mirrorTranid;
        userid = userid || browser.params.intfCICS.userid;
        esbRequestReply = esbRequestReply === undefined ? "1" : esbRequestReply;
        guaranteed = guaranteed === undefined ? "0" : guaranteed;
        reliable = reliable === undefined ? "0" : reliable;
        rrMaxSize = rrMaxSize === undefined ? "16000" : rrMaxSize;
        trcLvlTrg = trcLvlTrg === undefined ? "0" : trcLvlTrg;
        workers = workers === undefined ? "0" : workers;
        batchSize = batchSize === undefined ? "50" : batchSize;
        trcLvlTsq = trcLvlTsq === undefined ? "1" : trcLvlTsq;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsCicsLeftmenu);
        }).then(function () {
            that.eleIntfsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfCicsNameInput);
        }).then(function () {
            that.eleIntfCicsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfCicsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfCicsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfCicsOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfCicsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfCicsMirrorTranidInput.clear().sendKeys(mirrorTranid);
        }).then(function () {
            that.eleIntfCicsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that._orderedIntfCics(ordered);
        }).then(function () {
            that._requestReplyIntfCics(requestReply);
        }).then(function () {
            that.eleIntfCicsEsbRequestReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsEsbRequestReplySpinner.clear().sendKeys(esbRequestReply);
        }).then(function () {
            that.eleIntfCicsGuaranteedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsGuaranteedSpinner.clear().sendKeys(guaranteed);
        }).then(function () {
            that.eleIntfCicsReliableSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsReliableSpinner.clear().sendKeys(reliable);
        }).then(function () {
            that.eleIntfCicsRRMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsRRMaxSizeSpinner.clear().sendKeys(rrMaxSize);
        }).then(function () {
            that._loopbackNoIntfCics(loopbackNo);
        }).then(function () {
            that._loopbackYesIntfCics(loopbackYes);
        }).then(function () {
            that.eleIntfCicsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsTrcLvlTrgSpinner.clear().sendKeys(trcLvlTrg);
        }).then(function () {
            that._tsqProcessingIntfCics(batchingNo, batchingYes, workers, batchSize, trcLvlTsq);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a CICS Interface, then confirm the delete operation.
    //
    definePage.prototype.delIntfCicsYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsCicsLeftmenu);
        }).then(function () {
            that.eleIntfsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a CICS Interface, then discard the delete operation.
    //
    definePage.prototype.delIntfCicsNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsCicsLeftmenu);
        }).then(function () {
            that.eleIntfsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent();
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a CICS Interface.
    //
    definePage.prototype.replicateIntfCics = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsCicsLeftmenu);
        }).then(function () {
            that.eleIntfsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a CICS Interface.
    //
    definePage.prototype.updateIntfCics = function (name, desc, intfid, outputIntf, endpoint, mirrorTranid, userid, ordered, requestReply, esbRequestReply, guaranteed, reliable, rrMaxSize, loopback, trcLvlTrg, batchingNo, batchingYes, workers, batchSize, trcLvlTsq) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfCICS.intfid;
        mirrorTranid = mirrorTranid || browser.params.intfCICS.mirrorTranid;
        userid = userid || browser.params.intfCICS.userid;
        esbRequestReply = esbRequestReply === undefined ? "1" : esbRequestReply;
        guaranteed = guaranteed === undefined ? "0" : guaranteed;
        reliable = reliable === undefined ? "0" : reliable;
        rrMaxSize = rrMaxSize === undefined ? "16000" : rrMaxSize;
        trcLvlTrg = trcLvlTrg === undefined ? "0" : trcLvlTrg;
        workers = workers === undefined ? "0" : workers;
        batchSize = batchSize === undefined ? "50" : batchSize;
        trcLvlTsq = trcLvlTsq === undefined ? "1" : trcLvlTsq;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsCicsLeftmenu);
        }).then(function () {
            that.eleIntfsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfCicsNameInput);
        }).then(function () {
            that.eleIntfCicsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfCicsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfCicsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfCicsOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfCicsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfCicsMirrorTranidInput.clear().sendKeys(mirrorTranid);
        }).then(function () {
            that.eleIntfCicsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that._orderedIntfCics(ordered);
        }).then(function () {
            that._requestReplyIntfCics(requestReply);
        }).then(function () {
            that.eleIntfCicsEsbRequestReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsEsbRequestReplySpinner.clear().sendKeys(esbRequestReply);
        }).then(function () {
            that.eleIntfCicsGuaranteedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsGuaranteedSpinner.clear().sendKeys(guaranteed);
        }).then(function () {
            that.eleIntfCicsReliableSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsReliableSpinner.clear().sendKeys(reliable);
        }).then(function () {
            that.eleIntfCicsRRMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsRRMaxSizeSpinner.clear().sendKeys(rrMaxSize);
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            that._loopbackIntfCics(loopback);
            // }).then(function () {
            //     that._loopbackNoIntfCics(loopbackNo);
            // }).then(function () {
            //     that._loopbackYesIntfCics(loopbackYes);
        }).then(function () {
            that.eleIntfCicsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsTrcLvlTrgSpinner.clear().sendKeys(trcLvlTrg);
        }).then(function () {
            that._tsqProcessingIntfCics(batchingNo, batchingYes, workers, batchSize, trcLvlTsq);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a CICS Interface, then confirm the cancel operation.
    //
    definePage.prototype.cancelIntfCicsYes = function (name, desc, intfid, outputIntf, endpoint, mirrorTranid, userid, ordered, requestReply, esbRequestReply, guaranteed, reliable, rrMaxSize, loopbackNo, loopbackYes, trcLvlTrg, batchingNo, batchingYes, workers, batchSize, trcLvlTsq) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfCICS.intfid;
        mirrorTranid = mirrorTranid || browser.params.intfCICS.mirrorTranid;
        userid = userid || browser.params.intfCICS.userid;
        esbRequestReply = esbRequestReply === undefined ? "1" : esbRequestReply;
        guaranteed = guaranteed === undefined ? "0" : guaranteed;
        reliable = reliable === undefined ? "0" : reliable;
        rrMaxSize = rrMaxSize === undefined ? "16000" : rrMaxSize;
        trcLvlTrg = trcLvlTrg === undefined ? "0" : trcLvlTrg;
        workers = workers === undefined ? "0" : workers;
        batchSize = batchSize === undefined ? "50" : batchSize;
        trcLvlTsq = trcLvlTsq === undefined ? "1" : trcLvlTsq;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsCicsLeftmenu);
        }).then(function () {
            that.eleIntfsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfCicsNameInput);
        }).then(function () {
            that.eleIntfCicsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfCicsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfCicsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfCicsOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfCicsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfCicsMirrorTranidInput.clear().sendKeys(mirrorTranid);
        }).then(function () {
            that.eleIntfCicsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that._orderedIntfCics(ordered);
        }).then(function () {
            that._requestReplyIntfCics(requestReply);
        }).then(function () {
            that.eleIntfCicsEsbRequestReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsEsbRequestReplySpinner.clear().sendKeys(esbRequestReply);
        }).then(function () {
            that.eleIntfCicsGuaranteedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsGuaranteedSpinner.clear().sendKeys(guaranteed);
        }).then(function () {
            that.eleIntfCicsReliableSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsReliableSpinner.clear().sendKeys(reliable);
        }).then(function () {
            that.eleIntfCicsRRMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsRRMaxSizeSpinner.clear().sendKeys(rrMaxSize);
        }).then(function () {
            that._loopbackNoIntfCics(loopbackNo);
        }).then(function () {
            that._loopbackYesIntfCics(loopbackYes);
        }).then(function () {
            that.eleIntfCicsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsTrcLvlTrgSpinner.clear().sendKeys(trcLvlTrg);
        }).then(function () {
            that._tsqProcessingIntfCics(batchingNo, batchingYes, workers, batchSize, trcLvlTsq);
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
    // The function is used for cancel the changes of a CICS Interface, then discard the cancel operation.
    //
    definePage.prototype.cancelIntfCicsNo = function (name, desc, intfid, outputIntf, endpoint, mirrorTranid, userid, ordered, requestReply, esbRequestReply, guaranteed, reliable, rrMaxSize, loopbackNo, loopbackYes, trcLvlTrg, batchingNo, batchingYes, workers, batchSize, trcLvlTsq) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfCICS.intfid;
        mirrorTranid = mirrorTranid || browser.params.intfCICS.mirrorTranid;
        userid = userid || browser.params.intfCICS.userid;
        esbRequestReply = esbRequestReply === undefined ? "1" : esbRequestReply;
        guaranteed = guaranteed === undefined ? "0" : guaranteed;
        reliable = reliable === undefined ? "0" : reliable;
        rrMaxSize = rrMaxSize === undefined ? "16000" : rrMaxSize;
        trcLvlTrg = trcLvlTrg === undefined ? "0" : trcLvlTrg;
        workers = workers === undefined ? "0" : workers;
        batchSize = batchSize === undefined ? "50" : batchSize;
        trcLvlTsq = trcLvlTsq === undefined ? "1" : trcLvlTsq;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsCicsLeftmenu);
        }).then(function () {
            that.eleIntfsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfCicsNameInput);
        }).then(function () {
            that.eleIntfCicsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfCicsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfCicsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfCicsOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfCicsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfCicsMirrorTranidInput.clear().sendKeys(mirrorTranid);
        }).then(function () {
            that.eleIntfCicsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that._orderedIntfCics(ordered);
        }).then(function () {
            that._requestReplyIntfCics(requestReply);
        }).then(function () {
            that.eleIntfCicsEsbRequestReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsEsbRequestReplySpinner.clear().sendKeys(esbRequestReply);
        }).then(function () {
            that.eleIntfCicsGuaranteedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsGuaranteedSpinner.clear().sendKeys(guaranteed);
        }).then(function () {
            that.eleIntfCicsReliableSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsReliableSpinner.clear().sendKeys(reliable);
        }).then(function () {
            that.eleIntfCicsRRMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsRRMaxSizeSpinner.clear().sendKeys(rrMaxSize);
        }).then(function () {
            that._loopbackNoIntfCics(loopbackNo);
        }).then(function () {
            that._loopbackYesIntfCics(loopbackYes);
        }).then(function () {
            that.eleIntfCicsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsTrcLvlTrgSpinner.clear().sendKeys(trcLvlTrg);
        }).then(function () {
            that._tsqProcessingIntfCics(batchingNo, batchingYes, workers, batchSize, trcLvlTsq);
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
    // The function is used for reset a CICS Interface.
    //
    definePage.prototype.resetIntfCics = function (name, desc, intfid, outputIntf, endpoint, mirrorTranid, userid, ordered, requestReply, esbRequestReply, guaranteed, reliable, rrMaxSize, loopbackNo, loopbackYes, trcLvlTrg, batchingNo, batchingYes, workers, batchSize, trcLvlTsq) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        intfid = intfid || browser.params.intfCICS.intfid;
        mirrorTranid = mirrorTranid || browser.params.intfCICS.mirrorTranid;
        userid = userid || browser.params.intfCICS.userid;
        esbRequestReply = esbRequestReply === undefined ? "1" : esbRequestReply;
        guaranteed = guaranteed === undefined ? "0" : guaranteed;
        reliable = reliable === undefined ? "0" : reliable;
        rrMaxSize = rrMaxSize === undefined ? "16000" : rrMaxSize;
        trcLvlTrg = trcLvlTrg === undefined ? "0" : trcLvlTrg;
        workers = workers === undefined ? "0" : workers;
        batchSize = batchSize === undefined ? "50" : batchSize;
        trcLvlTsq = trcLvlTsq === undefined ? "1" : trcLvlTsq;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsCicsLeftmenu);
        }).then(function () {
            that.eleIntfsCicsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfCicsNameInput);
        }).then(function () {
            that.eleIntfCicsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfCicsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfCicsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfCicsOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfCicsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfCicsMirrorTranidInput.clear().sendKeys(mirrorTranid);
        }).then(function () {
            that.eleIntfCicsUseridInput.clear().sendKeys(userid);
        }).then(function () {
            that._orderedIntfCics(ordered);
        }).then(function () {
            that._requestReplyIntfCics(requestReply);
        }).then(function () {
            that.eleIntfCicsEsbRequestReplySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsEsbRequestReplySpinner.clear().sendKeys(esbRequestReply);
        }).then(function () {
            that.eleIntfCicsGuaranteedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsGuaranteedSpinner.clear().sendKeys(guaranteed);
        }).then(function () {
            that.eleIntfCicsReliableSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsReliableSpinner.clear().sendKeys(reliable);
        }).then(function () {
            that.eleIntfCicsRRMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsRRMaxSizeSpinner.clear().sendKeys(rrMaxSize);
        }).then(function () {
            that._loopbackNoIntfCics(loopbackNo);
        }).then(function () {
            that._loopbackYesIntfCics(loopbackYes);
        }).then(function () {
            that.eleIntfCicsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfCicsTrcLvlTrgSpinner.clear().sendKeys(trcLvlTrg);
        }).then(function () {
            that._tsqProcessingIntfCics(batchingNo, batchingYes, workers, batchSize, trcLvlTsq);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };

    //
    // This function is used for set 'IMS Interface Details -> IMS Commit Mode 0'
    // false: not click
    // true: click
    //
    definePage.prototype._commitMode0IntfIms = function (commit0) {
        var deferred = protractor.promise.defer(), that = this;
        if (commit0) {
            that.eleIntfImsCommitMode0Radio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        return deferred.promise;
    };
    //
    // This function is used for set 'IMS Interface Details -> IMS Commit Mode 1'
    // false: not click
    // true: click
    //
    definePage.prototype._commitMode1IntfIms = function (commit1) {
        var deferred = protractor.promise.defer(), that = this;
        if (commit1) {
            that.eleIntfImsCommitMode1Radio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        return deferred.promise;
    };
    //
    // This function is used for set 'IMS Interface Details -> Loopback No'
    // false: not click
    // true: click
    //
    definePage.prototype._loopbackNoIntfIms = function (loopbackNo) {
        var deferred = protractor.promise.defer(), that = this;
        if (loopbackNo) {
            that.eleIntfImsLoopbackNoRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        return deferred.promise;
    };
    //
    // This function is used for set 'IMS Interface Details -> Loopback Yes'
    // false: not click
    // true: click
    //
    definePage.prototype._loopbackYesIntfIms = function (loopbackYes) {
        var deferred = protractor.promise.defer(), that = this;
        if (loopbackYes) {
            that.eleIntfImsLoopbackYesRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        return deferred.promise;
    };
    //
    // This function is used for set 'IMS Interface Details -> OTMA Settings'
    // false: not click
    // true: click
    //
    definePage.prototype._otmaIntfIms = function (waitInitial, waitOtma, waitMsg, tranAllocation, tranSize, srbAllocation, srbSize, grpAllocation, grpSize) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleIntfImsOtmaSettingsExtend).then(function () {
            return that.eleIntfImsWaitInitializationInput.isDisplayed();
        }).then(function (result) {
            if (result) {
                that.eleIntfImsWaitInitializationInput.clear().sendKeys(waitInitial).then(function () {
                    that.eleIntfImsWaitOtmaInput.clear().sendKeys(waitOtma);
                }).then(function () {
                    that.eleIntfImsWaitMsgInput.clear().sendKeys(waitMsg);
                }).then(function () {
                    that.eleIntfImsTranAllocationInput.clear().sendKeys(tranAllocation);
                }).then(function () {
                    that.eleIntfImsTranSizeInput.clear().sendKeys(tranSize);
                }).then(function () {
                    that.eleIntfImsSrbAllocationInput.clear().sendKeys(srbAllocation);
                }).then(function () {
                    that.eleIntfImsSrbSizeInput.clear().sendKeys(srbSize);
                }).then(function () {
                    that.eleIntfImsGrpAllocationInput.clear().sendKeys(grpAllocation);
                }).then(function () {
                    that.eleIntfImsGrpSizeInput.clear().sendKeys(grpSize);
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                that.eleIntfImsOtmaSettingsExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleIntfImsWaitInitializationInput);
                }).then(function () {
                    that.eleIntfImsWaitInitializationInput.clear().sendKeys(waitInitial);
                }).then(function () {
                    that.eleIntfImsWaitOtmaInput.clear().sendKeys(waitOtma);
                }).then(function () {
                    that.eleIntfImsWaitMsgInput.clear().sendKeys(waitMsg);
                }).then(function () {
                    that.eleIntfImsTranAllocationInput.clear().sendKeys(tranAllocation);
                }).then(function () {
                    that.eleIntfImsTranSizeInput.clear().sendKeys(tranSize);
                }).then(function () {
                    that.eleIntfImsSrbAllocationInput.clear().sendKeys(srbAllocation);
                }).then(function () {
                    that.eleIntfImsSrbSizeInput.clear().sendKeys(srbSize);
                }).then(function () {
                    that.eleIntfImsGrpAllocationInput.clear().sendKeys(grpAllocation);
                }).then(function () {
                    that.eleIntfImsGrpSizeInput.clear().sendKeys(grpSize);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for add a IMS Interface.
    //
    definePage.prototype.addIntfIms = function (name, desc, intfid, xcfMember, tpipe, tpipePrefix, outputIntf, endpoint, guaranteed, reliable, syncCallout, commit0, commit1, esbRequestReply, serviceTrg, waitInitial, waitOtma, waitMsg, tranAllocation, tranSize, srbAllocation, srbSize, grpAllocation, grpSize, lookbackNo, loopbackYes, trcLvlTrg, trcLvlOtma) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfIMS.intfid;
        xcfMember = xcfMember || browser.params.intfIMS.xcfMemberName;
        tpipe = tpipe || browser.params.intfIMS.tpipeName;
        tpipePrefix = tpipePrefix || browser.params.intfIMS.tpipePrefix;
        guaranteed = guaranteed || browser.params.intfIMS.tpipeForTriggerGuaranteed;
        reliable = reliable || browser.params.intfIMS.tpipeForTriggerReliable;
        syncCallout = syncCallout || browser.params.intfIMS.tpipeForSyncCallout;
        desc = desc || "";
        commit1 = commit1 === undefined ? "true" : commit1;
        esbRequestReply = esbRequestReply || "2";
        serviceTrg = serviceTrg || "2";
        waitInitial = waitInitial || "2";
        waitOtma = waitOtma || "2";
        waitMsg = waitMsg || "30";
        tranAllocation = tranAllocation || "20";
        tranSize = tranSize || "4096";
        srbAllocation = srbAllocation || "64";
        srbSize = srbSize || "4096";
        grpAllocation = grpAllocation || "8";
        grpSize = grpSize || "2048";
        lookbackNo = lookbackNo === undefined ? "true" : lookbackNo;
        trcLvlTrg = trcLvlTrg || "0";
        trcLvlOtma = trcLvlOtma || "2";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsImsLeftmenu);
        }).then(function () {
            that.eleIntfsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfImsNameInput);
        }).then(function () {
            that.eleIntfImsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfImsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfImsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfImsXcfMemberNameInput.clear().sendKeys(xcfMember);
        }).then(function () {
            that.eleIntfImsTpipeNameInput.clear().sendKeys(tpipe);
        }).then(function () {
            that.eleIntfImsTpipePrefixInput.clear().sendKeys(tpipePrefix);
        }).then(function () {
            that.eleIntfImsOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfImsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfImsGuaranteedInput.clear().sendKeys(guaranteed);
        }).then(function () {
            that.eleIntfImsReliableInput.clear().sendKeys(reliable);
        }).then(function () {
            that.eleIntfImsSyncCalloutInput.clear().sendKeys(syncCallout);
        }).then(function () {
            that._commitMode0IntfIms(commit0);
        }).then(function () {
            that._commitMode1IntfIms(commit1);
        }).then(function () {
            that.eleIntfImsWorkersEsbRRSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsWorkersEsbRRSpinner.clear().sendKeys(esbRequestReply);
        }).then(function () {
            that.eleIntfImsWorkersTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsWorkersTrgSpinner.clear().sendKeys(serviceTrg);
        }).then(function () {
            that._otmaIntfIms(waitInitial, waitOtma, waitMsg, tranAllocation, tranSize, srbAllocation, srbSize, grpAllocation, grpSize);
        }).then(function () {
            that._loopbackNoIntfIms(lookbackNo);
        }).then(function () {
            that._loopbackYesIntfIms(loopbackYes);
        }).then(function () {
            that.eleIntfImsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsTrcLvlTrgSpinner.clear().sendKeys(trcLvlTrg);
        }).then(function () {
            that.eleIntfImsTrcLvlOtmaSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsTrcLvlOtmaSpinner.clear().sendKeys(trcLvlOtma);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a IMS Interface, then confirm the delete operation.
    //
    definePage.prototype.delIntfImsYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsImsLeftmenu);
        }).then(function () {
            that.eleIntfsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a IMS Interface, then discard the delete operation.
    //
    definePage.prototype.delIntfImsNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsImsLeftmenu);
        }).then(function () {
            that.eleIntfsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a IMS Interface.
    //
    definePage.prototype.replicateIntfIms = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsImsLeftmenu);
        }).then(function () {
            that.eleIntfsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a IMS Interface.
    //
    definePage.prototype.updateIntfIms = function (name, desc, intfid, xcfMember, tpipe, tpipePrefix, outputIntf, endpoint, guaranteed, reliable, syncCallout, commit0, commit1, esbRequestReply, serviceTrg, waitInitial, waitOtma, waitMsg, tranAllocation, tranSize, srbAllocation, srbSize, grpAllocation, grpSize, lookbackNo, loopbackYes, trcLvlTrg, trcLvlOtma) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfIMS.intfid;
        xcfMember = xcfMember || browser.params.intfIMS.xcfMemberName;
        tpipe = tpipe || browser.params.intfIMS.tpipeName;
        tpipePrefix = tpipePrefix || browser.params.intfIMS.tpipePrefix;
        guaranteed = guaranteed || browser.params.intfIMS.tpipeForTriggerGuaranteed;
        reliable = reliable || browser.params.intfIMS.tpipeForTriggerReliable;
        syncCallout = syncCallout || browser.params.intfIMS.tpipeForSyncCallout;
        desc = desc || "";
        commit1 = commit1 === undefined ? "true" : commit1;
        esbRequestReply = esbRequestReply || "2";
        serviceTrg = serviceTrg || "2";
        waitInitial = waitInitial || "2";
        waitOtma = waitOtma || "2";
        waitMsg = waitMsg || "30";
        tranAllocation = tranAllocation || "20";
        tranSize = tranSize || "4096";
        srbAllocation = srbAllocation || "64";
        srbSize = srbSize || "4096";
        grpAllocation = grpAllocation || "8";
        grpSize = grpSize || "2048";
        lookbackNo = lookbackNo === undefined ? "true" : lookbackNo;
        trcLvlTrg = trcLvlTrg || "0";
        trcLvlOtma = trcLvlOtma || "2";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsImsLeftmenu);
        }).then(function () {
            that.eleIntfsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfImsNameInput);
        }).then(function () {
            that.eleIntfImsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfImsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfImsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfImsXcfMemberNameInput.clear().sendKeys(xcfMember);
        }).then(function () {
            that.eleIntfImsTpipeNameInput.clear().sendKeys(tpipe);
        }).then(function () {
            that.eleIntfImsTpipePrefixInput.clear().sendKeys(tpipePrefix);
        }).then(function () {
            that.eleIntfImsOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfImsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfImsGuaranteedInput.clear().sendKeys(guaranteed);
        }).then(function () {
            that.eleIntfImsReliableInput.clear().sendKeys(reliable);
        }).then(function () {
            that.eleIntfImsSyncCalloutInput.clear().sendKeys(syncCallout);
        }).then(function () {
            that._commitMode0IntfIms(commit0);
        }).then(function () {
            that._commitMode1IntfIms(commit1);
        }).then(function () {
            that.eleIntfImsWorkersEsbRRSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsWorkersEsbRRSpinner.clear().sendKeys(esbRequestReply);
        }).then(function () {
            that.eleIntfImsWorkersTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsWorkersTrgSpinner.clear().sendKeys(serviceTrg);
        }).then(function () {
            that._otmaIntfIms(waitInitial, waitOtma, waitMsg, tranAllocation, tranSize, srbAllocation, srbSize, grpAllocation, grpSize);
        }).then(function () {
            that._loopbackNoIntfIms(lookbackNo);
        }).then(function () {
            that._loopbackYesIntfIms(loopbackYes);
        }).then(function () {
            that.eleIntfImsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsTrcLvlTrgSpinner.clear().sendKeys(trcLvlTrg);
        }).then(function () {
            that.eleIntfImsTrcLvlOtmaSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsTrcLvlOtmaSpinner.clear().sendKeys(trcLvlOtma);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a IMS Interface, then confirm the cancel operation.
    //
    definePage.prototype.cancelIntfImsYes = function (name, desc, intfid, xcfMember, tpipe, tpipePrefix, outputIntf, endpoint, guaranteed, reliable, syncCallout, commit0, commit1, esbRequestReply, serviceTrg, waitInitial, waitOtma, waitMsg, tranAllocation, tranSize, srbAllocation, srbSize, grpAllocation, grpSize, lookbackNo, loopbackYes, trcLvlTrg, trcLvlOtma) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfIMS.intfid;
        xcfMember = xcfMember || browser.params.intfIMS.xcfMemberName;
        tpipe = tpipe || browser.params.intfIMS.tpipeName;
        tpipePrefix = tpipePrefix || browser.params.intfIMS.tpipePrefix;
        guaranteed = guaranteed || browser.params.intfIMS.tpipeForTriggerGuaranteed;
        reliable = reliable || browser.params.intfIMS.tpipeForTriggerReliable;
        syncCallout = syncCallout || browser.params.intfIMS.tpipeForSyncCallout;
        desc = desc || "";
        commit1 = commit1 === undefined ? "true" : commit1;
        esbRequestReply = esbRequestReply || "2";
        serviceTrg = serviceTrg || "2";
        waitInitial = waitInitial || "2";
        waitOtma = waitOtma || "2";
        waitMsg = waitMsg || "30";
        tranAllocation = tranAllocation || "20";
        tranSize = tranSize || "4096";
        srbAllocation = srbAllocation || "64";
        srbSize = srbSize || "4096";
        grpAllocation = grpAllocation || "8";
        grpSize = grpSize || "2048";
        lookbackNo = lookbackNo === undefined ? "true" : lookbackNo;
        trcLvlTrg = trcLvlTrg || "0";
        trcLvlOtma = trcLvlOtma || "2";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsImsLeftmenu);
        }).then(function () {
            that.eleIntfsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfImsNameInput);
        }).then(function () {
            that.eleIntfImsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfImsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfImsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfImsXcfMemberNameInput.clear().sendKeys(xcfMember);
        }).then(function () {
            that.eleIntfImsTpipeNameInput.clear().sendKeys(tpipe);
        }).then(function () {
            that.eleIntfImsTpipePrefixInput.clear().sendKeys(tpipePrefix);
        }).then(function () {
            that.eleIntfImsOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfImsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfImsGuaranteedInput.clear().sendKeys(guaranteed);
        }).then(function () {
            that.eleIntfImsReliableInput.clear().sendKeys(reliable);
        }).then(function () {
            that.eleIntfImsSyncCalloutInput.clear().sendKeys(syncCallout);
        }).then(function () {
            that._commitMode0IntfIms(commit0);
        }).then(function () {
            that._commitMode1IntfIms(commit1);
        }).then(function () {
            that.eleIntfImsWorkersEsbRRSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsWorkersEsbRRSpinner.clear().sendKeys(esbRequestReply);
        }).then(function () {
            that.eleIntfImsWorkersTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsWorkersTrgSpinner.clear().sendKeys(serviceTrg);
        }).then(function () {
            that._otmaIntfIms(waitInitial, waitOtma, waitMsg, tranAllocation, tranSize, srbAllocation, srbSize, grpAllocation, grpSize);
        }).then(function () {
            that._loopbackNoIntfIms(lookbackNo);
        }).then(function () {
            that._loopbackYesIntfIms(loopbackYes);
        }).then(function () {
            that.eleIntfImsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsTrcLvlTrgSpinner.clear().sendKeys(trcLvlTrg);
        }).then(function () {
            that.eleIntfImsTrcLvlOtmaSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsTrcLvlOtmaSpinner.clear().sendKeys(trcLvlOtma);
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
    // The function is used for cancel the changes of a IMS Interface, then discard the cancel operation.
    //
    definePage.prototype.cancelIntfImsNo = function (name, desc, intfid, xcfMember, tpipe, tpipePrefix, outputIntf, endpoint, guaranteed, reliable, syncCallout, commit0, commit1, esbRequestReply, serviceTrg, waitInitial, waitOtma, waitMsg, tranAllocation, tranSize, srbAllocation, srbSize, grpAllocation, grpSize, lookbackNo, loopbackYes, trcLvlTrg, trcLvlOtma) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfIMS.intfid;
        xcfMember = xcfMember || browser.params.intfIMS.xcfMemberName;
        tpipe = tpipe || browser.params.intfIMS.tpipeName;
        tpipePrefix = tpipePrefix || browser.params.intfIMS.tpipePrefix;
        guaranteed = guaranteed || browser.params.intfIMS.tpipeForTriggerGuaranteed;
        reliable = reliable || browser.params.intfIMS.tpipeForTriggerReliable;
        syncCallout = syncCallout || browser.params.intfIMS.tpipeForSyncCallout;
        desc = desc || "";
        commit1 = commit1 === undefined ? "true" : commit1;
        esbRequestReply = esbRequestReply || "2";
        serviceTrg = serviceTrg || "2";
        waitInitial = waitInitial || "2";
        waitOtma = waitOtma || "2";
        waitMsg = waitMsg || "30";
        tranAllocation = tranAllocation || "20";
        tranSize = tranSize || "4096";
        srbAllocation = srbAllocation || "64";
        srbSize = srbSize || "4096";
        grpAllocation = grpAllocation || "8";
        grpSize = grpSize || "2048";
        lookbackNo = lookbackNo === undefined ? "true" : lookbackNo;
        trcLvlTrg = trcLvlTrg || "0";
        trcLvlOtma = trcLvlOtma || "2";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsImsLeftmenu);
        }).then(function () {
            that.eleIntfsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfImsNameInput);
        }).then(function () {
            that.eleIntfImsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfImsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfImsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfImsXcfMemberNameInput.clear().sendKeys(xcfMember);
        }).then(function () {
            that.eleIntfImsTpipeNameInput.clear().sendKeys(tpipe);
        }).then(function () {
            that.eleIntfImsTpipePrefixInput.clear().sendKeys(tpipePrefix);
        }).then(function () {
            that.eleIntfImsOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfImsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfImsGuaranteedInput.clear().sendKeys(guaranteed);
        }).then(function () {
            that.eleIntfImsReliableInput.clear().sendKeys(reliable);
        }).then(function () {
            that.eleIntfImsSyncCalloutInput.clear().sendKeys(syncCallout);
        }).then(function () {
            that._commitMode0IntfIms(commit0);
        }).then(function () {
            that._commitMode1IntfIms(commit1);
        }).then(function () {
            that.eleIntfImsWorkersEsbRRSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsWorkersEsbRRSpinner.clear().sendKeys(esbRequestReply);
        }).then(function () {
            that.eleIntfImsWorkersTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsWorkersTrgSpinner.clear().sendKeys(serviceTrg);
        }).then(function () {
            that._otmaIntfIms(waitInitial, waitOtma, waitMsg, tranAllocation, tranSize, srbAllocation, srbSize, grpAllocation, grpSize);
        }).then(function () {
            that._loopbackNoIntfIms(lookbackNo);
        }).then(function () {
            that._loopbackYesIntfIms(loopbackYes);
        }).then(function () {
            that.eleIntfImsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsTrcLvlTrgSpinner.clear().sendKeys(trcLvlTrg);
        }).then(function () {
            that.eleIntfImsTrcLvlOtmaSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsTrcLvlOtmaSpinner.clear().sendKeys(trcLvlOtma);
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
    // The function is used for reset a IMS Interface.
    //
    definePage.prototype.resetIntfIms = function (name, desc, intfid, xcfMember, tpipe, tpipePrefix, outputIntf, endpoint, guaranteed, reliable, syncCallout, commit0, commit1, esbRequestReply, serviceTrg, waitInitial, waitOtma, waitMsg, tranAllocation, tranSize, srbAllocation, srbSize, grpAllocation, grpSize, lookbackNo, loopbackYes, trcLvlTrg, trcLvlOtma) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfIMS.intfid;
        xcfMember = xcfMember || browser.params.intfIMS.xcfMemberName;
        tpipe = tpipe || browser.params.intfIMS.tpipeName;
        tpipePrefix = tpipePrefix || browser.params.intfIMS.tpipePrefix;
        guaranteed = guaranteed || browser.params.intfIMS.tpipeForTriggerGuaranteed;
        reliable = reliable || browser.params.intfIMS.tpipeForTriggerReliable;
        syncCallout = syncCallout || browser.params.intfIMS.tpipeForSyncCallout;
        desc = desc || "";
        commit1 = commit1 === undefined ? "true" : commit1;
        esbRequestReply = esbRequestReply || "2";
        serviceTrg = serviceTrg || "2";
        waitInitial = waitInitial || "2";
        waitOtma = waitOtma || "2";
        waitMsg = waitMsg || "30";
        tranAllocation = tranAllocation || "20";
        tranSize = tranSize || "4096";
        srbAllocation = srbAllocation || "64";
        srbSize = srbSize || "4096";
        grpAllocation = grpAllocation || "8";
        grpSize = grpSize || "2048";
        lookbackNo = lookbackNo === undefined ? "true" : lookbackNo;
        trcLvlTrg = trcLvlTrg || "0";
        trcLvlOtma = trcLvlOtma || "2";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsImsLeftmenu);
        }).then(function () {
            that.eleIntfsImsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfImsNameInput);
        }).then(function () {
            that.eleIntfImsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfImsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfImsIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfImsXcfMemberNameInput.clear().sendKeys(xcfMember);
        }).then(function () {
            that.eleIntfImsTpipeNameInput.clear().sendKeys(tpipe);
        }).then(function () {
            that.eleIntfImsTpipePrefixInput.clear().sendKeys(tpipePrefix);
        }).then(function () {
            that.eleIntfImsOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfImsEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfImsGuaranteedInput.clear().sendKeys(guaranteed);
        }).then(function () {
            that.eleIntfImsReliableInput.clear().sendKeys(reliable);
        }).then(function () {
            that.eleIntfImsSyncCalloutInput.clear().sendKeys(syncCallout);
        }).then(function () {
            that._commitMode0IntfIms(commit0);
        }).then(function () {
            that._commitMode1IntfIms(commit1);
        }).then(function () {
            that.eleIntfImsWorkersEsbRRSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsWorkersEsbRRSpinner.clear().sendKeys(esbRequestReply);
        }).then(function () {
            that.eleIntfImsWorkersTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsWorkersTrgSpinner.clear().sendKeys(serviceTrg);
        }).then(function () {
            that._otmaIntfIms(waitInitial, waitOtma, waitMsg, tranAllocation, tranSize, srbAllocation, srbSize, grpAllocation, grpSize);
        }).then(function () {
            that._loopbackNoIntfIms(lookbackNo);
        }).then(function () {
            that._loopbackYesIntfIms(loopbackYes);
        }).then(function () {
            that.eleIntfImsTrcLvlTrgSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsTrcLvlTrgSpinner.clear().sendKeys(trcLvlTrg);
        }).then(function () {
            that.eleIntfImsTrcLvlOtmaSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfImsTrcLvlOtmaSpinner.clear().sendKeys(trcLvlOtma);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    //
    // This function is used for set 'RED Interface Details -> Output Interface'
    //
    definePage.prototype._outputIntfIntfRed = function (outputIntf, outputIntf2, outputIntf3, outputIntf4) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleIntfRedOutputIntfPickButton).then(function () {
            if (outputIntf === null) {
                deferred.fulfill();
            } else {
                that.eleIntfRedOutputIntfPickButton.click().then(function () {
                    globalPage.entitySelect(outputIntf);
                }).then(function () {
                    if (outputIntf2 === null) {
                        deferred.fulfill();
                    } else {
                        globalCommons.waitForClickable(that.eleIntfRedOutputIntfAddButton).then(function () {
                            that.eleIntfRedOutputIntfAddButton.click();
                        }).then(function () {
                            globalCommons.waitForClickable(that.eleIntfRedOutputIntf2PickButton);
                        }).then(function () {
                            that.eleIntfRedOutputIntf2PickButton.click();
                        }).then(function () {
                            globalPage.entitySelect(outputIntf2);
                        }).then(function () {
                            if (outputIntf3 === null) {
                                deferred.fulfill();
                            } else {
                                globalCommons.waitForClickable(that.eleIntfRedOutputIntfAddButton).then(function () {
                                    that.eleIntfRedOutputIntfAddButton.click();
                                }).then(function () {
                                    globalCommons.waitForClickable(that.eleIntfRedOutputIntf3PickButton);
                                }).then(function () {
                                    that.eleIntfRedOutputIntf3PickButton.click();
                                }).then(function () {
                                    globalPage.entitySelect(outputIntf3);
                                }).then(function () {
                                    if (outputIntf4 === null) {
                                        deferred.fulfill();
                                    } else {
                                        globalCommons.waitForClickable(that.eleIntfRedOutputIntfAddButton).then(function () {
                                            that.eleIntfRedOutputIntfAddButton.click();
                                        }).then(function () {
                                            globalCommons.waitForClickable(that.eleIntfRedOutputIntf4PickButton);
                                        }).then(function () {
                                            that.eleIntfRedOutputIntf4PickButton.click();
                                        }).then(function () {
                                            globalPage.entitySelect(outputIntf4);
                                        }).then(function () {
                                            deferred.fulfill();
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'RED Interface Details -> Trigger Service -> 64-bit Buffers'
    // false: not selected
    // true: selected
    //
    definePage.prototype._trg64bitIntfRed = function (trg64) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfRedTrg64bitBufsCheck).then(function () {
            return that.eleIntfRedTrg64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (trg64) {
                    that.eleIntfRedTrg64bitBufsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (trg64) {
                    deferred.fulfill();
                } else {
                    that.eleIntfRedTrg64bitBufsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'RED Interface Details -> Trigger Service -> Ordered'
    // false: not selected
    // true: selected
    //
    definePage.prototype._trgOrderedIntfRed = function (trgOrdered) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfRedTrgOrderedCheck).then(function () {
            return that.eleIntfRedTrgOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (trgOrdered) {
                    that.eleIntfRedTrgOrderedCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (trgOrdered) {
                    deferred.fulfill();
                } else {
                    that.eleIntfRedTrgOrderedCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'RED Interface Details -> Recipe Service -> 64-bit Buffers'
    // false: not selected
    // true: selected
    //
    definePage.prototype._rec64bitIntfRed = function (rec64) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfRedRec64bitBufsCheck).then(function () {
            return that.eleIntfRedRec64bitBufsCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (rec64) {
                    that.eleIntfRedRec64bitBufsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (rec64) {
                    deferred.fulfill();
                } else {
                    that.eleIntfRedRec64bitBufsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'RED Interface Details -> Recipe Service -> Ordered'
    // false: not selected
    // true: selected
    //
    definePage.prototype._recOrderedIntfRed = function (recOrdered) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfRedRecOrderedCheck).then(function () {
            return that.eleIntfRedRecOrderedCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (recOrdered) {
                    that.eleIntfRedRecOrderedCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (recOrdered) {
                    deferred.fulfill();
                } else {
                    that.eleIntfRedRecOrderedCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'RED Interface Details -> Recipe Service -> Send With Confirmation'
    // false: not selected
    // true: selected
    //
    definePage.prototype._sendWithConfirmIntfRed = function (confirm) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfRedRecSendWithComfimCheck).then(function () {
            return that.eleIntfRedRecSendWithComfimCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (confirm) {
                    that.eleIntfRedRecSendWithComfimCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (confirm) {
                    deferred.fulfill();
                } else {
                    that.eleIntfRedRecSendWithComfimCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'RED Interface Details -> CICS Related Parameters'
    //
    definePage.prototype._cicsParasIntfRed = function (grpname, monitorname, lsnname, lsnTranid, maxTranLsn, maxUserTran, toReply, toComple) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(6).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleIntfRedCicsParasExtend).then(function () {
            return that.eleIntfRedGrpNameInput.isDisplayed();
        }).then(function (result) {
            if (result) {
                that.eleIntfRedGrpNameInput.clear().sendKeys(grpname).then(function () {
                    that.eleIntfRedGrpMonitorNameInput.clear().sendKeys(monitorname);
                }).then(function () {
                    that.eleIntfRedLsnNameInput.clear().sendKeys(lsnname);
                }).then(function () {
                    that.eleIntfRedLsnTranidInput.clear().sendKeys(lsnTranid);
                }).then(function () {
                    that.eleIntfRedTransForLsnSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedTransForLsnSpinner.clear().sendKeys(maxTranLsn);
                }).then(function () {
                    that.eleIntfRedUserTransSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedUserTransSpinner.clear().sendKeys(maxUserTran);
                }).then(function () {
                    that.eleIntfRedTimeoutMsgReplySpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedTimeoutMsgReplySpinner.clear().sendKeys(toReply);
                }).then(function () {
                    that.eleIntfRedTimeoutMsgCompletionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedTimeoutMsgCompletionSpinner.clear().sendKeys(toComple);
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                that.eleIntfRedCicsParasExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleIntfRedGrpNameInput);
                }).then(function () {
                    that.eleIntfRedGrpNameInput.clear().sendKeys(grpname);
                }).then(function () {
                    that.eleIntfRedGrpMonitorNameInput.clear().sendKeys(monitorname);
                }).then(function () {
                    that.eleIntfRedLsnNameInput.clear().sendKeys(lsnname);
                }).then(function () {
                    that.eleIntfRedLsnTranidInput.clear().sendKeys(lsnTranid);
                }).then(function () {
                    that.eleIntfRedTransForLsnSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedTransForLsnSpinner.clear().sendKeys(maxTranLsn);
                }).then(function () {
                    that.eleIntfRedUserTransSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedUserTransSpinner.clear().sendKeys(maxUserTran);
                }).then(function () {
                    that.eleIntfRedTimeoutMsgReplySpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedTimeoutMsgReplySpinner.clear().sendKeys(toReply);
                }).then(function () {
                    that.eleIntfRedTimeoutMsgCompletionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedTimeoutMsgCompletionSpinner.clear().sendKeys(toComple);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'RED Interface Details -> Trigger Service - CICS Outbound Messaging'
    //
    definePage.prototype._trgServiceIntfRed = function (trg64, trgOrdered, trgMaxMsgLen, numBufP1, numBufP2, numBufP3, bufSizeP1, bufSizeP2, bufSizeP3, pacP1, pacP2, pacP3, trclvlP1, trclvlP2, trclvlP3, workerP1, workerP2, workerP3, msgnameP1, msgnameP2, msgnameP3) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleIntfRedTrgOutboundExtend).then(function () {
            return that.eleIntfRedTrg64bitBufsCheck.isDisplayed();
        }).then(function (result) {
            if (result) {
                that._trg64bitIntfRed(trg64).then(function () {
                    that._trgOrderedIntfRed(trgOrdered);
                }).then(function () {
                    that.eleIntfRedTrgMaxMsgLenSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedTrgMaxMsgLenSpinner.clear().sendKeys(trgMaxMsgLen);
                }).then(function () {
                    that.eleIntfRedTrgNumOfBufsPool1Input.clear().sendKeys(numBufP1);
                }).then(function () {
                    that.eleIntfRedTrgNumOfBufsPool2Input.clear().sendKeys(numBufP2);
                }).then(function () {
                    that.eleIntfRedTrgNumOfBufsPool3Input.clear().sendKeys(numBufP3);
                }).then(function () {
                    that.eleIntfRedTrgBufSizePool1Input.clear().sendKeys(bufSizeP1);
                }).then(function () {
                    that.eleIntfRedTrgBufSizePool2Input.clear().sendKeys(bufSizeP2);
                }).then(function () {
                    that.eleIntfRedTrgBufSizePool3Input.clear().sendKeys(bufSizeP3);
                }).then(function () {
                    that.eleIntfRedTrgPacingPool1Input.clear().sendKeys(pacP1);
                }).then(function () {
                    that.eleIntfRedTrgPacingPool2Input.clear().sendKeys(pacP2);
                }).then(function () {
                    that.eleIntfRedTrgPacingPool3Input.clear().sendKeys(pacP3);
                }).then(function () {
                    that.eleIntfRedTrgTrcLvlPool1Input.clear().sendKeys(trclvlP1);
                }).then(function () {
                    that.eleIntfRedTrgTrcLvlPool2Input.clear().sendKeys(trclvlP2);
                }).then(function () {
                    that.eleIntfRedTrgTrcLvlPool3Input.clear().sendKeys(trclvlP3);
                }).then(function () {
                    that.eleIntfRedTrgWorkersPool1Input.clear().sendKeys(workerP1);
                }).then(function () {
                    that.eleIntfRedTrgWorkersPool2Input.clear().sendKeys(workerP2);
                }).then(function () {
                    that.eleIntfRedTrgWorkersPool3Input.clear().sendKeys(workerP3);
                }).then(function () {
                    that.eleIntfRedTrgMsgNamePool1Input.clear().sendKeys(msgnameP1);
                }).then(function () {
                    that.eleIntfRedTrgMsgNamePool2Input.clear().sendKeys(msgnameP2);
                }).then(function () {
                    that.eleIntfRedTrgMsgNamePool3Input.clear().sendKeys(msgnameP3);
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                that.eleIntfRedTrgOutboundExtend.click().then(function () {
                    that._trg64bitIntfRed(trg64);
                }).then(function () {
                    that._trgOrderedIntfRed(trgOrdered);
                }).then(function () {
                    that.eleIntfRedTrgMaxMsgLenSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedTrgMaxMsgLenSpinner.clear().sendKeys(trgMaxMsgLen);
                }).then(function () {
                    that.eleIntfRedTrgNumOfBufsPool1Input.clear().sendKeys(numBufP1);
                }).then(function () {
                    that.eleIntfRedTrgNumOfBufsPool2Input.clear().sendKeys(numBufP2);
                }).then(function () {
                    that.eleIntfRedTrgNumOfBufsPool3Input.clear().sendKeys(numBufP3);
                }).then(function () {
                    that.eleIntfRedTrgBufSizePool1Input.clear().sendKeys(bufSizeP1);
                }).then(function () {
                    that.eleIntfRedTrgBufSizePool2Input.clear().sendKeys(bufSizeP2);
                }).then(function () {
                    that.eleIntfRedTrgBufSizePool3Input.clear().sendKeys(bufSizeP3);
                }).then(function () {
                    that.eleIntfRedTrgPacingPool1Input.clear().sendKeys(pacP1);
                }).then(function () {
                    that.eleIntfRedTrgPacingPool2Input.clear().sendKeys(pacP2);
                }).then(function () {
                    that.eleIntfRedTrgPacingPool3Input.clear().sendKeys(pacP3);
                }).then(function () {
                    that.eleIntfRedTrgTrcLvlPool1Input.clear().sendKeys(trclvlP1);
                }).then(function () {
                    that.eleIntfRedTrgTrcLvlPool2Input.clear().sendKeys(trclvlP2);
                }).then(function () {
                    that.eleIntfRedTrgTrcLvlPool3Input.clear().sendKeys(trclvlP3);
                }).then(function () {
                    that.eleIntfRedTrgWorkersPool1Input.clear().sendKeys(workerP1);
                }).then(function () {
                    that.eleIntfRedTrgWorkersPool2Input.clear().sendKeys(workerP2);
                }).then(function () {
                    that.eleIntfRedTrgWorkersPool3Input.clear().sendKeys(workerP3);
                }).then(function () {
                    that.eleIntfRedTrgMsgNamePool1Input.clear().sendKeys(msgnameP1);
                }).then(function () {
                    that.eleIntfRedTrgMsgNamePool2Input.clear().sendKeys(msgnameP2);
                }).then(function () {
                    that.eleIntfRedTrgMsgNamePool3Input.clear().sendKeys(msgnameP3);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'RED Interface Details -> Recipe Service - CICS Inbound Messaging'
    //
    definePage.prototype._recServiceIntfRed = function (workers, dynLsnlvl, recMaxMsgLen, numBuf, bufSize, pacing, wait, cicsToWait, bufOverflow, bufThrottling, rec64, recOrdered, confirm) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleIntfRedRecInboundExtend).then(function () {
            return that.eleIntfRedRecWorkersSpinner.isDisplayed();
        }).then(function (result) {
            if (result) {
                that.eleIntfRedRecWorkersSpinner.sendKeys(backspaceSeries).then(function () {
                    that.eleIntfRedRecWorkersSpinner.clear().sendKeys(workers);
                }).then(function () {
                    that.eleIntfRedRecStartDynLsnsLvlSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecStartDynLsnsLvlSpinner.clear().sendKeys(dynLsnlvl);
                }).then(function () {
                    that.eleIntfRedRecMaxMsgLenSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecMaxMsgLenSpinner.clear().sendKeys(recMaxMsgLen);
                }).then(function () {
                    that.eleIntfRedRecNumOfBufsSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecNumOfBufsSpinner.clear().sendKeys(numBuf);
                }).then(function () {
                    that.eleIntfRedRecBufSizeSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecBufSizeSpinner.clear().sendKeys(bufSize);
                }).then(function () {
                    that.eleIntfRedRecPacingSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecPacingSpinner.clear().sendKeys(pacing);
                }).then(function () {
                    that.eleIntfRedRecWaitSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecWaitSpinner.clear().sendKeys(wait);
                }).then(function () {
                    that.eleIntfRedRecCicsToWaitSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecCicsToWaitSpinner.clear().sendKeys(cicsToWait);
                }).then(function () {
                    that.eleIntfRedRecBufOverfolwSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecBufOverfolwSpinner.clear().sendKeys(bufOverflow);
                }).then(function () {
                    that.eleIntfRedRecBufThrottlingSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecBufThrottlingSpinner.clear().sendKeys(bufThrottling);
                }).then(function () {
                    that._rec64bitIntfRed(rec64);
                }).then(function () {
                    that._recOrderedIntfRed(recOrdered);
                }).then(function () {
                    that._sendWithConfirmIntfRed(confirm);
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                that.eleIntfRedRecInboundExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleIntfRedRecWorkersSpinner)
                }).then(function () {
                    that.eleIntfRedRecWorkersSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecWorkersSpinner.clear().sendKeys(workers);
                }).then(function () {
                    that.eleIntfRedRecStartDynLsnsLvlSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecStartDynLsnsLvlSpinner.clear().sendKeys(dynLsnlvl);
                }).then(function () {
                    that.eleIntfRedRecMaxMsgLenSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecMaxMsgLenSpinner.clear().sendKeys(recMaxMsgLen);
                }).then(function () {
                    that.eleIntfRedRecNumOfBufsSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecNumOfBufsSpinner.clear().sendKeys(numBuf);
                }).then(function () {
                    that.eleIntfRedRecBufSizeSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecBufSizeSpinner.clear().sendKeys(bufSize);
                }).then(function () {
                    that.eleIntfRedRecPacingSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecPacingSpinner.clear().sendKeys(pacing);
                }).then(function () {
                    that.eleIntfRedRecWaitSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecWaitSpinner.clear().sendKeys(wait);
                }).then(function () {
                    that.eleIntfRedRecCicsToWaitSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecCicsToWaitSpinner.clear().sendKeys(cicsToWait);
                }).then(function () {
                    that.eleIntfRedRecBufOverfolwSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecBufOverfolwSpinner.clear().sendKeys(bufOverflow);
                }).then(function () {
                    that.eleIntfRedRecBufThrottlingSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleIntfRedRecBufThrottlingSpinner.clear().sendKeys(bufThrottling);
                }).then(function () {
                    that._rec64bitIntfRed(rec64);
                }).then(function () {
                    that._recOrderedIntfRed(recOrdered);
                }).then(function () {
                    that._sendWithConfirmIntfRed(confirm);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for add a RED Interface.
    //
    definePage.prototype.addIntfRed = function (name, desc, intfid, outputIntf, outputIntf2, outputIntf3, outputIntf4, endpoint, hubname, adminname, trclvlBES, trclvlRED, grpname, monitorname, lsnname, lsnTranid, maxTranLsn, maxUserTran, toReply, toComple, trg64, trgOrdered, trgMaxMsgLen, numBufP1, numBufP2, numBufP3, bufSizeP1, bufSizeP2, bufSizeP3, pacP1, pacP2, pacP3, trclvlP1, trclvlP2, trclvlP3, workerP1, workerP2, workerP3, msgnameP1, msgnameP2, msgnameP3, workers, dynLsnlvl, recMaxMsgLen, numBuf, bufSize, pacing, wait, cicsToWait, bufOverflow, bufThrottling, rec64, recOrdered, confirm) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfRED.intfid;
        hubname = hubname || browser.params.intfRED.hubName;
        adminname = adminname || browser.params.intfRED.adminName;
        grpname = grpname || browser.params.intfRED.groupName;
        monitorname = monitorname || browser.params.intfRED.monitorName;
        lsnname = lsnname || browser.params.intfRED.listenerName;
        lsnTranid = lsnTranid || browser.params.intfRED.listenerTranid;
        desc = desc || "";
        trclvlBES = trclvlBES || "0";
        trclvlRED = trclvlRED || "0";
        maxTranLsn = maxTranLsn || "21";
        maxUserTran = maxUserTran || "50";
        toReply = toReply || "3000";
        toComple = toComple || "1";
        trgOrdered = trgOrdered === undefined ? "true" : trgOrdered;
        trgMaxMsgLen = trgMaxMsgLen || "40000";
        numBufP1 = numBufP1 || "1000";
        numBufP2 = numBufP2 || "1000";
        numBufP3 = numBufP3 || "1000";
        bufSizeP1 = bufSizeP1 || "8192";
        bufSizeP2 = bufSizeP2 || "8192";
        bufSizeP3 = bufSizeP3 || "8192";
        pacP1 = pacP1 || "0";
        pacP2 = pacP2 || "0";
        pacP3 = pacP3 || "0";
        trclvlP1 = trclvlP1 || "0";
        trclvlP2 = trclvlP2 || "0";
        trclvlP3 = trclvlP3 || "0";
        workerP1 = workerP1 || "0";
        workerP2 = workerP2 || "0";
        workerP3 = workerP3 || "0";
        msgnameP1 = msgnameP1 || "P1AMSG";
        msgnameP2 = msgnameP2 || "P2AMSG";
        msgnameP3 = msgnameP3 || "P3AMSG";
        workers = workers || "5";
        dynLsnlvl = dynLsnlvl || "10";
        recMaxMsgLen = recMaxMsgLen || "16382";
        numBuf = numBuf || "100";
        bufSize = bufSize || "4096";
        pacing = pacing || "0";
        wait = wait || "20";
        cicsToWait = cicsToWait || "10000";
        bufOverflow = bufOverflow || "80";
        bufThrottling = bufThrottling || "70";
        recOrdered = recOrdered === undefined ? "true" : recOrdered;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRedLeftmenu);
        }).then(function () {
            that.eleIntfsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRedNameInput);
        }).then(function () {
            that.eleIntfRedNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfRedDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfRedIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that._outputIntfIntfRed(outputIntf, outputIntf2, outputIntf3, outputIntf4);
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRedEndpointInput);
        }).then(function () {
            that.eleIntfRedEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfRedHubNameInput.clear().sendKeys(hubname);
        }).then(function () {
            that.eleIntfRedAdminNameInput.clear().sendKeys(adminname);
        }).then(function () {
            that.eleIntfRedTrcLvlBesSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRedTrcLvlBesSpinner.clear().sendKeys(trclvlBES);
        }).then(function () {
            that.eleIntfRedTrcLvlRedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRedTrcLvlRedSpinner.clear().sendKeys(trclvlRED);
        }).then(function () {
            that._cicsParasIntfRed(grpname, monitorname, lsnname, lsnTranid, maxTranLsn, maxUserTran, toReply, toComple);
        }).then(function () {
            that._trgServiceIntfRed(trg64, trgOrdered, trgMaxMsgLen, numBufP1, numBufP2, numBufP3, bufSizeP1, bufSizeP2, bufSizeP3, pacP1, pacP2, pacP3, trclvlP1, trclvlP2, trclvlP3, workerP1, workerP2, workerP3, msgnameP1, msgnameP2, msgnameP3);
        }).then(function () {
            that._recServiceIntfRed(workers, dynLsnlvl, recMaxMsgLen, numBuf, bufSize, pacing, wait, cicsToWait, bufOverflow, bufThrottling, rec64, recOrdered, confirm);
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
    // The function is used for delete a RED Interface, then confirm the delete operation.
    //
    definePage.prototype.delIntfRedYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRedLeftmenu);
        }).then(function () {
            that.eleIntfsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a RED Interface, then discard the delete operation.
    //
    definePage.prototype.delIntfRedNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRedLeftmenu);
        }).then(function () {
            that.eleIntfsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a RED Interface.
    //
    definePage.prototype.replicateIntfRed = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRedLeftmenu);
        }).then(function () {
            that.eleIntfsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a RED Interface.
    //
    definePage.prototype.updateIntfRed = function (name, desc, intfid, outputIntf, outputIntf2, outputIntf3, outputIntf4, endpoint, hubname, adminname, trclvlBES, trclvlRED, grpname, monitorname, lsnname, lsnTranid, maxTranLsn, maxUserTran, toReply, toComple, trg64, trgOrdered, trgMaxMsgLen, numBufP1, numBufP2, numBufP3, bufSizeP1, bufSizeP2, bufSizeP3, pacP1, pacP2, pacP3, trclvlP1, trclvlP2, trclvlP3, workerP1, workerP2, workerP3, msgnameP1, msgnameP2, msgnameP3, workers, dynLsnlvl, recMaxMsgLen, numBuf, bufSize, pacing, wait, cicsToWait, bufOverflow, bufThrottling, rec64, recOrdered, confirm) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfRED.intfid;
        hubname = hubname || browser.params.intfRED.hubName;
        adminname = adminname || browser.params.intfRED.adminName;
        grpname = grpname || browser.params.intfRED.groupName;
        monitorname = monitorname || browser.params.intfRED.monitorName;
        lsnname = lsnname || browser.params.intfRED.listenerName;
        lsnTranid = lsnTranid || browser.params.intfRED.listenerTranid;
        desc = desc || "";
        trclvlBES = trclvlBES || "0";
        trclvlRED = trclvlRED || "0";
        maxTranLsn = maxTranLsn || "21";
        maxUserTran = maxUserTran || "50";
        toReply = toReply || "3000";
        toComple = toComple || "1";
        trgOrdered = trgOrdered === undefined ? "true" : trgOrdered;
        trgMaxMsgLen = trgMaxMsgLen || "40000";
        numBufP1 = numBufP1 || "1000";
        numBufP2 = numBufP2 || "1000";
        numBufP3 = numBufP3 || "1000";
        bufSizeP1 = bufSizeP1 || "8192";
        bufSizeP2 = bufSizeP2 || "8192";
        bufSizeP3 = bufSizeP3 || "8192";
        pacP1 = pacP1 || "0";
        pacP2 = pacP2 || "0";
        pacP3 = pacP3 || "0";
        trclvlP1 = trclvlP1 || "0";
        trclvlP2 = trclvlP2 || "0";
        trclvlP3 = trclvlP3 || "0";
        workerP1 = workerP1 || "0";
        workerP2 = workerP2 || "0";
        workerP3 = workerP3 || "0";
        msgnameP1 = msgnameP1 || "P1AMSG";
        msgnameP2 = msgnameP2 || "P2AMSG";
        msgnameP3 = msgnameP3 || "P3AMSG";
        workers = workers || "5";
        dynLsnlvl = dynLsnlvl || "7";
        recMaxMsgLen = recMaxMsgLen || "16382";
        numBuf = numBuf || "100";
        bufSize = bufSize || "4096";
        pacing = pacing || "0";
        wait = wait || "20";
        cicsToWait = cicsToWait || "10000";
        bufOverflow = bufOverflow || "80";
        bufThrottling = bufThrottling || "70";
        recOrdered = recOrdered === undefined ? "true" : recOrdered;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRedLeftmenu);
        }).then(function () {
            that.eleIntfsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRedNameInput);
        }).then(function () {
            that.eleIntfRedNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfRedDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfRedIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that._outputIntfIntfRed(outputIntf, outputIntf2, outputIntf3, outputIntf4);
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRedEndpointInput);
        }).then(function () {
            that.eleIntfRedEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfRedHubNameInput.clear().sendKeys(hubname);
        }).then(function () {
            that.eleIntfRedAdminNameInput.clear().sendKeys(adminname);
        }).then(function () {
            that.eleIntfRedTrcLvlBesSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRedTrcLvlBesSpinner.clear().sendKeys(trclvlBES);
        }).then(function () {
            that.eleIntfRedTrcLvlRedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRedTrcLvlRedSpinner.clear().sendKeys(trclvlRED);
        }).then(function () {
            that._cicsParasIntfRed(grpname, monitorname, lsnname, lsnTranid, maxTranLsn, maxUserTran, toReply, toComple);
        }).then(function () {
            that._trgServiceIntfRed(trg64, trgOrdered, trgMaxMsgLen, numBufP1, numBufP2, numBufP3, bufSizeP1, bufSizeP2, bufSizeP3, pacP1, pacP2, pacP3, trclvlP1, trclvlP2, trclvlP3, workerP1, workerP2, workerP3, msgnameP1, msgnameP2, msgnameP3);
        }).then(function () {
            that._recServiceIntfRed(workers, dynLsnlvl, recMaxMsgLen, numBuf, bufSize, pacing, wait, cicsToWait, bufOverflow, bufThrottling, rec64, recOrdered, confirm);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a RED Interface, then confirm the cancel operation.
    //
    definePage.prototype.cancelIntfRedYes = function (name, desc, intfid, outputIntf, outputIntf2, outputIntf3, outputIntf4, endpoint, hubname, adminname, trclvlBES, trclvlRED, grpname, monitorname, lsnname, lsnTranid, maxTranLsn, maxUserTran, toReply, toComple, trg64, trgOrdered, trgMaxMsgLen, numBufP1, numBufP2, numBufP3, bufSizeP1, bufSizeP2, bufSizeP3, pacP1, pacP2, pacP3, trclvlP1, trclvlP2, trclvlP3, workerP1, workerP2, workerP3, msgnameP1, msgnameP2, msgnameP3, workers, dynLsnlvl, recMaxMsgLen, numBuf, bufSize, pacing, wait, cicsToWait, bufOverflow, bufThrottling, rec64, recOrdered, confirm) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfRED.intfid;
        hubname = hubname || browser.params.intfRED.hubName;
        adminname = adminname || browser.params.intfRED.adminName;
        grpname = grpname || browser.params.intfRED.groupName;
        monitorname = monitorname || browser.params.intfRED.monitorName;
        lsnname = lsnname || browser.params.intfRED.listenerName;
        lsnTranid = lsnTranid || browser.params.intfRED.listenerTranid;
        desc = desc || "";
        trclvlBES = trclvlBES || "0";
        trclvlRED = trclvlRED || "0";
        maxTranLsn = maxTranLsn || "21";
        maxUserTran = maxUserTran || "50";
        toReply = toReply || "3000";
        toComple = toComple || "1";
        trgOrdered = trgOrdered === undefined ? "true" : trgOrdered;
        trgMaxMsgLen = trgMaxMsgLen || "40000";
        numBufP1 = numBufP1 || "1000";
        numBufP2 = numBufP2 || "1000";
        numBufP3 = numBufP3 || "1000";
        bufSizeP1 = bufSizeP1 || "8192";
        bufSizeP2 = bufSizeP2 || "8192";
        bufSizeP3 = bufSizeP3 || "8192";
        pacP1 = pacP1 || "0";
        pacP2 = pacP2 || "0";
        pacP3 = pacP3 || "0";
        trclvlP1 = trclvlP1 || "0";
        trclvlP2 = trclvlP2 || "0";
        trclvlP3 = trclvlP3 || "0";
        workerP1 = workerP1 || "0";
        workerP2 = workerP2 || "0";
        workerP3 = workerP3 || "0";
        msgnameP1 = msgnameP1 || "P1AMSG";
        msgnameP2 = msgnameP2 || "P2AMSG";
        msgnameP3 = msgnameP3 || "P3AMSG";
        workers = workers || "5";
        dynLsnlvl = dynLsnlvl || "7";
        recMaxMsgLen = recMaxMsgLen || "16382";
        numBuf = numBuf || "100";
        bufSize = bufSize || "4096";
        pacing = pacing || "0";
        wait = wait || "20";
        cicsToWait = cicsToWait || "10000";
        bufOverflow = bufOverflow || "80";
        bufThrottling = bufThrottling || "70";
        recOrdered = recOrdered === undefined ? "true" : recOrdered;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRedLeftmenu);
        }).then(function () {
            that.eleIntfsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRedNameInput);
        }).then(function () {
            that.eleIntfRedNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfRedDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfRedIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that._outputIntfIntfRed(outputIntf, outputIntf2, outputIntf3, outputIntf4);
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRedEndpointInput);
        }).then(function () {
            that.eleIntfRedEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfRedHubNameInput.clear().sendKeys(hubname);
        }).then(function () {
            that.eleIntfRedAdminNameInput.clear().sendKeys(adminname);
        }).then(function () {
            that.eleIntfRedTrcLvlBesSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRedTrcLvlBesSpinner.clear().sendKeys(trclvlBES);
        }).then(function () {
            that.eleIntfRedTrcLvlRedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRedTrcLvlRedSpinner.clear().sendKeys(trclvlRED);
        }).then(function () {
            that._cicsParasIntfRed(grpname, monitorname, lsnname, lsnTranid, maxTranLsn, maxUserTran, toReply, toComple);
        }).then(function () {
            that._trgServiceIntfRed(trg64, trgOrdered, trgMaxMsgLen, numBufP1, numBufP2, numBufP3, bufSizeP1, bufSizeP2, bufSizeP3, pacP1, pacP2, pacP3, trclvlP1, trclvlP2, trclvlP3, workerP1, workerP2, workerP3, msgnameP1, msgnameP2, msgnameP3);
        }).then(function () {
            that._recServiceIntfRed(workers, dynLsnlvl, recMaxMsgLen, numBuf, bufSize, pacing, wait, cicsToWait, bufOverflow, bufThrottling, rec64, recOrdered, confirm);
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
    // The function is used for cancel the changes of a RED Interface, then discard the cancel operation.
    //
    definePage.prototype.cancelIntfRedNo = function (name, desc, intfid, outputIntf, outputIntf2, outputIntf3, outputIntf4, endpoint, hubname, adminname, trclvlBES, trclvlRED, grpname, monitorname, lsnname, lsnTranid, maxTranLsn, maxUserTran, toReply, toComple, trg64, trgOrdered, trgMaxMsgLen, numBufP1, numBufP2, numBufP3, bufSizeP1, bufSizeP2, bufSizeP3, pacP1, pacP2, pacP3, trclvlP1, trclvlP2, trclvlP3, workerP1, workerP2, workerP3, msgnameP1, msgnameP2, msgnameP3, workers, dynLsnlvl, recMaxMsgLen, numBuf, bufSize, pacing, wait, cicsToWait, bufOverflow, bufThrottling, rec64, recOrdered, confirm) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfRED.intfid;
        hubname = hubname || browser.params.intfRED.hubName;
        adminname = adminname || browser.params.intfRED.adminName;
        grpname = grpname || browser.params.intfRED.groupName;
        monitorname = monitorname || browser.params.intfRED.monitorName;
        lsnname = lsnname || browser.params.intfRED.listenerName;
        lsnTranid = lsnTranid || browser.params.intfRED.listenerTranid;
        desc = desc || "";
        trclvlBES = trclvlBES || "0";
        trclvlRED = trclvlRED || "0";
        maxTranLsn = maxTranLsn || "21";
        maxUserTran = maxUserTran || "50";
        toReply = toReply || "3000";
        toComple = toComple || "1";
        trgOrdered = trgOrdered === undefined ? "true" : trgOrdered;
        trgMaxMsgLen = trgMaxMsgLen || "40000";
        numBufP1 = numBufP1 || "1000";
        numBufP2 = numBufP2 || "1000";
        numBufP3 = numBufP3 || "1000";
        bufSizeP1 = bufSizeP1 || "8192";
        bufSizeP2 = bufSizeP2 || "8192";
        bufSizeP3 = bufSizeP3 || "8192";
        pacP1 = pacP1 || "0";
        pacP2 = pacP2 || "0";
        pacP3 = pacP3 || "0";
        trclvlP1 = trclvlP1 || "0";
        trclvlP2 = trclvlP2 || "0";
        trclvlP3 = trclvlP3 || "0";
        workerP1 = workerP1 || "0";
        workerP2 = workerP2 || "0";
        workerP3 = workerP3 || "0";
        msgnameP1 = msgnameP1 || "P1AMSG";
        msgnameP2 = msgnameP2 || "P2AMSG";
        msgnameP3 = msgnameP3 || "P3AMSG";
        workers = workers || "5";
        dynLsnlvl = dynLsnlvl || "7";
        recMaxMsgLen = recMaxMsgLen || "16382";
        numBuf = numBuf || "100";
        bufSize = bufSize || "4096";
        pacing = pacing || "0";
        wait = wait || "20";
        cicsToWait = cicsToWait || "10000";
        bufOverflow = bufOverflow || "80";
        bufThrottling = bufThrottling || "70";
        recOrdered = recOrdered === undefined ? "true" : recOrdered;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRedLeftmenu);
        }).then(function () {
            that.eleIntfsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRedNameInput);
        }).then(function () {
            that.eleIntfRedNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfRedDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfRedIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that._outputIntfIntfRed(outputIntf, outputIntf2, outputIntf3, outputIntf4);
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRedEndpointInput);
        }).then(function () {
            that.eleIntfRedEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfRedHubNameInput.clear().sendKeys(hubname);
        }).then(function () {
            that.eleIntfRedAdminNameInput.clear().sendKeys(adminname);
        }).then(function () {
            that.eleIntfRedTrcLvlBesSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRedTrcLvlBesSpinner.clear().sendKeys(trclvlBES);
        }).then(function () {
            that.eleIntfRedTrcLvlRedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRedTrcLvlRedSpinner.clear().sendKeys(trclvlRED);
        }).then(function () {
            that._cicsParasIntfRed(grpname, monitorname, lsnname, lsnTranid, maxTranLsn, maxUserTran, toReply, toComple);
        }).then(function () {
            that._trgServiceIntfRed(trg64, trgOrdered, trgMaxMsgLen, numBufP1, numBufP2, numBufP3, bufSizeP1, bufSizeP2, bufSizeP3, pacP1, pacP2, pacP3, trclvlP1, trclvlP2, trclvlP3, workerP1, workerP2, workerP3, msgnameP1, msgnameP2, msgnameP3);
        }).then(function () {
            that._recServiceIntfRed(workers, dynLsnlvl, recMaxMsgLen, numBuf, bufSize, pacing, wait, cicsToWait, bufOverflow, bufThrottling, rec64, recOrdered, confirm);
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
    // The function is used for reset a RED Interface.
    //
    definePage.prototype.resetIntfRed = function (name, desc, intfid, outputIntf, outputIntf2, outputIntf3, outputIntf4, endpoint, hubname, adminname, trclvlBES, trclvlRED, grpname, monitorname, lsnname, lsnTranid, maxTranLsn, maxUserTran, toReply, toComple, trg64, trgOrdered, trgMaxMsgLen, numBufP1, numBufP2, numBufP3, bufSizeP1, bufSizeP2, bufSizeP3, pacP1, pacP2, pacP3, trclvlP1, trclvlP2, trclvlP3, workerP1, workerP2, workerP3, msgnameP1, msgnameP2, msgnameP3, workers, dynLsnlvl, recMaxMsgLen, numBuf, bufSize, pacing, wait, cicsToWait, bufOverflow, bufThrottling, rec64, recOrdered, confirm) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfRED.intfid;
        hubname = hubname || browser.params.intfRED.hubName;
        adminname = adminname || browser.params.intfRED.adminName;
        grpname = grpname || browser.params.intfRED.groupName;
        monitorname = monitorname || browser.params.intfRED.monitorName;
        lsnname = lsnname || browser.params.intfRED.listenerName;
        lsnTranid = lsnTranid || browser.params.intfRED.listenerTranid;
        desc = desc || "";
        trclvlBES = trclvlBES || "0";
        trclvlRED = trclvlRED || "0";
        maxTranLsn = maxTranLsn || "21";
        maxUserTran = maxUserTran || "50";
        toReply = toReply || "3000";
        toComple = toComple || "1";
        trgOrdered = trgOrdered === undefined ? "true" : trgOrdered;
        trgMaxMsgLen = trgMaxMsgLen || "40000";
        numBufP1 = numBufP1 || "1000";
        numBufP2 = numBufP2 || "1000";
        numBufP3 = numBufP3 || "1000";
        bufSizeP1 = bufSizeP1 || "8192";
        bufSizeP2 = bufSizeP2 || "8192";
        bufSizeP3 = bufSizeP3 || "8192";
        pacP1 = pacP1 || "0";
        pacP2 = pacP2 || "0";
        pacP3 = pacP3 || "0";
        trclvlP1 = trclvlP1 || "0";
        trclvlP2 = trclvlP2 || "0";
        trclvlP3 = trclvlP3 || "0";
        workerP1 = workerP1 || "0";
        workerP2 = workerP2 || "0";
        workerP3 = workerP3 || "0";
        msgnameP1 = msgnameP1 || "P1AMSG";
        msgnameP2 = msgnameP2 || "P2AMSG";
        msgnameP3 = msgnameP3 || "P3AMSG";
        workers = workers || "5";
        dynLsnlvl = dynLsnlvl || "7";
        recMaxMsgLen = recMaxMsgLen || "16382";
        numBuf = numBuf || "100";
        bufSize = bufSize || "4096";
        pacing = pacing || "0";
        wait = wait || "20";
        cicsToWait = cicsToWait || "10000";
        bufOverflow = bufOverflow || "80";
        bufThrottling = bufThrottling || "70";
        recOrdered = recOrdered === undefined ? "true" : recOrdered;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsRedLeftmenu);
        }).then(function () {
            that.eleIntfsRedLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRedNameInput);
        }).then(function () {
            that.eleIntfRedNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfRedDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfRedIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that._outputIntfIntfRed(outputIntf, outputIntf2, outputIntf3, outputIntf4);
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfRedEndpointInput);
        }).then(function () {
            that.eleIntfRedEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfRedHubNameInput.clear().sendKeys(hubname);
        }).then(function () {
            that.eleIntfRedAdminNameInput.clear().sendKeys(adminname);
        }).then(function () {
            that.eleIntfRedTrcLvlBesSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRedTrcLvlBesSpinner.clear().sendKeys(trclvlBES);
        }).then(function () {
            that.eleIntfRedTrcLvlRedSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfRedTrcLvlRedSpinner.clear().sendKeys(trclvlRED);
        }).then(function () {
            that._cicsParasIntfRed(grpname, monitorname, lsnname, lsnTranid, maxTranLsn, maxUserTran, toReply, toComple);
        }).then(function () {
            that._trgServiceIntfRed(trg64, trgOrdered, trgMaxMsgLen, numBufP1, numBufP2, numBufP3, bufSizeP1, bufSizeP2, bufSizeP3, pacP1, pacP2, pacP3, trclvlP1, trclvlP2, trclvlP3, workerP1, workerP2, workerP3, msgnameP1, msgnameP2, msgnameP3);
        }).then(function () {
            that._recServiceIntfRed(workers, dynLsnlvl, recMaxMsgLen, numBuf, bufSize, pacing, wait, cicsToWait, bufOverflow, bufThrottling, rec64, recOrdered, confirm);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    //
    // This function is used for set 'TCP Interface Details -> Use TLS Connection'
    // false: not selected
    // true: selected
    //
    definePage.prototype._useTlsConnIntfTcp = function (tls) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfTcpUseTlsConnCheck).then(function () {
            return that.eleIntfTcpUseTlsConnCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (tls) {
                    that.eleIntfTcpUseTlsConnCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (tls) {
                    deferred.fulfill();
                } else {
                    that.eleIntfTcpUseTlsConnCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
            ;
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'TCP Interface Details -> Keep Alive'
    // false: not selected
    // true: selected
    //
    definePage.prototype._keepAliveIntfTcp = function (alive) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfTcpKeepAliveCheck).then(function () {
            return that.eleIntfTcpKeepAliveCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (alive) {
                    that.eleIntfTcpKeepAliveCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (alive) {
                    deferred.fulfill();
                } else {
                    that.eleIntfTcpKeepAliveCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'TCP Interface Details -> TCP Directives'
    //
    definePage.prototype._tcpDirectivesIntfTcp = function (conns, alive, lazyRetry, timeout, chunkBufs, chunkMaxSize, hostLogDdn) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleIntfTcpTcpDirectivesExtend).then(function () {
            return that.eleIntfTcpConnsSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleIntfTcpTcpDirectivesExtend.click();
            }
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfTcpConnsSpinner);
        }).then(function () {
            that.eleIntfTcpConnsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpConnsSpinner.clear().sendKeys(conns);
        }).then(function () {
            that._keepAliveIntfTcp(alive);
        }).then(function () {
            that.eleIntfTcpLazyRetrySpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpLazyRetrySpinner.clear().sendKeys(lazyRetry);
        }).then(function () {
            that.eleIntfTcpTimeoutSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpTimeoutSpinner.clear().sendKeys(timeout);
        }).then(function () {
            that.eleIntfTcpChunkBufsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpChunkBufsSpinner.clear().sendKeys(chunkBufs);
        }).then(function () {
            that.eleIntfTcpChunkMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpChunkMaxSizeSpinner.clear().sendKeys(chunkMaxSize);
        }).then(function () {
            that.eleIntfTcpHostLogFileDdnInput.clear().sendKeys(hostLogDdn);
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Security Settings' -> 'Client Authentication' check button
    // false: not selected
    // true: selected
    //
    definePage.prototype._clientAuthIntfTcp = function (clientAuth) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleIntfTcpClientAuthCheck).then(function () {
            return that.eleIntfTcpClientAuthCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (clientAuth) {
                    that.eleIntfTcpClientAuthCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (clientAuth) {
                    deferred.fulfill();
                } else {
                    that.eleIntfTcpClientAuthCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'TCP Interface Details -> SSL Directives'
    //
    definePage.prototype._sslDirectivesIntfTcp = function (ringFile, ringLabel, cipher, clientAuth, gskFile, tlsTrclvl) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleIntfTcpSslDirectivesExtend).then(function () {
            return that.eleIntfTcpTlsRingFileInput.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleIntfTcpSslDirectivesExtend.click();
            }
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfTcpTlsRingFileInput);
        }).then(function () {
            that.eleIntfTcpTlsRingFileInput.clear().sendKeys(ringFile);
        }).then(function () {
            that.eleIntfTcpTlsRingLabelInput.clear().sendKeys(ringLabel);
        }).then(function () {
            that.eleIntfTcpTlsCipherInput.clear().sendKeys(cipher);
        }).then(function () {
            that._clientAuthIntfTcp(clientAuth);
        }).then(function () {
            that.eleIntfTcpGskFileNameInput.clear().sendKeys(gskFile);
        }).then(function () {
            that.eleIntfTcpTlsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpTlsTrcLvlSpinner.clear().sendKeys(tlsTrclvl);
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for add a TCP Interface.
    //
    definePage.prototype.addIntfTcp = function (name, desc, intfid, url, tls, hostStackName, trclvl, dispatchers, workers, uiBufSize, conns, alive, lazyRetry, timeout, chunkBufs, chunkMaxSize, hostLogDdn, ringFile, ringLabel, cipher, clientAuth, gskFile, tlsTrclvl) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfTCP.intfid;
        url = url || browser.params.intfTCP.url;
        desc = desc || "";
        hostStackName = hostStackName || "";
        trclvl = trclvl || "0";
        dispatchers = dispatchers || "2";
        workers = workers || "2";
        uiBufSize = uiBufSize || "8192";
        conns = conns || "5";
        alive = alive === undefined ? "true" : alive;
        lazyRetry = lazyRetry || "60";
        timeout = timeout || "10";
        chunkBufs = chunkBufs || "32";
        chunkMaxSize = chunkMaxSize || "64000";
        hostLogDdn = hostLogDdn || "";
        ringFile = ringFile || "";
        ringLabel = ringLabel || "";
        cipher = cipher || "";
        gskFile = gskFile || "";
        tlsTrclvl = tlsTrclvl || "0";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsTcpLeftmenu);
        }).then(function () {
            that.eleIntfsTcpLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfTcpNameInput);
        }).then(function () {
            that.eleIntfTcpNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfTcpDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfTcpIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfTcpHostInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnIntfTcp(tls);
        }).then(function () {
            that.eleIntfTcpHostStackNameInput.clear().sendKeys(hostStackName);
        }).then(function () {
            that.eleIntfTcpTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpTrcLvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that.eleIntfTcpDispatchersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpDispatchersSpinner.clear().sendKeys(dispatchers);
        }).then(function () {
            that.eleIntfTcpWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfTcpWebUIBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpWebUIBufSizeSpinner.clear().sendKeys(uiBufSize);
        }).then(function () {
            that._tcpDirectivesIntfTcp(conns, alive, lazyRetry, timeout, chunkBufs, chunkMaxSize, hostLogDdn);
        }).then(function () {
            that._sslDirectivesIntfTcp(ringFile, ringLabel, cipher, clientAuth, gskFile, tlsTrclvl);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a TCP Interface, then confirm the delete operation.
    //
    definePage.prototype.delIntfTcpYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsTcpLeftmenu);
        }).then(function () {
            that.eleIntfsTcpLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a TCP Interface, then discard the delete operation.
    //
    definePage.prototype.delIntfTcpNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsTcpLeftmenu);
        }).then(function () {
            that.eleIntfsTcpLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a TCP Interface.
    //
    definePage.prototype.replicateIntfTcp = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsTcpLeftmenu);
        }).then(function () {
            that.eleIntfsTcpLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a TCP Interface.
    //
    definePage.prototype.updateIntfTcp = function (name, desc, intfid, url, tls, hostStackName, trclvl, dispatchers, workers, uiBufSize, conns, alive, lazyRetry, timeout, chunkBufs, chunkMaxSize, hostLogDdn, ringFile, ringLabel, cipher, clientAuth, gskFile, tlsTrclvl) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfTCP.intfid;
        url = url || browser.params.intfTCP.url;
        desc = desc || "";
        hostStackName = hostStackName || "";
        trclvl = trclvl || "0";
        dispatchers = dispatchers || "2";
        workers = workers || "2";
        uiBufSize = uiBufSize || "8192";
        conns = conns || "5";
        alive = alive === undefined ? "true" : alive;
        lazyRetry = lazyRetry || "60";
        timeout = timeout || "10";
        chunkBufs = chunkBufs || "32";
        chunkMaxSize = chunkMaxSize || "64000";
        hostLogDdn = hostLogDdn || "";
        ringFile = ringFile || "";
        ringLabel = ringLabel || "";
        cipher = cipher || "";
        gskFile = gskFile || "";
        tlsTrclvl = tlsTrclvl || "0";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsTcpLeftmenu);
        }).then(function () {
            that.eleIntfsTcpLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfTcpNameInput);
        }).then(function () {
            that.eleIntfTcpNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfTcpDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfTcpIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfTcpHostInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnIntfTcp(tls);
        }).then(function () {
            that.eleIntfTcpHostStackNameInput.clear().sendKeys(hostStackName);
        }).then(function () {
            that.eleIntfTcpTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpTrcLvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that.eleIntfTcpDispatchersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpDispatchersSpinner.clear().sendKeys(dispatchers);
        }).then(function () {
            that.eleIntfTcpWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfTcpWebUIBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpWebUIBufSizeSpinner.clear().sendKeys(uiBufSize);
        }).then(function () {
            that._tcpDirectivesIntfTcp(conns, alive, lazyRetry, timeout, chunkBufs, chunkMaxSize, hostLogDdn);
        }).then(function () {
            that._sslDirectivesIntfTcp(ringFile, ringLabel, cipher, clientAuth, gskFile, tlsTrclvl);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a TCP Interface, then confirm the cancel operation.
    //
    definePage.prototype.cancelIntfTcpYes = function (name, desc, intfid, url, tls, hostStackName, trclvl, dispatchers, workers, uiBufSize, conns, alive, lazyRetry, timeout, chunkBufs, chunkMaxSize, hostLogDdn, ringFile, ringLabel, cipher, clientAuth, gskFile, tlsTrclvl) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfTCP.intfid;
        url = url || browser.params.intfTCP.url;
        desc = desc || "";
        hostStackName = hostStackName || "";
        trclvl = trclvl || "0";
        dispatchers = dispatchers || "2";
        workers = workers || "2";
        uiBufSize = uiBufSize || "8192";
        conns = conns || "5";
        alive = alive === undefined ? "true" : alive;
        lazyRetry = lazyRetry || "60";
        timeout = timeout || "10";
        chunkBufs = chunkBufs || "32";
        chunkMaxSize = chunkMaxSize || "64000";
        hostLogDdn = hostLogDdn || "";
        ringFile = ringFile || "";
        ringLabel = ringLabel || "";
        cipher = cipher || "";
        gskFile = gskFile || "";
        tlsTrclvl = tlsTrclvl || "0";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsTcpLeftmenu);
        }).then(function () {
            that.eleIntfsTcpLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfTcpNameInput);
        }).then(function () {
            that.eleIntfTcpNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfTcpDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfTcpIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfTcpHostInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnIntfTcp(tls);
        }).then(function () {
            that.eleIntfTcpHostStackNameInput.clear().sendKeys(hostStackName);
        }).then(function () {
            that.eleIntfTcpTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpTrcLvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that.eleIntfTcpDispatchersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpDispatchersSpinner.clear().sendKeys(dispatchers);
        }).then(function () {
            that.eleIntfTcpWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfTcpWebUIBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpWebUIBufSizeSpinner.clear().sendKeys(uiBufSize);
        }).then(function () {
            that._tcpDirectivesIntfTcp(conns, alive, lazyRetry, timeout, chunkBufs, chunkMaxSize, hostLogDdn);
        }).then(function () {
            that._sslDirectivesIntfTcp(ringFile, ringLabel, cipher, clientAuth, gskFile, tlsTrclvl);
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
    // The function is used for cancel the changes of a TCP Interface, then discard the cancel operation.
    //
    definePage.prototype.cancelIntfTcpNo = function (name, desc, intfid, url, tls, hostStackName, trclvl, dispatchers, workers, uiBufSize, conns, alive, lazyRetry, timeout, chunkBufs, chunkMaxSize, hostLogDdn, ringFile, ringLabel, cipher, clientAuth, gskFile, tlsTrclvl) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfTCP.intfid;
        url = url || browser.params.intfTCP.url;
        desc = desc || "";
        hostStackName = hostStackName || "";
        trclvl = trclvl || "0";
        dispatchers = dispatchers || "2";
        workers = workers || "2";
        uiBufSize = uiBufSize || "8192";
        conns = conns || "5";
        alive = alive === undefined ? "true" : alive;
        lazyRetry = lazyRetry || "60";
        timeout = timeout || "10";
        chunkBufs = chunkBufs || "32";
        chunkMaxSize = chunkMaxSize || "64000";
        hostLogDdn = hostLogDdn || "";
        ringFile = ringFile || "";
        ringLabel = ringLabel || "";
        cipher = cipher || "";
        gskFile = gskFile || "";
        tlsTrclvl = tlsTrclvl || "0";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsTcpLeftmenu);
        }).then(function () {
            that.eleIntfsTcpLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfTcpNameInput);
        }).then(function () {
            that.eleIntfTcpNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfTcpDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfTcpIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfTcpHostInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnIntfTcp(tls);
        }).then(function () {
            that.eleIntfTcpHostStackNameInput.clear().sendKeys(hostStackName);
        }).then(function () {
            that.eleIntfTcpTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpTrcLvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that.eleIntfTcpDispatchersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpDispatchersSpinner.clear().sendKeys(dispatchers);
        }).then(function () {
            that.eleIntfTcpWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfTcpWebUIBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpWebUIBufSizeSpinner.clear().sendKeys(uiBufSize);
        }).then(function () {
            that._tcpDirectivesIntfTcp(conns, alive, lazyRetry, timeout, chunkBufs, chunkMaxSize, hostLogDdn);
        }).then(function () {
            that._sslDirectivesIntfTcp(ringFile, ringLabel, cipher, clientAuth, gskFile, tlsTrclvl);
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
    // The function is used for reset a TCP Interface.
    //
    definePage.prototype.resetIntfTcp = function (name, desc, intfid, url, tls, hostStackName, trclvl, dispatchers, workers, uiBufSize, conns, alive, lazyRetry, timeout, chunkBufs, chunkMaxSize, hostLogDdn, ringFile, ringLabel, cipher, clientAuth, gskFile, tlsTrclvl) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfTCP.intfid;
        url = url || browser.params.intfTCP.url;
        desc = desc || "";
        hostStackName = hostStackName || "";
        trclvl = trclvl || "0";
        dispatchers = dispatchers || "2";
        workers = workers || "2";
        uiBufSize = uiBufSize || "8192";
        conns = conns || "5";
        alive = alive === undefined ? "true" : alive;
        lazyRetry = lazyRetry || "60";
        timeout = timeout || "10";
        chunkBufs = chunkBufs || "32";
        chunkMaxSize = chunkMaxSize || "64000";
        hostLogDdn = hostLogDdn || "";
        ringFile = ringFile || "";
        ringLabel = ringLabel || "";
        cipher = cipher || "";
        gskFile = gskFile || "";
        tlsTrclvl = tlsTrclvl || "0";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsTcpLeftmenu);
        }).then(function () {
            that.eleIntfsTcpLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfTcpNameInput);
        }).then(function () {
            that.eleIntfTcpNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfTcpDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfTcpIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfTcpHostInput.clear().sendKeys(url);
        }).then(function () {
            that._useTlsConnIntfTcp(tls);
        }).then(function () {
            that.eleIntfTcpHostStackNameInput.clear().sendKeys(hostStackName);
        }).then(function () {
            that.eleIntfTcpTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpTrcLvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that.eleIntfTcpDispatchersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpDispatchersSpinner.clear().sendKeys(dispatchers);
        }).then(function () {
            that.eleIntfTcpWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfTcpWebUIBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfTcpWebUIBufSizeSpinner.clear().sendKeys(uiBufSize);
        }).then(function () {
            that._tcpDirectivesIntfTcp(conns, alive, lazyRetry, timeout, chunkBufs, chunkMaxSize, hostLogDdn);
        }).then(function () {
            that._sslDirectivesIntfTcp(ringFile, ringLabel, cipher, clientAuth, gskFile, tlsTrclvl);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    //
    // This function is used for set 'Admin Interface Details -> Log Remote Commands'
    // false: not selected
    // true: selected
    //
    definePage.prototype._logRemoteCmdsIntfAdm = function (logRemoteCmds) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleIntfAdmLogRemoteCmdsCheck).then(function () {
            return that.eleIntfAdmLogRemoteCmdsCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (logRemoteCmds) {
                    that.eleIntfAdmLogRemoteCmdsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (logRemoteCmds) {
                    deferred.fulfill();
                } else {
                    that.eleIntfAdmLogRemoteCmdsCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for add a Admin Interface.
    //
    definePage.prototype.addIntfAdm = function (name, desc, intfid, endpoint, workers, trclvl, logRemoteCmds, interval, serviceTrg, outputIntf, cmd, cmd2, cmd3, cmd4, cmd5) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfAdmin.intfid;
        desc = desc || "";
        workers = workers || "3";
        trclvl = trclvl || "0";
        interval = interval || "0";
        serviceTrg = serviceTrg || "";
        outputIntf = outputIntf || "";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsAdmLeftmenu);
        }).then(function () {
            that.eleIntfsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfAdmNameInput);
        }).then(function () {
            that.eleIntfAdmNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfAdmDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfAdmIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfAdmEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfAdmWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfAdmTrcLvlOpsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmTrcLvlOpsSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._logRemoteCmdsIntfAdm(logRemoteCmds);
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleIntfAdmHeartbeatExtend);
        }).then(function () {
            return that.eleIntfAdmIntervalSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleIntfAdmHeartbeatExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleIntfAdmIntervalSpinner);
                });
            }
        }).then(function () {
            that.eleIntfAdmIntervalSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmIntervalSpinner.clear().sendKeys(interval);
        }).then(function () {
            that.eleIntfAdmServiceTrgInput.clear().sendKeys(serviceTrg);
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfAdmOutputIntfInput);
        }).then(function () {
            that.eleIntfAdmOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            if (cmd !== undefined) {
                that.eleIntfAdmHeartbeatCmdInput.clear().sendKeys(cmd);
            }
        }).then(function () {
            if (cmd2 !== undefined) {
                globalCommons.waitForClickable(that.eleIntfAdmHeartbeatCmdAddButton).then(function () {
                    that.eleIntfAdmHeartbeatCmdAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleIntfAdmHeartbeatCmd2Input);
                }).then(function () {
                    that.eleIntfAdmHeartbeatCmd2Input.clear().sendKeys(cmd2);
                });
            }
        }).then(function () {
            if (cmd3 !== undefined) {
                globalCommons.waitForClickable(that.eleIntfAdmHeartbeatCmdAddButton).then(function () {
                    that.eleIntfAdmHeartbeatCmdAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleIntfAdmHeartbeatCmd3Input);
                }).then(function () {
                    that.eleIntfAdmHeartbeatCmd3Input.clear().sendKeys(cmd3);
                });
            }
        }).then(function () {
            if (cmd4 !== undefined) {
                globalCommons.waitForClickable(that.eleIntfAdmHeartbeatCmdAddButton).then(function () {
                    that.eleIntfAdmHeartbeatCmdAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleIntfAdmHeartbeatCmd4Input);
                }).then(function () {
                    that.eleIntfAdmHeartbeatCmd4Input.clear().sendKeys(cmd4);
                });
            }
        }).then(function () {
            if (cmd5 !== undefined) {
                globalCommons.waitForClickable(that.eleIntfAdmHeartbeatCmdAddButton).then(function () {
                    that.eleIntfAdmHeartbeatCmdAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleIntfAdmHeartbeatCmd5Input);
                }).then(function () {
                    that.eleIntfAdmHeartbeatCmd5Input.clear().sendKeys(cmd5);
                });
            }
        }).then(function () {
            globalCommons.waitForClickable(that.eleSaveButton)
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill()
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a Admin Interface, then confirm the delete operation.
    //
    definePage.prototype.delIntfAdmYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsAdmLeftmenu);
        }).then(function () {
            that.eleIntfsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a Admin Interface, then discard the delete operation.
    //
    definePage.prototype.delIntfAdmNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsAdmLeftmenu);
        }).then(function () {
            that.eleIntfsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a Admin Interface.
    //
    definePage.prototype.replicateIntfAdm = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsAdmLeftmenu);
        }).then(function () {
            that.eleIntfsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a Admin Interface.
    //
    definePage.prototype.updateIntfAdm = function (name, desc, intfid, endpoint, workers, trclvl, logRemoteCmds, interval, serviceTrg, outputIntf, cmd, cmd2, cmd3, cmd4, cmd5) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfAdmin.intfid;
        desc = desc || "";
        workers = workers || "3";
        trclvl = trclvl || "0";
        interval = interval || "0";
        serviceTrg = serviceTrg || "";
        outputIntf = outputIntf || "";
        cmd = cmd || "";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsAdmLeftmenu);
        }).then(function () {
            that.eleIntfsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfAdmNameInput);
        }).then(function () {
            that.eleIntfAdmNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfAdmDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfAdmIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfAdmEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfAdmWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfAdmTrcLvlOpsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmTrcLvlOpsSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._logRemoteCmdsIntfAdm(logRemoteCmds);
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleIntfAdmHeartbeatExtend);
        }).then(function () {
            return that.eleIntfAdmIntervalSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleIntfAdmHeartbeatExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleIntfAdmIntervalSpinner);
                });
            }
        }).then(function () {
            that.eleIntfAdmIntervalSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmIntervalSpinner.clear().sendKeys(interval);
        }).then(function () {
            that.eleIntfAdmServiceTrgInput.clear().sendKeys(serviceTrg);
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfAdmOutputIntfInput);
        }).then(function () {
            that.eleIntfAdmOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfAdmHeartbeatCmdInput.clear().sendKeys(cmd);
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd2Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd2Input.clear().sendKeys(cmd2);
            }
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd3Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd3Input.clear().sendKeys(cmd3);
            }
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd4Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd4Input.clear().sendKeys(cmd4);
            }
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd5Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd5Input.clear().sendKeys(cmd5);
            }
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a Admin Interface, then confirm the cancel operation.
    //
    definePage.prototype.cancelIntfAdmYes = function (name, desc, intfid, endpoint, workers, trclvl, logRemoteCmds, interval, serviceTrg, outputIntf, cmd, cmd2, cmd3, cmd4, cmd5) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfAdmin.intfid;
        desc = desc || "";
        workers = workers || "3";
        trclvl = trclvl || "0";
        interval = interval || "0";
        serviceTrg = serviceTrg || "";
        outputIntf = outputIntf || "";
        cmd = cmd || "";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsAdmLeftmenu);
        }).then(function () {
            that.eleIntfsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfAdmNameInput);
        }).then(function () {
            that.eleIntfAdmNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfAdmDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfAdmIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfAdmEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfAdmWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfAdmTrcLvlOpsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmTrcLvlOpsSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._logRemoteCmdsIntfAdm(logRemoteCmds);
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleIntfAdmHeartbeatExtend);
        }).then(function () {
            return that.eleIntfAdmIntervalSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleIntfAdmHeartbeatExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleIntfAdmIntervalSpinner);
                });
            }
        }).then(function () {
            that.eleIntfAdmIntervalSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmIntervalSpinner.clear().sendKeys(interval);
        }).then(function () {
            that.eleIntfAdmServiceTrgInput.clear().sendKeys(serviceTrg);
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfAdmOutputIntfInput);
        }).then(function () {
            that.eleIntfAdmOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfAdmHeartbeatCmdInput.clear().sendKeys(cmd);
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd2Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd2Input.clear().sendKeys(cmd2);
            }
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd3Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd3Input.clear().sendKeys(cmd3);
            }
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd4Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd4Input.clear().sendKeys(cmd4);
            }
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd5Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd5Input.clear().sendKeys(cmd5);
            }
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
    // The function is used for cancel the changes of a Admin Interface, then discard the cancel operation.
    //
    definePage.prototype.cancelIntfAdmNo = function (name, desc, intfid, endpoint, workers, trclvl, logRemoteCmds, interval, serviceTrg, outputIntf, cmd, cmd2, cmd3, cmd4, cmd5) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfAdmin.intfid;
        desc = desc || "";
        workers = workers || "3";
        trclvl = trclvl || "0";
        interval = interval || "0";
        serviceTrg = serviceTrg || "";
        outputIntf = outputIntf || "";
        cmd = cmd || "";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsAdmLeftmenu);
        }).then(function () {
            that.eleIntfsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfAdmNameInput);
        }).then(function () {
            that.eleIntfAdmNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfAdmDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfAdmIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfAdmEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfAdmWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfAdmTrcLvlOpsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmTrcLvlOpsSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._logRemoteCmdsIntfAdm(logRemoteCmds);
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleIntfAdmHeartbeatExtend);
        }).then(function () {
            return that.eleIntfAdmIntervalSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleIntfAdmHeartbeatExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleIntfAdmIntervalSpinner);
                });
            }
        }).then(function () {
            that.eleIntfAdmIntervalSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmIntervalSpinner.clear().sendKeys(interval);
        }).then(function () {
            that.eleIntfAdmServiceTrgInput.clear().sendKeys(serviceTrg);
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfAdmOutputIntfInput);
        }).then(function () {
            that.eleIntfAdmOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfAdmHeartbeatCmdInput.clear().sendKeys(cmd);
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd2Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd2Input.clear().sendKeys(cmd2);
            }
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd3Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd3Input.clear().sendKeys(cmd3);
            }
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd4Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd4Input.clear().sendKeys(cmd4);
            }
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd5Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd5Input.clear().sendKeys(cmd5);
            }
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
    // The function is used for reset a Admin Interface.
    //
    definePage.prototype.resetIntfAdm = function (name, desc, intfid, endpoint, workers, trclvl, logRemoteCmds, interval, serviceTrg, outputIntf, cmd, cmd2, cmd3, cmd4, cmd5) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(4).join(protractor.Key.BACK_SPACE);
        intfid = intfid || browser.params.intfAdmin.intfid;
        desc = desc || "";
        workers = workers || "3";
        trclvl = trclvl || "0";
        interval = interval || "0";
        serviceTrg = serviceTrg || "";
        outputIntf = outputIntf || "";
        cmd = cmd || "";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleIntfsAdmLeftmenu);
        }).then(function () {
            that.eleIntfsAdmLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfAdmNameInput);
        }).then(function () {
            that.eleIntfAdmNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleIntfAdmDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleIntfAdmIntfidInput.clear().sendKeys(intfid);
        }).then(function () {
            that.eleIntfAdmEndpointInput.clear().sendKeys(endpoint);
        }).then(function () {
            that.eleIntfAdmWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleIntfAdmTrcLvlOpsSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmTrcLvlOpsSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._logRemoteCmdsIntfAdm(logRemoteCmds);
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleIntfAdmHeartbeatExtend);
        }).then(function () {
            return that.eleIntfAdmIntervalSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleIntfAdmHeartbeatExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleIntfAdmIntervalSpinner);
                });
            }
        }).then(function () {
            that.eleIntfAdmIntervalSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleIntfAdmIntervalSpinner.clear().sendKeys(interval);
        }).then(function () {
            that.eleIntfAdmServiceTrgInput.clear().sendKeys(serviceTrg);
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleIntfAdmOutputIntfInput);
        }).then(function () {
            that.eleIntfAdmOutputIntfInput.clear().sendKeys(outputIntf);
        }).then(function () {
            that.eleIntfAdmHeartbeatCmdInput.clear().sendKeys(cmd);
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd2Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd2Input.clear().sendKeys(cmd2);
            }
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd3Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd3Input.clear().sendKeys(cmd3);
            }
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd4Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd4Input.clear().sendKeys(cmd4);
            }
        }).then(function () {
            return that.eleIntfAdmHeartbeatCmd5Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleIntfAdmHeartbeatCmd5Input.clear().sendKeys(cmd5);
            }
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    //
    // This function is used for set 'Substation Details' -> 'Log File Destination'
    //
    definePage.prototype._logFileDestSs = function (logFileDest) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleSsLogFileDestDropdown).then(function () {
            return that.eleSsLogFileDestDropdown.getText();
        }).then(function (message) {
            if (message === logFileDest) {
                deferred.fulfill();
            } else {
                that.eleSsLogFileDestDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleSsLogFileDestSelected(logFileDest));
                }).then(function () {
                    that.eleSsLogFileDestSelected(logFileDest).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Substation Details -> Log Startup Method Warm'
    // false: not click
    // true: click
    //
    definePage.prototype._logStartWarmSs = function (logWarm) {
        var deferred = protractor.promise.defer(), that = this;
        if (logWarm) {
            that.eleSsLogStartupWarmRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        ;
        return deferred.promise;
    };
    //
    // This function is used for set 'Substation Details -> Log Startup Method Cold'
    // false: not click
    // true: click
    //
    definePage.prototype._logStartColdSs = function (logCold) {
        var deferred = protractor.promise.defer(), that = this;
        if (logCold) {
            that.eleSsLogStartupColdRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        ;
        return deferred.promise;
    };
    //
    // This function is used for set 'Substation Details' -> 'Log Disk File Wrap'
    // false: not select
    // true: select
    //
    definePage.prototype._logDiskWrapSs = function (logDiskWrap) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleSsLogDiskFileWrapCheck).then(function () {
            return that.eleSsLogDiskFileWrapCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (logDiskWrap) {
                    that.eleSsLogDiskFileWrapCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (logDiskWrap) {
                    deferred.fulfill();
                } else {
                    that.eleSsLogDiskFileWrapCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Substation Details' -> 'Log to SYSLOG'
    //
    definePage.prototype._logToSyslogSs = function (logToSyslog) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleSsLogLogToSyslogDropdown).then(function () {
            return that.eleSsLogLogToSyslogDropdown.getText();
        }).then(function (message) {
            if (message === logToSyslog) {
                deferred.fulfill();
            } else {
                that.eleSsLogLogToSyslogDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleSsLogLogToSyslogSelected(logToSyslog));
                }).then(function () {
                    that.eleSsLogLogToSyslogSelected(logToSyslog).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Substation Details -> Console Output Message Log'
    // false: not click
    // true: click
    //
    definePage.prototype._outputMsgLogSs = function (msgLog) {
        var deferred = protractor.promise.defer(), that = this;
        if (msgLog) {
            that.eleSsLogConsoleOutputMsgLogRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        ;
        return deferred.promise;
    };
    //
    // This function is used for set 'Substation Details -> Console Output Message Console'
    // false: not click
    // true: click
    //
    definePage.prototype._outputMsgConsoleSs = function (msgConsole) {
        var deferred = protractor.promise.defer(), that = this;
        if (msgConsole) {
            that.eleSsLogConsoleOutputMsgConsoleRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        ;
        return deferred.promise;
    };
    //
    // This function is used for set 'Substation Details -> Trace File Destination'
    //
    definePage.prototype._trcFileDestSs = function (trcFileDest) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleSsTrcFileDestDropdown).then(function () {
            return that.eleSsTrcFileDestDropdown.getText();
        }).then(function (message) {
            if (message === trcFileDest) {
                deferred.fulfill();
            } else {
                that.eleSsTrcFileDestDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleSsTrcFileDestSelected(trcFileDest));
                }).then(function () {
                    that.eleSsTrcFileDestSelected(trcFileDest).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Substation Details -> Trace Startup Method Warm'
    // false: not click
    // true: click
    //
    definePage.prototype._trcStartWarmSs = function (trcWarm) {
        var deferred = protractor.promise.defer(), that = this;
        if (trcWarm) {
            that.eleSsTrcStartupWarmRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        ;
        return deferred.promise;
    };
    //
    // This function is used for set 'Substation Details -> Trace Startup Method Cold'
    // false: not click
    // true: click
    //
    definePage.prototype._trcStartColdSs = function (trcCold) {
        var deferred = protractor.promise.defer(), that = this;
        if (trcCold) {
            that.eleSsTrcStartupColdRadio.click().then(function () {
                deferred.fulfill();
            });
        } else {
            deferred.fulfill();
        }
        ;
        return deferred.promise;
    };
    //
    // This function is used for set 'Substation Details' -> 'Trace Disk File Wrap'
    // false: not select
    // true: select
    //
    definePage.prototype._trcDiskWrapSs = function (trcDiskWrap) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleSsTrcDiskFileWrapCheck).then(function () {
            return that.eleSsTrcDiskFileWrapCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (trcDiskWrap) {
                    that.eleSsTrcDiskFileWrapCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (trcDiskWrap) {
                    deferred.fulfill();
                } else {
                    that.eleSsTrcDiskFileWrapCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Substation Details' -> 'Storage Protect'
    // false: not select
    // true: select
    //
    definePage.prototype._stgProtectSs = function (stgProtect) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleSsStgProtectCheck).then(function () {
            return that.eleSsStgProtectCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (stgProtect) {
                    that.eleSsStgProtectCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (stgProtect) {
                    deferred.fulfill();
                } else {
                    that.eleSsStgProtectCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // This function is used for set 'Substation Details' -> 'Storage Free'
    // false: not select
    // true: select
    //
    definePage.prototype._stgFreeSs = function (stgFree) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleSsStgFreeCheck).then(function () {
            return that.eleSsStgFreeCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (stgFree) {
                    that.eleSsStgFreeCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (stgFree) {
                    deferred.fulfill();
                } else {
                    that.eleSsStgFreeCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    //
    // The function is used for add a Substation.
    //
    definePage.prototype.addSs = function (name, desc, ssid, logLvl, logFormat, logFileDdn, logFileDest, logDiskDdn, logDiskDdn2, logDiskDdn3, logDiskDdn4, logDiskDdn5, logWarm, logCold, logDiskWrap, logDebugLvl, logToSyslog, msgLog, msgConsole, trcLvl, trcFormat, trcFileDdn, trcFileDest, trcDiskDdn, trcDiskDdn2, trcDiskDdn3, trcDiskDdn4, trcDiskDdn5, trcWarm, trcCold, trcDiskWrap, trcDebugLvl, maxUnitWork, workers, workersEOT, snapshot, stgProtect, stgFree, stgSizeMax, admIntf) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(7).join(protractor.Key.BACK_SPACE);
        ssid = ssid || browser.params.substation.ssid;
        desc = desc || "";
        logLvl = logLvl || "2";
        logFormat = logFormat || "2";
        logFileDdn = logFileDdn || "TIBLOGPR";
        logFileDest = logFileDest || "Printer";
        logDiskDdn = logDiskDdn || "";
        logWarm = logWarm === undefined ? "true" : logWarm;
        logDebugLvl = logDebugLvl || "0";
        logToSyslog = logToSyslog || "20";
        msgLog = msgLog === undefined ? "true" : msgLog;
        trcLvl = trcLvl || "0";
        trcFormat = trcFormat || "3";
        trcFileDdn = trcFileDdn || "TIBTRCPR";
        trcFileDest = trcFileDest || "Printer";
        trcDiskDdn = trcDiskDdn || "";
        trcWarm = trcWarm === undefined ? "true" : trcWarm;
        trcDebugLvl = trcDebugLvl || "0";
        maxUnitWork = maxUnitWork || "400";
        workers = workers || "10";
        workersEOT = workersEOT || "10";
        snapshot = snapshot || "100";
        stgSizeMax = stgSizeMax || "50000";
        admIntf = admIntf || "";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleSsLeftmenu);
        }).then(function () {
            that.eleSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSsNameInput);
        }).then(function () {
            that.eleSsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleSsSsidInput.clear().sendKeys(ssid);
        }).then(function () {
            return that.eleSsLogLvlSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleSsLogTrcExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleSsLogLvlSpinner);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            that.eleSsLogLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogLvlSpinner.clear().sendKeys(logLvl);
        }).then(function () {
            that.eleSsLogFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogFormatSpinner.clear().sendKeys(logFormat);
        }).then(function () {
            that.eleSsLogFileDdnInput.clear().sendKeys(logFileDdn);
        }).then(function () {
            that._logFileDestSs(logFileDest);
        }).then(function () {
            that.eleSsLogDiskFileDdnInput.clear().sendKeys(logDiskDdn);
        }).then(function () {
            if (logDiskDdn2 !== undefined) {
                globalCommons.waitForClickable(that.eleSsLogDiskFileAddButton).then(function () {
                    that.eleSsLogDiskFileAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleSsLogDiskFileDdn2Input);
                }).then(function () {
                    that.eleSsLogDiskFileDdn2Input.clear().sendKeys(logDiskDdn2);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (logDiskDdn3 !== undefined) {
                globalCommons.waitForClickable(that.eleSsLogDiskFileAddButton).then(function () {
                    that.eleSsLogDiskFileAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleSsLogDiskFileDdn3Input);
                }).then(function () {
                    that.eleSsLogDiskFileDdn3Input.clear().sendKeys(logDiskDdn3);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (logDiskDdn4 !== undefined) {
                globalCommons.waitForClickable(that.eleSsLogDiskFileAddButton).then(function () {
                    that.eleSsLogDiskFileAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleSsLogDiskFileDdn4Input);
                }).then(function () {
                    that.eleSsLogDiskFileDdn4Input.clear().sendKeys(logDiskDdn4);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (logDiskDdn5 !== undefined) {
                globalCommons.waitForClickable(that.eleSsLogDiskFileAddButton).then(function () {
                    that.eleSsLogDiskFileAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleSsLogDiskFileDdn5Input);
                }).then(function () {
                    that.eleSsLogDiskFileDdn5Input.clear().sendKeys(logDiskDdn5);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            that._logStartWarmSs(logWarm);
        }).then(function () {
            that._logStartColdSs(logCold);
        }).then(function () {
            that._logDiskWrapSs(logDiskWrap);
        }).then(function () {
            that.eleSsLogDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogDebugLvlSpinner.clear().sendKeys(logDebugLvl);
        }).then(function () {
            that._logToSyslogSs(logToSyslog);
        }).then(function () {
            that._outputMsgLogSs(msgLog);
        }).then(function () {
            that._outputMsgConsoleSs(msgConsole);
        }).then(function () {
            that.eleSsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcLvlSpinner.clear().sendKeys(trcLvl);
        }).then(function () {
            that.eleSsTrcFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcFormatSpinner.clear().sendKeys(trcFormat);
        }).then(function () {
            that.eleSsTrcFileDdnInput.clear().sendKeys(trcFileDdn);
        }).then(function () {
            that._trcFileDestSs(trcFileDest);
        }).then(function () {
            that.eleSsTrcDiskFileDdnInput.clear().sendKeys(trcDiskDdn);
        }).then(function () {
            if (trcDiskDdn2 !== undefined) {
                globalCommons.waitForClickable(that.eleSsTrcDiskFileAddButton).then(function () {
                    that.eleSsTrcDiskFileAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleSsTrcDiskFileDdn2Input);
                }).then(function () {
                    that.eleSsTrcDiskFileDdn2Input.clear().sendKeys(trcDiskDdn2);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (trcDiskDdn3 !== undefined) {
                globalCommons.waitForClickable(that.eleSsTrcDiskFileAddButton).then(function () {
                    that.eleSsTrcDiskFileAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleSsTrcDiskFileDdn3Input);
                }).then(function () {
                    that.eleSsTrcDiskFileDdn3Input.clear().sendKeys(trcDiskDdn3);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (trcDiskDdn4 !== undefined) {
                globalCommons.waitForClickable(that.eleSsTrcDiskFileAddButton).then(function () {
                    that.eleSsTrcDiskFileAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleSsTrcDiskFileDdn4Input);
                }).then(function () {
                    that.eleSsTrcDiskFileDdn4Input.clear().sendKeys(trcDiskDdn4);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (trcDiskDdn5 !== undefined) {
                globalCommons.waitForClickable(that.eleSsTrcDiskFileAddButton).then(function () {
                    that.eleSsTrcDiskFileAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleSsTrcDiskFileDdn5Input);
                }).then(function () {
                    that.eleSsTrcDiskFileDdn5Input.clear().sendKeys(trcDiskDdn5);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            that._trcStartWarmSs(trcWarm);
        }).then(function () {
            that._trcStartColdSs(trcCold);
        }).then(function () {
            that._trcDiskWrapSs(trcDiskWrap);
        }).then(function () {
            that.eleSsTrcDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcDebugLvlSpinner.clear().sendKeys(trcDebugLvl);
        }).then(function () {
            return that.eleSsMaxUnitsOfWorkSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleSsInitializationExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleSsMaxUnitsOfWorkSpinner);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            that.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys(maxUnitWork);
        }).then(function () {
            that.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsWorkersEndOfTaskSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsSnapshotSpinner.clear().sendKeys(snapshot);
        }).then(function () {
            that._stgProtectSs(stgProtect);
        }).then(function () {
            that._stgFreeSs(stgFree);
        }).then(function () {
            that.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsStgSizeMaxSpinner.clear().sendKeys(stgSizeMax);
        }).then(function () {
            that.eleSsAdmIntfInput.clear().sendKeys(admIntf);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSaveButton)
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for delete a Substation, then confirm the delete operation.
    //
    definePage.prototype.delSsYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleSsLeftmenu);
        }).then(function () {
            that.eleSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for delete a Substation, then discard the delete operation.
    //
    definePage.prototype.delSsNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleSsLeftmenu);
        }).then(function () {
            that.eleSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            browser.sleep(1000);
        }).then(function () {
            return that.eleEntityNameSearched.isPresent()
        }).then(function (result) {
            if (result) {
                that.eleEntityNameSearched.click().then(function () {
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
    // The function is used for replicate a Substation.
    //
    definePage.prototype.replicateSs = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleSsLeftmenu);
        }).then(function () {
            that.eleSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
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
    // The function is used for update a Substation.
    //
    definePage.prototype.updateSs = function (name, desc, ssid, logLvl, logFormat, logFileDdn, logFileDest, logDiskDdn, logDiskDdn2, logDiskDdn3, logDiskDdn4, logDiskDdn5, logWarm, logCold, logDiskWrap, logDebugLvl, logToSyslog, msgLog, msgConsole, trcLvl, trcFormat, trcFileDdn, trcFileDest, trcDiskDdn, trcDiskDdn2, trcDiskDdn3, trcDiskDdn4, trcDiskDdn5, trcWarm, trcCold, trcDiskWrap, trcDebugLvl, maxUnitWork, workers, workersEOT, snapshot, stgProtect, stgFree, stgSizeMax, admIntf) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(7).join(protractor.Key.BACK_SPACE);
        ssid = ssid || browser.params.substation.ssid;
        desc = desc || "";
        logLvl = logLvl || "2";
        logFormat = logFormat || "2";
        logFileDdn = logFileDdn || "TIBLOGPR";
        logFileDest = logFileDest || "Printer";
        logDiskDdn = logDiskDdn || "";
        logWarm = logWarm === undefined ? "true" : logWarm;
        logDebugLvl = logDebugLvl || "0";
        logToSyslog = logToSyslog || "20";
        msgLog = msgLog === undefined ? "true" : msgLog;
        trcLvl = trcLvl || "0";
        trcFormat = trcFormat || "3";
        trcFileDdn = trcFileDdn || "TIBTRCPR";
        trcFileDest = trcFileDest || "Printer";
        trcDiskDdn = trcDiskDdn || "";
        trcWarm = trcWarm === undefined ? "true" : trcWarm;
        trcDebugLvl = trcDebugLvl || "0";
        maxUnitWork = maxUnitWork || "400";
        workers = workers || "10";
        workersEOT = workersEOT || "10";
        snapshot = snapshot || "100";
        stgSizeMax = stgSizeMax || "50000";
        admIntf = admIntf || "";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleSsLeftmenu);
        }).then(function () {
            that.eleSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSsNameInput);
        }).then(function () {
            that.eleSsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleSsSsidInput.clear().sendKeys(ssid);
        }).then(function () {
            return that.eleSsLogLvlSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleSsLogTrcExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleSsLogLvlSpinner);
                });
            }
            ;
        }).then(function () {
            that.eleSsLogLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogLvlSpinner.clear().sendKeys(logLvl);
        }).then(function () {
            that.eleSsLogFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogFormatSpinner.clear().sendKeys(logFormat);
        }).then(function () {
            that.eleSsLogFileDdnInput.clear().sendKeys(logFileDdn);
        }).then(function () {
            that._logFileDestSs(logFileDest);
        }).then(function () {
            that.eleSsLogDiskFileDdnInput.clear().sendKeys(logDiskDdn);
        }).then(function () {
            return that.eleSsLogDiskFileDdn2Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn2Input.clear().sendKeys(logDiskDdn2);
            }
            ;
        }).then(function () {
            return that.eleSsLogDiskFileDdn3Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn3Input.clear().sendKeys(logDiskDdn3);
            }
            ;
        }).then(function () {
            return that.eleSsLogDiskFileDdn4Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn4Input.clear().sendKeys(logDiskDdn4);
            }
            ;
        }).then(function () {
            return that.eleSsLogDiskFileDdn5Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn5Input.clear().sendKeys(logDiskDdn5);
            }
            ;
        }).then(function () {
            that._logStartWarmSs(logWarm);
        }).then(function () {
            that._logStartColdSs(logCold);
        }).then(function () {
            that._logDiskWrapSs(logDiskWrap);
        }).then(function () {
            that.eleSsLogDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogDebugLvlSpinner.clear().sendKeys(logDebugLvl);
        }).then(function () {
            that._logToSyslogSs(logToSyslog);
        }).then(function () {
            that._outputMsgLogSs(msgLog);
        }).then(function () {
            that._outputMsgConsoleSs(msgConsole);
        }).then(function () {
            that.eleSsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcLvlSpinner.clear().sendKeys(trcLvl);
        }).then(function () {
            that.eleSsTrcFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcFormatSpinner.clear().sendKeys(trcFormat);
        }).then(function () {
            that.eleSsTrcFileDdnInput.clear().sendKeys(trcFileDdn);
        }).then(function () {
            that._trcFileDestSs(trcFileDest);
        }).then(function () {
            that.eleSsTrcDiskFileDdnInput.clear().sendKeys(trcDiskDdn);
        }).then(function () {
            return that.eleSsTrcDiskFileDdn2Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn2Input.clear().sendKeys(trcDiskDdn2);
            }
            ;
        }).then(function () {
            return that.eleSsTrcDiskFileDdn3Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn3Input.clear().sendKeys(trcDiskDdn3);
            }
            ;
        }).then(function () {
            return that.eleSsTrcDiskFileDdn4Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn4Input.clear().sendKeys(trcDiskDdn4);
            }
            ;
        }).then(function () {
            return that.eleSsTrcDiskFileDdn5Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn5Input.clear().sendKeys(trcDiskDdn5);
            }
            ;
        }).then(function () {
            that._trcStartWarmSs(trcWarm);
        }).then(function () {
            that._trcStartColdSs(trcCold);
        }).then(function () {
            that._trcDiskWrapSs(trcDiskWrap);
        }).then(function () {
            that.eleSsTrcDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcDebugLvlSpinner.clear().sendKeys(trcDebugLvl);
        }).then(function () {
            return that.eleSsMaxUnitsOfWorkSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleSsInitializationExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleSsMaxUnitsOfWorkSpinner);
                });
            }
            ;
        }).then(function () {
            that.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys(maxUnitWork);
        }).then(function () {
            that.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsWorkersEndOfTaskSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsSnapshotSpinner.clear().sendKeys(snapshot);
        }).then(function () {
            that._stgProtectSs(stgProtect);
        }).then(function () {
            that._stgFreeSs(stgFree);
        }).then(function () {
            that.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsStgSizeMaxSpinner.clear().sendKeys(stgSizeMax);
        }).then(function () {
            that.eleSsAdmIntfInput.clear().sendKeys(admIntf);
        }).then(function () {
            that.eleSaveButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // The function is used for cancel the changes of a Substation, then confirm the cancel operation.
    //
    definePage.prototype.cancelSsYes = function (name, desc, ssid, logLvl, logFormat, logFileDdn, logFileDest, logDiskDdn, logDiskDdn2, logDiskDdn3, logDiskDdn4, logDiskDdn5, logWarm, logCold, logDiskWrap, logDebugLvl, logToSyslog, msgLog, msgConsole, trcLvl, trcFormat, trcFileDdn, trcFileDest, trcDiskDdn, trcDiskDdn2, trcDiskDdn3, trcDiskDdn4, trcDiskDdn5, trcWarm, trcCold, trcDiskWrap, trcDebugLvl, maxUnitWork, workers, workersEOT, snapshot, stgProtect, stgFree, stgSizeMax, admIntf) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(7).join(protractor.Key.BACK_SPACE);
        ssid = ssid || browser.params.substation.ssid;
        desc = desc || "";
        logLvl = logLvl || "2";
        logFormat = logFormat || "2";
        logFileDdn = logFileDdn || "TIBLOGPR";
        logFileDest = logFileDest || "Printer";
        logDiskDdn = logDiskDdn || "";
        logWarm = logWarm === undefined ? "true" : logWarm;
        logDebugLvl = logDebugLvl || "0";
        logToSyslog = logToSyslog || "20";
        msgLog = msgLog === undefined ? "true" : msgLog;
        trcLvl = trcLvl || "0";
        trcFormat = trcFormat || "3";
        trcFileDdn = trcFileDdn || "TIBTRCPR";
        trcFileDest = trcFileDest || "Printer";
        trcDiskDdn = trcDiskDdn || "";
        trcWarm = trcWarm === undefined ? "true" : trcWarm;
        trcDebugLvl = trcDebugLvl || "0";
        maxUnitWork = maxUnitWork || "400";
        workers = workers || "10";
        workersEOT = workersEOT || "10";
        snapshot = snapshot || "100";
        stgSizeMax = stgSizeMax || "50000";
        admIntf = admIntf || "";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleSsLeftmenu);
        }).then(function () {
            that.eleSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSsNameInput);
        }).then(function () {
            that.eleSsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleSsSsidInput.clear().sendKeys(ssid);
        }).then(function () {
            return that.eleSsLogLvlSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleSsLogTrcExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleSsLogLvlSpinner);
                });
            }
            ;
        }).then(function () {
            that.eleSsLogLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogLvlSpinner.clear().sendKeys(logLvl);
        }).then(function () {
            that.eleSsLogFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogFormatSpinner.clear().sendKeys(logFormat);
        }).then(function () {
            that.eleSsLogFileDdnInput.clear().sendKeys(logFileDdn);
        }).then(function () {
            that._logFileDestSs(logFileDest);
        }).then(function () {
            that.eleSsLogDiskFileDdnInput.clear().sendKeys(logDiskDdn);
        }).then(function () {
            return that.eleSsLogDiskFileDdn2Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn2Input.clear().sendKeys(logDiskDdn2);
            }
            ;
        }).then(function () {
            return that.eleSsLogDiskFileDdn3Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn3Input.clear().sendKeys(logDiskDdn3);
            }
            ;
        }).then(function () {
            return that.eleSsLogDiskFileDdn4Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn4Input.clear().sendKeys(logDiskDdn4);
            }
            ;
        }).then(function () {
            return that.eleSsLogDiskFileDdn5Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn5Input.clear().sendKeys(logDiskDdn5);
            }
            ;
        }).then(function () {
            that._logStartWarmSs(logWarm);
        }).then(function () {
            that._logStartColdSs(logCold);
        }).then(function () {
            that._logDiskWrapSs(logDiskWrap);
        }).then(function () {
            that.eleSsLogDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogDebugLvlSpinner.clear().sendKeys(logDebugLvl);
        }).then(function () {
            that._logToSyslogSs(logToSyslog);
        }).then(function () {
            that._outputMsgLogSs(msgLog);
        }).then(function () {
            that._outputMsgConsoleSs(msgConsole);
        }).then(function () {
            that.eleSsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcLvlSpinner.clear().sendKeys(trcLvl);
        }).then(function () {
            that.eleSsTrcFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcFormatSpinner.clear().sendKeys(trcFormat);
        }).then(function () {
            that.eleSsTrcFileDdnInput.clear().sendKeys(trcFileDdn);
        }).then(function () {
            that._trcFileDestSs(trcFileDest);
        }).then(function () {
            that.eleSsTrcDiskFileDdnInput.clear().sendKeys(trcDiskDdn);
        }).then(function () {
            return that.eleSsTrcDiskFileDdn2Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn2Input.clear().sendKeys(trcDiskDdn2);
            }
            ;
        }).then(function () {
            return that.eleSsTrcDiskFileDdn3Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn3Input.clear().sendKeys(trcDiskDdn3);
            }
            ;
        }).then(function () {
            return that.eleSsTrcDiskFileDdn4Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn4Input.clear().sendKeys(trcDiskDdn4);
            }
            ;
        }).then(function () {
            return that.eleSsTrcDiskFileDdn5Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn5Input.clear().sendKeys(trcDiskDdn5);
            }
            ;
        }).then(function () {
            that._trcStartWarmSs(trcWarm);
        }).then(function () {
            that._trcStartColdSs(trcCold);
        }).then(function () {
            that._trcDiskWrapSs(trcDiskWrap);
        }).then(function () {
            that.eleSsTrcDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcDebugLvlSpinner.clear().sendKeys(trcDebugLvl);
        }).then(function () {
            return that.eleSsMaxUnitsOfWorkSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleSsInitializationExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleSsMaxUnitsOfWorkSpinner);
                });
            }
            ;
        }).then(function () {
            that.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys(maxUnitWork);
        }).then(function () {
            that.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsWorkersEndOfTaskSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsSnapshotSpinner.clear().sendKeys(snapshot);
        }).then(function () {
            that._stgProtectSs(stgProtect);
        }).then(function () {
            that._stgFreeSs(stgFree);
        }).then(function () {
            that.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsStgSizeMaxSpinner.clear().sendKeys(stgSizeMax);
        }).then(function () {
            that.eleSsAdmIntfInput.clear().sendKeys(admIntf);
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
    // The function is used for cancel the changes of a Substation, then discard the cancel operation.
    //
    definePage.prototype.cancelSsNo = function (name, desc, ssid, logLvl, logFormat, logFileDdn, logFileDest, logDiskDdn, logDiskDdn2, logDiskDdn3, logDiskDdn4, logDiskDdn5, logWarm, logCold, logDiskWrap, logDebugLvl, logToSyslog, msgLog, msgConsole, trcLvl, trcFormat, trcFileDdn, trcFileDest, trcDiskDdn, trcDiskDdn2, trcDiskDdn3, trcDiskDdn4, trcDiskDdn5, trcWarm, trcCold, trcDiskWrap, trcDebugLvl, maxUnitWork, workers, workersEOT, snapshot, stgProtect, stgFree, stgSizeMax, admIntf) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(7).join(protractor.Key.BACK_SPACE);
        ssid = ssid || browser.params.substation.ssid;
        desc = desc || "";
        logLvl = logLvl || "2";
        logFormat = logFormat || "2";
        logFileDdn = logFileDdn || "TIBLOGPR";
        logFileDest = logFileDest || "Printer";
        logDiskDdn = logDiskDdn || "";
        logWarm = logWarm === undefined ? "true" : logWarm;
        logDebugLvl = logDebugLvl || "0";
        logToSyslog = logToSyslog || "20";
        msgLog = msgLog === undefined ? "true" : msgLog;
        trcLvl = trcLvl || "0";
        trcFormat = trcFormat || "3";
        trcFileDdn = trcFileDdn || "TIBTRCPR";
        trcFileDest = trcFileDest || "Printer";
        trcDiskDdn = trcDiskDdn || "";
        trcWarm = trcWarm === undefined ? "true" : trcWarm;
        trcDebugLvl = trcDebugLvl || "0";
        maxUnitWork = maxUnitWork || "400";
        workers = workers || "10";
        workersEOT = workersEOT || "10";
        snapshot = snapshot || "100";
        stgSizeMax = stgSizeMax || "50000";
        admIntf = admIntf || "";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleSsLeftmenu);
        }).then(function () {
            that.eleSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSsNameInput);
        }).then(function () {
            that.eleSsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleSsSsidInput.clear().sendKeys(ssid);
        }).then(function () {
            return that.eleSsLogLvlSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleSsLogTrcExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleSsLogLvlSpinner);
                });
            }
            ;
        }).then(function () {
            that.eleSsLogLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogLvlSpinner.clear().sendKeys(logLvl);
        }).then(function () {
            that.eleSsLogFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogFormatSpinner.clear().sendKeys(logFormat);
        }).then(function () {
            that.eleSsLogFileDdnInput.clear().sendKeys(logFileDdn);
        }).then(function () {
            that._logFileDestSs(logFileDest);
        }).then(function () {
            that.eleSsLogDiskFileDdnInput.clear().sendKeys(logDiskDdn);
        }).then(function () {
            return that.eleSsLogDiskFileDdn2Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn2Input.clear().sendKeys(logDiskDdn2);
            }
            ;
        }).then(function () {
            return that.eleSsLogDiskFileDdn3Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn3Input.clear().sendKeys(logDiskDdn3);
            }
            ;
        }).then(function () {
            return that.eleSsLogDiskFileDdn4Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn4Input.clear().sendKeys(logDiskDdn4);
            }
            ;
        }).then(function () {
            return that.eleSsLogDiskFileDdn5Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn5Input.clear().sendKeys(logDiskDdn5);
            }
            ;
        }).then(function () {
            that._logStartWarmSs(logWarm);
        }).then(function () {
            that._logStartColdSs(logCold);
        }).then(function () {
            that._logDiskWrapSs(logDiskWrap);
        }).then(function () {
            that.eleSsLogDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogDebugLvlSpinner.clear().sendKeys(logDebugLvl);
        }).then(function () {
            that._logToSyslogSs(logToSyslog);
        }).then(function () {
            that._outputMsgLogSs(msgLog);
        }).then(function () {
            that._outputMsgConsoleSs(msgConsole);
        }).then(function () {
            that.eleSsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcLvlSpinner.clear().sendKeys(trcLvl);
        }).then(function () {
            that.eleSsTrcFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcFormatSpinner.clear().sendKeys(trcFormat);
        }).then(function () {
            that.eleSsTrcFileDdnInput.clear().sendKeys(trcFileDdn);
        }).then(function () {
            that._trcFileDestSs(trcFileDest);
        }).then(function () {
            that.eleSsTrcDiskFileDdnInput.clear().sendKeys(trcDiskDdn);
        }).then(function () {
            return that.eleSsTrcDiskFileDdn2Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn2Input.clear().sendKeys(trcDiskDdn2);
            }
            ;
        }).then(function () {
            return that.eleSsTrcDiskFileDdn3Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn3Input.clear().sendKeys(trcDiskDdn3);
            }
            ;
        }).then(function () {
            return that.eleSsTrcDiskFileDdn4Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn4Input.clear().sendKeys(trcDiskDdn4);
            }
            ;
        }).then(function () {
            return that.eleSsTrcDiskFileDdn5Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn5Input.clear().sendKeys(trcDiskDdn5);
            }
            ;
        }).then(function () {
            that._trcStartWarmSs(trcWarm);
        }).then(function () {
            that._trcStartColdSs(trcCold);
        }).then(function () {
            that._trcDiskWrapSs(trcDiskWrap);
        }).then(function () {
            that.eleSsTrcDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcDebugLvlSpinner.clear().sendKeys(trcDebugLvl);
        }).then(function () {
            return that.eleSsMaxUnitsOfWorkSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleSsInitializationExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleSsMaxUnitsOfWorkSpinner);
                });
            }
            ;
        }).then(function () {
            that.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys(maxUnitWork);
        }).then(function () {
            that.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsWorkersEndOfTaskSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsSnapshotSpinner.clear().sendKeys(snapshot);
        }).then(function () {
            that._stgProtectSs(stgProtect);
        }).then(function () {
            that._stgFreeSs(stgFree);
        }).then(function () {
            that.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsStgSizeMaxSpinner.clear().sendKeys(stgSizeMax);
        }).then(function () {
            that.eleSsAdmIntfInput.clear().sendKeys(admIntf);
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
    // The function is used for reset a Substation.
    //
    definePage.prototype.resetSs = function (name, desc, ssid, logLvl, logFormat, logFileDdn, logFileDest, logDiskDdn, logDiskDdn2, logDiskDdn3, logDiskDdn4, logDiskDdn5, logWarm, logCold, logDiskWrap, logDebugLvl, logToSyslog, msgLog, msgConsole, trcLvl, trcFormat, trcFileDdn, trcFileDest, trcDiskDdn, trcDiskDdn2, trcDiskDdn3, trcDiskDdn4, trcDiskDdn5, trcWarm, trcCold, trcDiskWrap, trcDebugLvl, maxUnitWork, workers, workersEOT, snapshot, stgProtect, stgFree, stgSizeMax, admIntf) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(7).join(protractor.Key.BACK_SPACE);
        ssid = ssid || browser.params.substation.ssid;
        desc = desc || "";
        logLvl = logLvl || "2";
        logFormat = logFormat || "2";
        logFileDdn = logFileDdn || "TIBLOGPR";
        logFileDest = logFileDest || "Printer";
        logDiskDdn = logDiskDdn || "";
        logWarm = logWarm === undefined ? "true" : logWarm;
        logDebugLvl = logDebugLvl || "0";
        logToSyslog = logToSyslog || "20";
        msgLog = msgLog === undefined ? "true" : msgLog;
        trcLvl = trcLvl || "0";
        trcFormat = trcFormat || "3";
        trcFileDdn = trcFileDdn || "TIBTRCPR";
        trcFileDest = trcFileDest || "Printer";
        trcDiskDdn = trcDiskDdn || "";
        trcWarm = trcWarm === undefined ? "true" : trcWarm;
        trcDebugLvl = trcDebugLvl || "0";
        maxUnitWork = maxUnitWork || "400";
        workers = workers || "10";
        workersEOT = workersEOT || "10";
        snapshot = snapshot || "100";
        stgSizeMax = stgSizeMax || "50000";
        admIntf = admIntf || "";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleSsLeftmenu);
        }).then(function () {
            that.eleSsLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSsNameInput);
        }).then(function () {
            that.eleSsNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleSsDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleSsSsidInput.clear().sendKeys(ssid);
        }).then(function () {
            return that.eleSsLogLvlSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleSsLogTrcExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleSsLogLvlSpinner);
                });
            }
            ;
        }).then(function () {
            that.eleSsLogLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogLvlSpinner.clear().sendKeys(logLvl);
        }).then(function () {
            that.eleSsLogFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogFormatSpinner.clear().sendKeys(logFormat);
        }).then(function () {
            that.eleSsLogFileDdnInput.clear().sendKeys(logFileDdn);
        }).then(function () {
            that._logFileDestSs(logFileDest);
        }).then(function () {
            that.eleSsLogDiskFileDdnInput.clear().sendKeys(logDiskDdn);
        }).then(function () {
            return that.eleSsLogDiskFileDdn2Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn2Input.clear().sendKeys(logDiskDdn2);
            }
            ;
        }).then(function () {
            return that.eleSsLogDiskFileDdn3Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn3Input.clear().sendKeys(logDiskDdn3);
            }
            ;
        }).then(function () {
            return that.eleSsLogDiskFileDdn4Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn4Input.clear().sendKeys(logDiskDdn4);
            }
            ;
        }).then(function () {
            return that.eleSsLogDiskFileDdn5Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsLogDiskFileDdn5Input.clear().sendKeys(logDiskDdn5);
            }
            ;
        }).then(function () {
            that._logStartWarmSs(logWarm);
        }).then(function () {
            that._logStartColdSs(logCold);
        }).then(function () {
            that._logDiskWrapSs(logDiskWrap);
        }).then(function () {
            that.eleSsLogDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsLogDebugLvlSpinner.clear().sendKeys(logDebugLvl);
        }).then(function () {
            that._logToSyslogSs(logToSyslog);
        }).then(function () {
            that._outputMsgLogSs(msgLog);
        }).then(function () {
            that._outputMsgConsoleSs(msgConsole);
        }).then(function () {
            that.eleSsTrcLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcLvlSpinner.clear().sendKeys(trcLvl);
        }).then(function () {
            that.eleSsTrcFormatSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcFormatSpinner.clear().sendKeys(trcFormat);
        }).then(function () {
            that.eleSsTrcFileDdnInput.clear().sendKeys(trcFileDdn);
        }).then(function () {
            that._trcFileDestSs(trcFileDest);
        }).then(function () {
            that.eleSsTrcDiskFileDdnInput.clear().sendKeys(trcDiskDdn);
        }).then(function () {
            return that.eleSsTrcDiskFileDdn2Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn2Input.clear().sendKeys(trcDiskDdn2);
            }
            ;
        }).then(function () {
            return that.eleSsTrcDiskFileDdn3Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn3Input.clear().sendKeys(trcDiskDdn3);
            }
            ;
        }).then(function () {
            return that.eleSsTrcDiskFileDdn4Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn4Input.clear().sendKeys(trcDiskDdn4);
            }
            ;
        }).then(function () {
            return that.eleSsTrcDiskFileDdn5Input.isDisplayed();
        }).then(function (result) {
            if (result === true) {
                that.eleSsTrcDiskFileDdn5Input.clear().sendKeys(trcDiskDdn5);
            }
            ;
        }).then(function () {
            that._trcStartWarmSs(trcWarm);
        }).then(function () {
            that._trcStartColdSs(trcCold);
        }).then(function () {
            that._trcDiskWrapSs(trcDiskWrap);
        }).then(function () {
            that.eleSsTrcDebugLvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsTrcDebugLvlSpinner.clear().sendKeys(trcDebugLvl);
        }).then(function () {
            return that.eleSsMaxUnitsOfWorkSpinner.isDisplayed();
        }).then(function (result) {
            if (result === false) {
                that.eleSsInitializationExtend.click().then(function () {
                    globalCommons.waitForDisplayed(that.eleSsMaxUnitsOfWorkSpinner);
                });
            }
            ;
        }).then(function () {
            that.eleSsMaxUnitsOfWorkSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsMaxUnitsOfWorkSpinner.clear().sendKeys(maxUnitWork);
        }).then(function () {
            that.eleSsWorkersSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsWorkersSpinner.clear().sendKeys(workers);
        }).then(function () {
            that.eleSsWorkersEndOfTaskSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsWorkersEndOfTaskSpinner.clear().sendKeys(workersEOT);
        }).then(function () {
            that.eleSsSnapshotSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsSnapshotSpinner.clear().sendKeys(snapshot);
        }).then(function () {
            that._stgProtectSs(stgProtect);
        }).then(function () {
            that._stgFreeSs(stgFree);
        }).then(function () {
            that.eleSsStgSizeMaxSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleSsStgSizeMaxSpinner.clear().sendKeys(stgSizeMax);
        }).then(function () {
            that.eleSsAdmIntfInput.clear().sendKeys(admIntf);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    return definePage;
})();
module.exports = definePage;