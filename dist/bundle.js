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
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns of equal width */
  grid-template-rows: auto 1fr; /* Two rows, second row taking remaining space */
  gap: 20px; /* Space between grid items */
  width: 100%;
  max-width: 1000px;
  height: 90vh; /* Ensure container does not exceed viewport height */
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Prevent overflow issues */
}

/* Aligns .todays-forecast in the first column of the top row */
.todays-forecast {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space out elements vertically */
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Header Styling */
.todays-forecast header {
  text-align: center;
  margin-bottom: 20px;
}

/* Aligns .current-weather in the second column of the top row */
.current-weather {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Spans .seven-day-forecast across both columns in the bottom row */
.seven-day-forecast {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-height: 200px; /* Limit the height of the seven-day forecast */
  overflow-x: auto; /* Allow horizontal scrolling if necessary */
}

.seven-day-container {
  display: flex;
  justify-content: space-between; /* Distribute the 7 divs evenly */
  gap: 10px;
}

.seven-day-forecast__day {
  flex: 1;
  text-align: center;
  padding: 10px;
  margin: 0 5px;
  background-color: #f9f9f9;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  min-width: 120px; /* Ensure each day div has a minimum width */
}

/* Other styles */
#location {
  font-size: 24px;
  margin: 0;
}

#date {
  font-size: 18px;
  color: #555;
  margin: 0;
}

.weather-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}

.weather-icon-container {
  justify-content: center;
  display: flex;
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
}

.temp-digit {
  font-size: 32px;
  font-weight: bold;
}

.temp-label {
  font-size: 16px;
  color: #555;
  margin-top: 5px;
}

#todaysWeatherDescription {
  margin: 20px 0;
  font-size: 18px;
  color: #333;
  text-align: center;
}

/* Form Styling */
form {
  display: flex;
  justify-content: center; /* Center the form horizontally */
  margin-top: 20px;
}

input {
  padding: 10px;
  font-size: 16px;
  margin-right: 10px; /* Add space between input and button */
  max-width: 300px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

#loading {
  margin-top: 20px;
}

.weather-summary {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.weather-description {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
}

.current-temp {
  text-align: center;
}

.current-temp .temp-digit {
  font-size: 36px;
  font-weight: bold;
}

.weather-stats {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.stat {
  text-align: center;
}

.stat-title {
  font-size: 14px;
  color: #555;
}

.stat-info {
  font-size: 18px;
  font-weight: bold;
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;EACE,yCAAyC;EACzC,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B,EAAE,+BAA+B;EAC/D,4BAA4B,EAAE,gDAAgD;EAC9E,SAAS,EAAE,6BAA6B;EACxC,WAAW;EACX,iBAAiB;EACjB,YAAY,EAAE,qDAAqD;EACnE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,uCAAuC;EACvC,gBAAgB,EAAE,4BAA4B;AAChD;;AAEA,+DAA+D;AAC/D;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,8BAA8B,EAAE,kCAAkC;EAClE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA,mBAAmB;AACnB;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA,gEAAgE;AAChE;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA,oEAAoE;AACpE;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,uCAAuC;EACvC,iBAAiB,EAAE,+CAA+C;EAClE,gBAAgB,EAAE,4CAA4C;AAChE;;AAEA;EACE,aAAa;EACb,8BAA8B,EAAE,iCAAiC;EACjE,SAAS;AACX;;AAEA;EACE,OAAO;EACP,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,sCAAsC;EACtC,gBAAgB,EAAE,4CAA4C;AAChE;;AAEA,iBAAiB;AACjB;EACE,eAAe;EACf,SAAS;AACX;;AAEA;EACE,eAAe;EACf,WAAW;EACX,SAAS;AACX;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,WAAW;AACb;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,WAAW;EACX,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,uBAAuB,EAAE,iCAAiC;EAC1D,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB,EAAE,uCAAuC;EAC3D,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB","sourcesContent":["body {\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #f0f0f0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 1fr 1fr; /* Two columns of equal width */\n  grid-template-rows: auto 1fr; /* Two rows, second row taking remaining space */\n  gap: 20px; /* Space between grid items */\n  width: 100%;\n  max-width: 1000px;\n  height: 90vh; /* Ensure container does not exceed viewport height */\n  padding: 20px;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  overflow: hidden; /* Prevent overflow issues */\n}\n\n/* Aligns .todays-forecast in the first column of the top row */\n.todays-forecast {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; /* Space out elements vertically */\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n/* Header Styling */\n.todays-forecast header {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n/* Aligns .current-weather in the second column of the top row */\n.current-weather {\n  grid-column: 2 / 3;\n  grid-row: 1 / 2;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n/* Spans .seven-day-forecast across both columns in the bottom row */\n.seven-day-forecast {\n  grid-column: 1 / 3;\n  grid-row: 2 / 3;\n  padding: 10px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  max-height: 200px; /* Limit the height of the seven-day forecast */\n  overflow-x: auto; /* Allow horizontal scrolling if necessary */\n}\n\n.seven-day-container {\n  display: flex;\n  justify-content: space-between; /* Distribute the 7 divs evenly */\n  gap: 10px;\n}\n\n.seven-day-forecast__day {\n  flex: 1;\n  text-align: center;\n  padding: 10px;\n  margin: 0 5px;\n  background-color: #f9f9f9;\n  border-radius: 4px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n  min-width: 120px; /* Ensure each day div has a minimum width */\n}\n\n/* Other styles */\n#location {\n  font-size: 24px;\n  margin: 0;\n}\n\n#date {\n  font-size: 18px;\n  color: #555;\n  margin: 0;\n}\n\n.weather-info {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.weather-icon-container {\n  justify-content: center;\n  display: flex;\n}\n\n.weather-icon {\n  width: 120px;\n  height: 120px;\n}\n\n.temperature {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n}\n\n.high-temp,\n.low-temp {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 10px;\n}\n\n.temp-digit {\n  font-size: 32px;\n  font-weight: bold;\n}\n\n.temp-label {\n  font-size: 16px;\n  color: #555;\n  margin-top: 5px;\n}\n\n#todaysWeatherDescription {\n  margin: 20px 0;\n  font-size: 18px;\n  color: #333;\n  text-align: center;\n}\n\n/* Form Styling */\nform {\n  display: flex;\n  justify-content: center; /* Center the form horizontally */\n  margin-top: 20px;\n}\n\ninput {\n  padding: 10px;\n  font-size: 16px;\n  margin-right: 10px; /* Add space between input and button */\n  max-width: 300px;\n}\n\nbutton {\n  padding: 10px 20px;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n#loading {\n  margin-top: 20px;\n}\n\n.weather-summary {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.weather-description {\n  margin-top: 10px;\n  font-size: 14px;\n  color: #555;\n}\n\n.current-temp {\n  text-align: center;\n}\n\n.current-temp .temp-digit {\n  font-size: 36px;\n  font-weight: bold;\n}\n\n.weather-stats {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.stat {\n  text-align: center;\n}\n\n.stat-title {\n  font-size: 14px;\n  color: #555;\n}\n\n.stat-info {\n  font-size: 18px;\n  font-weight: bold;\n}\n"],"sourceRoot":""}]);
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


const formatLocalTimeWithOffset = (epoch, tzoffset) => {
  const date = new Date((epoch + tzoffset * 60) * 1000); // Adjust epoch time with offset
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleTimeString(undefined, options);
};

const displayWeather = (data) => {
  if (!data) return;

  const { todaysForecast, currentWeather, weeklyForecast } = data;

  // Cache DOM elements
  const todaysInfoDiv = document.querySelector(".todays-forecast");
  const currentWeatherDiv = document.querySelector(".current-weather");
  const sevenDayDiv = document.getElementById("sevenDayContainer");

  const formattedDate = new Date(todaysForecast.time).toLocaleDateString(
    undefined,
    {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  document.getElementById(
    "location"
  ).textContent = `${todaysForecast.location} Weather for:`;
  document.getElementById("date").textContent = formattedDate;

  todaysInfoDiv.querySelector(
    ".weather-icon"
  ).src = `images/icons/${todaysForecast.icon}.svg`;
  todaysInfoDiv.querySelector(
    ".high-temp .temp-digit"
  ).textContent = `${todaysForecast.highTemp}°F`;
  todaysInfoDiv.querySelector(
    ".low-temp .temp-digit"
  ).textContent = `${todaysForecast.lowTemp}°F`;
  todaysInfoDiv.querySelector("#todaysWeatherDescription").textContent =
    todaysForecast.description;

  // Update Current Weather elements
  const localTime = formatLocalTimeWithOffset(
    currentWeather.datetimeEpoch,
    currentWeather.tzoffset
  );

  currentWeatherDiv.querySelector("#localTime").textContent = localTime;
  currentWeatherDiv.querySelector(
    ".weather-summary .weather-icon"
  ).src = `images/icons/${currentWeather.icon}.svg`;
  currentWeatherDiv.querySelector(
    ".weather-summary .weather-description"
  ).textContent = currentWeather.conditions;
  currentWeatherDiv.querySelector(
    ".current-temp .temp-digit"
  ).textContent = `${currentWeather.temperature}°F`;

  currentWeatherDiv.querySelector(
    "#feelsLike"
  ).textContent = `${currentWeather.feelsLike}°F`;
  currentWeatherDiv.querySelector(
    "#humidity"
  ).textContent = `${currentWeather.humidity}%`;
  currentWeatherDiv.querySelector(
    "#windSpeed"
  ).textContent = `${currentWeather.windSpeed} mph`;
  currentWeatherDiv.querySelector(
    "#windGust"
  ).textContent = `${currentWeather.windGust} mph`;
  currentWeatherDiv.querySelector("#windDirection").textContent =
    (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.getWindDirection)(currentWeather.windDirection);
  currentWeatherDiv.querySelector(
    "#visibility"
  ).textContent = `${currentWeather.visibility} miles`;

  // Dynamically add weekly forecast elements
  sevenDayDiv.innerHTML = ""; // Clear previous content
  weeklyForecast.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("seven-day-forecast__day");

    const dayName = new Date(day.date).toLocaleDateString("en-US", {
      weekday: "short",
    });

    dayDiv.innerHTML = `
    <p>${dayName}</p>
    <img src="images/icons/${day.icon}.svg" alt="${day.conditions}" />
    <p>High: ${day.temperatureHigh}°F</p>
    <p>${day.conditions}</p>
    <p>Low: ${day.temperatureLow}°F</p>
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
    time: data.days[0].datetime,
    icon: data.days[0].icon,
    highTemp: data.days[0].tempmax,
    lowTemp: data.days[0].tempmin,
    description: data.days[0].description,
  };

  const currentWeather = {
    location: data.resolvedAddress,
    datetimeEpoch: data.currentConditions.datetimeEpoch,
    timezone: data.timezone,
    tzoffset: data.tzoffset,
    icon: data.currentConditions.icon,
    conditions: data.currentConditions.conditions,
    temperature: data.currentConditions.temp,
    feelsLike: data.currentConditions.feelslike,
    humidity: data.currentConditions.humidity,
    windSpeed: data.currentConditions.windspeed,
    windGust: data.currentConditions.windgust,
    windDirection: data.currentConditions.winddir,
    visibility: data.currentConditions.visibility,
  };

  const weeklyForecast = data.days.slice(1, 8).map((day) => ({
    date: day.datetime,
    icon: day.icon,
    temperatureHigh: day.tempmax,
    conditions: day.conditions,
    temperatureLow: day.tempmin,
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