# cordovaAzureAndroid
Code source lié à l'article "Les notifications push Azure avec Cordova pour Android" sur le blog de [Netapsys](http://blog.netapsys.fr/).


### Prérquis

* [JDK 7](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html)
* [Ant](http://ant.apache.org/bindownload.cgi)
* Un  compte [Microsoft](http://https//signup.live.com/signup)
* Un compte [Google] (https://accounts.google.com/SignUp)
* Le [SDK Android](http://developer.android.com/sdk/index.html) installé sur votre poste de développement
* Le gestionnaire de packages [npm](https://nodejs.org/download/) installé
* Installer le gestionnaire de librairie Javascript [bower](http://bower.io/#install-bower)
* Installer l'exécuteur de tâches Javascript [grunt](http://gruntjs.com/getting-started)

### Installation
```sh
npm install cordova -g
npm install
```

### Exécution
**N'oubliez pas de configurer votre numéro de projet Google et votre chaîne de connexion Azure**
```sh
grunt build
cordova run android
```
