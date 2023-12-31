"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Inputfield from "@/components/inputfield/inputfield";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { BsLock } from "react-icons/bs";
import { PiGoogleLogo } from "react-icons/pi";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { useRouter } from "next/navigation";
import { login } from "@/redux/features/userauthslice";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

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
  const dispatch = useDispatch();

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
      dispatch(login(response.data.user.email));
      router.push("/shoppingcart");
      console.log(response.data.user.email);
    } catch (error) {
      toast.error("Could not sign in");
    }
  };

  return (
    <>
      <div className=" min-h-screen  w-full  p-[2%]">
        <div className="mx-auto grid md:grid-cols-4 grid-cols-3 place-items-center">
          <div className="w-full h-full md:col-span-3 col-span-2">
            <Image
              alt="pic"
              width={1600}
              height={1600}
              className="object-cover object-center h-full w-full"
              src={
                "https://minion-vinovatheme.myshopify.com/cdn/shop/files/s-9-1_2048x.jpg?v=1619166921"
              }
            />
          </div>
          <div className="ml-[-150px] z-[1] md:w-[28rem]  mt-8 mb-8 md:bg-timber backdrop-blur-md">
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
                      className="  flex flex-col justify-center gap-6 md:text-lg text-sm font-opensans p-6"
                    >
                      <h1 className="md:text-3xl text-2xl text-center">SignIn</h1>
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
                        className="w-full p-2 bg-wenge rounded md:text-lg text-white hover:text-xl"
                      >
                        {" "}
                        Log In
                      </button>
                      <Link href="/signup">
                        <p className="text-center underline">
                          Don't have an Account? Sign Up
                        </p>{" "}
                      </Link>
                      <p className="text-center">OR</p>
                      <p className="text-center">Sign Up Using</p>
                      <div className="flex items-center md:text-4xl text-2xl justify-between md:w-28 w-24 mx-auto">
                        <CiFacebook  />
                        <PiGoogleLogo  />
                        <CiTwitter  />
                      </div>
                    </Form>

                    
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
