"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Users, Plane } from "lucide-react";

const JoinTeamCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-sky-950 py-24" id="jobs">
      {/* Background Effects */}
      <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-lg lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                <Plane size={16} />
                Dream Sky Airways Careers
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                Ready To Take Off
                <span className="block text-cyan-200">
                  With Our Team?
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
                Join passionate professionals who are shaping the future of
                travel, technology, and customer experiences. At Dream Sky
                Airways, every role creates meaningful impact and endless
                opportunities for growth.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
                >
                  View Open Positions
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-2xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact HR
                </Link>
              </div>
            </div>

            {/* Right Side Stats Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-md">
                <Users className="text-cyan-200" size={40} />

                <h3 className="mt-5 text-4xl font-bold text-white">
                  150+
                </h3>

                <p className="mt-2 text-blue-100">
                  Talented Team Members
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-md">
                <BriefcaseBusiness
                  className="text-cyan-200"
                  size={40}
                />

                <h3 className="mt-5 text-4xl font-bold text-white">
                  12+
                </h3>

                <p className="mt-2 text-blue-100">
                  Open Career Opportunities
                </p>
              </div>

              <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-md sm:col-span-2">
                <Plane className="text-cyan-200" size={40} />

                <h3 className="mt-5 text-3xl font-bold text-white">
                  Fly Higher With Dream Sky Airways
                </h3>

                <p className="mt-3 text-blue-100">
                  Innovation, teamwork, and passion drive everything we do.
                  Become part of a culture that values growth, creativity,
                  and unforgettable journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamCTA;
