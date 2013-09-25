'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
factory('ArticleService', ['localStorageService',
    function(localStorageService) {
        var article = {
            data: [],
            list: function() {

                if (localStorageService.isSupported()) {
                    //localStorageService.clearAll();
                    this.data = JSON.parse(localStorageService.get('article'));
                }
                if (this.data  == null) {
                    this.data  = [];
                }
                return this.data;
            },
            add: function(_data) {
                this.data.push(_data);
                this.update();
            },
            edit: function(_idx, _data) {
                this.data[_idx] = _data;
                this.update();
            },
            del: function(_idx) {
                this.data.splice(_idx, 1);
                this.update();
            },
            update: function() {

                // 整理補上 id
                for(var i=0; i<this.data.length;i++){
                    this.data[i].id = i+1;
                }
                if (localStorageService.isSupported()) {
                    localStorageService.remove('article');
                    localStorageService.add('article', JSON.stringify(this.data));
                }


            }
        };

        return article;
    }
]);