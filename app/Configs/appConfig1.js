
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
                templateUrl:'app/Partials/Home.html'
                //controller: 'homeController'
            }
        }
    })
    .state('Brands',{
        url:'/Brands',
        data:'',
        views:{
            'main': {
                templateUrl:'app/Partials/Brands.html'
                //controller: 'productController'
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
    .state('Products',{
        url:'/Products',
        data:'',
        views:{
            'main': {
                templateUrl:'app/Partials/Products.html'
                //controller: 'productController'
            }
        }
    });

}]);