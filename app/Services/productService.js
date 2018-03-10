
/**
 * productService
 */
appModule.service('productService', ['baseService', function (baseService) {

    this.CreateUpdateProduct = function (product) {
        var request = {
            data: product,
            method: "POST",
            url: "DemoApi/CreateUpdateProduct"
        };
        return baseService.sendRequest(request);
    };

    this.DeleteProduct = function (productId) {
        var request = {
            method: "POST",
            url: "DemoApi/DeleteProduct/" + productId
        };
        return baseService.sendRequest(request);
    };

    this.getAllProducts = function () {
        var request = {
            method: "GET",
            url: "Products"
        };
        return baseService.sendRequest(request);
    };

    this.getProductById = function (productId) {
        var request = {
            method: "GET",
            url: "Products(" + productId + ")"
        };
        return baseService.sendRequest(request);
    };


}]);