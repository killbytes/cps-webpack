/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/style.scss?");

/***/ }),

/***/ "./Post.js":
/*!*****************!*\
  !*** ./Post.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post)\n/* harmony export */ });\n// export default function testExport() {\r\n//     return 'testExport';\r\n// }\r\n\r\nclass Post {\r\n    constructor(title, img) {\r\n        this.title = title\r\n        this.img = img\r\n        this.date = new Date()\r\n    }\r\n\r\n    toString() {\r\n        return JSON.stringify({\r\n            title: this.title,\r\n            date: this.date.toJSON(),\r\n            img: this.img\r\n        })\r\n    }\r\n\r\n    get uppercaseTitle() {\r\n        return this.title.toUpperCase()\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./Post.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Post */ \"./Post.js\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.scss */ \"./style/style.scss\");\n/* harmony import */ var _pathJs_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pathJs/script */ \"./js/script.js\");\n/* harmony import */ var _pathJs_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pathJs_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_Group_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/images/Group.png */ \"./images/Group.png\");\n/* harmony import */ var _images_MG1120_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/images/MG1120.jpg */ \"./images/MG1120.jpg\");\n/* harmony import */ var _images_MG3223_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/images/MG3223.jpg */ \"./images/MG3223.jpg\");\n/* harmony import */ var _assets_json_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/json.json */ \"./assets/json.json\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst post = new _Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Web Post Title', _images_Group_png__WEBPACK_IMPORTED_MODULE_3__);\r\nconsole.log('Post to String:', post.toString());\r\n\r\nconsole.log('test');\r\nconsole.log('JSON:', _assets_json_json__WEBPACK_IMPORTED_MODULE_6__);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ (() => {

eval("const mobile = document.querySelector(\".header__mobile\");\r\nconst mobileTitle = mobile.querySelector(\".title\");\r\nconst desctop = document.querySelector(\".header__desctop\");\r\nconst desctopTitle = desctop.querySelector(\".title\");\r\n\r\nlet addTitlt = () => {\r\n  const descr = mobileTitle.querySelector(\".title__descr\");\r\n  const desctopDescr = desctopTitle.querySelector(\".title__descr\");\r\n  let width = window.innerWidth;\r\n\r\n  if (width < 1119) {\r\n    if (!descr) {\r\n      mobileTitle.insertAdjacentHTML(\r\n          \"afterbegin\",\r\n          '<h1 class=\"title__descr\">Услуги и сервисы</h1>'\r\n      );\r\n\r\n      desctopTitle.insertAdjacentHTML(\"afterbegin\", \"\");\r\n      if (desctopDescr) {\r\n        desctopDescr.remove();\r\n      }\r\n    }\r\n  } /* (width >= 1119) */ else {\r\n    if (!desctopDescr) {\r\n      desctopTitle.insertAdjacentHTML(\r\n          \"afterbegin\",\r\n          '<h1 class=\"title__descr\">Услуги и сервисы</h1>'\r\n      );\r\n      mobileTitle.insertAdjacentHTML(\"afterbegin\", \"\");\r\n      if (descr) {\r\n        descr.remove();\r\n      }\r\n    }\r\n  }\r\n};\r\ndocument.addEventListener(\"DOMContentLoaded\", addTitlt);\r\nwindow.addEventListener(\"resize\", addTitlt);\r\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ "./images/Group.png":
/*!**************************!*\
  !*** ./images/Group.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/Group.png\";\n\n//# sourceURL=webpack:///./images/Group.png?");

/***/ }),

/***/ "./images/MG1120.jpg":
/*!***************************!*\
  !*** ./images/MG1120.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/MG1120.jpg\";\n\n//# sourceURL=webpack:///./images/MG1120.jpg?");

/***/ }),

/***/ "./images/MG3223.jpg":
/*!***************************!*\
  !*** ./images/MG3223.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/MG3223.jpg\";\n\n//# sourceURL=webpack:///./images/MG3223.jpg?");

/***/ }),

/***/ "./assets/json.json":
/*!**************************!*\
  !*** ./assets/json.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"I am JSON title\"}');\n\n//# sourceURL=webpack:///./assets/json.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;