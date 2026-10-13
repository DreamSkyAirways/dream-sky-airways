
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Plane, MapPin, ShieldCheck, ArrowRight, Compass } from "lucide-react";
import api from "@/server/api";
import { toast } from "react-toastify";
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      await Swal.fire({
        icon: "error",
        title: "Password mismatch",
        text: "Password and confirm password must match.",
        confirmButtonColor: "#087e8b",
      });
      return;
    }

    if (!acceptTerms) {
      toast.warning("Please accept the terms and conditions.");
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
        await Swal.fire({
          icon: "success",
          title: "Welcome to Dream Sky!",
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

        setAcceptTerms(false);
        router.push("/sign-in");
      } else {
        toast.error(res.data.message || "Something went wrong.");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to create your account."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-[#fbfdfd] px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#087e8b] focus:ring-4 focus:ring-[#087e8b]/10";

  return (
    <main className="min-h-screen bg-[#f4f7f7] px-4 py-6 sm:px-8 lg:px-12 lg:py-10">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-[0_20px_80px_rgba(15,60,70,0.12)] lg:grid-cols-2">

        {/* Travel Hero */}
        <section className="relative hidden min-h-[780px] overflow-hidden lg:flex lg:flex-col lg:justify-between">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/aeroplaneSignupLogin.jpg')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#062f35]/75 via-[#063d43]/40 to-[#052c32]/90" />

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

          <div className="relative z-10 px-10 pb-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
              <Compass size={16} className="text-orange-300" />
              Start your travel story
            </div>

            <h2 className="text-5xl font-bold leading-[1.15] tracking-tight text-white xl:text-6xl">
              Discover more.
              <br />
              Travel <span className="text-orange-300">further.</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-white/85">
              Create your account to explore exciting holiday packages,
              discover new destinations, and plan memorable journeys.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Explore curated holiday packages",
                "Plan your next unforgettable escape",
                "Keep your travel plans in one place",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#087e8b] text-white">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-12 text-xs text-white/60">
              © Dream Sky Airways. Your journey starts here.
            </p>
          </div>
        </section>

        {/* Signup Form */}
        <section className="flex items-center justify-center px-5 py-9 sm:px-10 lg:px-12 xl:px-16">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#087e8b] transition hover:text-[#065c65]"
            >
              <Plane size={19} />
              Dream Sky Airways
            </Link>

            <div className="mb-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7f5f4] text-[#087e8b]">
                <MapPin size={24} />
              </div>

              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#087e8b]">
                Join our travel community
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-[#173a40] sm:text-4xl">
                Create account
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Sign up today and get ready for your next adventure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="mb-2 block text-sm font-semibold text-[#29464b]">
                  Full name
                </label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  autoComplete="name"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#29464b]">
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
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-semibold text-[#29464b]">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={8}
                    placeholder="At least 8 characters"
                    className={`${inputClass} pr-12`}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#087e8b]"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold text-[#29464b]">
                  Confirm password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    minLength={8}
                    placeholder="Re-enter your password"
                    className={`${inputClass} pr-12`}
                  />
                  <button
                    type="button"
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#087e8b]"
                  >
                    {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-3 pt-1 text-sm leading-6 text-gray-600">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#087e8b]"
                />
                <span>
                  I agree to the{" "}
                  <Link href="/terms" className="font-semibold text-[#087e8b] hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="font-semibold text-[#087e8b] hover:underline">
                    Privacy Policy
                  </Link>.
                </span>
              </label>

              <button
                type="submit"
                disabled={isLoading}
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#087e8b] px-5 py-4 font-semibold text-white shadow-lg shadow-[#087e8b]/20 transition duration-200 hover:bg-[#066873] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Creating account..." : "Create my account"}
                {!isLoading && (
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-bold text-[#087e8b] transition hover:text-[#065c65] hover:underline"
              >
                Sign in
              </Link>
            </p>

            <div className="mt-7 flex items-center justify-center gap-2 border-t border-gray-100 pt-5 text-xs text-gray-400">
              <ShieldCheck size={15} className="text-[#087e8b]" />
              Your journey starts with a secure sign-up
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUp;
