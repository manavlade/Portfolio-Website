import React from "react";
import { motion } from "framer-motion";
import CertificateText from "../Certificates/Text";
import MyResume from "../../assests/Manav_Lade_Software_Developer.pdf"
import { Eye } from "lucide-react";
import { Button } from "../ui/button";

const experiences = [
    {
        date: "November 2024-Present",
        title: "Software Developer at Aim2Excel",
        description: `
        <b> Early Fit Platform - Full Stack Developer | HealthTech Web Platform  </b> 
        <b> Tech Stack: Next.js, TypeScript, TanStack Query, Tailwind CSS, ShadCN UI, React Context API </b>
        Developed a multi-role healthcare platform featuring patient, consultant, and admin portals, built for performance, security, and scalability across diverse user roles.
        Architected a Metabolic Form Builder, a dynamic multi-step form with OTP-based phone number verification, enabling personalized data capture. Integrated TanStack Query and Context API for smooth data flow and state management.
        Built client's comprehensive Health & Wellness website with SEO-optimized routes with 4 interactive health calculators (BMI, BMR, Calorie, Waist-to-Hip), increasing organic traffic by 30%.
        <b> Integrated Google Tag Manager and Meta Pixel, </b> enabling data-driven user behavior insights that improved marketing effectiveness.
        <b> Engineered role-based portals: </b>
        <b> Early Fit Front </b>: Enabled patients to book video consultations, receive prescriptions, make subscription payments and access therapy resources and authenticated users using <b> OTP based authentication </b>.
        <b> Early Fit Consultant </b>: Empowered doctors to manage appointments, issue prescriptions, and provide treatment plans.
        <b> Early Fit Admin </b>: Built admin dashboard with full CRUD capabilities for managing users, content, plans, consultants and appointments.
        `,
    },
    {
        date: "August 2024 - September 2024",
        title: "Agile Job Simulation at J.P. Morgan & Chase",
        description: "Intro	to	Agile, Scrum at JPMC, User Stories, Backlog	Refinement, Daily Standups"
    },

    {
        date: "September 2023 - October 2023",
        title: "Frontend Developer at SYNC Interns",
        description: "Led the development of a responsive chat web application using React.js and Node.js, integrating real-time features via WebSockets. Built a collaborative code editor with Firebase, boosting team productivity by 30%.",
    },


];

function formatDescription(description) {
    // Replace commas with line breaks
    let formatted = description.replace(/\n\s*/g, '<br/>');

    // Preserve <b> tags (since they are already in your string)
    // Optionally, trim extra spaces
    formatted = formatted.trim();

    return { __html: formatted };
}


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
            <section className="w-[90%] mx-auto py-16" id="experience" >
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
                                    View My Resume <Eye className=" items-center " size={60} />
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
                        <div className="space-y-10 relative">
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
                                        <p
                                            className="text-gray-600 text-md mb-4"
                                            dangerouslySetInnerHTML={formatDescription(exp.description)}
                                        />



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
