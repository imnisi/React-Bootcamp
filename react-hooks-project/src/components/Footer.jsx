import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Footer() {
  const { phoneNumber, email } = useContext(AppContext);

  return (
    <div>
      <h2>Footer Component</h2>
      <h4>Phone No: {phoneNumber}</h4>
      <h4>Email: {email}</h4>
    </div>
  );
}

export default Footer;
