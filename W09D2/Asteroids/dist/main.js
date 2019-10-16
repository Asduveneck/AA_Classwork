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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nconst DEFAULT = {\n  COLOR: \"#de2666\",\n  RADIUS: 10,\n  VEL_L: 20\n};\n\nfunction Asteroid(options) {\n  if (options === undefined) {\n    options = {};\n    // this.pos: [250, 250]\n  }\n  // debugger\n  options.pos = options.pos;\n  // options.color = DEFAULT.COLOR; // We'll always overwrite custom with default.\n  // // no bueno\n  // options.radius = DEFAULT.RADIUS;\n  options.vel = options.vel || Util.randomVec(DEFAULT.VEL_L); // length = vel? // Math.random(options.vel);\n  options.color = (options.color || DEFAULT.COLOR);\n  options.radius = (options.radius || DEFAULT.RADIUS);\n  // debugger\n  // const temp = MovingObject.call(this, options); \n  // return temp;\n  MovingObject.call(this, options); \n};\nUtil.inherits(Asteroid, MovingObject)\n\nmodule.exports = Asteroid;\n\n\n\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nDIM_X, DIM_Y, and NUM_ASTEROIDS\n*/\n\n\nconst DEFAULT = {\n  COLOR: \"#b0e8e5\",\n  DIM_X: 9001,\n  DIM_Y: 9001,\n  NUM_ASTEROIDS: 3\n};\n\nfunction Game(options) {\n  asteroids = [];\n  options.COLOR = (options.COLOR || DEFAULT.COLOR)\n  options.DIM_X = (options.DIM_X || DEFAULT.DIM_X),\n  options.DIM_Y = (options.DIM_Y || DEFAULT.DIM_Y),\n  options.NUM_ASTEROIDS = (options.NUM_ASTEROIDS || DEFAULT.NUM_ASTEROIDS),\n  \n  this.addAsteroids();\n}\n\n\nGame.prototype.randomPosition = function () {\n  // Random X\n  // Random Y\n  let x_rand = Math.random * Game.Dim_X;\n  let y_rand = Math.random * Game.Dim_Y;\n  return [x_rand, y_rand];\n};\n\nGame.prototype.allObjects = function () {\n  return [].concat(this.asteroids);\n};\n\n\nGame.prototype.addAsteroids = function() {\n  // calls randomPosition \n  // stores position in Game.asteroids array\n  for(let i = 0; i <= Game.NUM_ASTEROIDS; i++) {\n    new_coord = Game.randomPosition(); \n    Game.asteroids.push(new_coord)\n  }\n};\n\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)\n  ctx.fillStyle = Game.COLOR;\n  ctx.fill(0, 0, Game.DIM_X, Game.DIM_Y);\n  \n  this.allObjects().forEach(function(object) {\n    object.draw(ctx);\n  });\n\n};\nGame.prototype.moveObjects = function() {\n\n  this.allObjects().forEach(function(object) {\n    object.move();\n  });\n\n};\n\n module.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working\")\n//const ERROR_HERE\n\n// File Requirements:\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n// Testing Ground\nconst mo = new MovingObject({\n  pos: [30, 30],\n  vel: [10, 10],\n  radius: 5,\n  color: \"#00FF00\"\n});\n\nconst ast = new Asteroid({\n  pos: [90, 90] \n  //everything else is given/implied/defaulted\n\n});\n\nconst ast2 = new Asteroid({\n  pos: [130, 130],\n  color: \"#2651de\", \n  radius: 20, \n  vel: [10, 10]\n});\n\nconst game1 = new Game({\n\n});\n\n\n// shove to window scope\nwindow.mo = mo;\nwindow.MovingObject = MovingObject;\nwindow.ast = ast;\nwindow.Asteroid = Asteroid;\nwindow.ast2 = ast2;\nwindow.game1 = game1;\n\n\n// listener for DOMContentLoaded\nwindow.addEventListener('DOMContentLoaded', function(event) {\n  // DOM: check if page is loaded\n  console.log('DOM IS HERE!')\n  const canvas = document.getElementById(\"game-canvas\"); // \n  // canvas.width = 500;\n  // canvas.height = 500;\n  const ctx = canvas.getContext(\"2d\");\n  window.ctx = ctx // For testing purposes ONLY. REMOVE LATER\n  // ctx we draw stuff\n  \n  mo.draw(ctx);\n  ast.draw(ctx);\n  ast2.draw(ctx);\n\n});\n\n\nconsole.log(mo)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction MovingObject(options) {\n  this.pos = options.pos; \n  this.vel = options.vel; \n  this.radius = options.radius; \n  this.color = options.color; \n};\n\n MovingObject.prototype.draw = function(ctx) { // ctx is canvas?\n  // CTX is a drawing tool for canvas.\n  // debugger;\n  ctx.fillStyle = this.color;\n  ctx.beginPath(); // makes sure that all of our object colors are defined. Begins a path for each object so there's no color collision\n  // Needed for every project\n  // no idea: \n  let x = this.pos[0];\n   let y = this.pos[1];\n  ctx.arc(x, y, this.radius, 0, 360); \n  ctx.fill(); // fill in here\n};\n\nMovingObject.prototype.move = function(ctx) {\n  let x = this.pos[0];\n  let y = this.pos[1];\n  let x2 = x + this.vel[0];\n  let y2 = x + this.vel[1];\n  let new_pos = [x2, y2];\n  this.pos = new_pos;\n  return new_pos;\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n// Util.inherits = function (childClass, parentClass) { ... }\n\nconst Util = {\n  inherits(childClass, parentClass) {\n    //...\n    childClass.prototype = Object.create(parentClass.prototype);\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  \n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });