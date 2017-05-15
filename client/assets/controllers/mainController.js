app.controller('mainController', ['$scope', 'friendFactory', '$location', function($scope, friendFactory, $location){
  friendFactory.index(function(data){
    $scope.friends = data;
    // console.log("All the friends in controller is", $scope.friends);
  })
  // console.log("The routeparams in the main controller is", $routeParams);
  $scope.delete = function(friend){
    // console.log("Deleted friend is", friend);
    friendFactory.delete(friend, function(data){
      friendFactory.index(function(data){
        $scope.friends = data;
        $location.url('/')
      })
      // console.log("The data in the controller after deletion is", data);
    })
  }
}])
