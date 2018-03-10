
appModule.controller('productController', ['$scope', '$state', '$location', 'brandService', 'productService', 
function($scope, $state, $location, brandService, productService){
    
    console.log("productController");
    
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

    $scope.getAllProducts = function () {
        
        productService.getAllProducts().then(function (data) {
            console.log(data);
            $scope.Products = data.value;
        });
    };

    $scope.getProductById = function (id) {
        
        productService.getProductById(id).then(function (data) {
            console.log(data);
            $scope.Product = data;
        });
    };

    $scope.product_Delete = function (id) {

        productService.DeleteProduct(id).then(function () {
            $scope.GetAllProducts();
        });
               
    };

    function init(){
        
        if($location.$$path.indexOf("Product_Add")>-1){

        } else if ($location.$$path.indexOf("Product_Edit")>-1){
            $scope.getAllBrands();
            $scope.getProductById($state.params.id);
        } else if ($location.$$path.indexOf("Products")>-1){
            $scope.getAllProducts();
        }
    };
    
    init();

}]);