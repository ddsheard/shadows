var Rebase = require ('re-base');
var config = {
  apiKey: "AIzaSyDTYmY2t9FBGyjvPeeMiA48YECI9pxahIE",
   authDomain: "shadows-db.firebaseapp.com",
   databaseURL: "https://shadows-db.firebaseio.com",
   projectId: "shadows-db",
   storageBucket: "shadows-db.appspot.com",
   messagingSenderId: "653479773501"

};
var base = Rebase.createClass(config);
export default base;
