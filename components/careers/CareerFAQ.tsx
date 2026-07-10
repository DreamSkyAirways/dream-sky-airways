"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I apply for a position at Dream Sky Airways?",
    answer:
      "You can explore our open positions and click the 'Apply Now' button to submit your application online.",
  },
  {
    question: "Do you hire freshers?",
    answer:
      "Yes, we welcome fresh graduates and provide training programs to help them grow within the organization.",
  },
  {
    question: "What is the recruitment process?",
    answer:
      "Our hiring process typically includes application screening, an HR interview, a technical or departmental round, and a final discussion with management.",
  },
  {
    question: "Are remote or hybrid opportunities available?",
    answer:
      "Some technology and business roles offer hybrid or remote work options depending on project requirements.",
  },
  {
    question: "What employee benefits do you provide?",
    answer:
      "We offer health insurance, paid leave, training programs, travel benefits, performance incentives, and career growth opportunities.",
  },
  {
    question: "Can I apply for multiple positions?",
    answer:
      "Absolutely. If your skills match multiple roles, you may apply to more than one position.",
  },
];

const CareerFAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-md bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Careers FAQ
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Find answers to common questions about careers, recruitment,
            benefits, and opportunities at Dream Sky Airways.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`h-6 w-6 text-blue-600 transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ${
                  active === index
                    ? "max-h-96 px-8 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="leading-8 text-slate-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Card */}
        <div className="mt-20 rounded-[40px] bg-gradient-to-r from-blue-600 to-sky-500 p-10 text-white shadow-2xl">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h3 className="text-3xl font-bold">
                Still Have Questions?
              </h3>

              <p className="mt-4 max-w-2xl text-blue-100">
                Our HR team is always ready to help. Reach out to us and we'll
                guide you through your career journey with Dream Sky Airways.
              </p>
            </div>

            <a
              href="mailto:careers@dreamskyairways.com"
              className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105"
            >
              Contact HR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerFAQ;
