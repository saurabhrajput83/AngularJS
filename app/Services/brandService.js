
/**
 * brandService
 */
appModule.service('brandService', ['baseService', function (baseService) {

    this.CreateUpdateBrand = function (brand) {
        var request = {
            data: brand,
            method: "POST",
            url: "DemoApi/CreateUpdateBrand"
        };
        return baseService.sendRequest(request);
    };

    this.DeleteBrand = function (brandId) {
        var request = {
            method: "POST",
            url: "DemoApi/DeleteBrand/" + brandId
        };
        return baseService.sendRequest(request);
    };

    this.GetAllBrands = function () {
        var request = {
            method: "GET",
            url: "DemoApi/GetAllBrands"
        };
        return baseService.sendRequest(request);
    };

    this.GetBrandById = function (brandId) {
        var request = {
            method: "GET",
            url: "DemoApi/GetBrandById/" + brandId
        };
        return baseService.sendRequest(request);
    };

}]);