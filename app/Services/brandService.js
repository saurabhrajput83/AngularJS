
/**
 * brandService
 */
appModule.service('brandService', ['baseService', function (baseService) {

    this.createUpdateBrand = function (brand) {
        var request = {
            data: brand,
            method: "POST",
            url: "DemoApi/CreateUpdateBrand"
        };
        return baseService.sendRequest(request);
    };

    this.deleteBrand = function (brandId) {
        var request = {
            method: "POST",
            url: "DemoApi/DeleteBrand/" + brandId
        };
        return baseService.sendRequest(request);
    };

    this.getAllBrands = function () {
        var request = {
            method: "GET",
            url: "Suppliers"
        };
        return baseService.sendRequest(request);
    };

    this.getBrandById = function (brandId) {
        var request = {
            method: "GET",
            url: "Suppliers(" + brandId + ")"
        };
        return baseService.sendRequest(request);
    };

}]);