import React from "react";
import { useRouteError } from "react-router-dom";



export default function SomethingWentWrong() 
{
    let error = useRouteError(); 
    console.log(error);


  return <div className="bg-gradient-to-b from-[#000000] from-10% via-[#1a0404] via-40% to-[#011422] to-70% bg-blend-screen" >

    <div className="h-screen" >
      
      <div className="text-white font-Inter font-bold flex justify-center text-7xl mt-24" >
       404 Page Not Found


      </div>

      <div className="w-full flex justify-center pt-10 font-Inter text-gray-300" >

      The page you requested does not exist.



      </div>
      
      <div className="text-gray-300 text-md flex justify-center mt-12" >
        Found a bug? Please contact @DjangoTweaks on <a className="mx-1" >Twitter </a>  or  <a className="mx-1" >Discord</a>
      </div>     
  
    </div>

  </div>
  


}
