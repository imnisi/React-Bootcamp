import React, { useContext } from "react";
import Contact from "./Contact";
import { AppContext } from "../context/AppContext";

function Profile() {
  const { headerMsg, user, setUser } = useContext(AppContext);

  return (
    <div>
      <h1>{headerMsg}</h1>
      <h2>Profile Component</h2>
      <h2>User Name : {user.name}</h2>
      <h2>User Age : {user.age}</h2>
      <br />
      <br />
      <button
        onClick={() => {
          // setUser({name:"Nisi", age:23})
          // setUser({ ...user, name: "Nisi", age: 24 });
          setUser((prevUser) => ({ ...prevUser, name: "Nisi", age: 25 }));
        }}
      >
        Click Here
      </button>
      <Contact />
    </div>
  );
}

export default Profile;
