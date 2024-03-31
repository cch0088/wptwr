(this["webpackJsonpwptwr"] = this["webpackJsonpwptwr"] || []).push([["main"],{

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Layout */ "./src/components/Layout.jsx");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Main */ "./src/components/Main.jsx");
/* harmony import */ var _components_NoPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NoPage */ "./src/components/NoPage.jsx");
/* harmony import */ var _components_PasswordReset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PasswordReset */ "./src/components/PasswordReset.jsx");
/* harmony import */ var _components_forum_ForumSite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/forum/ForumSite */ "./src/components/forum/ForumSite.jsx");
/* harmony import */ var _components_forum_ForumTopicList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/forum/ForumTopicList */ "./src/components/forum/ForumTopicList.jsx");
/* harmony import */ var _components_forum_ForumTopic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/forum/ForumTopic */ "./src/components/forum/ForumTopic.jsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/apolloClient */ "./src/lib/apolloClient.tsx");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hooks/useAuth */ "./src/hooks/useAuth.tsx");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/App.js";














function App() {
  const currentUrl = window.location.href;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_11__["ApolloProvider"], {
    client: _lib_apolloClient__WEBPACK_IMPORTED_MODULE_12__["client"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_13__["AuthProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Routes"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: _config__WEBPACK_IMPORTED_MODULE_2__["WP_ROOT"],
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 48
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 37
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "set-password",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PasswordReset__WEBPACK_IMPORTED_MODULE_7__["default"], {
      currentUrl: currentUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 51
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: _config__WEBPACK_IMPORTED_MODULE_2__["UI_FORUM"],
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forum_ForumSite__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 57
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: `${_config__WEBPACK_IMPORTED_MODULE_2__["UI_FORUM_THREADS"]}/:fromUrlCategoryId`,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forum_ForumTopicList__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 83
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: `${_config__WEBPACK_IMPORTED_MODULE_2__["UI_FORUM_TOPIC"]}/:fromUrlPostId`,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_forum_ForumTopic__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 77
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NoPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 40
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }))))));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Footer.jsx":
/*!***********************************!*\
  !*** ./src/components/Footer.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo.svg */ "./src/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logotext_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logotext.svg */ "./src/logotext.svg");
/* harmony import */ var _logotext_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logotext_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/Footer.jsx";



function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "logo-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _logo_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 35
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "logotext-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _logotext_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Logo Text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 39
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "footer-span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 43
    }
  }, "A privacy focused travel community site.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-button",
    href: "contact-page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Contact"));
}
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo.svg */ "./src/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logotext_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logotext.svg */ "./src/logotext.svg");
/* harmony import */ var _logotext_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logotext_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/validation */ "./src/lib/validation.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/config.js");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/Header.jsx";






function Header() {
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useNavigate"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "branding",
    onClick: () => {
      navigate(Object(_lib_validation__WEBPACK_IMPORTED_MODULE_4__["getRoot"])(_config__WEBPACK_IMPORTED_MODULE_5__["WP_ROOT"]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _logo_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 24
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "logotext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _logotext_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Logo Text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 28
    }
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Layout.jsx":
/*!***********************************!*\
  !*** ./src/components/Layout.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header.jsx");
/* harmony import */ var _UserControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserControl */ "./src/components/UserControl.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.jsx");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/Layout.jsx";





const Layout = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "head-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "head-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "content-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Outlet"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "footer-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Main.jsx":
/*!*********************************!*\
  !*** ./src/components/Main.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainMenu */ "./src/components/MainMenu.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.js");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/Main.jsx";



function Main() {
  const menuRoute = _config__WEBPACK_IMPORTED_MODULE_2__["API_PAGES"] + "main-menu";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "heading-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 41
    }
  }, "Website is under construction")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    route: menuRoute,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/MainMenu.jsx":
/*!*************************************!*\
  !*** ./src/components/MainMenu.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_PageServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/PageServices */ "./src/features/PageServices.jsx");
/* harmony import */ var _features_ContentSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/ContentSlice */ "./src/features/ContentSlice.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./src/config.js");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/MainMenu.jsx";





function MainMenu({
  route
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const menu = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.content.value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_features_PageServices__WEBPACK_IMPORTED_MODULE_2__["getContent"])(route).then(object => {
      dispatch(Object(_features_ContentSlice__WEBPACK_IMPORTED_MODULE_3__["pushContent"])(object));
    });
  }, [dispatch, route]);
  const regex = /(<([^>]+)>)/gi;
  const menuData = menu[0].content.rendered.replace(regex, '').split(/\s+/).filter(i => i !== '');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "card-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, menuData.map((str, i) => {
    const [name, link, image] = str.split(':');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: i,
      href: link,
      className: "card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "card-photo",
      alt: name,
      src: `${_config__WEBPACK_IMPORTED_MODULE_4__["WP_UPLOADS"]}/${image}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    }, name));
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (MainMenu);

/***/ }),

/***/ "./src/components/Modal.jsx":
/*!**********************************!*\
  !*** ./src/components/Modal.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_ModalSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/ModalSlice */ "./src/features/ModalSlice.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/Modal.jsx";



function Modal({
  children
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const handleClose = e => {
    if (e.target.className === "modal-bg") {
      dispatch(Object(_features_ModalSlice__WEBPACK_IMPORTED_MODULE_1__["closeModal"])());
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-bg",
    onClick: e => handleClose(e),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "modal-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, children));
}
;
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/NoPage.jsx":
/*!***********************************!*\
  !*** ./src/components/NoPage.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/NoPage.jsx";

function NoPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, "Resource not found");
}
/* harmony default export */ __webpack_exports__["default"] = (NoPage);

/***/ }),

/***/ "./src/components/PasswordReset.jsx":
/*!******************************************!*\
  !*** ./src/components/PasswordReset.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/validation */ "./src/lib/validation.jsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal.jsx");
/* harmony import */ var _forms_PasswordForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/PasswordForm */ "./src/components/forms/PasswordForm.jsx");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/PasswordReset.jsx";






function PasswordReset({
  currentUrl
}) {
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"])();
  const [key, setKey] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (currentUrl && currentUrl.includes('set-password')) {
      const searchUrl = new URLSearchParams(currentUrl);
      const values = [];
      searchUrl.forEach(x => values.push(x));
      setKey(values[0]);
      setUser(values[1]);
    } else {
      navigate(Object(_lib_validation__WEBPACK_IMPORTED_MODULE_3__["getRoot"])(_config__WEBPACK_IMPORTED_MODULE_1__["WP_ROOT"]));
    }
  }, [currentUrl, navigate]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_PasswordForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      pkey: key,
      login: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 31
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (PasswordReset);

/***/ }),

/***/ "./src/components/UserControl.jsx":
/*!****************************************!*\
  !*** ./src/components/UserControl.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_ModalSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/ModalSlice */ "./src/features/ModalSlice.jsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal.jsx");
/* harmony import */ var _forms_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/LoginForm */ "./src/components/forms/LoginForm.jsx");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useAuth */ "./src/hooks/useAuth.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _forms_RegisterForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/RegisterForm */ "./src/components/forms/RegisterForm.jsx");
/* harmony import */ var _forms_ConfirmForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/ConfirmForm */ "./src/components/forms/ConfirmForm.jsx");
/* harmony import */ var _forms_ResetByEmailForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms/ResetByEmailForm */ "./src/components/forms/ResetByEmailForm.jsx");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../gql */ "./src/gql.js");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/UserControl.jsx";












function UserControl() {
  const modal = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.modal.value);
  const [form, setForm] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    loggedIn,
    loading
  } = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const [logOut] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(_gql__WEBPACK_IMPORTED_MODULE_11__["LOG_OUT"], {
    refetchQueries: [{
      query: _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__["GET_USER"]
    }]
  });
  const openForm = i => {
    setForm(i);
    dispatch(Object(_features_ModalSlice__WEBPACK_IMPORTED_MODULE_2__["openModal"])());
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "usercontrol",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, form === 0 && modal.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_ConfirmForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 61
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 43
    }
  }), form === 1 && modal.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_LoginForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setForm: setForm,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 61
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 43
    }
  }), form === 2 && modal.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_RegisterForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setForm: setForm,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 61
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 43
    }
  }), form === 3 && modal.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_ResetByEmailForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
      setForm: setForm,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 61
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 43
    }
  }), !loggedIn && !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "userbutton",
    onClick: () => {
      openForm(2);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, "\uD83C\uDD95"), " Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "userbutton",
    onClick: () => {
      openForm(1);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, "\uD83D\uDC64"), " Log In")), loggedIn && !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "userbutton",
    href: _config__WEBPACK_IMPORTED_MODULE_7__["UI_ACCOUNT"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, "\uD83D\uDC64"), " Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "userbutton",
    onClick: () => {
      logOut();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "door",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, "\uD83D\uDEAA"), " Log Out")), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "userbutton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "hourglass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, "\u23F3"), " Loading...")));
}
/* harmony default export */ __webpack_exports__["default"] = (UserControl);

/***/ }),

/***/ "./src/components/forms/ConfirmForm.jsx":
/*!**********************************************!*\
  !*** ./src/components/forms/ConfirmForm.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_ModalSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/ModalSlice */ "./src/features/ModalSlice.jsx");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/forms/ConfirmForm.jsx";



function ConfirmForm() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "site-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "Please check your e-mail for next steps."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "button",
    type: "button",
    name: "ok",
    value: "OK",
    onClick: () => {
      dispatch(Object(_features_ModalSlice__WEBPACK_IMPORTED_MODULE_2__["closeModal"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (ConfirmForm);

/***/ }),

/***/ "./src/components/forms/LoginForm.jsx":
/*!********************************************!*\
  !*** ./src/components/forms/LoginForm.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useAuth */ "./src/hooks/useAuth.tsx");
/* harmony import */ var _features_ModalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/ModalSlice */ "./src/features/ModalSlice.jsx");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../gql */ "./src/gql.js");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/forms/LoginForm.jsx";






function LoginForm({
  setForm
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const [message, setMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [username, setUsername] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [logIn, {
    loading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_gql__WEBPACK_IMPORTED_MODULE_5__["LOG_IN"], {
    refetchQueries: [{
      query: _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__["GET_USER"]
    }]
  });
  function handleLogin(e) {
    e.preventDefault();
    if (username.length > 0 && password.length > 0) {
      logIn({
        variables: {
          login: username,
          password
        }
      }).then(_status => dispatch(Object(_features_ModalSlice__WEBPACK_IMPORTED_MODULE_4__["closeModal"])())).catch(_error => setMessage('Invalid username or password!'));
    } else {
      setMessage('Missing username or password.');
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "site-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "SIGN IN"), message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 22
    }
  }, message) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "field-login",
    type: "text",
    name: "username",
    value: username,
    onChange: e => {
      setUsername(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "field-login",
    type: "password",
    name: "password",
    value: password,
    onChange: e => {
      setPassword(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "link-label",
    onClick: () => {
      setForm(3);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "Forgot Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "button",
    type: "submit",
    name: "login",
    value: "Sign In",
    onClick: e => {
      handleLogin(e);
    },
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "link-label",
    onClick: () => {
      setForm(2);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, "Create Account"));
}
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/components/forms/PasswordForm.jsx":
/*!***********************************************!*\
  !*** ./src/components/forms/PasswordForm.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_password_strength_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-password-strength-bar */ "./node_modules/react-password-strength-bar/dist/index.js");
/* harmony import */ var react_password_strength_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_password_strength_bar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/validation */ "./src/lib/validation.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../gql */ "./src/gql.js");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/forms/PasswordForm.jsx";







function PasswordForm({
  pkey,
  login
}) {
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useNavigate"])();
  const [message, setMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [passwordConfirm, setPasswordConfirm] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [resetPassword, {
    loading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_gql__WEBPACK_IMPORTED_MODULE_6__["RESET_PASSWORD"]);
  function handleSubmit(e) {
    e.preventDefault();
    if (password.length > 0 && Object(_lib_validation__WEBPACK_IMPORTED_MODULE_3__["validatePassword"])(password, passwordConfirm)) {
      resetPassword({
        variables: {
          key: pkey,
          login,
          password
        }
      }).then(_status => navigate(Object(_lib_validation__WEBPACK_IMPORTED_MODULE_3__["getRoot"])(_config__WEBPACK_IMPORTED_MODULE_5__["WP_ROOT"]))).catch(_error => setMessage('Error resetting password.'));
    } else if (!Object(_lib_validation__WEBPACK_IMPORTED_MODULE_3__["validatePassword"])(password, passwordConfirm)) {
      setMessage('Passwords do not match.');
    } else {
      setMessage('Check that all fields are filled.');
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "site-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "PASSWORD RESET"), message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 22
    }
  }, message) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "New password for ", login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "field-login",
    type: "password",
    name: "password",
    value: password,
    onChange: e => {
      setPassword(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Confirm Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "field-login",
    type: "password",
    name: "password",
    value: passwordConfirm,
    onChange: e => {
      setPasswordConfirm(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_password_strength_bar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "password-bar",
    password: password,
    scoreWords: ['Weak', 'Acceptable', 'Good', 'Strong', 'Excellent'],
    shortScoreWord: "Weak",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "button",
    type: "submit",
    name: "reset",
    value: "Reset",
    onClick: e => {
      handleSubmit(e);
    },
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "link-label",
    onClick: () => {
      navigate(Object(_lib_validation__WEBPACK_IMPORTED_MODULE_3__["getRoot"])(_config__WEBPACK_IMPORTED_MODULE_5__["WP_ROOT"]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "Cancel"));
}
/* harmony default export */ __webpack_exports__["default"] = (PasswordForm);

/***/ }),

/***/ "./src/components/forms/RegisterForm.jsx":
/*!***********************************************!*\
  !*** ./src/components/forms/RegisterForm.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_password_strength_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-password-strength-bar */ "./node_modules/react-password-strength-bar/dist/index.js");
/* harmony import */ var react_password_strength_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_password_strength_bar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/validation */ "./src/lib/validation.jsx");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../gql */ "./src/gql.js");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/forms/RegisterForm.jsx";





function RegisterForm({
  setForm
}) {
  const [message, setMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [username, setUsername] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [isHuman, setIsHuman] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [register, {
    loading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_gql__WEBPACK_IMPORTED_MODULE_4__["REGISTER_USER"]);
  function handleSubmit(e) {
    e.preventDefault();
    if (isHuman && username.length > 0 && password.length > 0 && Object(_lib_validation__WEBPACK_IMPORTED_MODULE_3__["validateEmail"])(email)) {
      register({
        variables: {
          username,
          email,
          password
        }
      }).then(_status => setForm(0)).catch(_error => setMessage('Username or e-mail already taken.'));
    } else if (!Object(_lib_validation__WEBPACK_IMPORTED_MODULE_3__["validateEmail"])(email)) {
      setMessage('Invalid e-mail provided.');
    } else {
      setMessage('Check that all fields are filled.');
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "site-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "SIGN UP"), message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 22
    }
  }, message) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "field-login",
    type: "text",
    name: "username",
    value: username,
    onChange: e => {
      setUsername(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "E-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "field-login",
    type: "email",
    name: "email",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "field-login",
    type: "password",
    name: "password",
    value: password,
    onChange: e => {
      setPassword(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_password_strength_bar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "password-bar",
    password: password,
    scoreWords: ['Weak', 'Acceptable', 'Good', 'Strong', 'Excellent'],
    shortScoreWord: "Weak",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, "I'm not a bot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "human-check",
    type: "checkbox",
    name: "human",
    value: "human",
    onChange: e => setIsHuman(e.target.checked),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "button",
    type: "submit",
    name: "register",
    value: "Sign Up",
    disabled: !isHuman || loading,
    onClick: e => {
      handleSubmit(e);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ }),

/***/ "./src/components/forms/ResetByEmailForm.jsx":
/*!***************************************************!*\
  !*** ./src/components/forms/ResetByEmailForm.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/validation */ "./src/lib/validation.jsx");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gql */ "./src/gql.js");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/forms/ResetByEmailForm.jsx";




function ResetByEmailForm({
  setForm
}) {
  const [message, setMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [isHuman, setIsHuman] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [sendPasswordResetEmail, {
    loading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_gql__WEBPACK_IMPORTED_MODULE_3__["SEND_PASSWORD_RESET_EMAIL"]);
  function handleSubmit(e) {
    e.preventDefault();
    if (Object(_lib_validation__WEBPACK_IMPORTED_MODULE_2__["validateEmail"])(email)) {
      sendPasswordResetEmail({
        variables: {
          username: email
        }
      }).then(_status => setForm(0)).catch(_error => setMessage('E-mail could not be sent.'));
    } else if (!Object(_lib_validation__WEBPACK_IMPORTED_MODULE_2__["validateEmail"])(email)) {
      setMessage('Invalid e-mail provided.');
    } else {
      setMessage('Check that all fields are filled.');
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "site-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "PASSWORD RESET"), message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 22
    }
  }, message) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "E-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "field-login",
    type: "email",
    name: "email",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "I'm not a bot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "human-check",
    type: "checkbox",
    name: "human",
    value: "human",
    onChange: e => setIsHuman(e.target.checked),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "button",
    type: "submit",
    name: "send",
    value: "Request",
    onClick: e => {
      handleSubmit(e);
    },
    disabled: !isHuman || loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }));
}
/* harmony default export */ __webpack_exports__["default"] = (ResetByEmailForm);

/***/ }),

/***/ "./src/components/forum/ForumListContainer.jsx":
/*!*****************************************************!*\
  !*** ./src/components/forum/ForumListContainer.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/forum/ForumListContainer.jsx";

const ForumListContainer = ({
  topics,
  headings,
  handleNavigation
}) => topics && headings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-list-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}, headings.map(header => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "forum-section",
    key: header.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "forum-category",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, header.name), topics.filter(item => item.parent === header.id).map(i => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i.id,
      className: "forum-topic",
      onClick: () => handleNavigation(i.id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "bubble",
      role: "img",
      "aria-label": "topic",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 41
      }
    }, "\uD83D\uDDE8\uFE0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "forum-topic-node",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "forum-topic-name",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 45
      }
    }, i.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "forum-topic-description",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 45
      }
    }, i.description)));
  }));
}));
/* harmony default export */ __webpack_exports__["default"] = (ForumListContainer);

/***/ }),

/***/ "./src/components/forum/ForumSite.jsx":
/*!********************************************!*\
  !*** ./src/components/forum/ForumSite.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_PageServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/PageServices */ "./src/features/PageServices.jsx");
/* harmony import */ var _features_ForumSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/ForumSlice */ "./src/features/ForumSlice.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _ForumListContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ForumListContainer */ "./src/components/forum/ForumListContainer.jsx");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/forum/ForumSite.jsx";








function ForumSite() {
  const route = _config__WEBPACK_IMPORTED_MODULE_1__["API_CATEGORIES"];
  const categories = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.forum.value);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useNavigate"])();
  const headings = [];
  const topics = [];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_features_PageServices__WEBPACK_IMPORTED_MODULE_3__["getContent"])(route).then(object => {
      dispatch(Object(_features_ForumSlice__WEBPACK_IMPORTED_MODULE_4__["pushForumContent"])(object));
    });
  }, [dispatch, route]);
  categories.forEach(item => {
    if (item.parent > 0) {
      topics.push({
        id: item.id,
        name: item.name,
        slug: item.slug,
        description: item.description,
        link: item.link,
        parent: item.parent
      });
    } else if (item.slug !== "all") {
      headings.push({
        id: item.id,
        name: item.description
      });
    }
  });
  const handleNavigation = categoryId => {
    navigate(`${_config__WEBPACK_IMPORTED_MODULE_1__["UI_FORUM_THREADS"]}/:${categoryId}`);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ForumListContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleNavigation: handleNavigation,
    headings: headings,
    topics: topics,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (ForumSite);

/***/ }),

/***/ "./src/components/forum/ForumTopic.jsx":
/*!*********************************************!*\
  !*** ./src/components/forum/ForumTopic.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gql */ "./src/gql.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _ForumTopicContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ForumTopicContainer */ "./src/components/forum/ForumTopicContainer.jsx");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useAuth */ "./src/hooks/useAuth.tsx");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/forum/ForumTopic.jsx";







function ForumTopic() {
  const {
    loggedIn
  } = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    fromUrlPostId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const postId = Number(fromUrlPostId.replace(':', ''));
  const [replyOpen, setReplyOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [content, setContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [title, setTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [topic, setTopic] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    loading: postLoading,
    error,
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_gql__WEBPACK_IMPORTED_MODULE_3__["FORUM_GET_POSTS"], {
    variables: {
      postId
    }
  });
  const [sendReply, {
    loading: replyLoading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_gql__WEBPACK_IMPORTED_MODULE_3__["FORUM_REPLY"]);
  const renderHTML = content => {
    return {
      __html: content
    };
  };
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useNavigate"])();
  const submitReply = () => {
    sendReply({
      variables: {
        commentOn: postId,
        content
      }
    }).then(!replyLoading && navigate(0));
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (error) {
      navigate(_config__WEBPACK_IMPORTED_MODULE_4__["UI_FORUM"]);
    } else {
      data && setTopic(data.posts.nodes[0]);
    }
    // eslint-disable-next-line
  }, [error, data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ForumTopicContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    postLoading: postLoading,
    topic: topic,
    error: error,
    replyOpen: replyOpen,
    content: content,
    replyLoading: replyLoading,
    title: title,
    setTitle: setTitle,
    setReplyOpen: setReplyOpen,
    setContent: setContent,
    submitReply: submitReply,
    replyDisabled: !loggedIn,
    renderHTML: renderHTML,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (ForumTopic);

/***/ }),

/***/ "./src/components/forum/ForumTopicContainer.jsx":
/*!******************************************************!*\
  !*** ./src/components/forum/ForumTopicContainer.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/validation */ "./src/lib/validation.jsx");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/forum/ForumTopicContainer.jsx";




const ForumTopicContainer = ({
  postLoading,
  topic,
  error,
  replyOpen,
  setReplyOpen,
  replyLoading,
  replyDisabled,
  submitReply,
  renderHTML,
  setContent,
  content
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-list-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, postLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-section",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 17
  }
}, "Loading...")), topic && !error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-section",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 17
  }
}, topic.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-post",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 17
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-post-info",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 21
  }
}, topic.author.node.name, " on ", Object(_lib_validation__WEBPACK_IMPORTED_MODULE_3__["getDateFromString"])(topic.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  dangerouslySetInnerHTML: renderHTML(topic.content),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 21
  }
})), topic.comments.edges.map(post => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  key: post.node.databaseId,
  className: "forum-post",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 21
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-post-info",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 25
  }
}, post.node.author.node.name, " on ", Object(_lib_validation__WEBPACK_IMPORTED_MODULE_3__["getDateFromString"])(post.node.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  dangerouslySetInnerHTML: renderHTML(post.node.content),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 25
  }
})))), !replyOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  disabled: replyDisabled,
  className: "forum-button",
  onClick: () => setReplyOpen(true),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 19
  }
}, "Add reply") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  id: "text-editor-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 21
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_quill__WEBPACK_IMPORTED_MODULE_1___default.a, {
  theme: "snow",
  value: content,
  onChange: setContent,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 25
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  className: "forum-button",
  disabled: replyLoading || content === "<p><br></p>" || !content,
  onClick: () => submitReply(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 21
  }
}, "Send reply"))));
/* harmony default export */ __webpack_exports__["default"] = (ForumTopicContainer);

/***/ }),

/***/ "./src/components/forum/ForumTopicList.jsx":
/*!*************************************************!*\
  !*** ./src/components/forum/ForumTopicList.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _gql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../gql */ "./src/gql.js");
/* harmony import */ var _ForumTopicListContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ForumTopicListContainer */ "./src/components/forum/ForumTopicListContainer.jsx");
/* harmony import */ var _features_CategorySlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/CategorySlice */ "./src/features/CategorySlice.jsx");
/* harmony import */ var _features_PageServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../features/PageServices */ "./src/features/PageServices.jsx");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/forum/ForumTopicList.jsx";









function ForumTopicList() {
  const {
    fromUrlCategoryId
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useParams"])();
  const categoryId = Number(fromUrlCategoryId.replace(':', ''));
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const route = _config__WEBPACK_IMPORTED_MODULE_4__["API_CATEGORIES"];
  const category = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.category.value);
  const navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useNavigate"])();
  const [topic, setTopic] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [title, setTitle] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [heading, setHeading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(category.categoryName);
  const [content, setContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [newTopicOpen, setNewTopicOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [addNewTopic, {
    loading: newTopicLoading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_gql__WEBPACK_IMPORTED_MODULE_5__["FORUM_NEW_TOPIC"]);
  const {
    loading,
    error,
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_gql__WEBPACK_IMPORTED_MODULE_5__["TOPIC_LIST"], {
    variables: {
      categoryId
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_features_PageServices__WEBPACK_IMPORTED_MODULE_8__["getContent"])(`${route}/${categoryId}`).then(object => {
      dispatch(Object(_features_CategorySlice__WEBPACK_IMPORTED_MODULE_7__["setCategory"])({
        categoryId: object.id,
        categoryName: object.name,
        categorySlug: object.slug
      }));
    });
    if (loading) {
      setHeading('Loading...');
    } else if (error || categoryId < 1) {
      navigate(_config__WEBPACK_IMPORTED_MODULE_4__["UI_FORUM"]);
    } else if (data.posts.nodes[0]) {
      setHeading(null);
      setTopic(data.posts.nodes);
    } else {
      setHeading('Nothing to show here. Feel free to add a topic.');
    }
    // eslint-disable-next-line
  }, [loading, categoryId]);
  const handleNavigation = postId => {
    navigate(`${_config__WEBPACK_IMPORTED_MODULE_4__["UI_FORUM_TOPIC"]}/:${postId}`);
  };
  const handleNewTopic = () => {
    addNewTopic({
      variables: {
        slug: category.categorySlug,
        title,
        content
      }
    }).then(!newTopicLoading && navigate(0));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ForumTopicListContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    category: category,
    error: error,
    heading: heading,
    topic: topic,
    loading: loading,
    newTopicOpen: newTopicOpen,
    content: content,
    title: title,
    newTopicLoading: newTopicLoading,
    setTitle: setTitle,
    handleNavigation: handleNavigation,
    handleNewTopic: handleNewTopic,
    setNewTopicOpen: setNewTopicOpen,
    setContent: setContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (ForumTopicList);

/***/ }),

/***/ "./src/components/forum/ForumTopicListContainer.jsx":
/*!**********************************************************!*\
  !*** ./src/components/forum/ForumTopicListContainer.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-quill */ "./node_modules/react-quill/lib/index.js");
/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/validation */ "./src/lib/validation.jsx");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/forum/ForumTopicListContainer.jsx";




const ForumTopicListContainer = ({
  category,
  heading,
  topic,
  handleNavigation,
  handleNewTopic,
  error,
  loading,
  setNewTopicOpen,
  newTopicOpen,
  content,
  setContent,
  title,
  setTitle,
  newTopicLoading
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-list-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-section",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-category",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 13
  }
}, category.categoryName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 13
  }
}, heading), topic.map(topic => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  key: topic.postId,
  id: topic.postId,
  className: "forum-topic",
  onClick: () => handleNavigation(topic.postId),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 17
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "bubble",
  role: "img",
  "aria-label": "topic",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 21
  }
}, "\uD83D\uDDE8\uFE0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-topic-node",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 21
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-topic-name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 25
  }
}, topic.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "forum-topic-description",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 25
  }
}, "By ", topic.author.node.name, " on ", Object(_lib_validation__WEBPACK_IMPORTED_MODULE_3__["getDateFromString"])(topic.date)))))), !error && !loading && (!newTopicOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  onClick: () => setNewTopicOpen(true),
  className: "forum-button",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 11
  }
}, "New topic") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  id: "new-topic-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  className: "new-topic-title",
  type: "text",
  name: "title",
  value: title,
  onChange: e => {
    setTitle(e.target.value);
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 13
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  id: "text-editor-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_quill__WEBPACK_IMPORTED_MODULE_1___default.a, {
  theme: "snow",
  value: content,
  onChange: setContent,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 17
  }
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  disabled: newTopicLoading || content === "<p><br></p>" || !content || !title,
  onClick: () => handleNewTopic(),
  className: "forum-button",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 13
  }
}, "Add topic"))));
/* harmony default export */ __webpack_exports__["default"] = (ForumTopicListContainer);

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: WP_ROOT, GRAPHQL_URI, WP_UPLOADS, API_PAGES, API_POSTS, API_USERS, API_CATEGORIES, UI_ACCOUNT, UI_FORUM, UI_FORUM_THREADS, UI_FORUM_TOPIC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WP_ROOT", function() { return WP_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPHQL_URI", function() { return GRAPHQL_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WP_UPLOADS", function() { return WP_UPLOADS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_PAGES", function() { return API_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_POSTS", function() { return API_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_USERS", function() { return API_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_CATEGORIES", function() { return API_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_ACCOUNT", function() { return UI_ACCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_FORUM", function() { return UI_FORUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_FORUM_THREADS", function() { return UI_FORUM_THREADS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_FORUM_TOPIC", function() { return UI_FORUM_TOPIC; });
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/validation */ "./src/lib/validation.jsx");


// Use forward slash (/) if root is same as site
const WP_ROOT = "WordPress";

// GraphQL defaults
const GRAPHQL_URI = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_0__["getRoot"])(WP_ROOT) + "graphql";

// WordPress defaults
const WP_UPLOADS = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_0__["getRoot"])(WP_ROOT) + "wp-content/uploads";
const API_PAGES = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_0__["getRoot"])(WP_ROOT) + "wp-json/wp/v2/pages/?slug=";
const API_POSTS = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_0__["getRoot"])(WP_ROOT) + "wp-json/wp/v2/posts/";
const API_USERS = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_0__["getRoot"])(WP_ROOT) + "wp-json/wp/v2/users/";
const API_CATEGORIES = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_0__["getRoot"])(WP_ROOT) + "wp-json/wp/v2/categories";

// User accounts page
const UI_ACCOUNT = "wp-admin";

// Forum pages
const UI_FORUM = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_0__["getRoot"])(WP_ROOT) + "forum";
const UI_FORUM_THREADS = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_0__["getRoot"])(WP_ROOT) + "forum/threads";
const UI_FORUM_TOPIC = Object(_lib_validation__WEBPACK_IMPORTED_MODULE_0__["getRoot"])(WP_ROOT) + "forum/threads/post";

/***/ }),

/***/ "./src/features/CategorySlice.jsx":
/*!****************************************!*\
  !*** ./src/features/CategorySlice.jsx ***!
  \****************************************/
/*! exports provided: categorySlice, setCategory, purgeCategory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categorySlice", function() { return categorySlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCategory", function() { return setCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purgeCategory", function() { return purgeCategory; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const closedState = {
  categoryId: null,
  categoryName: null,
  categorySlug: null
};
const categorySlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'category',
  initialState: {
    value: closedState
  },
  reducers: {
    setCategory: (state, action) => {
      state.value = action.payload;
    },
    purgeCategory: state => {
      state.value = closedState;
    }
  }
});
const {
  setCategory,
  purgeCategory
} = categorySlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (categorySlice.reducer);

/***/ }),

/***/ "./src/features/ContentSlice.jsx":
/*!***************************************!*\
  !*** ./src/features/ContentSlice.jsx ***!
  \***************************************/
/*! exports provided: contentSlice, pushContent, purgeContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentSlice", function() { return contentSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushContent", function() { return pushContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purgeContent", function() { return purgeContent; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialStateValue = [{
  "id": 0,
  "date": null,
  "date_gmt": null,
  "guid": {
    "rendered": ""
  },
  "modified": null,
  "modified_gmt": null,
  "slug": null,
  "status": null,
  "type": null,
  "link": null,
  "title": {
    "rendered": ""
  },
  "content": {
    "rendered": "",
    "protected": false
  },
  "excerpt": {
    "rendered": "",
    "protected": false
  },
  "author": 0,
  "featured_media": 0,
  "parent": 0,
  "menu_order": 0,
  "comment_status": "closed",
  "ping_status": "closed",
  "template": "",
  "meta": {
    "footnotes": ""
  },
  "_links": {
    "self": [],
    "collection": [],
    "about": [],
    "author": [],
    "replies": [],
    "version-history": [],
    "predecessor-version": [],
    "wp:attachment": [],
    "curies": [{
      "name": "wp",
      "href": "https://api.w.org/{rel}",
      "templated": true
    }]
  }
}];
const contentSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'content',
  initialState: {
    value: initialStateValue
  },
  reducers: {
    pushContent: (state, action) => {
      state.value = action.payload;
    },
    purgeContent: state => {
      state.value = initialStateValue;
    }
  }
});
const {
  pushContent,
  purgeContent
} = contentSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (contentSlice.reducer);

/***/ }),

/***/ "./src/features/ForumSlice.jsx":
/*!*************************************!*\
  !*** ./src/features/ForumSlice.jsx ***!
  \*************************************/
/*! exports provided: forumSlice, pushForumContent, purgeForumContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forumSlice", function() { return forumSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushForumContent", function() { return pushForumContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purgeForumContent", function() { return purgeForumContent; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialStateValue = [{
  "id": 1,
  "count": 1,
  "description": "",
  "link": "https://localhost/WordPress/category/uncategorized/",
  "name": "Uncategorized",
  "slug": "uncategorized",
  "taxonomy": "category",
  "parent": 0,
  "meta": [],
  "_links": {
    "self": [{
      "href": "https://localhost/WordPress/wp-json/wp/v2/categories/1"
    }],
    "collection": [{
      "href": "https://localhost/WordPress/wp-json/wp/v2/categories"
    }],
    "about": [{
      "href": "https://localhost/WordPress/wp-json/wp/v2/taxonomies/category"
    }],
    "wp:post_type": [{
      "href": "https://localhost/WordPress/wp-json/wp/v2/posts?categories=1"
    }],
    "curies": [{
      "name": "wp",
      "href": "https://api.w.org/{rel}",
      "templated": true
    }]
  }
}];
const forumSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'forumContent',
  initialState: {
    value: initialStateValue
  },
  reducers: {
    pushForumContent: (state, action) => {
      state.value = action.payload;
    },
    purgeForumContent: state => {
      state.value = initialStateValue;
    }
  }
});
const {
  pushForumContent,
  purgeForumContent
} = forumSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (forumSlice.reducer);

/***/ }),

/***/ "./src/features/ModalSlice.jsx":
/*!*************************************!*\
  !*** ./src/features/ModalSlice.jsx ***!
  \*************************************/
/*! exports provided: modalSlice, openModal, closeModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalSlice", function() { return modalSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const openState = {
  show: true
};
const closedState = {
  show: false
};
const modalSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'modal',
  initialState: {
    value: closedState
  },
  reducers: {
    openModal: state => {
      state.value = openState;
    },
    closeModal: state => {
      state.value = closedState;
    }
  }
});
const {
  openModal,
  closeModal
} = modalSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (modalSlice.reducer);

/***/ }),

/***/ "./src/features/PageServices.jsx":
/*!***************************************!*\
  !*** ./src/features/PageServices.jsx ***!
  \***************************************/
/*! exports provided: default, getContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return getContent; });
function PageServices() {}
/* harmony default export */ __webpack_exports__["default"] = (PageServices);
async function getContent(fromUrl) {
  try {
    const response = await fetch(fromUrl);
    const data = await response.json();
    return data;
  } catch {
    return {
      "message": "Access Error"
    };
  }
}
;

/***/ }),

/***/ "./src/features/UserSlice.jsx":
/*!************************************!*\
  !*** ./src/features/UserSlice.jsx ***!
  \************************************/
/*! exports provided: userSlice, pushUserDetails, purgeUserDetails, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSlice", function() { return userSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushUserDetails", function() { return pushUserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purgeUserDetails", function() { return purgeUserDetails; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const initialStateValue = [{
  "id": 0,
  "name": null,
  "url": null,
  "description": null,
  "link": null,
  "slug": null,
  "avatar_urls": {},
  "meta": [],
  "_links": {
    "self": [],
    "collection": []
  }
}];
const userSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'userDetails',
  initialState: {
    value: initialStateValue
  },
  reducers: {
    pushUserDetails: (state, action) => {
      state.value = action.payload;
    },
    purgeUserDetails: state => {
      state.value = initialStateValue;
    }
  }
});
const {
  pushUserDetails,
  purgeUserDetails
} = userSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (userSlice.reducer);

/***/ }),

/***/ "./src/gql.js":
/*!********************!*\
  !*** ./src/gql.js ***!
  \********************/
/*! exports provided: LOG_IN, LOG_OUT, REGISTER_USER, RESET_PASSWORD, SEND_PASSWORD_RESET_EMAIL, TOPIC_LIST, FORUM_NEW_TOPIC, FORUM_GET_POSTS, FORUM_REPLY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN", function() { return LOG_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_USER", function() { return REGISTER_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PASSWORD", function() { return RESET_PASSWORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_PASSWORD_RESET_EMAIL", function() { return SEND_PASSWORD_RESET_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOPIC_LIST", function() { return TOPIC_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORUM_NEW_TOPIC", function() { return FORUM_NEW_TOPIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORUM_GET_POSTS", function() { return FORUM_GET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORUM_REPLY", function() { return FORUM_REPLY; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");

const LOG_IN = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation logIn($login: String!, $password: String!) {
    loginWithCookies(input: { login: $login password: $password })
    { status } }`;
const LOG_OUT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation logOut {
        logout(input: {})
        { status }
    }`;
const REGISTER_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation registerUser(
        $username: String!
        $email: String!
        $password: String!
    ) {
        registerUser(
            input: {
            username: $username
            email: $email
            password: $password
            }
        ) { user { databaseId } }
    }`;
const RESET_PASSWORD = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation resetUserPassword(
        $key: String!
        $login: String!
        $password: String!) {
        resetUserPassword(
            input: {
                key: $key
                login: $login
                password: $password
            }) {
            user { databaseId } } }`;
const SEND_PASSWORD_RESET_EMAIL = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation sendPasswordResetEmail($username: String!) {
    sendPasswordResetEmail(
        input: { username: $username }
    ) { user { databaseId } } }`;
const TOPIC_LIST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
query getPostsByCategory(
        $categoryId: Int!
    )
{
    posts(where: {categoryId: $categoryId}) {
        nodes {
            postId
            title
            date
            author { node { name } }
            isSticky
            editingLockedBy { node { name } }
        }
    }
}`;
const FORUM_NEW_TOPIC = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation newPost($slug: String!, $title: String!, $content: String!) {
        createPost(
        input: {
            clientMutationId: "CreatePost",
            title: $title,
            content: $content,
            categories: {
                nodes: {slug: $slug}
            },
            status: PUBLISH
        } ) {
        post {
            id
            title
            date
            author {
                node {
                    name
                }
            }
        } }
}`;
const FORUM_GET_POSTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
query getPostById($postId: Int!) {
    posts(where: {id: $postId}) {
    nodes {
        databaseId
        title
        content
        author { node {
            name
            avatar { url } } }
        date
        comments(where: {orderby: COMMENT_DATE, order: ASC}) {
        edges { node {
            databaseId
            content
            date
            author { node {
                name
                avatar { url } } } } } } } } }`;
const FORUM_REPLY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
mutation setReply($commentOn: Int!, $content: String!) {
    createComment(input: {
            content: $content,
            commentOn: $commentOn
    })
    {
        clientMutationId
        success
    }
}`;

/***/ }),

/***/ "./src/hooks/useAuth.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useAuth.tsx ***!
  \*******************************/
/*! exports provided: GET_USER, AuthProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER", function() { return GET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/hooks/useAuth.tsx";


const DEFAULT_STATE = {
  loggedIn: false,
  user: undefined,
  loading: false,
  error: undefined
};
const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(DEFAULT_STATE);
const GET_USER = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getUser {
    viewer {
      id
      databaseId
      firstName
      lastName
      email
      capabilities
    }
  }
`;
function AuthProvider({
  children
}) {
  const {
    data,
    loading,
    error
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"])(GET_USER);
  const user = data === null || data === void 0 ? void 0 : data.viewer;
  const loggedIn = Boolean(user);
  const value = {
    loggedIn,
    user,
    loading,
    error
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AuthContext.Provider, {
    value: value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 10
    }
  }, children);
}
const useAuth = () => Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AuthContext);
/* harmony default export */ __webpack_exports__["default"] = (useAuth);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_ModalSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/ModalSlice */ "./src/features/ModalSlice.jsx");
/* harmony import */ var _features_ContentSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/ContentSlice */ "./src/features/ContentSlice.jsx");
/* harmony import */ var _features_ForumSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/ForumSlice */ "./src/features/ForumSlice.jsx");
/* harmony import */ var _features_CategorySlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/CategorySlice */ "./src/features/CategorySlice.jsx");
/* harmony import */ var _features_UserSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/UserSlice */ "./src/features/UserSlice.jsx");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/index.js";











const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__["configureStore"])({
  reducer: {
    modal: _features_ModalSlice__WEBPACK_IMPORTED_MODULE_6__["default"],
    content: _features_ContentSlice__WEBPACK_IMPORTED_MODULE_7__["default"],
    forum: _features_ForumSlice__WEBPACK_IMPORTED_MODULE_8__["default"],
    category: _features_CategorySlice__WEBPACK_IMPORTED_MODULE_9__["default"],
    user: _features_UserSlice__WEBPACK_IMPORTED_MODULE_10__["default"]
  }
});
const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1___default.a.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: store,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
})));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/lib/apolloClient.tsx":
/*!**********************************!*\
  !*** ./src/lib/apolloClient.tsx ***!
  \**********************************/
/*! exports provided: client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");


const link = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["createHttpLink"])({
  uri: _config__WEBPACK_IMPORTED_MODULE_1__["GRAPHQL_URI"],
  credentials: 'include'
});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"](),
  link
});

/***/ }),

/***/ "./src/lib/validation.jsx":
/*!********************************!*\
  !*** ./src/lib/validation.jsx ***!
  \********************************/
/*! exports provided: validateEmail, validatePassword, getRoot, getDateFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePassword", function() { return validatePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoot", function() { return getRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateFromString", function() { return getDateFromString; });
const validateEmail = email => {
  // eslint-disable-next-line
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};
const validatePassword = (password1, password2) => {
  return password1 === password2;
};
const getRoot = wp_root_const => {
  if (wp_root_const !== '/') {
    return `/${wp_root_const}/`;
  } else {
    return wp_root_const;
  }
};
const getDateFromString = date => {
  const formatted = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(date));
  return formatted;
};

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.e9286273.svg";

/***/ }),

/***/ "./src/logotext.svg":
/*!**************************!*\
  !*** ./src/logotext.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logotext.1ad91849.svg";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA

const isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}
function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;
      if (installingWorker == null) {
        return;
      }
      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.');

            // Execute callback
            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');

            // Execute callback
            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}
function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');
    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}
function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map