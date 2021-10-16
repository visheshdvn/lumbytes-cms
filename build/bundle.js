/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./controllers/blogposts.js":
/*!**********************************!*\
  !*** ./controllers/blogposts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _validators_blogposts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../validators/blogposts */ \"./validators/blogposts.js\");\n\n\n// TODO\n// change published: false to true in router.get \"/\"\n\n\n // validator imports\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_2__.Router)();\n\nvar _PrismaClient = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient(),\n    blogposts = _PrismaClient.blogposts,\n    testdb = _PrismaClient.testdb; // @route   GET api/blogposts\n// @desc    get all published blogposts\n// @access  Public\n\n\nrouter.get(\"/\", /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var blog;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return blogposts.findMany({\n              where: {\n                published: false\n              }\n            });\n\n          case 3:\n            blog = _context.sent;\n            console.log(blog);\n            res.status(\"200\").json(blog);\n            _context.next = 12;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            res.status(500).json({\n              error: \"not found any\"\n            });\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}()); // @route   POST api/blogposts/create\n// @desc    create a blogpost\n// @access  Public\n\nrouter.post(\"/create\", _validators_blogposts__WEBPACK_IMPORTED_MODULE_5__.createBlogpost, /*#__PURE__*/function () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(req, res) {\n    var errors, _req$body, title, slug, metaDescription, excerpt, content, banner, banneralt, minuteRead, featured, topPick, date, blog;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            errors = (0,express_validator__WEBPACK_IMPORTED_MODULE_4__.validationResult)(req);\n\n            if (errors.isEmpty()) {\n              _context2.next = 3;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", res.status(400).json({\n              errors: errors.array()\n            }));\n\n          case 3:\n            _req$body = req.body, title = _req$body.title, slug = _req$body.slug, metaDescription = _req$body.metaDescription, excerpt = _req$body.excerpt, content = _req$body.content, banner = _req$body.banner, banneralt = _req$body.banneralt, minuteRead = _req$body.minuteRead, featured = _req$body.featured, topPick = _req$body.topPick, date = _req$body.date;\n            _context2.prev = 4;\n            _context2.next = 7;\n            return blogposts.create({\n              data: {\n                title: title,\n                slug: slug,\n                metaDescription: metaDescription,\n                excerpt: excerpt,\n                content: content,\n                banner: banner,\n                banneralt: banneralt,\n                minuteRead: minuteRead,\n                featured: featured,\n                topPick: topPick,\n                date: date,\n                created_at: new Date().toISOString(),\n                upadted_at: new Date().toISOString(),\n                published: false\n              }\n            });\n\n          case 7:\n            blog = _context2.sent;\n            res.status(200).json({\n              blogpost: blog,\n              status: \"created\"\n            });\n            _context2.next = 15;\n            break;\n\n          case 11:\n            _context2.prev = 11;\n            _context2.t0 = _context2[\"catch\"](4);\n            console.log(_context2.t0);\n            res.status(500).json({\n              status: \"Error - not created\"\n            });\n\n          case 15:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[4, 11]]);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}()); // @route   POST api/blogposts/create\n// @desc    create a blogpost\n// @access  Public\n\nrouter.patch(\"/:postId\", _validators_blogposts__WEBPACK_IMPORTED_MODULE_5__.updateBlogpost, /*#__PURE__*/function () {\n  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(req, res) {\n    var errors, postId, _req$body2, title, slug, metaDescription, excerpt, content, banner, banneralt, minuteRead, featured, topPick, date, curr_blogpost, updated_post;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            errors = (0,express_validator__WEBPACK_IMPORTED_MODULE_4__.validationResult)(req);\n\n            if (errors.isEmpty()) {\n              _context3.next = 3;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", res.status(400).json({\n              errors: errors.array()\n            }));\n\n          case 3:\n            console.log(req.body);\n            postId = req.params.postId;\n            _req$body2 = req.body, title = _req$body2.title, slug = _req$body2.slug, metaDescription = _req$body2.metaDescription, excerpt = _req$body2.excerpt, content = _req$body2.content, banner = _req$body2.banner, banneralt = _req$body2.banneralt, minuteRead = _req$body2.minuteRead, featured = _req$body2.featured, topPick = _req$body2.topPick, date = _req$body2.date;\n            _context3.prev = 6;\n            _context3.next = 9;\n            return blogposts.findUnique({\n              where: {\n                id: postId\n              }\n            });\n\n          case 9:\n            curr_blogpost = _context3.sent;\n            console.log(curr_blogpost);\n            _context3.next = 13;\n            return blogposts.update({\n              where: {\n                id: postId\n              },\n              data: {\n                title: title === undefined ? curr_blogpost.title : title,\n                slug: slug === undefined ? curr_blogpost.slug : slug,\n                excerpt: excerpt === undefined ? curr_blogpost.excerpt : excerpt,\n                content: content === undefined ? curr_blogpost.content : content,\n                featured: featured === undefined ? curr_blogpost.featured : featured,\n                topPick: topPick === undefined ? curr_blogpost.topPick : topPick,\n                date: date === undefined ? curr_blogpost.date : date,\n                banner: banner === undefined ? curr_blogpost.banner : banner,\n                banneralt: banneralt === undefined ? curr_blogpost.banneralt : banneralt,\n                metaDescription: metaDescription === undefined ? curr_blogpost.metaDescription : metaDescription,\n                minuteRead: minuteRead === undefined ? curr_blogpost.minuteRead : minuteRead\n              }\n            });\n\n          case 13:\n            updated_post = _context3.sent;\n            res.status(200).json({\n              blogpost: updated_post,\n              msg: \"updated\"\n            });\n            _context3.next = 21;\n            break;\n\n          case 17:\n            _context3.prev = 17;\n            _context3.t0 = _context3[\"catch\"](6);\n            console.log(_context3.t0);\n            res.status(500).json({\n              blogpost: null,\n              msg: \"Server Error\"\n            });\n\n          case 21:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[6, 17]]);\n  }));\n\n  return function (_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://lumbytes-cms/./controllers/blogposts.js?");

/***/ }),

/***/ "./controllers/tags.js":
/*!*****************************!*\
  !*** ./controllers/tags.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_2__.Router)();\n\nvar _PrismaClient = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient(),\n    tags = _PrismaClient.tags,\n    testdb = _PrismaClient.testdb; // @route   GET api/tags\n// @desc    get all published tags\n// @access  Public\n\n\nrouter.get(\"/\", /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res) {\n    var tag;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return tags.findMany({\n              where: {\n                published: false\n              }\n            });\n\n          case 3:\n            tag = _context.sent;\n            console.log(tag);\n            res.status(\"200\").json(tag);\n            _context.next = 12;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n            res.status(500).json({\n              error: \"not found any\"\n            });\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://lumbytes-cms/./controllers/tags.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Home = function Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Hello from Lumbytes!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return console.log(\"Hi\");\n    }\n  }, \"Click me\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://lumbytes-cms/./src/components/Home.js?");

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home */ \"./src/components/Home.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n  return \"\\n  <html>\\n  <head></head>\\n  <body>\\n    <div id=\\\"root\\\">\".concat(content, \"</div>\\n    <script src=\\\"bundle.js\\\"></script>\\n  </body>\\n  </html>\");\n});\n\n//# sourceURL=webpack://lumbytes-cms/./src/helpers/renderer.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/renderer */ \"./src/helpers/renderer.js\");\n/* harmony import */ var _controllers_blogposts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controllers/blogposts */ \"./controllers/blogposts.js\");\n/* harmony import */ var _controllers_tags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/tags */ \"./controllers/tags.js\");\n\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config(); // custom components\n\n\n // import routes\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // init middleware\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default().json());\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"public\")); // define routes\n\napp.get(\"/\", function (req, res, next) {\n  res.status(200).send((0,_helpers_renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n});\napp.use(\"/api/blogposts\", _controllers_blogposts__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\napp.use(\"/api/tags\", _controllers_tags__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\napp.use(function (req, res) {\n  res.status(404).json({\n    status: \"404 - not found\"\n  });\n});\nvar PORT = process.env.PORT || 2000;\napp.listen(PORT, function () {\n  console.log(\"Listening on port\", PORT);\n});\n\n//# sourceURL=webpack://lumbytes-cms/./src/server.js?");

/***/ }),

/***/ "./validators/blogposts.js":
/*!*********************************!*\
  !*** ./validators/blogposts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBlogpost\": () => (/* binding */ createBlogpost),\n/* harmony export */   \"updateBlogpost\": () => (/* binding */ updateBlogpost)\n/* harmony export */ });\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express-validator */ \"express-validator\");\n/* harmony import */ var express_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express_validator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _PrismaClient = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient(),\n    blogposts = _PrismaClient.blogposts; // DRY checks\n\n\nvar commonInCreateAndUpdate = [(0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)(\"metaDescription\", \"meta descrption should be a valid string\").optional({\n  checkFalsy: true\n}).isString().custom(function (value) {\n  return notEmpty(value);\n}), (0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)(\"metaDescription\", \"meta descrption should be under 201 characters\").optional({\n  checkFalsy: true\n}).isLength({\n  max: 200\n}), (0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)(\"excerpt\", \"excerpt should be a valid string\").optional({\n  checkFalsy: true\n}).isString().custom(function (value) {\n  return notEmpty(value);\n}), (0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)(\"excerpt\", \"excerpt should be under 150 characters\").optional({\n  checkFalsy: true\n}).isLength({\n  max: 150\n}), (0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)(\"minuteRead\", \"minute read should be an Integer\").optional().not().isString(), (0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)(\"minuteRead\", \"minute read should be greater tham 0\").optional().isInt({\n  min: 1\n}), (0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)(\"topPick\", \"topPick should be boolean\").optional().not().isString().not().isFloat().isBoolean(), (0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)(\"featured\", \"featured should be boolean\").optional().not().isString().not().isFloat().isBoolean(), (0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)(\"date\", \"date should be iso string\").optional().isISO8601().custom(function (date) {\n  return /\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z/.test(date);\n})];\n\nvar notEmpty = function notEmpty(value) {\n  if (value.trim() === \"\") {\n    return Promise.reject(\"value cannot be empty or only spaces \");\n  } else {\n    return Promise.resolve(\"value is valid.\");\n  }\n}; // creating a blogpost\n\n\nvar createBlogpost = [(0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)(\"title\", \"title should be a non empty string\").isString().custom(function (title) {\n  return notEmpty(title);\n}), (0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)(\"slug\", \"slug should be a valid string\").isString().custom(function (slug) {\n  return notEmpty(slug);\n}).custom(function (slug) {\n  return blogposts.findMany({\n    where: {\n      slug: slug\n    }\n  }).then(function (blogpost) {\n    if (blogpost.length > 0) {\n      return Promise.reject(\"slug should be unique\");\n    } else {\n      return Promise.resolve(\"slug valid\");\n    }\n  });\n})].concat(commonInCreateAndUpdate); // update blogpost validation\n\nvar updateBlogpost = [(0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)(\"title\", \"title should be a string\").optional().isString().custom(function (title) {\n  return notEmpty(title);\n}), (0,express_validator__WEBPACK_IMPORTED_MODULE_0__.check)(\"slug\", \"slug should be a valid string\").optional().isString().custom(function (slug) {\n  return notEmpty(slug);\n}).custom(function (slug) {\n  return blogposts.findMany({\n    where: {\n      slug: slug\n    }\n  }).then(function (blogpost) {\n    if (blogpost.length > 0) {\n      return Promise.reject(\"slug should be unique\");\n    } else {\n      return Promise.resolve(\"slug valid\");\n    }\n  });\n})].concat(commonInCreateAndUpdate);\n\n\n//# sourceURL=webpack://lumbytes-cms/./validators/blogposts.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("express-validator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.js");
/******/ 	
/******/ })()
;