app.controller('appointmentController', function($scope, userFactory, appointmentFactory){
    
    userFactory.checkStatus(function(data){
        $scope.current_user = data
        
        })
    $scope.Add = function(){
       
        if(!$scope.newApp||!$scope.newApp.date||!$scope.newApp.time||!$scope.newApp.complaint){
            alert("All fields are mandatory")
        
        }

        else{

            if($scope.newApp.complaint.length<10){
                alert("Complaint must be at least 10 characters!")
            }
        $scope.newApp.user = $scope.current_user
        var dd = new Date($scope.newApp.date).getDate();
        var mm = new Date($scope.newApp.date).getMonth()+1;
        var yy = new Date($scope.newApp.date).getFullYear();
        var hh = new Date($scope.newApp.time).getHours();
        var ms = new Date($scope.newApp.time).getMinutes();
        var test =  yy + ',' + mm + ',' + dd + ' ' + hh + ':' + ms;
        var finaldate = new Date(test);
        
        
        $scope.newApp.datetime = finaldate;
        var today = new Date();
        if (Date.parse(finaldate)<Date.parse(today)){
            alert("Appointment cannont be in the past! You are a dingus!")
        }
        $scope.endDay = new Date($scope.newApp.date);
        $scope.endDay.setHours(17,0,0);
        $scope.startDay = new Date($scope.newApp.date);
        $scope.startDay.setHours(8,0,0);

        if(Date.parse(finaldate) < Date.parse($scope.startDay) || Date.parse(finaldate) > Date.parse($scope.finaldate)){
            alert("Office hours are 8:00 am to 5: 00 pm")

        }
        

        else{
            var status = true
            for(var x = 0; x<$scope.newApp.user.appointments.length;x++){
                if(Date.parse($scope.newApp.user.appointments[x].date) == Date.parse($scope.newApp.date)){
                    status = false;
                    
                }
            }
            if(status){
                appointmentFactory.add($scope.newApp)   
            } 
            else{
                alert("Cannot have 2 appointments on one day")
            }
        }
        }
    }
    appointmentFactory.getAll(function(data){
        $scope.current_date = new Date();

        $scope.all_appointments = data
    })
    $scope.cancel = function(appointment){
       
        var myDate = new Date(appointment.datetime)
        var today = new Date();
        var timeDiff = Math.abs(myDate.getTime() - today.getTime())
        var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
        if(diffDays<1){
            alert("Must provide at least 24 hours notice to cancel an appointment")
        }
        else{
            appointmentFactory.delete(appointment)
        }
    }

})