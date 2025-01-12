import { motion } from "framer-motion";
import SkillText from "../Skills/SkillText";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import myPic from "../../assests/mypic.png"

const About = () => {
    const words = [
        {
            text: " Get",
            className: "mr-2"
        },
        {
            text: " To",
            className: "mr-2"
        },
        {
            text: " Know ",
            className: "mr-2"
        },
        {
            text: " Me",
            className: "mr-2"
        },
        {
            text: "Better!",
            className: "text-blue-500 mr-2 dark:text-blue-500",
        },
    ];
    // Animation Variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.2 } },
    };

    return (
        <div>
            <section className="bg-gray-50 min-h-screen py-10 lg:py-20 px-5" id="about">
                <motion.div
                    className="max-w-6xl mx-auto text-center"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    {/* Welcome Section */}
                    <p className="text-lg font-medium text-gray-500">Welcome</p>
                    <div className=" items-center justify-center text-center" >
                        <TypewriterEffectSmooth words={words} />
                    </div>
                    <p className="text-gray-600 mt-4 text-lg">A short introduction about me and my professional journey.</p>

                </motion.div>

                {/* Content Section */}
                <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 mt-10 lg:mt-16 items-center">
                    {/* Left: Professional Journey */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                    >
                        <div className="p-6 hover:scale-105 transition-transform duration-300 bg-white shadow-lg rounded-lg text-center lg:text-left">
                            <h3 className="text-2xl font-semibold text-center ">Frontend Developer</h3>
                            <p className="text-gray-600 mt-4">
                                Specializing in crafting visually stunning and responsive user interfaces, enhancing user experience with intuitive designs, and ensuring seamless interaction across devices and platforms.
                            </p>
                        </div>

                        <div className="p-6 hover:scale-105 transition-transform duration-300 bg-white shadow-lg rounded-lg text-center lg:text-left">
                            <h3 className="text-2xl font-semibold text-center">Backend Developer</h3>
                            <p className="text-gray-600 mt-4">
                                Crafting robust and scalable server-side solutions, optimizing APIs for seamless performance, and ensuring secure data management to power modern web applications.
                            </p>
                        </div>

                    </motion.div>

                    {/* Center: Image */}
                    <motion.div
                        className="flex justify-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={imageVariants}
                    >
                        <img
                            src= {myPic}
                            alt="About Me"
                            className="hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>

                    {/* Right: Additional Info */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                    >
                        <div className="p-6 hover:scale-105 transition-transform duration-300 bg-white shadow-lg rounded-lg text-center lg:text-left">
                            <h3 className="text-2xl font-semibold text-center ">UI/UX Designer</h3>
                            <p className="text-gray-600 mt-4">
                                Crafting intuitive and visually appealing designs that enhance user experiences,
                                ensuring seamless interaction between users and digital products.
                            </p>
                        </div>
                        <div className="p-6 hover:scale-105 transition-transform duration-300 bg-white shadow-lg rounded-lg text-center lg:text-left">
                            <h3 className="text-2xl font-semibold text-center ">Cloud Engineer (Learning)</h3>
                            <p className="text-gray-600 mt-4">
                                Designing and optimizing scalable cloud infrastructures, ensuring secure and efficient deployment of applications while driving innovation in cloud-native technologies.
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
