"use strict";
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ImageProvider: () => (/* binding */ ImageProvider),\n/* harmony export */   useImage: () => (/* binding */ useImage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ImageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    imageSrc: null,\n    setImage: ()=>{},\n    clearImage: ()=>{}\n});\nconst useImage = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ImageContext);\nconst ImageProvider = ({ children })=>{\n    const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const setImage = (imgSrc)=>{\n        setImageSrc(imgSrc);\n    };\n    const clearImage = ()=>{\n        setImageSrc(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImageContext.Provider, {\n        value: {\n            imageSrc,\n            setImage,\n            clearImage\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\joseg\\\\OneDrive\\\\Escritorio\\\\DUOC RAMOS\\\\CAPSTONE\\\\Repositorios\\\\fe-appconserje\\\\Front Node JS\\\\src\\\\context\\\\ImageContext.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9JbWFnZUNvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFtRTtBQUVuRSxNQUFNSSw2QkFBZUgsb0RBQWFBLENBQUM7SUFDL0JJLFVBQVU7SUFDVkMsVUFBVSxLQUFPO0lBQ2pCQyxZQUFZLEtBQU87QUFDdkI7QUFFTyxNQUFNQyxXQUFXLElBQU1OLGlEQUFVQSxDQUFDRSxjQUFjO0FBRWhELE1BQU1LLGdCQUFnQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN0QyxNQUFNLENBQUNMLFVBQVVNLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFFekMsTUFBTUcsV0FBVyxDQUFDTTtRQUNkRCxZQUFZQztJQUNoQjtJQUVBLE1BQU1MLGFBQWE7UUFDZkksWUFBWTtJQUNoQjtJQUVBLHFCQUNJLDhEQUFDUCxhQUFhUyxRQUFRO1FBQUNDLE9BQU87WUFBRVQ7WUFBVUM7WUFBVUM7UUFBVztrQkFDMURHOzs7Ozs7QUFHYixFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGpvc2VnXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcRFVPQyBSQU1PU1xcQ0FQU1RPTkVcXFJlcG9zaXRvcmlvc1xcZmUtYXBwY29uc2VyamVcXEZyb250IE5vZGUgSlNcXHNyY1xcY29udGV4dFxcSW1hZ2VDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEltYWdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gICAgaW1hZ2VTcmM6IG51bGwsXHJcbiAgICBzZXRJbWFnZTogKCkgPT4ge30sXHJcbiAgICBjbGVhckltYWdlOiAoKSA9PiB7fSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlSW1hZ2UgPSAoKSA9PiB1c2VDb250ZXh0KEltYWdlQ29udGV4dCk7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2VQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtpbWFnZVNyYywgc2V0SW1hZ2VTcmNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3Qgc2V0SW1hZ2UgPSAoaW1nU3JjKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2VTcmMoaW1nU3JjKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY2xlYXJJbWFnZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJbWFnZVNyYyhudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SW1hZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGltYWdlU3JjLCBzZXRJbWFnZSwgY2xlYXJJbWFnZSB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvSW1hZ2VDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkltYWdlQ29udGV4dCIsImltYWdlU3JjIiwic2V0SW1hZ2UiLCJjbGVhckltYWdlIiwidXNlSW1hZ2UiLCJJbWFnZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXRJbWFnZVNyYyIsImltZ1NyYyIsIlByb3ZpZGVyIiwidmFsdWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ImageContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_ImageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/ImageContext */ \"./src/context/ImageContext.js\");\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ImageContext__WEBPACK_IMPORTED_MODULE_1__.ImageProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\joseg\\\\OneDrive\\\\Escritorio\\\\DUOC RAMOS\\\\CAPSTONE\\\\Repositorios\\\\fe-appconserje\\\\Front Node JS\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\joseg\\\\OneDrive\\\\Escritorio\\\\DUOC RAMOS\\\\CAPSTONE\\\\Repositorios\\\\fe-appconserje\\\\Front Node JS\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3RDtBQUV4RCxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ25DLHFCQUNJLDhEQUFDSCxnRUFBYUE7a0JBQ1YsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHcEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxqb3NlZ1xcT25lRHJpdmVcXEVzY3JpdG9yaW9cXERVT0MgUkFNT1NcXENBUFNUT05FXFxSZXBvc2l0b3Jpb3NcXGZlLWFwcGNvbnNlcmplXFxGcm9udCBOb2RlIEpTXFxzcmNcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0ltYWdlQ29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEltYWdlUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0ltYWdlUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkltYWdlUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();