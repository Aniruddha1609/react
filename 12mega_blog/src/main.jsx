import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Authlayout } from "./components/index.js";
import { Login } from "./components/index.js";
import Home from "./components/pages/Home.jsx";
import Addpost from "./components/pages/Addpost.jsx";
import Signup from "./components/pages/Signup.jsx";
import Editpost from "./components/pages/Editpost.jsx";
import Post from "./components/pages/Post.jsx";
import Allpost from "./components/pages/Allpost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <Authlayout authentication={false}>
            <Login />
          </Authlayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <Authlayout authentication={false}>
            <Signup />
          </Authlayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <Authlayout authentication>
            {" "}
            <Allpost />
          </Authlayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <Authlayout authentication>
            {" "}
            <Addpost />
          </Authlayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Authlayout authentication>
            {" "}
            <Editpost />
          </Authlayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
