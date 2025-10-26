import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      specialty: "Internal Medicine & Wound Care Specialist",
      img: "/doctor1.jpg",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Dr. Daniel Lee",
      role: "Clinical Director",
      specialty: "Geriatric Medicine & Rehabilitation",
      img: "/doctor2.jpg",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Dr. Maria Gonzales",
      role: "Wound Care Specialist",
      specialty: "Advanced Wound & Tissue Healing",
      img: "/doctor3.jpg",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Dr. Michael Carter",
      role: "Home Health Physician",
      specialty: "Home-Based Patient Care & Monitoring",
      img: "/doctor4.jpg",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Dr. Emily Davis",
      role: "Therapy Director",
      specialty: "Physical & Occupational Therapy",
      img: "/doctor5.jpg",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
    {
      name: "Dr. Anthony Green",
      role: "Medical Advisor",
      specialty: "Family Medicine & Chronic Care",
      img: "/doctor6.jpg",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  ];

  return (
    <>
      <Head>
        <title>Our Doctors | Elite Complete Care LLC</title>
        <meta
          name="description"
          content="Meet the experienced and compassionate team of doctors at Elite Complete Care LLC. Our medical experts are committed to providing high-quality wound care and home health services."
        />
        <meta
          name="keywords"
          content="Elite Complete Care LLC, doctors, healthcare professionals, wound care specialists, home health physicians, rehabilitation team"
        />
      </Head>

      {/* Banner Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,123,255,0.75), rgba(0,184,217,0.75)), url("/medical-team-banner.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4">Our Doctors</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Compassionate professionals dedicated to your health and healing.
          </p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Meet Our Medical Experts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden text-center"
              >
                <Image
                  src={doc.img}
                  alt={doc.name}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                    {doc.name}
                  </h3>
                  <p className="text-secondary font-medium">{doc.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    {doc.specialty}
                  </p>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-4 mt-5">
                    <a
                      href={doc.facebook}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-secondary hover:text-white transition"
                      aria-label={`${doc.name} Facebook`}
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={doc.linkedin}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-secondary hover:text-white transition"
                      aria-label={`${doc.name} LinkedIn`}
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href={doc.instagram}
                      className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-secondary hover:text-white transition"
                      aria-label={`${doc.name} Instagram`}
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
