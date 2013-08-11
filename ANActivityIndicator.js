/**
 * Activity Indicator View - Titanium JS
 * @author Anthony Njuguna
 */
/**
 * Open an Activity view anywhere in the app.
 * @param {String} text
 * @param {Object} params
 */
var ANActivityIndicator = function ( text ) {
  var message = text || 'Loading...'

  var _isAndroid = ( Ti.Platform.osname === 'android' );
  var _padding = 20;//( _isAndroid ) ? 20 : 20;
  var _style;

  var bgWidth = 320;
  var bgHeight = ( _isAndroid ) ? 180 : 100;
  var infoWindow;

  var textWidth = ( message.length > 13 ) ? 260 : Ti.UI.SIZE;

  this.infoWindow = Ti.UI.createWindow( {
    touchEnabled : true
  } );

  var background = Ti.UI.createView( {
    height : Ti.UI.SIZE,
    width : Ti.UI.SIZE,
    backgroundColor : '#000',
    borderRadius : 10,
    opacity : 0.8,
    touchEnabled : false,
    layout : 'vertical'
  } );

  if ( _isAndroid ) {
    _style = Ti.UI.ActivityIndicatorStyle.BIG;
  }
  else {
    _style = Ti.UI.iPhone.ActivityIndicatorStyle.BIG;
  }

  this.activityIndicator = Ti.UI.createActivityIndicator( {
    style : _style,
    top : 10,
    height : Ti.UI.SIZE,
    width : Ti.UI.SIZE
  } );

  background.add( this.activityIndicator );

  this.message = Ti.UI.createLabel( {
    text : message,
    top : 10,
    left : _padding,
    right : _padding,
    color : '#fff',
    textAlign : 'center',
    font : {
      fontFamily :  (_isAndroid) ? 'Droid Sans' : 'Helvetica Neue',
      fontSize : 18,
      fontWeight : 'bold'
    },
    wordwrap : false,
    height : 44,
    width : textWidth 
  } );
  background.add( this.message );

  this.infoWindow.add( background );
};

ANActivityIndicator.prototype.show = function ( ) {
  this.infoWindow.open( );
  this.activityIndicator.show( );
};

ANActivityIndicator.prototype.hide = function ( ) {
  this.activityIndicator.hide( );
  this.infoWindow.close( );
};

module.exports = ANActivityIndicator;
