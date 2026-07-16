"use client";
// auth/SignUp.tsx
import api from "@/server/api";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import {toast} from "react-toastify";
import {Eye, EyeOff, Plane} from "lucide-react";
import Swal from "sweetalert2";

const SignUp: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.password || !formData.confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Required Fields",
        text: "Please enter both Password and Confirm Password.",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Password and Confirm Password do not match.",
        confirmButtonColor: "#0284C7",
      });
      return;
    }
    if (!acceptTerms) {
      toast.warning("Please accept the terms and conditions");
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: "user",
      };

      const res = await api.post("/auth/signup", payload);

      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: res.data.message,
          timer: 1800,
          showConfirmButton: false,
        });
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        router.push("/sign-in");
      } else {
        toast.error(res.data.message || "Something went wrong");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to create account");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white  max-w-5xl gap-6 w-full mx-auto flex flex-col lg:flex-row items-center rounded-3xl">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex w-1/2 flex-col justify-center relative">
          <div className="relative h-[650px] overflow-hidden shadow-2xl rounded-l-3xl">
            <img
              src="/aviation.png"
              alt="Dream Sky Airways"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/40" />

            <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Plane className="w-9 h-9 text-sky-400" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tighter">
                    Dream Sky Airways
                  </h1>
                  <p className="text-sky-300 text-lg">Soar Beyond Limits</p>
                </div>
              </div>

              <h2 className="text-6xl font-bold leading-tight tracking-tighter mb-6">
                Your Journey
                <br />
                Begins Here
              </h2>
              <p className="text-xl text-gray-200 max-w-md">
                Join thousands of travelers discovering the world with comfort,
                luxury, and unforgettable experiences.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="absolute top-8 right-8 flex flex-col gap-3">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 text-white flex items-center gap-3 text-sm">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="font-semibold">50k+ Happy Travelers</p>
                  <p className="text-xs text-sky-300">Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full lg:w-6/12">
          <div className=" p-5 lg:p-5">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl font-semibold text-gray-900 mb-2">
                Create Account
              </h2>
              <p className="text-gray-600">Join the Dream Sky family today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all text-gray-900 placeholder:text-gray-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all text-gray-900 placeholder:text-gray-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all text-gray-900 placeholder:text-gray-400"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                    placeholder="••••••••"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-sky-600 cursor-pointer rounded"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600 cursor-pointer leading-relaxed"
                >
                  I agree to the{" "}
                  <span className="text-sky-600 hover:underline">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-sky-600 hover:underline">
                    Privacy Policy
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-6 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-semibold py-4 rounded-2xl text-lg transition-all active:scale-[0.985] shadow-lg shadow-sky-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <div className="mt-2 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"
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
