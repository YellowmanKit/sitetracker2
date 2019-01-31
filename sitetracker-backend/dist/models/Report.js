'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Model = require('./Model');

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var to = _Model2.default.to;

var schema = _mongoose2.default.Schema({
  photo: [String],
  signature: {
    type: String
  },
  catagory: {
    type: String
  },
  problem: {
    type: String
  },
  description: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String
  },
  geoLocated: {
    latitude: { type: String },
    longitude: { type: String }
  },
  createdAt: {
    type: Date
  }
});

var Report = module.exports = _mongoose2.default.model('report', schema);
//# sourceMappingURL=Report.js.map