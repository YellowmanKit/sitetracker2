import Router from './Router';
import path from 'path';
import mongoose from 'mongoose';
var ObjectId = require('mongoose').Types.ObjectId;

import Report from '../../models/Report';

class ReportRouter extends Router {

  constructor(app, mlanghku){
    super(app);
    this.app = app;
    this.init();
  }

  init(){
    var to = this.to;
    const app = this.app;
    mongoose.connect('mongodb://localhost/sitetracker', { useNewUrlParser: true });
    var db = mongoose.connection;

    app.get('/report/fetchAll/', async (req, res, next)=>{
      let err, reports;
      [err, reports] = await to(Report.find());
      if(err){ return res.json({ result: 'failed' }) }
      return res.json({ result: 'succeed', reports: reports })
    });

    app.post('/report/add/', async (req, res, next)=>{
      const data = req.body.data;
      console.log(data);

      let err, report;
      [err, report] = await to(Report.create({...data.report, ...{geoLocated: {latitude: data.latitude, longitude: data.longitude}} }))
      if(err){ return res.json({ result: 'failed' }) }
      return res.json({ result: 'succeed', report: report })
    });



  }

}


export default ReportRouter;
