// auth/SignIn.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import api from "@/server/api";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { Eye, EyeOff, Plane } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const SignIn: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { getUser } = useAuth();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      email: formData.email,
      password: formData.password,
      role: "user",
    };

    try {
      setLoading(true);

      const res = await api.post(
        "/auth/signin",
        payload,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        // AuthContext update
        await getUser();

        await Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: res.data.message,
          timer: 1800,
          showConfirmButton: false,
        });

        router.refresh();
        router.push("/");
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "Invalid Email or Password",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/aeroplaneSignupLogin.jpg')" }}
    >
      {/* Light Background Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Sheer Glass Container */}
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xs border border-white/25 shadow-2xl">
        {/* Left Side - Hero Section */}
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
              Welcome
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-sky-300">
                Back
              </span>
            </h2>
            <p className="text-lg text-white/90 max-w-md leading-relaxed drop-shadow-xs">
              Sign in to continue your journey with us. Discover amazing destinations around the world.
            </p>
          </div>

          {/* Bottom Accent */}
          <div className="text-xs text-white/60 font-light">
            © Dream Sky Airways. Premium Aviation Services.
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-12 bg-white/5 backdrop-blur-xs flex flex-col justify-center">
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight drop-shadow-sm">
              Sign In
            </h2>
            <p className="text-white/80 text-base">Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Address */}
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

            {/* Password */}
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 accent-sky-500 cursor-pointer rounded border-white/30 bg-white/10"
                />
                <span className="text-sm text-white/90">Remember me</span>
              </label>
              <Link
                href="#"
                className="text-sm font-medium text-sky-300 hover:text-sky-200 underline transition-colors"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-sky-600/90 hover:bg-sky-500 text-white font-semibold py-4 rounded-2xl text-lg transition-all active:scale-[0.985] shadow-lg shadow-sky-600/30 border border-white/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-white/20"></div>
              <span className="text-white/60 text-xs font-medium uppercase tracking-wider">Or</span>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            {/* Sign in with Google */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-medium py-3.5 rounded-2xl transition-all hover:shadow-md active:scale-[0.985] cursor-pointer"
            >
              <FcGoogle size={22} />
              <span>Sign in with Google</span>
            </button>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-white/80">
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-sky-300 font-semibold hover:text-sky-200 hover:underline transition-colors ml-1"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

