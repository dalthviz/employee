// Modulo de employees
(function (ng) {
    var module = ng.module("employeeModule", ['ui.router']);

    // Ruta utilizada para realizar las peticiones al recurso.
    module.constant("employeeContext", "http://localhost:8080/employee-web/api/employees");

})(window.angular);
