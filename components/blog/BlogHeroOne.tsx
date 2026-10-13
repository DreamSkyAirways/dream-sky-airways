"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlogHeroOne() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

  const titleText = "TRAVEL GUIDES";
  const titleChars = titleText.split("");

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || "ontouchstart" in window;
      setIsMobileDevice(mobile);
      return mobile;
    };

    const isMobile = checkMobile();

    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      const validLetters = lettersRef.current.filter(Boolean) as HTMLSpanElement[];

      if (validLetters.length) {
        gsap.fromTo(
          validLetters,
          {
            opacity: 0,
            rotateX: -90,
            y: isMobile ? 20 : 40,
          },
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            duration: 0.8,
            stagger: 0.04,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      ctx.revert();
    };
  }, []);

  const handleLetterHover = (el: HTMLSpanElement | null) => {
    if (isMobileDevice || !el || gsap.isTweening(el)) return;

    gsap.to(el, {
      rotateX: "+=360",
      duration: 0.65,
      ease: "power2.out",
      onComplete: () => {
        gsap.set(el, { rotateX: 0 });
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans select-none overflow-hidden text-center border-b border-gray-100"
    >
      <div className="max-w-5xl mx-auto space-y-6">
       

        {/* 3D Title */}
        <div className="perspective-1000">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-black uppercase flex flex-wrap justify-center items-center cursor-pointer leading-tight tracking-wider gap-x-1 sm:gap-x-2"
            style={{
              fontFamily: "'Anton', 'Bebas Neue', 'Impact', sans-serif",
            }}
          >
            {titleChars.map((char, idx) => (
              <span
                key={idx}
                ref={(el) => {
                  lettersRef.current[idx] = el;
                }}
                onMouseEnter={(e) => handleLetterHover(e.currentTarget)}
                className="inline-block transition-colors duration-300 hover:text-blue-600 px-0.5 sm:px-1"
                style={{
                  display: char === " " ? "inline" : "inline-block",
                  minWidth: char === " " ? "0.4em" : "auto",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle Paragraph with Crisp Readability & Spacious Line Height */}
        <p className="text-gray-600 font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto pt-2">
          Discover handpicked travel stories, insider destination guides, budget hacks, family holiday planning tips, and expert advice crafted by Dream Sky Airways.
        </p>
      </div>
    </section>
  );
}
