import mongoose from 'mongoose';
import Model from'./Model';
var to = Model.to;

var schema = mongoose.Schema({
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
})

var Report = module.exports = mongoose.model('report',schema);
