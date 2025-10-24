import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative flex items-center h-[95vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("/team-of-multiracial-doctors-at-hospital-e1598498378805-1-1536x1026.jpg")',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,123,255,0.65)] to-[rgba(0,184,217,0.65)]" />

      {/* Content (left aligned) */}
      <div className="relative z-10 max-w-2xl px-6 sm:px-12 lg:px-24">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
          HealthCare for Your Family’s{" "}
          <span className="text-[var(--color-secondary)]">Health</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-100 mb-8 drop-shadow-sm">
          Providing top-notch home care services tailored to your needs. Our dedicated
          team ensures compassionate and professional care for you and your loved ones.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-[var(--color-primary)] rounded-full font-medium hover:bg-[var(--color-surface)] hover:text-[var(--color-primary-hover)] transition duration-300 shadow-md"
          >
            Contact Us
          </Link>
          <Link
            href="/about-us"
            className="px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-[var(--color-primary)] transition duration-300 shadow-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
