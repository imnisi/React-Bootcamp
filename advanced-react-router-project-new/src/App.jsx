import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router";
import {
  About,
  Home,
  Layout,
  Products,
  Jobs,
  ContactLayout,
  ContactInfo,
  ContactForm,
  NotFoundPage,
  JobsLayout,
  JobDetails,
  JobAPIError,
} from "../public/index.js";
import { jobsLoader } from "../public/jobsLoader.js";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="jobs"
          element={<JobsLayout />}
          errorElement={<JobAPIError />}
        >
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route
            path="jobDetails/:jobId"
            element={<JobDetails />}
            loader={jobsLoader}
          />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
