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
  });

'use strict';

angular.module('angularCordovaApp')
  .controller('MainCtrl', function($scope, cordova, $cordovaDevice) {  

  	var platform = null;

	var initAzure = function()
	{
		var connectionString = "[votre chaîne de connexion azure 'listen']",
		notificationHubPath = "[le nom de votre hub]"; //ici le hub = cordovaazure

		var GCM_NUM_PRJ = "[votre numéro de projet Google]";//le numéro de projet est affiché dans la rubrique "Présentation" de votre projet

		var options = null;
		if(platform==='android')
		{
			options = GCM_NUM_PRJ;
		}

		var hub = new WindowsAzure.Messaging.NotificationHub(notificationHubPath, connectionString);

		hub.registerApplicationAsync().then(
			function (result) 
			{
		    	$scope.registrationOk = result.registrationId;
			},
			function(error)
			{
				$scope.registrationKo = error;
			}
		);	

		hub.onPushNotificationReceived = function (msg) {
		    $scope.notificationText = msg;
		};;
	} 	
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
