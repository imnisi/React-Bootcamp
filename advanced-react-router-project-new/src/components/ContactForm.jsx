import React from "react";

function ContactForm() {
  return (
    <div>
      <form className="max-w-md !mx-auto !my-8 !p-4 border rounded shadow">
        <input
          type="text"
          placeholder="Your Name"
          className="border !p-2 rounded w-full !mb-4"
        />
        <br />
        <input
          type="email"
          placeholder="Your Email"
          className="border !p-2 rounded w-full !mb-4"
        />
        <br />
        <textarea
          placeholder="Your Message"
          className="border !p-2 rounded w-full !mb-4"
        ></textarea>
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white !p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
