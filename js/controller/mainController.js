/**
 * Created by MacBookPro on 23/05/2016.
 */

(function (angular) {
    'use strict';

    function mainController($scope) {

    };

    angular
        .module('mainModule', [])
        .controller('mainController', mainController)
    ;

    mainController.$inject = ['$scope'];

}(window.angular));

