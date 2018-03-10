
appModule.controller('brandController', ['$scope', '$rootScope', '$state', '$location', 'brandService', 
function($scope, $rootScope, $state, $location, brandService){
    
    console.log("brandController");
    
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

    $scope.getBrandById = function (id) {
        
        brandService.getBrandById(id).then(function (data) {
            console.log(data);
            $scope.Brand = data;
        });
    };

    $scope.brand_Delete = function (id) {

        productService.DeleteProduct(id).then(function () {
            $scope.getAllBrands();
        });
               
    };

    function init(){
        
        if($location.$$path.indexOf("Brand_Add")>-1){

        } else if ($location.$$path.indexOf("Brand_Edit")>-1){
            $scope.getBrandById($state.params.id);
        } else if ($location.$$path.indexOf("Brands")>-1){
            $scope.getAllBrands();
        }
    };
    
    init();

}]);