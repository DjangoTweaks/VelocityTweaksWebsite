import React from "react";
import '../index.css'
import {useRouteError} from 'react-router-dom'

export default function ErrorPage()
{
    const error = useRouteError(); 
    console.log(error);

    return <div className="text-white" id="error-page" >
        <h1>Oops</h1>
        Sorry, an unexpected error has occured, please try again. 
    </div>
}