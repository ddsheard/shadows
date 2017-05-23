var Rebase = require ('re-base');
var firebase = require('firebase');
var app = firebase.initializeApp({
  apiKey: "AIzaSyDTYmY2t9FBGyjvPeeMiA48YECI9pxahIE",
  authDomain: "shadows-db.firebaseapp.com",
  databaseURL: "https://shadows-db.firebaseio.com",
  storageBucket: "shadows-db.appspot.com",
  messagingSenderId: "653479773501"

});
var base = Rebase.createClass(app.database());
export default base;
