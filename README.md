ActivityIndicator_Titanium-JS
=============================

An activity indicator that can be used on iOS and Android for a Titanium App


## Usage

How to use the ANActivityIndicator for Titanium Apps.

The example assumes you imported the file in the root folder.

```javaScript
var ANActivityIndicator = require( 'ANActivityIndicator');
var info = new ANActivityIndicator("Loading...");
info.show();

setTimeout(function(){
 info.hide();
}, 1000);

```
