import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { getAuth } from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Passwords don't match");
            return;
        }
        try {
            setIsSigningUp(true);
            const auth = getAuth(app);

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            // Redirect to login page after successful signup
            window.location.href = '/login'; // Replace '/login' with your login page route
        } catch (error) {
            setErrorMessage(error.message);
            setIsSigningUp(false);
        }
    };

    return (
        <div>
            <main className="w-full h-screen flex justify-center items-center">
                <form onSubmit={handleSignUp} className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
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
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block mb-1 text-gray-600">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border rounded py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-600"
                        />
                    </div>
                    {errorMessage && <span className="text-red-600 font-bold">{errorMessage}</span>}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            disabled={isSigningUp}
                            className="bg-blue text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            {isSigningUp ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default SignUp;
