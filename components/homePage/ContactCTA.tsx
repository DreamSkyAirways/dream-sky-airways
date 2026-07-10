"use client";

import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

const ContactCTA = () => {
return ( <section className="py-20 bg-gradient-to-r from-blue-950 via-blue-950 to-blue-800 relative overflow-hidden">

  {/* Background Blur */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

  <div className="container mx-auto px-4 relative z-10">

    <div className="max-w-5xl mx-auto text-center">

      <span className="inline-block px-4 py-2 bg-white/10 text-blue-200 rounded-full text-sm font-medium backdrop-blur-sm">
        Start Your Journey Today
      </span>

      <h2 className="text-4xl md:text-6xl font-bold text-white mt-6 leading-tight">
        Ready For Your Next
        <span className="block text-blue-300">
          Dream Vacation?
        </span>
      </h2>

      <p className="text-blue-100 text-lg mt-6 max-w-3xl mx-auto">
        Discover amazing destinations, exclusive holiday packages,
        affordable flights, and unforgettable travel experiences with
        Dream Sky Airways.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300"
        >
          Book Your Trip
          <ArrowRight size={18} />
        </Link>

        <a
          href="tel:+917291000329"
          className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white rounded-2xl hover:bg-white/10 transition-all duration-300"
        >
          <Phone size={18} />
          Call Now
        </a>

      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
          <div className="flex items-center justify-center mb-4">
            <Phone className="text-blue-300" size={28} />
          </div>

          <h3 className="text-white font-semibold text-xl mb-2">
            Call Us
          </h3>

          <p className="text-blue-100">
            +91 72910 00329
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
          <div className="flex items-center justify-center mb-4">
            <Mail className="text-blue-300" size={28} />
          </div>

          <h3 className="text-white font-semibold text-xl mb-2">
            Email Us
          </h3>

          <p className="text-blue-100">
            info@dreamskyairways.com
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

);
};

export default ContactCTA;

