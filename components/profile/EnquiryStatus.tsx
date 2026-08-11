"use client";

import React from "react";
import Link from "next/link";
import {
  MessageSquare,
  Clock3,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";

interface Enquiry {
  id: string;
  title: string;
  type: string;
  date: string;
  status: "Pending" | "In Progress" | "Resolved" | "Cancelled";
}

const EnquiryStatus = () => {
  const enquiries: Enquiry[] = [
    {
      id: "ENQ-1001",
      title: "Dubai Holiday Package",
      type: "Tour Package",
      date: "10 Aug 2026",
      status: "Pending",
    },
    {
      id: "ENQ-1002",
      title: "Delhi to Dubai Flight",
      type: "Flight",
      date: "08 Aug 2026",
      status: "Resolved",
    },
    {
      id: "ENQ-1003",
      title: "Goa Holiday Package",
      type: "Tour Package",
      date: "05 Aug 2026",
      status: "In Progress",
    },
  ];

  return (
    <section className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">

      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-5">

        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-blue-600" />
            </div>

            <h2 className="text-lg font-bold text-slate-900">
              Enquiry Status
            </h2>
          </div>

          <p className="text-sm text-slate-500 mt-2">
            Track your recent enquiries
          </p>
        </div>

        <Link
          href="/profile/my-enquiry"
          className="
            inline-flex
            items-center
            gap-1.5
            text-sm
            font-semibold
            text-blue-600
            hover:text-blue-700
            transition
          "
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>

      </div>

      {/* ================= ENQUIRY LIST ================= */}

      <div className="space-y-3">

        {/* {enquiries.length === 0 ? (
        //   <EmptyState />
        ) : (
          enquiries.map((enquiry) => (
            <EnquiryItem
              key={enquiry.id}
              enquiry={enquiry}
            />
          ))
        )} */}

      </div>

    </section>
  );
};

export default EnquiryStatus;