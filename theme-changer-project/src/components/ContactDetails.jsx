import React from "react";
import { useLoaderData } from "react-router";
import { AppContext } from "../context/ApiContext";
import { useContext } from "react";

function ContactDetails() {
  const { theme } = useContext(AppContext);
  const contactDetailsData = useLoaderData();
  console.log(contactDetailsData);

  return (
    <div>
      <h1>Contact Details</h1>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          gap: 20,
          justifyContent: "center",
        }}
      >
        {contactDetailsData.map((contact) => (
          <div
            key={contact.id}
            style={{
              border: theme === "white" ? "1px solid black" : "1px solid white",
              padding: 20,
              borderRadius: 10,
              width: "30%",
            }}
          >
            <h2>{contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Address: {contact.address} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactDetails;
