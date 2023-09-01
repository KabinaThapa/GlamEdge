"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Inputfield from "@/components/inputfield";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { BsLock } from "react-icons/bs";
import { PiGoogleLogo } from "react-icons/pi";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { useRouter } from "next/navigation";

interface FormValues {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const initialValues: FormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Please enter a valid email address."),
    password: Yup.string().required("Please enter a correct password."),
  });

  const router = useRouter();

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await axios.post("http://localhost:4004/login", {
        email: values.email,
        password: values.password,
      });

     
      console.log(response.data);
     
      localStorage.setItem("session-token", response.data.accessToken);
      localStorage.setItem("email", response.data.user.email);
      console.log(response.data.user.email);
      toast.success("Successfully signed in");
      router.push("/");
      console.log(response.data.user.email);
    } catch (error) {
      toast.error("Could not sign in");
    }
  };

  return (
    <>
    <div className=" min-h-screen  w-full  p-[2%] ">
      <div className='mx-auto grid grid-cols-4 place-items-center '>
        <div className='w-full h-full col-span-3'>
        <img className='object-cover h-full w-full' src={'https://minion-vinovatheme.myshopify.com/cdn/shop/files/s-9-1_2048x.jpg?v=1619166921'}/>
        </div>
        <div className="ml-[-150px] z-[100] w-[28rem] mt-8 mb-8 bg-timber ">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values, handleChange }) => {
          return (
            <>
              <Form
                onSubmit={handleSubmit}
                className="  flex flex-col justify-center gap-6 text-lg font-opensans p-6"
              >
                <h1 className="text-3xl text-center">SignIn</h1>
                <Inputfield
                  type="text"
                  name="email"
                  label="Email Address"
                  icon={<FiUser />}
                />
                <Inputfield
                  type="password"
                  name="password"
                  label="Password"
                  icon={<BsLock />}
                />
                <p className="text-right ">Forgot Password?</p>

                <button
                  type="submit"
                  className="w-full  p-2 bg-wenge rounded text-lg text-white hover:text-xl"
                >
                  {" "}
                  LogIn
                </button>
                <Link href="/signup">
                  <p className="text-center underline ">
                    Don't have an Account? Sign Up
                  </p>
                </Link>
                <p className="text-center ">OR</p>
                <p className="text-center">Sign Up Using</p>
                <div className="flex items-center justify-between w-28 mx-auto ">
                  <CiFacebook size={30} />
                  <PiGoogleLogo size={30} />
                  <CiTwitter size={32} />
                </div>
              </Form>
              
              <ToastContainer className="ml-auto" />
              </>
          );
        }}
      </Formik>
      </div>
      </div>
    </div>
    </>
  );
};

export default Signin;