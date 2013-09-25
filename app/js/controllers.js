'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('ListCtrl', ['$scope', 'ArticleService',
        function($scope, article) {

            $scope.sort_field = 'id';
            $scope.data = article.list();

            $scope.del_data = function(_idx) {
                if (confirm('確認刪除？')) {
                    article.del(_idx);
                }

            }
            $scope.sort = function(_sort_name) {

                var num = $scope.sort_field.search('-');
                $scope.sort_field = (num==-1) ? '-' + _sort_name : $scope.sort_field.replace('-','');
            }
        }
    ])
    .controller('EditCtrl', ['$scope', 'ArticleService', '$routeParams', '$location',
        function($scope, article, $routeParams, $location) {

            $scope.is_new = true;

            if ($routeParams.id == '') {
                // add new data
            } else {
                // edit data
                for (var i = 0; i < article.data.length; i++) {
                    if (i == $routeParams.id) {
                        $scope.title = article.data[i].title;
                        $scope.content = article.data[i].content;
                        $scope.idx = i;
                        $scope.is_new = false;
                        break;
                    }
                };
            }

            $scope.edit_article = function(_idx) {
                var nowTime = (new Date()).getTime();
                var edit_data = {
                    title: $scope.title,
                    content: $scope.content,
                    c_datetime: nowTime
                };
                article.edit(_idx, edit_data);
                $location.path('/list');
            }

            $scope.add_article = function() {
                var nowTime = new Date();
                var new_data = {
                    title: $scope.title,
                    content: $scope.content,
                    c_datetime: nowTime
                };
                article.add(new_data);
                $location.path('/list');
            };
        }


    ]);