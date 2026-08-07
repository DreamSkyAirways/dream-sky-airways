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

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, getTodayKey());
    setIsAnimating(false);

    setTimeout(() => {
      setIsOpen(false);
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
      style={{ background: "rgba(2,6,23,0.75)" }}
    >
      <div className="absolute inset-0 backdrop-blur-sm" />

      <div
        className={`relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-2xl transition-all duration-300 ${
          isAnimating
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-blue-950 px-6 py-5 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 text-lg">
              ℹ️
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Official Recruitment Advisory
              </h2>

              <p className="text-xs text-blue-200">
                Dream Sky Airways • Official Careers Guidance
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
            is committed to a merit-based, transparent hiring policy. Please review our official candidate guidelines below.
          </p>

          {/* Guidelines Box */}
          <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4">
            <h3 className="mb-3 text-base font-bold text-blue-950">
              Candidate Guidelines & Hiring Process
            </h3>

            <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-gray-700">
              <li>
                All official job openings and application forms are hosted exclusively on our verified portal.
              </li>

              <li>
                Our HR team does not request processing fees, deposits, or registration charges at any stage.
              </li>

              <li>
                Formal interview communications are conducted only through official company domain emails.
              </li>

              <li>
                Candidates are advised not to share sensitive financial details during preliminary screening.
              </li>
            </ul>
          </div>

          {/* Official Verification Notice */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <h3 className="mb-1 text-sm font-bold text-gray-900">
              Verification Portal
            </h3>

            <p className="text-xs leading-5 text-gray-600">
              Always verify job listings and communication channels directly through our official website before submitting your applications.
            </p>
          </div>

          <button
            onClick={handleAccept}
            className="w-full rounded-xl bg-blue-950 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 active:scale-[0.98]"
          >
            Acknowledge & Proceed
          </button>

          <p className="text-center text-[11px] text-gray-400">
            Official Career Advisory • Dream Sky Airways
          </p>
        </div>
      </div>
    </div>
  );
}