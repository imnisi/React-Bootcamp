import React from "react";

function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Get in <span className="text-orange-700">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We'd love to hear from you! Fill out the form to start a
            conversation, and our team will get back to you as soon as possible.
          </p>

          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-4 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-7 h-7 text-orange-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="font-medium">
                Acme Inc, Street, State, Postal Code
              </p>
            </div>

            <div className="flex items-center gap-4 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-7 h-7 text-orange-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"
                />
              </svg>
              <p className="font-medium">+44 1234567890</p>
            </div>

            <div className="flex items-center gap-4 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-7 h-7 text-orange-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="font-medium">info@acme.org</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form className="bg-white rounded-2xl shadow-lg p-8 space-y-5 border border-gray-100">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 transition"
            />
          </div>

          <div>
            <label
              htmlFor="tel"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id="tel"
              type="tel"
              placeholder="Enter your phone number"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message here..."
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-3 rounded-xl hover:bg-orange-700 transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
