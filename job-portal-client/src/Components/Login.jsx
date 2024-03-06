import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const emailLogin = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const email = userCredential.email;
        const password = userCredential.password;
        console.log(email);
        console.log(password)
        alert("You are Logged In !");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("incorrect username or password");
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="h-screen flex items-center justify-center flex-col">
    <form
      onSubmit={emailLogin}
      className="bg-white p-8 rounded shadow-md w-80"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 text-gray-600">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full border rounded py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 text-gray-600">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="w-full border rounded py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-600"
        />
      </div>
      <div className="flex justify-center">
      <button
        type="submit"
        className="bg-blue text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Login
      </button>
      </div>
    </form>
  
    <div className="mt-4">
      <div className="flex items-center justify-center mb-2">
        <div className="border-b border-gray-400 w-1/4"></div>
        <div className="mx-2 text-gray-500">or</div>
        <div className="border-b border-gray-400 w-1/4"></div>
      </div>
      <button
        className="bg-blue px-8 py-2 text-white rounded hover:bg-blue-600"
        onClick={handleLogin}
      >
        Continue with Google
      </button>
    </div>
  </div>
  
  );
};

export default Login;
