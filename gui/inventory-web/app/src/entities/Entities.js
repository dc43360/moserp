import EntitiesController from 'entities/EntitiesController'
import EntitiesRepository    from 'entities/EntitiesRepository'

import { ExternalLogger } from 'utils/LogDecorator';

let $log = new ExternalLogger();
$log = $log.getInstance("BOOTSTRAP");
$log.debug("Configuring 'entities' module");

// Define the Angular 'entities' module

let moduleName = angular
    .module("entities", [])
    .service("EntitiesRepository", EntitiesRepository)
    .controller("EntitiesController", EntitiesController)
    .config(function ($stateProvider, $urlRouterProvider) {
        console.log("init $urlRouterProvider inside entities");
        $urlRouterProvider.otherwise("/login");
        $stateProvider.state('home.users', {
            url: "entities/users",
            templateUrl: "src/entities/view/browseEntities.html",
            controller: EntitiesController
        })
    })
    .name;

export default moduleName;