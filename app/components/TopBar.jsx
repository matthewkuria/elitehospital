"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-[#007BFF] to-[#00B8D9] text-white text-sm py-2 border-b border-white/20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Phone size={16} aria-hidden="true" />
            <span>+1 321-960-4980</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} aria-hidden="true" />
            <span>info@elitecompletecarellc.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} aria-hidden="true" />
            <span>6220 S Orange Blossom Trl Ste 140, Orlando FL</span>
          </div>
        </div>

        {/* Right Section – Social Icons + CTA */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-2 md:mt-0">
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/people/Elite-Complete-Care-LLC/61579755786388/"
              aria-label="Facebook"
              className="hover:text-[#00B8D9] transition"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.youtube.com/@elitecompletecarellc"
              aria-label="YouTube"
              className="hover:text-[#00B8D9] transition"
            >
              <Youtube size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/elite-complete-care-llc/"
              aria-label="LinkedIn"
              className="hover:text-[#00B8D9] transition"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/elitecompletecare/"
              aria-label="Instagram"
              className="hover:text-[#00B8D9] transition"
            >
              <Instagram size={16} />
            </a>
          </div>

          {/* Book Appointment Button */}
          <Link
            href="/appointment"
            className="mt-2 md:mt-0 px-4 py-1 bg-white text-[#007BFF] font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
