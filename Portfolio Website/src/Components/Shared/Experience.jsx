import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import CertificateText from "../Certificates/Text";
import MyResume from "../../assests/Manav_Lade_Software_Developer.pdf"
import { Eye } from "lucide-react";

const experiences = [
    {
        date: "November 2024-Present",
        title: "Software Developer at Aim2Excel",
        description: "Creating Engaging websites increasing user interactivity by 15%, Creating strong API's using node.js, express.js and nest.js",
    },
    {
        date: "August 2024 - September 2024",
        title: "Software Developer at J.P. Morgan & Chase",
        description: "Collaborated with cross-functional teams to draft and prioritize user stories, conducted daily standups to enhance team productivity, and executed sprint reviews and retrospectives to improve future development cycles.",
    },

    {
        date: "September 2023 - October 2023",
        title: "Frontend Developer at SYNC Interns",
        description: "Led the development of a responsive chat web application using React.js and Node.js, integrating real-time features via WebSockets. Built a collaborative code editor with Firebase, boosting team productivity by 30%.",
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
        <div>
            <section className="max-w-7xl mx-auto px-6 py-16" id="experience" >
                <div className="flex flex-col lg:flex-row lg:items-center">
                    {/* Left Section */}
                    <div className="lg:w-1/3 mb-12 lg:mb-0">
                        <h2 className="text-lg font-semibold text-gray-500">Professional Experience</h2>
                        <h1 className="text-4xl font-bold mb-6">Building Scalable and User-Centric Applications</h1>
                        <p className="text-gray-600 mb-6">
                            Passionate software developer specializing in MERN stack, Next.js,& cloud computing, with
                            expertise in building scalable web applications, enhancing efficiency.
                        </p>
                        <div className="flex gap-4  ">
                            <a href={MyResume} target="_blank" rel="noopener noreferrer">
                                <Button type="button" variant="outline" className="btn lg:text-2xl btn-outline-success btn-lg">
                                    View Resume <Eye className=" items-center " size={60} />
                                </Button>
                            </a>
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

                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <CertificateText />
        </div>
    );
}
