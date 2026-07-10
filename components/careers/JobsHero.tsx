"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Growth Opportunities",
    description:
      "Explore roles across aviation, customer service, sales, marketing, and operations.",
  },
  {
    title: "Supportive Culture",
    description:
      "Work in a team-driven environment focused on learning, collaboration, and ownership.",
  },
  {
    title: "Long-Term Career",
    description:
      "Build a meaningful career path with continuous development and real responsibility.",
  },
];

export default function JobsHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-900">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/flight.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/65 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_30%)]" />

        <div className="relative z-10 flex min-h-[90vh] items-center justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl text-center text-white"
          >
            <span className="inline-flex items-center rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-md">
              Careers at Dream Sky Airways
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              Build Your Career with{" "}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
                Dream Sky Airways
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-blue-100 md:text-lg">
              Join a growing team in aviation, travel management, sales,
              marketing, customer service, and operations. We value passion,
              professionalism, and people who want to make an impact every day.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#open-positions"
                className="rounded-full bg-blue-950 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-950 hover:shadow-blue-500/40"
              >
                View Open Positions
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-blue-950"
              >
                Contact HR
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
              <StatCard number="50+" label="Career Roles" />
              <StatCard number="100%" label="Team Support" />
              <StatCard number="24/7" label="Online Accessibility" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESCRIPTION SECTION */}
      <section className="w-full bg-gradient-to-b from-white to-blue-50 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl"
        >
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-950">
              Why Work With Us
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
              Careers at Dream Sky Airways
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              At Dream Sky Airways, our people are the backbone of our success.
              We are built on trust, professionalism, and a commitment to
              delivering reliable, high-quality travel experiences. To learn
              more about our journey, values, and vision, visit our{" "}
              <Link
                href="/about"
                className="font-semibold text-blue-950 hover:underline"
              >
                About Us
              </Link>{" "}
              page.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We offer career opportunities across aviation operations, travel
              consultancy, customer support, sales, marketing, and backend
              management. Every team member contributes to operational
              excellence, service quality, and customer satisfaction.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-gradient-to-r from-blue-950 to-cyan-800 p-8 text-white shadow-xl">
            <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-center">
              <div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  Grow with a company that values learning and ambition
                </h3>
                <p className="mt-3 text-blue-50">
                  Whether you are a fresher or an experienced professional,
                  Dream Sky Airways gives you the environment to learn, build,
                  and succeed.
                </p>
              </div>

              <div className="flex md:justify-end">
                <Link
                  href="#open-positions"
                  className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-blue-950 transition hover:bg-blue-50"
                >
                  Explore Openings
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
      <div className="text-2xl font-extrabold text-white">{number}</div>
      <div className="mt-1 text-sm text-blue-100">{label}</div>
    </div>
  );
}