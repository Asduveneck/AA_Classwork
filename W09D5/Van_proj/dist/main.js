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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(array) {\n    this.nodeList = array;\n  }\n\n  html(str) {\n    if(str) this.nodeList.forEach(node => node.innerHTML = str); \n    else return this.nodeList[0].innerHTML;\n  }\n\n  empty() {\n    this.nodeList.forEach(node => node.innerHTML = \"\");\n  }\n\n  append(obj) {\n    if (obj instanceof DOMNodeCollection) {\n      this.nodeList.forEach( node => {\n        obj.forEach( objNode => node.innerHTML += node.outerHTML);\n      });\n    } else {\n      this.nodeList.forEach( node => node.innerHTML += obj);\n    }\n  }\n\n  addClass(name) {\n    this.nodeList.forEach( node => node.className = name);\n  }\n\n  removeClass() {\n    this.nodeList.forEach( node => node.className = \"\");\n  } \n\n  children() {\n    \n    let childrenArr = [];\n    \n    for (let i = 0; i < this.nodeList.length; i++) {\n      let node = this.nodeList[i];\n      if (node.childElementCount > 0) {\n        console.log(node.children);\n        console.log($1(node.children[0]));\n        console.log(\"Child Element Count for UL:\")\n        console.log(node.children[0].childElementCount);\n        console.log(node.children[0].children);\n        console.log(node.children[0].children[0]);\n        console.log($1(node.children[0].children[0]));\n\n\n        \n        \n        // childrenArr = childrenArr.concat()\n      }\n    }\n\n    // for(let node of this.nodeList) {\n    //   let nodeChildren = node.children;\n      \n    //   if (node.childElementCount === 0) {\n    //     childrenArr.push(node);\n    //   } else {\n    //     for (let nodeChild of nodeChildren) {\n    //       let newNode = new DOMNodeCollection(Array.from(nodeChild));\n    //       newNode.children();\n    //     }\n    //     return childrenArr.concat();\n    //   }\n    // }\n    // return childrenArr;\n  }\n\n}\n\n\nmodule.exports = DOMNodeCollection;\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  let $div = $1('div');\n  // console.log($div);\n  $div.children();\n  \n});\n\nconst $1 = function (arg) { \n  if (typeof arg === \"string\" || arg instanceof String) {\n    let tempArr = Array.from(document.querySelectorAll(arg));\n    return new DOMNodeCollection(tempArr);\n  } else if(arg instanceof HTMLElement) {\n    return new DOMNodeCollection(Array.from(arg));\n  }\n}; \n\nwindow.$1 = $1; \n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });