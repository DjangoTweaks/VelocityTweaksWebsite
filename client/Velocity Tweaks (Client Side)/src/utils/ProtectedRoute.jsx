import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authStateAtom } from "../services/state/store";
import Cookies from "js-cookie";

export default function ProtectedRouter() {
  const isAuthenticated = useRecoilValue(authStateAtom);
  if (isAuthenticated === null) {
    return (
      <div className="text-white text-center text-4xl font-inter h-screen flex justify-center items-center"></div>
    );
  }
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
