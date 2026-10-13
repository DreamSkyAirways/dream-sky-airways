"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroOne() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const bodyWordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

  const titleText = "OUR SERVICES";
  // Split title into individual characters including spaces
  const titleChars = titleText.split("");

  const bodyText =
    "We craft high-altitude aviation experiences, handpicked luxury stays, tailored holiday expeditions, intercity express bus fleets, VIP airport cabs, and seamless worldwide visa protection.";
  const bodyWords = bodyText.split(" ");

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

      // Initial Entrance 3D Flip on Scroll
      if (validLetters.length) {
        gsap.fromTo(
          validLetters,
          {
            opacity: 0,
            rotateX: -100,
            y: isMobile ? 35 : 70,
            scale: 0.88,
          },
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            scale: 1,
            duration: isMobile ? 0.8 : 1,
            stagger: isMobile ? 0.04 : 0.06,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              end: "top 25%",
              scrub: 0.4,
            },
          }
        );

        // ON MOBILE/TABLET TOUCH: Lightweight Auto-Flipping Animation Loop
        if (isMobile) {
          const autoFlipMobile = gsap.timeline({
            repeat: -1,
            repeatDelay: 3,
            delay: 1.2,
          });

          autoFlipMobile.to(validLetters, {
            rotateX: 360,
            duration: 1,
            stagger: 0.05,
            ease: "power2.inOut",
          }).set(validLetters, { rotateX: 0 });
        }
      }

      // Word-by-word scroll highlight animation for body text
      const bodyElements = bodyWordsRef.current.filter(Boolean);
      if (bodyElements.length) {
        gsap.fromTo(
          bodyElements,
          {
            opacity: 0.2,
            y: isMobile ? 15 : 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.6 : 0.9,
            stagger: isMobile ? 0.02 : 0.04,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 65%",
              end: "bottom 35%",
              scrub: 0.6,
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

  // DESKTOP ONLY: 3D Flip on Cursor Hover
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
      className="w-full min-h-[75vh] sm:min-h-[85vh] bg-white text-black flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 font-sans select-none overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto text-center space-y-6 sm:space-y-10 md:space-y-12">

        {/* RESPONSIVE "OUR SERVICES" HEADING (OPTIMIZED FOR MOBILE, TABLET & DESKTOP) */}
        <div className="relative w-full overflow-hidden py-2 sm:py-4 perspective-1000">
          <h1
            className="font-wham text-[13vw] xs:text-[13.5vw] sm:text-[13vw] md:text-[13vw] lg:text-[14vw] xl:text-[14vw] leading-[0.85] text-black uppercase tracking-normal flex flex-wrap justify-center items-center select-none cursor-pointer"
            style={{
              fontFamily: "'Anton', 'Bebas Neue', 'League Gothic', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            {titleChars.map((char, idx) => {
              const isOur = idx < 3; // "O", "U", "R"
              return (
                <span
                  key={idx}
                  ref={(el) => {
                    lettersRef.current[idx] = el;
                  }}
                  onMouseEnter={(e) => handleLetterHover(e.currentTarget)}
                  className={`inline-block transform-gpu ${
                    isOur ? "text-red-600" : "text-black"
                  } ${!isMobileDevice ? "hover:text-red-600 transition-colors duration-200" : ""} ${
                    char === " " ? "w-[3.5vw] sm:w-[3vw]" : ""
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "visible",
                    display: char === " " ? "inline-block" : "inline-block",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </h1>
        </div>

        {/* Subtitle Paragraph with Word-by-Word Scroll Animation (Responsive Typography) */}
        <p className="text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight text-neutral-800 max-w-4xl mx-auto leading-relaxed sm:leading-snug flex flex-wrap justify-center gap-x-1 sm:gap-x-2.5 md:gap-x-3 gap-y-1 px-2 sm:px-4">
          {bodyWords.map((word, idx) => (
            <span
              key={idx}
              ref={(el) => {
                bodyWordsRef.current[idx] = el;
              }}
              className="inline-block transform-gpu transition-colors duration-200 hover:text-red-600 font-sans cursor-pointer"
            >
              {word}
            </span>
          ))}
        </p>

        {/* Responsive Minimal Scroll Indicator */}
        <div className="pt-4 sm:pt-8 md:pt-10 flex flex-col items-center gap-2 sm:gap-3 text-neutral-400">
          <div className="w-5 h-9 sm:w-6 sm:h-11 border-2 border-black/30 rounded-full flex justify-center p-1 relative">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2.5 sm:h-3 bg-black rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}