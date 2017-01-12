'use strict';

pokemonApp.controller('updatePokemonCtrl', function($scope, PokemonsService) {

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.pokemon = response.data;
    });

    $scope.updatePokemon = function(myPokemon) {

        $scope.updateSuccess = false;

        PokemonsService.updatePokemon($routeParams['pokemonId'], $scope.pokemon).then(function(response) {

            $scope.pokemon = {};
            $scope.updateSuccess = true;

        });

    }

});
