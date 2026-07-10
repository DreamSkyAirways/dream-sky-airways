"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function HotelBookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    rooms: 1,
    specialRequest: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    toast.success(
      "Hotel booking request submitted!"
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 pt-20">
      <h2 className="text-3xl font-bold text-center mb-2">
        Book Your Stay
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Fill in your details and our team will
        contact you shortly.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="border rounded-2xl p-4 outline-none focus:border-blue-600"
          required
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border rounded-2xl p-4 outline-none focus:border-blue-600"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="border rounded-2xl p-4 outline-none focus:border-blue-600"
          required
        />

        <input
          type="number"
          name="rooms"
          value={formData.rooms}
          onChange={handleChange}
          placeholder="Rooms"
          className="border rounded-2xl p-4 outline-none focus:border-blue-600"
        />

        <input
          type="date"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          className="border rounded-2xl p-4 outline-none focus:border-blue-600"
        />

        <input
          type="date"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          className="border rounded-2xl p-4 outline-none focus:border-blue-600"
        />

        <input
          type="number"
          name="adults"
          value={formData.adults}
          onChange={handleChange}
          placeholder="Adults"
          className="border rounded-2xl p-4 outline-none focus:border-blue-600"
        />

        <input
          type="number"
          name="children"
          value={formData.children}
          onChange={handleChange}
          placeholder="Children"
          className="border rounded-2xl p-4 outline-none focus:border-blue-600"
        />

        <textarea
          rows={4}
          name="specialRequest"
          value={formData.specialRequest}
          onChange={handleChange}
          placeholder="Special Requests..."
          className="border rounded-2xl p-4 md:col-span-2 outline-none focus:border-blue-600"
        />

        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold text-lg transition-all"
        >
          Confirm Hotel Booking
        </button>
      </form>
    </div>
  );
}