/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Food.ts":
/*!*****************************!*\
  !*** ./src/classes/Food.ts ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Food = void 0;\r\nvar Square_1 = __webpack_require__(/*! ./Square */ \"./src/classes/Square.ts\");\r\n// 食物\r\nvar Food = /** @class */ (function (_super) {\r\n    __extends(Food, _super);\r\n    function Food() {\r\n        return _super.call(this, [Math.ceil(Math.random() * 59), Math.ceil(Math.random() * 59)], Food.color) || this;\r\n    }\r\n    Food.color = \"green\";\r\n    return Food;\r\n}(Square_1.Square));\r\nexports.Food = Food;\r\n\n\n//# sourceURL=webpack://ts/./src/classes/Food.ts?");

/***/ }),

/***/ "./src/classes/Pool.ts":
/*!*****************************!*\
  !*** ./src/classes/Pool.ts ***!
  \*****************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Pool = /** @class */ (function () {\r\n    function Pool() {\r\n        this.poolElem = document.querySelector(\"#view-content\");\r\n        this.overlayElem = document.querySelector(\"#overlay\");\r\n    }\r\n    Pool.prototype.appendSquares = function (child) {\r\n        this.poolElem.appendChild(child);\r\n    };\r\n    Pool.prototype.ifOutside = function (pos) {\r\n        var flag = false;\r\n        var x = pos[0];\r\n        var y = pos[1];\r\n        if (x < 0 || x >= 60 || y < 0 || y >= 60) {\r\n            flag = true;\r\n        }\r\n        return flag;\r\n    };\r\n    return Pool;\r\n}());\r\nexports.default = Pool;\r\n\n\n//# sourceURL=webpack://ts/./src/classes/Pool.ts?");

/***/ }),

/***/ "./src/classes/Snake.ts":
/*!******************************!*\
  !*** ./src/classes/Snake.ts ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Square_1 = __webpack_require__(/*! ./Square */ \"./src/classes/Square.ts\");\r\nvar Food_1 = __webpack_require__(/*! ./Food */ \"./src/classes/Food.ts\");\r\nvar Pool_1 = __webpack_require__(/*! ./Pool */ \"./src/classes/Pool.ts\");\r\n// 蛇\r\nvar Snake = /** @class */ (function (_super) {\r\n    __extends(Snake, _super);\r\n    function Snake(initPos, direction) {\r\n        var _this = _super.call(this) || this;\r\n        _this.direction = \"right\";\r\n        _this.direction = direction;\r\n        _this.tail = new Square_1.Square([0, 0], \"red\");\r\n        var cent = new Square_1.Square([1, 0], \"red\");\r\n        _this.tail.prev = cent;\r\n        _this.head = new Square_1.Square([2, 0], \"white\");\r\n        cent.prev = _this.head;\r\n        cent.next = _this.tail;\r\n        _this.head.next = cent;\r\n        // 蛇身初始长度为3\r\n        _this.body = [_this.tail, cent, _this.head];\r\n        return _this;\r\n    }\r\n    // 设置当前蛇的食物的位置，用于判断食物有没有被吃掉\r\n    Snake.prototype.setFood = function (food) {\r\n        this.food = food;\r\n    };\r\n    // 修改蛇的走向\r\n    Snake.prototype.setDirection = function (direction) {\r\n        /**\r\n         * 蛇身转向不能逆向转，即\r\n         * 左项不能往右转\r\n         * 右项不能往左转\r\n         * 上向不能向下转\r\n         * 下向不能向上转\r\n         */\r\n        var dict = {\r\n            \"left\": \"right\",\r\n            \"right\": \"left\",\r\n            \"up\": \"down\",\r\n            \"down\": \"up\"\r\n        };\r\n        if (this.direction == dict[direction]) {\r\n            return;\r\n        }\r\n        // 如果转向与当前方向相同，则加速\r\n        if (this.direction == direction) {\r\n            this.move();\r\n        }\r\n        this.direction = direction;\r\n    };\r\n    /**\r\n     * 重置链表的关系，\r\n     * 尾部变头部，头部变老二，原尾部的prev变为新尾部\r\n     */\r\n    Snake.prototype.modifyRelationship = function () {\r\n        // 先将蛇头颜色置为和蛇身一样\r\n        this.head.setColor(\"red\");\r\n        // 保存新蛇尾为老蛇尾的下个位置\r\n        var newTail = this.tail.prev;\r\n        // 将老蛇尾的下一个位置指向空，因为此时他已经变为新蛇头\r\n        this.tail.prev = null;\r\n        // 将新蛇尾的前一个位置置空\r\n        newTail.next = null;\r\n        // 将老蛇尾（即新蛇头）的前一个位置指向老蛇头\r\n        this.tail.next = this.head;\r\n        // 将老蛇头的下一个位置指向新蛇头（即老蛇头）\r\n        this.head.prev = this.tail;\r\n        this.head = this.tail;\r\n        this.tail = newTail;\r\n        // 将新蛇头置为白色\r\n        this.head.setColor(\"white\");\r\n    };\r\n    // 移动\r\n    Snake.prototype.move = function () {\r\n        var headPos = this.head.getPosition();\r\n        var newPos;\r\n        var newPosDict = {\r\n            \"left\": [headPos[0] - 1, headPos[1]],\r\n            \"right\": [headPos[0] + 1, headPos[1]],\r\n            \"up\": [headPos[0], headPos[1] - 1],\r\n            \"down\": [headPos[0], headPos[1] + 1]\r\n        };\r\n        newPos = newPosDict[this.direction];\r\n        // 判断是否已出界或吃到了自己\r\n        if (this.ifOutside(newPos) || this.ifCoveredSelfBody(newPos)) {\r\n            this.die();\r\n            return;\r\n        }\r\n        // 判断食物位置与蛇头下一个位置是否相同\r\n        var foodPos = this.food.getPosition();\r\n        if (foodPos[0] == newPos[0] && foodPos[1] == newPos[1]) {\r\n            this.eat();\r\n            return;\r\n        }\r\n        this.tail.setPosition(newPos);\r\n        // 修改链表的关系\r\n        this.modifyRelationship();\r\n    };\r\n    // 吃\r\n    Snake.prototype.eat = function () {\r\n        // 将蛇头变为蛇身，改成蛇身的颜色\r\n        this.head.setColor(\"red\");\r\n        // 将食物变为蛇头，改成蛇头的颜色\r\n        this.food.setColor(\"white\");\r\n        // 老蛇头的前方指向食物\r\n        this.head.prev = this.food;\r\n        // 食物：即新蛇头的后方指向老蛇头\r\n        this.food.next = this.head;\r\n        // 将新蛇头指向食物\r\n        this.head = this.food;\r\n        // 将吃掉的食物算进身体内\r\n        this.body.push(this.food);\r\n        // 产生个新食物\r\n        this.food = new Food_1.Food();\r\n    };\r\n    // 死\r\n    Snake.prototype.die = function () {\r\n        alert(\"game over\");\r\n        window.onerror(\"game over\");\r\n    };\r\n    // 新位置是否在蛇身上\r\n    Snake.prototype.ifCoveredSelfBody = function (pos) {\r\n        var flag = false;\r\n        for (var i = 0; i < this.body.length; i++) {\r\n            var sqPos = this.body[i].getPosition();\r\n            if (sqPos[0] == pos[0] && sqPos[1] == pos[1]) {\r\n                flag = true;\r\n                break;\r\n            }\r\n        }\r\n        return flag;\r\n    };\r\n    return Snake;\r\n}(Pool_1.default));\r\nexports.default = Snake;\r\n\n\n//# sourceURL=webpack://ts/./src/classes/Snake.ts?");

/***/ }),

/***/ "./src/classes/Square.ts":
/*!*******************************!*\
  !*** ./src/classes/Square.ts ***!
  \*******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Square = void 0;\r\nvar Pool_1 = __webpack_require__(/*! ./Pool */ \"./src/classes/Pool.ts\");\r\n// 格子\r\nvar Square = /** @class */ (function (_super) {\r\n    __extends(Square, _super);\r\n    function Square(pos, color) {\r\n        var _this = _super.call(this) || this;\r\n        _this.width = 10;\r\n        _this.height = 10;\r\n        _this.pos = pos;\r\n        _this.x = _this.pos[0] * _this.width;\r\n        _this.y = _this.pos[1] * _this.height;\r\n        _this.color = color || \"red\";\r\n        _this.createElem();\r\n        return _this;\r\n    }\r\n    // 创建dom\r\n    Square.prototype.createElem = function () {\r\n        this.dom = document.createElement(\"i\");\r\n        this.dom.setAttribute(\"style\", \"background-color:\" + this.color + \";border-radius:100%;position:absolute;\");\r\n        this.dom.style.width = this.width + \"px\";\r\n        this.dom.style.height = this.height + \"px\";\r\n        this.dom.style.left = this.x + \"px\";\r\n        this.dom.style.top = this.y + \"px\";\r\n        this.appendSquares(this.dom);\r\n    };\r\n    // 获取生成的dom\r\n    Square.prototype.getElem = function () {\r\n        return this.dom;\r\n    };\r\n    // 获取位置，用来避免生成食物时，生成在蛇身上\r\n    Square.prototype.getPosition = function () {\r\n        return this.pos;\r\n    };\r\n    // 设置格子的位置\r\n    Square.prototype.setPosition = function (pos) {\r\n        this.pos = pos;\r\n        this.x = this.pos[0] * this.width;\r\n        this.y = this.pos[1] * this.height;\r\n        this.dom.style.left = this.x + \"px\";\r\n        this.dom.style.top = this.y + \"px\";\r\n    };\r\n    // 重置格子的颜色\r\n    Square.prototype.setColor = function (color) {\r\n        this.dom.style.backgroundColor = color;\r\n    };\r\n    return Square;\r\n}(Pool_1.default));\r\nexports.Square = Square;\r\n\n\n//# sourceURL=webpack://ts/./src/classes/Square.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar Snake_1 = __webpack_require__(/*! ./classes/Snake */ \"./src/classes/Snake.ts\");\r\nvar Food_1 = __webpack_require__(/*! ./classes/Food */ \"./src/classes/Food.ts\");\r\nvar snake = new Snake_1.default([0, 0], \"right\");\r\nvar food = new Food_1.Food();\r\nsnake.setFood(food);\r\nvar intval = setInterval(function () {\r\n    snake.move();\r\n}, 500);\r\ndocument.onkeydown = function (e) {\r\n    var codeMap = {\r\n        \"37\": \"left\",\r\n        \"38\": \"up\",\r\n        \"39\": \"right\",\r\n        \"40\": \"down\"\r\n    };\r\n    snake.setDirection(codeMap[e.keyCode]);\r\n};\r\nwindow.onerror = function (message) {\r\n    snake = null;\r\n    clearInterval(intval);\r\n};\r\n\n\n//# sourceURL=webpack://ts/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;