"use client";

import React, { useState } from "react";
import api from "@/server/api";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await api.put(
        "/auth/change-password",
        {
          currentPassword,
          newPassword,
        }
      );

      alert(
        response?.data?.message ||
          "Password updated successfully"
      );

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      console.error("Change password error:", error);

      alert(
        error?.response?.data?.message ||
          "Unable to update password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">

      {/* Header */}

      <div className="border-b border-slate-100 pb-4 mb-6">
        <h2 className="text-lg font-bold text-slate-900">
          Change Password
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Update your account password
        </p>
      </div>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Current Password */}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Current Password
          </label>

          <input
            type="password"
            value={currentPassword}
            onChange={(e) =>
              setCurrentPassword(e.target.value)
            }
            placeholder="Enter current password"
            className="
              w-full
              px-4
              py-3
              border
              border-slate-200
              rounded-xl
              bg-white
              text-sm
              text-slate-900
              outline-none
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/10
            "
          />
        </div>

        {/* New Password */}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            New Password
          </label>

          <input
            type="password"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(e.target.value)
            }
            placeholder="Enter new password"
            className="
              w-full
              px-4
              py-3
              border
              border-slate-200
              rounded-xl
              bg-white
              text-sm
              text-slate-900
              outline-none
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/10
            "
          />
        </div>

        {/* Confirm Password */}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Confirm New Password
          </label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            placeholder="Confirm new password"
            className="
              w-full
              px-4
              py-3
              border
              border-slate-200
              rounded-xl
              bg-white
              text-sm
              text-slate-900
              outline-none
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/10
            "
          />
        </div>

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            py-3
            px-4
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            disabled:bg-blue-400
            disabled:cursor-not-allowed
            text-white
            text-sm
            font-semibold
            transition
          "
        >
          {loading
            ? "Updating..."
            : "Update Password"}
        </button>

      </form>
    </div>
  );
};

export default ChangePassword;