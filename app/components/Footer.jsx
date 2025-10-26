import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn,  FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-text-dark)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-secondary)]">
            Elite Complete Care LLC
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Delivering trusted, compassionate, and high-quality healthcare for
            individuals and families. Your wellness is our priority.
          </p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-6">
            <a
               href="https://www.facebook.com/people/Elite-Complete-Care-LLC/61579755786388/"
              className="p-2 bg-[var(--color-secondary)] rounded-full hover:bg-[var(--color-primary)] transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
               href="https://www.instagram.com/elitecompletecare/"
              className="p-2 bg-[var(--color-secondary)] rounded-full hover:bg-[var(--color-primary)] transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
             href="https://www.linkedin.com/company/elite-complete-care-llc/"
              className="p-2 bg-[var(--color-secondary)] rounded-full hover:bg-[var(--color-primary)] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@elitecompletecarellc"
              className="p-2 bg-[var(--color-secondary)] rounded-full hover:bg-[var(--color-primary)] transition"
              aria-label="Twitter"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/about-us" className="hover:text-[var(--color-secondary)] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[var(--color-secondary)] transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/our-doctors" className="hover:text-[var(--color-secondary)] transition">
                Our Doctors
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--color-secondary)] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Wound Care Management</li>
            <li>Home Health Services</li>
            <li>Rehabilitation Therapy</li>
            <li>Senior Care Assistance</li>
            <li>Telehealth & Telemedicine</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">
            <strong>Address:</strong><br />
            6220 S ORANGE BLOSSOM TRL STE 140 Orlando, FL,<br />
            United States, Florida 32809
          </p>
          <p className="text-gray-300 mt-3">
            <strong>Phone:</strong> +1 321-960-4980
          </p>
          <p className="text-gray-300">
            <strong>Email:</strong> info@elitecompletecarellc.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Elite Complete Care LLC. All rights reserved.
        </p>
        <p className="mt-2">
          Designed with ❤️ by &nbsp;
          <span className="text-[var(--color-secondary)] font-semibold">
            Brandriko Digital Solutions
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
