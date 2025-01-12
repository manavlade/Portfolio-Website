import { useState } from "react";
import { Linkedin, Github, Mail, Menu, X, ChevronRight, ArrowRightIcon } from "lucide-react";
import Home from "./Hero";
import ScrollProgress from "../ui/scroll-progress";
import AnimatedShinyText from "../ui/animated-shiny-text";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            {/* Sticky Navbar */}
            <div className="px-5 py-3 shadow-xl sticky top-0 bg-white z-50">
                <div className="flex justify-between items-center">
                    {/* Left: Portfolio Title */}
                    <div className="flex-shrink-0">
                        <AnimatedShinyText className=" hover:scale-150 inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-800 hover:duration-300 hover:dark:text-neutral-800">
                            <a href="/">
                                <span > Manav's Portfolio</span>
                            </a>
                            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                        </AnimatedShinyText>
                    </div>

                    {/* Center: Hamburger Menu for Small Screens */}
                    <div className="lg:hidden">
                        <button
                            className="p-2 rounded-md focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Center: Navigation Links (hidden on small screens) */}
                    <div
                        className={`lg:flex flex-grow justify-center gap-10 items-center ${isMenuOpen
                            ? "block absolute top-full left-0 w-full bg-white z-40 py-3 shadow-lg"
                            : "hidden"
                            }`}
                    >
                        <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10 text-center font-semibold">

                            <li className="hover:scale-150 transform transition-transform duration-200 cursor-pointer">
                                <a href="#about">  About</a>
                            </li>
                            <li className="hover:scale-150 transform transition-transform duration-200 cursor-pointer">
                                <a href="#skills">Skills</a>
                            </li>
                            <li className="hover:scale-150 transform transition-transform duration-200 cursor-pointer">
                                <a href="#experience">Experience</a>
                            </li>
                            <li className="hover:scale-150 transform transition-transform duration-200 cursor-pointer">
                                <a href="#projects">Projects</a>
                            </li>
                            <li className="hover:scale-150 transform transition-transform duration-200 cursor-pointer">
                                <a href="#certificates">Certificates</a>
                            </li>
                            <li className="hover:scale-150 transform transition-transform duration-200 cursor-pointer">
                                <a href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right: Social Icons */}
                    <div className="hidden lg:flex gap-5">
                        <ul className="flex gap-7">
                            <li>
                                <a href="https://www.linkedin.com/in/manav-lade/">
                                    <Linkedin className="hover:scale-150 transform transition-transform duration-200 cursor-pointer" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/manavlade">
                                    <Github className="hover:scale-150 transform transition-transform duration-200 cursor-pointer" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:your-email@example.com?subject=Hello%20there&body=I%20would%20like%20to%20discuss... ">
                                    <Mail className=" hover:scale-150 transform transition-transform duration-200 cursor-pointer" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right: Social Icons in Dropdown for Small Screens */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-gray-50 mt-3 flex flex-col gap-5 p-4 shadow-md">
                        {/* Navigation Links */}
                        <div className="flex flex-col items-center gap-5">
                            <span className="hover:scale-110 transform transition-transform duration-200 cursor-pointer">
                                Home
                            </span>
                            <span className="hover:scale-110 transform transition-transform duration-200 cursor-pointer">
                                About
                            </span>
                            <span className="hover:scale-110 transform transition-transform duration-200 cursor-pointer">
                                Skills
                            </span>
                            <span className="hover:scale-110 transform transition-transform duration-200 cursor-pointer">
                                Projects
                            </span>
                            <span className="hover:scale-110 transform transition-transform duration-200 cursor-pointer">
                                Certificates
                            </span>
                            <span className="hover:scale-110 transform transition-transform duration-200 cursor-pointer">
                                Experience
                            </span>
                        </div>

                        {/* Social Icons */}
                        <div className="flex flex-row justify-center gap-5">
                            <Linkedin className="hover:scale-110 transform transition-transform duration-200 cursor-pointer" />
                            <Github className="hover:scale-110 transform transition-transform duration-200 cursor-pointer" />
                            <Mail className="hover:scale-110 transform transition-transform duration-200 cursor-pointer" />
                        </div>
                    </div>
                )}
            </div>
            <ScrollProgress className="top-[65px]" />

            {/* Hero Section */}
            <Home />
        </div>
    );
};

export default Navbar;
