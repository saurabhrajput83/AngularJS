
/**
 * baseService
 */
appModule.service('baseService', ['$q', '$http', function ($q, $http) {

    this.sendRequest = function (req) {

        var deferred = $q.defer();

        var baseUrl = 'http://services.odata.org/V3/(S(nl1y5a20t4nvntr0v4llwdxy))/OData/OData.svc/';
        var url = baseUrl + '/' + req.url;

        var request = {
            data: req.data,
            headers: req.headers,
            method: req.method || 'GET',
            params: req.params,
            url: url
        };

        $http(request).then(
        function (res) {
            deferred.resolve(res.data);
        },
        function (res) {
            deferred.reject(res);
        },
        function (res) {
            deferred.notify(res);
        });

        return deferred.promise;

    };

}]);
