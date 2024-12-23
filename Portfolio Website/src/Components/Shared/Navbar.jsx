import { useState } from "react";
import { Linkedin, Github, Mail, Menu, X } from "lucide-react";
import Home from "./Hero";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
       <div>
            <div className="px-5 py-3 shadow-xl">
                <div className="flex justify-between items-center">
                    {/* Left: Portfolio Title */}
                    <div className="flex-shrink-0">
                        <h1 className="text-lg font-bold">Manav's Portfolio</h1>
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
                        className={`lg:flex flex-grow justify-center gap-10 items-center ${isMenuOpen ? "block absolute top-full left-0 w-full bg-white z-10 py-3" : "hidden"
                            }`}
                    >
                        <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10 text-center">
                            <li className="hover:scale-150 transform transition-transform duration-200" >Home</li>
                            <li className="hover:scale-150 transform transition-transform duration-200" >About</li>
                            <li className="hover:scale-150 transform transition-transform duration-200" >Skills</li>
                            <li className="hover:scale-150 transform transition-transform duration-200" >Projects</li>
                            <li className="hover:scale-150 transform transition-transform duration-200" >Certificates</li>
                            <li className="hover:scale-150 transform transition-transform duration-200"  >Expeience</li>
                        </ul>
                    </div>

                    {/* Right: Social Icons */}
                    <div className="hidden lg:flex gap-5">
                        <ul className="flex gap-7">
                            <li>
                                <Linkedin className="hover:scale-150 transform transition-transform duration-200" />
                            </li>
                            <li>
                                <Github className="hover:scale-150 transform transition-transform duration-200" />
                            </li>
                            <li>
                                <Mail className="hover:scale-150 transform transition-transform duration-200" />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right: Social Icons in Dropdown for Small Screens */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-purple-500 mt-3 flex flex-col gap-5">
                        {/* Navigation Links */}
                        <div className="flex flex-col items-center gap-5">
                            <span className="hover:scale-150 transform transition-transform duration-200" >Home</span>
                            <span className="hover:scale-150 transform transition-transform duration-200" >About</span>
                            <span className="hover:scale-150 transform transition-transform duration-200" >Skills</span>
                            <span className="hover:scale-150 transform transition-transform duration-200" >Projects</span>
                            <span className="hover:scale-150 transform transition-transform duration-200" >Certificates</span>
                            <span className="hover:scale-150 transform transition-transform duration-200" >Experience</span>
                        </div>

                        {/* Social Icons */}
                        <div className="flex flex-row justify-center gap-5">
                            <Linkedin className="hover:scale-150 transform transition-transform duration-200" />
                            <Github className="hover:scale-150 transform transition-transform duration-200" />
                            <Mail className="hover:scale-150 transform transition-transform duration-200" />
                        </div>
                    </div>
                )}
            </div>
           <Home/>
       </div>
    );
};

export default Navbar;
