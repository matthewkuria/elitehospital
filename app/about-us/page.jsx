import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Elite Complete Care LLC</title>
        <meta
          name="description"
          content="Elite Complete Care LLC provides professional home health and wound care services with compassion, excellence, and integrity. Learn more about our mission, values, and what our clients say about our care."
        />
        <meta
          name="keywords"
          content="Elite Complete Care LLC, home healthcare, wound care, family health, medical services, professional care, nursing, home health team, client testimonials"
        />
        <meta name="author" content="Elite Complete Care LLC" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero / Banner Section */}
        <section
          className="relative h-[40vh] flex items-center justify-center"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0,123,255,0.75), rgba(0,184,217,0.75)), url("/healthcare-team.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-5xl font-bold text-white">About Us</h1>
        </section>

        {/* Who We Are Section */}
        <section className="py-16 px-6 lg:px-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-gray-800 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At <strong>Elite Complete Care LLC</strong>, we are passionate
                about improving lives through compassionate, high-quality home
                healthcare. Our goal is to make every patient feel supported,
                respected, and confident in the care they receive.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a team of skilled healthcare professionals, Elite Complete
                Care LLC specializes in <strong>wound care</strong>,{" "}
                <strong>home health services</strong>, and{" "}
                <strong>rehabilitation support</strong>. We combine advanced
                medical practices with a personal touch — ensuring each patient
                receives individualized attention and exceptional outcomes.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/doctor-smiling-team.jpg"
                alt="Elite Complete Care LLC medical team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="bg-white py-16 px-6 lg:px-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 text-center">
            <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver trusted, compassionate, and high-quality healthcare
                that enhances the well-being of individuals and families through
                excellence, empathy, and innovation.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as a leading provider of home healthcare and
                wound management — setting new standards for clinical excellence
                and compassionate service.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">
                Our Values
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Compassion, Integrity, Professionalism, Teamwork, and
                Innovation—these are the core principles that guide our
                interactions and shape our patient experience.
              </p>
            </div>
          </div>
        </section>

        {/* What Our Clients Say Section */}
        <section className="py-16 px-6 lg:px-20 bg-[var(--color-surface)]">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600">
              Hear from our patients and their families about how Elite Complete
              Care LLC has made a difference in their health and recovery.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jane Miller",
                text: "Elite Complete Care provided outstanding wound care for my father. The nurses were kind, patient, and professional — we truly felt cared for.",
                rating: 5,
              },
              {
                name: "Mark Robinson",
                text: "Their team made home health visits easy and stress-free. They always arrived on time and went above and beyond to ensure comfort and progress.",
                rating: 5,
              },
              {
                name: "Linda Perez",
                text: "I’m grateful for the excellent post-surgery care I received. The staff is knowledgeable, compassionate, and dedicated to patient recovery.",
                rating: 5,
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 transition"
              >
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  “{review.text}”
                </p>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-6 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600">
              Our medical professionals bring expertise, empathy, and commitment
              to providing the highest level of patient care.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Medical Officer",
                img: "/doctor1.jpg",
              },
              {
                name: "Dr. Daniel Lee",
                role: "Clinical Director",
                img: "/doctor2.jpg",
              },
              {
                name: "Dr. Maria Gonzales",
                role: "Wound Care Specialist",
                img: "/doctor3.jpg",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden"
              >
                <img
                  src={member.img}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h4>
                  <p className="text-[var(--color-secondary)]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
