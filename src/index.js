
import { 
    hideLoginError, 
    // showLoginState, 
    showLoginForm, 
    showApp, 
    showLoginError, 
    btnSignup,
    btnLogout,
    detailedList,
    renderVisitorCard,
    draggables
 
  } from './script.js'
  
import { initializeApp } from '@firebase/app';
import {
    getFirestore,collection,onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc, 

} from 'firebase/firestore'
import {
    getAuth,
   signOut,
    signInWithEmailAndPassword, 
    onAuthStateChanged,

  } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA5Q0URpXWCwGZDGg8KfHRaVR9RdkWCbDY",
    authDomain: "project-catch-43bb7.firebaseapp.com",
    projectId: "project-catch-43bb7",
    storageBucket: "project-catch-43bb7.appspot.com",
    messagingSenderId: "907446286896",
    appId: "1:907446286896:web:d6364ca377e68397f68bf5",
    measurementId: "G-RQR0JE1404"
  };

initializeApp(firebaseConfig)
//init services 
const db = getFirestore()
const auth = getAuth()


//collection ref
const colRef = collection(db, 'visitors')



const btnLogin = document.querySelector('.login-form'); 
console.log("hi");

btnLogin.addEventListener('submit', async (e) => { 
    e.preventDefault();
     
    const email = document.querySelector('#email').value; 
    const password = document.querySelector('#password').value; 

    try {
        const cred = await signInWithEmailAndPassword(auth, email, password); 
        console.log('User logged in:', cred.user);
    } catch (error) {
        console.error('Error:', error);
    }
});





const logoutButton =document.querySelector('#btnLogout')
logoutButton.addEventListener('click', () => {
    signOut(auth)
        .then(() =>{
            console.log('the user signed out')
        })
        .catch((error) =>{
            console.log(error.message)
        })
})
console.log('happy happy')

const monitorAuthState = () => {
    onAuthStateChanged(auth, user => {
      if (user) {
      
        showApp();
        // showLoginState(user);
        hideLoginError();
        draggables()

      }
      else {
        showLoginForm();
       
        lblAuthState.innerHTML = `You're not logged in.`;
        console.log('bad bad')
       
      }
    });
  };
  
monitorAuthState();
console.log('heeey')


document.addEventListener('DOMContentLoaded', function() {
  // Init app
});

onSnapshot(colRef, (snapshot) => {
    visitorList.innerHTML = ''; // Clear the previous data
  
    snapshot.docs.forEach((doc) => {
      const visitor = { ...doc.data(), id: doc.id };
      const visitorCard = renderVisitorCard(visitor);
      visitorList.appendChild(visitorCard);
    });
  });

