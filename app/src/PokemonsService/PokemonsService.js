angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {

            return {

                getPokemons: function() {
                    return $http.get('https://api.backendless.com/v1/data/pokemon/?limit=10');
                },

                getPokemon: function(pokemonId) {
                    return $http.get('https://api.backendless.com/v1/data/pokemon' + pokemonId);
                },

                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        headers: {
                            "application-id": "238CFA67-DD9E-D55A-FF50-723F8B990100",
                            "secret-key": "1D960D5D-3B9A-0C37-FF3D-E1BE0248B300"

                        },
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                        headers: {
                            "application-id": "238CFA67-DD9E-D55A-FF50-723F8B990100",
                            "secret-key": "1D960D5D-3B9A-0C37-FF3D-E1BE0248B300"

                        }
                    });
                },

                updatePokemon: function(pokemonId) {
                    return $http({
                        method: 'PUT',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                        headers: {
                            "application-id": "238CFA67-DD9E-D55A-FF50-723F8B990100",
                            "secret-key": "1D960D5D-3B9A-0C37-FF3D-E1BE0248B300"

                        },
                        data: pokemonData
                    });
                }

            }

        }

    );
