var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {
  index: function(req, res){
    Friend.find({}, function(err, results){
      if (err) {
        res.json(err);
      }
      // console.log("The data in server controller is", results);
      res.json(results);
    })
  },
  create: function(req, res){
    // console.log("req.body in server controller is", req.body.lasttname);
    var friend = new Friend({first_name: req.body.firstname, last_name: req.body.lasttname, birthday: req.body.birthday});
    // console.log("friend object is", friend);
    friend.save(function(err, results){
      if (err){
        res.json(err);
      }
      else{
        // console.log('friend is', results);
        res.json(results);
      }
    })
  },
  find_one: function(req, res){
    // console.log("Show id in server controller is", req.params.id);
    Friend.find({_id:req.params.id}, function(err, results){
      if (err) {
        res.json(err);
      }
      else{
        // console.log("The show data in server controller is", results[0]);
        res.json(results[0]);
      }
    })
  },
  update: function(req, res){
    Friend.findOne({_id: req.params.id}, function(err, data){
      // console.log("Update find friend from database is", data);
      // console.log("Update find friend req.body is", req.body);
      data.first_name = req.body.firstname;
      data.last_name = req.body.lasttname;
      data.birthday = req.body.birthday;
      // console.log("Updated data is", data);
      data.save(function(err, data){
        if (err) {
          res.json(err);
        }
        else{
          // console.log("Updated data is", data);
          res.json(data);
        }
      })
    })
  },
  delete: function(req, res){
    Friend.findOne({_id: req.params.id}, function(err, data){
      if (err) {
        res.json(err);
      }
      else{
        Friend.remove(data, function(error, datum){
          if (error){
            res.json(error);
          }
          else{
            // console.log("The data after deletion is", datum);
            res.json(data);
          }
        })
      }
    })
  }
}
