"use client";

import api from "@/server/api";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  pkg: any;
}

interface PackageFormType {
  fullName: string;
  phone: string;
  email: string;
  travelDate: string;
  adults: number;
  children: number;
  specialRequest: string;
}

export default function PackageBookingForm({ pkg }: Props) {
  const [loading, setLoading] = useState(false);

  const [packageForm, setPackageForm] =
    useState<PackageFormType>({
      fullName: "",
      phone: "",
      email: "",
      travelDate: "",
      adults: 1,
      children: 0,
      specialRequest: "",
    });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setPackageForm((prev) => ({
      ...prev,
      [name]:
        name === "adults" || name === "children"
          ? Number(value)
          : value,
    }));
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
 console.log(FormData)
  try {
    setLoading(true);

    const payload = {
      ...packageForm,
      packageId: pkg.id,
      packageName: pkg.title,
      destination: pkg.location,
      price: pkg.price,
      duration: pkg.duration,
    };

    const res = await api.post("/package-enquiry/create", payload);

    if (res.data.success) {
      toast.success(
        res.data.message || "Enquiry submitted successfully!"
      );

      setPackageForm({
        fullName: "",
        phone: "",
        email: "",
        travelDate: "",
        adults: 1,
        children: 0,
        specialRequest: "",
      });

    } else {
      toast.error(
        res.data.message || "Failed to submit enquiry"
      );
    }
  } catch (error: any) {
    console.error(error);

    toast.error(
      error?.response?.data?.message ||
      "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="p-6 sm:p-8 pt-24 mt-6">
      <h2 className="text-3xl font-bold text-center mb-2">
        Book {pkg.title}
      </h2>

      <p className="text-center text-gray-500 mb-8">
        {pkg.location} • {pkg.duration}
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <input
          type="text"
          name="fullName"
          value={packageForm.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="border rounded-xl p-4 outline-none focus:border-blue-500"
          required
        />

        <input
          type="tel"
          name="phone"
          value={packageForm.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border rounded-xl p-4 outline-none focus:border-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          value={packageForm.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="border rounded-xl p-4 outline-none focus:border-blue-500"
          required
        />

        <input
          type="date"
          name="travelDate"
          value={packageForm.travelDate}
          onChange={handleChange}
          className="border rounded-xl p-4 outline-none focus:border-blue-500"
          required
        />

        <input
          type="number"
          name="adults"
          value={packageForm.adults}
          onChange={handleChange}
          min={1}
          placeholder="Adults"
          className="border rounded-xl p-4 outline-none focus:border-blue-500"
          required
        />

        <input
          type="number"
          name="children"
          value={packageForm.children}
          onChange={handleChange}
          min={0}
          placeholder="Children"
          className="border rounded-xl p-4 outline-none focus:border-blue-500"
        />

        <textarea
          rows={4}
          name="specialRequest"
          value={packageForm.specialRequest}
          onChange={handleChange}
          placeholder="Special Requirements..."
          className="border rounded-xl p-4 md:col-span-2 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
        //   onClick={()=>setLoading(true)}
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition-all disabled:opacity-50"
        >
          {loading
            ? "Submitting..."
            : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
}