const app = angular.module("admin-app",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
        .when("/category",{
            templateUrl:"/admin/assets/layout/category.html",
            controller:"category-ctrl"
        })
        .when("/brand",{
            templateUrl:"/admin/assets/layout/brand.html",
            controller:"brand-ctrl"
        })
        .when("/product",{
            templateUrl:"/admin/assets/layout/product.html",
            controller:"product-ctrl"
        })
        .when("/user",{
            templateUrl:"/admin/assets/layout/user.html",
            controller:"user-ctrl"
        })
        .when("/authenticate",{
            templateUrl:"/admin/assets/layout/authenticate.html",
            controller:"authenticate-ctrl"
        })
        
        .otherwise({
            templateUrl:"/admin/assets/layout/dashboard.html",
            controller:"dashboard-ctrl"
        })
});