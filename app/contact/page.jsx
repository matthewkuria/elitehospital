import React from "react";

const ContactPage = () => {
  return (
    <>
      {/* 🔹 Banner Section */}
      <section
        className="relative flex items-center justify-center h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("/team-of-multiracial-doctors-at-hospital-e1598498378805-1-1536x1026.jpg")',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,123,255,0.6)] to-[rgba(0,184,217,0.5)]" />

        {/* Banner Text */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-md">
            Contact Us
          </h1>
        </div>
      </section>

      {/* 🔹 Contact Section */}
      <section className="min-h-screen bg-[var(--color-surface)] py-20">
        {/* Header */}
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl font-extrabold text-[var(--color-primary)] mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We’re here to provide quality care and answer any questions you may have.
            Reach out to us and our friendly team will respond as soon as possible.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] text-white font-semibold py-3 rounded-lg hover:bg-[var(--color-primary-hover)] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8 text-gray-700">
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                Visit Our Office
              </h3>
              <p>6220 S ORANGE BLOSSOM TRL STE 140 Orlando, FL, United States, Florida 32809</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                Call Us
              </h3>
              <p>+1 321-960-4980</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                Email Us
              </h3>
              <p>info@elitecompletecarellc.com</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                Working Hours
              </h3>
              <p>Mon – Fri: 11:00 AM – 6:00 PM</p>
              <p>Saturday     : 9:00 AM –  2:00 PM</p>
            </div>
          </div>         
        </div>
        <div className="">
           {/* Embedded Google Map */}
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Elite Complete Care LLC Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.437432415659!2d-81.39978662583879!3d28.46637029160925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77d9591f97a79%3A0x815ec85f5646914d!2sElite%20Complete%20Care%20LLC!5e0!3m2!1sen!2snl!4v1761508175649!5m2!1sen!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
