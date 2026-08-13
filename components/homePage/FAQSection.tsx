"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "How can I book a tour package?",
    answer:
      "You can book a tour package by contacting our travel experts, filling out the online inquiry form, or calling our 24/7 support team directly.",
  },
  {
    question: "Do you provide customized travel packages?",
    answer:
      "Yes, we create customized domestic and international tour packages tailored to your budget, preferred destination, and flight schedules.",
  },
  {
    question: "Are flight tickets included in the package?",
    answer:
      "It depends on your selected package. We offer all-inclusive packages with flights, as well as standalone hotel and sightseeing deals.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes, bookings can be cancelled or rescheduled according to our hassle-free cancellation and refund policy.",
  },
  {
    question: "Do you offer group and family discounts?",
    answer:
      "Yes, special discounted rates are available for family vacations, corporate retreats, and group bookings.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major UPI apps, Debit Cards, Credit Cards, Net Banking, and direct Bank Transfers securely.",
  },
  {
    question: "Do you provide international visa assistance?",
    answer:
      "Yes, our visa specialists assist travelers with documentation guidance and embassy appointment scheduling.",
  },
  {
    question: "Is customer support available 24/7 during my trip?",
    answer:
      "Yes, our dedicated travel support team is available round the clock to assist you before, during, and after your journey.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-white px-4 sm:px-8 lg:px-12 max-w-[1700px] mx-auto select-none">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Badge, Big Split Heading & Description (Matching UI) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs sm:text-sm font-semibold">
              <HelpCircle size={15} className="text-red-600" />
              <span>Frequently asked questions</span>
            </div>

            {/* Split Title - "questions" in Red */}
            <div className="space-y-1">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
                Frequently asked
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 tracking-tight leading-[1.1]">
                questions
              </h2>
            </div>

            {/* Subtitle Paragraph */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md pt-1">
              Explore answers to common questions about flight reservations, customized holiday packages, cancellation policies, and round-the-clock traveler assistance.
            </p>

            {/* CTA Support Button */}
            <div className="pt-2">
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer">
                  <span>Contact Support</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Vertically Scrollable Questions & Answers Accordion Stack (4 Questions Visible) */}
          <div className="lg:col-span-7 max-h-[430px] sm:max-h-[460px] overflow-y-auto pr-2 sm:pr-4 space-y-4 scrollbar-thin scrollbar-thumb-red-200 hover:scrollbar-thumb-red-400">
            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`border rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? "bg-white border-red-200 shadow-md"
                      : "bg-gray-50/80 border-gray-100 hover:border-red-200 hover:bg-white"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 leading-snug">
                      {faq.question}
                    </h3>

                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-red-600 text-white shadow-md rotate-180"
                          : "bg-red-50 text-red-600 hover:bg-red-600 hover:text-white"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-3 pt-3 border-t border-gray-100">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
