
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

    this.GetAllProducts = function () {
        var request = {
            method: "GET",
            url: "DemoApi/GetAllProducts"
        };
        return baseService.sendRequest(request);
    };

    this.GetProductById = function (productId) {
        var request = {
            method: "GET",
            url: "DemoApi/GetProductById/" + productId
        };
        return baseService.sendRequest(request);
    };


}]);