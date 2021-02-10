/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/src/js/cookiebanner.js":
/*!************************************!*\
  !*** ./src/src/js/cookiebanner.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  function loadExternalScripts(type) {
    var selectionNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (type && Array.isArray(selectionNames)) {
      selectionNames.forEach(function (selection) {
        var scripts = window.cookiebanner[selection];

        if (typeof scripts === "function") {
          scripts();
        }
      });
    } else {
      var scripts = window.cookiebanner["all"];

      if (typeof scripts === "function") {
        scripts();
      }
    }
  }

  function getCookie(name) {
    var n = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }

      if (c.indexOf(n) == 0) return c.substring(n.length, c.length);
    }

    return false;
  }

  function cookieIsSet(name) {
    return getCookie(name);
  }
  /* function set cookie name and value */


  function setCookie(key, value, expiresInDays) {
    var domain = window.location.host;
    var expires = new Date();
    expires.setTime(expires.getTime() + expiresInDays * 24 * 60 * 60 * 1000);
    document.cookie = key + "=" + value + ";expires=" + expires.toUTCString() + "domain=" + domain + ";path=/";
  }

  function showNotice(cookiebar, settings) {
    cookiebar.classList.remove("cb-hidden");
    settings.classList.add("cb-hidden");
  }

  function hideNotice(cookiebar, settings) {
    cookiebar.classList.add("cb-hidden");
    settings.classList.remove("cb-hidden");
  }

  function showSettingsOption(settings) {
    settings.classList.remove("cb-hidden");
  }

  function addSettingsListener(cookiebar, settings) {
    settings.addEventListener("click", function (e) {
      e.preventDefault();
      showNotice(cookiebar, settings);
    });
  }

  function preselectCheckboxes(categoryArray) {
    categoryArray.forEach(function (categoryId) {
      var element = document.querySelector("#" + categoryId);

      if (element) {
        element.checked = true;
      }
    });
  }

  function init() {
    var cookiebar = document.querySelector("#cookiebar");
    var settings = document.querySelector("#cookieSettings"); // check if cookiebar does exist

    if (cookiebar != null) {
      var type = cookiebar.dataset.cookiebarType;

      if (!cookieIsSet("cookie-consent")) {
        showNotice(cookiebar, settings);
      } else {
        if (type) {
          var categoryArray = getCookie("cookie-consent").split(",");
          preselectCheckboxes(categoryArray);
          loadExternalScripts(type, categoryArray);
        } else {
          if (getCookie("cookie-consent") === "all") {
            loadExternalScripts(type);
          }
        }

        if (settings) {
          showSettingsOption(settings);
          addSettingsListener(cookiebar, settings);
        }
      }

      if (type) {
        var savePreferences = document.querySelector("#savePreferences");
        savePreferences.addEventListener("click", function (e) {
          e.preventDefault();
          var selection = cookiebar.querySelectorAll("input[type=checkbox]:checked");
          var selectionNames = [];
          selection.forEach(function (select, index) {
            selectionNames[index] = select.name;
          });
          setCookie("cookie-consent", selectionNames.toString(), cookiebar.dataset.expire);
          hideNotice(cookiebar, settings);
          addSettingsListener(cookiebar, settings);
          loadExternalScripts(type, selectionNames);
        });
      } else {
        var deny = document.querySelector("#deny");
        var submitAll = document.querySelector("#submitAll");
        deny.addEventListener("click", function (e) {
          e.preventDefault();
          setCookie("cookie-consent", "deny", cookiebar.dataset.expire);
          hideNotice(cookiebar, settings);
          addSettingsListener(cookiebar, settings);
        });
        submitAll.addEventListener("click", function (e) {
          e.preventDefault();
          setCookie("cookie-consent", "all", cookiebar.dataset.expire);
          hideNotice(cookiebar, settings);
          addSettingsListener(cookiebar, settings);
          loadExternalScripts(type);
        });
      }
    }
  }

  init();
})();

/***/ }),

/***/ "./src/src/scss/cookiebanner.scss":
/*!****************************************!*\
  !*** ./src/src/scss/cookiebanner.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************************!*\
  !*** multi ./src/src/js/cookiebanner.js ./src/src/scss/cookiebanner.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/andreastinocolobo/Sites/commerce-playground-craft/plugins-dev/cookiebanner/src/src/js/cookiebanner.js */"./src/src/js/cookiebanner.js");
module.exports = __webpack_require__(/*! /Users/andreastinocolobo/Sites/commerce-playground-craft/plugins-dev/cookiebanner/src/src/scss/cookiebanner.scss */"./src/src/scss/cookiebanner.scss");


/***/ })

/******/ });