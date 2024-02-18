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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/apolloClient */ "./src/lib/apolloClient.tsx");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks/useAuth */ "./src/hooks/useAuth.tsx");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/App.js";










function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_7__["ApolloProvider"], {
    client: _lib_apolloClient__WEBPACK_IMPORTED_MODULE_8__["client"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_9__["AuthProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Routes"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: _config__WEBPACK_IMPORTED_MODULE_2__["WP_ROOT"],
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 48
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    index: true,
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 37
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    path: "*",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NoPage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 40
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
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
    id: "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "logo-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _logo_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 35
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "logotext-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _logotext_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Logo Text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 39
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer-about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "footer-span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 43
    }
  }, "A privacy focused travel community site.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "footer-button",
    href: "contact-page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Contact")));
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
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/Header.jsx";



function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "head-nav-bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _logo_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 24
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "logotext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _logotext_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Logo Text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "content-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Outlet"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }));
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "heading-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 37
    }
  }, "EXPLORE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    route: _config__WEBPACK_IMPORTED_MODULE_2__["B_MAIN_MENU"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
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
  const content = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.content.value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_features_PageServices__WEBPACK_IMPORTED_MODULE_2__["getContent"])(route).then(object => {
      dispatch(Object(_features_ContentSlice__WEBPACK_IMPORTED_MODULE_3__["pushContent"])(object));
    });
  }, [dispatch, route]);
  const regex = /(<([^>]+)>)/gi;
  const menuData = content.content.rendered.replace(regex, "").split(/\s+/).filter(i => i !== "");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "card-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, menuData.map((str, i) => {
    const [name, link, image] = str.split(":");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: i,
      href: link,
      className: "card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "card-photo",
      alt: name,
      src: `${_config__WEBPACK_IMPORTED_MODULE_4__["WP_UPLOADS"]}/${image}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
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
    if (e.target.className === 'modal-bg') {
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
    id: "home-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Resource not found"));
}
/* harmony default export */ __webpack_exports__["default"] = (NoPage);

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_ModalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/ModalSlice */ "./src/features/ModalSlice.jsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modal */ "./src/components/Modal.jsx");
/* harmony import */ var _forms_LoginForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/LoginForm */ "./src/components/forms/LoginForm.jsx");
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useAuth */ "./src/hooks/useAuth.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/UserControl.jsx";








function UserControl() {
  const modal = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.modal.value);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useNavigate"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    loggedIn,
    loading
  } = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const LOG_OUT = _apollo_client__WEBPACK_IMPORTED_MODULE_7__["gql"]`
        mutation logOut {
            logout(input: {})
            { status }
        }`;
  const [logOut] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(LOG_OUT, {
    refetchQueries: [{
      query: _hooks_useAuth__WEBPACK_IMPORTED_MODULE_6__["GET_USER"]
    }]
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "usercontrol",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, modal.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_LoginForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 47
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }), !loggedIn && !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "userbutton",
    onClick: () => {
      history.push("/register");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "new",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, "\uD83C\uDD95"), " Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "userbutton",
    onClick: () => {
      dispatch(Object(_features_ModalSlice__WEBPACK_IMPORTED_MODULE_3__["openModal"])());
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "\uD83D\uDC64"), " Log In")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "userbutton",
    onClick: () => {
      history.push("/account");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "head",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 47,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "door",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, "\uD83D\uDEAA"), " Log Out")));
}
/* harmony default export */ __webpack_exports__["default"] = (UserControl);

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
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/components/forms/LoginForm.jsx";





function LoginForm() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [username, setUsername] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const LOG_IN = _apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"]`
        mutation logIn($login: String!, $password: String!) {
        loginWithCookies(input: { login: $login password: $password })
        { status } }`;
  const [logIn] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(LOG_IN, {
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
      }).then(status => dispatch(Object(_features_ModalSlice__WEBPACK_IMPORTED_MODULE_4__["closeModal"])())).catch(error => setError('Invalid username or password!'));
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    id: "site-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "SIGN IN"), error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 20
    }
  }, error) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 48,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "label-login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 57,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "link-label",
    href: "/forgot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "link-label",
    href: "/register",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, "Create Account"));
}
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: WP_ROOT, GRAPHQL_URI, WP_UPLOADS, API_JSON, API_PAGES, B_MAIN_MENU, REACT_UI, F_SESSION, F_LOGIN, F_LOGOUT, F_FRONT, F_NEWS, F_GUIDES, F_STORE, F_COMMUNITY, F_ABOUT, F_CONTACT, F_VENDORS, F_TERMS, F_PRIVACY, F_ORDERS, F_SEARCH, F_REGISTER, B_SESSION, B_LOGIN, B_LOGOUT, B_FRONT, B_NEWS, B_GUIDES, B_STORE, B_COMMUNITY, B_ABOUT, B_CONTACT, B_VENDORS, B_TERMS, B_PRIVACY, B_ORDERS, B_SEARCH, B_REGISTER, B_POSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WP_ROOT", function() { return WP_ROOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRAPHQL_URI", function() { return GRAPHQL_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WP_UPLOADS", function() { return WP_UPLOADS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_JSON", function() { return API_JSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_PAGES", function() { return API_PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_MAIN_MENU", function() { return B_MAIN_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REACT_UI", function() { return REACT_UI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_SESSION", function() { return F_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_LOGIN", function() { return F_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_LOGOUT", function() { return F_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_FRONT", function() { return F_FRONT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_NEWS", function() { return F_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_GUIDES", function() { return F_GUIDES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_STORE", function() { return F_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_COMMUNITY", function() { return F_COMMUNITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_ABOUT", function() { return F_ABOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_CONTACT", function() { return F_CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_VENDORS", function() { return F_VENDORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_TERMS", function() { return F_TERMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_PRIVACY", function() { return F_PRIVACY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_ORDERS", function() { return F_ORDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_SEARCH", function() { return F_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_REGISTER", function() { return F_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_SESSION", function() { return B_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_LOGIN", function() { return B_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_LOGOUT", function() { return B_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_FRONT", function() { return B_FRONT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_NEWS", function() { return B_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_GUIDES", function() { return B_GUIDES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_STORE", function() { return B_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_COMMUNITY", function() { return B_COMMUNITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_ABOUT", function() { return B_ABOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_CONTACT", function() { return B_CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_VENDORS", function() { return B_VENDORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_TERMS", function() { return B_TERMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_PRIVACY", function() { return B_PRIVACY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_ORDERS", function() { return B_ORDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_SEARCH", function() { return B_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_REGISTER", function() { return B_REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B_POSTS", function() { return B_POSTS; });
// Use forward slash (/) if root is same as site
const WP_ROOT = "WordPress";
const GRAPHQL_URI = "graphql";
const WP_UPLOADS = "wp-content/uploads";
const API_JSON = "wp-json";
const API_PAGES = `${API_JSON}/wp/v2/pages`;
const B_MAIN_MENU = `${API_PAGES}/6`;
const REACT_UI = `${WP_ROOT}`;
const F_SESSION = `${REACT_UI}/session/token`;
const F_LOGIN = `${REACT_UI}/user/login`;
const F_LOGOUT = `${REACT_UI}/user/logout`;
const F_FRONT = `${REACT_UI}/frontpage`;
const F_NEWS = `${REACT_UI}/news`;
const F_GUIDES = `${REACT_UI}/guides`;
const F_STORE = `${REACT_UI}/store`;
const F_COMMUNITY = `${REACT_UI}/community`;
const F_ABOUT = `${REACT_UI}/about`;
const F_CONTACT = `${REACT_UI}/contact`;
const F_VENDORS = `${REACT_UI}/vendors`;
const F_TERMS = `${REACT_UI}/terms`;
const F_PRIVACY = `${REACT_UI}/privacy`;
const F_ORDERS = `${REACT_UI}/orders`;
const F_SEARCH = `${REACT_UI}/search`;
const F_REGISTER = `${REACT_UI}/register`;
const B_SESSION = `${API_JSON}/session/token`;
const B_LOGIN = `${API_JSON}/user/login`;
const B_LOGOUT = `${API_JSON}/user/logout`;
const B_FRONT = `${API_JSON}/frontpage`;
const B_NEWS = `${API_JSON}/news`;
const B_GUIDES = `${API_JSON}/guides`;
const B_STORE = `${API_JSON}/store`;
const B_COMMUNITY = `${API_JSON}/community`;
const B_ABOUT = `${API_JSON}/about`;
const B_CONTACT = `${API_JSON}/contact`;
const B_VENDORS = `${API_JSON}/vendors`;
const B_TERMS = `${API_JSON}/terms`;
const B_PRIVACY = `${API_JSON}/privacy`;
const B_ORDERS = `${API_JSON}/orders`;
const B_SEARCH = `${API_JSON}/search`;
const B_REGISTER = `${API_JSON}/register`;
const B_POSTS = `${API_JSON}/wp/v2/posts`;

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

const initialStateValue = {
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
    "curies": []
  }
};
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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_ModalSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/ModalSlice */ "./src/features/ModalSlice.jsx");
/* harmony import */ var _features_ContentSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/ContentSlice */ "./src/features/ContentSlice.jsx");
var _jsxFileName = "/opt/lampp/htdocs/WordPress/wp-content/themes/wptwr/react-src/src/index.js";









const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_5__["configureStore"])({
  reducer: {
    modal: _features_ModalSlice__WEBPACK_IMPORTED_MODULE_7__["default"],
    content: _features_ContentSlice__WEBPACK_IMPORTED_MODULE_8__["default"]
  }
});
const root = react_dom_client__WEBPACK_IMPORTED_MODULE_1___default.a.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
  store: store,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }
})));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

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

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map