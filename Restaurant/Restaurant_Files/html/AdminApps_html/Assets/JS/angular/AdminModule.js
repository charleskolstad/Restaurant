angular.module("Admin", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider.when("/allUsers", {
        templateUrl: "allusers.html"
    }).when("/userProfile", {
        templateUrl: "profile.html"
    }).when("/allModels", {
        templateUrl: "model.html"
    }).when("/allGallery", {
        templateUrl: "restaurantgal.html"
    }).otherwise({

    });
}).constant("dataUrl", "http://localhost:52055/");