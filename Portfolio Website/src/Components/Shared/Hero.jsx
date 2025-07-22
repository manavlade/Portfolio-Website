import { Button } from "../ui/button";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import About from "./About";
import RetroGrid from "../ui/retro-grid";
import MorphingText from "../ui/morphing-text";
import MyResume from "../../assests/Manav_Lade_Software_Developer.pdf";
import { Download } from "lucide-react";
import Gif from "../../assests/Web Development (1).mp4";
import Gif2 from "../../assests/Web Development.mp4";

const texts = ["INSPIRE!", "PERFORM!", "TRANSFORM!"];
    
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

    // State to toggle between the two videos
    const [currentVideo, setCurrentVideo] = useState(Gif);
    const controls = useAnimationControls();
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    // Use effect to alternate videos every 10 seconds
    useEffect(() => {
        if (isFirstLoad) {
            setIsFirstLoad(false); // Ensure the initial video is visible without animation
            return;
        }

        const interval = setInterval(() => {
            controls.start({ rotateY: 180, opacity: 0, transition: { duration: 0.5 } }).then(() => {
                setCurrentVideo((prevVideo) => (prevVideo === Gif ? Gif2 : Gif));
                controls.start({ rotateY: 0, opacity: 1, transition: { duration: 0.5 } });
            });
        }, 10000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [controls, isFirstLoad]);

    return (
        <div>
            <RetroGrid />
            <div className="min-h-screen sm:mt-2 md:mt-3 flex items-center justify-center px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-[90%] mx-auto">
                    {/* Left Content Section */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                    >
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800">
                            Code Meets Creativity: Building Solutions That
                            <MorphingText texts={texts} />
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600">
                            Welcome to my portfolio! Explore my journey, skills, and a curated showcase of projects that reflect my
                            passion, innovation, and expertise in creating impactful solutions.
                        </p>
                        <div className="flex gap-4">
                            <a href={MyResume} download={"Manav_Lade_Software_Developer.pdf"}>
                                <Button className="bg-white border border-black text-black font-bold lg:text-2xl px-6 py-3 rounded-md hover:bg-gray-100">
                                    Download Resume <Download />
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Video Section */}
                    <motion.div
                        className="justify-center"
                        initial="hidden"
                        animate="visible"
                        variants={imageVariants}
                    >
                        <motion.video
                            src={currentVideo}
                            autoPlay
                            muted
                            playsInline
                            className="rounded-lg shadow-lg w-full"
                            initial={isFirstLoad ? { opacity: 1, rotateY: 0 } : {}}
                            animate={controls}
                        />
                    </motion.div>
                </div>
            </div>
            <About />
        </div>
    );
};

export default HomePage;
