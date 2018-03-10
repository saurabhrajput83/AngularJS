
/**
 * departmentService
 */
appModule.service('departmentService', ['baseService', function (baseService) {

    this.CreateUpdateDepartment = function (department) {
        var request = {
            data: department,
            method: "POST",
            url: "DemoApi/CreateUpdateDepartment"
        };
        return baseService.sendRequest(request);
    };

    this.DeleteDepartment = function (departmentId) {
        var request = {
            method: "POST",
            url: "DemoApi/DeleteDepartment/" + departmentId
        };
        return baseService.sendRequest(request);
    };

    this.GetAllDepartments = function () {
        var request = {
            method: "GET",
            url: "DemoApi/GetAllDepartments"
        };
        return baseService.sendRequest(request);
    };

    this.GetDepartmentById = function (departmentId) {
        var request = {
            method: "GET",
            url: "DemoApi/GetDepartmentById/" + departmentId
        };
        return baseService.sendRequest(request);
    };

}]);