import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
// import Layout from "./components/Layout";
import Contact from "./components/Contact";
import ContactDetails from "./components/ContactDetails";
import Layout from "./components/Layout";
import About from "./components/About";
import Github from "./components/Github";
import ContactLayout from "./components/ContactLayout";
import { AppContext } from "./context/ApiContext";
import { useContext } from "react";

function App() {
  const { theme, setTheme } = useContext(AppContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route path="github" element={<Github />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="contact-details" element={<ContactDetails />} />
        </Route>
      </Route>
    )
  );

  if (theme === "black") {
    document.body.style.background = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }

  return (
    <>
      {<RouterProvider router={router} />}
      <div style={{ display: "flex", gap: 15 }}>
        <button
          onClick={() => {
            setTheme("white");

          }}
        >
          Click here for Light Theme
        </button>
        <button
          onClick={() => {
            setTheme("black");
          }}
        >
          Click here for Dark Theme
        </button>
      </div>
    </>
  );
}

export default App;
