"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("babel-core/register");

require("babel-polyfill");

var _createApp = require("./main/createApp.js");

var _createApp2 = _interopRequireDefault(_createApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _createApp2.default('sitetracker', 443, true, false);
var app2 = new _createApp2.default('dashboard', 80, false, false);
exports.default = app;
//# sourceMappingURL=index.js.map