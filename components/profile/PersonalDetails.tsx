"use client";

import React, { useEffect, useState } from "react";
import {
  User,
  Phone,
  Calendar,
  MapPin,
  Globe,
  Upload,
} from "lucide-react";

import api from "@/server/api";

interface ProfileData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
  profileImage?: string;
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

     useEffect(() => {
        fetchProfileInfo();
        }, []);

    const fetchProfileInfo=async ()=>{
        try {
            const res = await api.get("/auth/profile",{
                withCredentials:true
            })
            console.log(res.data.profile)
            setPersonalDetails(res.data.profile)
        } catch (error) {
            
        }
    }
 

  const [imageFile, setImageFile] =
    useState<File | null>(null);

  const [imagePreview, setImagePreview] =
    useState(profile?.profileImage || "");

 

  const [savingDetails, setSavingDetails] =
    useState(false);

  const [uploadingImage, setUploadingImage] =
    useState(false);


  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");



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

  /* =========================================
     IMAGE SELECT
  ========================================= */

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setError("");
    setSuccess("");

    /* Image validation */

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError(
        "Image size should be less than 5MB."
      );
      return;
    }

    /* Store actual file */

    setImageFile(file);

    /* Preview only */

    const previewUrl =
      URL.createObjectURL(file);

    setImagePreview(previewUrl);
  };

  /* =========================================
     UPLOAD PROFILE IMAGE API
  ========================================= */

  const handleImageUpload = async () => {
    if (!imageFile) {
      setError("Please select an image first.");
      return;
    }

    try {
      setUploadingImage(true);
      setError("");
      setSuccess("");

      const formData = new FormData();

      formData.append(
        "profileImage",
        imageFile
      );

      const response = await api.post(
        "/profile/profile-image",
        formData
      );

      const profileImage =
        response.data.profileImage;

      /* Update preview with actual uploaded URL */

      if (profileImage) {
        setImagePreview(profileImage);
      }

      setImageFile(null);

      setSuccess(
        response.data.message ||
          "Profile image uploaded successfully."
      );

    } catch (err: any) {
      console.error(
        "Profile image upload error:",
        err
      );

      setError(
        err?.response?.data?.message ||
          "Unable to upload profile image."
      );
    } finally {
      setUploadingImage(false);
    }
  };

  /* =========================================
     SAVE PERSONAL INFORMATION API
  ========================================= */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    /* Validation */

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
            withCredentials:true
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

      {/* =========================================
          ERROR
      ========================================= */}

      {error && (
        <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* =========================================
          SUCCESS
      ========================================= */}

      {success && (
        <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm">
          {success}
        </div>
      )}

      {/* =========================================
          PERSONAL INFORMATION FORM
      ========================================= */}

      <form
        onSubmit={handleSubmit}
        className="space-y-7"
      >

        {/* =====================================
            PROFILE IMAGE
        ===================================== */}

        <div>

          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Profile Photo
          </label>

          <div className="flex items-center gap-5">

            {/* Preview */}

            <div className="w-24 h-24 rounded-full overflow-hidden bg-blue-600 border border-slate-200 flex items-center justify-center shrink-0">

              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Profile preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-3xl font-bold text-white">
                  {personalDetails.firstName
                    ?.charAt(0)
                    ?.toUpperCase() || "U"}
                </span>
              )}

            </div>

            {/* Image Controls */}

            <div>

              <div className="flex flex-wrap items-center gap-2">

                {/* Select */}

                <label
                  htmlFor="profileImage"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2.5
                    rounded-xl
                    bg-slate-50
                    hover:bg-slate-100
                    border
                    border-slate-200
                    text-slate-700
                    text-sm
                    font-semibold
                    cursor-pointer
                    transition
                  "
                >
                  <Upload className="w-4 h-4" />

                  Select Photo
                </label>

                <input
                  id="profileImage"
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  onChange={handleImageChange}
                  className="hidden"
                />

                {/* Upload API */}

                {imageFile && (
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    disabled={uploadingImage}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      px-4
                      py-2.5
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
                    {uploadingImage
                      ? "Uploading..."
                      : "Upload Photo"}
                  </button>
                )}

              </div>

              <p className="text-xs text-slate-400 mt-2">
                JPG, PNG or WEBP. Maximum 5MB.
              </p>

            </div>

          </div>

        </div>

        {/* =====================================
            FIRST + LAST NAME
        ===================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <InputField
            label="First Name"
            name="firstName"
            value={personalDetails.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            icon={<User className="w-4 h-4" />}
            required
          />

          <InputField
            label="Last Name"
            name="lastName"
            value={personalDetails.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            icon={<User className="w-4 h-4" />}
            required
          />

        </div>

        {/* =====================================
            PHONE + DOB
        ===================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <InputField
            label="Phone Number"
            name="phoneNumber"
            value={personalDetails.phoneNumber}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            icon={<Phone className="w-4 h-4" />}
            required
          />

          <InputField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={personalDetails.dateOfBirth}
            onChange={handleChange}
            icon={<Calendar className="w-4 h-4" />}
            required
          />

        </div>

        {/* =====================================
            GENDER
        ===================================== */}

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
              w-full
              px-4
              py-3
              rounded-xl
              border
              border-slate-200
              bg-white
              text-sm
              text-slate-900
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

        {/* =====================================
            LOCATION
        ===================================== */}

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
              icon={<MapPin className="w-4 h-4" />}
            />

            <InputField
              label="State"
              name="state"
              value={personalDetails.state}
              onChange={handleChange}
              placeholder="Enter state"
              icon={<MapPin className="w-4 h-4" />}
            />

            <InputField
              label="Country"
              name="country"
              value={personalDetails.country}
              onChange={handleChange}
              placeholder="Enter country"
              icon={<Globe className="w-4 h-4" />}
            />

          </div>

        </div>

        {/* =====================================
            SAVE BUTTON
        ===================================== */}

        <div className="flex justify-end pt-4 border-t border-slate-100">

          <button
            type="submit"
            disabled={savingDetails}
            className="
              px-6
              py-3
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


/* =====================================================
   INPUT FIELD
===================================================== */

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
            w-full
            py-3
            ${icon ? "pl-11" : "px-4"}
            pr-4
            rounded-xl
            border
            border-slate-200
            bg-white
            text-sm
            text-slate-900
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