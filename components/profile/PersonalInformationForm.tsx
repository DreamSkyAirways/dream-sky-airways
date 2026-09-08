"use client";

import React, { useEffect, useState } from "react";
import {
  User,
  Phone,
  Calendar,
  MapPin,
  Globe,
} from "lucide-react";

import api from "@/server/api";

interface ProfileData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
  city: string;
  state: string;
  country: string;
}

interface PersonalInformationFormProps {
  profile?: Partial<ProfileData>;
  onSuccess?: (profile: ProfileData) => void;
}

const PersonalInformationForm = ({
  profile,
  onSuccess,
}: PersonalInformationFormProps) => {
  const [personalDetails, setPersonalDetails] =
    useState({
      firstName: profile?.firstName || "",
      lastName: profile?.lastName || "",
      phoneNumber: profile?.phoneNumber
        ? String(profile.phoneNumber)
        : "",
      dateOfBirth: profile?.dateOfBirth
        ? new Date(profile.dateOfBirth)
            .toISOString()
            .split("T")[0]
        : "",
      gender: profile?.gender || "",
      city: profile?.city || "",
      state: profile?.state || "",
      country: profile?.country || "",
    });

  const [savingDetails, setSavingDetails] =
    useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Get profile
  useEffect(() => {
    fetchProfileInfo();
  }, []);

  const fetchProfileInfo = async () => {
    try {
      const res = await api.get(
        "/auth/profile",
        {
          withCredentials: true,
        }
      );

      console.log("Profile:", res.data.profile);

      const profileData = res.data.profile;

      if (profileData) {
        setPersonalDetails({
          firstName:
            profileData.firstName || "",

          lastName:
            profileData.lastName || "",

          phoneNumber:
            profileData.phoneNumber
              ? String(profileData.phoneNumber)
              : "",

          dateOfBirth:
            profileData.dateOfBirth
              ? new Date(
                  profileData.dateOfBirth
                )
                  .toISOString()
                  .split("T")[0]
              : "",

          gender:
            profileData.gender || "",

          city:
            profileData.city || "",

          state:
            profileData.state || "",

          country:
            profileData.country || "",
        });
      }
    } catch (error) {
      console.error(
        "Fetch profile error:",
        error
      );
    }
  };

  // Input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setPersonalDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Personal Details API
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // Validation
    if (!personalDetails.firstName.trim()) {
      setError("First name is required.");
      return;
    }

    if (!personalDetails.lastName.trim()) {
      setError("Last name is required.");
      return;
    }

    if (!personalDetails.phoneNumber.trim()) {
      setError("Phone number is required.");
      return;
    }

    if (!personalDetails.dateOfBirth) {
      setError("Date of birth is required.");
      return;
    }

    if (!personalDetails.gender) {
      setError("Please select your gender.");
      return;
    }

    try {
      setSavingDetails(true);

      const response = await api.put(
        "/auth/profile/profile-info",
        {
          firstName:
            personalDetails.firstName.trim(),

          lastName:
            personalDetails.lastName.trim(),

          phoneNumber:
            personalDetails.phoneNumber.trim(),

          dateOfBirth:
            personalDetails.dateOfBirth,

          gender:
            personalDetails.gender,

          city:
            personalDetails.city.trim(),

          state:
            personalDetails.state.trim(),

          country:
            personalDetails.country.trim(),
        },
        {
          withCredentials: true,
        }
      );

      const updatedProfile =
        response.data.profile;

      setSuccess(
        response.data.message ||
          "Personal information updated successfully."
      );

      if (updatedProfile) {
        onSuccess?.(updatedProfile);
      }
    } catch (err: any) {
      console.error(
        "Personal information error:",
        err
      );

      setError(
        err?.response?.data?.message ||
          "Unable to update personal information."
      );
    } finally {
      setSavingDetails(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">

      <div className="border-b border-slate-100 pb-5 mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          Personal Information
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Update your personal information
        </p>
      </div>

      {error && (
        <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm">
          {success}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-7"
      >

        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <InputField
            label="First Name"
            name="firstName"
            value={personalDetails.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            icon={
              <User className="w-4 h-4" />
            }
            required
          />

          <InputField
            label="Last Name"
            name="lastName"
            value={personalDetails.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            icon={
              <User className="w-4 h-4" />
            }
            required
          />

        </div>

        {/* Phone + DOB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <InputField
            label="Phone Number"
            name="phoneNumber"
            value={personalDetails.phoneNumber}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            icon={
              <Phone className="w-4 h-4" />
            }
            required
          />

          <InputField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={personalDetails.dateOfBirth}
            onChange={handleChange}
            icon={
              <Calendar className="w-4 h-4" />
            }
            required
          />

        </div>

        {/* Gender */}
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-semibold text-slate-700 mb-2"
          >
            Gender
          </label>

          <select
            id="gender"
            name="gender"
            value={personalDetails.gender}
            onChange={handleChange}
            className="
              w-full px-4 py-3
              rounded-xl
              border border-slate-200
              bg-white
              text-sm text-slate-900
              outline-none
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-500/10
            "
          >
            <option value="">
              Select gender
            </option>

            <option value="male">
              Male
            </option>

            <option value="female">
              Female
            </option>

            <option value="others">
              Others
            </option>
          </select>
        </div>

        {/* Location */}
        <div>

          <h3 className="text-sm font-bold text-slate-800 mb-4">
            Location
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <InputField
              label="City"
              name="city"
              value={personalDetails.city}
              onChange={handleChange}
              placeholder="Enter city"
              icon={
                <MapPin className="w-4 h-4" />
              }
            />

            <InputField
              label="State"
              name="state"
              value={personalDetails.state}
              onChange={handleChange}
              placeholder="Enter state"
              icon={
                <MapPin className="w-4 h-4" />
              }
            />

            <InputField
              label="Country"
              name="country"
              value={personalDetails.country}
              onChange={handleChange}
              placeholder="Enter country"
              icon={
                <Globe className="w-4 h-4" />
              }
            />

          </div>
        </div>

        {/* Save */}
        <div className="flex justify-end pt-4 border-t border-slate-100">

          <button
            type="submit"
            disabled={savingDetails}
            className="
              px-6 py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              disabled:bg-blue-400
              disabled:cursor-not-allowed
              text-white
              text-sm font-semibold
              transition
            "
          >
            {savingDetails
              ? "Saving..."
              : "Save Changes"}
          </button>

        </div>

      </form>
    </section>
  );
};

export default PersonalInformationForm;


// Input Field

interface InputFieldProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  required?: boolean;
}

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  required = false,
}: InputFieldProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-700 mb-2"
      >
        {label}

        {required && (
          <span className="text-red-500 ml-1">
            *
          </span>
        )}
      </label>

      <div className="relative">

        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`
            w-full py-3
            ${icon ? "pl-11" : "px-4"}
            pr-4
            rounded-xl
            border border-slate-200
            bg-white
            text-sm text-slate-900
            placeholder:text-slate-400
            outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/10
            transition
          `}
        />

      </div>
    </div>
  );
};