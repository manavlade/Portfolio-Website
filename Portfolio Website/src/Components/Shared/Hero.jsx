import { Button } from "../ui/button";
import { motion } from "framer-motion";
import About from "./About";
import RetroGrid from "../ui/retro-grid";

const HomePage = () => {
    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 2, ease: "easeOut" },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut", delay: 0.5 },
        },
    };

    return (
        <div>
            <RetroGrid />
            <div className=" min-h-screen sm:mt-2 md:mt-3  flex items-center justify-center px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl w-full">
                    {/* Left Content Section */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800">
                            Crafting Your Future, <br /> One Project at a Time
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600">
                            Welcome to my portfolio! Here, you'll discover my journey, skills,
                            and the projects that showcase my passion and expertise.
                        </p>
                        <div className="flex gap-4">
                            <Button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
                                Explore
                            </Button>
                            <Button className="bg-white border border-black text-black px-6 py-3 rounded-md hover:bg-gray-100">
                                Contact
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Image Grid Section */}
                    <motion.div
                        className="grid grid-cols-2 gap-5"
                        initial="hidden"
                        animate="visible"
                        variants={imageVariants}
                    >
                        {[...Array(6)].map((_, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="w-full h-40 bg-gray-300 rounded-md overflow-hidden shadow-lg"
                            >
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="placeholder"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <About />
        </div>
    );
};

export default HomePage;
