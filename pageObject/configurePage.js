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
        this.eleTableHeader5 = element(by.css('.cell-table-header-nowrap thead th:nth-child(5)'));
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

        // Trigger Service Details
        this.eleTrgNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleTrgNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleTrgDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleTrgDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleTrgConnInput = element(by.xpath('//div[text()="Connection"]/../../..//input'));
        this.eleTrgConnPickButton = element(by.xpath('//div[text()="Connection"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleTrgOutputConversionPickButton = element(by.xpath('//div[text()="Output Conversion"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleTrgConnValidateMsg = element(by.xpath('//div[text()="Connection"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleTrgOutputConversionInput = element(by.xpath('//div[text()="Output Conversion"]/../../..//input'));
        this.eleTrgOutputConversionValidateMsg = element(by.xpath('//div[text()="Output Conversion"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleTrgDisableOnErrorNumSpinner = element(by.xpath('//div[text()="Disable on Error (#)"]/../../..//input'));
        this.eleTrgDisableOnErrorPercentSpinner = element(by.xpath('//div[text()="Disable on Error (%)"]/../../..//input'));
        this.eleTrgTrclvlSpinner = element(by.xpath('//div[text()="Trace Level"]/../../..//input'));
        this.eleTrgOutputMethodDropdown = element(by.xpath('//div[text()="Output Method"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleTrgOutputMethodSelected = function (outputMethod) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + outputMethod + '"]'));
        };
        this.eleTrgOutputMethod01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleTrgOutputMethod02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleTrgOutputMethod03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleTrgServiceKeyLocatorStartSpinner = element(by.xpath('//div[text()="Service Key Locator"]/../../..//input[@class="spinner-textbox"]'));
        // this.eleTrgServiceKeyLocatorLengthInput = element(by.xpath('//div[text()="Length"]/../../..//input[@class="form_text_box"]'));
        this.eleTrgServiceKeyLocatorLengthInput = element(by.xpath('//div[text()="Length"]/../../..//input[contains(@class,"form_text_box")]'));
        this.eleTrgServiceKeyLocatorLengthValidateMsg = element(by.xpath('//div[text()="Length"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleTrgServiceKeyLocatorValueInput = element(by.xpath('//div[text()="Value"]/../../..//input[@class="form_text_box"]'));
        this.eleTrgRequeueOnErrorCheck = element(by.xpath('//label[text()="Requeue on Error"]/..//input'));
        this.eleTrgConnectionExtension = element(by.xpath('//td[text()="Connection Extension"]'));
        this.eleTrgEmsDetailsExtension = element(by.xpath('//td[text()="EMS Details"]'));
        this.eleTrgEmsPublishDestInput = element(by.xpath('//div[text()="Publish Destination"]/../../..//input'));
        this.eleTrgEmsPublishDestValidateMsg = element(by.xpath('//div[text()="Publish Destination"]/../../../..//div[@class="validate_msg_show"]'));
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
        this.eleTrgEmsSmslMode01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleTrgEmsSmslMode02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleTrgEmsDeliveryModeDropdown = element(by.xpath('//div[text()="Delivery Mode"]/../../..//div[contains(@class,"GCOBQG-CPQ")]'));
        this.eleTrgEmsDeliveryModeSelected = function (delivery) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + delivery + '"]'));
        };
        this.eleTrgEmsDeliveryMode01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleTrgEmsDeliveryMode02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleTrgEmsDeliveryMode03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleTrgOutputMsgPriorityCheck = element(by.xpath('//label[text()="Priority"]/..//input'));
        this.eleTrgOutputMsgPriorityValueSpinner = element(by.xpath('//label[text()="Priority"]/../../../../../../../../..//input[@class="spinner-textbox"]'));
        this.eleTrgOutputMsgExpirationCheck = element(by.xpath('//label[text()="Expiration"]/..//input'));
        this.eleTrgOutputMsgExpirationValueSpinner = element(by.xpath('//label[text()="Expiration"]/../../../../../../../../..//input[@class="spinner-textbox"]'));
        this.eleTrgOutputMsgExpirationUnitDropdown = element(by.xpath('//div[text()="Unit"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleTrgOutputMsgExpirationUnitSelected = function (unit) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + unit + '"]'));
        };
        this.eleTrgOutputMsgExpirationUnit01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleTrgOutputMsgExpirationUnit02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleTrgOutputMsgExpirationUnit03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleTrgOutputMsgExpirationUnit04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));
        this.eleTrgOutputMsgCompressionCheck = element(by.xpath('//label[text()="Compression"]/..//input'));
        this.eleTrgOutputMsgPreserveCheck = element(by.xpath('//label[text()="Preserve"]/..//input'));
        this.eleTrgOutputMsgBodyTraceCheck = element(by.xpath('//label[text()="Body Trace"]/..//input'));
        this.eleTrgOutputMsgMsgTypeDropdown = element(by.xpath('//div[text()="Message Type"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleTrgOutputMsgMsgTypeSelected = function (msgType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + msgType + '"]'));
        };
        this.eleTrgOutputMsgMsgType01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleTrgOutputMsgMsgType02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleTrgOutputMsgMsgType03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleTrgOutputMsgMsgType04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));
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
        this.eleTrgEmsPropTypeDropdown = element(by.css('.GCOBQG-CA0 .GCOBQG-CPQ'));
        this.eleTrgEmsPropTypeSelected = function (propType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + propType + '"]'));
        };
        this.eleTrgEmsPropType01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleTrgEmsPropType02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleTrgEmsPropType03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleTrgEmsPropNameDropdown = element(by.css('.GCOBQG-CB0 .GCOBQG-CPQ'));
        this.eleTrgEmsPropSysNameSelected = function (propName) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + propName + '"]'));
        };
        this.eleTrgEmsPropNameSelected = function (propName) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//td[2]/div[text()="' + propName + '"]'))
        };
        this.eleTrgEmsPropNameInput = element(by.xpath('//input[@maxlength="31"]'));
        this.eleTrgEmsPropValValueInput = element(by.xpath('//input[@maxlength="254"]'));
        this.eleTrgEmsPropBufValueInput = element(by.xpath('//input[@style="width: 170px;"]'));
        this.eleTrgEmsPropSysValueInput = element(by.xpath('//input[@style="width: 100%; height: 100%;"]'));
        this.eleTrgEmsPropValuePicklistButton = element(by.css('.GCOBQG-CB0 .pick-list-text-box-button'));
        this.eleTrgEmsPropValueFromBufFieldSearchInput = element(by.css('.gwt-DialogBox .GCOBQG-CLM'));
        this.eleTrgEmsPropValueFromBufFieldSearchIcon = element(by.css('.gwt-DialogBox .GCOBQG-CKM'));
        this.eleTrgEmsPropValueFromBufFieldSelected = function (bufField) {
            return element(by.xpath('//div[@class="dialog-container"]//div[text()="' + bufField + '"]'));
        };
        this.eleTrgEmsPropValueFromBufFieldSelectButton = element(by.css('.mfwebui-form-buttons button[title="OK"]'));
        this.eleTrgEmsPropValueFromBufFieldCancelButton = element(by.css('.mfwebui-form-buttons button[title="No"]'));
        this.eleTrgEmsPropValidateMsg = element(by.xpath('//div[@class="popupContent"]//img[@src="images/icons/alert.png"]'));
        this.eleTrgEmsPropType = function (propNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + propNum + ']/td[1]/div'));
        };
        this.eleTrgEmsPropName = function (propNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + propNum + ']/td[2]/div'));
        };
        this.eleTrgEmsPropValue = function (propNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + propNum + ']/td[3]/div'));
        };
        this.eleTrgRvDetailsExtension = element(by.xpath('//td[text()="RV Details"]'));
        this.eleTrgRvPublishSubjectInput = element(by.xpath('//div[text()="Publish Subject"]/../../..//input'));
        this.eleTrgRvPublishSubjectValidateMsg = element(by.xpath('//div[text()="Publish Subject"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleTrgRvDynamicSubjectSuffixLengthSpinner = element(by.xpath('//div[text()="Dynamic Subject suffix:"]/../../..//div[text()="Length"]/../../..//input'));
        this.eleTrgRvDynamicSubjectSuffixStartSpinner = element(by.xpath('//div[text()="Dynamic Subject suffix:"]/../../..//div[text()="Start"]/../../..//input'));
        this.eleTrgRvPublishSubject2Input = element(by.xpath('//div[text()="Publish Subject (Secondary)"]/../../..//input'));
        this.eleTrgRvReplySubjectInput = element(by.xpath('//div[text()="Reply-to Subject"]/../../..//input'));
        this.eleTrgRvErrorMsgSubjectInput = element(by.xpath('//div[text()="Error Message Subject"]/../../..//input'));

        // Recipe Service Details
        this.eleRecNameInput = element(by.xpath('//div[text()="Name"]/../../..//input'));
        this.eleRecNameValidateMsg = element(by.xpath('//div[text()="Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleRecDescInput = element(by.xpath('//div[text()="Description"]/../../..//textarea'));
        this.eleRecDescValidateMsg = element(by.xpath('//div[text()="Description"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleRecIntfInput = element(by.xpath('//div[text()="Interface Name"]/../../..//input'));
        this.eleRecIntfPickButton = element(by.xpath('//div[text()="Interface Name"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleRecIntfValidateMsg = element(by.xpath('//div[text()="Interface Name"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleRecIntf2Input = element(by.xpath('//div[text()="Interface Name (alternate)"]/../../..//input'));
        this.eleRecIntf2PickButton = element(by.xpath('//div[text()="Interface Name (alternate)"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleRecIntf2ValidateMsg = element(by.xpath('//div[text()="Interface Name (alternate)"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleRecConnInput = element(by.xpath('//div[text()="Connection"]/../../..//input'));
        this.eleRecConnPickButton = element(by.xpath('//div[text()="Connection"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleRecConnValidateMsg = element(by.xpath('//div[text()="Connection"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleRecDisableOnErrorNumSpinner = element(by.xpath('//div[text()="Disable on Error (#)"]/../../..//input'));
        this.eleRecDisableOnErrorPercentSpinner = element(by.xpath('//div[text()="Disable on Error (%)"]/../../..//input'));
        this.eleRecTrclvlSpinner = element(by.xpath('//div[text()="Trace Level"]/../../..//input'));
        this.eleRecInputConversionInput = element(by.xpath('//div[text()="Input Conversion"]/../../..//input'));
        this.eleRecInputConversionPickButton = element(by.xpath('//div[text()="Input Conversion"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleRecInputConversionValidateMsg = element(by.xpath('//div[text()="Input Conversion"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleRecOutputConversionInput = element(by.xpath('//div[text()="Output Conversion"]/../../..//input'));
        this.eleRecOutputConversionPickButton = element(by.xpath('//div[text()="Output Conversion"]/../../..//div[@class="pick-list-text-box-button"]'));
        this.eleRecOutputConversionValidateMsg = element(by.xpath('//div[text()="Output Conversion"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleRecResourceNameInput = element(by.xpath('//div[text()="Resource Name"]/../../..//input'));
        this.eleRecSsidFilterCheck = element(by.xpath('//label[text()="SS-Id Filter"]/..//input'));
        this.eleRecMethodReplyDropdown = element(by.xpath('//div[text()="Method of Reply"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleRecMethodReplySelected = function (methodReply) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + methodReply + '"]'));
        };
        this.eleRecMethodReply01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecMethodReply02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecMethodReply03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleRecMethodReply04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));

        this.eleRecIntfExtension = element(by.xpath('//td[text()="Interface Extension"]'));
        this.eleRecCicsDetailsExtension = element(by.xpath('//td[text()="CICS Details"]'));
        this.eleRecCicsMethodInvocationDropdown = element(by.xpath('//td[text()="CICS Details"]/../../../../../../..//div[text()="Method of Invocation"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleRecCicsMethodInvocationSelected = function (methodInvocation) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + methodInvocation + '"]'));
        };
        this.eleRecCicsMethodInvocation01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecCicsMethodInvocation02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecCicsMethodInvocation03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleRecCicsMethodInvocation04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));
        this.eleRecCicsMethodInvocation05 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[5]/td[1]'));
        this.eleRecCicsMethodInvocation06 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[6]/td[1]'));
        this.eleRecCicsMethodInvocation07 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[7]/td[1]'));
        this.eleRecCicsMethodInvocation08 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[8]/td[1]'));
        this.eleRecCicsMethodInvocation09 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[9]/td[1]'));
        this.eleRecCicsMirrorTranIdInput = element(by.xpath('//div[text()="Mirror Transaction ID "]/../../..//input'));
        this.eleRecCicsCsmiUserTranCheck = element(by.xpath('//label[text()="CSMI User Transaction"]/..//input'));
        this.eleRecCicsRRETranIdInput = element(by.xpath('//div[text()="Transaction ID"]/../../..//input'));
        this.eleRecCicsRRESysNameInput = element(by.xpath('//div[text()="System Name"]/../../..//input'));
        this.eleRecCicsCtnChannelNameInput = element(by.xpath('//div[text()="Channel Name"]/../../..//input'));
        this.eleRecCicsCtnContainerNameInput = element(by.xpath('//div[text()="Container Name"]/../../..//input'));
        this.eleRecCicsCtnContainerInvocationDropdown = element(by.xpath('//div[text()="Container Invocation"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleRecCicsCtnContainerInvocationSelected = function (ctnInvocation) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + ctnInvocation + '"]'));
        };
        this.eleRecCicsCtnContainerInvocation01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecCicsCtnContainerInvocation02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecCicsCtnContainerCreationDropdown = element(by.xpath('//div[text()="Container Creation"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleRecCicsCtnContainerCreationSelected = function (ctnCreation) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + ctnCreation + '"]'));
        };
        this.eleRecCicsCtnContainerCreation01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecCicsCtnContainerCreation02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecCicsCtnForwardDestAsCtnCheck = element(by.xpath('//label[text()="Forward Destinations as Container"]/..//input'));
        this.eleRecCicsMultiExecResourceInput = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//input'));
        this.eleRecCicsMultiExecResource2Input = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//input'));
        this.eleRecCicsMultiExecResource3Input = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//input'));
        this.eleRecCicsMultiExecResource4Input = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//input'));
        this.eleRecCicsMultiExecResource5Input = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//input'));
        this.eleRecCicsMultiExecResourceAddButton = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//img'));
        this.eleRecCicsMultiExecResource2RemoveButton = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//img'));
        this.eleRecCicsMultiExecResource3RemoveButton = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//img'));
        this.eleRecCicsMultiExecResource4RemoveButton = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//img'));
        this.eleRecCicsMultiExecResource5RemoveButton = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//img'));

        this.eleRecRedDetailsExtension = element(by.xpath('//td[text()="Red Details"]'));
        this.eleRecRedMethodInvocationDropdown = element(by.xpath('//td[text()="Red Details"]/../../../../../../..//div[text()="Method of Invocation"]'));
        this.eleRecRedMethodInvocationSelected = function (methodInvocation) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + methodInvocation + '"]'));
        };
        this.eleRecRedMethodInvocation01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecRedMethodInvocation02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecRedMethodInvocation03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleRecRedMethodInvocation04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));
        this.eleRecRedMethodInvocation05 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[5]/td[1]'));
        this.eleRecRedMethodInvocation06 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[6]/td[1]'));
        this.eleRecRedMethodInvocation07 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[7]/td[1]'));
        this.eleRecRedMethodInvocation08 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[8]/td[1]'));
        this.eleRecRedMethodInvocation09 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[9]/td[1]'));
        this.eleRecRedMirrorTranIdInput = element(by.xpath('//div[text()="Mirror Transaction ID"]/../../..//input'));
        this.eleRecRedCsmiUserTranCheck = element(by.xpath('//label[text()="CSMI User Transaction"]/..//input'));
        this.eleRecRedRRETranIdInput = element(by.xpath('//div[text()="Transaction ID"]/../../..//input'));
        this.eleRecRedRRESysNameInput = element(by.xpath('//div[text()="System Name"]/../../..//input'));
        this.eleRecRedCtnChannelNameInput = element(by.xpath('//div[text()="Channel Name"]/../../..//input'));
        this.eleRecRedCtnContainerNameInput = element(by.xpath('//div[text()="Container Name"]/../../..//input'));
        this.eleRecRedCtnContainerInvocationDropdown = element(by.xpath('//div[text()="Container Invocation"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleRecRedCtnContainerInvocationSelected = function (ctnInvocation) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + ctnInvocation + '"]'));
        };
        this.eleRecRedCtnContainerInvocation01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecRedCtnContainerInvocation02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecRedCtnContainerCreationDropdown = element(by.xpath('//div[text()="Container Creation"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleRecRedCtnContainerCreationSelected = function (ctnCreation) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + ctnCreation + '"]'));
        };
        this.eleRecRedCtnContainerCreation01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecRedCtnContainerCreation02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecRedCtnForwardDestAsCtnCheck = element(by.xpath('//label[text()="Forward Destination as Container"]/..//input'));
        this.eleRecRedMultiExecResourceInput = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//input'));
        this.eleRecRedMultiExecResource2Input = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//input'));
        this.eleRecRedMultiExecResource3Input = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//input'));
        this.eleRecRedMultiExecResource4Input = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//input'));
        this.eleRecRedMultiExecResource5Input = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//input'));
        this.eleRecRedMultiExecResourceAddButton = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[1]//tr[1]/td[1]//img'));
        this.eleRecRedMultiExecResource2RemoveButton = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[2]//tr[1]/td[1]//img'));
        this.eleRecRedMultiExecResource3RemoveButton = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[3]//tr[1]/td[1]//img'));
        this.eleRecRedMultiExecResource4RemoveButton = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[4]//tr[1]/td[1]//img'));
        this.eleRecRedMultiExecResource5RemoveButton = element(by.xpath('//div[text()="Resource"]/../../..//tr[2]/td[1]//div[1]//div[5]//tr[1]/td[1]//img'));

        this.eleRecImsDetailsExtension = element(by.xpath('//td[text()="IMS Details"]'));
        this.eleRecImsMethodInvocationDropdown = element(by.xpath('//td[text()="IMS Details"]/../../../../../../..//div[text()="Method of Invocation"]'));
        this.eleRecImsMethodInvocationSelected = function (methodInvocation) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + methodInvocation + '"]'));
        };
        this.eleRecImsMethodInvocation01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecImsMethodInvocation02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecImsMethodInvocation03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleRecImsVariableLengthTransCheck = element(by.xpath('//label[text()="Variable Length Transaction"]/..//input'));
        this.eleRecImsTranLengthSpinner = element(by.xpath('//div[text()="Transaction Length"]/../../..//input'));
        this.eleRecImsSecurityCheckDropdown = element(by.xpath('//div[text()="Security Check"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleRecImsSecurityCheckSelected = function (secuCheck) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + secuCheck + '"]'));
        };
        this.eleRecImsSecurityCheck01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecImsSecurityCheck02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecImsSegmentBreakInput = element(by.xpath('//div[text()="Segment Break (8 hex) (No 0x00 or 0x40)"]/../../..//input'));
        this.eleRecImsSegmentLengthInput = element(by.xpath('//div[text()="Segment Length"]/../../..//input'));
        this.eleRecImsMfsMapNameInput = element(by.xpath('//div[text()="MFS Map Name"]/../../..//input'));
        this.eleRecImsNaturalStackCmdInput = element(by.xpath('//div[text()="Natural Stack Command"]/../../..//input'));

        this.eleRecConnectionExtension = element(by.xpath('//td[text()="Connection Extension"]'));
        this.eleRecEmsDetailsExtension = element(by.xpath('//td[text()="EMS Details"]'));
        this.eleRecEmsListentoDestInput = element(by.xpath('//div[text()="Listen-to Destination"]/../../..//input'));
        this.eleRecEmsListentoDestValidateMsg = element(by.xpath('//div[text()="Listen-to Destination"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleRecEmsListentoDestTypeDropdown = element(by.xpath('//div[text()="Listen-to Destination"]/../../../../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleRecEmsListentoDestTypeSelected = function (listentoDestType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + listentoDestType + '"]'));
        };
        this.eleRecEmsResponseDestInput = element(by.xpath('//div[text()="Response Destination"]/../../..//input'));
        this.eleRecEmsResponseDestTypeDropdown = element(by.xpath('//div[text()="Response Destination"]/../../../../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleRecEmsResponseDestTypeSelected = function (responseDestType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + responseDestType + '"]'));
        };
        this.eleRecEmsRespondAlwaysCheck = element(by.xpath('//label[text()="Respond Always"]/..//input'));
        this.eleRecEmsDynamicDestLengthSpinner = element(by.xpath('//div[text()="Dynamic Destination Length"]/../../..//input'));
        this.eleRecEmsDynamicDestStartSpinner = element(by.xpath('//td[text()="EMS Details"]/../../../../../../..//div[text()="Start"]/../../..//input'));
        this.eleRecEmsUsageLimitSpinner = element(by.xpath('//td[text()="EMS Details"]/../../../../../../..//div[text()="Usage Limit"]/../../..//input'));
        this.eleRecEmsErrorMsgDestInput = element(by.xpath('//div[text()="Error Message Destination"]/../../..//input'));
        this.eleRecEmsErrorMsgDestTypeDropdown = element(by.xpath('//div[text()="Error Message Destination"]/../../../../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleRecEmsErrorMsgDestTypeSelected = function (errorDestType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + errorDestType + '"]'));
        };
        this.eleRecEmsSmslModeDropdown = element(by.xpath('//div[text()="SMSL Mode"]/../../..//div[contains(@class,"GCOBQG-CPQ")]'));
        this.eleRecEmsSmslModeSelected = function (smsl) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + smsl + '"]'));
        };
        this.eleRecEmsSmslMode01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecEmsSmslMode02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecEmsSmslMode03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleRecEmsSmslMode04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));
        this.eleRecEmsDeliveryModeDropdown = element(by.xpath('//div[text()="Delivery Mode"]/../../..//div[contains(@class,"GCOBQG-CPQ")]'));
        this.eleRecEmsDeliveryModeSelected = function (delivery) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + delivery + '"]'));
        };
        this.eleRecEmsDeliveryMode01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecEmsDeliveryMode02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecEmsDeliveryMode03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleRecEmsDurableSubscriberCheck = element(by.xpath('//label[text()="Durable Subscriber"]/..//input'));
        this.eleRecEmsDurableClientIdInput = element(by.xpath('//div[text()="Durable Client ID"]/../../..//input'));
        this.eleRecEmsOutputMsgPriorityCheck = element(by.xpath('//label[text()="Priority"]/..//input'));
        this.eleRecEmsOutputMsgPriorityValueSpinner = element(by.xpath('//label[text()="Priority"]/../../../../../../../../..//input[@class="spinner-textbox"]'));
        this.eleRecEmsOutputMsgExpirationCheck = element(by.xpath('//label[text()="Expiration"]/..//input'));
        this.eleRecEmsOutputMsgExpirationValueSpinner = element(by.xpath('//label[text()="Expiration"]/../../../../../../../../..//input[@class="spinner-textbox"]'));
        this.eleRecEmsOutputMsgExpirationUnitDropdown = element(by.xpath('//div[text()="Unit"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleRecEmsOutputMsgExpirationUnitSelected = function (unit) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + unit + '"]'));
        };
        this.eleRecEmsOutputMsgExpirationUnit01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecEmsOutputMsgExpirationUnit02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecEmsOutputMsgExpirationUnit03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleRecEmsOutputMsgExpirationUnit04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));
        this.eleRecEmsOutputMsgCompressionCheck = element(by.xpath('//label[text()="Compression"]/..//input'));
        this.eleRecEmsOutputMsgPreserveCheck = element(by.xpath('//label[text()="Preserve"]/..//input'));
        this.eleRecEmsOutputMsgBodyTraceCheck = element(by.xpath('//label[text()="Body Trace"]/..//input'));
        this.eleRecEmsOutputMsgMsgTypeDropdown = element(by.xpath('//div[text()="Message Type"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleRecEmsOutputMsgMsgTypeSelected = function (msgType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + msgType + '"]'));
        };
        this.eleRecEmsOutputMsgMsgType01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecEmsOutputMsgMsgType02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecEmsOutputMsgMsgType03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleRecEmsOutputMsgMsgType04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));
        this.eleRecEmsOutputMsgCopyCorrelationDropdown = element(by.xpath('//div[text()="Copy JMSCorrelation"]/../../..//div[@class="GCOBQG-CPQ"]'));
        this.eleRecEmsOutputMsgCopyCorrelationSelected = function (copyCorrelation) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + copyCorrelation + '"]'));
        };
        this.eleRecEmsOutputMsgCopyCorrelation01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecEmsOutputMsgCopyCorrelation02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecEmsOutputMsgCopyCorrelation03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleRecEmsOutputMsgCopyCorrelation04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));
        this.eleRecEmsOutputMsgCopyCorrelation05 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[5]/td[1]'));
        this.eleRecEmsPropExtension = element(by.xpath('//td[text()="EMS Properties"]'));
        this.eleRecEmsPropAddButton = element(by.xpath('//div[@class="GCOBQG-CCM"]/../..//button[@class="GCOBQG-CDQ" and text()="Add"]'));
        this.eleRecEmsPropDelButton = element(by.xpath('//div[@class="GCOBQG-CCM"]/../..//button[@class="GCOBQG-CDQ" and text()="Delete"]'));
        this.eleRecEmsPropReplicateButton = element(by.xpath('//div[@class="GCOBQG-CCM"]/../..//button[@class="GCOBQG-CDQ" and text()="Replicate"]'));
        this.eleRecEmsPropType = function (lineNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + lineNum + ']/td[1]/div'));
        };
        this.eleRecEmsPropPurpose = function (lineNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + lineNum + ']/td[2]/div'));
        };
        this.eleRecEmsPropName = function (lineNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + lineNum + ']/td[3]/div'));
        };
        this.eleRecEmsPropValue = function (lineNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + lineNum + ']/td[4]/div'));
        };
        this.eleRecEmsPropTypeDropdown = element(by.css('.GCOBQG-CO- .GCOBQG-CPQ'));
        this.eleRecEmsPropTypeSelected = function (propType) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + propType + '"]'));
        };
        this.eleRecEmsPropType01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecEmsPropType02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecEmsPropType03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleRecEmsPropType04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));
        this.eleRecEmsPropPurposeDropdown = element(by.xpath('//div[@class="popupContent"]/div/div[2]/div/div[3]/div'));
        this.eleRecEmsPropPurposeSelected = function (propPurpose) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + propPurpose + '"]'));
        };
        this.eleRecEmsPropPurpose01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecEmsPropPurpose02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecEmsPropPurpose03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleRecEmsPropNameDropdown = element(by.xpath('//div[@class="popupContent"]/div/div[3]/div[2]/div/div/div[3]/div'));
        this.eleRecEmsPropSysNameSelected = function (propName) {
            return element(by.xpath('//td[@class="gwt-MenuItem" and text()="' + propName + '"]'));
        };
        this.eleRecEmsPropSysName01 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[1]/td[1]'));
        this.eleRecEmsPropSysName02 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[2]/td[1]'));
        this.eleRecEmsPropSysName03 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[3]/td[1]'));
        this.eleRecEmsPropSysName04 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[4]/td[1]'));
        this.eleRecEmsPropSysName05 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[5]/td[1]'));
        this.eleRecEmsPropSysName06 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[6]/td[1]'));
        this.eleRecEmsPropSysName07 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[7]/td[1]'));
        this.eleRecEmsPropSysName08 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[8]/td[1]'));
        this.eleRecEmsPropSysName09 = element(by.xpath('//div[@class="gwt-MenuBar gwt-MenuBar-vertical"]//tr[9]/td[1]'));
        this.eleRecEmsPropNameSelected = function (propName) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//td[2]/div[text()="' + propName + '"]'))
        };
        this.eleRecEmsPropNameInput = element(by.xpath('//div[@class="popupContent"]/div/div[3]/div[4]/input'));
        this.eleRecEmsPropValueInput = element(by.xpath('//div[@class="popupContent"]/div/div[4]/div/input'));
        // this.eleRecEmsPropBufValueInput = element(by.xpath('//input[@style="width: 170px;"]'));
        // this.eleRecEmsPropSysValueInput = element(by.xpath('//input[@style="width: 100%; height: 100%;"]'));
        this.eleRecEmsPropValuePicklistButton = element(by.css('.GCOBQG-CP- .pick-list-text-box-button'));
        this.eleRecEmsPropValueFromBufFieldDailogTitle = element(by.css('.Caption'));
        this.eleRecEmsPropValueFromBufFieldSearchInput = element(by.css('.gwt-DialogBox .GCOBQG-CLM'));
        this.eleRecEmsPropValueFromBufFieldSearchIcon = element(by.css('.gwt-DialogBox .GCOBQG-CKM'));
        this.eleRecEmsPropValueFromBufFieldSelected = function (bufField) {
            return element(by.xpath('//div[@class="dialog-container"]//div[text()="' + bufField + '"]'));
        };
        this.eleRecEmsPropValueFromBufFieldSelectButton = element(by.css('.mfwebui-form-buttons button[title="OK"]'));
        this.eleRecEmsPropValueFromBufFieldCancelButton = element(by.css('.mfwebui-form-buttons button[title="No"]'));
        this.eleRecEmsPropValidateMsg = element(by.xpath('//div[@class="popupContent"]//img[@src="images/icons/alert.png"]'));
        this.eleRecEmsPropType = function (propNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + propNum + ']/td[1]/div'));
        };
        this.eleRecEmsPropPurpose = function (propNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + propNum + ']/td[2]/div'));
        };
        this.eleRecEmsPropName = function (propNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + propNum + ']/td[3]/div'));
        };
        this.eleRecEmsPropValue = function (propNum) {
            return element(by.xpath('//div[@class="GCOBQG-CFO"]//tr[' + propNum + ']/td[4]/div'));
        };
        this.eleRecEmsSelectorInput = element(by.xpath('//div[text()="EMS Selector"]/../../..//textarea'));

        this.eleRecRvDetailsExtension = element(by.xpath('//td[text()="RV Details"]'));
        this.eleRecRvListentoSubjInput = element(by.xpath('//div[text()="Listen-to Subject"]/../../..//input'));
        this.eleRecRvListentoSubjValidateMsg = element(by.xpath('//div[text()="Listen-to Subject"]/../../../..//div[@class="validate_msg_show"]'));
        this.eleRecRvReplytoSubjInput = element(by.xpath('//div[text()="Reply-to Subject"]/../../..//input'));
        this.eleRecRvReplytoAlwaysCheck = element(by.xpath('//label[text()="Reply-to Always"]/..//input'));
        this.eleRecRvDynamicSubjLengthSpinner = element(by.xpath('//div[text()="//div[text()="Dynamic Subject Length"]/../../..//input'));
        this.eleRecRvDynamicSubjStartSpinner = element(by.xpath('//td[text()="RV Details"]/../../../../../../..//div[text()="Start"]/../../..//input'));
        this.eleRecRvUsageLimitSpinner = element(by.xpath('//td[text()="RV Details"]/../../../../../../..//div[text()="Usage Limit"]/../../..//input'));
        this.eleRecRvErrorMsgSubjInput = element(by.xpath('//div[text()="Error Message Subject"]/../../..//input'));
    };


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

// Function to select 'Connection' from a list for trigger
//
    configurePage.prototype._connTrg = function (conn) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForClickable(that.eleTrgConnPickButton).then(function () {
            that.eleTrgConnPickButton.click();
        }).then(function () {
            globalPage.entitySelect(conn);
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
// Function to select 'Output Conversion' from a list for trigger
//
    configurePage.prototype._outputConversionTrg = function (outputCvr) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForClickable(that.eleTrgOutputConversionPickButton).then(function () {
            that.eleTrgOutputConversionPickButton.click();
        }).then(function () {
            globalPage.entitySelect(outputCvr);
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
            return that.eleTrgEmsPublishDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            if (message.indexOf('background-color:') === -1) {
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
            return that.eleTrgEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            if (message.indexOf('background-color:') === -1) {
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
            return that.eleTrgEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            if (message.indexOf('background-color:') === -1) {
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
    configurePage.prototype._addEmsPropertyTrg = function (propType, propName, propValue) {
        var deferred = protractor.promise.defer(), that = this;
        propType = propType === undefined ? "System" : propType;
        propName = propName === undefined ? "tibss-BES" : propName;
        propValue = propValue === undefined ? "" : propValue;

        globalCommons.waitForClickable(that.eleTrgRequeueOnErrorCheck).then(function () {
            return that.eleTrgEmsPropExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgEmsPropExtension);
        }).then(function () {
            return that.eleTrgEmsPropAddButton.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleTrgEmsPropExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForClickable(that.eleTrgEmsPropAddButton);
        }).then(function () {
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
                    return that.eleTrgEmsPropNameDropdown.getText();
                }).then(function (message) {
                    if (message !== propName) {
                        that.eleTrgEmsPropNameDropdown.click().then(function () {
                            globalCommons.waitForClickable(that.eleTrgEmsPropSysNameSelected(propName));
                        }).then(function () {
                            that.eleTrgEmsPropSysNameSelected(propName).click();
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
                    if (propValue !== "") {
                        globalCommons.waitForClickable(that.eleTrgEmsPropValuePicklistButton).then(function () {
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
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (propType === "Value") {
                globalCommons.waitForElementPresent(that.eleTrgEmsPropNameInput).then(function () {
                    that.eleTrgEmsPropNameInput.clear().sendKeys(propName);
                }).then(function () {
                    that.eleTrgEmsPropValValueInput.clear().sendKeys(propValue);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
//
// Function to delete a Trigger EMS Property.
//
    configurePage.prototype._delEmsPropertyTrg = function (propName) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleTrgEmsPropNameSelected(propName)).then(function () {
            that.eleTrgEmsPropNameSelected(propName).click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleTrgEmsPropDelButton);
        }).then(function () {
            that.eleTrgEmsPropDelButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
//
// Function to replicate a Trigger EMS Property.
//
    configurePage.prototype._replicateEmsPropertyTrg = function (propName, propName2) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleTrgEmsPropNameSelected(propName)).then(function () {
            that.eleTrgEmsPropNameSelected(propName).click();
        }).then(function () {
            that.eleTrgEmsPropNameSelected(propName).click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleTrgEmsPropReplicateButton);
        }).then(function () {
            that.eleTrgEmsPropReplicateButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleTrgEmsPropTypeDropdown);
        }).then(function () {
            return that.eleTrgEmsPropTypeDropdown.getText();
        }).then(function (message) {
            if (message !== "System") {
                globalCommons.waitForElementPresent(that.eleTrgEmsPropNameInput).then(function () {
                    that.eleTrgEmsPropNameInput.clear().sendKeys(propName2);
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                globalCommons.waitForElementPresent(that.eleTrgEmsPropNameDropdown).then(function () {
                    return that.eleTrgEmsPropNameDropdown.getText();
                }).then(function (message) {
                    if (message !== propName2) {
                        that.eleTrgEmsPropNameDropdown.click().then(function () {
                            globalCommons.waitForClickable(that.eleTrgEmsPropSysNameSelected(propName2));
                        }).then(function () {
                            that.eleTrgEmsPropSysNameSelected(propName2).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
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
        publishDest = publishDest === undefined ? "tibss.trg.publishDest" : publishDest;
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
        publishSubj = publishSubj === undefined ? "tibss.trg.publishSubj" : publishSubj;
        dynamicSubjLength = dynamicSubjLength === undefined ? "0" : dynamicSubjLength;
        dynamicSubjStart = dynamicSubjStart === undefined ? "0" : dynamicSubjStart;
        publishSubj2 = publishSubj2 === undefined ? "" : publishSubj2;
        replySubj = replySubj === undefined ? "" : replySubj;
        errorSubj = errorSubj === undefined ? "" : errorSubj;

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
        errorSubj = errorSubj === undefined ? "" : errorSubj;

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
        errorSubj = errorSubj === undefined ? "" : errorSubj;

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
        errorSubj = errorSubj === undefined ? "" : errorSubj;

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
        errorSubj = errorSubj === undefined ? "" : errorSubj;

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


    // Function to set 'Interface Name' for Recipe
    //
    configurePage.prototype._intfRec = function (intf, intfFromPickList) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecIntfInput).then(function () {
            if (intf !== "" && intfFromPickList == true) {
                globalCommons.waitForClickable(that.eleRecIntfPickButton).then(function () {
                    that.eleRecIntfPickButton.click();
                }).then(function () {
                    globalPage.entitySelect(intf);
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                that.eleRecIntfInput.clear().sendKeys(intf).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Interface Name (alternate)' for Recipe
    //
    configurePage.prototype._intf2Rec = function (intf2, intf2FromPickList) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecIntf2Input).then(function () {
            if (intf2 !== "" && intf2FromPickList == true) {
                globalCommons.waitForClickable(that.eleRecIntf2PickButton).then(function () {
                    that.eleRecIntf2PickButton.click();
                }).then(function () {
                    globalPage.entitySelect(intf2);
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                that.eleRecIntf2Input.clear().sendKeys(intf2).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Connection' for Recipe
    //
    configurePage.prototype._connRec = function (conn, connFromPickList) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecConnInput).then(function () {
            if (conn !== "" && connFromPickList == true) {
                globalCommons.waitForClickable(that.eleRecConnPickButton).then(function () {
                    that.eleRecConnPickButton.click();
                }).then(function () {
                    globalPage.entitySelect(conn);
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                that.eleRecConnInput.clear().sendKeys(conn).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Input Conversion' for Recipe
    //
    configurePage.prototype._inputConversionRec = function (inputCvr, inputCvrFromPickList) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecInputConversionInput).then(function () {
            if (inputCvr !== "" && inputCvrFromPickList == true) {
                globalCommons.waitForClickable(that.eleRecInputConversionPickButton).then(function () {
                    that.eleRecInputConversionPickButton.click();
                }).then(function () {
                    globalPage.entitySelect(inputCvr);
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                that.eleRecInputConversionInput.clear().sendKeys(inputCvr).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Output Conversion' for Recipe
    //
    configurePage.prototype._outputConversionRec = function (outputCvr, outputCvrFromPickList) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecOutputConversionInput).then(function () {
            if (outputCvr !== "" && outputCvrFromPickList == true) {
                globalCommons.waitForClickable(that.eleRecOutputConversionPickButton).then(function () {
                    that.eleRecOutputConversionPickButton.click();
                }).then(function () {
                    globalPage.entitySelect(outputCvr);
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                that.eleRecOutputConversionInput.clear().sendKeys(outputCvr).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'SS-Id Filter' of a Recipe
    // false: not selected
    // true: selected
    //
    configurePage.prototype._ssidFilterRec = function (ssidFilter) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleRecSsidFilterCheck).then(function () {
            return that.eleRecSsidFilterCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (ssidFilter) {
                    that.eleRecSsidFilterCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (ssidFilter) {
                    deferred.fulfill();
                } else {
                    that.eleRecSsidFilterCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Method of Reply' of a Recipe
    //
    configurePage.prototype._methodOfReplyRec = function (methodReply) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecMethodReplyDropdown).then(function () {
            return that.eleRecMethodReplyDropdown.getText();
        }).then(function (message) {
            if (message === methodReply) {
                deferred.fulfill();
            } else {
                that.eleRecMethodReplyDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleRecMethodReplySelected(methodReply));
                }).then(function () {
                    that.eleRecMethodReplySelected(methodReply).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Method of Invocation' of a Recipe CICS interface
    //
    configurePage.prototype._methodOfInvocationCicsRec = function (methodInvocation) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecCicsMethodInvocationDropdown).then(function () {
            return that.eleRecCicsMethodInvocationDropdown.getText();
        }).then(function (message) {
            if (message === methodInvocation) {
                deferred.fulfill();
            } else {
                that.eleRecCicsMethodInvocationDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleRecCicsMethodInvocationSelected(methodInvocation));
                }).then(function () {
                    that.eleRecCicsMethodInvocationSelected(methodInvocation).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'CSMI User Transaction' of a Recipe CICS interface
    // false: not selected
    // true: selected
    //
    configurePage.prototype._csmiUserTranCicsRec = function (csmiUserTran) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleRecCicsCsmiUserTranCheck).then(function () {
            return that.eleRecCicsCsmiUserTranCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (csmiUserTran) {
                    that.eleRecCicsCsmiUserTranCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (csmiUserTran) {
                    deferred.fulfill();
                } else {
                    that.eleRecCicsCsmiUserTranCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Container Invocation' of a Recipe CICS interface
    //
    configurePage.prototype._ctnInvocationCicsRec = function (ctnInvocation) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecCicsCtnContainerInvocationDropdown).then(function () {
            return that.eleRecCicsCtnContainerInvocationDropdown.getText();
        }).then(function (message) {
            if (message === ctnInvocation) {
                deferred.fulfill();
            } else {
                that.eleRecCicsCtnContainerInvocationDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleRecCicsCtnContainerInvocationSelected(ctnInvocation));
                }).then(function () {
                    that.eleRecCicsCtnContainerInvocationSelected(ctnInvocation).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Container Creation' of a Recipe CICS interface
    //
    configurePage.prototype._ctnCreationCicsRec = function (ctnCreation) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecCicsCtnContainerCreationDropdown).then(function () {
            return that.eleRecCicsCtnContainerCreationDropdown.getText();
        }).then(function (message) {
            if (message === ctnCreation) {
                deferred.fulfill();
            } else {
                that.eleRecCicsCtnContainerCreationDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleRecCicsCtnContainerCreationSelected(ctnCreation));
                }).then(function () {
                    that.eleRecCicsCtnContainerCreationSelected(ctnCreation).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Forward Destinations as container' of a Recipe CICS interface
    // false: not selected
    // true: selected
    //
    configurePage.prototype._forwardDestAsCtnCicsRec = function (forwardDestAsCtn) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleRecCicsCtnForwardDestAsCtnCheck).then(function () {
            return that.eleRecCicsCtnForwardDestAsCtnCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (forwardDestAsCtn) {
                    that.eleRecCicsCtnForwardDestAsCtnCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (forwardDestAsCtn) {
                    deferred.fulfill();
                } else {
                    that.eleRecCicsCtnForwardDestAsCtnCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };

    // Function to set 'Listen-to Destination Type' of a Recipe EMS connection
    //
    configurePage.prototype._listentoDestTypeEmsRec = function (listentoDestType) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecEmsListentoDestTypeDropdown).then(function () {
            return that.eleRecEmsListentoDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            if (message.indexOf('background-color:') === -1) {
                return that.eleRecEmsListentoDestTypeDropdown.getText().then(function (message) {
                    if (message === listentoDestType) {
                        deferred.fulfill();
                    } else {
                        that.eleRecEmsListentoDestTypeDropdown.click().then(function () {
                            globalCommons.waitForElementPresent(that.eleRecEmsListentoDestTypeSelected(listentoDestType));
                        }).then(function () {
                            that.eleRecEmsListentoDestTypeSelected(listentoDestType).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Response Destination Type' of a Recipe EMS connection
    //
    configurePage.prototype._responseDestTypeEmsRec = function (responseDestType) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecEmsResponseDestTypeDropdown).then(function () {
            return that.eleRecEmsResponseDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            if (message.indexOf('background-color:') === -1) {
                return that.eleRecEmsResponseDestTypeDropdown.getText().then(function (message) {
                    if (message === responseDestType) {
                        deferred.fulfill();
                    } else {
                        that.eleRecEmsResponseDestTypeDropdown.click().then(function () {
                            globalCommons.waitForElementPresent(that.eleRecEmsResponseDestTypeSelected(responseDestType));
                        }).then(function () {
                            that.eleRecEmsResponseDestTypeSelected(responseDestType).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Error Message Destination Type' of a Recipe EMS connection
    //
    configurePage.prototype._errorMsgDestTypeEmsRec = function (errDestType) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecEmsErrorMsgDestTypeDropdown).then(function () {
            return that.eleRecEmsErrorMsgDestTypeDropdown.getAttribute("style");
        }).then(function (message) {
            if (message.indexOf('background-color:') === -1) {
                return that.eleRecEmsErrorMsgDestTypeDropdown.getText().then(function (message) {
                    if (message === errDestType) {
                        deferred.fulfill();
                    } else {
                        that.eleRecEmsErrorMsgDestTypeDropdown.click().then(function () {
                            globalCommons.waitForElementPresent(that.eleRecEmsErrorMsgDestTypeSelected(errDestType));
                        }).then(function () {
                            that.eleRecEmsErrorMsgDestTypeSelected(errDestType).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Response Always' of a Recipe EMS connection
    // false: not selected
    // true: selected
    //
    configurePage.prototype._respondAlwaysEmsRec = function (respondAlways) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForClickable(that.eleRecEmsRespondAlwaysCheck).then(function () {
            return that.eleRecEmsRespondAlwaysCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (respondAlways) {
                    that.eleRecEmsRespondAlwaysCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (respondAlways) {
                    deferred.fulfill();
                } else {
                    that.eleRecEmsRespondAlwaysCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'SMSL Mode' of a Recipe EMS Connection
    //
    configurePage.prototype._smslModeEmsRec = function (smsl) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecEmsSmslModeDropdown).then(function () {
            return that.eleRecEmsSmslModeDropdown.getAttribute("style");
        }).then(function (message) {
            if (message.indexOf('background-color:') === -1) {
                return that.eleRecEmsSmslModeDropdown.getText().then(function (message) {
                    if (message === smsl) {
                        deferred.fulfill();
                    } else {
                        that.eleRecEmsSmslModeDropdown.click().then(function () {
                            globalCommons.waitForElementPresent(that.eleRecEmsSmslModeSelected(smsl));
                        }).then(function () {
                            that.eleRecEmsSmslModeSelected(smsl).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Delivery Mode' of a Recipe EMS Connection
    //
    configurePage.prototype._deliveryModeEmsRec = function (delivery) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecEmsDeliveryModeDropdown).then(function () {
            return that.eleRecEmsDeliveryModeDropdown.getAttribute("style");
        }).then(function (message) {
            if (message.indexOf('background-color:') === -1) {
                return that.eleRecEmsDeliveryModeDropdown.getText().then(function (message) {
                    if (message === delivery) {
                        deferred.fulfill();
                    } else {
                        that.eleRecEmsDeliveryModeDropdown.click().then(function () {
                            globalCommons.waitForElementPresent(that.eleRecEmsDeliveryModeSelected(delivery));
                        }).then(function () {
                            that.eleRecEmsDeliveryModeSelected(delivery).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Durable Subscriber' of a Recipe EMS connection
    // false: not selected
    // true: selected
    //
    configurePage.prototype._durableSubcriberEmsRec = function (durSubscriber) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleRecEmsDurableSubscriberCheck).then(function () {
            return that.eleRecEmsDurableSubscriberCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (durSubscriber) {
                    that.eleRecEmsDurableSubscriberCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (durSubscriber) {
                    deferred.fulfill();
                } else {
                    that.eleRecEmsDurableSubscriberCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Priority' of a Recipe EMS output message
    // false: not selected
    // true: selected
    //
    configurePage.prototype._priorityOutputMsgEmsRec = function (priority) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleRecEmsOutputMsgPriorityCheck).then(function () {
            return that.eleRecEmsOutputMsgPriorityCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (priority) {
                    that.eleRecEmsOutputMsgPriorityCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (priority) {
                    deferred.fulfill();
                } else {
                    that.eleRecEmsOutputMsgPriorityCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Expiration' of a Recipe EMS output message
    // false: not selected
    // true: selected
    //
    configurePage.prototype._expirationOutputMsgEmsRec = function (expiration) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleRecEmsOutputMsgExpirationCheck).then(function () {
            return that.eleRecEmsOutputMsgExpirationCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (expiration) {
                    that.eleRecEmsOutputMsgExpirationCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (expiration) {
                    deferred.fulfill();
                } else {
                    that.eleRecEmsOutputMsgExpirationCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Unit' of a Recipe EMS output message expiration
    //
    configurePage.prototype._unitOutputMsgExpirationEmsRec = function (expirationUnit) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecEmsOutputMsgExpirationUnitDropdown).then(function () {
            return that.eleRecEmsOutputMsgExpirationUnitDropdown.getText();
        }).then(function (message) {
            if (message === expirationUnit) {
                deferred.fulfill();
            } else {
                that.eleRecEmsOutputMsgExpirationUnitDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleRecEmsOutputMsgExpirationUnitSelected(expirationUnit));
                }).then(function () {
                    that.eleRecEmsOutputMsgExpirationUnitSelected(expirationUnit).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Compression' of a Recipe EMS output message
    // false: not selected
    // true: selected
    //
    configurePage.prototype._compressionOutputMsgEmsRec = function (compression) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleRecEmsOutputMsgCompressionCheck).then(function () {
            return that.eleRecEmsOutputMsgCompressionCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (compression) {
                    that.eleRecEmsOutputMsgCompressionCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (compression) {
                    deferred.fulfill();
                } else {
                    that.eleRecEmsOutputMsgCompressionCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Preserve' of a Recipe EMS output message
    // false: not selected
    // true: selected
    //
    configurePage.prototype._preserveOutputMsgEmsRec = function (preserve) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleRecEmsOutputMsgPreserveCheck).then(function () {
            return that.eleRecEmsOutputMsgPreserveCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (preserve) {
                    that.eleRecEmsOutputMsgPreserveCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (preserve) {
                    deferred.fulfill();
                } else {
                    that.eleRecEmsOutputMsgPreserveCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Body Trace' of a Recipe EMS output message
    // false: not selected
    // true: selected
    //
    configurePage.prototype._bodyTraceOutputMsgEmsRec = function (bodyTrace) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleRecEmsOutputMsgBodyTraceCheck).then(function () {
            return that.eleRecEmsOutputMsgBodyTraceCheck.getAttribute("checked");
        }).then(function (message) {
            if (message === null) {
                if (bodyTrace) {
                    that.eleRecEmsOutputMsgBodyTraceCheck.click().then(function () {
                        deferred.fulfill();
                    });
                } else {
                    deferred.fulfill();
                }
            } else {
                if (bodyTrace) {
                    deferred.fulfill();
                } else {
                    that.eleRecEmsOutputMsgBodyTraceCheck.click().then(function () {
                        deferred.fulfill();
                    });
                }
            }
        });
        return deferred.promise;
    };
    // Function to set 'Message Type' of a Recipe EMS output message
    //
    configurePage.prototype._msgTypeOutputMsgEmsRec = function (msgType) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecEmsOutputMsgMsgTypeDropdown).then(function () {
            return that.eleRecEmsOutputMsgMsgTypeDropdown.getText();
        }).then(function (message) {
            if (message === msgType) {
                deferred.fulfill();
            } else {
                that.eleRecEmsOutputMsgMsgTypeDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleRecEmsOutputMsgMsgTypeSelected(msgType));
                }).then(function () {
                    that.eleRecEmsOutputMsgMsgTypeSelected(msgType).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to set 'Copy JMSCorrelation' of a Recipe EMS output message
    //
    configurePage.prototype._copyCorrelationOutputMsgEmsRec = function (copyCorrelation) {
        var deferred = protractor.promise.defer(), that = this;
        globalCommons.waitForElementPresent(that.eleRecEmsOutputMsgCopyCorrelationDropdown).then(function () {
            return that.eleRecEmsOutputMsgCopyCorrelationDropdown.getText();
        }).then(function (message) {
            if (message === copyCorrelation) {
                deferred.fulfill();
            } else {
                that.eleRecEmsOutputMsgCopyCorrelationDropdown.click().then(function () {
                    globalCommons.waitForElementPresent(that.eleRecEmsOutputMsgCopyCorrelationSelected(copyCorrelation));
                }).then(function () {
                    that.eleRecEmsOutputMsgCopyCorrelationSelected(copyCorrelation).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    // Function to add a Recipe EMS property.
    //
    configurePage.prototype._addEmsPropertyRec = function (propType, propPurpose, propName, propValue) {
        var deferred = protractor.promise.defer(), that = this;
        propType = propType === undefined ? "System" : propType;
        propPurpose = propPurpose === undefined ? "Request-Optional" : propPurpose;
        propName = propName === undefined ? "tibss-BES" : propName;
        propValue = propValue === undefined ? "" : propValue;

        globalCommons.waitForClickable(that.eleRecSsidFilterCheck).then(function () {
            return that.eleRecEmsPropExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecEmsPropExtension);
        }).then(function () {
            return that.eleRecEmsPropAddButton.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecEmsPropExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForClickable(that.eleRecEmsPropAddButton);
        }).then(function () {
            that.eleRecEmsPropAddButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecEmsPropTypeDropdown);
        }).then(function () {
            return that.eleRecEmsPropTypeDropdown.getText();
        }).then(function (message) {
            if (message !== propType) {
                that.eleRecEmsPropTypeDropdown.click().then(function () {
                    globalCommons.waitForClickable(that.eleRecEmsPropTypeSelected(propType));
                }).then(function () {
                    that.eleRecEmsPropTypeSelected(propType).click();
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (propType === "System") {
                globalCommons.waitForElementPresent(that.eleRecEmsPropPurposeDropdown).then(function () {
                    return that.eleRecEmsPropPurposeDropdown.getText();
                }).then(function (message) {
                    if (message !== propPurpose) {
                        that.eleRecEmsPropPurposeDropdown.click().then(function () {
                            globalCommons.waitForClickable(that.eleRecEmsPropPurposeSelected(propPurpose));
                        }).then(function () {
                            that.eleRecEmsPropPurposeSelected(propPurpose).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    globalCommons.waitForElementPresent(that.eleRecEmsPropNameDropdown);
                }).then(function () {
                    return that.eleRecEmsPropNameDropdown.getText();
                }).then(function (message) {
                    if (message !== propName) {
                        that.eleRecEmsPropNameDropdown.click().then(function () {
                            globalCommons.waitForClickable(that.eleRecEmsPropSysNameSelected(propName));
                        }).then(function () {
                            that.eleRecEmsPropSysNameSelected(propName).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                });
            }
        }).then(function () {
            if (propType === "Message") {
                globalCommons.waitForElementPresent(that.eleRecEmsPropPurposeDropdown).then(function () {
                    return that.eleRecEmsPropPurposeDropdown.getText();
                }).then(function (message) {
                    if (message !== propPurpose) {
                        that.eleRecEmsPropPurposeDropdown.click().then(function () {
                            globalCommons.waitForClickable(that.eleRecEmsPropPurposeSelected(propPurpose));
                        }).then(function () {
                            that.eleRecEmsPropPurposeSelected(propPurpose).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    globalCommons.waitForElementPresent(that.eleRecEmsPropNameInput);
                }).then(function () {
                    that.eleRecEmsPropNameInput.clear().sendKeys(propName);
                }).then(function () {
                    if (propValue !== "") {
                        globalCommons.waitForClickable(that.eleRecEmsPropValuePicklistButton).then(function () {
                            that.eleRecEmsPropValuePicklistButton.click();
                        }).then(function () {
                            globalCommons.waitForElementPresent(that.eleRecEmsPropValueFromBufFieldSearchInput);
                        }).then(function () {
                            that.eleRecEmsPropValueFromBufFieldSearchInput.clear().sendKeys(propValue);
                        }).then(function () {
                            globalCommons.waitForClickable(that.eleRecEmsPropValueFromBufFieldSearchIcon);
                        }).then(function () {
                            that.eleRecEmsPropValueFromBufFieldSearchIcon.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecEmsPropValueFromBufFieldSelected(propValue));
                        }).then(function () {
                            that.eleRecEmsPropValueFromBufFieldSelected(propValue).click();
                        }).then(function () {
                            globalCommons.waitForClickable(that.eleRecEmsPropValueFromBufFieldSelectButton);
                        }).then(function () {
                            that.eleRecEmsPropValueFromBufFieldSelectButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (propType === "Buffer") {
                globalCommons.waitForElementPresent(that.eleRecEmsPropNameInput).then(function () {
                    that.eleRecEmsPropNameInput.clear().sendKeys(propName);
                }).then(function () {
                    if (propValue !== "") {
                        globalCommons.waitForClickable(that.eleRecEmsPropValuePicklistButton).then(function () {
                            that.eleRecEmsPropValuePicklistButton.click();
                        }).then(function () {
                            globalCommons.waitForElementPresent(that.eleRecEmsPropValueFromBufFieldSearchInput);
                        }).then(function () {
                            that.eleRecEmsPropValueFromBufFieldSearchInput.clear().sendKeys(propValue);
                        }).then(function () {
                            globalCommons.waitForClickable(that.eleRecEmsPropValueFromBufFieldSearchIcon);
                        }).then(function () {
                            that.eleRecEmsPropValueFromBufFieldSearchIcon.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecEmsPropValueFromBufFieldSelected(propValue));
                        }).then(function () {
                            that.eleRecEmsPropValueFromBufFieldSelected(propValue).click();
                        }).then(function () {
                            globalCommons.waitForClickable(that.eleRecEmsPropValueFromBufFieldSelectButton);
                        }).then(function () {
                            that.eleRecEmsPropValueFromBufFieldSelectButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (propType === "Value") {
                globalCommons.waitForElementPresent(that.eleRecEmsPropNameInput).then(function () {
                    that.eleRecEmsPropNameInput.clear().sendKeys(propName);
                }).then(function () {
                    that.eleRecEmsPropValueInput.clear().sendKeys(propValue);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        });
        return deferred.promise;
    };
    //
    // Function to delete a Recipe EMS Property.
    //
    configurePage.prototype._delEmsPropertyRec = function (propName) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleRecEmsPropNameSelected(propName)).then(function () {
            that.eleRecEmsPropNameSelected(propName).click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleRecEmsPropDelButton);
        }).then(function () {
            that.eleRecEmsPropDelButton.click();
        }).then(function () {
            deferred.fulfill();
        });
        return deferred.promise;
    };
    //
    // Function to replicate a Recipe EMS Property.
    //
    configurePage.prototype._replicateEmsPropertyRec = function (propName, propName2) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleRecEmsPropNameSelected(propName)).then(function () {
            that.eleRecEmsPropNameSelected(propName).click();
        }).then(function () {
            that.eleRecEmsPropNameSelected(propName).click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleRecEmsPropReplicateButton);
        }).then(function () {
            that.eleRecEmsPropReplicateButton.click();
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecEmsPropTypeDropdown);
        }).then(function () {
            return that.eleRecEmsPropTypeDropdown.getText();
        }).then(function (message) {
            if (message !== "System") {
                globalCommons.waitForElementPresent(that.eleRecEmsPropNameInput).then(function () {
                    that.eleRecEmsPropNameInput.clear().sendKeys(propName2);
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                globalCommons.waitForElementPresent(that.eleRecEmsPropNameDropdown).then(function () {
                    return that.eleRecEmsPropNameDropdown.getText();
                }).then(function (message) {
                    if (message !== propName2) {
                        that.eleRecEmsPropNameDropdown.click().then(function () {
                            globalCommons.waitForClickable(that.eleRecEmsPropSysNameSelected(propName2));
                        }).then(function () {
                            that.eleRecEmsPropSysNameSelected(propName2).click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                });
            }
        });
        return deferred.promise;
    };
    //
    // Function to delete a Recipe Service, then confirm the delete operation.
    //
    configurePage.prototype.delRecYes = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleRecLeftmenu);
        }).then(function () {
            that.eleRecLeftmenu.click();
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
    // Function to delete a Recipe Service, then discard the delete operation.
    //
    configurePage.prototype.delRecNo = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleRecLeftmenu);
        }).then(function () {
            that.eleRecLeftmenu.click();
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
    // Function to replicate a Recipe.
    //
    configurePage.prototype.replicateRec = function (name) {
        var deferred = protractor.promise.defer(), that = this;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleRecLeftmenu);
        }).then(function () {
            that.eleRecLeftmenu.click();
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
    // Function to add a Recipe with CICS Interface & EMS Connection
    //
    configurePage.prototype.addRecWithCicsEms = function (name, desc, intf, intfFromPickList, intf2, intf2FromPickList, conn, connFromPickList, disableOnErrorNum, disableOnErrorPercent, trclvl, inputCvr, inputCvrFromPickList, outputCvr, outputCvrFromPickList, resource, ssidFilter, methodReply, methodInvocation, mirrorTranId, csmiUserTran, rreTranId, rreSysName, channelName, ctnName, ctnInvocation, ctnCreation, forwardDestAsCtn, resource2, resource3, resource4, resource5, lsntoDest, lsntoDestType, responseDest, responseDestType, respondAlways, dynDestLength, dynDestStart, usageLimit, errorDest, errorDestType, smsl, delivery, durableSubscriber, durableClientId, priority, priorityValue, expiration, expirationValue, expirationUnit, compression, preserve, bodyTrace, msgType, copyCorrelation, selector) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfFromPickList = intfFromPickList === undefined ? "true" : intfFromPickList;
        intf2FromPickList = intf2FromPickList === undefined ? "true" : intf2FromPickList;
        connFromPickList = connFromPickList === undefined ? "true" : connFromPickList;
        inputCvrFromPickList = inputCvrFromPickList === undefined ? "true" : inputCvrFromPickList;
        outputCvrFromPickList = outputCvrFromPickList === undefined ? "true" : outputCvrFromPickList;
        desc = desc === undefined ? "" : desc;
        intf2 = intf2 === undefined ? "" : intf2;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        inputCvr = inputCvr === undefined ? "" : inputCvr;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        resource = resource === undefined ? "" : resource;
        methodReply = methodReply === undefined ? "Message" : methodReply;
        methodInvocation = methodInvocation === undefined ? "DPL" : methodInvocation;
        mirrorTranId = mirrorTranId === undefined ? "" : mirrorTranId;
        rreTranId = rreTranId === undefined ? "" : rreTranId;
        rreSysName = rreSysName === undefined ? "" : rreSysName;
        channelName = channelName === undefined ? "" : channelName;
        ctnName = ctnName === undefined ? "" : ctnName;
        ctnInvocation = ctnInvocation === undefined ? "Program" : ctnInvocation;
        ctnCreation = ctnCreation === undefined ? "Single" : ctnCreation;
        lsntoDest = lsntoDest === undefined ? "tibss.recipe.listenToDest" : lsntoDest;
        lsntoDestType = lsntoDestType === undefined ? "QUEUE" : lsntoDestType;
        responseDest = responseDest === undefined ? "" : responseDest;
        responseDestType = responseDestType === undefined ? "QUEUE" : responseDestType;
        respondAlways = respondAlways === undefined ? "true" : respondAlways;
        dynDestLength = dynDestLength === undefined ? "0" : dynDestLength;
        dynDestStart = dynDestStart === undefined ? "0" : dynDestStart;
        usageLimit = usageLimit === undefined ? "0" : usageLimit;
        errorDest = errorDest === undefined ? "" : errorDest;
        errorDestType = errorDestType === undefined ? "QUEUE" : errorDestType;
        smsl = smsl === undefined ? "Reliable Auto-Ack" : smsl;
        delivery = delivery === undefined ? "Persistent" : delivery;
        durableClientId = durableClientId === undefined ? "" : durableClientId;
        priorityValue = priorityValue === undefined ? "4" : priorityValue;
        expirationValue = expirationValue === undefined ? "0" : expirationValue;
        expirationUnit = expirationUnit === undefined ? "Seconds" : expirationUnit;
        msgType = msgType === undefined ? "Bytes" : msgType;
        copyCorrelation = copyCorrelation === undefined ? "No" : copyCorrelation;
        selector = selector === undefined ? "" : selector;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleRecLeftmenu);
        }).then(function () {
            that.eleRecLeftmenu.click();
        }).then(function () {
            globalCommons.waitForClickable(that.eleAddButton);
        }).then(function () {
            that.eleAddButton.click();
        }).then(function () {
            globalCommons.waitForDisplayed(that.eleRecNameInput);
        }).then(function () {
            that.eleRecNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleRecDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._intfRec(intf, intfFromPickList);
        }).then(function () {
            that._intf2Rec(intf2, intf2FromPickList);
        }).then(function () {
            that._connRec(conn, connFromPickList);
        }).then(function () {
            that.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._inputConversionRec(inputCvr, inputCvrFromPickList);
        }).then(function () {
            that._outputConversionRec(outputCvr, outputCvrFromPickList);
        }).then(function () {
            that.eleRecResourceNameInput.clear().sendKeys(resource);
        }).then(function () {
            that._ssidFilterRec(ssidFilter);
        }).then(function () {
            that._methodOfReplyRec(methodReply);
        }).then(function () {
            return that.eleRecCicsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecIntfExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecCicsDetailsExtension);
        }).then(function () {
            return that.eleRecCicsMethodInvocationDropdown.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecCicsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            that._methodOfInvocationCicsRec(methodInvocation);
        }).then(function () {
            that.eleRecCicsMirrorTranIdInput.clear().sendKeys(mirrorTranId);
        }).then(function () {
            that._csmiUserTranCicsRec(csmiUserTran);
        }).then(function () {
            that.eleRecCicsRRETranIdInput.clear().sendKeys(rreTranId);
        }).then(function () {
            that.eleRecCicsRRESysNameInput.clear().sendKeys(rreSysName);
        }).then(function () {
            that.eleRecCicsCtnChannelNameInput.clear().sendKeys(channelName);
        }).then(function () {
            that.eleRecCicsCtnContainerNameInput.clear().sendKeys(ctnName);
        }).then(function () {
            that._ctnInvocationCicsRec(ctnInvocation);
        }).then(function () {
            that._ctnCreationCicsRec(ctnCreation);
        }).then(function () {
            that._forwardDestAsCtnCicsRec(forwardDestAsCtn);
        }).then(function () {
            if (resource2 !== undefined) {
                globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                    that.eleRecCicsMultiExecResourceAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource2Input);
                }).then(function () {
                    that.eleRecCicsMultiExecResource2Input.clear().sendKeys(resource2);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource3 !== undefined) {
                globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                    that.eleRecCicsMultiExecResourceAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource3Input);
                }).then(function () {
                    that.eleRecCicsMultiExecResource3Input.clear().sendKeys(resource3);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource4 !== undefined) {
                globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                    that.eleRecCicsMultiExecResourceAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource4Input);
                }).then(function () {
                    that.eleRecCicsMultiExecResource4Input.clear().sendKeys(resource4);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource5 !== undefined) {
                globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                    that.eleRecCicsMultiExecResourceAddButton.click();
                }).then(function () {
                    globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource5Input);
                }).then(function () {
                    that.eleRecCicsMultiExecResource5Input.clear().sendKeys(resource5);
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleRecEmsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecEmsDetailsExtension);
        }).then(function () {
            return that.eleRecEmsListentoDestInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecEmsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecEmsListentoDestInput);
        }).then(function () {
            that.eleRecEmsListentoDestInput.clear().sendKeys(lsntoDest);
        }).then(function () {
            that._listentoDestTypeEmsRec(lsntoDestType);
        }).then(function () {
            that.eleRecEmsResponseDestInput.clear().sendKeys(responseDest);
        }).then(function () {
            that._responseDestTypeEmsRec(responseDestType);
        }).then(function () {
            that._respondAlwaysEmsRec(respondAlways);
        }).then(function () {
            that.eleRecEmsDynamicDestLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsDynamicDestLengthSpinner.clear().sendKeys(dynDestLength);
        }).then(function () {
            that.eleRecEmsDynamicDestStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsDynamicDestStartSpinner.clear().sendKeys(dynDestStart);
        }).then(function () {
            that.eleRecEmsUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsUsageLimitSpinner.clear().sendKeys(usageLimit);
        }).then(function () {
            that.eleRecEmsErrorMsgDestInput.clear().sendKeys(errorDest);
        }).then(function () {
            that._errorMsgDestTypeEmsRec(errorDestType);
        }).then(function () {
            that._smslModeEmsRec(smsl);
        }).then(function () {
            that._deliveryModeEmsRec(delivery);
        }).then(function () {
            that._durableSubcriberEmsRec(durableSubscriber);
        }).then(function () {
            that.eleRecEmsDurableClientIdInput.clear().sendKeys(durableClientId);
        }).then(function () {
            that._priorityOutputMsgEmsRec(priority);
        }).then(function () {
            that.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys(priorityValue);
        }).then(function () {
            that._expirationOutputMsgEmsRec(expiration);
        }).then(function () {
            that.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys(expirationValue);
        }).then(function () {
            that._unitOutputMsgExpirationEmsRec(expirationUnit);
        }).then(function () {
            that._compressionOutputMsgEmsRec(compression);
        }).then(function () {
            that._preserveOutputMsgEmsRec(preserve);
        }).then(function () {
            that._bodyTraceOutputMsgEmsRec(bodyTrace);
        }).then(function () {
            that._msgTypeOutputMsgEmsRec(msgType);
        }).then(function () {
            that._copyCorrelationOutputMsgEmsRec(copyCorrelation);
        }).then(function () {
            that.eleRecEmsSelectorInput.clear().sendKeys(selector);
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
    // Function to update a Recipe with CICS Interface & EMS Connection
    //
    configurePage.prototype.updateRecWithCicsEms = function (name, desc, intf, intfFromPickList, intf2, intf2FromPickList, conn, connFromPickList, disableOnErrorNum, disableOnErrorPercent, trclvl, inputCvr, inputCvrFromPickList, outputCvr, outputCvrFromPickList, resource, ssidFilter, methodReply, methodInvocation, mirrorTranId, csmiUserTran, rreTranId, rreSysName, channelName, ctnName, ctnInvocation, ctnCreation, forwardDestAsCtn, resource2, resource3, resource4, resource5, lsntoDest, lsntoDestType, responseDest, responseDestType, respondAlways, dynDestLength, dynDestStart, usageLimit, errorDest, errorDestType, smsl, delivery, durableSubscriber, durableClientId, priority, priorityValue, expiration, expirationValue, expirationUnit, compression, preserve, bodyTrace, msgType, copyCorrelation, selector) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfFromPickList = intfFromPickList === undefined ? "true" : intfFromPickList;
        intf2FromPickList = intf2FromPickList === undefined ? "true" : intf2FromPickList;
        connFromPickList = connFromPickList === undefined ? "true" : connFromPickList;
        inputCvrFromPickList = inputCvrFromPickList === undefined ? "true" : inputCvrFromPickList;
        outputCvrFromPickList = outputCvrFromPickList === undefined ? "true" : outputCvrFromPickList;
        desc = desc === undefined ? "" : desc;
        intf2 = intf2 === undefined ? "" : intf2;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        inputCvr = inputCvr === undefined ? "" : inputCvr;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        resource = resource === undefined ? "" : resource;
        methodReply = methodReply === undefined ? "Message" : methodReply;
        methodInvocation = methodInvocation === undefined ? "DPL" : methodInvocation;
        mirrorTranId = mirrorTranId === undefined ? "" : mirrorTranId;
        rreTranId = rreTranId === undefined ? "" : rreTranId;
        rreSysName = rreSysName === undefined ? "" : rreSysName;
        channelName = channelName === undefined ? "" : channelName;
        ctnName = ctnName === undefined ? "" : ctnName;
        ctnInvocation = ctnInvocation === undefined ? "Program" : ctnInvocation;
        ctnCreation = ctnCreation === undefined ? "Single" : ctnCreation;
        lsntoDest = lsntoDest === undefined ? "tibss.recipe.listenToDest" : lsntoDest;
        lsntoDestType = lsntoDestType === undefined ? "QUEUE" : lsntoDestType;
        responseDest = responseDest === undefined ? "" : responseDest;
        responseDestType = responseDestType === undefined ? "QUEUE" : responseDestType;
        respondAlways = respondAlways === undefined ? "true" : respondAlways;
        dynDestLength = dynDestLength === undefined ? "0" : dynDestLength;
        dynDestStart = dynDestStart === undefined ? "0" : dynDestStart;
        usageLimit = usageLimit === undefined ? "0" : usageLimit;
        errorDest = errorDest === undefined ? "" : errorDest;
        errorDestType = errorDestType === undefined ? "QUEUE" : errorDestType;
        smsl = smsl === undefined ? "Reliable Auto-Ack" : smsl;
        delivery = delivery === undefined ? "Persistent" : delivery;
        durableClientId = durableClientId === undefined ? "" : durableClientId;
        priorityValue = priorityValue === undefined ? "4" : priorityValue;
        expirationValue = expirationValue === undefined ? "0" : expirationValue;
        expirationUnit = expirationUnit === undefined ? "Seconds" : expirationUnit;
        msgType = msgType === undefined ? "Bytes" : msgType;
        copyCorrelation = copyCorrelation === undefined ? "No" : copyCorrelation;
        selector = selector === undefined ? "" : selector;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleRecLeftmenu);
        }).then(function () {
            that.eleRecLeftmenu.click();
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
            globalCommons.waitForDisplayed(that.eleRecNameInput);
        }).then(function () {
            that.eleRecNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleRecDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._intfRec(intf, intfFromPickList);
        }).then(function () {
            that._intf2Rec(intf2, intf2FromPickList);
        }).then(function () {
            that._connRec(conn, connFromPickList);
        }).then(function () {
            that.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._inputConversionRec(inputCvr, inputCvrFromPickList);
        }).then(function () {
            that._outputConversionRec(outputCvr, outputCvrFromPickList);
        }).then(function () {
            that.eleRecResourceNameInput.clear().sendKeys(resource);
        }).then(function () {
            that._ssidFilterRec(ssidFilter);
        }).then(function () {
            that._methodOfReplyRec(methodReply);
        }).then(function () {
            return that.eleRecCicsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecIntfExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecCicsDetailsExtension);
        }).then(function () {
            return that.eleRecCicsMethodInvocationDropdown.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecCicsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            that._methodOfInvocationCicsRec(methodInvocation);
        }).then(function () {
            that.eleRecCicsMirrorTranIdInput.clear().sendKeys(mirrorTranId);
        }).then(function () {
            that._csmiUserTranCicsRec(csmiUserTran);
        }).then(function () {
            that.eleRecCicsRRETranIdInput.clear().sendKeys(rreTranId);
        }).then(function () {
            that.eleRecCicsRRESysNameInput.clear().sendKeys(rreSysName);
        }).then(function () {
            that.eleRecCicsCtnChannelNameInput.clear().sendKeys(channelName);
        }).then(function () {
            that.eleRecCicsCtnContainerNameInput.clear().sendKeys(ctnName);
        }).then(function () {
            that._ctnInvocationCicsRec(ctnInvocation);
        }).then(function () {
            that._ctnCreationCicsRec(ctnCreation);
        }).then(function () {
            that._forwardDestAsCtnCicsRec(forwardDestAsCtn);
        }).then(function () {
            if (resource2 !== undefined) {
                return that.eleRecCicsMultiExecResource2Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource2Input.clear().sendKeys(resource2).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource2Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource2Input.clear().sendKeys(resource2);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource4Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource4RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource4RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource3Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource3RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource3RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource2Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource2RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource2RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource3 !== undefined) {
                return that.eleRecCicsMultiExecResource3Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource3Input.clear().sendKeys(resource3).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource3Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource3Input.clear().sendKeys(resource3);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource4Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource4RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource4RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource3Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource3RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource3RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource4 !== undefined) {
                return that.eleRecCicsMultiExecResource4Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource4Input.clear().sendKeys(resource4).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource4Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource4Input.clear().sendKeys(resource4);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource4Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource4RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource4RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource5 !== undefined) {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource5Input.clear().sendKeys(resource5).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource5Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource5Input.clear().sendKeys(resource5);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleRecEmsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecEmsDetailsExtension);
        }).then(function () {
            return that.eleRecEmsListentoDestInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecEmsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecEmsListentoDestInput);
        }).then(function () {
            that.eleRecEmsListentoDestInput.clear().sendKeys(lsntoDest);
        }).then(function () {
            that._listentoDestTypeEmsRec(lsntoDestType);
        }).then(function () {
            that.eleRecEmsResponseDestInput.clear().sendKeys(responseDest);
        }).then(function () {
            that._responseDestTypeEmsRec(responseDestType);
        }).then(function () {
            that._respondAlwaysEmsRec(respondAlways);
        }).then(function () {
            that.eleRecEmsDynamicDestLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsDynamicDestLengthSpinner.clear().sendKeys(dynDestLength);
        }).then(function () {
            that.eleRecEmsDynamicDestStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsDynamicDestStartSpinner.clear().sendKeys(dynDestStart);
        }).then(function () {
            that.eleRecEmsUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsUsageLimitSpinner.clear().sendKeys(usageLimit);
        }).then(function () {
            that.eleRecEmsErrorMsgDestInput.clear().sendKeys(errorDest);
        }).then(function () {
            that._errorMsgDestTypeEmsRec(errorDestType);
        }).then(function () {
            that._smslModeEmsRec(smsl);
        }).then(function () {
            that._deliveryModeEmsRec(delivery);
        }).then(function () {
            that._durableSubcriberEmsRec(durableSubscriber);
        }).then(function () {
            that.eleRecEmsDurableClientIdInput.clear().sendKeys(durableClientId);
        }).then(function () {
            that._priorityOutputMsgEmsRec(priority);
        }).then(function () {
            that.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys(priorityValue);
        }).then(function () {
            that._expirationOutputMsgEmsRec(expiration);
        }).then(function () {
            that.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys(expirationValue);
        }).then(function () {
            that._unitOutputMsgExpirationEmsRec(expirationUnit);
        }).then(function () {
            that._compressionOutputMsgEmsRec(compression);
        }).then(function () {
            that._preserveOutputMsgEmsRec(preserve);
        }).then(function () {
            that._bodyTraceOutputMsgEmsRec(bodyTrace);
        }).then(function () {
            that._msgTypeOutputMsgEmsRec(msgType);
        }).then(function () {
            that._copyCorrelationOutputMsgEmsRec(copyCorrelation);
        }).then(function () {
            that.eleRecEmsSelectorInput.clear().sendKeys(selector);
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
    // Function to cancel the changes of a Recipe with CICS Interface & EMS Connection, then confirm the cancel operation.
    //
    configurePage.prototype.cancelRecWithCicsEmsYes = function (name, desc, intf, intfFromPickList, intf2, intf2FromPickList, conn, connFromPickList, disableOnErrorNum, disableOnErrorPercent, trclvl, inputCvr, inputCvrFromPickList, outputCvr, outputCvrFromPickList, resource, ssidFilter, methodReply, methodInvocation, mirrorTranId, csmiUserTran, rreTranId, rreSysName, channelName, ctnName, ctnInvocation, ctnCreation, forwardDestAsCtn, resource2, resource3, resource4, resource5, lsntoDest, lsntoDestType, responseDest, responseDestType, respondAlways, dynDestLength, dynDestStart, usageLimit, errorDest, errorDestType, smsl, delivery, durableSubscriber, durableClientId, priority, priorityValue, expiration, expirationValue, expirationUnit, compression, preserve, bodyTrace, msgType, copyCorrelation, selector) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfFromPickList = intfFromPickList === undefined ? "true" : intfFromPickList;
        intf2FromPickList = intf2FromPickList === undefined ? "true" : intf2FromPickList;
        connFromPickList = connFromPickList === undefined ? "true" : connFromPickList;
        inputCvrFromPickList = inputCvrFromPickList === undefined ? "true" : inputCvrFromPickList;
        outputCvrFromPickList = outputCvrFromPickList === undefined ? "true" : outputCvrFromPickList;
        desc = desc === undefined ? "" : desc;
        intf2 = intf2 === undefined ? "" : intf2;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        inputCvr = inputCvr === undefined ? "" : inputCvr;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        resource = resource === undefined ? "" : resource;
        methodReply = methodReply === undefined ? "Message" : methodReply;
        methodInvocation = methodInvocation === undefined ? "DPL" : methodInvocation;
        mirrorTranId = mirrorTranId === undefined ? "" : mirrorTranId;
        rreTranId = rreTranId === undefined ? "" : rreTranId;
        rreSysName = rreSysName === undefined ? "" : rreSysName;
        channelName = channelName === undefined ? "" : channelName;
        ctnName = ctnName === undefined ? "" : ctnName;
        ctnInvocation = ctnInvocation === undefined ? "Program" : ctnInvocation;
        ctnCreation = ctnCreation === undefined ? "Single" : ctnCreation;
        lsntoDest = lsntoDest === undefined ? "tibss.recipe.listenToDest" : lsntoDest;
        lsntoDestType = lsntoDestType === undefined ? "QUEUE" : lsntoDestType;
        responseDest = responseDest === undefined ? "" : responseDest;
        responseDestType = responseDestType === undefined ? "QUEUE" : responseDestType;
        respondAlways = respondAlways === undefined ? "true" : respondAlways;
        dynDestLength = dynDestLength === undefined ? "0" : dynDestLength;
        dynDestStart = dynDestStart === undefined ? "0" : dynDestStart;
        usageLimit = usageLimit === undefined ? "0" : usageLimit;
        errorDest = errorDest === undefined ? "" : errorDest;
        errorDestType = errorDestType === undefined ? "QUEUE" : errorDestType;
        smsl = smsl === undefined ? "Reliable Auto-Ack" : smsl;
        delivery = delivery === undefined ? "Persistent" : delivery;
        durableClientId = durableClientId === undefined ? "" : durableClientId;
        priorityValue = priorityValue === undefined ? "4" : priorityValue;
        expirationValue = expirationValue === undefined ? "0" : expirationValue;
        expirationUnit = expirationUnit === undefined ? "Seconds" : expirationUnit;
        msgType = msgType === undefined ? "Bytes" : msgType;
        copyCorrelation = copyCorrelation === undefined ? "No" : copyCorrelation;
        selector = selector === undefined ? "" : selector;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleRecLeftmenu);
        }).then(function () {
            that.eleRecLeftmenu.click();
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
            globalCommons.waitForDisplayed(that.eleRecNameInput);
        }).then(function () {
            that.eleRecNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleRecDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._intfRec(intf, intfFromPickList);
        }).then(function () {
            that._intf2Rec(intf2, intf2FromPickList);
        }).then(function () {
            that._connRec(conn, connFromPickList);
        }).then(function () {
            that.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._inputConversionRec(inputCvr, inputCvrFromPickList);
        }).then(function () {
            that._outputConversionRec(outputCvr, outputCvrFromPickList);
        }).then(function () {
            that.eleRecResourceNameInput.clear().sendKeys(resource);
        }).then(function () {
            that._ssidFilterRec(ssidFilter);
        }).then(function () {
            that._methodOfReplyRec(methodReply);
        }).then(function () {
            return that.eleRecCicsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecIntfExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecCicsDetailsExtension);
        }).then(function () {
            return that.eleRecCicsMethodInvocationDropdown.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecCicsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            that._methodOfInvocationCicsRec(methodInvocation);
        }).then(function () {
            that.eleRecCicsMirrorTranIdInput.clear().sendKeys(mirrorTranId);
        }).then(function () {
            that._csmiUserTranCicsRec(csmiUserTran);
        }).then(function () {
            that.eleRecCicsRRETranIdInput.clear().sendKeys(rreTranId);
        }).then(function () {
            that.eleRecCicsRRESysNameInput.clear().sendKeys(rreSysName);
        }).then(function () {
            that.eleRecCicsCtnChannelNameInput.clear().sendKeys(channelName);
        }).then(function () {
            that.eleRecCicsCtnContainerNameInput.clear().sendKeys(ctnName);
        }).then(function () {
            that._ctnInvocationCicsRec(ctnInvocation);
        }).then(function () {
            that._ctnCreationCicsRec(ctnCreation);
        }).then(function () {
            that._forwardDestAsCtnCicsRec(forwardDestAsCtn);
        }).then(function () {
            if (resource2 !== undefined) {
                return that.eleRecCicsMultiExecResource2Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource2Input.clear().sendKeys(resource2).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource2Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource2Input.clear().sendKeys(resource2);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource4Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource4RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource4RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource3Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource3RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource3RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource2Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource2RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource2RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource3 !== undefined) {
                return that.eleRecCicsMultiExecResource3Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource3Input.clear().sendKeys(resource3).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource3Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource3Input.clear().sendKeys(resource3);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource4Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource4RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource4RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource3Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource3RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource3RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource4 !== undefined) {
                return that.eleRecCicsMultiExecResource4Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource4Input.clear().sendKeys(resource4).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource4Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource4Input.clear().sendKeys(resource4);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource4Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource4RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource4RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource5 !== undefined) {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource5Input.clear().sendKeys(resource5).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource5Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource5Input.clear().sendKeys(resource5);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleRecEmsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecEmsDetailsExtension);
        }).then(function () {
            return that.eleRecEmsListentoDestInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecEmsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecEmsListentoDestInput);
        }).then(function () {
            that.eleRecEmsListentoDestInput.clear().sendKeys(lsntoDest);
        }).then(function () {
            that._listentoDestTypeEmsRec(lsntoDestType);
        }).then(function () {
            that.eleRecEmsResponseDestInput.clear().sendKeys(responseDest);
        }).then(function () {
            that._responseDestTypeEmsRec(responseDestType);
        }).then(function () {
            that._respondAlwaysEmsRec(respondAlways);
        }).then(function () {
            that.eleRecEmsDynamicDestLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsDynamicDestLengthSpinner.clear().sendKeys(dynDestLength);
        }).then(function () {
            that.eleRecEmsDynamicDestStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsDynamicDestStartSpinner.clear().sendKeys(dynDestStart);
        }).then(function () {
            that.eleRecEmsUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsUsageLimitSpinner.clear().sendKeys(usageLimit);
        }).then(function () {
            that.eleRecEmsErrorMsgDestInput.clear().sendKeys(errorDest);
        }).then(function () {
            that._errorMsgDestTypeEmsRec(errorDestType);
        }).then(function () {
            that._smslModeEmsRec(smsl);
        }).then(function () {
            that._deliveryModeEmsRec(delivery);
        }).then(function () {
            that._durableSubcriberEmsRec(durableSubscriber);
        }).then(function () {
            that.eleRecEmsDurableClientIdInput.clear().sendKeys(durableClientId);
        }).then(function () {
            that._priorityOutputMsgEmsRec(priority);
        }).then(function () {
            that.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys(priorityValue);
        }).then(function () {
            that._expirationOutputMsgEmsRec(expiration);
        }).then(function () {
            that.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys(expirationValue);
        }).then(function () {
            that._unitOutputMsgExpirationEmsRec(expirationUnit);
        }).then(function () {
            that._compressionOutputMsgEmsRec(compression);
        }).then(function () {
            that._preserveOutputMsgEmsRec(preserve);
        }).then(function () {
            that._bodyTraceOutputMsgEmsRec(bodyTrace);
        }).then(function () {
            that._msgTypeOutputMsgEmsRec(msgType);
        }).then(function () {
            that._copyCorrelationOutputMsgEmsRec(copyCorrelation);
        }).then(function () {
            that.eleRecEmsSelectorInput.clear().sendKeys(selector);
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
    // Function to cancel the changes of a Recipe with CICS Interface & EMS Connection, then discard the cancel operation.
    //
    configurePage.prototype.cancelRecWithCicsEmsNo = function (name, desc, intf, intfFromPickList, intf2, intf2FromPickList, conn, connFromPickList, disableOnErrorNum, disableOnErrorPercent, trclvl, inputCvr, inputCvrFromPickList, outputCvr, outputCvrFromPickList, resource, ssidFilter, methodReply, methodInvocation, mirrorTranId, csmiUserTran, rreTranId, rreSysName, channelName, ctnName, ctnInvocation, ctnCreation, forwardDestAsCtn, resource2, resource3, resource4, resource5, lsntoDest, lsntoDestType, responseDest, responseDestType, respondAlways, dynDestLength, dynDestStart, usageLimit, errorDest, errorDestType, smsl, delivery, durableSubscriber, durableClientId, priority, priorityValue, expiration, expirationValue, expirationUnit, compression, preserve, bodyTrace, msgType, copyCorrelation, selector) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfFromPickList = intfFromPickList === undefined ? "true" : intfFromPickList;
        intf2FromPickList = intf2FromPickList === undefined ? "true" : intf2FromPickList;
        connFromPickList = connFromPickList === undefined ? "true" : connFromPickList;
        inputCvrFromPickList = inputCvrFromPickList === undefined ? "true" : inputCvrFromPickList;
        outputCvrFromPickList = outputCvrFromPickList === undefined ? "true" : outputCvrFromPickList;
        desc = desc === undefined ? "" : desc;
        intf2 = intf2 === undefined ? "" : intf2;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        inputCvr = inputCvr === undefined ? "" : inputCvr;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        resource = resource === undefined ? "" : resource;
        methodReply = methodReply === undefined ? "Message" : methodReply;
        methodInvocation = methodInvocation === undefined ? "DPL" : methodInvocation;
        mirrorTranId = mirrorTranId === undefined ? "" : mirrorTranId;
        rreTranId = rreTranId === undefined ? "" : rreTranId;
        rreSysName = rreSysName === undefined ? "" : rreSysName;
        channelName = channelName === undefined ? "" : channelName;
        ctnName = ctnName === undefined ? "" : ctnName;
        ctnInvocation = ctnInvocation === undefined ? "Program" : ctnInvocation;
        ctnCreation = ctnCreation === undefined ? "Single" : ctnCreation;
        lsntoDest = lsntoDest === undefined ? "tibss.recipe.listenToDest" : lsntoDest;
        lsntoDestType = lsntoDestType === undefined ? "QUEUE" : lsntoDestType;
        responseDest = responseDest === undefined ? "" : responseDest;
        responseDestType = responseDestType === undefined ? "QUEUE" : responseDestType;
        respondAlways = respondAlways === undefined ? "true" : respondAlways;
        dynDestLength = dynDestLength === undefined ? "0" : dynDestLength;
        dynDestStart = dynDestStart === undefined ? "0" : dynDestStart;
        usageLimit = usageLimit === undefined ? "0" : usageLimit;
        errorDest = errorDest === undefined ? "" : errorDest;
        errorDestType = errorDestType === undefined ? "QUEUE" : errorDestType;
        smsl = smsl === undefined ? "Reliable Auto-Ack" : smsl;
        delivery = delivery === undefined ? "Persistent" : delivery;
        durableClientId = durableClientId === undefined ? "" : durableClientId;
        priorityValue = priorityValue === undefined ? "4" : priorityValue;
        expirationValue = expirationValue === undefined ? "0" : expirationValue;
        expirationUnit = expirationUnit === undefined ? "Seconds" : expirationUnit;
        msgType = msgType === undefined ? "Bytes" : msgType;
        copyCorrelation = copyCorrelation === undefined ? "No" : copyCorrelation;
        selector = selector === undefined ? "" : selector;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleRecLeftmenu);
        }).then(function () {
            that.eleRecLeftmenu.click();
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
            globalCommons.waitForDisplayed(that.eleRecNameInput);
        }).then(function () {
            that.eleRecNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleRecDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._intfRec(intf, intfFromPickList);
        }).then(function () {
            that._intf2Rec(intf2, intf2FromPickList);
        }).then(function () {
            that._connRec(conn, connFromPickList);
        }).then(function () {
            that.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._inputConversionRec(inputCvr, inputCvrFromPickList);
        }).then(function () {
            that._outputConversionRec(outputCvr, outputCvrFromPickList);
        }).then(function () {
            that.eleRecResourceNameInput.clear().sendKeys(resource);
        }).then(function () {
            that._ssidFilterRec(ssidFilter);
        }).then(function () {
            that._methodOfReplyRec(methodReply);
        }).then(function () {
            return that.eleRecCicsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecIntfExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecCicsDetailsExtension);
        }).then(function () {
            return that.eleRecCicsMethodInvocationDropdown.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecCicsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            that._methodOfInvocationCicsRec(methodInvocation);
        }).then(function () {
            that.eleRecCicsMirrorTranIdInput.clear().sendKeys(mirrorTranId);
        }).then(function () {
            that._csmiUserTranCicsRec(csmiUserTran);
        }).then(function () {
            that.eleRecCicsRRETranIdInput.clear().sendKeys(rreTranId);
        }).then(function () {
            that.eleRecCicsRRESysNameInput.clear().sendKeys(rreSysName);
        }).then(function () {
            that.eleRecCicsCtnChannelNameInput.clear().sendKeys(channelName);
        }).then(function () {
            that.eleRecCicsCtnContainerNameInput.clear().sendKeys(ctnName);
        }).then(function () {
            that._ctnInvocationCicsRec(ctnInvocation);
        }).then(function () {
            that._ctnCreationCicsRec(ctnCreation);
        }).then(function () {
            that._forwardDestAsCtnCicsRec(forwardDestAsCtn);
        }).then(function () {
            if (resource2 !== undefined) {
                return that.eleRecCicsMultiExecResource2Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource2Input.clear().sendKeys(resource2).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource2Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource2Input.clear().sendKeys(resource2);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource4Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource4RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource4RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource3Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource3RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource3RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource2Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource2RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource2RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource3 !== undefined) {
                return that.eleRecCicsMultiExecResource3Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource3Input.clear().sendKeys(resource3).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource3Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource3Input.clear().sendKeys(resource3);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource4Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource4RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource4RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource3Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource3RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource3RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource4 !== undefined) {
                return that.eleRecCicsMultiExecResource4Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource4Input.clear().sendKeys(resource4).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource4Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource4Input.clear().sendKeys(resource4);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource4Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource4RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource4RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource5 !== undefined) {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource5Input.clear().sendKeys(resource5).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource5Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource5Input.clear().sendKeys(resource5);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleRecEmsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecEmsDetailsExtension);
        }).then(function () {
            return that.eleRecEmsListentoDestInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecEmsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecEmsListentoDestInput);
        }).then(function () {
            that.eleRecEmsListentoDestInput.clear().sendKeys(lsntoDest);
        }).then(function () {
            that._listentoDestTypeEmsRec(lsntoDestType);
        }).then(function () {
            that.eleRecEmsResponseDestInput.clear().sendKeys(responseDest);
        }).then(function () {
            that._responseDestTypeEmsRec(responseDestType);
        }).then(function () {
            that._respondAlwaysEmsRec(respondAlways);
        }).then(function () {
            that.eleRecEmsDynamicDestLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsDynamicDestLengthSpinner.clear().sendKeys(dynDestLength);
        }).then(function () {
            that.eleRecEmsDynamicDestStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsDynamicDestStartSpinner.clear().sendKeys(dynDestStart);
        }).then(function () {
            that.eleRecEmsUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsUsageLimitSpinner.clear().sendKeys(usageLimit);
        }).then(function () {
            that.eleRecEmsErrorMsgDestInput.clear().sendKeys(errorDest);
        }).then(function () {
            that._errorMsgDestTypeEmsRec(errorDestType);
        }).then(function () {
            that._smslModeEmsRec(smsl);
        }).then(function () {
            that._deliveryModeEmsRec(delivery);
        }).then(function () {
            that._durableSubcriberEmsRec(durableSubscriber);
        }).then(function () {
            that.eleRecEmsDurableClientIdInput.clear().sendKeys(durableClientId);
        }).then(function () {
            that._priorityOutputMsgEmsRec(priority);
        }).then(function () {
            that.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys(priorityValue);
        }).then(function () {
            that._expirationOutputMsgEmsRec(expiration);
        }).then(function () {
            that.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys(expirationValue);
        }).then(function () {
            that._unitOutputMsgExpirationEmsRec(expirationUnit);
        }).then(function () {
            that._compressionOutputMsgEmsRec(compression);
        }).then(function () {
            that._preserveOutputMsgEmsRec(preserve);
        }).then(function () {
            that._bodyTraceOutputMsgEmsRec(bodyTrace);
        }).then(function () {
            that._msgTypeOutputMsgEmsRec(msgType);
        }).then(function () {
            that._copyCorrelationOutputMsgEmsRec(copyCorrelation);
        }).then(function () {
            that.eleRecEmsSelectorInput.clear().sendKeys(selector);
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
    // Function to make changes to a Recipe with CICS Interface & EMS Connection, then reset the Recipe.
    //
    configurePage.prototype.resetRecWithCicsEms = function (name, desc, intf, intfFromPickList, intf2, intf2FromPickList, conn, connFromPickList, disableOnErrorNum, disableOnErrorPercent, trclvl, inputCvr, inputCvrFromPickList, outputCvr, outputCvrFromPickList, resource, ssidFilter, methodReply, methodInvocation, mirrorTranId, csmiUserTran, rreTranId, rreSysName, channelName, ctnName, ctnInvocation, ctnCreation, forwardDestAsCtn, resource2, resource3, resource4, resource5, lsntoDest, lsntoDestType, responseDest, responseDestType, respondAlways, dynDestLength, dynDestStart, usageLimit, errorDest, errorDestType, smsl, delivery, durableSubscriber, durableClientId, priority, priorityValue, expiration, expirationValue, expirationUnit, compression, preserve, bodyTrace, msgType, copyCorrelation, selector) {
        var deferred = protractor.promise.defer(), that = this;
        var backspaceSeries = Array(8).join(protractor.Key.BACK_SPACE);
        intfFromPickList = intfFromPickList === undefined ? "true" : intfFromPickList;
        intf2FromPickList = intf2FromPickList === undefined ? "true" : intf2FromPickList;
        connFromPickList = connFromPickList === undefined ? "true" : connFromPickList;
        inputCvrFromPickList = inputCvrFromPickList === undefined ? "true" : inputCvrFromPickList;
        outputCvrFromPickList = outputCvrFromPickList === undefined ? "true" : outputCvrFromPickList;
        desc = desc === undefined ? "" : desc;
        intf2 = intf2 === undefined ? "" : intf2;
        disableOnErrorNum = disableOnErrorNum === undefined ? "0" : disableOnErrorNum;
        disableOnErrorPercent = disableOnErrorPercent === undefined ? "0" : disableOnErrorPercent;
        trclvl = trclvl === undefined ? "0" : trclvl;
        inputCvr = inputCvr === undefined ? "" : inputCvr;
        outputCvr = outputCvr === undefined ? "" : outputCvr;
        resource = resource === undefined ? "" : resource;
        methodReply = methodReply === undefined ? "Message" : methodReply;
        methodInvocation = methodInvocation === undefined ? "DPL" : methodInvocation;
        mirrorTranId = mirrorTranId === undefined ? "" : mirrorTranId;
        rreTranId = rreTranId === undefined ? "" : rreTranId;
        rreSysName = rreSysName === undefined ? "" : rreSysName;
        channelName = channelName === undefined ? "" : channelName;
        ctnName = ctnName === undefined ? "" : ctnName;
        ctnInvocation = ctnInvocation === undefined ? "Program" : ctnInvocation;
        ctnCreation = ctnCreation === undefined ? "Single" : ctnCreation;
        lsntoDest = lsntoDest === undefined ? "tibss.recipe.listenToDest" : lsntoDest;
        lsntoDestType = lsntoDestType === undefined ? "QUEUE" : lsntoDestType;
        responseDest = responseDest === undefined ? "" : responseDest;
        responseDestType = responseDestType === undefined ? "QUEUE" : responseDestType;
        respondAlways = respondAlways === undefined ? "true" : respondAlways;
        dynDestLength = dynDestLength === undefined ? "0" : dynDestLength;
        dynDestStart = dynDestStart === undefined ? "0" : dynDestStart;
        usageLimit = usageLimit === undefined ? "0" : usageLimit;
        errorDest = errorDest === undefined ? "" : errorDest;
        errorDestType = errorDestType === undefined ? "QUEUE" : errorDestType;
        smsl = smsl === undefined ? "Reliable Auto-Ack" : smsl;
        delivery = delivery === undefined ? "Persistent" : delivery;
        durableClientId = durableClientId === undefined ? "" : durableClientId;
        priorityValue = priorityValue === undefined ? "4" : priorityValue;
        expirationValue = expirationValue === undefined ? "0" : expirationValue;
        expirationUnit = expirationUnit === undefined ? "Seconds" : expirationUnit;
        msgType = msgType === undefined ? "Bytes" : msgType;
        copyCorrelation = copyCorrelation === undefined ? "No" : copyCorrelation;
        selector = selector === undefined ? "" : selector;

        globalCommons.waitForElementPresent(that.eleScreenElement).then(function () {
            globalCommons.waitForClickable(that.eleRecLeftmenu);
        }).then(function () {
            that.eleRecLeftmenu.click();
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
            globalCommons.waitForDisplayed(that.eleRecNameInput);
        }).then(function () {
            that.eleRecNameInput.clear().sendKeys(name);
        }).then(function () {
            that.eleRecDescInput.clear().sendKeys(desc);
        }).then(function () {
            that._intfRec(intf, intfFromPickList);
        }).then(function () {
            that._intf2Rec(intf2, intf2FromPickList);
        }).then(function () {
            that._connRec(conn, connFromPickList);
        }).then(function () {
            that.eleRecDisableOnErrorNumSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecDisableOnErrorNumSpinner.clear().sendKeys(disableOnErrorNum);
        }).then(function () {
            that.eleRecDisableOnErrorPercentSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecDisableOnErrorPercentSpinner.clear().sendKeys(disableOnErrorPercent);
        }).then(function () {
            that.eleRecTrclvlSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecTrclvlSpinner.clear().sendKeys(trclvl);
        }).then(function () {
            that._inputConversionRec(inputCvr, inputCvrFromPickList);
        }).then(function () {
            that._outputConversionRec(outputCvr, outputCvrFromPickList);
        }).then(function () {
            that.eleRecResourceNameInput.clear().sendKeys(resource);
        }).then(function () {
            that._ssidFilterRec(ssidFilter);
        }).then(function () {
            that._methodOfReplyRec(methodReply);
        }).then(function () {
            return that.eleRecCicsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecIntfExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecCicsDetailsExtension);
        }).then(function () {
            return that.eleRecCicsMethodInvocationDropdown.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecCicsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            that._methodOfInvocationCicsRec(methodInvocation);
        }).then(function () {
            that.eleRecCicsMirrorTranIdInput.clear().sendKeys(mirrorTranId);
        }).then(function () {
            that._csmiUserTranCicsRec(csmiUserTran);
        }).then(function () {
            that.eleRecCicsRRETranIdInput.clear().sendKeys(rreTranId);
        }).then(function () {
            that.eleRecCicsRRESysNameInput.clear().sendKeys(rreSysName);
        }).then(function () {
            that.eleRecCicsCtnChannelNameInput.clear().sendKeys(channelName);
        }).then(function () {
            that.eleRecCicsCtnContainerNameInput.clear().sendKeys(ctnName);
        }).then(function () {
            that._ctnInvocationCicsRec(ctnInvocation);
        }).then(function () {
            that._ctnCreationCicsRec(ctnCreation);
        }).then(function () {
            that._forwardDestAsCtnCicsRec(forwardDestAsCtn);
        }).then(function () {
            if (resource2 !== undefined) {
                return that.eleRecCicsMultiExecResource2Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource2Input.clear().sendKeys(resource2).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource2Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource2Input.clear().sendKeys(resource2);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource4Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource4RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource4RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource3Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource3RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource3RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource2Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource2RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource2RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource3 !== undefined) {
                return that.eleRecCicsMultiExecResource3Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource3Input.clear().sendKeys(resource3).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource3Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource3Input.clear().sendKeys(resource3);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource4Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource4RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource4RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource3Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource3RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource3RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource4 !== undefined) {
                return that.eleRecCicsMultiExecResource4Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource4Input.clear().sendKeys(resource4).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource4Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource4Input.clear().sendKeys(resource4);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    return that.eleRecCicsMultiExecResource4Input.isPresent();
                }).then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource4RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource4RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            if (resource5 !== undefined) {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        that.eleRecCicsMultiExecResource5Input.clear().sendKeys(resource5).then(function () {
                            deferred.fulfill();
                        });
                    } else {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResourceAddButton).then(function () {
                            that.eleRecCicsMultiExecResourceAddButton.click();
                        }).then(function () {
                            globalCommons.waitForDisplayed(that.eleRecCicsMultiExecResource5Input);
                        }).then(function () {
                            that.eleRecCicsMultiExecResource5Input.clear().sendKeys(resource5);
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            } else {
                return that.eleRecCicsMultiExecResource5Input.isPresent().then(function (result) {
                    if (result === true) {
                        globalCommons.waitForClickable(that.eleRecCicsMultiExecResource5RemoveButton).then(function () {
                            that.eleRecCicsMultiExecResource5RemoveButton.click();
                        }).then(function () {
                            deferred.fulfill();
                        });
                    }
                }).then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            return that.eleRecEmsDetailsExtension.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecConnectionExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecEmsDetailsExtension);
        }).then(function () {
            return that.eleRecEmsListentoDestInput.isPresent();
        }).then(function (result) {
            if (result = false) {
                that.eleRecEmsDetailsExtension.click().then(function () {
                    deferred.fulfill();
                });
            }
        }).then(function () {
            globalCommons.waitForElementPresent(that.eleRecEmsListentoDestInput);
        }).then(function () {
            that.eleRecEmsListentoDestInput.clear().sendKeys(lsntoDest);
        }).then(function () {
            that._listentoDestTypeEmsRec(lsntoDestType);
        }).then(function () {
            that.eleRecEmsResponseDestInput.clear().sendKeys(responseDest);
        }).then(function () {
            that._responseDestTypeEmsRec(responseDestType);
        }).then(function () {
            that._respondAlwaysEmsRec(respondAlways);
        }).then(function () {
            that.eleRecEmsDynamicDestLengthSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsDynamicDestLengthSpinner.clear().sendKeys(dynDestLength);
        }).then(function () {
            that.eleRecEmsDynamicDestStartSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsDynamicDestStartSpinner.clear().sendKeys(dynDestStart);
        }).then(function () {
            that.eleRecEmsUsageLimitSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsUsageLimitSpinner.clear().sendKeys(usageLimit);
        }).then(function () {
            that.eleRecEmsErrorMsgDestInput.clear().sendKeys(errorDest);
        }).then(function () {
            that._errorMsgDestTypeEmsRec(errorDestType);
        }).then(function () {
            that._smslModeEmsRec(smsl);
        }).then(function () {
            that._deliveryModeEmsRec(delivery);
        }).then(function () {
            that._durableSubcriberEmsRec(durableSubscriber);
        }).then(function () {
            that.eleRecEmsDurableClientIdInput.clear().sendKeys(durableClientId);
        }).then(function () {
            that._priorityOutputMsgEmsRec(priority);
        }).then(function () {
            that.eleRecEmsOutputMsgPriorityValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsOutputMsgPriorityValueSpinner.clear().sendKeys(priorityValue);
        }).then(function () {
            that._expirationOutputMsgEmsRec(expiration);
        }).then(function () {
            that.eleRecEmsOutputMsgExpirationValueSpinner.sendKeys(backspaceSeries);
        }).then(function () {
            that.eleRecEmsOutputMsgExpirationValueSpinner.clear().sendKeys(expirationValue);
        }).then(function () {
            that._unitOutputMsgExpirationEmsRec(expirationUnit);
        }).then(function () {
            that._compressionOutputMsgEmsRec(compression);
        }).then(function () {
            that._preserveOutputMsgEmsRec(preserve);
        }).then(function () {
            that._bodyTraceOutputMsgEmsRec(bodyTrace);
        }).then(function () {
            that._msgTypeOutputMsgEmsRec(msgType);
        }).then(function () {
            that._copyCorrelationOutputMsgEmsRec(copyCorrelation);
        }).then(function () {
            that.eleRecEmsSelectorInput.clear().sendKeys(selector);
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