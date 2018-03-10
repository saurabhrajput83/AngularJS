
/**
 * 
 */
appModule.config(["$stateProvider", "$urlRouterProvider",function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('Home');

    $stateProvider
    .state('Home',{
        url:'/Home',
        data:'',
        views:{
            'main': {
                templateUrl:'app/Partials/Home.html',
                controller: 'homeController'
            }
        }
    })
    .state('Brand_Add',{
        url:'/Brand_Add',
        data:'',
        views:{
            'main': {
                templateUrl:'app/Partials/Brand_AddEdit.html',
                controller: 'brandController'
            }
        }
    })
    .state('Brand_Edit',{
        url:'/Brand_Edit/:id',
        data:'',
        views:{
            'main': {
                templateUrl:'app/Partials/Brand_AddEdit.html',
                controller: 'brandController'
            }
        }
    })
    .state('Brands',{
        url:'/Brands',
        data:'',
        views:{
            'main': {
                templateUrl:'app/Partials/Brands.html',
                controller: 'brandController'
            }
        }
    })
    .state('Department_Add',{
        url:'/Department_Add',
        data:'',
        views:{
            'main': {
                templateUrl:'app/Partials/Department_AddEdit.html',
                controller: 'departmentController'
            }
        }
    })
    .state('Department_Edit',{
        url:'/Department_Edit/:id',
        data:'',
        views:{
            'main': {
                templateUrl:'app/Partials/Department_AddEdit.html',
                controller: 'departmentController'
            }
        }
    })
    .state('Departments',{
        url:'/Departments',
        data:'',
        views:{
            'main': {
                templateUrl:'app/Partials/Departments.html',
                controller: 'departmentController'
            }
        }
    })
    .state('Product_Add',{
        url:'/Product_Add',
        data:'',
        views:{
            'main': {
                templateUrl:'app/Partials/Product_AddEdit.html',
                controller: 'productController'
            }
        }
    })
    .state('Product_Edit',{
        url:'/Product_Edit/:id',
        data:'',
        views:{
            'main': {
                templateUrl:'app/Partials/Product_AddEdit.html',
                controller: 'productController'
            }
        }
    })
    .state('Products',{
        url:'/Products',
        data:'',
        views:{
            'main': {
                templateUrl:'app/Partials/Products.html',
                controller: 'productController'
            }
        }
    });

}]);