import https from 'https';
import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

import AppRouter from './routers/app.js';
import UserRouter from './routers/user.js';

class CreateApp {

  constructor(appName, port, useHttps, devMode){
    this.createApp(appName, port, useHttps, devMode);
  }

  createApp(appName, port, useHttps, devMode){
    const temp = path.join(__dirname, '../../../data/temp/');
    const storage = path.join(__dirname, '../../../data/storage/');

    var storageConfig = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, temp);
      },
      filename: (req, file, cb) => {
        //console.log(file)
        cb(null, Date.now() + '-' + file.originalname);
      }
    });
    var upload = multer({ storage: storageConfig });

    const app = express();
    if(useHttps){
      const httpsOptions = {
        cert: fs.readFileSync(path.join(__dirname, '../ssl', devMode? 'dev-server.crt':'server.crt' )),
        key: fs.readFileSync(path.join(__dirname, '../ssl',  devMode? 'dev-server.key':'server.key' )),
        ca: fs.readFileSync(path.join(__dirname, '../ssl', devMode? 'dev-server-ca.crt':'server-ca.crt' ))
      }
      app.server = https.createServer(httpsOptions, app);
    }else{
      app.server = http.createServer(app);
    }

    app.use(morgan('dev'));
    app.use(cors({exposeHeaders: "*"}));
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static(path.join(__dirname,'../../' + appName + '/')));

    app.set('root',__dirname);
    app.set('config', storageConfig);
    app.set('upload',upload);
    app.set('temp',temp);
    app.set('storage',storage);

    new AppRouter(app);
    new UserRouter(app);

    app.server.listen(port, ()=>{console.log('App is running on port ' + app.server.address().port);});
  }


}

export default CreateApp;
