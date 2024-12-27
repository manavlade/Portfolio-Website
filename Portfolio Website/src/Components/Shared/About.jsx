import { motion } from "framer-motion";
import SkillText from "../Skills/SkillText";

const About = () => {
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
            <section className="bg-gray-50 min-h-screen py-10 lg:py-20 px-5">
                <motion.div
                    className="max-w-6xl mx-auto text-center"
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                >
                    {/* Welcome Section */}
                    <p className="text-lg font-medium text-gray-500">Welcome</p>
                    <h2 className="text-4xl font-extrabold text-gray-800 mt-3">Get to Know Me Better</h2>
                    <p className="text-gray-600 mt-4 text-lg">A short introduction about me and my professional journey.</p>

                </motion.div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 lg:mt-16 items-center">
                    {/* Left: Professional Journey */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={cardVariants}
                    >
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center lg:text-left">
                            <h3 className="text-2xl font-semibold ">Another Short Heading</h3>
                            <p className="text-gray-600 mt-4">
                                Brief explanation about a specific area of expertise or a key highlight.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center lg:text-left">
                            <h3 className="text-2xl font-semibold ">Another Short Heading</h3>
                            <p className="text-gray-600 mt-4">
                                Additional information about my skills or personal interests.
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
                            src="https://via.placeholder.com/400"
                            alt="About Me"
                            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
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
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center lg:text-left">
                            <h3 className="text-2xl font-semibold ">Another Short Heading</h3>
                            <p className="text-gray-600 mt-4">
                                Brief explanation about a specific area of expertise or a key highlight.
                            </p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-lg text-center lg:text-left">
                            <h3 className="text-2xl font-semibold ">Another Short Heading</h3>
                            <p className="text-gray-600 mt-4">
                                Additional information about my skills or personal interests.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
            <SkillText/>
      </div>
    );
};

export default About;
