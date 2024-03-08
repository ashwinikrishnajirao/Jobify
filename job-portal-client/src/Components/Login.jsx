import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const auth = getAuth(app);
    const navigate = useNavigate(); // Use navigate hook

    useEffect(() => {
        // Check if the user was redirected from the Google sign-in redirect
        getRedirectResult(auth)
            .then((result) => {
                if (result && result.user) {
                    // User successfully signed in with Google, redirect to home page
                    navigate('/');
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }, [auth, navigate]);

  

    const handleSignInWithEmailAndPassword = async (e) => {
        e.preventDefault();
        try {
            setIsSigningIn(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/'); // Redirect to home page after successful login
        } catch (error) {
            setErrorMessage(error.message);
            setIsSigningIn(false);
        }
    };

    const handleSignInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithRedirect(auth, provider); // Redirect user to Google sign-in page
            navigate('/')
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <main className="w-full h-screen flex justify-center items-center">
                <form onSubmit={handleSignInWithEmailAndPassword} className="bg-white p-8 rounded shadow-md w-96">
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-600"
                        />
                    </div>
                    {errorMessage && <div className="text-red-500 text-sm mb-4">{errorMessage}</div>}
                    <div className="flex justify-between items-center">
                        <button type="submit" className="bg-blue text-white py-2 px-4 rounded hover:bg-blue-600" >
                            {isSigningIn ? 'Logging In...' : 'Log In'}
                        </button>
                        

                        <button type="button" onClick={handleSignInWithGoogle} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                            Continue with Google
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default Login;
