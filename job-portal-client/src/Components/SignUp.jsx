import React from 'react'

const SignUp = ({emailSignUp, handleLogin}) => {
  return (
    <div className="h-screen flex items-center justify-center flex-col w-full max-w-screen-lg mx-auto">

  <form
    onSubmit={emailSignUp}
    className="bg-white p-8 rounded shadow-md w-80"
  >
    <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
    <div className="mb-4">
      <label htmlFor="firstName" className="block mb-1 text-gray-600">
        First Name
      </label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Enter your first name"
        className="w-full border rounded py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-600"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="lastName" className="block mb-1 text-gray-600">
        Last Name
      </label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Enter your last name"
        className="w-full border rounded py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-600"
      />
    </div>
    <div className="mb-4">
      <label className="block mb-1 text-gray-600">Gender</label>
      <div className="flex items-center">
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="gender"
            value="male"
            className="form-radio text-indigo-600"
          />
          <span className="ml-2 text-gray-700">Male</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="gender"
            value="female"
            className="form-radio text-indigo-600"
          />
          <span className="ml-2 text-gray-700">Female</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="gender"
            value="other"
            className="form-radio text-indigo-600"
          />
          <span className="ml-2 text-gray-700">Other</span>
        </label>
      </div>
    </div>
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
        Create Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
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
        className="w-full border rounded py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-600"
      />
    </div>
    <div className="flex justify-center">
    <button
      type="submit"
      className="bg-blue text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      Sign Up
    </button></div>
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

  )
}

export default SignUp