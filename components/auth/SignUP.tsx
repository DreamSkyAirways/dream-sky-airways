"use client";
// auth/SignUp.tsx
import api from "@/server/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff, Plane } from "lucide-react";
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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    <div
      className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/aeroplaneSignupLogin.jpg')" }}
    >
      {/* Light Background Overlay without heavy blur */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Sheer Glass Container with Minimal Blur Filter */}
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xs border border-white/25 shadow-2xl">
        {/* Left Side - Hero Section (Glass without blur filter distortion) */}
        <div className="hidden lg:flex w-1/2 flex-col justify-between p-12 bg-transparent border-r border-white/15 text-white">
          {/* Trust Badge */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs px-5 py-2.5 rounded-2xl border border-white/20 w-fit">
            <span className="text-xl">⭐</span>
            <div>
              <p className="font-semibold text-xs text-white">50k+ Happy Travelers</p>
              <p className="text-[10px] text-sky-300 font-medium">Worldwide</p>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="my-auto py-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-xs rounded-2xl flex items-center justify-center border border-white/30 shadow-md">
                <Plane className="w-9 h-9 text-sky-300" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                  Dream Sky Airways
                </h1>
                <p className="text-sky-300 text-base font-medium">Soar Beyond Limits</p>
              </div>
            </div>

            <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-white mb-6 drop-shadow-sm">
              Your Journey
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-sky-300">
                Begins Here
              </span>
            </h2>
            <p className="text-lg text-white/90 max-w-md leading-relaxed drop-shadow-xs">
              Join thousands of travelers discovering the world with comfort,
              luxury, and unforgettable experiences.
            </p>
          </div>

          {/* Bottom Accent */}
          <div className="text-xs text-white/60 font-light">
            © Dream Sky Airways. Premium Aviation Services.
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-12 bg-white/5 backdrop-blur-xs flex flex-col justify-center">
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight drop-shadow-sm">
              Create Account
            </h2>
            <p className="text-white/80 text-base">Join the Dream Sky family today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/25 rounded-2xl focus:outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-300/30 transition-all text-white placeholder:text-white/50"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/25 rounded-2xl focus:outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-300/30 transition-all text-white placeholder:text-white/50"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/25 rounded-2xl focus:outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-300/30 transition-all text-white placeholder:text-white/50 pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/25 rounded-2xl focus:outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-300/30 transition-all text-white placeholder:text-white/50 pr-12"
                  placeholder="••••••••"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 w-5 h-5 accent-sky-500 cursor-pointer rounded border-white/30 bg-white/10"
              />
              <label
                htmlFor="terms"
                className="text-sm text-white/90 cursor-pointer leading-relaxed"
              >
                I agree to the{" "}
                <span className="text-sky-300 hover:text-sky-200 underline font-medium transition-colors">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-sky-300 hover:text-sky-200 underline font-medium transition-colors">
                  Privacy Policy
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 bg-sky-600/90 hover:bg-sky-500 text-white font-semibold py-4 rounded-2xl text-lg transition-all active:scale-[0.985] shadow-lg shadow-sky-600/30 border border-white/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/80">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="text-sky-300 font-semibold hover:text-sky-200 hover:underline transition-colors ml-1"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

