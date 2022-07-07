var uuka;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/func1.ts":
/*!**********************!*\
  !*** ./src/func1.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ohNo = void 0;
;
function ohNo() {
    console.log('Oh no!');
    return { result: 0 };
}
exports.ohNo = ohNo;


/***/ }),

/***/ "./src/loaddata.ts":
/*!*************************!*\
  !*** ./src/loaddata.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCountryList = void 0;
const data_json_1 = __importDefault(__webpack_require__(/*! ./data.json */ "./src/data.json"));
function getCountryList() {
    return data_json_1.default;
}
exports.getCountryList = getCountryList;


/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"name":"Hong Kong"},{"id":2,"name":"China"}]');

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.api = exports.test = void 0;
const func1_1 = __webpack_require__(/*! ./func1 */ "./src/func1.ts");
const loaddata_1 = __webpack_require__(/*! ./loaddata */ "./src/loaddata.ts");
const test = {
    ohNo: func1_1.ohNo
};
exports.test = test;
const api = {
    getCountryList: loaddata_1.getCountryList
};
exports.api = api;

})();

uuka = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxZQUFZOzs7Ozs7Ozs7OztBQ1JDO0FBQ2I7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCO0FBQ3RCLG9DQUFvQyxtQkFBTyxDQUFDLG9DQUFhO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxXQUFXLEdBQUcsWUFBWTtBQUMxQixnQkFBZ0IsbUJBQU8sQ0FBQywrQkFBUztBQUNqQyxtQkFBbUIsbUJBQU8sQ0FBQyxxQ0FBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3V1a2EvLi9zcmMvZnVuYzEudHMiLCJ3ZWJwYWNrOi8vdXVrYS8uL3NyYy9sb2FkZGF0YS50cyIsIndlYnBhY2s6Ly91dWthL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3V1a2EvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5vaE5vID0gdm9pZCAwO1xyXG47XHJcbmZ1bmN0aW9uIG9oTm8oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnT2ggbm8hJyk7XHJcbiAgICByZXR1cm4geyByZXN1bHQ6IDAgfTtcclxufVxyXG5leHBvcnRzLm9oTm8gPSBvaE5vO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldENvdW50cnlMaXN0ID0gdm9pZCAwO1xyXG5jb25zdCBkYXRhX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9kYXRhLmpzb25cIikpO1xyXG5mdW5jdGlvbiBnZXRDb3VudHJ5TGlzdCgpIHtcclxuICAgIHJldHVybiBkYXRhX2pzb25fMS5kZWZhdWx0O1xyXG59XHJcbmV4cG9ydHMuZ2V0Q291bnRyeUxpc3QgPSBnZXRDb3VudHJ5TGlzdDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuYXBpID0gZXhwb3J0cy50ZXN0ID0gdm9pZCAwO1xyXG5jb25zdCBmdW5jMV8xID0gcmVxdWlyZShcIi4vZnVuYzFcIik7XHJcbmNvbnN0IGxvYWRkYXRhXzEgPSByZXF1aXJlKFwiLi9sb2FkZGF0YVwiKTtcclxuY29uc3QgdGVzdCA9IHtcclxuICAgIG9oTm86IGZ1bmMxXzEub2hOb1xyXG59O1xyXG5leHBvcnRzLnRlc3QgPSB0ZXN0O1xyXG5jb25zdCBhcGkgPSB7XHJcbiAgICBnZXRDb3VudHJ5TGlzdDogbG9hZGRhdGFfMS5nZXRDb3VudHJ5TGlzdFxyXG59O1xyXG5leHBvcnRzLmFwaSA9IGFwaTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9