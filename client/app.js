var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'partials/logreg.html'
    })
    .when('/dash',{
        templateUrl: 'partials/dash.html'
    })
    .when('/addPage',{
        templateUrl: 'partials/addPage.html'
    })
    .otherwise({
        templateUrl: 'partials/logreg.html'
    })
})