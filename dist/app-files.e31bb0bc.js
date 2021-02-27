// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/bowser/es5.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.bowser=t():e.bowser=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,s+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));
},{}],"vendor/marzipano.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Marzipano - a 360° media viewer for the modern web (v0.10.1)
//
// Copyright 2016 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
!function (t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Marzipano = t();
}(function () {
  var Wt;
  return function r(n, o, s) {
    function a(e, t) {
      if (!o[e]) {
        if (!n[e]) {
          var i = "function" == typeof require && require;
          if (!t && i) return i(e, !0);
          if (u) return u(e, !0);
          throw (i = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND", i;
        }

        i = o[e] = {
          exports: {}
        }, n[e][0].call(i.exports, function (t) {
          return a(n[e][1][t] || t);
        }, i, i.exports, r, n, o, s);
      }

      return o[e].exports;
    }

    for (var u = "function" == typeof require && require, t = 0; t < s.length; t++) {
      a(s[t]);
    }

    return a;
  }({
    1: [function (t, e, i) {
      var r, n;
      r = this, n = function n() {
        return r = {}, n.m = i = {
          17: function _(t, e, i) {
            "use strict";

            e.__esModule = !0, e.default = void 0;
            var r = i(18),
                i = (u.getFirstMatch = function (t, e) {
              t = e.match(t);
              return t && 0 < t.length && t[1] || "";
            }, u.getSecondMatch = function (t, e) {
              t = e.match(t);
              return t && 1 < t.length && t[2] || "";
            }, u.matchAndReturnConst = function (t, e, i) {
              if (t.test(e)) return i;
            }, u.getWindowsVersionName = function (t) {
              switch (t) {
                case "NT":
                  return "NT";

                case "XP":
                  return "XP";

                case "NT 5.0":
                  return "2000";

                case "NT 5.1":
                  return "XP";

                case "NT 5.2":
                  return "2003";

                case "NT 6.0":
                  return "Vista";

                case "NT 6.1":
                  return "7";

                case "NT 6.2":
                  return "8";

                case "NT 6.3":
                  return "8.1";

                case "NT 10.0":
                  return "10";

                default:
                  return;
              }
            }, u.getMacOSVersionName = function (t) {
              t = t.split(".").splice(0, 2).map(function (t) {
                return parseInt(t, 10) || 0;
              });
              if (t.push(0), 10 === t[0]) switch (t[1]) {
                case 5:
                  return "Leopard";

                case 6:
                  return "Snow Leopard";

                case 7:
                  return "Lion";

                case 8:
                  return "Mountain Lion";

                case 9:
                  return "Mavericks";

                case 10:
                  return "Yosemite";

                case 11:
                  return "El Capitan";

                case 12:
                  return "Sierra";

                case 13:
                  return "High Sierra";

                case 14:
                  return "Mojave";

                case 15:
                  return "Catalina";

                default:
                  return;
              }
            }, u.getAndroidVersionName = function (t) {
              t = t.split(".").splice(0, 2).map(function (t) {
                return parseInt(t, 10) || 0;
              });
              if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && 6 <= t[1] ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && 2 < t[1] ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && 4 <= t[1] ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0;
            }, u.getVersionPrecision = function (t) {
              return t.split(".").length;
            }, u.compareVersions = function (t, e, i) {
              void 0 === i && (i = !1);
              var r = u.getVersionPrecision(t),
                  n = u.getVersionPrecision(e),
                  o = Math.max(r, n),
                  s = 0,
                  a = u.map([t, e], function (t) {
                var e = o - u.getVersionPrecision(t),
                    e = t + new Array(1 + e).join(".0");
                return u.map(e.split("."), function (t) {
                  return new Array(20 - t.length).join("0") + t;
                }).reverse();
              });

              for (i && (s = o - Math.min(r, n)), --o; s <= o;) {
                if (a[0][o] > a[1][o]) return 1;

                if (a[0][o] === a[1][o]) {
                  if (o === s) return 0;
                  --o;
                } else if (a[0][o] < a[1][o]) return -1;
              }
            }, u.map = function (t, e) {
              var i,
                  r = [];
              if (Array.prototype.map) return Array.prototype.map.call(t, e);

              for (i = 0; i < t.length; i += 1) {
                r.push(e(t[i]));
              }

              return r;
            }, u.find = function (t, e) {
              var i, r;
              if (Array.prototype.find) return Array.prototype.find.call(t, e);

              for (i = 0, r = t.length; i < r; i += 1) {
                var n = t[i];
                if (e(n, i)) return n;
              }
            }, u.assign = function (t) {
              for (var i = t, e = arguments.length, r = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) {
                r[n - 1] = arguments[n];
              }

              if (Object.assign) return Object.assign.apply(Object, [t].concat(r));

              for (var o = 0, s = r.length; o < s; o += 1) {
                !function () {
                  var e = r[o];
                  "object" == _typeof(e) && null !== e && Object.keys(e).forEach(function (t) {
                    i[t] = e[t];
                  });
                }();
              }

              return t;
            }, u.getBrowserAlias = function (t) {
              return r.BROWSER_ALIASES_MAP[t];
            }, u.getBrowserTypeByAlias = function (t) {
              return r.BROWSER_MAP[t] || "";
            }, u);

            function u() {}

            e.default = i, t.exports = e.default;
          },
          18: function _(t, e, i) {
            "use strict";

            e.__esModule = !0, e.ENGINE_MAP = e.OS_MAP = e.PLATFORMS_MAP = e.BROWSER_MAP = e.BROWSER_ALIASES_MAP = void 0, e.BROWSER_ALIASES_MAP = {
              "Amazon Silk": "amazon_silk",
              "Android Browser": "android",
              Bada: "bada",
              BlackBerry: "blackberry",
              Chrome: "chrome",
              Chromium: "chromium",
              Electron: "electron",
              Epiphany: "epiphany",
              Firefox: "firefox",
              Focus: "focus",
              Generic: "generic",
              "Google Search": "google_search",
              Googlebot: "googlebot",
              "Internet Explorer": "ie",
              "K-Meleon": "k_meleon",
              Maxthon: "maxthon",
              "Microsoft Edge": "edge",
              "MZ Browser": "mz",
              "NAVER Whale Browser": "naver",
              Opera: "opera",
              "Opera Coast": "opera_coast",
              PhantomJS: "phantomjs",
              Puffin: "puffin",
              QupZilla: "qupzilla",
              QQ: "qq",
              QQLite: "qqlite",
              Safari: "safari",
              Sailfish: "sailfish",
              "Samsung Internet for Android": "samsung_internet",
              SeaMonkey: "seamonkey",
              Sleipnir: "sleipnir",
              Swing: "swing",
              Tizen: "tizen",
              "UC Browser": "uc",
              Vivaldi: "vivaldi",
              "WebOS Browser": "webos",
              WeChat: "wechat",
              "Yandex Browser": "yandex",
              Roku: "roku"
            }, e.BROWSER_MAP = {
              amazon_silk: "Amazon Silk",
              android: "Android Browser",
              bada: "Bada",
              blackberry: "BlackBerry",
              chrome: "Chrome",
              chromium: "Chromium",
              electron: "Electron",
              epiphany: "Epiphany",
              firefox: "Firefox",
              focus: "Focus",
              generic: "Generic",
              googlebot: "Googlebot",
              google_search: "Google Search",
              ie: "Internet Explorer",
              k_meleon: "K-Meleon",
              maxthon: "Maxthon",
              edge: "Microsoft Edge",
              mz: "MZ Browser",
              naver: "NAVER Whale Browser",
              opera: "Opera",
              opera_coast: "Opera Coast",
              phantomjs: "PhantomJS",
              puffin: "Puffin",
              qupzilla: "QupZilla",
              qq: "QQ Browser",
              qqlite: "QQ Browser Lite",
              safari: "Safari",
              sailfish: "Sailfish",
              samsung_internet: "Samsung Internet for Android",
              seamonkey: "SeaMonkey",
              sleipnir: "Sleipnir",
              swing: "Swing",
              tizen: "Tizen",
              uc: "UC Browser",
              vivaldi: "Vivaldi",
              webos: "WebOS Browser",
              wechat: "WeChat",
              yandex: "Yandex Browser"
            }, e.PLATFORMS_MAP = {
              tablet: "tablet",
              mobile: "mobile",
              desktop: "desktop",
              tv: "tv"
            }, e.OS_MAP = {
              WindowsPhone: "Windows Phone",
              Windows: "Windows",
              MacOS: "macOS",
              iOS: "iOS",
              Android: "Android",
              WebOS: "WebOS",
              BlackBerry: "BlackBerry",
              Bada: "Bada",
              Tizen: "Tizen",
              Linux: "Linux",
              ChromeOS: "Chrome OS",
              PlayStation4: "PlayStation 4",
              Roku: "Roku"
            }, e.ENGINE_MAP = {
              EdgeHTML: "EdgeHTML",
              Blink: "Blink",
              Trident: "Trident",
              Presto: "Presto",
              Gecko: "Gecko",
              WebKit: "WebKit"
            };
          },
          90: function _(t, e, i) {
            "use strict";

            e.__esModule = !0, e.default = void 0;
            var r = (a = i(91)) && a.__esModule ? a : {
              default: a
            },
                n = i(18);

            function o(t, e) {
              for (var i = 0; i < e.length; i++) {
                var r = e[i];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
              }
            }

            var s,
                a,
                a = (u.getParser = function (t, e) {
              if (void 0 === e && (e = !1), "string" != typeof t) throw new Error("UserAgent should be a string");
              return new r.default(t, e);
            }, u.parse = function (t) {
              return new r.default(t).getResult();
            }, s = u, a = [{
              key: "BROWSER_MAP",
              get: function get() {
                return n.BROWSER_MAP;
              }
            }, {
              key: "ENGINE_MAP",
              get: function get() {
                return n.ENGINE_MAP;
              }
            }, {
              key: "OS_MAP",
              get: function get() {
                return n.OS_MAP;
              }
            }, {
              key: "PLATFORMS_MAP",
              get: function get() {
                return n.PLATFORMS_MAP;
              }
            }], (i = null) && o(s.prototype, i), o(s, a), u);

            function u() {}

            e.default = a, t.exports = e.default;
          },
          91: function _(t, e, i) {
            "use strict";

            e.__esModule = !0, e.default = void 0;
            var r = a(i(92)),
                n = a(i(93)),
                o = a(i(94)),
                s = a(i(95)),
                h = a(i(17));

            function a(t) {
              return t && t.__esModule ? t : {
                default: t
              };
            }

            (i = u.prototype).getUA = function () {
              return this._ua;
            }, i.test = function (t) {
              return t.test(this._ua);
            }, i.parseBrowser = function () {
              var e = this;
              this.parsedResult.browser = {};
              var t = h.default.find(r.default, function (t) {
                if ("function" == typeof t.test) return t.test(e);
                if (t.test instanceof Array) return t.test.some(function (t) {
                  return e.test(t);
                });
                throw new Error("Browser's test function is not valid");
              });
              return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
            }, i.getBrowser = function () {
              return this.parsedResult.browser || this.parseBrowser();
            }, i.getBrowserName = function (t) {
              return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
            }, i.getBrowserVersion = function () {
              return this.getBrowser().version;
            }, i.getOS = function () {
              return this.parsedResult.os || this.parseOS();
            }, i.parseOS = function () {
              var e = this;
              this.parsedResult.os = {};
              var t = h.default.find(n.default, function (t) {
                if ("function" == typeof t.test) return t.test(e);
                if (t.test instanceof Array) return t.test.some(function (t) {
                  return e.test(t);
                });
                throw new Error("Browser's test function is not valid");
              });
              return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
            }, i.getOSName = function (t) {
              var e = this.getOS().name;
              return t ? String(e).toLowerCase() || "" : e || "";
            }, i.getOSVersion = function () {
              return this.getOS().version;
            }, i.getPlatform = function () {
              return this.parsedResult.platform || this.parsePlatform();
            }, i.getPlatformType = function (t) {
              void 0 === t && (t = !1);
              var e = this.getPlatform().type;
              return t ? String(e).toLowerCase() || "" : e || "";
            }, i.parsePlatform = function () {
              var e = this;
              this.parsedResult.platform = {};
              var t = h.default.find(o.default, function (t) {
                if ("function" == typeof t.test) return t.test(e);
                if (t.test instanceof Array) return t.test.some(function (t) {
                  return e.test(t);
                });
                throw new Error("Browser's test function is not valid");
              });
              return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
            }, i.getEngine = function () {
              return this.parsedResult.engine || this.parseEngine();
            }, i.getEngineName = function (t) {
              return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
            }, i.parseEngine = function () {
              var e = this;
              this.parsedResult.engine = {};
              var t = h.default.find(s.default, function (t) {
                if ("function" == typeof t.test) return t.test(e);
                if (t.test instanceof Array) return t.test.some(function (t) {
                  return e.test(t);
                });
                throw new Error("Browser's test function is not valid");
              });
              return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
            }, i.parse = function () {
              return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
            }, i.getResult = function () {
              return h.default.assign({}, this.parsedResult);
            }, i.satisfies = function (i) {
              var e = this,
                  r = {},
                  n = 0,
                  o = {},
                  s = 0;

              if (Object.keys(i).forEach(function (t) {
                var e = i[t];
                "string" == typeof e ? (o[t] = e, s += 1) : "object" == _typeof(e) && (r[t] = e, n += 1);
              }), 0 < n) {
                var t = Object.keys(r),
                    a = h.default.find(t, function (t) {
                  return e.isOS(t);
                });

                if (a) {
                  a = this.satisfies(r[a]);
                  if (void 0 !== a) return a;
                }

                t = h.default.find(t, function (t) {
                  return e.isPlatform(t);
                });

                if (t) {
                  var u = this.satisfies(r[t]);
                  if (void 0 !== u) return u;
                }
              }

              if (0 < s) {
                u = Object.keys(o), u = h.default.find(u, function (t) {
                  return e.isBrowser(t, !0);
                });
                if (void 0 !== u) return this.compareVersion(o[u]);
              }
            }, i.isBrowser = function (t, e) {
              void 0 === e && (e = !1);
              var i = this.getBrowserName().toLowerCase(),
                  r = t.toLowerCase(),
                  t = h.default.getBrowserTypeByAlias(r);
              return e && t && (r = t.toLowerCase()), r === i;
            }, i.compareVersion = function (t) {
              var e = [0],
                  i = t,
                  r = !1,
                  n = this.getBrowserVersion();
              if ("string" == typeof n) return ">" === t[0] || "<" === t[0] ? (i = t.substr(1), "=" === t[1] ? (r = !0, i = t.substr(2)) : e = [], ">" === t[0] ? e.push(1) : e.push(-1)) : "=" === t[0] ? i = t.substr(1) : "~" === t[0] && (r = !0, i = t.substr(1)), -1 < e.indexOf(h.default.compareVersions(n, i, r));
            }, i.isOS = function (t) {
              return this.getOSName(!0) === String(t).toLowerCase();
            }, i.isPlatform = function (t) {
              return this.getPlatformType(!0) === String(t).toLowerCase();
            }, i.isEngine = function (t) {
              return this.getEngineName(!0) === String(t).toLowerCase();
            }, i.is = function (t, e) {
              return void 0 === e && (e = !1), this.isBrowser(t, e) || this.isOS(t) || this.isPlatform(t);
            }, i.some = function (t) {
              var e = this;
              return void 0 === t && (t = []), t.some(function (t) {
                return e.is(t);
              });
            }, i = u;

            function u(t, e) {
              if (void 0 === e && (e = !1), null == t || "" === t) throw new Error("UserAgent parameter can't be empty");
              this._ua = t, this.parsedResult = {}, !0 !== e && this.parse();
            }

            e.default = i, t.exports = e.default;
          },
          92: function _(t, e, i) {
            "use strict";

            e.__esModule = !0, e.default = void 0;
            var r = (i = i(17)) && i.__esModule ? i : {
              default: i
            },
                n = /version\/(\d+(\.?_?\d+)+)/i,
                i = [{
              test: [/googlebot/i],
              describe: function describe(t) {
                var e = {
                  name: "Googlebot"
                },
                    t = r.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/opera/i],
              describe: function describe(t) {
                var e = {
                  name: "Opera"
                },
                    t = r.default.getFirstMatch(n, t) || r.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/opr\/|opios/i],
              describe: function describe(t) {
                var e = {
                  name: "Opera"
                },
                    t = r.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/SamsungBrowser/i],
              describe: function describe(t) {
                var e = {
                  name: "Samsung Internet for Android"
                },
                    t = r.default.getFirstMatch(n, t) || r.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/Whale/i],
              describe: function describe(t) {
                var e = {
                  name: "NAVER Whale Browser"
                },
                    t = r.default.getFirstMatch(n, t) || r.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/MZBrowser/i],
              describe: function describe(t) {
                var e = {
                  name: "MZ Browser"
                },
                    t = r.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/focus/i],
              describe: function describe(t) {
                var e = {
                  name: "Focus"
                },
                    t = r.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/swing/i],
              describe: function describe(t) {
                var e = {
                  name: "Swing"
                },
                    t = r.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/coast/i],
              describe: function describe(t) {
                var e = {
                  name: "Opera Coast"
                },
                    t = r.default.getFirstMatch(n, t) || r.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/opt\/\d+(?:.?_?\d+)+/i],
              describe: function describe(t) {
                var e = {
                  name: "Opera Touch"
                },
                    t = r.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/yabrowser/i],
              describe: function describe(t) {
                var e = {
                  name: "Yandex Browser"
                },
                    t = r.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/ucbrowser/i],
              describe: function describe(t) {
                var e = {
                  name: "UC Browser"
                },
                    t = r.default.getFirstMatch(n, t) || r.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/Maxthon|mxios/i],
              describe: function describe(t) {
                var e = {
                  name: "Maxthon"
                },
                    t = r.default.getFirstMatch(n, t) || r.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/epiphany/i],
              describe: function describe(t) {
                var e = {
                  name: "Epiphany"
                },
                    t = r.default.getFirstMatch(n, t) || r.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/puffin/i],
              describe: function describe(t) {
                var e = {
                  name: "Puffin"
                },
                    t = r.default.getFirstMatch(n, t) || r.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/sleipnir/i],
              describe: function describe(t) {
                var e = {
                  name: "Sleipnir"
                },
                    t = r.default.getFirstMatch(n, t) || r.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/k-meleon/i],
              describe: function describe(t) {
                var e = {
                  name: "K-Meleon"
                },
                    t = r.default.getFirstMatch(n, t) || r.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/micromessenger/i],
              describe: function describe(t) {
                var e = {
                  name: "WeChat"
                },
                    t = r.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/qqbrowser/i],
              describe: function describe(t) {
                var e = {
                  name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser"
                },
                    t = r.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/msie|trident/i],
              describe: function describe(t) {
                var e = {
                  name: "Internet Explorer"
                },
                    t = r.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/\sedg\//i],
              describe: function describe(t) {
                var e = {
                  name: "Microsoft Edge"
                },
                    t = r.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/edg([ea]|ios)/i],
              describe: function describe(t) {
                var e = {
                  name: "Microsoft Edge"
                },
                    t = r.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/vivaldi/i],
              describe: function describe(t) {
                var e = {
                  name: "Vivaldi"
                },
                    t = r.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/seamonkey/i],
              describe: function describe(t) {
                var e = {
                  name: "SeaMonkey"
                },
                    t = r.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/sailfish/i],
              describe: function describe(t) {
                var e = {
                  name: "Sailfish"
                },
                    t = r.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/silk/i],
              describe: function describe(t) {
                var e = {
                  name: "Amazon Silk"
                },
                    t = r.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/phantom/i],
              describe: function describe(t) {
                var e = {
                  name: "PhantomJS"
                },
                    t = r.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/slimerjs/i],
              describe: function describe(t) {
                var e = {
                  name: "SlimerJS"
                },
                    t = r.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
              describe: function describe(t) {
                var e = {
                  name: "BlackBerry"
                },
                    t = r.default.getFirstMatch(n, t) || r.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/(web|hpw)[o0]s/i],
              describe: function describe(t) {
                var e = {
                  name: "WebOS Browser"
                },
                    t = r.default.getFirstMatch(n, t) || r.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/bada/i],
              describe: function describe(t) {
                var e = {
                  name: "Bada"
                },
                    t = r.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/tizen/i],
              describe: function describe(t) {
                var e = {
                  name: "Tizen"
                },
                    t = r.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/qupzilla/i],
              describe: function describe(t) {
                var e = {
                  name: "QupZilla"
                },
                    t = r.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/firefox|iceweasel|fxios/i],
              describe: function describe(t) {
                var e = {
                  name: "Firefox"
                },
                    t = r.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/electron/i],
              describe: function describe(t) {
                var e = {
                  name: "Electron"
                },
                    t = r.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/MiuiBrowser/i],
              describe: function describe(t) {
                var e = {
                  name: "Miui"
                },
                    t = r.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/chromium/i],
              describe: function describe(t) {
                var e = {
                  name: "Chromium"
                },
                    t = r.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/chrome|crios|crmo/i],
              describe: function describe(t) {
                var e = {
                  name: "Chrome"
                },
                    t = r.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/GSA/i],
              describe: function describe(t) {
                var e = {
                  name: "Google Search"
                },
                    t = r.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: function test(t) {
                var e = !t.test(/like android/i),
                    t = t.test(/android/i);
                return e && t;
              },
              describe: function describe(t) {
                var e = {
                  name: "Android Browser"
                },
                    t = r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/playstation 4/i],
              describe: function describe(t) {
                var e = {
                  name: "PlayStation 4"
                },
                    t = r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/safari|applewebkit/i],
              describe: function describe(t) {
                var e = {
                  name: "Safari"
                },
                    t = r.default.getFirstMatch(n, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/.*/i],
              describe: function describe(t) {
                var e = -1 !== t.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                return {
                  name: r.default.getFirstMatch(e, t),
                  version: r.default.getSecondMatch(e, t)
                };
              }
            }];
            e.default = i, t.exports = e.default;
          },
          93: function _(t, e, i) {
            "use strict";

            e.__esModule = !0, e.default = void 0;
            var r,
                n = (r = i(17)) && r.__esModule ? r : {
              default: r
            },
                o = i(18),
                i = [{
              test: [/Roku\/DVP/],
              describe: function describe(t) {
                t = n.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
                return {
                  name: o.OS_MAP.Roku,
                  version: t
                };
              }
            }, {
              test: [/windows phone/i],
              describe: function describe(t) {
                t = n.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
                return {
                  name: o.OS_MAP.WindowsPhone,
                  version: t
                };
              }
            }, {
              test: [/windows /i],
              describe: function describe(t) {
                var e = n.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t),
                    t = n.default.getWindowsVersionName(e);
                return {
                  name: o.OS_MAP.Windows,
                  version: e,
                  versionName: t
                };
              }
            }, {
              test: [/Macintosh(.*?) FxiOS(.*?)\//],
              describe: function describe(t) {
                var e = {
                  name: o.OS_MAP.iOS
                },
                    t = n.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/macintosh/i],
              describe: function describe(t) {
                var e = n.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, "."),
                    t = n.default.getMacOSVersionName(e),
                    e = {
                  name: o.OS_MAP.MacOS,
                  version: e
                };
                return t && (e.versionName = t), e;
              }
            }, {
              test: [/(ipod|iphone|ipad)/i],
              describe: function describe(t) {
                t = n.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
                return {
                  name: o.OS_MAP.iOS,
                  version: t
                };
              }
            }, {
              test: function test(t) {
                var e = !t.test(/like android/i),
                    t = t.test(/android/i);
                return e && t;
              },
              describe: function describe(t) {
                var e = n.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t),
                    t = n.default.getAndroidVersionName(e),
                    e = {
                  name: o.OS_MAP.Android,
                  version: e
                };
                return t && (e.versionName = t), e;
              }
            }, {
              test: [/(web|hpw)[o0]s/i],
              describe: function describe(t) {
                var e = n.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t),
                    t = {
                  name: o.OS_MAP.WebOS
                };
                return e && e.length && (t.version = e), t;
              }
            }, {
              test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
              describe: function describe(t) {
                t = n.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || n.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || n.default.getFirstMatch(/\bbb(\d+)/i, t);
                return {
                  name: o.OS_MAP.BlackBerry,
                  version: t
                };
              }
            }, {
              test: [/bada/i],
              describe: function describe(t) {
                t = n.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
                return {
                  name: o.OS_MAP.Bada,
                  version: t
                };
              }
            }, {
              test: [/tizen/i],
              describe: function describe(t) {
                t = n.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
                return {
                  name: o.OS_MAP.Tizen,
                  version: t
                };
              }
            }, {
              test: [/linux/i],
              describe: function describe() {
                return {
                  name: o.OS_MAP.Linux
                };
              }
            }, {
              test: [/CrOS/],
              describe: function describe() {
                return {
                  name: o.OS_MAP.ChromeOS
                };
              }
            }, {
              test: [/PlayStation 4/],
              describe: function describe(t) {
                t = n.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
                return {
                  name: o.OS_MAP.PlayStation4,
                  version: t
                };
              }
            }];
            e.default = i, t.exports = e.default;
          },
          94: function _(t, e, i) {
            "use strict";

            e.__esModule = !0, e.default = void 0;
            var r,
                n = (r = i(17)) && r.__esModule ? r : {
              default: r
            },
                o = i(18),
                i = [{
              test: [/googlebot/i],
              describe: function describe() {
                return {
                  type: "bot",
                  vendor: "Google"
                };
              }
            }, {
              test: [/huawei/i],
              describe: function describe(t) {
                var e = n.default.getFirstMatch(/(can-l01)/i, t) && "Nova",
                    t = {
                  type: o.PLATFORMS_MAP.mobile,
                  vendor: "Huawei"
                };
                return e && (t.model = e), t;
              }
            }, {
              test: [/nexus\s*(?:7|8|9|10).*/i],
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.tablet,
                  vendor: "Nexus"
                };
              }
            }, {
              test: [/ipad/i],
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.tablet,
                  vendor: "Apple",
                  model: "iPad"
                };
              }
            }, {
              test: [/Macintosh(.*?) FxiOS(.*?)\//],
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.tablet,
                  vendor: "Apple",
                  model: "iPad"
                };
              }
            }, {
              test: [/kftt build/i],
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.tablet,
                  vendor: "Amazon",
                  model: "Kindle Fire HD 7"
                };
              }
            }, {
              test: [/silk/i],
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.tablet,
                  vendor: "Amazon"
                };
              }
            }, {
              test: [/tablet(?! pc)/i],
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.tablet
                };
              }
            }, {
              test: function test(t) {
                var e = t.test(/ipod|iphone/i),
                    t = t.test(/like (ipod|iphone)/i);
                return e && !t;
              },
              describe: function describe(t) {
                t = n.default.getFirstMatch(/(ipod|iphone)/i, t);
                return {
                  type: o.PLATFORMS_MAP.mobile,
                  vendor: "Apple",
                  model: t
                };
              }
            }, {
              test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.mobile,
                  vendor: "Nexus"
                };
              }
            }, {
              test: [/[^-]mobi/i],
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.mobile
                };
              }
            }, {
              test: function test(t) {
                return "blackberry" === t.getBrowserName(!0);
              },
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.mobile,
                  vendor: "BlackBerry"
                };
              }
            }, {
              test: function test(t) {
                return "bada" === t.getBrowserName(!0);
              },
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.mobile
                };
              }
            }, {
              test: function test(t) {
                return "windows phone" === t.getBrowserName();
              },
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.mobile,
                  vendor: "Microsoft"
                };
              }
            }, {
              test: function test(t) {
                var e = Number(String(t.getOSVersion()).split(".")[0]);
                return "android" === t.getOSName(!0) && 3 <= e;
              },
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.tablet
                };
              }
            }, {
              test: function test(t) {
                return "android" === t.getOSName(!0);
              },
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.mobile
                };
              }
            }, {
              test: function test(t) {
                return "macos" === t.getOSName(!0);
              },
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.desktop,
                  vendor: "Apple"
                };
              }
            }, {
              test: function test(t) {
                return "windows" === t.getOSName(!0);
              },
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.desktop
                };
              }
            }, {
              test: function test(t) {
                return "linux" === t.getOSName(!0);
              },
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.desktop
                };
              }
            }, {
              test: function test(t) {
                return "playstation 4" === t.getOSName(!0);
              },
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.tv
                };
              }
            }, {
              test: function test(t) {
                return "roku" === t.getOSName(!0);
              },
              describe: function describe() {
                return {
                  type: o.PLATFORMS_MAP.tv
                };
              }
            }];
            e.default = i, t.exports = e.default;
          },
          95: function _(t, e, i) {
            "use strict";

            e.__esModule = !0, e.default = void 0;
            var r,
                n = (r = i(17)) && r.__esModule ? r : {
              default: r
            },
                o = i(18),
                i = [{
              test: function test(t) {
                return "microsoft edge" === t.getBrowserName(!0);
              },
              describe: function describe(t) {
                if (/\sedg\//i.test(t)) return {
                  name: o.ENGINE_MAP.Blink
                };
                t = n.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
                return {
                  name: o.ENGINE_MAP.EdgeHTML,
                  version: t
                };
              }
            }, {
              test: [/trident/i],
              describe: function describe(t) {
                var e = {
                  name: o.ENGINE_MAP.Trident
                },
                    t = n.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: function test(t) {
                return t.test(/presto/i);
              },
              describe: function describe(t) {
                var e = {
                  name: o.ENGINE_MAP.Presto
                },
                    t = n.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: function test(t) {
                var e = t.test(/gecko/i),
                    t = t.test(/like gecko/i);
                return e && !t;
              },
              describe: function describe(t) {
                var e = {
                  name: o.ENGINE_MAP.Gecko
                },
                    t = n.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }, {
              test: [/(apple)?webkit\/537\.36/i],
              describe: function describe() {
                return {
                  name: o.ENGINE_MAP.Blink
                };
              }
            }, {
              test: [/(apple)?webkit/i],
              describe: function describe(t) {
                var e = {
                  name: o.ENGINE_MAP.WebKit
                },
                    t = n.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
                return t && (e.version = t), e;
              }
            }];
            e.default = i, t.exports = e.default;
          }
        }, n.c = r, n.d = function (t, e, i) {
          n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
          });
        }, n.r = function (t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(t, "__esModule", {
            value: !0
          });
        }, n.t = function (e, t) {
          if (1 & t && (e = n(e)), 8 & t) return e;
          if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
          var i = Object.create(null);
          if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
          }), 2 & t && "string" != typeof e) for (var r in e) {
            n.d(i, r, function (t) {
              return e[t];
            }.bind(null, r));
          }
          return i;
        }, n.n = function (t) {
          var e = t && t.__esModule ? function () {
            return t.default;
          } : function () {
            return t;
          };
          return n.d(e, "a", e), e;
        }, n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 90);

        function n(t) {
          if (r[t]) return r[t].exports;
          var e = r[t] = {
            i: t,
            l: !1,
            exports: {}
          };
          return i[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports;
        }

        var i, r;
      }, "object" == _typeof(i) && "object" == _typeof(e) ? e.exports = n() : "object" == _typeof(i) ? i.bowser = n() : r.bowser = n();
    }, {}],
    2: [function (t, e, i) {
      "use strict";

      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.setMatrixArrayType = function (t) {
        i.ARRAY_TYPE = n = t;
      }, i.toRadian = function (t) {
        return t * s;
      }, i.equals = function (t, e) {
        return Math.abs(t - e) <= r * Math.max(1, Math.abs(t), Math.abs(e));
      }, i.RANDOM = i.ARRAY_TYPE = i.EPSILON = void 0;
      var r = 1e-6;
      i.EPSILON = r;
      var n = "undefined" != typeof Float32Array ? Float32Array : Array;
      i.ARRAY_TYPE = n;
      var o = Math.random;
      i.RANDOM = o;
      var s = Math.PI / 180;
      Math.hypot || (Math.hypot = function () {
        for (var t = 0, e = arguments.length; e--;) {
          t += arguments[e] * arguments[e];
        }

        return Math.sqrt(t);
      });
    }, {}],
    3: [function (t, e, i) {
      "use strict";

      function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.vec4 = i.vec3 = i.vec2 = i.quat2 = i.quat = i.mat4 = i.mat3 = i.mat2d = i.mat2 = i.glMatrix = void 0;
      var r = n(t("./common.js"));
      i.glMatrix = r;
      r = n(t("./mat2.js"));
      i.mat2 = r;
      r = n(t("./mat2d.js"));
      i.mat2d = r;
      r = n(t("./mat3.js"));
      i.mat3 = r;
      r = n(t("./mat4.js"));
      i.mat4 = r;
      r = n(t("./quat.js"));
      i.quat = r;
      r = n(t("./quat2.js"));
      i.quat2 = r;
      r = n(t("./vec2.js"));
      i.vec2 = r;
      r = n(t("./vec3.js"));
      i.vec3 = r;
      t = n(t("./vec4.js"));

      function a() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap();
        return a = function a() {
          return t;
        }, t;
      }

      function n(t) {
        if (t && t.__esModule) return t;
        if (null === t || "object" !== s(t) && "function" != typeof t) return {
          default: t
        };
        var e = a();
        if (e && e.has(t)) return e.get(t);
        var i,
            r,
            n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (i in t) {
          Object.prototype.hasOwnProperty.call(t, i) && ((r = o ? Object.getOwnPropertyDescriptor(t, i) : null) && (r.get || r.set) ? Object.defineProperty(n, i, r) : n[i] = t[i]);
        }

        return n.default = t, e && e.set(t, n), n;
      }

      i.vec4 = t;
    }, {
      "./common.js": 2,
      "./mat2.js": 4,
      "./mat2d.js": 5,
      "./mat3.js": 6,
      "./mat4.js": 7,
      "./quat.js": 8,
      "./quat2.js": 9,
      "./vec2.js": 10,
      "./vec3.js": 11,
      "./vec4.js": 12
    }],
    4: [function (t, e, i) {
      "use strict";

      function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.create = function () {
        var t = new u.ARRAY_TYPE(4);
        u.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0);
        return t[0] = 1, t[3] = 1, t;
      }, i.clone = function (t) {
        var e = new u.ARRAY_TYPE(4);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
      }, i.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
      }, i.fromValues = function (t, e, i, r) {
        var n = new u.ARRAY_TYPE(4);
        return n[0] = t, n[1] = e, n[2] = i, n[3] = r, n;
      }, i.set = function (t, e, i, r, n) {
        return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t;
      }, i.transpose = function (t, e) {
        {
          var i;
          t === e ? (i = e[1], t[1] = e[2], t[2] = i) : (t[0] = e[0], t[1] = e[2], t[2] = e[1], t[3] = e[3]);
        }
        return t;
      }, i.invert = function (t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            e = i * o - n * r;
        return e ? (e = 1 / e, t[0] = o * e, t[1] = -r * e, t[2] = -n * e, t[3] = i * e, t) : null;
      }, i.adjoint = function (t, e) {
        var i = e[0];
        return t[0] = e[3], t[1] = -e[1], t[2] = -e[2], t[3] = i, t;
      }, i.determinant = function (t) {
        return t[0] * t[3] - t[2] * t[1];
      }, i.multiply = r, i.rotate = function (t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            e = Math.sin(i),
            i = Math.cos(i);
        return t[0] = r * i + o * e, t[1] = n * i + s * e, t[2] = r * -e + o * i, t[3] = n * -e + s * i, t;
      }, i.scale = function (t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            e = i[0],
            i = i[1];
        return t[0] = r * e, t[1] = n * e, t[2] = o * i, t[3] = s * i, t;
      }, i.fromRotation = function (t, e) {
        var i = Math.sin(e),
            e = Math.cos(e);
        return t[0] = e, t[1] = i, t[2] = -i, t[3] = e, t;
      }, i.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t;
      }, i.str = function (t) {
        return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      }, i.frob = function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3]);
      }, i.LDU = function (t, e, i, r) {
        return t[2] = r[2] / r[0], i[0] = r[0], i[1] = r[1], i[3] = r[3] - t[2] * i[1], [t, e, i];
      }, i.add = function (t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t;
      }, i.subtract = n, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
      }, i.equals = function (t, e) {
        var i = t[0],
            r = t[1],
            n = t[2],
            o = t[3],
            s = e[0],
            a = e[1],
            t = e[2],
            e = e[3];
        return Math.abs(i - s) <= u.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(r - a) <= u.EPSILON * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(n - t) <= u.EPSILON * Math.max(1, Math.abs(n), Math.abs(t)) && Math.abs(o - e) <= u.EPSILON * Math.max(1, Math.abs(o), Math.abs(e));
      }, i.multiplyScalar = function (t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t;
      }, i.multiplyScalarAndAdd = function (t, e, i, r) {
        return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t[2] = e[2] + i[2] * r, t[3] = e[3] + i[3] * r, t;
      }, i.sub = i.mul = void 0;

      var u = function (t) {
        if (t && t.__esModule) return t;
        if (null === t || "object" !== s(t) && "function" != typeof t) return {
          default: t
        };
        var e = a();
        if (e && e.has(t)) return e.get(t);
        var i,
            r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (i in t) {
          var o;
          Object.prototype.hasOwnProperty.call(t, i) && ((o = n ? Object.getOwnPropertyDescriptor(t, i) : null) && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = t[i]);
        }

        r.default = t, e && e.set(t, r);
        return r;
      }(t("./common.js"));

      function a() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap();
        return a = function a() {
          return t;
        }, t;
      }

      function r(t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = i[0],
            u = i[1],
            e = i[2],
            i = i[3];
        return t[0] = r * a + o * u, t[1] = n * a + s * u, t[2] = r * e + o * i, t[3] = n * e + s * i, t;
      }

      function n(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t;
      }

      i.mul = r, i.sub = n;
    }, {
      "./common.js": 2
    }],
    5: [function (t, e, i) {
      "use strict";

      function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.create = function () {
        var t = new p.ARRAY_TYPE(6);
        p.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0);
        return t[0] = 1, t[3] = 1, t;
      }, i.clone = function (t) {
        var e = new p.ARRAY_TYPE(6);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
      }, i.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
      }, i.fromValues = function (t, e, i, r, n, o) {
        var s = new p.ARRAY_TYPE(6);
        return s[0] = t, s[1] = e, s[2] = i, s[3] = r, s[4] = n, s[5] = o, s;
      }, i.set = function (t, e, i, r, n, o, s) {
        return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t[4] = o, t[5] = s, t;
      }, i.invert = function (t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            s = e[4],
            a = e[5],
            e = i * o - r * n;
        return e ? (e = 1 / e, t[0] = o * e, t[1] = -r * e, t[2] = -n * e, t[3] = i * e, t[4] = (n * a - o * s) * e, t[5] = (r * s - i * a) * e, t) : null;
      }, i.determinant = function (t) {
        return t[0] * t[3] - t[1] * t[2];
      }, i.multiply = r, i.rotate = function (t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = e[4],
            u = e[5],
            e = Math.sin(i),
            i = Math.cos(i);
        return t[0] = r * i + o * e, t[1] = n * i + s * e, t[2] = r * -e + o * i, t[3] = n * -e + s * i, t[4] = a, t[5] = u, t;
      }, i.scale = function (t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = e[4],
            u = e[5],
            e = i[0],
            i = i[1];
        return t[0] = r * e, t[1] = n * e, t[2] = o * i, t[3] = s * i, t[4] = a, t[5] = u, t;
      }, i.translate = function (t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = e[4],
            u = e[5],
            e = i[0],
            i = i[1];
        return t[0] = r, t[1] = n, t[2] = o, t[3] = s, t[4] = r * e + o * i + a, t[5] = n * e + s * i + u, t;
      }, i.fromRotation = function (t, e) {
        var i = Math.sin(e),
            e = Math.cos(e);
        return t[0] = e, t[1] = i, t[2] = -i, t[3] = e, t[4] = 0, t[5] = 0, t;
      }, i.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t[4] = 0, t[5] = 0, t;
      }, i.fromTranslation = function (t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = e[0], t[5] = e[1], t;
      }, i.str = function (t) {
        return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
      }, i.frob = function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1);
      }, i.add = function (t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t[4] = e[4] + i[4], t[5] = e[5] + i[5], t;
      }, i.subtract = n, i.multiplyScalar = function (t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t[4] = e[4] * i, t[5] = e[5] * i, t;
      }, i.multiplyScalarAndAdd = function (t, e, i, r) {
        return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t[2] = e[2] + i[2] * r, t[3] = e[3] + i[3] * r, t[4] = e[4] + i[4] * r, t[5] = e[5] + i[5] * r, t;
      }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5];
      }, i.equals = function (t, e) {
        var i = t[0],
            r = t[1],
            n = t[2],
            o = t[3],
            s = t[4],
            a = t[5],
            u = e[0],
            h = e[1],
            l = e[2],
            c = e[3],
            t = e[4],
            e = e[5];
        return Math.abs(i - u) <= p.EPSILON * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(r - h) <= p.EPSILON * Math.max(1, Math.abs(r), Math.abs(h)) && Math.abs(n - l) <= p.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(o - c) <= p.EPSILON * Math.max(1, Math.abs(o), Math.abs(c)) && Math.abs(s - t) <= p.EPSILON * Math.max(1, Math.abs(s), Math.abs(t)) && Math.abs(a - e) <= p.EPSILON * Math.max(1, Math.abs(a), Math.abs(e));
      }, i.sub = i.mul = void 0;

      var p = function (t) {
        if (t && t.__esModule) return t;
        if (null === t || "object" !== s(t) && "function" != typeof t) return {
          default: t
        };
        var e = a();
        if (e && e.has(t)) return e.get(t);
        var i,
            r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (i in t) {
          var o;
          Object.prototype.hasOwnProperty.call(t, i) && ((o = n ? Object.getOwnPropertyDescriptor(t, i) : null) && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = t[i]);
        }

        r.default = t, e && e.set(t, r);
        return r;
      }(t("./common.js"));

      function a() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap();
        return a = function a() {
          return t;
        }, t;
      }

      function r(t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = e[4],
            u = e[5],
            h = i[0],
            l = i[1],
            c = i[2],
            p = i[3],
            e = i[4],
            i = i[5];
        return t[0] = r * h + o * l, t[1] = n * h + s * l, t[2] = r * c + o * p, t[3] = n * c + s * p, t[4] = r * e + o * i + a, t[5] = n * e + s * i + u, t;
      }

      function n(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t[4] = e[4] - i[4], t[5] = e[5] - i[5], t;
      }

      i.mul = r, i.sub = n;
    }, {
      "./common.js": 2
    }],
    6: [function (t, e, i) {
      "use strict";

      function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.create = function () {
        var t = new y.ARRAY_TYPE(9);
        y.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0);
        return t[0] = 1, t[4] = 1, t[8] = 1, t;
      }, i.fromMat4 = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t;
      }, i.clone = function (t) {
        var e = new y.ARRAY_TYPE(9);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
      }, i.fromValues = function (t, e, i, r, n, o, s, a, u) {
        var h = new y.ARRAY_TYPE(9);
        return h[0] = t, h[1] = e, h[2] = i, h[3] = r, h[4] = n, h[5] = o, h[6] = s, h[7] = a, h[8] = u, h;
      }, i.set = function (t, e, i, r, n, o, s, a, u, h) {
        return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t[4] = o, t[5] = s, t[6] = a, t[7] = u, t[8] = h, t;
      }, i.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
      }, i.transpose = function (t, e) {
        {
          var i, r, n;
          t === e ? (i = e[1], r = e[2], n = e[5], t[1] = e[3], t[2] = e[6], t[3] = i, t[5] = e[7], t[6] = r, t[7] = n) : (t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8]);
        }
        return t;
      }, i.invert = function (t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            s = e[4],
            a = e[5],
            u = e[6],
            h = e[7],
            l = e[8],
            c = l * s - a * h,
            p = -l * o + a * u,
            f = h * o - s * u,
            e = i * c + r * p + n * f;
        return e ? (e = 1 / e, t[0] = c * e, t[1] = (-l * r + n * h) * e, t[2] = (a * r - n * s) * e, t[3] = p * e, t[4] = (l * i - n * u) * e, t[5] = (-a * i + n * o) * e, t[6] = f * e, t[7] = (-h * i + r * u) * e, t[8] = (s * i - r * o) * e, t) : null;
      }, i.adjoint = function (t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            s = e[4],
            a = e[5],
            u = e[6],
            h = e[7],
            e = e[8];
        return t[0] = s * e - a * h, t[1] = n * h - r * e, t[2] = r * a - n * s, t[3] = a * u - o * e, t[4] = i * e - n * u, t[5] = n * o - i * a, t[6] = o * h - s * u, t[7] = r * u - i * h, t[8] = i * s - r * o, t;
      }, i.determinant = function (t) {
        var e = t[0],
            i = t[1],
            r = t[2],
            n = t[3],
            o = t[4],
            s = t[5],
            a = t[6],
            u = t[7],
            t = t[8];
        return e * (t * o - s * u) + i * (-t * n + s * a) + r * (u * n - o * a);
      }, i.multiply = r, i.translate = function (t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = e[4],
            u = e[5],
            h = e[6],
            l = e[7],
            c = e[8],
            e = i[0],
            i = i[1];
        return t[0] = r, t[1] = n, t[2] = o, t[3] = s, t[4] = a, t[5] = u, t[6] = e * r + i * s + h, t[7] = e * n + i * a + l, t[8] = e * o + i * u + c, t;
      }, i.rotate = function (t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = e[4],
            u = e[5],
            h = e[6],
            l = e[7],
            c = e[8],
            e = Math.sin(i),
            i = Math.cos(i);
        return t[0] = i * r + e * s, t[1] = i * n + e * a, t[2] = i * o + e * u, t[3] = i * s - e * r, t[4] = i * a - e * n, t[5] = i * u - e * o, t[6] = h, t[7] = l, t[8] = c, t;
      }, i.scale = function (t, e, i) {
        var r = i[0],
            i = i[1];
        return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = i * e[3], t[4] = i * e[4], t[5] = i * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
      }, i.fromTranslation = function (t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = e[0], t[7] = e[1], t[8] = 1, t;
      }, i.fromRotation = function (t, e) {
        var i = Math.sin(e),
            e = Math.cos(e);
        return t[0] = e, t[1] = i, t[2] = 0, t[3] = -i, t[4] = e, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
      }, i.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = e[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
      }, i.fromMat2d = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = 0, t[3] = e[2], t[4] = e[3], t[5] = 0, t[6] = e[4], t[7] = e[5], t[8] = 1, t;
      }, i.fromQuat = function (t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            s = i + i,
            a = r + r,
            u = n + n,
            h = i * s,
            l = r * s,
            e = r * a,
            i = n * s,
            r = n * a,
            n = n * u,
            s = o * s,
            a = o * a,
            u = o * u;
        return t[0] = 1 - e - n, t[3] = l - u, t[6] = i + a, t[1] = l + u, t[4] = 1 - h - n, t[7] = r - s, t[2] = i - a, t[5] = r + s, t[8] = 1 - h - e, t;
      }, i.normalFromMat4 = function (t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            s = e[4],
            a = e[5],
            u = e[6],
            h = e[7],
            l = e[8],
            c = e[9],
            p = e[10],
            f = e[11],
            d = e[12],
            m = e[13],
            v = e[14],
            _ = e[15],
            y = i * a - r * s,
            g = i * u - n * s,
            M = i * h - o * s,
            w = r * u - n * a,
            b = r * h - o * a,
            x = n * h - o * u,
            E = l * m - c * d,
            P = l * v - p * d,
            e = l * _ - f * d,
            l = c * v - p * m,
            c = c * _ - f * m,
            p = p * _ - f * v,
            f = y * p - g * c + M * l + w * e - b * P + x * E;
        return f ? (f = 1 / f, t[0] = (a * p - u * c + h * l) * f, t[1] = (u * e - s * p - h * P) * f, t[2] = (s * c - a * e + h * E) * f, t[3] = (n * c - r * p - o * l) * f, t[4] = (i * p - n * e + o * P) * f, t[5] = (r * e - i * c - o * E) * f, t[6] = (m * x - v * b + _ * w) * f, t[7] = (v * M - d * x - _ * g) * f, t[8] = (d * b - m * M + _ * y) * f, t) : null;
      }, i.projection = function (t, e, i) {
        return t[0] = 2 / e, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / i, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t;
      }, i.str = function (t) {
        return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
      }, i.frob = function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]);
      }, i.add = function (t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t[4] = e[4] + i[4], t[5] = e[5] + i[5], t[6] = e[6] + i[6], t[7] = e[7] + i[7], t[8] = e[8] + i[8], t;
      }, i.subtract = n, i.multiplyScalar = function (t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t[4] = e[4] * i, t[5] = e[5] * i, t[6] = e[6] * i, t[7] = e[7] * i, t[8] = e[8] * i, t;
      }, i.multiplyScalarAndAdd = function (t, e, i, r) {
        return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t[2] = e[2] + i[2] * r, t[3] = e[3] + i[3] * r, t[4] = e[4] + i[4] * r, t[5] = e[5] + i[5] * r, t[6] = e[6] + i[6] * r, t[7] = e[7] + i[7] * r, t[8] = e[8] + i[8] * r, t;
      }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8];
      }, i.equals = function (t, e) {
        var i = t[0],
            r = t[1],
            n = t[2],
            o = t[3],
            s = t[4],
            a = t[5],
            u = t[6],
            h = t[7],
            l = t[8],
            c = e[0],
            p = e[1],
            f = e[2],
            d = e[3],
            m = e[4],
            v = e[5],
            _ = e[6],
            t = e[7],
            e = e[8];
        return Math.abs(i - c) <= y.EPSILON * Math.max(1, Math.abs(i), Math.abs(c)) && Math.abs(r - p) <= y.EPSILON * Math.max(1, Math.abs(r), Math.abs(p)) && Math.abs(n - f) <= y.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(o - d) <= y.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(s - m) <= y.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(a - v) <= y.EPSILON * Math.max(1, Math.abs(a), Math.abs(v)) && Math.abs(u - _) <= y.EPSILON * Math.max(1, Math.abs(u), Math.abs(_)) && Math.abs(h - t) <= y.EPSILON * Math.max(1, Math.abs(h), Math.abs(t)) && Math.abs(l - e) <= y.EPSILON * Math.max(1, Math.abs(l), Math.abs(e));
      }, i.sub = i.mul = void 0;

      var y = function (t) {
        if (t && t.__esModule) return t;
        if (null === t || "object" !== s(t) && "function" != typeof t) return {
          default: t
        };
        var e = a();
        if (e && e.has(t)) return e.get(t);
        var i,
            r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (i in t) {
          var o;
          Object.prototype.hasOwnProperty.call(t, i) && ((o = n ? Object.getOwnPropertyDescriptor(t, i) : null) && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = t[i]);
        }

        r.default = t, e && e.set(t, r);
        return r;
      }(t("./common.js"));

      function a() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap();
        return a = function a() {
          return t;
        }, t;
      }

      function r(t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = e[4],
            u = e[5],
            h = e[6],
            l = e[7],
            c = e[8],
            p = i[0],
            f = i[1],
            d = i[2],
            m = i[3],
            v = i[4],
            _ = i[5],
            y = i[6],
            e = i[7],
            i = i[8];
        return t[0] = p * r + f * s + d * h, t[1] = p * n + f * a + d * l, t[2] = p * o + f * u + d * c, t[3] = m * r + v * s + _ * h, t[4] = m * n + v * a + _ * l, t[5] = m * o + v * u + _ * c, t[6] = y * r + e * s + i * h, t[7] = y * n + e * a + i * l, t[8] = y * o + e * u + i * c, t;
      }

      function n(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t[4] = e[4] - i[4], t[5] = e[5] - i[5], t[6] = e[6] - i[6], t[7] = e[7] - i[7], t[8] = e[8] - i[8], t;
      }

      i.mul = r, i.sub = n;
    }, {
      "./common.js": 2
    }],
    7: [function (t, e, i) {
      "use strict";

      function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.create = function () {
        var t = new C.ARRAY_TYPE(16);
        C.ARRAY_TYPE != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0);
        return t[0] = 1, t[5] = 1, t[10] = 1, t[15] = 1, t;
      }, i.clone = function (t) {
        var e = new C.ARRAY_TYPE(16);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
      }, i.fromValues = function (t, e, i, r, n, o, s, a, u, h, l, c, p, f, d, m) {
        var v = new C.ARRAY_TYPE(16);
        return v[0] = t, v[1] = e, v[2] = i, v[3] = r, v[4] = n, v[5] = o, v[6] = s, v[7] = a, v[8] = u, v[9] = h, v[10] = l, v[11] = c, v[12] = p, v[13] = f, v[14] = d, v[15] = m, v;
      }, i.set = function (t, e, i, r, n, o, s, a, u, h, l, c, p, f, d, m, v) {
        return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t[4] = o, t[5] = s, t[6] = a, t[7] = u, t[8] = h, t[9] = l, t[10] = c, t[11] = p, t[12] = f, t[13] = d, t[14] = m, t[15] = v, t;
      }, i.identity = d, i.transpose = function (t, e) {
        {
          var i, r, n, o, s, a;
          t === e ? (i = e[1], r = e[2], n = e[3], o = e[6], s = e[7], a = e[11], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = i, t[6] = e[9], t[7] = e[13], t[8] = r, t[9] = o, t[11] = e[14], t[12] = n, t[13] = s, t[14] = a) : (t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15]);
        }
        return t;
      }, i.invert = function (t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            s = e[4],
            a = e[5],
            u = e[6],
            h = e[7],
            l = e[8],
            c = e[9],
            p = e[10],
            f = e[11],
            d = e[12],
            m = e[13],
            v = e[14],
            _ = e[15],
            y = i * a - r * s,
            g = i * u - n * s,
            M = i * h - o * s,
            w = r * u - n * a,
            b = r * h - o * a,
            x = n * h - o * u,
            E = l * m - c * d,
            P = l * v - p * d,
            S = l * _ - f * d,
            T = c * v - p * m,
            L = c * _ - f * m,
            A = p * _ - f * v,
            e = y * A - g * L + M * T + w * S - b * P + x * E;
        return e ? (e = 1 / e, t[0] = (a * A - u * L + h * T) * e, t[1] = (n * L - r * A - o * T) * e, t[2] = (m * x - v * b + _ * w) * e, t[3] = (p * b - c * x - f * w) * e, t[4] = (u * S - s * A - h * P) * e, t[5] = (i * A - n * S + o * P) * e, t[6] = (v * M - d * x - _ * g) * e, t[7] = (l * x - p * M + f * g) * e, t[8] = (s * L - a * S + h * E) * e, t[9] = (r * S - i * L - o * E) * e, t[10] = (d * b - m * M + _ * y) * e, t[11] = (c * M - l * b - f * y) * e, t[12] = (a * P - s * T - u * E) * e, t[13] = (i * T - r * P + n * E) * e, t[14] = (m * g - d * w - v * y) * e, t[15] = (l * w - c * g + p * y) * e, t) : null;
      }, i.adjoint = function (t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            s = e[4],
            a = e[5],
            u = e[6],
            h = e[7],
            l = e[8],
            c = e[9],
            p = e[10],
            f = e[11],
            d = e[12],
            m = e[13],
            v = e[14],
            e = e[15];
        return t[0] = a * (p * e - f * v) - c * (u * e - h * v) + m * (u * f - h * p), t[1] = -(r * (p * e - f * v) - c * (n * e - o * v) + m * (n * f - o * p)), t[2] = r * (u * e - h * v) - a * (n * e - o * v) + m * (n * h - o * u), t[3] = -(r * (u * f - h * p) - a * (n * f - o * p) + c * (n * h - o * u)), t[4] = -(s * (p * e - f * v) - l * (u * e - h * v) + d * (u * f - h * p)), t[5] = i * (p * e - f * v) - l * (n * e - o * v) + d * (n * f - o * p), t[6] = -(i * (u * e - h * v) - s * (n * e - o * v) + d * (n * h - o * u)), t[7] = i * (u * f - h * p) - s * (n * f - o * p) + l * (n * h - o * u), t[8] = s * (c * e - f * m) - l * (a * e - h * m) + d * (a * f - h * c), t[9] = -(i * (c * e - f * m) - l * (r * e - o * m) + d * (r * f - o * c)), t[10] = i * (a * e - h * m) - s * (r * e - o * m) + d * (r * h - o * a), t[11] = -(i * (a * f - h * c) - s * (r * f - o * c) + l * (r * h - o * a)), t[12] = -(s * (c * v - p * m) - l * (a * v - u * m) + d * (a * p - u * c)), t[13] = i * (c * v - p * m) - l * (r * v - n * m) + d * (r * p - n * c), t[14] = -(i * (a * v - u * m) - s * (r * v - n * m) + d * (r * u - n * a)), t[15] = i * (a * p - u * c) - s * (r * p - n * c) + l * (r * u - n * a), t;
      }, i.determinant = function (t) {
        var e = t[0],
            i = t[1],
            r = t[2],
            n = t[3],
            o = t[4],
            s = t[5],
            a = t[6],
            u = t[7],
            h = t[8],
            l = t[9],
            c = t[10],
            p = t[11],
            f = t[12],
            d = t[13],
            m = t[14],
            t = t[15];
        return (e * s - i * o) * (c * t - p * m) - (e * a - r * o) * (l * t - p * d) + (e * u - n * o) * (l * m - c * d) + (i * a - r * s) * (h * t - p * f) - (i * u - n * s) * (h * m - c * f) + (r * u - n * a) * (h * d - l * f);
      }, i.multiply = r, i.translate = function (t, e, i) {
        var r,
            n,
            o,
            s,
            a,
            u,
            h,
            l,
            c,
            p,
            f,
            d = i[0],
            m = i[1],
            v = i[2];
        e === t ? (t[12] = e[0] * d + e[4] * m + e[8] * v + e[12], t[13] = e[1] * d + e[5] * m + e[9] * v + e[13], t[14] = e[2] * d + e[6] * m + e[10] * v + e[14], t[15] = e[3] * d + e[7] * m + e[11] * v + e[15]) : (r = e[0], n = e[1], o = e[2], s = e[3], a = e[4], u = e[5], h = e[6], l = e[7], c = e[8], p = e[9], f = e[10], i = e[11], t[0] = r, t[1] = n, t[2] = o, t[3] = s, t[4] = a, t[5] = u, t[6] = h, t[7] = l, t[8] = c, t[9] = p, t[10] = f, t[11] = i, t[12] = r * d + a * m + c * v + e[12], t[13] = n * d + u * m + p * v + e[13], t[14] = o * d + h * m + f * v + e[14], t[15] = s * d + l * m + i * v + e[15]);
        return t;
      }, i.scale = function (t, e, i) {
        var r = i[0],
            n = i[1],
            i = i[2];
        return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * i, t[9] = e[9] * i, t[10] = e[10] * i, t[11] = e[11] * i, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
      }, i.rotate = function (t, e, i, r) {
        var n,
            o,
            s,
            a,
            u,
            h,
            l,
            c,
            p,
            f,
            d,
            m,
            v,
            _,
            y,
            g,
            M,
            w,
            b,
            x = r[0],
            E = r[1],
            P = r[2],
            S = Math.hypot(x, E, P);

        if (S < C.EPSILON) return null;
        x *= S = 1 / S, E *= S, P *= S, w = Math.sin(i), b = Math.cos(i), n = 1 - b, o = e[0], s = e[1], a = e[2], u = e[3], h = e[4], l = e[5], c = e[6], p = e[7], f = e[8], d = e[9], m = e[10], v = e[11], _ = x * x * n + b, y = E * x * n + P * w, g = P * x * n - E * w, M = x * E * n - P * w, r = E * E * n + b, S = P * E * n + x * w, i = x * P * n + E * w, w = E * P * n - x * w, b = P * P * n + b, t[0] = o * _ + h * y + f * g, t[1] = s * _ + l * y + d * g, t[2] = a * _ + c * y + m * g, t[3] = u * _ + p * y + v * g, t[4] = o * M + h * r + f * S, t[5] = s * M + l * r + d * S, t[6] = a * M + c * r + m * S, t[7] = u * M + p * r + v * S, t[8] = o * i + h * w + f * b, t[9] = s * i + l * w + d * b, t[10] = a * i + c * w + m * b, t[11] = u * i + p * w + v * b, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
        return t;
      }, i.rotateX = function (t, e, i) {
        var r = Math.sin(i),
            n = Math.cos(i),
            o = e[4],
            s = e[5],
            a = e[6],
            u = e[7],
            h = e[8],
            l = e[9],
            c = e[10],
            i = e[11];
        e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
        return t[4] = o * n + h * r, t[5] = s * n + l * r, t[6] = a * n + c * r, t[7] = u * n + i * r, t[8] = h * n - o * r, t[9] = l * n - s * r, t[10] = c * n - a * r, t[11] = i * n - u * r, t;
      }, i.rotateY = function (t, e, i) {
        var r = Math.sin(i),
            n = Math.cos(i),
            o = e[0],
            s = e[1],
            a = e[2],
            u = e[3],
            h = e[8],
            l = e[9],
            c = e[10],
            i = e[11];
        e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
        return t[0] = o * n - h * r, t[1] = s * n - l * r, t[2] = a * n - c * r, t[3] = u * n - i * r, t[8] = o * r + h * n, t[9] = s * r + l * n, t[10] = a * r + c * n, t[11] = u * r + i * n, t;
      }, i.rotateZ = function (t, e, i) {
        var r = Math.sin(i),
            n = Math.cos(i),
            o = e[0],
            s = e[1],
            a = e[2],
            u = e[3],
            h = e[4],
            l = e[5],
            c = e[6],
            i = e[7];
        e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
        return t[0] = o * n + h * r, t[1] = s * n + l * r, t[2] = a * n + c * r, t[3] = u * n + i * r, t[4] = h * n - o * r, t[5] = l * n - s * r, t[6] = c * n - a * r, t[7] = i * n - u * r, t;
      }, i.fromTranslation = function (t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
      }, i.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, i.fromRotation = function (t, e, i) {
        var r = i[0],
            n = i[1],
            o = i[2],
            s = Math.hypot(r, n, o);
        if (s < C.EPSILON) return null;
        return r *= s = 1 / s, n *= s, o *= s, i = Math.sin(e), s = Math.cos(e), e = 1 - s, t[0] = r * r * e + s, t[1] = n * r * e + o * i, t[2] = o * r * e - n * i, t[3] = 0, t[4] = r * n * e - o * i, t[5] = n * n * e + s, t[6] = o * n * e + r * i, t[7] = 0, t[8] = r * o * e + n * i, t[9] = n * o * e - r * i, t[10] = o * o * e + s, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, i.fromXRotation = function (t, e) {
        var i = Math.sin(e),
            e = Math.cos(e);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e, t[6] = i, t[7] = 0, t[8] = 0, t[9] = -i, t[10] = e, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, i.fromYRotation = function (t, e) {
        var i = Math.sin(e),
            e = Math.cos(e);
        return t[0] = e, t[1] = 0, t[2] = -i, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = i, t[9] = 0, t[10] = e, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, i.fromZRotation = function (t, e) {
        var i = Math.sin(e),
            e = Math.cos(e);
        return t[0] = e, t[1] = i, t[2] = 0, t[3] = 0, t[4] = -i, t[5] = e, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, i.fromRotationTranslation = p, i.fromQuat2 = function (t, e) {
        var i = new C.ARRAY_TYPE(3),
            r = -e[0],
            n = -e[1],
            o = -e[2],
            s = e[3],
            a = e[4],
            u = e[5],
            h = e[6],
            l = e[7],
            c = r * r + n * n + o * o + s * s;
        0 < c ? (i[0] = 2 * (a * s + l * r + u * o - h * n) / c, i[1] = 2 * (u * s + l * n + h * r - a * o) / c, i[2] = 2 * (h * s + l * o + a * n - u * r) / c) : (i[0] = 2 * (a * s + l * r + u * o - h * n), i[1] = 2 * (u * s + l * n + h * r - a * o), i[2] = 2 * (h * s + l * o + a * n - u * r));
        return p(t, e, i), t;
      }, i.getTranslation = function (t, e) {
        return t[0] = e[12], t[1] = e[13], t[2] = e[14], t;
      }, i.getScaling = f, i.getRotation = function (t, e) {
        var i = new C.ARRAY_TYPE(3);
        f(i, e);
        var r = 1 / i[0],
            n = 1 / i[1],
            o = 1 / i[2],
            s = e[0] * r,
            a = e[1] * n,
            u = e[2] * o,
            h = e[4] * r,
            l = e[5] * n,
            c = e[6] * o,
            i = e[8] * r,
            r = e[9] * n,
            n = e[10] * o,
            e = s + l + n,
            o = 0;
        0 < e ? (o = 2 * Math.sqrt(1 + e), t[3] = .25 * o, t[0] = (c - r) / o, t[1] = (i - u) / o, t[2] = (a - h) / o) : l < s && n < s ? (o = 2 * Math.sqrt(1 + s - l - n), t[3] = (c - r) / o, t[0] = .25 * o, t[1] = (a + h) / o, t[2] = (i + u) / o) : n < l ? (o = 2 * Math.sqrt(1 + l - s - n), t[3] = (i - u) / o, t[0] = (a + h) / o, t[1] = .25 * o, t[2] = (c + r) / o) : (o = 2 * Math.sqrt(1 + n - s - l), t[3] = (a - h) / o, t[0] = (i + u) / o, t[1] = (c + r) / o, t[2] = .25 * o);
        return t;
      }, i.fromRotationTranslationScale = function (t, e, i, r) {
        var n = e[0],
            o = e[1],
            s = e[2],
            a = e[3],
            u = n + n,
            h = o + o,
            l = s + s,
            c = n * u,
            p = n * h,
            f = n * l,
            e = o * h,
            n = o * l,
            o = s * l,
            s = a * u,
            u = a * h,
            h = a * l,
            a = r[0],
            l = r[1],
            r = r[2];
        return t[0] = (1 - (e + o)) * a, t[1] = (p + h) * a, t[2] = (f - u) * a, t[3] = 0, t[4] = (p - h) * l, t[5] = (1 - (c + o)) * l, t[6] = (n + s) * l, t[7] = 0, t[8] = (f + u) * r, t[9] = (n - s) * r, t[10] = (1 - (c + e)) * r, t[11] = 0, t[12] = i[0], t[13] = i[1], t[14] = i[2], t[15] = 1, t;
      }, i.fromRotationTranslationScaleOrigin = function (t, e, i, r, n) {
        var o = e[0],
            s = e[1],
            a = e[2],
            u = e[3],
            h = o + o,
            l = s + s,
            c = a + a,
            p = o * h,
            f = o * l,
            d = o * c,
            m = s * l,
            v = s * c,
            _ = a * c,
            y = u * h,
            e = u * l,
            o = u * c,
            s = r[0],
            a = r[1],
            h = r[2],
            l = n[0],
            u = n[1],
            c = n[2],
            r = (1 - (m + _)) * s,
            n = (f + o) * s,
            s = (d - e) * s,
            o = (f - o) * a,
            _ = (1 - (p + _)) * a,
            a = (v + y) * a,
            e = (d + e) * h,
            y = (v - y) * h,
            h = (1 - (p + m)) * h;

        return t[0] = r, t[1] = n, t[2] = s, t[3] = 0, t[4] = o, t[5] = _, t[6] = a, t[7] = 0, t[8] = e, t[9] = y, t[10] = h, t[11] = 0, t[12] = i[0] + l - (r * l + o * u + e * c), t[13] = i[1] + u - (n * l + _ * u + y * c), t[14] = i[2] + c - (s * l + a * u + h * c), t[15] = 1, t;
      }, i.fromQuat = function (t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            s = i + i,
            a = r + r,
            u = n + n,
            h = i * s,
            l = r * s,
            e = r * a,
            i = n * s,
            r = n * a,
            n = n * u,
            s = o * s,
            a = o * a,
            u = o * u;
        return t[0] = 1 - e - n, t[1] = l + u, t[2] = i - a, t[3] = 0, t[4] = l - u, t[5] = 1 - h - n, t[6] = r + s, t[7] = 0, t[8] = i + a, t[9] = r - s, t[10] = 1 - h - e, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, i.frustum = function (t, e, i, r, n, o, s) {
        var a = 1 / (i - e),
            u = 1 / (n - r),
            h = 1 / (o - s);
        return t[0] = 2 * o * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * u, t[6] = 0, t[7] = 0, t[8] = (i + e) * a, t[9] = (n + r) * u, t[10] = (s + o) * h, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = s * o * 2 * h, t[15] = 0, t;
      }, i.perspective = function (t, e, i, r, n) {
        e = 1 / Math.tan(e / 2);
        t[0] = e / i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != n && n !== 1 / 0 ? (e = 1 / (r - n), t[10] = (n + r) * e, t[14] = 2 * n * r * e) : (t[10] = -1, t[14] = -2 * r);
        return t;
      }, i.perspectiveFromFieldOfView = function (t, e, i, r) {
        var n = Math.tan(e.upDegrees * Math.PI / 180),
            o = Math.tan(e.downDegrees * Math.PI / 180),
            s = Math.tan(e.leftDegrees * Math.PI / 180),
            a = Math.tan(e.rightDegrees * Math.PI / 180),
            u = 2 / (s + a),
            e = 2 / (n + o);
        return t[0] = u, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e, t[6] = 0, t[7] = 0, t[8] = -(s - a) * u * .5, t[9] = (n - o) * e * .5, t[10] = r / (i - r), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r * i / (i - r), t[15] = 0, t;
      }, i.ortho = function (t, e, i, r, n, o, s) {
        var a = 1 / (e - i),
            u = 1 / (r - n),
            h = 1 / (o - s);
        return t[0] = -2 * a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * u, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * h, t[11] = 0, t[12] = (e + i) * a, t[13] = (n + r) * u, t[14] = (s + o) * h, t[15] = 1, t;
      }, i.lookAt = function (t, e, i, r) {
        var n,
            o = e[0],
            s = e[1],
            a = e[2],
            u = r[0],
            h = r[1],
            l = r[2],
            c = i[0],
            p = i[1],
            f = i[2];
        if (Math.abs(o - c) < C.EPSILON && Math.abs(s - p) < C.EPSILON && Math.abs(a - f) < C.EPSILON) return d(t);
        n = o - c, e = s - p, r = a - f, i = 1 / Math.hypot(n, e, r), c = h * (r *= i) - l * (e *= i), p = l * (n *= i) - u * r, f = u * e - h * n, (i = Math.hypot(c, p, f)) ? (c *= i = 1 / i, p *= i, f *= i) : f = p = c = 0;
        l = e * f - r * p, u = r * c - n * f, h = n * p - e * c, (i = Math.hypot(l, u, h)) ? (l *= i = 1 / i, u *= i, h *= i) : h = u = l = 0;
        return t[0] = c, t[1] = l, t[2] = n, t[3] = 0, t[4] = p, t[5] = u, t[6] = e, t[7] = 0, t[8] = f, t[9] = h, t[10] = r, t[11] = 0, t[12] = -(c * o + p * s + f * a), t[13] = -(l * o + u * s + h * a), t[14] = -(n * o + e * s + r * a), t[15] = 1, t;
      }, i.targetTo = function (t, e, i, r) {
        var n = e[0],
            o = e[1],
            s = e[2],
            a = r[0],
            u = r[1],
            h = r[2],
            l = n - i[0],
            c = o - i[1],
            e = s - i[2],
            r = l * l + c * c + e * e;
        0 < r && (r = 1 / Math.sqrt(r), l *= r, c *= r, e *= r);
        i = u * e - h * c, h = h * l - a * e, u = a * c - u * l;
        0 < (r = i * i + h * h + u * u) && (r = 1 / Math.sqrt(r), i *= r, h *= r, u *= r);
        return t[0] = i, t[1] = h, t[2] = u, t[3] = 0, t[4] = c * u - e * h, t[5] = e * i - l * u, t[6] = l * h - c * i, t[7] = 0, t[8] = l, t[9] = c, t[10] = e, t[11] = 0, t[12] = n, t[13] = o, t[14] = s, t[15] = 1, t;
      }, i.str = function (t) {
        return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
      }, i.frob = function (t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
      }, i.add = function (t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t[4] = e[4] + i[4], t[5] = e[5] + i[5], t[6] = e[6] + i[6], t[7] = e[7] + i[7], t[8] = e[8] + i[8], t[9] = e[9] + i[9], t[10] = e[10] + i[10], t[11] = e[11] + i[11], t[12] = e[12] + i[12], t[13] = e[13] + i[13], t[14] = e[14] + i[14], t[15] = e[15] + i[15], t;
      }, i.subtract = n, i.multiplyScalar = function (t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t[4] = e[4] * i, t[5] = e[5] * i, t[6] = e[6] * i, t[7] = e[7] * i, t[8] = e[8] * i, t[9] = e[9] * i, t[10] = e[10] * i, t[11] = e[11] * i, t[12] = e[12] * i, t[13] = e[13] * i, t[14] = e[14] * i, t[15] = e[15] * i, t;
      }, i.multiplyScalarAndAdd = function (t, e, i, r) {
        return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t[2] = e[2] + i[2] * r, t[3] = e[3] + i[3] * r, t[4] = e[4] + i[4] * r, t[5] = e[5] + i[5] * r, t[6] = e[6] + i[6] * r, t[7] = e[7] + i[7] * r, t[8] = e[8] + i[8] * r, t[9] = e[9] + i[9] * r, t[10] = e[10] + i[10] * r, t[11] = e[11] + i[11] * r, t[12] = e[12] + i[12] * r, t[13] = e[13] + i[13] * r, t[14] = e[14] + i[14] * r, t[15] = e[15] + i[15] * r, t;
      }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15];
      }, i.equals = function (t, e) {
        var i = t[0],
            r = t[1],
            n = t[2],
            o = t[3],
            s = t[4],
            a = t[5],
            u = t[6],
            h = t[7],
            l = t[8],
            c = t[9],
            p = t[10],
            f = t[11],
            d = t[12],
            m = t[13],
            v = t[14],
            _ = t[15],
            y = e[0],
            g = e[1],
            M = e[2],
            w = e[3],
            b = e[4],
            x = e[5],
            E = e[6],
            P = e[7],
            S = e[8],
            T = e[9],
            L = e[10],
            A = e[11],
            O = e[12],
            R = e[13],
            t = e[14],
            e = e[15];
        return Math.abs(i - y) <= C.EPSILON * Math.max(1, Math.abs(i), Math.abs(y)) && Math.abs(r - g) <= C.EPSILON * Math.max(1, Math.abs(r), Math.abs(g)) && Math.abs(n - M) <= C.EPSILON * Math.max(1, Math.abs(n), Math.abs(M)) && Math.abs(o - w) <= C.EPSILON * Math.max(1, Math.abs(o), Math.abs(w)) && Math.abs(s - b) <= C.EPSILON * Math.max(1, Math.abs(s), Math.abs(b)) && Math.abs(a - x) <= C.EPSILON * Math.max(1, Math.abs(a), Math.abs(x)) && Math.abs(u - E) <= C.EPSILON * Math.max(1, Math.abs(u), Math.abs(E)) && Math.abs(h - P) <= C.EPSILON * Math.max(1, Math.abs(h), Math.abs(P)) && Math.abs(l - S) <= C.EPSILON * Math.max(1, Math.abs(l), Math.abs(S)) && Math.abs(c - T) <= C.EPSILON * Math.max(1, Math.abs(c), Math.abs(T)) && Math.abs(p - L) <= C.EPSILON * Math.max(1, Math.abs(p), Math.abs(L)) && Math.abs(f - A) <= C.EPSILON * Math.max(1, Math.abs(f), Math.abs(A)) && Math.abs(d - O) <= C.EPSILON * Math.max(1, Math.abs(d), Math.abs(O)) && Math.abs(m - R) <= C.EPSILON * Math.max(1, Math.abs(m), Math.abs(R)) && Math.abs(v - t) <= C.EPSILON * Math.max(1, Math.abs(v), Math.abs(t)) && Math.abs(_ - e) <= C.EPSILON * Math.max(1, Math.abs(_), Math.abs(e));
      }, i.sub = i.mul = void 0;

      var C = function (t) {
        if (t && t.__esModule) return t;
        if (null === t || "object" !== s(t) && "function" != typeof t) return {
          default: t
        };
        var e = a();
        if (e && e.has(t)) return e.get(t);
        var i,
            r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (i in t) {
          var o;
          Object.prototype.hasOwnProperty.call(t, i) && ((o = n ? Object.getOwnPropertyDescriptor(t, i) : null) && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = t[i]);
        }

        r.default = t, e && e.set(t, r);
        return r;
      }(t("./common.js"));

      function a() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap();
        return a = function a() {
          return t;
        }, t;
      }

      function d(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }

      function r(t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = e[4],
            u = e[5],
            h = e[6],
            l = e[7],
            c = e[8],
            p = e[9],
            f = e[10],
            d = e[11],
            m = e[12],
            v = e[13],
            _ = e[14],
            y = e[15],
            g = i[0],
            M = i[1],
            w = i[2],
            e = i[3];
        return t[0] = g * r + M * a + w * c + e * m, t[1] = g * n + M * u + w * p + e * v, t[2] = g * o + M * h + w * f + e * _, t[3] = g * s + M * l + w * d + e * y, g = i[4], M = i[5], w = i[6], e = i[7], t[4] = g * r + M * a + w * c + e * m, t[5] = g * n + M * u + w * p + e * v, t[6] = g * o + M * h + w * f + e * _, t[7] = g * s + M * l + w * d + e * y, g = i[8], M = i[9], w = i[10], e = i[11], t[8] = g * r + M * a + w * c + e * m, t[9] = g * n + M * u + w * p + e * v, t[10] = g * o + M * h + w * f + e * _, t[11] = g * s + M * l + w * d + e * y, g = i[12], M = i[13], w = i[14], e = i[15], t[12] = g * r + M * a + w * c + e * m, t[13] = g * n + M * u + w * p + e * v, t[14] = g * o + M * h + w * f + e * _, t[15] = g * s + M * l + w * d + e * y, t;
      }

      function p(t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = r + r,
            u = n + n,
            h = o + o,
            l = r * a,
            c = r * u,
            e = r * h,
            r = n * u,
            n = n * h,
            o = o * h,
            a = s * a,
            u = s * u,
            h = s * h;
        return t[0] = 1 - (r + o), t[1] = c + h, t[2] = e - u, t[3] = 0, t[4] = c - h, t[5] = 1 - (l + o), t[6] = n + a, t[7] = 0, t[8] = e + u, t[9] = n - a, t[10] = 1 - (l + r), t[11] = 0, t[12] = i[0], t[13] = i[1], t[14] = i[2], t[15] = 1, t;
      }

      function f(t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[4],
            s = e[5],
            a = e[6],
            u = e[8],
            h = e[9],
            e = e[10];
        return t[0] = Math.hypot(i, r, n), t[1] = Math.hypot(o, s, a), t[2] = Math.hypot(u, h, e), t;
      }

      function n(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t[4] = e[4] - i[4], t[5] = e[5] - i[5], t[6] = e[6] - i[6], t[7] = e[7] - i[7], t[8] = e[8] - i[8], t[9] = e[9] - i[9], t[10] = e[10] - i[10], t[11] = e[11] - i[11], t[12] = e[12] - i[12], t[13] = e[13] - i[13], t[14] = e[14] - i[14], t[15] = e[15] - i[15], t;
      }

      i.mul = r, i.sub = n;
    }, {
      "./common.js": 2
    }],
    8: [function (t, e, i) {
      "use strict";

      function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.create = h, i.identity = function (t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
      }, i.setAxisAngle = l, i.getAxisAngle = function (t, e) {
        var i = 2 * Math.acos(e[3]),
            r = Math.sin(i / 2);
        r > f.EPSILON ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 1, t[1] = 0, t[2] = 0);
        return i;
      }, i.getAngle = function (t, e) {
        e = y(t, e);
        return Math.acos(2 * e * e - 1);
      }, i.multiply = c, i.rotateX = function (t, e, i) {
        i *= .5;
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            e = Math.sin(i),
            i = Math.cos(i);
        return t[0] = r * i + s * e, t[1] = n * i + o * e, t[2] = o * i - n * e, t[3] = s * i - r * e, t;
      }, i.rotateY = function (t, e, i) {
        i *= .5;
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            e = Math.sin(i),
            i = Math.cos(i);
        return t[0] = r * i - o * e, t[1] = n * i + s * e, t[2] = o * i + r * e, t[3] = s * i - n * e, t;
      }, i.rotateZ = function (t, e, i) {
        i *= .5;
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            e = Math.sin(i),
            i = Math.cos(i);
        return t[0] = r * i + n * e, t[1] = n * i - r * e, t[2] = o * i + s * e, t[3] = s * i - o * e, t;
      }, i.calculateW = function (t, e) {
        var i = e[0],
            r = e[1],
            e = e[2];
        return t[0] = i, t[1] = r, t[2] = e, t[3] = Math.sqrt(Math.abs(1 - i * i - r * r - e * e)), t;
      }, i.exp = p, i.ln = d, i.pow = function (t, e, i) {
        return d(t, e), _(t, t, i), p(t, t), t;
      }, i.slerp = m, i.random = function (t) {
        var e = f.RANDOM(),
            i = f.RANDOM(),
            r = f.RANDOM(),
            n = Math.sqrt(1 - e),
            e = Math.sqrt(e);
        return t[0] = n * Math.sin(2 * Math.PI * i), t[1] = n * Math.cos(2 * Math.PI * i), t[2] = e * Math.sin(2 * Math.PI * r), t[3] = e * Math.cos(2 * Math.PI * r), t;
      }, i.invert = function (t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            e = i * i + r * r + n * n + o * o,
            e = e ? 1 / e : 0;
        return t[0] = -i * e, t[1] = -r * e, t[2] = -n * e, t[3] = o * e, t;
      }, i.conjugate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = e[3], t;
      }, i.fromMat3 = v, i.fromEuler = function (t, e, i, r) {
        var n = .5 * Math.PI / 180;
        e *= n, i *= n, r *= n;
        var o = Math.sin(e),
            s = Math.cos(e),
            n = Math.sin(i),
            e = Math.cos(i),
            i = Math.sin(r),
            r = Math.cos(r);
        return t[0] = o * e * r - s * n * i, t[1] = s * n * r + o * e * i, t[2] = s * e * i - o * n * r, t[3] = s * e * r + o * n * i, t;
      }, i.str = function (t) {
        return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      }, i.setAxes = i.sqlerp = i.rotationTo = i.equals = i.exactEquals = i.normalize = i.sqrLen = i.squaredLength = i.len = i.length = i.lerp = i.dot = i.scale = i.mul = i.add = i.set = i.copy = i.fromValues = i.clone = void 0;
      var f = u(t("./common.js")),
          r = u(t("./mat3.js")),
          n = u(t("./vec3.js")),
          o = u(t("./vec4.js"));

      function a() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap();
        return a = function a() {
          return t;
        }, t;
      }

      function u(t) {
        if (t && t.__esModule) return t;
        if (null === t || "object" !== s(t) && "function" != typeof t) return {
          default: t
        };
        var e = a();
        if (e && e.has(t)) return e.get(t);
        var i,
            r,
            n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (i in t) {
          Object.prototype.hasOwnProperty.call(t, i) && ((r = o ? Object.getOwnPropertyDescriptor(t, i) : null) && (r.get || r.set) ? Object.defineProperty(n, i, r) : n[i] = t[i]);
        }

        return n.default = t, e && e.set(t, n), n;
      }

      function h() {
        var t = new f.ARRAY_TYPE(4);
        return f.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t[3] = 1, t;
      }

      function l(t, e, i) {
        i *= .5;
        var r = Math.sin(i);
        return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = Math.cos(i), t;
      }

      function c(t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = i[0],
            u = i[1],
            e = i[2],
            i = i[3];
        return t[0] = r * i + s * a + n * e - o * u, t[1] = n * i + s * u + o * a - r * e, t[2] = o * i + s * e + r * u - n * a, t[3] = s * i - r * a - n * u - o * e, t;
      }

      function p(t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            s = Math.sqrt(i * i + r * r + n * n),
            e = Math.exp(o),
            o = 0 < s ? e * Math.sin(s) / s : 0;
        return t[0] = i * o, t[1] = r * o, t[2] = n * o, t[3] = e * Math.cos(s), t;
      }

      function d(t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            e = Math.sqrt(i * i + r * r + n * n),
            e = 0 < e ? Math.atan2(e, o) / e : 0;
        return t[0] = i * e, t[1] = r * e, t[2] = n * e, t[3] = .5 * Math.log(i * i + r * r + n * n + o * o), t;
      }

      function m(t, e, i, r) {
        var n,
            o = e[0],
            s = e[1],
            a = e[2],
            u = e[3],
            h = i[0],
            l = i[1],
            c = i[2],
            p = i[3],
            e = o * h + s * l + a * c + u * p;
        return e < 0 && (e = -e, h = -h, l = -l, c = -c, p = -p), r = 1 - e > f.EPSILON ? (i = Math.acos(e), e = Math.sin(i), n = Math.sin((1 - r) * i) / e, Math.sin(r * i) / e) : (n = 1 - r, r), t[0] = n * o + r * h, t[1] = n * s + r * l, t[2] = n * a + r * c, t[3] = n * u + r * p, t;
      }

      function v(t, e) {
        var i,
            r,
            n,
            o = e[0] + e[4] + e[8];
        return 0 < o ? (n = Math.sqrt(o + 1), t[3] = .5 * n, n = .5 / n, t[0] = (e[5] - e[7]) * n, t[1] = (e[6] - e[2]) * n, t[2] = (e[1] - e[3]) * n) : (i = 0, e[4] > e[0] && (i = 1), e[8] > e[3 * i + i] && (i = 2), r = (i + 1) % 3, o = (i + 2) % 3, n = Math.sqrt(e[3 * i + i] - e[3 * r + r] - e[3 * o + o] + 1), t[i] = .5 * n, n = .5 / n, t[3] = (e[3 * r + o] - e[3 * o + r]) * n, t[r] = (e[3 * r + i] + e[3 * i + r]) * n, t[o] = (e[3 * o + i] + e[3 * i + o]) * n), t;
      }

      t = o.clone;
      i.clone = t;
      t = o.fromValues;
      i.fromValues = t;
      t = o.copy;
      i.copy = t;
      t = o.set;
      i.set = t;
      t = o.add;
      i.add = t, i.mul = c;
      var _ = o.scale;
      i.scale = _;
      var y = o.dot;
      i.dot = y;
      t = o.lerp;
      i.lerp = t;
      t = o.length;
      i.length = t, i.len = t;
      t = o.squaredLength;
      i.squaredLength = t, i.sqrLen = t;
      var g = o.normalize;
      i.normalize = g;
      t = o.exactEquals;
      i.exactEquals = t;
      o = o.equals;
      i.equals = o;
      var M,
          w,
          b,
          o = (M = n.create(), w = n.fromValues(1, 0, 0), b = n.fromValues(0, 1, 0), function (t, e, i) {
        var r = n.dot(e, i);
        return r < -.999999 ? (n.cross(M, w, e), n.len(M) < 1e-6 && n.cross(M, b, e), n.normalize(M, M), l(t, M, Math.PI), t) : .999999 < r ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : (n.cross(M, e, i), t[0] = M[0], t[1] = M[1], t[2] = M[2], t[3] = 1 + r, g(t, t));
      });
      i.rotationTo = o;
      var x,
          E,
          o = (x = h(), E = h(), function (t, e, i, r, n, o) {
        return m(x, e, n, o), m(E, i, r, o), m(t, x, E, 2 * o * (1 - o)), t;
      });
      i.sqlerp = o;
      var P,
          r = (P = r.create(), function (t, e, i, r) {
        return P[0] = i[0], P[3] = i[1], P[6] = i[2], P[1] = r[0], P[4] = r[1], P[7] = r[2], P[2] = -e[0], P[5] = -e[1], P[8] = -e[2], g(t, v(t, P));
      });
      i.setAxes = r;
    }, {
      "./common.js": 2,
      "./mat3.js": 6,
      "./vec3.js": 11,
      "./vec4.js": 12
    }],
    9: [function (t, e, i) {
      "use strict";

      function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.create = function () {
        var t = new v.ARRAY_TYPE(8);
        v.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0);
        return t[3] = 1, t;
      }, i.clone = function (t) {
        var e = new v.ARRAY_TYPE(8);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e;
      }, i.fromValues = function (t, e, i, r, n, o, s, a) {
        var u = new v.ARRAY_TYPE(8);
        return u[0] = t, u[1] = e, u[2] = i, u[3] = r, u[4] = n, u[5] = o, u[6] = s, u[7] = a, u;
      }, i.fromRotationTranslationValues = function (t, e, i, r, n, o, s) {
        var a = new v.ARRAY_TYPE(8);
        a[0] = t, a[1] = e, a[2] = i, a[3] = r;
        n *= .5, o *= .5, s *= .5;
        return a[4] = n * r + o * i - s * e, a[5] = o * r + s * t - n * i, a[6] = s * r + n * e - o * t, a[7] = -n * t - o * e - s * i, a;
      }, i.fromRotationTranslation = o, i.fromTranslation = function (t, e) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = .5 * e[0], t[5] = .5 * e[1], t[6] = .5 * e[2], t[7] = 0, t;
      }, i.fromRotation = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t;
      }, i.fromMat4 = function (t, e) {
        var i = d.create();
        n.getRotation(i, e);
        var r = new v.ARRAY_TYPE(3);
        return n.getTranslation(r, e), o(t, i, r), t;
      }, i.copy = l, i.identity = function (t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t;
      }, i.set = function (t, e, i, r, n, o, s, a, u) {
        return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t[4] = o, t[5] = s, t[6] = a, t[7] = u, t;
      }, i.getDual = function (t, e) {
        return t[0] = e[4], t[1] = e[5], t[2] = e[6], t[3] = e[7], t;
      }, i.setDual = function (t, e) {
        return t[4] = e[0], t[5] = e[1], t[6] = e[2], t[7] = e[3], t;
      }, i.getTranslation = function (t, e) {
        var i = e[4],
            r = e[5],
            n = e[6],
            o = e[7],
            s = -e[0],
            a = -e[1],
            u = -e[2],
            e = e[3];
        return t[0] = 2 * (i * e + o * s + r * u - n * a), t[1] = 2 * (r * e + o * a + n * s - i * u), t[2] = 2 * (n * e + o * u + i * a - r * s), t;
      }, i.translate = function (t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = .5 * i[0],
            u = .5 * i[1],
            h = .5 * i[2],
            l = e[4],
            c = e[5],
            i = e[6],
            e = e[7];
        return t[0] = r, t[1] = n, t[2] = o, t[3] = s, t[4] = s * a + n * h - o * u + l, t[5] = s * u + o * a - r * h + c, t[6] = s * h + r * u - n * a + i, t[7] = -r * a - n * u - o * h + e, t;
      }, i.rotateX = function (t, e, i) {
        var r = -e[0],
            n = -e[1],
            o = -e[2],
            s = e[3],
            a = e[4],
            u = e[5],
            h = e[6],
            l = e[7],
            c = a * s + l * r + u * o - h * n,
            p = u * s + l * n + h * r - a * o,
            f = h * s + l * o + a * n - u * r,
            h = l * s - a * r - u * n - h * o;
        return d.rotateX(t, e, i), r = t[0], n = t[1], o = t[2], s = t[3], t[4] = c * s + h * r + p * o - f * n, t[5] = p * s + h * n + f * r - c * o, t[6] = f * s + h * o + c * n - p * r, t[7] = h * s - c * r - p * n - f * o, t;
      }, i.rotateY = function (t, e, i) {
        var r = -e[0],
            n = -e[1],
            o = -e[2],
            s = e[3],
            a = e[4],
            u = e[5],
            h = e[6],
            l = e[7],
            c = a * s + l * r + u * o - h * n,
            p = u * s + l * n + h * r - a * o,
            f = h * s + l * o + a * n - u * r,
            h = l * s - a * r - u * n - h * o;
        return d.rotateY(t, e, i), r = t[0], n = t[1], o = t[2], s = t[3], t[4] = c * s + h * r + p * o - f * n, t[5] = p * s + h * n + f * r - c * o, t[6] = f * s + h * o + c * n - p * r, t[7] = h * s - c * r - p * n - f * o, t;
      }, i.rotateZ = function (t, e, i) {
        var r = -e[0],
            n = -e[1],
            o = -e[2],
            s = e[3],
            a = e[4],
            u = e[5],
            h = e[6],
            l = e[7],
            c = a * s + l * r + u * o - h * n,
            p = u * s + l * n + h * r - a * o,
            f = h * s + l * o + a * n - u * r,
            h = l * s - a * r - u * n - h * o;
        return d.rotateZ(t, e, i), r = t[0], n = t[1], o = t[2], s = t[3], t[4] = c * s + h * r + p * o - f * n, t[5] = p * s + h * n + f * r - c * o, t[6] = f * s + h * o + c * n - p * r, t[7] = h * s - c * r - p * n - f * o, t;
      }, i.rotateByQuatAppend = function (t, e, i) {
        var r = i[0],
            n = i[1],
            o = i[2],
            s = i[3],
            a = e[0],
            u = e[1],
            h = e[2],
            i = e[3];
        return t[0] = a * s + i * r + u * o - h * n, t[1] = u * s + i * n + h * r - a * o, t[2] = h * s + i * o + a * n - u * r, t[3] = i * s - a * r - u * n - h * o, a = e[4], u = e[5], h = e[6], i = e[7], t[4] = a * s + i * r + u * o - h * n, t[5] = u * s + i * n + h * r - a * o, t[6] = h * s + i * o + a * n - u * r, t[7] = i * s - a * r - u * n - h * o, t;
      }, i.rotateByQuatPrepend = function (t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = i[0],
            u = i[1],
            h = i[2],
            e = i[3];
        return t[0] = r * e + s * a + n * h - o * u, t[1] = n * e + s * u + o * a - r * h, t[2] = o * e + s * h + r * u - n * a, t[3] = s * e - r * a - n * u - o * h, a = i[4], u = i[5], h = i[6], e = i[7], t[4] = r * e + s * a + n * h - o * u, t[5] = n * e + s * u + o * a - r * h, t[6] = o * e + s * h + r * u - n * a, t[7] = s * e - r * a - n * u - o * h, t;
      }, i.rotateAroundAxis = function (t, e, i, r) {
        if (Math.abs(r) < v.EPSILON) return l(t, e);
        var n = Math.hypot(i[0], i[1], i[2]);
        r *= .5;
        var o = Math.sin(r),
            s = o * i[0] / n,
            a = o * i[1] / n,
            u = o * i[2] / n,
            h = Math.cos(r),
            o = e[0],
            i = e[1],
            n = e[2],
            r = e[3];
        t[0] = o * h + r * s + i * u - n * a, t[1] = i * h + r * a + n * s - o * u, t[2] = n * h + r * u + o * a - i * s, t[3] = r * h - o * s - i * a - n * u;
        o = e[4], i = e[5], n = e[6], e = e[7];
        return t[4] = o * h + e * s + i * u - n * a, t[5] = i * h + e * a + n * s - o * u, t[6] = n * h + e * u + o * a - i * s, t[7] = e * h - o * s - i * a - n * u, t;
      }, i.add = function (t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t[4] = e[4] + i[4], t[5] = e[5] + i[5], t[6] = e[6] + i[6], t[7] = e[7] + i[7], t;
      }, i.multiply = u, i.scale = function (t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t[4] = e[4] * i, t[5] = e[5] * i, t[6] = e[6] * i, t[7] = e[7] * i, t;
      }, i.lerp = function (t, e, i, r) {
        var n = 1 - r;
        h(e, i) < 0 && (r = -r);
        return t[0] = e[0] * n + i[0] * r, t[1] = e[1] * n + i[1] * r, t[2] = e[2] * n + i[2] * r, t[3] = e[3] * n + i[3] * r, t[4] = e[4] * n + i[4] * r, t[5] = e[5] * n + i[5] * r, t[6] = e[6] * n + i[6] * r, t[7] = e[7] * n + i[7] * r, t;
      }, i.invert = function (t, e) {
        var i = c(e);
        return t[0] = -e[0] / i, t[1] = -e[1] / i, t[2] = -e[2] / i, t[3] = e[3] / i, t[4] = -e[4] / i, t[5] = -e[5] / i, t[6] = -e[6] / i, t[7] = e[7] / i, t;
      }, i.conjugate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = e[3], t[4] = -e[4], t[5] = -e[5], t[6] = -e[6], t[7] = e[7], t;
      }, i.normalize = function (t, e) {
        var i = c(e);
        {
          var r, n, o, s, a, u, h, l;
          0 < i && (i = Math.sqrt(i), r = e[0] / i, n = e[1] / i, o = e[2] / i, s = e[3] / i, a = e[4], u = e[5], h = e[6], l = e[7], e = r * a + n * u + o * h + s * l, t[0] = r, t[1] = n, t[2] = o, t[3] = s, t[4] = (a - r * e) / i, t[5] = (u - n * e) / i, t[6] = (h - o * e) / i, t[7] = (l - s * e) / i);
        }
        return t;
      }, i.str = function (t) {
        return "quat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ")";
      }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7];
      }, i.equals = function (t, e) {
        var i = t[0],
            r = t[1],
            n = t[2],
            o = t[3],
            s = t[4],
            a = t[5],
            u = t[6],
            h = t[7],
            l = e[0],
            c = e[1],
            p = e[2],
            f = e[3],
            d = e[4],
            m = e[5],
            t = e[6],
            e = e[7];
        return Math.abs(i - l) <= v.EPSILON * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(r - c) <= v.EPSILON * Math.max(1, Math.abs(r), Math.abs(c)) && Math.abs(n - p) <= v.EPSILON * Math.max(1, Math.abs(n), Math.abs(p)) && Math.abs(o - f) <= v.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(s - d) <= v.EPSILON * Math.max(1, Math.abs(s), Math.abs(d)) && Math.abs(a - m) <= v.EPSILON * Math.max(1, Math.abs(a), Math.abs(m)) && Math.abs(u - t) <= v.EPSILON * Math.max(1, Math.abs(u), Math.abs(t)) && Math.abs(h - e) <= v.EPSILON * Math.max(1, Math.abs(h), Math.abs(e));
      }, i.sqrLen = i.squaredLength = i.len = i.length = i.dot = i.mul = i.setReal = i.getReal = void 0;
      var v = r(t("./common.js")),
          d = r(t("./quat.js")),
          n = r(t("./mat4.js"));

      function a() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap();
        return a = function a() {
          return t;
        }, t;
      }

      function r(t) {
        if (t && t.__esModule) return t;
        if (null === t || "object" !== s(t) && "function" != typeof t) return {
          default: t
        };
        var e = a();
        if (e && e.has(t)) return e.get(t);
        var i,
            r,
            n = {},
            o = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (i in t) {
          Object.prototype.hasOwnProperty.call(t, i) && ((r = o ? Object.getOwnPropertyDescriptor(t, i) : null) && (r.get || r.set) ? Object.defineProperty(n, i, r) : n[i] = t[i]);
        }

        return n.default = t, e && e.set(t, n), n;
      }

      function o(t, e, i) {
        var r = .5 * i[0],
            n = .5 * i[1],
            o = .5 * i[2],
            s = e[0],
            a = e[1],
            i = e[2],
            e = e[3];
        return t[0] = s, t[1] = a, t[2] = i, t[3] = e, t[4] = r * e + n * i - o * a, t[5] = n * e + o * s - r * i, t[6] = o * e + r * a - n * s, t[7] = -r * s - n * a - o * i, t;
      }

      function l(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t;
      }

      t = d.copy;
      i.getReal = t;
      t = d.copy;

      function u(t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            a = i[4],
            u = i[5],
            h = i[6],
            l = i[7],
            c = e[4],
            p = e[5],
            f = e[6],
            d = e[7],
            m = i[0],
            v = i[1],
            e = i[2],
            i = i[3];
        return t[0] = r * i + s * m + n * e - o * v, t[1] = n * i + s * v + o * m - r * e, t[2] = o * i + s * e + r * v - n * m, t[3] = s * i - r * m - n * v - o * e, t[4] = r * l + s * a + n * h - o * u + c * i + d * m + p * e - f * v, t[5] = n * l + s * u + o * a - r * h + p * i + d * v + f * m - c * e, t[6] = o * l + s * h + r * u - n * a + f * i + d * e + c * v - p * m, t[7] = s * l - r * a - n * u - o * h + d * i - c * m - p * v - f * e, t;
      }

      i.setReal = t, i.mul = u;
      var h = d.dot;
      i.dot = h;
      t = d.length;
      i.length = t, i.len = t;
      var c = d.squaredLength;
      i.squaredLength = c, i.sqrLen = c;
    }, {
      "./common.js": 2,
      "./mat4.js": 7,
      "./quat.js": 8
    }],
    10: [function (t, e, i) {
      "use strict";

      function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.create = r, i.clone = function (t) {
        var e = new n.ARRAY_TYPE(2);
        return e[0] = t[0], e[1] = t[1], e;
      }, i.fromValues = function (t, e) {
        var i = new n.ARRAY_TYPE(2);
        return i[0] = t, i[1] = e, i;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t;
      }, i.set = function (t, e, i) {
        return t[0] = e, t[1] = i, t;
      }, i.add = function (t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t;
      }, i.subtract = o, i.multiply = u, i.divide = h, i.ceil = function (t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t;
      }, i.floor = function (t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t;
      }, i.min = function (t, e, i) {
        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t;
      }, i.max = function (t, e, i) {
        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t;
      }, i.round = function (t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t;
      }, i.scale = function (t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t;
      }, i.scaleAndAdd = function (t, e, i, r) {
        return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t;
      }, i.distance = l, i.squaredDistance = c, i.length = p, i.squaredLength = f, i.negate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t;
      }, i.inverse = function (t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t;
      }, i.normalize = function (t, e) {
        var i = e[0],
            r = e[1],
            r = i * i + r * r;
        0 < r && (r = 1 / Math.sqrt(r));
        return t[0] = e[0] * r, t[1] = e[1] * r, t;
      }, i.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1];
      }, i.cross = function (t, e, i) {
        i = e[0] * i[1] - e[1] * i[0];
        return t[0] = t[1] = 0, t[2] = i, t;
      }, i.lerp = function (t, e, i, r) {
        var n = e[0],
            e = e[1];
        return t[0] = n + r * (i[0] - n), t[1] = e + r * (i[1] - e), t;
      }, i.random = function (t, e) {
        e = e || 1;
        var i = 2 * n.RANDOM() * Math.PI;
        return t[0] = Math.cos(i) * e, t[1] = Math.sin(i) * e, t;
      }, i.transformMat2 = function (t, e, i) {
        var r = e[0],
            e = e[1];
        return t[0] = i[0] * r + i[2] * e, t[1] = i[1] * r + i[3] * e, t;
      }, i.transformMat2d = function (t, e, i) {
        var r = e[0],
            e = e[1];
        return t[0] = i[0] * r + i[2] * e + i[4], t[1] = i[1] * r + i[3] * e + i[5], t;
      }, i.transformMat3 = function (t, e, i) {
        var r = e[0],
            e = e[1];
        return t[0] = i[0] * r + i[3] * e + i[6], t[1] = i[1] * r + i[4] * e + i[7], t;
      }, i.transformMat4 = function (t, e, i) {
        var r = e[0],
            e = e[1];
        return t[0] = i[0] * r + i[4] * e + i[12], t[1] = i[1] * r + i[5] * e + i[13], t;
      }, i.rotate = function (t, e, i, r) {
        var n = e[0] - i[0],
            o = e[1] - i[1],
            e = Math.sin(r),
            r = Math.cos(r);
        return t[0] = n * r - o * e + i[0], t[1] = n * e + o * r + i[1], t;
      }, i.angle = function (t, e) {
        var i = t[0],
            r = t[1],
            n = e[0],
            t = e[1],
            e = Math.sqrt(i * i + r * r) * Math.sqrt(n * n + t * t),
            e = e && (i * n + r * t) / e;
        return Math.acos(Math.min(Math.max(e, -1), 1));
      }, i.zero = function (t) {
        return t[0] = 0, t[1] = 0, t;
      }, i.str = function (t) {
        return "vec2(" + t[0] + ", " + t[1] + ")";
      }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1];
      }, i.equals = function (t, e) {
        var i = t[0],
            r = t[1],
            t = e[0],
            e = e[1];
        return Math.abs(i - t) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(t)) && Math.abs(r - e) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(e));
      }, i.forEach = i.sqrLen = i.sqrDist = i.dist = i.div = i.mul = i.sub = i.len = void 0;

      var n = function (t) {
        if (t && t.__esModule) return t;
        if (null === t || "object" !== s(t) && "function" != typeof t) return {
          default: t
        };
        var e = a();
        if (e && e.has(t)) return e.get(t);
        var i,
            r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (i in t) {
          var o;
          Object.prototype.hasOwnProperty.call(t, i) && ((o = n ? Object.getOwnPropertyDescriptor(t, i) : null) && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = t[i]);
        }

        r.default = t, e && e.set(t, r);
        return r;
      }(t("./common.js"));

      function a() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap();
        return a = function a() {
          return t;
        }, t;
      }

      function r() {
        var t = new n.ARRAY_TYPE(2);
        return n.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0), t;
      }

      function o(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t;
      }

      function u(t, e, i) {
        return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t;
      }

      function h(t, e, i) {
        return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t;
      }

      function l(t, e) {
        var i = e[0] - t[0],
            t = e[1] - t[1];
        return Math.hypot(i, t);
      }

      function c(t, e) {
        var i = e[0] - t[0],
            t = e[1] - t[1];
        return i * i + t * t;
      }

      function p(t) {
        var e = t[0],
            t = t[1];
        return Math.hypot(e, t);
      }

      function f(t) {
        var e = t[0],
            t = t[1];
        return e * e + t * t;
      }

      i.len = p, i.sub = o, i.mul = u, i.div = h, i.dist = l, i.sqrDist = c, i.sqrLen = f;
      var d,
          t = (d = r(), function (t, e, i, r, n, o) {
        var s, a;

        for (e = e || 2, i = i || 0, a = r ? Math.min(r * e + i, t.length) : t.length, s = i; s < a; s += e) {
          d[0] = t[s], d[1] = t[s + 1], n(d, d, o), t[s] = d[0], t[s + 1] = d[1];
        }

        return t;
      });
      i.forEach = t;
    }, {
      "./common.js": 2
    }],
    11: [function (t, e, i) {
      "use strict";

      function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.create = r, i.clone = function (t) {
        var e = new a.ARRAY_TYPE(3);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
      }, i.length = n, i.fromValues = function (t, e, i) {
        var r = new a.ARRAY_TYPE(3);
        return r[0] = t, r[1] = e, r[2] = i, r;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
      }, i.set = function (t, e, i, r) {
        return t[0] = e, t[1] = i, t[2] = r, t;
      }, i.add = function (t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t;
      }, i.subtract = o, i.multiply = h, i.divide = l, i.ceil = function (t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t;
      }, i.floor = function (t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t;
      }, i.min = function (t, e, i) {
        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t[2] = Math.min(e[2], i[2]), t;
      }, i.max = function (t, e, i) {
        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t[2] = Math.max(e[2], i[2]), t;
      }, i.round = function (t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t;
      }, i.scale = function (t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t;
      }, i.scaleAndAdd = function (t, e, i, r) {
        return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t[2] = e[2] + i[2] * r, t;
      }, i.distance = c, i.squaredDistance = p, i.squaredLength = f, i.negate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
      }, i.inverse = function (t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t;
      }, i.normalize = function (t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            n = i * i + r * r + n * n;
        0 < n && (n = 1 / Math.sqrt(n));
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t;
      }, i.dot = d, i.cross = function (t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = i[0],
            e = i[1],
            i = i[2];
        return t[0] = n * i - o * e, t[1] = o * s - r * i, t[2] = r * e - n * s, t;
      }, i.lerp = function (t, e, i, r) {
        var n = e[0],
            o = e[1],
            e = e[2];
        return t[0] = n + r * (i[0] - n), t[1] = o + r * (i[1] - o), t[2] = e + r * (i[2] - e), t;
      }, i.hermite = function (t, e, i, r, n, o) {
        var s = o * o,
            a = s * (2 * o - 3) + 1,
            u = s * (o - 2) + o,
            h = s * (o - 1),
            o = s * (3 - 2 * o);
        return t[0] = e[0] * a + i[0] * u + r[0] * h + n[0] * o, t[1] = e[1] * a + i[1] * u + r[1] * h + n[1] * o, t[2] = e[2] * a + i[2] * u + r[2] * h + n[2] * o, t;
      }, i.bezier = function (t, e, i, r, n, o) {
        var s = 1 - o,
            a = s * s,
            u = o * o,
            h = a * s,
            a = 3 * o * a,
            s = 3 * u * s,
            o = u * o;
        return t[0] = e[0] * h + i[0] * a + r[0] * s + n[0] * o, t[1] = e[1] * h + i[1] * a + r[1] * s + n[1] * o, t[2] = e[2] * h + i[2] * a + r[2] * s + n[2] * o, t;
      }, i.random = function (t, e) {
        e = e || 1;
        var i = 2 * a.RANDOM() * Math.PI,
            r = 2 * a.RANDOM() - 1,
            n = Math.sqrt(1 - r * r) * e;
        return t[0] = Math.cos(i) * n, t[1] = Math.sin(i) * n, t[2] = r * e, t;
      }, i.transformMat4 = function (t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            e = i[3] * r + i[7] * n + i[11] * o + i[15];
        return e = e || 1, t[0] = (i[0] * r + i[4] * n + i[8] * o + i[12]) / e, t[1] = (i[1] * r + i[5] * n + i[9] * o + i[13]) / e, t[2] = (i[2] * r + i[6] * n + i[10] * o + i[14]) / e, t;
      }, i.transformMat3 = function (t, e, i) {
        var r = e[0],
            n = e[1],
            e = e[2];
        return t[0] = r * i[0] + n * i[3] + e * i[6], t[1] = r * i[1] + n * i[4] + e * i[7], t[2] = r * i[2] + n * i[5] + e * i[8], t;
      }, i.transformQuat = function (t, e, i) {
        var r = i[0],
            n = i[1],
            o = i[2],
            s = i[3],
            a = e[0],
            u = e[1],
            h = e[2],
            l = n * h - o * u,
            c = o * a - r * h,
            i = r * u - n * a,
            e = n * i - o * c,
            o = o * l - r * i,
            n = r * c - n * l,
            s = 2 * s;
        return l *= s, c *= s, i *= s, e *= 2, o *= 2, n *= 2, t[0] = a + l + e, t[1] = u + c + o, t[2] = h + i + n, t;
      }, i.rotateX = function (t, e, i, r) {
        var n = [],
            o = [];
        return n[0] = e[0] - i[0], n[1] = e[1] - i[1], n[2] = e[2] - i[2], o[0] = n[0], o[1] = n[1] * Math.cos(r) - n[2] * Math.sin(r), o[2] = n[1] * Math.sin(r) + n[2] * Math.cos(r), t[0] = o[0] + i[0], t[1] = o[1] + i[1], t[2] = o[2] + i[2], t;
      }, i.rotateY = function (t, e, i, r) {
        var n = [],
            o = [];
        return n[0] = e[0] - i[0], n[1] = e[1] - i[1], n[2] = e[2] - i[2], o[0] = n[2] * Math.sin(r) + n[0] * Math.cos(r), o[1] = n[1], o[2] = n[2] * Math.cos(r) - n[0] * Math.sin(r), t[0] = o[0] + i[0], t[1] = o[1] + i[1], t[2] = o[2] + i[2], t;
      }, i.rotateZ = function (t, e, i, r) {
        var n = [],
            o = [];
        return n[0] = e[0] - i[0], n[1] = e[1] - i[1], n[2] = e[2] - i[2], o[0] = n[0] * Math.cos(r) - n[1] * Math.sin(r), o[1] = n[0] * Math.sin(r) + n[1] * Math.cos(r), o[2] = n[2], t[0] = o[0] + i[0], t[1] = o[1] + i[1], t[2] = o[2] + i[2], t;
      }, i.angle = function (t, e) {
        var i = t[0],
            r = t[1],
            n = t[2],
            o = e[0],
            s = e[1],
            a = e[2],
            n = Math.sqrt(i * i + r * r + n * n),
            a = Math.sqrt(o * o + s * s + a * a),
            a = n * a,
            a = a && d(t, e) / a;
        return Math.acos(Math.min(Math.max(a, -1), 1));
      }, i.zero = function (t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t;
      }, i.str = function (t) {
        return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
      }, i.equals = function (t, e) {
        var i = t[0],
            r = t[1],
            n = t[2],
            o = e[0],
            t = e[1],
            e = e[2];
        return Math.abs(i - o) <= a.EPSILON * Math.max(1, Math.abs(i), Math.abs(o)) && Math.abs(r - t) <= a.EPSILON * Math.max(1, Math.abs(r), Math.abs(t)) && Math.abs(n - e) <= a.EPSILON * Math.max(1, Math.abs(n), Math.abs(e));
      }, i.forEach = i.sqrLen = i.len = i.sqrDist = i.dist = i.div = i.mul = i.sub = void 0;

      var a = function (t) {
        if (t && t.__esModule) return t;
        if (null === t || "object" !== s(t) && "function" != typeof t) return {
          default: t
        };
        var e = u();
        if (e && e.has(t)) return e.get(t);
        var i,
            r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (i in t) {
          var o;
          Object.prototype.hasOwnProperty.call(t, i) && ((o = n ? Object.getOwnPropertyDescriptor(t, i) : null) && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = t[i]);
        }

        r.default = t, e && e.set(t, r);
        return r;
      }(t("./common.js"));

      function u() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap();
        return u = function u() {
          return t;
        }, t;
      }

      function r() {
        var t = new a.ARRAY_TYPE(3);
        return a.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t;
      }

      function n(t) {
        var e = t[0],
            i = t[1],
            t = t[2];
        return Math.hypot(e, i, t);
      }

      function o(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t;
      }

      function h(t, e, i) {
        return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t[2] = e[2] * i[2], t;
      }

      function l(t, e, i) {
        return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t[2] = e[2] / i[2], t;
      }

      function c(t, e) {
        var i = e[0] - t[0],
            r = e[1] - t[1],
            t = e[2] - t[2];
        return Math.hypot(i, r, t);
      }

      function p(t, e) {
        var i = e[0] - t[0],
            r = e[1] - t[1],
            t = e[2] - t[2];
        return i * i + r * r + t * t;
      }

      function f(t) {
        var e = t[0],
            i = t[1],
            t = t[2];
        return e * e + i * i + t * t;
      }

      function d(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
      }

      i.sub = o, i.mul = h, i.div = l, i.dist = c, i.sqrDist = p, i.len = n, i.sqrLen = f;
      var m,
          t = (m = r(), function (t, e, i, r, n, o) {
        var s, a;

        for (e = e || 3, i = i || 0, a = r ? Math.min(r * e + i, t.length) : t.length, s = i; s < a; s += e) {
          m[0] = t[s], m[1] = t[s + 1], m[2] = t[s + 2], n(m, m, o), t[s] = m[0], t[s + 1] = m[1], t[s + 2] = m[2];
        }

        return t;
      });
      i.forEach = t;
    }, {
      "./common.js": 2
    }],
    12: [function (t, e, i) {
      "use strict";

      function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.create = r, i.clone = function (t) {
        var e = new h.ARRAY_TYPE(4);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
      }, i.fromValues = function (t, e, i, r) {
        var n = new h.ARRAY_TYPE(4);
        return n[0] = t, n[1] = e, n[2] = i, n[3] = r, n;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
      }, i.set = function (t, e, i, r, n) {
        return t[0] = e, t[1] = i, t[2] = r, t[3] = n, t;
      }, i.add = function (t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t[2] = e[2] + i[2], t[3] = e[3] + i[3], t;
      }, i.subtract = n, i.multiply = o, i.divide = u, i.ceil = function (t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t[3] = Math.ceil(e[3]), t;
      }, i.floor = function (t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t[3] = Math.floor(e[3]), t;
      }, i.min = function (t, e, i) {
        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t[2] = Math.min(e[2], i[2]), t[3] = Math.min(e[3], i[3]), t;
      }, i.max = function (t, e, i) {
        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t[2] = Math.max(e[2], i[2]), t[3] = Math.max(e[3], i[3]), t;
      }, i.round = function (t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t[3] = Math.round(e[3]), t;
      }, i.scale = function (t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t[2] = e[2] * i, t[3] = e[3] * i, t;
      }, i.scaleAndAdd = function (t, e, i, r) {
        return t[0] = e[0] + i[0] * r, t[1] = e[1] + i[1] * r, t[2] = e[2] + i[2] * r, t[3] = e[3] + i[3] * r, t;
      }, i.distance = l, i.squaredDistance = c, i.length = p, i.squaredLength = f, i.negate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t;
      }, i.inverse = function (t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t[3] = 1 / e[3], t;
      }, i.normalize = function (t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            o = e[3],
            e = i * i + r * r + n * n + o * o;
        0 < e && (e = 1 / Math.sqrt(e));
        return t[0] = i * e, t[1] = r * e, t[2] = n * e, t[3] = o * e, t;
      }, i.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
      }, i.cross = function (t, e, i, r) {
        var n = i[0] * r[1] - i[1] * r[0],
            o = i[0] * r[2] - i[2] * r[0],
            s = i[0] * r[3] - i[3] * r[0],
            a = i[1] * r[2] - i[2] * r[1],
            u = i[1] * r[3] - i[3] * r[1],
            h = i[2] * r[3] - i[3] * r[2],
            l = e[0],
            i = e[1],
            r = e[2],
            e = e[3];
        return t[0] = i * h - r * u + e * a, t[1] = -l * h + r * s - e * o, t[2] = l * u - i * s + e * n, t[3] = -l * a + i * o - r * n, t;
      }, i.lerp = function (t, e, i, r) {
        var n = e[0],
            o = e[1],
            s = e[2],
            e = e[3];
        return t[0] = n + r * (i[0] - n), t[1] = o + r * (i[1] - o), t[2] = s + r * (i[2] - s), t[3] = e + r * (i[3] - e), t;
      }, i.random = function (t, e) {
        var i, r, n, o, s, a;
        e = e || 1;

        for (; i = 2 * h.RANDOM() - 1, r = 2 * h.RANDOM() - 1, s = i * i + r * r, 1 <= s;) {
          ;
        }

        for (; n = 2 * h.RANDOM() - 1, o = 2 * h.RANDOM() - 1, a = n * n + o * o, 1 <= a;) {
          ;
        }

        var u = Math.sqrt((1 - s) / a);
        return t[0] = e * i, t[1] = e * r, t[2] = e * n * u, t[3] = e * o * u, t;
      }, i.transformMat4 = function (t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            e = e[3];
        return t[0] = i[0] * r + i[4] * n + i[8] * o + i[12] * e, t[1] = i[1] * r + i[5] * n + i[9] * o + i[13] * e, t[2] = i[2] * r + i[6] * n + i[10] * o + i[14] * e, t[3] = i[3] * r + i[7] * n + i[11] * o + i[15] * e, t;
      }, i.transformQuat = function (t, e, i) {
        var r = e[0],
            n = e[1],
            o = e[2],
            s = i[0],
            a = i[1],
            u = i[2],
            h = i[3],
            l = h * r + a * o - u * n,
            c = h * n + u * r - s * o,
            i = h * o + s * n - a * r,
            o = -s * r - a * n - u * o;
        return t[0] = l * h + o * -s + c * -u - i * -a, t[1] = c * h + o * -a + i * -s - l * -u, t[2] = i * h + o * -u + l * -a - c * -s, t[3] = e[3], t;
      }, i.zero = function (t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t;
      }, i.str = function (t) {
        return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
      }, i.equals = function (t, e) {
        var i = t[0],
            r = t[1],
            n = t[2],
            o = t[3],
            s = e[0],
            a = e[1],
            t = e[2],
            e = e[3];
        return Math.abs(i - s) <= h.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(r - a) <= h.EPSILON * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(n - t) <= h.EPSILON * Math.max(1, Math.abs(n), Math.abs(t)) && Math.abs(o - e) <= h.EPSILON * Math.max(1, Math.abs(o), Math.abs(e));
      }, i.forEach = i.sqrLen = i.len = i.sqrDist = i.dist = i.div = i.mul = i.sub = void 0;

      var h = function (t) {
        if (t && t.__esModule) return t;
        if (null === t || "object" !== s(t) && "function" != typeof t) return {
          default: t
        };
        var e = a();
        if (e && e.has(t)) return e.get(t);
        var i,
            r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (i in t) {
          var o;
          Object.prototype.hasOwnProperty.call(t, i) && ((o = n ? Object.getOwnPropertyDescriptor(t, i) : null) && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = t[i]);
        }

        r.default = t, e && e.set(t, r);
        return r;
      }(t("./common.js"));

      function a() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap();
        return a = function a() {
          return t;
        }, t;
      }

      function r() {
        var t = new h.ARRAY_TYPE(4);
        return h.ARRAY_TYPE != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0), t;
      }

      function n(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t[2] = e[2] - i[2], t[3] = e[3] - i[3], t;
      }

      function o(t, e, i) {
        return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t[2] = e[2] * i[2], t[3] = e[3] * i[3], t;
      }

      function u(t, e, i) {
        return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t[2] = e[2] / i[2], t[3] = e[3] / i[3], t;
      }

      function l(t, e) {
        var i = e[0] - t[0],
            r = e[1] - t[1],
            n = e[2] - t[2],
            t = e[3] - t[3];
        return Math.hypot(i, r, n, t);
      }

      function c(t, e) {
        var i = e[0] - t[0],
            r = e[1] - t[1],
            n = e[2] - t[2],
            t = e[3] - t[3];
        return i * i + r * r + n * n + t * t;
      }

      function p(t) {
        var e = t[0],
            i = t[1],
            r = t[2],
            t = t[3];
        return Math.hypot(e, i, r, t);
      }

      function f(t) {
        var e = t[0],
            i = t[1],
            r = t[2],
            t = t[3];
        return e * e + i * i + r * r + t * t;
      }

      i.sub = n, i.mul = o, i.div = u, i.dist = l, i.sqrDist = c, i.len = p, i.sqrLen = f;
      var d,
          t = (d = r(), function (t, e, i, r, n, o) {
        var s, a;

        for (e = e || 4, i = i || 0, a = r ? Math.min(r * e + i, t.length) : t.length, s = i; s < a; s += e) {
          d[0] = t[s], d[1] = t[s + 1], d[2] = t[s + 2], d[3] = t[s + 3], n(d, d, o), t[s] = d[0], t[s + 1] = d[1], t[s + 2] = d[2], t[s + 3] = d[3];
        }

        return t;
      });
      i.forEach = t;
    }, {
      "./common.js": 2
    }],
    13: [function (t, qt, e) {
      !function (t, a, h) {
        "use strict";

        var o = ["", "webkit", "moz", "MS", "ms", "o"],
            e = a.createElement("div"),
            i = "function",
            s = Math.round,
            l = Math.abs,
            u = Date.now;

        function c(t, e, i) {
          return setTimeout(m(t, i), e);
        }

        function r(t, e, i) {
          return Array.isArray(t) && (n(t, i[e], i), 1);
        }

        function n(t, e, i) {
          if (t) if (t.forEach) t.forEach(e, i);else if (t.length !== h) for (r = 0; r < t.length;) {
            e.call(i, t[r], r, t), r++;
          } else for (var r in t) {
            t.hasOwnProperty(r) && e.call(i, t[r], r, t);
          }
        }

        function p(t, e, i) {
          for (var r = Object.keys(e), n = 0; n < r.length;) {
            (!i || i && t[r[n]] === h) && (t[r[n]] = e[r[n]]), n++;
          }

          return t;
        }

        function f(t, e) {
          return p(t, e, !0);
        }

        function d(t, e, i) {
          var r = e.prototype,
              e = t.prototype = Object.create(r);
          e.constructor = t, e._super = r, i && p(e, i);
        }

        function m(t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        }

        function v(t, e) {
          return _typeof(t) == i ? t.apply(e && e[0] || h, e) : t;
        }

        function _(t, e) {
          return t === h ? e : t;
        }

        function y(e, t, i) {
          n(b(t), function (t) {
            e.addEventListener(t, i, !1);
          });
        }

        function g(e, t, i) {
          n(b(t), function (t) {
            e.removeEventListener(t, i, !1);
          });
        }

        function M(t, e) {
          for (; t;) {
            if (t == e) return !0;
            t = t.parentNode;
          }

          return !1;
        }

        function w(t, e) {
          return -1 < t.indexOf(e);
        }

        function b(t) {
          return t.trim().split(/\s+/g);
        }

        function x(t, e, i) {
          if (t.indexOf && !i) return t.indexOf(e);

          for (var r = 0; r < t.length;) {
            if (i && t[r][i] == e || !i && t[r] === e) return r;
            r++;
          }

          return -1;
        }

        function E(t) {
          return Array.prototype.slice.call(t, 0);
        }

        function P(t, i, e) {
          for (var r = [], n = [], o = 0; o < t.length;) {
            var s = i ? t[o][i] : t[o];
            x(n, s) < 0 && r.push(t[o]), n[o] = s, o++;
          }

          return e && (r = i ? r.sort(function (t, e) {
            return t[i] > e[i];
          }) : r.sort()), r;
        }

        function S(t, e) {
          for (var i, r = e[0].toUpperCase() + e.slice(1), n = 0; n < o.length;) {
            if ((i = (i = o[n]) ? i + r : e) in t) return i;
            n++;
          }

          return h;
        }

        var T = 1;

        function L(t) {
          t = t.ownerDocument;
          return t.defaultView || t.parentWindow;
        }

        var A = ("ontouchstart" in t),
            O = S(t, "PointerEvent") !== h,
            R = A && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
            C = "touch",
            I = "mouse",
            z = 25,
            F = 1,
            D = 4,
            j = 8,
            N = 1,
            k = 2,
            H = 4,
            Y = 8,
            B = 16,
            q = k | H,
            W = Y | B,
            V = q | W,
            X = ["x", "y"],
            G = ["clientX", "clientY"];

        function U(e, t) {
          var i = this;
          this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
            v(e.options.enable, [e]) && i.handler(t);
          }, this.init();
        }

        function K(t, e, i) {
          var r = i.pointers.length,
              n = i.changedPointers.length,
              o = e & F && r - n == 0,
              n = e & (D | j) && r - n == 0;
          i.isFirst = !!o, i.isFinal = !!n, o && (t.session = {}), i.eventType = e, function (t, e) {
            var i = t.session,
                r = e.pointers,
                n = r.length;
            i.firstInput || (i.firstInput = Z(e)), 1 < n && !i.firstMultiple ? i.firstMultiple = Z(e) : 1 === n && (i.firstMultiple = !1);
            var o = i.firstInput,
                s = i.firstMultiple,
                a = (s || o).center,
                n = e.center = Q(r);
            e.timeStamp = u(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = tt(a, n), e.distance = $(a, n), function (t, e) {
              var i = e.center,
                  r = t.offsetDelta || {},
                  n = t.prevDelta || {},
                  o = t.prevInput || {};
              e.eventType !== F && o.eventType !== D || (n = t.prevDelta = {
                x: o.deltaX || 0,
                y: o.deltaY || 0
              }, r = t.offsetDelta = {
                x: i.x,
                y: i.y
              }), e.deltaX = n.x + (i.x - r.x), e.deltaY = n.y + (i.y - r.y);
            }(i, e), e.offsetDirection = J(e.deltaX, e.deltaY), e.scale = s ? function (t, e) {
              return $(e[0], e[1], G) / $(t[0], t[1], G);
            }(s.pointers, r) : 1, e.rotation = s ? function (t, e) {
              return tt(e[1], e[0], G) - tt(t[1], t[0], G);
            }(s.pointers, r) : 0, function (t, e) {
              var i,
                  r,
                  n,
                  o,
                  s,
                  a = t.lastInterval || e,
                  u = e.timeStamp - a.timeStamp;
              e.eventType != j && (z < u || a.velocity === h) ? (n = a.deltaX - e.deltaX, o = a.deltaY - e.deltaY, s = function (t, e, i) {
                return {
                  x: e / t || 0,
                  y: i / t || 0
                };
              }(u, n, o), i = s.x, r = s.y, s = l(s.x) > l(s.y) ? s.x : s.y, o = J(n, o), t.lastInterval = e) : (s = a.velocity, i = a.velocityX, r = a.velocityY, o = a.direction), e.velocity = s, e.velocityX = i, e.velocityY = r, e.direction = o;
            }(i, e), t = t.element, M(e.srcEvent.target, t) && (t = e.srcEvent.target), e.target = t;
          }(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i;
        }

        function Z(t) {
          for (var e = [], i = 0; i < t.pointers.length;) {
            e[i] = {
              clientX: s(t.pointers[i].clientX),
              clientY: s(t.pointers[i].clientY)
            }, i++;
          }

          return {
            timeStamp: u(),
            pointers: e,
            center: Q(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
          };
        }

        function Q(t) {
          var e = t.length;
          if (1 === e) return {
            x: s(t[0].clientX),
            y: s(t[0].clientY)
          };

          for (var i = 0, r = 0, n = 0; n < e;) {
            i += t[n].clientX, r += t[n].clientY, n++;
          }

          return {
            x: s(i / e),
            y: s(r / e)
          };
        }

        function J(t, e) {
          return t === e ? N : l(t) >= l(e) ? 0 < t ? k : H : 0 < e ? Y : B;
        }

        function $(t, e, i) {
          var r = e[(i = i || X)[0]] - t[i[0]],
              i = e[i[1]] - t[i[1]];
          return Math.sqrt(r * r + i * i);
        }

        function tt(t, e, i) {
          var r = e[(i = i || X)[0]] - t[i[0]],
              i = e[i[1]] - t[i[1]];
          return 180 * Math.atan2(i, r) / Math.PI;
        }

        U.prototype = {
          handler: function handler() {},
          init: function init() {
            this.evEl && y(this.element, this.evEl, this.domHandler), this.evTarget && y(this.target, this.evTarget, this.domHandler), this.evWin && y(L(this.element), this.evWin, this.domHandler);
          },
          destroy: function destroy() {
            this.evEl && g(this.element, this.evEl, this.domHandler), this.evTarget && g(this.target, this.evTarget, this.domHandler), this.evWin && g(L(this.element), this.evWin, this.domHandler);
          }
        };
        var et = {
          mousedown: F,
          mousemove: 2,
          mouseup: D
        },
            it = "mousedown",
            rt = "mousemove mouseup";

        function nt() {
          this.evEl = it, this.evWin = rt, this.allow = !0, this.pressed = !1, U.apply(this, arguments);
        }

        d(nt, U, {
          handler: function handler(t) {
            var e = et[t.type];
            e & F && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = D), this.pressed && this.allow && (e & D && (this.pressed = !1), this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: I,
              srcEvent: t
            }));
          }
        });
        var ot = {
          pointerdown: F,
          pointermove: 2,
          pointerup: D,
          pointercancel: j,
          pointerout: j
        },
            st = {
          2: C,
          3: "pen",
          4: I,
          5: "kinect"
        },
            at = "pointerdown",
            ut = "pointermove pointerup pointercancel";

        function ht() {
          this.evEl = at, this.evWin = ut, U.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
        }

        t.MSPointerEvent && (at = "MSPointerDown", ut = "MSPointerMove MSPointerUp MSPointerCancel"), d(ht, U, {
          handler: function handler(t) {
            var e = this.store,
                i = !1,
                r = t.type.toLowerCase().replace("ms", ""),
                n = ot[r],
                o = st[t.pointerType] || t.pointerType,
                s = o == C,
                r = x(e, t.pointerId, "pointerId");
            n & F && (0 === t.button || s) ? r < 0 && (e.push(t), r = e.length - 1) : n & (D | j) && (i = !0), r < 0 || (e[r] = t, this.callback(this.manager, n, {
              pointers: e,
              changedPointers: [t],
              pointerType: o,
              srcEvent: t
            }), i && e.splice(r, 1));
          }
        });
        var lt = {
          touchstart: F,
          touchmove: 2,
          touchend: D,
          touchcancel: j
        };

        function ct() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, U.apply(this, arguments);
        }

        d(ct, U, {
          handler: function handler(t) {
            var e,
                i = lt[t.type];
            i === F && (this.started = !0), this.started && (e = function (t, e) {
              var i = E(t.touches),
                  t = E(t.changedTouches);
              e & (D | j) && (i = P(i.concat(t), "identifier", !0));
              return [i, t];
            }.call(this, t, i), i & (D | j) && e[0].length - e[1].length == 0 && (this.started = !1), this.callback(this.manager, i, {
              pointers: e[0],
              changedPointers: e[1],
              pointerType: C,
              srcEvent: t
            }));
          }
        });
        var pt = {
          touchstart: F,
          touchmove: 2,
          touchend: D,
          touchcancel: j
        },
            ft = "touchstart touchmove touchend touchcancel";

        function dt() {
          this.evTarget = ft, this.targetIds = {}, U.apply(this, arguments);
        }

        function mt() {
          U.apply(this, arguments);
          var t = m(this.handler, this);
          this.touch = new dt(this.manager, t), this.mouse = new nt(this.manager, t);
        }

        d(dt, U, {
          handler: function handler(t) {
            var e = pt[t.type],
                i = function (t, e) {
              var i = E(t.touches),
                  r = this.targetIds;
              if (e & (2 | F) && 1 === i.length) return r[i[0].identifier] = !0, [i, i];
              var n,
                  o,
                  s = E(t.changedTouches),
                  a = [],
                  u = this.target;
              if (o = i.filter(function (t) {
                return M(t.target, u);
              }), e === F) for (n = 0; n < o.length;) {
                r[o[n].identifier] = !0, n++;
              }
              n = 0;

              for (; n < s.length;) {
                r[s[n].identifier] && a.push(s[n]), e & (D | j) && delete r[s[n].identifier], n++;
              }

              return a.length ? [P(o.concat(a), "identifier", !0), a] : void 0;
            }.call(this, t, e);

            i && this.callback(this.manager, e, {
              pointers: i[0],
              changedPointers: i[1],
              pointerType: C,
              srcEvent: t
            });
          }
        }), d(mt, U, {
          handler: function handler(t, e, i) {
            var r = i.pointerType == C,
                n = i.pointerType == I;
            if (r) this.mouse.allow = !1;else if (n && !this.mouse.allow) return;
            e & (D | j) && (this.mouse.allow = !0), this.callback(t, e, i);
          },
          destroy: function destroy() {
            this.touch.destroy(), this.mouse.destroy();
          }
        });

        var vt = S(e.style, "touchAction"),
            _t = vt !== h,
            yt = "compute",
            gt = "manipulation",
            Mt = "none",
            wt = "pan-x",
            bt = "pan-y";

        function xt(t, e) {
          this.manager = t, this.set(e);
        }

        xt.prototype = {
          set: function set(t) {
            t == yt && (t = this.compute()), _t && (this.manager.element.style[vt] = t), this.actions = t.toLowerCase().trim();
          },
          update: function update() {
            this.set(this.manager.options.touchAction);
          },
          compute: function compute() {
            var e = [];
            return n(this.manager.recognizers, function (t) {
              v(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
            }), function (t) {
              if (w(t, Mt)) return Mt;
              var e = w(t, wt),
                  i = w(t, bt);
              if (e && i) return wt + " " + bt;
              if (e || i) return e ? wt : bt;
              if (w(t, gt)) return gt;
              return "auto";
            }(e.join(" "));
          },
          preventDefaults: function preventDefaults(t) {
            if (!_t) {
              var e = t.srcEvent,
                  i = t.offsetDirection;

              if (!this.manager.session.prevented) {
                var r = this.actions,
                    n = w(r, Mt),
                    t = w(r, bt),
                    r = w(r, wt);
                return n || t && i & q || r && i & W ? this.preventSrc(e) : void 0;
              }

              e.preventDefault();
            }
          },
          preventSrc: function preventSrc(t) {
            this.manager.session.prevented = !0, t.preventDefault();
          }
        };
        var Et = 1,
            Pt = 2,
            St = 4,
            Tt = 8,
            Lt = Tt,
            At = 16;

        function Ot(t) {
          this.id = T++, this.manager = null, this.options = f(t || {}, this.defaults), this.options.enable = _(this.options.enable, !0), this.state = Et, this.simultaneous = {}, this.requireFail = [];
        }

        function Rt(t) {
          return t == B ? "down" : t == Y ? "up" : t == k ? "left" : t == H ? "right" : "";
        }

        function Ct(t, e) {
          e = e.manager;
          return e ? e.get(t) : t;
        }

        function It() {
          Ot.apply(this, arguments);
        }

        function zt() {
          It.apply(this, arguments), this.pX = null, this.pY = null;
        }

        function Ft() {
          It.apply(this, arguments);
        }

        function Dt() {
          Ot.apply(this, arguments), this._timer = null, this._input = null;
        }

        function jt() {
          It.apply(this, arguments);
        }

        function Nt() {
          It.apply(this, arguments);
        }

        function kt() {
          Ot.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
        }

        function Ht(t, e) {
          return (e = e || {}).recognizers = _(e.recognizers, Ht.defaults.preset), new Yt(t, e);
        }

        function Yt(t, e) {
          e = e || {}, this.options = f(e, Ht.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = new ((t = this).options.inputClass || (O ? ht : R ? dt : A ? mt : nt))(t, K), this.touchAction = new xt(this, this.options.touchAction), Bt(this, !0), n(e.recognizers, function (t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
          }, this);
        }

        function Bt(t, i) {
          var r = t.element;
          n(t.options.cssProps, function (t, e) {
            r.style[S(r.style, e)] = i ? t : "";
          });
        }

        Ot.prototype = {
          defaults: {},
          set: function set(t) {
            return p(this.options, t), this.manager && this.manager.touchAction.update(), this;
          },
          recognizeWith: function recognizeWith(t) {
            if (r(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return e[(t = Ct(t, this)).id] || (e[t.id] = t).recognizeWith(this), this;
          },
          dropRecognizeWith: function dropRecognizeWith(t) {
            return r(t, "dropRecognizeWith", this) || (t = Ct(t, this), delete this.simultaneous[t.id]), this;
          },
          requireFailure: function requireFailure(t) {
            if (r(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return -1 === x(e, t = Ct(t, this)) && (e.push(t), t.requireFailure(this)), this;
          },
          dropRequireFailure: function dropRequireFailure(t) {
            if (r(t, "dropRequireFailure", this)) return this;
            t = Ct(t, this);
            t = x(this.requireFail, t);
            return -1 < t && this.requireFail.splice(t, 1), this;
          },
          hasRequireFailures: function hasRequireFailures() {
            return 0 < this.requireFail.length;
          },
          canRecognizeWith: function canRecognizeWith(t) {
            return !!this.simultaneous[t.id];
          },
          emit: function emit(e) {
            var i = this,
                r = this.state;

            function t(t) {
              i.manager.emit(i.options.event + (t ? function (t) {
                {
                  if (t & At) return "cancel";
                  if (t & Tt) return "end";
                  if (t & St) return "move";
                  if (t & Pt) return "start";
                }
                return "";
              }(r) : ""), e);
            }

            r < Tt && t(!0), t(), Tt <= r && t(!0);
          },
          tryEmit: function tryEmit(t) {
            if (this.canEmit()) return this.emit(t);
            this.state = 32;
          },
          canEmit: function canEmit() {
            for (var t = 0; t < this.requireFail.length;) {
              if (!(this.requireFail[t].state & (32 | Et))) return !1;
              t++;
            }

            return !0;
          },
          recognize: function recognize(t) {
            t = p({}, t);
            if (!v(this.options.enable, [this, t])) return this.reset(), void (this.state = 32);
            this.state & (Lt | At | 32) && (this.state = Et), this.state = this.process(t), this.state & (Pt | St | Tt | At) && this.tryEmit(t);
          },
          process: function process(t) {},
          getTouchAction: function getTouchAction() {},
          reset: function reset() {}
        }, d(It, Ot, {
          defaults: {
            pointers: 1
          },
          attrTest: function attrTest(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e;
          },
          process: function process(t) {
            var e = this.state,
                i = t.eventType,
                r = e & (Pt | St),
                t = this.attrTest(t);
            return r && (i & j || !t) ? e | At : r || t ? i & D ? e | Tt : e & Pt ? e | St : Pt : 32;
          }
        }), d(zt, It, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: V
          },
          getTouchAction: function getTouchAction() {
            var t = this.options.direction,
                e = [];
            return t & q && e.push(bt), t & W && e.push(wt), e;
          },
          directionTest: function directionTest(t) {
            var e = this.options,
                i = !0,
                r = t.distance,
                n = t.direction,
                o = t.deltaX,
                s = t.deltaY;
            return n & e.direction || (r = e.direction & q ? (n = 0 === o ? N : o < 0 ? k : H, i = o != this.pX, Math.abs(t.deltaX)) : (n = 0 === s ? N : s < 0 ? Y : B, i = s != this.pY, Math.abs(t.deltaY))), t.direction = n, i && r > e.threshold && n & e.direction;
          },
          attrTest: function attrTest(t) {
            return It.prototype.attrTest.call(this, t) && (this.state & Pt || !(this.state & Pt) && this.directionTest(t));
          },
          emit: function emit(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Rt(t.direction);
            e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t);
          }
        }), d(Ft, It, {
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function getTouchAction() {
            return [Mt];
          },
          attrTest: function attrTest(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Pt);
          },
          emit: function emit(t) {
            var e;
            this._super.emit.call(this, t), 1 !== t.scale && (e = t.scale < 1 ? "in" : "out", this.manager.emit(this.options.event + e, t));
          }
        }), d(Dt, Ot, {
          defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
          },
          getTouchAction: function getTouchAction() {
            return ["auto"];
          },
          process: function process(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                r = t.distance < e.threshold,
                n = t.deltaTime > e.time;
            if (this._input = t, !r || !i || t.eventType & (D | j) && !n) this.reset();else if (t.eventType & F) this.reset(), this._timer = c(function () {
              this.state = Lt, this.tryEmit();
            }, e.time, this);else if (t.eventType & D) return Lt;
            return 32;
          },
          reset: function reset() {
            clearTimeout(this._timer);
          },
          emit: function emit(t) {
            this.state === Lt && (t && t.eventType & D ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = u(), this.manager.emit(this.options.event, this._input)));
          }
        }), d(jt, It, {
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function getTouchAction() {
            return [Mt];
          },
          attrTest: function attrTest(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Pt);
          }
        }), d(Nt, It, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: q | W,
            pointers: 1
          },
          getTouchAction: function getTouchAction() {
            return zt.prototype.getTouchAction.call(this);
          },
          attrTest: function attrTest(t) {
            var e,
                i = this.options.direction;
            return i & (q | W) ? e = t.velocity : i & q ? e = t.velocityX : i & W && (e = t.velocityY), this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && l(e) > this.options.velocity && t.eventType & D;
          },
          emit: function emit(t) {
            var e = Rt(t.direction);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
          }
        }), d(kt, Ot, {
          defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
          },
          getTouchAction: function getTouchAction() {
            return [gt];
          },
          process: function process(t) {
            var e = this.options,
                i = t.pointers.length === e.pointers,
                r = t.distance < e.threshold,
                n = t.deltaTime < e.time;
            if (this.reset(), t.eventType & F && 0 === this.count) return this.failTimeout();

            if (r && n && i) {
              if (t.eventType != D) return this.failTimeout();
              n = !this.pTime || t.timeStamp - this.pTime < e.interval, i = !this.pCenter || $(this.pCenter, t.center) < e.posThreshold;
              if (this.pTime = t.timeStamp, this.pCenter = t.center, i && n ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = c(function () {
                this.state = Lt, this.tryEmit();
              }, e.interval, this), Pt) : Lt;
            }

            return 32;
          },
          failTimeout: function failTimeout() {
            return this._timer = c(function () {
              this.state = 32;
            }, this.options.interval, this), 32;
          },
          reset: function reset() {
            clearTimeout(this._timer);
          },
          emit: function emit() {
            this.state == Lt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
          }
        }), Ht.VERSION = "2.0.4", Ht.defaults = {
          domEvents: !1,
          touchAction: yt,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [[jt, {
            enable: !1
          }], [Ft, {
            enable: !1
          }, ["rotate"]], [Nt, {
            direction: q
          }], [zt, {
            direction: q
          }, ["swipe"]], [kt], [kt, {
            event: "doubletap",
            taps: 2
          }, ["tap"]], [Dt]],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
          }
        }, Yt.prototype = {
          set: function set(t) {
            return p(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
          },
          stop: function stop(t) {
            this.session.stopped = t ? 2 : 1;
          },
          recognize: function recognize(t) {
            var e,
                i = this.session;

            if (!i.stopped) {
              this.touchAction.preventDefaults(t);
              var r = this.recognizers,
                  n = i.curRecognizer;
              (!n || n && n.state & Lt) && (n = i.curRecognizer = null);

              for (var o = 0; o < r.length;) {
                e = r[o], 2 === i.stopped || n && e != n && !e.canRecognizeWith(n) ? e.reset() : e.recognize(t), !n && e.state & (Pt | St | Tt) && (n = i.curRecognizer = e), o++;
              }
            }
          },
          get: function get(t) {
            if (t instanceof Ot) return t;

            for (var e = this.recognizers, i = 0; i < e.length; i++) {
              if (e[i].options.event == t) return e[i];
            }

            return null;
          },
          add: function add(t) {
            if (r(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), (t.manager = this).touchAction.update(), t;
          },
          remove: function remove(t) {
            if (r(t, "remove", this)) return this;
            var e = this.recognizers;
            return t = this.get(t), e.splice(x(e, t), 1), this.touchAction.update(), this;
          },
          on: function on(t, e) {
            var i = this.handlers;
            return n(b(t), function (t) {
              i[t] = i[t] || [], i[t].push(e);
            }), this;
          },
          off: function off(t, e) {
            var i = this.handlers;
            return n(b(t), function (t) {
              e ? i[t].splice(x(i[t], e), 1) : delete i[t];
            }), this;
          },
          emit: function emit(t, e) {
            var i, r, n;
            this.options.domEvents && (i = t, r = e, (n = a.createEvent("Event")).initEvent(i, !0, !0), (n.gesture = r).target.dispatchEvent(n));
            var o = this.handlers[t] && this.handlers[t].slice();

            if (o && o.length) {
              e.type = t, e.preventDefault = function () {
                e.srcEvent.preventDefault();
              };

              for (var s = 0; s < o.length;) {
                o[s](e), s++;
              }
            }
          },
          destroy: function destroy() {
            this.element && Bt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
          }
        }, p(Ht, {
          INPUT_START: F,
          INPUT_MOVE: 2,
          INPUT_END: D,
          INPUT_CANCEL: j,
          STATE_POSSIBLE: Et,
          STATE_BEGAN: Pt,
          STATE_CHANGED: St,
          STATE_ENDED: Tt,
          STATE_RECOGNIZED: Lt,
          STATE_CANCELLED: At,
          STATE_FAILED: 32,
          DIRECTION_NONE: N,
          DIRECTION_LEFT: k,
          DIRECTION_RIGHT: H,
          DIRECTION_UP: Y,
          DIRECTION_DOWN: B,
          DIRECTION_HORIZONTAL: q,
          DIRECTION_VERTICAL: W,
          DIRECTION_ALL: V,
          Manager: Yt,
          Input: U,
          TouchAction: xt,
          TouchInput: dt,
          MouseInput: nt,
          PointerEventInput: ht,
          TouchMouseInput: mt,
          SingleTouchInput: ct,
          Recognizer: Ot,
          AttrRecognizer: It,
          Tap: kt,
          Pan: zt,
          Swipe: Nt,
          Pinch: Ft,
          Rotate: jt,
          Press: Dt,
          on: y,
          off: g,
          each: n,
          merge: f,
          extend: p,
          inherit: d,
          bindFn: m,
          prefixed: S
        }), _typeof(Wt) == i && Wt.amd ? Wt(function () {
          return Ht;
        }) : void 0 !== qt && qt.exports ? qt.exports = Ht : t.Hammer = Ht;
      }(window, document);
    }, {}],
    14: [function (t, e, i) {
      "use strict";

      function r() {}

      r.prototype.addEventListener = function (t, e) {
        var i = this.__events = this.__events || {},
            t = i[t] = i[t] || [];
        t.indexOf(e) < 0 && t.push(e);
      }, r.prototype.removeEventListener = function (t, e) {
        t = (this.__events = this.__events || {})[t];
        !t || 0 <= (e = t.indexOf(e)) && t.splice(e, 1);
      }, r.prototype.emit = function (t, e) {
        var i = (this.__events = this.__events || {})[t],
            r = Array.prototype.slice.call(arguments, 1);
        if (i) for (var n = 0; n < i.length; n++) {
          i[n].apply(this, r);
        }
      }, e.exports = function (t) {
        for (var e in r.prototype) {
          r.prototype.hasOwnProperty(e) && (t.prototype[e] = r.prototype[e]);
        }
      };
    }, {}],
    15: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("./util/positionAbsolutely"),
          o = t("./util/dom").setTransform,
          s = t("./util/clearOwnProperties");

      function a(t, e, i, r, n) {
        (n = n || {}).perspective = n.perspective || {}, n.perspective.extraTransforms = null != n.perspective.extraTransforms ? n.perspective.extraTransforms : "", this._domElement = t, this._parentDomElement = e, this._view = i, this._coords = {}, this._perspective = {}, this.setPosition(r), this._parentDomElement.appendChild(this._domElement), this.setPerspective(n.perspective), this._visible = !0, this._position = {
          x: 0,
          y: 0
        };
      }

      r(a), a.prototype.destroy = function () {
        this._parentDomElement.removeChild(this._domElement), s(this);
      }, a.prototype.domElement = function () {
        return this._domElement;
      }, a.prototype.position = function () {
        return this._coords;
      }, a.prototype.setPosition = function (t) {
        for (var e in t) {
          this._coords[e] = t[e];
        }

        this._update();
      }, a.prototype.perspective = function () {
        return this._perspective;
      }, a.prototype.setPerspective = function (t) {
        for (var e in t) {
          this._perspective[e] = t[e];
        }

        this._update();
      }, a.prototype.show = function () {
        this._visible || (this._visible = !0, this._update());
      }, a.prototype.hide = function () {
        this._visible && (this._visible = !1, this._update());
      }, a.prototype._update = function () {
        var t,
            e = this._domElement,
            i = this._coords,
            r = this._position,
            n = !1;
        this._visible && (t = this._view, this._perspective.radius ? (n = !0, this._setEmbeddedPosition(t, i)) : (t.coordinatesToScreen(i, r), i = r.x, r = r.y, null != i && null != r && (n = !0, this._setPosition(i, r)))), n ? (e.style.display = "block", e.style.position = "absolute") : (e.style.display = "none", e.style.position = "");
      }, a.prototype._setEmbeddedPosition = function (t, e) {
        e = t.coordinatesToPerspectiveTransform(e, this._perspective.radius, this._perspective.extraTransforms);
        o(this._domElement, e);
      }, a.prototype._setPosition = function (t, e) {
        n(this._domElement, t, e, this._perspective.extraTransforms);
      }, e.exports = a;
    }, {
      "./util/clearOwnProperties": 76,
      "./util/dom": 85,
      "./util/positionAbsolutely": 96,
      "minimal-event-emitter": 14
    }],
    16: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("./Hotspot"),
          s = t("./util/calcRect"),
          a = t("./util/positionAbsolutely"),
          o = t("./util/dom").setAbsolute,
          u = t("./util/dom").setOverflowHidden,
          h = t("./util/dom").setOverflowVisible,
          l = t("./util/dom").setNullSize,
          c = t("./util/dom").setPixelSize,
          p = t("./util/dom").setWithVendorPrefix("pointer-events"),
          f = t("./util/clearOwnProperties");

      function d(t, e, i, r, n) {
        n = n || {}, this._parentDomElement = t, this._stage = e, this._view = i, this._renderLoop = r, this._hotspots = [], this._visible = !0, this._rect = n.rect, this._visibilityOrRectChanged = !0, this._stageWidth = null, this._stageHeight = null, this._tmpRect = {}, this._hotspotContainerWrapper = document.createElement("div"), o(this._hotspotContainerWrapper), p(this._hotspotContainerWrapper, "none"), this._parentDomElement.appendChild(this._hotspotContainerWrapper), this._hotspotContainer = document.createElement("div"), o(this._hotspotContainer), p(this._hotspotContainer, "all"), this._hotspotContainerWrapper.appendChild(this._hotspotContainer), this._updateHandler = this._update.bind(this), this._renderLoop.addEventListener("afterRender", this._updateHandler);
      }

      r(d), d.prototype.destroy = function () {
        for (; this._hotspots.length;) {
          this.destroyHotspot(this._hotspots[0]);
        }

        this._parentDomElement.removeChild(this._hotspotContainerWrapper), this._renderLoop.removeEventListener("afterRender", this._updateHandler), f(this);
      }, d.prototype.domElement = function () {
        return this._hotspotContainer;
      }, d.prototype.setRect = function (t) {
        this._rect = t, this._visibilityOrRectChanged = !0;
      }, d.prototype.rect = function () {
        return this._rect;
      }, d.prototype.createHotspot = function (t, e, i) {
        e = e || {};
        i = new n(t, this._hotspotContainer, this._view, e, i);
        return this._hotspots.push(i), i._update(), this.emit("hotspotsChange"), i;
      }, d.prototype.hasHotspot = function (t) {
        return 0 <= this._hotspots.indexOf(t);
      }, d.prototype.listHotspots = function () {
        return [].concat(this._hotspots);
      }, d.prototype.destroyHotspot = function (t) {
        var e = this._hotspots.indexOf(t);

        if (e < 0) throw new Error("No such hotspot");
        this._hotspots.splice(e, 1), t.destroy(), this.emit("hotspotsChange");
      }, d.prototype.hide = function () {
        this._visible && (this._visible = !1, this._visibilityOrRectChanged = !0, this._update());
      }, d.prototype.show = function () {
        this._visible || (this._visible = !0, this._visibilityOrRectChanged = !0, this._update());
      }, d.prototype._update = function () {
        var t,
            e = this._hotspotContainerWrapper,
            i = this._stage.width(),
            r = this._stage.height(),
            n = this._tmpRect;

        (this._visibilityOrRectChanged || this._rect && (i !== this._stageWidth || r !== this._stageHeight)) && (t = this._visible, e.style.display = t ? "block" : "none", t && (this._rect ? (s(i, r, this._rect, n), a(e, i * n.x, r * n.y), c(e, i * n.width, r * n.height), u(e)) : (a(e, 0, 0), l(e), h(e))), this._stageWidth = i, this._stageHeight = r, this._visibilityOrRectChanged = !1);

        for (var o = 0; o < this._hotspots.length; o++) {
          this._hotspots[o]._update();
        }
      }, e.exports = d;
    }, {
      "./Hotspot": 15,
      "./util/calcRect": 72,
      "./util/clearOwnProperties": 76,
      "./util/dom": 85,
      "./util/positionAbsolutely": 96,
      "minimal-event-emitter": 14
    }],
    17: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("./util/extend"),
          o = t("./util/clearOwnProperties");

      function s(t, e, i, r, n) {
        n = n || {};
        var o = this;
        this._source = t, this._geometry = e, this._view = i, this._textureStore = r, this._effects = n.effects || {}, this._fixedLevelIndex = null, this._viewChangeHandler = function () {
          o.emit("viewChange", o.view());
        }, this._view.addEventListener("change", this._viewChangeHandler), this._textureStoreChangeHandler = function () {
          o.emit("textureStoreChange", o.textureStore());
        }, this._textureStore.addEventListener("textureLoad", this._textureStoreChangeHandler), this._textureStore.addEventListener("textureError", this._textureStoreChangeHandler), this._textureStore.addEventListener("textureInvalid", this._textureStoreChangeHandler);
      }

      r(s), s.prototype.destroy = function () {
        this._view.removeEventListener("change", this._viewChangeHandler), this._textureStore.removeEventListener("textureLoad", this._textureStoreChangeHandler), this._textureStore.removeEventListener("textureError", this._textureStoreChangeHandler), this._textureStore.removeEventListener("textureInvalid", this._textureStoreChangeHandler), o(this);
      }, s.prototype.source = function () {
        return this._source;
      }, s.prototype.geometry = function () {
        return this._geometry;
      }, s.prototype.view = function () {
        return this._view;
      }, s.prototype.textureStore = function () {
        return this._textureStore;
      }, s.prototype.effects = function () {
        return this._effects;
      }, s.prototype.setEffects = function (t) {
        this._effects = t, this.emit("effectsChange", this._effects);
      }, s.prototype.mergeEffects = function (t) {
        n(this._effects, t), this.emit("effectsChange", this._effects);
      }, s.prototype.fixedLevel = function () {
        return this._fixedLevelIndex;
      }, s.prototype.setFixedLevel = function (t) {
        if (t !== this._fixedLevelIndex) {
          if (null != t && (t >= this._geometry.levelList.length || t < 0)) throw new Error("Level index out of range: " + t);
          this._fixedLevelIndex = t, this.emit("fixedLevelChange", this._fixedLevelIndex);
        }
      }, s.prototype._selectLevel = function () {
        var t = null != this._fixedLevelIndex ? this._geometry.levelList[this._fixedLevelIndex] : this._view.selectLevel(this._geometry.selectableLevelList);
        return t;
      }, s.prototype.visibleTiles = function (t) {
        var e = this._selectLevel();

        return this._geometry.visibleTiles(this._view, e, t);
      }, s.prototype.pinLevel = function (t) {
        for (var t = this._geometry.levelList[t], e = this._geometry.levelTiles(t), i = 0; i < e.length; i++) {
          this._textureStore.pin(e[i]);
        }
      }, s.prototype.unpinLevel = function (t) {
        for (var t = this._geometry.levelList[t], e = this._geometry.levelTiles(t), i = 0; i < e.length; i++) {
          this._textureStore.unpin(e[i]);
        }
      }, s.prototype.pinFirstLevel = function () {
        return this.pinLevel(0);
      }, s.prototype.unpinFirstLevel = function () {
        return this.unpinLevel(0);
      }, e.exports = s;
    }, {
      "./util/clearOwnProperties": 76,
      "./util/extend": 86,
      "minimal-event-emitter": 14
    }],
    18: [function (t, e, i) {
      "use strict";

      function r(t) {
        this.constructor.super_.apply(this, arguments), this.message = t;
      }

      t("./util/inherits")(r, Error), e.exports = r;
    }, {
      "./util/inherits": 89
    }],
    19: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("./util/clearOwnProperties");

      function o(t) {
        var e = this;
        this._stage = t, this._running = !1, this._rendering = !1, this._requestHandle = null, this._boundLoop = this._loop.bind(this), this._renderInvalidHandler = function () {
          e._rendering || e.renderOnNextFrame();
        }, this._stage.addEventListener("renderInvalid", this._renderInvalidHandler);
      }

      r(o), o.prototype.destroy = function () {
        this.stop(), this._stage.removeEventListener("renderInvalid", this._renderInvalidHandler), n(this);
      }, o.prototype.stage = function () {
        return this._stage;
      }, o.prototype.start = function () {
        this._running = !0, this.renderOnNextFrame();
      }, o.prototype.stop = function () {
        this._requestHandle && (window.cancelAnimationFrame(this._requestHandle), this._requestHandle = null), this._running = !1;
      }, o.prototype.renderOnNextFrame = function () {
        this._running && !this._requestHandle && (this._requestHandle = window.requestAnimationFrame(this._boundLoop));
      }, o.prototype._loop = function () {
        if (!this._running) throw new Error("Render loop running while in stopped state");
        this._requestHandle = null, this._rendering = !0, this.emit("beforeRender"), this._rendering = !1, this._stage.render(), this.emit("afterRender");
      }, e.exports = o;
    }, {
      "./util/clearOwnProperties": 76,
      "minimal-event-emitter": 14
    }],
    20: [function (t, e, i) {
      "use strict";

      var a = t("./Layer"),
          u = t("./TextureStore"),
          r = t("./HotspotContainer"),
          n = t("minimal-event-emitter"),
          o = t("./util/now"),
          s = t("./util/noop"),
          c = t("./util/type"),
          p = t("./util/defaults"),
          h = t("./util/clearOwnProperties");

      function l(t, e) {
        this._viewer = t, this._view = e, this._layers = [], this._hotspotContainer = new r(t._controlContainer, t.stage(), this._view, t.renderLoop()), this._movement = null, this._movementStartTime = null, this._movementStep = null, this._movementParams = null, this._movementCallback = null, this._updateMovementHandler = this._updateMovement.bind(this), this._updateHotspotContainerHandler = this._updateHotspotContainer.bind(this), this._viewer.addEventListener("sceneChange", this._updateHotspotContainerHandler), this._viewChangeHandler = this.emit.bind(this, "viewChange"), this._view.addEventListener("change", this._viewChangeHandler), this._updateHotspotContainer();
      }

      n(l), l.prototype.destroy = function () {
        this._view.removeEventListener("change", this._viewChangeHandler), this._viewer.removeEventListener("sceneChange", this._updateHotspotContainerHandler), this._movement && this.stopMovement(), this._hotspotContainer.destroy(), this.destroyAllLayers(), h(this);
      }, l.prototype.hotspotContainer = function () {
        return this._hotspotContainer;
      }, l.prototype.layer = function () {
        return this._layers[0];
      }, l.prototype.listLayers = function () {
        return [].concat(this._layers);
      }, l.prototype.view = function () {
        return this._view;
      }, l.prototype.viewer = function () {
        return this._viewer;
      }, l.prototype.visible = function () {
        return this._viewer.scene() === this;
      }, l.prototype.createLayer = function (t) {
        var e = (t = t || {}).textureStoreOpts || {},
            i = t.layerOpts || {},
            r = t.source,
            n = t.geometry,
            o = this._view,
            s = this._viewer.stage(),
            e = new u(r, s, e),
            i = new a(r, n, o, e, i);

        return this._layers.push(i), t.pinFirstLevel && i.pinFirstLevel(), this.emit("layerChange"), i;
      }, l.prototype.destroyLayer = function (t) {
        var e = this._layers.indexOf(t);

        if (e < 0) throw new Error("No such layer in scene");
        this._layers.splice(e, 1), this.emit("layerChange"), t.textureStore().destroy(), t.destroy();
      }, l.prototype.destroyAllLayers = function () {
        for (; 0 < this._layers.length;) {
          this.destroyLayer(this._layers[0]);
        }
      }, l.prototype.switchTo = function (t, e) {
        return this._viewer.switchScene(this, t, e);
      }, l.prototype.lookTo = function (t, e, i) {
        if (e = e || {}, i = i || s, "object" !== c(t)) throw new Error("Target view parameters must be an object");
        var a = null != e.ease ? e.ease : function (t) {
          return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        },
            r = null != e.controlsInterrupt && e.controlsInterrupt,
            u = null != e.transitionDuration ? e.transitionDuration : 1e3,
            n = null == e.shortest || e.shortest,
            e = this._view,
            h = e.parameters(),
            l = {};
        p(l, t), p(l, h), n && e.normalizeToClosest && e.normalizeToClosest(l, l);

        var o = this._viewer.controls().enabled();

        r || this._viewer.controls().disable(), this.startMovement(function () {
          var s = !1;
          return function (t, e) {
            if (u <= e && s) return null;
            var i,
                r = Math.min(e / u, 1);

            for (i in t) {
              var n = h[i],
                  o = l[i];
              t[i] = n + a(r) * (o - n);
            }

            return s = u <= e, t;
          };
        }, function () {
          o && this._viewer.controls().enable(), i();
        });
      }, l.prototype.startMovement = function (t, e) {
        var i = this._viewer.renderLoop();

        this._movement && this.stopMovement();
        var r = t();
        if ("function" != typeof r) throw new Error("Bad movement");
        this._movement = t, this._movementStep = r, this._movementStartTime = o(), this._movementParams = {}, this._movementCallback = e, i.addEventListener("beforeRender", this._updateMovementHandler), i.renderOnNextFrame();
      }, l.prototype.stopMovement = function () {
        var t = this._viewer.renderLoop();

        this._movement && (this._movementCallback && this._movementCallback(), t.removeEventListener("beforeRender", this._updateMovementHandler), this._movement = null, this._movementStep = null, this._movementStartTime = null, this._movementParams = null, this._movementCallback = null);
      }, l.prototype.movement = function () {
        return this._movement;
      }, l.prototype._updateMovement = function () {
        if (!this._movement) throw new Error("Should not call update");

        var t = this._viewer.renderLoop(),
            e = this._view,
            i = o() - this._movementStartTime,
            r = this._movementStep,
            n = this._movementParams;

        null == (n = r(n = e.parameters(n), i)) ? this.stopMovement() : (e.setParameters(n), t.renderOnNextFrame());
      }, l.prototype._updateHotspotContainer = function () {
        this.visible() ? this._hotspotContainer.show() : this._hotspotContainer.hide();
      }, e.exports = l;
    }, {
      "./HotspotContainer": 16,
      "./Layer": 17,
      "./TextureStore": 21,
      "./util/clearOwnProperties": 76,
      "./util/defaults": 81,
      "./util/noop": 92,
      "./util/now": 93,
      "./util/type": 101,
      "minimal-event-emitter": 14
    }],
    21: [function (t, e, i) {
      "use strict";

      var r = t("./collections/Map"),
          n = t("./collections/Set"),
          o = t("./collections/LruSet"),
          s = t("minimal-event-emitter"),
          a = t("./util/defaults"),
          u = t("./util/retry"),
          h = t("./util/chain"),
          l = t("./util/inherits"),
          c = t("./util/clearOwnProperties"),
          p = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.textureStore,
          f = 0,
          d = 1,
          m = 2,
          v = 3,
          _ = {
        previouslyVisibleCacheSize: 512
      },
          y = 0;

      function g() {}

      function M(n, o) {
        var s = this,
            a = y++;
        s._id = a, s._store = n, s._tile = o, s._asset = null, s._texture = null, s._changeHandler = function () {
          n.emit("textureInvalid", o);
        };
        var t = n.source(),
            e = n.stage(),
            i = t.loadAsset.bind(t),
            t = e.createTexture.bind(e),
            t = h(u(i), t);
        n.emit("textureStartLoad", o), p && console.log("loading", a, o), s._cancel = t(e, o, function (t, e, i, r) {
          return s._cancel = null, t ? (i && i.destroy(), r && r.destroy(), void (t instanceof g ? (n.emit("textureCancel", o), p && console.log("cancel", a, o)) : (n.emit("textureError", o, t), p && console.log("error", a, o)))) : (s._texture = r, i.isDynamic() ? (s._asset = i).addEventListener("change", s._changeHandler) : i.destroy(), n.emit("textureLoad", o), void (p && console.log("load", a, o)));
        });
      }

      function w(t, e, i) {
        i = a(i || {}, _), this._source = t, this._stage = e, this._state = f, this._delimCount = 0, this._itemMap = new r(), this._visible = new n(), this._previouslyVisible = new o(i.previouslyVisibleCacheSize), this._pinMap = new r(), this._newVisible = new n(), this._noLongerVisible = [], this._visibleAgain = [], this._evicted = [];
      }

      l(g, Error), M.prototype.asset = function () {
        return this._asset;
      }, M.prototype.texture = function () {
        return this._texture;
      }, M.prototype.destroy = function () {
        var t = this._id,
            e = this._store,
            i = this._tile,
            r = this._asset,
            n = this._texture,
            o = this._cancel;
        o ? o(new g()) : (r && (r.removeEventListener("change", this._changeHandler), r.destroy()), n && n.destroy(), e.emit("textureUnload", i), p && console.log("unload", t, i), c(this));
      }, s(M), s(w), w.prototype.destroy = function () {
        this.clear(), c(this);
      }, w.prototype.stage = function () {
        return this._stage;
      }, w.prototype.source = function () {
        return this._source;
      }, w.prototype.clear = function () {
        var e = this;
        e._evicted.length = 0, e._itemMap.forEach(function (t) {
          e._evicted.push(t);
        }), e._evicted.forEach(function (t) {
          e._unloadTile(t);
        }), e._itemMap.clear(), e._visible.clear(), e._previouslyVisible.clear(), e._pinMap.clear(), e._newVisible.clear(), e._noLongerVisible.length = 0, e._visibleAgain.length = 0, e._evicted.length = 0;
      }, w.prototype.clearNotPinned = function () {
        var e = this;
        e._evicted.length = 0, e._itemMap.forEach(function (t) {
          e._pinMap.has(t) || e._evicted.push(t);
        }), e._evicted.forEach(function (t) {
          e._unloadTile(t);
        }), e._visible.clear(), e._previouslyVisible.clear(), e._evicted.length = 0;
      }, w.prototype.startFrame = function () {
        if (this._state !== f && this._state !== d) throw new Error("TextureStore: startFrame called out of sequence");
        this._state = d, this._delimCount++;
      }, w.prototype.markTile = function (t) {
        if (this._state !== d && this._state !== m) throw new Error("TextureStore: markTile called out of sequence");
        this._state = m;

        var e = this._itemMap.get(t),
            i = e && e.texture(),
            e = e && e.asset();

        i && e && i.refresh(t, e), this._newVisible.add(t);
      }, w.prototype.endFrame = function () {
        if (this._state !== d && this._state !== m && this._state !== v) throw new Error("TextureStore: endFrame called out of sequence");
        this._state = v, this._delimCount--, this._delimCount || (this._update(), this._state = f);
      }, w.prototype._update = function () {
        var r = this;
        r._noLongerVisible.length = 0, r._visible.forEach(function (t) {
          r._newVisible.has(t) || r._noLongerVisible.push(t);
        }), r._visibleAgain.length = 0, r._newVisible.forEach(function (t) {
          r._previouslyVisible.has(t) && r._visibleAgain.push(t);
        }), r._visibleAgain.forEach(function (t) {
          r._previouslyVisible.remove(t);
        }), r._evicted.length = 0, r._noLongerVisible.forEach(function (t) {
          var e,
              i = r._itemMap.get(t);

          i && i.texture() ? null != (e = r._previouslyVisible.add(t)) && r._evicted.push(e) : i && r._unloadTile(t);
        }), r._evicted.forEach(function (t) {
          r._pinMap.has(t) || r._unloadTile(t);
        }), r._newVisible.forEach(function (t) {
          r._itemMap.get(t) || r._loadTile(t);
        });
        var t = r._visible;
        r._visible = r._newVisible, r._newVisible = t, r._newVisible.clear(), r._noLongerVisible.length = 0, r._visibleAgain.length = 0, r._evicted.length = 0;
      }, w.prototype._loadTile = function (t) {
        if (this._itemMap.has(t)) throw new Error("TextureStore: loading texture already in cache");
        var e = new M(this, t);

        this._itemMap.set(t, e);
      }, w.prototype._unloadTile = function (t) {
        t = this._itemMap.del(t);
        if (!t) throw new Error("TextureStore: unloading texture not in cache");
        t.destroy();
      }, w.prototype.asset = function (t) {
        t = this._itemMap.get(t);
        return t ? t.asset() : null;
      }, w.prototype.texture = function (t) {
        t = this._itemMap.get(t);
        return t ? t.texture() : null;
      }, w.prototype.pin = function (t) {
        var e = (this._pinMap.get(t) || 0) + 1;
        return this._pinMap.set(t, e), this._itemMap.has(t) || this._loadTile(t), e;
      }, w.prototype.unpin = function (t) {
        var e = this._pinMap.get(t);

        if (!e) throw new Error("TextureStore: unpin when not pinned");
        return 0 < --e ? this._pinMap.set(t, e) : (this._pinMap.del(t), this._visible.has(t) || this._previouslyVisible.has(t) || this._unloadTile(t)), e;
      }, w.prototype.query = function (t) {
        var e = this._itemMap.get(t),
            i = this._pinMap.get(t) || 0;

        return {
          visible: this._visible.has(t),
          previouslyVisible: this._previouslyVisible.has(t),
          hasAsset: null != e && null != e.asset(),
          hasTexture: null != e && null != e.texture(),
          pinned: 0 !== i,
          pinCount: i
        };
      }, e.exports = w;
    }, {
      "./collections/LruSet": 29,
      "./collections/Map": 30,
      "./collections/Set": 31,
      "./util/chain": 74,
      "./util/clearOwnProperties": 76,
      "./util/defaults": 81,
      "./util/inherits": 89,
      "./util/retry": 99,
      "minimal-event-emitter": 14
    }],
    22: [function (t, e, i) {
      "use strict";

      var r = t("./collections/Set");

      function n() {
        this._stack = [], this._visited = new r(), this._vertices = null;
      }

      n.prototype.search = function (t, e, i) {
        var r = this._stack,
            n = this._visited,
            o = this._vertices,
            s = 0;

        for (this._clear(), r.push(e); 0 < r.length;) {
          var a = r.pop();

          if (!n.has(a) && t.intersects(a.vertices(o))) {
            n.add(a);

            for (var u = a.neighbors(), h = 0; h < u.length; h++) {
              r.push(u[h]);
            }

            i.push(a), s++;
          }
        }

        return this._vertices = o, this._clear(), s;
      }, n.prototype._clear = function () {
        this._stack.length = 0, this._visited.clear();
      }, e.exports = n;
    }, {
      "./collections/Set": 31
    }],
    23: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("./util/defaults"),
          o = t("./util/now"),
          s = {
        duration: 1 / 0
      };

      function a(t) {
        t = n(t || {}, s), this._duration = t.duration, this._startTime = null, this._handle = null, this._check = this._check.bind(this);
      }

      r(a), a.prototype.start = function () {
        this._startTime = o(), null == this._handle && this._duration < 1 / 0 && this._setup(this._duration);
      }, a.prototype.started = function () {
        return null != this._startTime;
      }, a.prototype.stop = function () {
        (this._startTime = null) != this._handle && (clearTimeout(this._handle), this._handle = null);
      }, a.prototype._setup = function (t) {
        this._handle = setTimeout(this._check, t);
      }, a.prototype._teardown = function () {
        clearTimeout(this._handle), this._handle = null;
      }, a.prototype._check = function () {
        var t = o() - this._startTime,
            t = this._duration - t;

        this._teardown(), t <= 0 ? (this.emit("timeout"), this._startTime = null) : t < 1 / 0 && this._setup(t);
      }, a.prototype.duration = function () {
        return this._duration;
      }, a.prototype.setDuration = function (t) {
        this._duration = t, null != this._startTime && this._check();
      }, e.exports = a;
    }, {
      "./util/defaults": 81,
      "./util/now": 93,
      "minimal-event-emitter": 14
    }],
    24: [function (t, e, i) {
      "use strict";

      var r = t("bowser"),
          n = t("minimal-event-emitter"),
          o = t("./RenderLoop"),
          s = t("./controls/Controls"),
          a = t("./Scene"),
          u = t("./Timer"),
          h = t("./stages/WebGl"),
          l = t("./controls/ControlCursor"),
          c = t("./controls/HammerGestures"),
          p = t("./controls/registerDefaultControls"),
          f = t("./renderers/registerDefaultRenderers"),
          d = t("./util/dom").setOverflowHidden,
          m = t("./util/dom").setAbsolute,
          v = t("./util/dom").setFullSize,
          _ = t("./util/dom").setBlocking,
          y = t("./util/tween"),
          g = t("./util/noop"),
          M = t("./util/clearOwnProperties");

      function w(t, e) {
        e = e || {}, this._domElement = t, d(t), this._stage = new h(e.stage), f(this._stage), this._domElement.appendChild(this._stage.domElement()), this._controlContainer = document.createElement("div"), m(this._controlContainer), v(this._controlContainer), r.ios && this._controlContainer.addEventListener("touchmove", function (t) {
          t.preventDefault();
        });
        var i = document.createElement("div");
        m(i), v(i), _(i), this._controlContainer.appendChild(i), t.appendChild(this._controlContainer), this._size = {}, this.updateSize(), this._updateSizeListener = this.updateSize.bind(this), window.addEventListener("resize", this._updateSizeListener), this._renderLoop = new o(this._stage), this._controls = new s(), this._controlMethods = p(this._controls, this._controlContainer, e.controls), this._controls.attach(this._renderLoop), this._hammerManagerTouch = c.get(this._controlContainer, "touch"), this._hammerManagerMouse = c.get(this._controlContainer, "mouse"), this._dragCursor = new l(this._controls, "mouseViewDrag", t, e.cursors && e.cursors.drag || {}), this._renderLoop.start(), this._scenes = [], this._currentScene = null, this._replacedScene = null, this._cancelCurrentTween = null, this._layerChangeHandler = this._updateSceneLayers.bind(this), this._viewChangeHandler = this.emit.bind(this, "viewChange"), this._idleTimer = new u(), this._idleTimer.start(), this._resetIdleTimerHandler = this._resetIdleTimer.bind(this), this.addEventListener("viewChange", this._resetIdleTimerHandler), this._triggerIdleTimerHandler = this._triggerIdleTimer.bind(this), this._idleTimer.addEventListener("timeout", this._triggerIdleTimerHandler), this._stopMovementHandler = this.stopMovement.bind(this), this._controls.addEventListener("active", this._stopMovementHandler), this.addEventListener("sceneChange", this._stopMovementHandler), this._idleMovement = null;
      }

      n(w), w.prototype.destroy = function () {
        for (var t in window.removeEventListener("resize", this._updateSizeListener), this._currentScene && this._removeSceneEventListeners(this._currentScene), this._replacedScene && this._removeSceneEventListeners(this._replacedScene), this._dragCursor.destroy(), this._controlMethods) {
          this._controlMethods[t].destroy();
        }

        for (; this._scenes.length;) {
          this.destroyScene(this._scenes[0]);
        }

        this._domElement.removeChild(this._stage.domElement()), this._stage.destroy(), this._renderLoop.destroy(), this._controls.destroy(), this._controls = null, this._cancelCurrentTween && this._cancelCurrentTween(), M(this);
      }, w.prototype.updateSize = function () {
        var t = this._size;
        t.width = this._domElement.clientWidth, t.height = this._domElement.clientHeight, this._stage.setSize(t);
      }, w.prototype.stage = function () {
        return this._stage;
      }, w.prototype.renderLoop = function () {
        return this._renderLoop;
      }, w.prototype.controls = function () {
        return this._controls;
      }, w.prototype.domElement = function () {
        return this._domElement;
      }, w.prototype.createScene = function (t) {
        t = t || {};
        var e = this.createEmptyScene({
          view: t.view
        });
        return e.createLayer({
          source: t.source,
          geometry: t.geometry,
          pinFirstLevel: t.pinFirstLevel,
          textureStoreOpts: t.textureStoreOpts,
          layerOpts: t.layerOpts
        }), e;
      }, w.prototype.createEmptyScene = function (t) {
        t = new a(this, (t = t || {}).view);
        return this._scenes.push(t), t;
      }, w.prototype._updateSceneLayers = function () {
        var t,
            e,
            i = this._stage,
            r = this._currentScene,
            n = this._replacedScene,
            o = i.listLayers(),
            s = [];
        if (n && (s = s.concat(n.listLayers())), r && (s = s.concat(r.listLayers())), 1 !== Math.abs(o.length - s.length)) throw new Error("Stage and scene out of sync");
        if (s.length < o.length) for (t = 0; t < o.length; t++) {
          if (e = o[t], s.indexOf(e) < 0) {
            this._removeLayerFromStage(e);

            break;
          }
        }
        if (s.length > o.length) for (t = 0; t < s.length; t++) {
          e = s[t], o.indexOf(e) < 0 && this._addLayerToStage(e, t);
        }
      }, w.prototype._addLayerToStage = function (t, e) {
        t.pinFirstLevel(), this._stage.addLayer(t, e);
      }, w.prototype._removeLayerFromStage = function (t) {
        this._stage.removeLayer(t), t.unpinFirstLevel(), t.textureStore().clearNotPinned();
      }, w.prototype._addSceneEventListeners = function (t) {
        t.addEventListener("layerChange", this._layerChangeHandler), t.addEventListener("viewChange", this._viewChangeHandler);
      }, w.prototype._removeSceneEventListeners = function (t) {
        t.removeEventListener("layerChange", this._layerChangeHandler), t.removeEventListener("viewChange", this._viewChangeHandler);
      }, w.prototype.destroyScene = function (t) {
        var e,
            i,
            r = this._scenes.indexOf(t);

        if (r < 0) throw new Error("No such scene in viewer");

        if (this._currentScene === t) {
          for (this._removeSceneEventListeners(t), i = t.listLayers(), e = 0; e < i.length; e++) {
            this._removeLayerFromStage(i[e]);
          }

          this._cancelCurrentTween && (this._cancelCurrentTween(), this._cancelCurrentTween = null), this._currentScene = null, this.emit("sceneChange");
        }

        if (this._replacedScene === t) {
          for (this._removeSceneEventListeners(t), i = t.listLayers(), e = 0; e < i.length; e++) {
            this._removeLayerFromStage(i[e]);
          }

          this._replacedScene = null;
        }

        this._scenes.splice(r, 1), t.destroy();
      }, w.prototype.destroyAllScenes = function () {
        for (; 0 < this._scenes.length;) {
          this.destroyScene(this._scenes[0]);
        }
      }, w.prototype.hasScene = function (t) {
        return 0 <= this._scenes.indexOf(t);
      }, w.prototype.listScenes = function () {
        return [].concat(this._scenes);
      }, w.prototype.scene = function () {
        return this._currentScene;
      }, w.prototype.view = function () {
        var t = this._currentScene;
        return t ? t.view() : null;
      }, w.prototype.lookTo = function (t, e, i) {
        var r = this._currentScene;
        r && r.lookTo(t, e, i);
      }, w.prototype.startMovement = function (t, e) {
        var i = this._currentScene;
        i && i.startMovement(t, e);
      }, w.prototype.stopMovement = function () {
        var t = this._currentScene;
        t && t.stopMovement();
      }, w.prototype.movement = function () {
        var t = this._currentScene;
        if (t) return t.movement();
      }, w.prototype.setIdleMovement = function (t, e) {
        this._idleTimer.setDuration(t), this._idleMovement = e;
      }, w.prototype.breakIdleMovement = function () {
        this.stopMovement(), this._resetIdleTimer();
      }, w.prototype._resetIdleTimer = function () {
        this._idleTimer.start();
      }, w.prototype._triggerIdleTimer = function () {
        var t = this._idleMovement;
        t && this.startMovement(t);
      };

      function b(e, t, i) {
        t.listLayers().forEach(function (t) {
          t.mergeEffects({
            opacity: e
          });
        }), t._hotspotContainer.domElement().style.opacity = e;
      }

      w.prototype.switchScene = function (e, t, i) {
        var r = this;
        t = t || {}, i = i || g;
        var n = this._stage,
            o = this._currentScene;

        if (o !== e) {
          if (this._scenes.indexOf(e) < 0) throw new Error("No such scene in viewer");
          this._cancelCurrentTween && (this._cancelCurrentTween(), this._cancelCurrentTween = null);
          var s = o ? o.listLayers() : [],
              a = e.listLayers(),
              n = n.listLayers();
          if (o && (n.length !== s.length || 1 < n.length && n[0] != s[0])) throw new Error("Stage not in sync with viewer");

          for (var n = null != t.transitionDuration ? t.transitionDuration : 1e3, u = null != t.transitionUpdate ? t.transitionUpdate : b, h = 0; h < a.length; h++) {
            this._addLayerToStage(a[h]);
          }

          this._cancelCurrentTween = y(n, function (t) {
            u(t, e, o);
          }, function () {
            if (r._replacedScene) {
              r._removeSceneEventListeners(r._replacedScene), s = r._replacedScene.listLayers();

              for (var t = 0; t < s.length; t++) {
                r._removeLayerFromStage(s[t]);
              }

              r._replacedScene = null;
            }

            r._cancelCurrentTween = null, i();
          }), this._currentScene = e, this._replacedScene = o, this.emit("sceneChange"), this.emit("viewChange"), this._addSceneEventListeners(e);
        } else i();
      }, e.exports = w;
    }, {
      "./RenderLoop": 19,
      "./Scene": 20,
      "./Timer": 23,
      "./controls/ControlCursor": 36,
      "./controls/Controls": 37,
      "./controls/HammerGestures": 41,
      "./controls/registerDefaultControls": 47,
      "./renderers/registerDefaultRenderers": 61,
      "./stages/WebGl": 70,
      "./util/clearOwnProperties": 76,
      "./util/dom": 85,
      "./util/noop": 92,
      "./util/tween": 100,
      bowser: 1,
      "minimal-event-emitter": 14
    }],
    25: [function (t, e, i) {
      "use strict";

      var r = t("./Static"),
          n = t("../util/inherits"),
          o = t("minimal-event-emitter"),
          s = t("../util/clearOwnProperties");

      function a(t) {
        this.constructor.super_.call(this, t), this._timestamp = 0;
      }

      n(a, r), o(a), a.prototype.destroy = function () {
        s(this);
      }, a.prototype.timestamp = function () {
        return this._timestamp;
      }, a.prototype.isDynamic = function () {
        return !0;
      }, a.prototype.markDirty = function () {
        this._timestamp++, this.emit("change");
      }, e.exports = a;
    }, {
      "../util/clearOwnProperties": 76,
      "../util/inherits": 89,
      "./Static": 26,
      "minimal-event-emitter": 14
    }],
    26: [function (t, e, i) {
      "use strict";

      var r = t("../util/global"),
          n = t("minimal-event-emitter"),
          o = t("../util/clearOwnProperties"),
          s = {
        HTMLImageElement: ["naturalWidth", "naturalHeight"],
        HTMLCanvasElement: ["width", "height"],
        ImageBitmap: ["width", "height"]
      };

      function a(t) {
        var e,
            i = !1;

        for (e in s) {
          if (r[e] && t instanceof r[e]) {
            i = !0, this._widthProp = s[e][0], this._heightProp = s[e][1];
            break;
          }
        }

        if (!i) throw new Error("Unsupported pixel source");
        this._element = t;
      }

      n(a), a.prototype.destroy = function () {
        o(this);
      }, a.prototype.element = function () {
        return this._element;
      }, a.prototype.width = function () {
        return this._element[this._widthProp];
      }, a.prototype.height = function () {
        return this._element[this._heightProp];
      }, a.prototype.timestamp = function () {
        return 0;
      }, a.prototype.isDynamic = function () {
        return !1;
      }, e.exports = a;
    }, {
      "../util/clearOwnProperties": 76,
      "../util/global": 87,
      "minimal-event-emitter": 14
    }],
    27: [function (t, e, i) {
      "use strict";

      var r = t("./util/defaults"),
          n = {
        yawSpeed: .1,
        pitchSpeed: .1,
        fovSpeed: .1,
        yawAccel: .01,
        pitchAccel: .01,
        fovAccel: .01,
        targetPitch: 0,
        targetFov: null
      };

      e.exports = function (t) {
        var p = (t = r(t || {}, n)).yawSpeed,
            f = t.pitchSpeed,
            d = t.fovSpeed,
            m = t.yawAccel,
            v = t.pitchAccel,
            _ = t.fovAccel,
            y = t.targetPitch,
            g = t.targetFov;
        return function () {
          var r,
              n,
              o,
              s = 0,
              a = 0,
              u = 0,
              h = 0,
              l = 0,
              c = 0;
          return function (t, e) {
            var i;
            return o = (e - s) / 1e3, r = Math.min(a + o * m, p), n = r * o, t.yaw = t.yaw + n, null != y && t.pitch !== y && (i = .5 * u * u / v, l = Math.abs(y - t.pitch) > i ? Math.min(u + o * v, f) : Math.max(u - o * v, 0), n = l * o, y < t.pitch && (t.pitch = Math.max(y, t.pitch - n)), y > t.pitch && (t.pitch = Math.min(y, t.pitch + n))), null != g && t.fov !== y && (i = .5 * h * h / _, c = Math.abs(g - t.fov) > i ? Math.min(h + o * _, d) : Math.max(h - o * _, 0), o = c * o, g < t.fov && (t.fov = Math.max(g, t.fov - o)), g > t.fov && (t.fov = Math.min(g, t.fov + o))), s = e, a = r, u = l, h = c, t;
          };
        };
      };
    }, {
      "./util/defaults": 81
    }],
    28: [function (t, e, i) {
      "use strict";

      var r = t("../util/mod");

      function n(t) {
        if (!isFinite(t) || Math.floor(t) !== t || t < 0) throw new Error("LruMap: invalid capacity");
        this._capacity = t, this._keys = new Array(this._capacity), this._values = new Array(this._capacity), this._start = 0, this._size = 0;
      }

      n.prototype._index = function (t) {
        return r(this._start + t, this._capacity);
      }, n.prototype.get = function (t) {
        for (var e = 0; e < this._size; e++) {
          var i = this._keys[this._index(e)];

          if (t.equals(i)) return this._values[this._index(e)];
        }

        return null;
      }, n.prototype.set = function (t, e) {
        if (0 === this._capacity) return t;
        this.del(t);
        var i = this._size === this._capacity ? this._keys[this._index(0)] : null;
        return this._keys[this._index(this._size)] = t, this._values[this._index(this._size)] = e, this._size < this._capacity ? this._size++ : this._start = this._index(1), i;
      }, n.prototype.del = function (t) {
        for (var e = 0; e < this._size; e++) {
          if (t.equals(this._keys[this._index(e)])) {
            for (var i = this._values[this._index(e)], r = e; r < this._size - 1; r++) {
              this._keys[this._index(r)] = this._keys[this._index(r + 1)], this._values[this._index(r)] = this._values[this._index(r + 1)];
            }

            return this._size--, i;
          }
        }

        return null;
      }, n.prototype.has = function (t) {
        for (var e = 0; e < this._size; e++) {
          if (t.equals(this._keys[this._index(e)])) return !0;
        }

        return !1;
      }, n.prototype.size = function () {
        return this._size;
      }, n.prototype.clear = function () {
        this._keys.length = 0, this._values.length = 0, this._start = 0, this._size = 0;
      }, n.prototype.forEach = function (t) {
        for (var e = 0, i = 0; i < this._size; i++) {
          t(this._keys[this._index(i)], this._values[this._index(i)]), e += 1;
        }

        return e;
      }, e.exports = n;
    }, {
      "../util/mod": 91
    }],
    29: [function (t, e, i) {
      "use strict";

      var r = t("../util/mod");

      function n(t) {
        if (!isFinite(t) || Math.floor(t) !== t || t < 0) throw new Error("LruSet: invalid capacity");
        this._capacity = t, this._elements = new Array(this._capacity), this._start = 0, this._size = 0;
      }

      n.prototype._index = function (t) {
        return r(this._start + t, this._capacity);
      }, n.prototype.add = function (t) {
        if (0 === this._capacity) return t;
        this.remove(t);
        var e = this._size === this._capacity ? this._elements[this._index(0)] : null;
        return this._elements[this._index(this._size)] = t, this._size < this._capacity ? this._size++ : this._start = this._index(1), e;
      }, n.prototype.remove = function (t) {
        for (var e = 0; e < this._size; e++) {
          var i = this._elements[this._index(e)];

          if (t.equals(i)) {
            for (var r = e; r < this._size - 1; r++) {
              this._elements[this._index(r)] = this._elements[this._index(r + 1)];
            }

            return this._size--, i;
          }
        }

        return null;
      }, n.prototype.has = function (t) {
        for (var e = 0; e < this._size; e++) {
          if (t.equals(this._elements[this._index(e)])) return !0;
        }

        return !1;
      }, n.prototype.size = function () {
        return this._size;
      }, n.prototype.clear = function () {
        this._elements.length = 0, this._start = 0, this._size = 0;
      }, n.prototype.forEach = function (t) {
        for (var e = 0, i = 0; i < this._size; i++) {
          t(this._elements[this._index(i)]), e += 1;
        }

        return e;
      }, e.exports = n;
    }, {
      "../util/mod": 91
    }],
    30: [function (t, e, i) {
      "use strict";

      var a = t("../util/mod");

      function r(t) {
        if (null != t && (!isFinite(t) || Math.floor(t) !== t || t < 1)) throw new Error("Map: invalid capacity");
        this._capacity = t || 64, this._keyBuckets = [], this._valBuckets = [];

        for (var e = 0; e < this._capacity; e++) {
          this._keyBuckets.push([]), this._valBuckets.push([]);
        }

        this._size = 0;
      }

      r.prototype.get = function (t) {
        for (var e = a(t.hash(), this._capacity), i = this._keyBuckets[e], r = 0; r < i.length; r++) {
          var n = i[r];
          if (t.equals(n)) return this._valBuckets[e][r];
        }

        return null;
      }, r.prototype.set = function (t, e) {
        for (var i = a(t.hash(), this._capacity), r = this._keyBuckets[i], n = this._valBuckets[i], o = 0; o < r.length; o++) {
          var s = r[o];

          if (t.equals(s)) {
            s = n[o];
            return r[o] = t, n[o] = e, s;
          }
        }

        return r.push(t), n.push(e), this._size++, null;
      }, r.prototype.del = function (t) {
        for (var e = a(t.hash(), this._capacity), i = this._keyBuckets[e], r = this._valBuckets[e], n = 0; n < i.length; n++) {
          var o = i[n];

          if (t.equals(o)) {
            for (var o = r[n], s = n; s < i.length - 1; s++) {
              i[s] = i[s + 1], r[s] = r[s + 1];
            }

            return i.length = i.length - 1, r.length = r.length - 1, this._size--, o;
          }
        }

        return null;
      }, r.prototype.has = function (t) {
        for (var e = a(t.hash(), this._capacity), i = this._keyBuckets[e], r = 0; r < i.length; r++) {
          var n = i[r];
          if (t.equals(n)) return !0;
        }

        return !1;
      }, r.prototype.size = function () {
        return this._size;
      }, r.prototype.clear = function () {
        for (var t = 0; t < this._capacity; t++) {
          this._keyBuckets[t].length = 0, this._valBuckets[t].length = 0;
        }

        this._size = 0;
      }, r.prototype.forEach = function (t) {
        for (var e = 0, i = 0; i < this._capacity; i++) {
          for (var r = this._keyBuckets[i], n = this._valBuckets[i], o = 0; o < r.length; o++) {
            t(r[o], n[o]), e += 1;
          }
        }

        return e;
      }, e.exports = r;
    }, {
      "../util/mod": 91
    }],
    31: [function (t, e, i) {
      "use strict";

      var s = t("../util/mod");

      function r(t) {
        if (null != t && (!isFinite(t) || Math.floor(t) !== t || t < 1)) throw new Error("Set: invalid capacity");
        this._capacity = this._capacity || 64, this._buckets = [];

        for (var e = 0; e < this._capacity; e++) {
          this._buckets.push([]);
        }

        this._size = 0;
      }

      r.prototype.add = function (t) {
        for (var e = s(t.hash(), this._capacity), i = this._buckets[e], r = 0; r < i.length; r++) {
          var n = i[r];
          if (t.equals(n)) return i[r] = t, n;
        }

        return i.push(t), this._size++, null;
      }, r.prototype.remove = function (t) {
        for (var e = s(t.hash(), this._capacity), i = this._buckets[e], r = 0; r < i.length; r++) {
          var n = i[r];

          if (t.equals(n)) {
            for (var o = r; o < i.length - 1; o++) {
              i[o] = i[o + 1];
            }

            return i.length = i.length - 1, this._size--, n;
          }
        }

        return null;
      }, r.prototype.has = function (t) {
        for (var e = s(t.hash(), this._capacity), i = this._buckets[e], r = 0; r < i.length; r++) {
          var n = i[r];
          if (t.equals(n)) return !0;
        }

        return !1;
      }, r.prototype.size = function () {
        return this._size;
      }, r.prototype.clear = function () {
        for (var t = 0; t < this._capacity; t++) {
          this._buckets[t].length = 0;
        }

        this._size = 0;
      }, r.prototype.forEach = function (t) {
        for (var e = 0, i = 0; i < this._capacity; i++) {
          for (var r = this._buckets[i], n = 0; n < r.length; n++) {
            t(r[n]), e += 1;
          }
        }

        return e;
      }, e.exports = r;
    }, {
      "../util/mod": 91
    }],
    32: [function (t, e, i) {
      "use strict";

      var r = t("./WorkQueue"),
          n = t("../util/mod");

      function o(t) {
        this._concurrency = t && t.concurrency || 1, this._paused = t && !!t.paused || !1, this._pool = [];

        for (var e = 0; e < this._concurrency; e++) {
          this._pool.push(new r(t));
        }

        this._next = 0;
      }

      o.prototype.length = function () {
        for (var t = 0, e = 0; e < this._pool.length; e++) {
          t += this._pool[e].length();
        }

        return t;
      }, o.prototype.push = function (t, e) {
        var i = this._next,
            e = this._pool[i].push(t, e);

        return this._next = n(this._next + 1, this._concurrency), e;
      }, o.prototype.pause = function () {
        if (!this._paused) {
          this._paused = !0;

          for (var t = 0; t < this._concurrency; t++) {
            this._pool[t].pause();
          }
        }
      }, o.prototype.resume = function () {
        if (this._paused) {
          this._paused = !1;

          for (var t = 0; t < this._concurrency; t++) {
            this._pool[t].resume();
          }
        }
      }, e.exports = o;
    }, {
      "../util/mod": 91,
      "./WorkQueue": 33
    }],
    33: [function (t, e, i) {
      "use strict";

      var r = t("../util/now");

      function n(t, e) {
        this.fn = t, this.cb = e, this.cfn = null;
      }

      function o(t) {
        this._queue = [], this._delay = t && t.delay || 0, this._paused = t && !!t.paused || !1, this._currentTask = null, this._lastFinished = null;
      }

      o.prototype.length = function () {
        return this._queue.length;
      }, o.prototype.push = function (t, e) {
        t = new n(t, e), e = this._cancel.bind(this, t);
        return this._queue.push(t), this._next(), e;
      }, o.prototype.pause = function () {
        this._paused || (this._paused = !0);
      }, o.prototype.resume = function () {
        this._paused && (this._paused = !1, this._next());
      }, o.prototype._start = function (t) {
        if (this._currentTask) throw new Error("WorkQueue: called start while running task");
        this._currentTask = t;

        var e = this._finish.bind(this, t);

        if (t.cfn = t.fn(e), "function" != typeof t.cfn) throw new Error("WorkQueue: function is not cancellable");
      }, o.prototype._finish = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        if (this._currentTask !== t) throw new Error("WorkQueue: called finish on wrong task");
        t.cb.apply(null, e), this._currentTask = null, this._lastFinished = r(), this._next();
      }, o.prototype._cancel = function (t) {
        var e,
            i = Array.prototype.slice.call(arguments, 1);
        this._currentTask === t ? t.cfn.apply(null, i) : 0 <= (e = this._queue.indexOf(t)) && (this._queue.splice(e, 1), t.cb.apply(null, i));
      }, o.prototype._next = function () {
        if (!this._paused && this._queue.length && !this._currentTask) {
          if (null != this._lastFinished) {
            var t = r() - this._lastFinished,
                t = this._delay - t;

            if (0 < t) return void setTimeout(this._next.bind(this), t);
          }

          t = this._queue.shift();

          this._start(t);
        }
      }, e.exports = o;
    }, {
      "../util/now": 93
    }],
    34: [function (t, e, i) {
      "use strict";

      var u = t("gl-matrix").vec4,
          r = t("gl-matrix").mat4;

      function s(t, e, i) {
        var r, n, o, s, a;
        r = i, n = t, o = e.colorMatrix, s = n[0], a = n[1], t = n[2], n = n[3], r[0] = o[0] * s + o[1] * a + o[2] * t + o[3] * n, r[1] = o[4] * s + o[5] * a + o[6] * t + o[7] * n, r[2] = o[8] * s + o[9] * a + o[10] * t + o[11] * n, r[3] = o[12] * s + o[13] * a + o[14] * t + o[15] * n, u.add(i, i, e.colorOffset);
      }

      var a = u.create();
      e.exports = {
        identity: function identity(t) {
          return (t = t || {}).colorOffset = t.colorOffset || u.create(), t.colorMatrix = t.colorMatrix || r.create(), t;
        },
        applyToPixel: s,
        applyToImageData: function applyToImageData(t, e) {
          for (var i = t.width, r = t.height, n = t.data, o = 0; o < i * r; o++) {
            u.set(a, n[4 * o + 0] / 255, n[4 * o + 1] / 255, n[4 * o + 2] / 255, n[4 * o + 3] / 255), s(a, e, a), n[4 * o + 0] = 255 * a[0], n[4 * o + 1] = 255 * a[1], n[4 * o + 2] = 255 * a[2], n[4 * o + 3] = 255 * a[3];
          }
        }
      };
    }, {
      "gl-matrix": 3
    }],
    35: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("./Dynamics"),
          o = t("../util/now"),
          s = t("../util/clearOwnProperties");

      function a(t) {
        t = t || {}, this._methods = [], this._parameters = ["x", "y", "axisScaledX", "axisScaledY", "zoom", "yaw", "pitch", "roll"], this._now = t.nowForTesting || o, this._composedOffsets = {}, this._composeReturn = {
          offsets: this._composedOffsets,
          changing: null
        };
      }

      r(a), a.prototype.add = function (t) {
        var e, i, r;
        this.has(t) || (e = {}, this._parameters.forEach(function (t) {
          e[t] = {
            dynamics: new n(),
            time: null
          };
        }), i = this._updateDynamics.bind(this, e), r = {
          instance: t,
          dynamics: e,
          parameterDynamicsHandler: i
        }, t.addEventListener("parameterDynamics", i), this._methods.push(r));
      }, a.prototype.remove = function (t) {
        t = this._indexOfInstance(t);
        0 <= t && (t = this._methods.splice(t, 1)[0]).instance.removeEventListener("parameterDynamics", t.parameterDynamicsHandler);
      }, a.prototype.has = function (t) {
        return 0 <= this._indexOfInstance(t);
      }, a.prototype._indexOfInstance = function (t) {
        for (var e = 0; e < this._methods.length; e++) {
          if (this._methods[e].instance === t) return e;
        }

        return -1;
      }, a.prototype.list = function () {
        for (var t = [], e = 0; e < this._methods.length; e++) {
          t.push(this._methods[e].instance);
        }

        return t;
      }, a.prototype._updateDynamics = function (t, e, i) {
        t = t[e];
        if (!t) throw new Error("Unknown control parameter " + e);
        e = this._now();
        t.dynamics.update(i, (e - t.time) / 1e3), t.time = e, this.emit("change");
      }, a.prototype._resetComposedOffsets = function () {
        for (var t = 0; t < this._parameters.length; t++) {
          this._composedOffsets[this._parameters[t]] = 0;
        }
      }, a.prototype.offsets = function () {
        var t,
            e = !1,
            i = this._now();

        this._resetComposedOffsets();

        for (var r = 0; r < this._methods.length; r++) {
          for (var n = this._methods[r].dynamics, o = 0; o < this._parameters.length; o++) {
            var s = n[t = this._parameters[o]],
                a = s.dynamics;
            null != a.offset && (this._composedOffsets[t] += a.offset, a.offset = null);
            var u = (i - s.time) / 1e3,
                h = a.offsetFromVelocity(u);
            h && (this._composedOffsets[t] += h);
            u = a.velocityAfter(u);
            (a.velocity = u) && (e = !0), s.time = i;
          }
        }

        return this._composeReturn.changing = e, this._composeReturn;
      }, a.prototype.destroy = function () {
        for (var t = this.list(), e = 0; e < t.length; e++) {
          this.remove(t[e]);
        }

        s(this);
      }, e.exports = a;
    }, {
      "../util/clearOwnProperties": 76,
      "../util/now": 93,
      "./Dynamics": 39,
      "minimal-event-emitter": 14
    }],
    36: [function (t, e, i) {
      "use strict";

      var n = t("../util/defaults"),
          r = t("../util/clearOwnProperties"),
          o = {
        active: "move",
        inactive: "default",
        disabled: "default"
      };

      function s(t, e, i, r) {
        r = n(r || {}, o), this._element = i, this._controls = t, this._id = e, this._attached = !1, this._setActiveCursor = this._setCursor.bind(this, r.active), this._setInactiveCursor = this._setCursor.bind(this, r.inactive), this._setDisabledCursor = this._setCursor.bind(this, r.disabled), this._setOriginalCursor = this._setCursor.bind(this, this._element.style.cursor), this._updateAttachmentHandler = this._updateAttachment.bind(this), t.addEventListener("methodEnabled", this._updateAttachmentHandler), t.addEventListener("methodDisabled", this._updateAttachmentHandler), t.addEventListener("enabled", this._updateAttachmentHandler), t.addEventListener("disabled", this._updateAttachmentHandler), this._updateAttachment();
      }

      s.prototype.destroy = function () {
        this._detachFromControlMethod(this._controls.method(this._id)), this._setOriginalCursor(), this._controls.removeEventListener("methodEnabled", this._updateAttachmentHandler), this._controls.removeEventListener("methodDisabled", this._updateAttachmentHandler), this._controls.removeEventListener("enabled", this._updateAttachmentHandler), this._controls.removeEventListener("disabled", this._updateAttachmentHandler), r(this);
      }, s.prototype._updateAttachment = function () {
        var t = this._controls,
            e = this._id;
        t.enabled() && t.method(e).enabled ? this._attachToControlMethod(t.method(e)) : this._detachFromControlMethod(t.method(e));
      }, s.prototype._attachToControlMethod = function (t) {
        this._attached || (t.instance.addEventListener("active", this._setActiveCursor), t.instance.addEventListener("inactive", this._setInactiveCursor), t.active ? this._setActiveCursor() : this._setInactiveCursor(), this._attached = !0);
      }, s.prototype._detachFromControlMethod = function (t) {
        this._attached && (t.instance.removeEventListener("active", this._setActiveCursor), t.instance.removeEventListener("inactive", this._setInactiveCursor), this._setDisabledCursor(), this._attached = !1);
      }, s.prototype._setCursor = function (t) {
        this._element.style.cursor = t;
      }, e.exports = s;
    }, {
      "../util/clearOwnProperties": 76,
      "../util/defaults": 81
    }],
    37: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("./Composer"),
          o = t("../util/clearOwnProperties"),
          s = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.controls;

      function a(t) {
        t = t || {}, this._methods = {}, this._methodGroups = {}, this._composer = new n(), this._enabled = !t || !t.enabled || !!t.enabled, this._activeCount = 0, this.updatedViews_ = [], this._attachedRenderLoop = null;
      }

      r(a), a.prototype.destroy = function () {
        this.detach(), this._composer.destroy(), o(this);
      }, a.prototype.methods = function () {
        var t,
            e = {};

        for (t in this._methods) {
          e[t] = this._methods[t];
        }

        return e;
      }, a.prototype.method = function (t) {
        return this._methods[t];
      }, a.prototype.registerMethod = function (t, e, i) {
        if (this._methods[t]) throw new Error("Control method already registered with id " + t);
        this._methods[t] = {
          instance: e,
          enabled: !1,
          active: !1,
          activeHandler: this._handleActive.bind(this, t),
          inactiveHandler: this._handleInactive.bind(this, t)
        }, i && this.enableMethod(t, e);
      }, a.prototype.unregisterMethod = function (t) {
        var e = this._methods[t];
        if (!e) throw new Error("No control method registered with id " + t);
        e.enabled && this.disableMethod(t), delete this._methods[t];
      }, a.prototype.enableMethod = function (t) {
        var e = this._methods[t];
        if (!e) throw new Error("No control method registered with id " + t);
        e.enabled || (e.enabled = !0, e.active && this._incrementActiveCount(), this._listen(t), this._updateComposer(), this.emit("methodEnabled", t));
      }, a.prototype.disableMethod = function (t) {
        var e = this._methods[t];
        if (!e) throw new Error("No control method registered with id " + t);
        e.enabled && (e.enabled = !1, e.active && this._decrementActiveCount(), this._unlisten(t), this._updateComposer(), this.emit("methodDisabled", t));
      }, a.prototype.addMethodGroup = function (t, e) {
        this._methodGroups[t] = e;
      }, a.prototype.removeMethodGroup = function (t) {
        delete this._methodGroups[t];
      }, a.prototype.methodGroups = function () {
        var t,
            e = {};

        for (t in this._methodGroups) {
          e[t] = this._methodGroups[t];
        }

        return e;
      }, a.prototype.enableMethodGroup = function (t) {
        var e = this;

        e._methodGroups[t].forEach(function (t) {
          e.enableMethod(t);
        });
      }, a.prototype.disableMethodGroup = function (t) {
        var e = this;

        e._methodGroups[t].forEach(function (t) {
          e.disableMethod(t);
        });
      }, a.prototype.enabled = function () {
        return this._enabled;
      }, a.prototype.enable = function () {
        this._enabled || (this._enabled = !0, 0 < this._activeCount && this.emit("active"), this.emit("enabled"), this._updateComposer());
      }, a.prototype.disable = function () {
        this._enabled && (this._enabled = !1, 0 < this._activeCount && this.emit("inactive"), this.emit("disabled"), this._updateComposer());
      }, a.prototype.attach = function (t) {
        this._attachedRenderLoop && this.detach(), this._attachedRenderLoop = t, this._beforeRenderHandler = this._updateViewsWithControls.bind(this), this._changeHandler = t.renderOnNextFrame.bind(t), this._attachedRenderLoop.addEventListener("beforeRender", this._beforeRenderHandler), this._composer.addEventListener("change", this._changeHandler);
      }, a.prototype.detach = function () {
        this._attachedRenderLoop && (this._attachedRenderLoop.removeEventListener("beforeRender", this._beforeRenderHandler), this._composer.removeEventListener("change", this._changeHandler), this._beforeRenderHandler = null, this._changeHandler = null, this._attachedRenderLoop = null);
      }, a.prototype.attached = function () {
        return null != this._attachedRenderLoop;
      }, a.prototype._listen = function (t) {
        t = this._methods[t];
        if (!t) throw new Error("Bad method id");
        t.instance.addEventListener("active", t.activeHandler), t.instance.addEventListener("inactive", t.inactiveHandler);
      }, a.prototype._unlisten = function (t) {
        t = this._methods[t];
        if (!t) throw new Error("Bad method id");
        t.instance.removeEventListener("active", t.activeHandler), t.instance.removeEventListener("inactive", t.inactiveHandler);
      }, a.prototype._handleActive = function (t) {
        t = this._methods[t];
        if (!t) throw new Error("Bad method id");
        if (!t.enabled) throw new Error("Should not receive event from disabled control method");
        t.active || (t.active = !0, this._incrementActiveCount());
      }, a.prototype._handleInactive = function (t) {
        t = this._methods[t];
        if (!t) throw new Error("Bad method id");
        if (!t.enabled) throw new Error("Should not receive event from disabled control method");
        t.active && (t.active = !1, this._decrementActiveCount());
      }, a.prototype._incrementActiveCount = function () {
        this._activeCount++, s && this._checkActiveCount(), this._enabled && 1 === this._activeCount && this.emit("active");
      }, a.prototype._decrementActiveCount = function () {
        this._activeCount--, s && this._checkActiveCount(), this._enabled && 0 === this._activeCount && this.emit("inactive");
      }, a.prototype._checkActiveCount = function () {
        var t,
            e = 0;

        for (t in this._methods) {
          var i = this._methods[t];
          i.enabled && i.active && e++;
        }

        if (e != this._activeCount) throw new Error("Bad control state");
      }, a.prototype._updateComposer = function () {
        var t,
            e = this._composer;

        for (t in this._methods) {
          var i = this._methods[t],
              r = this._enabled && i.enabled;
          r && !e.has(i.instance) && e.add(i.instance), !r && e.has(i.instance) && e.remove(i.instance);
        }
      }, a.prototype._updateViewsWithControls = function () {
        var t = this._composer.offsets();

        t.changing && this._attachedRenderLoop.renderOnNextFrame(), this.updatedViews_.length = 0;

        for (var e = this._attachedRenderLoop.stage().listLayers(), i = 0; i < e.length; i++) {
          var r = e[i].view();
          this.updatedViews_.indexOf(r) < 0 && (e[i].view().updateWithControlParameters(t.offsets), this.updatedViews_.push(r));
        }
      }, e.exports = a;
    }, {
      "../util/clearOwnProperties": 76,
      "./Composer": 35,
      "minimal-event-emitter": 14
    }],
    38: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("./Dynamics"),
          o = t("./HammerGestures"),
          s = t("../util/defaults"),
          a = t("./util").maxFriction,
          u = t("../util/clearOwnProperties"),
          h = {
        friction: 6,
        maxFrictionTime: .3
      },
          l = "undefined" != typeof MARZIPANODEBUG && MARZIPANODEBUG.controls;

      function c(t, e, i) {
        this._element = t, this._opts = s(i || {}, h), this._startEvent = null, this._lastEvent = null, this._active = !1, this._dynamics = {
          x: new n(),
          y: new n()
        }, this._hammer = o.get(t, e), this._hammer.on("hammer.input", this._handleHammerEvent.bind(this)), this._hammer.on("panstart", this._handleStart.bind(this)), this._hammer.on("panmove", this._handleMove.bind(this)), this._hammer.on("panend", this._handleEnd.bind(this)), this._hammer.on("pancancel", this._handleEnd.bind(this));
      }

      r(c), c.prototype.destroy = function () {
        this._hammer.release(), u(this);
      }, c.prototype._handleHammerEvent = function (t) {
        if (t.isFirst) {
          if (l && this._active) throw new Error("DragControlMethod active detected when already active");
          this._active = !0, this.emit("active");
        }

        if (t.isFinal) {
          if (l && !this._active) throw new Error("DragControlMethod inactive detected when already inactive");
          this._active = !1, this.emit("inactive");
        }
      }, c.prototype._handleStart = function (t) {
        t.preventDefault(), this._startEvent = t;
      }, c.prototype._handleMove = function (t) {
        t.preventDefault(), this._startEvent && (this._updateDynamicsMove(t), this.emit("parameterDynamics", "axisScaledX", this._dynamics.x), this.emit("parameterDynamics", "axisScaledY", this._dynamics.y));
      }, c.prototype._handleEnd = function (t) {
        t.preventDefault(), this._startEvent && (this._updateDynamicsRelease(t), this.emit("parameterDynamics", "axisScaledX", this._dynamics.x), this.emit("parameterDynamics", "axisScaledY", this._dynamics.y)), this._startEvent = !1, this._lastEvent = !1;
      }, c.prototype._updateDynamicsMove = function (t) {
        var e = t.deltaX,
            i = t.deltaY,
            r = this._lastEvent || this._startEvent;
        r && (e -= r.deltaX, i -= r.deltaY);
        r = this._element.getBoundingClientRect();
        e /= r.right - r.left, i /= r.bottom - r.top, this._dynamics.x.reset(), this._dynamics.y.reset(), this._dynamics.x.offset = -e, this._dynamics.y.offset = -i, this._lastEvent = t;
      };
      var p = [null, null];
      c.prototype._updateDynamicsRelease = function (t) {
        var e = this._element.getBoundingClientRect(),
            i = e.right - e.left,
            e = e.bottom - e.top,
            i = 1e3 * t.velocityX / i,
            e = 1e3 * t.velocityY / e;

        this._dynamics.x.reset(), this._dynamics.y.reset(), this._dynamics.x.velocity = i, this._dynamics.y.velocity = e, a(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, p), this._dynamics.x.friction = p[0], this._dynamics.y.friction = p[1];
      }, e.exports = c;
    }, {
      "../util/clearOwnProperties": 76,
      "../util/defaults": 81,
      "./Dynamics": 39,
      "./HammerGestures": 41,
      "./util": 48,
      "minimal-event-emitter": 14
    }],
    39: [function (t, e, i) {
      "use strict";

      function r() {
        this.velocity = null, this.friction = null, this.offset = null;
      }

      r.equals = function (t, e) {
        return t.velocity === e.velocity && t.friction === e.friction && t.offset === e.offset;
      }, r.prototype.equals = function (t) {
        return r.equals(this, t);
      }, r.prototype.update = function (t, e) {
        t.offset && (this.offset = this.offset || 0, this.offset += t.offset);
        e = this.offsetFromVelocity(e);
        e && (this.offset = this.offset || 0, this.offset += e), this.velocity = t.velocity, this.friction = t.friction;
      }, r.prototype.reset = function () {
        this.velocity = null, this.friction = null, this.offset = null;
      }, r.prototype.velocityAfter = function (t) {
        return this.velocity ? this.friction ? function (t, e) {
          if (t < 0) return Math.min(0, t + e);
          if (0 < t) return Math.max(0, t - e);
          return 0;
        }(this.velocity, this.friction * t) : this.velocity : null;
      }, r.prototype.offsetFromVelocity = function (t) {
        t = Math.min(t, this.nullVelocityTime());
        var e = this.velocityAfter(t);
        return (this.velocity + e) / 2 * t;
      }, r.prototype.nullVelocityTime = function () {
        return null == this.velocity ? 0 : this.velocity && !this.friction ? 1 / 0 : Math.abs(this.velocity / this.friction);
      }, e.exports = r;
    }, {}],
    40: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("./Dynamics"),
          o = t("../util/clearOwnProperties");

      function s(t, e, i, r) {
        if (!t) throw new Error("ElementPressControlMethod: element must be defined");
        if (!e) throw new Error("ElementPressControlMethod: parameter must be defined");
        if (!i) throw new Error("ElementPressControlMethod: velocity must be defined");
        if (!r) throw new Error("ElementPressControlMethod: friction must be defined");
        this._element = t, this._pressHandler = this._handlePress.bind(this), this._releaseHandler = this._handleRelease.bind(this), t.addEventListener("mousedown", this._pressHandler), t.addEventListener("mouseup", this._releaseHandler), t.addEventListener("mouseleave", this._releaseHandler), t.addEventListener("touchstart", this._pressHandler), t.addEventListener("touchmove", this._releaseHandler), t.addEventListener("touchend", this._releaseHandler), this._parameter = e, this._velocity = i, this._friction = r, this._dynamics = new n(), this._pressing = !1;
      }

      r(s), s.prototype.destroy = function () {
        this._element.removeEventListener("mousedown", this._pressHandler), this._element.removeEventListener("mouseup", this._releaseHandler), this._element.removeEventListener("mouseleave", this._releaseHandler), this._element.removeEventListener("touchstart", this._pressHandler), this._element.removeEventListener("touchmove", this._releaseHandler), this._element.removeEventListener("touchend", this._releaseHandler), o(this);
      }, s.prototype._handlePress = function () {
        this._pressing = !0, this._dynamics.velocity = this._velocity, this._dynamics.friction = 0, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("active");
      }, s.prototype._handleRelease = function () {
        this._pressing && (this._dynamics.friction = this._friction, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("inactive")), this._pressing = !1;
      }, e.exports = s;
    }, {
      "../util/clearOwnProperties": 76,
      "./Dynamics": 39,
      "minimal-event-emitter": 14
    }],
    41: [function (t, e, i) {
      "use strict";

      var r = t("hammerjs"),
          n = 1,
          o = "MarzipanoHammerElementId";

      function s(t, e) {
        return t[o] || (t[o] = n++), e + t[o];
      }

      function a() {
        this._managers = {}, this._refCount = {};
      }

      function u(t, e, i, r) {
        this._manager = e, this._element = i, this._type = r, this._hammerGestures = t, this._eventHandlers = [];
      }

      a.prototype.get = function (t, e) {
        var i = s(t, e);
        return this._managers[i] || (this._managers[i] = this._createManager(t, e), this._refCount[i] = 0), this._refCount[i]++, new u(this, this._managers[i], t, e);
      }, a.prototype._createManager = function (t, e) {
        t = new r.Manager(t);
        return "mouse" === e ? t.add(new r.Pan({
          direction: r.DIRECTION_ALL,
          threshold: 0
        })) : "touch" !== e && "pen" !== e && "kinect" !== e || (t.add(new r.Pan({
          direction: r.DIRECTION_ALL,
          threshold: 20,
          pointers: 1
        })), t.add(new r.Pinch())), t;
      }, a.prototype._releaseHandle = function (t, e) {
        e = s(t, e);
        this._refCount[e] && (this._refCount[e]--, this._refCount[e] || (this._managers[e].destroy(), delete this._managers[e], delete this._refCount[e]));
      }, u.prototype.on = function (t, e) {
        function i(t) {
          r === t.pointerType && e(t);
        }

        var r = this._type;
        this._eventHandlers.push({
          events: t,
          handler: i
        }), this._manager.on(t, i);
      }, u.prototype.release = function () {
        for (var t = 0; t < this._eventHandlers.length; t++) {
          var e = this._eventHandlers[t];

          this._manager.off(e.events, e.handler);
        }

        this._hammerGestures._releaseHandle(this._element, this._type), this._manager = null, this._element = null, this._type = null, this._hammerGestures = null;
      }, u.prototype.manager = function () {
        return this._manager;
      }, e.exports = new a();
    }, {
      hammerjs: 13
    }],
    42: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          o = t("./Dynamics"),
          n = t("../util/clearOwnProperties");

      function s(t, e, i, r, n) {
        if (!t) throw new Error("KeyControlMethod: keyCode must be defined");
        if (!e) throw new Error("KeyControlMethod: parameter must be defined");
        if (!i) throw new Error("KeyControlMethod: velocity must be defined");
        if (!r) throw new Error("KeyControlMethod: friction must be defined");
        n = n || document, this._keyCode = t, this._parameter = e, this._velocity = i, this._friction = r, this._element = n, this._keydownHandler = this._handlePress.bind(this), this._keyupHandler = this._handleRelease.bind(this), this._blurHandler = this._handleBlur.bind(this), this._element.addEventListener("keydown", this._keydownHandler), this._element.addEventListener("keyup", this._keyupHandler), window.addEventListener("blur", this._blurHandler), this._dynamics = new o(), this._pressing = !1;
      }

      r(s), s.prototype.destroy = function () {
        this._element.removeEventListener("keydown", this._keydownHandler), this._element.removeEventListener("keyup", this._keyupHandler), window.removeEventListener("blur", this._blurHandler), n(this);
      }, s.prototype._handlePress = function (t) {
        t.keyCode === this._keyCode && (this._pressing = !0, this._dynamics.velocity = this._velocity, this._dynamics.friction = 0, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("active"));
      }, s.prototype._handleRelease = function (t) {
        t.keyCode === this._keyCode && (this._pressing && (this._dynamics.friction = this._friction, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("inactive")), this._pressing = !1);
      }, s.prototype._handleBlur = function () {
        this._dynamics.velocity = 0, this.emit("parameterDynamics", this._parameter, this._dynamics), this.emit("inactive"), this._pressing = !1;
      }, e.exports = s;
    }, {
      "../util/clearOwnProperties": 76,
      "./Dynamics": 39,
      "minimal-event-emitter": 14
    }],
    43: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("./Dynamics"),
          o = t("./HammerGestures"),
          s = t("../util/clearOwnProperties");

      function a(t, e, i) {
        this._hammer = o.get(t, e), this._lastEvent = null, this._active = !1, this._dynamics = new n(), this._hammer.on("pinchstart", this._handleStart.bind(this)), this._hammer.on("pinch", this._handleEvent.bind(this)), this._hammer.on("pinchend", this._handleEnd.bind(this)), this._hammer.on("pinchcancel", this._handleEnd.bind(this));
      }

      r(a), a.prototype.destroy = function () {
        this._hammer.release(), s(this);
      }, a.prototype._handleStart = function () {
        this._active || (this._active = !0, this.emit("active"));
      }, a.prototype._handleEnd = function () {
        this._lastEvent = null, this._active && (this._active = !1, this.emit("inactive"));
      }, a.prototype._handleEvent = function (t) {
        var e = t.scale;
        this._lastEvent && (e /= this._lastEvent.scale), this._dynamics.offset = -1 * (e - 1), this.emit("parameterDynamics", "zoom", this._dynamics), this._lastEvent = t;
      }, e.exports = a;
    }, {
      "../util/clearOwnProperties": 76,
      "./Dynamics": 39,
      "./HammerGestures": 41,
      "minimal-event-emitter": 14
    }],
    44: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("./Dynamics"),
          o = t("./HammerGestures"),
          s = t("../util/defaults"),
          a = t("./util").maxFriction,
          u = t("../util/clearOwnProperties"),
          h = {
        speed: 8,
        friction: 6,
        maxFrictionTime: .3
      };

      function l(t, e, i) {
        this._element = t, this._opts = s(i || {}, h), this._active = !1, this._hammer = o.get(t, e), this._dynamics = {
          x: new n(),
          y: new n()
        }, this._hammer.on("panstart", this._handleStart.bind(this)), this._hammer.on("panmove", this._handleMove.bind(this)), this._hammer.on("panend", this._handleRelease.bind(this)), this._hammer.on("pancancel", this._handleRelease.bind(this));
      }

      r(l), l.prototype.destroy = function () {
        this._hammer.release(), u(this);
      }, l.prototype._handleStart = function (t) {
        t.preventDefault(), this._active || (this._active = !0, this.emit("active"));
      }, l.prototype._handleMove = function (t) {
        t.preventDefault(), this._updateDynamics(t, !1);
      }, l.prototype._handleRelease = function (t) {
        t.preventDefault(), this._updateDynamics(t, !0), this._active && (this._active = !1, this.emit("inactive"));
      };
      var c = [null, null];
      l.prototype._updateDynamics = function (t, e) {
        var i = this._element.getBoundingClientRect(),
            r = i.right - i.left,
            i = i.bottom - i.top,
            r = Math.max(r, i),
            i = t.deltaX / r * this._opts.speed,
            r = t.deltaY / r * this._opts.speed;

        this._dynamics.x.reset(), this._dynamics.y.reset(), this._dynamics.x.velocity = i, this._dynamics.y.velocity = r, e && (a(this._opts.friction, this._dynamics.x.velocity, this._dynamics.y.velocity, this._opts.maxFrictionTime, c), this._dynamics.x.friction = c[0], this._dynamics.y.friction = c[1]), this.emit("parameterDynamics", "x", this._dynamics.x), this.emit("parameterDynamics", "y", this._dynamics.y);
      }, e.exports = l;
    }, {
      "../util/clearOwnProperties": 76,
      "../util/defaults": 81,
      "./Dynamics": 39,
      "./HammerGestures": 41,
      "./util": 48,
      "minimal-event-emitter": 14
    }],
    45: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("./Dynamics"),
          o = t("../util/defaults"),
          s = t("../util/clearOwnProperties"),
          a = {
        frictionTime: .2,
        zoomDelta: .001
      };

      function u(t, e) {
        this._element = t, this._opts = o(e || {}, a), this._dynamics = new n(), this._eventList = [];
        e = this._opts.frictionTime ? this.withSmoothing : this.withoutSmoothing;
        this._wheelListener = e.bind(this), t.addEventListener("wheel", this._wheelListener);
      }

      function h(t) {
        var e = 1 == t.deltaMode ? 20 : 1;
        return t.deltaY * e;
      }

      r(u), u.prototype.destroy = function () {
        this._element.removeEventListener(this._wheelListener), s(this);
      }, u.prototype.withoutSmoothing = function (t) {
        this._dynamics.offset = h(t) * this._opts.zoomDelta, this.emit("parameterDynamics", "zoom", this._dynamics), t.preventDefault(), this.emit("active"), this.emit("inactive");
      }, u.prototype.withSmoothing = function (t) {
        var e = t.timeStamp;

        for (this._eventList.push(t); this._eventList[0].timeStamp < e - 1e3 * this._opts.frictionTime;) {
          this._eventList.shift(0);
        }

        for (var i = 0, r = 0; r < this._eventList.length; r++) {
          i += h(this._eventList[r]) * this._opts.zoomDelta / this._opts.frictionTime;
        }

        this._dynamics.velocity = i, this._dynamics.friction = Math.abs(i) / this._opts.frictionTime, this.emit("parameterDynamics", "zoom", this._dynamics), t.preventDefault(), this.emit("active"), this.emit("inactive");
      }, e.exports = u;
    }, {
      "../util/clearOwnProperties": 76,
      "../util/defaults": 81,
      "./Dynamics": 39,
      "minimal-event-emitter": 14
    }],
    46: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("./Dynamics"),
          o = t("../util/clearOwnProperties");

      function s(t) {
        if (!t) throw new Error("VelocityControlMethod: parameter must be defined");
        this._parameter = t, this._dynamics = new n();
      }

      r(s), s.prototype.destroy = function () {
        o(this);
      }, s.prototype.setVelocity = function (t) {
        this._dynamics.velocity = t, this.emit("parameterDynamics", this._parameter, this._dynamics);
      }, s.prototype.setFriction = function (t) {
        this._dynamics.friction = t, this.emit("parameterDynamics", this._parameter, this._dynamics);
      }, e.exports = s;
    }, {
      "../util/clearOwnProperties": 76,
      "./Dynamics": 39,
      "minimal-event-emitter": 14
    }],
    47: [function (t, e, i) {
      "use strict";

      var l = t("../util/defaults"),
          c = t("./Drag"),
          p = t("./Qtvr"),
          f = t("./ScrollZoom"),
          d = t("./PinchZoom"),
          m = t("./Key"),
          v = {
        mouseViewMode: "drag"
      };

      e.exports = function (t, e, i) {
        i = l(i || {}, v);
        var r = {
          mouseViewDrag: new c(e, "mouse"),
          mouseViewQtvr: new p(e, "mouse"),
          touchView: new c(e, "touch"),
          pinch: new d(e, "touch"),
          leftArrowKey: new m(37, "x", -.7, 3),
          rightArrowKey: new m(39, "x", .7, 3),
          upArrowKey: new m(38, "y", -.7, 3),
          downArrowKey: new m(40, "y", .7, 3),
          plusKey: new m(107, "zoom", -.7, 3),
          minusKey: new m(109, "zoom", .7, 3),
          wKey: new m(87, "y", -.7, 3),
          aKey: new m(65, "x", -.7, 3),
          sKey: new m(83, "y", .7, 3),
          dKey: new m(68, "x", .7, 3),
          qKey: new m(81, "roll", .7, 3),
          eKey: new m(69, "roll", -.7, 3)
        };
        !1 !== i.scrollZoom && (r.scrollZoom = new f(e));
        var n,
            o,
            s = {
          arrowKeys: ["leftArrowKey", "rightArrowKey", "upArrowKey", "downArrowKey"],
          plusMinusKeys: ["plusKey", "minusKey"],
          wasdKeys: ["wKey", "aKey", "sKey", "dKey"],
          qeKeys: ["qKey", "eKey"]
        },
            a = ["scrollZoom", "touchView", "pinch"];

        switch (i.mouseViewMode) {
          case "drag":
            a.push("mouseViewDrag");
            break;

          case "qtvr":
            a.push("mouseViewQtvr");
            break;

          default:
            throw new Error("Unknown mouse view mode: " + i.mouseViewMode);
        }

        for (n in r) {
          var u = r[n];
          t.registerMethod(n, u), 0 <= a.indexOf(n) && t.enableMethod(n);
        }

        for (o in s) {
          var h = s[o];
          t.addMethodGroup(o, h);
        }

        return r;
      };
    }, {
      "../util/defaults": 81,
      "./Drag": 38,
      "./Key": 42,
      "./PinchZoom": 43,
      "./Qtvr": 44,
      "./ScrollZoom": 45
    }],
    48: [function (t, e, i) {
      "use strict";

      function s(t, e, i, r) {
        t = Math.atan(e / t);
        r[0] = i * Math.cos(t), r[1] = i * Math.sin(t);
      }

      e.exports = {
        maxFriction: function maxFriction(t, e, i, r, n) {
          var o = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2));
          s(e, i, t = Math.max(t, o / r), n), n[0] = Math.abs(n[0]), n[1] = Math.abs(n[1]);
        },
        changeVectorNorm: s
      };
    }, {}],
    49: [function (t, e, i) {
      "use strict";

      var r = t("../util/inherits"),
          n = t("../util/hash"),
          o = t("../TileSearcher"),
          s = t("../collections/LruMap"),
          a = t("./Level"),
          u = t("./common").makeLevelList,
          h = t("./common").makeSelectableLevelList,
          y = t("../util/clamp"),
          l = t("../util/cmp"),
          c = t("../util/type"),
          g = t("gl-matrix").vec3,
          p = t("gl-matrix").vec4,
          f = "fudlrb",
          M = {
        f: {
          x: 0,
          y: 0
        },
        b: {
          x: 0,
          y: Math.PI
        },
        l: {
          x: 0,
          y: Math.PI / 2
        },
        r: {
          x: 0,
          y: -Math.PI / 2
        },
        u: {
          x: Math.PI / 2,
          y: 0
        },
        d: {
          x: -Math.PI / 2,
          y: 0
        }
      },
          d = g.create();

      function w(t, e, i, r) {
        e && g.rotateZ(t, t, d, e), i && g.rotateX(t, t, d, i), r && g.rotateY(t, t, d, r);
      }

      for (var m = {}, v = 0; v < f.length; v++) {
        var _ = f[v],
            b = M[_],
            x = g.fromValues(0, 0, -1);
        w(x, 0, b.x, b.y), m[_] = x;
      }

      var E = {
        f: ["l", "r", "u", "d"],
        b: ["r", "l", "u", "d"],
        l: ["b", "f", "u", "d"],
        r: ["f", "b", "u", "d"],
        u: ["l", "r", "b", "f"],
        d: ["l", "r", "f", "b"]
      },
          P = [[0, 1], [1, 0], [0, -1], [-1, 0]];

      function S(t, e, i, r, n) {
        this.face = t, this.x = e, this.y = i, this.z = r, this._geometry = n, this._level = n.levelList[r];
      }

      function T(t) {
        if (this.constructor.super_.call(this, t), this._size = t.size, this._tileSize = t.tileSize, this._size % this._tileSize != 0) throw new Error("Level size is not multiple of tile size: " + this._size + " " + this._tileSize);
      }

      function L(t) {
        if ("array" !== c(t)) throw new Error("Level list must be an array");
        this.levelList = u(t, T), this.selectableLevelList = h(this.levelList);

        for (var e = 1; e < this.levelList.length; e++) {
          this.levelList[e]._validateWithParentLevel(this.levelList[e - 1]);
        }

        this._tileSearcher = new o(this), this._neighborsCache = new s(64), this._vec = p.create(), this._viewSize = {};
      }

      S.prototype.rotX = function () {
        return M[this.face].x;
      }, S.prototype.rotY = function () {
        return M[this.face].y;
      }, S.prototype.centerX = function () {
        return (this.x + .5) / this._level.numHorizontalTiles() - .5;
      }, S.prototype.centerY = function () {
        return .5 - (this.y + .5) / this._level.numVerticalTiles();
      }, S.prototype.scaleX = function () {
        return 1 / this._level.numHorizontalTiles();
      }, S.prototype.scaleY = function () {
        return 1 / this._level.numVerticalTiles();
      }, S.prototype.vertices = function (t) {
        t = t || [g.create(), g.create(), g.create(), g.create()];
        var r = M[this.face];

        function e(t, e, i) {
          g.set(t, e, i, -.5), w(t, 0, r.x, r.y);
        }

        var i = this.centerX() - this.scaleX() / 2,
            n = this.centerX() + this.scaleX() / 2,
            o = this.centerY() - this.scaleY() / 2,
            s = this.centerY() + this.scaleY() / 2;
        return e(t[0], i, s), e(t[1], n, s), e(t[2], n, o), e(t[3], i, o), t;
      }, S.prototype.parent = function () {
        if (0 === this.z) return null;
        var t = this.face,
            e = this.z,
            i = this.x,
            r = this.y,
            n = this._geometry,
            o = n.levelList[e],
            s = n.levelList[e - 1];
        return new S(t, Math.floor(i / o.numHorizontalTiles() * s.numHorizontalTiles()), Math.floor(r / o.numVerticalTiles() * s.numVerticalTiles()), e - 1, n);
      }, S.prototype.children = function (t) {
        if (this.z === this._geometry.levelList.length - 1) return null;
        var e = this.face,
            i = this.z,
            r = this.x,
            n = this.y,
            o = this._geometry,
            s = o.levelList[i],
            a = o.levelList[i + 1],
            u = a.numHorizontalTiles() / s.numHorizontalTiles(),
            h = a.numVerticalTiles() / s.numVerticalTiles();
        t = t || [];

        for (var l = 0; l < u; l++) {
          for (var c = 0; c < h; c++) {
            var p = u * r + l,
                f = h * n + c,
                d = i + 1;
            t.push(new S(e, p, f, d, o));
          }
        }

        return t;
      }, S.prototype.neighbors = function () {
        var t = this._geometry,
            e = t._neighborsCache,
            i = e.get(this);
        if (i) return i;

        for (var r = t._vec, n = this.face, o = this.x, s = this.y, a = this.z, i = this._level, u = i.numHorizontalTiles(), h = i.numVerticalTiles(), l = [], c = 0; c < P.length; c++) {
          var p,
              f,
              d = o + P[c][0],
              m = s + P[c][1],
              v = a,
              _ = n;
          (d < 0 || u <= d || m < 0 || h <= m) && (f = this.centerX(), p = this.centerY(), d < 0 ? (g.set(r, -.5, p, -.5), _ = E[n][0]) : u <= d ? (g.set(r, .5, p, -.5), _ = E[n][1]) : m < 0 ? (g.set(r, f, .5, -.5), _ = E[n][2]) : h <= m && (g.set(r, f, -.5, -.5), _ = E[n][3]), w(r, 0, (f = M[n]).x, f.y), w(r, 0, -(f = M[_]).x, -f.y), d = y(Math.floor((.5 + r[0]) * u), 0, u - 1), m = y(Math.floor((.5 - r[1]) * h), 0, h - 1)), l.push(new S(_, d, m, v, t));
        }

        return e.set(this, l), l;
      }, S.prototype.hash = function () {
        return n(f.indexOf(this.face), this.z, this.y, this.x);
      }, S.prototype.equals = function (t) {
        return this._geometry === t._geometry && this.face === t.face && this.z === t.z && this.y === t.y && this.x === t.x;
      }, S.prototype.cmp = function (t) {
        return l(this.z, t.z) || l(f.indexOf(this.face), f.indexOf(t.face)) || l(this.y, t.y) || l(this.x, t.x);
      }, S.prototype.str = function () {
        return "CubeTile(" + tile.face + ", " + tile.x + ", " + tile.y + ", " + tile.z + ")";
      }, r(T, a), T.prototype.width = function () {
        return this._size;
      }, T.prototype.height = function () {
        return this._size;
      }, T.prototype.tileWidth = function () {
        return this._tileSize;
      }, T.prototype.tileHeight = function () {
        return this._tileSize;
      }, T.prototype._validateWithParentLevel = function (t) {
        var e = this.width(),
            i = this.height(),
            r = this.tileWidth(),
            n = this.tileHeight(),
            o = this.numHorizontalTiles(),
            s = this.numVerticalTiles(),
            a = t.width(),
            u = t.height(),
            h = t.tileWidth(),
            l = t.tileHeight(),
            c = t.numHorizontalTiles(),
            t = t.numVerticalTiles();
        if (e % a != 0) throw new Error("Level width must be multiple of parent level: " + e + " vs. " + a);
        if (i % u != 0) throw new Error("Level height must be multiple of parent level: " + i + " vs. " + u);
        if (o % c != 0) throw new Error("Number of horizontal tiles must be multiple of parent level: " + o + " (" + e + "/" + r + ") vs. " + c + " (" + a + "/" + h + ")");
        if (s % t != 0) throw new Error("Number of vertical tiles must be multiple of parent level: " + s + " (" + i + "/" + n + ") vs. " + t + " (" + u + "/" + l + ")");
      }, L.prototype.maxTileSize = function () {
        for (var t = 0, e = 0; e < this.levelList.length; e++) {
          var i = this.levelList[e],
              t = Math.max(t, i.tileWidth, i.tileHeight);
        }

        return t;
      }, L.prototype.levelTiles = function (t, e) {
        var i = this.levelList.indexOf(t),
            r = t.numHorizontalTiles() - 1,
            n = t.numVerticalTiles() - 1;
        e = e || [];

        for (var o = 0; o < f.length; o++) {
          for (var s = f[o], a = 0; a <= r; a++) {
            for (var u = 0; u <= n; u++) {
              e.push(new S(s, a, u, i, this));
            }
          }
        }

        return e;
      }, L.prototype._closestTile = function (t, e) {
        var i = this._vec;
        p.set(i, 0, 0, 1, 1), p.transformMat4(i, i, t.inverseProjection());
        var r,
            n = 1 / 0,
            o = null;

        for (r in m) {
          var s = m[r],
              s = 1 - g.dot(s, i);
          s < n && (n = s, o = r);
        }

        for (var a = Math.max(Math.abs(i[0]), Math.abs(i[1]), Math.abs(i[2])) / .5, u = 0; u < 3; u++) {
          i[u] = i[u] / a;
        }

        var h = M[o];
        w(i, 0, -h.x, -h.y);
        t = this.levelList.indexOf(e), h = e.numHorizontalTiles(), e = e.numVerticalTiles();
        return new S(o, y(Math.floor((.5 + i[0]) * h), 0, h - 1), y(Math.floor((.5 - i[1]) * e), 0, e - 1), t, this);
      }, L.prototype.visibleTiles = function (t, e, i) {
        var r = this._viewSize,
            n = this._tileSearcher;
        if (i = i || [], t.size(r), 0 === r.width || 0 === r.height) return i;
        e = this._closestTile(t, e);
        if (!n.search(t, e, i)) throw new Error("Starting tile is not visible");
        return i;
      }, L.Tile = L.prototype.Tile = S, L.type = L.prototype.type = "cube", S.type = S.prototype.type = "cube", e.exports = L;
    }, {
      "../TileSearcher": 22,
      "../collections/LruMap": 28,
      "../util/clamp": 75,
      "../util/cmp": 77,
      "../util/hash": 88,
      "../util/inherits": 89,
      "../util/type": 101,
      "./Level": 52,
      "./common": 53,
      "gl-matrix": 3
    }],
    50: [function (t, e, i) {
      "use strict";

      var r = t("../util/inherits"),
          n = t("../util/hash"),
          o = t("../util/cmp"),
          s = t("./common"),
          a = t("./Level"),
          u = t("../util/type");

      function h(t, e) {
        this.z = t, this._geometry = e, this._level = e.levelList[t];
      }

      function l(t) {
        this.constructor.super_.call(this, t), this._width = t.width;
      }

      function c(t) {
        if ("array" !== u(t)) throw new Error("Level list must be an array");
        this.levelList = s.makeLevelList(t, l), this.selectableLevelList = s.makeSelectableLevelList(this.levelList);
      }

      h.prototype.rotX = function () {
        return 0;
      }, h.prototype.rotY = function () {
        return 0;
      }, h.prototype.centerX = function () {
        return .5;
      }, h.prototype.centerY = function () {
        return .5;
      }, h.prototype.scaleX = function () {
        return 1;
      }, h.prototype.scaleY = function () {
        return 1;
      }, h.prototype.parent = function () {
        return 0 === this.z ? null : new h(this.z - 1, this._geometry);
      }, h.prototype.children = function (t) {
        return this.z === this._geometry.levelList.length - 1 ? null : ((t = t || []).push(new h(this.z + 1, this._geometry)), t);
      }, h.prototype.neighbors = function () {
        return [];
      }, h.prototype.hash = function () {
        return n(this.z);
      }, h.prototype.equals = function (t) {
        return this._geometry === t._geometry && this.z === t.z;
      }, h.prototype.cmp = function (t) {
        return o(this.z, t.z);
      }, h.prototype.str = function () {
        return "EquirectTile(" + tile.z + ")";
      }, r(l, a), l.prototype.width = function () {
        return this._width;
      }, l.prototype.height = function () {
        return this._width / 2;
      }, l.prototype.tileWidth = function () {
        return this._width;
      }, l.prototype.tileHeight = function () {
        return this._width / 2;
      }, c.prototype.maxTileSize = function () {
        for (var t = 0, e = 0; e < this.levelList.length; e++) {
          var i = this.levelList[e],
              t = Math.max(t, i.tileWidth, i.tileHeight);
        }

        return t;
      }, c.prototype.levelTiles = function (t, e) {
        t = this.levelList.indexOf(t);
        return (e = e || []).push(new h(t, this)), e;
      }, c.prototype.visibleTiles = function (t, e, i) {
        e = new h(this.levelList.indexOf(e), this);
        (i = i || []).length = 0, i.push(e);
      }, c.Tile = c.prototype.Tile = h, c.type = c.prototype.type = "equirect", h.type = h.prototype.type = "equirect", e.exports = c;
    }, {
      "../util/cmp": 77,
      "../util/hash": 88,
      "../util/inherits": 89,
      "../util/type": 101,
      "./Level": 52,
      "./common": 53
    }],
    51: [function (t, e, i) {
      "use strict";

      var r = t("../util/inherits"),
          n = t("../util/hash"),
          o = t("../TileSearcher"),
          s = t("../collections/LruMap"),
          a = t("./Level"),
          u = t("./common").makeLevelList,
          h = t("./common").makeSelectableLevelList,
          l = t("../util/clamp"),
          c = t("../util/mod"),
          p = t("../util/cmp"),
          f = t("../util/type"),
          d = t("gl-matrix").vec2,
          m = t("gl-matrix").vec4,
          v = [[0, 1], [1, 0], [0, -1], [-1, 0]];

      function _(t, e, i, r) {
        this.x = t, this.y = e, this.z = i, this._geometry = r, this._level = r.levelList[i];
      }

      function y(t) {
        this.constructor.super_.call(this, t), this._width = t.width, this._height = t.height, this._tileWidth = t.tileWidth, this._tileHeight = t.tileHeight;
      }

      function g(t) {
        if ("array" !== f(t)) throw new Error("Level list must be an array");
        this.levelList = u(t, y), this.selectableLevelList = h(this.levelList);

        for (var e = 1; e < this.levelList.length; e++) {
          this.levelList[e]._validateWithParentLevel(this.levelList[e - 1]);
        }

        this._tileSearcher = new o(this), this._neighborsCache = new s(64), this._vec = m.create(), this._viewSize = {};
      }

      _.prototype.rotX = function () {
        return 0;
      }, _.prototype.rotY = function () {
        return 0;
      }, _.prototype.centerX = function () {
        var t = this._level.width(),
            e = this._level.tileWidth();

        return (this.x * e + .5 * this.width()) / t - .5;
      }, _.prototype.centerY = function () {
        var t = this._level.height(),
            e = this._level.tileHeight();

        return .5 - (this.y * e + .5 * this.height()) / t;
      }, _.prototype.scaleX = function () {
        var t = this._level.width();

        return this.width() / t;
      }, _.prototype.scaleY = function () {
        var t = this._level.height();

        return this.height() / t;
      }, _.prototype.width = function () {
        var t = this._level.width(),
            e = this._level.tileWidth();

        return this.x === this._level.numHorizontalTiles() - 1 && c(t, e) || e;
      }, _.prototype.height = function () {
        var t = this._level.height(),
            e = this._level.tileHeight();

        return this.y === this._level.numVerticalTiles() - 1 && c(t, e) || e;
      }, _.prototype.levelWidth = function () {
        return this._level.width();
      }, _.prototype.levelHeight = function () {
        return this._level.height();
      }, _.prototype.vertices = function (t) {
        t = t || [d.create(), d.create(), d.create(), d.create()];
        var e = this.centerX() - this.scaleX() / 2,
            i = this.centerX() + this.scaleX() / 2,
            r = this.centerY() - this.scaleY() / 2,
            n = this.centerY() + this.scaleY() / 2;
        return d.set(t[0], e, n), d.set(t[1], i, n), d.set(t[2], i, r), d.set(t[3], e, r), t;
      }, _.prototype.parent = function () {
        if (0 === this.z) return null;
        var t = this._geometry,
            e = this.z - 1;
        return new _(Math.floor(this.x / 2), Math.floor(this.y / 2), e, t);
      }, _.prototype.children = function (t) {
        if (this.z === this._geometry.levelList.length - 1) return null;
        var e = this._geometry,
            i = this.z + 1;
        return (t = t || []).push(new _(2 * this.x, 2 * this.y, i, e)), t.push(new _(2 * this.x, 2 * this.y + 1, i, e)), t.push(new _(2 * this.x + 1, 2 * this.y, i, e)), t.push(new _(2 * this.x + 1, 2 * this.y + 1, i, e)), t;
      }, _.prototype.neighbors = function () {
        var t = this._geometry,
            e = t._neighborsCache,
            i = e.get(this);
        if (i) return i;

        for (var r = this.x, n = this.y, o = this.z, i = this._level, s = i.numHorizontalTiles() - 1, a = i.numVerticalTiles() - 1, u = [], h = 0; h < v.length; h++) {
          var l = r + v[h][0],
              c = n + v[h][1];
          0 <= l && l <= s && 0 <= c && c <= a && u.push(new _(l, c, o, t));
        }

        return e.set(this, u), u;
      }, _.prototype.hash = function () {
        return n(this.z, this.y, this.x);
      }, _.prototype.equals = function (t) {
        return this._geometry === t._geometry && this.z === t.z && this.y === t.y && this.x === t.x;
      }, _.prototype.cmp = function (t) {
        return p(this.z, t.z) || p(this.y, t.y) || p(this.x, t.x);
      }, _.prototype.str = function () {
        return "FlatTile(" + tile.x + ", " + tile.y + ", " + tile.z + ")";
      }, r(y, a), y.prototype.width = function () {
        return this._width;
      }, y.prototype.height = function () {
        return this._height;
      }, y.prototype.tileWidth = function () {
        return this._tileWidth;
      }, y.prototype.tileHeight = function () {
        return this._tileHeight;
      }, y.prototype._validateWithParentLevel = function (t) {
        var e = this.width(),
            i = this.height(),
            r = this.tileWidth(),
            n = this.tileHeight(),
            o = t.width(),
            s = t.height(),
            a = t.tileWidth(),
            t = t.tileHeight();
        return e % o != 0 ? new Error("Level width must be multiple of parent level: " + e + " vs. " + o) : i % s != 0 ? new Error("Level height must be multiple of parent level: " + i + " vs. " + s) : r % a != 0 ? new Error("Level tile width must be multiple of parent level: " + r + " vs. " + a) : n % t != 0 ? new Error("Level tile height must be multiple of parent level: " + n + " vs. " + t) : void 0;
      }, g.prototype.maxTileSize = function () {
        for (var t = 0, e = 0; e < this.levelList.length; e++) {
          var i = this.levelList[e],
              t = Math.max(t, i.tileWidth, i.tileHeight);
        }

        return t;
      }, g.prototype.levelTiles = function (t, e) {
        var i = this.levelList.indexOf(t),
            r = t.numHorizontalTiles() - 1,
            n = t.numVerticalTiles() - 1;
        e = e || [];

        for (var o = 0; o <= r; o++) {
          for (var s = 0; s <= n; s++) {
            e.push(new _(o, s, i, this));
          }
        }

        return e;
      }, g.prototype._closestTile = function (t, e) {
        var i = this._vec;
        m.set(i, 0, 0, 1, 1), m.transformMat4(i, i, t.inverseProjection());
        var r = .5 + i[0],
            n = .5 - i[1],
            o = this.levelList.indexOf(e),
            s = e.width(),
            a = e.height(),
            u = e.tileWidth(),
            t = e.tileHeight(),
            i = e.numHorizontalTiles(),
            e = e.numVerticalTiles();
        return new _(l(Math.floor(r * s / u), 0, i - 1), l(Math.floor(n * a / t), 0, e - 1), o, this);
      }, g.prototype.visibleTiles = function (t, e, i) {
        var r = this._viewSize,
            n = this._tileSearcher;
        if (i = i || [], t.size(r), 0 === r.width || 0 === r.height) return i;
        e = this._closestTile(t, e);
        if (!n.search(t, e, i)) throw new Error("Starting tile is not visible");
        return i;
      }, g.Tile = g.prototype.Tile = _, g.type = g.prototype.type = "flat", _.type = _.prototype.type = "flat", e.exports = g;
    }, {
      "../TileSearcher": 22,
      "../collections/LruMap": 28,
      "../util/clamp": 75,
      "../util/cmp": 77,
      "../util/hash": 88,
      "../util/inherits": 89,
      "../util/mod": 91,
      "../util/type": 101,
      "./Level": 52,
      "./common": 53,
      "gl-matrix": 3
    }],
    52: [function (t, e, i) {
      "use strict";

      function r(t) {
        this._fallbackOnly = !!t.fallbackOnly;
      }

      r.prototype.numHorizontalTiles = function () {
        return Math.ceil(this.width() / this.tileWidth());
      }, r.prototype.numVerticalTiles = function () {
        return Math.ceil(this.height() / this.tileHeight());
      }, r.prototype.fallbackOnly = function () {
        return this._fallbackOnly;
      }, e.exports = r;
    }, {}],
    53: [function (t, e, i) {
      "use strict";

      var n = t("../util/cmp");
      e.exports = {
        makeLevelList: function makeLevelList(t, e) {
          for (var i = [], r = 0; r < t.length; r++) {
            i.push(new e(t[r]));
          }

          return i.sort(function (t, e) {
            return n(t.width(), e.width());
          }), i;
        },
        makeSelectableLevelList: function makeSelectableLevelList(t) {
          for (var e = [], i = 0; i < t.length; i++) {
            t[i]._fallbackOnly || e.push(t[i]);
          }

          if (!e.length) throw new Error("No selectable levels in list");
          return e;
        }
      };
    }, {
      "../util/cmp": 77
    }],
    54: [function (t, e, i) {
      "use strict";

      e.exports = {
        WebGlStage: t("./stages/WebGl"),
        WebGlCubeRenderer: t("./renderers/WebGlCube"),
        WebGlFlatRenderer: t("./renderers/WebGlFlat"),
        WebGlEquirectRenderer: t("./renderers/WebGlEquirect"),
        registerDefaultRenderers: t("./renderers/registerDefaultRenderers"),
        CubeGeometry: t("./geometries/Cube"),
        FlatGeometry: t("./geometries/Flat"),
        EquirectGeometry: t("./geometries/Equirect"),
        RectilinearView: t("./views/Rectilinear"),
        FlatView: t("./views/Flat"),
        ImageUrlSource: t("./sources/ImageUrl"),
        SingleAssetSource: t("./sources/SingleAsset"),
        StaticAsset: t("./assets/Static"),
        DynamicAsset: t("./assets/Dynamic"),
        TextureStore: t("./TextureStore"),
        Layer: t("./Layer"),
        RenderLoop: t("./RenderLoop"),
        KeyControlMethod: t("./controls/Key"),
        DragControlMethod: t("./controls/Drag"),
        QtvrControlMethod: t("./controls/Qtvr"),
        ScrollZoomControlMethod: t("./controls/ScrollZoom"),
        PinchZoomControlMethod: t("./controls/PinchZoom"),
        VelocityControlMethod: t("./controls/Velocity"),
        ElementPressControlMethod: t("./controls/ElementPress"),
        Controls: t("./controls/Controls"),
        Dynamics: t("./controls/Dynamics"),
        Viewer: t("./Viewer"),
        Scene: t("./Scene"),
        Hotspot: t("./Hotspot"),
        HotspotContainer: t("./HotspotContainer"),
        colorEffects: t("./colorEffects"),
        registerDefaultControls: t("./controls/registerDefaultControls"),
        autorotate: t("./autorotate"),
        util: {
          async: t("./util/async"),
          cancelize: t("./util/cancelize"),
          chain: t("./util/chain"),
          clamp: t("./util/clamp"),
          clearOwnProperties: t("./util/clearOwnProperties"),
          cmp: t("./util/cmp"),
          compose: t("./util/compose"),
          convertFov: t("./util/convertFov"),
          decimal: t("./util/decimal"),
          defaults: t("./util/defaults"),
          defer: t("./util/defer"),
          degToRad: t("./util/degToRad"),
          delay: t("./util/delay"),
          dom: t("./util/dom"),
          extend: t("./util/extend"),
          hash: t("./util/hash"),
          inherits: t("./util/inherits"),
          mod: t("./util/mod"),
          noop: t("./util/noop"),
          now: t("./util/now"),
          once: t("./util/once"),
          pixelRatio: t("./util/pixelRatio"),
          radToDeg: t("./util/radToDeg"),
          real: t("./util/real"),
          retry: t("./util/retry"),
          tween: t("./util/tween"),
          type: t("./util/type")
        },
        dependencies: {
          bowser: t("bowser"),
          glMatrix: t("gl-matrix"),
          eventEmitter: t("minimal-event-emitter"),
          hammerjs: t("hammerjs")
        }
      };
    }, {
      "./Hotspot": 15,
      "./HotspotContainer": 16,
      "./Layer": 17,
      "./RenderLoop": 19,
      "./Scene": 20,
      "./TextureStore": 21,
      "./Viewer": 24,
      "./assets/Dynamic": 25,
      "./assets/Static": 26,
      "./autorotate": 27,
      "./colorEffects": 34,
      "./controls/Controls": 37,
      "./controls/Drag": 38,
      "./controls/Dynamics": 39,
      "./controls/ElementPress": 40,
      "./controls/Key": 42,
      "./controls/PinchZoom": 43,
      "./controls/Qtvr": 44,
      "./controls/ScrollZoom": 45,
      "./controls/Velocity": 46,
      "./controls/registerDefaultControls": 47,
      "./geometries/Cube": 49,
      "./geometries/Equirect": 50,
      "./geometries/Flat": 51,
      "./renderers/WebGlCube": 58,
      "./renderers/WebGlEquirect": 59,
      "./renderers/WebGlFlat": 60,
      "./renderers/registerDefaultRenderers": 61,
      "./sources/ImageUrl": 66,
      "./sources/SingleAsset": 67,
      "./stages/WebGl": 70,
      "./util/async": 71,
      "./util/cancelize": 73,
      "./util/chain": 74,
      "./util/clamp": 75,
      "./util/clearOwnProperties": 76,
      "./util/cmp": 77,
      "./util/compose": 78,
      "./util/convertFov": 79,
      "./util/decimal": 80,
      "./util/defaults": 81,
      "./util/defer": 82,
      "./util/degToRad": 83,
      "./util/delay": 84,
      "./util/dom": 85,
      "./util/extend": 86,
      "./util/hash": 88,
      "./util/inherits": 89,
      "./util/mod": 91,
      "./util/noop": 92,
      "./util/now": 93,
      "./util/once": 94,
      "./util/pixelRatio": 95,
      "./util/radToDeg": 97,
      "./util/real": 98,
      "./util/retry": 99,
      "./util/tween": 100,
      "./util/type": 101,
      "./views/Flat": 102,
      "./views/Rectilinear": 103,
      bowser: 1,
      "gl-matrix": 3,
      hammerjs: 13,
      "minimal-event-emitter": 14
    }],
    55: [function (t, e, i) {
      "use strict";

      var a = t("../assets/Static"),
          r = t("../NetworkError"),
          u = t("../util/global"),
          h = t("../util/once"),
          l = {
        imageOrientation: "flipY",
        premultiplyAlpha: "premultiply",
        resizeQuality: "high"
      };

      function n(t) {
        this._stage = t;
      }

      n.prototype.loadImage = function (t, e, i) {
        var r = this,
            n = new Image();
        n.crossOrigin = "anonymous";
        var o = e && e.x || 0,
            s = e && e.y || 0,
            a = e && e.width || 1,
            u = e && e.height || 1;
        return i = h(i), n.onload = function () {
          r._handleLoad(n, o, s, a, u, i);
        }, n.onerror = function () {
          r._handleError(t, i);
        }, n.src = t, function () {
          n.onload = n.onerror = null, n.src = "", i.apply(null, arguments);
        };
      }, n.prototype._handleLoad = function (t, e, i, r, n, o) {
        var s;
        0 !== e || 0 !== i || 1 !== r || 1 !== n ? (e *= t.naturalWidth, i *= t.naturalHeight, r *= t.naturalWidth, n *= t.naturalHeight, u.createImageBitmap ? u.createImageBitmap(t, e, i, r, n, l).then(function (t) {
          o(null, new a(t));
        }) : ((s = document.createElement("canvas")).width = r, s.height = n, s.getContext("2d").drawImage(t, e, i, r, n, 0, 0, r, n), o(null, new a(s)))) : o(null, new a(t));
      }, n.prototype._handleError = function (t, e) {
        e(new r("Network error: " + t));
      }, e.exports = n;
    }, {
      "../NetworkError": 18,
      "../assets/Static": 26,
      "../util/global": 87,
      "../util/once": 94
    }],
    56: [function (t, e, i) {
      "use strict";

      var l = t("gl-matrix").mat4,
          r = t("gl-matrix").vec3,
          n = t("../util/clearOwnProperties"),
          o = t("./WebGlCommon"),
          s = o.createConstantBuffers,
          a = o.destroyConstantBuffers,
          u = o.createShaderProgram,
          h = o.destroyShaderProgram,
          c = o.enableAttributes,
          p = o.disableAttributes,
          f = o.setViewport,
          d = o.setupPixelEffectUniforms,
          m = o.setDepth,
          v = o.setTexture,
          _ = t("../shaders/vertexNormal"),
          y = t("../shaders/fragmentNormal"),
          g = [0, 1, 2, 0, 2, 3],
          M = [-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0],
          w = [0, 0, 1, 0, 1, 1, 0, 1],
          b = ["aVertexPosition", "aTextureCoord"],
          x = ["uDepth", "uOpacity", "uSampler", "uProjMatrix", "uViewportMatrix", "uColorOffset", "uColorMatrix"];

      function E(t) {
        this.gl = t, this.projMatrix = l.create(), this.viewportMatrix = l.create(), this.translateVector = r.create(), this.scaleVector = r.create(), this.constantBuffers = s(t, g, M, w), this.shaderProgram = u(t, _, y, b, x);
      }

      E.prototype.destroy = function () {
        a(this.gl, this.constantBuffers), h(this.gl, this.shaderProgram), n(this);
      }, E.prototype.startLayer = function (t, e) {
        var i = this.gl,
            r = this.shaderProgram,
            n = this.constantBuffers,
            o = this.viewportMatrix;
        i.useProgram(r), c(i, r), f(i, t, e, o), i.uniformMatrix4fv(r.uViewportMatrix, !1, o), i.bindBuffer(i.ARRAY_BUFFER, n.vertexPositions), i.vertexAttribPointer(r.aVertexPosition, 3, i.FLOAT, i.FALSE, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, n.textureCoords), i.vertexAttribPointer(r.aTextureCoord, 2, i.FLOAT, i.FALSE, 0, 0), d(i, t.effects(), {
          opacity: r.uOpacity,
          colorOffset: r.uColorOffset,
          colorMatrix: r.uColorMatrix
        });
      }, E.prototype.endLayer = function (t, e) {
        var i = this.gl,
            r = this.shaderProgram;
        p(i, r);
      }, E.prototype.renderTile = function (t, e, i, r) {
        var n = this.gl,
            o = this.shaderProgram,
            s = this.constantBuffers,
            a = this.projMatrix,
            u = this.translateVector,
            h = this.scaleVector;
        u[0] = t.centerX(), u[1] = t.centerY(), u[2] = -.5, h[0] = t.scaleX(), h[1] = t.scaleY(), h[2] = 1, l.copy(a, i.view().projection()), l.rotateX(a, a, t.rotX()), l.rotateY(a, a, t.rotY()), l.translate(a, a, u), l.scale(a, a, h), n.uniformMatrix4fv(o.uProjMatrix, !1, a), m(n, o, r, t.z), v(n, o, e), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, s.vertexIndices), n.drawElements(n.TRIANGLES, g.length, n.UNSIGNED_SHORT, 0);
      }, e.exports = E;
    }, {
      "../shaders/fragmentNormal": 63,
      "../shaders/vertexNormal": 65,
      "../util/clearOwnProperties": 76,
      "./WebGlCommon": 57,
      "gl-matrix": 3
    }],
    57: [function (t, e, i) {
      "use strict";

      var p = t("../util/clamp"),
          r = t("gl-matrix").vec4,
          f = t("gl-matrix").vec3,
          d = t("gl-matrix").mat4;

      function l(t, e, i) {
        e = t.createShader(e);
        if (t.shaderSource(e, i), t.compileShader(e), !t.getShaderParameter(e, t.COMPILE_STATUS)) throw t.getShaderInfoLog(e);
        return e;
      }

      function n(t, e, i, r) {
        var n = t.createBuffer();
        return t.bindBuffer(e, n), t.bufferData(e, r, i), n;
      }

      var o = r.create(),
          s = d.create();
      d.identity(s);
      var m = f.create(),
          v = f.create();
      e.exports = {
        createShaderProgram: function createShaderProgram(t, e, i, r, n) {
          var e = l(t, t.VERTEX_SHADER, e),
              i = l(t, t.FRAGMENT_SHADER, i),
              o = t.createProgram();
          if (t.attachShader(o, e), t.attachShader(o, i), t.linkProgram(o), !t.getProgramParameter(o, t.LINK_STATUS)) throw t.getProgramInfoLog(o);

          for (var s = 0; s < r.length; s++) {
            var a = r[s];
            if (o[a] = t.getAttribLocation(o, a), -1 === o[a]) throw new Error("Shader program has no " + a + " attribute");
          }

          for (var u = 0; u < n.length; u++) {
            var h = n[u];
            if (o[h] = t.getUniformLocation(o, h), -1 === o[h]) throw new Error("Shader program has no " + h + " uniform");
          }

          return o;
        },
        destroyShaderProgram: function destroyShaderProgram(t, e) {
          for (var i = t.getAttachedShaders(e), r = 0; r < i.length; r++) {
            var n = i[r];
            t.detachShader(e, n), t.deleteShader(n);
          }

          t.deleteProgram(e);
        },
        createConstantBuffers: function createConstantBuffers(t, e, i, r) {
          return {
            vertexIndices: n(t, t.ELEMENT_ARRAY_BUFFER, t.STATIC_DRAW, new Uint16Array(e)),
            vertexPositions: n(t, t.ARRAY_BUFFER, t.STATIC_DRAW, new Float32Array(i)),
            textureCoords: n(t, t.ARRAY_BUFFER, t.STATIC_DRAW, new Float32Array(r))
          };
        },
        destroyConstantBuffers: function destroyConstantBuffers(t, e) {
          t.deleteBuffer(e.vertexIndices), t.deleteBuffer(e.vertexPositions), t.deleteBuffer(e.textureCoords);
        },
        enableAttributes: function enableAttributes(t, e) {
          for (var i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < i; r++) {
            t.enableVertexAttribArray(r);
          }
        },
        disableAttributes: function disableAttributes(t, e) {
          for (var i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), r = 0; r < i; r++) {
            t.disableVertexAttribArray(r);
          }
        },
        setTexture: function setTexture(t, e, i) {
          t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, i._texture), t.uniform1i(e.uSampler, 0);
        },
        setDepth: function setDepth(t, e, i, r) {
          r = (256 * (i + 1) - r) / 65536, t.uniform1f(e.uDepth, r);
        },
        setViewport: function setViewport(t, e, i, r) {
          if (0 === i.x && 1 === i.width && 0 === i.y && 1 === i.height) return t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight), void d.identity(r);
          var n = i.x,
              o = p(n, 0, 1),
              s = o - n,
              a = 1 - o,
              u = p(i.width - s, 0, a),
              h = i.width - u,
              l = 1 - i.height - i.y,
              c = p(l, 0, 1),
              n = c - l,
              a = 1 - c,
              l = p(i.height - n, 0, a),
              a = i.height - l;
          f.set(v, i.width / u, i.height / l, 1), f.set(m, (h - s) / u, (a - n) / l, 0), d.identity(r), d.translate(r, r, m), d.scale(r, r, v), t.viewport(t.drawingBufferWidth * o, t.drawingBufferHeight * c, t.drawingBufferWidth * u, t.drawingBufferHeight * l);
        },
        setupPixelEffectUniforms: function setupPixelEffectUniforms(t, e, i) {
          var r = 1;
          e && null != e.opacity && (r = e.opacity), t.uniform1f(i.opacity, r), r = o, e && e.colorOffset && (r = e.colorOffset), t.uniform4fv(i.colorOffset, r), r = s, e && e.colorMatrix && (r = e.colorMatrix), t.uniformMatrix4fv(i.colorMatrix, !1, r);
        }
      };
    }, {
      "../util/clamp": 75,
      "gl-matrix": 3
    }],
    58: [function (t, e, i) {
      "use strict";

      var r = t("./WebGlBase");

      function n() {
        this.constructor.super_.apply(this, arguments);
      }

      t("../util/inherits")(n, r), e.exports = n;
    }, {
      "../util/inherits": 89,
      "./WebGlBase": 56
    }],
    59: [function (t, e, i) {
      "use strict";

      var a = t("gl-matrix").mat4,
          r = t("../util/clearOwnProperties"),
          n = t("./WebGlCommon"),
          o = n.createConstantBuffers,
          s = n.destroyConstantBuffers,
          u = n.createShaderProgram,
          h = n.destroyShaderProgram,
          l = n.enableAttributes,
          c = n.disableAttributes,
          p = n.setViewport,
          f = n.setupPixelEffectUniforms,
          d = n.setDepth,
          m = n.setTexture,
          v = t("../shaders/vertexEquirect"),
          _ = t("../shaders/fragmentEquirect"),
          y = [0, 1, 2, 0, 2, 3],
          g = [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0],
          M = [0, 0, 1, 0, 1, 1, 0, 1],
          w = ["aVertexPosition"],
          b = ["uDepth", "uOpacity", "uSampler", "uInvProjMatrix", "uViewportMatrix", "uColorOffset", "uColorMatrix", "uTextureX", "uTextureY", "uTextureWidth", "uTextureHeight"];

      function x(t) {
        this.gl = t, this.invProjMatrix = a.create(), this.viewportMatrix = a.create(), this.constantBuffers = o(t, y, g, M), this.shaderProgram = u(t, v, _, w, b);
      }

      x.prototype.destroy = function () {
        s(this.gl, this.constantBuffers), h(this.gl, this.shaderProgram), r(this);
      }, x.prototype.startLayer = function (t, e) {
        var i = this.gl,
            r = this.shaderProgram,
            n = this.constantBuffers,
            o = this.invProjMatrix,
            s = this.viewportMatrix;
        i.useProgram(r), l(i, r), p(i, t, e, s), i.uniformMatrix4fv(r.uViewportMatrix, !1, s), i.bindBuffer(i.ARRAY_BUFFER, n.vertexPositions), i.vertexAttribPointer(r.aVertexPosition, 3, i.FLOAT, i.FALSE, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, n.textureCoords), a.copy(o, t.view().projection()), a.invert(o, o), i.uniformMatrix4fv(r.uInvProjMatrix, !1, o);
        e = t.effects().textureCrop || {}, s = null != e.x ? e.x : 0, n = null != e.y ? e.y : 0, o = null != e.width ? e.width : 1, e = null != e.height ? e.height : 1;
        i.uniform1f(r.uTextureX, s), i.uniform1f(r.uTextureY, n), i.uniform1f(r.uTextureWidth, o), i.uniform1f(r.uTextureHeight, e), f(i, t.effects(), {
          opacity: r.uOpacity,
          colorOffset: r.uColorOffset,
          colorMatrix: r.uColorMatrix
        });
      }, x.prototype.endLayer = function (t, e) {
        var i = this.gl,
            r = this.shaderProgram;
        c(i, r);
      }, x.prototype.renderTile = function (t, e, i, r) {
        var n = this.gl,
            o = this.shaderProgram,
            s = this.constantBuffers;
        d(n, o, r, t.z), m(n, o, e), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, s.vertexIndices), n.drawElements(n.TRIANGLES, y.length, n.UNSIGNED_SHORT, 0);
      }, e.exports = x;
    }, {
      "../shaders/fragmentEquirect": 62,
      "../shaders/vertexEquirect": 64,
      "../util/clearOwnProperties": 76,
      "./WebGlCommon": 57,
      "gl-matrix": 3
    }],
    60: [function (t, e, i) {
      "use strict";

      var r = t("./WebGlBase");

      function n() {
        this.constructor.super_.apply(this, arguments);
      }

      t("../util/inherits")(n, r), e.exports = n;
    }, {
      "../util/inherits": 89,
      "./WebGlBase": 56
    }],
    61: [function (t, e, i) {
      "use strict";

      var r = t("./WebGlCube"),
          n = t("./WebGlFlat"),
          o = t("./WebGlEquirect");

      e.exports = function (t) {
        if ("webgl" !== t.type) throw new Error("Unknown stage type: " + t.type);
        t.registerRenderer("flat", "flat", n), t.registerRenderer("cube", "rectilinear", r), t.registerRenderer("equirect", "rectilinear", o);
      };
    }, {
      "./WebGlCube": 58,
      "./WebGlEquirect": 59,
      "./WebGlFlat": 60
    }],
    62: [function (t, e, i) {
      "use strict";

      e.exports = ["#ifdef GL_FRAGMENT_PRECISION_HIGH", "precision highp float;", "#else", "precision mediump float", "#endif", "uniform sampler2D uSampler;", "uniform float uOpacity;", "uniform float uTextureX;", "uniform float uTextureY;", "uniform float uTextureWidth;", "uniform float uTextureHeight;", "uniform vec4 uColorOffset;", "uniform mat4 uColorMatrix;", "varying vec4 vRay;", "const float PI = 3.14159265358979323846264;", "void main(void) {", "  float r = inversesqrt(vRay.x * vRay.x + vRay.y * vRay.y + vRay.z * vRay.z);", "  float phi  = acos(vRay.y * r);", "  float theta = atan(vRay.x, -1.0*vRay.z);", "  float s = 0.5 + 0.5 * theta / PI;", "  float t = 1.0 - phi / PI;", "  s = s * uTextureWidth + uTextureX;", "  t = t * uTextureHeight + uTextureY;", "  vec4 color = texture2D(uSampler, vec2(s, t)) * uColorMatrix + uColorOffset;", "  gl_FragColor = vec4(color.rgba * uOpacity);", "}"].join("\n");
    }, {}],
    63: [function (t, e, i) {
      "use strict";

      e.exports = ["#ifdef GL_FRAGMENT_PRECISION_HIGH", "precision highp float;", "#else", "precision mediump float;", "#endif", "uniform sampler2D uSampler;", "uniform float uOpacity;", "uniform vec4 uColorOffset;", "uniform mat4 uColorMatrix;", "varying vec2 vTextureCoord;", "void main(void) {", "  vec4 color = texture2D(uSampler, vTextureCoord) * uColorMatrix + uColorOffset;", "  gl_FragColor = vec4(color.rgba * uOpacity);", "}"].join("\n");
    }, {}],
    64: [function (t, e, i) {
      "use strict";

      e.exports = ["attribute vec3 aVertexPosition;", "uniform float uDepth;", "uniform mat4 uViewportMatrix;", "uniform mat4 uInvProjMatrix;", "varying vec4 vRay;", "void main(void) {", "  vRay = uInvProjMatrix * vec4(aVertexPosition.xy, 1.0, 1.0);", "  gl_Position = uViewportMatrix * vec4(aVertexPosition.xy, uDepth, 1.0);", "}"].join("\n");
    }, {}],
    65: [function (t, e, i) {
      "use strict";

      e.exports = ["attribute vec3 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float uDepth;", "uniform mat4 uViewportMatrix;", "uniform mat4 uProjMatrix;", "varying vec2 vTextureCoord;", "void main(void) {", "  gl_Position = uViewportMatrix * uProjMatrix * vec4(aVertexPosition.xy, 0.0, 1.0);", "  gl_Position.z = uDepth * gl_Position.w;", "  vTextureCoord = aTextureCoord;", "}"].join("\n");
    }, {}],
    66: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          l = t("../NetworkError"),
          n = t("../collections/WorkPool"),
          c = t("../util/chain"),
          p = t("../util/delay"),
          f = t("../util/now"),
          s = {
        x: "x",
        y: "y",
        z: "z",
        f: "face"
      };

      function a(t, e) {
        e = e || {}, this._loadPool = new n({
          concurrency: e.concurrency || 4
        }), this._retryDelay = e.retryDelay || 1e4, this._retryMap = {}, this._sourceFromTile = t;
      }

      r(a), a.prototype.loadAsset = function (t, r, e) {
        var n = this,
            i = this._retryDelay,
            o = this._retryMap,
            s = this._sourceFromTile(r),
            a = s.url,
            s = s.rect,
            u = t.loadImage.bind(t, a, s),
            s = o[a];

        null != s && ((s = f() - s) < i ? h = i - s : (h = 0, delete o[a]));
        var h = p.bind(null, h);
        return c(h, function (i) {
          return n._loadPool.push(u, function (t, e) {
            t ? (t instanceof l && (o[a] = f(), n.emit("networkError", t, r)), i(t, r)) : (delete o[a], i(null, r, e));
          });
        })(e);
      }, a.fromString = function (o, e) {
        var i = (e = e || {}) && e.cubeMapPreviewFaceOrder || "bdflru";
        return new a(e.cubeMapPreviewUrl ? function (t) {
          return (0 === t.z ? function (t) {
            t = i.indexOf(t.face) / 6;
            return {
              url: e.cubeMapPreviewUrl,
              rect: {
                x: 0,
                y: t,
                width: 1,
                height: 1 / 6
              }
            };
          } : r)(t);
        } : r, e);

        function r(t) {
          var e,
              i = o;

          for (e in s) {
            var r = s[e],
                n = new RegExp("\\{(" + e + ")\\}", "g"),
                r = t.hasOwnProperty(r) ? t[r] : "",
                i = i.replace(n, r);
          }

          return {
            url: i
          };
        }
      }, e.exports = a;
    }, {
      "../NetworkError": 18,
      "../collections/WorkPool": 32,
      "../util/chain": 74,
      "../util/delay": 84,
      "../util/now": 93,
      "minimal-event-emitter": 14
    }],
    67: [function (t, e, i) {
      "use strict";

      function r(t) {
        this._asset = t;
      }

      r.prototype.asset = function () {
        return this._asset;
      }, r.prototype.loadAsset = function (t, e, i) {
        var r = this,
            n = setTimeout(function () {
          i(null, e, r._asset);
        }, 0);
        return function () {
          clearTimeout(n), i.apply(null, arguments);
        };
      }, e.exports = r;
    }, {}],
    68: [function (t, e, i) {
      "use strict";

      function r() {
        this._renderers = {};
      }

      r.prototype.set = function (t, e, i) {
        this._renderers[t] || (this._renderers[t] = {}), this._renderers[t][e] = i;
      }, r.prototype.get = function (t, e) {
        return this._renderers[t] && this._renderers[t][e] || null;
      }, e.exports = r;
    }, {}],
    69: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          n = t("../collections/WorkQueue"),
          _ = t("../util/calcRect"),
          o = t("../util/async"),
          s = t("../util/cancelize"),
          a = t("../util/clearOwnProperties"),
          u = t("./RendererRegistry");

      function h(t, e) {
        return t.cmp(e);
      }

      function l(t, e) {
        return -t.cmp(e);
      }

      function c(t) {
        this._progressive = !(!t || !t.progressive), this._layers = [], this._renderers = [], this._tilesToLoad = [], this._tilesToRender = [], this._tmpVisible = [], this._tmpChildren = [], this._width = 0, this._height = 0, this._tmpRect = {}, this._tmpSize = {}, this._createTextureWorkQueue = new n(), this._emitRenderInvalid = this._emitRenderInvalid.bind(this), this._rendererRegistry = new u();
      }

      r(c), c.prototype.destroy = function () {
        this.removeAllLayers(), a(this);
      }, c.prototype.registerRenderer = function (t, e, i) {
        return this._rendererRegistry.set(t, e, i);
      }, c.prototype.domElement = function () {
        throw new Error("Stage implementation must override domElement");
      }, c.prototype.width = function () {
        return this._width;
      }, c.prototype.height = function () {
        return this._height;
      }, c.prototype.size = function (t) {
        return (t = t || {}).width = this._width, t.height = this._height, t;
      }, c.prototype.setSize = function (t) {
        this._width = t.width, this._height = t.height, this.setSizeForType(), this.emit("resize"), this._emitRenderInvalid();
      }, c.prototype.setSizeForType = function (t) {
        throw new Error("Stage implementation must override setSizeForType");
      }, c.prototype.loadImage = function () {
        throw new Error("Stage implementation must override loadImage");
      }, c.prototype._emitRenderInvalid = function () {
        this.emit("renderInvalid");
      }, c.prototype.validateLayer = function (t) {
        throw new Error("Stage implementation must override validateLayer");
      }, c.prototype.listLayers = function () {
        return [].concat(this._layers);
      }, c.prototype.hasLayer = function (t) {
        return 0 <= this._layers.indexOf(t);
      }, c.prototype.addLayer = function (t, e) {
        if (0 <= this._layers.indexOf(t)) throw new Error("Layer already in stage");
        if (null == e && (e = this._layers.length), e < 0 || e > this._layers.length) throw new Error("Invalid layer position");
        this.validateLayer(t);

        var i = t.geometry().type,
            r = t.view().type,
            n = this._rendererRegistry.get(i, r);

        if (!n) throw new Error("No " + this.type + " renderer avaiable for " + i + " geometry and " + r + " view");
        n = this.createRenderer(n);
        this._layers.splice(e, 0, t), this._renderers.splice(e, 0, n), t.addEventListener("viewChange", this._emitRenderInvalid), t.addEventListener("effectsChange", this._emitRenderInvalid), t.addEventListener("fixedLevelChange", this._emitRenderInvalid), t.addEventListener("textureStoreChange", this._emitRenderInvalid), this._emitRenderInvalid();
      }, c.prototype.moveLayer = function (t, e) {
        var i = this._layers.indexOf(t);

        if (i < 0) throw new Error("No such layer in stage");
        if (e < 0 || e >= this._layers.length) throw new Error("Invalid layer position");
        t = this._layers.splice(i, 1)[0];
        i = this._renderers.splice(i, 1)[0];
        this._layers.splice(e, 0, t), this._renderers.splice(e, 0, i), this._emitRenderInvalid();
      }, c.prototype.removeLayer = function (t) {
        var e = this._layers.indexOf(t);

        if (e < 0) throw new Error("No such layer in stage");
        t = this._layers.splice(e, 1)[0], e = this._renderers.splice(e, 1)[0];
        this.destroyRenderer(e), t.removeEventListener("viewChange", this._emitRenderInvalid), t.removeEventListener("effectsChange", this._emitRenderInvalid), t.removeEventListener("fixedLevelChange", this._emitRenderInvalid), t.removeEventListener("textureStoreChange", this._emitRenderInvalid), this._emitRenderInvalid();
      }, c.prototype.removeAllLayers = function () {
        for (; 0 < this._layers.length;) {
          this.removeLayer(this._layers[0]);
        }
      }, c.prototype.startFrame = function () {
        throw new Error("Stage implementation must override startFrame");
      }, c.prototype.endFrame = function () {
        throw new Error("Stage implementation must override endFrame");
      }, c.prototype.render = function () {
        var t,
            e,
            i = this._tilesToLoad,
            r = this._tilesToRender,
            n = !0,
            o = this._width,
            s = this._height,
            a = this._tmpRect,
            u = this._tmpSize;

        if (!(o <= 0 || s <= 0)) {
          for (this.startFrame(), t = 0; t < this._layers.length; t++) {
            this._layers[t].textureStore().startFrame();
          }

          for (t = 0; t < this._layers.length; t++) {
            var h,
                l,
                c = this._layers[t],
                p = c.effects(),
                f = c.view(),
                d = c.textureStore(),
                m = this._renderers[t],
                v = this._layers.length - t;

            if (_(o, s, p && p.rect, a), !(a.width <= 0 || a.height <= 0)) {
              for (u.width = a.width * this._width, u.height = a.height * this._height, f.setSize(u), m.startLayer(c, a), f = this._collectTiles(c, d), e = 0; e < i.length; e++) {
                h = i[e], d.markTile(h);
              }

              for (e = 0; e < r.length; e++) {
                h = r[e], l = d.texture(h), m.renderTile(h, l, c, v);
              }

              c.emit("renderComplete", f), f || (n = !1), m.endLayer(c, a);
            }
          }

          for (t = 0; t < this._layers.length; t++) {
            this._layers[t].textureStore().endFrame();
          }

          this.endFrame(), this.emit("renderComplete", n);
        }
      }, c.prototype._collectTiles = function (t, e) {
        var i = this._tilesToLoad,
            r = this._tilesToRender,
            n = this._tmpVisible;
        i.length = 0, r.length = 0, n.length = 0, t.visibleTiles(n);

        for (var o = !0, s = 0; s < n.length; s++) {
          var a,
              u = n[s];
          this._collectTileToLoad(u), e.texture(u) ? (a = !1, this._collectTileToRender(u)) : (a = this._collectChildren(u, e), o = !1), this._collectParents(u, e, a);
        }

        return i.sort(h), r.sort(l), o;
      }, c.prototype._collectChildren = function (t, e) {
        var i = this._tmpChildren,
            r = !0;

        do {
          if (i.length = 0, !t.children(i)) break;
          r = !1;

          for (var n = 0; n < i.length; n++) {
            t = i[n], e.texture(t) ? (this._collectTileToLoad(t), this._collectTileToRender(t)) : r = !0;
          }
        } while (r && 1 === i.length);

        return r;
      }, c.prototype._collectParents = function (t, e, i) {
        for (var r = this._progressive; (r || i) && null != (t = t.parent());) {
          if (i) if (e.texture(t)) this._collectTileToRender(t), i = !1;else if (!this._progressive) continue;
          this._collectTileToLoad(t) || (r = !1);
        }

        return i;
      }, c.prototype._collectTileToLoad = function (t) {
        return this._collectTileIntoList(t, this._tilesToLoad);
      }, c.prototype._collectTileToRender = function (t) {
        return this._collectTileIntoList(t, this._tilesToRender);
      }, c.prototype._collectTileIntoList = function (t, e) {
        for (var i = !1, r = 0; r < e.length; r++) {
          if (t.equals(e[r])) {
            i = !0;
            break;
          }
        }

        return i || e.push(t), !i;
      }, c.prototype.createTexture = function (i, r, n) {
        var t = this;
        var e = s(o(function () {
          return new t.TextureClass(t, i, r);
        }));
        return this._createTextureWorkQueue.push(e, function (t, e) {
          n(t, i, r, e);
        });
      }, e.exports = c;
    }, {
      "../collections/WorkQueue": 33,
      "../util/async": 71,
      "../util/calcRect": 72,
      "../util/cancelize": 73,
      "../util/clearOwnProperties": 76,
      "./RendererRegistry": 68,
      "minimal-event-emitter": 14
    }],
    70: [function (t, e, i) {
      "use strict";

      var r = t("./Stage"),
          n = t("../loaders/HtmlImage"),
          o = t("bowser"),
          s = t("../util/inherits"),
          a = t("../util/pixelRatio"),
          h = t("../util/ispot"),
          u = t("../util/dom").setAbsolute,
          l = t("../util/dom").setFullSize,
          c = t("../util/clearOwnProperties"),
          p = o.chrome;

      function f(t) {
        t = t || {};
        var e = this;
        this.constructor.super_.call(this, t), this._generateMipmaps = null != t.generateMipmaps && t.generateMipmaps, this._loader = new n(this), this._domElement = document.createElement("canvas"), u(this._domElement), l(this._domElement), this._gl = function (t, e) {
          var i = {
            alpha: !0,
            premultipliedAlpha: !0,
            antialias: !(!e || !e.antialias),
            preserveDrawingBuffer: !(!e || !e.preserveDrawingBuffer)
          };
          if (!(i = t.getContext && (t.getContext("webgl", i) || t.getContext("experimental-webgl", i)))) throw new Error("Could not get WebGL context");
          return e.wrapContext && (i = e.wrapContext(i)), i;
        }(this._domElement, t), this._handleContextLoss = function () {
          e.emit("webglcontextlost"), e._gl = null;
        }, this._domElement.addEventListener("webglcontextlost", this._handleContextLoss), this._rendererInstances = [];
      }

      function d(t, e, i) {
        this._stage = t, this._gl = t._gl, this._texture = null, this._timestamp = null, this._width = this._height = null, this.refresh(e, i);
      }

      s(f, r), f.prototype.destroy = function () {
        this._domElement.removeEventListener("webglcontextlost", this._handleContextLoss), this.constructor.super_.prototype.destroy.call(this);
      }, f.prototype.domElement = function () {
        return this._domElement;
      }, f.prototype.webGlContext = function () {
        return this._gl;
      }, f.prototype.setSizeForType = function () {
        var t = a();
        this._domElement.width = t * this._width, this._domElement.height = t * this._height;
      }, f.prototype.loadImage = function (t, e, i) {
        return this._loader.loadImage(t, e, i);
      }, f.prototype.maxTextureSize = function () {
        return this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE);
      }, f.prototype.validateLayer = function (t) {
        var e = t.geometry().maxTileSize(),
            t = this.maxTextureSize();
        if (t < e) throw new Error("Layer has level with tile size larger than maximum texture size (" + e + " vs. " + t + ")");
      }, f.prototype.createRenderer = function (t) {
        for (var e = this._rendererInstances, i = 0; i < e.length; i++) {
          if (e[i] instanceof t) return e[i];
        }

        var r = new t(this._gl);
        return e.push(r), r;
      }, f.prototype.destroyRenderer = function (t) {
        var e = this._rendererInstances;
        this._renderers.indexOf(t) < 0 && (t.destroy(), 0 <= (t = e.indexOf(t)) && e.splice(t, 1));
      }, f.prototype.startFrame = function () {
        var t = this._gl;
        if (!t) throw new Error("Bad WebGL context - maybe context was lost?");
        t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), t.enable(t.DEPTH_TEST), t.enable(t.BLEND), t.blendFunc(t.ONE, t.ONE_MINUS_SRC_ALPHA);
      }, f.prototype.endFrame = function () {}, f.prototype.takeSnapshot = function (t) {
        "object" == _typeof(t) && null != t || (t = {});
        t = t.quality;
        if (void 0 === t && (t = 75), "number" != typeof t || t < 0 || 100 < t) throw new Error("WebGLStage: Snapshot quality needs to be a number between 0 and 100");
        return this.render(), this._domElement.toDataURL("image/jpeg", t / 100);
      }, f.type = f.prototype.type = "webgl", d.prototype.refresh = function (t, e) {
        var i,
            r = this._gl,
            n = this._stage,
            o = e.timestamp();

        if (o !== this._timestamp) {
          var s = e.element(),
              a = e.width(),
              u = e.height();

          if (a !== this._width || u !== this._height) {
            e = n.maxTextureSize();
            if (e < a) throw new Error("Texture width larger than max size (" + a + " vs. " + e + ")");
            if (e < u) throw new Error("Texture height larger than max size (" + u + " vs. " + e + ")");
            this._texture && r.deleteTexture(i), i = this._texture = r.createTexture(), r.bindTexture(r.TEXTURE_2D, i), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, s);
          } else i = this._texture, r.bindTexture(r.TEXTURE_2D, i), r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, !0), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), s instanceof HTMLVideoElement && p ? r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, s) : r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, r.RGBA, r.UNSIGNED_BYTE, s);

          n._generateMipmaps && h(a) && h(u) ? (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR), r.generateMipmap(r.TEXTURE_2D)) : (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR)), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.bindTexture(r.TEXTURE_2D, null), this._timestamp = o, this._width = a, this._height = u;
        }
      }, d.prototype.destroy = function () {
        this._texture && this._gl.deleteTexture(this._texture), c(this);
      }, f.TextureClass = f.prototype.TextureClass = d, e.exports = f;
    }, {
      "../loaders/HtmlImage": 55,
      "../util/clearOwnProperties": 76,
      "../util/dom": 85,
      "../util/inherits": 89,
      "../util/ispot": 90,
      "../util/pixelRatio": 95,
      "./Stage": 69,
      bowser: 1
    }],
    71: [function (t, e, i) {
      "use strict";

      e.exports = function (r) {
        return function (t) {
          var e, i;

          try {
            i = r();
          } catch (t) {
            e = t;
          } finally {
            e ? t(e) : t(null, i);
          }
        };
      };
    }, {}],
    72: [function (t, e, i) {
      "use strict";

      e.exports = function (t, e, i, r) {
        var n, o;
        return r = r || {}, n = null != i && null != i.absoluteWidth ? i.absoluteWidth / t : null != i && null != i.relativeWidth ? i.relativeWidth : 1, o = i && null != i.absoluteHeight ? i.absoluteHeight / e : null != i && null != i.relativeHeight ? i.relativeHeight : 1, t = null != i && null != i.absoluteX ? i.absoluteX / t : null != i && null != i.relativeX ? i.relativeX : 0, i = null != i && null != i.absoluteY ? i.absoluteY / e : null != i && null != i.relativeY ? i.relativeY : 0, r.x = t, r.y = i, r.width = n, r.height = o, r;
      };
    }, {}],
    73: [function (t, e, i) {
      "use strict";

      var r = t("./once");

      e.exports = function (i) {
        return function () {
          if (!arguments.length) throw new Error("cancelized: expected at least one argument");
          var t = Array.prototype.slice.call(arguments, 0),
              e = t[t.length - 1] = r(t[t.length - 1]);
          return i.apply(null, t), function () {
            e.apply(null, arguments);
          };
        };
      };
    }, {
      "./once": 94
    }],
    74: [function (t, e, i) {
      "use strict";

      var a = t("./noop");

      e.exports = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return function () {
          var r = e.slice(0),
              n = null,
              o = null,
              t = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : [],
              s = arguments.length ? arguments[arguments.length - 1] : a;
          return t.unshift(null), function t() {
            if (arguments[0]) return n = o = null, void s.apply(null, arguments);
            if (!r.length) return n = o = null, void s.apply(null, arguments);
            var e = n = r.shift(),
                i = Array.prototype.slice.call(arguments, 1);
            i.push(t);
            i = n.apply(null, i);

            if (e === n) {
              if ("function" != typeof i) throw new Error("chain: chaining on non-cancellable function");
              o = i;
            }
          }.apply(null, t), function () {
            o && o.apply(null, arguments);
          };
        };
      };
    }, {
      "./noop": 92
    }],
    75: [function (t, e, i) {
      "use strict";

      e.exports = function (t, e, i) {
        return Math.min(Math.max(t, e), i);
      };
    }, {}],
    76: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        for (var e in t) {
          t.hasOwnProperty(e) && (t[e] = void 0);
        }
      };
    }, {}],
    77: [function (t, e, i) {
      "use strict";

      e.exports = function (t, e) {
        return t < e ? -1 : e < t ? 1 : 0;
      };
    }, {}],
    78: [function (t, e, i) {
      "use strict";

      e.exports = function () {
        var r = arguments;
        return function (t) {
          for (var e = t, i = 0; i < r.length; i++) {
            e = r[i].call(null, e);
          }

          return e;
        };
      };
    }, {}],
    79: [function (t, e, i) {
      "use strict";

      function r(t, e, i) {
        return 2 * Math.atan(i * Math.tan(t / 2) / e);
      }

      e.exports = {
        convert: r,
        htov: r,
        htod: function htod(t, e, i) {
          return r(t, e, Math.sqrt(e * e + i * i));
        },
        vtoh: function vtoh(t, e, i) {
          return r(t, i, e);
        },
        vtod: function vtod(t, e, i) {
          return r(t, i, Math.sqrt(e * e + i * i));
        },
        dtoh: function dtoh(t, e, i) {
          return r(t, Math.sqrt(e * e + i * i), e);
        },
        dtov: function dtov(t, e, i) {
          return r(t, Math.sqrt(e * e + i * i), i);
        }
      };
    }, {}],
    80: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        return t.toPrecision(15);
      };
    }, {}],
    81: [function (t, e, i) {
      "use strict";

      e.exports = function (t, e) {
        for (var i in e) {
          i in t || (t[i] = e[i]);
        }

        return t;
      };
    }, {}],
    82: [function (t, e, i) {
      "use strict";

      e.exports = function (t, e) {
        setTimeout(function () {
          e && 0 < e.length ? t.apply(null, e) : t();
        }, 0);
      };
    }, {}],
    83: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        return t * Math.PI / 180;
      };
    }, {}],
    84: [function (t, e, i) {
      "use strict";

      e.exports = function (t, e) {
        var i = null;
        return i = setTimeout(function () {
          null != i && e(i = null);
        }, t), function () {
          null != i && (clearTimeout(i), i = null, e.apply(null, arguments));
        };
      };
    }, {}],
    85: [function (t, e, i) {
      "use strict";

      function r(t) {
        for (var e = document.documentElement.style, i = ["Moz", "Webkit", "Khtml", "O", "ms"], r = 0; r < i.length; r++) {
          var n = i[r] + (t[0].toUpperCase() + t.slice(1));
          if (n in e) return n;
        }

        return t;
      }

      function n(t) {
        var i = r(t);
        return function (t, e) {
          return t.style[i] = e;
        };
      }

      var o = n("transform"),
          s = n("transformOrigin");
      e.exports = {
        prefixProperty: r,
        getWithVendorPrefix: function getWithVendorPrefix(t) {
          var e = r(t);
          return function (t) {
            return t.style[e];
          };
        },
        setWithVendorPrefix: n,
        setTransform: o,
        setTransformOrigin: s,
        setNullTransform: function setNullTransform(t) {
          o(t, "translateZ(0)");
        },
        setNullTransformOrigin: function setNullTransformOrigin(t) {
          s(t, "0 0 0");
        },
        setAbsolute: function setAbsolute(t) {
          t.style.position = "absolute";
        },
        setPixelPosition: function setPixelPosition(t, e, i) {
          t.style.left = e + "px", t.style.top = i + "px";
        },
        setPixelSize: function setPixelSize(t, e, i) {
          t.style.width = e + "px", t.style.height = i + "px";
        },
        setNullSize: function setNullSize(t) {
          t.style.width = t.style.height = 0;
        },
        setFullSize: function setFullSize(t) {
          t.style.width = t.style.height = "100%";
        },
        setOverflowHidden: function setOverflowHidden(t) {
          t.style.overflow = "hidden";
        },
        setOverflowVisible: function setOverflowVisible(t) {
          t.style.overflow = "visible";
        },
        setNoPointerEvents: function setNoPointerEvents(t) {
          t.style.pointerEvents = "none";
        },
        setBlocking: function setBlocking(t) {
          t.style.backgroundColor = "#000", t.style.opacity = "0", t.style.filter = "alpha(opacity=0)";
        }
      };
    }, {}],
    86: [function (t, e, i) {
      "use strict";

      e.exports = function (t, e) {
        for (var i in e) {
          t[i] = e[i];
        }

        return t;
      };
    }, {}],
    87: [function (t, i, e) {
      (function (e) {
        (function () {
          "use strict";

          var t = "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== e ? e : null;
          i.exports = t;
        }).call(this);
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    88: [function (t, e, i) {
      "use strict";

      e.exports = function () {
        for (var t = 0, e = 0; e < arguments.length; e++) {
          var i = arguments[e];
          t += i, t += i << 10, t ^= i >> 6;
        }

        return t += t << 3, t ^= t >> 11, 0 <= (t += t << 15) ? t : -t;
      };
    }, {}],
    89: [function (t, e, i) {
      "use strict";

      e.exports = function (t, e) {
        function i() {}

        t.super_ = e, i.prototype = e.prototype, t.prototype = new i(), t.prototype.constructor = t;
      };
    }, {}],
    90: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        return 0 == (t & t - 1);
      };
    }, {}],
    91: [function (t, e, i) {
      "use strict";

      e.exports = function (t, e) {
        return (+t % (e = +e) + e) % e;
      };
    }, {}],
    92: [function (t, e, i) {
      "use strict";

      e.exports = function () {};
    }, {}],
    93: [function (t, e, i) {
      "use strict";

      e.exports = "undefined" != typeof performance && performance.now ? function () {
        return performance.now();
      } : function () {
        return Date.now();
      };
    }, {}],
    94: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        var e,
            i = !1;
        return function () {
          return i || (i = !0, e = t.apply(null, arguments)), e;
        };
      };
    }, {}],
    95: [function (t, e, i) {
      "use strict";

      e.exports = function () {
        if ("undefined" != typeof window) {
          if (window.devicePixelRatio) return window.devicePixelRatio;
          var t = window.screen;
          if (t && t.deviceXDPI && t.logicalXDPI) return t.deviceXDPI / t.logicalXDPI;
          if (t && t.systemXDPI && t.logicalXDPI) return t.systemXDPI / t.logicalXDPI;
        }

        return 1;
      };
    }, {}],
    96: [function (t, e, i) {
      "use strict";

      var n = t("./dom").setTransform,
          o = t("./decimal");

      e.exports = function (t, e, i, r) {
        r = r || "", r = "translateX(" + o(e) + "px) translateY(" + o(i) + "px) translateZ(0) " + r, n(t, r);
      };
    }, {
      "./decimal": 80,
      "./dom": 85
    }],
    97: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        return 180 * t / Math.PI;
      };
    }, {}],
    98: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        return "number" == typeof t && isFinite(t);
      };
    }, {}],
    99: [function (t, e, i) {
      "use strict";

      var s = t("./noop");

      e.exports = function (o) {
        return function () {
          var t = arguments.length ? Array.prototype.slice.call(arguments, 0, arguments.length - 1) : [],
              e = arguments.length ? arguments[arguments.length - 1] : s,
              i = null,
              r = !1;

          function n() {
            !arguments[0] || r ? e.apply(null, arguments) : i = o.apply(null, t);
          }

          return t.push(n), n(!0), function () {
            r = !0, i.apply(null, arguments);
          };
        };
      };
    }, {
      "./noop": 92
    }],
    100: [function (t, e, i) {
      "use strict";

      var a = t("./now");

      e.exports = function (i, r, n) {
        var o = !1,
            s = a();
        return r(0), requestAnimationFrame(function t() {
          var e;
          o || ((e = (a() - s) / i) < 1 ? (r(e), requestAnimationFrame(t)) : (r(1), n()));
        }), function () {
          o = !0, n.apply(null, arguments);
        };
      };
    }, {
      "./now": 93
    }],
    101: [function (t, e, i) {
      "use strict";

      e.exports = function (t) {
        var e = _typeof(t);

        if ("object" == e) {
          if (null === t) return "null";
          if ("[object Array]" === Object.prototype.toString.call(t)) return "array";
          if ("[object RegExp]" === Object.prototype.toString.call(t)) return "regexp";
        }

        return e;
      };
    }, {}],
    102: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          h = t("gl-matrix").mat4,
          a = t("gl-matrix").vec4,
          o = t("../util/pixelRatio"),
          p = t("../util/real"),
          f = t("../util/clamp"),
          n = t("../util/clearOwnProperties"),
          l = [1, 0, 1, 0],
          c = [-1, -1, 1, 1];

      function s(t, e) {
        if (!t || null == t.mediaAspectRatio) throw new Error("mediaAspectRatio must be defined");
        this._x = t && null != t.x ? t.x : .5, this._y = t && null != t.y ? t.y : .5, this._zoom = t && null != t.zoom ? t.zoom : 1, this._mediaAspectRatio = t.mediaAspectRatio, this._width = t && null != t.width ? t.width : 0, this._height = t && null != t.height ? t.height : 0, this._limiter = e || null, this._projMatrix = h.create(), this._invProjMatrix = h.create(), this._frustum = [0, 0, 0, 0], this._projectionChanged = !0, this._params = {}, this._vec = a.create(), this._update();
      }

      r(s), s.prototype.destroy = function () {
        n(this);
      }, s.prototype.x = function () {
        return this._x;
      }, s.prototype.y = function () {
        return this._y;
      }, s.prototype.zoom = function () {
        return this._zoom;
      }, s.prototype.mediaAspectRatio = function () {
        return this._mediaAspectRatio;
      }, s.prototype.width = function () {
        return this._width;
      }, s.prototype.height = function () {
        return this._height;
      }, s.prototype.size = function (t) {
        return (t = t || {}).width = this._width, t.height = this._height, t;
      }, s.prototype.parameters = function (t) {
        return (t = t || {}).x = this._x, t.y = this._y, t.zoom = this._zoom, t.mediaAspectRatio = this._mediaAspectRatio, t;
      }, s.prototype.limiter = function () {
        return this._limiter;
      }, s.prototype.setX = function (t) {
        this._resetParams(), this._params.x = t, this._update(this._params);
      }, s.prototype.setY = function (t) {
        this._resetParams(), this._params.y = t, this._update(this._params);
      }, s.prototype.setZoom = function (t) {
        this._resetParams(), this._params.zoom = t, this._update(this._params);
      }, s.prototype.offsetX = function (t) {
        this.setX(this._x + t);
      }, s.prototype.offsetY = function (t) {
        this.setY(this._y + t);
      }, s.prototype.offsetZoom = function (t) {
        this.setZoom(this._zoom + t);
      }, s.prototype.setMediaAspectRatio = function (t) {
        this._resetParams(), this._params.mediaAspectRatio = t, this._update(this._params);
      }, s.prototype.setSize = function (t) {
        this._resetParams(), this._params.width = t.width, this._params.height = t.height, this._update(this._params);
      }, s.prototype.setParameters = function (t) {
        this._resetParams(), this._params.x = t.x, this._params.y = t.y, this._params.zoom = t.zoom, this._params.mediaAspectRatio = t.mediaAspectRatio, this._update(this._params);
      }, s.prototype.setLimiter = function (t) {
        this._limiter = t || null, this._update();
      }, s.prototype._resetParams = function () {
        var t = this._params;
        t.x = null, t.y = null, t.zoom = null, t.mediaAspectRatio = null, t.width = null, t.height = null;
      }, s.prototype._update = function (t) {
        null == t && (this._resetParams(), t = this._params);
        var e = this._x,
            i = this._y,
            r = this._zoom,
            n = this._mediaAspectRatio,
            o = this._width,
            s = this._height;
        if (t.x = null != t.x ? t.x : e, t.y = null != t.y ? t.y : i, t.zoom = null != t.zoom ? t.zoom : r, t.mediaAspectRatio = null != t.mediaAspectRatio ? t.mediaAspectRatio : n, t.width = null != t.width ? t.width : o, t.height = null != t.height ? t.height : s, this._limiter && !(t = this._limiter(t))) throw new Error("Bad view limiter");
        var a = t.x,
            u = t.y,
            h = t.zoom,
            l = t.mediaAspectRatio,
            c = t.width,
            t = t.height;
        if (!(p(a) && p(u) && p(h) && p(l) && p(c) && p(t))) throw new Error("Bad view - suspect a broken limiter");
        h = f(h, 1e-6, 1 / 0), this._x = a, this._y = u, this._zoom = h, this._mediaAspectRatio = l, this._width = c, this._height = t, a === e && u === i && h === r && l === n && c === o && t === s || (this._projectionChanged = !0, this.emit("change")), c === o && t === s || this.emit("resize");
      }, s.prototype._zoomX = function () {
        return this._zoom;
      }, s.prototype._zoomY = function () {
        var t = this._mediaAspectRatio,
            e = this._width / this._height,
            i = this._zoom,
            e = i * t / e;
        return isNaN(e) && (e = i), e;
      }, s.prototype.updateWithControlParameters = function (t) {
        var e = this.zoom(),
            i = this._zoomX(),
            r = this._zoomY();

        this.offsetX(t.axisScaledX * i + t.x * e), this.offsetY(t.axisScaledY * r + t.y * e), this.offsetZoom(t.zoom * e);
      }, s.prototype._updateProjection = function () {
        var t,
            e,
            i,
            r,
            n,
            o,
            s = this._projMatrix,
            a = this._invProjMatrix,
            u = this._frustum;
        this._projectionChanged && (t = this._x, e = this._y, o = this._zoomX(), n = this._zoomY(), i = u[0] = .5 - e + .5 * n, r = u[1] = t - .5 + .5 * o, n = u[2] = .5 - e - .5 * n, o = u[3] = t - .5 - .5 * o, h.ortho(s, o, r, n, i, -1, 1), h.invert(a, s), this._projectionChanged = !1);
      }, s.prototype.projection = function () {
        return this._updateProjection(), this._projMatrix;
      }, s.prototype.inverseProjection = function () {
        return this._updateProjection(), this._invProjMatrix;
      }, s.prototype.intersects = function (t) {
        this._updateProjection();

        for (var e = this._frustum, i = 0; i < e.length; i++) {
          for (var r = e[i], n = l[i], o = c[i], s = !1, a = 0; a < t.length; a++) {
            var u = t[a];

            if (o < 0 && u[n] < r || 0 < o && u[n] > r) {
              s = !0;
              break;
            }
          }

          if (!s) return !1;
        }

        return !0;
      }, s.prototype.selectLevel = function (t) {
        for (var e = o() * this.width(), i = this._zoom, r = 0; r < t.length; r++) {
          var n = t[r];
          if (i * n.width() >= e) return n;
        }

        return t[t.length - 1];
      }, s.prototype.coordinatesToScreen = function (t, e) {
        var i = this._vec;
        e = e || {};
        var r = this._width,
            n = this._height;
        if (r <= 0 || n <= 0) return e.x = null, e.y = null;
        var o = t && null != t.x ? t.x : .5,
            t = t && null != t.y ? t.y : .5;
        a.set(i, o - .5, .5 - t, -1, 1), a.transformMat4(i, i, this.projection());

        for (var s = 0; s < 3; s++) {
          i[s] /= i[3];
        }

        return e.x = r * (i[0] + 1) / 2, e.y = n * (1 - i[1]) / 2, e;
      }, s.prototype.screenToCoordinates = function (t, e) {
        var i = this._vec;
        e = e || {};
        var r = this._width,
            n = this._height,
            r = 2 * t.x / r - 1,
            n = 1 - 2 * t.y / n;
        return a.set(i, r, n, 1, 1), a.transformMat4(i, i, this.inverseProjection()), e.x = .5 + i[0], e.y = .5 - i[1], e;
      }, s.limit = {
        x: function x(e, i) {
          return function (t) {
            return t.x = f(t.x, e, i), t;
          };
        },
        y: function y(e, i) {
          return function (t) {
            return t.y = f(t.y, e, i), t;
          };
        },
        zoom: function zoom(e, i) {
          return function (t) {
            return t.zoom = f(t.zoom, e, i), t;
          };
        },
        resolution: function resolution(i) {
          return function (t) {
            if (t.width <= 0 || t.height <= 0) return t;
            var e = t.width,
                e = o() * e / i;
            return t.zoom = f(t.zoom, e, 1 / 0), t;
          };
        },
        visibleX: function visibleX(r, n) {
          return function (t) {
            var e = n - r;
            t.zoom > e && (t.zoom = e);
            var i = r + .5 * t.zoom,
                e = n - .5 * t.zoom;
            return t.x = f(t.x, i, e), t;
          };
        },
        visibleY: function visibleY(r, n) {
          return function (t) {
            if (t.width <= 0 || t.height <= 0) return t;
            var e = t.width / t.height / t.mediaAspectRatio,
                i = (n - r) * e;
            t.zoom > i && (t.zoom = i);
            i = r + .5 * t.zoom / e, e = n - .5 * t.zoom / e;
            return t.y = f(t.y, i, e), t;
          };
        },
        letterbox: function letterbox() {
          return function (t) {
            if (t.width <= 0 || t.height <= 0) return t;
            var e,
                i,
                r,
                n,
                o = t.width / t.height,
                s = o / t.mediaAspectRatio;
            return t.mediaAspectRatio >= o && (t.zoom = Math.min(t.zoom, 1)), t.mediaAspectRatio <= o && (t.zoom = Math.min(t.zoom, s)), 1 < t.zoom ? e = i = .5 : (e = 0 + .5 * t.zoom, i = 1 - .5 * t.zoom), t.zoom > s ? r = n = .5 : (r = 0 + .5 * t.zoom / s, n = 1 - .5 * t.zoom / s), t.x = f(t.x, e, i), t.y = f(t.y, r, n), t;
          };
        }
      }, s.type = s.prototype.type = "flat", e.exports = s;
    }, {
      "../util/clamp": 75,
      "../util/clearOwnProperties": 76,
      "../util/pixelRatio": 95,
      "../util/real": 98,
      "gl-matrix": 3,
      "minimal-event-emitter": 14
    }],
    103: [function (t, e, i) {
      "use strict";

      var r = t("minimal-event-emitter"),
          h = t("gl-matrix").mat4,
          u = t("gl-matrix").vec4,
          o = t("../util/pixelRatio"),
          l = t("../util/convertFov"),
          n = t("../util/mod"),
          v = t("../util/real"),
          s = t("../util/clamp"),
          a = t("../util/decimal"),
          c = t("../util/compose"),
          p = t("../util/clearOwnProperties"),
          f = Math.PI / 4;

      function d(t, e) {
        this._yaw = t && null != t.yaw ? t.yaw : 0, this._pitch = t && null != t.pitch ? t.pitch : 0, this._roll = t && null != t.roll ? t.roll : 0, this._fov = t && null != t.fov ? t.fov : f, this._width = t && null != t.width ? t.width : 0, this._height = t && null != t.height ? t.height : 0, this._projectionCenterX = t && null != t.projectionCenterX ? t.projectionCenterX : 0, this._projectionCenterY = t && null != t.projectionCenterY ? t.projectionCenterY : 0, this._limiter = e || null, this._projMatrix = h.create(), this._invProjMatrix = h.create(), this._frustum = [u.create(), u.create(), u.create(), u.create(), u.create()], this._projectionChanged = !0, this._params = {}, this._fovs = {}, this._tmpVec = u.create(), this._update();
      }

      r(d), d.prototype.destroy = function () {
        p(this);
      }, d.prototype.yaw = function () {
        return this._yaw;
      }, d.prototype.pitch = function () {
        return this._pitch;
      }, d.prototype.roll = function () {
        return this._roll;
      }, d.prototype.projectionCenterX = function () {
        return this._projectionCenterX;
      }, d.prototype.projectionCenterY = function () {
        return this._projectionCenterY;
      }, d.prototype.fov = function () {
        return this._fov;
      }, d.prototype.width = function () {
        return this._width;
      }, d.prototype.height = function () {
        return this._height;
      }, d.prototype.size = function (t) {
        return (t = t || {}).width = this._width, t.height = this._height, t;
      }, d.prototype.parameters = function (t) {
        return (t = t || {}).yaw = this._yaw, t.pitch = this._pitch, t.roll = this._roll, t.fov = this._fov, t;
      }, d.prototype.limiter = function () {
        return this._limiter;
      }, d.prototype.setYaw = function (t) {
        this._resetParams(), this._params.yaw = t, this._update(this._params);
      }, d.prototype.setPitch = function (t) {
        this._resetParams(), this._params.pitch = t, this._update(this._params);
      }, d.prototype.setRoll = function (t) {
        this._resetParams(), this._params.roll = t, this._update(this._params);
      }, d.prototype.setFov = function (t) {
        this._resetParams(), this._params.fov = t, this._update(this._params);
      }, d.prototype.setProjectionCenterX = function (t) {
        this._resetParams(), this._params.projectionCenterX = t, this._update(this._params);
      }, d.prototype.setProjectionCenterY = function (t) {
        this._resetParams(), this._params.projectionCenterY = t, this._update(this._params);
      }, d.prototype.offsetYaw = function (t) {
        this.setYaw(this._yaw + t);
      }, d.prototype.offsetPitch = function (t) {
        this.setPitch(this._pitch + t);
      }, d.prototype.offsetRoll = function (t) {
        this.setRoll(this._roll + t);
      }, d.prototype.offsetFov = function (t) {
        this.setFov(this._fov + t);
      }, d.prototype.setSize = function (t) {
        this._resetParams(), this._params.width = t.width, this._params.height = t.height, this._update(this._params);
      }, d.prototype.setParameters = function (t) {
        this._resetParams(), this._params.yaw = t.yaw, this._params.pitch = t.pitch, this._params.roll = t.roll, this._params.fov = t.fov, this._params.projectionCenterX = t.projectionCenterX, this._params.projectionCenterY = t.projectionCenterY, this._update(this._params);
      }, d.prototype.setLimiter = function (t) {
        this._limiter = t || null, this._update();
      }, d.prototype._resetParams = function () {
        var t = this._params;
        t.yaw = null, t.pitch = null, t.roll = null, t.fov = null, t.width = null, t.height = null;
      }, d.prototype._update = function (t) {
        null == t && (this._resetParams(), t = this._params);
        var e = this._yaw,
            i = this._pitch,
            r = this._roll,
            n = this._fov,
            o = this._projectionCenterX,
            s = this._projectionCenterY,
            a = this._width,
            u = this._height;
        if (t.yaw = null != t.yaw ? t.yaw : e, t.pitch = null != t.pitch ? t.pitch : i, t.roll = null != t.roll ? t.roll : r, t.fov = null != t.fov ? t.fov : n, t.width = null != t.width ? t.width : a, t.height = null != t.height ? t.height : u, t.projectionCenterX = null != t.projectionCenterX ? t.projectionCenterX : o, t.projectionCenterY = null != t.projectionCenterY ? t.projectionCenterY : s, this._limiter && !(t = this._limiter(t))) throw new Error("Bad view limiter");

        var h = (t = this._normalize(t)).yaw,
            l = t.pitch,
            c = t.roll,
            p = t.fov,
            f = t.width,
            d = t.height,
            m = t.projectionCenterX,
            t = t.projectionCenterY;

        if (!(v(h) && v(l) && v(c) && v(p) && v(f) && v(d) && v(m) && v(t))) throw new Error("Bad view - suspect a broken limiter");
        this._yaw = h, this._pitch = l, this._roll = c, this._fov = p, this._width = f, this._height = d, this._projectionCenterX = m, this._projectionCenterY = t, h === e && l === i && c === r && p === n && f === a && d === u && m === o && t === s || (this._projectionChanged = !0, this.emit("change")), f === a && d === u || this.emit("resize");
      }, d.prototype._normalize = function (t) {
        this._normalizeCoordinates(t);

        var e = l.htov(Math.PI, t.width, t.height),
            e = isNaN(e) ? Math.PI : Math.min(Math.PI, e);
        return t.fov = s(t.fov, 1e-6, e - 1e-6), t;
      }, d.prototype._normalizeCoordinates = function (t) {
        return "yaw" in t && (t.yaw = n(t.yaw - Math.PI, -2 * Math.PI) + Math.PI), "pitch" in t && (t.pitch = n(t.pitch - Math.PI, -2 * Math.PI) + Math.PI), "roll" in t && (t.roll = n(t.roll - Math.PI, -2 * Math.PI) + Math.PI), t;
      }, d.prototype.normalizeToClosest = function (t, e) {
        var i = this._yaw,
            r = this._pitch,
            n = t.yaw,
            o = t.pitch,
            s = n - 2 * Math.PI,
            t = n + 2 * Math.PI;
        Math.abs(s - i) < Math.abs(n - i) ? n = s : Math.abs(t - i) < Math.abs(n - i) && (n = t);
        i = o - 2 * Math.PI, t = o + 2 * Math.PI;
        return Math.abs(i - r) < Math.abs(o - r) ? o = i : Math.abs(i - r) < Math.abs(o - r) && (o = t), (e = e || {}).yaw = n, e.pitch = o, e;
      }, d.prototype.updateWithControlParameters = function (t) {
        var e = this._fov,
            i = l.vtoh(e, this._width, this._height);
        isNaN(i) && (i = e), this.offsetYaw(t.axisScaledX * i + 2 * t.x * i + t.yaw), this.offsetPitch(t.axisScaledY * e + 2 * t.y * i + t.pitch), this.offsetRoll(-t.roll), this.offsetFov(t.zoom * e);
      }, d.prototype._updateProjection = function () {
        var t,
            e,
            i,
            r,
            n,
            o,
            s = this._projMatrix,
            a = this._invProjMatrix,
            u = this._frustum;
        this._projectionChanged && (o = this._width, r = this._height, t = this._fov, e = l.vtoh(t, o, r), i = o / r, n = this._projectionCenterX, o = this._projectionCenterY, 0 !== n || 0 !== o ? (r = Math.atan(2 * n * Math.tan(e / 2)), n = Math.atan(2 * o * Math.tan(t / 2)), (o = this._fovs).leftDegrees = 180 * (e / 2 + r) / Math.PI, o.rightDegrees = 180 * (e / 2 - r) / Math.PI, o.upDegrees = 180 * (t / 2 + n) / Math.PI, o.downDegrees = 180 * (t / 2 - n) / Math.PI, h.perspectiveFromFieldOfView(s, o, -1, 1)) : h.perspective(s, t, i, -1, 1), h.rotateZ(s, s, this._roll), h.rotateX(s, s, this._pitch), h.rotateY(s, s, this._yaw), h.invert(a, s), this._matrixToFrustum(s, u), this._projectionChanged = !1);
      }, d.prototype._matrixToFrustum = function (t, e) {
        u.set(e[0], t[3] + t[0], t[7] + t[4], t[11] + t[8], 0), u.set(e[1], t[3] - t[0], t[7] - t[4], t[11] - t[8], 0), u.set(e[2], t[3] + t[1], t[7] + t[5], t[11] + t[9], 0), u.set(e[3], t[3] - t[1], t[7] - t[5], t[11] - t[9], 0), u.set(e[4], t[3] + t[2], t[7] + t[6], t[11] + t[10], 0);
      }, d.prototype.projection = function () {
        return this._updateProjection(), this._projMatrix;
      }, d.prototype.inverseProjection = function () {
        return this._updateProjection(), this._invProjMatrix;
      }, d.prototype.intersects = function (t) {
        this._updateProjection();

        for (var e = this._frustum, i = this._tmpVec, r = 0; r < e.length; r++) {
          for (var n = e[r], o = !1, s = 0; s < t.length; s++) {
            var a = t[s];
            u.set(i, a[0], a[1], a[2], 0), 0 <= u.dot(n, i) && (o = !0);
          }

          if (!o) return !1;
        }

        return !0;
      }, d.prototype.selectLevel = function (t) {
        for (var e = o() * this._height, i = Math.tan(.5 * this._fov), r = 0; r < t.length; r++) {
          var n = t[r];
          if (i * n.height() >= e) return n;
        }

        return t[t.length - 1];
      }, d.prototype.coordinatesToScreen = function (t, e) {
        var i = this._tmpVec;
        e = e || {};
        var r = this._width,
            n = this._height;
        if (r <= 0 || n <= 0) return e.x = null, e.y = null;
        var o = t.yaw,
            s = t.pitch,
            a = Math.sin(o) * Math.cos(s),
            t = -Math.sin(s),
            s = -Math.cos(o) * Math.cos(s);
        return u.set(i, a, t, s, 1), u.transformMat4(i, i, this.projection()), 0 <= i[3] ? (e.x = r * (i[0] / i[3] + 1) / 2, e.y = n * (1 - i[1] / i[3]) / 2, e) : (e.x = null, e.y = null);
      }, d.prototype.screenToCoordinates = function (t, e) {
        var i = this._tmpVec;
        e = e || {};
        var r = this._width,
            n = this._height,
            r = 2 * t.x / r - 1,
            n = 1 - 2 * t.y / n;
        u.set(i, r, n, 1, 1), u.transformMat4(i, i, this.inverseProjection());
        n = Math.sqrt(i[0] * i[0] + i[1] * i[1] + i[2] * i[2]);
        return e.yaw = Math.atan2(i[0], -i[2]), e.pitch = Math.acos(i[1] / n) - Math.PI / 2, this._normalizeCoordinates(e), e;
      }, d.prototype.coordinatesToPerspectiveTransform = function (t, e, i) {
        i = i || "";
        var r = this._height,
            n = this._width,
            o = this._fov,
            s = .5 * r / Math.tan(o / 2),
            o = "";
        return o += "translateX(" + a(n / 2) + "px) ", o += "translateY(" + a(r / 2) + "px) ", o += "translateX(-50%) translateY(-50%) ", o += "perspective(" + a(s) + "px) ", o += "translateZ(" + a(s) + "px) ", o += "rotateZ(" + a(-this._roll) + "rad) ", o += "rotateX(" + a(-this._pitch) + "rad) ", o += "rotateY(" + a(this._yaw) + "rad) ", o += "rotateY(" + a(-t.yaw) + "rad) ", o += "rotateX(" + a(t.pitch) + "rad) ", o += "translateZ(" + a(-e) + "px) ", o += i + " ";
      }, d.limit = {
        yaw: function yaw(e, i) {
          return function (t) {
            return t.yaw = s(t.yaw, e, i), t;
          };
        },
        pitch: function pitch(e, i) {
          return function (t) {
            return t.pitch = s(t.pitch, e, i), t;
          };
        },
        roll: function roll(e, i) {
          return function (t) {
            return t.roll = s(t.roll, e, i), t;
          };
        },
        hfov: function hfov(n, o) {
          return function (t) {
            var e,
                i = t.width,
                r = t.height;
            return 0 < i && 0 < r && (e = l.htov(n, i, r), r = l.htov(o, i, r), t.fov = s(t.fov, e, r)), t;
          };
        },
        vfov: function vfov(e, i) {
          return function (t) {
            return t.fov = s(t.fov, e, i), t;
          };
        },
        resolution: function resolution(i) {
          return function (t) {
            var e = t.height;
            return e && (e = o() * e, e = 2 * Math.atan(e / i), t.fov = s(t.fov, e, 1 / 0)), t;
          };
        },
        traditional: function traditional(t, e, i) {
          return i = null != i ? i : e, c(d.limit.resolution(t), d.limit.vfov(0, e), d.limit.hfov(0, i), d.limit.pitch(-Math.PI / 2, Math.PI / 2));
        }
      }, d.type = d.prototype.type = "rectilinear", e.exports = d;
    }, {
      "../util/clamp": 75,
      "../util/clearOwnProperties": 76,
      "../util/compose": 78,
      "../util/convertFov": 79,
      "../util/decimal": 80,
      "../util/mod": 91,
      "../util/pixelRatio": 95,
      "../util/real": 98,
      "gl-matrix": 3,
      "minimal-event-emitter": 14
    }]
  }, {}, [54])(54);
});
},{}],"data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
var data = {
  scenes: [{
    id: '0-counter',
    name: 'Counter',
    levels: [{
      tileSize: 256,
      size: 256,
      fallbackOnly: true
    }, {
      tileSize: 512,
      size: 512
    }, {
      tileSize: 512,
      size: 1024
    }, {
      tileSize: 512,
      size: 2048
    }],
    faceSize: 2048,
    initialViewParameters: {
      yaw: -1.7305354528919654,
      pitch: 0.18810183577540407,
      fov: 1.3848081938437478
    },
    linkHotspots: [{
      yaw: -1.600429731329104,
      pitch: 0.5002192152175962,
      rotation: 13.351768777756625,
      target: '1-range',
      class: 'second-tour-starter'
    }, {
      yaw: -2.0067365901605037,
      pitch: 0.6455930272769592,
      rotation: 5.497787143782138,
      target: '2-island'
    }, {
      yaw: 3.1144623360250305,
      pitch: 0.25626992303908835,
      rotation: 25.918139392115812,
      target: '3-dining'
    }],
    infoHotspots: [{
      yaw: -1.1815019536187705,
      pitch: 0.21382602521738114,
      title: 'MANUAL FOOD PROCESSOR',
      class: 'intro-starter',
      videos: ['<iframe width="840" x src="https://www.youtube.com/embed/XdYZOHuvdhU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
      images: ['./images_min/foodprocessor/01-min.jpg', './images_min/foodprocessor/02-min.jpg', './images_min/foodprocessor/03-min.jpg', ['@erica-ekman', './images_min/foodprocessor/04-min.jpg'], ['@erica-ekman', './images_min/foodprocessor/05-min.jpg']],
      subhead: 'Manual Food Processor',
      text: '<p>Our Manual Food Processor can take care of nearly all your chopping and mincing needs, without needing an outlet. Just add your ingredients to the bowl and pump the handle for fast salsa, dip, cookie dough, baby food, tapenade. The more you pump, the finer it cuts! And when you’re done, the handle locks into the lid for easy storage in your cabinets.</p>',
      recipes: [{
        id: 'Pico De Gallo',
        preview_image: './modals/foodprocessor/post-recipe-pico-de-gallo-usca-min.jpg',
        link: './modals/foodprocessor/post-recipe-pico-de-gallo-steps-usca.pdf'
      }, {
        id: 'Cucumber-Dill Guacamole',
        preview_image: './modals/foodprocessor/post-recipe-cucumber-dill-guacamole-usca-min.jpg',
        link: './modals/foodprocessor/post-recipe-cucumber-dill-guacamole-steps-usca.pdf'
      }, {
        id: 'Cranberry Salsa',
        preview_image: './modals/foodprocessor/post-recipe-cranberry-salsa-usca-min.jpg',
        link: './modals/foodprocessor/post-recipe-cranberry-salsa-steps-usca.pdf'
      }]
    }, {
      yaw: -0.9109833783616796,
      pitch: 0.27485461667772526,
      title: 'PIZZA PEEL',
      videos: ['<iframe width="840" height="472.5" src="https://www.youtube.com/embed/I_u050UNyf4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
      images: ['./images_min/pizza/01-min.jpg', ['@midwestLifeandStyle', './images_min/pizza/02-min.jpg'], './images_min/pizza/03-min.jpg', './images_min/pizza/04-min.jpg', ['@tictacseaux', './images_min/pizza/05-min.jpg'], ['@mamazoeskitchen', './images_min/pizza/06-min.jpg'], ['@tictacseaux', './images_min/pizza/07-min.jpg']],
      subtitle: 'PIZZA PEEL',
      subhead: 'Pizza Peel',
      text: '<p>A pizza peel is a tool every pizza lover needs. It helps you get a pizza on and off a preheated pizza stone safely and with less mess. </p><br>This peel is made of durable acacia wood and has a tapered edge to help it slide easily under food. The hole at the end of the handle lets you hang it up for easy storage.</p>',
      recipes: [{
        id: 'Homemade Pizza Dough',
        preview_image: './modals/pizza/post-recipe-homemade-pizza-dough-min.jpg',
        link: './modals/pizza/post-recipe-homemade-pizza-dough-steps.pdf'
      }]
    }, {
      yaw: -0.7506175698032482,
      pitch: 0.49199024725491114,
      title: 'DELUXE ELECTRIC GRILL & GRIDDLE',
      videos: ['<iframe width="840" height="472.5" src="https://www.youtube.com/embed/ztHdcO9j_ts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
      images: ['./images_min/grill/grill-1.jpg', './images_min/grill/grill-2.jpg', './images_min/grill/grill-3.jpg', './images_min/grill/grill-4.jpg'],
      subhead: 'Deluxe Electric Grill & Griddle',
      text: "<p>Whether you're making breakfast, lunch, dinner, snacks, or apps, this multitasker is ready when you are. And when your day does a 180, so will this grill, turning out family favorites and inspiring something fresh and new.</p><br/><p>You’ll get four nonstick plates: two ridged grill plates and two smooth griddle plates that can be used in any combination and can be set to different temperatures for endless possibilities. For no-guess cooking, just set the included temperature probe to how you want your food cooked, and it’ll let you know when it’s ready. And it comes with a cooking guide with handy charts and delicious recipes.</p><br/><p>There are three cooking positions for maximum versatility. You can cook with the lid closed to use as a contact press to grill meat and to turn out restaurant-style sandwiches, or you can open the grill flat on the counter to cook on both plates at the same time. There is also a Top Melt position so the top hovers over without touching the food to melt cheese. Plus, you can adjust the height of the top so it won’t smash thicker foods.</p>",
      recipes: [{
        id: 'Banana Foster Sandwich',
        preview_image: './modals/grill/banana_foster-img.jpg',
        link: './modals/grill/banana_foster_sandwich.pdf'
      }, {
        id: 'Greek Zucchini Fritters',
        preview_image: './modals/grill/greek_fritters-img.jpg',
        link: './modals/grill/greek_fritters.pdf'
      }, {
        id: 'French Onion Sliders',
        preview_image: './modals/grill/fr_onion_sliders-img.jpg',
        link: './modals/grill/fr_onion_sliders.pdf'
      }]
    }]
  }, {
    id: '1-range',
    name: 'Range',
    levels: [{
      tileSize: 256,
      size: 256,
      fallbackOnly: true
    }, {
      tileSize: 512,
      size: 512
    }, {
      tileSize: 512,
      size: 1024
    }, {
      tileSize: 512,
      size: 2048
    }],
    faceSize: 2048,
    initialViewParameters: {
      yaw: 0.15935469126256763,
      pitch: 0.47446732721544294,
      fov: 1.3848081938437478
    },
    linkHotspots: [{
      yaw: 1.54461620215851,
      pitch: 0.4545689203398311,
      rotation: 10.995574287564278,
      target: '0-counter'
    }, {
      yaw: 1.9983218513556338,
      pitch: 0.6812157926345623,
      rotation: 7.0685834705770345,
      target: '2-island'
    }, {
      yaw: -3.0429579353509766,
      pitch: 0.17921049226157493,
      rotation: 5.497787143782138,
      target: '3-dining'
    }],
    infoHotspots: [{
      yaw: -0.6429950241920146,
      pitch: 0.6079593591219776,
      title: '12" STAINLESS STEEL NONSTICK SKILLET',
      videos: ['<iframe width="840" height="472.5" src="https://www.youtube.com/embed/hZ739Jtg_yg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
      images: ['./images_min/nonstick/01-min.jpg', './images_min/nonstick/02-min.jpg', './images_min/nonstick/03-min.jpg', './images_min/nonstick/04-min.jpg', './images_min/nonstick/05-min.jpg', './images_min/nonstick/06-min.jpg', ['@prettyfocusedcourse', './images_min/nonstick/07-min.jpg'], './images_min/nonstick/10-min.jpg', ['@whatslindacooking', './images_min/nonstick/08-min.jpg'], './images_min/nonstick/09-min.jpg', // "./1080x1080/nonstick/11.jpg",
      ['@jessywhitenton', './images_min/nonstick/12-min.jpg']],
      subhead: '12" Stainless Steel Nonstick Skillet',
      text: '<p>This innovative pan combines the best features of stainless steel and nonstick cookware. The nonstick mesh coating provides the perfect sear (without the mess) and leaves fond for pan sauces and gravy. The size is perfect for one-pot meals.</p><br><p>Our stainless steel skillets are a true hybrid: They combine the amazing cooking and heating capabilities of traditional stainless steel with the easy cleanup of nonstick cookware. With these innovative pans, you can get the perfect sear, make professional-grade pan sauces, and look like a pro—without breaking a sweat.</p>',
      recipes: [{
        id: 'Chicken Sausage & Spinach Ravioli',
        preview_image: './modals/nonstick/post-recipe-chicken-sausage-spinach-ravioli-usca-min.jpg',
        link: './modals/nonstick/post-recipe-chicken-sausage-spinach-ravioli-steps.pdf'
      }, {
        id: 'Egg Roll in a Bowl',
        preview_image: './modals/nonstick/post-recipe-egg-roll-in-a-bowl-min.jpg',
        link: './modals/nonstick/post-recipe-egg-roll-in-a-bowl-steps-usca.pdf'
      }, {
        id: 'Roasted Chicken & Asparagus',
        preview_image: './modals/nonstick/post-recipe-roasted-chicken-asparagus-usca-min.jpg',
        link: './modals/nonstick/post-recipe-roasted-chicken-asparagus-steps-usca.pdf'
      }]
    }, {
      yaw: 0.2592774000177265,
      pitch: 0.47995705785557874,
      title: '6-QT. ENAMELED DUTCH OVEN',
      videos: ['<iframe width="840" height="472.5" src="https://www.youtube.com/embed/qsHmDecSbGY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
      images: ['./images_min/dutchoven/01-min.jpg', './images_min/dutchoven/02-min.jpg', './images_min/dutchoven/03-min.jpg', './images_min/dutchoven/04-min.jpg', './images_min/dutchoven/05-min.jpg', './images_min/dutchoven/07-min.jpg'],
      subhead: '6-qt. Enameled Dutch Oven',
      text: '<p>Enameled cast iron is the kind of cookware that will become a fixture at every special meal you make—and that includes weeknight meals. This Dutch oven is beautiful so it’s ready to go directly from your stove (including induction) or oven to your table. You’ll reach for it again and again because it’s low maintenance and versatile.</p><br><p>The 6-qt. (5.7-L) Dutch oven has a light-colored enameled interior, which means you can start using it right away—no seasoning required—and it lets you easily see food browning so you can avoid scorching it. Cast iron’s excellent heat retention means that food stays hot and delicious even if not everyone makes it to the table as soon as dinner’s ready.</p><br><p>The inside of the lid is covered with bumps that redirect the condensation in the pot to drip back onto the food, making it a self-basting pot. This makes your food juicy, tender, and more flavorful.</p>',
      recipes: [{
        id: 'Baked Orzo',
        preview_image: './modals/dutch_oven/post-recipe-baked-orzo-min.jpg',
        link: './modals/dutch_oven/post-recipe-baked-orzo-steps.pdf'
      }, {
        id: 'Baked Ziti with Sausage',
        preview_image: './modals/dutch_oven/post-recipe-baked-ziti-with-sausage-min.jpg',
        link: './modals/dutch_oven/post-recipe-baked-ziti-with-sausage-steps.pdf'
      }, {
        id: 'Dutch Oven Bread',
        preview_image: './modals/dutch_oven/post-recipe-dutch-oven-bread-min.jpg',
        link: './modals/dutch_oven/post-recipe-dutch-oven-bread-steps.pdf'
      }]
    }, {
      yaw: 0.7912179938169785,
      pitch: 0.6150013929935234,
      title: '12" CAST IRON SKILLET',
      videos: ['<iframe width="840" height="472.5" src="https://www.youtube.com/embed/PlKzT_mXPUI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
      images: ['./images_min/castiron/01-min.jpg', './images_min/castiron/02-min.jpg', ['@makandheart', './images_min/castiron/03-min.jpg'], './images_min/castiron/04-min.jpg'],
      subhead: '12" Cast Iron Skillet',
      text: '<p>Our 12" skillet comes preseasoned, so you can start using it right away on most heat sources. And its natural, nonstick surface gets better and better the more you use it.</p><br><p>Reach for this pan when you need a perfect sear on steaks or a golden, crispy crust on baked treats. Our skillet has a one-of-a-kind shape that gives you more cooking area—enough to fit four chicken breasts at one time. No need to cook in batches to feed your friends or family.</p><br><p>The two, low-profile pour spouts let you easily drain off pan juices whether you’re left-or right-handed. With the cooking traditions and durability of cast iron comes a certain weightiness, but not to worry, our skillet has two handles to help you lift and carry it.</p>',
      recipes: [{
        id: 'Stovetop Mac & Cheese',
        preview_image: './modals/cast_iron/post-recipe-mac-n-cheese-usca-min.jpg',
        link: './modals/cast_iron/post-recipe-mac-n-cheese-steps-usca.pdf'
      }, {
        id: 'Chili Lime Pork',
        preview_image: './modals/cast_iron/post-recipe-chili-lime-pork-usca-min.jpg',
        link: './modals/cast_iron/post-recipe-chili-lime-pork-steps-usca.pdf'
      }, {
        id: 'Blackened Chicken',
        preview_image: './modals/cast_iron/post-recipe-blackened-chicken-min.jpg',
        link: './modals/cast_iron/post-recipe-blackened-chicken-steps.pdf'
      }]
    }]
  }, {
    id: '2-island',
    name: 'Island',
    levels: [{
      tileSize: 256,
      size: 256,
      fallbackOnly: true
    }, {
      tileSize: 512,
      size: 512
    }, {
      tileSize: 512,
      size: 1024
    }, {
      tileSize: 512,
      size: 2048
    }],
    faceSize: 2048,
    initialViewParameters: {
      yaw: 0.16781932880340733,
      pitch: 0.6173271244982672,
      fov: 1.3848081938437478
    },
    linkHotspots: [{
      yaw: 2.073695580130355,
      pitch: 0.6867101573530814,
      rotation: 7.0685834705770345,
      target: '1-range'
    }, {
      yaw: -2.240233598672516,
      pitch: 0.7910227684497411,
      rotation: 5.497787143782138,
      target: '0-counter'
    }, {
      yaw: -0.005228740281733479,
      pitch: 0.23492673103993944,
      rotation: 44.767695313654535,
      target: '3-dining'
    }],
    infoHotspots: [{
      yaw: 0.9117469385656278,
      pitch: 0.420756560898079,
      title: 'EAT WELL RECIPE BOOK',
      images: [''],
      subhead: '',
      fullWidth: true,
      text: "<iframe allowfullscreen='true' style='border:none;width:100%;height:100%;' src='//e.issuu.com/embed.html?d=p30530-012021usca-eat-well-ebook&hideIssuuLogo=true&hideShareButton=true&u=pamperedchef'></iframe>"
    }, {
      yaw: -0.3672164953440813,
      pitch: 0.47383427360583674,
      title: 'BE A CONSULTANT',
      videos: ['<iframe width="840" height="472.5" src="https://www.youtube.com/embed/aat1m2sbIvg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
      images: ['./images_min/consultant/01-min.jpg', './images_min/consultant/02-min.jpg'],
      containImages: true,
      subhead: 'Be a Consultant',
      text: "<span class='addtl_modal_body_1'><h3 style='padding-top:1rem'>What's in It for You?</h3><p style='padding-top:0'>You mean... besides earning commission on every sale?</p><br/><span class='consultant_perks'>Here are more amazing perks!</span><br/><br/><h4 class='modal_block-header'> Work/Life Balance</h4><p>Make your business work around another job or family commitments-and take it wherever you go with your website and online tools.</p><h4 class='modal_block-header'> Free Products & Discounts</h4><p>You'll get 20–50% off products right away, and you'll have the chance to earn products or Pampered Chef logo gear every month.</p><h4 class='modal_block-header'> Fantastic Rewards</h4><p>On top of free products, you can earn cash rewards and even vacations-and you'll earn even more if you promote!</p><h4 class='modal_block-header'> Purpose & Community</h4><p>You'll be part of a strong community of people who share the same passion for helping others by inspiring mealtime wins.</p><br/><span class='modal_block-footer'>Contact your consultant to learn more today!</span></span><br/><br/>",
      pdf_links: [{
        id: 'New Consultant Kit',
        preview_image: './modals/be_a_consultant/flyer-new-consultant-kit-us_Page_1-min.jpg',
        link: './modals/be_a_consultant/flyer-new-consultant-kit-us.pdf'
      }, {
        id: 'Make Your Everyday Better Poster',
        preview_image: './modals/be_a_consultant/poster-everyday-better-checklist-20x30-us-min.jpg',
        link: './modals/be_a_consultant/poster-everyday-better-checklist-20x30-us.pdf'
      }]
    }, {
      yaw: 0.24380359723473255,
      pitch: 0.7252554361478651,
      title: 'PREMIUM CHARCUTERIE & CHEESE BOARD SET',
      videos: ['<iframe width="840" height="472.5" src="https://www.youtube.com/embed/kaztmnKWbZg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
      images: ['./images_min/charcuterie/01-min.jpg', './images_min/charcuterie/02-min.jpg', './images_min/charcuterie/03-min.jpg', './images_min/charcuterie/04-min.jpg'],
      subhead: 'Premium Charcuterie & Cheese Board Set',
      text: '<p>The Premium Charcuterie & Cheese Board Set has everything you need to make entertaining a breeze. The set features an Acacia wood Lazy Susan and our Charcuterie & Cheese Board Accessories.</p>',
      related_content: [{
        id: 'How to Build a Charcuterie Board (Video)',
        preview_image: './videos/charc_video_preview_img.jpg',
        link: 'https://youtu.be/FGNCzBBoxY0'
      }]
    }, {
      yaw: -0.7068853189452113,
      pitch: 0.44914982598033504,
      title: 'HOST A PARTY',
      containImages: true,
      videos: ['<iframe width="840" height="472.5" src="https://www.youtube.com/embed/4Z8xfjQcrq0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
      images: ['./images_min/hostaparty/01-min.jpg', './images_min/hostaparty/02-min.jpg', './images_min/hostaparty/03-min.jpg', './images_min/hostaparty/04-min.jpg'],
      subhead: 'Host a Party',
      text: "<span class='addtl_modal_body_2'><h4 class='modal_block-header'> Free Product Rewards</h4><p>The higher your party sales, the more free product value you get to spend on the products you want.</p><h4 class='modal_block-header'> Half-Price Products</h4><p>Get up to five, including exclusive host exclusive combos.</p><h4 class='modal_block-header'> Monthly Host Special</h4><p>Get an exclusive offer just for hosting.</p><h4 class='modal_block-header'> Booking Bonuses</h4><p>Get 40% off one item or set at any party booked from yours - and get $50 in free product rewards when three guests book parties!</p><h4 class='modal_block-header'> Discounted Products</h4><p>Save up to 30% at your party, and 10% for one year.</p><br/><span class='modal_block-footer'>Contact your consultant to learn more today!</span></span>",
      pdf_links: [{
        id: 'Host Rewards PDF',
        preview_image: './modals/host_party/p28619-092020us-host-rewards-min.jpg',
        link: './modals/host_party/p28619-092020us-host-rewards.pdf'
      }]
    }]
  }, {
    id: '3-dining',
    name: 'Dining',
    levels: [{
      tileSize: 256,
      size: 256,
      fallbackOnly: true
    }, {
      tileSize: 512,
      size: 512
    }, {
      tileSize: 512,
      size: 1024
    }, {
      tileSize: 512,
      size: 2048
    }],
    faceSize: 2048,
    initialViewParameters: {
      yaw: -0.1235145795909709,
      pitch: 0.5635631739337121,
      fov: 1.3848081938437478
    },
    linkHotspots: [{
      yaw: -2.354654286612135,
      pitch: 0.1774186200543646,
      rotation: 5.497787143782138,
      target: '0-counter'
    }, {
      yaw: 2.607801081118793,
      pitch: 0.1750555843206847,
      rotation: 0.7853981633974483,
      target: '1-range'
    }, {
      yaw: -2.721992958257644,
      pitch: 0.6033749028382758,
      rotation: 18.06415775814132,
      target: '2-island'
    }],
    infoHotspots: [{
      yaw: 0.49130821657672286,
      pitch: 0.58489454445475,
      title: 'INSULATED SERVING BOWL SET',
      images: ['./images_min/insulated_bowl/01-min.jpg', './images_min/insulated_bowl/02-min.jpg', './images_min/insulated_bowl/03-min.jpg', ['@lazynolaketo', './images_min/insulated_bowl/04-min.jpg'], ['@kristenskitchenkreations', './images_min/insulated_bowl/05-min.jpg']],
      subhead: 'Insulated Serving Bowl Set',
      text: "<p>For holidays, potlucks, or any big meal, it can feel nearly impossible to keep everything warm. With this insulated serving bowl set, you can keep foods warm up to 2 hours.</p><br><p>The bowls’ double-walled vacuum insulation keeps food hot, prevents sweating, and has a stay-cool exterior. Works with cold foods, too!</p><br><p>Each bowl comes with a clear plastic lid that’s double-walled and lets you see what's inside. The lid also hooks onto the side of the bowl, making it easier to dish out and serve food.</p>"
    }, {
      yaw: -0.8810722073104316,
      pitch: 0.452917691463405,
      title: 'SMALL SQUARE COOL & SERVE',
      videos: ['<iframe width="840" height="472.5" src="https://www.youtube.com/embed/b0gKhBjoqzM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
      images: ['./images_min/coolserve/01-min.jpg', './images_min/coolserve/02-min.jpg', ['@kristy7graces', './images_min/coolserve/03-min.jpg'], './images_min/coolserve/04-min.jpg', ['@laura_prietto', './images_min/coolserve/05-min.jpg']],
      subhead: 'Small Square Cool & Serve',
      text: '<p>The fun-sized Small Square Cool & Serve is perfect for parties, picnics, snacks, lunch on the go, and road trips. The exclusive gel insert (which features a handy finger slot for easy removal) keeps veggies, fruit, cheese, deli meat, dip, and other snacks cool for 4–6 hours—even outdoors!</p><br><p>It comes with a clear insert divided into two compartments with a 1-cup dip well in the center and has solid walls that keep food from mixing. The lid snaps onto the base so it’s easy to transport, and it even fits neatly underneath while in use.</p>'
    }, {
      yaw: -0.26892060769045756,
      pitch: 0.5234438282081175,
      title: 'WOOD SALAD BOWL & SERVERS SET',
      images: ['./images_min/salad_bowl-min/01-min.jpg', './images_min/salad_bowl-min/02-min.jpg', ['@thecraftofcooking', './images_min/salad_bowl-min/03-min.jpg'], ['@theparsleypotato', './images_min/salad_bowl-min/04-min.jpg']],
      subhead: 'Wood Salad Bowl & Servers Set',
      text: '<p>Even the simplest salads look impressive when served with this set. Our Wood Salad Bowl and Servers Set is made out of acacia wood with a rich color and beautiful grain that is not only durable, but moisture resistant. Each piece is one of a kind because of the natural variations in the wood.</p><br>The salad bowl holds a standard bag of lettuce with room for extra salad fixings. The serving spoon and fork are about 12-inches long and fit naturally into any party or dinner setting.<p>',
      recipes: [{
        id: 'Classic Cobb Salad',
        preview_image: './modals/salad/post-recipe-classic-cobb-salad-min.jpg',
        link: './modals/salad/flyer-recipe-classic-cobb-salad-02-usca.pdf'
      }, {
        id: 'Superfood Salad',
        preview_image: './modals/salad/post-recipe-superfood-salad-usca-min.jpg',
        link: './modals/salad/flyer-recipe-superfood-salad-usca.pdf'
      }, {
        id: 'Southwestern Salad',
        preview_image: './modals/salad/post-recipe-southwestern-salad-usca-min.jpg',
        link: './modals/salad/post-recipe-southwestern-salad-steps-usca.pdf'
      }]
    }]
  }],
  name: 'scenes-x4',
  settings: {
    mouseViewMode: 'drag',
    autorotateEnabled: false,
    fullscreenButton: true,
    viewControlButtons: false
  }
};
exports.data = data;
},{}],"node_modules/@popperjs/core/lib/enums.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modifierPhases = exports.afterWrite = exports.write = exports.beforeWrite = exports.afterMain = exports.main = exports.beforeMain = exports.afterRead = exports.read = exports.beforeRead = exports.placements = exports.variationPlacements = exports.reference = exports.popper = exports.viewport = exports.clippingParents = exports.end = exports.start = exports.basePlacements = exports.auto = exports.left = exports.right = exports.bottom = exports.top = void 0;
var top = 'top';
exports.top = top;
var bottom = 'bottom';
exports.bottom = bottom;
var right = 'right';
exports.right = right;
var left = 'left';
exports.left = left;
var auto = 'auto';
exports.auto = auto;
var basePlacements = [top, bottom, right, left];
exports.basePlacements = basePlacements;
var start = 'start';
exports.start = start;
var end = 'end';
exports.end = end;
var clippingParents = 'clippingParents';
exports.clippingParents = clippingParents;
var viewport = 'viewport';
exports.viewport = viewport;
var popper = 'popper';
exports.popper = popper;
var reference = 'reference';
exports.reference = reference;
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
exports.variationPlacements = variationPlacements;
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

exports.placements = placements;
var beforeRead = 'beforeRead';
exports.beforeRead = beforeRead;
var read = 'read';
exports.read = read;
var afterRead = 'afterRead'; // pure-logic modifiers

exports.afterRead = afterRead;
var beforeMain = 'beforeMain';
exports.beforeMain = beforeMain;
var main = 'main';
exports.main = main;
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

exports.afterMain = afterMain;
var beforeWrite = 'beforeWrite';
exports.beforeWrite = beforeWrite;
var write = 'write';
exports.write = write;
var afterWrite = 'afterWrite';
exports.afterWrite = afterWrite;
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
exports.modifierPhases = modifierPhases;
},{}],"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNodeName;

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getWindow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;

/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isElement = isElement;
exports.isHTMLElement = isHTMLElement;
exports.isShadowRoot = isShadowRoot;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */
function isElement(node) {
  var OwnElement = (0, _getWindow.default)(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = (0, _getWindow.default)(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
/*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
  ShadowRoot); */


function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = (0, _getWindow.default)(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/modifiers/applyStyles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getNodeName = _interopRequireDefault(require("../dom-utils/getNodeName.js"));

var _instanceOf = require("../dom-utils/instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0, _instanceOf.isHTMLElement)(element) || !(0, _getNodeName.default)(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};
exports.default = _default;
},{"../dom-utils/getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","../dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/utils/getBasePlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBasePlacement;

var _enums = require("../enums.js");

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBoundingClientRect;

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLayoutRect;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  var clientRect = (0, _getBoundingClientRect.default)(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 0.5) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 0.5) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
},{"./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js"}],"node_modules/@popperjs/core/lib/dom-utils/contains.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;

var _instanceOf = require("./instanceOf.js");

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && (0, _instanceOf.isShadowRoot)(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
},{"./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getComputedStyle;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComputedStyle(element) {
  return (0, _getWindow.default)(element).getComputedStyle(element);
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/dom-utils/isTableElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTableElement;

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf((0, _getNodeName.default)(element)) >= 0;
}
},{"./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js"}],"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocumentElement;

var _instanceOf = require("./instanceOf.js");

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (((0, _instanceOf.isElement)(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
},{"./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParentNode;

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _instanceOf = require("./instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getParentNode(element) {
  if ((0, _getNodeName.default)(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    (0, _instanceOf.isShadowRoot)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, _getDocumentElement.default)(element) // fallback

  );
}
},{"./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOffsetParent;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _instanceOf = require("./instanceOf.js");

var _isTableElement = _interopRequireDefault(require("./isTableElement.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTrueOffsetParent(element) {
  if (!(0, _instanceOf.isHTMLElement)(element) || // https://github.com/popperjs/popper-core/issues/837
  (0, _getComputedStyle.default)(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
  var currentNode = (0, _getParentNode.default)(element);

  while ((0, _instanceOf.isHTMLElement)(currentNode) && ['html', 'body'].indexOf((0, _getNodeName.default)(currentNode)) < 0) {
    var css = (0, _getComputedStyle.default)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].includes(css.willChange) || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = (0, _getWindow.default)(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && (0, _isTableElement.default)(offsetParent) && (0, _getComputedStyle.default)(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && ((0, _getNodeName.default)(offsetParent) === 'html' || (0, _getNodeName.default)(offsetParent) === 'body' && (0, _getComputedStyle.default)(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./isTableElement.js":"node_modules/@popperjs/core/lib/dom-utils/isTableElement.js","./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js"}],"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getMainAxisFromPlacement;

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
},{}],"node_modules/@popperjs/core/lib/utils/math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.round = exports.min = exports.max = void 0;
var max = Math.max;
exports.max = max;
var min = Math.min;
exports.min = min;
var round = Math.round;
exports.round = round;
},{}],"node_modules/@popperjs/core/lib/utils/within.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = within;

var _math = require("./math.js");

function within(min, value, max) {
  return (0, _math.max)(min, (0, _math.min)(value, max));
}
},{"./math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/utils/getFreshSideObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFreshSideObject;

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
},{}],"node_modules/@popperjs/core/lib/utils/mergePaddingObject.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergePaddingObject;

var _getFreshSideObject = _interopRequireDefault(require("./getFreshSideObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergePaddingObject(paddingObject) {
  return Object.assign({}, (0, _getFreshSideObject.default)(), paddingObject);
}
},{"./getFreshSideObject.js":"node_modules/@popperjs/core/lib/utils/getFreshSideObject.js"}],"node_modules/@popperjs/core/lib/utils/expandToHashMap.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = expandToHashMap;

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
},{}],"node_modules/@popperjs/core/lib/modifiers/arrow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));

var _contains = _interopRequireDefault(require("../dom-utils/contains.js"));

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));

var _within = _interopRequireDefault(require("../utils/within.js"));

var _mergePaddingObject = _interopRequireDefault(require("../utils/mergePaddingObject.js"));

var _expandToHashMap = _interopRequireDefault(require("../utils/expandToHashMap.js"));

var _enums = require("../enums.js");

var _instanceOf = require("../dom-utils/instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = (0, _getBasePlacement.default)(state.placement);
  var axis = (0, _getMainAxisFromPlacement.default)(basePlacement);
  var isVertical = [_enums.left, _enums.right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = (0, _getLayoutRect.default)(arrowElement);
  var minProp = axis === 'y' ? _enums.top : _enums.left;
  var maxProp = axis === 'y' ? _enums.bottom : _enums.right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = (0, _getOffsetParent.default)(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = (0, _within.default)(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if ("development" !== "production") {
    if (!(0, _instanceOf.isHTMLElement)(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!(0, _contains.default)(state.elements.popper, arrowElement)) {
    if ("development" !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
exports.default = _default;
},{"../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../dom-utils/getLayoutRect.js":"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","../dom-utils/contains.js":"node_modules/@popperjs/core/lib/dom-utils/contains.js","../dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../utils/getMainAxisFromPlacement.js":"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../utils/within.js":"node_modules/@popperjs/core/lib/utils/within.js","../utils/mergePaddingObject.js":"node_modules/@popperjs/core/lib/utils/mergePaddingObject.js","../utils/expandToHashMap.js":"node_modules/@popperjs/core/lib/utils/expandToHashMap.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","../dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/modifiers/computeStyles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapToStyles = mapToStyles;
exports.default = void 0;

var _enums = require("../enums.js");

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));

var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("../dom-utils/getComputedStyle.js"));

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: (0, _math.round)((0, _math.round)(x * dpr) / dpr) || 0,
    y: (0, _math.round)((0, _math.round)(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = _enums.left;
  var sideY = _enums.top;
  var win = window;

  if (adaptive) {
    var offsetParent = (0, _getOffsetParent.default)(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === (0, _getWindow.default)(popper)) {
      offsetParent = (0, _getDocumentElement.default)(popper);

      if ((0, _getComputedStyle.default)(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === _enums.top) {
      sideY = _enums.bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === _enums.left) {
      sideX = _enums.right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if ("development" !== "production") {
    var transitionProperty = (0, _getComputedStyle.default)(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: (0, _getBasePlacement.default)(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};
exports.default = _default;
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","../dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../dom-utils/getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","../dom-utils/getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","../dom-utils/getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/modifiers/eventListeners.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getWindow = _interopRequireDefault(require("../dom-utils/getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = (0, _getWindow.default)(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};
exports.default = _default;
},{"../dom-utils/getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/utils/getOppositePlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOppositePlacement;
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};

function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
},{}],"node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOppositeVariationPlacement;
var hash = {
  start: 'end',
  end: 'start'
};

function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindowScroll;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWindowScroll(node) {
  var win = (0, _getWindow.default)(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js"}],"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindowScrollBarX;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (0, _getBoundingClientRect.default)((0, _getDocumentElement.default)(element)).left + (0, _getWindowScroll.default)(element).scrollLeft;
}
},{"./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getWindowScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js"}],"node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getViewportRect;

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getViewportRect(element) {
  var win = (0, _getWindow.default)(element);
  var html = (0, _getDocumentElement.default)(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + (0, _getWindowScrollBarX.default)(element),
    y: y
  };
}
},{"./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getWindowScrollBarX.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js"}],"node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocumentRect;

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = (0, _getDocumentElement.default)(element);
  var winScroll = (0, _getWindowScroll.default)(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = (0, _math.max)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = (0, _math.max)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + (0, _getWindowScrollBarX.default)(element);
  var y = -winScroll.scrollTop;

  if ((0, _getComputedStyle.default)(body || html).direction === 'rtl') {
    x += (0, _math.max)(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
},{"./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./getWindowScrollBarX.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js","./getWindowScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isScrollParent;

var _getComputedStyle2 = _interopRequireDefault(require("./getComputedStyle.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = (0, _getComputedStyle2.default)(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
},{"./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js"}],"node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScrollParent;

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _instanceOf = require("./instanceOf.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf((0, _getNodeName.default)(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if ((0, _instanceOf.isHTMLElement)(node) && (0, _isScrollParent.default)(node)) {
    return node;
  }

  return getScrollParent((0, _getParentNode.default)(node));
}
},{"./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./isScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js"}],"node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = listScrollParents;

var _getScrollParent = _interopRequireDefault(require("./getScrollParent.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/
function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = (0, _getScrollParent.default)(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = (0, _getWindow.default)(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], (0, _isScrollParent.default)(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents((0, _getParentNode.default)(target)));
}
},{"./getScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js","./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./isScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js"}],"node_modules/@popperjs/core/lib/utils/rectToClientRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rectToClientRect;

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClippingRect;

var _enums = require("../enums.js");

var _getViewportRect = _interopRequireDefault(require("./getViewportRect.js"));

var _getDocumentRect = _interopRequireDefault(require("./getDocumentRect.js"));

var _listScrollParents = _interopRequireDefault(require("./listScrollParents.js"));

var _getOffsetParent = _interopRequireDefault(require("./getOffsetParent.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _getComputedStyle = _interopRequireDefault(require("./getComputedStyle.js"));

var _instanceOf = require("./instanceOf.js");

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getParentNode = _interopRequireDefault(require("./getParentNode.js"));

var _contains = _interopRequireDefault(require("./contains.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _rectToClientRect = _interopRequireDefault(require("../utils/rectToClientRect.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getInnerBoundingClientRect(element) {
  var rect = (0, _getBoundingClientRect.default)(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === _enums.viewport ? (0, _rectToClientRect.default)((0, _getViewportRect.default)(element)) : (0, _instanceOf.isHTMLElement)(clippingParent) ? getInnerBoundingClientRect(clippingParent) : (0, _rectToClientRect.default)((0, _getDocumentRect.default)((0, _getDocumentElement.default)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = (0, _listScrollParents.default)((0, _getParentNode.default)(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf((0, _getComputedStyle.default)(element).position) >= 0;
  var clipperElement = canEscapeClipping && (0, _instanceOf.isHTMLElement)(element) ? (0, _getOffsetParent.default)(element) : element;

  if (!(0, _instanceOf.isElement)(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return (0, _instanceOf.isElement)(clippingParent) && (0, _contains.default)(clippingParent, clipperElement) && (0, _getNodeName.default)(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = (0, _math.max)(rect.top, accRect.top);
    accRect.right = (0, _math.min)(rect.right, accRect.right);
    accRect.bottom = (0, _math.min)(rect.bottom, accRect.bottom);
    accRect.left = (0, _math.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","./getViewportRect.js":"node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js","./getDocumentRect.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js","./listScrollParents.js":"node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js","./getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getParentNode.js":"node_modules/@popperjs/core/lib/dom-utils/getParentNode.js","./contains.js":"node_modules/@popperjs/core/lib/dom-utils/contains.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","../utils/rectToClientRect.js":"node_modules/@popperjs/core/lib/utils/rectToClientRect.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/utils/getVariation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVariation;

function getVariation(placement) {
  return placement.split('-')[1];
}
},{}],"node_modules/@popperjs/core/lib/utils/computeOffsets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeOffsets;

var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));

var _getVariation = _interopRequireDefault(require("./getVariation.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("./getMainAxisFromPlacement.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? (0, _getBasePlacement.default)(placement) : null;
  var variation = placement ? (0, _getVariation.default)(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case _enums.top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case _enums.bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case _enums.right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case _enums.left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? (0, _getMainAxisFromPlacement.default)(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case _enums.start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case _enums.end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
},{"./getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","./getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","./getMainAxisFromPlacement.js":"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/utils/detectOverflow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectOverflow;

var _getBoundingClientRect = _interopRequireDefault(require("../dom-utils/getBoundingClientRect.js"));

var _getClippingRect = _interopRequireDefault(require("../dom-utils/getClippingRect.js"));

var _getDocumentElement = _interopRequireDefault(require("../dom-utils/getDocumentElement.js"));

var _computeOffsets = _interopRequireDefault(require("./computeOffsets.js"));

var _rectToClientRect = _interopRequireDefault(require("./rectToClientRect.js"));

var _enums = require("../enums.js");

var _instanceOf = require("../dom-utils/instanceOf.js");

var _mergePaddingObject = _interopRequireDefault(require("./mergePaddingObject.js"));

var _expandToHashMap = _interopRequireDefault(require("./expandToHashMap.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? _enums.clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? _enums.viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? _enums.popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = (0, _mergePaddingObject.default)(typeof padding !== 'number' ? padding : (0, _expandToHashMap.default)(padding, _enums.basePlacements));
  var altContext = elementContext === _enums.popper ? _enums.reference : _enums.popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = (0, _getClippingRect.default)((0, _instanceOf.isElement)(element) ? element : element.contextElement || (0, _getDocumentElement.default)(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = (0, _getBoundingClientRect.default)(referenceElement);
  var popperOffsets = (0, _computeOffsets.default)({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = (0, _rectToClientRect.default)(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === _enums.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === _enums.popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [_enums.right, _enums.bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [_enums.top, _enums.bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
},{"../dom-utils/getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","../dom-utils/getClippingRect.js":"node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js","../dom-utils/getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./computeOffsets.js":"node_modules/@popperjs/core/lib/utils/computeOffsets.js","./rectToClientRect.js":"node_modules/@popperjs/core/lib/utils/rectToClientRect.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","../dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./mergePaddingObject.js":"node_modules/@popperjs/core/lib/utils/mergePaddingObject.js","./expandToHashMap.js":"node_modules/@popperjs/core/lib/utils/expandToHashMap.js"}],"node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computeAutoPlacement;

var _getVariation = _interopRequireDefault(require("./getVariation.js"));

var _enums = require("../enums.js");

var _detectOverflow = _interopRequireDefault(require("./detectOverflow.js"));

var _getBasePlacement = _interopRequireDefault(require("./getBasePlacement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? _enums.placements : _options$allowedAutoP;
  var variation = (0, _getVariation.default)(placement);
  var placements = variation ? flipVariations ? _enums.variationPlacements : _enums.variationPlacements.filter(function (placement) {
    return (0, _getVariation.default)(placement) === variation;
  }) : _enums.basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if ("development" !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = (0, _detectOverflow.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[(0, _getBasePlacement.default)(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
},{"./getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","./detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","./getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js"}],"node_modules/@popperjs/core/lib/modifiers/flip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getOppositePlacement = _interopRequireDefault(require("../utils/getOppositePlacement.js"));

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getOppositeVariationPlacement = _interopRequireDefault(require("../utils/getOppositeVariationPlacement.js"));

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

var _computeAutoPlacement = _interopRequireDefault(require("../utils/computeAutoPlacement.js"));

var _enums = require("../enums.js");

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/no-unused-modules
function getExpandedFallbackPlacements(placement) {
  if ((0, _getBasePlacement.default)(placement) === _enums.auto) {
    return [];
  }

  var oppositePlacement = (0, _getOppositePlacement.default)(placement);
  return [(0, _getOppositeVariationPlacement.default)(placement), oppositePlacement, (0, _getOppositeVariationPlacement.default)(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = (0, _getBasePlacement.default)(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [(0, _getOppositePlacement.default)(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat((0, _getBasePlacement.default)(placement) === _enums.auto ? (0, _computeAutoPlacement.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = (0, _getBasePlacement.default)(placement);

    var isStartVariation = (0, _getVariation.default)(placement) === _enums.start;

    var isVertical = [_enums.top, _enums.bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = (0, _detectOverflow.default)(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? _enums.right : _enums.left : isStartVariation ? _enums.bottom : _enums.top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
    }

    var altVariationSide = (0, _getOppositePlacement.default)(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};
exports.default = _default;
},{"../utils/getOppositePlacement.js":"node_modules/@popperjs/core/lib/utils/getOppositePlacement.js","../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/getOppositeVariationPlacement.js":"node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js","../utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","../utils/computeAutoPlacement.js":"node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js","../utils/getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js"}],"node_modules/@popperjs/core/lib/modifiers/hide.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enums = require("../enums.js");

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [_enums.top, _enums.right, _enums.bottom, _enums.left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0, _detectOverflow.default)(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0, _detectOverflow.default)(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};
exports.default = _default;
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","../utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js"}],"node_modules/@popperjs/core/lib/modifiers/offset.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distanceAndSkiddingToXY = distanceAndSkiddingToXY;
exports.default = void 0;

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = (0, _getBasePlacement.default)(placement);
  var invertDistance = [_enums.left, _enums.top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [_enums.left, _enums.right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;

  var data = _enums.placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});

  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};
exports.default = _default;
},{"../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _computeOffsets = _interopRequireDefault(require("../utils/computeOffsets.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = (0, _computeOffsets.default)({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};
exports.default = _default;
},{"../utils/computeOffsets.js":"node_modules/@popperjs/core/lib/utils/computeOffsets.js"}],"node_modules/@popperjs/core/lib/utils/getAltAxis.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAltAxis;

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
},{}],"node_modules/@popperjs/core/lib/modifiers/preventOverflow.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enums = require("../enums.js");

var _getBasePlacement = _interopRequireDefault(require("../utils/getBasePlacement.js"));

var _getMainAxisFromPlacement = _interopRequireDefault(require("../utils/getMainAxisFromPlacement.js"));

var _getAltAxis = _interopRequireDefault(require("../utils/getAltAxis.js"));

var _within = _interopRequireDefault(require("../utils/within.js"));

var _getLayoutRect = _interopRequireDefault(require("../dom-utils/getLayoutRect.js"));

var _getOffsetParent = _interopRequireDefault(require("../dom-utils/getOffsetParent.js"));

var _detectOverflow = _interopRequireDefault(require("../utils/detectOverflow.js"));

var _getVariation = _interopRequireDefault(require("../utils/getVariation.js"));

var _getFreshSideObject = _interopRequireDefault(require("../utils/getFreshSideObject.js"));

var _math = require("../utils/math.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = (0, _detectOverflow.default)(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = (0, _getBasePlacement.default)(state.placement);
  var variation = (0, _getVariation.default)(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = (0, _getMainAxisFromPlacement.default)(basePlacement);
  var altAxis = (0, _getAltAxis.default)(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? _enums.top : _enums.left;
    var altSide = mainAxis === 'y' ? _enums.bottom : _enums.right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === _enums.start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === _enums.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? (0, _getLayoutRect.default)(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : (0, _getFreshSideObject.default)();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = (0, _within.default)(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && (0, _getOffsetParent.default)(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = (0, _within.default)(tether ? (0, _math.min)(min, tetherMin) : min, offset, tether ? (0, _math.max)(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? _enums.top : _enums.left;

      var _altSide = mainAxis === 'x' ? _enums.bottom : _enums.right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = (0, _within.default)(tether ? (0, _math.min)(_min, tetherMin) : _min, _offset, tether ? (0, _math.max)(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var _default = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};
exports.default = _default;
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js","../utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","../utils/getMainAxisFromPlacement.js":"node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js","../utils/getAltAxis.js":"node_modules/@popperjs/core/lib/utils/getAltAxis.js","../utils/within.js":"node_modules/@popperjs/core/lib/utils/within.js","../dom-utils/getLayoutRect.js":"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","../dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","../utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","../utils/getVariation.js":"node_modules/@popperjs/core/lib/utils/getVariation.js","../utils/getFreshSideObject.js":"node_modules/@popperjs/core/lib/utils/getFreshSideObject.js","../utils/math.js":"node_modules/@popperjs/core/lib/utils/math.js"}],"node_modules/@popperjs/core/lib/modifiers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "applyStyles", {
  enumerable: true,
  get: function () {
    return _applyStyles.default;
  }
});
Object.defineProperty(exports, "arrow", {
  enumerable: true,
  get: function () {
    return _arrow.default;
  }
});
Object.defineProperty(exports, "computeStyles", {
  enumerable: true,
  get: function () {
    return _computeStyles.default;
  }
});
Object.defineProperty(exports, "eventListeners", {
  enumerable: true,
  get: function () {
    return _eventListeners.default;
  }
});
Object.defineProperty(exports, "flip", {
  enumerable: true,
  get: function () {
    return _flip.default;
  }
});
Object.defineProperty(exports, "hide", {
  enumerable: true,
  get: function () {
    return _hide.default;
  }
});
Object.defineProperty(exports, "offset", {
  enumerable: true,
  get: function () {
    return _offset.default;
  }
});
Object.defineProperty(exports, "popperOffsets", {
  enumerable: true,
  get: function () {
    return _popperOffsets.default;
  }
});
Object.defineProperty(exports, "preventOverflow", {
  enumerable: true,
  get: function () {
    return _preventOverflow.default;
  }
});

var _applyStyles = _interopRequireDefault(require("./applyStyles.js"));

var _arrow = _interopRequireDefault(require("./arrow.js"));

var _computeStyles = _interopRequireDefault(require("./computeStyles.js"));

var _eventListeners = _interopRequireDefault(require("./eventListeners.js"));

var _flip = _interopRequireDefault(require("./flip.js"));

var _hide = _interopRequireDefault(require("./hide.js"));

var _offset = _interopRequireDefault(require("./offset.js"));

var _popperOffsets = _interopRequireDefault(require("./popperOffsets.js"));

var _preventOverflow = _interopRequireDefault(require("./preventOverflow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./applyStyles.js":"node_modules/@popperjs/core/lib/modifiers/applyStyles.js","./arrow.js":"node_modules/@popperjs/core/lib/modifiers/arrow.js","./computeStyles.js":"node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./eventListeners.js":"node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./flip.js":"node_modules/@popperjs/core/lib/modifiers/flip.js","./hide.js":"node_modules/@popperjs/core/lib/modifiers/hide.js","./offset.js":"node_modules/@popperjs/core/lib/modifiers/offset.js","./popperOffsets.js":"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./preventOverflow.js":"node_modules/@popperjs/core/lib/modifiers/preventOverflow.js"}],"node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHTMLElementScroll;

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
},{}],"node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNodeScroll;

var _getWindowScroll = _interopRequireDefault(require("./getWindowScroll.js"));

var _getWindow = _interopRequireDefault(require("./getWindow.js"));

var _instanceOf = require("./instanceOf.js");

var _getHTMLElementScroll = _interopRequireDefault(require("./getHTMLElementScroll.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNodeScroll(node) {
  if (node === (0, _getWindow.default)(node) || !(0, _instanceOf.isHTMLElement)(node)) {
    return (0, _getWindowScroll.default)(node);
  } else {
    return (0, _getHTMLElementScroll.default)(node);
  }
}
},{"./getWindowScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js","./getWindow.js":"node_modules/@popperjs/core/lib/dom-utils/getWindow.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getHTMLElementScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js"}],"node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCompositeRect;

var _getBoundingClientRect = _interopRequireDefault(require("./getBoundingClientRect.js"));

var _getNodeScroll = _interopRequireDefault(require("./getNodeScroll.js"));

var _getNodeName = _interopRequireDefault(require("./getNodeName.js"));

var _instanceOf = require("./instanceOf.js");

var _getWindowScrollBarX = _interopRequireDefault(require("./getWindowScrollBarX.js"));

var _getDocumentElement = _interopRequireDefault(require("./getDocumentElement.js"));

var _isScrollParent = _interopRequireDefault(require("./isScrollParent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = (0, _getDocumentElement.default)(offsetParent);
  var rect = (0, _getBoundingClientRect.default)(elementOrVirtualElement);
  var isOffsetParentAnElement = (0, _instanceOf.isHTMLElement)(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0, _getNodeName.default)(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    (0, _isScrollParent.default)(documentElement)) {
      scroll = (0, _getNodeScroll.default)(offsetParent);
    }

    if ((0, _instanceOf.isHTMLElement)(offsetParent)) {
      offsets = (0, _getBoundingClientRect.default)(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = (0, _getWindowScrollBarX.default)(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
},{"./getBoundingClientRect.js":"node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js","./getNodeScroll.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js","./getNodeName.js":"node_modules/@popperjs/core/lib/dom-utils/getNodeName.js","./instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./getWindowScrollBarX.js":"node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js","./getDocumentElement.js":"node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js","./isScrollParent.js":"node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js"}],"node_modules/@popperjs/core/lib/utils/orderModifiers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = orderModifiers;

var _enums = require("../enums.js");

// source: https://stackoverflow.com/questions/49875255
function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return _enums.modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
},{"../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/utils/debounce.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
},{}],"node_modules/@popperjs/core/lib/utils/format.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}
},{}],"node_modules/@popperjs/core/lib/utils/validateModifiers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateModifiers;

var _format = _interopRequireDefault(require("./format.js"));

var _enums = require("../enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];

function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (_enums.modifierPhases.indexOf(modifier.phase) < 0) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + _enums.modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error((0, _format.default)(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error((0, _format.default)(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}
},{"./format.js":"node_modules/@popperjs/core/lib/utils/format.js","../enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/utils/uniqueBy.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniqueBy;

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}
},{}],"node_modules/@popperjs/core/lib/utils/mergeByName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeByName;

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
},{}],"node_modules/@popperjs/core/lib/createPopper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popperGenerator = popperGenerator;
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _detectOverflow.default;
  }
});
exports.createPopper = void 0;

var _getCompositeRect = _interopRequireDefault(require("./dom-utils/getCompositeRect.js"));

var _getLayoutRect = _interopRequireDefault(require("./dom-utils/getLayoutRect.js"));

var _listScrollParents = _interopRequireDefault(require("./dom-utils/listScrollParents.js"));

var _getOffsetParent = _interopRequireDefault(require("./dom-utils/getOffsetParent.js"));

var _getComputedStyle2 = _interopRequireDefault(require("./dom-utils/getComputedStyle.js"));

var _orderModifiers = _interopRequireDefault(require("./utils/orderModifiers.js"));

var _debounce = _interopRequireDefault(require("./utils/debounce.js"));

var _validateModifiers = _interopRequireDefault(require("./utils/validateModifiers.js"));

var _uniqueBy = _interopRequireDefault(require("./utils/uniqueBy.js"));

var _getBasePlacement = _interopRequireDefault(require("./utils/getBasePlacement.js"));

var _mergeByName = _interopRequireDefault(require("./utils/mergeByName.js"));

var _detectOverflow = _interopRequireDefault(require("./utils/detectOverflow.js"));

var _instanceOf = require("./dom-utils/instanceOf.js");

var _enums = require("./enums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: (0, _instanceOf.isElement)(reference) ? (0, _listScrollParents.default)(reference) : reference.contextElement ? (0, _listScrollParents.default)(reference.contextElement) : [],
          popper: (0, _listScrollParents.default)(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = (0, _orderModifiers.default)((0, _mergeByName.default)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if ("development" !== "production") {
          var modifiers = (0, _uniqueBy.default)([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          (0, _validateModifiers.default)(modifiers);

          if ((0, _getBasePlacement.default)(state.options.placement) === _enums.auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = (0, _getComputedStyle2.default)(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if ("development" !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: (0, _getCompositeRect.default)(reference, (0, _getOffsetParent.default)(popper), state.options.strategy === 'fixed'),
          popper: (0, _getLayoutRect.default)(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if ("development" !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: (0, _debounce.default)(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if ("development" !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./dom-utils/getCompositeRect.js":"node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js","./dom-utils/getLayoutRect.js":"node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js","./dom-utils/listScrollParents.js":"node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js","./dom-utils/getOffsetParent.js":"node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js","./dom-utils/getComputedStyle.js":"node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js","./utils/orderModifiers.js":"node_modules/@popperjs/core/lib/utils/orderModifiers.js","./utils/debounce.js":"node_modules/@popperjs/core/lib/utils/debounce.js","./utils/validateModifiers.js":"node_modules/@popperjs/core/lib/utils/validateModifiers.js","./utils/uniqueBy.js":"node_modules/@popperjs/core/lib/utils/uniqueBy.js","./utils/getBasePlacement.js":"node_modules/@popperjs/core/lib/utils/getBasePlacement.js","./utils/mergeByName.js":"node_modules/@popperjs/core/lib/utils/mergeByName.js","./utils/detectOverflow.js":"node_modules/@popperjs/core/lib/utils/detectOverflow.js","./dom-utils/instanceOf.js":"node_modules/@popperjs/core/lib/dom-utils/instanceOf.js","./enums.js":"node_modules/@popperjs/core/lib/enums.js"}],"node_modules/@popperjs/core/lib/popper-lite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
exports.defaultModifiers = exports.createPopper = void 0;

var _createPopper = require("./createPopper.js");

var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));

var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));

var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));

var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default];
exports.defaultModifiers = defaultModifiers;
var createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./createPopper.js":"node_modules/@popperjs/core/lib/createPopper.js","./modifiers/eventListeners.js":"node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./modifiers/popperOffsets.js":"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./modifiers/computeStyles.js":"node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./modifiers/applyStyles.js":"node_modules/@popperjs/core/lib/modifiers/applyStyles.js"}],"node_modules/@popperjs/core/lib/popper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createPopper: true,
  defaultModifiers: true,
  popperGenerator: true,
  detectOverflow: true,
  createPopperLite: true
};
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "createPopperLite", {
  enumerable: true,
  get: function () {
    return _popperLite.createPopper;
  }
});
exports.defaultModifiers = exports.createPopper = void 0;

var _createPopper = require("./createPopper.js");

var _eventListeners = _interopRequireDefault(require("./modifiers/eventListeners.js"));

var _popperOffsets = _interopRequireDefault(require("./modifiers/popperOffsets.js"));

var _computeStyles = _interopRequireDefault(require("./modifiers/computeStyles.js"));

var _applyStyles = _interopRequireDefault(require("./modifiers/applyStyles.js"));

var _offset = _interopRequireDefault(require("./modifiers/offset.js"));

var _flip = _interopRequireDefault(require("./modifiers/flip.js"));

var _preventOverflow = _interopRequireDefault(require("./modifiers/preventOverflow.js"));

var _arrow = _interopRequireDefault(require("./modifiers/arrow.js"));

var _hide = _interopRequireDefault(require("./modifiers/hide.js"));

var _popperLite = require("./popper-lite.js");

var _index = require("./modifiers/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultModifiers = [_eventListeners.default, _popperOffsets.default, _computeStyles.default, _applyStyles.default, _offset.default, _flip.default, _preventOverflow.default, _arrow.default, _hide.default];
exports.defaultModifiers = defaultModifiers;
var createPopper = /*#__PURE__*/(0, _createPopper.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

exports.createPopper = createPopper;
},{"./createPopper.js":"node_modules/@popperjs/core/lib/createPopper.js","./modifiers/eventListeners.js":"node_modules/@popperjs/core/lib/modifiers/eventListeners.js","./modifiers/popperOffsets.js":"node_modules/@popperjs/core/lib/modifiers/popperOffsets.js","./modifiers/computeStyles.js":"node_modules/@popperjs/core/lib/modifiers/computeStyles.js","./modifiers/applyStyles.js":"node_modules/@popperjs/core/lib/modifiers/applyStyles.js","./modifiers/offset.js":"node_modules/@popperjs/core/lib/modifiers/offset.js","./modifiers/flip.js":"node_modules/@popperjs/core/lib/modifiers/flip.js","./modifiers/preventOverflow.js":"node_modules/@popperjs/core/lib/modifiers/preventOverflow.js","./modifiers/arrow.js":"node_modules/@popperjs/core/lib/modifiers/arrow.js","./modifiers/hide.js":"node_modules/@popperjs/core/lib/modifiers/hide.js","./popper-lite.js":"node_modules/@popperjs/core/lib/popper-lite.js","./modifiers/index.js":"node_modules/@popperjs/core/lib/modifiers/index.js"}],"node_modules/@popperjs/core/lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  popperGenerator: true,
  detectOverflow: true,
  createPopperBase: true,
  createPopper: true,
  createPopperLite: true
};
Object.defineProperty(exports, "popperGenerator", {
  enumerable: true,
  get: function () {
    return _createPopper.popperGenerator;
  }
});
Object.defineProperty(exports, "detectOverflow", {
  enumerable: true,
  get: function () {
    return _createPopper.detectOverflow;
  }
});
Object.defineProperty(exports, "createPopperBase", {
  enumerable: true,
  get: function () {
    return _createPopper.createPopper;
  }
});
Object.defineProperty(exports, "createPopper", {
  enumerable: true,
  get: function () {
    return _popper.createPopper;
  }
});
Object.defineProperty(exports, "createPopperLite", {
  enumerable: true,
  get: function () {
    return _popperLite.createPopper;
  }
});

var _enums = require("./enums.js");

Object.keys(_enums).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _enums[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _enums[key];
    }
  });
});

var _index = require("./modifiers/index.js");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index[key];
    }
  });
});

var _createPopper = require("./createPopper.js");

var _popper = require("./popper.js");

var _popperLite = require("./popper-lite.js");
},{"./enums.js":"node_modules/@popperjs/core/lib/enums.js","./modifiers/index.js":"node_modules/@popperjs/core/lib/modifiers/index.js","./createPopper.js":"node_modules/@popperjs/core/lib/createPopper.js","./popper.js":"node_modules/@popperjs/core/lib/popper.js","./popper-lite.js":"node_modules/@popperjs/core/lib/popper-lite.js"}],"vendor/screenfull.min.js":[function(require,module,exports) {
/*!
* screenfull
* v4.0.0 - 2018-12-15
* (c) Sindre Sorhus; MIT License
*/
!function () {
  "use strict";

  var u = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
      e = "undefined" != typeof module && module.exports,
      t = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
      c = function () {
    for (var e, n = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], r = 0, l = n.length, t = {}; r < l; r++) {
      if ((e = n[r]) && e[1] in u) {
        for (r = 0; r < e.length; r++) {
          t[n[0][r]] = e[r];
        }

        return t;
      }
    }

    return !1;
  }(),
      l = {
    change: c.fullscreenchange,
    error: c.fullscreenerror
  },
      n = {
    request: function request(l) {
      return new Promise(function (e) {
        var n = c.requestFullscreen,
            r = function () {
          this.off("change", r), e();
        }.bind(this);

        l = l || u.documentElement, / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? l[n]() : l[n](t ? Element.ALLOW_KEYBOARD_INPUT : {}), this.on("change", r);
      }.bind(this));
    },
    exit: function exit() {
      return new Promise(function (e) {
        var n = function () {
          this.off("change", n), e();
        }.bind(this);

        u[c.exitFullscreen](), this.on("change", n);
      }.bind(this));
    },
    toggle: function toggle(e) {
      return this.isFullscreen ? this.exit() : this.request(e);
    },
    onchange: function onchange(e) {
      this.on("change", e);
    },
    onerror: function onerror(e) {
      this.on("error", e);
    },
    on: function on(e, n) {
      var r = l[e];
      r && u.addEventListener(r, n, !1);
    },
    off: function off(e, n) {
      var r = l[e];
      r && u.removeEventListener(r, n, !1);
    },
    raw: c
  };

  c ? (Object.defineProperties(n, {
    isFullscreen: {
      get: function get() {
        return Boolean(u[c.fullscreenElement]);
      }
    },
    element: {
      enumerable: !0,
      get: function get() {
        return u[c.fullscreenElement];
      }
    },
    enabled: {
      enumerable: !0,
      get: function get() {
        return Boolean(u[c.fullscreenEnabled]);
      }
    }
  }), e ? module.exports = n : window.screenfull = n) : e ? module.exports = !1 : window.screenfull = !1;
}();
},{}],"node_modules/shepherd.js/dist/js/shepherd.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! shepherd.js 8.1.0 */
var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
  return !!value && _typeof(value) === 'object';
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}

function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}

function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }

  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}

function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
} // Protects from prototype poisoning and unexpected merging up the prototype chain.


function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
  var destination = {};

  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }

  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }

    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}

function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.

  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }

  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};

var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
/**
 * Checks if `value` is classified as an `Element`.
 * @param {*} value The param to check if it is an Element
 */

function isElement(value) {
  return value instanceof Element;
}
/**
 * Checks if `value` is classified as an `HTMLElement`.
 * @param {*} value The param to check if it is an HTMLElement
 */


function isHTMLElement(value) {
  return value instanceof HTMLElement;
}
/**
 * Checks if `value` is classified as a `Function` object.
 * @param {*} value The param to check if it is a function
 */


function isFunction(value) {
  return typeof value === 'function';
}
/**
 * Checks if `value` is classified as a `String` object.
 * @param {*} value The param to check if it is a string
 */


function isString(value) {
  return typeof value === 'string';
}
/**
 * Checks if `value` is undefined.
 * @param {*} value The param to check if it is undefined
 */


function isUndefined(value) {
  return value === undefined;
}

var Evented = /*#__PURE__*/function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: "on",
    value: function on(event, handler, ctx) {
      var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (isUndefined(this.bindings)) {
        this.bindings = {};
      }

      if (isUndefined(this.bindings[event])) {
        this.bindings[event] = [];
      }

      this.bindings[event].push({
        handler: handler,
        ctx: ctx,
        once: once
      });
      return this;
    }
  }, {
    key: "once",
    value: function once(event, handler, ctx) {
      return this.on(event, handler, ctx, true);
    }
  }, {
    key: "off",
    value: function off(event, handler) {
      var _this = this;

      if (isUndefined(this.bindings) || isUndefined(this.bindings[event])) {
        return this;
      }

      if (isUndefined(handler)) {
        delete this.bindings[event];
      } else {
        this.bindings[event].forEach(function (binding, index) {
          if (binding.handler === handler) {
            _this.bindings[event].splice(index, 1);
          }
        });
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(event) {
      var _this2 = this;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      if (!isUndefined(this.bindings) && this.bindings[event]) {
        this.bindings[event].forEach(function (binding, index) {
          var ctx = binding.ctx,
              handler = binding.handler,
              once = binding.once;
          var context = ctx || _this2;
          handler.apply(context, args);

          if (once) {
            _this2.bindings[event].splice(index, 1);
          }
        });
      }

      return this;
    }
  }]);

  return Evented;
}();
/**
 * Binds all the methods on a JS Class to the `this` context of the class.
 * Adapted from https://github.com/sindresorhus/auto-bind
 * @param {object} self The `this` context of the class
 * @return {object} The `this` context of the class
 */


function autoBind(self) {
  var keys = Object.getOwnPropertyNames(self.constructor.prototype);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var val = self[key];

    if (key !== 'constructor' && typeof val === 'function') {
      self[key] = val.bind(self);
    }
  }

  return self;
}
/**
 * Sets up the handler to determine if we should advance the tour
 * @param {string} selector
 * @param {Step} step The step instance
 * @return {Function}
 * @private
 */


function _setupAdvanceOnHandler(selector, step) {
  return function (event) {
    if (step.isOpen()) {
      var targetIsEl = step.el && event.currentTarget === step.el;
      var targetIsSelector = !isUndefined(selector) && event.currentTarget.matches(selector);

      if (targetIsSelector || targetIsEl) {
        step.tour.next();
      }
    }
  };
}
/**
 * Bind the event handler for advanceOn
 * @param {Step} step The step instance
 */


function bindAdvance(step) {
  // An empty selector matches the step element
  var _ref4 = step.options.advanceOn || {},
      event = _ref4.event,
      selector = _ref4.selector;

  if (event) {
    var handler = _setupAdvanceOnHandler(selector, step); // TODO: this should also bind/unbind on show/hide


    var el;

    try {
      el = document.querySelector(selector);
    } catch (e) {// TODO
    }

    if (!isUndefined(selector) && !el) {
      return console.error("No element was found for the selector supplied to advanceOn: ".concat(selector));
    } else if (el) {
      el.addEventListener(event, handler);
      step.on('destroy', function () {
        return el.removeEventListener(event, handler);
      });
    } else {
      document.body.addEventListener(event, handler, true);
      step.on('destroy', function () {
        return document.body.removeEventListener(event, handler, true);
      });
    }
  } else {
    return console.error('advanceOn was defined, but no event name was passed.');
  }
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */


function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */


function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement$1(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
} // and applies them to the HTMLElements such as popper and arrow


function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement$1(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement$1(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
} // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.


function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // $FlowFixMe: Node is not aware of host

  var isShadow = Boolean(rootNode && rootNode.host); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (isShadow) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe: assume body is always available
  return ((isElement$1(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement$1(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  var offsetParent = element.offsetParent;

  if (offsetParent) {
    var html = getDocumentElement(offsetParent);

    if (getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && getComputedStyle(html).position !== 'static') {
      return html;
    }
  }

  return offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var currentNode = getParentNode(element);

  while (isHTMLElement$1(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
  };
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};
var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsets(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive;

  var _roundOffsets = roundOffsets(offsets),
      x = _roundOffsets.x,
      y = _roundOffsets.y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === top) {
      sideY = bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref3) {
  var state = _ref3.state,
      options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false
    })));
  }

  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};

function effect$2(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$2,
  data: {}
};
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};

function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

var hash$1 = {
  start: 'end',
  end: 'start'
};

function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash$1[matched];
  });
}

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
} // of the `<html>` and `<body>` rect bounds if horizontally scrollable


function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement$1(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the 
reference element's position.
*/


function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = getNodeName(scrollParent) === 'body';
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign(Object.assign({}, rect), {}, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement$1(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement$1(element) ? getOffsetParent(element) : element;

  if (!isElement$1(clipperElement)) {
    return [];
  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement$1(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement$1(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */


function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements; // $FlowFixMe

  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = within(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement$1(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
} // Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement$1(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement$1(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
        state.scrollParents = {
          reference: isElement$1(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _getCenteredStylePopperModifier() {
  return [{
    name: 'applyStyles',
    fn: function (_ref5) {
      var state = _ref5.state;
      Object.keys(state.elements).forEach(function (name) {
        if (name !== 'popper') {
          return;
        }

        var style = {
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        };
        var attributes = state.attributes[name] || {};
        var element = state.elements[name];
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (name) {
          var value = attributes[name];

          if (value === false) {
            element.removeAttribute(name);
          } else {
            element.setAttribute(name, value === true ? '' : value);
          }
        });
      });
    }
  }, {
    name: 'computeStyles',
    options: {
      adaptive: false
    }
  }];
}
/**
 * Generates the array of options for a tooltip that doesn't have a
 * target element in the DOM -- and thus is positioned in the center
 * of the view
 *
 * @param {Step} step The step instance
 * @return {Object} The final Popper options object
 */


function makeCenteredPopper(step) {
  var centeredStylePopperModifier = _getCenteredStylePopperModifier();

  var popperOptions = {
    placement: 'top',
    strategy: 'fixed',
    modifiers: [{
      name: 'focusAfterRender',
      enabled: true,
      phase: 'afterWrite',
      fn: function () {
        setTimeout(function () {
          if (step.el) {
            step.el.focus();
          }
        }, 300);
      }
    }]
  };
  popperOptions = _extends({}, popperOptions, {
    modifiers: Array.from(new Set([].concat(_toConsumableArray(popperOptions.modifiers), _toConsumableArray(centeredStylePopperModifier))))
  });
  return popperOptions;
}
/**
 * Ensure class prefix ends in `-`
 * @param {string} prefix The prefix to prepend to the class names generated by nano-css
 * @return {string} The prefix ending in `-`
 */


function normalizePrefix(prefix) {
  if (!isString(prefix) || prefix === '') {
    return '';
  }

  return prefix.charAt(prefix.length - 1) !== '-' ? "".concat(prefix, "-") : prefix;
}
/**
 * Checks if options.attachTo.element is a string, and if so, tries to find the element
 * @param {Step} step The step instance
 * @returns {{element, on}}
 * `element` is a qualified HTML Element
 * `on` is a string position value
 */


function parseAttachTo(step) {
  var options = step.options.attachTo || {};
  var returnOpts = Object.assign({}, options);

  if (isString(options.element)) {
    // Can't override the element in user opts reference because we can't
    // guarantee that the element will exist in the future.
    try {
      returnOpts.element = document.querySelector(options.element);
    } catch (e) {// TODO
    }

    if (!returnOpts.element) {
      console.error("The element for this Shepherd step was not found ".concat(options.element));
    }
  }

  return returnOpts;
}
/**
 * Determines options for the tooltip and initializes
 * `step.tooltip` as a Popper instance.
 * @param {Step} step The step instance
 */


function setupTooltip(step) {
  if (step.tooltip) {
    step.tooltip.destroy();
  }

  var attachToOptions = parseAttachTo(step);
  var target = attachToOptions.element;
  var popperOptions = getPopperOptions(attachToOptions, step);

  if (step.isCentered()) {
    target = document.body;
    var content = step.shepherdElementComponent.getElement();
    content.classList.add('shepherd-centered');
  }

  step.tooltip = createPopper(target, step.el, popperOptions);
  step.target = attachToOptions.element;
  return popperOptions;
}
/**
 * Create a unique id for steps, tours, modals, etc
 * @return {string}
 */


function uuid() {
  var d = Date.now();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
}
/**
 * Gets the `Popper` options from a set of base `attachTo` options
 * @param attachToOptions
 * @param {Step} step The step instance
 * @return {Object}
 * @private
 */


function getPopperOptions(attachToOptions, step) {
  var popperOptions = {
    modifiers: [{
      name: 'preventOverflow',
      options: {
        altAxis: true
      }
    }, {
      name: 'focusAfterRender',
      enabled: true,
      phase: 'afterWrite',
      fn: function () {
        setTimeout(function () {
          if (step.el) {
            step.el.focus();
          }
        }, 300);
      }
    }],
    strategy: 'absolute'
  };

  if (step.isCentered()) {
    popperOptions = makeCenteredPopper(step);
  } else {
    popperOptions.placement = attachToOptions.on;
  }

  var defaultStepOptions = step.tour && step.tour.options && step.tour.options.defaultStepOptions;

  if (defaultStepOptions) {
    popperOptions = _mergeModifiers(defaultStepOptions, popperOptions);
  }

  popperOptions = _mergeModifiers(step.options, popperOptions);
  return popperOptions;
}

function _mergeModifiers(stepOptions, popperOptions) {
  if (stepOptions.popperOptions) {
    var mergedPopperOptions = Object.assign({}, popperOptions, stepOptions.popperOptions);

    if (stepOptions.popperOptions.modifiers && stepOptions.popperOptions.modifiers.length > 0) {
      var names = stepOptions.popperOptions.modifiers.map(function (mod) {
        return mod.name;
      });
      var filteredModifiers = popperOptions.modifiers.filter(function (mod) {
        return !names.includes(mod.name);
      });
      mergedPopperOptions.modifiers = Array.from(new Set([].concat(_toConsumableArray(filteredModifiers), _toConsumableArray(stepOptions.popperOptions.modifiers))));
    }

    return mergedPopperOptions;
  }

  return popperOptions;
}

function noop() {}

function assign(tar, src) {
  // @ts-ignore
  for (var k in src) {
    tar[k] = src[k];
  }

  return tar;
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && _typeof(a) === 'object' || typeof a === 'function';
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (var i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return function () {
    return node.removeEventListener(event, handler, options);
  };
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  var descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (var key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value') {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function children(element) {
  return Array.from(element.childNodes);
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

var current_component;

function set_current_component(component) {
  current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error("Function called outside component initialization");
  return current_component;
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

var flushing = false;
var seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (var i = 0; i < dirty_components.length; i += 1) {
      var component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;

    while (binding_callbacks.length) {
      binding_callbacks.pop()();
    } // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (var _i2 = 0; _i2 < render_callbacks.length; _i2 += 1) {
      var callback = render_callbacks[_i2];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    var dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

var outroing = new Set();
var outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(function () {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

function get_spread_update(levels, updates) {
  var update = {};
  var to_null_out = {};
  var accounted_for = {
    $$scope: 1
  };
  var i = levels.length;

  while (i--) {
    var o = levels[i];
    var n = updates[i];

    if (n) {
      for (var key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (var _key3 in n) {
        if (!accounted_for[_key3]) {
          update[_key3] = n[_key3];
          accounted_for[_key3] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (var _key4 in o) {
        accounted_for[_key4] = 1;
      }
    }
  }

  for (var _key5 in to_null_out) {
    if (!(_key5 in update)) update[_key5] = undefined;
  }

  return update;
}

function create_component(block) {
  block && block.c();
}

function mount_component(component, target, anchor) {
  var _component$$$ = component.$$,
      fragment = _component$$$.fragment,
      on_mount = _component$$$.on_mount,
      on_destroy = _component$$$.on_destroy,
      after_update = _component$$$.after_update;
  fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

  add_render_callback(function () {
    var new_on_destroy = on_mount.map(run).filter(is_function);

    if (on_destroy) {
      on_destroy.push.apply(on_destroy, _toConsumableArray(new_on_destroy));
    } else {
      // Edge case - component was destroyed immediately,
      // most likely as a result of a binding initialising
      run_all(new_on_destroy);
    }

    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  var $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props) {
  var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
  var parent_component = current_component;
  set_current_component(component);
  var prop_values = options.props || {};
  var $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props: props,
    update: noop,
    not_equal: not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : []),
    // everything else
    callbacks: blank_object(),
    dirty: dirty,
    skip_bound: false
  };
  var ready = false;
  $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
    var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    flush();
  }

  set_current_component(parent_component);
}

var SvelteComponent = /*#__PURE__*/function () {
  function SvelteComponent() {
    _classCallCheck(this, SvelteComponent);
  }

  _createClass(SvelteComponent, [{
    key: "$destroy",
    value: function $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
  }, {
    key: "$on",
    value: function $on(type, callback) {
      var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return function () {
        var index = callbacks.indexOf(callback);
        if (index !== -1) callbacks.splice(index, 1);
      };
    }
  }, {
    key: "$set",
    value: function $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  }]);

  return SvelteComponent;
}();
/* src/js/components/shepherd-button.svelte generated by Svelte v3.28.0 */


function create_fragment(ctx) {
  var button;
  var button_aria_label_value;
  var button_class_value;
  var mounted;
  var dispose;
  return {
    c: function () {
      button = element("button");
      attr(button, "aria-label", button_aria_label_value =
      /*label*/
      ctx[3] ?
      /*label*/
      ctx[3] : null);
      attr(button, "class", button_class_value = "".concat(
      /*classes*/
      ctx[1] || "", " shepherd-button ").concat(
      /*secondary*/
      ctx[4] ? "shepherd-button-secondary" : ""));
      button.disabled =
      /*disabled*/
      ctx[2];
      attr(button, "tabindex", "0");
    },
    m: function (target, anchor) {
      insert(target, button, anchor);
      button.innerHTML =
      /*text*/
      ctx[5];

      if (!mounted) {
        dispose = listen(button, "click", function () {
          if (is_function(
          /*action*/
          ctx[0]))
            /*action*/
            ctx[0].apply(this, arguments);
        });
        mounted = true;
      }
    },
    p: function (new_ctx, _ref6) {
      var _ref7 = _slicedToArray(_ref6, 1),
          dirty = _ref7[0];

      ctx = new_ctx;
      if (dirty &
      /*text*/
      32) button.innerHTML =
      /*text*/
      ctx[5];

      if (dirty &
      /*label*/
      8 && button_aria_label_value !== (button_aria_label_value =
      /*label*/
      ctx[3] ?
      /*label*/
      ctx[3] : null)) {
        attr(button, "aria-label", button_aria_label_value);
      }

      if (dirty &
      /*classes, secondary*/
      18 && button_class_value !== (button_class_value = "".concat(
      /*classes*/
      ctx[1] || "", " shepherd-button ").concat(
      /*secondary*/
      ctx[4] ? "shepherd-button-secondary" : ""))) {
        attr(button, "class", button_class_value);
      }

      if (dirty &
      /*disabled*/
      4) {
        button.disabled =
        /*disabled*/
        ctx[2];
      }
    },
    i: noop,
    o: noop,
    d: function (detaching) {
      if (detaching) detach(button);
      mounted = false;
      dispose();
    }
  };
}

function instance($$self, $$props, $$invalidate) {
  var config = $$props.config,
      step = $$props.step;
  var action, classes, disabled, label, secondary, text;

  function getDisabled(disabled) {
    if (isFunction(disabled)) {
      return disabled = disabled.call(step);
    }

    return disabled;
  }

  $$self.$$set = function ($$props) {
    if ("config" in $$props) $$invalidate(6, config = $$props.config);
    if ("step" in $$props) $$invalidate(7, step = $$props.step);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*config, step*/
    192) {
      {
        $$invalidate(0, action = config.action ? config.action.bind(step.tour) : null);
        $$invalidate(1, classes = config.classes);
        $$invalidate(2, disabled = config.disabled ? getDisabled(config.disabled) : false);
        $$invalidate(3, label = config.label);
        $$invalidate(4, secondary = config.secondary);
        $$invalidate(5, text = config.text);
      }
    }
  };

  return [action, classes, disabled, label, secondary, text, config, step];
}

var Shepherd_button = /*#__PURE__*/function (_SvelteComponent) {
  _inherits(Shepherd_button, _SvelteComponent);

  var _super = _createSuper(Shepherd_button);

  function Shepherd_button(options) {
    var _this3;

    _classCallCheck(this, Shepherd_button);

    _this3 = _super.call(this);
    init(_assertThisInitialized(_this3), options, instance, create_fragment, safe_not_equal, {
      config: 6,
      step: 7
    });
    return _this3;
  }

  return Shepherd_button;
}(SvelteComponent);
/* src/js/components/shepherd-footer.svelte generated by Svelte v3.28.0 */


function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
} // (24:4) {#if buttons}


function create_if_block(ctx) {
  var each_1_anchor;
  var current;
  var each_value =
  /*buttons*/
  ctx[1];
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function (i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  return {
    c: function () {
      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].c();
      }

      each_1_anchor = empty();
    },
    m: function (target, anchor) {
      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
        each_blocks[_i4].m(target, anchor);
      }

      insert(target, each_1_anchor, anchor);
      current = true;
    },
    p: function (ctx, dirty) {
      if (dirty &
      /*buttons, step*/
      3) {
        each_value =
        /*buttons*/
        ctx[1];

        var _i5;

        for (_i5 = 0; _i5 < each_value.length; _i5 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i5);

          if (each_blocks[_i5]) {
            each_blocks[_i5].p(child_ctx, dirty);

            transition_in(each_blocks[_i5], 1);
          } else {
            each_blocks[_i5] = create_each_block(child_ctx);

            each_blocks[_i5].c();

            transition_in(each_blocks[_i5], 1);

            each_blocks[_i5].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (_i5 = each_value.length; _i5 < each_blocks.length; _i5 += 1) {
          out(_i5);
        }

        check_outros();
      }
    },
    i: function (local) {
      if (current) return;

      for (var _i6 = 0; _i6 < each_value.length; _i6 += 1) {
        transition_in(each_blocks[_i6]);
      }

      current = true;
    },
    o: function (local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        transition_out(each_blocks[_i7]);
      }

      current = false;
    },
    d: function (detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach(each_1_anchor);
    }
  };
} // (25:8) {#each buttons as config}


function create_each_block(ctx) {
  var shepherdbutton;
  var current;
  shepherdbutton = new Shepherd_button({
    props: {
      config:
      /*config*/
      ctx[2],
      step:
      /*step*/
      ctx[0]
    }
  });
  return {
    c: function () {
      create_component(shepherdbutton.$$.fragment);
    },
    m: function (target, anchor) {
      mount_component(shepherdbutton, target, anchor);
      current = true;
    },
    p: function (ctx, dirty) {
      var shepherdbutton_changes = {};
      if (dirty &
      /*buttons*/
      2) shepherdbutton_changes.config =
      /*config*/
      ctx[2];
      if (dirty &
      /*step*/
      1) shepherdbutton_changes.step =
      /*step*/
      ctx[0];
      shepherdbutton.$set(shepherdbutton_changes);
    },
    i: function (local) {
      if (current) return;
      transition_in(shepherdbutton.$$.fragment, local);
      current = true;
    },
    o: function (local) {
      transition_out(shepherdbutton.$$.fragment, local);
      current = false;
    },
    d: function (detaching) {
      destroy_component(shepherdbutton, detaching);
    }
  };
}

function create_fragment$1(ctx) {
  var footer;
  var current;
  var if_block =
  /*buttons*/
  ctx[1] && create_if_block(ctx);
  return {
    c: function () {
      footer = element("footer");
      if (if_block) if_block.c();
      attr(footer, "class", "shepherd-footer");
    },
    m: function (target, anchor) {
      insert(target, footer, anchor);
      if (if_block) if_block.m(footer, null);
      current = true;
    },
    p: function (ctx, _ref8) {
      var _ref9 = _slicedToArray(_ref8, 1),
          dirty = _ref9[0];

      if (
      /*buttons*/
      ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*buttons*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(footer, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function (local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function (local) {
      transition_out(if_block);
      current = false;
    },
    d: function (detaching) {
      if (detaching) detach(footer);
      if (if_block) if_block.d();
    }
  };
}

function instance$1($$self, $$props, $$invalidate) {
  var step = $$props.step;

  $$self.$$set = function ($$props) {
    if ("step" in $$props) $$invalidate(0, step = $$props.step);
  };

  var buttons;

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*step*/
    1) {
      $$invalidate(1, buttons = step.options.buttons);
    }
  };

  return [step, buttons];
}

var Shepherd_footer = /*#__PURE__*/function (_SvelteComponent2) {
  _inherits(Shepherd_footer, _SvelteComponent2);

  var _super2 = _createSuper(Shepherd_footer);

  function Shepherd_footer(options) {
    var _this4;

    _classCallCheck(this, Shepherd_footer);

    _this4 = _super2.call(this);
    init(_assertThisInitialized(_this4), options, instance$1, create_fragment$1, safe_not_equal, {
      step: 0
    });
    return _this4;
  }

  return Shepherd_footer;
}(SvelteComponent);
/* src/js/components/shepherd-cancel-icon.svelte generated by Svelte v3.28.0 */


function create_fragment$2(ctx) {
  var button;
  var span;
  var button_aria_label_value;
  var mounted;
  var dispose;
  return {
    c: function () {
      button = element("button");
      span = element("span");
      span.textContent = "×";
      attr(span, "aria-hidden", "true");
      attr(button, "aria-label", button_aria_label_value =
      /*cancelIcon*/
      ctx[0].label ?
      /*cancelIcon*/
      ctx[0].label : "Close Tour");
      attr(button, "class", "shepherd-cancel-icon");
      attr(button, "type", "button");
    },
    m: function (target, anchor) {
      insert(target, button, anchor);
      append(button, span);

      if (!mounted) {
        dispose = listen(button, "click",
        /*handleCancelClick*/
        ctx[1]);
        mounted = true;
      }
    },
    p: function (ctx, _ref10) {
      var _ref11 = _slicedToArray(_ref10, 1),
          dirty = _ref11[0];

      if (dirty &
      /*cancelIcon*/
      1 && button_aria_label_value !== (button_aria_label_value =
      /*cancelIcon*/
      ctx[0].label ?
      /*cancelIcon*/
      ctx[0].label : "Close Tour")) {
        attr(button, "aria-label", button_aria_label_value);
      }
    },
    i: noop,
    o: noop,
    d: function (detaching) {
      if (detaching) detach(button);
      mounted = false;
      dispose();
    }
  };
}

function instance$2($$self, $$props, $$invalidate) {
  var cancelIcon = $$props.cancelIcon,
      step = $$props.step;
  /**
  * Add a click listener to the cancel link that cancels the tour
  */

  var handleCancelClick = function (e) {
    e.preventDefault();
    step.cancel();
  };

  $$self.$$set = function ($$props) {
    if ("cancelIcon" in $$props) $$invalidate(0, cancelIcon = $$props.cancelIcon);
    if ("step" in $$props) $$invalidate(2, step = $$props.step);
  };

  return [cancelIcon, handleCancelClick, step];
}

var Shepherd_cancel_icon = /*#__PURE__*/function (_SvelteComponent3) {
  _inherits(Shepherd_cancel_icon, _SvelteComponent3);

  var _super3 = _createSuper(Shepherd_cancel_icon);

  function Shepherd_cancel_icon(options) {
    var _this5;

    _classCallCheck(this, Shepherd_cancel_icon);

    _this5 = _super3.call(this);
    init(_assertThisInitialized(_this5), options, instance$2, create_fragment$2, safe_not_equal, {
      cancelIcon: 0,
      step: 2
    });
    return _this5;
  }

  return Shepherd_cancel_icon;
}(SvelteComponent);
/* src/js/components/shepherd-title.svelte generated by Svelte v3.28.0 */


function create_fragment$3(ctx) {
  var h3;
  return {
    c: function () {
      h3 = element("h3");
      attr(h3, "id",
      /*labelId*/
      ctx[1]);
      attr(h3, "class", "shepherd-title");
    },
    m: function (target, anchor) {
      insert(target, h3, anchor);
      /*h3_binding*/

      ctx[3](h3);
    },
    p: function (ctx, _ref12) {
      var _ref13 = _slicedToArray(_ref12, 1),
          dirty = _ref13[0];

      if (dirty &
      /*labelId*/
      2) {
        attr(h3, "id",
        /*labelId*/
        ctx[1]);
      }
    },
    i: noop,
    o: noop,
    d: function (detaching) {
      if (detaching) detach(h3);
      /*h3_binding*/

      ctx[3](null);
    }
  };
}

function instance$3($$self, $$props, $$invalidate) {
  var labelId = $$props.labelId,
      element = $$props.element,
      title = $$props.title;
  afterUpdate(function () {
    if (isFunction(title)) {
      $$invalidate(2, title = title());
    }

    $$invalidate(0, element.innerHTML = title, element);
  });

  function h3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      element = $$value;
      $$invalidate(0, element);
    });
  }

  $$self.$$set = function ($$props) {
    if ("labelId" in $$props) $$invalidate(1, labelId = $$props.labelId);
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("title" in $$props) $$invalidate(2, title = $$props.title);
  };

  return [element, labelId, title, h3_binding];
}

var Shepherd_title = /*#__PURE__*/function (_SvelteComponent4) {
  _inherits(Shepherd_title, _SvelteComponent4);

  var _super4 = _createSuper(Shepherd_title);

  function Shepherd_title(options) {
    var _this6;

    _classCallCheck(this, Shepherd_title);

    _this6 = _super4.call(this);
    init(_assertThisInitialized(_this6), options, instance$3, create_fragment$3, safe_not_equal, {
      labelId: 1,
      element: 0,
      title: 2
    });
    return _this6;
  }

  return Shepherd_title;
}(SvelteComponent);
/* src/js/components/shepherd-header.svelte generated by Svelte v3.28.0 */


function create_if_block_1(ctx) {
  var shepherdtitle;
  var current;
  shepherdtitle = new Shepherd_title({
    props: {
      labelId:
      /*labelId*/
      ctx[0],
      title:
      /*title*/
      ctx[2]
    }
  });
  return {
    c: function () {
      create_component(shepherdtitle.$$.fragment);
    },
    m: function (target, anchor) {
      mount_component(shepherdtitle, target, anchor);
      current = true;
    },
    p: function (ctx, dirty) {
      var shepherdtitle_changes = {};
      if (dirty &
      /*labelId*/
      1) shepherdtitle_changes.labelId =
      /*labelId*/
      ctx[0];
      if (dirty &
      /*title*/
      4) shepherdtitle_changes.title =
      /*title*/
      ctx[2];
      shepherdtitle.$set(shepherdtitle_changes);
    },
    i: function (local) {
      if (current) return;
      transition_in(shepherdtitle.$$.fragment, local);
      current = true;
    },
    o: function (local) {
      transition_out(shepherdtitle.$$.fragment, local);
      current = false;
    },
    d: function (detaching) {
      destroy_component(shepherdtitle, detaching);
    }
  };
} // (39:4) {#if cancelIcon && cancelIcon.enabled}


function create_if_block$1(ctx) {
  var shepherdcancelicon;
  var current;
  shepherdcancelicon = new Shepherd_cancel_icon({
    props: {
      cancelIcon:
      /*cancelIcon*/
      ctx[3],
      step:
      /*step*/
      ctx[1]
    }
  });
  return {
    c: function () {
      create_component(shepherdcancelicon.$$.fragment);
    },
    m: function (target, anchor) {
      mount_component(shepherdcancelicon, target, anchor);
      current = true;
    },
    p: function (ctx, dirty) {
      var shepherdcancelicon_changes = {};
      if (dirty &
      /*cancelIcon*/
      8) shepherdcancelicon_changes.cancelIcon =
      /*cancelIcon*/
      ctx[3];
      if (dirty &
      /*step*/
      2) shepherdcancelicon_changes.step =
      /*step*/
      ctx[1];
      shepherdcancelicon.$set(shepherdcancelicon_changes);
    },
    i: function (local) {
      if (current) return;
      transition_in(shepherdcancelicon.$$.fragment, local);
      current = true;
    },
    o: function (local) {
      transition_out(shepherdcancelicon.$$.fragment, local);
      current = false;
    },
    d: function (detaching) {
      destroy_component(shepherdcancelicon, detaching);
    }
  };
}

function create_fragment$4(ctx) {
  var header;
  var t;
  var current;
  var if_block0 =
  /*title*/
  ctx[2] && create_if_block_1(ctx);
  var if_block1 =
  /*cancelIcon*/
  ctx[3] &&
  /*cancelIcon*/
  ctx[3].enabled && create_if_block$1(ctx);
  return {
    c: function () {
      header = element("header");
      if (if_block0) if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      attr(header, "class", "shepherd-header");
    },
    m: function (target, anchor) {
      insert(target, header, anchor);
      if (if_block0) if_block0.m(header, null);
      append(header, t);
      if (if_block1) if_block1.m(header, null);
      current = true;
    },
    p: function (ctx, _ref14) {
      var _ref15 = _slicedToArray(_ref14, 1),
          dirty = _ref15[0];

      if (
      /*title*/
      ctx[2]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*title*/
          4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(header, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*cancelIcon*/
      ctx[3] &&
      /*cancelIcon*/
      ctx[3].enabled) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*cancelIcon*/
          8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$1(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(header, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i: function (local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o: function (local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d: function (detaching) {
      if (detaching) detach(header);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
    }
  };
}

function instance$4($$self, $$props, $$invalidate) {
  var labelId = $$props.labelId,
      step = $$props.step;
  var title, cancelIcon;

  $$self.$$set = function ($$props) {
    if ("labelId" in $$props) $$invalidate(0, labelId = $$props.labelId);
    if ("step" in $$props) $$invalidate(1, step = $$props.step);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*step*/
    2) {
      {
        $$invalidate(2, title = step.options.title);
        $$invalidate(3, cancelIcon = step.options.cancelIcon);
      }
    }
  };

  return [labelId, step, title, cancelIcon];
}

var Shepherd_header = /*#__PURE__*/function (_SvelteComponent5) {
  _inherits(Shepherd_header, _SvelteComponent5);

  var _super5 = _createSuper(Shepherd_header);

  function Shepherd_header(options) {
    var _this7;

    _classCallCheck(this, Shepherd_header);

    _this7 = _super5.call(this);
    init(_assertThisInitialized(_this7), options, instance$4, create_fragment$4, safe_not_equal, {
      labelId: 0,
      step: 1
    });
    return _this7;
  }

  return Shepherd_header;
}(SvelteComponent);
/* src/js/components/shepherd-text.svelte generated by Svelte v3.28.0 */


function create_fragment$5(ctx) {
  var div;
  return {
    c: function () {
      div = element("div");
      attr(div, "class", "shepherd-text");
      attr(div, "id",
      /*descriptionId*/
      ctx[1]);
    },
    m: function (target, anchor) {
      insert(target, div, anchor);
      /*div_binding*/

      ctx[3](div);
    },
    p: function (ctx, _ref16) {
      var _ref17 = _slicedToArray(_ref16, 1),
          dirty = _ref17[0];

      if (dirty &
      /*descriptionId*/
      2) {
        attr(div, "id",
        /*descriptionId*/
        ctx[1]);
      }
    },
    i: noop,
    o: noop,
    d: function (detaching) {
      if (detaching) detach(div);
      /*div_binding*/

      ctx[3](null);
    }
  };
}

function instance$5($$self, $$props, $$invalidate) {
  var descriptionId = $$props.descriptionId,
      element = $$props.element,
      step = $$props.step;
  afterUpdate(function () {
    var text = step.options.text;

    if (isFunction(text)) {
      text = text.call(step);
    }

    if (isHTMLElement(text)) {
      element.appendChild(text);
    } else {
      $$invalidate(0, element.innerHTML = text, element);
    }
  });

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      element = $$value;
      $$invalidate(0, element);
    });
  }

  $$self.$$set = function ($$props) {
    if ("descriptionId" in $$props) $$invalidate(1, descriptionId = $$props.descriptionId);
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("step" in $$props) $$invalidate(2, step = $$props.step);
  };

  return [element, descriptionId, step, div_binding];
}

var Shepherd_text = /*#__PURE__*/function (_SvelteComponent6) {
  _inherits(Shepherd_text, _SvelteComponent6);

  var _super6 = _createSuper(Shepherd_text);

  function Shepherd_text(options) {
    var _this8;

    _classCallCheck(this, Shepherd_text);

    _this8 = _super6.call(this);
    init(_assertThisInitialized(_this8), options, instance$5, create_fragment$5, safe_not_equal, {
      descriptionId: 1,
      element: 0,
      step: 2
    });
    return _this8;
  }

  return Shepherd_text;
}(SvelteComponent);
/* src/js/components/shepherd-content.svelte generated by Svelte v3.28.0 */


function create_if_block_2(ctx) {
  var shepherdheader;
  var current;
  shepherdheader = new Shepherd_header({
    props: {
      labelId:
      /*labelId*/
      ctx[1],
      step:
      /*step*/
      ctx[2]
    }
  });
  return {
    c: function () {
      create_component(shepherdheader.$$.fragment);
    },
    m: function (target, anchor) {
      mount_component(shepherdheader, target, anchor);
      current = true;
    },
    p: function (ctx, dirty) {
      var shepherdheader_changes = {};
      if (dirty &
      /*labelId*/
      2) shepherdheader_changes.labelId =
      /*labelId*/
      ctx[1];
      if (dirty &
      /*step*/
      4) shepherdheader_changes.step =
      /*step*/
      ctx[2];
      shepherdheader.$set(shepherdheader_changes);
    },
    i: function (local) {
      if (current) return;
      transition_in(shepherdheader.$$.fragment, local);
      current = true;
    },
    o: function (local) {
      transition_out(shepherdheader.$$.fragment, local);
      current = false;
    },
    d: function (detaching) {
      destroy_component(shepherdheader, detaching);
    }
  };
} // (28:2) {#if !isUndefined(step.options.text)}


function create_if_block_1$1(ctx) {
  var shepherdtext;
  var current;
  shepherdtext = new Shepherd_text({
    props: {
      descriptionId:
      /*descriptionId*/
      ctx[0],
      step:
      /*step*/
      ctx[2]
    }
  });
  return {
    c: function () {
      create_component(shepherdtext.$$.fragment);
    },
    m: function (target, anchor) {
      mount_component(shepherdtext, target, anchor);
      current = true;
    },
    p: function (ctx, dirty) {
      var shepherdtext_changes = {};
      if (dirty &
      /*descriptionId*/
      1) shepherdtext_changes.descriptionId =
      /*descriptionId*/
      ctx[0];
      if (dirty &
      /*step*/
      4) shepherdtext_changes.step =
      /*step*/
      ctx[2];
      shepherdtext.$set(shepherdtext_changes);
    },
    i: function (local) {
      if (current) return;
      transition_in(shepherdtext.$$.fragment, local);
      current = true;
    },
    o: function (local) {
      transition_out(shepherdtext.$$.fragment, local);
      current = false;
    },
    d: function (detaching) {
      destroy_component(shepherdtext, detaching);
    }
  };
} // (35:2) {#if Array.isArray(step.options.buttons) && step.options.buttons.length}


function create_if_block$2(ctx) {
  var shepherdfooter;
  var current;
  shepherdfooter = new Shepherd_footer({
    props: {
      step:
      /*step*/
      ctx[2]
    }
  });
  return {
    c: function () {
      create_component(shepherdfooter.$$.fragment);
    },
    m: function (target, anchor) {
      mount_component(shepherdfooter, target, anchor);
      current = true;
    },
    p: function (ctx, dirty) {
      var shepherdfooter_changes = {};
      if (dirty &
      /*step*/
      4) shepherdfooter_changes.step =
      /*step*/
      ctx[2];
      shepherdfooter.$set(shepherdfooter_changes);
    },
    i: function (local) {
      if (current) return;
      transition_in(shepherdfooter.$$.fragment, local);
      current = true;
    },
    o: function (local) {
      transition_out(shepherdfooter.$$.fragment, local);
      current = false;
    },
    d: function (detaching) {
      destroy_component(shepherdfooter, detaching);
    }
  };
}

function create_fragment$6(ctx) {
  var div;
  var show_if_2 = !isUndefined(
  /*step*/
  ctx[2].options.title) ||
  /*step*/
  ctx[2].options.cancelIcon &&
  /*step*/
  ctx[2].options.cancelIcon.enabled;
  var t0;
  var show_if_1 = !isUndefined(
  /*step*/
  ctx[2].options.text);
  var t1;
  var show_if = Array.isArray(
  /*step*/
  ctx[2].options.buttons) &&
  /*step*/
  ctx[2].options.buttons.length;
  var current;
  var if_block0 = show_if_2 && create_if_block_2(ctx);
  var if_block1 = show_if_1 && create_if_block_1$1(ctx);
  var if_block2 = show_if && create_if_block$2(ctx);
  return {
    c: function () {
      div = element("div");
      if (if_block0) if_block0.c();
      t0 = space();
      if (if_block1) if_block1.c();
      t1 = space();
      if (if_block2) if_block2.c();
      attr(div, "class", "shepherd-content");
    },
    m: function (target, anchor) {
      insert(target, div, anchor);
      if (if_block0) if_block0.m(div, null);
      append(div, t0);
      if (if_block1) if_block1.m(div, null);
      append(div, t1);
      if (if_block2) if_block2.m(div, null);
      current = true;
    },
    p: function (ctx, _ref18) {
      var _ref19 = _slicedToArray(_ref18, 1),
          dirty = _ref19[0];

      if (dirty &
      /*step*/
      4) show_if_2 = !isUndefined(
      /*step*/
      ctx[2].options.title) ||
      /*step*/
      ctx[2].options.cancelIcon &&
      /*step*/
      ctx[2].options.cancelIcon.enabled;

      if (show_if_2) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*step*/
          4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (dirty &
      /*step*/
      4) show_if_1 = !isUndefined(
      /*step*/
      ctx[2].options.text);

      if (show_if_1) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*step*/
          4) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1$1(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, function () {
          if_block1 = null;
        });
        check_outros();
      }

      if (dirty &
      /*step*/
      4) show_if = Array.isArray(
      /*step*/
      ctx[2].options.buttons) &&
      /*step*/
      ctx[2].options.buttons.length;

      if (show_if) {
        if (if_block2) {
          if_block2.p(ctx, dirty);

          if (dirty &
          /*step*/
          4) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$2(ctx);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, function () {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i: function (local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },
    o: function (local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },
    d: function (detaching) {
      if (detaching) detach(div);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
    }
  };
}

function instance$6($$self, $$props, $$invalidate) {
  var descriptionId = $$props.descriptionId,
      labelId = $$props.labelId,
      step = $$props.step;

  $$self.$$set = function ($$props) {
    if ("descriptionId" in $$props) $$invalidate(0, descriptionId = $$props.descriptionId);
    if ("labelId" in $$props) $$invalidate(1, labelId = $$props.labelId);
    if ("step" in $$props) $$invalidate(2, step = $$props.step);
  };

  return [descriptionId, labelId, step];
}

var Shepherd_content = /*#__PURE__*/function (_SvelteComponent7) {
  _inherits(Shepherd_content, _SvelteComponent7);

  var _super7 = _createSuper(Shepherd_content);

  function Shepherd_content(options) {
    var _this9;

    _classCallCheck(this, Shepherd_content);

    _this9 = _super7.call(this);
    init(_assertThisInitialized(_this9), options, instance$6, create_fragment$6, safe_not_equal, {
      descriptionId: 0,
      labelId: 1,
      step: 2
    });
    return _this9;
  }

  return Shepherd_content;
}(SvelteComponent);
/* src/js/components/shepherd-element.svelte generated by Svelte v3.28.0 */


function create_if_block$3(ctx) {
  var div;
  return {
    c: function () {
      div = element("div");
      attr(div, "class", "shepherd-arrow");
      attr(div, "data-popper-arrow", "");
    },
    m: function (target, anchor) {
      insert(target, div, anchor);
    },
    d: function (detaching) {
      if (detaching) detach(div);
    }
  };
}

function create_fragment$7(ctx) {
  var div;
  var t;
  var shepherdcontent;
  var div_aria_describedby_value;
  var div_aria_labelledby_value;
  var current;
  var mounted;
  var dispose;
  var if_block =
  /*step*/
  ctx[4].options.arrow &&
  /*step*/
  ctx[4].options.attachTo &&
  /*step*/
  ctx[4].options.attachTo.element &&
  /*step*/
  ctx[4].options.attachTo.on && create_if_block$3();
  shepherdcontent = new Shepherd_content({
    props: {
      descriptionId:
      /*descriptionId*/
      ctx[2],
      labelId:
      /*labelId*/
      ctx[3],
      step:
      /*step*/
      ctx[4]
    }
  });
  var div_levels = [{
    "aria-describedby": div_aria_describedby_value = !isUndefined(
    /*step*/
    ctx[4].options.text) ?
    /*descriptionId*/
    ctx[2] : null
  }, {
    "aria-labelledby": div_aria_labelledby_value =
    /*step*/
    ctx[4].options.title ?
    /*labelId*/
    ctx[3] : null
  },
  /*dataStepId*/
  ctx[1], {
    role: "dialog"
  }, {
    tabindex: "0"
  }];
  var div_data = {};

  for (var i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }

  return {
    c: function () {
      div = element("div");
      if (if_block) if_block.c();
      t = space();
      create_component(shepherdcontent.$$.fragment);
      set_attributes(div, div_data);
      toggle_class(div, "shepherd-has-cancel-icon",
      /*hasCancelIcon*/
      ctx[5]);
      toggle_class(div, "shepherd-has-title",
      /*hasTitle*/
      ctx[6]);
      toggle_class(div, "shepherd-element", true);
    },
    m: function (target, anchor) {
      insert(target, div, anchor);
      if (if_block) if_block.m(div, null);
      append(div, t);
      mount_component(shepherdcontent, div, null);
      /*div_binding*/

      ctx[13](div);
      current = true;

      if (!mounted) {
        dispose = listen(div, "keydown",
        /*handleKeyDown*/
        ctx[7]);
        mounted = true;
      }
    },
    p: function (ctx, _ref20) {
      var _ref21 = _slicedToArray(_ref20, 1),
          dirty = _ref21[0];

      if (
      /*step*/
      ctx[4].options.arrow &&
      /*step*/
      ctx[4].options.attachTo &&
      /*step*/
      ctx[4].options.attachTo.element &&
      /*step*/
      ctx[4].options.attachTo.on) {
        if (if_block) ;else {
          if_block = create_if_block$3();
          if_block.c();
          if_block.m(div, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      var shepherdcontent_changes = {};
      if (dirty &
      /*descriptionId*/
      4) shepherdcontent_changes.descriptionId =
      /*descriptionId*/
      ctx[2];
      if (dirty &
      /*labelId*/
      8) shepherdcontent_changes.labelId =
      /*labelId*/
      ctx[3];
      if (dirty &
      /*step*/
      16) shepherdcontent_changes.step =
      /*step*/
      ctx[4];
      shepherdcontent.$set(shepherdcontent_changes);
      set_attributes(div, div_data = get_spread_update(div_levels, [(!current || dirty &
      /*step, descriptionId*/
      20 && div_aria_describedby_value !== (div_aria_describedby_value = !isUndefined(
      /*step*/
      ctx[4].options.text) ?
      /*descriptionId*/
      ctx[2] : null)) && {
        "aria-describedby": div_aria_describedby_value
      }, (!current || dirty &
      /*step, labelId*/
      24 && div_aria_labelledby_value !== (div_aria_labelledby_value =
      /*step*/
      ctx[4].options.title ?
      /*labelId*/
      ctx[3] : null)) && {
        "aria-labelledby": div_aria_labelledby_value
      }, dirty &
      /*dataStepId*/
      2 &&
      /*dataStepId*/
      ctx[1], {
        role: "dialog"
      }, {
        tabindex: "0"
      }]));
      toggle_class(div, "shepherd-has-cancel-icon",
      /*hasCancelIcon*/
      ctx[5]);
      toggle_class(div, "shepherd-has-title",
      /*hasTitle*/
      ctx[6]);
      toggle_class(div, "shepherd-element", true);
    },
    i: function (local) {
      if (current) return;
      transition_in(shepherdcontent.$$.fragment, local);
      current = true;
    },
    o: function (local) {
      transition_out(shepherdcontent.$$.fragment, local);
      current = false;
    },
    d: function (detaching) {
      if (detaching) detach(div);
      if (if_block) if_block.d();
      destroy_component(shepherdcontent);
      /*div_binding*/

      ctx[13](null);
      mounted = false;
      dispose();
    }
  };
}

var KEY_TAB = 9;
var KEY_ESC = 27;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;

function getClassesArray(classes) {
  return classes.split(" ").filter(function (className) {
    return !!className.length;
  });
}

function instance$7($$self, $$props, $$invalidate) {
  var classPrefix = $$props.classPrefix,
      element = $$props.element,
      descriptionId = $$props.descriptionId,
      firstFocusableElement = $$props.firstFocusableElement,
      focusableElements = $$props.focusableElements,
      labelId = $$props.labelId,
      lastFocusableElement = $$props.lastFocusableElement,
      step = $$props.step,
      dataStepId = $$props.dataStepId;
  var hasCancelIcon, hasTitle, classes;

  var getElement = function () {
    return element;
  };

  onMount(function () {
    // Get all elements that are focusable
    $$invalidate(1, dataStepId = _defineProperty({}, "data-".concat(classPrefix, "shepherd-step-id"), step.id));
    $$invalidate(9, focusableElements = element.querySelectorAll("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex=\"0\"]"));
    $$invalidate(8, firstFocusableElement = focusableElements[0]);
    $$invalidate(10, lastFocusableElement = focusableElements[focusableElements.length - 1]);
  });
  afterUpdate(function () {
    if (classes !== step.options.classes) {
      updateDynamicClasses();
    }
  });

  function updateDynamicClasses() {
    removeClasses(classes);
    classes = step.options.classes;
    addClasses(classes);
  }

  function removeClasses(classes) {
    if (isString(classes)) {
      var oldClasses = getClassesArray(classes);

      if (oldClasses.length) {
        var _element$classList;

        (_element$classList = element.classList).remove.apply(_element$classList, _toConsumableArray(oldClasses));
      }
    }
  }

  function addClasses(classes) {
    if (isString(classes)) {
      var newClasses = getClassesArray(classes);

      if (newClasses.length) {
        var _element$classList2;

        (_element$classList2 = element.classList).add.apply(_element$classList2, _toConsumableArray(newClasses));
      }
    }
  }
  /**
  * Setup keydown events to allow closing the modal with ESC
  *
  * Borrowed from this great post! https://bitsofco.de/accessible-modal-dialog/
  *
  * @private
  */


  var handleKeyDown = function (e) {
    var _step = step,
        tour = _step.tour;

    switch (e.keyCode) {
      case KEY_TAB:
        if (focusableElements.length === 0) {
          e.preventDefault();
          break;
        } // Backward tab


        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement || document.activeElement.classList.contains("shepherd-element")) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }

        break;

      case KEY_ESC:
        if (tour.options.exitOnEsc) {
          step.cancel();
        }

        break;

      case LEFT_ARROW:
        if (tour.options.keyboardNavigation) {
          tour.back();
        }

        break;

      case RIGHT_ARROW:
        if (tour.options.keyboardNavigation) {
          tour.next();
        }

        break;
    }
  };

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      element = $$value;
      $$invalidate(0, element);
    });
  }

  $$self.$$set = function ($$props) {
    if ("classPrefix" in $$props) $$invalidate(11, classPrefix = $$props.classPrefix);
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("descriptionId" in $$props) $$invalidate(2, descriptionId = $$props.descriptionId);
    if ("firstFocusableElement" in $$props) $$invalidate(8, firstFocusableElement = $$props.firstFocusableElement);
    if ("focusableElements" in $$props) $$invalidate(9, focusableElements = $$props.focusableElements);
    if ("labelId" in $$props) $$invalidate(3, labelId = $$props.labelId);
    if ("lastFocusableElement" in $$props) $$invalidate(10, lastFocusableElement = $$props.lastFocusableElement);
    if ("step" in $$props) $$invalidate(4, step = $$props.step);
    if ("dataStepId" in $$props) $$invalidate(1, dataStepId = $$props.dataStepId);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*step*/
    16) {
      {
        $$invalidate(5, hasCancelIcon = step.options && step.options.cancelIcon && step.options.cancelIcon.enabled);
        $$invalidate(6, hasTitle = step.options && step.options.title);
      }
    }
  };

  return [element, dataStepId, descriptionId, labelId, step, hasCancelIcon, hasTitle, handleKeyDown, firstFocusableElement, focusableElements, lastFocusableElement, classPrefix, getElement, div_binding];
}

var Shepherd_element = /*#__PURE__*/function (_SvelteComponent8) {
  _inherits(Shepherd_element, _SvelteComponent8);

  var _super8 = _createSuper(Shepherd_element);

  function Shepherd_element(options) {
    var _this10;

    _classCallCheck(this, Shepherd_element);

    _this10 = _super8.call(this);
    init(_assertThisInitialized(_this10), options, instance$7, create_fragment$7, safe_not_equal, {
      classPrefix: 11,
      element: 0,
      descriptionId: 2,
      firstFocusableElement: 8,
      focusableElements: 9,
      labelId: 3,
      lastFocusableElement: 10,
      step: 4,
      dataStepId: 1,
      getElement: 12
    });
    return _this10;
  }

  _createClass(Shepherd_element, [{
    key: "getElement",
    get: function () {
      return this.$$.ctx[12];
    }
  }]);

  return Shepherd_element;
}(SvelteComponent);

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var smoothscroll = createCommonjsModule(function (module, exports) {
  /* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
  (function () {
    function polyfill() {
      // aliases
      var w = window;
      var d = document; // return if scroll behavior is supported and polyfill is not forced

      if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
        return;
      } // globals


      var Element = w.HTMLElement || w.Element;
      var SCROLL_TIME = 468; // object gathering original scroll methods

      var original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element.prototype.scroll || scrollElement,
        scrollIntoView: Element.prototype.scrollIntoView
      }; // define timing method

      var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
      /**
       * indicates if a the current browser is made by Microsoft
       * @method isMicrosoftBrowser
       * @param {String} userAgent
       * @returns {Boolean}
       */

      function isMicrosoftBrowser(userAgent) {
        var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
        return new RegExp(userAgentPatterns.join('|')).test(userAgent);
      }
      /*
       * IE has rounding bug rounding down clientHeight and clientWidth and
       * rounding up scrollHeight and scrollWidth causing false positives
       * on hasScrollableSpace
       */


      var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
      /**
       * changes scroll position inside an element
       * @method scrollElement
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */

      function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
      }
      /**
       * returns result of applying ease math function to a number
       * @method ease
       * @param {Number} k
       * @returns {Number}
       */


      function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }
      /**
       * indicates if a smooth behavior should be applied
       * @method shouldBailOut
       * @param {Number|Object} firstArg
       * @returns {Boolean}
       */


      function shouldBailOut(firstArg) {
        if (firstArg === null || _typeof(firstArg) !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
          // first argument is not an object/null
          // or behavior is auto, instant or undefined
          return true;
        }

        if (_typeof(firstArg) === 'object' && firstArg.behavior === 'smooth') {
          // first argument is an object and behavior is smooth
          return false;
        } // throw error when behavior is not supported


        throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
      }
      /**
       * indicates if an element has scrollable space in the provided axis
       * @method hasScrollableSpace
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function hasScrollableSpace(el, axis) {
        if (axis === 'Y') {
          return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
        }

        if (axis === 'X') {
          return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
      }
      /**
       * indicates if an element has a scrollable overflow property in the axis
       * @method canOverflow
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function canOverflow(el, axis) {
        var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
        return overflowValue === 'auto' || overflowValue === 'scroll';
      }
      /**
       * indicates if an element can be scrolled in either axis
       * @method isScrollable
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function isScrollable(el) {
        var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
        var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
        return isScrollableY || isScrollableX;
      }
      /**
       * finds scrollable parent of an element
       * @method findScrollableParent
       * @param {Node} el
       * @returns {Node} el
       */


      function findScrollableParent(el) {
        while (el !== d.body && isScrollable(el) === false) {
          el = el.parentNode || el.host;
        }

        return el;
      }
      /**
       * self invoked function that, given a context, steps through scrolling
       * @method step
       * @param {Object} context
       * @returns {undefined}
       */


      function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

        elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

        value = ease(elapsed);
        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;
        context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

        if (currentX !== context.x || currentY !== context.y) {
          w.requestAnimationFrame(step.bind(w, context));
        }
      }
      /**
       * scrolls window or element with a smooth behavior
       * @method smoothScroll
       * @param {Object|Node} el
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */


      function smoothScroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now(); // define scroll context

        if (el === d.body) {
          scrollable = w;
          startX = w.scrollX || w.pageXOffset;
          startY = w.scrollY || w.pageYOffset;
          method = original.scroll;
        } else {
          scrollable = el;
          startX = el.scrollLeft;
          startY = el.scrollTop;
          method = scrollElement;
        } // scroll looping over a frame


        step({
          scrollable: scrollable,
          method: method,
          startTime: startTime,
          startX: startX,
          startY: startY,
          x: x,
          y: y
        });
      } // ORIGINAL METHODS OVERRIDES
      // w.scroll and w.scrollTo


      w.scroll = w.scrollTo = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
      }; // w.scrollBy


      w.scrollBy = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0])) {
          original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
      }; // Element.prototype.scroll and Element.prototype.scrollTo


      Element.prototype.scroll = Element.prototype.scrollTo = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          // if one number is passed, throw error to match Firefox implementation
          if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
            throw new SyntaxError('Value could not be converted');
          }

          original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined ? ~~arguments[0].left : _typeof(arguments[0]) !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
          return;
        }

        var left = arguments[0].left;
        var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

        smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
      }; // Element.prototype.scrollBy


      Element.prototype.scrollBy = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
          return;
        }

        this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        });
      }; // Element.prototype.scrollIntoView


      Element.prototype.scrollIntoView = function () {
        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
          original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        var scrollableParent = findScrollableParent(this);
        var parentRects = scrollableParent.getBoundingClientRect();
        var clientRects = this.getBoundingClientRect();

        if (scrollableParent !== d.body) {
          // reveal element inside parent
          smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

          if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
            w.scrollBy({
              left: parentRects.left,
              top: parentRects.top,
              behavior: 'smooth'
            });
          }
        } else {
          // reveal element in viewport
          w.scrollBy({
            left: clientRects.left,
            top: clientRects.top,
            behavior: 'smooth'
          });
        }
      };
    }

    {
      // commonjs
      module.exports = {
        polyfill: polyfill
      };
    }
  })();
});
var smoothscroll_1 = smoothscroll.polyfill;
smoothscroll.polyfill();
/**
 * A class representing steps to be added to a tour.
 * @extends {Evented}
 */

var Step = /*#__PURE__*/function (_Evented) {
  _inherits(Step, _Evented);

  var _super9 = _createSuper(Step);

  /**
   * Create a step
   * @param {Tour} tour The tour for the step
   * @param {object} options The options for the step
   * @param {boolean} options.arrow Whether to display the arrow for the tooltip or not. Defaults to `true`.
   * @param {object} options.attachTo The element the step should be attached to on the page.
   * An object with properties `element` and `on`.
   *
   * ```js
   * const step = new Step(tour, {
   *   attachTo: { element: '.some .selector-path', on: 'left' },
   *   ...moreOptions
   * });
   * ```
   *
   * If you don’t specify an attachTo the element will appear in the middle of the screen.
   * If you omit the `on` portion of `attachTo`, the element will still be highlighted, but the tooltip will appear
   * in the middle of the screen, without an arrow pointing to the target.
   * @param {HTMLElement|string} options.attachTo.element An element selector string or a DOM element.
   * @param {string} options.attachTo.on The optional direction to place the Popper tooltip relative to the element.
   *   - Possible string values: 'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'
   * @param {Object} options.advanceOn An action on the page which should advance shepherd to the next step.
   * It should be an object with a string `selector` and an `event` name
   * ```js
   * const step = new Step(tour, {
   *   advanceOn: { selector: '.some .selector-path', event: 'click' },
   *   ...moreOptions
   * });
   * ```
   * `event` doesn’t have to be an event inside the tour, it can be any event fired on any element on the page.
   * You can also always manually advance the Tour by calling `myTour.next()`.
   * @param {function} options.beforeShowPromise A function that returns a promise.
   * When the promise resolves, the rest of the `show` code for the step will execute.
   * @param {Object[]} options.buttons An array of buttons to add to the step. These will be rendered in a
   * footer below the main body text.
   * @param {function} options.buttons.button.action A function executed when the button is clicked on.
   * It is automatically bound to the `tour` the step is associated with, so things like `this.next` will
   * work inside the action.
   * You can use action to skip steps or navigate to specific steps, with something like:
   * ```js
   * action() {
   *   return this.show('some_step_name');
   * }
   * ```
   * @param {string} options.buttons.button.classes Extra classes to apply to the `<a>`
   * @param {boolean} options.buttons.button.disabled Should the button be disabled?
   * @param {string} options.buttons.button.label The aria-label text of the button
   * @param {boolean} options.buttons.button.secondary If true, a shepherd-button-secondary class is applied to the button
   * @param {string} options.buttons.button.text The HTML text of the button
   * @param {boolean} options.canClickTarget A boolean, that when set to false, will set `pointer-events: none` on the target
   * @param {object} options.cancelIcon Options for the cancel icon
   * @param {boolean} options.cancelIcon.enabled Should a cancel “✕” be shown in the header of the step?
   * @param {string} options.cancelIcon.label The label to add for `aria-label`
   * @param {string} options.classes A string of extra classes to add to the step's content element.
   * @param {string} options.highlightClass An extra class to apply to the `attachTo` element when it is
   * highlighted (that is, when its step is active). You can then target that selector in your CSS.
   * @param {string} options.id The string to use as the `id` for the step.
   * @param {number} options.modalOverlayOpeningPadding An amount of padding to add around the modal overlay opening
   * @param {number} options.modalOverlayOpeningRadius An amount of border radius to add around the modal overlay opening
   * @param {object} options.popperOptions Extra options to pass to Popper
   * @param {boolean|Object} options.scrollTo Should the element be scrolled to when this step is shown? If true, uses the default `scrollIntoView`,
   * if an object, passes that object as the params to `scrollIntoView` i.e. `{behavior: 'smooth', block: 'center'}`
   * @param {function} options.scrollToHandler A function that lets you override the default scrollTo behavior and
   * define a custom action to do the scrolling, and possibly other logic.
   * @param {function} options.showOn A function that, when it returns `true`, will show the step.
   * If it returns false, the step will be skipped.
   * @param {string} options.text The text in the body of the step. It can be one of three types:
   * ```
   * - HTML string
   * - `HTMLElement` object
   * - `Function` to be executed when the step is built. It must return one the two options above.
   * ```
   * @param {string} options.title The step's title. It becomes an `h3` at the top of the step. It can be one of two types:
   * ```
   * - HTML string
   * - `Function` to be executed when the step is built. It must return HTML string.
   * ```
   * @param {object} options.when You can define `show`, `hide`, etc events inside `when`. For example:
   * ```js
   * when: {
   *   show: function() {
   *     window.scrollTo(0, 0);
   *   }
   * }
   * ```
   * @return {Step} The newly created Step instance
   */
  function Step(tour) {
    var _this11;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Step);

    _this11 = _super9.call(this, tour, options);
    _this11.tour = tour;
    _this11.classPrefix = _this11.tour.options ? normalizePrefix(_this11.tour.options.classPrefix) : '';
    _this11.styles = tour.styles;
    autoBind(_assertThisInitialized(_this11));

    _this11._setOptions(options);

    return _possibleConstructorReturn(_this11, _assertThisInitialized(_this11));
  }
  /**
   * Cancel the tour
   * Triggers the `cancel` event
   */


  _createClass(Step, [{
    key: "cancel",
    value: function cancel() {
      this.tour.cancel();
      this.trigger('cancel');
    }
    /**
     * Complete the tour
     * Triggers the `complete` event
     */

  }, {
    key: "complete",
    value: function complete() {
      this.tour.complete();
      this.trigger('complete');
    }
    /**
     * Remove the step, delete the step's element, and destroy the Popper instance for the step.
     * Triggers `destroy` event
     */

  }, {
    key: "destroy",
    value: function destroy() {
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }

      if (isHTMLElement(this.el) && this.el.parentNode) {
        this.el.parentNode.removeChild(this.el);
        this.el = null;
      }

      this._updateStepTargetOnHide();

      this.trigger('destroy');
    }
    /**
     * Returns the tour for the step
     * @return {Tour} The tour instance
     */

  }, {
    key: "getTour",
    value: function getTour() {
      return this.tour;
    }
    /**
     * Hide the step
     */

  }, {
    key: "hide",
    value: function hide() {
      this.tour.modal.hide();
      this.trigger('before-hide');

      if (this.el) {
        this.el.hidden = true;
      }

      this._updateStepTargetOnHide();

      this.trigger('hide');
    }
    /**
     * Checks if the step should be centered or not
     * @return {boolean} True if the step is centered
     */

  }, {
    key: "isCentered",
    value: function isCentered() {
      var attachToOptions = parseAttachTo(this);
      return !attachToOptions.element || !attachToOptions.on;
    }
    /**
     * Check if the step is open and visible
     * @return {boolean} True if the step is open and visible
     */

  }, {
    key: "isOpen",
    value: function isOpen() {
      return Boolean(this.el && !this.el.hidden);
    }
    /**
     * Wraps `_show` and ensures `beforeShowPromise` resolves before calling show
     * @return {*|Promise}
     */

  }, {
    key: "show",
    value: function show() {
      var _this12 = this;

      if (isFunction(this.options.beforeShowPromise)) {
        var beforeShowPromise = this.options.beforeShowPromise();

        if (!isUndefined(beforeShowPromise)) {
          return beforeShowPromise.then(function () {
            return _this12._show();
          });
        }
      }

      this._show();
    }
    /**
     * Updates the options of the step.
     *
     * @param {Object} options The options for the step
     */

  }, {
    key: "updateStepOptions",
    value: function updateStepOptions(options) {
      Object.assign(this.options, options);

      if (this.shepherdElementComponent) {
        this.shepherdElementComponent.$set({
          step: this
        });
      }
    }
    /**
     * Returns the element for the step
     * @return {HTMLElement|null|undefined} The element instance. undefined if it has never been shown, null if it has been destroyed
     */

  }, {
    key: "getElement",
    value: function getElement() {
      return this.el;
    }
    /**
     * Returns the target for the step
     * @return {HTMLElement|null|undefined} The element instance. undefined if it has never been shown, null if query string has not been found
     */

  }, {
    key: "getTarget",
    value: function getTarget() {
      return this.target;
    }
    /**
     * Creates Shepherd element for step based on options
     *
     * @return {Element} The DOM element for the step tooltip
     * @private
     */

  }, {
    key: "_createTooltipContent",
    value: function _createTooltipContent() {
      var descriptionId = "".concat(this.id, "-description");
      var labelId = "".concat(this.id, "-label");
      this.shepherdElementComponent = new Shepherd_element({
        target: this.tour.options.stepsContainer || document.body,
        props: {
          classPrefix: this.classPrefix,
          descriptionId: descriptionId,
          labelId: labelId,
          step: this,
          styles: this.styles
        }
      });
      return this.shepherdElementComponent.getElement();
    }
    /**
     * If a custom scrollToHandler is defined, call that, otherwise do the generic
     * scrollIntoView call.
     *
     * @param {boolean|Object} scrollToOptions If true, uses the default `scrollIntoView`,
     * if an object, passes that object as the params to `scrollIntoView` i.e. `{ behavior: 'smooth', block: 'center' }`
     * @private
     */

  }, {
    key: "_scrollTo",
    value: function _scrollTo(scrollToOptions) {
      var _parseAttachTo = parseAttachTo(this),
          element = _parseAttachTo.element;

      if (isFunction(this.options.scrollToHandler)) {
        this.options.scrollToHandler(element);
      } else if (isElement(element) && typeof element.scrollIntoView === 'function') {
        element.scrollIntoView(scrollToOptions);
      }
    }
    /**
     * _getClassOptions gets all possible classes for the step
     * @param {Object} stepOptions The step specific options
     * @returns {String} unique string from array of classes
     * @private
     */

  }, {
    key: "_getClassOptions",
    value: function _getClassOptions(stepOptions) {
      var defaultStepOptions = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
      var stepClasses = stepOptions.classes ? stepOptions.classes : '';
      var defaultStepOptionsClasses = defaultStepOptions && defaultStepOptions.classes ? defaultStepOptions.classes : '';
      var allClasses = [].concat(_toConsumableArray(stepClasses.split(' ')), _toConsumableArray(defaultStepOptionsClasses.split(' ')));
      var uniqClasses = new Set(allClasses);
      return Array.from(uniqClasses).join(' ').trim();
    }
    /**
     * Sets the options for the step, maps `when` to events, sets up buttons
     * @param {Object} options The options for the step
     * @private
     */

  }, {
    key: "_setOptions",
    value: function _setOptions() {
      var _this13 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var tourOptions = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
      tourOptions = cjs({}, tourOptions || {});
      this.options = Object.assign({
        arrow: true
      }, tourOptions, options);
      var when = this.options.when;
      this.options.classes = this._getClassOptions(options);
      this.destroy();
      this.id = this.options.id || "step-".concat(uuid());

      if (when) {
        Object.keys(when).forEach(function (event) {
          _this13.on(event, when[event], _this13);
        });
      }
    }
    /**
     * Create the element and set up the Popper instance
     * @private
     */

  }, {
    key: "_setupElements",
    value: function _setupElements() {
      if (!isUndefined(this.el)) {
        this.destroy();
      }

      this.el = this._createTooltipContent();

      if (this.options.advanceOn) {
        bindAdvance(this);
      }

      setupTooltip(this);
    }
    /**
     * Triggers `before-show`, generates the tooltip DOM content,
     * sets up a Popper instance for the tooltip, then triggers `show`.
     * @private
     */

  }, {
    key: "_show",
    value: function _show() {
      var _this14 = this;

      this.trigger('before-show');

      this._setupElements();

      if (!this.tour.modal) {
        this.tour._setupModal();
      }

      this.tour.modal.setupForStep(this);

      this._styleTargetElementForStep(this);

      this.el.hidden = false; // start scrolling to target before showing the step

      if (this.options.scrollTo) {
        setTimeout(function () {
          _this14._scrollTo(_this14.options.scrollTo);
        });
      }

      this.el.hidden = false;
      var content = this.shepherdElementComponent.getElement();
      var target = this.target || document.body;
      target.classList.add("".concat(this.classPrefix, "shepherd-enabled"));
      target.classList.add("".concat(this.classPrefix, "shepherd-target"));
      content.classList.add('shepherd-enabled');
      this.trigger('show');
    }
    /**
     * Modulates the styles of the passed step's target element, based on the step's options and
     * the tour's `modal` option, to visually emphasize the element
     *
     * @param step The step object that attaches to the element
     * @private
     */

  }, {
    key: "_styleTargetElementForStep",
    value: function _styleTargetElementForStep(step) {
      var targetElement = step.target;

      if (!targetElement) {
        return;
      }

      if (step.options.highlightClass) {
        targetElement.classList.add(step.options.highlightClass);
      }

      if (step.options.canClickTarget === false) {
        targetElement.classList.add('shepherd-target-click-disabled');
      }
    }
    /**
     * When a step is hidden, remove the highlightClass and 'shepherd-enabled'
     * and 'shepherd-target' classes
     * @private
     */

  }, {
    key: "_updateStepTargetOnHide",
    value: function _updateStepTargetOnHide() {
      var target = this.target || document.body;

      if (this.options.highlightClass) {
        target.classList.remove(this.options.highlightClass);
      }

      target.classList.remove("".concat(this.classPrefix, "shepherd-enabled"), "".concat(this.classPrefix, "shepherd-target"));
    }
  }]);

  return Step;
}(Evented);
/**
 * Cleanup the steps and set pointerEvents back to 'auto'
 * @param tour The tour object
 */


function cleanupSteps(tour) {
  if (tour) {
    var steps = tour.steps;
    steps.forEach(function (step) {
      if (step.options && step.options.canClickTarget === false && step.options.attachTo) {
        if (step.target instanceof HTMLElement) {
          step.target.classList.remove('shepherd-target-click-disabled');
        }
      }
    });
  }
}
/**
 * Generates the svg path data for a rounded rectangle overlay
 * @param {Object} dimension - Dimensions of rectangle.
 * @param {number} width - Width.
 * @param {number} height - Height.
 * @param {number} [x=0] - Offset from top left corner in x axis. default 0.
 * @param {number} [y=0] - Offset from top left corner in y axis. default 0.
 * @param {number} [r=0] - Corner Radius. Keep this smaller than  half of width or height.
 * @returns {string} - Rounded rectangle overlay path data.
 */


function makeOverlayPath(_ref22) {
  var width = _ref22.width,
      height = _ref22.height,
      _ref22$x = _ref22.x,
      x = _ref22$x === void 0 ? 0 : _ref22$x,
      _ref22$y = _ref22.y,
      y = _ref22$y === void 0 ? 0 : _ref22$y,
      _ref22$r = _ref22.r,
      r = _ref22$r === void 0 ? 0 : _ref22$r;
  var _window = window,
      w = _window.innerWidth,
      h = _window.innerHeight;
  return "M".concat(w, ",").concat(h, "H0V0H").concat(w, "V").concat(h, "ZM").concat(x + r, ",").concat(y, "a").concat(r, ",").concat(r, ",0,0,0-").concat(r, ",").concat(r, "V").concat(height + y - r, "a").concat(r, ",").concat(r, ",0,0,0,").concat(r, ",").concat(r, "H").concat(width + x - r, "a").concat(r, ",").concat(r, ",0,0,0,").concat(r, "-").concat(r, "V").concat(y + r, "a").concat(r, ",").concat(r, ",0,0,0-").concat(r, "-").concat(r, "Z");
}
/* src/js/components/shepherd-modal.svelte generated by Svelte v3.28.0 */


function create_fragment$8(ctx) {
  var svg;
  var path;
  var svg_class_value;
  var mounted;
  var dispose;
  return {
    c: function () {
      svg = svg_element("svg");
      path = svg_element("path");
      attr(path, "d",
      /*pathDefinition*/
      ctx[2]);
      attr(svg, "class", svg_class_value = "".concat(
      /*modalIsVisible*/
      ctx[1] ? "shepherd-modal-is-visible" : "", " shepherd-modal-overlay-container"));
    },
    m: function (target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      /*svg_binding*/

      ctx[11](svg);

      if (!mounted) {
        dispose = listen(svg, "touchmove",
        /*_preventModalOverlayTouch*/
        ctx[3]);
        mounted = true;
      }
    },
    p: function (ctx, _ref23) {
      var _ref24 = _slicedToArray(_ref23, 1),
          dirty = _ref24[0];

      if (dirty &
      /*pathDefinition*/
      4) {
        attr(path, "d",
        /*pathDefinition*/
        ctx[2]);
      }

      if (dirty &
      /*modalIsVisible*/
      2 && svg_class_value !== (svg_class_value = "".concat(
      /*modalIsVisible*/
      ctx[1] ? "shepherd-modal-is-visible" : "", " shepherd-modal-overlay-container"))) {
        attr(svg, "class", svg_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function (detaching) {
      if (detaching) detach(svg);
      /*svg_binding*/

      ctx[11](null);
      mounted = false;
      dispose();
    }
  };
}

function _getScrollParent(element) {
  if (!element) {
    return null;
  }

  var isHtmlElement = element instanceof HTMLElement;
  var overflowY = isHtmlElement && window.getComputedStyle(element).overflowY;
  var isScrollable = overflowY !== "hidden" && overflowY !== "visible";

  if (isScrollable && element.scrollHeight >= element.clientHeight) {
    return element;
  }

  return _getScrollParent(element.parentElement);
}
/**
* Get the visible height of the target element relative to its scrollParent.
* If there is no scroll parent, the height of the element is returned.
*
* @param {HTMLElement} element The target element
* @param {HTMLElement} [scrollParent] The scrollable parent element
* @returns {{y: number, height: number}}
* @private
*/


function _getVisibleHeight(element, scrollParent) {
  var elementRect = element.getBoundingClientRect();
  var top = elementRect.y || elementRect.top;
  var bottom = elementRect.bottom || top + elementRect.height;

  if (scrollParent) {
    var scrollRect = scrollParent.getBoundingClientRect();
    var scrollTop = scrollRect.y || scrollRect.top;
    var scrollBottom = scrollRect.bottom || scrollTop + scrollRect.height;
    top = Math.max(top, scrollTop);
    bottom = Math.min(bottom, scrollBottom);
  }

  var height = Math.max(bottom - top, 0); // Default to 0 if height is negative

  return {
    y: top,
    height: height
  };
}

function instance$8($$self, $$props, $$invalidate) {
  var element = $$props.element,
      openingProperties = $$props.openingProperties;
  var guid = uuid();
  var modalIsVisible = false;
  var rafId = undefined;
  var pathDefinition;
  closeModalOpening();

  var getElement = function () {
    return element;
  };

  function closeModalOpening() {
    $$invalidate(4, openingProperties = {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      r: 0
    });
  }

  function hide() {
    $$invalidate(1, modalIsVisible = false); // Ensure we cleanup all event listeners when we hide the modal

    _cleanupStepEventListeners();
  }

  function positionModalOpening(targetElement, scrollParent) {
    var modalOverlayOpeningPadding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var modalOverlayOpeningRadius = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (targetElement.getBoundingClientRect) {
      var _getVisibleHeight2 = _getVisibleHeight(targetElement, scrollParent),
          y = _getVisibleHeight2.y,
          height = _getVisibleHeight2.height;

      var _targetElement$getBou = targetElement.getBoundingClientRect(),
          x = _targetElement$getBou.x,
          width = _targetElement$getBou.width,
          _left = _targetElement$getBou.left; // getBoundingClientRect is not consistent. Some browsers use x and y, while others use left and top


      $$invalidate(4, openingProperties = {
        width: width + modalOverlayOpeningPadding * 2,
        height: height + modalOverlayOpeningPadding * 2,
        x: (x || _left) - modalOverlayOpeningPadding,
        y: y - modalOverlayOpeningPadding,
        r: modalOverlayOpeningRadius
      });
    }
  }

  function setupForStep(step) {
    // Ensure we move listeners from the previous step, before we setup new ones
    _cleanupStepEventListeners();

    if (step.tour.options.useModalOverlay) {
      _styleForStep(step);

      show();
    } else {
      hide();
    }
  }

  function show() {
    $$invalidate(1, modalIsVisible = true);
  }

  var _preventModalBodyTouch = function (e) {
    e.preventDefault();
  };

  var _preventModalOverlayTouch = function (e) {
    e.stopPropagation();
  };
  /**
  * Add touchmove event listener
  * @private
  */


  function _addStepEventListeners() {
    // Prevents window from moving on touch.
    window.addEventListener("touchmove", _preventModalBodyTouch, {
      passive: false
    });
  }
  /**
  * Cancel the requestAnimationFrame loop and remove touchmove event listeners
  * @private
  */


  function _cleanupStepEventListeners() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = undefined;
    }

    window.removeEventListener("touchmove", _preventModalBodyTouch, {
      passive: false
    });
  }
  /**
  * Style the modal for the step
  * @param {Step} step The step to style the opening for
  * @private
  */


  function _styleForStep(step) {
    var _step$options = step.options,
        modalOverlayOpeningPadding = _step$options.modalOverlayOpeningPadding,
        modalOverlayOpeningRadius = _step$options.modalOverlayOpeningRadius;

    if (step.target) {
      var scrollParent = _getScrollParent(step.target); // Setup recursive function to call requestAnimationFrame to update the modal opening position


      var rafLoop = function () {
        rafId = undefined;
        positionModalOpening(step.target, scrollParent, modalOverlayOpeningPadding, modalOverlayOpeningRadius);
        rafId = requestAnimationFrame(rafLoop);
      };

      rafLoop();

      _addStepEventListeners();
    } else {
      closeModalOpening();
    }
  }

  function svg_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      element = $$value;
      $$invalidate(0, element);
    });
  }

  $$self.$$set = function ($$props) {
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("openingProperties" in $$props) $$invalidate(4, openingProperties = $$props.openingProperties);
  };

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*openingProperties*/
    16) {
      $$invalidate(2, pathDefinition = makeOverlayPath(openingProperties));
    }
  };

  return [element, modalIsVisible, pathDefinition, _preventModalOverlayTouch, openingProperties, getElement, closeModalOpening, hide, positionModalOpening, setupForStep, show, svg_binding];
}

var Shepherd_modal = /*#__PURE__*/function (_SvelteComponent9) {
  _inherits(Shepherd_modal, _SvelteComponent9);

  var _super10 = _createSuper(Shepherd_modal);

  function Shepherd_modal(options) {
    var _this15;

    _classCallCheck(this, Shepherd_modal);

    _this15 = _super10.call(this);
    init(_assertThisInitialized(_this15), options, instance$8, create_fragment$8, safe_not_equal, {
      element: 0,
      openingProperties: 4,
      getElement: 5,
      closeModalOpening: 6,
      hide: 7,
      positionModalOpening: 8,
      setupForStep: 9,
      show: 10
    });
    return _this15;
  }

  _createClass(Shepherd_modal, [{
    key: "getElement",
    get: function () {
      return this.$$.ctx[5];
    }
  }, {
    key: "closeModalOpening",
    get: function () {
      return this.$$.ctx[6];
    }
  }, {
    key: "hide",
    get: function () {
      return this.$$.ctx[7];
    }
  }, {
    key: "positionModalOpening",
    get: function () {
      return this.$$.ctx[8];
    }
  }, {
    key: "setupForStep",
    get: function () {
      return this.$$.ctx[9];
    }
  }, {
    key: "show",
    get: function () {
      return this.$$.ctx[10];
    }
  }]);

  return Shepherd_modal;
}(SvelteComponent);

var Shepherd = new Evented();
/**
 * Class representing the site tour
 * @extends {Evented}
 */

var Tour = /*#__PURE__*/function (_Evented2) {
  _inherits(Tour, _Evented2);

  var _super11 = _createSuper(Tour);

  /**
   * @param {Object} options The options for the tour
   * @param {boolean} options.confirmCancel If true, will issue a `window.confirm` before cancelling
   * @param {string} options.confirmCancelMessage The message to display in the confirm dialog
   * @param {string} options.classPrefix The prefix to add to the `shepherd-enabled` and `shepherd-target` class names as well as the `data-shepherd-step-id`.
   * @param {Object} options.defaultStepOptions Default options for Steps ({@link Step#constructor}), created through `addStep`
   * @param {boolean} options.exitOnEsc Exiting the tour with the escape key will be enabled unless this is explicitly
   * set to false.
   * @param {boolean} options.keyboardNavigation Navigating the tour via left and right arrow keys will be enabled
   * unless this is explicitly set to false.
   * @param {HTMLElement} options.stepsContainer An optional container element for the steps.
   * If not set, the steps will be appended to `document.body`.
   * @param {HTMLElement} options.modalContainer An optional container element for the modal.
   * If not set, the modal will be appended to `document.body`.
   * @param {object[] | Step[]} options.steps An array of step options objects or Step instances to initialize the tour with
   * @param {string} options.tourName An optional "name" for the tour. This will be appended to the the tour's
   * dynamically generated `id` property -- which is also set on the `body` element as the `data-shepherd-active-tour` attribute
   * whenever the tour becomes active.
   * @param {boolean} options.useModalOverlay Whether or not steps should be placed above a darkened
   * modal overlay. If true, the overlay will create an opening around the target element so that it
   * can remain interactive
   * @returns {Tour}
   */
  function Tour() {
    var _this16;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Tour);

    _this16 = _super11.call(this, options);
    autoBind(_assertThisInitialized(_this16));
    var defaultTourOptions = {
      exitOnEsc: true,
      keyboardNavigation: true
    };
    _this16.options = Object.assign({}, defaultTourOptions, options);
    _this16.classPrefix = normalizePrefix(_this16.options.classPrefix);
    _this16.steps = [];

    _this16.addSteps(_this16.options.steps); // Pass these events onto the global Shepherd object


    var events = ['active', 'cancel', 'complete', 'inactive', 'show', 'start'];
    events.map(function (event) {
      (function (e) {
        _this16.on(e, function (opts) {
          opts = opts || {};
          opts.tour = _assertThisInitialized(_this16);
          Shepherd.trigger(e, opts);
        });
      })(event);
    });

    _this16._setTourID();

    return _possibleConstructorReturn(_this16, _assertThisInitialized(_this16));
  }
  /**
   * Adds a new step to the tour
   * @param {Object|Step} options An object containing step options or a Step instance
   * @param {number} index The optional index to insert the step at. If undefined, the step
   * is added to the end of the array.
   * @return {Step} The newly added step
   */


  _createClass(Tour, [{
    key: "addStep",
    value: function addStep(options, index) {
      var step = options;

      if (!(step instanceof Step)) {
        step = new Step(this, step);
      } else {
        step.tour = this;
      }

      if (!isUndefined(index)) {
        this.steps.splice(index, 0, step);
      } else {
        this.steps.push(step);
      }

      return step;
    }
    /**
     * Add multiple steps to the tour
     * @param {Array<object> | Array<Step>} steps The steps to add to the tour
     */

  }, {
    key: "addSteps",
    value: function addSteps(steps) {
      var _this17 = this;

      if (Array.isArray(steps)) {
        steps.forEach(function (step) {
          _this17.addStep(step);
        });
      }

      return this;
    }
    /**
     * Go to the previous step in the tour
     */

  }, {
    key: "back",
    value: function back() {
      var index = this.steps.indexOf(this.currentStep);
      this.show(index - 1, false);
    }
    /**
     * Calls _done() triggering the 'cancel' event
     * If `confirmCancel` is true, will show a window.confirm before cancelling
     */

  }, {
    key: "cancel",
    value: function cancel() {
      if (this.options.confirmCancel) {
        var cancelMessage = this.options.confirmCancelMessage || 'Are you sure you want to stop the tour?';
        var stopTour = window.confirm(cancelMessage);

        if (stopTour) {
          this._done('cancel');
        }
      } else {
        this._done('cancel');
      }
    }
    /**
     * Calls _done() triggering the `complete` event
     */

  }, {
    key: "complete",
    value: function complete() {
      this._done('complete');
    }
    /**
     * Gets the step from a given id
     * @param {Number|String} id The id of the step to retrieve
     * @return {Step} The step corresponding to the `id`
     */

  }, {
    key: "getById",
    value: function getById(id) {
      return this.steps.find(function (step) {
        return step.id === id;
      });
    }
    /**
     * Gets the current step
     * @returns {Step|null}
     */

  }, {
    key: "getCurrentStep",
    value: function getCurrentStep() {
      return this.currentStep;
    }
    /**
     * Hide the current step
     */

  }, {
    key: "hide",
    value: function hide() {
      var currentStep = this.getCurrentStep();

      if (currentStep) {
        return currentStep.hide();
      }
    }
    /**
     * Check if the tour is active
     * @return {boolean}
     */

  }, {
    key: "isActive",
    value: function isActive() {
      return Shepherd.activeTour === this;
    }
    /**
     * Go to the next step in the tour
     * If we are at the end, call `complete`
     */

  }, {
    key: "next",
    value: function next() {
      var index = this.steps.indexOf(this.currentStep);

      if (index === this.steps.length - 1) {
        this.complete();
      } else {
        this.show(index + 1, true);
      }
    }
    /**
     * Removes the step from the tour
     * @param {String} name The id for the step to remove
     */

  }, {
    key: "removeStep",
    value: function removeStep(name) {
      var _this18 = this;

      var current = this.getCurrentStep(); // Find the step, destroy it and remove it from this.steps

      this.steps.some(function (step, i) {
        if (step.id === name) {
          if (step.isOpen()) {
            step.hide();
          }

          step.destroy();

          _this18.steps.splice(i, 1);

          return true;
        }
      });

      if (current && current.id === name) {
        this.currentStep = undefined; // If we have steps left, show the first one, otherwise just cancel the tour

        this.steps.length ? this.show(0) : this.cancel();
      }
    }
    /**
     * Show a specific step in the tour
     * @param {Number|String} key The key to look up the step by
     * @param {Boolean} forward True if we are going forward, false if backward
     */

  }, {
    key: "show",
    value: function show() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var step = isString(key) ? this.getById(key) : this.steps[key];

      if (step) {
        this._updateStateBeforeShow();

        var shouldSkipStep = isFunction(step.options.showOn) && !step.options.showOn(); // If `showOn` returns false, we want to skip the step, otherwise, show the step like normal

        if (shouldSkipStep) {
          this._skipStep(step, forward);
        } else {
          this.trigger('show', {
            step: step,
            previous: this.currentStep
          });
          this.currentStep = step;
          step.show();
        }
      }
    }
    /**
     * Start the tour
     */

  }, {
    key: "start",
    value: function start() {
      this.trigger('start'); // Save the focused element before the tour opens

      this.focusedElBeforeOpen = document.activeElement;
      this.currentStep = null;

      this._setupModal();

      this._setupActiveTour();

      this.next();
    }
    /**
     * Called whenever the tour is cancelled or completed, basically anytime we exit the tour
     * @param {String} event The event name to trigger
     * @private
     */

  }, {
    key: "_done",
    value: function _done(event) {
      var index = this.steps.indexOf(this.currentStep);

      if (Array.isArray(this.steps)) {
        this.steps.forEach(function (step) {
          return step.destroy();
        });
      }

      cleanupSteps(this);
      this.trigger(event, {
        index: index
      });
      Shepherd.activeTour = null;
      this.trigger('inactive', {
        tour: this
      });

      if (this.modal) {
        this.modal.hide();
      }

      if (event === 'cancel' || event === 'complete') {
        if (this.modal) {
          var modalContainer = document.querySelector('.shepherd-modal-overlay-container');

          if (modalContainer) {
            modalContainer.remove();
          }
        }
      } // Focus the element that was focused before the tour started


      if (isHTMLElement(this.focusedElBeforeOpen)) {
        this.focusedElBeforeOpen.focus();
      }
    }
    /**
     * Make this tour "active"
     * @private
     */

  }, {
    key: "_setupActiveTour",
    value: function _setupActiveTour() {
      this.trigger('active', {
        tour: this
      });
      Shepherd.activeTour = this;
    }
    /**
     * _setupModal create the modal container and instance
     * @private
     */

  }, {
    key: "_setupModal",
    value: function _setupModal() {
      this.modal = new Shepherd_modal({
        target: this.options.modalContainer || document.body,
        props: {
          classPrefix: this.classPrefix,
          styles: this.styles
        }
      });
    }
    /**
     * Called when `showOn` evaluates to false, to skip the step
     * @param {Step} step The step to skip
     * @param {Boolean} forward True if we are going forward, false if backward
     * @private
     */

  }, {
    key: "_skipStep",
    value: function _skipStep(step, forward) {
      var index = this.steps.indexOf(step);
      var nextIndex = forward ? index + 1 : index - 1;
      this.show(nextIndex, forward);
    }
    /**
     * Before showing, hide the current step and if the tour is not
     * already active, call `this._setupActiveTour`.
     * @private
     */

  }, {
    key: "_updateStateBeforeShow",
    value: function _updateStateBeforeShow() {
      if (this.currentStep) {
        this.currentStep.hide();
      }

      if (!this.isActive()) {
        this._setupActiveTour();
      }
    }
    /**
     * Sets this.id to `${tourName}--${uuid}`
     * @private
     */

  }, {
    key: "_setTourID",
    value: function _setTourID() {
      var tourName = this.options.tourName || 'tour';
      this.id = "".concat(tourName, "--").concat(uuid());
    }
  }]);

  return Tour;
}(Evented);

Object.assign(Shepherd, {
  Tour: Tour,
  Step: Step
});
var _default = Shepherd;
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
'use strict';

var _bowser = _interopRequireDefault(require("bowser"));

var _marzipano = _interopRequireDefault(require("/vendor/marzipano.js"));

var _data = require("/data.js");

var _core = require("@popperjs/core");

var _screenfullMin = _interopRequireDefault(require("/vendor/screenfull.min.js"));

var _shepherd = _interopRequireDefault(require("shepherd.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// tour
var tour_infoHotspots = new _shepherd.default.Tour();
tour_infoHotspots.addStep({
  showOn: document.body.classList.contains('tour-accepted'),
  text: "Throughout our virtual kitchen, you'll see icons just like this one. These are our product hotspots. Each hotspot is associated with the product closest to it.<br/><br/> Go ahead and click on this one here!\uD83D\uDC47",
  attachTo: {
    element: '.intro-starter',
    on: 'top'
  },
  popperOptions: {
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 25]
      }
    }]
  }
});
var tour_modal = new _shepherd.default.Tour({
  useModalOverlay: true
});
tour_modal.addStep({
  arrow: false,
  showOn: document.body.classList.contains('tour-accepted'),
  modalOverlayOpeningPadding: 10,
  text: "This is where you'll see all of the product information.",
  attachTo: {
    element: '.intro-starter .product-txt-wrapper',
    on: 'auto'
  },
  popperOptions: {
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 80]
      }
    }]
  },
  buttons: [{
    text: 'Back',
    action: tour_modal.back,
    classes: 'shep-back'
  }, {
    text: 'Next',
    action: tour_modal.next,
    classes: 'shep-next'
  }]
});
tour_modal.addStep({
  arrow: false,
  showOn: document.body.classList.contains('tour-accepted'),
  text: "Here, you'll see the product gallery. In it, you'll find high-quality photos and videos of each product.",
  attachTo: {
    element: '.intro-starter .carousel_container',
    on: 'auto'
  },
  popperOptions: {
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 25]
      }
    }, {
      name: 'arrow',
      options: {
        padding: 25 // 5px from the edges of the popper

      }
    }]
  },
  buttons: [{
    text: 'Back',
    action: tour_modal.back,
    classes: 'shep-back'
  }, {
    text: 'Next',
    action: tour_modal.next,
    classes: 'shep-next'
  }]
});
tour_modal.addStep({
  arrow: false,
  showOn: document.body.classList.contains('tour-accepted'),
  text: "Navigate through the product gallery by clicking the buttons, swiping left or right, or scrolling up or down on your mouse-wheel.",
  attachTo: {
    element: '.intro-starter .carousel_container',
    on: 'auto'
  },
  popperOptions: {
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 25]
      }
    }, {
      name: 'arrow',
      options: {
        padding: 25 // 5px from the edges of the popper

      }
    }]
  },
  buttons: [{
    text: 'Back',
    action: tour_modal.back,
    classes: 'shep-back'
  }, {
    text: 'Next',
    action: tour_modal.next,
    classes: 'shep-next'
  }]
});
var tour_linkHotspots = new _shepherd.default.Tour();
tour_linkHotspots.addStep({
  showOn: document.body.classList.contains('tour-accepted'),
  text: "These arrow icons with a blue outline will take you to a different part of our virtual kitchen.<br/> <br/>Try clicking this one to view the pots & pans located on the stove top.",
  attachTo: {
    element: '.second-tour-starter img',
    on: 'top'
  },
  popperOptions: {
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 25]
      }
    }]
  }
});
var tour_movement = new _shepherd.default.Tour({
  confirmCancel: true,
  confirmCancelMessage: 'Are you sure you want to cancel the tour?',
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
      scrollTo: true
    },
    scrollTo: {
      behavior: 'smooth',
      block: 'center'
    }
  }
});
tour_movement.addStep({
  showOn: document.body.classList.contains('tour-accepted'),
  text: "Good moves! I think you got the hang of it!<br/><br/>Just one last note before we let you explore the kitchen (it's stunning isn't it?\uD83D\uDE0D)<br/><br/>To move yourself around, just touch or click any part of the screen and drag it around. You have 360\xB0 of freedom here!<br/><br/><svg xmlns=\"http://www.w3.org/2000/svg\" enable-background=\"new 0 0 24 24\" viewBox=\"0 0 24 24\" fill=\"#000\" width=\"48px\" height=\"48px\"><g><rect fill=\"none\" height=\"24\" width=\"24\" x=\"0\"/></g><g><g><path d=\"M18.89,14.75l-4.09-2.04c-0.28-0.14-0.58-0.21-0.89-0.21H13v-6C13,5.67,12.33,5,11.5,5S10,5.67,10,6.5v10.74L6.75,16.5 c-0.33-0.07-0.68,0.03-0.92,0.28L5,17.62l4.54,4.79C9.92,22.79,10.68,23,11.21,23h6.16c1,0,1.84-0.73,1.98-1.72l0.63-4.46 C20.1,15.97,19.66,15.14,18.89,14.75z\"/><path d=\"M20.13,3.87C18.69,2.17,15.6,1,12,1S5.31,2.17,3.87,3.87L2,2v5h5L4.93,4.93c1-1.29,3.7-2.43,7.07-2.43 s6.07,1.14,7.07,2.43L17,7h5V2L20.13,3.87z\"/></g></g></svg>",
  buttons: [{
    text: 'Dismiss',
    action: tour_movement.next,
    classes: 'shep-next'
  }],
  popperOptions: {
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 25]
      }
    }]
  }
});
var tour_final = new _shepherd.default.Tour({
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
      scrollTo: true
    },
    scrollTo: {
      behavior: 'smooth',
      block: 'center'
    }
  }
});
tour_final.addStep({
  showOn: document.body.classList.contains('tour-accepted'),
  text: "If you ever need help, you can click this icon here for help with navigating the kitchen.<br/><br/>Have a good time at your Pampered Chef (virtual) party!<br/>\uD83E\uDD73\u2728\uD83E\uDD42",
  attachTo: {
    element: '.help-menu-btn svg',
    on: 'auto'
  },
  when: {
    complete: function complete() {
      document.body.classList.remove('tour-accepted');
    },
    cancel: function cancel() {
      document.body.classList.remove('tour-accepted');
    },
    close: function close() {
      document.body.classList.remove('tour-accepted');
    }
  },
  buttons: [{
    text: 'Dismiss',
    action: tour_final.next,
    classes: 'shep-next'
  }],
  popperOptions: {
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 25]
      }
    }]
  }
}); // Grab elements from DOM.

var panoElement = document.querySelector('#pano');
var sceneNameElement = document.querySelector('#titleBar .sceneName');
var sceneElements = document.querySelectorAll('#sceneList .scene');
var fullscreenToggleElement = document.querySelector('#fullscreenToggle'); // Detect desktop or mobile mode.

if (window.matchMedia) {
  var setMode = function setMode() {
    if (mql.matches) {
      document.body.classList.remove('desktop');
      document.body.classList.add('mobile');
    } else {
      document.body.classList.remove('mobile');
      document.body.classList.add('desktop');
    }
  };

  var mql = matchMedia('(max-width: 500px)');
  setMode(); // mql.addEventListener(setMode);
} else {
  document.body.classList.add('desktop');
} // Detect whether we are on a touch device.


document.body.classList.add('no-touch');
window.addEventListener('touchstart', function (e) {
  document.body.classList.remove('no-touch');
  document.body.classList.add('touch');
});
var viewerOpts = {
  controls: {
    mouseViewMode: _data.data.settings.mouseViewMode,
    scrollZoom: false
  }
}; // Initialize viewer.

var viewer = new _marzipano.default.Viewer(panoElement, viewerOpts); // Create scenes.

var scenes = _data.data.scenes.map(function (data) {
  var urlPrefix = 'tiles';

  var source = _marzipano.default.ImageUrlSource.fromString(urlPrefix + '/' + data.id + '/{z}/{f}/{y}/{x}.jpg', {
    cubeMapPreviewUrl: urlPrefix + '/' + data.id + '/preview.jpg'
  });

  var geometry = new _marzipano.default.CubeGeometry(data.levels);

  var limiter = _marzipano.default.RectilinearView.limit.traditional(data.faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);

  var view = new _marzipano.default.RectilinearView(data.initialViewParameters, limiter);
  var scene = viewer.createScene({
    source: source,
    geometry: geometry,
    view: view,
    pinFirstLevel: true
  }); // Create link hotspots.

  data.linkHotspots.forEach(function (hotspot) {
    var element = createLinkHotspotElement(hotspot);
    scene.hotspotContainer().createHotspot(element, {
      yaw: hotspot.yaw,
      pitch: hotspot.pitch
    });
  }); // Create info hotspots.

  data.infoHotspots.forEach(function (hotspot) {
    var element = createInfoHotspotElement(hotspot);
    scene.hotspotContainer().createHotspot(element, {
      yaw: hotspot.yaw,
      pitch: hotspot.pitch
    }, {
      perspective: {
        radius: 375
      }
    });
  });
  return {
    data: data,
    scene: scene,
    view: view
  };
});

var exit_tour = document.querySelector('.cancel');
var start_tour = document.querySelector('.confirm');
var exit_tour_x = document.querySelector('.intro-header .intro-close');
var intro_scene = scenes[0].scene;
var infohotspot = document.querySelector('.info-hotspot-header.intro-starter');
var introModal = document.querySelector('.info-hotspot-modal.intro-starter');
var introLH = document.querySelector('.link-hotspot.second-tour-starter');
var h = window.innerHeight;
var destinationViewParameters = {
  yaw: -1.1815019536187705,
  pitch: 0.21382602521738114,
  fov: 60 * Math.PI / 180
};
var options = {
  transitionDuration: 2000
};
var iframeViewParameters = {
  yaw: -1.1815019536187705,
  pitch: 0.21382602521738114,
  fov: 60 * Math.PI / 180
};
start_tour.addEventListener('click', function () {
  viewer.controls().disable();
  intro.classList.remove('visible');

  if (h > 389) {
    intro_scene.lookTo(destinationViewParameters, options, done);
  } else if (h === 389) {
    intro_scene.lookTo(iframeViewParameters, options, done);
  }

  document.body.classList.add('tour-accepted');
});

function done() {
  tour_infoHotspots.start();
}

infohotspot.addEventListener('click', function () {
  document.body.classList.contains('tour-accepted') ? tour_infoHotspots.next() : '';
});
tour_infoHotspots.on('complete', function () {
  document.body.classList.contains('tour-accepted') ? tour_modal.start() : '';
});
var destinationViewParameters_linkHotspot = {
  yaw: -1.600429731329104,
  pitch: 0.5002192152175962,
  fov: 40 * Math.PI / 180
};
var iframeViewParameters_linkHotspot = {
  yaw: -1.600429731329104,
  pitch: 0.5002192152175962,
  fov: 40 * Math.PI / 180
};
var options_linkHotspot = {
  transitionDuration: 2000
};
tour_modal.on('complete', function () {
  introModal.classList.remove('visible');

  if (h > 389) {
    intro_scene.lookTo(destinationViewParameters_linkHotspot, options_linkHotspot, infoHotspotsTour_done);
  } else if (h === 389) {
    intro_scene.lookTo(iframeViewParameters_linkHotspot, options_linkHotspot, infoHotspotsTour_done);
  }

  introModal.classList.remove('intro-starter');
  infohotspot.classList.remove('intro-starter');
  document.querySelector('.info-hotspot-modal .info-hotspot-header.intro-starter').classList.remove('intro-starter');
});

function infoHotspotsTour_done() {
  tour_linkHotspots.start();
}

introLH.addEventListener('click', function () {
  if (document.body.classList.contains('tour-accepted')) {
    tour_linkHotspots.next();
    tour_movement.start();
  }
});
tour_movement.on('complete', function () {
  switchScene(scenes[0]);
  tour_final.start();
});
tour_final.on('complete', function () {
  document.body.classList.remove('tour-accepted');
  viewer.controls().enable();
});
[exit_tour, exit_tour_x].forEach(function (el) {
  el.addEventListener('click', function () {
    intro.classList.remove('visible');
    infohotspot.classList.remove('intro-starter');
    introModal.classList.remove('intro-starter');
    introLH.classList.remove('intro-starter');
    show();
    viewer.controls().enable();
    setTimeout(function () {
      hide();
    }, 5000);
  });
});
var help = document.querySelector('#footer svg');
var tooltip = document.querySelector('#tooltip');
var helpPopper = (0, _core.createPopper)(help, tooltip, {
  placement: 'top-start',
  modifiers: [{
    name: 'offset',
    options: {
      offset: [0, 15]
    }
  }]
});

function show() {
  tooltip.setAttribute('data-show', '');
  helpPopper.update();
}

function hide() {
  tooltip.removeAttribute('data-show');
} // Set up fullscreen mode, if supported.


if (_screenfullMin.default.enabled) {
  document.body.classList.add('fullscreen-enabled');
  fullscreenToggleElement.addEventListener('click', function () {
    _screenfullMin.default.toggle();
  });

  _screenfullMin.default.on('change', function () {
    if (_screenfullMin.default.isFullscreen) {
      fullscreenToggleElement.classList.add('enabled');
    } else {
      fullscreenToggleElement.classList.remove('enabled');
    }
  });
} else {
  document.body.classList.add('fullscreen-disabled');
}

function sanitize(s) {
  return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
}

function switchScene(scene) {
  scene.view.setParameters(scene.data.initialViewParameters);
  scene.scene.switchTo();
  updateSceneName(scene);
  updateSceneList(scene);
}

function updateSceneName(scene) {
  sceneNameElement.innerHTML = sanitize(scene.data.name);
}

function updateSceneList(scene) {
  for (var i = 0; i < sceneElements.length; i++) {
    var el = sceneElements[i];

    if (el.getAttribute('data-id') === scene.data.id) {
      el.classList.add('current');
    } else {
      el.classList.remove('current');
    }
  }
}

function createLinkHotspotElement(hotspot) {
  // Create wrapper element to hold icon and tooltip.
  var wrapper = document.createElement('div');
  wrapper.classList.add('hotspot');
  wrapper.classList.add('link-hotspot');
  hotspot.class ? wrapper.classList.add(hotspot.class) : ''; // Create image element.

  var icon = document.createElement('img');
  icon.src = './SVG/arrow-up-circle-fill.svg';
  icon.classList.add('link-hotspot-icon'); // Set rotation transform.

  var transformProperties = ['-ms-transform', '-webkit-transform', 'transform'];

  for (var i = 0; i < transformProperties.length; i++) {
    var property = transformProperties[i];
    icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
  } // Add click event handler.


  wrapper.addEventListener('click', function () {
    switchScene(findSceneById(hotspot.target));
  }); // Create tooltip element.

  var tooltip = document.createElement('div');
  tooltip.classList.add('hotspot-tooltip');
  tooltip.classList.add('link-hotspot-tooltip');
  tooltip.innerHTML = findSceneDataById(hotspot.target).name;
  tooltip.setAttribute('role', 'tooltip');
  tooltip.setAttribute('id', 'tooltip-LH');
  var LH_popper = (0, _core.createPopper)(wrapper, tooltip, {
    placement: 'top',
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 5]
      }
    }]
  });

  function show() {
    tooltip.setAttribute('data-show', '');
    LH_popper.update();
  }

  function hide() {
    tooltip.removeAttribute('data-show');
  }

  var showEvents = ['mouseenter', 'focus'];
  var hideEvents = ['mouseleave', 'blur'];
  showEvents.forEach(function (event) {
    wrapper.addEventListener(event, show);
  });
  hideEvents.forEach(function (event) {
    wrapper.addEventListener(event, hide);
  });
  wrapper.appendChild(icon);
  wrapper.appendChild(tooltip);
  return wrapper;
}

function createInfoHotspotElement(hotspot) {
  // Create wrapper element to hold icon and tooltip.
  var wrapper = document.createElement('div');
  wrapper.classList.add('hotspot');
  wrapper.classList.add('info-hotspot'); // Create hotspot/tooltip header.

  var header = document.createElement('div');
  header.classList.add('info-hotspot-header');
  hotspot.class ? header.classList.add(hotspot.class) : ''; // Create image element.

  var iconWrapper = document.createElement('div');
  iconWrapper.classList.add('info-hotspot-icon-wrapper');
  var icon = document.createElement('img');
  icon.src = './assets/PC-Seal_Solid-white-95black_Registered.png';
  icon.classList.add('info-hotspot-icon');
  iconWrapper.appendChild(icon); // Create title element.

  var titleWrapper = document.createElement('div');
  titleWrapper.classList.add('info-hotspot-title-wrapper');
  var title = document.createElement('div');
  title.classList.add('info-hotspot-title');
  title.innerHTML = hotspot.title;
  titleWrapper.appendChild(title); // Create close element.

  var closeWrapper = document.createElement('div');
  closeWrapper.classList.add('info-hotspot-close-wrapper');
  var closeIcon = document.createElement('img');
  closeIcon.src = './SVG/close-line.svg';
  closeIcon.classList.add('info-hotspot-close-icon');
  closeWrapper.appendChild(closeIcon); // Construct header element.

  header.appendChild(iconWrapper);
  header.appendChild(titleWrapper);
  header.appendChild(closeWrapper); // Create content element.

  var content = document.createElement('div');
  content.classList.add('info-hotspot-content'); //text element

  var textContent = document.createElement('div');
  textContent.classList.add('product-txt-container');
  var textWrapper = document.createElement('div');
  textWrapper.classList.add('product-txt-wrapper');
  var subhead = document.createElement('h2');
  subhead.classList.add('product-txt-subhead');
  subhead.innerHTML = hotspot.subhead;
  var text = document.createElement('div');
  text.innerHTML = hotspot.text;
  text.classList.add('product-txt');
  var recipes = document.createElement('div');
  recipes.classList.add('recipes');
  var recipesHeader = document.createElement('h2');
  recipesHeader.classList.add('recipes-header');
  recipesHeader.textContent = 'Recipes to Try:';
  recipes.appendChild(recipesHeader);
  var recipesList = document.createElement('div');
  recipesList.classList.add('recipes-list');

  if (hotspot.recipes) {
    for (var i = 0; i < hotspot.recipes.length; i++) {
      var recipe_el = document.createElement('li');
      var recipe_link = document.createElement('a');
      recipe_link.classList.add('recipe-link');
      recipe_link.href = hotspot.recipes[i].link;
      recipe_link.setAttribute('target', '_blank');
      var recipe_preview_img_wrap = document.createElement('div');
      recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');
      recipe_preview_img_wrap.classList.add('.lazy');
      recipe_preview_img_wrap.style.backgroundImage = "url(".concat(hotspot.recipes[i].preview_image, ")");
      var recipe_title = document.createElement('p');
      recipe_title.classList.add('recipe-title');
      recipe_title.innerHTML = hotspot.recipes[i].id;
      recipe_title.href = hotspot.recipes[i].link;
      recipe_title.setAttribute('target', '_blank');
      recipe_link.appendChild(recipe_preview_img_wrap);
      recipe_link.appendChild(recipe_title);
      recipe_el.appendChild(recipe_link);
      recipesList.appendChild(recipe_el);
    }
  } else if (hotspot.related_content) {
    for (var _i = 0; _i < hotspot.related_content.length; _i++) {
      var _recipe_el = document.createElement('li');

      var _recipe_link = document.createElement('a');

      _recipe_link.classList.add('recipe-link');

      _recipe_link.href = hotspot.related_content[_i].link;

      _recipe_link.setAttribute('target', '_blank');

      var _recipe_preview_img_wrap = document.createElement('div');

      _recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');

      _recipe_preview_img_wrap.style.backgroundImage = "url(".concat(hotspot.related_content[_i].preview_image, ")");

      var _recipe_title = document.createElement('p');

      _recipe_title.classList.add('recipe-title');

      _recipe_title.innerHTML = hotspot.related_content[_i].id;
      _recipe_title.href = hotspot.related_content[_i].link;

      _recipe_title.setAttribute('target', '_blank');

      _recipe_link.appendChild(_recipe_preview_img_wrap);

      _recipe_link.appendChild(_recipe_title);

      _recipe_el.appendChild(_recipe_link);

      recipesList.appendChild(_recipe_el);
    }

    recipesHeader.textContent = 'Related Content:';
  } else if (hotspot.pdf_links) {
    for (var _i2 = 0; _i2 < hotspot.pdf_links.length; _i2++) {
      var _recipe_el2 = document.createElement('li');

      var _recipe_link2 = document.createElement('a');

      _recipe_link2.classList.add('recipe-link');

      _recipe_link2.href = hotspot.pdf_links[_i2].link;

      _recipe_link2.setAttribute('target', '_blank');

      var _recipe_preview_img_wrap2 = document.createElement('div');

      _recipe_link2.appendChild(_recipe_preview_img_wrap2);

      _recipe_preview_img_wrap2.classList.add('recipe-preview-img-wrap');

      _recipe_preview_img_wrap2.style.backgroundImage = "url(".concat(hotspot.pdf_links[_i2].preview_image, ")");

      var _recipe_title2 = document.createElement('p');

      _recipe_title2.classList.add('recipe-title');

      _recipe_title2.innerHTML = hotspot.pdf_links[_i2].id;
      _recipe_title2.href = hotspot.pdf_links[_i2].link;

      _recipe_title2.setAttribute('target', '_blank');

      _recipe_link2.appendChild(_recipe_title2);

      _recipe_el2.appendChild(_recipe_link2);

      recipesList.appendChild(_recipe_el2);
    }

    recipesHeader.textContent = 'Downloads';
  } else {
    recipesHeader.textContent = '';
  }

  recipes.appendChild(recipesList);
  textWrapper.appendChild(subhead);
  textWrapper.appendChild(text);
  textWrapper.appendChild(recipes);
  textContent.appendChild(textWrapper); //carousel

  var carousel_container = document.createElement('div');
  carousel_container.classList.add('carousel_container');
  var carousel = document.createElement('div');
  carousel.classList.add('carousel');
  var carouselImages = document.createElement('div');
  carouselImages.classList.add('carousel-images');
  var carouselNav = document.createElement('div');
  carouselNav.classList.add('carousel-nav');
  var carouselNext = document.createElement('img');
  carouselNext.src = './SVG/chevron-right.svg';
  carouselNext.classList.add('carousel-button');
  carouselNext.classList.add('next');
  carouselNext.setAttribute('id', 'next');
  var carouselPrev = document.createElement('img');
  carouselPrev.src = './SVG/chevron-left.svg';
  carouselPrev.classList.add('carousel-button');
  carouselPrev.classList.add('previous');
  carouselPrev.setAttribute('id', 'previous');
  var carousel_pagination = document.createElement('ul');
  carousel_pagination.classList.add('carousel-pagination');

  for (var _i3 = 0; _i3 < hotspot.images.length; _i3++) {
    var carousel_bullet = document.createElement('li');
    carousel_bullet.classList.add('carousel-bullet');
    var productImage = document.createElement('div');

    if (hotspot.images[_i3].length === 2) {
      productImage.style.backgroundImage = "url(".concat(hotspot.images[_i3][1], ")");
      var influencer_credit_container = document.createElement('div');
      influencer_credit_container.classList.add('influencer_credit_container');
      var credit_pointer = document.createElement('div');
      credit_pointer.classList.add('pointer');
      influencer_credit_container.appendChild(credit_pointer);
      var influencer_credit = document.createElement('span');
      influencer_credit.classList.add('influencer_credit');
      influencer_credit.innerHTML = '📷: ' + hotspot.images[_i3][0];
      influencer_credit_container.appendChild(influencer_credit);
      productImage.appendChild(influencer_credit_container);
    } else {
      productImage.style.backgroundImage = "url(".concat(hotspot.images[_i3], ")");
    }

    productImage.setAttribute('id', 'product-image');
    productImage.classList.add('lazy');

    if (hotspot.containImages) {
      productImage.style.backgroundSize = 'contain';
      productImage.style.width = '80%';
      productImage.style.height = '80%';
      productImage.style.alignSelf = 'center';
    }

    carouselImages.appendChild(productImage);
    carousel_pagination.appendChild(carousel_bullet);
    carousel_container.appendChild(carousel_pagination);
  }

  if (hotspot.videos) {
    for (var _i4 = 0; _i4 < hotspot.videos.length; _i4++) {
      var sliderTop = document.createElement('div');
      sliderTop.classList.add('slider-top');
      var sliderBot = document.createElement('div');
      sliderBot.classList.add('slider-bot');

      var _carousel_bullet = document.createElement('li');

      _carousel_bullet.classList.add('carousel-bullet');

      var iframe_container = document.createElement('div');
      iframe_container.classList.add('iframe_container__video');
      iframe_container.innerHTML = hotspot.videos[_i4];
      iframe_container.append(sliderTop, sliderBot);
      carousel_pagination.appendChild(_carousel_bullet);
      carouselImages.appendChild(iframe_container);
    }
  }

  carouselNav.appendChild(carouselNext);
  carousel.appendChild(carouselImages);
  carouselNav.appendChild(carouselPrev);
  carousel_container.appendChild(carouselNav);
  carousel_container.appendChild(carousel);
  content.appendChild(textContent);
  content.appendChild(carousel_container);
  wrapper.appendChild(header);
  wrapper.appendChild(content);
  var modal = document.createElement('div');
  modal.innerHTML = wrapper.innerHTML;
  modal.classList.add('info-hotspot-modal');
  hotspot.class ? modal.classList.add(hotspot.class) : '';
  document.body.appendChild(modal); // reset modal content + pause video on close logic

  var pause_video = function pause_video() {
    var iframes = modal.getElementsByTagName('iframe');

    if (iframes != null) {
      for (var _i5 = 0; _i5 < iframes.length; _i5++) {
        iframes[_i5].src = iframes[_i5].src;
      }
    }
  };

  var reset_modal = function reset_modal() {
    if (modal.classList.contains('visible')) {
      modal.querySelector('.product-txt-container').scrollTo(0, 0);
      slideTo(0);
    }

    pause_video();
  };

  tour_modal.on('complete', function () {
    reset_modal();
  });

  var toggle = function toggle() {
    modal.classList.toggle('visible');
    reset_modal();
  };

  wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);
  modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);
  modal.addEventListener('mouseover', function (e) {
    if (e.target === modal && modal.classList.contains('visible')) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal && modal.classList.contains('visible')) {
          modal.classList.remove('visible');
          reset_modal();
        }
      });
    }
  });
  var nextBtn = modal.querySelector('#next');
  var prevBtn = modal.querySelector('#previous');
  var carouselImgs = modal.querySelector('.carousel-images');
  var numberOfImages = modal.querySelectorAll('.carousel-images > *').length;
  var pagination = modal.querySelector('.carousel-pagination');
  var bullets = [].slice.call(modal.querySelectorAll('.carousel-bullet'));
  var currentIndex = 0;
  var percentage = 100;
  var touchstartX = 0;
  var touchendX = 0;

  function handleGesture() {
    if (touchendX < touchstartX && currentIndex !== numberOfImages - 1) {
      nextBtn.click();
    }

    if (touchendX > touchstartX && currentIndex !== 0) {
      prevBtn.click();
    }
  }

  document.body.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      modal.classList.remove('visible');
    }

    reset_modal();
  }, {
    passive: true
  });
  carouselImgs.addEventListener('touchstart', function (e) {
    touchstartX = e.changedTouches[0].pageX;
  });
  carouselImgs.addEventListener('touchend', function (e) {
    touchendX = e.changedTouches[0].pageX;
    handleGesture();
  });
  carouselImgs.addEventListener('mousedown', function (e) {
    touchstartX = e.pageX;
  });
  carouselImgs.addEventListener('mouseup', function (e) {
    touchendX = e.pageX;
    handleGesture();
  });
  carouselImgs.addEventListener('wheel', function (e) {
    var wheel_direction = e.deltaY * 1;

    if (Math.sign(wheel_direction) === -1) {
      if (currentIndex !== 0) prevBtn.click();
    } else {
      if (currentIndex !== numberOfImages - 1) nextBtn.click();
    }
  }, {
    passive: true
  });

  function next() {
    slideTo(currentIndex + 1);
  }

  function prev() {
    slideTo(currentIndex - 1);
  }

  function slideTo(index) {
    index = index < 0 ? numberOfImages - 1 : index >= numberOfImages ? 0 : index;
    carouselImgs.style.WebkitTransform = carouselImgs.style.transform = 'translate(-' + index * percentage + '%, 0)';
    bullets[currentIndex].classList.remove('active-bullet');
    bullets[index].classList.add('active-bullet');
    currentIndex = index;
    pause_video();
  }

  bullets[currentIndex].classList.add('active-bullet');
  prevBtn.addEventListener('click', prev, false);
  nextBtn.addEventListener('click', next, false);
  pagination.addEventListener('click', function (e) {
    var index = bullets.indexOf(e.target);

    if (index !== -1 && index !== currentIndex) {
      slideTo(index);
    }
  }, false);

  if (hotspot.fullWidth) {
    var modal_content = modal.querySelector('div.info-hotspot-content');
    modal_content.classList.add('fullwidth_modal');
    removeAllChildNodes(modal_content);

    var _iframe_container = document.createElement('div');

    _iframe_container.classList.add('iframe_container');

    _iframe_container.innerHTML = hotspot.text;
    modal_content.appendChild(_iframe_container);
  }

  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  return wrapper;
}

function findSceneById(id) {
  for (var i = 0; i < scenes.length; i++) {
    if (scenes[i].data.id === id) {
      return scenes[i];
    }
  }

  return null;
}

function findSceneDataById(id) {
  for (var i = 0; i < _data.data.scenes.length; i++) {
    if (_data.data.scenes[i].id === id) {
      return _data.data.scenes[i];
    }
  }

  return null;
} // Display the initial scene.


switchScene(scenes[0]);
var preloader = document.querySelector('.preloader');
var titleBar = document.getElementById('titleBar');
var intro = document.getElementById('intro');
var help_menu = document.getElementById('help-menu');
var help_menu_btn = document.querySelector('.help-menu-btn');
var help_menu_opener = document.querySelector('.help-menu-btn svg');
var help_menu_close = document.querySelector('.help-header #intro-close');
var controls = document.getElementById('controls');
var controls_close = document.getElementById('controls-close');
var introClose = document.getElementById('intro-close');
introClose.addEventListener('click', function () {
  intro.classList.remove('visible');
});
controls_close.addEventListener('click', function () {
  controls.classList.remove('visible');
  intro.style.opacity = 1;
  intro.classList.add('visible');
});
var mobile_cta_btn = document.querySelector('.fullscreen-btn');
var mobile_cta = document.querySelector('.mobile-cta');
mobile_cta_btn.addEventListener('click', function () {
  _screenfullMin.default.toggle();

  mobile_cta.classList.remove('visible');
  mobile_cta.style.display = 'none';
  controls.style.opacity = 1;
  controls.classList.add('visible');
});
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    help_menu.style.opacity = 1;
    help_menu_btn.style.opacity = 1;
    panoElement.style.opacity = 1;
    titleBar.style.opacity = 1;
    preloader.style.display = 'none';

    if (_bowser.default.parse(window.navigator.userAgent).platform.type === 'mobile' && _bowser.default.parse(window.navigator.userAgent).browser.name === 'Safari' && h === 389) {
      safariOnly.classList.add('visible');
    } else if (_bowser.default.parse(window.navigator.userAgent).platform.type === 'mobile' && h === 389) {
      mobile_cta.classList.add('visible');
    } else {
      controls.classList.add('visible');
    }
  }, 6000);
});
help_menu_opener.addEventListener('click', function () {
  help_menu.classList.add('visible');
});
help_menu_close.addEventListener('click', function () {
  help_menu.classList.remove('visible');
});
document.body.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    help_menu.classList.remove('visible');
  }
});
},{"bowser":"node_modules/bowser/es5.js","/vendor/marzipano.js":"vendor/marzipano.js","/data.js":"data.js","@popperjs/core":"node_modules/@popperjs/core/lib/index.js","/vendor/screenfull.min.js":"vendor/screenfull.min.js","shepherd.js":"node_modules/shepherd.js/dist/js/shepherd.esm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "11555" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/app-files.e31bb0bc.js.map