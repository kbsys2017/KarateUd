/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
function dependOn(){"use strict";return[require("util"),require("proxy"),require("analytics")]}var def;require=function(t){"use strict";return t},def=window.define?window.define:function(t,e){"use strict";return e.apply(null,[{ajax:$.ajax.bind($)}])};var exports=acom_analytics={};def(dependOn(),(function(t,e,s){"use strict";var i,n,o=null,r="/static/js/aicuc/cpdf-template/sign_in_complete.html",a={"local-dev":{cloud_host:"http://local-test.acrobat.com:8002/",ims_client_id:"acom_extension_test1",ims_client_secret:"2a9d3f64-2381-4f68-ba1a-0dcdd4525a28",redirect_uri:"http://createpdf.dev.dexilab.acrobat.com"+r,cpdf_host:"http://local-test.acrobat.com:8000/",frictionless_uri:"https://local-test.acrobat.com:1972/iframe-index.html",env:"local-dev"},dev:{cloud_host:"http://cloud.dev.dexilab.acrobat.com/",ims_client_id:"acom_extension",ims_client_secret:"7f5cc40b-441c-4a4a-85ac-5b8037a67a7c",redirect_uri:"https://createpdf.stage.acrobat.com"+r,cpdf_host:"http://createpdf.dev.dexilab.acrobat.com/",frictionless_uri:"https://dc.dev.dexilab.acrobat.com/proxy/hosted-extension/iframe-index.html",env:"dev"},test:{cloud_host:"https://cloud.test.dexilab.acrobat.com/",ims_client_id:"acom_extension",ims_client_secret:"7f5cc40b-441c-4a4a-85ac-5b8037a67a7c",redirect_uri:"https://createpdf.stage.acrobat.com"+r,cpdf_host:"https://createpdf.test.dexilab.acrobat.com/",frictionless_uri:"https://dc.dev.dexilab.acrobat.com/proxy/hosted-extension/iframe-index.html",env:"test"},stage:{cloud_host:"https://cloud.stage.acrobat.com/",ims_client_id:"acom_extension",ims_client_secret:"7f5cc40b-441c-4a4a-85ac-5b8037a67a7c",redirect_uri:"https://createpdf.stage.acrobat.com"+r,cpdf_host:"https://createpdf.stage.acrobat.com/",frictionless_uri:"https://dc.stage.acrobat.com/proxy/hosted-extension/iframe-index.html",env:"stage"},prod:{cloud_host:"https://cloud.acrobat.com/",ims_client_id:"acom_extension",ims_client_secret:"f8f770cb-748d-441c-97dc-d9d684ab6698",redirect_uri:"https://createpdf.acrobat.com"+r,cpdf_host:"https://createpdf.acrobat.com/",frictionless_uri:"https://documentcloud.adobe.com/proxy/hosted-extension/iframe-index.html",env:"prod"}};for(i in o||(o=new function(){var i={Accept:"application/vnd.adobe.dex+json;version=1",Authorization:null,"x-api-client-id":"api_browser_ext"},o={Accept:"application/vnd.adobe.dex+json;version=1","Content-Type":"application/vnd.adobe.dex+json;version=1;charset=utf-8",Authorization:null,"x-api-client-id":"api_browser_ext"},r=function(){return"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(/x/g,(function(){return"0123456789abcdef"[Math.floor(16*Math.random())]}))};this.proxy=e.proxy.bind(this),this.util=t,this.reset=function(e){this.settings={cpdf_api:null,files_host:null,files_api:null,files_upload:null,files_root:null,fillsign_api:null,auth_token:null,ims_host:null},t.isDevEnv().then(this.proxy((function(s){void 0===e&&(e="prod"),n=a[e],t.extend(this.settings,n)})))},this.reset(n),this.connected=function(){return!!this.settings.auth_token},this.setGlobals=function(t){this.globals=t},this.getFrictionlessUri=function(){return this.settings.frictionless_uri?this.settings.frictionless_uri:""},this.getEnv=function(){return this.settings.env||""},this.GET_headers=function(){return i["x-request-id"]=r(),i.Authorization=this.settings.auth_token,i},this.POST_headers=function(){return o["x-request-id"]=r(),o.Authorization=this.settings.auth_token,o},this.noToken=function(t){t&&t.reject()},this.filesBaseUris=function(){var e=t.Deferred();return this.settings.files_api?e.resolve():t.ajax({url:this.settings.files_host+"api/base_uris",headers:{Accept:this.GET_headers().Accept,"x-api-client-id":this.GET_headers()["x-api-client-id"]}}).then(this.proxy((function(t){this.settings.files_api=t.api,this.settings.files_upload=t.upload,e.resolve()})),(function(){e.reject()})),e.promise()},this.cloudBaseUris=function(){var e=t.Deferred();return this.settings.cloud_api?e.resolve():t.ajax({url:this.settings.cloud_host+"api/base_uris",headers:{Accept:this.GET_headers().Accept,"x-api-client-id":this.GET_headers()["x-api-client-id"]}}).then(this.proxy((function(t){this.settings.cloud_api=t.api,this.settings.files_host=t.files,this.settings.fillsign_api=t.fss,this.settings.ims_host=t.ims,this.settings.cpdf_api=t.cpdf,e.resolve()})),(function(){e.reject()})),e.promise()},this.baseUris=function(){var e=t.Deferred();return this.cloudBaseUris().done(this.proxy((function(){this.filesBaseUris().done(this.proxy((function(){e.resolve()})))}))),e.promise()},this.connect=function(){var e=t.Deferred();return this.settings.auth_code?(this.baseUris().then(this.proxy((function(){if(this.settings.auth_code){var i={grant_type:"authorization_code",code:this.settings.auth_code,client_id:this.settings.ims_client_id,client_secret:this.settings.ims_client_secret};t.ajax({url:this.settings.ims_host+"ims/token/v1",type:"POST",data:i,contentType:"application/x-www-form-urlencoded;charset=UTF-8"}).then(this.proxy((function(i){var n=(new Date).getTime(),o=/@adobe(test)?\.com$/i.test(i.email);this.settings.auth_code=null,o?(this.settings.auth_token="Bearer "+i.access_token,this.settings.refresh_token=i.refresh_token,this.settings.token_expiry=n+i.expires_in,this.settings.refresh_time=n+i.expires_in/2,this.settings.displayName=i.displayName,e.resolve(),t.consoleLog("got auth token")):(function(e){if(t.isFF()){var s=require("chrome"),i=s.Cc,n=s.Ci;i["@mozilla.org/embedcomp/prompt-service;1"].getService(n.nsIPromptService).alert(null,"",e)}else alert(e)}("PDF Helper Extension is available to Adobe Employees only"),function(){if(s.event(s.e.EXTENSION_FORCE_UNINSTALL),t.isFF()){var e=require("chrome").Cu.import("resource://gre/modules/AddonManager.jsm").AddonManager,i=require("sdk/self").id;e.getAddonByID(i,(function(t){t.uninstall()}))}else chrome.management.uninstallSelf()}())})),this.proxy((function(){this.noToken(e)})))}else this.noToken(e)})),this.proxy((function(){this.noToken(e)}))),e.promise()):(e.reject(),e.promise())},this.refreshToken=function(e){var s,i=(new Date).getTime(),n=t.Deferred();return this.settings.refresh_token?!e&&i<this.settings.refresh_time?n.resolve():i>this.settings.token_expiry?n.reject():(s={grant_type:"refresh_token",refresh_token:this.settings.refresh_token,client_id:this.settings.ims_client_id,client_secret:this.settings.ims_client_secret},t.ajax({url:this.settings.ims_host+"ims/token/v1",type:"POST",data:s,contentType:"application/x-www-form-urlencoded; charset=UTF-8"}).then(this.proxy((function(e){var s=(new Date).getTime();this.settings.auth_token="Bearer "+e.access_token,this.settings.refresh_token=e.refresh_token,this.settings.token_expiry=s+e.expires_in,this.settings.refresh_time=s+e.expires_in/2,n.resolve(),t.consoleLog("refresh token result"),t.consoleLogDir(e)})),this.proxy((function(){this.noToken(n)})))):n.reject(),n.promise()},this.ajaxReady=function(e){var s=t.Deferred();return this.settings.auth_token?this.refreshToken(e).then(this.proxy((function(){s.resolve()})),this.proxy((function(){this.noToken(s)}))):this.connect().then(this.proxy((function(){this.settings.files_root?s.resolve():t.ajax({url:this.settings.files_api+"root",type:"GET",headers:this.GET_headers()}).then(this.proxy((function(t){s.resolve(),this.settings.files_root=t.id})),this.proxy((function(){this.noToken(s)})))})),this.proxy((function(){this.noToken(s)}))),s.promise()},this.sso_url=function(e){return t.ajax({url:this.settings.cloud_api+"session/sso_uri?path="+e,type:"GET",headers:this.GET_headers()})},this.authorize=function(t){return this.settings.auth_code=t,this.settings.auth_token=null,delete this.settings.refresh_token,delete this.settings.token_expiry,delete this.settings.refresh_time,this.ajaxReady()},this.clearAuth=function(){this.settings.auth_token&&(t.ajax({url:this.settings.cloud_api+"session",type:"DELETE",headers:o}),delete this.settings.auth_token,delete this.settings.refresh_token,delete this.settings.token_expiry,delete this.settings.refresh_time,delete this.settings.displayName)},this.LOG=function(e,s){var i=t.Deferred();if(SETTINGS.USE_ACROBAT)return i.resolve();function n(t){console.log("Failed to log to splunk"),console.dir(t),i.reject()}return s=s||20,console.log("LOG: "+JSON.stringify(e)),this.ajaxReady().then(function(){this.util.ajax({url:this.settings.files_api+"send_log_event",type:"POST",data:JSON.stringify({level:s,message:JSON.stringify(e)}),headers:this.POST_headers(),processData:!1}).then((function(){i.resolve(e)}),n)}.bind(this),n),i.promise()}.bind(this)},t.ajaxError((function(t,e,s,i){401===e.status&&o.clearAuth()}))),o)o.hasOwnProperty(i)&&("function"==typeof o[i]?exports[i]=o[i].bind(o):exports[i]=o[i]);return o}));