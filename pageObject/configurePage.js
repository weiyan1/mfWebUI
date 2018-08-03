/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
var Page = require('../utility/page.js');
var globalCommons = require('../utility/common.js');
var GlobalPage = require('../pageObject/globalPage.js');
var configurePage = (function () {
    var globalPage = new GlobalPage();

    function configurePage() {
        this.eleScreenElement = element(by.xpath('//div[text()="Configuration"]'));
        // Left Menu
        this.eleMsgLeftmenu = element(by.xpath('//div[@role="treeitem" and text()="Messages"]'));
        this.eleBufLeftmenu = element(by.xpath('//div[@role="treeitem" and text()="Buffers"]'));
        this.eleCvrLeftmenu = element(by.xpath('//div[@role="treeitem" and text()="Conversion Rules"]'));
        this.eleServicesExtend = element(by.xpath('//div[@role="treeitem" and text()="Services"]'));
        this.eleTrgLeftmenu = element(by.xpath('//div[@role="treeitem" and text()="Triggers"]'));
        this.eleRecLeftmenu = element(by.xpath('//div[@role="treeitem" and text()="Recipes"]'));
        // Entities List
        this.eleAddButton = element(by.xpath('//div[@class="GCOBQG-CGQ"]/../..//button[@class="GCOBQG-CDQ" and text()="Add"]'));
        this.eleDeleteButton = element(by.xpath('//div[@class="GCOBQG-CGQ"]/../..//button[@class="GCOBQG-CDQ" and text()="Delete"]'));
        this.eleAuditButton = element(by.xpath('//div[@class="GCOBQG-CGQ"]/../..//button[text()="Audit"]'));
        this.eleRefreshButton = element(by.xpath('//div[@class="GCOBQG-CGQ"]/../..//button[@class="GCOBQG-CDQ" and text()="Refresh"]'));
        this.eleSearchInput = element(by.css('.GCOBQG-CLM'));
        this.eleSearchIcon = element(by.css('.GCOBQG-CKM'));
        this.eleEntityNameSearched = element(by.css('.GCOBQG-CJO'));
        this.eleMsgInfo = element(by.css('.g__msg_message'));
        this.eleTableHeader2 = element(by.css('.cell-table-header-nowrap thead th:nth-child(2)'));
        this.eleTableHeader3 = element(by.css('.cell-table-header-nowrap thead th:nth-child(3)'));
        this.eleTableHeader4 = element(by.css('.cell-table-header-nowrap thead th:nth-child(4)'));
        // Entities Details
        this.eleDetailSlideBar = element(by.css('.slide-bar'));
        this.eleDetailHeader = element(by.css('.detailHeader'));
        this.eleCheckButton = element(by.css('.GCOBQG-CLY'));
        this.eleSaveButton = element(by.xpath('//button[text()="Save"]'));
        this.eleReplicateButton = element(by.xpath('//button[@class="uxcore-Button-In-Slide uxcore-Button" and text()="Replicate"]'));
        this.eleCancelButton = element(by.xpath('//button[text()="Cancel"]'));
        this.eleResetButton = element(by.xpath('//button[text()="Reset"]'));
        this.eleSaveInfo = element(by.css('.form-info-content'));
        this.eleSaveInfoClose = element(by.css('.form-info-close'));
        // Message Details
        this.eleMsgNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleMsgDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleMsgNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleMsgDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleMsgFieldAddButton = element(by.xpath('//div[@class="GCOBQG-CCM"]/../..//button[@class="GCOBQG-CDQ" and text()="Add"]'));
        this.eleMsgFieldDelButton = element(by.xpath('//div[@class="GCOBQG-CCM"]/../..//button[@class="GCOBQG-CDQ" and text()="Delete"]'));
        this.eleMsgFieldReplicateButton = element(by.xpath('//div[@class="GCOBQG-CCM"]/../..//button[@class="GCOBQG-CDQ" and text()="Replicate"]'));
        this.eleMsgFieldType = function (fieldNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + fieldNum + ']/td[1]/div'));
        };
        this.eleMsgFieldIdNum = function (fieldNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + fieldNum + ']/td[2]/div'));
        };
        this.eleMsgFieldSeq = function (fieldNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + fieldNum + ']/td[3]/div'));
        };
        this.eleMsgFieldDec = function (fieldNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + fieldNum + ']/td[4]/div'));
        };
        this.eleMsgFieldName = function (fieldNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + fieldNum + ']/td[5]/div'));
        };
        this.eleMsgFieldNameSelected = function (fieldName) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//td[5]/div[text()="' + fieldName + '"]'))
        };
        this.eleMsgFieldTypeDropdown = element(by.xpath('//div[@class="gwt-PopupPanel"]//tr[1]/td[1]/div'));
        this.eleMsgFieldTypeSelected = function (type) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + type + '"]'))
        };
        this.eleMsgFieldType01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleMsgFieldType02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleMsgFieldType03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleMsgFieldType04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));
        this.eleMsgFieldType05 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[5]/td[1]'));
        this.eleMsgFieldType06 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[6]/td[1]'));
        this.eleMsgFieldType07 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[7]/td[1]'));
        this.eleMsgFieldType08 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[8]/td[1]'));
        this.eleMsgFieldType09 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[9]/td[1]'));
        this.eleMsgFieldType10 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[10]/td[1]'));
        this.eleMsgFieldType11 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[11]/td[1]'));
        this.eleMsgFieldType12 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[12]/td[1]'));
        this.eleMsgFieldType13 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[13]/td[1]'));
        this.eleMsgFieldType14 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[14]/td[1]'));
        this.eleMsgFieldType15 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[15]/td[1]'));
        this.eleMsgFieldType16 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[16]/td[1]'));
        this.eleMsgFieldType17 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[17]/td[1]'));
        this.eleMsgFieldTypeInput = element(by.css('.GCOBQG-CPQ'));
        this.eleMsgFieldIdNumSpinner = element.all(by.xpath('//div[@class="popupContent"]//td[1]/input')).get(0);
        this.eleMsgFieldSeqSpinner = element.all(by.xpath('//div[@class="popupContent"]//td[1]/input')).get(1);
        this.eleMsgFieldDecSpinner = element.all(by.xpath('//div[@class="popupContent"]//td[1]/input')).get(2);
        this.eleMsgFieldNameInput = element(by.xpath('//div[@class="popupContent"]//td[5]/input'));
        this.eleMsgFieldNameValidateMsg = element(by.xpath('//div[@class="popupContent"]//img[@src="images/icons/alert.png"]'));
        // Buffer Details
        this.eleBufNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleBufDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleBufMaxSizeSpinner = element(by.xpath('//div[text()="Max Size (bytes)"]/../../..//input'));
        this.eleBufNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleBufDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleBufFieldAddButton = element(by.xpath('//div[@class="GCOBQG-CCM"]/../..//button[@class="GCOBQG-CDQ" and text()="Add"]'));
        this.eleBufFieldDelButton = element(by.xpath('//div[@class="GCOBQG-CCM"]/../..//button[@class="GCOBQG-CDQ" and text()="Delete"]'));
        this.eleBufFieldReplicateButton = element(by.xpath('//div[@class="GCOBQG-CCM"]/../..//button[@class="GCOBQG-CDQ" and text()="Replicate"]'));
        this.eleBufFieldType = function (fieldNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + fieldNum + ']/td[2]/div'));
        };
        this.eleBufFieldStartPosition = function (fieldNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + fieldNum + ']/td[3]/div'));
        };
        this.eleBufFieldLength = function (fieldNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + fieldNum + ']/td[4]/div'));
        };
        this.eleBufFieldDec = function (fieldNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + fieldNum + ']/td[5]/div'));
        };
        this.eleBufFieldName = function (fieldNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + fieldNum + ']/td[6]/div'));
        };
        this.eleBufFieldExtendButton = function (fieldNum) {
            return element(by.xpath('//div[@class="GCOBQG-CH"]//tr[' + fieldNum + ']/td[1]/div'));
        };
        this.eleBufFieldExtendButton2 = element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[1]/td[1]/img[@class="gwt-Image"]'));
        this.eleBufFieldNameSelected = function (fieldName) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//td[6]/div[text()="' + fieldName + '"]'))
        };
        this.eleBufFieldTypeDropdown = element(by.xpath('//div[@class="gwt-PopupPanel"]//tr[1]/td[2]/div'));
        this.eleBufFieldTypeSelected = function (type) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + type + '"]'))
        };
        this.eleBufFieldType01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleBufFieldType02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleBufFieldType03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleBufFieldType04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));
        this.eleBufFieldType05 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[5]/td[1]'));
        this.eleBufFieldType06 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[6]/td[1]'));
        this.eleBufFieldType07 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[7]/td[1]'));
        this.eleBufFieldType08 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[8]/td[1]'));
        this.eleBufFieldType09 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[9]/td[1]'));
        this.eleBufFieldType10 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[10]/td[1]'));
        this.eleBufFieldTypeInput = element.all(by.css('.GCOBQG-CPQ')).get(0);
        this.eleBufFieldStartPositionSpinner = element.all(by.xpath('//div[@class="popupContent"]//td[1]/input')).get(0);
        this.eleBufFieldLengthSpinner = element.all(by.xpath('//div[@class="popupContent"]//td[1]/input')).get(1);
        this.eleBufFieldDecSpinner = element.all(by.xpath('//div[@class="popupContent"]//td[1]/input')).get(2);
        this.eleBufFieldNameInput = element(by.xpath('//div[@class="popupContent"]//td[6]/input'));
        this.eleBufFieldNameValidateMsg = element(by.xpath('//div[@class="popupContent"]//img[@src="images/icons/alert.png"]'));
        this.eleBufFieldLeadingSignCheck = element(by.xpath('//label[text()="Leading Sign"]/..//input'));
        this.eleBufFieldSeparateSignCheck = element(by.xpath('//label[text()="Separate Sign"]/..//input'));
        this.eleBufFieldJustifyRightCheck = element(by.xpath('//label[text()="Justify Right"]/..//input'));
        this.eleBufFieldPadCharacterDropdown = element(by.xpath('//div[text()="Pad Character"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleBufFieldPadCharacterSelected = function (padCharacterType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + padCharacterType + '"]'));
        };
        this.eleBufFieldPadValueInput = element(by.xpath('//div[text()="Pad Value"]/../../..//input'));
        this.eleBufFieldPadValueValidateMsg = element(by.xpath('//div[text()="Pad Value"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleBufFieldInitializeEntireFieldCheck = element(by.xpath('//label[text()="Initialize entire field"]/..//input'));
        this.eleBufFieldInitialValueLengthSpinner = element(by.xpath('//div[text()="Initial value length"]/../../..//input'));
        this.eleBufFieldInitialValueInput = element(by.xpath('//div[text()="Initial value"]/../../..//input'));
        this.eleBufFieldInitialValueValidateMsg = element(by.xpath('//div[text()="Initial value"]/../../../..//div[@class="validate_msg_show"]'));
        // Conversion Rule Details
        this.eleCvrNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleCvrNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleCvrMsgInput = element(by.xpath('//div[text()="Message" and @class="form_label"]/../../..//input'));
        this.eleCvrMsgValidateMsg = element(by.xpath('//div[text()="Message"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleCvrBufInput = element(by.xpath('//div[text()="Buffer" and @class="form_label"]/../../..//input'));
        this.eleCvrBufValidateMsg = element(by.xpath('//div[text()="Buffer"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleCvrMaxBufSizeSpinner = element(by.css('.spinner-textbox'));
        this.eleCvrMappingButton = element(by.css('.GCOBQG-CMU'));
        this.eleCvrInputMsgTypeDropdown = element(by.xpath('//div[text()="Input Message Type"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleCvrInputMsgTypeSelected = function (inputMsgType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + inputMsgType + '"]'));
        };
        this.eleCvrInputMsgType01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleCvrInputMsgType02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleCvrInputMsgType03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleCvrInputMsgType04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));
        this.eleCvrUseSizeFromDropdown = element(by.xpath('//div[text()="Use Size From"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleCvrUseSizeFromSelected = function (useSizeFrom) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + useSizeFrom + '"]'));
        };
        this.eleCvrUseSizeFrom01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleCvrUseSizeFrom02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleCvrMappingDailogTitle = element(by.css('.GCOBQG-CHY'));
        this.eleCvrMappingFinishButton = element(by.xpath('//button[text()="Finish"]'));
        this.eleCvrMsgFieldSearchInput = element.all(by.xpath('//div[@class="GCOBQG-CGR"]//input[@class="GCOBQG-CLM"]')).get(1);
        this.eleCvrMsgFieldSearchIcon = element.all(by.xpath('//div[@class="GCOBQG-CGR"]//a[@class="GCOBQG-CKM"]')).get(1);
        this.eleCvrBufFieldSearchInput = element.all(by.xpath('//div[@class="GCOBQG-CGR"]//input[@class="GCOBQG-CLM"]')).get(0);
        this.eleCvrBufFieldSearchIcon = element.all(by.xpath('//div[@class="GCOBQG-CGR"]//a[@class="GCOBQG-CKM"]')).get(0);
        this.eleCvrMsgFieldSelected = function (msgField) {
            return element(by.xpath('//img[@class="gwt-Image GCOBQG-CKJ"]/../..//div[text()="' + msgField + '"]'));
        };
        this.eleCvrBufFieldSelected = function (bufField) {
            return element(by.xpath('//img[@class="gwt-Image GCOBQG-CJJ"]/../..//div[text()="' + bufField + '"]'));
        };
        this.eleCvrMsgFieldImportButton = function (msgField) {
            return element(by.xpath('//img[@class="gwt-Image GCOBQG-CKJ"]/../..//div[text()="' + msgField + '"]/..//img'));
        };
        this.eleCvrBufFieldImportButton = function (bufField) {
            return element(by.xpath('//img[@class="gwt-Image GCOBQG-CJJ"]/../..//div[text()="' + bufField + '"]/..//img'));
        };
        this.eleCvrMappingLine01msgFieldName = element(by.xpath('//input[@type="checkbox"]/../../../..//tr[1]/td[1]/div'));
        this.eleCvrMappingLine01ReqCheck = element(by.xpath('//div[@class="GCOBQG-CFY"]//tr[1]/td[2]//input'));
        this.eleCvrMappingLine01SystemCheck = element(by.xpath('//div[@class="GCOBQG-CFY"]//tr[1]/td[3]//input'));
        this.eleCvrMappingLine01TruncCheck = element(by.xpath('//div[@class="GCOBQG-CFY"]//tr[1]/td[4]//input'));
        this.eleCvrMappingLine01bufFieldName = element(by.xpath('//input[@type="checkbox"]/../../../..//tr[1]/td[5]/div'));
        this.eleCvrMappingLine02msgFieldName = element(by.xpath('//input[@type="checkbox"]/../../../..//tr[2]/td[1]/div'));
        this.eleCvrMappingLine02ReqCheck = element(by.xpath('//div[@class="GCOBQG-CFY"]//tr[2]/td[2]//input'));
        this.eleCvrMappingLine02SystemCheck = element(by.xpath('//div[@class="GCOBQG-CFY"]//tr[2]/td[3]//input'));
        this.eleCvrMappingLine02TruncCheck = element(by.xpath('//div[@class="GCOBQG-CFY"]//tr[2]/td[4]//input'));
        this.eleCvrMappingLine02bufFieldName = element(by.xpath('//input[@type="checkbox"]/../../../..//tr[2]/td[5]/div'));
        this.eleCvrMappingLine03msgFieldName = element(by.xpath('//input[@type="checkbox"]/../../../..//tr[3]/td[1]/div'));
        this.eleCvrMappingLine03ReqCheck = element(by.xpath('//div[@class="GCOBQG-CFY"]//tr[3]/td[2]//input'));
        this.eleCvrMappingLine03SystemCheck = element(by.xpath('//div[@class="GCOBQG-CFY"]//tr[3]/td[3]//input'));
        this.eleCvrMappingLine03TruncCheck = element(by.xpath('//div[@class="GCOBQG-CFY"]//tr[3]/td[4]//input'));
        this.eleCvrMappingLine03bufFieldName = element(by.xpath('//input[@type="checkbox"]/../../../..//tr[3]/td[5]/div'));
        this.eleCvrMappingMsgFieldName = function (lineNum) {
            return element(by.xpath('//input[@type="checkbox"]/../../../..//tr[' + lineNum + ']/td[1]/div'));
        };
        this.eleCvrMappingReqCheck = function (lineNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFY"]//tr[' + lineNum + ']/td[2]//input'));
        };
        this.eleCvrMappingSystemCheck = function (lineNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFY"]//tr[' + lineNum + ']/td[3]//input'));
        };
        this.eleCvrMappingTruncCheck = function (lineNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFY"]//tr[' + lineNum + ']/td[4]//input'));
        };
        this.eleCvrMappingBufFieldName = function (lineNum) {
            return element(by.xpath('//input[@type="checkbox"]/../../../..//tr[' + lineNum + ']/td[5]/div'));
        };
        // Recipe Service Details
        this.eleRecNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleRecDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        // Trigger Service Details
        this.eleTrgNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleTrgDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleTrgConnInput = element(by.xpath('//div[text()="Connection"]/../../..//input'));
        this.eleTrgOutputConversionInput = element(by.xpath('//div[text()="Output Conversion"]/../../..//input'));
        this.eleTrgDisableOnErrorNumSpinner = element(by.xpath('//div[text()="Disable on Error (#)"]/../../..//input'));
        this.eleTrgDisableOnErrorPercentSpinner = element(by.xpath('//div[text()="Disable on Error (%)"]/../../..//input'));
        this.eleTrgTrclvlSpinner = element(by.xpath('//div[text()="Trace Level"]/../../..//input'));
        this.eleTrgOutputMethodDropdown = element(by.xpath('//div[text()="Output Method"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleTrgOutputMethodSelected = function (outputMethod) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + outputMethod + '"]'));
        };
        this.eleTrgServiceKeyLocatorStartSpinner = element(by.xpath('//div[text()="Service Key Locator"]/../../..//input[@class="spinner-textbox"]'));
        this.eleTrgServiceKeyLocatorLengthInput = element(by.xpath('//div[text()="Length"]/../../..//input[@class="form_text_box"]'));
        this.eleTrgServiceKeyLocatorValueInput = element(by.xpath('//div[text()="Value"]/../../..//input[@class="form_text_box"]'));
        this.eleTrgRequeueOnErrorCheck = element(by.xpath('//label[text()="Requeue on Error"]/..//input'));
        this.eleTrgConnectionExtension = element(by.xpath('//td[text()="Connection Extension"]'));
        this.eleTrgEmsDetailsExtension = element(by.xpath('//td[text()="EMS Details"]'));
        this.eleTrgEmsPublishDestInput = element(by.xpath('//div[text()="Publish Destination"]/../../..//input'));
        this.eleTrgEmsPublishDestTypeDropdown = element(by.xpath('//div[text()="Publish Destination"]/../../../../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleTrgEmsPublishDestTypeSelected = function (publishDestType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + publishDestType + '"]'));
        };
        this.eleTrgEmsDynamicDestSuffixLengthSpinner = element(by.xpath('//div[text()="Dynamic Destination suffix:"]/../../..//div[text()="Length"]/../../..//input'));
        this.eleTrgEmsDynamicDestSuffixStartSpinner = element(by.xpath('//div[text()="Dynamic Destination suffix:"]/../../..//div[text()="Start"]/../../..//input'));
        this.eleTrgEmsPublishDest2Input = element(by.xpath('//div[text()="Publish Destination (Secondary)"]/../../..//input'));
        this.eleTrgEmsPublishDest2TypeInput = element(by.xpath('//div[text()="Publish Destination (Secondary)"]/../../../../../..//div[text()="Type"]/../../..//input'));
        this.eleTrgEmsReplyDestInput = element(by.xpath('//div[text()="Reply-to Destination"]/../../..//input'));
        this.eleTrgEmsReplyDestTypeDropdown = element(by.xpath('//div[text()="Reply-to Destination"]/../../../../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleTrgEmsReplyDestTypeSelected = function (replyDestType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + replyDestType + '"]'));
        };
        this.eleTrgEmsErrorMsgDestInput = element(by.xpath('//div[text()="Error Message Destination"]/../../..//input'));
        this.eleTrgEmsErrorMsgDestTypeDropdown = element(by.xpath('//div[text()="Error Message Destination"]/../../../../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleTrgEmsErrorMsgDestTypeSelected = function (errorDestType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + errorDestType + '"]'));
        };
        this.eleTrgEmsSmslModeDropdown = element(by.xpath('//div[text()="SMSL Mode"]/../../..//div[contains(@class,"GCOBQG-CPQ")]'));
        this.eleTrgEmsSmslModeSelected = function (smsl) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + smsl + '"]'));
        };
        this.eleTrgEmsDeliveryModeDropdown = element(by.xpath('//div[text()="Delivery Mode"]/../../..//div[contains(@class,"GCOBQG-CPQ")]'));
        this.eleTrgEmsDeliveryModeSelected = function (delivery) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + delivery + '"]'));
        };
        this.eleTrgOutputMsgPriorityCheck = element(by.xpath('//label[text()="Priority"]/..//input'));
        this.eleTrgOutputMsgPriorityValueSpinner = element(by.xpath('//label[text()="Priority"]/../../../../../../../../..//input[@class="spinner-textbox"]'));
        this.eleTrgOutputMsgExpirationCheck = element(by.xpath('//label[text()="Expiration"]/..//input'));
        this.eleTrgOutputMsgExpirationValueSpinner = element(by.xpath('//label[text()="Expiration"]/../../../../../../../../..//input[@class="spinner-textbox"]'));
        this.eleTrgOutputMsgExpirationUnitDropdown = element(by.xpath('//div[text()="Unit"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleTrgOutputMsgExpirationUnitSelected = function (unit) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + unit + '"]'));
        };
        this.eleTrgOutputMsgCompressionCheck = element(by.xpath('//label[text()="Compression"]/..//input'));
        this.eleTrgOutputMsgPreserveCheck = element(by.xpath('//label[text()="Preserve"]/..//input'));
        this.eleTrgOutputMsgBodyTraceCheck = element(by.xpath('//label[text()="Body Trace"]/..//input'));
        this.eleTrgOutputMsgMsgTypeDropdown = element(by.xpath('//div[text()="Message Type"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleTrgOutputMsgMsgTypeSelected = function (msgType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + msgType + '"]'));
        };
        this.eleTrgEmsPropExtension = element(by.xpath('//td[text()="EMS Properties"]'));
        this.eleTrgEmsPropAddButton = element(by.xpath('//div[@class="GCOBQG-CCM"]/../..//button[@class="GCOBQG-CDQ" and text()="Add"]'));
        this.eleTrgEmsPropDelButton = element(by.xpath('//div[@class="GCOBQG-CCM"]/../..//button[@class="GCOBQG-CDQ" and text()="Delete"]'));
        this.eleTrgEmsPropReplicateButton = element(by.xpath('//div[@class="GCOBQG-CCM"]/../..//button[@class="GCOBQG-CDQ" and text()="Replicate"]'));
        this.eleTrgEmsPropType = function (lineNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + lineNum + ']/td[1]/div'));
        };
        this.eleTrgEmsPropName = function (lineNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + lineNum + ']/td[2]/div'));
        };
        this.eleTrgEmsPropValue = function (lineNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + lineNum + ']/td[3]/div'));
        };
        this.eleTrgEmsPropNameSelected = function (propName) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//td[2]/div[text()="' + propName + '"]'));
        };
        this.eleTrgEmsPropTypeDropdown = element(by.css('.GCOBQG-CA0 .GCOBQG-CPQ'));
        this.eleTrgEmsPropTypeSelected = function (propType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + propType + '"]'));
        };
        this.eleTrgEmsPropType01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleTrgEmsPropType02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleTrgEmsPropType03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleTrgEmsPropNameDropdown = element(by.css('.GCOBQG-CB0 .GCOBQG-CPQ'));
        this.eleTrgEmsPropNameInput = element(by.xpath('//input[@maxlength="31"]'));
        this.eleTrgEmsPropValueInput = element(by.xpath('//div[@class="popupContent"]//div/div/div[3]/input'));
        this.eleTrgEmsPropValuePicklistButton = element(by.css('.GCOBQG-CB0 .pick-list-text-box-button'));
        this.eleTrgEmsPropValueFromBufFieldSearchInput = element(by.css('.gwt-DialogBox .GCOBQG-CLM'));
        this.eleTrgEmsPropValueFromBufFieldSearchIcon = element(by.css('.gwt-DialogBox .GCOBQG-CKM'));
        this.eleTrgEmsPropValueFromBufFieldSelected = function (bufField) {
            return element(by.xpath('//div[@class="dialog-container"]//div[text()="' + bufField + '"]'));
        };
        this.eleTrgEmsPropValueFromBufFieldSelectButton = element(by.css('.mfwebui-form-buttons button[title="OK"]'));
        this.eleTrgEmsPropValueFromBufFieldCancelButton = element(by.css('.mfwebui-form-buttons button[title="No"]'));
        this.eleTrgEmsPropValidateMsg = element(by.xpath('//div[@class="popupContent"]//img[@src="images/icons/alert.png"]'));
        this.eleTrgRvDetailsExtension = element(by.xpath('//td[text()="RV Details"]'));
        this.eleTrgRvPublishSubjectInput = element(by.xpath('//div[text()="Publish Subject"]/../../..//input'));
        this.eleTrgRvDynamicSubjectSuffixLengthSpinner = element(by.xpath('//div[text()="Dynamic Subject suffix:"]/../../..//div[text()="Length"]/../../..//input'));
        this.eleTrgRvDynamicSubjectSuffixStartSpinner = element(by.xpath('//div[text()="Dynamic Subject suffix:"]/../../..//div[text()="Start"]/../../..//input'));
        this.eleTrgRvPublishSubject2Input = element(by.xpath('//div[text()="Publish Subject (Secondary)"]/../../..//input'));
        this.eleTrgRvReplySubjectInput = element(by.xpath('//div[text()="Reply-to Subject"]/../../..//input'));
        this.eleTrgRvErrorMsgSubjectInput = element(by.xpath('//div[text()="Error Message Subject"]/../../..//input'));
    }

    configurePage.prototype = new Page();
    configurePage.prototype.constructor = configurePage;


    //
    // Function to add a Message Field.
    //
    configurePage.prototype._addMsgField = function (fieldName, type, idNum, seq, dec) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);
        type = type || "STR";
        idNum = idNum || "0";
        seq = seq || "0";
        dec = dec || "0";
        fieldName = fieldName || "New_field";

        globalCommons.waitForClickable(that.eleMsgFieldAddButton).then(function () {
            that.eleMsgFieldAddButton.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleMsgFieldTypeDropdown);
        }).then(function () {
            if (type !== "STR") {
                that.eleMsgFieldTypeDropdown.click().then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeSelected(type));
                }).then(function () {
                    that.eleMsgFieldTypeSelected(type).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleMsgFieldIdNumSpinner);
        }).then(function () {
            that.eleMsgFieldIdNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleMsgFieldIdNumSpinner.clear().sendKeys(idNum);
        }).then(function () {
            that.eleMsgFieldSeqSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleMsgFieldSeqSpinner.clear().sendKeys(seq);
        }).then(function () {
            that.eleMsgFieldDecSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleMsgFieldDecSpinner.clear().sendKeys(dec);
        }).then(function () {
            that.eleMsgFieldNameInput.clear().sendKeys(fieldName);
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    configurePage.prototype._addMsgField2 = function (fieldName) {
        var deferred = protractor.promise.defer(), that = this;
        fieldName = fieldName || "New_field";

        globalCommons.waitForClickable(that.eleMsgFieldAddButton).then(function () {
            that.eleMsgFieldAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleMsgFieldNameInput);
        }).then(function () {
            that.eleMsgFieldNameInput.clear().sendKeys(fieldName);
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // Function to delete a Message Field.
    //
    configurePage.prototype._delMsgField = function (fieldName) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleMsgFieldNameSelected(fieldName)).then(function () {
            that.eleMsgFieldNameSelected(fieldName).click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleMsgFieldDelButton);
        }).then(function () {
            that.eleMsgFieldDelButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // Function to replicate a Message Field.
    //
    configurePage.prototype._replicateMsgField = function (fieldName, fieldName2) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleMsgFieldNameSelected(fieldName)).then(function () {
            that.eleMsgFieldNameSelected(fieldName).click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleMsgFieldReplicateButton);
        }).then(function () {
            that.eleMsgFieldReplicateButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleMsgFieldNameInput);
        }).then(function () {
            that.eleMsgFieldNameInput.clear().sendKeys(fieldName2);
        }).then(function () {
            that.eleMsgDescInput.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // Function to add a Message (with 3 fields).
    //
    configurePage.prototype.addMsg = function (name, desc, fieldName, type, idNum, seq, dec, fieldName2, type2, idNum2, seq2, dec2, fieldName3, type3, idNum3, seq3, dec3) {
        var deferred = protractor.promise.defer(), that = this;
        type = type || "STR";
        idNum = idNum || "0";
        seq = seq || "0";
        dec = dec || "0";
        name = name || "New_field";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleMsgLeftmenu);
        }).then(function () {
            that.eleMsgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleMsgNameInput);
        }).then(function () {
            that.eleMsgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleMsgDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._addMsgField(fieldName, type, idNum, seq, dec);
        }).then(function () {
            that._addMsgField(fieldName2, type2, idNum2, seq2, dec2);
        }).then(function () {
            that._addMsgField(fieldName3, type3, idNum3, seq3, dec3);
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
    // Function to delete a Message, then confirm the delete operation.
    //
    configurePage.prototype.delMsgYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleMsgLeftmenu);
        }).then(function () {
            that.eleMsgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
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
    // Function to delete a Message, then discard the delete operation.
    //
    configurePage.prototype.delMsgNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleMsgLeftmenu);
        }).then(function () {
            that.eleMsgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
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
    // Function to replicate a Message.
    //
    configurePage.prototype.replicateMsg = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleMsgLeftmenu);
        }).then(function () {
            that.eleMsgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleDetailSlideBar);
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
    // Function to update a Message.
    //
    configurePage.prototype.updateMsg = function (name, desc, fieldName, type, idNum, seq, dec, fieldName2, type2, idNum2, seq2, dec2, fieldName3, type3, idNum3, seq3, dec3) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleMsgLeftmenu);
        }).then(function () {
            that.eleMsgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleMsgNameInput);
        }).then(function () {
            that.eleMsgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleMsgDescInput.clear().sendKeys(desc);
        }).then(function () {
            return that.eleMsgFieldName(1).isPresent();
        }).then(function (result) {
            if (result) {
                browser.actions().doubleClick(that.eleMsgFieldType(1)).perform().then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeDropdown);
                }).then(function () {
                    that.eleMsgFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeSelected(type));
                }).then(function () {
                    that.eleMsgFieldTypeSelected(type).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleMsgFieldIdNumSpinner);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.clear().sendKeys(idNum);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.clear().sendKeys(seq);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.clear().sendKeys(dec);
                }).then(function () {
                    that.eleMsgFieldNameInput.clear().sendKeys(fieldName);
                }).then(function () {
                    that.eleMsgDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleMsgFieldName(2).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleMsgFieldName(2).click().then(function () {
                    browser.actions().doubleClick(that.eleMsgFieldType(2)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeDropdown);
                }).then(function () {
                    that.eleMsgFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeSelected(type2));
                }).then(function () {
                    that.eleMsgFieldTypeSelected(type2).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleMsgFieldIdNumSpinner);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.clear().sendKeys(idNum2);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.clear().sendKeys(seq2);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.clear().sendKeys(dec2);
                }).then(function () {
                    that.eleMsgFieldNameInput.clear().sendKeys(fieldName2);
                }).then(function () {
                    that.eleMsgDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleMsgFieldName(3).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleMsgFieldName(3).click().then(function () {
                    browser.actions().doubleClick(that.eleMsgFieldType(3)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeDropdown);
                }).then(function () {
                    that.eleMsgFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeSelected(type3));
                }).then(function () {
                    that.eleMsgFieldTypeSelected(type3).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleMsgFieldIdNumSpinner);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.clear().sendKeys(idNum3);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.clear().sendKeys(seq3);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.clear().sendKeys(dec3);
                }).then(function () {
                    that.eleMsgFieldNameInput.clear().sendKeys(fieldName3);
                }).then(function () {
                    that.eleMsgDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
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
    // Function to cancel the changes of a Message, then confirm the cancel operation.
    //
    configurePage.prototype.cancelMsgYes = function (name, desc, fieldName, type, idNum, seq, dec, fieldName2, type2, idNum2, seq2, dec2, fieldName3, type3, idNum3, seq3, dec3) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleMsgLeftmenu);
        }).then(function () {
            that.eleMsgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleMsgNameInput);
        }).then(function () {
            that.eleMsgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleMsgDescInput.clear().sendKeys(desc);
        }).then(function () {
            return that.eleMsgFieldName(1).isPresent();
        }).then(function (result) {
            if (result) {
                browser.actions().doubleClick(that.eleMsgFieldType(1)).perform().then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeDropdown);
                }).then(function () {
                    that.eleMsgFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeSelected(type));
                }).then(function () {
                    that.eleMsgFieldTypeSelected(type).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleMsgFieldIdNumSpinner);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.clear().sendKeys(idNum);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.clear().sendKeys(seq);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.clear().sendKeys(dec);
                }).then(function () {
                    that.eleMsgFieldNameInput.clear().sendKeys(fieldName);
                }).then(function () {
                    that.eleMsgDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleMsgFieldName(2).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleMsgFieldName(2).click().then(function () {
                    browser.actions().doubleClick(that.eleMsgFieldType(2)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeDropdown);
                }).then(function () {
                    that.eleMsgFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeSelected(type2));
                }).then(function () {
                    that.eleMsgFieldTypeSelected(type2).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleMsgFieldIdNumSpinner);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.clear().sendKeys(idNum2);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.clear().sendKeys(seq2);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.clear().sendKeys(dec2);
                }).then(function () {
                    that.eleMsgFieldNameInput.clear().sendKeys(fieldName2);
                }).then(function () {
                    that.eleMsgDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleMsgFieldName(3).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleMsgFieldName(3).click().then(function () {
                    browser.actions().doubleClick(that.eleMsgFieldType(3)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeDropdown);
                }).then(function () {
                    that.eleMsgFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeSelected(type3));
                }).then(function () {
                    that.eleMsgFieldTypeSelected(type3).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleMsgFieldIdNumSpinner);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.clear().sendKeys(idNum3);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.clear().sendKeys(seq3);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.clear().sendKeys(dec3);
                }).then(function () {
                    that.eleMsgFieldNameInput.clear().sendKeys(fieldName3);
                }).then(function () {
                    that.eleMsgDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForClickable(that.eleCancelButton);
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
    // Function to cancel the changes of a Message, then discard the cancel operation.
    //
    configurePage.prototype.cancelMsgNo = function (name, desc, fieldName, type, idNum, seq, dec, fieldName2, type2, idNum2, seq2, dec2, fieldName3, type3, idNum3, seq3, dec3) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleMsgLeftmenu);
        }).then(function () {
            that.eleMsgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleMsgNameInput);
        }).then(function () {
            that.eleMsgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleMsgDescInput.clear().sendKeys(desc);
        }).then(function () {
            return that.eleMsgFieldName(1).isPresent();
        }).then(function (result) {
            if (result) {
                browser.actions().doubleClick(that.eleMsgFieldType(1)).perform().then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeDropdown);
                }).then(function () {
                    that.eleMsgFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeSelected(type));
                }).then(function () {
                    that.eleMsgFieldTypeSelected(type).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleMsgFieldIdNumSpinner);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.clear().sendKeys(idNum);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.clear().sendKeys(seq);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.clear().sendKeys(dec);
                }).then(function () {
                    that.eleMsgFieldNameInput.clear().sendKeys(fieldName);
                }).then(function () {
                    that.eleMsgDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleMsgFieldName(2).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleMsgFieldName(2).click().then(function () {
                    browser.actions().doubleClick(that.eleMsgFieldType(2)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeDropdown);
                }).then(function () {
                    that.eleMsgFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeSelected(type2));
                }).then(function () {
                    that.eleMsgFieldTypeSelected(type2).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleMsgFieldIdNumSpinner);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.clear().sendKeys(idNum2);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.clear().sendKeys(seq2);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.clear().sendKeys(dec2);
                }).then(function () {
                    that.eleMsgFieldNameInput.clear().sendKeys(fieldName2);
                }).then(function () {
                    that.eleMsgDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleMsgFieldName(3).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleMsgFieldName(3).click().then(function () {
                    browser.actions().doubleClick(that.eleMsgFieldType(3)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeDropdown);
                }).then(function () {
                    that.eleMsgFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeSelected(type3));
                }).then(function () {
                    that.eleMsgFieldTypeSelected(type3).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleMsgFieldIdNumSpinner);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.clear().sendKeys(idNum3);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.clear().sendKeys(seq3);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.clear().sendKeys(dec3);
                }).then(function () {
                    that.eleMsgFieldNameInput.clear().sendKeys(fieldName3);
                }).then(function () {
                    that.eleMsgDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForClickable(that.eleCancelButton);
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
    // Function to make changes to a Message, then reset the Message.
    //
    configurePage.prototype.resetMsg = function (name, desc, fieldName, type, idNum, seq, dec, fieldName2, type2, idNum2, seq2, dec2, fieldName3, type3, idNum3, seq3, dec3) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleMsgLeftmenu);
        }).then(function () {
            that.eleMsgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleMsgNameInput);
        }).then(function () {
            that.eleMsgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleMsgDescInput.clear().sendKeys(desc);
        }).then(function () {
            return that.eleMsgFieldName(1).isPresent();
        }).then(function (result) {
            if (result) {
                browser.actions().doubleClick(that.eleMsgFieldType(1)).perform().then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeDropdown);
                }).then(function () {
                    that.eleMsgFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeSelected(type));
                }).then(function () {
                    that.eleMsgFieldTypeSelected(type).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleMsgFieldIdNumSpinner);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.clear().sendKeys(idNum);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.clear().sendKeys(seq);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.clear().sendKeys(dec);
                }).then(function () {
                    that.eleMsgFieldNameInput.clear().sendKeys(fieldName);
                }).then(function () {
                    that.eleMsgDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleMsgFieldName(2).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleMsgFieldName(2).click().then(function () {
                    browser.actions().doubleClick(that.eleMsgFieldType(2)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeDropdown);
                }).then(function () {
                    that.eleMsgFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeSelected(type2));
                }).then(function () {
                    that.eleMsgFieldTypeSelected(type2).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleMsgFieldIdNumSpinner);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.clear().sendKeys(idNum2);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.clear().sendKeys(seq2);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.clear().sendKeys(dec2);
                }).then(function () {
                    that.eleMsgFieldNameInput.clear().sendKeys(fieldName2);
                }).then(function () {
                    that.eleMsgDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleMsgFieldName(3).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleMsgFieldName(3).click().then(function () {
                    browser.actions().doubleClick(that.eleMsgFieldType(3)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeDropdown);
                }).then(function () {
                    that.eleMsgFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleMsgFieldTypeSelected(type3));
                }).then(function () {
                    that.eleMsgFieldTypeSelected(type3).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleMsgFieldIdNumSpinner);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldIdNumSpinner.clear().sendKeys(idNum3);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldSeqSpinner.clear().sendKeys(seq3);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleMsgFieldDecSpinner.clear().sendKeys(dec3);
                }).then(function () {
                    that.eleMsgFieldNameInput.clear().sendKeys(fieldName3);
                }).then(function () {
                    that.eleMsgDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
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
    // Function to add a Buffer Field.
    //
    configurePage.prototype._addBufField = function (fieldName, type, start, length, dec) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(5).join(protractor.Key.BACK_SPACE);
        type = type || "BIN";
        start = start || "0";
        length = length || "4";
        dec = dec || "0";
        fieldName = fieldName || "New_field";

        globalCommons.waitForClickable(that.eleBufFieldAddButton).then(function () {
            that.eleBufFieldAddButton.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleBufFieldTypeDropdown);
        }).then(function () {
            if (type !== "BIN") {
                that.eleBufFieldTypeDropdown.click().then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeSelected(type));
                }).then(function () {
                    that.eleBufFieldTypeSelected(type).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleBufFieldStartPositionSpinner);
        }).then(function () {
            that.eleBufFieldStartPositionSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleBufFieldStartPositionSpinner.clear().sendKeys(start);
        }).then(function () {
            that.eleBufFieldLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleBufFieldLengthSpinner.clear().sendKeys(length);
        }).then(function () {
            that.eleBufFieldDecSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleBufFieldDecSpinner.clear().sendKeys(dec);
        }).then(function () {
            that.eleBufFieldNameInput.clear().sendKeys(fieldName);
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    configurePage.prototype._addBufField2 = function (fieldName) {
        var deferred = protractor.promise.defer(), that = this;
        fieldName = fieldName || "New_field";

        globalCommons.waitForClickable(that.eleBufFieldAddButton).then(function () {
            that.eleBufFieldAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleBufFieldNameInput);
        }).then(function () {
            that.eleBufFieldNameInput.clear().sendKeys(fieldName);
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // Function to delete a Buffer Field.
    //
    configurePage.prototype._delBufField = function (fieldName) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleBufFieldNameSelected(fieldName)).then(function () {
            that.eleBufFieldNameSelected(fieldName).click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleBufFieldDelButton);
        }).then(function () {
            that.eleBufFieldDelButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // Function to replicate a Buffer Field.
    //
    configurePage.prototype._replicateBufField = function (fieldName, fieldName2) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleBufFieldNameSelected(fieldName)).then(function () {
            that.eleBufFieldNameSelected(fieldName).click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleBufFieldReplicateButton);
        }).then(function () {
            that.eleBufFieldReplicateButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleBufFieldNameInput);
        }).then(function () {
            that.eleBufFieldNameInput.clear().sendKeys(fieldName2);
        }).then(function () {
            that.eleBufDescInput.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    // Function to set 'Leading Sign' of a buffer field
    // false: not selected
    // true: selected
    //
    configurePage.prototype._leadingSignBufField = function (leadingSign) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleBufFieldLeadingSignCheck).then(function () {
            return that.eleBufFieldLeadingSignCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (leadingSign) {
                    that.eleBufFieldLeadingSignCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (leadingSign) {
                    deferred.fulfill();
                } else {
                    that.eleBufFieldLeadingSignCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Separate Sign' of a buffer field
    // false: not selected
    // true: selected
    //
    configurePage.prototype._separateSignBufField = function (separateSign) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleBufFieldSeparateSignCheck).then(function () {
            return that.eleBufFieldSeparateSignCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (separateSign) {
                    that.eleBufFieldSeparateSignCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (separateSign) {
                    deferred.fulfill();
                } else {
                    that.eleBufFieldSeparateSignCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Justify Right' of a buffer field
    // false: not selected
    // true: selected
    //
    configurePage.prototype._justifyRightBufField = function (justifyRight) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleBufFieldJustifyRightCheck).then(function () {
            return that.eleBufFieldJustifyRightCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (justifyRight) {
                    that.eleBufFieldJustifyRightCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (justifyRight) {
                    deferred.fulfill();
                } else {
                    that.eleBufFieldJustifyRightCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Pad Character' of a buffer field
    //
    configurePage.prototype._padCharacterBufField = function (padCharacter) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleBufFieldPadCharacterDropdown).then(function () {
            return that.eleBufFieldPadCharacterDropdown.getText();
        }).then(function (message) {
            if (message === padCharacter) {
                deferred.fulfill();
            } else {
                that.eleBufFieldPadCharacterDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleBufFieldPadCharacterSelected(padCharacter));
                }).then(function () {
                    that.eleBufFieldPadCharacterSelected(padCharacter).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Pad Value' of a buffer field
    //
    configurePage.prototype._padValueBufField = function (padValue) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleBufFieldPadValueInput).then(function () {
            return that.eleBufFieldPadValueInput.getAttribute("readonly");
        }).then(function (message) {
            if (message === null) {
                that.eleBufFieldPadValueInput.clear().sendKeys(padValue).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Initialize entire field' of a buffer field
    // false: not selected
    // true: selected
    //
    configurePage.prototype._initializeEntireFieldBufField = function (initializeEntireField) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleBufFieldInitializeEntireFieldCheck).then(function () {
            return that.eleBufFieldInitializeEntireFieldCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (initializeEntireField) {
                    that.eleBufFieldInitializeEntireFieldCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (initializeEntireField) {
                    deferred.fulfill();
                } else {
                    that.eleBufFieldInitializeEntireFieldCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Initial value length' of a buffer field
    //
    configurePage.prototype._initialValueLengthBufField = function (initialValueLength) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(3).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleBufFieldInitialValueLengthSpinner).then(function () {
            return that.eleBufFieldInitialValueLengthSpinner.getAttribute("readonly");
        }).then(function (message) {
            if (message === null) {
                that.eleBufFieldInitialValueLengthSpinner.sendKeys(backspaceSeries).then(function () {
                    that.eleBufFieldInitialValueLengthSpinner.clear().sendKeys(initialValueLength);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // Function to set the extension details for a buffer field.
    //
    configurePage.prototype._setExtensionBufField = function (fieldNum, leadingSign, separateSign, justifyRight, padCharacter, padValue, initializeEntireField, initialValueLength, initialValue) {
        var deferred = protractor.promise.defer(), that = this;
        padCharacter = padCharacter || "Space";
        initialValueLength = initialValueLength || "0";

        globalCommons.waitForClickable(that.eleBufFieldExtendButton(fieldNum)).then(function () {
            that.eleBufFieldExtendButton(fieldNum).click();
        }).then(function () {
            that._leadingSignBufField(leadingSign);
        }).then(function () {
            that._separateSignBufField(separateSign);
        }).then(function () {
            that._justifyRightBufField(justifyRight);
        }).then(function () {
            that._padCharacterBufField(padCharacter);
        }).then(function () {
            that._padValueBufField(padValue);
        }).then(function () {
            that._initializeEntireFieldBufField(initializeEntireField);
        }).then(function () {
            that._initialValueLengthBufField(initialValueLength);
        }).then(function () {
            that.eleBufFieldInitialValueInput.clear().sendKeys(initialValue);
        }).then(function () {
            that.eleBufDescInput.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // Function to add a Buffer (with 3 fields).
    //
    configurePage.prototype.addBuf = function (name, desc, maxSize, fieldName, type, start, length, dec, fieldName2, type2, start2, length2, dec2, fieldName3, type3, start3, length3, dec3) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        maxSize = maxSize || "0";
        type = type || "STR";
        start = start || "0";
        length = length || "4";
        dec = dec || "0";
        name = name || "New_field";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleBufLeftmenu);
        }).then(function () {
            that.eleBufLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleBufNameInput);
        }).then(function () {
            that.eleBufNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleBufDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleBufMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleBufMaxSizeSpinner.clear().sendKeys(maxSize);
        }).then(function () {
            that._addBufField(fieldName, type, start, length, dec);
        }).then(function () {
            that._addBufField(fieldName2, type2, start2, length2, dec2);
        }).then(function () {
            that._addBufField(fieldName3, type3, start3, length3, dec3);
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
    // Function to delete a Buffer, then confirm the delete operation.
    //
    configurePage.prototype.delBufYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForDisplayed(that.eleBufLeftmenu);
        }).then(function () {
            that.eleBufLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
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
    // Function to delete a Buffer, then discard the delete operation.
    //
    configurePage.prototype.delBufNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForDisplayed(that.eleBufLeftmenu);
        }).then(function () {
            that.eleBufLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
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
    // Function to replicate a Buffer.
    //
    configurePage.prototype.replicateBuf = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleBufLeftmenu);
        }).then(function () {
            that.eleBufLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleDetailSlideBar);
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
    // Function to update a Buffer.
    //
    configurePage.prototype.updateBuf = function (name, desc, maxSize, fieldName, type, start, length, dec, fieldName2, type2, start2, length2, dec2, fieldName3, type3, start3, length3, dec3) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleBufLeftmenu);
        }).then(function () {
            that.eleBufLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleBufNameInput);
        }).then(function () {
            that.eleBufNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleBufDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleBufMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleBufMaxSizeSpinner.clear().sendKeys(maxSize);
        }).then(function () {
            return that.eleBufFieldName(1).isPresent();
        }).then(function (result) {
            if (result) {
                browser.actions().doubleClick(that.eleBufFieldType(1)).perform().then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeDropdown);
                }).then(function () {
                    that.eleBufFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeSelected(type));
                }).then(function () {
                    that.eleBufFieldTypeSelected(type).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleBufFieldStartPositionSpinner);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.clear().sendKeys(start);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.clear().sendKeys(length);
                }).then(function () {
                    that.eleBufFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldDecSpinner.clear().sendKeys(dec);
                }).then(function () {
                    that.eleBufFieldNameInput.clear().sendKeys(fieldName);
                }).then(function () {
                    that.eleBufDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleBufFieldName(2).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleBufFieldName(2).click().then(function () {
                    browser.actions().doubleClick(that.eleBufFieldType(2)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeDropdown);
                }).then(function () {
                    that.eleBufFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeSelected(type2));
                }).then(function () {
                    that.eleBufFieldTypeSelected(type2).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleBufFieldStartPositionSpinner);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.clear().sendKeys(start2);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.clear().sendKeys(length2);
                }).then(function () {
                    that.eleBufFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldDecSpinner.clear().sendKeys(dec2);
                }).then(function () {
                    that.eleBufFieldNameInput.clear().sendKeys(fieldName2);
                }).then(function () {
                    that.eleBufDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleBufFieldName(3).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleBufFieldName(3).click().then(function () {
                    browser.actions().doubleClick(that.eleBufFieldType(3)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeDropdown);
                }).then(function () {
                    that.eleBufFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeSelected(type3));
                }).then(function () {
                    that.eleBufFieldTypeSelected(type3).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleBufFieldStartPositionSpinner);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.clear().sendKeys(start3);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.clear().sendKeys(length3);
                }).then(function () {
                    that.eleBufFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldDecSpinner.clear().sendKeys(dec3);
                }).then(function () {
                    that.eleBufFieldNameInput.clear().sendKeys(fieldName3);
                }).then(function () {
                    that.eleBufDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
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
    // Function to cancel the changes of a Buffer, then confirm the cancel operation.
    //
    configurePage.prototype.cancelBufYes = function (name, desc, maxSize, fieldName, type, start, length, dec, fieldName2, type2, start2, length2, dec2, fieldName3, type3, start3, length3, dec3) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleBufLeftmenu);
        }).then(function () {
            that.eleBufLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleBufNameInput);
        }).then(function () {
            that.eleBufNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleBufDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleBufMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleBufMaxSizeSpinner.clear().sendKeys(maxSize);
        }).then(function () {
            return that.eleBufFieldName(1).isPresent();
        }).then(function (result) {
            if (result) {
                browser.actions().doubleClick(that.eleBufFieldType(1)).perform().then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeDropdown);
                }).then(function () {
                    that.eleBufFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeSelected(type));
                }).then(function () {
                    that.eleBufFieldTypeSelected(type).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleBufFieldStartPositionSpinner);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.clear().sendKeys(start);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.clear().sendKeys(length);
                }).then(function () {
                    that.eleBufFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldDecSpinner.clear().sendKeys(dec);
                }).then(function () {
                    that.eleBufFieldNameInput.clear().sendKeys(fieldName);
                }).then(function () {
                    that.eleBufDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleBufFieldName(2).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleBufFieldName(2).click().then(function () {
                    browser.actions().doubleClick(that.eleBufFieldType(2)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeDropdown);
                }).then(function () {
                    that.eleBufFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeSelected(type2));
                }).then(function () {
                    that.eleBufFieldTypeSelected(type2).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleBufFieldStartPositionSpinner);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.clear().sendKeys(start2);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.clear().sendKeys(length2);
                }).then(function () {
                    that.eleBufFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldDecSpinner.clear().sendKeys(dec2);
                }).then(function () {
                    that.eleBufFieldNameInput.clear().sendKeys(fieldName2);
                }).then(function () {
                    that.eleBufDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleBufFieldName(3).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleBufFieldName(3).click().then(function () {
                    browser.actions().doubleClick(that.eleBufFieldType(3)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeDropdown);
                }).then(function () {
                    that.eleBufFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeSelected(type3));
                }).then(function () {
                    that.eleBufFieldTypeSelected(type3).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleBufFieldStartPositionSpinner);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.clear().sendKeys(start3);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.clear().sendKeys(length3);
                }).then(function () {
                    that.eleBufFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldDecSpinner.clear().sendKeys(dec3);
                }).then(function () {
                    that.eleBufFieldNameInput.clear().sendKeys(fieldName3);
                }).then(function () {
                    that.eleBufDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForClickable(that.eleCancelButton);
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
    // Function to cancel the changes of a Buffer, then discard the cancel operation.
    //
    configurePage.prototype.cancelBufNo = function (name, desc, maxSize, fieldName, type, start, length, dec, fieldName2, type2, start2, length2, dec2, fieldName3, type3, start3, length3, dec3) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleBufLeftmenu);
        }).then(function () {
            that.eleBufLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleBufNameInput);
        }).then(function () {
            that.eleBufNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleBufDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleBufMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleBufMaxSizeSpinner.clear().sendKeys(maxSize);
        }).then(function () {
            return that.eleBufFieldName(1).isPresent();
        }).then(function (result) {
            if (result) {
                browser.actions().doubleClick(that.eleBufFieldType(1)).perform().then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeDropdown);
                }).then(function () {
                    that.eleBufFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeSelected(type));
                }).then(function () {
                    that.eleBufFieldTypeSelected(type).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleBufFieldStartPositionSpinner);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.clear().sendKeys(start);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.clear().sendKeys(length);
                }).then(function () {
                    that.eleBufFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldDecSpinner.clear().sendKeys(dec);
                }).then(function () {
                    that.eleBufFieldNameInput.clear().sendKeys(fieldName);
                }).then(function () {
                    that.eleBufDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleBufFieldName(2).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleBufFieldName(2).click().then(function () {
                    browser.actions().doubleClick(that.eleBufFieldType(2)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeDropdown);
                }).then(function () {
                    that.eleBufFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeSelected(type2));
                }).then(function () {
                    that.eleBufFieldTypeSelected(type2).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleBufFieldStartPositionSpinner);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.clear().sendKeys(start2);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.clear().sendKeys(length2);
                }).then(function () {
                    that.eleBufFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldDecSpinner.clear().sendKeys(dec2);
                }).then(function () {
                    that.eleBufFieldNameInput.clear().sendKeys(fieldName2);
                }).then(function () {
                    that.eleBufDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleBufFieldName(3).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleBufFieldName(3).click().then(function () {
                    browser.actions().doubleClick(that.eleBufFieldType(3)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeDropdown);
                }).then(function () {
                    that.eleBufFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeSelected(type3));
                }).then(function () {
                    that.eleBufFieldTypeSelected(type3).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleBufFieldStartPositionSpinner);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.clear().sendKeys(start3);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.clear().sendKeys(length3);
                }).then(function () {
                    that.eleBufFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldDecSpinner.clear().sendKeys(dec3);
                }).then(function () {
                    that.eleBufFieldNameInput.clear().sendKeys(fieldName3);
                }).then(function () {
                    that.eleBufDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForClickable(that.eleCancelButton);
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
    // Function to make changes to a Buffer, then reset the Buffer.
    //
    configurePage.prototype.resetBuf = function (name, desc, maxSize, fieldName, type, start, length, dec, fieldName2, type2, start2, length2, dec2, fieldName3, type3, start3, length3, dec3) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleBufLeftmenu);
        }).then(function () {
            that.eleBufLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleBufNameInput);
        }).then(function () {
            that.eleBufNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleBufDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleBufMaxSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleBufMaxSizeSpinner.clear().sendKeys(maxSize);
        }).then(function () {
            return that.eleBufFieldName(1).isPresent();
        }).then(function (result) {
            if (result) {
                browser.actions().doubleClick(that.eleBufFieldType(1)).perform().then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeDropdown);
                }).then(function () {
                    that.eleBufFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeSelected(type));
                }).then(function () {
                    that.eleBufFieldTypeSelected(type).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleBufFieldStartPositionSpinner);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.clear().sendKeys(start);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.clear().sendKeys(length);
                }).then(function () {
                    that.eleBufFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldDecSpinner.clear().sendKeys(dec);
                }).then(function () {
                    that.eleBufFieldNameInput.clear().sendKeys(fieldName);
                }).then(function () {
                    that.eleBufDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleBufFieldName(2).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleBufFieldName(2).click().then(function () {
                    browser.actions().doubleClick(that.eleBufFieldType(2)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeDropdown);
                }).then(function () {
                    that.eleBufFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeSelected(type2));
                }).then(function () {
                    that.eleBufFieldTypeSelected(type2).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleBufFieldStartPositionSpinner);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.clear().sendKeys(start2);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.clear().sendKeys(length2);
                }).then(function () {
                    that.eleBufFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldDecSpinner.clear().sendKeys(dec2);
                }).then(function () {
                    that.eleBufFieldNameInput.clear().sendKeys(fieldName2);
                }).then(function () {
                    that.eleBufDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleBufFieldName(3).isPresent();
        }).then(function (result) {
            if (result) {
                that.eleBufFieldName(3).click().then(function () {
                    browser.actions().doubleClick(that.eleBufFieldType(3)).perform();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeDropdown);
                }).then(function () {
                    that.eleBufFieldTypeDropdown.click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleBufFieldTypeSelected(type3));
                }).then(function () {
                    that.eleBufFieldTypeSelected(type3).click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleBufFieldStartPositionSpinner);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldStartPositionSpinner.clear().sendKeys(start3);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldLengthSpinner.clear().sendKeys(length3);
                }).then(function () {
                    that.eleBufFieldDecSpinner.sendKeys(backspaceSeries);
                }).then(function () {
                    that.eleBufFieldDecSpinner.clear().sendKeys(dec3);
                }).then(function () {
                    that.eleBufFieldNameInput.clear().sendKeys(fieldName3);
                }).then(function () {
                    that.eleBufDescInput.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForClickable(that.eleResetButton);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    // Function to set 'Req' of a mapping line
    // false: not selected
    // true: selected
    //
    configurePage.prototype._reqMappingCvr = function (lineNum, req) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleCvrMappingReqCheck(lineNum)).then(function () {
            return that.eleCvrMappingReqCheck(lineNum).getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (req) {
                    that.eleCvrMappingReqCheck(lineNum).click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (req) {
                    deferred.fulfill();
                } else {
                    that.eleCvrMappingReqCheck(lineNum).click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'System' of a mapping line
    // false: not selected
    // true: selected
    //
    configurePage.prototype._systemMappingCvr = function (lineNum, system) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleCvrMappingSystemCheck(lineNum)).then(function () {
            return that.eleCvrMappingSystemCheck(lineNum).getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (system) {
                    that.eleCvrMappingSystemCheck(lineNum).click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (system) {
                    deferred.fulfill();
                } else {
                    that.eleCvrMappingSystemCheck(lineNum).click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'System' of a mapping line
    // false: not selected
    // true: selected
    //
    configurePage.prototype._truncMappingCvr = function (lineNum, trunc) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleCvrMappingTruncCheck(lineNum)).then(function () {
            return that.eleCvrMappingTruncCheck(lineNum).getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (trunc) {
                    that.eleCvrMappingTruncCheck(lineNum).click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (trunc) {
                    deferred.fulfill();
                } else {
                    that.eleCvrMappingTruncCheck(lineNum).click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to add one Mapping of a Conversion Rule
    //
    configurePage.prototype._mappingCvr = function (msgField, bufField, lineNum, req, system, trunc) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleCvrMappingDailogTitle).then(function () {
            that.eleCvrMappingDailogTitle.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleCvrMsgFieldSelected(msgField));
        }).then(function () {
            that.eleCvrMsgFieldSelected(msgField).click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleCvrMsgFieldImportButton(msgField));
        }).then(function () {
            that.eleCvrMsgFieldImportButton(msgField).click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleCvrBufFieldSelected(bufField));
        }).then(function () {
            that.eleCvrBufFieldSelected(bufField).click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleCvrBufFieldImportButton(bufField));
        }).then(function () {
            that.eleCvrBufFieldImportButton(bufField).click();
        }).then(function () {
            that._reqMappingCvr(lineNum, req);
        }).then(function () {
            that._systemMappingCvr(lineNum, system);
        }).then(function () {
            that._truncMappingCvr(lineNum, trunc);
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    // Function to set 'Input Message Type' of a Conversion Rule
    //
    configurePage.prototype._inputMsgTypeCvr = function (inputMsgType) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleCvrInputMsgTypeDropdown).then(function () {
            return that.eleCvrInputMsgTypeDropdown.getText();
        }).then(function (message) {
            if (message === inputMsgType) {
                deferred.fulfill();
            } else {
                that.eleCvrInputMsgTypeDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleCvrInputMsgTypeSelected(inputMsgType));
                }).then(function () {
                    that.eleCvrInputMsgTypeSelected(inputMsgType).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Use Size From' of a Conversion Rule
    //
    configurePage.prototype._useSizeFromCvr = function (useSizeFrom) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleCvrUseSizeFromDropdown).then(function () {
            return that.eleCvrUseSizeFromDropdown.getText();
        }).then(function (message) {
            if (message === useSizeFrom) {
                deferred.fulfill();
            } else {
                that.eleCvrUseSizeFromDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleCvrUseSizeFromSelected(useSizeFrom));
                }).then(function () {
                    that.eleCvrUseSizeFromSelected(useSizeFrom).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // Function to add a Conversion Rule.
    //
    configurePage.prototype.addCvr = function (name, msg, buf, maxBufSize, inputMsgType, useSizeFrom, mapping, msgField, bufField, msgField2, bufField2, msgField3, bufField3, lineNum, req, system, trunc, lineNum2, req2, system2, trunc2, lineNum3, req3, system3, trunc3) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        maxBufSize = maxBufSize === undefined ? "0" : maxBufSize;
        inputMsgType = inputMsgType === undefined ? "Bytes" : inputMsgType;
        useSizeFrom = useSizeFrom === undefined ? "Message" : useSizeFrom;
        mapping = mapping === undefined ? "Y" : mapping;
        lineNum = lineNum === undefined ? "1" : lineNum;
        lineNum2 = lineNum2 === undefined ? "2" : lineNum2;
        lineNum3 = lineNum3 === undefined ? "3" : lineNum3;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleCvrLeftmenu);
        }).then(function () {
            that.eleCvrLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleCvrNameInput);
        }).then(function () {
            that.eleCvrNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleCvrMsgInput.clear().sendKeys(msg);
        }).then(function () {
            that.eleCvrBufInput.clear().sendKeys(buf);
        }).then(function () {
            that.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleCvrMaxBufSizeSpinner.clear().sendKeys(maxBufSize);
        }).then(function () {
            that._inputMsgTypeCvr(inputMsgType);
        }).then(function () {
            that._useSizeFromCvr(useSizeFrom);
        }).then(function () {
            if (mapping === "Y") {
                globalCommons.waitForClickable(that.eleCvrMappingButton).then(function () {
                    that.eleCvrMappingButton.click();
                }).then(function () {
                    that._mappingCvr(msgField, bufField, lineNum, req, system, trunc);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (msgField2) {
                that._mappingCvr(msgField2, bufField2, lineNum2, req2, system2, trunc2).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (msgField3) {
                that._mappingCvr(msgField3, bufField3, lineNum3, req3, system3, trunc3).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (mapping === "Y") {
                globalCommons.waitForClickable(that.eleCvrMappingFinishButton).then(function () {
                    that.eleCvrMappingFinishButton.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
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
    // Function to delete a Conversion Rule, then confirm the delete operation.
    //
    configurePage.prototype.delCvrYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleCvrLeftmenu);
        }).then(function () {
            that.eleCvrLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
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
    // Function to delete a Conversion Rule, then discard the delete operation.
    //
    configurePage.prototype.delCvrNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleCvrLeftmenu);
        }).then(function () {
            that.eleCvrLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
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
    // Function to replicate a Conversion Rule.
    //
    configurePage.prototype.replicateCvr = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleCvrLeftmenu);
        }).then(function () {
            that.eleCvrLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleDetailSlideBar);
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
    // Function to update a Conversion Rule.
    //
    configurePage.prototype.updateCvr = function (name, msg, buf, maxBufSize, inputMsgType, useSizeFrom) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        maxBufSize = maxBufSize || "0";
        inputMsgType = inputMsgType || "Bytes";
        useSizeFrom = useSizeFrom || "Message";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleCvrLeftmenu);
        }).then(function () {
            that.eleCvrLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleCvrNameInput);
        }).then(function () {
            that.eleCvrNameInput.clear().sendKeys(name);
        }).then(function () {
            return that.eleCvrMsgInput.getAttribute("readonly")
        }).then(function (message) {
            if (message !== "true") {
                that.eleCvrMsgInput.clear().sendKeys(msg).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleCvrBufInput.getAttribute("readonly")
        }).then(function (message) {
            if (message !== "true") {
                that.eleCvrBufInput.clear().sendKeys(buf).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            that.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleCvrMaxBufSizeSpinner.clear().sendKeys(maxBufSize);
        }).then(function () {
            that._inputMsgTypeCvr(inputMsgType);
        }).then(function () {
            that._useSizeFromCvr(useSizeFrom);
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
    // Function to cancel the changes of a Conversion Rule, then confirm the cancel operation.
    //
    configurePage.prototype.cancelCvrYes = function (name, msg, buf, maxBufSize, inputMsgType, useSizeFrom) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        maxBufSize = maxBufSize || "0";
        inputMsgType = inputMsgType || "Bytes";
        useSizeFrom = useSizeFrom || "Message";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleCvrLeftmenu);
        }).then(function () {
            that.eleCvrLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleCvrNameInput);
        }).then(function () {
            that.eleCvrNameInput.clear().sendKeys(name);
        }).then(function () {
            return that.eleCvrMsgInput.getAttribute("readonly")
        }).then(function (message) {
            if (message !== "true") {
                that.eleCvrMsgInput.clear().sendKeys(msg).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleCvrBufInput.getAttribute("readonly")
        }).then(function (message) {
            if (message !== "true") {
                that.eleCvrBufInput.clear().sendKeys(buf).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            that.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleCvrMaxBufSizeSpinner.clear().sendKeys(maxBufSize);
        }).then(function () {
            that._inputMsgTypeCvr(inputMsgType);
        }).then(function () {
            that._useSizeFromCvr(useSizeFrom);
        }).then(function () {
            globalCommons.waitForClickable(that.eleCancelButton);
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
    // Function to cancel the changes of a Conversion Rule, then discard the cancel operation.
    //
    configurePage.prototype.cancelCvrNo = function (name, msg, buf, maxBufSize, inputMsgType, useSizeFrom) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        maxBufSize = maxBufSize || "0";
        inputMsgType = inputMsgType || "Bytes";
        useSizeFrom = useSizeFrom || "Message";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleCvrLeftmenu);
        }).then(function () {
            that.eleCvrLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleCvrNameInput);
        }).then(function () {
            that.eleCvrNameInput.clear().sendKeys(name);
        }).then(function () {
            return that.eleCvrMsgInput.getAttribute("readonly")
        }).then(function (message) {
            if (message !== "true") {
                that.eleCvrMsgInput.clear().sendKeys(msg).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleCvrBufInput.getAttribute("readonly")
        }).then(function (message) {
            if (message !== "true") {
                that.eleCvrBufInput.clear().sendKeys(buf).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            that.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleCvrMaxBufSizeSpinner.clear().sendKeys(maxBufSize);
        }).then(function () {
            that._inputMsgTypeCvr(inputMsgType);
        }).then(function () {
            that._useSizeFromCvr(useSizeFrom);
        }).then(function () {
            globalCommons.waitForClickable(that.eleCancelButton);
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
    // Function to make changes to a Conversion Rule, then reset the Conversion Rule.
    //
    configurePage.prototype.resetCvr = function (name, msg, buf, maxBufSize, inputMsgType, useSizeFrom) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        maxBufSize = maxBufSize || "0";
        inputMsgType = inputMsgType || "Bytes";
        useSizeFrom = useSizeFrom || "Message";

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleCvrLeftmenu);
        }).then(function () {
            that.eleCvrLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleCvrNameInput);
        }).then(function () {
            that.eleCvrNameInput.clear().sendKeys(name);
        }).then(function () {
            return that.eleCvrMsgInput.getAttribute("readonly")
        }).then(function (message) {
            if (message !== "true") {
                that.eleCvrMsgInput.clear().sendKeys(msg).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleCvrBufInput.getAttribute("readonly")
        }).then(function (message) {
            if (message !== "true") {
                that.eleCvrBufInput.clear().sendKeys(buf).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            that.eleCvrMaxBufSizeSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleCvrMaxBufSizeSpinner.clear().sendKeys(maxBufSize);
        }).then(function () {
            that._inputMsgTypeCvr(inputMsgType);
        }).then(function () {
            that._useSizeFromCvr(useSizeFrom);
        }).then(function () {
            globalCommons.waitForClickable(that.eleResetButton);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    // Function to set 'Output Method' of a trigger
    //
    configurePage.prototype._outputMethodTrg = function (outputMethod) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleTrgOutputMethodDropdown).then(function () {
            return that.eleTrgOutputMethodDropdown.getText();
        }).then(function (message) {
            if (message === outputMethod) {
                deferred.fulfill();
            } else {
                that.eleTrgOutputMethodDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleTrgOutputMethodSelected(outputMethod));
                }).then(function () {
                    that.eleTrgOutputMethodSelected(outputMethod).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Requeue on Error' of a trigger
    // false: not selected
    // true: selected
    //
    configurePage.prototype._requeueOnErrorTrg = function (requeueOnError) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleTrgRequeueOnErrorCheck).then(function () {
            return that.eleTrgRequeueOnErrorCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (requeueOnError) {
                    that.eleTrgRequeueOnErrorCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (requeueOnError) {
                    deferred.fulfill();
                } else {
                    that.eleTrgRequeueOnErrorCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Publish Destination Type' of a trigger
    //
    configurePage.prototype._publishDestTypeTrg = function (publishDestType) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleTrgEmsPublishDestTypeDropdown).then(function () {
            return that.eleTrgEmsPublishDestTypeDropdown.getAttribute("disabled")
        }).then(function (message) {
            if (message === null) {
                return that.eleTrgEmsPublishDestTypeDropdown.getText().then(function (message) {
                    if (message === publishDestType) {
                        deferred.fulfill();
                    } else {
                        that.eleTrgEmsPublishDestTypeDropdown.click().then(function () {
                            globalCommons.waitForElementPresent(that.eleTrgEmsPublishDestTypeSelected(publishDestType));
                        }).then(function () {
                            that.eleTrgEmsPublishDestTypeSelected(publishDestType).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Reply-to Destination Type' of a trigger
    //
    configurePage.prototype._replyDestTypeTrg = function (replyDestType) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleTrgEmsReplyDestTypeDropdown).then(function () {
            return that.eleTrgEmsReplyDestTypeDropdown.getText();
        }).then(function (message) {
            if (message === replyDestType) {
                deferred.fulfill();
            } else {
                that.eleTrgEmsReplyDestTypeDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleTrgEmsReplyDestTypeSelected(replyDestType));
                }).then(function () {
                    that.eleTrgEmsReplyDestTypeSelected(replyDestType).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Error Message Destination Type' of a trigger
    //
    configurePage.prototype._errorMsgDestTypeTrg = function (errorDestType) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleTrgEmsErrorMsgDestTypeDropdown).then(function () {
            return that.eleTrgEmsErrorMsgDestTypeDropdown.getText();
        }).then(function (message) {
            if (message === errorDestType) {
                deferred.fulfill();
            } else {
                that.eleTrgEmsErrorMsgDestTypeDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleTrgEmsErrorMsgDestTypeSelected(errorDestType));
                }).then(function () {
                    that.eleTrgEmsErrorMsgDestTypeSelected(errorDestType).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'SMSL Mode' of a trigger
    //
    configurePage.prototype._smslModeTrg = function (smsl) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleTrgEmsSmslModeDropdown).then(function () {
            return that.eleTrgEmsSmslModeDropdown.getAttribute("disabled")
        }).then(function (message) {
            if (message === null) {
                return that.eleTrgEmsSmslModeDropdown.getText().then(function (message) {
                    if (message === smsl) {
                        deferred.fulfill();
                    } else {
                        that.eleTrgEmsSmslModeDropdown.click().then(function () {
                            globalCommons.waitForElementPresent(that.eleTrgEmsSmslModeSelected(smsl));
                        }).then(function () {
                            that.eleTrgEmsSmslModeSelected(smsl).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Delivery Mode' of a trigger
    //
    configurePage.prototype._deliveryModeTrg = function (delivery) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleTrgEmsDeliveryModeDropdown).then(function () {
            return that.eleTrgEmsDeliveryModeDropdown.getAttribute("disabled")
        }).then(function (message) {
            if (message === null) {
                return that.eleTrgEmsDeliveryModeDropdown.getText().then(function (message) {
                    if (message === delivery) {
                        deferred.fulfill();
                    } else {
                        that.eleTrgEmsDeliveryModeDropdown.click().then(function () {
                            globalCommons.waitForElementPresent(that.eleTrgEmsDeliveryModeSelected(delivery));
                        }).then(function () {
                            that.eleTrgEmsDeliveryModeSelected(delivery).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Priority' of a trigger output message
    // false: not selected
    // true: selected
    //
    configurePage.prototype._priorityOutputMsgTrg = function (priority) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleTrgOutputMsgPriorityCheck).then(function () {
            return that.eleTrgOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (priority) {
                    that.eleTrgOutputMsgPriorityCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (priority) {
                    deferred.fulfill();
                } else {
                    that.eleTrgOutputMsgPriorityCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Expiration' of a trigger output message
    // false: not selected
    // true: selected
    //
    configurePage.prototype._expirationOutputMsgTrg = function (expiration) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleTrgOutputMsgExpirationCheck).then(function () {
            return that.eleTrgOutputMsgExpirationCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (expiration) {
                    that.eleTrgOutputMsgExpirationCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (expiration) {
                    deferred.fulfill();
                } else {
                    that.eleTrgOutputMsgExpirationCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Unit' of a trigger output message expiration
    //
    configurePage.prototype._unitOutputMsgExpirationTrg = function (expirationUnit) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleTrgOutputMsgExpirationUnitDropdown).then(function () {
            return that.eleTrgOutputMsgExpirationUnitDropdown.getText();
        }).then(function (message) {
            if (message === expirationUnit) {
                deferred.fulfill();
            } else {
                that.eleTrgOutputMsgExpirationUnitDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleTrgOutputMsgExpirationUnitSelected(expirationUnit));
                }).then(function () {
                    that.eleTrgOutputMsgExpirationUnitSelected(expirationUnit).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Compression' of a trigger output message
    // false: not selected
    // true: selected
    //
    configurePage.prototype._compressionOutputMsgTrg = function (compression) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleTrgOutputMsgCompressionCheck).then(function () {
            return that.eleTrgOutputMsgCompressionCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (compression) {
                    that.eleTrgOutputMsgCompressionCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (compression) {
                    deferred.fulfill();
                } else {
                    that.eleTrgOutputMsgCompressionCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Preserve' of a trigger output message
    // false: not selected
    // true: selected
    //
    configurePage.prototype._preserveOutputMsgTrg = function (preserve) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleTrgOutputMsgPreserveCheck).then(function () {
            return that.eleTrgOutputMsgPreserveCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (preserve) {
                    that.eleTrgOutputMsgPreserveCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (preserve) {
                    deferred.fulfill();
                } else {
                    that.eleTrgOutputMsgPreserveCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Body Trace' of a trigger output message
    // false: not selected
    // true: selected
    //
    configurePage.prototype._bodyTraceOutputMsgTrg = function (bodyTrace) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleTrgOutputMsgBodyTraceCheck).then(function () {
            return that.eleTrgOutputMsgBodyTraceCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (bodyTrace) {
                    that.eleTrgOutputMsgBodyTraceCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (bodyTrace) {
                    deferred.fulfill();
                } else {
                    that.eleTrgOutputMsgBodyTraceCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Message Type' of a trigger output message
    //
    configurePage.prototype._msgTypeOutputMsgTrg = function (msgType) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleTrgOutputMsgMsgTypeDropdown).then(function () {
            return that.eleTrgOutputMsgMsgTypeDropdown.getText();
        }).then(function (message) {
            if (message === msgType) {
                deferred.fulfill();
            } else {
                that.eleTrgOutputMsgMsgTypeDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleTrgOutputMsgMsgTypeSelected(msgType));
                }).then(function () {
                    that.eleTrgOutputMsgMsgTypeSelected(msgType).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to add a trigger EMS property.
    //
    configurePage.prototype._addEmsPropertyTrg = function (propName, propType, propValue) {
        var deferred = protractor.promise.defer(), that = this;
        propType = propType === undefined ? "System" : propType;
        propName = propName === undefined ? "tibss-BES" : propName;
        propValue = propValue === undefined ? "" : propValue;

        globalCommons.waitForClickable(that.eleTrgEmsPropAddButton).then(function () {
            that.eleTrgEmsPropAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgEmsPropTypeDropdown);
        }).then(function () {
            return that.eleTrgEmsPropTypeDropdown.getText();
        }).then(function (message) {
            if (message !== propType) {
                that.eleTrgEmsPropTypeDropdown.click().then(function () {
                    globalCommons.waitForClickable(that.eleTrgEmsPropTypeSelected(propType));
                }).then(function () {
                    that.eleTrgEmsPropTypeSelected(propType).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (propType === "System") {
                globalCommons.waitForElementPresent(that.eleTrgEmsPropNameDropdown).then(function () {
                }).then(function () {
                    return that.eleTrgEmsPropNameDropdown.getText();
                }).then(function (message) {
                    if (message !== propName) {
                        that.eleTrgEmsPropNameDropdown.click().then(function () {
                            globalCommons.waitForClickable(that.eleTrgEmsPropNameSelected(propName));
                        }).then(function () {
                            that.eleTrgEmsPropNameSelected(propName).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                });
            }
        }).then(function () {
            if (propType === "Buffer") {
                globalCommons.waitForElementPresent(that.eleTrgEmsPropNameInput).then(function () {
                    that.eleTrgEmsPropNameInput.clear().sendKeys(propName);
                }).then(function () {
                    globalCommons.waitForClickable(that.eleTrgEmsPropValuePicklistButton);
                }).then(function () {
                    that.eleTrgEmsPropValuePicklistButton.click();
                }).then(function () {
                    globalCommons.waitForElementPresent(that.eleTrgEmsPropValueFromBufFieldSearchInput);
                }).then(function () {
                    that.eleTrgEmsPropValueFromBufFieldSearchInput.clear().sendKeys(propValue);
                }).then(function () {
                    globalCommons.waitForClickable(that.eleTrgEmsPropValueFromBufFieldSearchIcon);
                }).then(function () {
                    that.eleTrgEmsPropValueFromBufFieldSearchIcon.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleTrgEmsPropValueFromBufFieldSelected(propValue));
                }).then(function () {
                    that.eleTrgEmsPropValueFromBufFieldSelected(propValue).click();
                }).then(function () {
                    globalCommons.waitForClickable(that.eleTrgEmsPropValueFromBufFieldSelectButton);
                }).then(function () {
                    that.eleTrgEmsPropValueFromBufFieldSelectButton.click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (propType === "Value") {
                globalCommons.waitForElementPresent(that.eleTrgEmsPropNameInput).then(function () {
                    that.eleTrgEmsPropNameInput.clear().sendKeys(propName);
                }).then(function () {
                    that.eleTrgEmsPropValueInput.clear().sendKeys(propValue);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // Function to add a Trigger Service with EMS Connection.
    //
    configurePage.prototype.addTrgWithEms = function (name, desc, conn, outputCvr, disableOnErrorNum, disableOnErrorPercent, trclvl, outputMethod, serviceKeyLocatorStart, serviceKeyLocatorLength, ServiceKeyLocatorValue, requeueOnError, publishDest, publishDestType, dynamicDestLength, dynamicDestStart, publishDest2, replyDest, replyDestType, errorDest, errorDestType, smsl, delivery, priority, priorityValue, expiration, expirationValue, expirationUnit, compression, preserve, bodyTrace, msgType) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        outputMethod = outputMethod === undefined ? "Message" : outputMethod;
        serviceKeyLocatorStart = serviceKeyLocatorStart === undefined ? "0" : serviceKeyLocatorStart;
        serviceKeyLocatorLength = serviceKeyLocatorLength === undefined ? "0" : serviceKeyLocatorLength;
        ServiceKeyLocatorValue = ServiceKeyLocatorValue === undefined ? "" : ServiceKeyLocatorValue;
        publishDest = publishDest === undefined ? "tibss.trg.publishDestination" : publishDest;
        publishDestType = publishDestType === undefined ? "QUEUE" : publishDestType;
        dynamicDestLength = dynamicDestLength === undefined ? "0" : dynamicDestLength;
        dynamicDestStart = dynamicDestStart === undefined ? "0" : dynamicDestStart;
        publishDest2 = publishDest2 === undefined ? "" : publishDest2;
        replyDest = replyDest === undefined ? "" : replyDest;
        replyDestType = replyDestType === undefined ? "QUEUE" : replyDestType;
        errorDest = errorDest === undefined ? "" : errorDest;
        errorDestType = errorDestType === undefined ? "QUEUE" : errorDestType;
        smsl = smsl === undefined ? "Reliable No-Ack" : smsl;
        delivery = delivery === undefined ? "Persistent" : delivery;
        priorityValue = priorityValue === undefined ? "4" : priorityValue;
        expirationValue = expirationValue === undefined ? "0" : expirationValue;
        expirationUnit = expirationUnit === undefined ? "Seconds" : expirationUnit;
        msgType = msgType === undefined ? "Bytes" : msgType;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleTrgLeftmenu);
        }).then(function () {
            that.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleTrgNameInput);
        }).then(function () {
            that.eleTrgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleTrgDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleTrgConnInput.clear().sendKeys(conn);
        }).then(function () {
            that.eleTrgOutputConversionInput.clear().sendKeys(outputCvr);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._outputMethodTrg(outputMethod);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys(serviceKeyLocatorStart);
        }).then(function () {
            that.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys(serviceKeyLocatorLength);
        }).then(function () {
            that.eleTrgServiceKeyLocatorValueInput.clear().sendKeys(ServiceKeyLocatorValue);
        }).then(function () {
            that._requeueOnErrorTrg(requeueOnError);
        }).then(function () {
            return that.eleTrgEmsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgEmsDetailsExtension);
        }).then(function () {
            return that.eleTrgEmsPublishDestInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgEmsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgEmsPublishDestInput);
        }).then(function () {
            that.eleTrgEmsPublishDestInput.clear().sendKeys(publishDest);
        }).then(function () {
            that._publishDestTypeTrg(publishDestType);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixLengthSpinner.clear().sendKeys(dynamicDestLength);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixStartSpinner.clear().sendKeys(dynamicDestStart);
        }).then(function () {
            that.eleTrgEmsPublishDest2Input.clear().sendKeys(publishDest2);
        }).then(function () {
            that.eleTrgEmsReplyDestInput.clear().sendKeys(replyDest);
        }).then(function () {
            that._replyDestTypeTrg(replyDestType);
        }).then(function () {
            that.eleTrgEmsErrorMsgDestInput.clear().sendKeys(errorDest);
        }).then(function () {
            that._errorMsgDestTypeTrg(errorDestType);
        }).then(function () {
            that._smslModeTrg(smsl);
        }).then(function () {
            that._deliveryModeTrg(delivery);
        }).then(function () {
            that._priorityOutputMsgTrg(priority);
        }).then(function () {
            that.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys(priorityValue);
        }).then(function () {
            that._expirationOutputMsgTrg(expiration);
        }).then(function () {
            that.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys(expirationValue);
        }).then(function () {
            that._unitOutputMsgExpirationTrg(expirationUnit);
        }).then(function () {
            that._compressionOutputMsgTrg(compression);
        }).then(function () {
            that._preserveOutputMsgTrg(preserve);
        }).then(function () {
            that._bodyTraceOutputMsgTrg(bodyTrace);
        }).then(function () {
            that._msgTypeOutputMsgTrg(msgType);
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
    // Function to delete a Trigger Service, then confirm the delete operation.
    //
    configurePage.prototype.delTrgYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleTrgLeftmenu);
        }).then(function () {
            that.eleTrgLeftmenu.click();
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
    // Function to delete a Trigger Service, then discard the delete operation.
    //
    configurePage.prototype.delTrgNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleTrgLeftmenu);
        }).then(function () {
            that.eleTrgLeftmenu.click();
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
    // Function to replicate a Trigger.
    //
    configurePage.prototype.replicateTrg = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleTrgLeftmenu);
        }).then(function () {
            that.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleDetailSlideBar);
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
    // Function to update a Trigger with EMS Connection.
    //
    configurePage.prototype.updateTrgWithEms = function (name, desc, conn, outputCvr, disableOnErrorNum, disableOnErrorPercent, trclvl, outputMethod, serviceKeyLocatorStart, serviceKeyLocatorLength, ServiceKeyLocatorValue, requeueOnError, publishDest, publishDestType, dynamicDestLength, dynamicDestStart, publishDest2, replyDest, replyDestType, errorDest, errorDestType, smsl, delivery, priority, priorityValue, expiration, expirationValue, expirationUnit, compression, preserve, bodyTrace, msgType) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        outputMethod = outputMethod === undefined ? "Message" : outputMethod;
        serviceKeyLocatorStart = serviceKeyLocatorStart === undefined ? "0" : serviceKeyLocatorStart;
        serviceKeyLocatorLength = serviceKeyLocatorLength === undefined ? "0" : serviceKeyLocatorLength;
        ServiceKeyLocatorValue = ServiceKeyLocatorValue === undefined ? "" : ServiceKeyLocatorValue;
        publishDest = publishDest === undefined ? "tibss.trg.publishDestination" : publishDest;
        publishDestType = publishDestType === undefined ? "QUEUE" : publishDestType;
        dynamicDestLength = dynamicDestLength === undefined ? "0" : dynamicDestLength;
        dynamicDestStart = dynamicDestStart === undefined ? "0" : dynamicDestStart;
        publishDest2 = publishDest2 === undefined ? "" : publishDest2;
        replyDest = replyDest === undefined ? "" : replyDest;
        replyDestType = replyDestType === undefined ? "QUEUE" : replyDestType;
        errorDest = errorDest === undefined ? "" : errorDest;
        errorDestType = errorDestType === undefined ? "QUEUE" : errorDestType;
        smsl = smsl === undefined ? "Reliable No-Ack" : smsl;
        delivery = delivery === undefined ? "Persistent" : delivery;
        priorityValue = priorityValue === undefined ? "4" : priorityValue;
        expirationValue = expirationValue === undefined ? "0" : expirationValue;
        expirationUnit = expirationUnit === undefined ? "Seconds" : expirationUnit;
        msgType = msgType === undefined ? "Bytes" : msgType;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleTrgLeftmenu);
        }).then(function () {
            that.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleTrgNameInput);
        }).then(function () {
            that.eleTrgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleTrgDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleTrgConnInput.clear().sendKeys(conn);
        }).then(function () {
            that.eleTrgOutputConversionInput.clear().sendKeys(outputCvr);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._outputMethodTrg(outputMethod);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys(serviceKeyLocatorStart);
        }).then(function () {
            that.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys(serviceKeyLocatorLength);
        }).then(function () {
            that.eleTrgServiceKeyLocatorValueInput.clear().sendKeys(ServiceKeyLocatorValue);
        }).then(function () {
            that._requeueOnErrorTrg(requeueOnError);
        }).then(function () {
            return that.eleTrgEmsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgEmsDetailsExtension);
        }).then(function () {
            return that.eleTrgEmsPublishDestInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgEmsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgEmsPublishDestInput);
        }).then(function () {
            that.eleTrgEmsPublishDestInput.clear().sendKeys(publishDest);
        }).then(function () {
            that._publishDestTypeTrg(publishDestType);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixLengthSpinner.clear().sendKeys(dynamicDestLength);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixStartSpinner.clear().sendKeys(dynamicDestStart);
        }).then(function () {
            that.eleTrgEmsPublishDest2Input.clear().sendKeys(publishDest2);
        }).then(function () {
            that.eleTrgEmsReplyDestInput.clear().sendKeys(replyDest);
        }).then(function () {
            that._replyDestTypeTrg(replyDestType);
        }).then(function () {
            that.eleTrgEmsErrorMsgDestInput.clear().sendKeys(errorDest);
        }).then(function () {
            that._errorMsgDestTypeTrg(errorDestType);
        }).then(function () {
            that._smslModeTrg(smsl);
        }).then(function () {
            that._deliveryModeTrg(delivery);
        }).then(function () {
            that._priorityOutputMsgTrg(priority);
        }).then(function () {
            that.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys(priorityValue);
        }).then(function () {
            that._expirationOutputMsgTrg(expiration);
        }).then(function () {
            that.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys(expirationValue);
        }).then(function () {
            that._unitOutputMsgExpirationTrg(expirationUnit);
        }).then(function () {
            that._compressionOutputMsgTrg(compression);
        }).then(function () {
            that._preserveOutputMsgTrg(preserve);
        }).then(function () {
            that._bodyTraceOutputMsgTrg(bodyTrace);
        }).then(function () {
            that._msgTypeOutputMsgTrg(msgType);
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
    // Function to cancel the changes of a Trigger with EMS Connection, then confirm the cancel operation.
    //
    configurePage.prototype.cancelTrgWithEmsYes = function (name, desc, conn, outputCvr, disableOnErrorNum, disableOnErrorPercent, trclvl, outputMethod, serviceKeyLocatorStart, serviceKeyLocatorLength, ServiceKeyLocatorValue, requeueOnError, publishDest, publishDestType, dynamicDestLength, dynamicDestStart, publishDest2, replyDest, replyDestType, errorDest, errorDestType, smsl, delivery, priority, priorityValue, expiration, expirationValue, expirationUnit, compression, preserve, bodyTrace, msgType) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        outputMethod = outputMethod === undefined ? "Message" : outputMethod;
        serviceKeyLocatorStart = serviceKeyLocatorStart === undefined ? "0" : serviceKeyLocatorStart;
        serviceKeyLocatorLength = serviceKeyLocatorLength === undefined ? "0" : serviceKeyLocatorLength;
        ServiceKeyLocatorValue = ServiceKeyLocatorValue === undefined ? "" : ServiceKeyLocatorValue;
        publishDest = publishDest === undefined ? "tibss.trg.publishDestination" : publishDest;
        publishDestType = publishDestType === undefined ? "QUEUE" : publishDestType;
        dynamicDestLength = dynamicDestLength === undefined ? "0" : dynamicDestLength;
        dynamicDestStart = dynamicDestStart === undefined ? "0" : dynamicDestStart;
        publishDest2 = publishDest2 === undefined ? "" : publishDest2;
        replyDest = replyDest === undefined ? "" : replyDest;
        replyDestType = replyDestType === undefined ? "QUEUE" : replyDestType;
        errorDest = errorDest === undefined ? "" : errorDest;
        errorDestType = errorDestType === undefined ? "QUEUE" : errorDestType;
        smsl = smsl === undefined ? "Reliable No-Ack" : smsl;
        delivery = delivery === undefined ? "Persistent" : delivery;
        priorityValue = priorityValue === undefined ? "4" : priorityValue;
        expirationValue = expirationValue === undefined ? "0" : expirationValue;
        expirationUnit = expirationUnit === undefined ? "Seconds" : expirationUnit;
        msgType = msgType === undefined ? "Bytes" : msgType;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleTrgLeftmenu);
        }).then(function () {
            that.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleTrgNameInput);
        }).then(function () {
            that.eleTrgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleTrgDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleTrgConnInput.clear().sendKeys(conn);
        }).then(function () {
            that.eleTrgOutputConversionInput.clear().sendKeys(outputCvr);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._outputMethodTrg(outputMethod);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys(serviceKeyLocatorStart);
        }).then(function () {
            that.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys(serviceKeyLocatorLength);
        }).then(function () {
            that.eleTrgServiceKeyLocatorValueInput.clear().sendKeys(ServiceKeyLocatorValue);
        }).then(function () {
            that._requeueOnErrorTrg(requeueOnError);
        }).then(function () {
            return that.eleTrgEmsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgEmsDetailsExtension);
        }).then(function () {
            return that.eleTrgEmsPublishDestInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgEmsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgEmsPublishDestInput);
        }).then(function () {
            that.eleTrgEmsPublishDestInput.clear().sendKeys(publishDest);
        }).then(function () {
            that._publishDestTypeTrg(publishDestType);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixLengthSpinner.clear().sendKeys(dynamicDestLength);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixStartSpinner.clear().sendKeys(dynamicDestStart);
        }).then(function () {
            that.eleTrgEmsPublishDest2Input.clear().sendKeys(publishDest2);
        }).then(function () {
            that.eleTrgEmsReplyDestInput.clear().sendKeys(replyDest);
        }).then(function () {
            that._replyDestTypeTrg(replyDestType);
        }).then(function () {
            that.eleTrgEmsErrorMsgDestInput.clear().sendKeys(errorDest);
        }).then(function () {
            that._errorMsgDestTypeTrg(errorDestType);
        }).then(function () {
            that._smslModeTrg(smsl);
        }).then(function () {
            that._deliveryModeTrg(delivery);
        }).then(function () {
            that._priorityOutputMsgTrg(priority);
        }).then(function () {
            that.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys(priorityValue);
        }).then(function () {
            that._expirationOutputMsgTrg(expiration);
        }).then(function () {
            that.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys(expirationValue);
        }).then(function () {
            that._unitOutputMsgExpirationTrg(expirationUnit);
        }).then(function () {
            that._compressionOutputMsgTrg(compression);
        }).then(function () {
            that._preserveOutputMsgTrg(preserve);
        }).then(function () {
            that._bodyTraceOutputMsgTrg(bodyTrace);
        }).then(function () {
            that._msgTypeOutputMsgTrg(msgType);
        }).then(function () {
            globalCommons.waitForClickable(that.eleCancelButton);
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
    // Function to cancel the changes of a Trigger with EMS Connection, then discard the cancel operation.
    //
    configurePage.prototype.cancelTrgWithEmsNo = function (name, desc, conn, outputCvr, disableOnErrorNum, disableOnErrorPercent, trclvl, outputMethod, serviceKeyLocatorStart, serviceKeyLocatorLength, ServiceKeyLocatorValue, requeueOnError, publishDest, publishDestType, dynamicDestLength, dynamicDestStart, publishDest2, replyDest, replyDestType, errorDest, errorDestType, smsl, delivery, priority, priorityValue, expiration, expirationValue, expirationUnit, compression, preserve, bodyTrace, msgType) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        outputMethod = outputMethod === undefined ? "Message" : outputMethod;
        serviceKeyLocatorStart = serviceKeyLocatorStart === undefined ? "0" : serviceKeyLocatorStart;
        serviceKeyLocatorLength = serviceKeyLocatorLength === undefined ? "0" : serviceKeyLocatorLength;
        ServiceKeyLocatorValue = ServiceKeyLocatorValue === undefined ? "" : ServiceKeyLocatorValue;
        publishDest = publishDest === undefined ? "tibss.trg.publishDestination" : publishDest;
        publishDestType = publishDestType === undefined ? "QUEUE" : publishDestType;
        dynamicDestLength = dynamicDestLength === undefined ? "0" : dynamicDestLength;
        dynamicDestStart = dynamicDestStart === undefined ? "0" : dynamicDestStart;
        publishDest2 = publishDest2 === undefined ? "" : publishDest2;
        replyDest = replyDest === undefined ? "" : replyDest;
        replyDestType = replyDestType === undefined ? "QUEUE" : replyDestType;
        errorDest = errorDest === undefined ? "" : errorDest;
        errorDestType = errorDestType === undefined ? "QUEUE" : errorDestType;
        smsl = smsl === undefined ? "Reliable No-Ack" : smsl;
        delivery = delivery === undefined ? "Persistent" : delivery;
        priorityValue = priorityValue === undefined ? "4" : priorityValue;
        expirationValue = expirationValue === undefined ? "0" : expirationValue;
        expirationUnit = expirationUnit === undefined ? "Seconds" : expirationUnit;
        msgType = msgType === undefined ? "Bytes" : msgType;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleTrgLeftmenu);
        }).then(function () {
            that.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleTrgNameInput);
        }).then(function () {
            that.eleTrgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleTrgDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleTrgConnInput.clear().sendKeys(conn);
        }).then(function () {
            that.eleTrgOutputConversionInput.clear().sendKeys(outputCvr);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._outputMethodTrg(outputMethod);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys(serviceKeyLocatorStart);
        }).then(function () {
            that.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys(serviceKeyLocatorLength);
        }).then(function () {
            that.eleTrgServiceKeyLocatorValueInput.clear().sendKeys(ServiceKeyLocatorValue);
        }).then(function () {
            that._requeueOnErrorTrg(requeueOnError);
        }).then(function () {
            return that.eleTrgEmsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgEmsDetailsExtension);
        }).then(function () {
            return that.eleTrgEmsPublishDestInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgEmsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgEmsPublishDestInput);
        }).then(function () {
            that.eleTrgEmsPublishDestInput.clear().sendKeys(publishDest);
        }).then(function () {
            that._publishDestTypeTrg(publishDestType);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixLengthSpinner.clear().sendKeys(dynamicDestLength);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixStartSpinner.clear().sendKeys(dynamicDestStart);
        }).then(function () {
            that.eleTrgEmsPublishDest2Input.clear().sendKeys(publishDest2);
        }).then(function () {
            that.eleTrgEmsReplyDestInput.clear().sendKeys(replyDest);
        }).then(function () {
            that._replyDestTypeTrg(replyDestType);
        }).then(function () {
            that.eleTrgEmsErrorMsgDestInput.clear().sendKeys(errorDest);
        }).then(function () {
            that._errorMsgDestTypeTrg(errorDestType);
        }).then(function () {
            that._smslModeTrg(smsl);
        }).then(function () {
            that._deliveryModeTrg(delivery);
        }).then(function () {
            that._priorityOutputMsgTrg(priority);
        }).then(function () {
            that.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys(priorityValue);
        }).then(function () {
            that._expirationOutputMsgTrg(expiration);
        }).then(function () {
            that.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys(expirationValue);
        }).then(function () {
            that._unitOutputMsgExpirationTrg(expirationUnit);
        }).then(function () {
            that._compressionOutputMsgTrg(compression);
        }).then(function () {
            that._preserveOutputMsgTrg(preserve);
        }).then(function () {
            that._bodyTraceOutputMsgTrg(bodyTrace);
        }).then(function () {
            that._msgTypeOutputMsgTrg(msgType);
        }).then(function () {
            globalCommons.waitForClickable(that.eleCancelButton);
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
    // Function to make changes to a Trigger with EMS Connection, then reset the Trigger.
    //
    configurePage.prototype.resetTrgWithEms = function (name, desc, conn, outputCvr, disableOnErrorNum, disableOnErrorPercent, trclvl, outputMethod, serviceKeyLocatorStart, serviceKeyLocatorLength, ServiceKeyLocatorValue, requeueOnError, publishDest, publishDestType, dynamicDestLength, dynamicDestStart, publishDest2, replyDest, replyDestType, errorDest, errorDestType, smsl, delivery, priority, priorityValue, expiration, expirationValue, expirationUnit, compression, preserve, bodyTrace, msgType) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        outputMethod = outputMethod === undefined ? "Message" : outputMethod;
        serviceKeyLocatorStart = serviceKeyLocatorStart === undefined ? "0" : serviceKeyLocatorStart;
        serviceKeyLocatorLength = serviceKeyLocatorLength === undefined ? "0" : serviceKeyLocatorLength;
        ServiceKeyLocatorValue = ServiceKeyLocatorValue === undefined ? "" : ServiceKeyLocatorValue;
        publishDest = publishDest === undefined ? "tibss.trg.publishDestination" : publishDest;
        publishDestType = publishDestType === undefined ? "QUEUE" : publishDestType;
        dynamicDestLength = dynamicDestLength === undefined ? "0" : dynamicDestLength;
        dynamicDestStart = dynamicDestStart === undefined ? "0" : dynamicDestStart;
        publishDest2 = publishDest2 === undefined ? "" : publishDest2;
        replyDest = replyDest === undefined ? "" : replyDest;
        replyDestType = replyDestType === undefined ? "QUEUE" : replyDestType;
        errorDest = errorDest === undefined ? "" : errorDest;
        errorDestType = errorDestType === undefined ? "QUEUE" : errorDestType;
        smsl = smsl === undefined ? "Reliable No-Ack" : smsl;
        delivery = delivery === undefined ? "Persistent" : delivery;
        priorityValue = priorityValue === undefined ? "4" : priorityValue;
        expirationValue = expirationValue === undefined ? "0" : expirationValue;
        expirationUnit = expirationUnit === undefined ? "Seconds" : expirationUnit;
        msgType = msgType === undefined ? "Bytes" : msgType;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleTrgLeftmenu);
        }).then(function () {
            that.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleTrgNameInput);
        }).then(function () {
            that.eleTrgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleTrgDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleTrgConnInput.clear().sendKeys(conn);
        }).then(function () {
            that.eleTrgOutputConversionInput.clear().sendKeys(outputCvr);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._outputMethodTrg(outputMethod);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys(serviceKeyLocatorStart);
        }).then(function () {
            that.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys(serviceKeyLocatorLength);
        }).then(function () {
            that.eleTrgServiceKeyLocatorValueInput.clear().sendKeys(ServiceKeyLocatorValue);
        }).then(function () {
            that._requeueOnErrorTrg(requeueOnError);
        }).then(function () {
            return that.eleTrgEmsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgEmsDetailsExtension);
        }).then(function () {
            return that.eleTrgEmsPublishDestInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgEmsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgEmsPublishDestInput);
        }).then(function () {
            that.eleTrgEmsPublishDestInput.clear().sendKeys(publishDest);
        }).then(function () {
            that._publishDestTypeTrg(publishDestType);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixLengthSpinner.clear().sendKeys(dynamicDestLength);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgEmsDynamicDestSuffixStartSpinner.clear().sendKeys(dynamicDestStart);
        }).then(function () {
            that.eleTrgEmsPublishDest2Input.clear().sendKeys(publishDest2);
        }).then(function () {
            that.eleTrgEmsReplyDestInput.clear().sendKeys(replyDest);
        }).then(function () {
            that._replyDestTypeTrg(replyDestType);
        }).then(function () {
            that.eleTrgEmsErrorMsgDestInput.clear().sendKeys(errorDest);
        }).then(function () {
            that._errorMsgDestTypeTrg(errorDestType);
        }).then(function () {
            that._smslModeTrg(smsl);
        }).then(function () {
            that._deliveryModeTrg(delivery);
        }).then(function () {
            that._priorityOutputMsgTrg(priority);
        }).then(function () {
            that.eleTrgOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgOutputMsgPriorityValueSpinner.clear().sendKeys(priorityValue);
        }).then(function () {
            that._expirationOutputMsgTrg(expiration);
        }).then(function () {
            that.eleTrgOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgOutputMsgExpirationValueSpinner.clear().sendKeys(expirationValue);
        }).then(function () {
            that._unitOutputMsgExpirationTrg(expirationUnit);
        }).then(function () {
            that._compressionOutputMsgTrg(compression);
        }).then(function () {
            that._preserveOutputMsgTrg(preserve);
        }).then(function () {
            that._bodyTraceOutputMsgTrg(bodyTrace);
        }).then(function () {
            that._msgTypeOutputMsgTrg(msgType);
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
    // Function to add a Trigger Service with RV Connection.
    //
    configurePage.prototype.addTrgWithRv = function (name, desc, conn, outputCvr, disableOnErrorNum, disableOnErrorPercent, trclvl, outputMethod, serviceKeyLocatorStart, serviceKeyLocatorLength, ServiceKeyLocatorValue, requeueOnError, publishSubj, dynamicSubjLength, dynamicSubjStart, publishSubj2, replySubj, errorSubj) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        outputMethod = outputMethod === undefined ? "Message" : outputMethod;
        serviceKeyLocatorStart = serviceKeyLocatorStart === undefined ? "0" : serviceKeyLocatorStart;
        serviceKeyLocatorLength = serviceKeyLocatorLength === undefined ? "0" : serviceKeyLocatorLength;
        ServiceKeyLocatorValue = ServiceKeyLocatorValue === undefined ? "" : ServiceKeyLocatorValue;
        publishSubj = publishSubj === undefined ? "tibss.trg.publishSubject" : publishSubj;
        dynamicSubjLength = dynamicSubjLength === undefined ? "0" : dynamicSubjLength;
        dynamicSubjStart = dynamicSubjStart === undefined ? "0" : dynamicSubjStart;
        publishSubj2 = publishSubj2 === undefined ? "" : publishSubj2;
        replySubj = replySubj === undefined ? "" : replySubj;
        errorSubj = errorSubj === errorSubj ? "" : errorSubj;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleTrgLeftmenu);
        }).then(function () {
            that.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleTrgNameInput);
        }).then(function () {
            that.eleTrgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleTrgDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleTrgConnInput.clear().sendKeys(conn);
        }).then(function () {
            that.eleTrgOutputConversionInput.clear().sendKeys(outputCvr);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._outputMethodTrg(outputMethod);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys(serviceKeyLocatorStart);
        }).then(function () {
            that.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys(serviceKeyLocatorLength);
        }).then(function () {
            that.eleTrgServiceKeyLocatorValueInput.clear().sendKeys(ServiceKeyLocatorValue);
        }).then(function () {
            that._requeueOnErrorTrg(requeueOnError);
        }).then(function () {
            return that.eleTrgRvDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgRvDetailsExtension);
        }).then(function () {
            return that.eleTrgRvPublishSubjectInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgRvDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgRvPublishSubjectInput);
        }).then(function () {
            that.eleTrgRvPublishSubjectInput.clear().sendKeys(publishSubj);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixLengthSpinner.clear().sendKeys(dynamicSubjLength);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixStartSpinner.clear().sendKeys(dynamicSubjStart);
        }).then(function () {
            that.eleTrgRvPublishSubject2Input.clear().sendKeys(publishSubj2);
        }).then(function () {
            that.eleTrgRvReplySubjectInput.clear().sendKeys(replySubj);
        }).then(function () {
            that.eleTrgRvErrorMsgSubjectInput.clear().sendKeys(errorSubj);
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
    // Function to update a Trigger with RV Connection.
    //
    configurePage.prototype.updateTrgWithRv = function (name, desc, conn, outputCvr, disableOnErrorNum, disableOnErrorPercent, trclvl, outputMethod, serviceKeyLocatorStart, serviceKeyLocatorLength, ServiceKeyLocatorValue, requeueOnError, publishSubj, dynamicSubjLength, dynamicSubjStart, publishSubj2, replySubj, errorSubj) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        outputMethod = outputMethod === undefined ? "Message" : outputMethod;
        serviceKeyLocatorStart = serviceKeyLocatorStart === undefined ? "0" : serviceKeyLocatorStart;
        serviceKeyLocatorLength = serviceKeyLocatorLength === undefined ? "0" : serviceKeyLocatorLength;
        ServiceKeyLocatorValue = ServiceKeyLocatorValue === undefined ? "" : ServiceKeyLocatorValue;
        publishSubj = publishSubj === undefined ? "tibss.trg.publishSubject" : publishSubj;
        dynamicSubjLength = dynamicSubjLength === undefined ? "0" : dynamicSubjLength;
        dynamicSubjStart = dynamicSubjStart === undefined ? "0" : dynamicSubjStart;
        publishSubj2 = publishSubj2 === undefined ? "" : publishSubj2;
        replySubj = replySubj === undefined ? "" : replySubj;
        errorSubj = errorSubj === errorSubj ? "" : errorSubj;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleTrgLeftmenu);
        }).then(function () {
            that.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleTrgNameInput);
        }).then(function () {
            that.eleTrgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleTrgDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleTrgConnInput.clear().sendKeys(conn);
        }).then(function () {
            that.eleTrgOutputConversionInput.clear().sendKeys(outputCvr);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._outputMethodTrg(outputMethod);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys(serviceKeyLocatorStart);
        }).then(function () {
            that.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys(serviceKeyLocatorLength);
        }).then(function () {
            that.eleTrgServiceKeyLocatorValueInput.clear().sendKeys(ServiceKeyLocatorValue);
        }).then(function () {
            that._requeueOnErrorTrg(requeueOnError);
        }).then(function () {
            return that.eleTrgRvDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgRvDetailsExtension);
        }).then(function () {
            return that.eleTrgRvPublishSubjectInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgRvDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgRvPublishSubjectInput);
        }).then(function () {
            that.eleTrgRvPublishSubjectInput.clear().sendKeys(publishSubj);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixLengthSpinner.clear().sendKeys(dynamicSubjLength);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixStartSpinner.clear().sendKeys(dynamicSubjStart);
        }).then(function () {
            that.eleTrgRvPublishSubject2Input.clear().sendKeys(publishSubj2);
        }).then(function () {
            that.eleTrgRvReplySubjectInput.clear().sendKeys(replySubj);
        }).then(function () {
            that.eleTrgRvErrorMsgSubjectInput.clear().sendKeys(errorSubj);
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
    // Function to cancel the changes of a Trigger with RV Connection, then confirm the cancel operation.
    //
    configurePage.prototype.cancelTrgWithRvYes = function (name, desc, conn, outputCvr, disableOnErrorNum, disableOnErrorPercent, trclvl, outputMethod, serviceKeyLocatorStart, serviceKeyLocatorLength, ServiceKeyLocatorValue, requeueOnError, publishSubj, dynamicSubjLength, dynamicSubjStart, publishSubj2, replySubj, errorSubj) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        outputMethod = outputMethod === undefined ? "Message" : outputMethod;
        serviceKeyLocatorStart = serviceKeyLocatorStart === undefined ? "0" : serviceKeyLocatorStart;
        serviceKeyLocatorLength = serviceKeyLocatorLength === undefined ? "0" : serviceKeyLocatorLength;
        ServiceKeyLocatorValue = ServiceKeyLocatorValue === undefined ? "" : ServiceKeyLocatorValue;
        publishSubj = publishSubj === undefined ? "tibss.trg.publishSubject" : publishSubj;
        dynamicSubjLength = dynamicSubjLength === undefined ? "0" : dynamicSubjLength;
        dynamicSubjStart = dynamicSubjStart === undefined ? "0" : dynamicSubjStart;
        publishSubj2 = publishSubj2 === undefined ? "" : publishSubj2;
        replySubj = replySubj === undefined ? "" : replySubj;
        errorSubj = errorSubj === errorSubj ? "" : errorSubj;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleTrgLeftmenu);
        }).then(function () {
            that.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleTrgNameInput);
        }).then(function () {
            that.eleTrgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleTrgDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleTrgConnInput.clear().sendKeys(conn);
        }).then(function () {
            that.eleTrgOutputConversionInput.clear().sendKeys(outputCvr);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._outputMethodTrg(outputMethod);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys(serviceKeyLocatorStart);
        }).then(function () {
            that.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys(serviceKeyLocatorLength);
        }).then(function () {
            that.eleTrgServiceKeyLocatorValueInput.clear().sendKeys(ServiceKeyLocatorValue);
        }).then(function () {
            that._requeueOnErrorTrg(requeueOnError);
        }).then(function () {
            return that.eleTrgRvDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgRvDetailsExtension);
        }).then(function () {
            return that.eleTrgRvPublishSubjectInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgRvDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgRvPublishSubjectInput);
        }).then(function () {
            that.eleTrgRvPublishSubjectInput.clear().sendKeys(publishSubj);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixLengthSpinner.clear().sendKeys(dynamicSubjLength);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixStartSpinner.clear().sendKeys(dynamicSubjStart);
        }).then(function () {
            that.eleTrgRvPublishSubject2Input.clear().sendKeys(publishSubj2);
        }).then(function () {
            that.eleTrgRvReplySubjectInput.clear().sendKeys(replySubj);
        }).then(function () {
            that.eleTrgRvErrorMsgSubjectInput.clear().sendKeys(errorSubj);
        }).then(function () {
            globalCommons.waitForClickable(that.eleCancelButton);
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
    // Function to cancel the changes of a Trigger with RV Connection, then discard the cancel operation.
    //
    configurePage.prototype.cancelTrgWithRvNo = function (name, desc, conn, outputCvr, disableOnErrorNum, disableOnErrorPercent, trclvl, outputMethod, serviceKeyLocatorStart, serviceKeyLocatorLength, ServiceKeyLocatorValue, requeueOnError, publishSubj, dynamicSubjLength, dynamicSubjStart, publishSubj2, replySubj, errorSubj) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        outputMethod = outputMethod === undefined ? "Message" : outputMethod;
        serviceKeyLocatorStart = serviceKeyLocatorStart === undefined ? "0" : serviceKeyLocatorStart;
        serviceKeyLocatorLength = serviceKeyLocatorLength === undefined ? "0" : serviceKeyLocatorLength;
        ServiceKeyLocatorValue = ServiceKeyLocatorValue === undefined ? "" : ServiceKeyLocatorValue;
        publishSubj = publishSubj === undefined ? "tibss.trg.publishSubject" : publishSubj;
        dynamicSubjLength = dynamicSubjLength === undefined ? "0" : dynamicSubjLength;
        dynamicSubjStart = dynamicSubjStart === undefined ? "0" : dynamicSubjStart;
        publishSubj2 = publishSubj2 === undefined ? "" : publishSubj2;
        replySubj = replySubj === undefined ? "" : replySubj;
        errorSubj = errorSubj === errorSubj ? "" : errorSubj;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleTrgLeftmenu);
        }).then(function () {
            that.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleTrgNameInput);
        }).then(function () {
            that.eleTrgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleTrgDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleTrgConnInput.clear().sendKeys(conn);
        }).then(function () {
            that.eleTrgOutputConversionInput.clear().sendKeys(outputCvr);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._outputMethodTrg(outputMethod);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys(serviceKeyLocatorStart);
        }).then(function () {
            that.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys(serviceKeyLocatorLength);
        }).then(function () {
            that.eleTrgServiceKeyLocatorValueInput.clear().sendKeys(ServiceKeyLocatorValue);
        }).then(function () {
            that._requeueOnErrorTrg(requeueOnError);
        }).then(function () {
            return that.eleTrgRvDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgRvDetailsExtension);
        }).then(function () {
            return that.eleTrgRvPublishSubjectInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgRvDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgRvPublishSubjectInput);
        }).then(function () {
            that.eleTrgRvPublishSubjectInput.clear().sendKeys(publishSubj);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixLengthSpinner.clear().sendKeys(dynamicSubjLength);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixStartSpinner.clear().sendKeys(dynamicSubjStart);
        }).then(function () {
            that.eleTrgRvPublishSubject2Input.clear().sendKeys(publishSubj2);
        }).then(function () {
            that.eleTrgRvReplySubjectInput.clear().sendKeys(replySubj);
        }).then(function () {
            that.eleTrgRvErrorMsgSubjectInput.clear().sendKeys(errorSubj);
        }).then(function () {
            globalCommons.waitForClickable(that.eleCancelButton);
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
    // Function to make changes to a Trigger with RV Connection, then reset the Trigger.
    //
    configurePage.prototype.resetTrgWithRv = function (name, desc, conn, outputCvr, disableOnErrorNum, disableOnErrorPercent, trclvl, outputMethod, serviceKeyLocatorStart, serviceKeyLocatorLength, ServiceKeyLocatorValue, requeueOnError, publishSubj, dynamicSubjLength, dynamicSubjStart, publishSubj2, replySubj, errorSubj) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        desc = desc === undefined ? "" : desc;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        outputMethod = outputMethod === undefined ? "Message" : outputMethod;
        serviceKeyLocatorStart = serviceKeyLocatorStart === undefined ? "0" : serviceKeyLocatorStart;
        serviceKeyLocatorLength = serviceKeyLocatorLength === undefined ? "0" : serviceKeyLocatorLength;
        ServiceKeyLocatorValue = ServiceKeyLocatorValue === undefined ? "" : ServiceKeyLocatorValue;
        publishSubj = publishSubj === undefined ? "tibss.trg.publishSubject" : publishSubj;
        dynamicSubjLength = dynamicSubjLength === undefined ? "0" : dynamicSubjLength;
        dynamicSubjStart = dynamicSubjStart === undefined ? "0" : dynamicSubjStart;
        publishSubj2 = publishSubj2 === undefined ? "" : publishSubj2;
        replySubj = replySubj === undefined ? "" : replySubj;
        errorSubj = errorSubj === errorSubj ? "" : errorSubj;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleTrgLeftmenu);
        }).then(function () {
            that.eleTrgLeftmenu.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleSearchInput);
        }).then(function () {
            that.eleSearchInput.clear().sendKeys(name);
        }).then(function () {
            globalCommons.waitForClickable(that.eleSearchIcon);
        }).then(function () {
            that.eleSearchIcon.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleEntityNameSearched);
        }).then(function () {
            that.eleEntityNameSearched.click();
        }).then(function () {
            that.eleDetailSlideBar.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleTrgNameInput);
        }).then(function () {
            that.eleTrgNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleTrgDescInput.clear().sendKeys(desc);
        }).then(function () {
            that.eleTrgConnInput.clear().sendKeys(conn);
        }).then(function () {
            that.eleTrgOutputConversionInput.clear().sendKeys(outputCvr);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleTrgTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._outputMethodTrg(outputMethod);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgServiceKeyLocatorStartSpinner.clear().sendKeys(serviceKeyLocatorStart);
        }).then(function () {
            that.eleTrgServiceKeyLocatorLengthInput.clear().sendKeys(serviceKeyLocatorLength);
        }).then(function () {
            that.eleTrgServiceKeyLocatorValueInput.clear().sendKeys(ServiceKeyLocatorValue);
        }).then(function () {
            that._requeueOnErrorTrg(requeueOnError);
        }).then(function () {
            return that.eleTrgRvDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgRvDetailsExtension);
        }).then(function () {
            return that.eleTrgRvPublishSubjectInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgRvDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgRvPublishSubjectInput);
        }).then(function () {
            that.eleTrgRvPublishSubjectInput.clear().sendKeys(publishSubj);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixLengthSpinner.clear().sendKeys(dynamicSubjLength);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleTrgRvDynamicSubjectSuffixStartSpinner.clear().sendKeys(dynamicSubjStart);
        }).then(function () {
            that.eleTrgRvPublishSubject2Input.clear().sendKeys(publishSubj2);
        }).then(function () {
            that.eleTrgRvReplySubjectInput.clear().sendKeys(replySubj);
        }).then(function () {
            that.eleTrgRvErrorMsgSubjectInput.clear().sendKeys(errorSubj);
        }).then(function () {
            globalCommons.waitForClickable(that.eleResetButton);
        }).then(function () {
            that.eleResetButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };


    return configurePage;
})();
module.exports = configurePage;