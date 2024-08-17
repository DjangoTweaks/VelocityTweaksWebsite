import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import { FAQ } from "./pages/FAQ";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { Store } from "./pages/Store";
import { Contact } from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import NavBar from "../../Velocity Tweaks (Client Side)/src/components/ui/NavBar/NavBar.jsx";
import Footer from "./components/ui/Footer";
import Layout from "./Layout";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import SomethingWentWrong from "./pages/SomethingWentWrong";
import { ToastContainer } from "react-toastify";
import Testing from "./pages/Testing";
import ReviewBasic from "./pages/ReviewBasic";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import LoginNew from "./pages/LoginNew/LoginNew"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout page={<Home></Home>}></Layout>,
    errorElement: (
      <Layout page={<SomethingWentWrong></SomethingWentWrong>}></Layout>
    ),
  },
  {
    path: "/faq",
    element: <Layout page={<FAQ></FAQ>}></Layout>,
  },
  {
    path: "/store",
    element: <Layout page={<Store></Store>}></Layout>,
  },
  {
    path: "/contact",
    element: <Layout page={<Contact></Contact>}></Layout>,
  },
  {
    path: "/login",
    element: <Layout page={<LoginNew></LoginNew>}></Layout>,
  },
  {
    path: "/register",
    element: <Layout page={<Register></Register>}></Layout>,
  },
  {
    path: "/forgot",
    element: <Layout page={<ResetPassword></ResetPassword>}></Layout>,
  },
  {
    path: "/cart",
    element: <Layout page={<Cart />}></Layout>,
  },
  {
    path: "/review/basic",
    element: <Layout page={<ReviewBasic></ReviewBasic>}></Layout>
  },
  {
    path: "/review/premium",
    element: <Layout page={<ReviewBasic></ReviewBasic>}></Layout>
  },
  {
    path: "/admin/login",
    element: <Layout page={<AdminLogin></AdminLogin>} ></Layout>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="scroll-smooth">
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>
  </React.StrictMode>
);
