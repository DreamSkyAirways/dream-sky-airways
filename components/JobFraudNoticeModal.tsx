"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "jobFraudNoticeSeenDate";

function getTodayKey() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

export default function JobFraudNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const seenDate = localStorage.getItem(STORAGE_KEY);
    if (seenDate === getTodayKey()) return;

    setIsOpen(true);

    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, getTodayKey());
    setIsAnimating(false);

    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[99] flex items-center justify-center px-4 transition-all duration-300 ${
        isAnimating
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      style={{ background: "rgba(2,6,23,0.80)" }}
    >
      <div className="absolute inset-0 backdrop-blur-md" />

      <div
        className={`relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-2xl transition-all duration-500 ${
          isAnimating
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-blue-950 px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-xl">
              ⚠️
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Recruitment Fraud Alert
              </h2>

              <p className="text-sm text-blue-200">
                Important Notice from Dream Sky Airways
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-4 px-6 py-5 text-gray-700">

          <p className="text-sm leading-6">
            <strong className="text-blue-950">
              Dream Sky Airways
            </strong>{" "}
            follows a transparent recruitment process. Please stay alert
            against fake job offers and recruitment fraud.
          </p>

          {/* Warning Box */}
          <div className="rounded-xl border border-red-200 bg-red-50 p-4">
            <h3 className="mb-3 text-lg font-bold text-red-700">
              Important Warning
            </h3>

            <ul className="list-disc space-y-2 pl-5 text-sm leading-6">
              <li>
                Dream Sky Airways <strong>never charges any money</strong>
                &nbsp;for recruitment, interviews, training or employment.
              </li>

              <li>
                No consultant, agent or third party is authorized to collect
                money on behalf of Dream Sky Airways.
              </li>

              <li>
                Anyone asking for payment in the name of Dream Sky Airways is
                committing recruitment fraud.
              </li>

              <li>
                Never share money, banking details or confidential information
                with unknown persons.
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <h3 className="mb-2 text-base font-bold text-blue-950">
              Official Recruitment Policy
            </h3>

            <p className="text-sm leading-6">
              Recruitment updates are published only through the official
              Dream Sky Airways website and official communication channels.
            </p>
          </div>

          <p className="text-center text-xs text-gray-500">
            By clicking <strong>"I Understand"</strong>, you confirm that
            you have read this recruitment fraud advisory.
          </p>

          <button
            onClick={handleAccept}
            className="w-full rounded-xl bg-blue-950 py-3 text-base font-semibold text-white transition hover:bg-blue-900 active:scale-[0.98]"
          >
            I Understand
          </button>

          <p className="text-center text-[11px] text-gray-400">
            Stay Alert • Stay Safe • Dream Sky Airways never asks for money.
          </p>
        </div>
      </div>
    </div>
  );
}