import React from "react";
import { motion } from "framer-motion";
import FAQ from "../Shared/FAQ";
import {  CourseCertImages } from "./CourseCertImages";
import CertiText from "./CertificatesText";

const CertificateText = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center  bg-white px-6 py-12">
                {/* Heading Section */}
                <motion.div
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-4xl font-bold text-black leading-tight mb-4">
                        Explore My Professional <br /> Certificates and Achievements
                    </h1>
                    <p className="text-lg text-black/70">
                        Each certificate represents a significant milestone in my professional journey. Discover the organizations that recognized my skills and dedication.
                    </p>
                </motion.div>

                {/* Animated Accent Line */}
                <motion.div
                    className="w-1/2 h-1 bg-black rounded-full mb-12"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                ></motion.div>

                {/* Call-to-Action Section */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    {/* Button 1: Black Background, White Text */}
                    <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform">
                        View Certificates
                    </button>
                </motion.div>
            </div>
            <CertiText/>
            <FAQ />
        </div>
    );
};

export default CertificateText;
