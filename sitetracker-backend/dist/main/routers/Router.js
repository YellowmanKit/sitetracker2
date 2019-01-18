'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
  function Router() {
    _classCallCheck(this, Router);
  }

  _createClass(Router, [{
    key: 'getAppend',
    value: function getAppend(type) {
      return type === 'photo' ? 'photo/' : type === 'signature' ? 'signature/' : type;
    }
  }, {
    key: 'outDated',
    value: function outDated(date) {
      var today = new Date();
      var endDate = new Date(date);
      return date < today;
    }
  }, {
    key: 'to',
    value: function to(promise) {
      return promise.then(function (data) {
        return [null, data];
      }).catch(function (err) {
        return [err];
      });
    }
  }]);

  return Router;
}();

exports.default = Router;
//# sourceMappingURL=Router.js.map