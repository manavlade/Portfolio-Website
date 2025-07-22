import React, { useState, useRef } from "react";
import { CourseCertImages } from "./CourseCertImages";
import { InternshipCertImages } from "./InternshipCertiImages";
import { OtherCertImages } from "./OtherCertiImages";
import { motion, useInView } from "framer-motion";

const CertiText = () => {
    // State to track the selected category
    const [selectedCategory, setSelectedCategory] = useState("Course Completion");

    // Ref and useInView for triggering animations
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px -20% 0px" });

    // Animation variants for smooth transitions
    const containerVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <div ref={sectionRef} className="flex flex-col md:flex-row items-center justify-center w-[90%] mx-auto py-12 bg-gradient-to-b from-white to-gray-50" id="certificates">
            {/* Sidebar */}
            <motion.div
                className="w-1/2 md:w-1/4 flex flex-col gap-6"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
            >
                {["Course Completion", "Internship Completion", "Others"].map((category) => (
                    <motion.p
                        key={category}
                        className={`text-2xl font-bold cursor-pointer ${selectedCategory === category
                            ? "text-black border-b-2 border-black"
                            : "text-gray-500 hover:text-black"
                            }`}
                        onClick={() => setSelectedCategory(category)}
                        whileHover={{ scale: 1.05 }}
                    >
                        {category}
                    </motion.p>
                ))}
            </motion.div>

            {/* Content */}
            <motion.div
                className="flex-1 lg:text-xl gap-5"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                key={selectedCategory} // Key ensures animation re-renders on change
            >
                {selectedCategory === "Course Completion" && <CourseCertImages />}
                {selectedCategory === "Internship Completion" && <InternshipCertImages />}
                {selectedCategory === "Others" && <OtherCertImages />}
            </motion.div>
        </div>
    );
};

export default CertiText;
