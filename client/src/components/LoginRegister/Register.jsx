import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {InputField} from "../index.js"; 
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/loaderSlice.js";


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().min(10, "Invalid phone number").required("Phone is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required(),
});


const Register = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.loader.loading);

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
  
    const onSubmit = async (data) => {
        if (loading) return;
        console.log(data);
        setLoading(false);
    };

  return (
    <div className="h-[95vh] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white dark:bg-gray-900 dark:border-gray-500 dark:border-4 shadow-2xl sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-blue-900 text-center hidden md:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900 dark:text-gray-100">
                Tenant Sign up
              </h1>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1">
                Hey enter your details to create your account
              </p>
            </div>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs flex flex-col gap-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <InputField placeholder="Enter your name" label='Name' type="text" name="name" register={register} errors={errors} />
                      <InputField placeholder="Enter your email" label='Email' type="email" name="email" register={register} errors={errors} />
                      <InputField placeholder="Enter your phone" label='Phone' type="tel" name="phone" register={register} errors={errors} />
                      <InputField placeholder="Password" label='Password' type="password" name="password" register={register} errors={errors} />
                      <button 
                      type="submit"
                      disabled={loading}
                      className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      {loading ? (
                        <>
                          <svg
                          className="w-6 h-6 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          >
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy="7" r="4" />
                          <path d="M20 8v6M23 11h-6" />
                          </svg>
                          <span className="ml-3">Signing Up...</span>
                        </>
                      ) : 
                      (
                        <>
                        <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                        </svg>
                        <span className="ml-3">Sign Up</span>
                      </>
                      )}
                    </button>
                    </form>
                
                <p className="mt-6 text-xs text-gray-600 text-center dark:text-gray-100">
                  Already have an account?{" "}
                  <Link to={'/login'}>
                    <span className="text-blue-900 font-semibold dark:text-indigo-400">Sign in</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;