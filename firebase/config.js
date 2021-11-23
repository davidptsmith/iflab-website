import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyCrDWXyQz8vSGoQtehjVNhPAqmdLZU2bWs",
   authDomain: "iflab-website-test1.firebaseapp.com",
   projectId: "iflab-website-test1",
   storageBucket: "iflab-website-test1.appspot.com",
   messagingSenderId: "515678089706",
   appId: "1:515678089706:web:65285a95c6d3d748a54293"
 };
 // Initialize Firebase
 firebase.default.initializeApp(firebaseConfig);

 const projectStorage = firebase.default.storage();
 const projectFirestore = firebase.default.firestore(); 


 export {projectStorage , projectFirestore};