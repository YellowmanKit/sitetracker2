'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _app = require('./routers/app.js');

var _app2 = _interopRequireDefault(_app);

var _user = require('./routers/user.js');

var _user2 = _interopRequireDefault(_user);

var _report = require('./routers/report.js');

var _report2 = _interopRequireDefault(_report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateApp = function () {
  function CreateApp(appName, port, useHttps, devMode) {
    _classCallCheck(this, CreateApp);

    this.createApp(appName, port, useHttps, devMode);
  }

  _createClass(CreateApp, [{
    key: 'createApp',
    value: function createApp(appName, port, useHttps, devMode) {
      var temp = _path2.default.join(__dirname, '../../../data/temp/');
      var storage = _path2.default.join(__dirname, '../../../data/storage/');

      var storageConfig = _multer2.default.diskStorage({
        destination: function destination(req, file, cb) {
          cb(null, temp);
        },
        filename: function filename(req, file, cb) {
          //console.log(file)
          cb(null, Date.now() + '-' + file.originalname);
        }
      });
      var upload = (0, _multer2.default)({ storage: storageConfig });

      var app = (0, _express2.default)();
      if (useHttps) {
        var httpsOptions = {
          cert: _fs2.default.readFileSync(_path2.default.join(__dirname, '../ssl', devMode ? 'dev-server.crt' : 'server.crt')),
          key: _fs2.default.readFileSync(_path2.default.join(__dirname, '../ssl', devMode ? 'dev-server.key' : 'server.key')),
          ca: _fs2.default.readFileSync(_path2.default.join(__dirname, '../ssl', devMode ? 'dev-server-ca.crt' : 'server-ca.crt'))
        };
        app.server = _https2.default.createServer(httpsOptions, app);
      } else {
        app.server = _http2.default.createServer(app);
      }

      app.use((0, _morgan2.default)('dev'));
      app.use((0, _cors2.default)({ exposeHeaders: "*" }));
      app.use(_bodyParser2.default.json({ limit: '50mb' }));
      app.use(_bodyParser2.default.urlencoded({ extended: false }));
      app.use(_express2.default.static(_path2.default.join(__dirname, '../../' + appName + '/')));

      app.set('root', __dirname);
      app.set('config', storageConfig);
      app.set('upload', upload);
      app.set('temp', temp);
      app.set('storage', storage);

      new _app2.default(app);
      new _user2.default(app);
      new _report2.default(app);

      app.server.listen(port, function () {
        console.log('App is running on port ' + app.server.address().port);
      });
    }
  }]);

  return CreateApp;
}();

exports.default = CreateApp;
//# sourceMappingURL=createApp.js.map