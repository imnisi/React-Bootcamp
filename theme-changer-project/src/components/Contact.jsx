import React from "react";
import { useNavigate, Link } from "react-router";

function Contact() {
  // const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Page</h1>
      {/* <button
        style={{
          background: "red",
        }}
        onClick={() => {
          navigate("contact-details");
        }}
      >
        Click Here to go on contact details
      </button> */}
      <Link to="contact-details">Click Here to go on contact details</Link>
    </div>
  );
}

export default Contact;
