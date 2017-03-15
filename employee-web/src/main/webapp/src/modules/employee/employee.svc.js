// Conexión con los servicios del backend (employee.web/api/employees).
(function (ng) {
    var mod = ng.module("employeeModule");

    mod.service("employeeService", ["$http", "employeeContext", function ($http, context) {

        //Context: context = api/employees

        //FUNCIONES PARA OBTENER LISTAS (GET)

        /**
         * Obtener la lista de employees.
         * Hace una petición GET con $http a /employees
         * para obtener la lista de objetos de la entidad employee
         * @returns {promise} promise para leer la respuesta del servidor.
         * Se recibe un array de objetos de employee.
         */
        this.fetchEmployees = function () {
            return $http.get(context);
        };

        /**
         * Obtener un employee por ID.
         * Hace una petición GET con $http a /employees/:id
         * para obtener un objeto de la entidad employee
         * @param {string} idEmployee id del employee a actalizar.
         * @returns {promise} promise para leer la respuesta del servidor.
         * Se recibe un array de objetos de employee.
         */
        this.fetchEmployee = function (idEmployee) {
            return $http.get(context + "/" + idEmployee);
        };

        //FUNCIONES PARA AGREGAR/ACTUALIZAR (POST/PUT)

        /**
         * Guardar un registro de employee.
         * @param {object} nEmployee instancia de employee a guardar
         * @returns {promise} promise para leer la respuesta del servidor.
         */
        this.saveEmployee = function (nEmployee) {
            return $http.post(context, nEmployee);
        };

        /**
         * Actualiza un registro de employee,
         * mediante una petición a /employees/:id
         * @param {object} nEmployee instancia de employee a actualizar.
         * @param {string} idEmployee id del employee a actalizar.
         * @returns {promise} promise para leer la respuesta del servidor.
         */
        this.updateEmployee = function (nEmployee, idEmployee) {
            return $http.put(context + "/" + idEmployee, nEmployee);
        };

        //FUNCION PARA BORRAR (DELETE)

        /**
         * Hace una petición DELETE a /employee/:idemployee para eliminar un employee
         * @param {string} idEmployee identificador del employee a eliminar
         * @returns {promise} promise para leer la respuesta del servidor.
         * No se recibe cuerpo en la respuesta.
         */
        this.deleteEmployee = function (idEmployee) {
            return $http.delete(context + "/" + idEmployee );
        };

    }]);
})(window.angular);
