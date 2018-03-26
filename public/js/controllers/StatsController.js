angular.module('BlocksApp').controller('StatsController', function($stateParams, $rootScope, $scope) {

    $rootScope.isHome = false;


    const CHART_TYPES = {
        "egem_hashrate": {
            "title": "EGEM Hashrate Growth"
        },
        "blockdistribution": {
            "title": "Miner block distribution of the last 1000 blocks."
        },
        "The_bomb_chart": {
            "title": "The bomb chart"
        }
    }

    $rootScope.$state.current.data["pageSubTitle"] = CHART_TYPES[$stateParams.chart].title;

})
