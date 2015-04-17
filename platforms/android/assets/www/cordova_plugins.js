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
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "msopentech.azure.NotificationHub": "0.0.1"
}
// BOTTOM OF METADATA
});