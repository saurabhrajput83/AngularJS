
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
    .state('Departments',{
        url:'/Departments',
        data:'',
        views:{
            'main': {
                templateUrl:'app/Partials/Departments.html'
                //controller: 'productController'
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