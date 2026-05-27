import React from 'react'

const SignUpPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome 
      </h1> 
      <p className="text-gray-500 mt-2">
        Sign Up to your account to book your next adventure!
      </p>
      <form className="mt-8 space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />  
        <input
          type="email"
          name="email"
          placeholder="Email address"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"  
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Sign Up
        </button>
      </form> 

    </div>
  )
}

export default SignUpPage
