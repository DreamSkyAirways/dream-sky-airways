"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  Compass,
  MapPin,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function HeroOne() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const content = contentRef.current;

    if (!section || !heading || !content) return;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set([heading, content], { clearProps: "all" });
        return;
      }

      gsap.fromTo(
        heading,
        {
          opacity: 0,
          y: 45,
          clipPath: "inset(0 0 100% 0)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        content.children,
        {
          opacity: 0,
          y: 22,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: content,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [reduceMotion]);

  const scrollToServices = () => {
    document.getElementById("travel-services")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[650px] w-full items-center overflow-hidden bg-[#f8faf7] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:min-h-[720px] lg:px-12 lg:pt-6"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-32 top-0 h-[360px] w-[360px] rounded-full bg-[#d8eee4]/70 blur-3xl sm:h-[520px] sm:w-[520px]" />
        <div className="absolute -bottom-40 -left-20 h-[360px] w-[360px] rounded-full bg-[#f9e4cf]/60 blur-3xl" />

        <svg
          className="absolute right-0 top-0 h-full w-full opacity-[0.12]"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path
            d="M700 -100 C500 150 1050 200 750 450 S800 750 1200 850"
            stroke="#087e70"
            strokeWidth="1.5"
            strokeDasharray="6 10"
          />
          <path
            d="M900 -100 C700 150 1200 250 900 500 S950 750 1300 850"
            stroke="#e88b42"
            strokeWidth="1.5"
            strokeDasharray="5 12"
          />
        </svg>
      </div>

      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left content */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d8e8dd] bg-white/80 px-4 py-2 shadow-sm"
          >
            <Sparkles size={15} className="text-[#e88b42]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#315d4e] sm:text-xs">
              Discover · Explore · Experience
            </span>
          </motion.div>

          <h1
            ref={headingRef}
            className="text-balance text-5xl font-black leading-[1.05] tracking-[-0.055em] text-[#173b35] sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px]"
          >
            YOUR NEXT
            <br />
            <span className="relative inline-block text-[#087e70]">
              ADVENTURE
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full"
                viewBox="0 0 400 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8 Q100 0 200 7 T397 4"
                  fill="none"
                  stroke="#e88b42"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            STARTS HERE.
          </h1>

          <div
            ref={contentRef}
            className="mx-auto mt-8 max-w-xl lg:mx-0"
          >
            <p className="text-base leading-8 text-[#61736b] sm:text-lg">
              Discover beautiful destinations, thoughtfully planned holiday
              packages, memorable family vacations and romantic getaways
              with <strong className="font-semibold text-[#173b35]">Dream Sky Airways</strong>.
              Your journey, your way.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#315d4e] shadow-sm sm:text-sm">
                <MapPin size={15} className="text-[#087e70]" />
                Explore India
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#315d4e] shadow-sm sm:text-sm">
                <Compass size={15} className="text-[#e88b42]" />
                Find Your Holiday
              </span>
            </div>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/packages"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#087e70] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#087e70]/20 transition hover:-translate-y-0.5 hover:bg-[#06685d] sm:text-base"
              >
                Explore Holiday Packages
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#cbdcd1] bg-white/80 px-7 py-4 text-sm font-bold text-[#173b35] transition hover:border-[#087e70] hover:bg-white sm:text-base"
              >
                Plan Your Trip
              </Link>
            </div>

            <p className="mt-5 text-xs leading-6 text-[#71857b] sm:text-sm">
              From weekend escapes to memorable holidays, start planning your
              next journey with us.
            </p>
          </div>
        </div>

        {/* Right travel visual */}
        <div className="relative mx-auto w-full max-w-[570px] lg:max-w-none">
          <div className="relative mx-auto aspect-[4/4.2] max-h-[610px] w-full max-w-[500px] sm:aspect-[5/4.7] lg:aspect-[4/4.5]">
            {/* Main destination image */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 25 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="absolute inset-x-5 bottom-5 top-2 overflow-hidden rounded-[46%_46%_28px_28px] border-[7px] border-white shadow-2xl shadow-[#173b35]/15 sm:inset-x-8 sm:bottom-8"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85')",
                }}
                role="img"
                aria-label="Scenic lake surrounded by mountains, an inspiring holiday destination"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102f2a]/75 via-transparent to-[#102f2a]/5" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] backdrop-blur-md sm:text-xs">
                  <MapPin size={13} />
                  Your next destination
                </span>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Find Your Escape
                </h2>

                <p className="mt-2 max-w-xs text-sm leading-6 text-white/85">
                  New places, new memories and experiences worth travelling for.
                </p>
              </div>
            </motion.div>

            {/* Floating destination card */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 20, y: 10 }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      x: 0,
                      y: [0, -7, 0],
                    }
              }
              transition={{
                opacity: { delay: 0.35, duration: 0.6 },
                x: { delay: 0.35, duration: 0.6 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute right-0 top-12 z-10 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-xl shadow-[#173b35]/10 backdrop-blur sm:right-0 sm:top-16 sm:p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e88b42]/15 text-[#c76b28]">
                  <Compass size={21} />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#173b35] sm:text-sm">
                    Discover More
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#71857b] sm:text-xs">
                    Your next journey awaits
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating travel note */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -15 }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 1,
                      x: 0,
                      y: [0, 6, 0],
                    }
              }
              transition={{
                opacity: { delay: 0.55, duration: 0.6 },
                x: { delay: 0.55, duration: 0.6 },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute bottom-16 left-0 z-10 max-w-[210px] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl shadow-[#173b35]/10 backdrop-blur sm:bottom-20 sm:max-w-[230px] sm:p-5"
            >
              <div className="mb-2 flex items-center gap-1 text-[#e88b42]">
                <Sparkles size={16} />
                <span className="text-xs font-bold">Made for Travellers</span>
              </div>
              <p className="text-sm font-semibold leading-6 text-[#173b35]">
                Every journey begins with a destination.
              </p>
            </motion.div>

            {/* Decorative dots */}
            <div
              aria-hidden="true"
              className="absolute -right-2 bottom-0 -z-10 grid grid-cols-5 gap-2 opacity-50 sm:right-0"
            >
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full bg-[#087e70]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to next section */}
      <button
        type="button"
        onClick={scrollToServices}
        aria-label="Scroll to travel services"
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#71857b] transition hover:text-[#087e70] sm:bottom-7"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.22em] sm:text-[10px]">
          Explore More
        </span>
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={17} />
        </motion.span>
      </button>
    </section>
  );
}
