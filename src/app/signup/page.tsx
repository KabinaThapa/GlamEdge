import React from "react";

import Signup from "@/components/auth/signup/signup";
import { Metadata } from "next";
export const metadata:Metadata= {
  
  title: "SignUp Page",
  description: "Create a new account on our website.",
};

const SignInPage = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default SignInPage;
