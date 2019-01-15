import mongoose from 'mongoose';
import Model from'./Model';
var to = Model.to;

var schema = mongoose.Schema({
  id: {
    type: String
  },
  pw: {
    type: String
  },
  type: {
    type: String,
    default: 'standard'
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

var User = module.exports = mongoose.model('user',schema);

module.exports.find = async (id, pw)=>{
  var err, user;
  [err, user] = await to(User.findOne({ id: id, pw: pw }));
  /*if(!err && !user){
    [err, user] = await to(User.create({ id: id, pw: pw }));
  }*/
  return [err, user];
}
