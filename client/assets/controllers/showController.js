app.controller('showController', ['$scope', 'friendFactory', '$routeParams', function($scope, friendFactory, $routeParams){
  $scope.friend = [];
  friendFactory.show($routeParams.id, function(data){
    // console.log("Show one in controller is", data);
    $scope.friend = data;
  })
  // console.log('$routeParams is', $routeParams.id);
}])
