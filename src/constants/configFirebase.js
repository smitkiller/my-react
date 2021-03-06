import firebase from 'firebase';

var config ={
 	apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
};


firebase.initializeApp(config);
export const database=firebase.database();
export const ref = firebase.database().ref();
export const firebaseAuth=firebase.auth();
