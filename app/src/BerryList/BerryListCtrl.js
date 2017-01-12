'use strict';

pokemonApp.controller('BerryListCtrl', function($scope, BerriesService) {
    $scope.berriesLoaded = false;

    PokemonsService.getBerries().then(function(response) {
        $scope.berries = response.data.results;
        $scope.berriesLoaded = false;
    });

});
