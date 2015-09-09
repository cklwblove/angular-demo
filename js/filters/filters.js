/**
 *
 * @authors Administrator (you@example.org)
 * @date    2015/7/31 16:00
 * @version $ Filters 过滤器
 */

/* Filters */

(function() {

    'use strict';

    var demoFilters = angular.module('demoFilters', []);

    // 将公司业务类型转换成中文说明
    demoFilters.filter('busEn', function() {
        return function(type) {
            var typeEn = '';
            switch (type) {
                case '00':
                    typeEn = '私募机构';
                    break;
                case '01':
                    typeEn = '基础设施';
                    break;
                case '02':
                    typeEn = '证券';
                    break;
                case '03':
                    typeEn = '期货';
                    break;
                case '04':
                    typeEn = '银行';
                    break;
                case '05':
                    typeEn = '基金';
                    break;
                case '06':
                    typeEn = '信托';
                    break;
                case '07':
                    typeEn = '保险';
                    break;
                case '08':
                    typeEn = '交易所';
                    break;
                case '09':
                    typeEn = '其他';
                    break;
            }
            return typeEn;
        };
    });

// 将公司状态转换成中文说明
    demoFilters.filter('comStatusEn', function() {
        return function(status) {
            var statusEn = '';
            switch (status) {
                case '0':
                    statusEn = '关闭';
                    break;

                case '1':
                    statusEn = '正常';
                    break;

                case '2':
                    statusEn = '测试';
                    break;

            }
            return statusEn;

        }
    });

    demoFilters.filter('checkmark', function() {
        return function(input) {
            return input ? '\u2713' : '\u2718';

        }
    });
})();
