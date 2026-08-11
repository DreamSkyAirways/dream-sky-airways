"use client";

import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import {ArrowLeft, Home, Search, AlertCircle} from "lucide-react";

const NotFound = () => {
  return (
    <main
      className="
    min-h-screen
    relative
    overflow-hidden
    flex
    items-center
    justify-center
    px-4
    py-10
    bg-cover
    bg-center
    bg-no-repeat
  "
      style={{
        backgroundImage: "url('/aeroplaneSignupLogin.jpg')",
      }}
    >
      {/* =========================================
          BACKGROUND ANIMATION
      ========================================= */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[350px]
          h-[350px]
          sm:w-[500px]
          sm:h-[500px]
          rounded-full
          bg-blue-100
          blur-3xl
        "
      />

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          left-10
          w-20
          h-20
          rounded-full
          bg-blue-200/40
          blur-xl
        "
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20
          right-10
          w-24
          h-24
          rounded-full
          bg-indigo-200/40
          blur-xl
        "
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          relative
          z-10
          w-full
          max-w-xl
          text-center
          bg-white/90
          backdrop-blur-xl
          border
          border-slate-200
          rounded-[32px]
          shadow-xl
          px-6
          py-10
          sm:px-10
          sm:py-14
        "
      >
        {/* =====================================
            404 ANIMATION
        ===================================== */}

        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, -2, 2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative inline-block"
        >
          <h1
            className="
              text-[100px]
              sm:text-[150px]
              leading-none
              font-black
              tracking-tight
              bg-gradient-to-r
              from-blue-600
              via-indigo-600
              to-blue-500
              bg-clip-text
              text-transparent
            "
          >
            404
          </h1>

          {/* Floating Alert Icon */}

          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              absolute
              -top-2
              -right-3
              sm:-right-6
              w-10
              h-10
              sm:w-14
              sm:h-14
              rounded-full
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              shadow-lg
              border-4
              border-white
            "
          >
            <AlertCircle className="w-5 h-5 sm:w-7 sm:h-7" />
          </motion.div>
        </motion.div>

        {/* =====================================
            TITLE
        ===================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.5,
          }}
          className="
            mt-4
            text-2xl
            sm:text-3xl
            font-bold
            text-slate-900
          "
        >
          Page Not Found
        </motion.h2>

        {/* =====================================
            DESCRIPTION
        ===================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.5,
          }}
          className="
            mt-3
            text-sm
            sm:text-base
            leading-7
            text-slate-500
            max-w-md
            mx-auto
          "
        >
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </motion.p>

        {/* =====================================
            BUTTONS
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
          }}
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-3
            mt-8
          "
        >
          {/* Home Button */}

          <Link
            href="/"
            className="
              group
              w-full
              sm:w-auto
              inline-flex
              items-center
              justify-center
              gap-2
              px-6
              py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              text-sm
              font-semibold
              shadow-md
              hover:shadow-lg
              transition-all
              duration-200
            "
          >
            <Home
              className="
                w-4
                h-4
                transition-transform
                group-hover:scale-110
              "
            />
            Back to Home
          </Link>

          {/* Go Back */}

          <button
            type="button"
            onClick={() => window.history.back()}
            className="
              group
              w-full
              sm:w-auto
              inline-flex
              items-center
              justify-center
              gap-2
              px-6
              py-3
              rounded-xl
              bg-slate-50
              hover:bg-slate-100
              border
              border-slate-200
              text-slate-700
              text-sm
              font-semibold
              transition-all
              duration-200
            "
          >
            <ArrowLeft
              className="
                w-4
                h-4
                transition-transform
                group-hover:-translate-x-1
              "
            />
            Go Back
          </button>
        </motion.div>

        {/* =====================================
            BOTTOM MESSAGE
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
          className="
            flex
            items-center
            justify-center
            gap-2
            mt-8
            text-xs
            text-slate-400
          "
        >
          <Search className="w-3.5 h-3.5" />
          Check the URL or return to the homepage
        </motion.div>
      </motion.div>
    </main>
  );
};

export default NotFound;
