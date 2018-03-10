
/**
 * 
 */
appModule.config(["$routeProvider",function($routeProvider){

    $routeProvider
    .when('/Home',{
        templateUrl:'app/Partials/Home.html'
    })
    .when('/Brands',{
        templateUrl:'app/Partials/Brands.html'
    })
    .when('/Departments',{
        templateUrl:'app/Partials/Departments.html'
    })
    .when('/Products',{
        templateUrl:'app/Partials/Products.html'
    })
    .otherwise({
        redirectTo: '/Home'
    });

}]);