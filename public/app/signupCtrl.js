myApp.controller("signupCtrl", function($scope, notifier, $location, UserService){

    $scope.signup = function(){
        UserService.createUser($scope.email,$scope.password);
        $scope.email=null;
        $scope.password=null;
        $scope.fname = null;
        $scope.lname =null;
        console.log('form clear after submit');
    };

});