'use client'
// auth/SignUp.tsx
import api from '@/server/api';
import Link from "next/link"; // assuming you use react-rou
import React, { useState } from 'react';
import { toast } from "react-toastify";

// auth/SignUp.tsx

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!acceptTerms) {
        alert("Please accept the terms and conditions");
        return;
      }

      console.log(formData);
      const res = await api.post("/auth/signup", formData);
      if(res.data.success) {
        toast.success(res.data.message || "Account created successfully!");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Error....", error);
      toast.error("Failed to create account. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden relative rounded-md">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center p-6">
        
        {/* Left Side - Hero Image */}
        <div className="hidden lg:flex w-1/2 h-[670px] relative shadow-2xl item-center">
           <img
            src="/aviation.png"
            alt="Dream Sky Airways"
            className="absolute inset-0 w-full h-[670px] object-cover"
          /> 
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-200-500 to-blue-300 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                ✈️
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight">Dream Sky Airways</h1>
                <p className="text-blue-300">Soar Beyond Limits</p>
              </div>
            </div>
            
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Start Your<br />Journey Today
            </h2>
            <p className="text-xl text-gray-300 max-w-md">
              Join thousands of travelers exploring the world with comfort and style.
            </p>
          </div>

          {/* Decorative badge */}
          <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 text-white flex items-center gap-2">
            <span className="text-blue-400">★</span> Trusted by 50k+ Travelers
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full lg:w-1/2 h-[680px] max-w-md">
          <div className="bg-white shadow border  shadow-gray-300  p-8 shadow-2xl">
            <div className="mb-10">
              <h2 className="text-4xl font-semibold text-gray-800 mb-2">Create Account</h2>
              <p className="text-blue-300">Join Dream Sky Airways family</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-blue-500 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-blue-500 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-gray-700 focus:border-blue-500 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-blue-600 cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer">
                  I agree to the{' '}
                  <span className="text-blue-500 hover:underline">Terms of Service</span> and{' '}
                  <span className="text-blue-500 hover:underline">Privacy Policy</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 hover:to-amber-700 py-4 rounded-2xl text-white font-semibold text-lg transition-all active:scale-95 shadow-lg shadow-blue-500/30"
              >
                Create Account
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link
                  href="/sign-in"
                  className="text-blue-500 font-semibold hover:text-blue-400 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;