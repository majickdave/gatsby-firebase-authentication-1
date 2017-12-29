import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyAxTRxddD_yIH1Dx-KYFoGovGCaPzAIUGo",
    authDomain: "gatsby-dev.firebaseapp.com",
    databaseURL: "https://gatsby-dev.firebaseio.com",
    projectId: "gatsby-dev",
    storageBucket: "",
    messagingSenderId: "944739884051"
};

const devConfig = {
  apiKey: "AIzaSyAxTRxddD_yIH1Dx-KYFoGovGCaPzAIUGo",
    authDomain: "gatsby-dev.firebaseapp.com",
    databaseURL: "https://gatsby-dev.firebaseio.com",
    projectId: "gatsby-dev",
    storageBucket: "",
    messagingSenderId: "944739884051"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
