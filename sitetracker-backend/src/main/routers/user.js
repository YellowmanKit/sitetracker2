import Router from './Router';
import path from 'path';
import mongoose from 'mongoose';
var ObjectId = require('mongoose').Types.ObjectId;

import User from '../../models/User';

class UserRouter extends Router {

  constructor(app, mlanghku){
    super(app);
    this.app = app;
    this.init();
  }

  init(){
    const app = this.app;
    mongoose.connect('mongodb://localhost/sitetracker', { useNewUrlParser: true });
    var db = mongoose.connection;

    app.get('/user/login/', async (req, res, next)=>{
      const id = req.headers.id;
      const pw = req.headers.pw;
      console.log(id + ' ' + pw);

      var err, user;
      [err, user] = await User.find(id, pw);
      if(err || !user){ return res.json({ result: 'failed' }) }

      return res.json({ result: 'succeed', user: user })
    });



  }

}


export default UserRouter;
