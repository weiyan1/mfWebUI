/*
 * Copyright (c) 2018 TIBCO Software Inc.
 * All Rights Reserved.
 */
module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            options: {
                stdout: true
            },
            selenium: {
                command: './selenium/start',
                options: {
                    stdout: false,
                    async: true
                }
            },
            protractor_install: {
                command: 'node ./node_modules/protractor/bin/webdriver-manager update'
            },
            npm_install: {
                command: 'npm install'
            }
        },
        protractor: {
            options: {
                keepAlive: false,
                configFile: "conf.js"
            },
            generalspecs: {},
            singlerun: {
                options: {
                    args: {
                        specs: ['tests/accessEntities.js']
                    }
                }
            },
            auto: {
                keepAlive: true,
                options: {
                    args: {
                        seleniumPort: 4444
                    }
                }
            }
        }
    });

    grunt.registerTask('test', ['protractor:generalspecs']);
    grunt.registerTask('test:e2e', ['protractor:generalspecs']);
    grunt.registerTask('test:single', ['protractor:singlerun']);
    grunt.registerTask('install', ['update', 'shell:protractor_install']);
    grunt.registerTask('update', ['shell:npm_install']);
};