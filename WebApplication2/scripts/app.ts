import MainController from "./MainController";


var app = angular.module("myApp", []);

angular.element(document).ready(()=> {
    return angular.bootstrap(document.body, ["myApp"], {
        strictDi: true
    });
});

app.controller('MainController', MainController);