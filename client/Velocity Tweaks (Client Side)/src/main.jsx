import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Home } from "./pages/Home";
import { FAQ } from "./pages/FAQ";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Store } from "./pages/Store";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "faq",
    element: <FAQ />,
  },
  {
    path: "store",
    element: <Store />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />

  </React.StrictMode>
);
