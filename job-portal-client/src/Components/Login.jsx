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
<form onSubmit={emailLogin}>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
          <div className="flex md:round-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 
          focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2  w-full">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 
              placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
              />
         
          </div>
          <div className="flex md:round-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300 
          focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3  w-full">
            <input
              type="password"
              name="Password"
              id="Password"
              placeholder="Enter your Password"
              className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 
              placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
              />
          </div>

          <button type="submit" className="bg-blue py-2 px-8 text-white ">Login/Signup</button>
        </div>
      </form>
    
    <div className='h-screen w-full flex items-center justify-center'>
        <button className='bg-blue px-8 py-2 text-white' onClick={handleLogin}>Login</button>
    </div>
    </div>
  )
}

export default Login;