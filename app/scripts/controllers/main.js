'use strict';

angular.module('angularCordovaApp')
  .controller('MainCtrl', function($scope, cordova, $cordovaDevice) {  

  	var platform = null;

	var initAzure = function()
	{
		var connectionString = "[votre chaîne de connexion azure 'listen']";
		notificationHubPath = "[le nom de votre hub]"; //ici le hub = cordovaazure

		var GCM_NUM_PRJ = "[votre numéro de projet Google]";//le numéro de projet est affiché dans la rubrique "Présentation" de votre projet

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
