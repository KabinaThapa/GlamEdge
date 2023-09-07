import React from "react";
import SignIn from "@/components/auth/signin/signin";
export const metadata = {
  
  title: "SignUp Page",
  description: "Create a new account on our website.",
};

const SignInPage = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
