import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyB0grnoWxReJZHLlTSsS-Bq7kqMaVng-fY",
    authDomain: "react-review-92693.firebaseapp.com",
    databaseURL: "https://react-review-92693.firebaseio.com",
    projectId: "react-review-92693",
    storageBucket: "react-review-92693.appspot.com",
    messagingSenderId: "419212427881"

};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;