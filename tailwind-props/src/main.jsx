import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Hero from "../src/Component/Hero.jsx";
import Card from "./Component/Card.jsx";
import img1 from "./assets/Img1.jpg";
import img2 from "./assets/Img2.png";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Hero /> */}
    <div className="flex gap-4">
      <Card userName={"Nishant Kumar"} image={img1} btnText={"See him"} />
      <Card userName={"Surbhi Deshmukh"} image={img2} btnText={"See her"} />
    </div>
  </StrictMode>
);
