"use client";

import { useState } from "react";
import {
Users,
MapPinned,
Plane,
ChevronDown,
ChevronUp,
} from "lucide-react";

const stats = [
{
icon: Users,
value: "10K+",
label: "Happy Travelers",
},
{
icon: Plane,
value: "500+",
label: "Tour Packages",
},
{
icon: MapPinned,
value: "50+",
label: "Destinations",
},
{
icon: Users,
value: "99%",
label: "Customer Satisfaction",
},
];

const faqs = [
{
question: "Do you provide customized tour packages?",
answer:
"Yes, we create customized domestic and international tour packages according to your budget and preferences.",
},
{
question: "Can I book flights and hotels separately?",
answer:
"Yes, we offer flight bookings, hotel reservations, and complete holiday packages.",
},
{
question: "Do you offer group discounts?",
answer:
"Yes, special discounts are available for family, corporate, and group bookings.",
},
{
question: "Is customer support available 24/7?",
answer:
"Yes, our travel support team is available around the clock to assist travelers.",
},
];

const Statistics = () => {
const [active, setActive] = useState<number | null>(0);

return ( <section className="py-20 bg-gradient-to-b from-slate-950 to-blue-950 md:px-15"> <div className="container mx-auto px-4">


    {/* Heading */}
    <div className="text-center mb-14 ">
      <span className="text-blue-400 font-semibold uppercase tracking-widest">
        Our Achievements
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
        Trusted By Thousands Of Travelers
      </h2>

      <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
        We help travelers discover amazing destinations with reliable,
        affordable, and unforgettable travel experiences.
      </p>
    </div>

    {/* Statistics */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-sm hover:border-blue-500 transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-800 flex items-center justify-center mb-4">
              <Icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-4xl font-bold text-white">
              {item.value}
            </h3>

            <p className="text-gray-300 mt-2">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>

    {/* FAQ Dropdown */}
    <div className="max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold text-white text-center mb-8">
        Frequently Asked Questions
      </h3>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() =>
                setActive(active === index ? null : index)
              }
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="text-white font-medium">
                {faq.question}
              </span>

              {active === index ? (
                <ChevronUp className="text-blue-400" />
              ) : (
                <ChevronDown className="text-blue-400" />
              )}
            </button>

            {active === index && (
              <div className="px-5 pb-5 text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

  </div>
</section>


);
};

export default Statistics;
