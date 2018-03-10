
appModule.controller('homeController', ['$scope', '$state', '$location', function($scope, $state, $location){
    
    console.log("homeController");
    init();


    function init(){
        console.log($state);
        console.log($location);
    };

}]);