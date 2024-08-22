/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
}
:root {
  --main-bg-gradient: linear-gradient(to bottom, #000080, #1f38c7, #87cefa);
  --dark-blue: rgb(0, 0, 121);
  --border-color: rgb(91, 91, 91);
  --shadow-color: rgba(0, 0, 0, 0.1);
  --white: #fff;
  --white-text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  --yellow-text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  --semi-transparent-black: rgba(0, 0, 0, 0.3);
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

/* Container Styling */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 0;
  width: 100%;
  max-width: 1000px;
  height: 90vh;
  padding: 20px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 0 10px var(--shadow-color);
  overflow: hidden;
}

/* Header Styling */
header {
  text-align: center;
  margin: 0;
}

#location {
  font-size: 24px;
  margin: 0;
}

#date {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.731);
  margin: 0;
}

/* Today's Forecast Styling */
.todays-forecast {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0;
  background: var(--main-bg-gradient);
  border-radius: 8px;
  box-shadow: 0 0 10px var(--shadow-color);
  border: 2px solid var(--border-color);
  overflow: hidden;
}

.todays-forecast header {
  color: var(--white);
  text-shadow: var(--white-text-shadow);
  width: 100%;
  background-color: var(--dark-blue);
  padding: 12px;
}

.weather-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 15px;
  padding: 15px;
}

.weather-icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.weather-icon {
  width: 120px;
  height: 120px;
}

.temperature {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.high-temp,
.low-temp {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  color: var(--white);
}

.temp-digit {
  font-size: 32px;
  font-weight: bold;
  color: var(--white);
  text-shadow: var(--white-text-shadow);
}

.temp-label {
  font-size: 16px;
  color: var(--white);
  margin-top: 5px;
}

#todaysWeatherDescription {
  margin: 0;
  font-size: 21px;
  color: var(--white);
  text-align: center;
  padding: 20px;
}

/* Current Weather Styling */
.current-weather {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  background: var(--main-bg-gradient);
  border-radius: 8px;
  box-shadow: 0 0 10px var(--shadow-color);
  border: 2px solid var(--border-color);
  overflow: hidden;
}

.current-weather header {
  color: var(--white);
  text-shadow: var(--white-text-shadow);
  width: 100%;
  background-color: var(--dark-blue);
}

.weather-summary {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--semi-transparent-black);
  padding: 10px;
}

.weather-description {
  margin: 0px 0px 15px 0px;
  font-size: 18px;
  color: var(--white);
  text-shadow: var(--white-text-shadow);
}

.current-temp {
  text-align: center;
  margin-top: 20px;
}

.current-temp .temp-digit {
  font-size: 40px;
  font-weight: bold;
  color: var(--white);
  text-shadow: var(--white-text-shadow);
}

.weather-stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 5px;
  border-radius: 0;
  background: rgba(0, 0, 0, 0.3); /* Semi-transparent background */
}

.stat {
  text-align: center;
}

.stat-title {
  font-size: 16px;
  color: var(--white);
  text-shadow: var(--white-text-shadow);
  padding-top: 5px;
  margin: 15px 0px 0px 0px;
}

.stat-info {
  font-size: 18px;
  font-weight: bold;
  color: yellow;
  text-shadow: var(--yellow-text-shadow);
  margin: 5px 0px 15px 0px;
}

/* Seven-Day Forecast Styling */
.seven-day-forecast {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  padding: 0;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 0 10px var(--shadow-color);
  overflow: hidden;
}

.seven-day-forecast header {
  width: 100%;
  padding: 0px;
  color: var(--white);
  background: var(--main-bg-gradient);
  text-align: left;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0 0 5px var(--shadow-color);
  box-sizing: border-box;
  overflow: hidden;
  font-size: large;
}

.seven-day-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.seven-day-forecast__day {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background: var(--main-bg-gradient);
  border-radius: 4px;
  box-shadow: 0 0 5px var(--shadow-color);
  border: 2px solid var(--border-color);
  overflow: hidden;
}

.seven-day-forecast__day img {
  width: 115px;
  height: 115px;
  object-fit: contain;
  margin: 0;
  padding: 0;
}

.seven-day-forecast__day p {
  margin: 0;
  font-size: 14px;
  color: #555;
}

.seven-day-forecast__day .high-temp {
  font-size: 40px;
  font-weight: bolder;
  color: var(--white);
  text-shadow: var(--white-text-shadow);
}

.seven-day-forecast__day .low-temp {
  font-size: 24px;
  width: 100%;
  background-color: rgb(36, 36, 230);
  color: var(--white);
  font-weight: bold;
  text-align: left;
  padding-left: 15px;
  margin: 0;
  display: block;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.seven-day-forecast__day .day-name {
  font-size: 16px;
  width: 100%;
  background-color: var(--dark-blue);
  color: var(--white);
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 0;
}

.seven-day-forecast__day .day-conditions {
  font-size: 14px;
  margin-top: 5px;
  color: var(--white);
}

/* Form Styling */
form {
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 15px;
}

input {
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  max-width: 300px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

/* Loading Indicator */
#loading {
  margin-top: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n}\n:root {\n  --main-bg-gradient: linear-gradient(to bottom, #000080, #1f38c7, #87cefa);\n  --dark-blue: rgb(0, 0, 121);\n  --border-color: rgb(91, 91, 91);\n  --shadow-color: rgba(0, 0, 0, 0.1);\n  --white: #fff;\n  --white-text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n  --yellow-text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);\n  --semi-transparent-black: rgba(0, 0, 0, 0.3);\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #f0f0f0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n}\n\n/* Container Styling */\n.container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto 1fr;\n  gap: 0;\n  width: 100%;\n  max-width: 1000px;\n  height: 90vh;\n  padding: 20px;\n  background-color: var(--white);\n  border-radius: 8px;\n  box-shadow: 0 0 10px var(--shadow-color);\n  overflow: hidden;\n}\n\n/* Header Styling */\nheader {\n  text-align: center;\n  margin: 0;\n}\n\n#location {\n  font-size: 24px;\n  margin: 0;\n}\n\n#date {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.731);\n  margin: 0;\n}\n\n/* Today's Forecast Styling */\n.todays-forecast {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  padding: 0;\n  background: var(--main-bg-gradient);\n  border-radius: 8px;\n  box-shadow: 0 0 10px var(--shadow-color);\n  border: 2px solid var(--border-color);\n  overflow: hidden;\n}\n\n.todays-forecast header {\n  color: var(--white);\n  text-shadow: var(--white-text-shadow);\n  width: 100%;\n  background-color: var(--dark-blue);\n  padding: 12px;\n}\n\n.weather-info {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 0 15px;\n  padding: 15px;\n}\n\n.weather-icon-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.weather-icon {\n  width: 120px;\n  height: 120px;\n}\n\n.temperature {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n}\n\n.high-temp,\n.low-temp {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 10px;\n  color: var(--white);\n}\n\n.temp-digit {\n  font-size: 32px;\n  font-weight: bold;\n  color: var(--white);\n  text-shadow: var(--white-text-shadow);\n}\n\n.temp-label {\n  font-size: 16px;\n  color: var(--white);\n  margin-top: 5px;\n}\n\n#todaysWeatherDescription {\n  margin: 0;\n  font-size: 21px;\n  color: var(--white);\n  text-align: center;\n  padding: 20px;\n}\n\n/* Current Weather Styling */\n.current-weather {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0;\n  background: var(--main-bg-gradient);\n  border-radius: 8px;\n  box-shadow: 0 0 10px var(--shadow-color);\n  border: 2px solid var(--border-color);\n  overflow: hidden;\n}\n\n.current-weather header {\n  color: var(--white);\n  text-shadow: var(--white-text-shadow);\n  width: 100%;\n  background-color: var(--dark-blue);\n}\n\n.weather-summary {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: var(--semi-transparent-black);\n  padding: 10px;\n}\n\n.weather-description {\n  margin: 0px 0px 15px 0px;\n  font-size: 18px;\n  color: var(--white);\n  text-shadow: var(--white-text-shadow);\n}\n\n.current-temp {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.current-temp .temp-digit {\n  font-size: 40px;\n  font-weight: bold;\n  color: var(--white);\n  text-shadow: var(--white-text-shadow);\n}\n\n.weather-stats {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding-bottom: 5px;\n  border-radius: 0;\n  background: rgba(0, 0, 0, 0.3); /* Semi-transparent background */\n}\n\n.stat {\n  text-align: center;\n}\n\n.stat-title {\n  font-size: 16px;\n  color: var(--white);\n  text-shadow: var(--white-text-shadow);\n  padding-top: 5px;\n  margin: 15px 0px 0px 0px;\n}\n\n.stat-info {\n  font-size: 18px;\n  font-weight: bold;\n  color: yellow;\n  text-shadow: var(--yellow-text-shadow);\n  margin: 5px 0px 15px 0px;\n}\n\n/* Seven-Day Forecast Styling */\n.seven-day-forecast {\n  grid-column: 1 / 3;\n  grid-row: 2 / 3;\n  padding: 0;\n  background-color: var(--white);\n  border-radius: 8px;\n  box-shadow: 0 0 10px var(--shadow-color);\n  overflow: hidden;\n}\n\n.seven-day-forecast header {\n  width: 100%;\n  padding: 0px;\n  color: var(--white);\n  background: var(--main-bg-gradient);\n  text-align: left;\n  border-radius: 10px 10px 0px 0px;\n  box-shadow: 0 0 5px var(--shadow-color);\n  box-sizing: border-box;\n  overflow: hidden;\n  font-size: large;\n}\n\n.seven-day-container {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n\n.seven-day-forecast__day {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  background: var(--main-bg-gradient);\n  border-radius: 4px;\n  box-shadow: 0 0 5px var(--shadow-color);\n  border: 2px solid var(--border-color);\n  overflow: hidden;\n}\n\n.seven-day-forecast__day img {\n  width: 115px;\n  height: 115px;\n  object-fit: contain;\n  margin: 0;\n  padding: 0;\n}\n\n.seven-day-forecast__day p {\n  margin: 0;\n  font-size: 14px;\n  color: #555;\n}\n\n.seven-day-forecast__day .high-temp {\n  font-size: 40px;\n  font-weight: bolder;\n  color: var(--white);\n  text-shadow: var(--white-text-shadow);\n}\n\n.seven-day-forecast__day .low-temp {\n  font-size: 24px;\n  width: 100%;\n  background-color: rgb(36, 36, 230);\n  color: var(--white);\n  font-weight: bold;\n  text-align: left;\n  padding-left: 15px;\n  margin: 0;\n  display: block;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n}\n\n.seven-day-forecast__day .day-name {\n  font-size: 16px;\n  width: 100%;\n  background-color: var(--dark-blue);\n  color: var(--white);\n  font-weight: bold;\n  text-transform: uppercase;\n  padding: 5px 0;\n}\n\n.seven-day-forecast__day .day-conditions {\n  font-size: 14px;\n  margin-top: 5px;\n  color: var(--white);\n}\n\n/* Form Styling */\nform {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  margin-top: 15px;\n}\n\ninput {\n  padding: 10px;\n  font-size: 16px;\n  margin-right: 10px;\n  max-width: 300px;\n}\n\nbutton {\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n/* Loading Indicator */\n#loading {\n  margin-top: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/displayWeather.js":
/*!**********************************!*\
  !*** ./src/js/displayWeather.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayWeather: () => (/* binding */ displayWeather)
/* harmony export */ });
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ "./src/js/weatherData.js");


// Function to update text content of an element
const updateElementText = (selector, text) => {
  document.querySelector(selector).textContent = text;
};

const displayWeather = (data) => {
  if (!data) return;

  const { todaysForecast, currentWeather, weeklyForecast } = data;

  updateTodaysWeather(todaysForecast);
  updateCurrentWeather(currentWeather);
  updateWeeklyForecast(weeklyForecast);
};

const updateTodaysWeather = (todaysForecast) => {
  console.log("todaysForecast data:", todaysForecast); // Log the entire object
  console.log("datetimeEpoch:", todaysForecast.datetimeEpoch); // Specifically log datetimeEpoch

  // Utility function to format local time with offset, now local to this function
  const formatLocalTimeWithOffset = (epoch) => {
    const date = new Date(epoch * 1000); // Adjust epoch time with offset (tzoffset in hours)
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
      hour12: true,
    };
    return date.toLocaleString(undefined, options);
  };

  // Format today's date using local time
  const formattedDate = formatLocalTimeWithOffset(
    todaysForecast.datetimeEpoch,
    todaysForecast.tzoffset
  );

  updateElementText("#location", `${todaysForecast.location}'s Weather for:`);
  updateElementText("#date", formattedDate);

  const todaysInfoDiv = document.querySelector(".todays-forecast");

  todaysInfoDiv.querySelector(
    ".weather-icon"
  ).src = `images/icons/${todaysForecast.icon}.svg`;

  updateElementText(".high-temp .temp-digit", `${todaysForecast.highTemp}°F`);
  updateElementText(".low-temp .temp-digit", `${todaysForecast.lowTemp}°F`);
  updateElementText("#todaysWeatherDescription", todaysForecast.description);
};

const updateCurrentWeather = (currentWeather) => {
  const currentWeatherDiv = document.querySelector(".current-weather");

  // Format the local time using toLocaleTimeString directly
  const localTime = new Date(
    (currentWeather.datetimeEpoch + currentWeather.tzoffset * 60) * 1000
  ).toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  updateElementText("#localTime", localTime);

  currentWeatherDiv.querySelector(
    ".weather-summary .weather-icon"
  ).src = `images/icons/${currentWeather.icon}.svg`;
  updateElementText(
    ".weather-summary .weather-description",
    currentWeather.conditions
  );
  updateElementText(
    ".current-temp .temp-digit",
    `${currentWeather.temperature}°F`
  );

  updateElementText("#feelsLike", `${currentWeather.feelsLike}°F`);
  updateElementText("#humidity", `${currentWeather.humidity}%`);
  updateElementText("#windSpeed", `${currentWeather.windSpeed} mph`);
  updateElementText("#windGust", `${currentWeather.windGust} mph`);
  updateElementText(
    "#windDirection",
    (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.getWindDirection)(currentWeather.windDirection)
  );
  updateElementText("#visibility", `${currentWeather.visibility} miles`);
};

const updateWeeklyForecast = (weeklyForecast) => {
  const sevenDayDiv = document.getElementById("sevenDayContainer");
  sevenDayDiv.innerHTML = ""; // Clear previous content

  weeklyForecast.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("seven-day-forecast__day");

    const dayName = new Date(day.date).toLocaleDateString("en-US", {
      weekday: "short",
    });

    dayDiv.innerHTML = `
      <p class="day-name">${dayName}</p>
      <img src="images/icons/${day.icon}.svg" alt="${day.conditions}" />
      <p class="day-conditions">${day.conditions}</p>
      <p class="high-temp">${day.temperatureHigh}</p>
      <div
        class="low-temp">${day.temperatureLow}
      </div>
    `;

    sevenDayDiv.appendChild(dayDiv);
  });
};


/***/ }),

/***/ "./src/js/location.js":
/*!****************************!*\
  !*** ./src/js/location.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserLocationWeather: () => (/* binding */ getUserLocationWeather),
/* harmony export */   reverseGeocode: () => (/* binding */ reverseGeocode)
/* harmony export */ });
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ "./src/js/weatherData.js");
/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayWeather */ "./src/js/displayWeather.js");



// Function to reverse geocode using latitude and longitude
const reverseGeocode = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();
    return (
      data.address.city ||
      data.address.town ||
      data.address.village ||
      "Unknown location"
    );
  } catch (error) {
    console.error("Error with reverse geocoding:", error);
    return "Unknown location";
  }
};

// Function to get weather data for the user's current location
const getUserLocationWeather = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const locationName = await reverseGeocode(latitude, longitude);
        const weatherData = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.fetchWeather)(`${latitude},${longitude}`);
        const processedData = (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.processWeatherData)(weatherData);
        processedData.todaysForecast.location = locationName;
        (0,_displayWeather__WEBPACK_IMPORTED_MODULE_1__.displayWeather)(processedData);
      },
      () => {
        console.log("Geolocation not allowed. Please enter a location");
      }
    );
  } else {
    console.log("Geolocation not supported by this browser.");
  }
};


/***/ }),

/***/ "./src/js/weatherData.js":
/*!*******************************!*\
  !*** ./src/js/weatherData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather),
/* harmony export */   getWindDirection: () => (/* binding */ getWindDirection),
/* harmony export */   processWeatherData: () => (/* binding */ processWeatherData)
/* harmony export */ });
const apiKey = "LNKMY4EN8W75FKY3V3CSFJ7SH";

const fetchWeather = async (location) => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`
    );
    const data = await response.json();
    console.log("API Response:", data); // Log the full API response
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

const processWeatherData = (data) => {
  if (!data) return null;

  const todaysForecast = {
    location: data.resolvedAddress,
    datetimeEpoch: data.days[0].datetimeEpoch,
    time: data.days[0].datetime,
    icon: data.days[0].icon,
    highTemp: Math.round(data.days[0].tempmax),
    lowTemp: Math.round(data.days[0].tempmin),
    description: data.days[0].description,
  };

  const currentWeather = {
    location: data.resolvedAddress,
    datetimeEpoch: data.currentConditions.datetimeEpoch,
    timezone: data.timezone,
    tzoffset: data.tzoffset,
    icon: data.currentConditions.icon,
    conditions: data.currentConditions.conditions,
    temperature: Math.round(data.currentConditions.temp),
    feelsLike: Math.round(data.currentConditions.feelslike),
    humidity: data.currentConditions.humidity,
    windSpeed: Math.round(data.currentConditions.windspeed),
    windGust: Math.round(data.currentConditions.windgust),
    windDirection: data.currentConditions.winddir,
    visibility: data.currentConditions.visibility,
  };

  const weeklyForecast = data.days.slice(1, 8).map((day) => ({
    date: day.datetime,
    icon: day.icon,
    temperatureHigh: Math.round(day.tempmax),
    conditions: day.conditions,
    temperatureLow: Math.round(day.tempmin),
  }));

  return {
    todaysForecast,
    currentWeather,
    weeklyForecast,
  };
};

// Utility function to get wind direction from degrees
const getWindDirection = (degree) => {
  const direction = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.round(degree / 22.5) % 16;
  return direction[index];
};


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherData */ "./src/js/weatherData.js");
/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayWeather */ "./src/js/displayWeather.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location */ "./src/js/location.js");
 // Importing CSS for Webpack to bundle




document
  .getElementById("locationForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const location = document.getElementById("locationInput").value;
    const loadingDiv = document.getElementById("loading");

    // Show loading indicator while fetchin weather data
    loadingDiv.style.display = "block";

    try {
      const weatherData = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(location);
      console.log(weatherData); // Check the structure of the data
      const processedData = (0,_weatherData__WEBPACK_IMPORTED_MODULE_1__.processWeatherData)(weatherData);
      (0,_displayWeather__WEBPACK_IMPORTED_MODULE_2__.displayWeather)(processedData);
    } catch (error) {
      document.querySelector("#todaysWeatherDescription").textContent =
        "Error fetching weather data.";
    } finally {
      // Hide loadin indicator after data is processed
      loadingDiv.style.display = "none";
    }
  });

// Get the user's location weather on page load
document.addEventListener("DOMContentLoaded", () => {
  (0,_location__WEBPACK_IMPORTED_MODULE_3__.getUserLocationWeather)();
});

/******/ })()
;
//# sourceMappingURL=bundle.js.map