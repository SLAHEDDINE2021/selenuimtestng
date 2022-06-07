$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ab.feature");
formatter.feature({
  "line": 1,
  "name": "verify the text in the home page",
  "description": "",
  "id": "verify-the-text-in-the-home-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "validate tittle",
  "description": "",
  "id": "verify-the-text-in-the-home-page;validate-tittle",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Navigate to \"http://qaclickacademy.com\" Site",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I check the text message in the page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the text message is equal \"Features\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browsers",
  "keyword": "And "
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into Application",
  "description": "",
  "id": "login-into-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Positive test validating login",
  "description": "",
  "id": "login-into-application;positive-test-validating-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to \"http://qaclickacademy.com\" Site",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click on Login link in home page to land on Secure sign in Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters \u003cusername\u003e and \u003cpassword\u003e and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify that user is succesfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browsers",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login-into-application;positive-test-validating-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "login-into-application;positive-test-validating-login;;1"
    },
    {
      "cells": [
        "SLAHEDDINE.JEDER.2021@GMAIL.COM",
        "123456"
      ],
      "line": 13,
      "id": "login-into-application;positive-test-validating-login;;2"
    },
    {
      "cells": [
        "test123@gmail.com",
        "12345"
      ],
      "line": 14,
      "id": "login-into-application;positive-test-validating-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Positive test validating login",
  "description": "",
  "id": "login-into-application;positive-test-validating-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to \"http://qaclickacademy.com\" Site",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click on Login link in home page to land on Secure sign in Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters SLAHEDDINE.JEDER.2021@GMAIL.COM and 123456 and logs in",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify that user is succesfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browsers",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 6169171400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaclickacademy.com",
      "offset": 13
    }
  ],
  "location": "stepDefination.navigate_to_Site(String)"
});
formatter.result({
  "duration": 57460000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-86CSM53\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Finance\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:61141}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 95c79033d457b6b013e72baec5212b70\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepDefinations.stepDefination.navigate_to_Site(stepDefination.java:25)\r\n\tat ✽.And Navigate to \"http://qaclickacademy.com\" Site(login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefination.click_on_Login_link_in_home_page_to_land_on_Secure_sign_in_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SLAHEDDINE.JEDER.2021@GMAIL.COM",
      "offset": 12
    },
    {
      "val": "123456",
      "offset": 48
    }
  ],
  "location": "stepDefination.user_enters_and_and_logs_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.verify_that_user_is_succesfully_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2017383400,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-86CSM53\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Finance\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:61141}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 95c79033d457b6b013e72baec5212b70\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat stepDefinations.stepDefination.close(stepDefination.java:62)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:133)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:598)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:824)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:794)\r\n\tat org.testng.TestRunner.run(TestRunner.java:596)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:377)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:371)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:332)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:276)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1212)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1134)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1063)\r\n\tat org.testng.TestNG.run(TestNG.java:1031)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Positive test validating login",
  "description": "",
  "id": "login-into-application;positive-test-validating-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Navigate to \"http://qaclickacademy.com\" Site",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Click on Login link in home page to land on Secure sign in Page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters test123@gmail.com and 12345 and logs in",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify that user is succesfully logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browsers",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefination.initialize_the_browser_with_chrome()"
});
formatter.result({
  "duration": 3560006400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaclickacademy.com",
      "offset": 13
    }
  ],
  "location": "stepDefination.navigate_to_Site(String)"
});
formatter.result({
  "duration": 45192600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-86CSM53\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Finance\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:61186}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e894bc4cb240de9ad65a1b64a741860f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepDefinations.stepDefination.navigate_to_Site(stepDefination.java:25)\r\n\tat ✽.And Navigate to \"http://qaclickacademy.com\" Site(login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefination.click_on_Login_link_in_home_page_to_land_on_Secure_sign_in_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "test123@gmail.com",
      "offset": 12
    },
    {
      "val": "12345",
      "offset": 34
    }
  ],
  "location": "stepDefination.user_enters_and_and_logs_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefination.verify_that_user_is_succesfully_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 66937200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-86CSM53\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Finance\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:61186}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e894bc4cb240de9ad65a1b64a741860f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat stepDefinations.stepDefination.close(stepDefination.java:62)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:133)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:598)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:824)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:794)\r\n\tat org.testng.TestRunner.run(TestRunner.java:596)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:377)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:371)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:332)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:276)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1212)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1134)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1063)\r\n\tat org.testng.TestNG.run(TestNG.java:1031)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.uri("loginnv.feature");
formatter.feature({
  "line": 1,
  "name": "test the login fuctionnality",
  "description": "",
  "id": "test-the-login-fuctionnality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "login with valid username and valid password",
  "description": "",
  "id": "test-the-login-fuctionnality;login-with-valid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user open the website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the username and password and click login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be navigate to login page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the url sould be",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.user_open_the_website()"
});
formatter.result({
  "duration": 69400,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_enter_the_username_and_password_and_click_login()"
});
formatter.result({
  "duration": 134300,
  "status": "passed"
});
formatter.match({
  "location": "loginSteps.user_should_be_navigate_to_login_page()"
});
formatter.result({
  "duration": 188200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2044380000,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-86CSM53\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Finance\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:61186}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e894bc4cb240de9ad65a1b64a741860f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat stepDefinations.stepDefination.close(stepDefination.java:62)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:133)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:598)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:824)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1511)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:794)\r\n\tat org.testng.TestRunner.run(TestRunner.java:596)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:377)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:371)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:332)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:276)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1212)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1134)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1063)\r\n\tat org.testng.TestNG.run(TestNG.java:1031)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.uri("tittle.feature");
formatter.feature({
  "line": 1,
  "name": "verify the text in the home page",
  "description": "",
  "id": "verify-the-text-in-the-home-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "validate tittle",
  "description": "",
  "id": "verify-the-text-in-the-home-page;validate-tittle",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I Initialize the browser with chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Navigate to \"http://qaclickacademy.com\" Site",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I check the text message in the page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the text message is equal \"Features\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browsers",
  "keyword": "And "
});
});