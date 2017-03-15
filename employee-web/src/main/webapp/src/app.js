/*
 * Proyecto Employee
 */
(function (ng) {

    // Depedencias de la aplicación
    var module = ng.module('mainApp',
        [
            // angular ui
            'ui.router',
            //Modulo para employees
            'employeeModule'
        ]);

    // angular logger configuration
    module
        .config(['$logProvider', function ($logProvider) {
            $logProvider.debugEnabled(true);
        }]);

    // rutas de la aplicación
    module
        .config(
            ['$stateProvider', '$urlRouterProvider',
                function ($stateProvider, $urlRouterProvider) {
                    // default route
                    $urlRouterProvider.otherwise('/inicio');
                    // application routes
                    // Las rutas a los templates son relativas al app.js
                    $stateProvider
                        .state('inicio', {
                            url: '/inicio',
                            templateUrl: 'src/inicio.tpl.html'
                        })
                        .state('employees', {
                          url: '/employees',
                          templateUrl: 'src/modules/employee/templates/employeeList.tpl.html',
                          controller: 'employeeListCtrl',
                          controllerAs: 'ctrl'
                        })
                        .state('employeesEdit', {
                            url: '/employees/:id',
                            templateUrl: 'src/modules/employee/templates/employeeEdit.tpl.html',
                            controller: 'employeeEditCtrl',
                            controllerAs: 'ctrl'
                        })
                        .state('employeesDetail', {
                            url: '/employees/:id/details',
                            templateUrl: 'src/modules/employee/templates/employeeDetail.tpl.html',
                            controller: 'employeeDetailCtrl',
                            controllerAs: 'ctrl'
                        });
                }]);


})(window.angular);
