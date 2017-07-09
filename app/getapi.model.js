;(function () {

    "use strict";

    angular.module ("app")
        .factory ('apiGet',apiGet);

    apiGet.$inject =['$resource'];

    function apiGet($resource) {

        let api = {
            apiId : $resource('https://api.foursquare.com/v2/venues/explore?v=20131016&ll=48.414067%2C35.126678&section=food&novelty=new&client_id=AKQNZODERYZOMZKGMRGKOQLYGDXQCQPKTY3LS5QCPDEEJ3VK&client_secret=RO1TAM5TEW2GKM54LLC2VSYQEM5JOJOILVKQXMFNZ2A1V4YT'),
            apiPhoto : $resource('https://api.foursquare.com/v2/venues/5478a469498eb0f50cd9b052/photos?v=20131016&client_id=AKQNZODERYZOMZKGMRGKOQLYGDXQCQPKTY3LS5QCPDEEJ3VK&client_secret=RO1TAM5TEW2GKM54LLC2VSYQEM5JOJOILVKQXMFNZ2A1V4YT',{id: '@id'})
        }

    return api;

    };

})();


