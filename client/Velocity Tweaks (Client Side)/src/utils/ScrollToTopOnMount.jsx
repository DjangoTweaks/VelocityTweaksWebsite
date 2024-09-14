import React from "react";
import { useEffect } from "react";
export default function ScrollToTopOnMount()
{
  useEffect(()=>{
    window.scrollTo(0,0)
  }, []);

  return null;
}
