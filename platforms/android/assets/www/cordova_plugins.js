cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/msopentech.azure.NotificationHub/www/Promise.js",
        "id": "msopentech.azure.NotificationHub.Promise"
    },
    {
        "file": "plugins/msopentech.azure.NotificationHub/www/NotificationHub.js",
        "id": "msopentech.azure.NotificationHub.NotificationHub",
        "clobbers": [
            "WindowsAzure.Messaging.NotificationHub"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.PushPlugin/www/PushNotification.js",
        "id": "com.phonegap.plugins.PushPlugin.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "msopentech.azure.NotificationHub": "0.0.1",
    "com.phonegap.plugins.PushPlugin": "2.4.0"
}
// BOTTOM OF METADATA
});