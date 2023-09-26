import React from "react";
import SignIn from "@/components/auth/signin/signin";
import { Metadata } from "next";
export const metadata:Metadata= {
  
  title: "SignIn Page",
  description: "Sign in to your account on our website.",
};

const SignInPage = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
