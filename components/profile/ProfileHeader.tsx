"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  Camera,
  Edit3,
  Mail,
  ShieldCheck,
} from "lucide-react";

interface ProfileHeaderProps {
  username: string;
  email: string;
  role?: string;
  avatar?: string;
  createdAt?: string;
  onEdit?: () => void;
  onAvatarChange?: (file: File) => void;
}

const ProfileHeader = ({
  username,
  email,
  role = "USER",
  avatar,
  createdAt,
  onEdit,
  onAvatarChange,
}: ProfileHeaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* =========================================
     FIRST LETTER
  ========================================= */

  const firstLetter =
    username?.trim()?.charAt(0)?.toUpperCase() || "U";

  /* =========================================
     MEMBER SINCE
  ========================================= */

  const memberSince = createdAt
    ? new Date(createdAt).getFullYear()
    : "2026";

  /* =========================================
     CAMERA CLICK
  ========================================= */

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  /* =========================================
     FILE CHANGE
  ========================================= */

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    onAvatarChange?.(file);
  };

  return (
    <section className="relative overflow-hidden bg-white rounded-[28px] border border-slate-100 shadow-sm px-6 py-6 sm:px-10 sm:py-8">

      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div className="absolute right-0 top-0 h-full w-[45%] bg-gradient-to-l from-blue-50/70 via-blue-50/20 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">

        {/* =========================================
            PROFILE IMAGE
        ========================================= */}

        <div className="relative shrink-0">

          <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-slate-100 bg-blue-600 flex items-center justify-center">

            {avatar ? (
              <Image
                src={avatar}
                alt={`${username} profile`}
                fill
                sizes="150px"
                className="object-cover"
              />
            ) : (
              <span className="text-5xl sm:text-6xl font-bold text-white uppercase">
                {firstLetter}
              </span>
            )}

          </div>

          {/* =========================================
              CAMERA BUTTON
          ========================================= */}

          <button
            type="button"
            onClick={handleCameraClick}
            title="Change profile photo"
            className="
              absolute
              bottom-1
              right-0
              w-10
              h-10
              rounded-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              flex
              items-center
              justify-center
              border-4
              border-white
              shadow-md
              transition-all
              hover:scale-105
              active:scale-95
            "
          >
            <Camera className="w-4 h-4" />
          </button>

          {/* =========================================
              HIDDEN FILE INPUT
          ========================================= */}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg,image/webp"
            onChange={handleFileChange}
            className="hidden"
          />

        </div>

        {/* =========================================
            PROFILE INFORMATION
        ========================================= */}

        <div className="flex-1 min-w-0 text-center sm:text-left">

          {/* Username */}

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight capitalize">
            {username}
          </h1>

          {/* Email */}

          <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 text-slate-500">

            <Mail className="w-4 h-4 text-slate-400 shrink-0" />

            <span className="text-sm sm:text-base truncate">
              {email}
            </span>

          </div>

          {/* =========================================
              BADGES
          ========================================= */}

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-5">

            {/* Role */}

            <span
              className="
                inline-flex
                items-center
                gap-2
                px-4
                py-1.5
                rounded-full
                bg-blue-50
                border
                border-blue-100
                text-blue-600
                text-xs
                font-bold
                uppercase
              "
            >
              <ShieldCheck className="w-4 h-4" />

              {role}
            </span>

            {/* Member Since */}

            <span
              className="
                inline-flex
                items-center
                px-4
                py-1.5
                rounded-full
                bg-slate-100
                text-slate-600
                text-xs
                font-medium
              "
            >
              Member since {memberSince}
            </span>

          </div>

        </div>

        {/* =========================================
            EDIT PROFILE
        ========================================= */}

        <div className="shrink-0 self-start sm:self-center">

          <button
            type="button"
            onClick={onEdit}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              px-5
              py-3
              rounded-xl
              bg-slate-50
              hover:bg-slate-100
              border
              border-slate-100
              text-slate-800
              text-sm
              font-semibold
              transition-all
              hover:shadow-sm
            "
          >
            <Edit3 className="w-4 h-4" />

            Edit Profile
          </button>

        </div>

      </div>
    </section>
  );
};

export default ProfileHeader;