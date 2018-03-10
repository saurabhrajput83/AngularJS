
/**
 * departmentService
 */
appModule.service('departmentService', ['baseService', function (baseService) {

    this.createUpdateDepartment = function (department) {
        var request = {
            data: department,
            method: "POST",
            url: "DemoApi/CreateUpdateDepartment"
        };
        return baseService.sendRequest(request);
    };

    this.deleteDepartment = function (departmentId) {
        var request = {
            method: "POST",
            url: "DemoApi/DeleteDepartment/" + departmentId
        };
        return baseService.sendRequest(request);
    };

    this.getAllDepartments = function () {
        var request = {
            method: "GET",
            url: "Categories"
        };
        return baseService.sendRequest(request);
    };

    this.getDepartmentById = function (departmentId) {
        var request = {
            method: "GET",
            url: "Categories(" + departmentId + ")"
        };
        return baseService.sendRequest(request);
    };

}]);