import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import Home from "./Home";

const anotherElement = "Me and React";

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
  },
  "Click me to visit google",
  anotherElement,
);

// function App() {
//   return (
//     <>                               ////  we can delcare the function here
//       <h1>React App</h1>
//       <Home />
//     </>
//   );
// }

createRoot(document.getElementById("root")).render(
  // App(),                            ////  And simply call the function here

  // reactElement,                    ////   Or simply can put the element here directly

  <App />,
);
