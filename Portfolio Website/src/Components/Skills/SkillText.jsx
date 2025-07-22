import { ArrowDown, Code, Server } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Button } from "../ui/button";
import Projects from "../Projects/Projects";
import SkillsSection from "./SkillImage";
import { useRef } from "react";

const SkillText = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" }); 

    return (
        <div>
            <div ref={ref} className="py-16 w-[90%] mx-auto bg-transparent text-black" id="skills">
                {/* Title Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="text-lg uppercase tracking-wide text-gray-500">
                        Core Competencies
                    </p>
                    <h1 className="text-3xl lg:text-5xl font-extrabold mt-2">
                        Driving My Success
                    </h1>
                </motion.div>

                {/* Main Content */}
                <div className="grid gap-10 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="space-y-8">
                            {/* Introduction */}
                            <motion.div
                                className="border-l-4 border-black pl-6"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h2 className="text-3xl font-semibold">
                                    Mastering the Art of Full Stack Development
                                </h2>
                                <p className="text-lg mt-4 text-gray-700">
                                    With a strong foundation in HTML, CSS, and JavaScript, I create
                                    responsive and user-friendly websites. My projects showcase
                                    innovative solutions that enhance user experience and drive
                                    engagement. By integrating modern tools and frameworks, I ensure
                                    scalability, performance, and visual appeal in every solution.
                                </p>
                            </motion.div>

                            {/* Skills Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
                                {/* Frontend Expertise Card */}
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 1 }}
                                    className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-lg shadow-lg transform transition duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-4 bg-gray-800 text-white rounded-full">
                                            <Code className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold">Frontend Development</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Expertise in crafting seamless UI/UX with React, Tailwind CSS, and modern frontend tools. From developing reusable components to optimizing application performance, I excel in building visually stunning, interactive web experiences that meet industry standards.
                                    </p>
                                </motion.div>

                                {/* Backend Expertise Card */}
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: -1 }}
                                    className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-lg shadow-lg transform transition duration-300"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-4 bg-gray-800 text-white rounded-full">
                                            <Server className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold">Backend Development</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Proficient in building robust backend systems using Node.js, Express, and databases. I design secure APIs, manage data with relational and non-relational databases, and ensure seamless integration between front-end applications and server-side logic.
                                    </p>
                                </motion.div>
                            </div>

                            <SkillsSection />

                            {/* Action Buttons */}
                            <motion.div
                                className="flex gap-6 mt-10 items-center bg-transparent justify-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <Button
                                    className="px-8 py-4 lg:text-lg font-medium bg-white text-black border border-gray-300 shadow-md rounded-lg hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1"
                                    onClick={() => (window.location.href = "https://github.com/manavlade")}
                                >
                                    Learn More
                                </Button>
                                <Button
                                    className="px-8 py-4 lg:text-lg font-medium bg-gradient-to-r from-black to-gray-800 text-white rounded-lg shadow-lg hover:scale-105 flex items-center gap-2 transition duration-300"
                                >
                                    <a href="#projects" className="flex items-center gap-2">
                                        See Projects <ArrowDown />
                                    </a>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Projects Section */}
            <Projects />
        </div>
    );
};

export default SkillText;
