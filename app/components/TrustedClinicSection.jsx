"use client";

import Image from "next/image";
import Link from "next/link";

export default function TrustedClinicSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#007BFF] to-[#00B8D9] py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        {/* Left Side Text */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Medical Clinic that you can Trust
          </h2>
          <p className="text-lg mb-8 leading-relaxed text-white/90">
            At <span className="font-semibold">Elite Complete Care LLC</span>, we’re
            dedicated to providing exceptional healthcare with compassion,
            professionalism, and advanced medical expertise. From preventive care
            to urgent medical attention, our team ensures you and your loved ones
            receive quality treatment in a safe and supportive environment.
          </p>
        
                  <Link href="/appointment"
                  className="px-6 py-3 bg-white text-[var(--color-primary)] font-bold rounded-full hover:bg-gray-100 transition">
                Book an Appointment
            </Link>
        
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 relative">
          <Image
            src="/images/trusted-clinic.jpg" // replace with your own image
            alt="Trusted Clinic"
            width={550}
            height={400}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
