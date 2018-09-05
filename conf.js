var suites = {
    globalNavi: 'tests/globalNavi.js',
    SSESOpsAfterSignin: 'tests/SSESOpsAfterSignin.js',
    SSESOpsAfterSignout: 'tests/SSESOpsAfterSignout.js',
    REDOpsAfterSignin: 'tests/REDOpsAfterSignin.js',
    REDOpsAfterSignout: 'tests/REDOpsAfterSignout.js',
    deploy: 'tests/deploy.js',
    configureMessage: 'tests/configureMessage.js',
    configureBuffer: 'tests/configureBuffer.js',
    configureConversionRule: 'tests/configureConversionRule.js',
    configureTriggerWithEMS: 'tests/configureTriggerWithEMS.js',
    configureTriggerWithRV: 'tests/configureTriggerWithRV.js',
    configureRecipeWithCICSEMS: 'tests/configureRecipeWithCICSEMS.js',
    defineEndpointEMS: 'tests/defineEndpointEMS.js',
    defineEndpointRV: 'tests/defineEndpointRV.js',
    defineEndpointCICS: 'tests/defineEndpointCICS.js',
    defineEndpointIMS: 'tests/defineEndpointIMS.js',
    defineEndpointAdmin: 'tests/defineEndpointAdmin.js',
    defineEndpointSS: 'tests/defineEndpointSS.js',
    defineEndpointRED: 'tests/defineEndpointRED.js',
    defineConnEMS: 'tests/defineConnEMS.js',
    defineConnEMSSSL: 'tests/defineConnEMSSSL.js',
    defineConnRV: 'tests/defineConnRV.js',
    defineIntfEMS: 'tests/defineIntfEMS.js',
    defineIntfRV: 'tests/defineIntfRV.js',
    defineIntfCICS: 'tests/defineIntfCICS.js',
    defineIntfIMS: 'tests/defineIntfIMS.js',
    defineIntfRED: 'tests/defineIntfRED.js',
    defineIntfTCP: 'tests/defineIntfTCP.js',
    defineIntfAdmin: 'tests/defineIntfAdmin.js',
    defineSS: 'tests/defineSS.js',
    accessEntities: 'tests/accessEntities.js',
    accessMyAccount: 'tests/accessMyAccount.js',
    accessUserManagement: 'tests/accessUserManagement.js',
    accessUsageManagement: 'tests/accessUsageManagement.js',
    accessSecuritySettings: 'tests/accessSecuritySettings.js',
    accessGeneralSettings: 'tests/accessGeneralSettings.js'
};

// Get the mfWebUI project path
var projectPath = process.cwd();

// Get the operating system platform on which the Node.js process is running
var osPlatform = process.platform;

// Generate current data and time with format 'yyyy-MM-ddThh:mm:ss'
var today = new Date();
var ss = today.getSeconds();
var mm = today.getMinutes();
var hh = today.getHours();
var dd = today.getDate();
var MM = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (ss < 10) {
    ss = '0' + ss;
}
if (mm < 10) {
    mm = '0' + mm;
}
if (hh < 10) {
    hh = '0' + hh;
}
if (dd < 10) {
    dd = '0' + dd;
}
if (MM < 10) {
    MM = '0' + MM;
}
today = yyyy + '-' + MM + '-' + dd + 'T' + hh + ':' + mm + ':' + ss;

// Set the tomcat url
// var hostname = process.env.SERVER_HOSTNAME || "10.97.170.59";
var hostname = process.env.SERVER_HOSTNAME || "localhost";
// var hostname = process.env.SERVER_HOSTNAME || "10.102.17.107";
var baseport = process.env.SERVER_BASEPORT || "60080";
var baseUrl = "http://" + hostname + ":" + baseport;

// Select the browser type
var capabilities = {
    'browserName': 'chrome'    // Support both local environment and docker (recommended)
    // 'browserName': 'firefox'    // Support both local environment and docker (recommended)
    // 'browserName': 'safari'
    // 'browserName': 'internet explorer'    // Only support local environment. You need to download IEDriverServer manually from 'www.seleniumhq.org/download', and install it at node_modules/webdriver-manager/selenium/IEDriverServer.exe (not recommended)
    // 'browserName': 'MicrosoftEdge'    // Only support local environment. You need to download MicrosoftWebDriver manually from 'https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/', and install it at node_modules/webdriver-manager/selenium/MicrosoftWebDriver.exe (not recommended)
};
var jvmArgs = ["-Dwebdriver.gecko.driver=node_modules/webdriver-manager/selenium/geckodriver-v0.17.0"];
if (osPlatform === "win32") {
    jvmArgs = ["-Dwebdriver.gecko.driver=node_modules/webdriver-manager/selenium/geckodriver-v0.17.0.exe",
        "-Dwebdriver.ie.driver=node_modules/webdriver-manager/selenium/IEDriverServer.exe",
        "-Dwebdriver.edge.driver=node_modules/webdriver-manager/selenium/MicrostWebDriver.exe"]
}
var screen = [1440, 900];    // Set browser screen size
if (process.env.DISPLAY_SIZE) {
    var arr = process.env.DISPLAY_SIZE.split("x");
    screen = [Number(arr[0]), Number(arr[1])];
    console.log("DISPLAY width X height: " + screen.join(" X "));
}
console.log("Browser:" + capabilities.browserName + ", Base URL: " + baseUrl);

// Set report destination
var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlReporter({
    dest: './report/protractor/' + today,    // A location to store screen shots & result report.
    docTitle: 'MF_WebUI Protractor Reporter',
    cleanDestination: true,
    showSummary: false,
    showConfiguration: false,
    reportTitle: null,
    filename: 'report.html'
});


exports.config = {
    seleniumPort: 4444,
    baseUrl: baseUrl,
    localSeleniumStandaloneOpts: {
        jvmArgs: jvmArgs
    },
    params: {
        screen: {
            width: screen[0],
            height: screen[1]
        },

        // WebUI Signin default settings
        signin: {
            username: 'master',
            password: 'master'
        },
        // Deploy -> Workspace default settings
        workspace: {
            // This is the new workspace will be created, and all the entities will be created/edited in this workspace.
            name: 'MFQA_master_WS001',
            description: 'Workspace001 for MFQA Master',

            // An exported SS config file, the file must be created before run deploy.js
            loadFromFilePath: 'C:/tibcoProjects/WebUI/XML/CE001.DATA', //The xml file path on tomcat server machine
            // loadFromFilePath: projectPath + '/testData/xml/CE001.DATA', //Uncomment this line if tomcat server runs on local machine

            // An empty file, the file must be created before run deploy.js
            loadFromEmptyFilePath: 'C:/tibcoProjects/WebUI/XML/empty.DATA', //The xml file path on tomcat server machine
            // loadFromEmptyFilePath: projectPath + '/testData/xml/empty.DATA', //Uncomment this line if tomcat server runs on local machine

            // A file contains invalid data "hahaha", the file must be created before run deploy.js
            loadFromInvalidDataFilePath: 'C:/tibcoProjects/WebUI/XML/invalidData.DATA', //The xml file path on tomcat server machine
            // loadFromInvalidDataFilePath: projectPath + '/testData/xml/invalidData.DATA', //Uncomment this line if tomcat server runs on local machine

            // Default workspace name when test 'Load Workspace from an existing workspace'
            loadFromWorkspaceName: 'CICS_EMS'
        },
        // Define -> EMS Endpoint Details default settings
        endpointEMS: {
            userid: 'admin',
            password: 'admin',
            url: '10.97.170.59:8100',
            ssl: '',
            connFactory: ''
        },
        // Define -> RV Endpoint Details default settings
        endpointRV: {
            url: 'WEED:10001'
        },
        // Define -> CICS Endpoint Details default settings
        endpointCICS: {
            applid: 'C412YW1G',
            administration: 'SXCSSADM',
            serviceRec: 'SXCSSDPL',
            serviceTrg: 'SXCSSTRG'
        },
        // Define -> IMS Endpoint Details default settings
        endpointIMS: {
            applid: 'IMSAPPL',
            xcfGrp: 'SXIXCFGR'
        },
        // Define -> Substation Endpoint Details default settings
        endpointSSES: {
            url: 'CAFE:8100',
            userid: 'DEMO2',
            password: 'WEBUI'
        },
        // Define -> RED Endpoint Details default settings
        endpointRED: {
            url: 'CAFE:23529',
            userid: 'DEMO2',
            password: 'WEBUI'
        },
        // Define -> EMS Connection Details default settings
        connEMS: {
            userid: '',
            password: '',
            admConnUserid: '',
            admConnPassword: ''
        },
        // Define -> RV Connection Details default settings
        connRV: {
            service: '8303',
            network: '',
            networkCodepage: '',
            hostCodepage: '',
            tcpipStackname: ''
        },
        // Define -> EMS Interface Details default settings
        intfEMS: {
            intfid: 'ESB01'
        },
        // Define -> RV Interface Details default settings
        intfRV: {
            intfid: 'ESB01'
        },
        // Define -> CICS Interface Details default settings
        intfCICS: {
            intfid: 'CICS01',
            mirrorTranid: '',
            userid: ''
        },
        // Define -> IMS Interface Details default settings
        intfIMS: {
            intfid: 'IMS01',
            xcfMemberName: 'SXI#XCFMBR',
            tpipeName: 'SXITPIPE',
            tpipePrefix: 'SXITP',
            tpipeForTriggerGuaranteed: '',
            tpipeForTriggerReliable: '',
            tpipeForSyncCallout: ''
        },
        // Define -> RED Interface Details default settings
        intfRED: {
            intfid: 'RED01',
            hubName: 'CAFE',
            adminName: 'REDADM',
            groupName: 'TIBSS',
            monitorName: 'TIBMON',
            listenerName: 'MSGS#RED',
            listenerTranid: '#RED'
        },
        // Define -> TCP Interface Details default settings
        intfTCP: {
            intfid: 'TCP01',
            url: 'CAFE:8100'
        },
        // Define -> Admin Interface Details default settings
        intfAdmin: {
            intfid: 'ADMIN'
        },
        // Define -> Substation Interface Details default settings
        substation: {
            ssid: 'SSID001'
        },
        // Access default settings
        access: {
            userDetailsWorkspace: 'CICS_EMS',
            userDetailsWorkspace2: 'CICS_RV',
            rvInstallationPath: 'C:/tibco/tibrv/8.4'
            // rvInstallationPath: '/opt/mfqa/tibco/tibrv/8.4'
        }
    },

    allScriptsTimeout: 500000,
    capabilities: capabilities,

    suites: suites,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 500000
    },

    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    // Close the report after all tests finish
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    // prepare for sign-in, add and select workspace before execute the test cases.
    onPrepare: function () {
        var GlobalNaviPage = require('./pageObject/globalNaviPage.js');
        var DeployPage = require('./pageObject/deployPage.js');
        var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        global.expect = chai.expect;

        browser.driver.manage().window().setSize(browser.params.screen.width, browser.params.screen.height);
        jasmine.getEnv().addReporter(reporter);

        browser.ignoreSynchronization = true;
        var globalNaviPage = new GlobalNaviPage();
        var deployPage = new DeployPage();
        globalNaviPage.visitPage("/MF_WebUI/").then(function () {
            globalNaviPage.signin();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalNaviPage.eleDeployMenu.click();
        }).then(function () {
            deployPage.addWorkspace2();
        }).then(function () {
            browser.sleep(500);
        }).then(function () {
            globalNaviPage.selectWorkspace();
        }).then(function () {
            browser.sleep(1000);
        });
    }
};