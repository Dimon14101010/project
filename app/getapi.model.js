;(function () {

    "use strict";

    angular.module ("app")
        .factory ('apiGet',apiGet);

    apiGet.$inject =['$resource'];

    function apiGet($resource) {

        let api = {
            apiId : $resource('https://api.foursquare.com/v2/venues/explore?venuePhotos=1&v=20131016&ll=48.414067%2C35.126678&section=food&novelty=new&client_id=MCYZZWIG0EVIPENVBVH4TOW3302YFRE5SUCGP0ECVTXG3MBE&client_secret=VBDZI0GECFF24FKACQW12L15JR5VEKUK0RZZTV51QJ0XYY3G'),
            apiPhoto : $resource('https://api.foursquare.com/v2/venues/:id/photos?v=20131016&client_id=MCYZZWIG0EVIPENVBVH4TOW3302YFRE5SUCGP0ECVTXG3MBE&client_secret=VBDZI0GECFF24FKACQW12L15JR5VEKUK0RZZTV51QJ0XYY3G',{id: '@id'})
        }

    return api;

    };

})();


