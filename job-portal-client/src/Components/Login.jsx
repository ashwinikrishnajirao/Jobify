import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";




const Login = () => {

    const auth = getAuth();
    const emailLogin =() => {

    

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const email = userCredential.email;
    const password = userCredential.password;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("incorrect username or password");
  });
    }

    const googleProvider = new GoogleAuthProvider();
    const handleLogin = () => {
        signInWithPopup(auth, googleProvider).then((result) => {          
            const user = result.user;
            console.log(user);
          }).catch((error) => { 
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          }); 
    }
  return (
    <div>
<form onSubmit={emailLogin} className="flex flex-col items-center justify-center">
  <div className="flex flex-col w-full gap-4 md:w-1/2">
    <div className="flex rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
      />
    </div>
    <div className="flex rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
      <input
        type="password"
        name="Password"
        id="Password"
        placeholder="Enter your Password"
        className="flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
      />
    </div>
    <button type="submit" className="bg-blue py-2 px-8 text-white rounded">Login/Signup</button>
  </div>
</form>

   
    <div className='h-screen w-full flex items-center justify-center'> 
        <button className='bg-blue px-8 py-2 text-white' onClick={handleLogin}>Continue with Google</button>
    </div>
    </div>
  )
}

export default Login;