'use strict';

/**
 * @ngdoc overview
 * @name angularCordovaApp
 * @description
 * # angularCordovaApp
 *
 * Main module of the application.
 */
angular
  .module('angularCordovaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCordova'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
  }]);


'use strict';

angular.module('angularCordovaApp')
  .controller('MainCtrl', function($scope, cordova, $cordovaDevice) {  

  	var platform = null;

	var initAzure = function()
	{
		var connectionString = "Endpoint=sb://cordovaazure-ns.servicebus.windows.net/;SharedAccessKeyName=DefaultListenSharedAccessSignature;SharedAccessKey=ksQwMAUxCHHh2+bo2PQlq9leeGoU5HQ1tK8teDyibek=",
		notificationHubPath = "cordovaazure"; //ici le hub = cordovaazure

		var GCM_NUM_PRJ = "147654994312";//le numéro de projet est affiché dans la rubrique "Présentation" de votre projet

		var options = null;
		if(platform==='android')
		{
			options = GCM_NUM_PRJ;
		}

		var hub = new WindowsAzure.Messaging.NotificationHub(notificationHubPath, connectionString, options);

		hub.registerApplicationAsync().then(
			function (result) 
			{
		    	$scope.registrationOk = result.registrationId;
		    	$scope.$apply();
			},
			function(error)
			{
				$scope.registrationKo = error;
		    	$scope.$apply();
			}
		);	


		hub.onPushNotificationReceived = function (notification) {
			//évènement à la réception d'une notification
		    $scope.notificationText = notification.message;
		    	$scope.$apply();
		};;
	} 	
	//$scope.registrationOk = 'ok';
	cordova.ready.then(function () {
		platform = $cordovaDevice.getPlatform().toLowerCase();		
		initAzure();
	});
  
});

'use strict';

/**
 * @ngdoc service
 * @name angularCordovaApp.cordova
 * @description
 * # cordova
 * Factory in the angularCordovaApp.
 */
angular.module('angularCordovaApp')
  .factory('cordova', function ($q, $window) {
    var d = $q.defer(),
    resolved = false;

    var self = this;
    this.ready = d.promise;

    document.addEventListener('deviceready', function () {
        resolved = true;
        d.resolve($window.cordova);
    });

    // Check to make sure we didn't miss the
    // event (just in case)
    setTimeout(function () {
        if (!resolved) {
            if ($window.cordova) d.resolve($window.cordova);
        }
    }, 3000);
    
    // Public API here
    return this;
  });
