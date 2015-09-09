/**
 *
 * @authors Administrator (you@example.org)
 * @date    2015/7/31 16:49
 * @version $ Controllers 
 */

/* Controllers */

(function () {

    'use strict';

    var demoControllers = angular.module('demoControllers', []);

    demoControllers.controller('phoneListController', ['$scope', 'Phone', function($scope, Phone) {
        $scope.phones = Phone.query();
        console.log($scope.phones);
        $scope.orderProp = 'age';
    }]);

    demoControllers.controller('phoneDetailController', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);


    demoControllers.controller('getAllCompanyController', ['$scope', 'Company', 'IncomeBalance', function($scope, Company, IncomeBalance) {
        //console.log(Company.query());
        Company.get(function(company) {
            $scope.companies = company.data;
        });
        IncomeBalance.getIncomeBalance(function(incomeBalance) {
            $scope.incomme = incomeBalance.data[0].income_balance;
        });
        $scope.orderProp = 'company_id';
    }]);


})();
