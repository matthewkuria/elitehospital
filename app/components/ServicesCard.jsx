import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesCard = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Medical Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          At{" "}
          <span className="text-[var(--color-primary)] font-medium">
            Elite Complete Care LLC
          </span>
          , we provide a range of healthcare services designed to support your
          family’s health and well-being with compassion and expertise.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg p-8 flex flex-col items-center transition">
            <Image
              src="/images/icons/primary-care.png"
              alt="Primary Care"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Primary Care</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive family health services focused on prevention,
              wellness, and personalized care.
            </p>
            <Link
              href="/services"
              className="px-5 py-2 bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-primary-hover)] transition"
            >
              Learn More
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg p-8 flex flex-col items-center transition">
            <Image
              src="/images/icons/vaccine.png"
              alt="Vaccinations"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Vaccinations</h3>
            <p className="text-gray-600 mb-6">
              Protect yourself and your loved ones with our wide range of
              recommended vaccines and immunizations.
            </p>
            <Link
              href="/services"
              className="px-5 py-2 bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-primary-hover)] transition"
            >
              Learn More
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg p-8 flex flex-col items-center transition">
            <Image
              src="/images/icons/consultation.png"
              alt="Specialist Care"
              width={80}
              height={80}
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Specialist Care</h3>
            <p className="text-gray-600 mb-6">
              Access experienced specialists across multiple medical fields for
              expert diagnosis and treatment.
            </p>
            <Link
              href="/services"
              className="px-5 py-2 bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-primary-hover)] transition"
            >
              Learn More
            </Link>
          </div>

          {/* Card 4 - Emergency Service */}
          <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white rounded-2xl shadow-lg p-8 flex flex-col justify-center items-center transition transform hover:scale-105">
            <Image
              src="/images/icons/emergency.png"
              alt="Emergency Service"
              width={80}
              height={80}
              className="mb-4 invert"
            />
            <h3 className="text-3xl font-semibold mb-3">Emergency Service</h3>
            <p className="text-lg mb-4">
              Available 24/7 for urgent care and emergencies. Don’t wait — your
              health is our priority.
            </p>
            <Link
              href="tel:+1 321-960-4980"
              className="px-6 py-3 bg-white text-[var(--color-primary)] font-bold rounded-full hover:bg-gray-100 transition"
            >
              Call Us NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
