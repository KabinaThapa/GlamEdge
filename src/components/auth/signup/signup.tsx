"use client";
import React from "react";
import Inputfield from "@/components/inputfield/inputfield";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUser } from "react-icons/fi";
import { BsLock } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";

const Signup = () => {
  const initialvalues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your Name."),
    username: Yup.string().required("Please enter your username."),
    email: Yup.string().required("Please enter valid email address."),
    password: Yup.string().required("Please enter correct password"),
    confirmpassword: Yup.string()
      .required("Please confirm password")
      .oneOf([Yup.ref("password")], "Password must match"),
  });
  const router = useRouter();

  const handleSubmit = async (values: typeof initialvalues) => {
    try {
      const response = await axios.post("http://localhost:4004/users", {
        email: values.email,
        password: values.password,
      });
      toast.success("Successfully created your account.");
      router.push("/signin");
      localStorage.setItem("session-token", response.data.accessToken);
    } catch (error) {
      toast.error("Could not sign up");
    }
  };

  return (
    <div className="p-[2%] h-auto grid md:grid-cols-4 grid-cols-3 place-items-center">
      <div className="w-full h-full md:col-span-3 col-span-2 ">
        <Image
          alt="pic"
          width={1600}
          height={1500}
          className="object-cover h-full w-full"
          src={
            "https://minion-vinovatheme.myshopify.com/cdn/shop/files/banner_1_1512x.jpg?v=1616993329"
          }
        />
      </div>
      <Formik
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="md:w-[28rem] ml-[-150px]  mt-8 mb-8 h-auto md:bg-timber backdrop-blur-md">
          <Form className="h-auto p-8 flex flex-col justify-center gap-6 md:text-lg text-sm ">
            <h1 className="md:text-3xl text-2xl text-center">SignUp</h1>
            <Inputfield
              type="text"
              name="name"
              label="Name"
              icon={<FiUser />}
            />
            <Inputfield
              type="text"
              name="username"
              label="Username"
              icon={<FiUser />}
            />
            <Inputfield
              type="text"
              name="email"
              label="Email"
              icon={<AiOutlineMail />}
            />
            <Inputfield
              type="password"
              name="password"
              label="Password"
              icon={<BsLock />}
            />
            <Inputfield
              type="password"
              name="confirmpassword"
              label="Confirm Password"
              icon={<BsLock />}
            />

            <button
              type="submit"
              className=" w-full bg-wenge p-2 rounded text-lg  hover:text-xl"
            >
              Register
            </button>
          </Form>
        </div>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default Signup;
