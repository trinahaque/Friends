app.controller('editController', ['$scope', 'friendFactory', '$routeParams', '$location', function($scope, friendFactory, $routeParams, $location){
  // console.log("The id in edit controller is", $routeParams.id);
  $scope.editFriend = {};
  friendFactory.show($routeParams.id, function(data){
    // console.log("The data is", data);
    $scope.editFriend = data;
    $scope.editFriend.birthday = new Date(data.birthday);
  })
  // console.log('Edit Friend in controller is', $scope.editFriend);
  $scope.update = function(){
    // console.log("The updated info in the controller is", $scope.editFriend);
    if ($scope.editFriend.first_name.length < 1 || $scope.editFriend.last_name.length < 1 || $scope.editFriend.birthday < 1){
      $scope.error = "A field can not be empty"
      return;
    }
    friendFactory.update($scope.editFriend, function(data){
      // console.log("The data in update controller is", data);
      $scope.editFriend = data;
      $scope.editFriend.birthday = new Date(data.birthday);
      $location.url('/');
    })
  }

}])
