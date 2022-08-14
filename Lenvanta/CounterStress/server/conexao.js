import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAj_oiX-kPjxcx8yC804d_tDDHoxicx8z4",
    authDomain: "counter-stress-8fbe5.firebaseapp.com",
    databaseURL: "https://counter-stress-8fbe5-default-rtdb.firebaseio.com",
    projectId: "counter-stress-8fbe5",
    storageBucket: "counter-stress-8fbe5.appspot.com",
    messagingSenderId: "740084003817",
    appId: "1:740084003817:web:4cb451ee384d5ebeba5178"
  };
  
  initializeApp(firebaseConfig);
  
  export const db = getDatabase();

  
  
  export default !firebase.apps.length ? 
  firebase.initializeApp(firebaseConfig) : firebase.app();