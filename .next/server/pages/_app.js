/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/ImageContext.js":
/*!*************************************!*\
  !*** ./src/context/ImageContext.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ImageProvider: () => (/* binding */ ImageProvider),\n/* harmony export */   useImage: () => (/* binding */ useImage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ImageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    imageSrc: null,\n    setImage: ()=>{},\n    clearImage: ()=>{}\n});\nconst useImage = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ImageContext);\nconst ImageProvider = ({ children })=>{\n    const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const setImage = (imgSrc)=>{\n        setImageSrc(imgSrc);\n    };\n    const clearImage = ()=>{\n        setImageSrc(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageContext.Provider, {\n        value: {\n            imageSrc,\n            setImage,\n            clearImage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Portafolio\\\\LlegoOK\\\\src\\\\context\\\\ImageContext.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9JbWFnZUNvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRTtBQUVuRSxNQUFNSSw2QkFBZUgsb0RBQWFBLENBQUM7SUFDL0JJLFVBQVU7SUFDVkMsVUFBVSxLQUFPO0lBQ2pCQyxZQUFZLEtBQU87QUFDdkI7QUFFTyxNQUFNQyxXQUFXLElBQU1OLGlEQUFVQSxDQUFDRSxjQUFjO0FBRWhELE1BQU1LLGdCQUFnQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN0QyxNQUFNLENBQUNMLFVBQVVNLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFFekMsTUFBTUcsV0FBVyxDQUFDTTtRQUNkRCxZQUFZQztJQUNoQjtJQUVBLE1BQU1MLGFBQWE7UUFDZkksWUFBWTtJQUNoQjtJQUVBLHFCQUNJLDhEQUFDUCxhQUFhUyxRQUFRO1FBQUNDLE9BQU87WUFBRVQ7WUFBVUM7WUFBVUM7UUFBVztrQkFDMURHOzs7Ozs7QUFHYixFQUFFIiwic291cmNlcyI6WyJDOlxcUG9ydGFmb2xpb1xcTGxlZ29PS1xcc3JjXFxjb250ZXh0XFxJbWFnZUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW1hZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgICBpbWFnZVNyYzogbnVsbCxcclxuICAgIHNldEltYWdlOiAoKSA9PiB7fSxcclxuICAgIGNsZWFySW1hZ2U6ICgpID0+IHt9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VJbWFnZSA9ICgpID0+IHVzZUNvbnRleHQoSW1hZ2VDb250ZXh0KTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2ltYWdlU3JjLCBzZXRJbWFnZVNyY10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBzZXRJbWFnZSA9IChpbWdTcmMpID0+IHtcclxuICAgICAgICBzZXRJbWFnZVNyYyhpbWdTcmMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjbGVhckltYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEltYWdlU3JjKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxJbWFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaW1hZ2VTcmMsIHNldEltYWdlLCBjbGVhckltYWdlIH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9JbWFnZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiSW1hZ2VDb250ZXh0IiwiaW1hZ2VTcmMiLCJzZXRJbWFnZSIsImNsZWFySW1hZ2UiLCJ1c2VJbWFnZSIsIkltYWdlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldEltYWdlU3JjIiwiaW1nU3JjIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/ImageContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_ImageContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/ImageContext */ \"./src/context/ImageContext.js\");\n\n // Si tienes estilos globales\n // Font Awesome local\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ImageContext__WEBPACK_IMPORTED_MODULE_3__.ImageProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Portafolio\\\\LlegoOK\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Portafolio\\\\LlegoOK\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0IsQ0FBQyw2QkFBNkI7QUFDTixDQUFDLHFCQUFxQjtBQUNyQjtBQUV4RCxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSCxnRUFBYUE7a0JBQ1osNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFBvcnRhZm9saW9cXExsZWdvT0tcXHNyY1xccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnOyAvLyBTaSB0aWVuZXMgZXN0aWxvcyBnbG9iYWxlc1xyXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcyc7IC8vIEZvbnQgQXdlc29tZSBsb2NhbFxyXG5pbXBvcnQgeyBJbWFnZVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9JbWFnZUNvbnRleHQnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbWFnZVByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0ltYWdlUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@fortawesome"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();