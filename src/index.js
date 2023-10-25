
// import { 
//     hideLoginError, 
//     showLoginState, 
//     showLoginForm, 
//     showApp, 
//     showLoginError, 
//     btnSignup,
//     btnLogout
//   } from './script.js'
  
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

  
  

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

//queries
// const q = query(colRef, orderBy('surName','asc'));
// const btnLogin = document.querySelector('#btnLogin')
// console.log("hi")
// btnLogin.addEventListener('submit',(e) => {
//     e.preventDefault()
//     const email = btnLogin.email.value
//     const password = btnLogin.password.value
//     console.log("hi")
//     signInWithEmailAndPassword(auth,email,password)
//             .then((cred) =>{
//                 console.log('here we are',cred.user)
//             })
//             .catch(()=> {
//                 console.log('erro found')
//             })
// })
const btnLogin = document.querySelector('.login-form'); // Select the form element, not the button
console.log("hi");

btnLogin.addEventListener('submit', async (e) => { // Use 'submit' event on the form
    e.preventDefault();

    const email = document.querySelector('#email').value; // Access email field using its ID
    const password = document.querySelector('#password').value; // Access password field using its ID

    try {
        const cred = await signInWithEmailAndPassword(auth, email, password); // Use 'await' for Firebase method
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
const monitorAuthState = () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user);
        // showApp();
        // showLoginState(user);
  
        // hideLoginError();
    
      }
      else {
        // showLoginForm();
        // lblAuthState.innerHTML = `You're not logged in.`;
        console.log('bad bad')
      }
    });
  };
  
monitorAuthState(); 

onSnapshot(colRef, (snapshot) => {
  let visitors = []
  snapshot.docs.forEach(doc => {
    visitors.push({ ...doc.data(), id: doc.id })
  })
//   console.log(visitors)
})