"use client";
import React, { useState } from "react";



// export const metadata = {
//   title: "Book an Appointment | Elite Complete Care LLC",
//   description:
//     "Schedule your appointment with Elite Complete Care LLC today. Compassionate and professional healthcare services tailored to your needs.",
//   keywords:
//     "Elite Complete Care, medical appointment, home care, healthcare, clinic, patient care",
// };


const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", formData);
    alert("Your appointment request has been submitted!");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,40,100,0.7), rgba(0,120,180,0.7)), url('/appointment-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Book an Appointment
        </h1>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Form */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Schedule Your Visit
          </h2>
          <p className="text-gray-600 mb-6">
            At <span className="text-primary font-medium">Elite Complete Care LLC</span>,
            we make it simple to schedule your appointment online. Fill out the
            form below, and one of our healthcare specialists will reach out to
            confirm your booking.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Additional Notes
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Describe your health concern..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
            >
              Submit Appointment Request
            </button>
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="flex flex-col justify-center bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Visit Our Clinic
          </h3>
          <p className="text-gray-600 mb-5">
            Our clinic provides compassionate and professional healthcare
            services for individuals and families.
          </p>

          <div className="mb-6">
            <p className="font-medium text-gray-700">📍 Address:</p>
            <p>6220 S ORANGE BLOSSOM TRL STE 140 Orlando, FL, United States, Florida 32809</p>
          </div>

          <div className="mb-6">
            <p className="font-medium text-gray-700">📞 Phone:</p>
            <p>+1 321-960-4980</p>
          </div>

          <div className="mb-6">
            <p className="font-medium text-gray-700">📧 Email:</p>
            <p>info@elitecompletecarellc.com</p>
          </div>

          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.437432415659!2d-81.39978662583879!3d28.46637029160925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77d9591f97a79%3A0x815ec85f5646914d!2sElite%20Complete%20Care%20LLC!5e0!3m2!1sen!2snl!4v1761508175649!5m2!1sen!2snl"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Appointment;
