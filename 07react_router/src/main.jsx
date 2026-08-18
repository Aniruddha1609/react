import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Github, { getGithubUserInfo } from "./components/github/Github";
import Contact from "./components/contact/contact";
import { createRoot } from "react-dom/client";
import About from "./components/about/About";
import Home from "./components/home/Home";
import User from "./components/user/User";
import { StrictMode } from "react";
import Layout from "./Layout";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact-us",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route
        loader={getGithubUserInfo}
        path="github"
        element={<Github />}
      />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
