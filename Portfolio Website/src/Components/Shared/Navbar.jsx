import { useState } from "react";
import { Linkedin, Github, Mail, Menu, X, ArrowRightIcon } from "lucide-react";
import Home from "./Hero";
import ScrollProgress from "../ui/scroll-progress";
import AnimatedShinyText from "../ui/animated-shiny-text";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Shared Nav Links
    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#experience", label: "Experience" },
        { href: "#projects", label: "Projects" },
        { href: "#certificates", label: "Certificates" },
        { href: "#faq", label: "FAQ" },
    ];

    // Social Links
    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/manav-lade/",
            icon: <Linkedin className="hover:scale-150 transform transition-transform duration-200 cursor-pointer" />,
        },
        {
            href: "https://github.com/manavlade",
            icon: <Github className="hover:scale-150 transform transition-transform duration-200 cursor-pointer" />,
        },
        {
            href: "mailto:your-email@example.com?subject=Hello%20there&body=I%20would%20like%20to%20discuss...",
            icon: <Mail className="hover:scale-150 transform transition-transform duration-200 cursor-pointer" />,
        },
    ];

    return (
        <div>
            {/* Sticky Navbar */}
            <div className="px-5 py-3 shadow-xl sticky top-0 bg-white z-50">
                <div className="flex justify-between items-center">
                    {/* Left: Portfolio Title */}
                    <div className="flex-shrink-0">
                        <AnimatedShinyText className="hover:scale-150 inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-800 hover:duration-300 hover:dark:text-neutral-800">
                            <a href="/">
                                <span>Manav's Portfolio</span>
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

                    {/* Navigation Links */}
                    <div
                        className={`lg:flex flex-grow justify-center gap-10 items-center ${isMenuOpen
                            ? "block absolute top-full left-0 w-full bg-white z-40 py-3 shadow-lg"
                            : "hidden"
                            }`}
                    >
                        {/* Nav Links */}
                        <ul className="flex flex-col lg:flex-row gap-5 lg:gap-10 text-center font-semibold">
                            {navLinks.map((link) => (
                                <li
                                    key={link.href}
                                    className="hover:scale-150 transform transition-transform duration-200 cursor-pointer"
                                >
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>

                        {/* Social Links for Mobile (Hamburger Menu Open) */}
                        {isMenuOpen && (
                            <div className="flex flex-col items-center gap-5 mt-3">
                                {socialLinks.map((link, index) => (
                                    <a key={index} href={link.href}>
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                   
                    {/* Right: Theme Toggle & Social Icons for Desktop */}
                    <div className="hidden lg:flex items-center gap-5">
                        {/* Social Icons */}
                        <div className="flex gap-5">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <ScrollProgress className="top-[65px]" />
            <Home />
        </div>
    );
};

export default Navbar;
