import { motion, useInView } from "framer-motion";
import SkillText from "../Skills/SkillText";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import myPic from "../../assests/mypic.png";
import { useRef } from "react";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "0px 0px -20% 0px" }); // Adds offset margin

    const words = [
        { text: "Get", className: " lg:mr-3 mr-2" },
        { text: "To", className: "lg:mr-3 mr-2" },
        { text: "Know", className: "lg:mr-3 mr-2" },
        { text: "Me", className: "lg:mr-3 mr-2" },
        { text: "Better!", className: "text-blue-500 lg:mr-3 mr-2 dark:text-blue-500" },
    ];

    // Animation Variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.2 } },
    };

    return (
        <div>
            <section ref={ref} className="bg-gradient-to-b from-white to-gray-50 lg:min-h-screen lg:py-20" id="about">
                {/* Header Section */}
                <motion.div
                    className="max-w-6xl mx-auto text-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={textVariants}
                >
                    <p className="text-lg font-medium text-gray-600">Welcome</p>
                    <div className="items-center lg:mr-20 md:justify-center text-center">
                        <TypewriterEffectSmooth className="justify-center" words={words} />
                    </div>
                    <p className="text-gray-700 mt-4 text-lg">
                        A brief introduction about me and my professional journey.
                    </p>
                </motion.div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 lg:mt-16 items-center">
                    {/* Left Column */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={cardVariants}
                    >
                        <div className="p-6 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-gray-200 to-white shadow-lg rounded-xl">
                            <h3 className="text-2xl font-bold text-gray-800">Frontend Developer</h3>
                            <p className="text-gray-700 mt-4">
                                Specializing in crafting visually stunning and responsive user interfaces, enhancing user
                                experience with intuitive designs, and ensuring seamless interaction across devices and platforms.
                            </p>
                        </div>
                        <div className="p-6 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-gray-200 to-white shadow-lg rounded-xl">
                            <h3 className="text-2xl font-bold text-gray-800">Backend Developer</h3>
                            <p className="text-gray-700 mt-4">
                                Crafting robust and scalable server-side solutions, optimizing APIs for seamless performance, and
                                ensuring secure data management to power modern web applications.
                            </p>
                        </div>
                    </motion.div>

                    {/* Center Column */}
                    <motion.div
                        className="flex justify-center"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={{
                            hidden: { scale: 0.9, opacity: 0 },
                            visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
                        }}
                    >
                        <img
                            src={myPic}
                            alt="About Me"
                            className="rounded-full shadow-lg w-96 h-96 object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={cardVariants}
                    >
                        <div className="p-6 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-gray-200 to-white shadow-lg rounded-xl">
                            <h3 className="text-2xl font-bold text-gray-800">UI/UX Designer</h3>
                            <p className="text-gray-700 mt-4">
                                Crafting intuitive and visually appealing designs that enhance user experiences, ensuring
                                seamless interaction between users and digital products.
                            </p>
                        </div>
                        <div className="p-6 hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-gray-200 to-white shadow-lg rounded-xl">
                            <h3 className="text-2xl font-bold text-gray-800">Cloud Engineer (Learning)</h3>
                            <p className="text-gray-700 mt-4">
                                Designing and optimizing scalable cloud infrastructures, ensuring secure and efficient deployment
                                of applications while driving innovation in cloud-native technologies.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
            <SkillText />
        </div>
    );
};

export default About;
