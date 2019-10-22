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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Clock\", function() { return Clock; });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n// const warmupFile = require('./warmup')\n\n\n\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.printTime();\n    Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(this.printTime(), clockElement);\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n    \n  }\n  \n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n    \n    Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(timeString, clockElement);\n    // Use console.log to print it.\n    // console.log(timeString);\n    return timeString;\n\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\n\nconst clockElement = document.querySelector('#clock');\nconst clock = new Clock();\n\n// console.log(warmupFile.htmlGenerator);\n// warmupFile.htmlGenerator(clock.printTime(), clockElement);\n// warmupFile.htmlGenerator( new Clock() , clockElement);\n\n\n// module.exports = Clock;\n\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nconst dogsArr = (Object.keys(dogs))\n\n\nconst dogLinkCreator = function (breed) { // list = dogs // if we want more modularity\n  const dogLinks = [];\n  for(breed of dogsArr){\n    let newA = document.createElement('a');\n    newA.innerHTML = breed  // name\n    newA.href = dogs[breed] // link. Hopefully href works like this\n\n    let newLi = document.createElement('li');\n    newLi.className += \"dog-link\";\n    newLi.append(newA);\n\n    dogLinks.push(newLi); \n  }\n\n  return dogLinks;\n}\n\n\nconst attachDogLinks = function() {\n  let dogLinks = dogLinkCreator();\n\n  \n  const dogUl = document.querySelector('.drop-down-dog-list');\n\n  dogLinks.forEach(link => {\n    dogUl.append(link);\n  });\n\n}\n\nconst handleLeave = function() {\n  const dogNav = document.querySelector('.drop-down-dog-nav');\n  dogNav.addEventListener('mouseout', function() {\n    let dogLis = document.querySelectorAll('.drop-down-dog-nav li');\n    dogLis.forEach(el => {\n      el.classList.add('dog-link'); \n    })\n  })\n}\nconst handleEnter = function() {\n  const dogNav = document.querySelector('.drop-down-dog-nav');\n  dogNav.addEventListener('mouseover', function() {\n    let dogLis = document.querySelectorAll('.drop-down-dog-nav li');\n    dogLis.forEach(el => {\n      el.classList.remove('dog-link'); \n    })\n  })\n}\n\nmodule.exports = attachDogLinks();\nmodule.exports = handleEnter();\nmodule.exports = handleLeave();\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n1 Listen for the submit button\n2 Cry\n3. Input data \n4. Cry some more\n5. Render / redisplay the data base things above (in WinGDINGS)\n6. \n\n*/\n\nlet toDoArr = [];\n\n// Do this just in or by addTodo.\n// grab by name = \"add-to-do\"\n// Grab the value from the array\n\n// const addTodoOriginal = function( ) {\n//   const uBoy01 = document.querySelector('.add-todo-form');\n//   let testVariable = null;\n//   uBoy01.addEventListener('submit', function() {\n//     console.log(\"crying right now\");\n//     // testVariable = todoArr.uBoy01.elements[0].value //.value;\n//     debugger;\n//     todoArr.push(uBoy01.elements[0] )//.value;\n//     todoArr.push(uBoy01.elements)//.value;\n//     debugger;\n//   })\n// }\n\nclass ToDo  {\n  constructor(input) {\n    this.input = input;\n    this.done = false;\n  }\n}\n// too many tears\n\nconst addTodo = function(event) { // find an input ourselves\n  event.preventDefault();\n  const input = document.querySelector('input[name=\"add-todo\"]').value\n  console.log(input);\n  let toDoPOJOMOJOJO = new ToDo(input);\n  toDoArr.push(toDoPOJOMOJOJO);\n}\nconsole.log(toDoArr)\n// addTodo('sobbing')\n\nconst populateList = function(arr = toDoArr) {\n  // Takes in html\n  // does stuff\n\n  arr.forEach( el => {\n    //  wrap label type and checkbox input into an outer LI tag\n    let newLabel = document.createElement('label');\n    newLabel.innerHTML = el.input;\n    \n    let newLi = document.createElement('li');\n    newLi.className += \"crycrycry\";\n    \n    newLi.append(newLabel);\n\n  // put a checkbox somewhere up above.\n\n    // Now that we have a label and thing to all labels, tierate through all things we changed, then append it to the UL.\n\n\n  })\n\n}\n\nconst input = document.querySelector('.add-todo-form')\ninput.addEventListener('submit', addTodo); // it will implicitly and call \n\n\nconsole.log(toDoArr);\n// module.exports = addTodo();\n\n\n// We forgot to prevent default in our previous version....\n\n// lets do our todo \n\n\n\n// const addTodo = function( ) {\n//   const toFoForm = document.querySelector('.add-todo-form');\n//   let testVariable = null;\n//   toFoForm.addEventListener('submit', function(e) {\n//     e.preventDefault\n//     console.log(\"crying right now\");\n//     // testVariable = todoArr.uBoy01.elements[0].value //.value;\n//     debugger;\n//     todoArr.push(uBoy01.elements[0] )//.value;\n//     todoArr.push(uBoy01.elements)//.value;\n//     debugger;\n//   })\n// }\n/*\n88\n\"\"\n\n  , adPPYba, 8b, dPPYba, 8b       d8 88 8b, dPPYba,   , adPPYb, d8\na8\"     \"\" 88P'   \"Y8`8b     d8' 88 88P'   `\"8a a8\"    `Y88  \n8b         88          `8b   d8'  88 88       88 8b       88  \n\"8a,   ,aa 88           `8b,d8'   88 88       88 \"8a,   , d88\n  `\"Ybbd8\"' 88             Y88'    88 88       88  `\"YbbdP\"Y8\nd8'                     aa,    ,88  \nd8'                       \"Y8bbdP\"   \n\n*/\n\n\n\n \n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  let newP = document.createElement('p');\n  newP.innerHTML = string;\n  while (htmlElement.childElementCount > 0) {\n    htmlElement.removeChild(htmlElement.firstChild);\n  };\n  htmlElement.appendChild(newP);\n  // check if element has children\n  //iterate over children\n  //remove node/appending children(remove previous)\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });