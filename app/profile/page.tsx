"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import api from "@/server/api";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileNavigation from "@/components/profile/ProfileNavigation";
import PersonalDetails from "@/components/profile/PersonalDetails";
import EnquiryStatus from "@/components/profile/EnquiryStatus";
import ChangePassword from "@/components/profile/ChangePassword";

interface UserProfile {
  _id?: string;
  username: string;
  email: string;
  role?: string;
  phone?: string;
  address?: string;
  avatar?: string;
  createdAt?: string;
}

const Page = () => {
  const router = useRouter();

  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const res = await api.get("/auth/me");

      setUser(res.data.user || res.data);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
          <p className="text-red-500 font-medium">
            Unable to load profile.
          </p>

          <button
            onClick={fetchProfile}
            className="mt-4 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Profile Header */}

        <ProfileHeader
          username={user.username}
          email={user.email}
          role={user.role}
          avatar={user.avatar}
          createdAt={user.createdAt}
          onEdit={() => {
            router.push("/personal-information");
          }}
          onAvatarChange={(file) => {
            console.log("Selected avatar:", file);
          }}
        />

        {/* Navigation */}

        <ProfileNavigation />

        {/* Content */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 space-y-6">
            <PersonalDetails  />

            <EnquiryStatus />
          </div>

          <div>
            <ChangePassword />
          </div>

        </div>

      </div>
    </main>
  );
};

export default Page;