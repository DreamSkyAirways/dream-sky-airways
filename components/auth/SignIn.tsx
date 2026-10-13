
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Plane,
  MapPin,
  Compass,
  ShieldCheck,
  ArrowRight,
  Globe2,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import api from "@/server/api";
import { useAuth } from "@/hooks/useAuth";

const SignIn: React.FC = () => {
  const router = useRouter();
  const { getUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post(
        "/auth/signin",
        {
          email: formData.email,
          password: formData.password,
          role: "user",
        },
        { withCredentials: true }
      );

      if (res.data.success) {
        await getUser();

        await Swal.fire({
          icon: "success",
          title: "Welcome aboard!",
          text: res.data.message,
          timer: 1600,
          showConfirmButton: false,
        });

        router.refresh();
        router.push("/");
      }
    } catch (error: any) {
      await Swal.fire({
        icon: "error",
        title: "Login failed",
        text:
          error.response?.data?.message ||
          "Please check your email and password.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f7f7] px-4 py-6 sm:px-8 lg:px-12 lg:py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-[0_20px_80px_rgba(15,60,70,0.12)] lg:grid lg:grid-cols-2">
        {/* Travel destination panel */}
        <section className="relative hidden min-h-[700px] overflow-hidden lg:flex lg:flex-col lg:justify-between">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/aeroplaneSignupLogin.jpg')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#062f35]/75 via-[#063d43]/30 to-[#052c32]/90" />

          <div className="relative z-10 flex items-center gap-3 p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#087e8b] shadow-lg">
              <Plane size={25} />
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-white">
                Dream Sky Airways
              </h1>
              <p className="text-xs tracking-wide text-white/75">
                FLIGHTS · HOLIDAYS · EXPERIENCES
              </p>
            </div>
          </div>

          <div className="relative z-10 px-10 pb-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
              <Compass size={16} className="text-orange-300" />
              Your journey, your way
            </div>

            <h2 className="max-w-lg text-5xl font-bold leading-[1.15] tracking-tight text-white xl:text-6xl">
              The world is
              <br />
              waiting for
              <br />
              <span className="text-orange-300">you.</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-white/85">
              Discover beautiful destinations, explore unforgettable holiday
              packages, and turn your travel dreams into memories.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
                <p className="text-sm font-semibold text-white">
                  Holiday Packages
                </p>
                <p className="mt-1 text-xs text-white/70">
                  Made for you
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
                <p className="text-sm font-semibold text-white">
                  Easy Booking
                </p>
                <p className="mt-1 text-xs text-white/70">
                  Travel with ease
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-2 text-xs text-white/65">
              <Globe2 size={16} />
              Explore more. Travel better.
            </div>
          </div>
        </section>

        {/* Login panel */}
        <section className="flex min-h-[700px] items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-[#087e8b] transition hover:text-[#065c65]"
            >
              <Plane size={19} />
              <span>Dream Sky Airways</span>
            </Link>

            <div className="mb-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f5f4] text-[#087e8b]">
                <MapPin size={24} />
              </div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#087e8b]">
                Welcome back
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#173a40] sm:text-4xl">
                Sign in to explore
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Access your account and get ready for your next adventure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#29464b]"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-[#fbfdfd] px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#087e8b] focus:ring-4 focus:ring-[#087e8b]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-[#29464b]"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-gray-200 bg-[#fbfdfd] px-4 py-3.5 pr-12 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#087e8b] focus:ring-4 focus:ring-[#087e8b]/10"
                  />

                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#087e8b]"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 accent-[#087e8b]"
                  />
                  Remember me
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm font-semibold text-[#087e8b] transition hover:text-[#065c65] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#087e8b] px-5 py-4 font-semibold text-white shadow-lg shadow-[#087e8b]/20 transition duration-200 hover:bg-[#066873] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign in to your account"}
                {!loading && (
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                )}
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <button
              type="button"
              onClick={() =>
                Swal.fire({
                  icon: "info",
                  title: "Google sign-in",
                  text: "Google authentication needs to be configured before you can use this option.",
                })
              }
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            >
              <FcGoogle size={21} />
              Continue with Google
            </button>

            <p className="mt-7 text-center text-sm text-gray-500">
              New to Dream Sky?{" "}
              <Link
                href="/sign-up"
                className="font-bold text-[#087e8b] transition hover:text-[#065c65] hover:underline"
              >
                Create an account
              </Link>
            </p>

            <div className="mt-8 flex items-center justify-center gap-2 border-t border-gray-100 pt-5 text-xs text-gray-400">
              <ShieldCheck size={15} className="text-[#087e8b]" />
              Your journey starts with a secure sign-in
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignIn;
