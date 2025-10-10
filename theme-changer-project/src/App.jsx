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

function App() {
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

  return <>{<RouterProvider router={router} />}</>;
}

export default App;
