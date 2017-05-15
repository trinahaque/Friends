var friends = require('../controllers/friends.js');

module.exports = function(app){

  app.get('/friends', function(req, res){
    friends.index(req, res);
  });

  app.post('/new', function(req, res){
    friends.create(req, res);
  });

  app.get('/show/:id', function(req, res){
    // console.log("Show id in route is", req.params.id);
    friends.find_one(req, res);
  });

  app.put('/update/:id', function(req, res){
    // console.log("Id in update server route is", req.params.id);
    // console.log("Req.body in update server route is", req.body);
    friends.update(req, res);
  })

  app.delete('/delete/:id', function(req, res){
    // console.log('The delete id in server route is', req.params.id);
    // console.log("Req.body in delete server route is", req.body);
    friends.delete(req, res);
  })

}
