"use client";

import api from "@/server/api";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone Number",
    value: "+91 72910 00329",
    href: "tel:+917291000329",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@dreamskyairways.com",
    href: "mailto:info@dreamskyairways.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Dream Sky Airways, A-Block, Sector 63, Noida, Uttar Pradesh",
    href: "#",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "general-enquiry",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await api.post("/contact/create", formData);

      if (res.data.success) {
        toast.success(res.data.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          program: "general-enquiry",
          message: "",
        });
      } else {
        toast.error(res.data.message);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <section id="contact" className="bg-[#f5f5f5] py-16 sm:py-20 lg:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 lg:mb-16"
        >
          <div className="flex flex-wrap items-center gap-2 text-4xl font-black tracking-[-0.05em] text-gray-900 sm:text-5xl lg:text-[4rem]">
            <div className="flex items-center gap-1 sm:gap-2">
              {"CONTACT".split("").map((letter, idx) => (
                <motion.span
                  key={`contact-${idx}`}
                  animate={{ rotateX: [0, 360] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    delay: idx * 0.08,
                    ease: [0.45, 0.05, 0.25, 0.95],
                  }}
                  whileHover={{ rotateX: 180, scale: 1.15 }}
                  className="inline-block select-none will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <div className="ml-2 flex items-center gap-1 sm:ml-4 sm:gap-2">
              {"US".split("").map((letter, idx) => (
                <motion.span
                  key={`us-${idx}`}
                  animate={{ rotateX: [0, 360] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    delay: (idx + 7) * 0.08,
                    ease: [0.45, 0.05, 0.25, 0.95],
                  }}
                  whileHover={{ rotateX: 180, scale: 1.15 }}
                  className="inline-block text-red-600 select-none will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="max-w-105">
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-[2.5rem]">
                Need more information? Let&apos;s talk.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Whether you are planning a holiday, a flight, or a custom itinerary, our team is ready to help with the right guidance.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600 ring-1 ring-red-100">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="mb-1 text-sm font-medium text-gray-500">{label}</div>
                    {href !== "#" ? (
                      <a href={href} className="text-base font-semibold text-gray-900 transition-colors hover:text-red-600 sm:text-lg">
                        {value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-gray-900 sm:text-lg">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-[28px] border border-gray-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-7 lg:p-8"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900">Send Message</h3>
              <p className="mt-2 text-base text-gray-600">
                Tell us about your plans and our team will reach back out soon.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  value={formData.name.split(" ")[0] || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.name.includes(" ") ? formData.name.split(" ").slice(1).join(" ") : ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      name: `${prev.name.split(" ")[0] || ""} ${e.target.value}`.trim(),
                    }))
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
                />

                <input
                  required
                  type="tel"
                  maxLength={10}
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
                />
              </div>

              <select
                value={formData.program}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    program: e.target.value,
                  }))
                }
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
              >
                <option value="general-enquiry">General Enquiry</option>
                <option value="flight-enquiry">Flight Booking</option>
                <option value="hotel-enquiry">Hotel Booking</option>
                <option value="holiday-enquiry">Holiday Package</option>
                <option value="visa-enquiry">Visa Assistance</option>
              </select>

              <textarea
                required
                rows={5}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-red-500/25 transition-all hover:bg-red-700 active:scale-[0.99]"
              >
                <Send className="h-4 w-4" />
                Submit Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
