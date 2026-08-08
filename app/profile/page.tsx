"use client";

import React, { useState, useEffect } from "react";
import {
  User as UserIcon,
  Mail,
  Phone,
  MapPin,
  Camera,
  Plane,
  CreditCard,
  Lock,
  Edit3,
  CheckCircle2,
  Clock,
  ShieldCheck,
  LogOut,
  Loader2,
} from "lucide-react";
import api from "@/server/api";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

interface UserProfile {
  _id?: string;
  username: string;
  email: string;
  role?: string;
  phone?: string;
  address?: string;
  passportNumber?: string;
  avatar?: string;
  createdAt?: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState<"overview" | "bookings" | "security">("overview");
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const res = await api.get("/auth/me");
      setUser(res.data.user || res.data);
      setError(null);
    } catch (err: any) {
      console.error("Failed to fetch profile:", err);
      setError("Unable to load profile data.");
    } finally {
      setLoading(false);
    }
  };

  // Sample Booking Data
  const bookingHistory = [
    {
      id: "BK-9821",
      from: "DEL (New Delhi)",
      to: "BOM (Mumbai)",
      date: "12 Oct 2026",
      status: "Confirmed",
      amount: "₹5,499",
    },
    {
      id: "BK-4320",
      from: "DEL (New Delhi)",
      to: "DXB (Dubai)",
      date: "28 Aug 2026",
      status: "Completed",
      amount: "₹18,200",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        <p className="text-slate-500 text-sm font-medium">Loading profile..</p>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-3 max-w-sm">
          <p className="text-rose-600 font-semibold">{error || "User not found"}</p>
          <button
            onClick={fetchProfile}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Fallback defaults for missing optional profile fields
  const displayAvatar = user.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300";
  const displayPhone = user.phone || "+91 98765 43210";
  const displayAddress = user.address || "New Delhi, India";
  const memberSinceYear = user.createdAt ? new Date(user.createdAt).getFullYear() : "2024";

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* TOP PROFILE HEADER CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/60 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">

            {/* Avatar Section */}
            <div className="relative group">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-md relative">
                <img
                  src={displayAvatar}
                  alt={user.username}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                type="button"
                className="absolute bottom-1 right-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md transition-transform active:scale-95"
                title="Change Avatar"
              >
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 capitalize">
                    {user.username}
                  </h1>
                  <p className="text-slate-500 text-sm flex items-center justify-center sm:justify-start gap-1.5 mt-1">
                    <Mail className="w-4 h-4 text-slate-400" />
                    {user.email}
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition"
                >
                  <Edit3 className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>

              {/* Badges / Stats Row */}
              <div className="pt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold border border-blue-100 uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" /> {user.role || "User"}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
                  Member since {memberSinceYear}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* MAIN NAVIGATION TABS */}
        <div className="flex border-b border-slate-200 gap-8 text-sm font-semibold">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-4 transition-all border-b-2 ${activeTab === "overview"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("bookings")}
            className={`pb-4 transition-all border-b-2 ${activeTab === "bookings"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
          >
            My Bookings
          </button>
          <button
            onClick={() => setActiveTab("security")}
            className={`pb-4 transition-all border-b-2 ${activeTab === "security"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-slate-900"
              }`}
          >
            Security & Password
          </button>
        </div>

        {/* TAB CONTENTS */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
                Personal Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <div className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm">
                    <UserIcon className="w-4 h-4 text-slate-400" />
                    <span className="capitalize">{user.username}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <div className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span>{user.email}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <div className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span>{displayPhone}</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Location
                  </label>
                  <div className="flex items-center gap-3 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{displayAddress}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Travel Summary
                </h3>

                <div className="flex items-center justify-between p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-600 text-white rounded-lg">
                      <Plane className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Total Trips</p>
                      <p className="text-lg font-bold text-slate-900">12 Flights</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-emerald-600 text-white rounded-lg">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Reward Points</p>
                      <p className="text-lg font-bold text-slate-900">4,250 PTS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <button
                  type="button"
                  onClick={async () => {
                    await logout();
                    router.push("/sign-in");
                  }}
                  className="w-full flex items-center justify-center gap-2 text-rose-600 bg-rose-50 hover:bg-rose-100 font-semibold py-3 rounded-xl text-sm transition cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out Account
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BOOKINGS */}
        {activeTab === "bookings" && (
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
              Flight History & Bookings
            </h2>

            <div className="space-y-4">
              {bookingHistory.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-2xl transition gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-xl shadow-xs border border-slate-200 text-blue-600">
                      <Plane className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400">ID: {item.id}</p>
                      <h4 className="text-base font-bold text-slate-900">{item.from} → {item.to}</h4>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                        <Clock className="w-3.5 h-3.5" /> {item.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full ${item.status === "Confirmed"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-slate-200 text-slate-700"
                        }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {item.status}
                    </span>
                    <span className="text-sm font-extrabold text-slate-900">{item.amount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SECURITY */}
        {activeTab === "security" && (
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-6 max-w-2xl">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
              Change Password
            </h2>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-sm transition shadow-sm shadow-blue-600/30"
              >
                Update Password
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}