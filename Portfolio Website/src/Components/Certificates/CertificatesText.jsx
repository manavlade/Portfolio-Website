import React, { useState } from "react";
import { CourseCertImages } from "./CourseCertImages";
import { InternshipCertImages } from "./InternshipCertiImages";
import { OtherCertImages } from "./OtherCertiImages";
import { motion } from "framer-motion";

const CertiText = () => {
    // State to track the selected category
    const [selectedCategory, setSelectedCategory] = useState("Course Completion");

    // Animation variants for smooth transitions
    const containerVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-16 py-6" id="certificates" >
            {/* Sidebar */}
            <div className=" w-1/2 md:w-1/4 flex flex-col gap-6">
                {["Course Completion", "Internship Completion", "Others"].map(
                    (category) => (
                        <motion.p
                            key={category}
                            className={`text-lg font-semibold cursor-pointer ${selectedCategory === category
                                    ? "text-black border-b-2 border-black"
                                    : "text-gray-500 hover:text-black"
                                }`}
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{ scale: 1.05 }}
                        >
                            {category}
                        </motion.p>
                    )
                )}
            </div>

            {/* Content */}
            <motion.div
                className="flex-1"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
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
