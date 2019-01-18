import mongoose from 'mongoose';
import Model from'./Model';
var to = Model.to;

var schema = mongoose.Schema({
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
})

var Report = module.exports = mongoose.model('report',schema);
