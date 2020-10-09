# End to End test
  Run e2e test cases on local environment or inside docker

## Setup environment on Mac/Ubuntu local 
1. Install node.js (https://nodejs.org/en/download/current/);
2. Install JDK and the system PATH includes a reference to it;
3. Checkout code: copy mfWebUI.zip and unzip it on Mac/Ubuntu, for example: /Users/xxx/e2e/mfWebUI;
4. #cd /Users/xxx/e2e/mfWebUI/ 
   And then Submit commands:
   #npm install    (/Users/xxx/e2e/mfWebUI/node_modules/ will be generated)
   #grunt install
   Before submit the above 2 commands, maybe you need to submit the following commands to upgrade package.json
   #npm install -g npm-check-updates
   #ncu
   #ncu -u
5. Run automation:
   #grunt test    (Run all the spec files listed in /Users/xxx/e2e/mfWebUI/conf.js)
   #grunt test:single    (Run individual spec file specified in line 36 of /Users/xxx/e2e/mfWebUI/Gruntfile.js, the spec file must be defined in conf.js)
6. Check the test result: 
  /Users/xxx/e2e/mfWebUI/report/protractor/.../report.html

## Setup environment on Windows local 
1. Install node.js (https://nodejs.org/en/download/current/);
2. Install JDK and the system PATH includes a reference to it;
3. Checkout code: copy mfWebUI.zip and unzip it on windows, for example C:\e2e\mfWebUI;
4. Submit commands:
  C:\e2e\mfWebUI\npm install   (C:\e2e\mfWebUI\node_modules will be generated)
  C:\e2e\mfWebUI\grunt install
5. Run automation:
  C:\e2e\mfWebUI\grunt test    (Run all the spec files listed in C:\e2e\mfWebUI\conf.js)
  C:\e2e\mfWebUI\grunt test:single    (Run individual spec file specified in line 36 of C:\e2e\mfWebUI\Gruntfile.js, the spec file must be defined in conf.js)
6. Check the test result: 
  C:\e2e\mfWebUI\report\protractor\...\report.html

## Setup Headless Protractor inside docker on Mac/Ubuntu
1. Install docker
  For Mac: https://docs.docker.com/docker-for-mac/install/
  For Ubuntu: https://docs.docker.com/engine/installation/linux/ubuntu/
2. Checkout code, build docker image
  Copy mfWebUI.zip and unzip it on Mac/Ubuntu, for example: /Users/xxx/e2e/mfWebUI;
  #cd /Users/xxx/e2e/mfWebUI/docker
  #./rebuild-all.sh
  For Ubuntu, maybe you need to submit below command to change folder ~/.npm_docker owner and group.
  #sudo chown -R your_name:your_group ~/.npm_docker
3. Run protractor automation test in docker
  #cd /Users/xxx/e2e/mfWebUI
  #./run-in-docker.sh    (Run all the spec files listed in C:\e2e\mfWebUI\conf.js)
  #./run-uitest.sh globalNavi    (Run individual spec file, the spec file must be defined in conf.js)
  Maybe you need to submit below command to make it executable:
  #chmod +x run-uitest.sh
4. Check the test result:
  /Users/xxx/e2e/mfWebUI/report/dockerReports/protractor/.../report.html



# Instruction to run the Mainframe WebUI QA Automation
Requirement before run each conf/spec file:

## conf.js
Edit this file:
1. Select modules to be tested (Just comment out the specs you don't want to test).
2. Select browser: chrome/firefox/safari/internet explorer/MicrosoftEdge
chrome: Support both local environment and docker, recommended; 
firefox: Support both local environment and docker, recommended;
safari: Currently there is a block issue to set window size (https://github.com/SeleniumHQ/selenium/issues/3796), not recommended;
internet explorer & microsoftEdge: Only support local environment. There are some compatibility problems, some cases cannot get correct result, not recommended.
3. Edit the WebUI Entities default settings to adjust your own environment.

## SSESOpsAfterSignin.js, SSESOpsAfterSignout.js, defineEndpointSS.js & defineIntfTCP.js
Startup Substation ES with TCP interface

## REDOpsAfterSignin.js, REDOpsAfterSignout.js & defineEndpointRED.js
Startup RED Hub with TCP interface

## defineEndpointEMS.js
Startup EMS Server

## defineEndpointRV.js
Setup 'Access -> General Settings -> Rendezvous Installation Path', then restart tomcat
Startup RV Daemon



# Some useful commands:
npm -version
node -v
docker image
