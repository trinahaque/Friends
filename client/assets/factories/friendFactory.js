app.factory('friendFactory', ['$http', function($http){
  var factory = {};
  factory.index = function(callback){
    $http.get('/friends').then(function(res){
      // console.log("Data back in factory is", res.data);
      if (typeof callback === 'function'){
        callback(res.data);
      }
    })
  }
  factory.create = function(newFriend, callback){
    // console.log("New friend in factory is", newFriend);
    $http.post('/new', newFriend).then(function(res){
      if (typeof callback === 'function'){
        callback(res.data);
      }
    })
  }
  factory.show = function(showid, callback){
    // console.log("Show friend id in factory is", showid);
    $http.get('/show/'+showid).then(function(friend_one){
      // console.log("The show friend in factory is", friend_one.data);
      if (typeof callback === 'function'){
        callback(friend_one.data);
      }
    })
  }
  factory.update = function(updatefriend, callback){
    // console.log("Update friend in factory is", updatefriend);
    // console.log("Update id in factory is", updatefriend._id);
    $http.put('/update/'+updatefriend._id, updatefriend).then(function(res){
      if (typeof callback === 'function'){
        callback(res.data);
      }
    })
  }
  factory.delete = function(friend, callback){
    // console.log("The data in the factory after deletion is", friend);
    $http.delete('/delete/'+friend._id, friend).then(function(res){
      // console.log("The data back in factory after delete is", res);
      if (typeof callback === 'function'){
        callback(res.data);
      }
    })
  }
  return factory;
}])
