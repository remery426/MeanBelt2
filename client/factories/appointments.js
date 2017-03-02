app.factory('appointmentFactory', function($http, $location, $route){
    var factory = {};
    factory.add = function(appointment){
        $http.post('/add',appointment ).then(function(){
            $location.url("/dash")
        })
    }
    factory.getAll = function(cb){
        $http.get("/getAll").then(function(output){
            cb(output.data)
        })
    }
    factory.delete = function(delApp){
        $http.post('/delete', delApp).then(function(){
            $route.reload();
        })
    }

    return factory 

})