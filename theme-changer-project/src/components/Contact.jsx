import React from "react";
import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      <button
        style={{
          background: "red",
        }}
        onClick={() => {
          navigate("contact-details");
        }}
      >
        Click Here to go on contact details
      </button>
    </div>
  );
}

export default Contact;
