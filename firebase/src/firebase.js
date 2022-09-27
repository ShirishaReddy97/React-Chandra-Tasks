import * as firebase from "firebase";  
  
var firebaseConfig = {  
    /* 
    replace this object with yours 
    */  
    apiKey: "AIzaSyBxX153w_BGjLR_Zo5GhpZ_PXg2qPsSsB0",
    authDomain: "reactfirst-de469.firebaseapp.com",
    projectId: "reactfirst-de469",
    storageBucket: "reactfirst-de469.appspot.com",
    messagingSenderId: "65600247682",
    appId: "1:65600247682:web:0c5d7a5fa5032d7796619b",
    measurementId: "G-HJED3QQZ70"
};  
  
// Initialize Firebase  
var fireDb = firebase.initializeApp(firebaseConfig);  
  
export default fireDb.database().ref();  