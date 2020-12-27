import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDGGYN45D50ta7kO8d-l2YnNlP3QCbBSGs",
    authDomain: "linkedin-clone-f6e96.firebaseapp.com",
    projectId: "linkedin-clone-f6e96",
    storageBucket: "linkedin-clone-f6e96.appspot.com",
    messagingSenderId: "33418732563",
    appId: "1:33418732563:web:b42ced930c16673ddd4be6"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.fireStore();
  const auth=firebase.auth();

  export {db,auth};
  
