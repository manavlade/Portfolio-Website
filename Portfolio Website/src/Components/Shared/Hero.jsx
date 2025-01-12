import { Button } from "../ui/button";
import { motion } from "framer-motion";
import About from "./About";
import RetroGrid from "../ui/retro-grid";
import MorphingText from "../ui/morphing-text";
import MyResume from "../../assests/Manav_Lade_Software_Developer.pdf"
import { Download } from "lucide-react";

const texts = [
    "INSPIRE",
    "PERFORM",
    "TRANSFORM!"
]

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
                            {/* Crafting Your Future, <br /> One Project at a Time */}
                            Code Meets Creativity: Building Solutions That
                            <MorphingText texts={texts} /> 
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600">
                            Welcome to my portfolio! Explore my journey, skills, and a curated showcase of projects that reflect my 
                            passion, innovation, and expertise in creating impactful solutions.
                        </p>
                        <div className="flex gap-4">
                            <Button className="bg-black text-white lg:text-2xl px-6 py-3 rounded-md">
                                Explore
                            </Button>
                            <a href={MyResume} download={"Manav_Lade_Software_Developer.pdf"} >
                                <Button className="bg-white border border-black text-black font-bold lg:text-2xl px-6 py-3 rounded-md hover:bg-gray-100">
                                    Download Resume <Download />
                                </Button>
                           </a>
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
