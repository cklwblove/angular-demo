/**
 *
 * @authors Administrator (you@example.org)
 * @date    2015/8/3 9:21
 * @version $
 * @desc Services 这是一个的维护应用程序功能逻辑部分，他是一个单间模式singleton。
 为了保持应用程序的逻辑层次分明，更趋向于将其业务逻辑放到不同的services，保持controller的逻辑只有流程控制和view交互逻辑。可以达到数据的共享！

 */

/* Services */

(function() {

    'use strict';

    var demoServices = angular.module('demoServices', ['ngResource']);

    demoServices.factory('Phone', ['$resource',
        function($resource){
            return $resource('api/:phoneId.json', {}, {
                query: {method:'GET', params: {phoneId:'phones'}, isArray: true}
            });
        }]);

    demoServices.factory('Company', ['$resource', function($resource) {
        return $resource('https://open.hs.net/iuc/v1/iuchttpservice/services/allcompany_get');
    }]);

    demoServices.factory('IncomeBalance', ['$resource', function($resource) {
        return $resource('https://sandbox.hs.net/secu/v1/stockposition_qry', {}, {
            getIncomeBalance: { method: 'post', params: {
                sendercomp_id: '91008',
                targetcomp_id: '91000'
            }, headers: {
                Authorization: 'Bearer D2EC5B147C6542A8A88890A2344887662015080408451324879949'
            }}
        });
    }]);

})();

