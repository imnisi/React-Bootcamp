import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Contact() {
  const { phoneNumber, email } = useContext(AppContext);

  return (
    <div>
      <h3>Contact Component</h3>
      <h4>Phone No: {phoneNumber}</h4>
      <h4>Email: {email}</h4>
    </div>
  );
}

export default Contact;
