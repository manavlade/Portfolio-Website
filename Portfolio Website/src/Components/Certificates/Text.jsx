import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FAQ from "../Shared/FAQ";
import CertiText from "./CertificatesText";
import { ArrowDown } from "lucide-react";

const CertificateText = () => {
    const sectionRef = useRef(null); // Reference for the entire certificate section
    const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px -20% 0px" }); // Trigger animation when in view

    return (
        <div>
            <div
                ref={sectionRef}
                className="flex flex-col items-center justify-center bg-white px-6 py-12"
            >
                {/* Heading Section */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-4xl font-bold text-black leading-tight mb-4">
                        Explore My Professional <br /> Certificates and Achievements
                    </h1>
                    <p className="text-lg text-black/70">
                        Each certificate represents a significant milestone in my professional
                        journey. Discover the organizations that recognized my skills and
                        dedication.
                    </p>
                </motion.div>

                {/* Animated Accent Line */}
                <motion.div
                    className="w-1/2 h-1 bg-black rounded-full mb-12"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                ></motion.div>

                {/* Call-to-Action Section */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <button className="px-6 py-3 bg-black text-white flex gap-5 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform">
                        View Certificates <ArrowDown />
                    </button>
                </motion.div>
            </div>

            {/* Certificates and FAQ Section */}
            <CertiText />
            <FAQ />
        </div>
    );
};

export default CertificateText;
