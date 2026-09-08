"use client";

import React, { useState } from "react";
import { Upload } from "lucide-react";
import api from "@/server/api";

interface ProfileImageUploadProps {
  profileImage?: string;
  onSuccess?: (imageUrl: string) => void;
}

const ProfileImageUpload = ({
  profileImage,
  onSuccess,
}: ProfileImageUploadProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(
    profileImage || ""
  );

  const [uploadingImage, setUploadingImage] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Select Image
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setError("");
    setSuccess("");

    // Image validation
    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image.");
      return;
    }

    // 5 MB validation
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB.");
      return;
    }

    setImageFile(file);

    // Preview
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  // Upload Image API
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

      formData.append("profileImage", imageFile);

      const response = await api.post(
        "/auth/profile-image",
        formData,
        {
          withCredentials: true,
        }
      );

      console.log("Upload response:", response.data);

      const uploadedImage =
        response.data.profileImage;

      if (uploadedImage) {
        setImagePreview(uploadedImage);

        // Parent ko uploaded URL bhejo
        onSuccess?.(uploadedImage);
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

      console.error(
        "Backend response:",
        err?.response?.data
      );

      setError(
        err?.response?.data?.message ||
          "Unable to upload profile image."
      );
    } finally {
      setUploadingImage(false);
    }
  };

  return (
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
              U
            </span>
          )}
        </div>

        {/* Controls */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <label
              htmlFor="profileImage"
              className="
                inline-flex items-center gap-2
                px-4 py-2.5
                rounded-xl
                bg-slate-50
                hover:bg-slate-100
                border border-slate-200
                text-slate-700
                text-sm font-semibold
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

            {imageFile && (
              <button
                type="button"
                onClick={handleImageUpload}
                disabled={uploadingImage}
                className="
                  inline-flex items-center justify-center
                  px-4 py-2.5
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
                {uploadingImage
                  ? "Uploading..."
                  : "Upload Photo"}
              </button>
            )}
          </div>

          <p className="text-xs text-slate-400 mt-2">
            JPG, PNG or WEBP. Maximum 5MB.
          </p>

          {error && (
            <p className="text-sm text-red-500 mt-2">
              {error}
            </p>
          )}

          {success && (
            <p className="text-sm text-green-600 mt-2">
              {success}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileImageUpload;