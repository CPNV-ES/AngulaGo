'use strict';

function MenuController($scope, $http) {
    // functions
    $scope.selectLanguage = function (language = $scope.language) {
        $scope.$emit('loadLanguage', language);
    };
    $scope.displayLanguage = function (language) {
        return language.id.toUpperCase() + "-" + language.name;
    };

    // init
    this.$onInit = () => {
        // get the default languages from parent
        // we have to wait until the bindings are done
        $scope.language = this.defaultLanguage;
        $http.get('data/languages.json')
            .then(function (response) {
                $scope.languages = response.data;
            });
    };
}

angular.module('angulago').component('menu', {
    templateUrl: 'components/menu/menu.html',
    controller: MenuController,
    bindings: {
        textContent: '<',
        defaultLanguage: '<',
    }
});