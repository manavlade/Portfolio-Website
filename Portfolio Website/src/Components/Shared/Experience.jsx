// experience.jsx

import React from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

const experiences = [
    {
        date: "2023",
        title: "Short heading here",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
        date: "2022",
        title: "Short heading here",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
        date: "2021",
        title: "Short heading here",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
];

export default function Experience() {
    const lineVariants = {
        hidden: { height: 0 },
        visible: { height: "100%", transition: { duration: 1, ease: "easeInOut" } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.3, duration: 0.5, ease: "easeInOut" },
        }),
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col lg:flex-row lg:items-center">
                {/* Left Section */}
                <div className="lg:w-1/3 mb-12 lg:mb-0">
                    <h2 className="text-lg font-semibold text-gray-500">Professional Experience</h2>
                    <h1 className="text-4xl font-bold mb-6">Building Scalable and User-Centric Applications</h1>
                    <p className="text-gray-600 mb-6">
                        Passionate software developer specializing in MERN stack, Next.js,& cloud computing, with 
                        expertise in building scalable web applications, enhancing efficiency.
                    </p>
                    <div className="flex gap-4">
                        <Button variant="default">View Resume</Button>
                        <Button variant="outline">Contact Me</Button>
                    </div>
                </div>


                {/* Right Section */}
                <div className="lg:w-2/3 relative">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={lineVariants}
                        className="absolute left-4 top-0 w-1 bg-gray-300"
                    />
                    <div className="space-y-16 relative">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                variants={cardVariants}
                                className="flex gap-6"
                                viewport={{ once: true, amount: 0.6 }}
                            >
                                <div className="relative">
                                    <div className="w-6 h-6 bg-gray-700 rounded-full border-4 border-white"></div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{exp.date}</h3>
                                    <h4 className="text-xl font-bold mb-2">{exp.title}</h4>
                                    <p className="text-gray-600 mb-4">{exp.description}</p>
                                    <Button variant="default">Button</Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
