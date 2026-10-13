"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Compass,
  MapPin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const titleText = "TRAVEL GUIDES";

export default function BlogHeroOne() {
  const sectionRef = useRef<HTMLElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lettersRef.current.filter(Boolean),
        {
          opacity: 0,
          y: 35,
          rotateX: -45,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.75,
          stagger: 0.045,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".blog-hero-content",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleLetterHover = (el: HTMLSpanElement | null) => {
    if (!el || window.matchMedia("(hover: none)").matches) return;
    if (gsap.isTweening(el)) return;

    gsap.to(el, {
      rotateY: 360,
      duration: 0.65,
      ease: "power2.out",
      onComplete: () => gsap.set(el, { rotateY: 0 }),
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#f8faf7] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-[#d9f1e9]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#ffead7]/70 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left content */}
        <div className="text-center lg:text-left">
          <div className="blog-hero-content inline-flex items-center gap-2 rounded-full border border-[#c7e9de] bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087e70] shadow-sm">
            <Compass size={15} />
            Explore • Discover • Travel
          </div>

          {/* Animated heading */}
          <div className="mt-6 [perspective:1000px]">
            <h1
              aria-label="Travel Guides"
              className="flex flex-wrap justify-center gap-x-2 text-5xl font-black uppercase leading-[1.08] tracking-tight text-[#173b35] sm:text-6xl md:text-7xl lg:justify-start lg:text-7xl xl:text-8xl"
            >
              {titleText.split("").map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  ref={(el) => {
                    lettersRef.current[index] = el;
                  }}
                  onMouseEnter={(event) =>
                    handleLetterHover(event.currentTarget)
                  }
                  aria-hidden="true"
                  className={`inline-block ${
                    char === " " ? "w-3 sm:w-5" : ""
                  } ${
                    index >= 7 ? "text-[#e88b42]" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>

          <p className="blog-hero-content mx-auto mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0">
            Find inspiration for your next adventure with destination guides,
            travel tips, holiday ideas, local experiences, and practical advice
            to help you plan a memorable journey with Dream Sky Airways.
          </p>

          {/* Category badges */}
          <div className="blog-hero-content mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {["Destination Guides", "Travel Tips", "Holiday Ideas"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#e2ebe5] bg-white px-3.5 py-2 text-xs font-semibold text-[#35564f] shadow-sm sm:text-sm"
                >
                  {item}
                </span>
              )
            )}
          </div>

          {/* CTA */}
          <div className="blog-hero-content mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#travel-blogs"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#087e70] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#087e70]/15 transition-all hover:-translate-y-0.5 hover:bg-[#06675d]"
            >
              <BookOpen size={18} />
              Explore Travel Stories
              <ArrowRight size={18} />
            </a>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin size={17} className="text-[#e88b42]" />
              Inspiration for every journey
            </div>
          </div>
        </div>

        {/* Right destination image */}
        <div className="blog-hero-content relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full border border-dashed border-[#e88b42]/50 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white shadow-[0_25px_70px_rgba(23,59,53,0.15)]">
            <img
              src="https://images.unsplash.com/photo-1501785885888-2e7a7a7d3a9b?auto=format&fit=crop&w=1200&q=85"
              alt="Scenic mountain lake surrounded by beautiful travel destinations"
              className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[490px]"
              loading="eager"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102d28]/75 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7 sm:right-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
                <MapPin size={14} />
                Discover somewhere new
              </span>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Your next story begins here.
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-white/85">
                Explore places, collect experiences, and make every journey
                count.
              </p>
            </div>
          </div>

          {/* Floating information card */}
          <div className="absolute -bottom-5 left-3 flex items-center gap-3 rounded-2xl border border-[#e7eee8] bg-white p-4 shadow-xl sm:-left-6 sm:bottom-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e0f4ed] text-[#087e70]">
              <GlobeIcon />
            </div>
            <div>
              <p className="text-sm font-bold text-[#173b35]">
                Explore the world
              </p>
              <p className="mt-0.5 text-xs text-gray-500">
                One destination at a time
              </p>
            </div>
          </div>

          <div className="absolute -bottom-4 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e88b42] text-white shadow-lg sm:-bottom-5 sm:right-8">
            <ArrowDown size={21} />
          </div>
        </div>
      </div>
    </section>
  );
}

function GlobeIcon() {
  return <Compass size={22} strokeWidth={1.8} />;
}
