app.controller('userController', function($scope, userFactory){
    
    userFactory.checkStatus(function(data){
        $scope.current_user = data
       
        })
    $scope.login = function(){
       
        if(!$scope.user.name || $scope.user.name.length<3){
            alert('Name must be at least 3 characters')
        }
        else{
      
        userFactory.login($scope.user)

        }
}
$scope.logout = function(cb){
  
    userFactory.logout();
}
})