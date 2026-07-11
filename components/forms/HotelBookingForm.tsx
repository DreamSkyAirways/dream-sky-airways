"use client";

import api from "@/server/api";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

export default function HotelBookingForm() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/hotel-enquiry/create", formData);

      if (res.data.success) {
        setShowSuccess(true);

        setFormData({
          fullName: "",
          phone: "",
          email: "",
          checkIn: "",
          checkOut: "",
          adults: 1,
          children: 0,
          rooms: 1,
          specialRequest: "",
        });

        setTimeout(() => {
          setShowSuccess(false);

          // Modal close karna ho to
          // setShowBookingForm(false);
        }, 2500);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{scale: 0.7, opacity: 0, y: 50}}
              animate={{scale: 1, opacity: 1, y: 0}}
              exit={{scale: 0.7, opacity: 0, y: 50}}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 180,
              }}
              className="w-[380px] rounded-3xl bg-white shadow-2xl overflow-hidden"
            >
              {/* Success Header */}
              <div className="bg-green-500 p-8 flex justify-center">
                <motion.div
                  initial={{scale: 0, rotate: -180}}
                  animate={{scale: 1, rotate: 0}}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-green-600 text-5xl font-bold"
                >
                  ✓
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Booking Successful 🎉
                </h2>

                <p className="text-gray-500 mt-3">
                  Your hotel enquiry has been submitted successfully.
                </p>

                <button
                  onClick={() => setShowSuccess(false)}
                  className="mt-6 px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition"
                >
                  OK
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-4xl mx-auto p-6 sm:p-8 pt-20">
        <h2 className="text-3xl font-bold text-center mb-2">Book Your Stay</h2>

        <p className="text-center text-gray-500 mb-10">
          Fill in your details and our team will contact you shortly.
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
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl disabled:opacity-50"
          >
            {loading ? (
              <motion.span
                animate={{rotate: 360}}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
                className="inline-block"
              >
                ⏳
              </motion.span>
            ) : (
              "Book Hotel"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
