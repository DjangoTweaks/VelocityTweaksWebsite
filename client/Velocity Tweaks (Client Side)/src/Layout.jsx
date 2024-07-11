import React from "react";
import NavBar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import Home from "./pages/Home"
import { RecoilRoot } from "recoil";


export default function Layout(props)
{
    return <div className="text-white">
        <RecoilRoot>
        <NavBar></NavBar>
        {props.page}
        <Footer></Footer>
        </RecoilRoot>
    </div>
}