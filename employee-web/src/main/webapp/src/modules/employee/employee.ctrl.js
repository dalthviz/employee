/*
+ Controlador de la vista de usuarios en lista
*/
(function (ng) {

    var module = ng.module("employeeModule");

    //Controlador para la lista de employees
    module
        .controller('employeeListCtrl', ['$scope', 'employeeService',
            function($scope, svc) {
              $scope.hola= "hola";
              var self = this;
              $scope.employees = [];

              
              this.fetchEmployees = function(){
              
                      return svc.fetchEmployees().then(function(resp){
                                                  $scope.employees = resp.data;
                                                  return resp;
                                                }).catch(function(error){
                                                  console.error(error);
                                                  return error;
                                                });
                                              };

              this.deleteEmployee = function(employee){
                var index = $scope.employees.indexOf(employee);
                  //if(index!=-1){
                   // $scope.employees.splice(index, 1);
                    //}
                    return svc.deleteEmployee(employee.id).then(function(resp){
                                                  self.fetchEmployees();
                                                return resp;
                                              });
                                            };

                self.fetchEmployees();
              }

        ]);

    // Controlador para editar/crear un employee
    module
        .controller('employeeEditCtrl', ['employeeService', '$stateParams', '$scope','$state', '$window',
            function(svc, $stateParams, $scope, $state, $window){

                var self = this;
                var idEmployee = $stateParams.id;

                this.fetchEmployee = function(){
                    if (idEmployee != 'new'){
                      return  svc.fetchEmployee(idEmployee).then(function(resp){
                                                    $scope.employee = resp.data;
                                                    return resp;
                                                  }).catch(function(error){
                                                    console.log(error);
                                                    return error;
                                                  });
                                       }
                   };
                                                
                if ( idEmployee == 'new') {
                    $scope.employee = { name: '',
                                        salary: 0,
                                        image: '',
                                        gender: 0
                                      };
                } else {
                    var resp = self.fetchEmployee();
                    console.log(resp);
                }



                this.saveEmployee = function() {
                    if ( idEmployee == 'new') {
                      $state.go('employees');
                        return svc.saveEmployee($scope.employee)
                                          .then(function(resp){
                                          return resp;
                                        });
                    } else {
                      console.log($scope.employee);
                      $state.go('employees');
                      return svc.updateEmployee($scope.employee, idEmployee)
                                            .then(function(resp){
                                              self.fetchEmployee();
                                              return resp;
                                            }).catch(function(error){
                                              console.log(error);
                                              return error;
                                            });
                    }

                };


            }
        ]);

        //Controlador para el detalle de un employee
        module
            .controller('employeeDetailCtrl', ['$scope', 'employeeService', '$stateParams',
                function($scope, svc, $stateParams) {

                  var self = this;
                  var idEmployee = $stateParams.id;
                  $scope.employee = {};

                  this.fetchEmployee = function(){
                        return  svc.fetchEmployee(idEmployee).then(function(resp){
                                                      $scope.employee = resp.data;
                                                      return resp;
                                                    }).catch(function(error){
                                                      console.log(error);
                                                      return error;
                                                    });
                                                  };
                  self.fetchEmployee();
                }
            ]);



})(window.angular);
