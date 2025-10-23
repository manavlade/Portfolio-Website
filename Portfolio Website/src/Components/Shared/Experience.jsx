import React from "react";
import { motion } from "framer-motion";
import CertificateText from "../Certificates/Text";
import MyResume from "../../assests/Manav_Lade_Software_Developer.pdf"
import { Eye } from "lucide-react";
import { Button } from "../ui/button";

const experiences = [
    {
        date: "Aug 2025 – Present",
        title: "Chief Technical Officer — Illusion AI",
        description: `
        Architected and delivered AI-driven full-stack solutions end-to-end, ensuring <b> scalability, performance, security, and reliability </b> across cloud-native infrastructure. Built and launched the company’s landing page and product suite using <b> Next.js, Node.js, MongoDB, Pinecone, and GenAI </b>, significantly boosting brand visibility and user engagement.
        Designing and implementing back-end infrastructure for upcoming AI automation products using <b> Supabase, REST APIs, microservices, and containerization </b> for seamless integrations and rapid feature delivery.
        Driving product strategy with strong technical ownership, innovation, and leadership to accelerate development and delivery.
    `
    },
    {
        date: "Nov 2024 – July 2025",
        title: "Software Developer Intern — Aim2Excel",
        description: `
    Built a production-scale multi-role HealthTech platform (patient, consultant, admin) using <b> Next.js, TypeScript, TanStack Query, and ShadCN UI </b> with OTP authentication.  
    Developed a dynamic <b> Metabolic Form Builder </b> & 4 interactive health calculators (<b> BMI, BMR, Calorie, W/H ratio </b>), increasing engagement and SEO traffic.  
    Integrated <b> Razorpay </b> for subscription payments and implemented secure role-based route protection.  
    Added <b> Google Tag Manager </b> & <b> Meta Pixel </b> for marketing analytics and growth tracking.
    <b> Collaborated directly with clients to gather requirements, </b> resolve issues, and ensure project delivery; <b> owned end-to-end deployment, hosting and domain management (e.g., shruttibose.com). </b>
    <b> Collaborated with cross-functional teams, </b> applying strong communication, organizational skills, and customer service mindset to deliver high-quality solutions ahead of schedule.
    `
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
