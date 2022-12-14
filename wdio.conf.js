exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
    // then the current working directory is where your `package.json` resides, so `wdio`
    // will be called from there.
    //
    specs: [
        './test/specs/Timeslots_Testing/A_Create_CalenderEvents.js',
        './test/specs/Timeslots_Testing/B_Create_Timeslots.js',
        './test/specs/Timeslots_Testing/A2_Check_Calender_Events.js',
        './test/specs/Timeslots_Testing/C_Check_Created_Timeslots.js',
        './test/specs/Timeslots_Testing/D_Check_Blackout.js',
        './test/specs/Timeslots_Testing/E_Check_Undo_Blackout.js',
        './test/specs/Timeslots_Testing/F_Check_Blackout_Series.js',
        './test/specs/Timeslots_Testing/G_Check_Delete_Timeslot.js',
        './test/specs/Timeslots_Testing/H_Check_Delete_Timeslots_Series.js',
        './test/specs/Timeslots_Testing/A_Create_CalenderEvents.js',
        './test/specs/Timeslots_Testing/B_Create_Timeslots.js',
        './test/specs/Tandem_Packages/Create_Tandem_packages.js',
        './test/specs/Reservations_Testing/A_Reserve_1_T_FP_NT.js',
        './test/specs/Reservations_Testing/AW_Reserve_1_T_FP_NT.js',
        './test/specs/Reservations_Testing/B_Reserve_1_T_FP_TA.js',
        './test/specs/Reservations_Testing/BW_Reserve_1_T_FP_TA.js',
        './test/specs/Reservations_Testing/C_Reserve_1_T_FP_NV_NT.js',
        './test/specs/Reservations_Testing/CW_Reserve_1_T_FP_NV_NT.js',
        './test/specs/Reservations_Testing/D_Reserve_1_T_FP_NV_TA.js',
        './test/specs/Reservations_Testing/E_Reserve_1_T_DP_NT.js',
        './test/specs/Reservations_Testing/EW_Reserve_1_T_DP_NT.js',
        './test/specs/Reservations_Testing/F_Reserve_1_T_DP_TA.js',
        './test/specs/Reservations_Testing/G_Reserve_2_T_FP_TA.js',
        './test/specs/Reservations_Testing/GW_Reserve_2_T_FP_TA.js',
        './test/specs/Reservations_Testing/H_Reserve_2_T_DP_TA.js',
        './test/specs/Reservations_Testing/I_Reserve_2_T_DP_TA_2NV.js',
        './test/specs/Reservations_Testing/J_Reserve_2_T_FP_TA_1NV.js',
        './test/specs/Reservations_Testing/JW_Reserve_2_T_FP_TA_1NV.js',
        './test/specs/Reservations_Testing/KW_Reserve_3_T_FP_TA_2NV.js',
        './test/specs/Reservations_Testing/L_Reserve_4_T_FP_Mis.js',
        './test/specs/Reservations_Testing/M_Reserve_4_T_DP_Mis.js',
  
        './test/specs/Reservations_Testing/1T_FullPay_2_Desposit.js',
        './test/specs/Reservations_Testing/3T_FullPay_2_Deposit.js',
        './test/specs/Reservations_Testing/2T_Deposit_2_FullPay.js',
        './test/specs/Tandem_Packages/Create_Groupon_Tandem_Packs.js',
        './test/specs/GroupOnPackages/Create_GroupOn_Pack.js',
        './test/specs/GroupOn_Reservations_Testing/A_GR_1_T_NV.js',
        './test/specs/GroupOn_Reservations_Testing/AW_GR_1_T_V.js',
        './test/specs/GroupOn_Reservations_Testing/BW_GR_2_T_1V.js',
        './test/specs/GroupOn_Reservations_Testing/B_GR_2_T_2V_1VT.js',
        './test/specs/GroupOn_Reservations_Testing/B_GR_2_T_NV.js',
        './test/specs/Phone_Reservations_Testing/A_PH_Reserve_1__T_FP_NT.js',
        './test/specs/Phone_Reservations_Testing/BW_PH_Reserve_1_T_FP_TA.js',
        './test/specs/Phone_Reservations_Testing/CW_PH_Reserve_2_T_FP_TA.js',
        './test/specs/Phone_Reservations_Testing/D_PH_Reserve_2_T_DP_TA.js',
        './test/specs/Phone_Reservations_Testing/EW_PH_Reserve_2_T_DP_TA.js',
        './test/specs/Phone_Reservations_Testing/EW_PH_Reserve_2_T_NoPay_TA.js',
        './test/specs/Gift_Cards_Testing/A_Create_GiftCards.js',
        './test/specs/GiftCoupon_Reservation_Testing/A_BG_1T_NV_Res.js',
        './test/specs/GiftCoupon_Reservation_Testing/B_BG_2T_NV_Res.js',
        './test/specs/GiftCoupon_Reservation_Testing/C_BG_1T_V_Res.js',
        './test/specs/Tandem_Packages/Create_TandemPack_Zero_Val.js',
        './test/specs/Tandem_Coupon_Reservations/A_TC_1T_$0_NV_NT.js',
        './test/specs/Tandem_Coupon_Reservations/B_TC_2T_$0_V_TA.js',
        './test/specs/Tandem_Coupon_Reservations/C_TC_1T_NV_NT.js',
        './test/specs/Tandem_Coupon_Reservations/D_TC_2T_V_TA.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],


    suites:{
        SpeacialTimeslots:[
            // './test/specs/Timeslots_Testing/I_Create_Speacial_CalenderEvents.js',
            // './test/specs/Timeslots_Testing/I2_Create_speacial_Timeslots.js',
            // './test/specs/Timeslots_Testing/I2_Check_Speacial_CalenderEvents.js'
        ],
        Timeslots:[
            // './test/specs/Timeslots_Testing/A_Create_CalenderEvents.js',
            // './test/specs/Timeslots_Testing/B_Create_Timeslots.js',
            // './test/specs/Timeslots_Testing/A2_Check_Calender_Events.js',
            // './test/specs/Timeslots_Testing/C_Check_Created_Timeslots.js',
            // './test/specs/Timeslots_Testing/D_Check_Blackout.js',
            // './test/specs/Timeslots_Testing/E_Check_Undo_Blackout.js',
            // './test/specs/Timeslots_Testing/F_Check_Blackout_Series.js',
            // './test/specs/Timeslots_Testing/G_Check_Delete_Timeslot.js',
            // './test/specs/Timeslots_Testing/H_Check_Delete_Timeslots_Series.js'
        ],
        Reservations_Prerequisites:[
            './test/specs/Timeslots_Testing/A_Create_CalenderEvents.js',
            './test/specs/Timeslots_Testing/B_Create_Timeslots.js',
            './test/specs/Tandem_Packages/Create_Tandem_packages.js',
        ],
        Reservations:[
            // './test/specs/Reservations_Testing/A_Reserve_1_T_FP_NT.js',
            // './test/specs/Reservations_Testing/AW_Reserve_1_T_FP_NT.js',
            // './test/specs/Reservations_Testing/B_Reserve_1_T_FP_TA.js',
            // './test/specs/Reservations_Testing/BW_Reserve_1_T_FP_TA.js',
            // './test/specs/Reservations_Testing/C_Reserve_1_T_FP_NV_NT.js',
            // './test/specs/Reservations_Testing/CW_Reserve_1_T_FP_NV_NT.js',
            // './test/specs/Reservations_Testing/D_Reserve_1_T_FP_NV_TA.js',
            // './test/specs/Reservations_Testing/E_Reserve_1_T_DP_NT.js',
            // './test/specs/Reservations_Testing/EW_Reserve_1_T_DP_NT.js',
            // './test/specs/Reservations_Testing/F_Reserve_1_T_DP_TA.js',
            // './test/specs/Reservations_Testing/G_Reserve_2_T_FP_TA.js',
            // './test/specs/Reservations_Testing/GW_Reserve_2_T_FP_TA.js',
            // './test/specs/Reservations_Testing/H_Reserve_2_T_DP_TA.js',
            // './test/specs/Reservations_Testing/I_Reserve_2_T_DP_TA_2NV.js',
            // './test/specs/Reservations_Testing/J_Reserve_2_T_FP_TA_1NV.js',
            // './test/specs/Reservations_Testing/JW_Reserve_2_T_FP_TA_1NV.js',
            // './test/specs/Reservations_Testing/KW_Reserve_3_T_FP_TA_2NV.js',
            // './test/specs/Reservations_Testing/L_Reserve_4_T_FP_Mis.js',
            // './test/specs/Reservations_Testing/M_Reserve_4_T_DP_Mis.js',
            // './test/specs/Reservations_Testing/1T_FullPay_2_Desposit.js',
            // './test/specs/Reservations_Testing/3T_FullPay_2_Deposit.js',
            // './test/specs/Reservations_Testing/2T_Deposit_2_FullPay.js',
            // './test/specs/Reservations_Testing/1T_FullPay_2_1_Ticket_W.js',
            // './test/specs/Reservations_Testing/N_Reserve_2_T_FP_TA_Help_Dev.js'
        ],
        Aff_Reservation:[
            './test/specs/Aff_Reservation_Testing/A1T_AFF_FP.js',
            // './test/specs/Aff_Reservation_Testing/B2T_AFF_DP.js'
        ],
        GroupOn_Res_Prerequisites:[
            // './test/specs/Tandem_Packages/Create_Groupon_Tandem_Packs.js',
            './test/specs/GroupOnPackages/Create_GroupOn_Pack.js'
        ],
        GroupOn_Reservations:[
            // './test/specs/GroupOn_Reservations_Testing/A_GR_1_T_NV.js',
            // './test/specs/GroupOn_Reservations_Testing/AW_GR_1_T_V.js',
            './test/specs/GroupOn_Reservations_Testing/BW_GR_2_T_1V.js',
            './test/specs/GroupOn_Reservations_Testing/B_GR_2_T_2V_1VT.js',
            // './test/specs/GroupOn_Reservations_Testing/B_GR_2_T_NV.js'
        ],
        Phone_Reservations:[
            // './test/specs/Phone_Reservations_Testing/A_PH_Reserve_1__T_FP_NT.js',
            // './test/specs/Phone_Reservations_Testing/BW_PH_Reserve_1_T_FP_TA.js',
            './test/specs/Phone_Reservations_Testing/CW_PH_Reserve_2_T_FP_TA.js',
            // './test/specs/Phone_Reservations_Testing/D_PH_Reserve_2_T_DP_TA.js',
            // './test/specs/Phone_Reservations_Testing/EW_PH_Reserve_2_T_DP_TA.js',
            // './test/specs/Phone_Reservations_Testing/EW_PH_Reserve_2_T_NoPay_TA.js',
            // './test/specs/Phone_Reservations_Testing/FW_PH_Reserve_2_T_DP_NP_TA.js',
            // './test/specs/Phone_Reservations_Testing/G_PH_Reserve_2_T_FP_NP_DP_NP_TA.js'
        ],
        GiftCoupon_Reservation_Testing_Prerequisites:[
            './test/specs/Gift_Cards_Testing/A_Create_GiftCards.js'
        ],
        GiftCoupon_Reservation_Testing:[
            // './test/specs/GiftCoupon_Reservation_Testing/A_BG_1T_NV_Res.js',
            // './test/specs/GiftCoupon_Reservation_Testing/B_BG_2T_NV_Res.js',
            './test/specs/GiftCoupon_Reservation_Testing/C_BG_1T_V_Res.js'
        ],
        Tandem_Discount_Reservations_Prerequisities:[
            './test/specs/Tandem_Packages/Create_TandemPack_Zero_Val.js'
        ],
        Tandem_Discount_Reservations:[
            // './test/specs/Tandem_Coupon_Reservations/A_TC_1T_$0_NV_NT.js',
            './test/specs/Tandem_Coupon_Reservations/B_TC_2T_$0_V_TA.js',
            './test/specs/Tandem_Coupon_Reservations/C_TC_1T_NV_NT.js',
            // './test/specs/Tandem_Coupon_Reservations/D_TC_2T_V_TA.js',
            // './test/specs/Tandem_Coupon_Reservations/A_TC_1T_$0_NV_NT_DP_DC.js'
        ],
        Reservation_Movement:[
            // './test/specs/Reservation_Movement_Testing/A_Aff_Reservation_Move.js',
            // './test/specs/Reservation_Movement_Testing/B_ChangeReservation__Tandem_Link.js',
            // './test/specs/Reservation_Movement_Testing/C_ChangeReservation__Aff_Link.js'
        ],
        Bad_Card_Testing_Reservation:[
            './test/specs/Bad_Card_Testing_Reservation/1T_BC_DC.js',
            './test/specs/Bad_Card_Testing_Reservation/1T_BC_EC.js',
            './test/specs/Bad_Card_Testing_Reservation/1T_BC_IF.js',
            './test/specs/Bad_Card_Testing_Reservation/1T_BC_LC.js',
            './test/specs/Bad_Card_Testing_Reservation/1T_BC_SC.js',
        ],
        
        Gift_Bad_Card_Testing_Reservation :[
            './test/specs/Gift_Bad_Card_Testing_Reservation/1T_NV_BC_DC.js',
            // './test/specs/Gift_Bad_Card_Testing_Reservation/1T_NV_BC_EC.js',
            // './test/specs/Gift_Bad_Card_Testing_Reservation/1T_NV_BC_IF.js',
            // './test/specs/Gift_Bad_Card_Testing_Reservation/1T_NV_BC_LC.js',
            // './test/specs/Gift_Bad_Card_Testing_Reservation/1T_NV_BC_SC.js'
        ]
        


    },
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 4,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator
    //
    capabilities: [{
    
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 4,
        //
        browserName: 'chrome',
        acceptInsecureCerts: true
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://localhost:5002/login',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['chromedriver'],
    
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ['spec'],


    
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine only)
     * @param {Object}  test             test object
     * @param {Object}  context          scope object the test was executed with
     * @param {Error}   result.error     error object in case the test fails, otherwise `undefined`
     * @param {Any}     result.result    return object of test function
     * @param {Number}  result.duration  duration of test
     * @param {Boolean} result.passed    true if test has passed, otherwise false
     * @param {Object}  result.retries   informations to spec related retries, e.g. `{ attempts: 0, limit: 0 }`
     */
    // afterTest: function(test, context, { error, result, duration, passed, retries }) {
    // },


    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
