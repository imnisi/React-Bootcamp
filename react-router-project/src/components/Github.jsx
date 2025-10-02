import React from "react";
import { useLoaderData } from "react-router";
// import { useEffect, useState } from "react";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/imnisi")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

    // A better optimized way: using Loader method in Routing for fetch data from API
    
    const data = useLoaderData();

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white text-3xl">
        Github Username: {data.name}
      </div>
      <div className="text-center m-4 bg-gray-600 text-white text-3xl">
        Github followers: {data.followers}
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <img
          src={data.avatar_url}
          alt="Github profile picture"
          width={200}
          height={200}
        />
      </div>
    </>
  );
}

export default Github;
