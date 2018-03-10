
appModule.controller('homeController', ['$scope', '$rootScope', '$state', '$location', 'brandService', 'departmentService', 'productService', 
function($scope, $rootScope, $state, $location, brandService, departmentService, productService){
    
    console.log("homeController");
    
    $scope.hasData = function (key) {
        
        if ($scope[key] && $scope[key].length > 0) {
            return true;
        }
        return false;
    };

    $scope.getAllBrands = function () {
        
        brandService.getAllBrands().then(function (data) {
            $scope.Brands = data.value;
        });
    };

    $scope.getAllDepartments = function () {
        
        departmentService.getAllDepartments().then(function (data) {
            $scope.Departments = data.value;
        });
    };

    $scope.getAllProducts = function () {
        
        productService.getAllProducts().then(function (data) {
            console.log(data);
            $scope.Products = data.value;
        });
    };

    function init(){
        
        $scope.getAllBrands();
        $scope.getAllDepartments();
        $scope.getAllProducts();
    };
    
    init();

}]);