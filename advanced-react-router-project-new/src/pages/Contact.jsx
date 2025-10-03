import React from "react";
import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6"
      style={{ minHeight: "92vh" }}
    >
      <div className="bg-white/20 backdrop-blur-lg shadow-xl rounded-3xl !p-10 max-w-2xl text-center border border-white/30">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-md !mb-6">
          Contact Page
        </h1>
        
        <p className="text-lg text-white leading-relaxed tracking-wide !mb-8">
          Have questions? We'd love to hear from you! Reach out to us for
          support, inquiries, or collaboration opportunities. We'll get back to
          you quickly.
        </p>

        {/* Buttons Section */}
        <div className="flex gap-4 justify-center !mt-8">
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white !px-8 !py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:from-blue-600 hover:to-blue-700 transition duration-300 cursor-pointer"
            onClick={() => navigate("info")}
          >
            Go to Contact Form
          </button>
          
          <button
            className="bg-gradient-to-r from-green-500 to-green-600 text-white !px-8 !py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:from-green-600 hover:to-green-700 transition duration-300 cursor-pointer"
            onClick={() => navigate("form")}
          >
            Go to Contact Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;