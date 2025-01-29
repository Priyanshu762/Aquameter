import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible); // Toggle the visibility
    };

    return (
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <p className="text-3xl tracking-tight text-left font-poppins text-primary-foreground text-[#071C50] mb-6">
                    Sign in
                </p>
                <form>
                    <div className="flex flex-col space-y-6">

                        {/* Email Input */}
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Enter your email"
                            required
                            className="w-full rounded-md px-3 py-2 text-left text-sm shadow-sm placeholder:text-[#071C50] bg-[rgba(46,111,137,.13)]"
                        />

                        {/* Password Input */}
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={passwordVisible ? "text" : "password"} // Toggle password type
                                placeholder="Enter your Password"
                                required
                                className="w-full rounded-md px-3 py-2 text-left text-sm shadow-sm placeholder:text-[#071C50] bg-[rgba(46,111,137,.13)]"
                            />
                            {/* Eye Icon to toggle visibility */}
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                                {passwordVisible ? (
                                    <FaEyeSlash className="text-[#071C50]" size={20} />
                                ) : (
                                    <FaEye className="text-[#071C50]" size={20} />
                                )}
                            </button>
                        </div>

                        {/* Login Button */}
                        <button className="w-full rounded-md px-4 py-2 text-white font-medium bg-[linear-gradient(90deg,rgba(0,51,77,0.8)_0%,rgba(0,85,128,0.8)_53%,rgba(0,119,179,0.8)_100%)] shadow-[0px_4px_61px_0px_rgba(77,71,195,0.4)] hover:brightness-110 transition-all">
                            Login
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
