(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/alert/AlertComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/alert/AlertComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button_ButtonComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/ButtonComponent.vue */ "./resources/js/components/other/button/ButtonComponent.vue");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AlertComponent",
  components: {
    buttonComponent: _button_ButtonComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    errors: {
      type: Object,
      "default": function _default() {
        return [];
      }
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var styleButton = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)({
      border: 'none',
      position: 'absolute',
      right: '10px',
      top: '10px'
    });

    var closeAlert = function closeAlert() {
      emit('closeAlert');
    };

    return {
      styleButton: styleButton,
      closeAlert: closeAlert
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/button/ButtonComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/button/ButtonComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ButtonComponent",
  props: {
    classButton: {
      type: String,
      "default": 'btn btn-primary w-100'
    },
    typeButton: {
      type: String,
      "default": 'submit'
    },
    textButton: {
      type: String,
      "default": 'Login'
    },
    onclick: {
      type: Function,
      "default": function _default() {}
    },
    styleButton: {
      type: Object,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/input/InputComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/input/InputComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common/ */ "./resources/js/common/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "InputComponent",
  props: {
    rules: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    classInput: {
      type: String,
      "default": ''
    },
    id: {
      type: String,
      "default": null
    },
    name: {
      type: String,
      "default": null
    },
    type: {
      type: String,
      "default": "text"
    },
    placeholder: {
      type: String,
      "default": null
    },
    value: {
      type: String,
      "default": null
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    required: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String,
      "default": null
    },
    styleInput: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var error = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)(null);
    var classValidate = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.ref)('');

    var validate = function validate(event) {
      var value = event.target.value;
      var errors = [];

      if (props.rules.length > 0) {
        props.rules.forEach(function (rule) {
          error.value = (0,_common___WEBPACK_IMPORTED_MODULE_0__.checkIfFunction)(rule) ? rule(value) : false;

          if (typeof error.value === 'string') {
            errors.push(error.value);
          } else {
            errors.slice(0, errors.length - 1);
          }
        });
        classValidate.value = errors.length > 0 ? ' is-invalid' : ' is-valid';
      }

      emit('input', {
        value: value,
        errors: errors,
        event: event
      });
    };

    return {
      checkIfFunction: _common___WEBPACK_IMPORTED_MODULE_0__.checkIfFunction,
      error: error,
      classValidate: classValidate,
      validate: validate
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/loading/LoadingComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/loading/LoadingComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/js/store/index.js");
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "loading",
  setup: function setup(props) {
    var loading = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__.computed)(function () {
      return _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.loading;
    });
    return {
      loading: loading
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page/auth/login/LoginComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page/auth/login/LoginComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @common */ "./resources/js/common/index.js");
/* harmony import */ var _StoreModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreModule */ "./resources/js/components/page/auth/login/StoreModule.js");
/* harmony import */ var _other_alert_AlertComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @other/alert/AlertComponent */ "./resources/js/components/other/alert/AlertComponent.vue");
/* harmony import */ var _other_input_InputComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @other/input/InputComponent */ "./resources/js/components/other/input/InputComponent.vue");
/* harmony import */ var _other_button_ButtonComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @other/button/ButtonComponent */ "./resources/js/components/other/button/ButtonComponent.vue");
/* harmony import */ var _common_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/validation */ "./resources/js/common/validation.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login */ "./resources/js/components/page/auth/login/login.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LoginComponent",
  components: {
    alertComponent: _other_alert_AlertComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
    inputComponent: _other_input_InputComponent__WEBPACK_IMPORTED_MODULE_3__["default"],
    buttonComponent: _other_button_ButtonComponent__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  setup: function setup() {
    (0,_common__WEBPACK_IMPORTED_MODULE_0__.registerModule)(_StoreModule__WEBPACK_IMPORTED_MODULE_1__["default"], 'loginModule');

    var _login = (0,_login__WEBPACK_IMPORTED_MODULE_6__["default"])(),
        title = _login.title,
        styleForm = _login.styleForm,
        handleSubmit = _login.handleSubmit,
        email = _login.email,
        password = _login.password,
        errors = _login.errors,
        status = _login.status;

    var closeAlert = function closeAlert() {
      errors.value = {};
    };

    return {
      email: email,
      password: password,
      title: title,
      handleSubmit: handleSubmit,
      styleForm: styleForm,
      errors: errors,
      status: status,
      closeAlert: closeAlert,
      validator: {
        required: _common_validation__WEBPACK_IMPORTED_MODULE_5__.required,
        emailVailidator: _common_validation__WEBPACK_IMPORTED_MODULE_5__.emailVailidator,
        passwordValidator: _common_validation__WEBPACK_IMPORTED_MODULE_5__.passwordValidator
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/app.config.js":
/*!************************************!*\
  !*** ./resources/js/app.config.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appConfig": () => (/* binding */ appConfig)
/* harmony export */ });
var appConfig = {
  'apiUrl': '/',
  'appName': 'Todo App',
  'appVersion': '1.0.0',
  'appDescription': 'Todo App',
  'appKeywords': 'Todo App',
  'appAuthor': 'Todo App',
  'appAuthorEmail': 'Todo App',
  'appAuthorUrl': 'Todo App'
};

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./resources/js/store/index.js");
/* harmony import */ var vue_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-toastr */ "./node_modules/vue-toastr/dist/vue-toastr.esm.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/define */ "./resources/js/define/index.js");
/* harmony import */ var vue_ui_preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ui-preloader */ "./node_modules/vue-ui-preloader/src/components/index.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = (__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js")["default"]);






Vue.use(vue_ui_preloader__WEBPACK_IMPORTED_MODULE_3__["default"]);
Vue.use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["default"]);
Vue.use(vue_toastr__WEBPACK_IMPORTED_MODULE_1__["default"], _define__WEBPACK_IMPORTED_MODULE_2__.define.toastrOptions);
Vue.config.productionTip = false;
Vue.component('login-component', (__webpack_require__(/*! @page/auth/login/LoginComponent.vue */ "./resources/js/components/page/auth/login/LoginComponent.vue")["default"]));
Vue.component('loading-component', (__webpack_require__(/*! @other/loading/LoadingComponent.vue */ "./resources/js/components/other/loading/LoadingComponent.vue")["default"]));
window.addEventListener('load', function () {
  var app = new Vue({
    el: '#app',
    store: _store__WEBPACK_IMPORTED_MODULE_0__["default"],
    components: {
      "loading-component": (__webpack_require__(/*! @other/loading/LoadingComponent.vue */ "./resources/js/components/other/loading/LoadingComponent.vue")["default"])
    },
    watch: {
      toastAlert: function toastAlert(t) {
        if (t.type && t.type == _define__WEBPACK_IMPORTED_MODULE_2__.define.statusSuccess) {
          this.$toastr.s(t.message, t.title);
        } else if (t.type && t.type == _define__WEBPACK_IMPORTED_MODULE_2__.define.statusError) {
          this.$toastr.e(t.message, t.title);
        } else {
          return;
        }
      }
    },
    setup: function setup() {
      var toastAlert = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__.computed)(function () {
        return _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.toastAlert;
      });
      return {
        toastAlert: toastAlert
      };
    }
  });
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

try {
  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/common/index.js":
/*!**************************************!*\
  !*** ./resources/js/common/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkIfFunction": () => (/* binding */ checkIfFunction),
/* harmony export */   "registerModule": () => (/* binding */ registerModule)
/* harmony export */ });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ "./resources/js/app.config.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./resources/js/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");



var registerModule = function registerModule(module) {
  var nameModule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'app';
  var APP_STORE_MODULE_NAME = nameModule; // Register module

  if (!_store__WEBPACK_IMPORTED_MODULE_1__["default"].hasModule(APP_STORE_MODULE_NAME)) {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].registerModule(APP_STORE_MODULE_NAME, module);
  } // UnRegister on leave


  (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__.onUnmounted)(function () {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('setModuleName', null);
    if (_store__WEBPACK_IMPORTED_MODULE_1__["default"].hasModule(APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_1__["default"].unregisterModule(APP_STORE_MODULE_NAME);
  });
};
var checkIfFunction = function checkIfFunction(func) {
  return typeof func == 'function';
};

/***/ }),

/***/ "./resources/js/common/validation.js":
/*!*******************************************!*\
  !*** ./resources/js/common/validation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailVailidator": () => (/* binding */ emailVailidator),
/* harmony export */   "passwordValidator": () => (/* binding */ passwordValidator),
/* harmony export */   "required": () => (/* binding */ required)
/* harmony export */ });
var required = function required(value) {
  return value && value.length > 0 || 'Required';
};
var emailVailidator = function emailVailidator(value) {
  return value && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) || 'Invalid email address';
};
var passwordValidator = function passwordValidator(password) {
  /* eslint-disable no-useless-escape */
  var regExp = /(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}[]|:;"'<>,_₹]){8}/;
  var regExp2 = /(?=.*\d)(?=.*[a-z]){8}/;
  var regExp3 = /(?=.*\d)(?=.*[~`!@#$%^&*()--+={}[]|:;"'<>,_₹]){8}/;
  /* eslint-enable no-useless-escape */

  var validPassword = regExp.test(password);
  var validPassword2 = regExp2.test(password);
  var validPassword3 = regExp3.test(password);
  return validPassword || validPassword2 || validPassword3 || 'Password must contain at least one number, one lowercase and one uppercase letter, and at least 8 or more characters';
};

/***/ }),

/***/ "./resources/js/components/page/auth/login/StoreModule.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/page/auth/login/StoreModule.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_axios_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plugins/axios.config */ "./resources/js/plugins/axios.config.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  namespaced: true,
  getters: {},
  state: {
    isLoading: false,
    isLoggedIn: false,
    user: null,
    error: null
  },
  actions: {
    handleSubmit: function handleSubmit(ctx, queryParams) {
      return new Promise(function (resolve, reject) {
        _plugins_axios_config__WEBPACK_IMPORTED_MODULE_0__["default"].post('/login', queryParams).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/page/auth/login/login.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/page/auth/login/login.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store */ "./resources/js/store/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function login() {
  var email = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__.ref)('');
  var password = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__.ref)('');
  var errors = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__.ref)({});
  var title = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__.ref)('Login');
  var status = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__.ref)('');
  var styleForm = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__.ref)({
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%'
  });

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!_store__WEBPACK_IMPORTED_MODULE_1__["default"].state.loading) {
                _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('setLoading', true);
                data = {
                  email: email.value,
                  password: password.value
                };
                _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('loginModule/handleSubmit', data).then(function (response) {
                  window.location.reload();
                })["catch"](function (error) {
                  console.log(error);
                  errors.value = error.response.data.errors;
                  status.value = 'error';
                });
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return {
    email: email,
    password: password,
    errors: errors,
    handleSubmit: handleSubmit,
    styleForm: styleForm,
    title: title,
    status: status
  };
}

/***/ }),

/***/ "./resources/js/define/index.js":
/*!**************************************!*\
  !*** ./resources/js/define/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "define": () => (/* binding */ define)
/* harmony export */ });
var define = {
  statusSuccess: 'success',
  statusError: 'error',
  toastrOptions: {
    onClosed: true,
    clickClose: true,
    position: 'toast-top-center'
  }
};

/***/ }),

/***/ "./resources/js/plugins/axios.config.js":
/*!**********************************************!*\
  !*** ./resources/js/plugins/axios.config.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store */ "./resources/js/store/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.config */ "./resources/js/app.config.js");




var axiosIns = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  // You can add your headers here
  // ================================
  baseURL: _app_config__WEBPACK_IMPORTED_MODULE_2__.appConfig.apiUrl,
  // timeout: 1000,
  headers: {
    'Accept': 'application/json'
  }
});
axiosIns.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  Promise.reject(error);
});
axiosIns.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (err) {
  if (err.response.status === 404) {
    alert('404 Not Found');
  }

  _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('setLoading', false);
  _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('setToastAlert', {
    type: 'error',
    title: 'Error',
    message: err.response.data.message
  });
  return Promise.reject(err);
});
vue__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.$http = axiosIns;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosIns);

/***/ }),

/***/ "./resources/js/store/index.js":
/*!*************************************!*\
  !*** ./resources/js/store/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    loading: false,
    user: {
      id: '',
      name: '',
      email: '',
      role: '',
      token: ''
    },
    toastAlert: {
      type: '',
      text: '',
      message: ''
    }
  },
  mutations: {
    setLoading: function setLoading(state, value) {
      state.loading = value;
    },
    setUser: function setUser(state, value) {
      state.user = value;
    },
    setToastAlert: function setToastAlert(state, value) {
      state.toastAlert = value;
    }
  }
}));

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/components/other/alert/AlertComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/other/alert/AlertComponent.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertComponent_vue_vue_type_template_id_7a07f2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertComponent.vue?vue&type=template&id=7a07f2de&scoped=true& */ "./resources/js/components/other/alert/AlertComponent.vue?vue&type=template&id=7a07f2de&scoped=true&");
/* harmony import */ var _AlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/other/alert/AlertComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertComponent_vue_vue_type_template_id_7a07f2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AlertComponent_vue_vue_type_template_id_7a07f2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7a07f2de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/other/alert/AlertComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/other/button/ButtonComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/other/button/ButtonComponent.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ButtonComponent_vue_vue_type_template_id_90c81bd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonComponent.vue?vue&type=template&id=90c81bd0&scoped=true& */ "./resources/js/components/other/button/ButtonComponent.vue?vue&type=template&id=90c81bd0&scoped=true&");
/* harmony import */ var _ButtonComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/other/button/ButtonComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ButtonComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ButtonComponent_vue_vue_type_template_id_90c81bd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ButtonComponent_vue_vue_type_template_id_90c81bd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "90c81bd0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/other/button/ButtonComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/other/input/InputComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/other/input/InputComponent.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputComponent_vue_vue_type_template_id_60bb1602_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputComponent.vue?vue&type=template&id=60bb1602&scoped=true& */ "./resources/js/components/other/input/InputComponent.vue?vue&type=template&id=60bb1602&scoped=true&");
/* harmony import */ var _InputComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/other/input/InputComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputComponent_vue_vue_type_template_id_60bb1602_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _InputComponent_vue_vue_type_template_id_60bb1602_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "60bb1602",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/other/input/InputComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/other/loading/LoadingComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/other/loading/LoadingComponent.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingComponent_vue_vue_type_template_id_ac4f7d44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingComponent.vue?vue&type=template&id=ac4f7d44&scoped=true& */ "./resources/js/components/other/loading/LoadingComponent.vue?vue&type=template&id=ac4f7d44&scoped=true&");
/* harmony import */ var _LoadingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/other/loading/LoadingComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoadingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadingComponent_vue_vue_type_template_id_ac4f7d44_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoadingComponent_vue_vue_type_template_id_ac4f7d44_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ac4f7d44",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/other/loading/LoadingComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/page/auth/login/LoginComponent.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/page/auth/login/LoginComponent.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoginComponent_vue_vue_type_template_id_ba69dba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginComponent.vue?vue&type=template&id=ba69dba8&scoped=true& */ "./resources/js/components/page/auth/login/LoginComponent.vue?vue&type=template&id=ba69dba8&scoped=true&");
/* harmony import */ var _LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/page/auth/login/LoginComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginComponent_vue_vue_type_template_id_ba69dba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoginComponent_vue_vue_type_template_id_ba69dba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ba69dba8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/page/auth/login/LoginComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/other/alert/AlertComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/other/alert/AlertComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/alert/AlertComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/other/button/ButtonComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/other/button/ButtonComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ButtonComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/button/ButtonComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/other/input/InputComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/other/input/InputComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/input/InputComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/other/loading/LoadingComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/other/loading/LoadingComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadingComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/loading/LoadingComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/page/auth/login/LoginComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/page/auth/login/LoginComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page/auth/login/LoginComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/other/alert/AlertComponent.vue?vue&type=template&id=7a07f2de&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/other/alert/AlertComponent.vue?vue&type=template&id=7a07f2de&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_template_id_7a07f2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_template_id_7a07f2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertComponent_vue_vue_type_template_id_7a07f2de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertComponent.vue?vue&type=template&id=7a07f2de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/alert/AlertComponent.vue?vue&type=template&id=7a07f2de&scoped=true&");


/***/ }),

/***/ "./resources/js/components/other/button/ButtonComponent.vue?vue&type=template&id=90c81bd0&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/other/button/ButtonComponent.vue?vue&type=template&id=90c81bd0&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonComponent_vue_vue_type_template_id_90c81bd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonComponent_vue_vue_type_template_id_90c81bd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonComponent_vue_vue_type_template_id_90c81bd0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ButtonComponent.vue?vue&type=template&id=90c81bd0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/button/ButtonComponent.vue?vue&type=template&id=90c81bd0&scoped=true&");


/***/ }),

/***/ "./resources/js/components/other/input/InputComponent.vue?vue&type=template&id=60bb1602&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/other/input/InputComponent.vue?vue&type=template&id=60bb1602&scoped=true& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputComponent_vue_vue_type_template_id_60bb1602_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputComponent_vue_vue_type_template_id_60bb1602_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputComponent_vue_vue_type_template_id_60bb1602_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./InputComponent.vue?vue&type=template&id=60bb1602&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/input/InputComponent.vue?vue&type=template&id=60bb1602&scoped=true&");


/***/ }),

/***/ "./resources/js/components/other/loading/LoadingComponent.vue?vue&type=template&id=ac4f7d44&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/other/loading/LoadingComponent.vue?vue&type=template&id=ac4f7d44&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingComponent_vue_vue_type_template_id_ac4f7d44_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingComponent_vue_vue_type_template_id_ac4f7d44_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingComponent_vue_vue_type_template_id_ac4f7d44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadingComponent.vue?vue&type=template&id=ac4f7d44&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/loading/LoadingComponent.vue?vue&type=template&id=ac4f7d44&scoped=true&");


/***/ }),

/***/ "./resources/js/components/page/auth/login/LoginComponent.vue?vue&type=template&id=ba69dba8&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/page/auth/login/LoginComponent.vue?vue&type=template&id=ba69dba8&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_ba69dba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_ba69dba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginComponent_vue_vue_type_template_id_ba69dba8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginComponent.vue?vue&type=template&id=ba69dba8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page/auth/login/LoginComponent.vue?vue&type=template&id=ba69dba8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/alert/AlertComponent.vue?vue&type=template&id=7a07f2de&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/alert/AlertComponent.vue?vue&type=template&id=7a07f2de&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return Object.keys(_vm.errors).length > 0
    ? _c(
        "div",
        {
          staticClass: "alert alert-danger alert-dismissible fade show my-2",
          attrs: { role: "alert" },
        },
        [
          _vm._l(_vm.errors, function (messages) {
            return _c(
              "div",
              { staticClass: "w-100" },
              _vm._l(messages, function (message) {
                return _c("li", { staticClass: "d-block" }, [
                  _c("p", { staticClass: "m-0" }, [_vm._v(_vm._s(message))]),
                ])
              }),
              0
            )
          }),
          _vm._v(" "),
          _vm.errors
            ? _c("buttonComponent", {
                attrs: {
                  "style-button": _vm.styleButton,
                  "text-button": "x",
                  "class-button": "",
                  onclick: _vm.closeAlert,
                  type: "button",
                },
              })
            : _vm._e(),
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/button/ButtonComponent.vue?vue&type=template&id=90c81bd0&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/button/ButtonComponent.vue?vue&type=template&id=90c81bd0&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      class: _vm.classButton,
      style: _vm.styleButton,
      attrs: { type: _vm.typeButton },
      on: { click: _vm.onclick },
    },
    [_vm._v("\n    " + _vm._s(_vm.textButton) + "\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/input/InputComponent.vue?vue&type=template&id=60bb1602&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/input/InputComponent.vue?vue&type=template&id=60bb1602&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "input-component" }, [
    _vm.label
      ? _c("label", { attrs: { for: _vm.id } }, [_vm._v(_vm._s(_vm.label))])
      : _vm._e(),
    _vm._v(" "),
    _c("input", {
      class: _vm.classInput + _vm.classValidate,
      style: _vm.styleInput,
      attrs: {
        id: _vm.id,
        name: _vm.name,
        type: _vm.type,
        placeholder: _vm.placeholder,
        disabled: _vm.disabled,
        required: _vm.required,
      },
      on: {
        keyup: _vm.validate,
        keydown: _vm.validate,
        keypress: _vm.validate,
        change: _vm.validate,
        blur: _vm.validate,
      },
    }),
    _vm._v(" "),
    _vm.error !== true
      ? _c("div", { staticClass: "input-component__error text-danger" }, [
          _vm._v(_vm._s(_vm.error)),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/loading/LoadingComponent.vue?vue&type=template&id=ac4f7d44&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/other/loading/LoadingComponent.vue?vue&type=template&id=ac4f7d44&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.loading
    ? _c("loader", {
        attrs: {
          object: "#ff9633",
          color1: "#ffffff",
          color2: "#17fd3d",
          size: "5",
          speed: "2",
          bg: "#343a40",
          objectbg: "#999793",
          opacity: "80",
          name: "circular",
        },
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page/auth/login/LoginComponent.vue?vue&type=template&id=ba69dba8&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/page/auth/login/LoginComponent.vue?vue&type=template&id=ba69dba8&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "form-wrap", style: _vm.styleForm }, [
      _c("div", { staticClass: "login-form" }, [
        _c("div", { staticClass: "login-form-header" }, [
          _c("h1", { staticClass: "text-center" }, [_vm._v(_vm._s(_vm.title))]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "login-form-body" }, [
          _c(
            "form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.handleSubmit.apply(null, arguments)
                },
              },
            },
            [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("input-component", {
                    attrs: {
                      classInput: "form-control",
                      label: "Email",
                      id: "email",
                      required: true,
                      type: "email",
                      value: _vm.email,
                      placeholder: "Enter your email",
                      rules: [
                        _vm.validator.required,
                        _vm.validator.emailVailidator,
                      ],
                      name: "email",
                    },
                    on: {
                      input: function ($event) {
                        _vm.email = $event.value
                      },
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("input-component", {
                    attrs: {
                      classInput: "form-control",
                      label: "Password",
                      id: "password",
                      required: true,
                      type: "password",
                      value: _vm.password,
                      rules: [
                        _vm.validator.required,
                        _vm.validator.passwordValidator,
                      ],
                      name: "password",
                      placeholder: "Enter your password",
                    },
                    on: {
                      input: function ($event) {
                        _vm.password = $event.value
                      },
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              Object.keys(_vm.errors).length > 0
                ? _c("alert-component", {
                    attrs: { errors: _vm.errors },
                    on: { closeAlert: _vm.closeAlert },
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center py-2" },
                [
                  _c("button-component", {
                    attrs: { "text-button": "Login", type: "submit" },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/sass/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9vdGhlci9hbGVydC9BbGVydENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL290aGVyL2J1dHRvbi9CdXR0b25Db21wb25lbnQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9vdGhlci9pbnB1dC9JbnB1dENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL290aGVyL2xvYWRpbmcvTG9hZGluZ0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2UvYXV0aC9sb2dpbi9Mb2dpbkNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbW1vbi92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2UvYXV0aC9sb2dpbi9TdG9yZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlL2F1dGgvbG9naW4vbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2RlZmluZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGx1Z2lucy9heGlvcy5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL290aGVyL2FsZXJ0L0FsZXJ0Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9vdGhlci9idXR0b24vQnV0dG9uQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9vdGhlci9pbnB1dC9JbnB1dENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvb3RoZXIvbG9hZGluZy9Mb2FkaW5nQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlL2F1dGgvbG9naW4vTG9naW5Db21wb25lbnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL290aGVyL2FsZXJ0L0FsZXJ0Q29tcG9uZW50LnZ1ZT9hOWFjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL290aGVyL2J1dHRvbi9CdXR0b25Db21wb25lbnQudnVlPzNhN2QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvb3RoZXIvaW5wdXQvSW5wdXRDb21wb25lbnQudnVlP2M2MjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvb3RoZXIvbG9hZGluZy9Mb2FkaW5nQ29tcG9uZW50LnZ1ZT8zMmU1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3BhZ2UvYXV0aC9sb2dpbi9Mb2dpbkNvbXBvbmVudC52dWU/NjFiZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9vdGhlci9hbGVydC9BbGVydENvbXBvbmVudC52dWU/ZDM4NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9vdGhlci9idXR0b24vQnV0dG9uQ29tcG9uZW50LnZ1ZT9jZThjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL290aGVyL2lucHV0L0lucHV0Q29tcG9uZW50LnZ1ZT9jMjY4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL290aGVyL2xvYWRpbmcvTG9hZGluZ0NvbXBvbmVudC52dWU/Mjg2ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlL2F1dGgvbG9naW4vTG9naW5Db21wb25lbnQudnVlPzkzOGIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXIgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93IG15LTJcIiByb2xlPVwiYWxlcnRcIiB2LWlmPVwiT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPiAwXCI+XG4gICAgICAgIDxkaXYgdi1mb3I9XCIobWVzc2FnZXMpIGluIGVycm9yc1wiIGNsYXNzPVwidy0xMDBcIj5cbiAgICAgICAgICAgIDxsaSB2LWZvcj1cIm1lc3NhZ2UgaW4gbWVzc2FnZXNcIiBjbGFzcz1cImQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm0tMFwiPnt7IG1lc3NhZ2UgfX08L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbkNvbXBvbmVudFxuICAgICAgICAgICAgdi1pZj1cImVycm9yc1wiXG4gICAgICAgICAgICA6c3R5bGUtYnV0dG9uPVwic3R5bGVCdXR0b25cIlxuICAgICAgICAgICAgOnRleHQtYnV0dG9uPVwiJ3gnXCJcbiAgICAgICAgICAgIDpjbGFzcy1idXR0b249XCInJ1wiXG4gICAgICAgICAgICA6b25jbGljaz1cImNsb3NlQWxlcnRcIlxuICAgICAgICAgICAgOnR5cGU9XCInYnV0dG9uJ1wiXG4gICAgICAgID48L2J1dHRvbkNvbXBvbmVudD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYnV0dG9uQ29tcG9uZW50IGZyb20gJy4uL2J1dHRvbi9CdXR0b25Db21wb25lbnQudnVlJztcbmltcG9ydCB7IHJlZiB9IGZyb20gJ0B2dWUvY29tcG9zaXRpb24tYXBpJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkFsZXJ0Q29tcG9uZW50XCIsXG4gICAgY29tcG9uZW50cyA6IHtcbiAgICAgICAgYnV0dG9uQ29tcG9uZW50XG4gICAgfSxcbiAgICBwcm9wcyA6IHtcbiAgICAgICAgZXJyb3JzIDoge1xuICAgICAgICAgICAgdHlwZSA6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQgOiAoKSA9PiBbXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXR1cChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICAgICAgY29uc3Qgc3R5bGVCdXR0b24gPSByZWYoe1xuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnMTBweCcsXG4gICAgICAgICAgICB0b3A6ICcxMHB4J1xuICAgICAgICB9KVxuICAgICAgICBjb25zdCBjbG9zZUFsZXJ0ID0gKCkgPT4ge1xuICAgICAgICAgICAgZW1pdCgnY2xvc2VBbGVydCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdHlsZUJ1dHRvbixcbiAgICAgICAgICAgIGNsb3NlQWxlcnRcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxidXR0b25cbiAgICAgICAgOnR5cGU9XCJ0eXBlQnV0dG9uXCJcbiAgICAgICAgdi1vbjpjbGljaz1cIm9uY2xpY2tcIlxuICAgICAgICA6Y2xhc3M9XCJjbGFzc0J1dHRvblwiXG4gICAgICAgIDpzdHlsZT1cInN0eWxlQnV0dG9uXCJcbiAgICA+XG4gICAgICAgIHt7IHRleHRCdXR0b24gfX1cbiAgICA8L2J1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJCdXR0b25Db21wb25lbnRcIixcbiAgICBwcm9wczoge1xuICAgICAgICBjbGFzc0J1dHRvbjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICdidG4gYnRuLXByaW1hcnkgdy0xMDAnIH0sXG4gICAgICAgIHR5cGVCdXR0b246IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnc3VibWl0J30sXG4gICAgICAgIHRleHRCdXR0b246IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnTG9naW4nIH0sXG4gICAgICAgIG9uY2xpY2s6IHsgdHlwZTogRnVuY3Rpb24sIGRlZmF1bHQ6ICgpID0+IHt9IH0sXG4gICAgICAgIHN0eWxlQnV0dG9uOiB7IHR5cGU6IE9iamVjdCwgZGVmYXVsdDogKCkgPT4ge30gfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jb21wb25lbnRcIj5cbiAgICAgICAgPGxhYmVsIHYtaWY9XCJsYWJlbFwiIDpmb3I9XCJpZFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICA6aWQ9XCJpZFwiXG4gICAgICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgOnR5cGU9XCJ0eXBlXCJcbiAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIDpyZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgIDpjbGFzcz1cImNsYXNzSW5wdXQgKyBjbGFzc1ZhbGlkYXRlXCJcbiAgICAgICAgICAgIDpzdHlsZT1cInN0eWxlSW5wdXRcIlxuICAgICAgICAgICAgdi1vbjprZXl1cD1cInZhbGlkYXRlXCJcbiAgICAgICAgICAgIHYtb246a2V5ZG93bj1cInZhbGlkYXRlXCJcbiAgICAgICAgICAgIHYtb246a2V5cHJlc3M9XCJ2YWxpZGF0ZVwiXG4gICAgICAgICAgICB2LW9uOmNoYW5nZT1cInZhbGlkYXRlXCJcbiAgICAgICAgICAgIHYtb246Ymx1cj1cInZhbGlkYXRlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNvbXBvbmVudF9fZXJyb3IgdGV4dC1kYW5nZXJcIiB2LWlmPVwiZXJyb3IgIT09IHRydWVcIj57eyBlcnJvciB9fTwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGNoZWNrSWZGdW5jdGlvbiB9IGZyb20gJ0Bjb21tb24vJ1xuaW1wb3J0IHsgcmVmLCB3YXRjaCB9IGZyb20gXCJAdnVlL2NvbXBvc2l0aW9uLWFwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJJbnB1dENvbXBvbmVudFwiLFxuICAgIHByb3BzIDoge1xuICAgICAgICBydWxlczogeyB0eXBlOiBBcnJheSwgZGVmYXVsdDogKCkgPT4gW10gfSxcbiAgICAgICAgY2xhc3NJbnB1dCA6IHsgdHlwZSA6IFN0cmluZywgZGVmYXVsdCA6ICcnIH0sXG4gICAgICAgIGlkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogbnVsbCB9LFxuICAgICAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogbnVsbCB9LFxuICAgICAgICB0eXBlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogXCJ0ZXh0XCIgfSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBudWxsIH0sXG4gICAgICAgIHZhbHVlOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogbnVsbCB9LFxuICAgICAgICBkaXNhYmxlZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgICByZXF1aXJlZDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxuICAgICAgICBsYWJlbDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IG51bGwgfSxcbiAgICAgICAgc3R5bGVJbnB1dDogeyB0eXBlOiBPYmplY3QsIGRlZmF1bHQ6ICgpID0+ICh7fSkgfSxcbiAgICB9LFxuICAgIHNldHVwKHByb3BzLCB7IGVtaXQgfSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IHJlZihudWxsKVxuICAgICAgICBjb25zdCBjbGFzc1ZhbGlkYXRlID0gcmVmKCcnKVxuICAgICAgICBjb25zdCB2YWxpZGF0ZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIGxldCBlcnJvcnMgPSBbXVxuICAgICAgICAgICAgaWYgKHByb3BzLnJ1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5ydWxlcy5mb3JFYWNoKHJ1bGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci52YWx1ZSA9ICBjaGVja0lmRnVuY3Rpb24ocnVsZSkgPyBydWxlKHZhbHVlKSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBlcnJvci52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycm9yLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuc2xpY2UoMCwgZXJyb3JzLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjbGFzc1ZhbGlkYXRlLnZhbHVlID0gZXJyb3JzLmxlbmd0aCA+IDAgPyAnIGlzLWludmFsaWQnIDogJyBpcy12YWxpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVtaXQoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgICAgICBldmVudFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hlY2tJZkZ1bmN0aW9uLFxuICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICBjbGFzc1ZhbGlkYXRlLFxuICAgICAgICAgICAgdmFsaWRhdGVcbiAgICAgICAgfVxuICAgIH0sXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIlxuPHRlbXBsYXRlPlxuICAgIDxsb2FkZXIgdi1pZj1cImxvYWRpbmdcIiBvYmplY3Q9XCIjZmY5NjMzXCIgY29sb3IxPVwiI2ZmZmZmZlwiIGNvbG9yMj1cIiMxN2ZkM2RcIiBzaXplPVwiNVwiIHNwZWVkPVwiMlwiIGJnPVwiIzM0M2E0MFwiIG9iamVjdGJnPVwiIzk5OTc5M1wiIG9wYWNpdHk9XCI4MFwiIG5hbWU9XCJjaXJjdWxhclwiPjwvbG9hZGVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAnQHZ1ZS9jb21wb3NpdGlvbi1hcGknXG5pbXBvcnQgc3RvcmUgZnJvbSAnQC9zdG9yZSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcImxvYWRpbmdcIixcbiAgICBzZXR1cChwcm9wcykge1xuICAgICAgICBjb25zdCBsb2FkaW5nID0gY29tcHV0ZWQoKCkgPT4gc3RvcmUuc3RhdGUubG9hZGluZylcbiAgICAgICAgcmV0dXJuIHsgbG9hZGluZyB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS13cmFwXCIgOnN0eWxlPVwic3R5bGVGb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbi1mb3JtLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7IHRpdGxlIH19PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW4tZm9ybS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cImhhbmRsZVN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQtY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzc0lucHV0PVwiJ2Zvcm0tY29udHJvbCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCInRW1haWwnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlkPVwiJ2VtYWlsJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZXF1aXJlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dHlwZT1cIidlbWFpbCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIidFbnRlciB5b3VyIGVtYWlsJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlt2YWxpZGF0b3IucmVxdWlyZWQsIHZhbGlkYXRvci5lbWFpbFZhaWxpZGF0b3JdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCInZW1haWwnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiZW1haWwgPSAkZXZlbnQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2lucHV0LWNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQtY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzc0lucHV0PVwiJ2Zvcm0tY29udHJvbCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCInUGFzc3dvcmQnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlkPVwiJ3Bhc3N3b3JkJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZXF1aXJlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dHlwZT1cIidwYXNzd29yZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpydWxlcz1cIlt2YWxpZGF0b3IucmVxdWlyZWQsIHZhbGlkYXRvci5wYXNzd29yZFZhbGlkYXRvcl1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cIidwYXNzd29yZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XCInRW50ZXIgeW91ciBwYXNzd29yZCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJwYXNzd29yZCA9ICRldmVudC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaW5wdXQtY29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YWxlcnQtY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9ycz1cImVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbG9zZUFsZXJ0PVwiY2xvc2VBbGVydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9hbGVydC1jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24tY29tcG9uZW50IDp0ZXh0LWJ1dHRvbj1cIidMb2dpbidcIiA6dHlwZT1cIidzdWJtaXQnXCI+PC9idXR0b24tY29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IHJlZ2lzdGVyTW9kdWxlIH0gZnJvbSBcIkBjb21tb25cIjtcbmltcG9ydCBTdG9yZU1vZHVsZSAgZnJvbSBcIi4vU3RvcmVNb2R1bGVcIjtcbmltcG9ydCBhbGVydENvbXBvbmVudCBmcm9tIFwiQG90aGVyL2FsZXJ0L0FsZXJ0Q29tcG9uZW50XCI7XG5pbXBvcnQgaW5wdXRDb21wb25lbnQgZnJvbSBcIkBvdGhlci9pbnB1dC9JbnB1dENvbXBvbmVudFwiO1xuaW1wb3J0IGJ1dHRvbkNvbXBvbmVudCBmcm9tIFwiQG90aGVyL2J1dHRvbi9CdXR0b25Db21wb25lbnRcIjtcbmltcG9ydCB7IHJlcXVpcmVkLCBlbWFpbFZhaWxpZGF0b3IsIHBhc3N3b3JkVmFsaWRhdG9yIH0gZnJvbSBcIkBjb21tb24vdmFsaWRhdGlvblwiO1xuaW1wb3J0IGxvZ2luIGZyb20gJy4vbG9naW4nO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiTG9naW5Db21wb25lbnRcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGFsZXJ0Q29tcG9uZW50LFxuICAgICAgICBpbnB1dENvbXBvbmVudCxcbiAgICAgICAgYnV0dG9uQ29tcG9uZW50XG4gICAgfSxcbiAgICBzZXR1cCgpIHtcbiAgICAgICAgcmVnaXN0ZXJNb2R1bGUoU3RvcmVNb2R1bGUsICdsb2dpbk1vZHVsZScpO1xuXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIHN0eWxlRm9ybSwgaGFuZGxlU3VibWl0LCBlbWFpbCwgcGFzc3dvcmQsIGVycm9ycywgc3RhdHVzIH0gPSBsb2dpbigpO1xuICAgICAgICBjb25zdCBjbG9zZUFsZXJ0ID0gKCkgPT4ge1xuICAgICAgICAgICAgZXJyb3JzLnZhbHVlID0ge31cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgIHN0eWxlRm9ybSxcbiAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIGNsb3NlQWxlcnQsXG4gICAgICAgICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBlbWFpbFZhaWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRWYWxpZGF0b3JcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiZXhwb3J0IGNvbnN0IGFwcENvbmZpZyA9IHtcbiAgICAnYXBpVXJsJzogJy8nLFxuICAgICdhcHBOYW1lJzogJ1RvZG8gQXBwJyxcbiAgICAnYXBwVmVyc2lvbic6ICcxLjAuMCcsXG4gICAgJ2FwcERlc2NyaXB0aW9uJzogJ1RvZG8gQXBwJyxcbiAgICAnYXBwS2V5d29yZHMnOiAnVG9kbyBBcHAnLFxuICAgICdhcHBBdXRob3InOiAnVG9kbyBBcHAnLFxuICAgICdhcHBBdXRob3JFbWFpbCc6ICdUb2RvIEFwcCcsXG4gICAgJ2FwcEF1dGhvclVybCc6ICdUb2RvIEFwcCdcbn1cblxuIiwiXG5yZXF1aXJlKCcuL2Jvb3RzdHJhcCcpO1xuXG53aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJykuZGVmYXVsdDtcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IFZ1ZVRvYXN0ciBmcm9tIFwidnVlLXRvYXN0clwiO1xuXG5pbXBvcnQgVnVlQ29tcG9zaXRpb25BUEkgZnJvbSAnQHZ1ZS9jb21wb3NpdGlvbi1hcGknXG5pbXBvcnQgeyBjb21wdXRlZCwgd2F0Y2ggfSBmcm9tICdAdnVlL2NvbXBvc2l0aW9uLWFwaSdcbmltcG9ydCB7IGRlZmluZSB9IGZyb20gJ0AvZGVmaW5lJ1xuaW1wb3J0IGxvYWRlciBmcm9tIFwidnVlLXVpLXByZWxvYWRlclwiO1xuXG5WdWUudXNlKGxvYWRlcik7XG5WdWUudXNlKFZ1ZUNvbXBvc2l0aW9uQVBJKVxuVnVlLnVzZShWdWVUb2FzdHIsIGRlZmluZS50b2FzdHJPcHRpb25zKTtcblxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2U7XG5cblZ1ZS5jb21wb25lbnQoJ2xvZ2luLWNvbXBvbmVudCcsIHJlcXVpcmUoJ0BwYWdlL2F1dGgvbG9naW4vTG9naW5Db21wb25lbnQudnVlJykuZGVmYXVsdCk7XG5WdWUuY29tcG9uZW50KCdsb2FkaW5nLWNvbXBvbmVudCcsIHJlcXVpcmUoJ0BvdGhlci9sb2FkaW5nL0xvYWRpbmdDb21wb25lbnQudnVlJykuZGVmYXVsdCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICAgICAgICBlbDogJyNhcHAnLFxuICAgICAgICBzdG9yZTogc3RvcmUsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIFwibG9hZGluZy1jb21wb25lbnRcIjogcmVxdWlyZSgnQG90aGVyL2xvYWRpbmcvTG9hZGluZ0NvbXBvbmVudC52dWUnKS5kZWZhdWx0LFxuICAgICAgICB9LFxuICAgICAgICB3YXRjaCA6IHtcbiAgICAgICAgICAgIHRvYXN0QWxlcnQodCl7XG4gICAgICAgICAgICAgICAgaWYodC50eXBlICYmIHQudHlwZSA9PSBkZWZpbmUuc3RhdHVzU3VjY2Vzcyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHRvYXN0ci5zKHQubWVzc2FnZSwgdC50aXRsZSk7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodC50eXBlICYmIHQudHlwZSA9PSBkZWZpbmUuc3RhdHVzRXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiR0b2FzdHIuZSh0Lm1lc3NhZ2UsIHQudGl0bGUpO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXR1cCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvYXN0QWxlcnQgPSBjb21wdXRlZCgoKSA9PiBzdG9yZS5zdGF0ZS50b2FzdEFsZXJ0KVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b2FzdEFsZXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn0pXG5cbiIsIndpbmRvdy5fID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbnRyeSB7XG4gICAgcmVxdWlyZSgnYm9vdHN0cmFwJyk7XG59IGNhdGNoIChlKSB7fVxuXG4vKipcbiAqIFdlJ2xsIGxvYWQgdGhlIGF4aW9zIEhUVFAgbGlicmFyeSB3aGljaCBhbGxvd3MgdXMgdG8gZWFzaWx5IGlzc3VlIHJlcXVlc3RzXG4gKiB0byBvdXIgTGFyYXZlbCBiYWNrLWVuZC4gVGhpcyBsaWJyYXJ5IGF1dG9tYXRpY2FsbHkgaGFuZGxlcyBzZW5kaW5nIHRoZVxuICogQ1NSRiB0b2tlbiBhcyBhIGhlYWRlciBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIFwiWFNSRlwiIHRva2VuIGNvb2tpZS5cbiAqL1xuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nO1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0tFWSxcbi8vICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5NSVhfUFVTSEVSX0FQUF9DTFVTVEVSLFxuLy8gICAgIGZvcmNlVExTOiB0cnVlXG4vLyB9KTtcbiIsImltcG9ydCB7IGFwcENvbmZpZyB9IGZyb20gJy4uL2FwcC5jb25maWcnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyBvblVubW91bnRlZCB9IGZyb20gJ0B2dWUvY29tcG9zaXRpb24tYXBpJ1xuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyTW9kdWxlID0gKG1vZHVsZSAsIG5hbWVNb2R1bGUgPSAnYXBwJykgPT4ge1xuICAgIGNvbnN0IEFQUF9TVE9SRV9NT0RVTEVfTkFNRSA9IG5hbWVNb2R1bGVcbiAgICAvLyBSZWdpc3RlciBtb2R1bGVcbiAgICBpZiAoIXN0b3JlLmhhc01vZHVsZShBUFBfU1RPUkVfTU9EVUxFX05BTUUpKSB7XG4gICAgICAgIHN0b3JlLnJlZ2lzdGVyTW9kdWxlKEFQUF9TVE9SRV9NT0RVTEVfTkFNRSwgbW9kdWxlKVxuICAgIH1cbiAgICAvLyBVblJlZ2lzdGVyIG9uIGxlYXZlXG4gICAgb25Vbm1vdW50ZWQoKCkgPT4ge1xuICAgICAgICBzdG9yZS5jb21taXQoJ3NldE1vZHVsZU5hbWUnLCBudWxsKVxuICAgICAgICBpZiAoc3RvcmUuaGFzTW9kdWxlKEFQUF9TVE9SRV9NT0RVTEVfTkFNRSkpIHN0b3JlLnVucmVnaXN0ZXJNb2R1bGUoQVBQX1NUT1JFX01PRFVMRV9OQU1FKVxuICAgIH0pXG59XG5leHBvcnQgY29uc3QgY2hlY2tJZkZ1bmN0aW9uID0gKGZ1bmMpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIGZ1bmMgPT0gJ2Z1bmN0aW9uJ1xufVxuIiwiZXhwb3J0IGNvbnN0IHJlcXVpcmVkID0gdmFsdWUgPT4ge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiAwIHx8ICAnUmVxdWlyZWQnO1xufTtcbmV4cG9ydCBjb25zdCBlbWFpbFZhaWxpZGF0b3IgPSB2YWx1ZSA9PiB7XG4gICByZXR1cm4gIHZhbHVlICYmIC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8udGVzdCh2YWx1ZSkgfHwgJ0ludmFsaWQgZW1haWwgYWRkcmVzcyc7XG59XG5leHBvcnQgY29uc3QgcGFzc3dvcmRWYWxpZGF0b3IgPSBwYXNzd29yZCA9PiB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdXNlbGVzcy1lc2NhcGUgKi9cbiAgICBjb25zdCByZWdFeHAgPSAvKD89LipbYS16XSkoPz0uKlt+YCFAIyQlXiYqKCktLSs9e31bXXw6O1wiJzw+LF/igrldKXs4fS9cbiAgICBjb25zdCByZWdFeHAyID0gLyg/PS4qXFxkKSg/PS4qW2Etel0pezh9L1xuICAgIGNvbnN0IHJlZ0V4cDMgPSAvKD89LipcXGQpKD89LipbfmAhQCMkJV4mKigpLS0rPXt9W118OjtcIic8Pixf4oK5XSl7OH0vXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11c2VsZXNzLWVzY2FwZSAqL1xuICAgIGNvbnN0IHZhbGlkUGFzc3dvcmQgPSByZWdFeHAudGVzdChwYXNzd29yZClcbiAgICBjb25zdCB2YWxpZFBhc3N3b3JkMiA9IHJlZ0V4cDIudGVzdChwYXNzd29yZClcbiAgICBjb25zdCB2YWxpZFBhc3N3b3JkMyA9IHJlZ0V4cDMudGVzdChwYXNzd29yZClcblxuICAgIHJldHVybiAodmFsaWRQYXNzd29yZCB8fCB2YWxpZFBhc3N3b3JkMiB8fCB2YWxpZFBhc3N3b3JkMykgfHwgJ1Bhc3N3b3JkIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgbnVtYmVyLCBvbmUgbG93ZXJjYXNlIGFuZCBvbmUgdXBwZXJjYXNlIGxldHRlciwgYW5kIGF0IGxlYXN0IDggb3IgbW9yZSBjaGFyYWN0ZXJzJztcblxufVxuXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnQHBsdWdpbnMvYXhpb3MuY29uZmlnJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgZ2V0dGVyczoge30sXG4gICAgc3RhdGU6IHtcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGwsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgICBoYW5kbGVTdWJtaXQoY3R4LCBxdWVyeVBhcmFtcykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgICAgICAgICAucG9zdCgnL2xvZ2luJywgcXVlcnlQYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc29sdmUocmVzcG9uc2UpKVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVmLCB3YXRjaCB9IGZyb20gJ0B2dWUvY29tcG9zaXRpb24tYXBpJ1xuaW1wb3J0IHN0b3JlIGZyb20gJ0BzdG9yZSdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luKCkge1xuICAgIGNvbnN0IGVtYWlsID0gcmVmKCcnKVxuICAgIGNvbnN0IHBhc3N3b3JkID0gcmVmKCcnKVxuICAgIGNvbnN0IGVycm9ycyA9IHJlZih7fSlcbiAgICBjb25zdCB0aXRsZSA9IHJlZignTG9naW4nKTtcbiAgICBjb25zdCBzdGF0dXMgPSByZWYoJycpO1xuICAgIGNvbnN0IHN0eWxlRm9ybSA9IHJlZih7XG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgd2lkdGg6ICc1MCUnLFxuICAgIH0pO1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoIXN0b3JlLnN0YXRlLmxvYWRpbmcpe1xuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdzZXRMb2FkaW5nJywgdHJ1ZSlcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLnZhbHVlLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC52YWx1ZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCdsb2dpbk1vZHVsZS9oYW5kbGVTdWJtaXQnLCBkYXRhKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIGVycm9ycy52YWx1ZSA9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzO1xuICAgICAgICAgICAgICAgIHN0YXR1cy52YWx1ZSA9ICdlcnJvcic7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICByZXR1cm4ge1xuICAgIGVtYWlsLFxuICAgIHBhc3N3b3JkLFxuICAgIGVycm9ycyxcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgc3R5bGVGb3JtLHRpdGxlLFxuICAgIHN0YXR1c1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgZGVmaW5lID0ge1xuICAgIHN0YXR1c1N1Y2Nlc3M6ICdzdWNjZXNzJyxcbiAgICBzdGF0dXNFcnJvcjogJ2Vycm9yJyxcbiAgICB0b2FzdHJPcHRpb25zIDoge1xuICAgICAgICBvbkNsb3NlZCA6IHRydWUsXG4gICAgICAgIGNsaWNrQ2xvc2UgOiB0cnVlLFxuICAgICAgICBwb3NpdGlvbiA6ICd0b2FzdC10b3AtY2VudGVyJyxcbiAgICB9XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBzdG9yZSBmcm9tIFwiQHN0b3JlXCI7XG5pbXBvcnQgeyBhcHBDb25maWcgfSBmcm9tIFwiLi4vYXBwLmNvbmZpZ1wiO1xuXG5jb25zdCBheGlvc0lucyA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgLy8gWW91IGNhbiBhZGQgeW91ciBoZWFkZXJzIGhlcmVcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGJhc2VVUkwgOiBhcHBDb25maWcuYXBpVXJsLFxuICAgIC8vIHRpbWVvdXQ6IDEwMDAsXG4gICAgaGVhZGVycyA6IHtcbiAgICAgICAgJ0FjY2VwdCcgICAgICAgICAgOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfVxufSlcblxuYXhpb3NJbnMuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICAgIGNvbmZpZyA9PiB7XG4gICAgICAgIC8vIERvIHNvbWV0aGluZyBiZWZvcmUgcmVxdWVzdCBpcyBzZW50XG4gICAgICAgIHJldHVybiBjb25maWdcbiAgICB9LFxuICAgIGVycm9yID0+IHtcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgfSxcbilcbmF4aW9zSW5zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCByZXNwb25zZSBkYXRhXG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0sXG4gICAgZXJyID0+IHtcblxuICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICBhbGVydCgnNDA0IE5vdCBGb3VuZCcpXG4gICAgICAgIH1cbiAgICAgICAgc3RvcmUuY29tbWl0KCdzZXRMb2FkaW5nJywgZmFsc2UpXG4gICAgICAgIHN0b3JlLmNvbW1pdCgnc2V0VG9hc3RBbGVydCcsIHtcbiAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycilcblxuICAgIH0sXG5cbilcblxuVnVlLnByb3RvdHlwZS4kaHR0cCA9IGF4aW9zSW5zXG5cbmV4cG9ydCBkZWZhdWx0IGF4aW9zSW5zXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXG5WdWUudXNlKFZ1ZXgpXG5leHBvcnQgZGVmYXVsdCBuZXcgVnVleC5TdG9yZSh7XG4gICAgc3RhdGUgOiB7XG4gICAgICAgIGxvYWRpbmcgOiBmYWxzZSxcbiAgICAgICAgdXNlciA6IHtcbiAgICAgICAgICAgIGlkIDogJycsXG4gICAgICAgICAgICBuYW1lIDogJycsXG4gICAgICAgICAgICBlbWFpbCA6ICcnLFxuICAgICAgICAgICAgcm9sZSA6ICcnLFxuICAgICAgICAgICAgdG9rZW4gOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB0b2FzdEFsZXJ0IDoge1xuICAgICAgICAgICAgdHlwZSA6ICcnLFxuICAgICAgICAgICAgdGV4dCA6ICcnLFxuICAgICAgICAgICAgbWVzc2FnZSA6ICcnXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgc2V0TG9hZGluZyAoc3RhdGUsIHZhbHVlKXtcbiAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSB2YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBzZXRVc2VyIChzdGF0ZSwgdmFsdWUpe1xuICAgICAgICAgICAgc3RhdGUudXNlciA9IHZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIHNldFRvYXN0QWxlcnQgKHN0YXRlLCB2YWx1ZSl7XG4gICAgICAgICAgICBzdGF0ZS50b2FzdEFsZXJ0ID0gdmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxufSlcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWxlcnRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdhMDdmMmRlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FsZXJ0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWxlcnRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3YTA3ZjJkZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcRGVza3RvcFxcXFxsYXJhdmVsLWJsb2ctdnVlXFxcXGxhcmF2ZWxcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2EwN2YyZGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2EwN2YyZGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2EwN2YyZGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FsZXJ0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YTA3ZjJkZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YTA3ZjJkZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvb3RoZXIvYWxlcnQvQWxlcnRDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CdXR0b25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkwYzgxYmQwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0J1dHRvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0J1dHRvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjkwYzgxYmQwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxEZXNrdG9wXFxcXGxhcmF2ZWwtYmxvZy12dWVcXFxcbGFyYXZlbFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5MGM4MWJkMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5MGM4MWJkMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5MGM4MWJkMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQnV0dG9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MGM4MWJkMCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5MGM4MWJkMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvb3RoZXIvYnV0dG9uL0J1dHRvbkNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0lucHV0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MGJiMTYwMiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbnB1dENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0lucHV0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjBiYjE2MDJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcbGFyYXZlbC1ibG9nLXZ1ZVxcXFxsYXJhdmVsXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYwYmIxNjAyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYwYmIxNjAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYwYmIxNjAyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbnB1dENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjBiYjE2MDImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjBiYjE2MDInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL290aGVyL2lucHV0L0lucHV0Q29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9hZGluZ0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWM0ZjdkNDQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9hZGluZ0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvYWRpbmdDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJhYzRmN2Q0NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEFkbWluaXN0cmF0b3JcXFxcRGVza3RvcFxcXFxsYXJhdmVsLWJsb2ctdnVlXFxcXGxhcmF2ZWxcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYWM0ZjdkNDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYWM0ZjdkNDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYWM0ZjdkNDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvYWRpbmdDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFjNGY3ZDQ0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2FjNGY3ZDQ0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9vdGhlci9sb2FkaW5nL0xvYWRpbmdDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dpbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmE2OWRiYTgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9naW5Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImJhNjlkYmE4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxEZXNrdG9wXFxcXGxhcmF2ZWwtYmxvZy12dWVcXFxcbGFyYXZlbFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiYTY5ZGJhOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiYTY5ZGJhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiYTY5ZGJhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW5Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJhNjlkYmE4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2JhNjlkYmE4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9wYWdlL2F1dGgvbG9naW4vTG9naW5Db21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FsZXJ0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FsZXJ0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdXR0b25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnV0dG9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTVbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9hZGluZ0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2FkaW5nQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBPYmplY3Qua2V5cyhfdm0uZXJyb3JzKS5sZW5ndGggPiAwXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlciBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3cgbXktMlwiLFxuICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5lcnJvcnMsIGZ1bmN0aW9uIChtZXNzYWdlcykge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctMTAwXCIgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKG1lc3NhZ2VzLCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1ibG9ja1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm0tMFwiIH0sIFtfdm0uX3YoX3ZtLl9zKG1lc3NhZ2UpKV0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZXJyb3JzXG4gICAgICAgICAgICA/IF9jKFwiYnV0dG9uQ29tcG9uZW50XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJzdHlsZS1idXR0b25cIjogX3ZtLnN0eWxlQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWJ1dHRvblwiOiBcInhcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3MtYnV0dG9uXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBvbmNsaWNrOiBfdm0uY2xvc2VBbGVydCxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJidXR0b25cIixcbiAgICB7XG4gICAgICBjbGFzczogX3ZtLmNsYXNzQnV0dG9uLFxuICAgICAgc3R5bGU6IF92bS5zdHlsZUJ1dHRvbixcbiAgICAgIGF0dHJzOiB7IHR5cGU6IF92bS50eXBlQnV0dG9uIH0sXG4gICAgICBvbjogeyBjbGljazogX3ZtLm9uY2xpY2sgfSxcbiAgICB9LFxuICAgIFtfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLnRleHRCdXR0b24pICsgXCJcXG5cIildXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWNvbXBvbmVudFwiIH0sIFtcbiAgICBfdm0ubGFiZWxcbiAgICAgID8gX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogX3ZtLmlkIH0gfSwgW192bS5fdihfdm0uX3MoX3ZtLmxhYmVsKSldKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgY2xhc3M6IF92bS5jbGFzc0lucHV0ICsgX3ZtLmNsYXNzVmFsaWRhdGUsXG4gICAgICBzdHlsZTogX3ZtLnN0eWxlSW5wdXQsXG4gICAgICBhdHRyczoge1xuICAgICAgICBpZDogX3ZtLmlkLFxuICAgICAgICBuYW1lOiBfdm0ubmFtZSxcbiAgICAgICAgdHlwZTogX3ZtLnR5cGUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBfdm0ucGxhY2Vob2xkZXIsXG4gICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWQsXG4gICAgICAgIHJlcXVpcmVkOiBfdm0ucmVxdWlyZWQsXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAga2V5dXA6IF92bS52YWxpZGF0ZSxcbiAgICAgICAga2V5ZG93bjogX3ZtLnZhbGlkYXRlLFxuICAgICAgICBrZXlwcmVzczogX3ZtLnZhbGlkYXRlLFxuICAgICAgICBjaGFuZ2U6IF92bS52YWxpZGF0ZSxcbiAgICAgICAgYmx1cjogX3ZtLnZhbGlkYXRlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5lcnJvciAhPT0gdHJ1ZVxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWNvbXBvbmVudF9fZXJyb3IgdGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3IpKSxcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmxvYWRpbmdcbiAgICA/IF9jKFwibG9hZGVyXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBvYmplY3Q6IFwiI2ZmOTYzM1wiLFxuICAgICAgICAgIGNvbG9yMTogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgY29sb3IyOiBcIiMxN2ZkM2RcIixcbiAgICAgICAgICBzaXplOiBcIjVcIixcbiAgICAgICAgICBzcGVlZDogXCIyXCIsXG4gICAgICAgICAgYmc6IFwiIzM0M2E0MFwiLFxuICAgICAgICAgIG9iamVjdGJnOiBcIiM5OTk3OTNcIixcbiAgICAgICAgICBvcGFjaXR5OiBcIjgwXCIsXG4gICAgICAgICAgbmFtZTogXCJjaXJjdWxhclwiLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS13cmFwXCIsIHN0eWxlOiBfdm0uc3R5bGVGb3JtIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9naW4tZm9ybVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbi1mb3JtLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dpbi1mb3JtLWJvZHlcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmhhbmRsZVN1Ym1pdC5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0LWNvbXBvbmVudFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NJbnB1dDogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgeW91ciBlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udmFsaWRhdG9yLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRvci5lbWFpbFZhaWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbWFpbCA9ICRldmVudC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXQtY29tcG9uZW50XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc0lucHV0OiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRvci5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS52YWxpZGF0b3IucGFzc3dvcmRWYWxpZGF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRW50ZXIgeW91ciBwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKF92bS5lcnJvcnMpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IF9jKFwiYWxlcnQtY29tcG9uZW50XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZXJyb3JzOiBfdm0uZXJyb3JzIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsb3NlQWxlcnQ6IF92bS5jbG9zZUFsZXJ0IH0sXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBweS0yXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImJ1dHRvbi1jb21wb25lbnRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcInRleHQtYnV0dG9uXCI6IFwiTG9naW5cIiwgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sIm5hbWVzIjpbIm5hbWUiLCJjb21wb25lbnRzIiwiYnV0dG9uQ29tcG9uZW50IiwicHJvcHMiLCJlcnJvcnMiLCJ0eXBlIiwic2V0dXAiLCJib3JkZXIiLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwiZW1pdCIsInN0eWxlQnV0dG9uIiwiY2xvc2VBbGVydCIsImNsYXNzQnV0dG9uIiwidHlwZUJ1dHRvbiIsInRleHRCdXR0b24iLCJvbmNsaWNrIiwicnVsZXMiLCJjbGFzc0lucHV0IiwiaWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwiZGlzYWJsZWQiLCJyZXF1aXJlZCIsImxhYmVsIiwic3R5bGVJbnB1dCIsImVycm9yIiwiY2xhc3NWYWxpZGF0ZSIsImV2ZW50IiwiY2hlY2tJZkZ1bmN0aW9uIiwidmFsaWRhdGUiLCJsb2FkaW5nIiwiYWxlcnRDb21wb25lbnQiLCJpbnB1dENvbXBvbmVudCIsInJlZ2lzdGVyTW9kdWxlIiwiZW1haWwiLCJwYXNzd29yZCIsInRpdGxlIiwiaGFuZGxlU3VibWl0Iiwic3R5bGVGb3JtIiwic3RhdHVzIiwidmFsaWRhdG9yIiwiZW1haWxWYWlsaWRhdG9yIiwicGFzc3dvcmRWYWxpZGF0b3IiLCJhcHBDb25maWciLCJyZXF1aXJlIiwid2luZG93IiwiVnVlIiwic3RvcmUiLCJWdWVUb2FzdHIiLCJWdWVDb21wb3NpdGlvbkFQSSIsImNvbXB1dGVkIiwid2F0Y2giLCJkZWZpbmUiLCJsb2FkZXIiLCJ1c2UiLCJ0b2FzdHJPcHRpb25zIiwiY29uZmlnIiwicHJvZHVjdGlvblRpcCIsImNvbXBvbmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHAiLCJlbCIsInRvYXN0QWxlcnQiLCJ0Iiwic3RhdHVzU3VjY2VzcyIsIiR0b2FzdHIiLCJzIiwibWVzc2FnZSIsInN0YXR1c0Vycm9yIiwiZSIsInN0YXRlIiwiXyIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwib25Vbm1vdW50ZWQiLCJtb2R1bGUiLCJuYW1lTW9kdWxlIiwiQVBQX1NUT1JFX01PRFVMRV9OQU1FIiwiaGFzTW9kdWxlIiwiY29tbWl0IiwidW5yZWdpc3Rlck1vZHVsZSIsImZ1bmMiLCJsZW5ndGgiLCJ0ZXN0IiwicmVnRXhwIiwicmVnRXhwMiIsInJlZ0V4cDMiLCJ2YWxpZFBhc3N3b3JkIiwidmFsaWRQYXNzd29yZDIiLCJ2YWxpZFBhc3N3b3JkMyIsIm5hbWVzcGFjZWQiLCJnZXR0ZXJzIiwiaXNMb2FkaW5nIiwiaXNMb2dnZWRJbiIsInVzZXIiLCJhY3Rpb25zIiwiY3R4IiwicXVlcnlQYXJhbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWYiLCJsb2dpbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImFsaWduQ29udGVudCIsImFsaWduU2VsZiIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImRpc3BhdGNoIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb25zb2xlIiwibG9nIiwib25DbG9zZWQiLCJjbGlja0Nsb3NlIiwiYXhpb3NJbnMiLCJjcmVhdGUiLCJiYXNlVVJMIiwiYXBpVXJsIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsImVyciIsImFsZXJ0IiwicHJvdG90eXBlIiwiJGh0dHAiLCJWdWV4IiwiU3RvcmUiLCJyb2xlIiwidG9rZW4iLCJ0ZXh0IiwibXV0YXRpb25zIiwic2V0TG9hZGluZyIsInNldFVzZXIiLCJzZXRUb2FzdEFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==