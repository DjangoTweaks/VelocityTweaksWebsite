import React from "react";
import ReactDOM from "react-dom/client";
import  Home  from "./pages/Home";
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
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import Cart from "./pages/Cart";
import NavBar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import Layout from "./Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout page={<Home></Home>} ></Layout>,
  },
  {
    path: "/faq",
    element: <Layout page={<FAQ></FAQ>} ></Layout>,
  },
  {
    path: "/store",
    element: <Layout page={<Store></Store>} ></Layout>,
  },
  {
    path: "/contact",
    element: <Layout page={<Contact></Contact>} ></Layout>,
  },
  {
    path: "/login",
    element: <Layout page={<Login></Login>} ></Layout>,
  },
  {
    path: "/signup",
    element:  <Layout page={<Signup/>} ></Layout>,
  },
  {
    path:"/cart",
    element: <Layout page={<Cart/>} ></Layout>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>


      <div className="scroll-smooth" >

      <RouterProvider router={router} />
    
      </div>
    



    


  </React.StrictMode>
);
