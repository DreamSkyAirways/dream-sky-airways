// auth/SignIn.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import api from "@/server/api";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { CiLock } from "react-icons/ci";
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
    <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/aeroplaneSignupLogin.jpg')" }}>

      <div className="absolute inset-0 bg-black/15" />
      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xs border border-white/25 shadow-2xl my-8">
        {/* Left Side - Welcome Section (Glass Panel) */}


        <div className="hidden lg:flex w-1/2 flex-col justify-between p-12 bg-transparent border-r border-white/15 text-white">
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

          <div className="my-auto py-8">
            <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-white mb-6 drop-shadow-sm">
              WELCOME
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-sky-300">
                BACK
              </span>
            </h2>
            <p className="text-lg text-white/90 max-w-md leading-relaxed drop-shadow-xs">
              Sign in to continue your journey with us. Discover amazing destinations around the world.
            </p>
          </div>

          <div className="text-xs text-white/60 font-light">
            © Dream Sky Airways. Premium Aviation Services.
          </div>
        </div>
        {/* Right Side - Sign In Form */}
        <div className="lg:w-7/12 p-10 lg:p-16 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <h3 className="text-4xl font-semibold text-white mb-2">
              Sign in
            </h3>
            <p className="text-white/70 mb-10">
              Enter your credentials to access your account
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email / Username */}
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Email / Username
                </label>
                <div className="relative">
                  <div className="absolute left-5 top-4 text-white/70">👤</div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-5 py-4 b g-white/5 backdrop-blur-xs border border-white/20 rounded-2xl focus:outline-none focus:border-blue-600 text-lg"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>

                <div className="relative">
                  <div className="absolute left-5 top-4 text-gray-300">
                    <CiLock size={22} />
                  </div>

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-14 py-4 bg-gray-50 border border-gray-300 rounded-2xl focus:outline-none focus:border-blue-600 text-lg text-white"
                    placeholder="Enter your password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-200 hover:text-blue-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              {/* Remember me + Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-5 h-5 accent-blue-600"
                  />
                  <span className="text-gray-300">Remember me</span>
                </label>
                <Link
                  href="#"
                  className="text-gray-200 hover:underline text-sm font-medium"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl text-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500 text-sm">Or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              {/* Sign in with Other */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:border-gray-500 bg-white text-gray-700 font-medium py-4 rounded-2xl transition-all hover:shadow-md active:scale-[0.98]"
              >
                <FcGoogle size={24} />
                <span>Sign in with Google</span>
              </button>

              {/* Sign Up Link */}
              <p className="text-center text-gray-200 ">
                Dont have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
