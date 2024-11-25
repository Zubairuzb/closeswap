"use client"
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="">
            <div className="mx-auto pb-8 px-4 sm:px-6 lg:px-8 font-sans" style={{ width: "90%" }}>
                {/* Main Navbar */}
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="#" className="text-black font-bold text-xl">
                            <Image src="logo.svg" width={80} height={80} />
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex space-x-6">
                        <a
                            href="#"
                            className="text-black px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="text-black px-3 py-2 rounded-md text-sm font-medium"
                        >
                            How it works
                        </a>
                        <a
                            href="#"
                            className="text-black px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Features
                        </a>
                    </div>

                    {/* Sign-In Button */}
                    <div className="hidden md:block">
                        <button className="px-4 py-2 bg-white text-white font-semibold rounded-3xl" style={{ backgroundColor: "#470068" }}>
                            Sign In
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black focus:outline-none"
                        >
                            {isOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {/* Close Icon */}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {/* Hamburger Icon */}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } md:hidden flex flex-col items-center p-4 space-y-4`}
                >
                    <a href="#" className="text-black block px-3 py-2 text-sm font-medium">
                        Home
                    </a>
                    <a href="#" className="text-black block px-3 py-2 text-sm font-medium">
                        How it works
                    </a>
                    <a href="#" className="text-black block px-3 py-2 text-sm font-medium">
                        Features
                    </a>
                    <button className="w-full px-4 py-2 text-white font-semibold rounded-3xl" style={{ backgroundColor: "#470068" }}>
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
