
appModule.controller('departmentController', ['$scope', '$rootScope', '$state', '$location', 'departmentService', 
function($scope, $rootScope, $state, $location, departmentService){
    
    console.log("departmentController");
    
    $scope.hasData = function (key) {
        
        if ($scope[key] && $scope[key].length > 0) {
            return true;
        }
        return false;
    };

    $scope.getAllDepartments = function () {
        
        departmentService.getAllDepartments().then(function (data) {
            $scope.Departments = data.value;
        });
    };

    $scope.getDepartmentById = function (id) {
        
        departmentService.getDepartmentById(id).then(function (data) {
            console.log(data);
            $scope.Department = data;
        });
    };

    $scope.department_Delete = function (id) {

        departmentService.deleteDepartment(id).then(function () {
            $scope.GetAllDepartments();
        });
               
    };

    function init(){
        
        if($location.$$path.indexOf("Department_Add")>-1){

        } else if ($location.$$path.indexOf("Department_Edit")>-1){
            $scope.getDepartmentById($state.params.id);
        } else if ($location.$$path.indexOf("Departments")>-1){
            $scope.getAllDepartments();
        }
    };
    
    init();

}]);