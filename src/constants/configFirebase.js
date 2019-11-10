import firebase from 'firebase';

var config ={
 	apiKey: "AIzaSyCrJ3bGKtTRNmNh9bhylDf9VOasVVrf-5s",
    authDomain: "testfire-6ec48.firebaseapp.com",
    databaseURL: "https://testfire-6ec48.firebaseio.com",
    projectId: "testfire-6ec48",
    storageBucket: "testfire-6ec48.appspot.com",
    messagingSenderId: "357879572200",
    appId: "1:357879572200:web:45e48ce680f90419550b5d"
};


firebase.initializeApp(config);

export const database=firebase.database();