import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import { FAQ } from "./pages/FAQ";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { Store } from "./pages/Store/Store";
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
import LoginNew from "./pages/LoginNew/LoginNew";
import ProtectedRoutes from "./utils/ProtectedRoute";
import UserDashboard from "./pages/User/Dashboard/Dashboard";
import UserProfileView from "./pages/User/Dashboard/UserProfileView";
import UserOrderView from "./pages/User/Dashboard/UserOrderView";
import Review from "./pages/User/Dashboard/Review";
import Legal from "./pages/Legal";
import TOS from "./components/ui/TOS";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import CookiePolicy from "./components/CookiePolicy";
import MyKeys from "./pages/User/Dashboard/MyKeys";
import Confirmation from "./pages/Payment/Confirmation";
import Cancellation from "./pages/Payment/Cancellation";
import axios from "axios";
import { domainName } from "./utils/domainName";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout page={<Home></Home>}></Layout>,
    errorElement: (
      <Layout page={<SomethingWentWrong></SomethingWentWrong>}></Layout>
    ),
  },
  {
    element: <Layout page={<ProtectedRoutes />}></Layout>,
    children: [
      {
        path: "/user/dashboard",
        element: <UserDashboard />,
        children: [
          {
            index: true,
            element: <Navigate to="profile" replace />,
          },
          {
            path: "profile",
            element: <UserProfileView />,
          },
          {
            path: "orders",
            element: <UserOrderView />,
          },
          {
            path: "reviews",
            element: <Review />,
          },
          {
            path: "keys",
            element: <MyKeys />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout/success",
        element: <Confirmation />,
        loader: async () =>{
          const response = await axios.get(domainName + "/auth/check-auth", {
            withCredentials: true,
          });
          return response.data.orders[response.data.orders.length-1]; 
        }
      },
      {
        path: "/checkout/cancel",
        element: <Cancellation />,
      },
    ],
  },
  {
    path: "/legal",
    element: <Layout page={<Legal Heading="Legal" />}></Layout>,
    children: [
      {
        index: true,
        element: <Navigate to="terms-of-service" replace />,
      },
      {
        path: "terms-of-service",
        element: <TOS />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "refund-policy",
        element: <RefundPolicy />,
      },
      {
        path: "cookie-policy",
        element: <CookiePolicy />,
      },
    ],
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
    path: "/review/basic",
    element: <Layout page={<ReviewBasic></ReviewBasic>}></Layout>,
  },
  {
    path: "/review/premium",
    element: <Layout page={<ReviewBasic></ReviewBasic>}></Layout>,
  },
  {
    path: "/admin/login",
    element: <Layout page={<AdminLogin></AdminLogin>}></Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
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
    </RecoilRoot>
  </React.StrictMode>
);
