System.register(["./MainController"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MainController_1;
    var app;
    return {
        setters:[
            function (MainController_1_1) {
                MainController_1 = MainController_1_1;
            }],
        execute: function() {
            app = angular.module("myApp", []);
            angular.element(document).ready(function () {
                return angular.bootstrap(document.body, ["myApp"], {
                    strictDi: true
                });
            });
            app.controller('MainController', MainController_1.default);
        }
    }
});
//# sourceMappingURL=app.js.map