// @ts-ignore
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


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
 firebase.initializeApp(firebaseConfig);

 const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore(); 

 export {projectStorage , projectFirestore};