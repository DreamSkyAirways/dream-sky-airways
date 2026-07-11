"use client";
import api from "@/server/api";
import axios from "axios";
import {motion, useInView} from "framer-motion";
import {ExternalLink, Mail, MapPin, Phone, Send} from "lucide-react";
import React, {useRef, useState} from "react";
import {toast} from "react-toastify";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, margin: "-80px"});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      <div className="absolute top-20 left-20 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px]" />

      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.7}}
          className="text-center mb-16"
        >
          <span className="font-mono text-[11px] tracking-[0.3em] text-[#0055FF] uppercase">
            Contact Us
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Get In <span className="text-[#0055FF]">Touch</span>
          </h2>

          <p className="mt-4 text-slate-500 max-w-lg mx-auto">
            We will love to hear from you. Fill out the form below and our team
            will contact you shortly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-3">
          {/* Left Side */}
          <motion.div
            initial={{opacity: 0, x: -30}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.7, delay: 0.2}}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 shadow-md flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#0055FF]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                    Phone
                  </p>

                  <a
                    href="tel:+917291000329"
                    className="text-slate-800 hover:text-[#0055FF] transition"
                  >
                    +91 72910 00329
                  </a>
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 shadow-md flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#0055FF]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:info@dreamskyairways.com"
                    className="text-slate-800 hover:text-[#0055FF] transition"
                  >
                    info@dreamskyairways.com
                  </a>
                </div>
              </div>

              <hr className="border-slate-200" />

              {/* Address */}
              <div className="flex items-start gap-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 shadow-md flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#0055FF]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                    Address
                  </p>

                  <p className="text-slate-700">
                    Dream Sky Airways, A-Block, Sector 63,
                    <br />
                    Noida, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg">
              <p className="text-sm font-semibold text-slate-700 mb-4">
                Connect With Us
              </p>

              <div className="flex flex-wrap gap-3">
                {["Instagram", "LinkedIn", "YouTube"].map((platform) => (
                  <a
                    key={platform}
                    href={`https://${platform.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0055FF] hover:text-[#0055FF] transition-all shadow-sm"
                  >
                    {platform}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{opacity: 0, x: 30}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.7, delay: 0.3}}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto rounded-full bg-blue-50 shadow-lg flex items-center justify-center mb-6">
                    <Send className="w-8 h-8 text-[#0055FF]" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Inquiry Received
                  </h3>

                  <p className="text-slate-500">
                    Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-slate-300 px-4 py-4 shadow-sm focus:border-[#0055FF] focus:ring-4 focus:ring-blue-100 outline-none transition"
                    />

                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-slate-300 px-4 py-4 shadow-sm focus:border-[#0055FF] focus:ring-4 focus:ring-blue-100 outline-none transition"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <input
                      required
                      type="tel"
                      maxLength={10}
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-slate-300 px-4 py-4 shadow-sm focus:border-[#0055FF] focus:ring-4 focus:ring-blue-100 outline-none transition"
                    />

                    <select
                      name="program"
                      value={formData.program}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          program: e.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-slate-300 px-4 py-4 shadow-sm focus:border-[#0055FF] focus:ring-4 focus:ring-blue-100 outline-none transition"
                    >
                      <option value="general-enquiry">General Enquiry</option>
                      <option value="service-enquiry">
                        Services Related Enquiry
                      </option>
                      <option value="package-enquiry">
                        Package Related Enquiry
                      </option>
                      <option value="other-enquiry">Other Enquiry</option>
                    </select>
                  </div>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your aspirations..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full rounded-2xl border border-slate-300 px-4 py-4 shadow-sm focus:border-[#0055FF] focus:ring-4 focus:ring-blue-100 outline-none resize-none transition"
                  />

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#0055FF] text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-[#0044cc] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
