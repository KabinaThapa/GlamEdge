"use client";
import React from "react";
import Inputfield from "@/components/inputfield";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUser } from "react-icons/fi";
import { BsLock } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

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
    <div className="bg-custom-sage p-24 h-auto flex justify-center items-center">
      <Formik
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="w-[60%] h-auto backdrop-blur-sm">
          <Form className="w-full h-auto p-8 flex flex-col justify-center border-2">
            <h1 className="text-3xl mb-4 mt-4">REGISTER</h1>
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
              className="border-2 w-full mb-6 border-black p-1 mb-8 mt-6 rounded-md text-lg backdrop-blur-md hover:scale-95"
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