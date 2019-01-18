'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Model = require('./Model');

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var to = _Model2.default.to;

var schema = _mongoose2.default.Schema({
  photo: {
    type: String
  },
  signature: {
    type: String
  },
  problem: {
    type: String
  },
  email: {
    type: String
  },
  geoLocated: {
    latitude: { type: String },
    longitude: { type: String }
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

var Report = module.exports = _mongoose2.default.model('report', schema);
//# sourceMappingURL=Report.js.map