"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const faqData = [
{
question: "How can I book a tour package?",
answer:
"You can book a tour package by contacting our travel experts, filling out the inquiry form, or calling our support team directly.",
},
{
question: "Do you provide customized travel packages?",
answer:
"Yes, we create customized domestic and international tour packages according to your budget, destination, and travel preferences.",
},
{
question: "Are flight tickets included in the package?",
answer:
"It depends on the selected package. Some packages include flights while others only include hotel stays and sightseeing.",
},
{
question: "Can I cancel or reschedule my booking?",
answer:
"Yes, bookings can be cancelled or rescheduled according to our cancellation and refund policy.",
},
{
question: "Do you offer group discounts?",
answer:
"Yes, we offer special discounts for family tours, corporate trips, school tours, and large group bookings.",
},
{
question: "What payment methods do you accept?",
answer:
"We accept UPI, Debit Card, Credit Card, Net Banking, and Bank Transfer payments.",
},
{
question: "Do you provide visa assistance?",
answer:
"Yes, we assist travelers with visa documentation and application guidance for international destinations.",
},
{
question: "Is customer support available 24/7?",
answer:
"Yes, our dedicated travel support team is available 24/7 to assist you before, during, and after your trip.",
},
];

const FAQSection = () => {
const [activeIndex, setActiveIndex] = useState<number | null>(0);

const toggleFAQ = (index: number) => {
setActiveIndex(activeIndex === index ? null : index);
};

return ( <section className="py-20 bg-white"> <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-14">
      <span className="text-blue-700 font-semibold uppercase tracking-widest">
        FAQ
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
        Frequently Asked Questions
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Find answers to the most common questions about our travel
        packages, bookings, cancellations, and support services.
      </p>
    </div>

    {/* FAQ Accordion */}
    <div className="max-w-4xl mx-auto space-y-4">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between p-6 text-left bg-white"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {faq.question}
            </h3>

            {activeIndex === index ? (
              <ChevronUp className="text-blue-700 flex-shrink-0" />
            ) : (
              <ChevronDown className="text-blue-700 flex-shrink-0" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-14 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        Still Have Questions?
      </h3>

      <p className="text-gray-600 mb-6">
        Our travel experts are ready to help you plan your perfect trip.
      </p>
       <Link href="/contact">
      <button className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-medium transition-all duration-300">
        Contact Us
      </button>
      </Link>
    </div>

  </div>
</section>

);
};

export default FAQSection;

