var pokemonApp = angular.module('PokemonApp', ['ngRoute', 'ngWebSocket']);

angular.
module('PokemonApp').
config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.headers.common = {
        "application-id": "238CFA67-DD9E-D55A-FF50-723F8B990100",
        "secret-key": "1D960D5D-3B9A-0C37-FF3D-E1BE0248B300"
    };
}]).
config(['$routeProvider',
    function config($routeProvider) {

        $routeProvider.
        when('/pokemons', {
            templateUrl: 'src/PokemonList/PokemonList.html',
            controller: 'PokemonListCtrl'
        }).
        when('/pokemons/:pokemonId', {
            templateUrl: 'src/PokemonDetail/PokemonDetail.html',
            controller: 'PokemonDetailCtrl'
        }).
        when('/create', {
            templateUrl: 'src/CreatePokemon/CreatePokemon.html',
            controller: 'CreatePokemonCtrl'
        }).
        when('/realtime/:userName', {
            templateUrl: 'src/PokemonRealtime/PokemonRealtime.html',
            controller: 'PokemonRealtimeCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]).

factory('MySocket', function($websocket) {
    var ws = $websocket('ws://echo.websocket.org/');
    var collection = [];

    ws.onMessage(function(event) {
        console.log('message: ', event);
        var res;
        try {
            res = JSON.parse(event.data);
        } catch (e) {
            res = {
                'username': 'anonymous',
                'message': event.data
            };
        }

        collection.push({
            username: res.username,
            content: res.message,
            timeStamp: event.timeStamp
        });
    });

    ws.onError(function(event) {
        console.log('connection Error', event);
    });

    ws.onClose(function(event) {
        console.log('connection closed', event);
    });

    ws.onOpen(function() {
        console.log('connection open');
        ws.send('Hello World');
        ws.send('again');
        ws.send('and again');
    });
    // setTimeout(function() {
    //   ws.close();
    // }, 500)

    return {
        collection: collection,
        status: function() {
            return ws.readyState;
        },
        send: function(message) {
            if (angular.isString(message)) {
                ws.send(message);
            } else if (angular.isObject(message)) {
                ws.send(JSON.stringify(message));
            }
        }

    };
});
