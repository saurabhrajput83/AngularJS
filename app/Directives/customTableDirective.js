
appModule.directive('customTable',function(){

    return {
        'restrict': 'EA',
        'replace': true,
        'translude':true,
        'templateUrl': 'app/Partials/table.html',
        'scope':{
            'key': '@',
            'cols': '@'
        },
        'link': function($scope, $element, $attr){
        
            console.log("customTable link");
        },
        'controller':function($scope){
            
            console.log("customTable controller");
            $scope.columns = JSON.parse($scope.cols);
            $scope.rows = $scope.$parent.$parent[$scope.key] || [];
            
        }
        
    };

});
