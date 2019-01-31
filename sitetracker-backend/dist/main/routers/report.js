'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Router2 = require('./Router');

var _Router3 = _interopRequireDefault(_Router2);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Report = require('../../models/Report');

var _Report2 = _interopRequireDefault(_Report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ObjectId = require('mongoose').Types.ObjectId;

var ReportRouter = function (_Router) {
  _inherits(ReportRouter, _Router);

  function ReportRouter(app, mlanghku) {
    _classCallCheck(this, ReportRouter);

    var _this = _possibleConstructorReturn(this, (ReportRouter.__proto__ || Object.getPrototypeOf(ReportRouter)).call(this, app));

    _this.app = app;
    _this.init();
    return _this;
  }

  _createClass(ReportRouter, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      var to = this.to;
      var app = this.app;
      _mongoose2.default.connect('mongodb://localhost/sitetracker', { useNewUrlParser: true });
      var db = _mongoose2.default.connection;

      app.get('/report/fetchAll/', function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
          var err, reports, _ref2, _ref3;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  err = void 0, reports = void 0;
                  _context.next = 3;
                  return to(_Report2.default.find());

                case 3:
                  _ref2 = _context.sent;
                  _ref3 = _slicedToArray(_ref2, 2);
                  err = _ref3[0];
                  reports = _ref3[1];

                  if (!err) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt('return', res.json({ result: 'failed' }));

                case 9:
                  return _context.abrupt('return', res.json({ result: 'succeed', reports: reports }));

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }());

      app.post('/report/add/', function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
          var data, err, report, _ref5, _ref6;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  data = req.body.data;

                  console.log(data);

                  err = void 0, report = void 0;
                  _context2.next = 5;
                  return to(_Report2.default.create(_extends({}, data.report, { geoLocated: { latitude: data.latitude, longitude: data.longitude }, createdAt: new Date() })));

                case 5:
                  _ref5 = _context2.sent;
                  _ref6 = _slicedToArray(_ref5, 2);
                  err = _ref6[0];
                  report = _ref6[1];

                  if (!err) {
                    _context2.next = 11;
                    break;
                  }

                  return _context2.abrupt('return', res.json({ result: 'failed' }));

                case 11:
                  return _context2.abrupt('return', res.json({ result: 'succeed', report: report }));

                case 12:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        }));

        return function (_x4, _x5, _x6) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }]);

  return ReportRouter;
}(_Router3.default);

exports.default = ReportRouter;
//# sourceMappingURL=report.js.map