;(function () {

    "use strict";

    angular.module ("app")
        .factory ('apiGet',apiGet);

    apiGet.$inject =['$resource'];

    function apiGet($resource) {

        let api = {
            apiId : $resource('https://api.foursquare.com/v2/venues/explore?venuePhotos=1&v=20131016&ll=48.414067%2C35.126678&section=food&novelty=new&client_id=DCSSER23PTEWEWDETAWAYC2EMULS4VVOW1QFWFON2EDURAQR&client_secret=2QGX15UNLUGMFLEGYK5TAVT04XOBDE0DS10MJGID4ALV5C5B'),
            apiPhoto : $resource('https://api.foursquare.com/v2/venues/:id/photos?v=20131016&client_id=DCSSER23PTEWEWDETAWAYC2EMULS4VVOW1QFWFON2EDURAQR&client_secret=2QGX15UNLUGMFLEGYK5TAVT04XOBDE0DS10MJGID4ALV5C5B',{id: '@id'})
        }

    return api;

    };

})();


