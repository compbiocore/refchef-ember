'use strict';



;define("refchef-ember/adapters/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTAdapter.extend({
    host: 'https://api.github.com',
    namespace: 'repos/compbiocore/cbc-references-refchef'
  });

  _exports.default = _default;
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/app", ["exports", "refchef-ember/resolver", "ember-load-initializers", "refchef-ember/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var App = /*#__PURE__*/function (_Ember$Application) {
    _inherits(App, _Ember$Application);

    var _super = _createSuper(App);

    function App() {
      var _this;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(_assertThisInitialized(_this), "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(_assertThisInitialized(_this), "Resolver", _resolver.default);

      return _this;
    }

    return _createClass(App);
  }(Ember.Application);

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("refchef-ember/breakpoints", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    desktop: '(min-width: 992px) and (max-width: 1200px)'
  };
  _exports.default = _default;
});
;define("refchef-ember/component-managers/glimmer", ["exports", "@glimmer/component/-private/component-manager"], function (_exports, _componentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _componentManager.default;
    }
  });
});
;define("refchef-ember/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsAccordion.default;
    }
  });
});
;define("refchef-ember/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _item.default;
    }
  });
});
;define("refchef-ember/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _body.default;
    }
  });
});
;define("refchef-ember/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _title.default;
    }
  });
});
;define("refchef-ember/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsAlert.default;
    }
  });
});
;define("refchef-ember/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsButtonGroup.default;
    }
  });
});
;define("refchef-ember/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _button.default;
    }
  });
});
;define("refchef-ember/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsButton.default;
    }
  });
});
;define("refchef-ember/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsCarousel.default;
    }
  });
});
;define("refchef-ember/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _slide.default;
    }
  });
});
;define("refchef-ember/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsCollapse.default;
    }
  });
});
;define("refchef-ember/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsDropdown.default;
    }
  });
});
;define("refchef-ember/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _button.default;
    }
  });
});
;define("refchef-ember/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _menu.default;
    }
  });
});
;define("refchef-ember/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _divider.default;
    }
  });
});
;define("refchef-ember/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _item.default;
    }
  });
});
;define("refchef-ember/components/bs-dropdown/menu/link-to", ["exports", "ember-bootstrap/components/bs-dropdown/menu/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _linkTo.default;
    }
  });
});
;define("refchef-ember/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _toggle.default;
    }
  });
});
;define("refchef-ember/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsForm.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _element.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _control.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _checkbox.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _input.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _radio.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _textarea.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _errors.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _feedbackIcon.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _helpText.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _label.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _horizontal.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _checkbox.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _inline.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _checkbox.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _vertical.default;
    }
  });
});
;define("refchef-ember/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _checkbox.default;
    }
  });
});
;define("refchef-ember/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _group.default;
    }
  });
});
;define("refchef-ember/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsModalSimple.default;
    }
  });
});
;define("refchef-ember/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsModal.default;
    }
  });
});
;define("refchef-ember/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _body.default;
    }
  });
});
;define("refchef-ember/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _dialog.default;
    }
  });
});
;define("refchef-ember/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _footer.default;
    }
  });
});
;define("refchef-ember/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _header.default;
    }
  });
});
;define("refchef-ember/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _close.default;
    }
  });
});
;define("refchef-ember/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _title.default;
    }
  });
});
;define("refchef-ember/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsNav.default;
    }
  });
});
;define("refchef-ember/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _item.default;
    }
  });
});
;define("refchef-ember/components/bs-nav/link-to", ["exports", "ember-bootstrap/components/bs-nav/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _linkTo.default;
    }
  });
});
;define("refchef-ember/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsNavbar.default;
    }
  });
});
;define("refchef-ember/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _content.default;
    }
  });
});
;define("refchef-ember/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _linkTo.default;
    }
  });
});
;define("refchef-ember/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _nav.default;
    }
  });
});
;define("refchef-ember/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _toggle.default;
    }
  });
});
;define("refchef-ember/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsPopover.default;
    }
  });
});
;define("refchef-ember/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _element.default;
    }
  });
});
;define("refchef-ember/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsProgress.default;
    }
  });
});
;define("refchef-ember/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bar.default;
    }
  });
});
;define("refchef-ember/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsTab.default;
    }
  });
});
;define("refchef-ember/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _pane.default;
    }
  });
});
;define("refchef-ember/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsTooltip.default;
    }
  });
});
;define("refchef-ember/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _element.default;
    }
  });
});
;define("refchef-ember/components/card-group", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="d-flex flex-row flex-wrap justify-content-between">
    {{#each @model as |group|}}
    <FileTree @model={{group}} />
    {{/each}}
  </div>
  */
  {
    id: "XiJ6yZCU",
    block: "{\"symbols\":[\"group\",\"@model\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"d-flex flex-row flex-wrap justify-content-between\"],[8],[0,\"\\n\"],[4,\"each\",[[23,2,[]]],null,{\"statements\":[[0,\"  \"],[5,\"file-tree\",[],[[\"@model\"],[[23,1,[]]]]],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}",
    meta: {
      moduleName: "refchef-ember/components/card-group.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("refchef-ember/components/copy-button", ["exports", "ember-cli-clipboard/components/copy-button"], function (_exports, _copyButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _copyButton.default;
    }
  });
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/components/copy", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <CopyButton @clipboardText={{@text}} @success={{this.onSuccess}} @error={{this.onError}}
      title="copy file path to clipboard">
      {{#if this.wasSuccessful}}
      <FaIcon @prefix="fal" @icon="clipboard-check" /> copied!
      {{else}}
      {{#if this.errored}}
      <span class="error">
          <FaIcon @prefix="fal" @icon="file-exclamation" /> failed to copy
      </span>
      {{else}}
      <span class="fa-layers">
          <FaIcon @prefix="fal" @icon="clipboard" />
          <FaIcon @prefix="fal" @icon="long-arrow-alt-left" @transform="shrink-2 right-4 down-1" />
      </span>
      {{/if}}
      {{/if}}
  </CopyButton>
  */
  {
    id: "Inr50VWr",
    block: "{\"symbols\":[\"@text\"],\"statements\":[[5,\"copy-button\",[[12,\"title\",\"copy file path to clipboard\"]],[[\"@clipboardText\",\"@success\",\"@error\"],[[23,1,[]],[23,0,[\"onSuccess\"]],[23,0,[\"onError\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"if\",[[23,0,[\"wasSuccessful\"]]],null,{\"statements\":[[0,\"    \"],[5,\"fa-icon\",[],[[\"@prefix\",\"@icon\"],[\"fal\",\"clipboard-check\"]]],[0,\" copied!\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,0,[\"errored\"]]],null,{\"statements\":[[0,\"    \"],[7,\"span\",true],[10,\"class\",\"error\"],[8],[0,\"\\n        \"],[5,\"fa-icon\",[],[[\"@prefix\",\"@icon\"],[\"fal\",\"file-exclamation\"]]],[0,\" failed to copy\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"span\",true],[10,\"class\",\"fa-layers\"],[8],[0,\"\\n        \"],[5,\"fa-icon\",[],[[\"@prefix\",\"@icon\"],[\"fal\",\"clipboard\"]]],[0,\"\\n        \"],[5,\"fa-icon\",[],[[\"@prefix\",\"@icon\",\"@transform\"],[\"fal\",\"long-arrow-alt-left\",\"shrink-2 right-4 down-1\"]]],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"hasEval\":false}",
    meta: {
      moduleName: "refchef-ember/components/copy.hbs"
    }
  });

  var CopyComponent = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._action, (_class = /*#__PURE__*/function (_Component) {
    _inherits(CopyComponent, _Component);

    var _super = _createSuper(CopyComponent);

    function CopyComponent() {
      var _this;

      _classCallCheck(this, CopyComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "wasSuccessful", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "errored", _descriptor2, _assertThisInitialized(_this));

      return _this;
    }

    _createClass(CopyComponent, [{
      key: "onSuccess",
      value: function onSuccess() {
        this.wasSuccessful = true;
        Ember.run.later(this, function () {
          this.wasSuccessful = false;
        }, 1500);
      }
    }, {
      key: "onError",
      value: function onError() {
        this.errored = true;
        Ember.run.later(this, function () {
          this.wasSuccessful = false;
        }, 1500);
      }
    }]);

    return CopyComponent;
  }(_component.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "wasSuccessful", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "errored", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function initializer() {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "onSuccess", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "onSuccess"), _class.prototype)), _class));
  _exports.default = CopyComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, CopyComponent);
});
;define("refchef-ember/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("refchef-ember/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberPopper.default;
    }
  });
});
;define("refchef-ember/components/fa-icon", ["exports", "@fortawesome/ember-fontawesome/components/fa-icon"], function (_exports, _faIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _faIcon.default;
    }
  });
});
;define("refchef-ember/components/file-tree", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="d-flex flex-column p-4 reference-card mb-4">
    <p class="h6">
      <p class="text-primary">
        <FaIcon @icon="sitemap" />
        <span class="pl-1">Component: {{@model.component}}</span>
      </p>
  
      <p class="text-primary">
        <FaIcon @icon="fingerprint" />
        <span class="pl-1">
          UUID:
          <span class="text-monospace">{{@model.uuid}}</span>
        </span>
        <Copy @text={{@model.uuid}} />
      </p>
  
      <FaIcon @icon="folder-open" class="text-success" />
      <span class="text-monospace">
        {{@model.location}}
      </span>
      <Copy @text={{@model.location}} />
    </p>
  
    <ul>
      {{#each @model.files as |file|}}
      <li class="file-list text-monospace">
        <FaIcon @icon="file" class="text-success" />
        <span class="pl-1">{{file}}</span>
        <Copy @text={{concat @model.location "/" file}} />
      </li>
      {{/each}}
    </ul>
  </div>
  */
  {
    id: "qyKc3ipf",
    block: "{\"symbols\":[\"file\",\"@model\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"d-flex flex-column p-4 reference-card mb-4\"],[8],[0,\"\\n  \"],[7,\"p\",true],[10,\"class\",\"h6\"],[8],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"text-primary\"],[8],[0,\"\\n      \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"sitemap\"]]],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"pl-1\"],[8],[0,\"Component: \"],[1,[23,2,[\"component\"]],false],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[7,\"p\",true],[10,\"class\",\"text-primary\"],[8],[0,\"\\n      \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"fingerprint\"]]],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"pl-1\"],[8],[0,\"\\n        UUID:\\n        \"],[7,\"span\",true],[10,\"class\",\"text-monospace\"],[8],[1,[23,2,[\"uuid\"]],false],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[5,\"copy\",[],[[\"@text\"],[[23,2,[\"uuid\"]]]]],[0,\"\\n    \"],[9],[0,\"\\n\\n    \"],[5,\"fa-icon\",[[12,\"class\",\"text-success\"]],[[\"@icon\"],[\"folder-open\"]]],[0,\"\\n    \"],[7,\"span\",true],[10,\"class\",\"text-monospace\"],[8],[0,\"\\n      \"],[1,[23,2,[\"location\"]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[5,\"copy\",[],[[\"@text\"],[[23,2,[\"location\"]]]]],[0,\"\\n  \"],[9],[0,\"\\n\\n  \"],[7,\"ul\",true],[8],[0,\"\\n\"],[4,\"each\",[[23,2,[\"files\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\",true],[10,\"class\",\"file-list text-monospace\"],[8],[0,\"\\n      \"],[5,\"fa-icon\",[[12,\"class\",\"text-success\"]],[[\"@icon\"],[\"file\"]]],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"pl-1\"],[8],[1,[23,1,[]],false],[9],[0,\"\\n      \"],[5,\"copy\",[],[[\"@text\"],[[28,\"concat\",[[23,2,[\"location\"]],\"/\",[23,1,[]]],null]]]],[0,\"\\n    \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    meta: {
      moduleName: "refchef-ember/components/file-tree.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("refchef-ember/components/footer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="footer d-flex justify-content-center flex-column w-100">
    <div class="d-flex flex-row justify-content-around flex-wrap">
      <div class="d-flex flex-column">
          {{inline-svg "images/cbc-logo-type" class="cbc-logo-footer"}}
      </div>
      <div class="d-flex flex-column mb-4">
        <a class="font-weight-bold" href="https://cbc.brown.edu">Computational Biology Core</a>
        <a href="https://www.brown.edu/research/projects/computational-biology-of-human-disease/home">
          <small class="font-weight-bold">Center for Computational Biology of Human Disease</small>
        </a>
        <a href="https://cbc.brown.edu/about/">About</a>
        <a href="https://cbc.brown.edu/services/">Services</a>
        <a href="https://cbc.brown.edu/resources/">Resources</a>
        <a href="https://medium.com/brown-compbiocore">Blog</a>
        <a href="https://ask.cyberinfrastructure.org/c/brown-research-computing">Discourse</a>
      </div>
      <div class="d-flex flex-column mb-4">
        <a class="font-weight-bold" href="https://ccv.brown.edu">Center for Computation and Visualization</a>
        <a href="https://ccv.brown.edu/about/">About</a>
        <a href="https://ccv.brown.edu/services/">Services</a>
        <a href="https://ccv.brown.edu/documentation/">Documentation</a>
        <a href="https://medium.com/brown-ccv">News</a>
        <a href="https://ask.cyberinfrastructure.org/c/brown-research-computing">Discourse</a>
      </div>
      <div class="d-flex flex-column">
        <p class="font-weight-bold text-primary">Contact</p>
        <a href="mailto:cbc-help@brown.edu">
          <FaIcon @icon="envelope" @prefix="fas" class="mr-2"/>
          <span>cbc-help@brown.edu</span>
        </a>
        <a href="https://github.com/compbiocore" class="mb-3">
          <FaIcon @icon="github" @prefix="fab" class="mr-2"/>
          <span>compbiocore</span>
        </a>
        <a href="mailto:ccv@brown.edu">
          <FaIcon @icon="envelope" @prefix="fas" class="mr-2"/>
          <span>ccv@brown.edu</span>
        </a>
        <a href="https://github.com/brown-ccv">
          <FaIcon @icon="github" @prefix="fab" class="mr-2"/>
          <span>brown-ccv</span>
        </a>
  
      </div>
      <div class="d-flex flex-column">
        {{inline-svg "images/brown-logo" class="brown-logo"}}
        {{inline-svg "images/ccv-logo" class="ccv-logo"}}
  
      </div>
    </div>
    <div class="small mt-5 text-secondary align-self-center p-4">&copy;&nbsp;&nbsp;Center for Computation and Visualization – Brown University – 2019 </div>
  </div>
  
  */
  {
    id: "fPLloAua",
    block: "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"footer d-flex justify-content-center flex-column w-100\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-row justify-content-around flex-wrap\"],[8],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-column\"],[8],[0,\"\\n        \"],[1,[28,\"inline-svg\",[\"images/cbc-logo-type\"],[[\"class\"],[\"cbc-logo-footer\"]]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-column mb-4\"],[8],[0,\"\\n      \"],[7,\"a\",true],[10,\"class\",\"font-weight-bold\"],[10,\"href\",\"https://cbc.brown.edu\"],[8],[0,\"Computational Biology Core\"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"https://www.brown.edu/research/projects/computational-biology-of-human-disease/home\"],[8],[0,\"\\n        \"],[7,\"small\",true],[10,\"class\",\"font-weight-bold\"],[8],[0,\"Center for Computational Biology of Human Disease\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"https://cbc.brown.edu/about/\"],[8],[0,\"About\"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"https://cbc.brown.edu/services/\"],[8],[0,\"Services\"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"https://cbc.brown.edu/resources/\"],[8],[0,\"Resources\"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"https://medium.com/brown-compbiocore\"],[8],[0,\"Blog\"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"https://ask.cyberinfrastructure.org/c/brown-research-computing\"],[8],[0,\"Discourse\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-column mb-4\"],[8],[0,\"\\n      \"],[7,\"a\",true],[10,\"class\",\"font-weight-bold\"],[10,\"href\",\"https://ccv.brown.edu\"],[8],[0,\"Center for Computation and Visualization\"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"https://ccv.brown.edu/about/\"],[8],[0,\"About\"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"https://ccv.brown.edu/services/\"],[8],[0,\"Services\"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"https://ccv.brown.edu/documentation/\"],[8],[0,\"Documentation\"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"https://medium.com/brown-ccv\"],[8],[0,\"News\"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"https://ask.cyberinfrastructure.org/c/brown-research-computing\"],[8],[0,\"Discourse\"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-column\"],[8],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"font-weight-bold text-primary\"],[8],[0,\"Contact\"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"mailto:cbc-help@brown.edu\"],[8],[0,\"\\n        \"],[5,\"fa-icon\",[[12,\"class\",\"mr-2\"]],[[\"@icon\",\"@prefix\"],[\"envelope\",\"fas\"]]],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"cbc-help@brown.edu\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"https://github.com/compbiocore\"],[10,\"class\",\"mb-3\"],[8],[0,\"\\n        \"],[5,\"fa-icon\",[[12,\"class\",\"mr-2\"]],[[\"@icon\",\"@prefix\"],[\"github\",\"fab\"]]],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"compbiocore\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"mailto:ccv@brown.edu\"],[8],[0,\"\\n        \"],[5,\"fa-icon\",[[12,\"class\",\"mr-2\"]],[[\"@icon\",\"@prefix\"],[\"envelope\",\"fas\"]]],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"ccv@brown.edu\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"a\",true],[10,\"href\",\"https://github.com/brown-ccv\"],[8],[0,\"\\n        \"],[5,\"fa-icon\",[[12,\"class\",\"mr-2\"]],[[\"@icon\",\"@prefix\"],[\"github\",\"fab\"]]],[0,\"\\n        \"],[7,\"span\",true],[8],[0,\"brown-ccv\"],[9],[0,\"\\n      \"],[9],[0,\"\\n\\n    \"],[9],[0,\"\\n    \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-column\"],[8],[0,\"\\n      \"],[1,[28,\"inline-svg\",[\"images/brown-logo\"],[[\"class\"],[\"brown-logo\"]]],false],[0,\"\\n      \"],[1,[28,\"inline-svg\",[\"images/ccv-logo\"],[[\"class\"],[\"ccv-logo\"]]],false],[0,\"\\n\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"small mt-5 text-secondary align-self-center p-4\"],[8],[0,\"\xA9\xA0\xA0Center for Computation and Visualization \u2013 Brown University \u2013 2019 \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "refchef-ember/components/footer.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("refchef-ember/components/hero", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="hero">
    {{inline-svg "images/refchef" class="hero-art"}}
    <div class="d-flex flex-column justify-content-start w-50">
      <h1>RefChef</h1>
      <h4>Reference genomes available on CCV's Oscar</h4>
    </div>
  </div>
  
  */
  {
    id: "ZS60beGM",
    block: "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"hero\"],[8],[0,\"\\n  \"],[1,[28,\"inline-svg\",[\"images/refchef\"],[[\"class\"],[\"hero-art\"]]],false],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"d-flex flex-column justify-content-start w-50\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[0,\"RefChef\"],[9],[0,\"\\n    \"],[7,\"h4\",true],[8],[0,\"Reference genomes available on CCV's Oscar\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "refchef-ember/components/hero.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("refchef-ember/components/nav", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <BsNavbar as |navbar|>
    <div class="navbar-header">
       {{navbar.toggle}}
       <div>
         <a class="navbar-brand" href="https://www.brown.edu">
           {{inline-svg "images/brown-logo" class="brown-logo"}}
         </a>
         <a class="navbar-brand" href="https://cbc.brown.edu">
           {{inline-svg "images/cbc-logo" class="cbc-logo"}}
         </a>
       </div>
    </div>
    {{!-- <navbar.content class="main-nav">
      <navbar.nav as |nav|>
        <nav.item>
          <a class="navbar-brand" href="https://ccv.brown.edu">ccv.brown.edu</a>
        </nav.item>
        <nav.item>
          <a class="navbar-brand" href="https://ccv.brown.edu/documentation/">Documentation</a>
        </nav.item>
        <nav.item>
          <a class="navbar-brand" href="https://ask.cyberinfrastructure.org/c/brown-research-computing">Discourse</a>
        </nav.item>
      </navbar.nav>
    </navbar.content> --}}
  </BsNavbar>
  
  */
  {
    id: "MOeQth/k",
    block: "{\"symbols\":[\"navbar\"],\"statements\":[[5,\"bs-navbar\",[],[[],[]],{\"statements\":[[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"navbar-header\"],[8],[0,\"\\n     \"],[1,[23,1,[\"toggle\"]],false],[0,\"\\n     \"],[7,\"div\",true],[8],[0,\"\\n       \"],[7,\"a\",true],[10,\"class\",\"navbar-brand\"],[10,\"href\",\"https://www.brown.edu\"],[8],[0,\"\\n         \"],[1,[28,\"inline-svg\",[\"images/brown-logo\"],[[\"class\"],[\"brown-logo\"]]],false],[0,\"\\n       \"],[9],[0,\"\\n       \"],[7,\"a\",true],[10,\"class\",\"navbar-brand\"],[10,\"href\",\"https://cbc.brown.edu\"],[8],[0,\"\\n         \"],[1,[28,\"inline-svg\",[\"images/cbc-logo\"],[[\"class\"],[\"cbc-logo\"]]],false],[0,\"\\n       \"],[9],[0,\"\\n     \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[1]}],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "refchef-ember/components/nav.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("refchef-ember/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _welcomePage.default;
    }
  });
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/controllers/references/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var ReferencesController = (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember.computed('sortAsc'), _dec6 = Ember.computed('sortField', 'sortDirection'), _dec7 = Ember.computed.sort('model', 'sortProperties'), _dec8 = Ember.computed.filter('sortedReferences', ['filterNameString'], function (reference
  /*, index, array*/
  ) {
    if (!this.filterNameString) return true;
    return reference['name'].toLowerCase().includes(this.filterNameString.toLowerCase());
  }), _dec9 = Ember.computed.filter('filteredByName', ['filterOrganismString'], function (reference
  /*, index, array*/
  ) {
    if (!this.filterOrganismString) return true;
    return reference['organism'].toLowerCase().includes(this.filterOrganismString.toLowerCase());
  }), _dec10 = Ember.computed.filter('filteredByOrganism', ['filterCommonNameString'], function (reference
  /*, index, array*/
  ) {
    if (!this.filterCommonNameString) return true;
    return reference['common_name'].toLowerCase().includes(this.filterCommonNameString.toLowerCase());
  }), _dec11 = Ember.computed.filter('filteredByCommonName', ['filterOrganizationString'], function (reference
  /*, index, array*/
  ) {
    if (!this.filterOrganizationString) return true;
    return reference['organization'].toLowerCase().includes(this.filterOrganizationString.toLowerCase());
  }), (_class = /*#__PURE__*/function (_Ember$Controller) {
    _inherits(ReferencesController, _Ember$Controller);

    var _super = _createSuper(ReferencesController);

    function ReferencesController() {
      var _this;

      _classCallCheck(this, ReferencesController);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "sortField", 'name');

      _defineProperty(_assertThisInitialized(_this), "sortAsc", true);

      _initializerDefineProperty(_assertThisInitialized(_this), "filterNameString", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "filterOrganismString", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "filterCommonNameString", _descriptor3, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "filterOrganizationString", _descriptor4, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "sortedReferences", _descriptor5, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "filteredByName", _descriptor6, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "filteredByOrganism", _descriptor7, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "filteredByCommonName", _descriptor8, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "filteredSamples", _descriptor9, _assertThisInitialized(_this));

      _defineProperty(_assertThisInitialized(_this), "actions", {
        setSortProperty: function setSortProperty(field) {
          if (field != this.sortField) {
            this.set('sortAsc', true);
            this.set('sortField', field);
          } else {
            this.toggleProperty('sortAsc');
          }
        }
      });

      return _this;
    }

    _createClass(ReferencesController, [{
      key: "sortDirection",
      get: function get() {
        var direction = this.sortAsc ? 'asc' : 'desc';
        return direction;
      }
    }, {
      key: "sortProperties",
      get: function get() {
        return ["".concat(this.sortField, ":").concat(this.sortDirection)];
      }
    }]);

    return ReferencesController;
  }(Ember.Controller), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "filterNameString", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "filterOrganismString", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "filterCommonNameString", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "filterOrganizationString", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "sortDirection", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "sortDirection"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sortProperties", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "sortProperties"), _class.prototype), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "sortedReferences", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "filteredByName", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "filteredByOrganism", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "filteredByCommonName", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "filteredSamples", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ReferencesController;
});
;define("refchef-ember/helpers/app-version", ["exports", "refchef-ember/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;
    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("refchef-ember/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function get() {
      return _bsContains.bsContains;
    }
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsContains.default;
    }
  });
});
;define("refchef-ember/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _bsEq.default;
    }
  });
  Object.defineProperty(_exports, "eq", {
    enumerable: true,
    get: function get() {
      return _bsEq.eq;
    }
  });
});
;define("refchef-ember/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _cancelAll.default;
    }
  });
});
;define("refchef-ember/helpers/inline-svg", ["exports", "ember-inline-svg/helpers/inline-svg", "refchef-ember/svgs"], function (_exports, _inlineSvg, _svgs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var helper;

  if (Ember.Helper && Ember.Helper.helper) {
    helper = Ember.Helper.helper(function (_ref, options) {
      var _ref2 = _slicedToArray(_ref, 1),
          path = _ref2[0];

      return (0, _inlineSvg.inlineSvg)(_svgs.default, path, options);
    });
  } else {
    helper = Ember.Handlebars.makeBoundHelper(function (path, options) {
      return (0, _inlineSvg.inlineSvg)(_svgs.default, path, options.hash || {});
    });
  }

  var _default = helper;
  _exports.default = _default;
});
;define("refchef-ember/helpers/is-clipboard-supported", ["exports", "ember-cli-clipboard/helpers/is-clipboard-supported"], function (_exports, _isClipboardSupported) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _isClipboardSupported.default;
    }
  });
  Object.defineProperty(_exports, "isClipboardSupported", {
    enumerable: true,
    get: function get() {
      return _isClipboardSupported.isClipboardSupported;
    }
  });
});
;define("refchef-ember/helpers/media", ["exports", "ember-responsive/helpers/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _media.default;
    }
  });
  Object.defineProperty(_exports, "media", {
    enumerable: true,
    get: function get() {
      return _media.media;
    }
  });
});
;define("refchef-ember/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _onDocument.default;
    }
  });
});
;define("refchef-ember/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _onWindow.default;
    }
  });
});
;define("refchef-ember/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _on.default;
    }
  });
});
;define("refchef-ember/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _perform.default;
    }
  });
});
;define("refchef-ember/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("refchef-ember/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("refchef-ember/helpers/split-string", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function splitString(params
  /*, hash*/
  ) {
    var inputString = params[1];
    var separator = params[0];
    var stringArray = inputString.split(separator);
    return stringArray;
  });

  _exports.default = _default;
});
;define("refchef-ember/helpers/string-replace", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function stringReplace(params
  /*, hash*/
  ) {
    var inputString = params[0];
    var remove = params[1];
    var add = params[2];
    return inputString.replace(remove, add);
  });

  _exports.default = _default;
});
;define("refchef-ember/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _task.default;
    }
  });
});
;define("refchef-ember/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "refchef-ember/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("refchef-ember/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize: function initialize() {
      var app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
  _exports.default = _default;
});
;define("refchef-ember/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberConcurrency.default;
    }
  });
});
;define("refchef-ember/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("refchef-ember/initializers/ember-responsive-breakpoints", ["exports", "ember-responsive/initializers/responsive"], function (_exports, _responsive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _responsive.default;
  _exports.default = _default;
});
;define("refchef-ember/initializers/export-application-global", ["exports", "refchef-ember/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("refchef-ember/initializers/load-bootstrap-config", ["exports", "refchef-ember/config/environment", "ember-bootstrap/config"], function (_exports, _environment, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;

  function
    /* container, application */
  initialize() {
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  var _default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("refchef-ember/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/models/content", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var Model = _emberData.default.Model,
      attr = _emberData.default.attr,
      hasMany = _emberData.default.hasMany;
  var ContentModel = (_dec = attr('string'), _dec2 = attr('string'), _dec3 = attr('number'), _dec4 = hasMany(), (_class = /*#__PURE__*/function (_Model) {
    _inherits(ContentModel, _Model);

    var _super = _createSuper(ContentModel);

    function ContentModel() {
      var _this;

      _classCallCheck(this, ContentModel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "name", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "type", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "size", _descriptor3, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "references", _descriptor4, _assertThisInitialized(_this));

      return _this;
    }

    return _createClass(ContentModel);
  }(Model), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "type", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "size", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "references", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ContentModel;
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/models/reference", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  var Model = _emberData.default.Model,
      attr = _emberData.default.attr,
      belongsTo = _emberData.default.belongsTo;
  var ReferenceModel = (_dec = belongsTo(), _dec2 = attr(), _dec3 = attr(), _dec4 = attr(), _dec5 = attr(), _dec6 = attr(), _dec7 = attr(), _dec8 = attr(), _dec9 = attr(), _dec10 = attr(), _dec11 = attr(), (_class = /*#__PURE__*/function (_Model) {
    _inherits(ReferenceModel, _Model);

    var _super = _createSuper(ReferenceModel);

    function ReferenceModel() {
      var _this;

      _classCallCheck(this, ReferenceModel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _initializerDefineProperty(_assertThisInitialized(_this), "content", _descriptor, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "levels", _descriptor2, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "name", _descriptor3, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "organism", _descriptor4, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "common_name", _descriptor5, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "description", _descriptor6, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "downloader", _descriptor7, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "organization", _descriptor8, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "taxon_id", _descriptor9, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "ensembl_release", _descriptor10, _assertThisInitialized(_this));

      _initializerDefineProperty(_assertThisInitialized(_this), "custom", _descriptor11, _assertThisInitialized(_this));

      return _this;
    }

    return _createClass(ReferenceModel);
  }(Model), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "content", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "levels", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "organism", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "common_name", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "description", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "downloader", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "organization", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "taxon_id", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "ensembl_release", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "custom", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ReferenceModel;
});
;define("refchef-ember/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _didInsert.default;
    }
  });
});
;define("refchef-ember/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _didUpdate.default;
    }
  });
});
;define("refchef-ember/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap"], function (_exports, _focusTrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _focusTrap.default;
    }
  });
});
;define("refchef-ember/modifiers/ref", ["exports", "ember-ref-modifier/modifiers/ref"], function (_exports, _ref) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _ref.default;
    }
  });
});
;define("refchef-ember/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _willDestroy.default;
    }
  });
});
;define("refchef-ember/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/router", ["exports", "refchef-ember/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Router = /*#__PURE__*/function (_Ember$Router) {
    _inherits(Router, _Ember$Router);

    var _super = _createSuper(Router);

    function Router() {
      var _this;

      _classCallCheck(this, Router);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "location", _environment.default.locationType);

      _defineProperty(_assertThisInitialized(_this), "rootURL", _environment.default.rootURL);

      return _this;
    }

    return _createClass(Router);
  }(Ember.Router);

  _exports.default = Router;
  Router.map(function () {
    this.route('references', function () {
      this.route('reference');
    });
  });
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/routes/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var ApplicationRoute = /*#__PURE__*/function (_Ember$Route) {
    _inherits(ApplicationRoute, _Ember$Route);

    var _super = _createSuper(ApplicationRoute);

    function ApplicationRoute() {
      _classCallCheck(this, ApplicationRoute);

      return _super.apply(this, arguments);
    }

    _createClass(ApplicationRoute, [{
      key: "model",
      value: function model() {
        return this.store.findRecord('content', 'master.yaml');
      }
    }]);

    return ApplicationRoute;
  }(Ember.Route);

  _exports.default = ApplicationRoute;
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var IndexRoute = /*#__PURE__*/function (_Ember$Route) {
    _inherits(IndexRoute, _Ember$Route);

    var _super = _createSuper(IndexRoute);

    function IndexRoute() {
      _classCallCheck(this, IndexRoute);

      return _super.apply(this, arguments);
    }

    _createClass(IndexRoute, [{
      key: "beforeModel",
      value: function
        /* transition */
      beforeModel() {
        this.transitionTo('references');
      }
    }]);

    return IndexRoute;
  }(Ember.Route);

  _exports.default = IndexRoute;
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/routes/references", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var ReferencesRoute = /*#__PURE__*/function (_Ember$Route) {
    _inherits(ReferencesRoute, _Ember$Route);

    var _super = _createSuper(ReferencesRoute);

    function ReferencesRoute() {
      _classCallCheck(this, ReferencesRoute);

      return _super.apply(this, arguments);
    }

    _createClass(ReferencesRoute, [{
      key: "model",
      value: function model() {
        return this.modelFor('application');
      }
    }]);

    return ReferencesRoute;
  }(Ember.Route);

  _exports.default = ReferencesRoute;
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/routes/references/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var ReferencesIndexRoute = /*#__PURE__*/function (_Ember$Route) {
    _inherits(ReferencesIndexRoute, _Ember$Route);

    var _super = _createSuper(ReferencesIndexRoute);

    function ReferencesIndexRoute() {
      _classCallCheck(this, ReferencesIndexRoute);

      return _super.apply(this, arguments);
    }

    _createClass(ReferencesIndexRoute, [{
      key: "model",
      value: function model() {
        return this.modelFor('references').get('references');
      }
    }]);

    return ReferencesIndexRoute;
  }(Ember.Route);

  _exports.default = ReferencesIndexRoute;
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/routes/references/reference", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var ReferencesReferenceRoute = /*#__PURE__*/function (_Ember$Route) {
    _inherits(ReferencesReferenceRoute, _Ember$Route);

    var _super = _createSuper(ReferencesReferenceRoute);

    function ReferencesReferenceRoute() {
      var _this;

      _classCallCheck(this, ReferencesReferenceRoute);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "queryParams", {
        name: {
          refreshModel: true
        }
      });

      return _this;
    }

    _createClass(ReferencesReferenceRoute, [{
      key: "model",
      value: function model(params) {
        return this.modelFor('references').get('references').then(function (references) {
          return references.findBy('name', params.name);
        });
      }
    }]);

    return ReferencesReferenceRoute;
  }(Ember.Route);

  _exports.default = ReferencesReferenceRoute;
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/serializers/application", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var ApplicationSerializer = /*#__PURE__*/function (_DS$RESTSerializer) {
    _inherits(ApplicationSerializer, _DS$RESTSerializer);

    var _super = _createSuper(ApplicationSerializer);

    function ApplicationSerializer() {
      _classCallCheck(this, ApplicationSerializer);

      return _super.apply(this, arguments);
    }

    _createClass(ApplicationSerializer, [{
      key: "keyForAttribute",
      value: function keyForAttribute(key) {
        return Ember.String.decamelize(key);
      }
    }]);

    return ApplicationSerializer;
  }(_emberData.default.RESTSerializer);

  _exports.default = ApplicationSerializer;
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/serializers/content", ["exports", "refchef-ember/serializers/application", "ember-data", "js-base64", "js-yaml"], function (_exports, _application, _emberData, _jsBase, _jsYaml) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var ContentSerializer = /*#__PURE__*/function (_ApplicationSerialize) {
    _inherits(ContentSerializer, _ApplicationSerialize);

    var _super = _createSuper(ContentSerializer);

    function ContentSerializer() {
      var _this;

      _classCallCheck(this, ContentSerializer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "primaryKey", 'path');

      _defineProperty(_assertThisInitialized(_this), "attrs", {
        references: {
          embedded: 'always'
        }
      });

      return _this;
    }

    _createClass(ContentSerializer, [{
      key: "normalizeResponse",
      value: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload.references = payload.content;
        delete payload.content;
        var newPayload = {
          content: payload
        };
        return _get(_getPrototypeOf(ContentSerializer.prototype), "normalizeResponse", this).call(this, store, primaryModelClass, newPayload, id, requestType);
      }
    }, {
      key: "normalize",
      value: function normalize(type, hash) {
        var rawContent = hash.references;

        var decodedContent = _jsBase.Base64.decode(rawContent);

        var contentJSON = _jsYaml.default.load(decodedContent);

        var contentArray = Object.keys(contentJSON).map(function (key) {
          return contentJSON[key];
        });
        hash.references = contentArray;
        return _get(_getPrototypeOf(ContentSerializer.prototype), "normalize", this).apply(this, arguments);
      }
    }]);

    return ContentSerializer;
  }(_application.default.extend(_emberData.default.EmbeddedRecordsMixin));

  _exports.default = ContentSerializer;
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/serializers/reference", ["exports", "refchef-ember/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var ReferenceSerializer = /*#__PURE__*/function (_ApplicationSerialize) {
    _inherits(ReferenceSerializer, _ApplicationSerialize);

    var _super = _createSuper(ReferenceSerializer);

    function ReferenceSerializer() {
      _classCallCheck(this, ReferenceSerializer);

      return _super.apply(this, arguments);
    }

    _createClass(ReferenceSerializer, [{
      key: "normalize",
      value: function normalize(type, hash) {
        hash.id = hash.metadata.name;
        hash.name = hash.metadata.name;
        hash.organism = hash.metadata.organism;
        hash.common_name = hash.metadata.common_name;
        hash.description = hash.metadata.description;
        hash.downloader = hash.metadata.downloader;
        hash.organization = hash.metadata.organization;
        hash.taxon_id = hash.metadata.ncbi_taxon_id;
        hash.ensembl_release = hash.metadata.ensembl_release_number;
        hash.custom = hash.metadata.custom;
        return _get(_getPrototypeOf(ReferenceSerializer.prototype), "normalize", this).call(this, type, hash);
      }
    }]);

    return ReferenceSerializer;
  }(_application.default);

  _exports.default = ReferenceSerializer;
});
;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

define("refchef-ember/serializers/repository", ["exports", "refchef-ember/serializers/application"], function (_exports, _application) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var RepositorySerializer = /*#__PURE__*/function (_ApplicationSerialize) {
    _inherits(RepositorySerializer, _ApplicationSerialize);

    var _super = _createSuper(RepositorySerializer);

    function RepositorySerializer() {
      _classCallCheck(this, RepositorySerializer);

      return _super.apply(this, arguments);
    }

    _createClass(RepositorySerializer, [{
      key: "normalize",
      value: function normalize(type, payload) {
        var url = payload.contents_url.replace('{+path}', '');
        payload.links = {
          contents: url
        };
        return _get(_getPrototypeOf(RepositorySerializer.prototype), "normalize", this).apply(this, arguments);
      }
    }]);

    return RepositorySerializer;
  }(_application.default);

  _exports.default = RepositorySerializer;
});
;define("refchef-ember/services/media", ["exports", "ember-responsive/services/media"], function (_exports, _media) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _media.default;
  _exports.default = _default;
});
;define("refchef-ember/services/metrics", ["exports", "ember-metrics/services/metrics"], function (_exports, _metrics) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _metrics.default;
    }
  });
});
;define("refchef-ember/svgs", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    "images": {
      "brown-logo": "<svg class=\"brown-logo-color\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 576 287\" xml:space=\"preserve\"><style>.st1{display:inline}.st1,.st2{stroke:#000;stroke-width:.75;stroke-miterlimit:10}.st3{fill:#fff}.st4{fill:#ed1c24}</style><g id=\"Brown_Horizontal\"><path class=\"st2\" d=\"M216.9 143.7v20.9c0 6.4 1.3 8.6 8.3 8.5 8.1 0 14.9-4 14.9-14.2 0-10.5-7.7-15.3-17.6-15.3h-5.6v.1zm0-2.8h6.1c9.2 0 13.8-4.3 13.8-12.2 0-5.8-2.4-12.2-13.7-12.2-3.2 0-4.5.3-5.3.6-.6.2-.9.6-.9 2.5v21.3zm9.4-27.2c6.9 0 10.9 1.2 14 3.4 3.3 2.3 5 5.8 5 10.6 0 8.5-8 12.6-12.6 13.7v.2c8.7 1.2 16.6 6.4 16.6 16.1 0 6.8-3.4 11.6-8.9 14.8-4.9 2.7-11.1 3.7-18.3 3.7H200V174c8.1-.6 8.8-1.3 8.8-11.7v-34.6c-.1-10.5-.7-11.1-8.3-11.7v-2.2h25.8v-.1zM282.8 145.9h5.6c3.9 0 7-.5 9.6-2.6 4.1-3.3 5.6-8 5.6-12.7 0-10.1-7.3-14.1-14.5-14.1-3.3 0-4.6.2-5.4.5-.6.2-.9.7-.9 2.6v26.3zm0 16.3c0 10.5.8 11.1 8.7 11.7v2.2h-25.6v-2.2c8.1-.6 8.8-1.3 8.8-11.7v-34.6c0-10.5-.8-11.1-8.5-11.7v-2.2h24.4c6.1 0 11.6.9 15.2 3.3 3.8 2.4 6.3 6.7 6.3 12.3 0 8-4.9 13.6-12.7 16.8 1.7 2.9 5.7 9.5 8.5 13.7 3.5 5.1 5.5 7.7 8.1 10.6 2 2.4 3.7 3.9 7.2 4.8l-.2 1.8h-1.3c-11-.3-14.4-3.7-18.1-8.9-3-4.3-7-11.4-9.7-16-1.5-2.5-3.1-3.4-6-3.4h-5.2v13.5h.1zM364.1 115.4c-11.3 0-20.9 9.3-20.9 27.4 0 18.5 9.7 31.6 23.7 31.6 11.5 0 20.9-8.9 20.9-26.8 0-20.8-10-32.2-23.7-32.2m33 28.6c0 20-13.9 33.5-32.3 33.5-18.2 0-31-13.9-31-32 0-16.1 11.3-33.3 32.7-33.3 16.7 0 30.6 12.9 30.6 31.8M429.9 115.9l-3 .4c-4.3.6-4.9 1.4-3.6 5.7l13 40.9h.2l15.4-48.2h2.3l17.4 48.1h.2c3.9-12.1 9.5-32.4 11.1-39.3 1.3-5.6.8-6.7-3.5-7.2l-2.8-.4v-2.2H497v2.2c-6.3.8-7 1.2-10.2 9.9-.9 2.4-7.9 24.5-15.9 50.9h-2.6l-17.3-47-.2.2-15.7 46.8h-2.7l-16.6-51.6c-2.6-8-4-8.6-9.5-9.2v-2.2h23.5v2.2h.1zM567 176.8h-2.5l-41.7-50.6h-.2v24.5c0 10.1.4 15.3.8 18.3.5 3.4 3.1 4.7 9.4 5v2.2h-23.1V174c5.3-.2 7.8-1.6 8.3-5 .4-3 .8-8.2.8-18.3v-20.8c0-6.9-.1-8.5-1.8-10.7-1.8-2.3-4.4-3-8.4-3.3v-2.2h14l40.4 48.4h.2v-23c0-10.1-.4-15.3-.8-18.2-.5-3.4-3.1-4.7-9.4-5v-2.2h23v2.2c-5.3.2-7.8 1.6-8.3 5-.4 3-.8 8.2-.8 18.2l.1 37.7z\"/></g><g id=\"Shield_2_color_CMYK\"><path class=\"st3\" d=\"M58 38c.3.5.7 1.2 1.3 2.1 1.5 2.5 3.9 12 6.9 15.1 1.6-1.1 4.4-2.5 6-3.1-.4-.6-2.1-3.5-4-6-3.6-4.8-6.3-7.4-6.6-7.8-.9.1-2.6.1-3.6-.3zM85.3 50.6c.7-5-.9-13.2-1.9-15.2-1.2-.3-2.5-.7-3.6-1.3-.1.6-1.1 4-1.4 8.9-.2 2.6-.1 6.7.4 7.6 1.6-.1 4.3-.2 6.5 0zM108.9 79.8c0-14.9-11.7-26.6-26.6-26.6-14.7 0-26.6 11.9-26.6 26.6 0 .7.2 2.1.4 3.6 7.6-1.8 17.8-1.5 22.3 2.1 7.3-4.2 17.8-4.4 25.5.1 1.5-.8 3.1-1.3 4.7-1.8.2-1.5.3-3 .3-4zm-32.4-9.1c-.1 1.7-1.5 3-3.2 2.9s-3-1.5-2.9-3.2v-.3c-.3-.4-1.7-.9-3.7.4-1 .6-2.2.2-.4-1.4 1.9-1.7 3.7-2.6 5.3-2.8h.1c2.7-.2 6.2.4 7.8 1 .7.3 0 3.6-.2 3.6-.6-.1-1.8-.6-2.8-.4v.2zm8.9 9.3c-.5 1.6-6.1 2.1-7.2 0-.4-.8-1-2.9-.2-2.5 1.2.7 5.7.2 6.6 0 .8-.2.3-1.2.7-1.1.6.2.6 2.1.1 3.6zm13.1-8.7c-1.4-1.2-3.2-1.7-3.9-1.2v.2c.1 1.7-1.1 3.2-2.8 3.4-1.7.2-3.2-1.1-3.3-2.8v-.1c-1.1-.4-2.9.3-3.1.2-.1-.1-.9-3.2.1-3.6 2.7-1.1 11.3-1.6 13.8 3.2.1.5-.1 1.3-.8.7zM100.1 37.7c-3.1 2.6-7.9 9.1-8.5 14.2 1.5.6 5.3 2.4 5.9 2.9 3.8-3.8 3.1-8 4.6-11.2.7-1.4 1.3-2.5 1.6-3.1-1.3-.7-2.6-1.6-3.6-2.8z\"/><path class=\"st3\" d=\"M118.7 47.9c-.7.4-2.3 1.4-2.9 1.8-3.7 2.8-11.7 6.5-13.5 8.6 1.5 1.3 3.6 3.6 4.6 5.6.9 0 3.5-2.1 8.6-8.1 1.6-1.9 3.4-2.9 6.6-4.7-1.3-1-2.4-2.1-3.4-3.2zM54.3 70.1c-1.7-1.7-5.2-3.2-9.6-2.8-9.2.7-15.2.1-18.6-.4-5.9-.8-9.6 0-12.6 0-9 0 .3.8 1.3 1.2 4.2 1.7 12.8 3.8 19.5 3.3 3.3-.2 8.8 1.8 9.7 2.1 2.4.9 6.8 2.3 9.1 2.2.2-1 .8-4.2 1.2-5.6zM61.7 58.9c-4.6-3.7-8.8-4.5-15.6-7.7-1.5-.7-4.1-2.4-4.2-2.5-.2-.1-.5-.3-.9-.6-.4 1.3-1.2 3-1.9 3.9 1 1.4 8.6 10 18.2 12.6 1-1.8 2.7-3.9 4.4-5.7zM158.4 65.5c-.5-.1-2.2-.3-3.3-.3-1.5 0-11 .1-13.6.5-5.3.8-15.7.4-21.3.2-4.2-.2-9.1 1.5-10.6 2.3 0 0 1.6 4.1 1.7 6.8 1.8.3 3.5-2 8.7-1.9 5.3.1 18.5-.6 25.2-3.2 5-1.9 9.2-2.9 12.5-3.6 1.2-.2 2.9-.4.7-.8z\"/><path class=\"st3\" d=\"M39.2 38.9c.4-.4 1-.3 1.6-.1 4.5 1.5 11 .5 14-4.3.4-.7 1.3-.9 2-.6 3.1 1.3 9.5 1.8 17.3-6 .6-.6 1.5-.5 2.2 0 6.8 5.5 14 5.8 21.2 1 .4-.3 1-.7 1.5-.5s.9.6 1 1.2c2.3 10.7 13.4 9.7 16.8 9.2.4-.1.9 0 1.2.3.4.3.6.6.6 1.1.4 2.5 3.1 7.3 7.9 9.8 4.1 2.1 8.6 1.9 13.3-.5.5-.2 1-.2 1.5 0 6 3.2 11.5 3.4 14.9.5 2.4-2 3.4-5.4 2.4-8.3-1.1-3.2-4.3-5.3-8.8-5.5-.8 0-1.4-.6-1.5-1.4-.4-2.6-1.9-4.7-4.2-6.1-3.6-2.2-8.8-2.4-14-.7-.5.2-1 .1-1.4-.2-.4-.3-.7-.7-.8-1.2-.3-2-1.2-4.7-3.7-6.2-2.6-1.6-6.6-1.6-11.5.1-.8.3-1.6-.1-2-.8-3.2-6-7.6-10-12.8-11.4-4.7-1.2-9.9-.3-14.3 2.5-.6.4-1.3.3-1.9-.1-4.4-3.3-9.7-4.4-14.5-2.9-4.7 1.4-8.2 5.1-10 10.3-.1.4-.5.8-.9.9-.4.2-.9.2-1.3 0-7.2-2.9-13-2.8-16.9.2-3.4 2.6-4.4 6.7-4.2 7.9.1.8-.4 1.6-1.2 1.8l-1.7.4c-4 .9-8.1 1.8-9.3 8.2-.1.7-.7 1.2-1.4 1.3-6.8.7-11.3 3.3-12.3 7.1-.7 2.7.6 5.7 3 7.3 2.5 1.7 5.4 1.5 8.1-.5.4-.3 1-.4 1.5-.2 4.1 1.5 10.6 1.2 14.6-2 2.9-2.3 4-5.7 3.4-10.1-.1-.6.1-1.1.6-1.5zm109.3.5c4.1-.9 9 2 7.6 7.5-.2.9-2.5 1-2.5 0 .4-4.6-1.9-5-5-4.9-1.1 0-1-2.4-.1-2.6zm-17.6-8.2c4-2.3 12.1-1.9 14.7 5.4.4 1.2-1.2 3.3-2.2 1.5-3.1-5.6-8-5.6-12.1-4-1 .3-1.8-2.1-.4-2.9zm-17.1-8.4c3.7-1.3 10-1.9 11.7 4.3.5 1.7-1.6 2.5-2.1 1.3-1.7-4.5-4.9-4.3-8.8-3.1-1.8.7-1.4-2.3-.8-2.5zm-30.2-6.9c2.7-4.3 16.6-8.4 23.7 3.9.8 1.3-.3 2.1-1.1 2.7-.6.4-.9-.5-1.3-1.1-6.1-9.6-17-7.1-20-2.6-.4.8-2-1.6-1.3-2.9zm-22.4.7c2.4-3.9 10.8-9.8 18.3-3.3.8.7-.2 3.4-1.1 2.8-6.8-4.7-12.1-.9-15 2.5-1.4 1.6-2.8-1.1-2.2-2zM21.1 43.7c-2.8 0-5.1.1-7.1 2.2-2.1 2.3-1.6 3.6-2 4-.6.6-2.1-.4-2-1.6.1-5.5 6.7-7.6 10.6-7.1 1.4.2 1.8 2.5.5 2.5zm11.5-9.2c-4.2.5-5.4 2.5-6.1 4.8-.3.9-2.6.2-2.3-1.5 1.1-5.1 6.7-6.4 8.7-5.9.7.2.5 2.5-.3 2.6zm3.6-5.5c.9-4.5 5.3-11.1 15.4-8.6 1.2.3.5 3.5-.8 2.9-7.4-2.9-11.1 2.7-12.3 7.1-.2.7-2.7.5-2.3-1.4z\"/><g><path class=\"st3\" d=\"M15.7 84.6c-4.9-.1-9 1.3-10.4 3.8-2.7 4.6.5 8.6 2.3 9.7 4.3 2.6 8.3.9 8.6-.7-1.2-1.3-3.2-4.3-4.3-4.3-1.6 0-1.5-2.2-.3-2.5 2.8-.9 5.6 4.5 9.7 7.4 3.6 2.6 8.7.7 8.7-.4-2.2-2-4.8-12.8-14.3-13zM113 97.3c3.4 3.4 8 2 8.2.8-.4-.7-2.5-3.8-3.8-4.5-1-.6-1.7-1.5-1.1-2.3.9-1.3 2.8-.4 4 1s4.4 5.7 5.6 6.3c3 1.6 9.5 1.1 9-.9-1.8-2.9-3.1-8.7-8.4-11.2-5.6-2.6-12.8-2-19.4.4 1.1 2.6 4.2 8.7 5.9 10.4zM73.8 86.5c-5.6-2.6-13.5-1.8-20.2.6 1.8 2.5 4.9 8.2 6.5 10.1 3.1 3.7 8.3 1.8 8.5.7-.4-.7-3.2-4.3-4.2-4.9s-1.6-1.5-1-2.2c.9-1.3 3.1 0 4.3 1.4 1.2 1.4 4.5 5.6 5.6 6.3 3.3 2.2 9.5 1.1 9-.8-2.2-2.8-3.2-8.7-8.5-11.2z\"/></g><g><path class=\"st3\" d=\"M31.8 129.4c-4 .1-7.9 1.7-10.2 1.3v26.6s1.4 1.1 5.4 0c5.2-1.5 7.5.1 7.5.1v-26.9s-.6-1.2-2.7-1.1zM46 240.8c4 1.1 5.4 0 5.4 0v-26.6c-2.3.4-6.2-1.2-10.2-1.3-2.1-.1-2.7 1.2-2.7 1.2V241c.1-.1 2.4-1.7 7.5-.2zM132.8 129.4c-2.1-.1-2.8 1.2-2.8 1.2v26.9s2.3-1.6 7.5-.1c4 1.1 5.4 0 5.4 0v-26.6c-2.2.3-6.1-1.3-10.1-1.4zM41.3 129.4c-2.1-.1-2.7 1.2-2.7 1.2v26.9s2.3-1.6 7.5-.1c4 1.1 5.4 0 5.4 0v-26.6c-2.3.3-6.2-1.3-10.2-1.4zM34.5 240.9V214s-.6-1.2-2.7-1.2c-4 .1-7.9 1.7-10.2 1.3v26.6s1.4 1.1 5.4 0c5.2-1.4 7.5.2 7.5.2zM130.6 214v26.9s2.3-1.6 7.5-.1c4 1.1 5.4 0 5.4 0v-26.6c-2.3.4-6.2-1.2-10.1-1.3-2.3-.1-2.8 1.1-2.8 1.1zM123.3 129.4c-4 .1-7.9 1.7-10.2 1.3v26.6s1.4 1.1 5.4 0c5.2-1.5 7.5.1 7.5.1v-26.9s-.6-1.2-2.7-1.1zM113.6 214.2v26.6s1.4 1.1 5.4 0c5.2-1.5 7.5.1 7.5.1V214s-.6-1.2-2.7-1.2c-4 .2-7.9 1.8-10.2 1.4z\"/><g><path class=\"st3\" d=\"M160.2 117.5H96.3v57.9h63.9v-57.9zm-9.6 46.1h-18.3v2.3h-7.6v-2.3h-18.3v-30.9h3.9v-5.6c4 1 10.5-1.2 13.3-1.2 3.2 0 4.9 1.4 4.9 1.4s1.7-1.4 4.9-1.4c2.9 0 9.4 2.2 13.3 1.2v5.6h3.9v30.9zM68.4 117.5h-64v57.9h63.9l.1-57.9zm-9.7 46.1H40.3v2.3h-7.6v-2.3H14.4v-30.9h3.9v-5.6c4 1 10.5-1.2 13.3-1.2 3.2 0 4.9 1.4 4.9 1.4s1.7-1.4 4.9-1.4c2.9 0 9.4 2.2 13.3 1.2v5.6h3.9l.1 30.9zM96.3 279.1c16.1-4.7 32.1-10.9 42.9-20.8 3.8-3.5 7-7.1 9.7-11.1h-16.5v2.3h-7.6v-2.3h-18.3v-30.9h3.9v-5.6c4 1 10.4-1.2 13.3-1.2 3.2 0 4.9 1.4 4.9 1.4s1.7-1.4 4.9-1.4c2.9 0 9.4 2.2 13.3 1.2v5.6h3.9v28c5.9-10.2 8.7-22.6 9.6-40.1l-.1-2.6H96.3v77.5zM14.4 243.9v-27.7h3.9v-5.6c4 1 10.4-1.2 13.3-1.2 3.2 0 4.9 1.4 4.9 1.4s1.7-1.4 4.9-1.4c2.9 0 9.4 2.2 13.3 1.2v5.6h3.9v30.9H40.3v2.3h-7.6v-2.3H16.4c2.6 4 5.7 7.6 9.3 11 10.2 9.5 26.2 16 42.6 20.8v-77.6H4.4l.1 2.5c.7 16.1 3.7 29.2 9.9 40.1z\"/></g></g><g><path d=\"M167.3 63.9c-1-.7-11.1-2-12.7-2-1.5 0-10.3.1-13.7.6-5.3.8-14.3.8-21.1 0-2.5-.3-5.2.3-7.5 1 .4-.4.9-.8 1.5-1.4 2-2.1 4.3-6 8.3-8 1-.5 2-1 2.9-1.5 3.4 1.7 8.7 2.8 15.3-.3 9.8 4.9 15.7 1.6 17.8-.2 2.5-2.1 4-5.3 4-8.5 0-1.1-.2-2.2-.5-3.3-1.4-4.3-5.3-7-10.7-7.6-.3-1.1-.8-2.2-1.4-3.2.6-.8 1.2-1.5 1.6-2 .5-.6 2.1-3.3-2.2-1l-1.2.6c-.6-.6-1.3-1.2-2-1.6-4-2.5-9.5-2.8-15.1-1.3-.8-3-2.3-5.5-4.6-7-2.5-1.5-5.6-2-9.3-1.4.2-.5.4-1 .6-1.4 1.6-3.4.8-4.3-1-2.8-1.9 1.7-3.2 2.9-4.1 3.9-3.5-5.6-8.1-9.3-13.5-10.8-4.7-1.2-9.8-.6-14.3 1.6-.3-2.3-.6-4.2-.9-5.3-.9-2.8-1.9-.6-2 .3-.2 1.2-.5 2.8-.8 4.6-4.6-2.4-9.6-3.1-14.4-1.7-5.2 1.6-9.2 5.5-11.5 10.9-1.9-.7-3.6-1.1-5.2-1.4-1-1.3-2.4-2.8-4.3-4.6-1.3-1.2-2.4-.6-1.6 1.8.3.9.6 1.7.8 2.5-3.7.2-6.4 1.4-8.3 2.8-3.6 2.8-5.1 6.8-5.4 9.3-.2.1-.5.1-.5.1-3 .7-7.1 1.8-9.7 5.9-.5-.3-.8-.5-.9-.6-7.6-5.1-4.1 1.5-1.2 4.3C8.2 37.1 5.3 42 4.6 44.9c-.2.7-.3 1.5-.3 2.2 0 3.3 1.7 6.6 4.6 8.6 3.4 2.3 7.5 2.2 11.2-.2 4.8 1.5 11.5 1.3 16.4-2.2 2.8 3 5.1 5.2 6.3 6.4 3 3 7.5 5.3 9.8 6.2-2.3-.9-6-1.8-9.8-1.3-8.1 1.1-13.5-.3-17-.7-5.7-.6-11.6.4-14.6.4-3.1 0-7.5 1.5-9.6 1.8-2.3.3-2.2 1.9 1.1 2.7 3.2.9 9.2 1.4 10.8 2.1 5.2 2.3 13.9 4.1 20 3.6 4.3-.3 8.7 1.8 9.8 2.1 2.2.7 7.5 2.1 9.7 2.1 0-.1 0 3.1.2 4.6-.8.3-1.6.6-2.3.9-2.4-1.5-13.1-5.8-26.1-.4-2.7-.9-8.6-4.2-16.5-1.5-9.8 3.2-8.2 12.2-5 16.4 4.4 5.6 12.5 4.4 14.8 1.6 5.3 3.5 10.7 2.3 14.6-.1 2.6 1.5 15.2 4 24.8.1 1.3 1 6.6 3.7 13.4.3 3.9 2.3 10.4 2.5 13.7-.4 1.2 1 4.8 2.5 12.5 2.4 9.2-.1 11.4-1.5 12.7-2.6 2 .9 7.2 3.6 13.6.9 3.5 2.2 10.4 2 14.1-.4 6.8 3.1 19.2 1.7 22.3-.5 5.6-3.9 2.9-11.7-3.3-15.5-12-6.1-23.3-1.4-26.2.2-3.5-2.4-11-3.9-18.7-2.5.1-.9 0-2 0-3.1v-.4c1.5-.5 3.7-2.1 8.1-2.4 6-.4 20.2-.2 27.3-3.9 4.1-2.1 18.1-4.8 20-5.9 1.8-1.1 1.3-1.9.3-2.6zm-51.7-8.2c-5.1 6-7.7 8.1-8.6 8.1-1-2-3.2-4.3-4.6-5.6 1.8-2 9.8-5.8 13.5-8.6.5-.4 2.2-1.4 2.9-1.8 1 1.1 2.1 2.2 3.4 3.1-3.2 1.9-5 2.9-6.6 4.8zm-73.8-13c4.3.7 9.3-.3 12.9-3.6 4.5 7.1 4.6 13.6 8.9 18.1-5.4-5.3-10.2-5.2-18-9.4-1.3-.7-3.4-2-3.9-2.3.1-.7.1-1.3.1-2.1.1-.3 0-.5 0-.7zM75 50.6l.1.2s-2.4-3.6-2.7-4c-.8-1.2-1.9-2.5-3.1-4-1.9-2.2-3.5-4.1-4.7-5.4 3.1-.8 6.7-2.5 10.5-6.1.4.3.8.5 1.2.8-.2 1.2-.4 2.3-.5 3.1-.9 4.8-.9 8.5-1 10.1 0 1.6.1 3.9.2 5.3zm-6.8-4.4c1.9 2.5 3.6 5.4 4 6-1.6.6-4.4 2-6 3.1-3-3.1-5.4-12.6-6.9-15.1-.6-1-1-1.6-1.3-2.1 1 .4 2.7.3 3.7.3.3.4 2.9 3 6.5 7.8zm14.1 7c14.9 0 26.6 11.7 26.6 26.6 0 1-.1 2.5-.3 3.9-1.6.5-3.2 1-4.7 1.8-7.7-4.5-18.2-4.2-25.5-.1-4.5-3.6-14.6-3.9-22.3-2.1-.2-1.4-.4-2.9-.4-3.6 0-14.6 11.9-26.5 26.6-26.5zm-3.8-10.1c.3-4.9 1.2-8.3 1.4-8.9 1 .5 2.3.9 3.6 1.3 1 2.1 2.6 10.3 1.9 15.2-2.2-.2-4.9-.2-6.4 0-.6-1-.7-5-.5-7.6zm23.5.5c-1.5 3.2-.7 7.4-4.6 11.2-.5-.4-4.4-2.3-5.9-2.9.6-5.1 5.4-11.5 8.5-14.2 1 1.1 2.3 2.1 3.6 2.7-.3.7-.9 1.8-1.6 3.2zm4.1-1c.1-.2.3-.5.4-.8 2.9 1 6 1.2 9.1.9.3 1 .8 2.1 1.4 3.2h-.1c-1.5.7-6.1 3.9-12.9 7.6-1.7 1-2.8 1.9-3.4 2.5.7-1 1.7-2.3 2.2-3.8 1.2-3 .9-5.4 3.3-9.6zm-16.3 3.9c-.7 1.9-1 2.8-1.3 3.9.6-4-.5-9.8-1.7-14.8 3.5.1 7-.8 10.5-2.8.3.8.6 1.5 1 2.2-2 1.6-6.7 6.8-8.5 11.5zm-54.5 4.1c-4 3.2-10.6 3.5-14.6 2-.5-.2-1.1-.1-1.5.2-2.7 2-5.7 2.1-8.1.5s-3.7-4.7-3-7.3c1-3.8 5.5-6.3 12.4-7 .7-.1 1.3-.6 1.4-1.3 1.2-6.3 5.3-7.3 9.3-8.2l1.7-.4c.8-.2 1.3-1 1.2-1.8-.1-1.2.9-5.3 4.2-7.9 3.9-3 9.7-3.1 16.9-.2.4.2.9.2 1.3 0s.7-.5.9-.9c1.8-5.2 5.4-8.8 10-10.3 4.8-1.5 10.1-.4 14.5 2.9.5.4 1.3.4 1.9.1 4.3-3 9.5-3.9 14.2-2.6 5.2 1.4 9.7 5.3 12.8 11.4.4.7 1.2 1 2 .8 4.9-1.7 8.9-1.7 11.5-.1 2.5 1.5 3.4 4.2 3.7 6.2.1.5.3.9.8 1.2.4.3.9.3 1.4.2 5.2-1.7 10.4-1.5 14 .7 2.3 1.4 3.8 3.5 4.2 6.1.1.8.7 1.3 1.5 1.4 4.5.3 7.8 2.3 8.8 5.5 1 2.9 0 6.2-2.4 8.3-3.4 2.9-8.9 2.7-14.9-.5-.5-.3-1-.3-1.5 0-4.7 2.4-9.2 2.6-13.3.5-4.8-2.5-7.6-7.3-7.9-9.8-.1-.4-.3-.8-.6-1.1-.4-.3-.8-.4-1.2-.3-3.4.5-14.5 1.5-16.8-9.2-.1-.5-.5-1-1-1.2s-1.1.2-1.5.5c-7.2 4.8-14.3 4.5-21.2-1-.6-.5-1.6-.6-2.2 0-7.8 7.9-14.2 7.3-17.3 6-.7-.3-1.6-.1-2 .6-3 4.8-9.5 5.8-14 4.3-.5-.2-1.1-.2-1.6.1-.4.4-.6.9-.6 1.5.6 4.3-.6 7.7-3.4 10.1zM39 52c.7-1 1.5-2.7 1.9-3.9.4.3.8.5.9.6.1.1 2.7 1.8 4.2 2.5 6.7 3.2 11 4 15.6 7.7-1.7 1.8-3.4 4-4.4 5.8C47.6 62 40.1 53.4 39 52zm5 21.5c-.9-.3-6.4-2.3-9.7-2.1-6.7.5-15.3-1.6-19.5-3.3-1.1-.4-10.3-1.2-1.3-1.2 3 0 6.6-.8 12.6 0 3.5.5 9.5 1.1 18.6.4 4.5-.4 7.9 1.1 9.6 2.8-.5 1.4-1 4.6-1.1 5.6-2.4.1-6.8-1.3-9.2-2.2zM21.3 98c-4.1-2.9-6.8-8.3-9.7-7.4-1.2.4-1.3 2.5.3 2.5 1.1 0 3.1 3 4.3 4.3-.3 1.6-4.4 3.2-8.6.7-1.9-1.1-5-5.1-2.3-9.7 1.4-2.5 5.5-3.9 10.4-3.8 9.5.2 12.1 11 14.3 13 0 1-5.1 3-8.7.4zm13.7-.2c-3.6-1.6-6.4-9.8-7.5-10.9-.4-.4 6.3-2.9 13.2-2.3 11.7 1 11.7 8.2 14.6 11.9 1.1 1.3-9.4 4.4-20.3 1.3zm38.2.7c-1.1-.7-4.4-4.9-5.6-6.3s-3.4-2.7-4.3-1.4c-.6.8 0 1.7 1 2.2 1.1.6 3.9 4.2 4.2 4.9-.2 1.1-5.4 3-8.5-.7-1.6-1.9-4.6-7.7-6.5-10.1 6.6-2.4 14.6-3.2 20.2-.6 5.4 2.5 6.3 8.4 8.5 11.2.5 1.9-5.7 3.1-9 .8zm14.7-.1c-3.6-1.6-6.4-9.8-7.5-10.9-.4-.4 6.3-2.9 13.2-2.3 11.7 1 11.7 8.2 14.6 11.8 1 1.4-9.5 4.5-20.3 1.4zm58.3-13.5c11.7 1 14.4 8.7 13.3 11.2-1 2.2-8.2 5-19 2-3.6-1.6-6.4-9.8-7.5-10.9-.4-.5 6.4-2.9 13.2-2.3zm-19.8 1.8c5.4 2.5 6.6 8.3 8.4 11.2.5 1.9-6 2.5-9 .9-1.1-.7-4.4-4.9-5.6-6.3s-3-2.4-4-1c-.6.8.1 1.7 1.1 2.3 1.3.7 3.4 3.8 3.8 4.5-.2 1.1-4.8 2.6-8.2-.8-1.7-1.7-4.8-7.8-6-10.2 6.7-2.5 13.9-3.2 19.5-.6zm31.3-20.4c-3.4.7-7.6 1.7-12.5 3.6-6.7 2.6-19.8 3.3-25.2 3.2-5.1-.1-6.9 2.2-8.7 1.9-.1-2.8-1.7-6.8-1.7-6.8 1.5-.8 6.4-2.4 10.6-2.3 5.7.2 16 .6 21.3-.2 2.6-.4 12.1-.4 13.6-.5 1.1 0 2.8.2 3.3.3 2.2.4.5.6-.7.8z\"/><path d=\"M21.1 43.7c-2.8 0-5.1.1-7.1 2.2-2.1 2.3-1.6 3.6-2 4-.6.6-2.1-.4-2-1.6.1-5.5 6.7-7.6 10.6-7.1 1.4.2 1.8 2.5.5 2.5M32.6 34.5c-4.2.5-5.4 2.5-6.1 4.8-.3.9-2.6.2-2.3-1.5 1.1-5.1 6.7-6.4 8.7-5.9.7.2.5 2.5-.3 2.6M50.8 23.4c-7.4-2.9-11.1 2.7-12.3 7.1-.2.6-2.6.4-2.3-1.5.9-4.5 5.3-11.1 15.4-8.6 1.2.4.5 3.5-.8 3M78.4 16.1c-6.8-4.7-12.1-.9-15 2.5-1.4 1.6-2.8-1.1-2.2-2 2.4-3.9 10.8-9.8 18.3-3.3.8.7-.2 3.4-1.1 2.8M106.3 22.4c-.6.4-.9-.5-1.3-1.1-6.1-9.6-17-7.1-20-2.6-.6.9-2.2-1.5-1.4-2.8 2.7-4.3 16.6-8.4 23.7 3.9.8 1.3-.2 2.1-1 2.6M123.4 28.5c-1.7-4.5-4.9-4.3-8.8-3.1-1.8.6-1.3-2.4-.8-2.6 3.7-1.3 10-1.9 11.7 4.3.5 1.7-1.7 2.6-2.1 1.4M143.4 38.1c-3.1-5.6-8-5.6-12.1-4-.9.4-1.8-2-.3-2.8 4-2.3 12.1-1.9 14.7 5.4.3 1.1-1.3 3.2-2.3 1.4M156.1 46.9c-.2.9-2.5 1-2.5 0 .4-4.6-1.9-5-5-4.9-1.1 0-1.1-2.4-.2-2.6 4.1-1 9.1 2 7.7 7.5\"/><g><path d=\"M76.5 70.7c-.1 1.7-1.5 3-3.2 2.9s-3-1.5-2.9-3.2v-.3c-.3-.4-1.7-.9-3.7.4-1 .6-2.2.2-.4-1.4 1.9-1.7 3.7-2.6 5.3-2.8h.1c2.7-.2 6.2.4 7.8 1 .7.3 0 3.6-.2 3.6-.6-.1-1.8-.6-2.8-.4v.2M85.4 80c-.5 1.6-6.1 2.1-7.2 0-.4-.8-1-2.9-.2-2.5 1.2.7 5.7.2 6.6 0 .8-.2.3-1.2.7-1.1.6.2.6 2.1.1 3.6M98.5 71.3c-1.4-1.2-3.2-1.7-3.9-1.2v.2c.1 1.7-1.1 3.2-2.8 3.4-1.7.2-3.2-1.1-3.3-2.8v-.1c-1.1-.4-2.9.3-3.1.2-.1-.1-.9-3.2.1-3.6 2.7-1.1 11.3-1.6 13.8 3.2.1.5-.1 1.3-.8.7\"/></g><g><path d=\"M96.3 117.5h63.9v57.9H96.3v-57.9zm-91.9 0h63.9v57.9H4.4v-57.9zm64 161.5c-16.5-4.8-32.4-11.3-42.6-20.8-3.6-3.4-6.7-7.1-9.3-11h16.3v2.3h7.6v-2.3h18.3v-30.9h-3.9v-5.6c-4 .9-10.4-1.2-13.3-1.2-3.2 0-4.9 1.4-4.9 1.4s-1.6-1.4-4.9-1.4c-2.9 0-9.4 2.2-13.3 1.2v5.6h-3.9V244c-6.2-10.9-9.2-24-9.9-40l-.1-2.5h63.9V279zm-46.8-38.2v-26.6c2.3.4 6.2-1.2 10.2-1.3 2.1-.1 2.7 1.2 2.7 1.2V241s-2.3-1.6-7.5-.1c-3.9 1-5.4-.1-5.4-.1zm17 .1V214s.6-1.2 2.7-1.2c4 .1 7.9 1.7 10.2 1.3v26.6s-1.4 1.1-5.4 0c-5.2-1.4-7.5.2-7.5.2zm54.3 39.2l-10.6 2.7-10.6-2.8v-82.1H4.4V179h67.3v-61.5h21.2V179h67.2v18.9H92.9v82.2zm57.7-35.9v-28h-3.9v-5.6c-4 .9-10.4-1.2-13.3-1.2-3.2 0-4.9 1.4-4.9 1.4s-1.6-1.4-4.9-1.4c-2.9 0-9.4 2.2-13.3 1.2v5.6h-3.9v30.9h18.3v2.3h7.6v-2.3h16.5c-2.7 4-5.8 7.6-9.7 11.1-10.8 9.9-26.8 16.1-42.9 20.8v-77.6h63.9l.1 2.6c-.9 17.6-3.7 30-9.6 40.2zm-7.2-30v26.6s-1.4 1.1-5.4 0c-5.2-1.5-7.5.1-7.5.1V214s.6-1.2 2.7-1.2c4.1.2 8 1.8 10.2 1.4zm-16.9-.2v26.9s-2.3-1.6-7.5-.1c-4 1.1-5.4 0-5.4 0v-26.6c2.3.4 6.2-1.2 10.2-1.3 2.1-.1 2.7 1.1 2.7 1.1zM.5 113.6v85.7c0 28.3 7.1 48 22.2 61.8 15 13.7 37.6 20.6 59.6 25.8 22.6-5.3 44.4-12 59.6-25.8 15.1-13.8 22.2-33.4 22.2-61.8v-85.7H.5z\"/><path d=\"M54.8 132.7v-5.6c-4 .9-10.4-1.2-13.3-1.2-3.2 0-4.9 1.4-4.9 1.4s-1.6-1.4-4.9-1.4c-2.9 0-9.4 2.2-13.3 1.2v5.6h-3.9v30.9h18.3v2.3h7.6v-2.3h18.3v-30.9h-3.9zm-20.3 24.7s-2.3-1.6-7.5-.1c-4 1.1-5.4 0-5.4 0v-26.6c2.3.4 6.2-1.2 10.2-1.3 2.1-.1 2.7 1.2 2.7 1.2v26.8zm17-.1s-1.4 1.1-5.4 0c-5.2-1.5-7.5.1-7.5.1v-26.9s.6-1.2 2.7-1.2c4 .1 7.9 1.7 10.2 1.3v26.7zM146.7 132.7v-5.6c-4 .9-10.4-1.2-13.3-1.2-3.2 0-4.9 1.4-4.9 1.4s-1.6-1.4-4.9-1.4c-2.9 0-9.4 2.2-13.3 1.2v5.6h-3.9v30.9h18.3v2.3h7.6v-2.3h18.3v-30.9h-3.9zM126 157.4s-2.3-1.6-7.5-.1c-4 1.1-5.4 0-5.4 0v-26.6c2.3.4 6.2-1.2 10.2-1.3 2.1-.1 2.7 1.2 2.7 1.2v26.8zm17-.1s-1.4 1.1-5.4 0c-5.2-1.5-7.5.1-7.5.1v-26.9s.6-1.2 2.8-1.2c4 .1 7.9 1.7 10.2 1.3v26.7h-.1z\"/></g></g><g><path class=\"st4\" d=\"M71.7 280l10.6 2.8 10.6-2.7v-82.2h67.3V179H92.9v-61.5H71.7V179H4.4v18.9h67.3zM40.8 84.7c-6.9-.6-13.6 1.9-13.2 2.3 1.1 1.1 3.9 9.3 7.5 10.9 10.8 3 21.3 0 20.3-1.3-2.9-3.7-3-10.9-14.6-11.9zM93.6 85.3c-6.9-.6-13.6 1.8-13.2 2.3 1.1 1.1 3.9 9.3 7.5 10.9 10.8 3.1 21.3 0 20.3-1.3-2.9-3.7-2.9-10.9-14.6-11.9zM140.5 98c10.8 3.1 18 .2 19-2 1.2-2.5-1.6-10.2-13.3-11.2-6.9-.6-13.6 1.8-13.2 2.3 1.1 1.1 3.9 9.3 7.5 10.9z\"/></g></g></svg>",
      "cbc-logo-type": "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" x=\"0\" y=\"0\" viewBox=\"0 0 505 244\" xml:space=\"preserve\"><style>.st0{fill:#27236a}.st1{fill:#2b2969}</style><path class=\"st0\" d=\"M20.2 102.9c1.2-2.2 3.5-3.5 6-3.6l29.8-.2 12.6-22.3-15.2-25.7c-.3-.6-.6-1.2-.7-1.8l-33 19.1c-4.5 2.6-7.2 7.4-7.2 12.5v36l7.7-14z\"/><path class=\"st0\" d=\"M185.3 166.7c-1.2 2.2-3.5 3.5-6 3.6l-29.5.3-14.7 26c-1.3 2.3-3.7 3.6-6.1 3.6-1.2 0-2.4-.3-3.4-.9-3.4-1.9-4.6-6.2-2.6-9.5l14.6-25.9-13.1-22.1-14.5.1h-.1c-3.8 0-7-3.1-7-6.9 0-3.9 3-7 6.9-7.1l14.5-.1 12.7-22.4-15.1-25.6c-2-3.4-.8-7.6 2.5-9.6 3.4-2 7.6-.8 9.6 2.5l15.2 25.7 29.5-.3h.1c2.5 0 4.8 1.3 6 3.4l8.9 15.1V80.9c0-5.2-2.8-10-7.2-12.5l-76.1-44c-2.2-1.3-4.7-1.9-7.2-1.9-2.6 0-5.1.7-7.2 1.9L64.3 42.5c.4.4.8.9 1.1 1.4l15.1 25.5 14.8-.1h.1c3.8 0 7 3.1 7 6.9 0 3.9-3 7-6.9 7.1l-14.5.1L68.2 106l15 25.4c1.3 2.2 1.3 4.8.1 7l-16.6 29.3c-1.2 2.2-3.5 3.5-6 3.6l-33.7.4h-.1c-2.5 0-4.8-1.3-6-3.4l-8.5-14.4v15c0 5.2 2.8 10 7.2 12.5l76.1 44c2.2 1.3 4.7 1.9 7.2 1.9s5.1-.7 7.3-1.9l76.1-44c4.5-2.6 7.2-7.4 7.2-12.5v-16.7l-8.2 14.5zm-73.6-97.5c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zm-18.2 72.5c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z\"/><path class=\"st0\" d=\"M149.1 112.3l-12.6 22.3 13 22 25.6-.2 12.6-22.3-13-22.1z\"/><g><path class=\"st1\" d=\"M226.5 103.7c-2 0-3.8-.3-5.6-1-1.8-.7-3.3-1.7-4.6-3-1.3-1.3-2.4-2.8-3.1-4.6-.8-1.8-1.2-3.9-1.2-6.1 0-2.3.4-4.3 1.2-6.1.8-1.8 1.8-3.4 3.2-4.7 1.3-1.3 2.9-2.3 4.6-3 1.7-.7 3.6-1 5.5-1s3.7.3 5.2.8 2.8 1.3 3.8 2.2c1.1.9 1.9 1.9 2.6 3 .7 1.1 1.1 2.3 1.4 3.4l-5.2 1.6c-.2-.7-.4-1.3-.8-2s-.9-1.3-1.5-1.8-1.4-1-2.3-1.3c-.9-.3-2-.5-3.2-.5-1.1 0-2.1.2-3.2.6-1 .4-2 1-2.8 1.7-.8.8-1.5 1.8-2 3s-.8 2.6-.8 4.2c0 1.5.2 2.9.7 4 .5 1.2 1.1 2.1 2 2.9.8.8 1.7 1.4 2.8 1.8 1.1.4 2.2.6 3.3.6 1.2 0 2.3-.2 3.2-.5.9-.4 1.7-.8 2.3-1.4.6-.6 1.2-1.2 1.6-1.9.4-.7.7-1.4.9-2l5.2 1.6c-.3 1.1-.7 2.2-1.4 3.3-.7 1.1-1.5 2.2-2.6 3.1-1.1.9-2.4 1.7-3.9 2.3-1.6.5-3.3.8-5.3.8zM251.9 82.8c1.5 0 2.8.3 4.1.8 1.3.5 2.4 1.2 3.3 2.2.9.9 1.6 2 2.2 3.3.5 1.3.8 2.7.8 4.2s-.3 2.9-.8 4.2c-.5 1.3-1.2 2.4-2.2 3.3-.9.9-2 1.7-3.3 2.2-1.3.5-2.6.8-4.1.8s-2.8-.3-4.1-.8-2.4-1.2-3.3-2.2c-.9-.9-1.6-2-2.2-3.3-.5-1.3-.8-2.7-.8-4.2s.3-2.9.8-4.2c.5-1.3 1.2-2.4 2.2-3.3s2-1.6 3.3-2.2 2.7-.8 4.1-.8zm0 16.1c.6 0 1.3-.1 1.9-.4.6-.2 1.1-.6 1.6-1.1.5-.5.8-1 1.1-1.7.3-.7.4-1.5.4-2.4 0-.9-.1-1.7-.4-2.4-.3-.7-.6-1.3-1.1-1.7-.5-.5-1-.8-1.6-1.1-.6-.2-1.2-.4-1.9-.4-.6 0-1.3.1-1.9.4-.6.2-1.1.6-1.6 1.1-.5.5-.8 1-1.1 1.7-.3.7-.4 1.5-.4 2.4 0 .9.1 1.7.4 2.4.3.7.6 1.3 1.1 1.7.5.5 1 .8 1.6 1.1.7.3 1.3.4 1.9.4zM266.5 103.1V83.4h5.1v2.4c.3-.5.6-.9 1-1.3s.9-.7 1.4-.9c.5-.2 1.1-.4 1.6-.6.6-.1 1.1-.2 1.7-.2 1.4 0 2.5.3 3.6.8 1 .6 1.8 1.4 2.3 2.4.8-1.2 1.7-2 2.7-2.5 1-.5 2.2-.7 3.5-.7.9 0 1.8.1 2.6.4.9.3 1.6.7 2.3 1.3.7.6 1.2 1.4 1.6 2.3.4.9.6 2.1.6 3.4V103h-5.2V91.4c0-1.1-.3-2-.8-2.7-.5-.7-1.4-1.1-2.7-1.1-1.1 0-2 .4-2.7 1.1-.6.8-1 1.7-1 2.7v11.5h-5.3V91.4c0-1.1-.3-2-.8-2.7-.6-.7-1.4-1.1-2.6-1.1-1.2 0-2.1.4-2.7 1.1s-1 1.7-1 2.8V103h-5.2zM301.9 110.7V83.4h5.2v2.4c.5-.8 1.2-1.4 2.2-2 1-.6 2.3-.8 3.8-.8 1.4 0 2.7.3 3.8.8s2.1 1.2 2.9 2.2c.8.9 1.4 2 1.8 3.2.4 1.2.6 2.6.6 4.1 0 1.5-.2 2.9-.7 4.1-.4 1.3-1.1 2.4-1.9 3.3s-1.8 1.6-2.9 2.2-2.4.8-3.8.8-2.5-.2-3.5-.7c-1-.5-1.7-1-2.2-1.7v9.5h-5.3zm15-17.4c0-1.8-.5-3.1-1.4-4.1-.9-1-2.1-1.4-3.5-1.4-.7 0-1.3.1-1.9.4-.6.3-1.1.6-1.6 1.1-.5.5-.8 1-1.1 1.7-.3.7-.4 1.5-.4 2.3 0 .9.1 1.7.4 2.3.3.7.6 1.3 1.1 1.7.5.5 1 .8 1.6 1.1.6.3 1.2.4 1.9.4 1.4 0 2.5-.5 3.5-1.5 1-.9 1.4-2.3 1.4-4zM339.2 103.1c-.1-.2-.1-.5-.1-.9V101c-.5.9-1.3 1.6-2.3 2s-2.1.6-3.1.6c-1.2 0-2.3-.2-3.2-.6-.9-.4-1.7-1-2.3-1.7-.6-.7-1.1-1.5-1.5-2.5-.3-.9-.5-2-.5-3V83.4h5.3v11.4c0 1.1.3 2.1.9 2.8.6.8 1.5 1.1 2.7 1.1 1.2 0 2.1-.4 2.8-1.1.6-.7 1-1.7 1-2.8V83.4h5.3v16.1c0 .8 0 1.5.1 2.1 0 .6.1 1.1.1 1.5h-5.2zM356.3 83.4h4v4.7h-4v8.2c0 .9.2 1.4.6 1.8.4.3 1 .5 1.7.5h1c.3 0 .5-.1.7-.1v4.4c-.2.1-.6.2-1.1.3-.5.1-1.1.2-1.9.2-1.9 0-3.4-.5-4.6-1.6-1.1-1.1-1.7-2.6-1.7-4.5v-9.2h-3.6v-4.7h1c1 0 1.8-.3 2.3-.9.5-.6.7-1.3.7-2.2v-2.8h4.8v5.9zM363.7 97.8c0-.9.2-1.7.5-2.3.3-.7.7-1.3 1.3-1.8.5-.5 1.2-.9 1.9-1.2.7-.3 1.5-.5 2.3-.6l4.8-.7c.6-.1.9-.2 1.2-.5.2-.3.3-.6.3-.9 0-.7-.3-1.3-.8-1.8s-1.4-.8-2.5-.8c-1.2 0-2.1.3-2.7 1-.6.6-1 1.4-1.1 2.2l-4.7-1c.1-.8.3-1.5.7-2.3.4-.8.9-1.5 1.6-2.1.7-.6 1.5-1.1 2.6-1.5 1-.4 2.2-.6 3.5-.6 1.5 0 2.9.2 4 .6 1.1.4 2 1 2.7 1.6.7.7 1.2 1.5 1.5 2.4.3.9.5 1.9.5 2.8v9.7c0 .5 0 1.1.1 1.7.1.6.1 1.1.2 1.4h-4.9c-.1-.3-.1-.6-.1-1.1 0-.5-.1-.9-.1-1.3-.5.8-1.2 1.5-2.2 2-.9.6-2.2.9-3.6.9-1 0-2-.2-2.8-.5s-1.6-.8-2.1-1.3c-.6-.5-1-1.2-1.3-1.9-.7-.6-.8-1.4-.8-2.1zm7.9 1.9c.6 0 1.1-.1 1.6-.2s1-.4 1.4-.8c.4-.4.7-.8 1-1.4.2-.6.4-1.3.4-2.2v-.9l-4.4.7c-.7.1-1.3.4-1.7.7-.5.4-.7 1-.7 1.7 0 .6.2 1.1.6 1.6.3.6.9.8 1.8.8zM392.9 83.4h4v4.7h-4v8.2c0 .9.2 1.4.6 1.8.4.3 1 .5 1.7.5h1c.3 0 .5-.1.7-.1v4.4c-.2.1-.6.2-1.1.3-.5.1-1.1.2-1.9.2-1.9 0-3.4-.5-4.6-1.6-1.1-1.1-1.7-2.6-1.7-4.5v-9.2H384v-4.7h1c1 0 1.8-.3 2.3-.9.5-.6.7-1.3.7-2.2v-2.8h4.8v5.9zM400.7 77c0-.9.3-1.7 1-2.4.6-.6 1.4-1 2.3-1 .9 0 1.7.3 2.3 1 .6.6.9 1.4.9 2.4 0 .9-.3 1.6-.9 2.3-.6.6-1.4 1-2.3 1-.9 0-1.7-.3-2.3-1-.6-.7-1-1.4-1-2.3zm.7 26.1V83.4h5.3v19.7h-5.3zM421.2 82.8c1.5 0 2.8.3 4.1.8 1.3.5 2.4 1.2 3.3 2.2.9.9 1.6 2 2.2 3.3.5 1.3.8 2.7.8 4.2s-.3 2.9-.8 4.2c-.5 1.3-1.2 2.4-2.2 3.3-.9.9-2 1.7-3.3 2.2-1.3.5-2.6.8-4.1.8s-2.8-.3-4.1-.8-2.4-1.2-3.3-2.2c-.9-.9-1.6-2-2.2-3.3-.5-1.3-.8-2.7-.8-4.2s.3-2.9.8-4.2c.5-1.3 1.2-2.4 2.2-3.3s2-1.6 3.3-2.2 2.6-.8 4.1-.8zm0 16.1c.6 0 1.3-.1 1.9-.4.6-.2 1.1-.6 1.6-1.1.5-.5.8-1 1.1-1.7.3-.7.4-1.5.4-2.4 0-.9-.1-1.7-.4-2.4-.3-.7-.6-1.3-1.1-1.7-.5-.5-1-.8-1.6-1.1-.6-.2-1.2-.4-1.9-.4-.6 0-1.3.1-1.9.4-.6.2-1.1.6-1.6 1.1-.5.5-.8 1-1.1 1.7-.3.7-.4 1.5-.4 2.4 0 .9.1 1.7.4 2.4.3.7.6 1.3 1.1 1.7.5.5 1 .8 1.6 1.1.6.3 1.3.4 1.9.4zM441.1 103.1h-5.3V83.4h5.2v2.4c.6-1 1.4-1.8 2.5-2.2 1.1-.5 2.1-.7 3.2-.7 1.2 0 2.3.2 3.2.6.9.4 1.6 1 2.2 1.7.6.7 1 1.5 1.3 2.5s.4 2 .4 3v12.4h-5.3V91.6c0-1.1-.3-2.1-.9-2.8-.6-.7-1.5-1.1-2.8-1.1-1.2 0-2.1.4-2.7 1.2-.6.8-1 1.8-1 2.9v11.3zM457.9 97.8c0-.9.2-1.7.5-2.3.3-.7.7-1.3 1.3-1.8.5-.5 1.2-.9 1.9-1.2.7-.3 1.5-.5 2.3-.6l4.8-.7c.6-.1.9-.2 1.2-.5.2-.3.3-.6.3-.9 0-.7-.3-1.3-.8-1.8s-1.4-.8-2.5-.8c-1.2 0-2.1.3-2.7 1-.6.6-1 1.4-1.1 2.2l-4.7-1c.1-.8.3-1.5.7-2.3.4-.8.9-1.5 1.6-2.1.7-.6 1.5-1.1 2.6-1.5 1-.4 2.2-.6 3.5-.6 1.5 0 2.9.2 4 .6 1.1.4 2 1 2.7 1.6.7.7 1.2 1.5 1.5 2.4.3.9.5 1.9.5 2.8v9.7c0 .5 0 1.1.1 1.7.1.6.1 1.1.2 1.4h-4.9c-.1-.3-.1-.6-.1-1.1 0-.5-.1-.9-.1-1.3-.5.8-1.2 1.5-2.2 2-.9.6-2.2.9-3.6.9-1 0-2-.2-2.8-.5s-1.6-.8-2.1-1.3c-.6-.5-1-1.2-1.3-1.9-.7-.6-.8-1.4-.8-2.1zm7.9 1.9c.6 0 1.1-.1 1.6-.2s1-.4 1.4-.8c.4-.4.7-.8 1-1.4.2-.6.4-1.3.4-2.2v-.9l-4.4.7c-.7.1-1.3.4-1.7.7-.5.4-.7 1-.7 1.7 0 .6.2 1.1.6 1.6.3.6.9.8 1.8.8zM480.7 103.1v-29h5.3v29h-5.3zM223.8 108.8c1.4 0 2.6.2 3.7.6 1.1.4 2 .9 2.7 1.6.7.7 1.3 1.5 1.7 2.4.4.9.6 1.9.6 3 0 1.5-.4 2.7-1.2 3.8-.8 1.1-1.8 1.8-3 2.2.7.2 1.3.4 1.9.8.6.4 1.1.9 1.6 1.5s.8 1.2 1.1 2c.3.7.4 1.6.4 2.4 0 1.1-.2 2.2-.6 3.2-.4 1-1 1.8-1.8 2.5s-1.7 1.2-2.8 1.6c-1.1.4-2.3.6-3.6.6h-11v-28.4h10.3zm-.8 11.7c1.3 0 2.3-.3 3-1 .7-.6 1.1-1.5 1.1-2.6s-.3-2-1-2.6c-.7-.6-1.7-.9-3.1-.9h-3.9v7.1h3.9zm.5 12c1.4 0 2.4-.3 3.2-1 .7-.7 1.1-1.6 1.1-2.7s-.4-2-1.1-2.7c-.7-.7-1.8-1.1-3.1-1.1H219v7.5h4.5zM237 111c0-.9.3-1.7 1-2.4s1.4-1 2.3-1c.9 0 1.7.3 2.3 1 .6.6.9 1.4.9 2.4 0 .9-.3 1.6-.9 2.3-.6.6-1.4 1-2.3 1-.9 0-1.7-.3-2.3-1-.7-.7-1-1.4-1-2.3zm.6 26.1v-19.7h5.3v19.7h-5.3zM257.5 116.8c1.5 0 2.8.3 4.1.8 1.3.5 2.4 1.2 3.3 2.2.9.9 1.6 2 2.2 3.3.5 1.3.8 2.7.8 4.2s-.3 2.9-.8 4.2c-.5 1.3-1.2 2.4-2.2 3.3-.9.9-2 1.7-3.3 2.2-1.3.5-2.6.8-4.1.8s-2.8-.3-4.1-.8c-1.3-.5-2.4-1.2-3.3-2.2s-1.6-2-2.2-3.3c-.5-1.3-.8-2.7-.8-4.2s.3-2.9.8-4.2c.5-1.3 1.2-2.4 2.2-3.3s2-1.6 3.3-2.2 2.6-.8 4.1-.8zm0 16.1c.6 0 1.3-.1 1.9-.4s1.1-.6 1.6-1.1c.5-.5.8-1 1.1-1.7.3-.7.4-1.5.4-2.4 0-.9-.1-1.7-.4-2.4-.3-.7-.6-1.3-1.1-1.7-.5-.5-1-.8-1.6-1.1-.6-.2-1.2-.4-1.9-.4-.6 0-1.3.1-1.9.4-.6.2-1.1.6-1.6 1.1-.5.5-.8 1-1.1 1.7-.3.7-.4 1.5-.4 2.4 0 .9.1 1.7.4 2.4.3.7.6 1.3 1.1 1.7.5.5 1 .8 1.6 1.1s1.2.4 1.9.4zM272 137.1v-29h5.3v29H272zM291.8 116.8c1.5 0 2.8.3 4.1.8 1.3.5 2.4 1.2 3.3 2.2.9.9 1.6 2 2.2 3.3.5 1.3.8 2.7.8 4.2s-.3 2.9-.8 4.2c-.5 1.3-1.2 2.4-2.2 3.3-.9.9-2 1.7-3.3 2.2-1.3.5-2.6.8-4.1.8s-2.8-.3-4.1-.8c-1.3-.5-2.4-1.2-3.3-2.2s-1.6-2-2.2-3.3c-.5-1.3-.8-2.7-.8-4.2s.3-2.9.8-4.2c.5-1.3 1.2-2.4 2.2-3.3s2-1.6 3.3-2.2 2.6-.8 4.1-.8zm0 16.1c.6 0 1.3-.1 1.9-.4s1.1-.6 1.6-1.1c.5-.5.8-1 1.1-1.7.3-.7.4-1.5.4-2.4 0-.9-.1-1.7-.4-2.4-.3-.7-.6-1.3-1.1-1.7-.5-.5-1-.8-1.6-1.1-.6-.2-1.2-.4-1.9-.4-.6 0-1.3.1-1.9.4-.6.2-1.1.6-1.6 1.1-.5.5-.8 1-1.1 1.7-.3.7-.4 1.5-.4 2.4 0 .9.1 1.7.4 2.4.3.7.6 1.3 1.1 1.7.5.5 1 .8 1.6 1.1s1.3.4 1.9.4zM309.7 136.9c.2 1.1.7 2 1.5 2.7.8.7 1.8 1 3.1 1 1.7 0 3-.4 3.9-1.3.9-.9 1.4-2.3 1.4-4.2v-1.4c-.4.6-1.1 1.2-2 1.7-.9.5-2.1.8-3.5.8-1.3 0-2.5-.2-3.6-.7-1.1-.5-2.1-1.1-2.9-2s-1.5-1.9-1.9-3c-.5-1.2-.7-2.4-.7-3.8 0-1.3.2-2.5.7-3.7.5-1.2 1.1-2.2 1.9-3.1.8-.9 1.8-1.6 2.9-2.1 1.1-.5 2.4-.8 3.7-.8 1.6 0 2.8.3 3.7.8.9.6 1.5 1.2 1.9 1.8v-2.3h5.1V135c0 1.4-.2 2.7-.6 3.9-.4 1.2-1 2.3-1.8 3.3-.8.9-1.9 1.7-3.2 2.3-1.3.6-2.9.9-4.7.9-1.4 0-2.6-.2-3.7-.6-1.1-.4-2.1-.9-2.9-1.6-.8-.7-1.5-1.4-2-2.3-.5-.9-.8-1.8-1-2.7l4.7-1.3zm5.3-5.2c1.4 0 2.5-.5 3.3-1.4.9-.9 1.3-2.1 1.3-3.6s-.5-2.7-1.4-3.6c-.9-.9-2-1.3-3.3-1.3-.7 0-1.3.1-1.9.3-.6.2-1.1.6-1.5 1-.4.4-.8 1-1 1.6-.2.6-.4 1.3-.4 2 0 1.5.4 2.8 1.3 3.7 1.1.8 2.2 1.3 3.6 1.3zM331.2 144.9l4.6-10.2-8.4-17.2h6l5.2 11.5 4.8-11.5h5.7l-12.4 27.4h-5.5zM226.5 171.7c-2 0-3.8-.3-5.6-1-1.8-.7-3.3-1.7-4.6-3-1.3-1.3-2.4-2.8-3.1-4.6-.8-1.8-1.2-3.9-1.2-6.1 0-2.3.4-4.3 1.2-6.1.8-1.8 1.8-3.4 3.2-4.7 1.3-1.3 2.9-2.3 4.6-3 1.7-.7 3.6-1 5.5-1s3.7.3 5.2.8 2.8 1.3 3.8 2.2c1.1.9 1.9 1.9 2.6 3 .7 1.1 1.1 2.3 1.4 3.4l-5.2 1.6c-.2-.7-.4-1.3-.8-2s-.9-1.3-1.5-1.8-1.4-1-2.3-1.3c-.9-.3-2-.5-3.2-.5-1.1 0-2.1.2-3.2.6-1 .4-2 1-2.8 1.7-.8.8-1.5 1.8-2 3s-.8 2.6-.8 4.2c0 1.5.2 2.9.7 4 .5 1.2 1.1 2.1 2 2.9.8.8 1.7 1.4 2.8 1.8 1.1.4 2.2.6 3.3.6 1.2 0 2.3-.2 3.2-.5.9-.4 1.7-.8 2.3-1.4.6-.6 1.2-1.2 1.6-1.9.4-.7.7-1.4.9-2l5.2 1.6c-.3 1.1-.7 2.2-1.4 3.3-.7 1.1-1.5 2.2-2.6 3.1-1.1.9-2.4 1.7-3.9 2.3-1.6.5-3.3.8-5.3.8zM251.9 150.8c1.5 0 2.8.3 4.1.8 1.3.5 2.4 1.2 3.3 2.2.9.9 1.6 2 2.2 3.3.5 1.3.8 2.7.8 4.2s-.3 2.9-.8 4.2c-.5 1.3-1.2 2.4-2.2 3.3-.9.9-2 1.7-3.3 2.2-1.3.5-2.6.8-4.1.8s-2.8-.3-4.1-.8c-1.3-.5-2.4-1.2-3.3-2.2-.9-.9-1.6-2-2.2-3.3-.5-1.3-.8-2.7-.8-4.2s.3-2.9.8-4.2c.5-1.3 1.2-2.4 2.2-3.3s2-1.6 3.3-2.2 2.7-.8 4.1-.8zm0 16.1c.6 0 1.3-.1 1.9-.4.6-.2 1.1-.6 1.6-1.1.5-.5.8-1 1.1-1.7.3-.7.4-1.5.4-2.4s-.1-1.7-.4-2.4c-.3-.7-.6-1.3-1.1-1.7-.5-.5-1-.8-1.6-1.1s-1.2-.4-1.9-.4c-.6 0-1.3.1-1.9.4s-1.1.6-1.6 1.1c-.5.5-.8 1-1.1 1.7-.3.7-.4 1.5-.4 2.4s.1 1.7.4 2.4c.3.7.6 1.3 1.1 1.7.5.5 1 .8 1.6 1.1.7.3 1.3.4 1.9.4zM278.5 156.7c-.5-.1-1.1-.2-1.6-.2-.7 0-1.3.1-2 .3-.6.2-1.1.5-1.6.9s-.8 1-1.1 1.7c-.3.7-.4 1.6-.4 2.7v9h-5.3v-19.7h5.2v2.9c.3-.6.7-1.2 1.1-1.6.5-.4 1-.7 1.5-.9.5-.2 1-.4 1.6-.4.5-.1 1-.1 1.4-.1h.6c.2 0 .4 0 .6.1v5.3zM299.7 165.5c-.2.9-.6 1.7-1.1 2.4-.5.8-1.2 1.4-1.9 2-.7.6-1.6 1-2.6 1.3-1 .3-2.1.5-3.3.5-1.4 0-2.7-.2-3.9-.7-1.2-.5-2.3-1.2-3.2-2.1-.9-.9-1.7-2-2.2-3.3-.5-1.3-.8-2.8-.8-4.4 0-1.6.3-3 .8-4.3.5-1.3 1.2-2.4 2.1-3.3s1.9-1.6 3.1-2.1c1.2-.5 2.4-.7 3.6-.7 3.1 0 5.5.9 7.2 2.7 1.7 1.8 2.6 4.3 2.6 7.5V162.7H286c0 .6.2 1.2.5 1.8.3.5.6 1 1.1 1.4.4.4 1 .7 1.5.9s1.2.3 1.9.3c1.3 0 2.2-.3 2.9-.8.7-.6 1.2-1.3 1.5-2.2l4.3 1.4zm-5-6.5c0-.5-.1-1-.3-1.4s-.4-.9-.8-1.2c-.4-.4-.8-.7-1.4-.9-.5-.2-1.2-.3-1.9-.3s-1.3.1-1.8.4c-.5.2-1 .5-1.4.9-.4.4-.7.8-.9 1.2-.2.5-.3.9-.3 1.4h8.8z\"/></g></svg>",
      "cbc-logo": "<svg class=\"cbc-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 205 218\"><path class=\"st0\" d=\"M20.2 87.9c1.2-2.2 3.5-3.5 6-3.6l29.8-.2 12.6-22.3-15.2-25.7c-.3-.6-.6-1.2-.7-1.8l-33 19.1c-4.5 2.6-7.2 7.4-7.2 12.5v36l7.7-14z\"/><path class=\"st0\" d=\"M185.3 151.7c-1.2 2.2-3.5 3.5-6 3.6l-29.5.3-14.7 26c-1.3 2.3-3.7 3.6-6.1 3.6-1.2 0-2.4-.3-3.4-.9-3.4-1.9-4.6-6.2-2.6-9.5l14.6-25.9-13.1-22.1-14.5.1h-.1c-3.8 0-7-3.1-7-6.9 0-3.9 3-7 6.9-7.1l14.5-.1L137 90.4l-15.1-25.6c-2-3.4-.8-7.6 2.5-9.6 3.4-2 7.6-.8 9.6 2.5l15.2 25.7 29.5-.3h.1c2.5 0 4.8 1.3 6 3.4l8.9 15.1V65.9c0-5.2-2.8-10-7.2-12.5l-76.1-44c-2.2-1.3-4.7-1.9-7.2-1.9-2.6 0-5.1.7-7.2 1.9L64.3 27.5c.4.4.8.9 1.1 1.4l15.1 25.5 14.8-.1h.1c3.8 0 7 3.1 7 6.9 0 3.9-3 7-6.9 7.1l-14.5.1L68.2 91l15 25.4c1.3 2.2 1.3 4.8.1 7l-16.6 29.3c-1.2 2.2-3.5 3.5-6 3.6l-33.7.4h-.1c-2.5 0-4.8-1.3-6-3.4l-8.5-14.4v15c0 5.2 2.8 10 7.2 12.5l76.1 44c2.2 1.3 4.7 1.9 7.2 1.9s5.1-.7 7.3-1.9l76.1-44c4.5-2.6 7.2-7.4 7.2-12.5v-16.7l-8.2 14.5zm-73.6-97.5c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zm-18.2 72.5c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z\"/><path class=\"st0\" d=\"M149.1 97.3l-12.6 22.3 13 22 25.6-.2 12.6-22.3-13-22.1z\"/></svg>",
      "ccv-logo": "<svg class=\"ccv-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 810 306\"><path class=\"c1\" d=\"M117 98c-4.4 0-8-3.6-8-8V18c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72zM216 98c-4.4 0-8-3.6-8-8V18c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72z\"/><g class=\"box\"><path class=\"c1\" d=\"M18 197c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H18z\"/></g><g class=\"box-2\"><path class=\"c1\" d=\"M117 296c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72z\"/></g><path class=\"c1\" d=\"M216 296c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72z\"/><path class=\"c2\" d=\"M316 97c-4.4 0-8-3.6-8-8V17c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72z\"/><g class=\"box\"><path class=\"c2\" d=\"M415 97c-4.4 0-8-3.6-8-8V17c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72z\"/></g><path class=\"c2\" d=\"M217 196c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72zM316 295c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72zM415 295c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8h-72z\"/><path class=\"v\" d=\"M594 190c0 4.4-3.6 8-8 8h-72c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72z\"/><g class=\"box-2\"><path class=\"v\" d=\"M594 91c0 4.4-3.6 8-8 8h-72c-4.4 0-8-3.6-8-8V19c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72z\"/></g><path class=\"v\" d=\"M693 289c0 4.4-3.6 8-8 8h-72c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72zM792 190c0 4.4-3.6 8-8 8h-72c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72z\"/><g class=\"box\"><path class=\"v\" d=\"M792 91c0 4.4-3.6 8-8 8h-72c-4.4 0-8-3.6-8-8V19c0-4.4 3.6-8 8-8h72c4.4 0 8 3.6 8 8v72z\"/></g></svg>",
      "refchef": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 423 715\"><path class=\"st0\" d=\"M406.2 360.5c-5-.2-15.7 1.7-18.6-1.4-3.4-3.5-7.7-5.4-11.4-8.4-3.3-2.7-5.4-5.1-10-5.4l-15-.9c1.3.1 5.8-27.5 6.2-30.3 1.5-11 2.2-18.5-3.9-27.9-3.5-5.4-7.1-10.7-10.7-16-7.7-11-16.8-20.5-32.7-17.3-2.3.5-6.7-2-7.8-4.3-7.9-15.7-10.8-32.3-6.2-49.6 2.2-8.3 7.1-13.6 16-16.5 9.7-3.2 18.5-9.4 27.9-13.8 3.8-1.7 8.6-3.3 12.4-2.6 17.5 3.4 26 .2 34.6-15.2 13.9-24.9 12.5-50.7 1.5-75.7-8.7-19.6-29-28.8-50.1-25.1-2.6.4-5.2.5-7.8.7.8-.9 1.7-1.8 2.5-2.7-9.9-12.5-18.9-25.9-30.1-37-4.6-4.5-14.4-6.4-21.2-5.4-17.3 2.7-32 28.1-28.3 45.4 5.2-9.7 9.5-20.6 16.4-29.5 9.1-11.9 19.5-12.3 31.2-3.1 11.7 9.2 18.8 21.2 22 35.4C302.3 70 299 74.3 299.8 86c4.5-5.2 8.1-9.5 11.9-13.6 22.3-23.8 55.9-21.7 69.2 5.5 11.6 23.6 13.9 48.2-2.1 71.7-6.6 9.7-13.6 12.1-25.9 7.8 1.9-8.4 13.9-14.9 5.4-25.8-28.9 47.7-77.2 61.5-102.5 31.3 3.5-9.5 6.6-18.1 10.3-28.2-5.4 0-7.6-.2-9.8.1-1 .1-1.9 1-2.8 1.5 4.9 7 2.5 13-5.2 14.8-3.3.8-7.1 1.8-9.5 4-11.4 10.5-28 9.2-37.6-3.3-1.7-2.2-3.6-4.1-5.4-6.2l-3.4 2.2c2.4 4.2 4.1 9.1 7.3 12.5 3.5 3.8 8.4 6.3 14.5 10.7-6.4 4.1-11.5 10-17 10.3-8 .6-16.3-2.8-24.5-4.5.9 7.5-4.2 8.2-11.6 5.8-11.2-3.6-18.3-10.9-21.3-22.5-4.6-18.1 2.8-31.4 16.1-43.1 10.2 3.7 17 18.3 31.1 8.9-17.3-1.9-20.3-5.9-16.3-23.3 3.8-16.6 10.9-31.5 25.4-41.7 15.2-10.8 31.6-15.8 50.4-8-.6-10.8-7.8-10.8-14.2-11.2-32.4-2.4-62.1 24.1-66.3 59-.5 4.4-1.2 8.7-1.5 10.5-7.3 1.5-13.3 1-17 3.7-19.5 14.1-19.2 55 .3 69.1 3.9 2.8 9.1 5.5 13.7 5.6 12.5.2 25.2-.1 37.5-1.9 8.5-1.2 13.9.8 15.9 8.9 3.2 12.4 5.7 24.9 8.6 37.3 2.3 10.1 0 16.8-11.2 20.2-6.4 1.9-12.8 6.2-17.4 11.2-12 12.7-25 24.3-37.8 36.1-24.2 22.1-36.6 51.7-37.2 85-.1 7.2 3.7 14.4 5.7 21.7 7.1-2.4 15.2-3.3 21.2-7.3 17.1-11.5 30.9-25.9 33.7-48.8 3.4 4.6 5.9 9.1 6.1 13.7.3 7.3 0 14.9-1.5 22-6.1 27.9-12 55.9-19.7 83.3-2.5 8.8-8.5 18.8-16 23.5-24.7 15.5-42.3 37.3-59.4 60-2 2.6-4.8 4.6-7.3 6.8-2.4-2.8-5.7-5.1-7.1-8.4-11.9-26.4-2.5-56.5 22.1-72.1 3.1-2 5.8-4.5 8.7-6.8-14.6.9-24.6 9-34.1 18.5-17.4 17.5-21.7 39.3-20.1 62.7-32.6-.4-45.9 17.4-34.2 47.8 6.2 16.1 17.2 30.5 26.5 46.3-1.3.6-6 1.5-8.8 4.3-4.3 4.3-7.2 10-10.7 15.1 5.6 2.4 11.1 6.4 16.9 7 24.6 2.5 48.4-11.9 73.5-3.9 2.6.8 6-1 9.1-1.4 5.9-.9 11.8-1.7 21.1-3-19.6 11.4-36.3 21-52.9 30.6.3 2 .6 4.1.9 6.1 10.9 2.3 22.4 8 32.6 6.2 12.2-2.2 23.9-9.9 34.5-17.1 3.8-2.6 4.8-10.5 5.7-16.1 1.4-9 5.6-13.8 14.8-16.7 10.1-3.2 19.1-9.7 28.9-14.2 3.2-1.5 7.8-2.3 11-1.3 10.9 3.6 13.6 13.8 17 23.4 4.3 11.9 9.3 24.3 23.5 26.3 11.4 1.6 23.3 1 34.8-.1 6.4-.6 14.4-2.1 14.3-12-.1-10.3-8.3-10.8-14.8-10.6-14.8.4-24.6-7.4-31.3-18.6-7.3-12.1-12.3-25.6-18.2-38.6-1.3-2.8-1.2-7.7-3-8.4-7.1-2.7-9.5-7-7.8-14.2 1.4-5.9 2.4-11.9 3.6-17.9l2.4.3 2.2 27.2c1.1.1 2.3.1 3.4.2 1.4-4.6 4.4-9.4 4.1-13.9-1.3-16.9-2-34.1-6.1-50.4-9-35.2-16.2-70-6.2-106.4 2.4-8.8 5.7-12 14.8-11.3 33.6 2.6 66.6-1.9 98.9-10.9 9.2-2.6 18.1-6.9 26.2-11.9 6.3-3.9 11.9-11.8 14.3-19 2 1.2 4.4 1.9 6.9 1.9 4.5 0 8.9-2.3 11.5-6 3.8-5.5 3.8-12.2-3.9-13.5h-1.5zM84.8 602.7c-7.3-11.4-5.1-15.7 10.7-21.3-3.8 7.5-7.2 14.2-10.7 21.3zM270.2 675c8.2 2.9 16 5.7 24.9 8.9-11.7 5.8-23.8 5.6-35.2 1.8-4.7-1.6-7.6-8.6-10-14.5 7.4 2.8 12 14.4 20.3 3.8zm-35.5-35.3c-11.6-6.7-23-18.8-33.8.9-4.3-19.6 21.7-11.1 18.5-25.3 5.3.6 9.6 1.2 15.2 1.8v22.6zm-37.3-267.5c7.2.7 12.6 1.2 17.9 1.7-6.4 7.8-12 8.4-17.9-1.7zm25.7 68.7c.8-7.5 1.7-15 2.5-22.5 1.6.3 3.2.6 4.8.8-1.6 7.4-3.1 14.8-4.7 22.1-.9-.1-1.7-.3-2.6-.4zm17.6 114.4c-11.9 2.3-15.8-9.8-9.4-32.6 3.1 10.8 6.3 21.6 9.4 32.6zm-11.8-191.1c-31.1-.2-49.4-18.9-49.6-50.5-.1-27.3 29.2-56.4 57.4-56.9 24.2-.5 47.2 22.1 47.1 46.2-.1 31.8-26.7 61.4-54.9 61.2zm3.4-116.2c-5.4-22.6-10.6-43.8-15.4-65.1-1.6-7.3.2-13.1 9.3-13.8 4.6-.4 9.2-2.3 13.7-2.1 4.8.2 9.6 1.7 14.1 3.6 12.2 5.1 24.3 10.8 36.8 16.4-6.1 20.8-3.9 41.9 4.3 63.2 1.5 4-6.5 11.7-10.6 18.7-18.6-13-33.9-24.7-52.2-20.9zm115.3 61.8c-.2 3.1-.3 6.2-.7 9.2-3.2 20.7-8.7 24.5-28.7 19.9-2.6-.6-5.2-1.3-7.9-2-21.3-5.5-20.8-5.5-18.4-26.8 1-8.6.6-18-2.1-26.2-3.3-10.2 1.9-13.9 9.1-16.5 21.3-7.8 35.7-1.4 44.2 19.9 2.8 7 3.8 14.8 5.5 22.2-.3.1-.6.2-1 .3z\"/><circle class=\"st0\" cx=\"218.2\" cy=\"327.1\" r=\"9.7\"/><circle class=\"st0\" cx=\"311.8\" cy=\"321.3\" r=\"9.3\"/></svg>"
    }
  };
  _exports.default = _default;
});
;define("refchef-ember/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "xKTtNc+5",
    "block": "{\"symbols\":[],\"statements\":[[5,\"nav\",[],[[],[]]],[0,\"\\n\"],[5,\"hero\",[],[[],[]]],[0,\"\\n\"],[1,[22,\"outlet\"],false],[0,\"\\n\"],[5,\"footer\",[],[[],[]]],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "refchef-ember/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("refchef-ember/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("refchef-ember/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _emberPopper.default;
    }
  });
});
;define("refchef-ember/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "yl7uzjDu",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "refchef-ember/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("refchef-ember/templates/references", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "nkBsoiE+",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "refchef-ember/templates/references.hbs"
    }
  });

  _exports.default = _default;
});
;define("refchef-ember/templates/references/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "GUp57jbX",
    "block": "{\"symbols\":[\"ref\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"container-fluid w-75 d-flex flex-column align-items-center mb-5\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"mt-5\"],[8],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"h5\"],[8],[0,\"Click on the rows for more details about each genome reference.\"],[9],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"h5\"],[8],[0,\"Genome references are located on Oscar's GPFS:\"],[9],[0,\"\\n    \"],[7,\"p\",true],[10,\"class\",\"text-primary\"],[8],[0,\"\\n      \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"server\"]]],[0,\"\\n      \"],[7,\"span\",true],[10,\"class\",\"pl-1\"],[8],[0,\"Oscar directory:\\n        \"],[7,\"span\",true],[10,\"class\",\"text-monospace\"],[8],[0,\"/gpfs/data/shared/databases/refchef_refs\"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"table\",true],[10,\"class\",\"table table-hover table-bordered\"],[8],[0,\"\\n    \"],[7,\"thead\",true],[8],[0,\"\\n      \"],[7,\"tr\",true],[8],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"d-flex justify-content-between align-items-center\"],[8],[0,\"\\n            \"],[7,\"span\",true],[8],[0,\"References\"],[9],[0,\"\\n            \"],[7,\"a\",false],[12,\"role\",\"button\"],[3,\"action\",[[23,0,[]],\"setSortProperty\",\"name\"]],[8],[0,\"\\n              \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"sort\"]]],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"d-flex justify-content-between align-items-center\"],[8],[0,\"\\n            \"],[7,\"span\",true],[8],[0,\"Organism\"],[9],[0,\"\\n            \"],[7,\"a\",false],[12,\"role\",\"button\"],[3,\"action\",[[23,0,[]],\"setSortProperty\",\"organism\"]],[8],[0,\"\\n              \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"sort\"]]],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"d-flex justify-content-between align-items-center\"],[8],[0,\"\\n            \"],[7,\"span\",true],[8],[0,\"Common Name\"],[9],[0,\"\\n            \"],[7,\"a\",false],[12,\"role\",\"button\"],[3,\"action\",[[23,0,[]],\"setSortProperty\",\"common_name\"]],[8],[0,\"\\n              \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"sort\"]]],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[7,\"th\",true],[10,\"scope\",\"col\"],[8],[0,\"\\n          \"],[7,\"div\",true],[10,\"class\",\"d-flex justify-content-between align-items-center\"],[8],[0,\"\\n            \"],[7,\"span\",true],[8],[0,\"Organization\"],[9],[0,\"\\n            \"],[7,\"a\",false],[12,\"role\",\"button\"],[3,\"action\",[[23,0,[]],\"setSortProperty\",\"organization\"]],[8],[0,\"\\n              \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"sort\"]]],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"tr\",true],[8],[0,\"\\n        \"],[7,\"th\",true],[8],[7,\"div\",true],[10,\"class\",\"input-inline-wrapper\"],[8],[5,\"input\",[[12,\"class\",\"input\"],[12,\"type\",\"text\"]],[[\"@value\"],[[23,0,[\"filterNameString\"]]]]],[5,\"fa-icon\",[[12,\"class\",\"filter-icon\"]],[[\"@icon\"],[\"filter\"]]],[9],[9],[0,\"\\n        \"],[7,\"th\",true],[8],[7,\"div\",true],[10,\"class\",\"input-inline-wrapper\"],[8],[5,\"input\",[[12,\"class\",\"input\"],[12,\"type\",\"text\"]],[[\"@value\"],[[23,0,[\"filterOrganismString\"]]]]],[5,\"fa-icon\",[[12,\"class\",\"filter-icon\"]],[[\"@icon\"],[\"filter\"]]],[9],[9],[0,\"\\n        \"],[7,\"th\",true],[8],[7,\"div\",true],[10,\"class\",\"input-inline-wrapper\"],[8],[5,\"input\",[[12,\"class\",\"input\"],[12,\"type\",\"text\"]],[[\"@value\"],[[23,0,[\"filterCommonNameString\"]]]]],[5,\"fa-icon\",[[12,\"class\",\"filter-icon\"]],[[\"@icon\"],[\"filter\"]]],[9],[9],[0,\"\\n        \"],[7,\"th\",true],[8],[7,\"div\",true],[10,\"class\",\"input-inline-wrapper\"],[8],[5,\"input\",[[12,\"class\",\"input\"],[12,\"type\",\"text\"]],[[\"@value\"],[[23,0,[\"filterOrganizationString\"]]]]],[5,\"fa-icon\",[[12,\"class\",\"filter-icon\"]],[[\"@icon\"],[\"filter\"]]],[9],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[7,\"tbody\",true],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"filteredSamples\"]]],null,{\"statements\":[[0,\"        \"],[5,\"link-to\",[],[[\"@route\",\"@query\",\"@tagName\"],[\"references.reference\",[28,\"hash\",null,[[\"name\"],[[23,1,[\"name\"]]]]],\"tr\"]],{\"statements\":[[0,\"\\n          \"],[7,\"td\",true],[10,\"scope\",\"row\"],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n          \"],[7,\"td\",true],[8],[1,[23,1,[\"organism\"]],false],[9],[0,\"\\n          \"],[7,\"td\",true],[8],[1,[23,1,[\"common_name\"]],false],[9],[0,\"\\n          \"],[7,\"td\",true],[8],[1,[23,1,[\"organization\"]],false],[9],[0,\"\\n        \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "refchef-ember/templates/references/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("refchef-ember/templates/references/reference", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "FtD7XD9v",
    "block": "{\"symbols\":[\"@model\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"container mb-5\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"my-5 d-flex justify-content-center align-items-start\"],[8],[0,\"\\n    \"],[7,\"div\",true],[8],[0,\"\\n      \"],[7,\"div\",true],[10,\"class\",\"mb-5\"],[8],[0,\"\\n        \"],[5,\"link-to\",[],[[\"@route\"],[\"references\"]],{\"statements\":[[0,\"\\n          \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"arrow-left\"]]],[0,\"\\n          Back\\n        \"]],\"parameters\":[]}],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"h3\",true],[8],[0,\"\\n        \"],[7,\"span\",true],[10,\"class\",\"text-primary\"],[8],[0,\"Reference name:\"],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[1,[23,1,[\"name\"]],false],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"h4\",true],[8],[0,\"\\n        \"],[7,\"span\",true],[10,\"class\",\"text-primary\"],[8],[0,\"Organism:\"],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[1,[23,1,[\"organism\"]],false],[9],[0,\" –\\n        \"],[7,\"span\",true],[8],[1,[23,1,[\"common_name\"]],false],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"h4\",true],[8],[0,\"\\n        \"],[7,\"span\",true],[10,\"class\",\"text-primary\"],[8],[0,\"Organization:\"],[9],[0,\"\\n        \"],[7,\"span\",true],[8],[1,[23,1,[\"organization\"]],false],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[7,\"p\",true],[10,\"class\",\"text-primary\"],[8],[0,\"\\n        \"],[5,\"fa-icon\",[],[[\"@icon\"],[\"server\"]]],[0,\"\\n        \"],[7,\"span\",true],[10,\"class\",\"pl-1\"],[8],[0,\"\\n          Oscar directory:\\n          \"],[7,\"span\",true],[10,\"class\",\"text-monospace\"],[8],[0,\"/gpfs/data/shared/databases/refchef_refs\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[4,\"if\",[[23,1,[\"levels\",\"references\"]]],null,{\"statements\":[[0,\"  \"],[7,\"h4\",true],[10,\"class\",\"ref-title\"],[8],[0,\"References\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[5,\"card-group\",[],[[\"@model\"],[[23,1,[\"levels\",\"references\"]]]]],[0,\"\\n\\n\"],[4,\"if\",[[23,1,[\"levels\",\"annotations\"]]],null,{\"statements\":[[0,\"  \"],[7,\"h4\",true],[10,\"class\",\"ref-title\"],[8],[0,\"Annotations\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[5,\"card-group\",[],[[\"@model\"],[[23,1,[\"levels\",\"annotations\"]]]]],[0,\"\\n\\n\"],[4,\"if\",[[23,1,[\"levels\",\"indices\"]]],null,{\"statements\":[[0,\"  \"],[7,\"h4\",true],[10,\"class\",\"ref-title\"],[8],[0,\"Indices\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[5,\"card-group\",[],[[\"@model\"],[[23,1,[\"levels\",\"indices\"]]]]],[0,\"\\n\"],[9],[0,\"\\n\"],[1,[22,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "refchef-ember/templates/references/reference.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('refchef-ember/config/environment', [], function() {
  var prefix = 'refchef-ember';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("refchef-ember/app")["default"].create({"name":"refchef-ember","version":"0.0.0+861b98b4"});
          }
        
//# sourceMappingURL=refchef-ember.map
