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
