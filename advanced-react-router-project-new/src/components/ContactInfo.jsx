import React from "react";

function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center !my-8">
        Contact Information
      </h2>
      <p className="text-center text-lg">You can reach us at:</p>
      <ul className="text-center text-lg">
        <li>
          Email:
          <a href="mailto:info@example.com">info@example.com</a>
        </li>
        <li>
          Email:
          <a href="mailto:info@example.com">info@example.com</a>
        </li>
        <li>
          Phone:
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </li>
        <li>
          Address:
          <a href="https://www.google.com/maps/place/123+Main+St,+Anytown,+USA">
            123 Main St, Anytown, USA
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
