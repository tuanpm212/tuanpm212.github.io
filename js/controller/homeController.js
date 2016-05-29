/**
 * Created by MacBookPro on 23/05/2016.
 */

(function (angular) {
    'use strict';

    function homeController($scope) {
        // do some thing
    };

    angular
        .module('appShop', ['mainModule'])
        .controller('homeController', homeController)
    ;

    homeController.$inject = ['$scope'];
})(window.angular);
