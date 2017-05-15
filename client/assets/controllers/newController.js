app.controller('newController', ['$scope', 'friendFactory', '$location', function($scope, friendFactory, $location){
  $scope.create = function(){
    $scope.errors = {};
    friendFactory.create($scope.newFriend, function(data){
      console.log("new friend is", data);
      // console.log("New friend in controlelr is", $scope.newFriend);
      if (data.errors){
        $scope.errors = data.errors;
        return;
      }
      else{
        friendFactory.index(function(data){
          $scope.friends = data;
          $scope.newFriend = {};
          $location.url('/');
        })
      }
    })
  }
}])
