import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBa63lEDnrh4IYzmfTm0Qjedgrrgxh8yII",
    authDomain: "example-test-6fc17.firebaseapp.com",
    databaseURL: "https://example-test-6fc17.firebaseio.com",
    projectId: "example-test-6fc17",
    storageBucket: "example-test-6fc17.appspot.com",
    messagingSenderId: "694726044037",
    appId: "1:694726044037:web:fc116f2b0347beae"
};
firebase.initializeApp(firebaseConfig);
export const baseDeDatos = firebase.database();