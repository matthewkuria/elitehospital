"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of services does Elite Complete Care LLC provide?",
      answer:
        "We offer a wide range of healthcare services including wound care management, home care, skilled nursing, rehabilitation therapy, and senior care assistance. Each service is personalized to meet your medical and personal needs.",
    },
    {
      question: "Do you provide in-home care services?",
      answer:
        "Yes, our trained professionals provide compassionate care directly at your home. This allows patients to recover and receive medical attention in a comfortable and familiar environment.",
    },
    {
      question: "How can I schedule an appointment?",
      answer:
        "You can schedule an appointment easily by visiting our Contact page, calling our office, or filling out our online inquiry form. Our team will reach out to confirm your request.",
    },
    {
      question: "Do you accept insurance plans?",
      answer:
        "We work with multiple insurance providers. Please contact our office to verify coverage and eligibility based on your specific plan.",
    },
    {
      question: "Is your staff licensed and qualified?",
      answer:
        "Absolutely. All our caregivers, nurses, and therapists are licensed professionals with extensive experience in providing top-quality healthcare services.",
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services | Elite Complete Care LLC</title>
        <meta
          name="description"
          content="Discover comprehensive healthcare services offered by Elite Complete Care LLC. From wound care to rehabilitation, we provide compassionate, professional care tailored to your needs."
        />
        <meta
          name="keywords"
          content="Elite Complete Care LLC, healthcare, wound care, home nursing, therapy, senior care, rehabilitation, medical services"
        />
      </Head>

      {/* Banner Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,60,90,0.6), rgba(0,30,60,0.8)), url("/healthcare-team.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Providing comprehensive care solutions to meet your medical and
            personal needs with compassion and professionalism.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wound Care Management",
                desc: "Advanced wound care treatments for optimal healing and prevention of complications.",
                img: "/wound-care.jpg",
              },
              {
                title: "Home Care Services",
                desc: "Professional caregivers providing personalized care directly at your home.",
                img: "/home-care.jpg",
              },
              {
                title: "Rehabilitation & Therapy",
                desc: "Programs designed to help you regain strength, mobility, and independence.",
                img: "/rehabilitation.jpg",
              },
              {
                title: "Skilled Nursing Care",
                desc: "High-quality medical care for chronic illness and post-surgery recovery.",
                img: "/nursing-care.jpg",
              },
              {
                title: "Senior Care Assistance",
                desc: "Compassionate support services promoting safety and dignity for seniors.",
                img: "/senior-care.jpg",
              },
              {
                title: "Medical Support Services",
                desc: "Medication management, monitoring, and health education programs.",
                img: "/medical-support.jpg",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="rounded-xl mb-4"
                />
                <h3 className="text-2xl font-semibold mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.desc}
                </p>
                <Link
                  href="/contact"
                  className="text-secondary font-medium hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white dark:bg-gray-800 py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <span className="font-medium text-lg text-gray-800 dark:text-gray-200">
                    {faq.question}
                  </span>
                  <span className="text-secondary text-2xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-6 py-4 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
