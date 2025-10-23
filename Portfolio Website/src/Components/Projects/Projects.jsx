import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AiCompanion from "../../assests/AI.png";
import Experience from "../Shared/Experience";
import TalentBridge from "../../assests/JobPortal.png";
import ChildRights from "../../assests/Childrights.jpg";
import Task from "../../assests/task.png";
import Portfolio from "../../assests/portfolio.png";
import EarlyFit from "../../assests/early.png";

const projects = [
    {
        title: "AI-Powered Task Management System",
        description: "Smart task manager with AI-driven features like smart assistant, sentiment analysis and many more... Features include visual analytics and a modern responsive UI.",
        tags: ["AI Integration", "Smart Prioritization", "Sentiment Analysis", "Responsive", "Modern UI/UX", "Data Visualization"],
        image: Task,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7376130732848578560/",
    },
    {
        title: "Early Fit – Personalized Fitness & Wellness Assistant",
        description: "Fitness platform with OTP-auth forms, Razorpay payments, real time chat patient, consultant and admin panels",
        tags: ["HealthTech", "Full Stack", "AI Insights", "Metabolic Form", "Consultation", "Fitness", "SEO", "Responsive UI"],
        image: EarlyFit,
        link: "https://early.fit/",
    },
    {
        title: "TalentBridge",
        description: "An innovative platform for job seekers and talent seekers with role based access and a modern responsive UI.",
        tags: ["User-Friendly", "Productivity", "Responsive", "Modern", "UI/UX"],
        image: TalentBridge,
        link: "https://github.com/manavlade/Job-Search-Platform",
    },
    {
        title: "AI Companion",
        description: "A modern, responsive website where users can talk to famous people.",
        tags: ["User-Friendly", "Productivity", "Responsive", "Modern", "UI/UX"],
        image: AiCompanion,
        link: "https://github.com/manavlade/Ai-Companion",
    },
    {
        title: "Child Rights Platform",
        description: "An innovative platform for children to help learn about their rights through games.",
        tags: ["User-Friendly", "Productivity", "Responsive", "Modern", "UI/UX"],
        image: ChildRights,
        link: "https://github.com/manavlade/Child-Rights-Portal",
    },
    {
        title: "Portfolio Website",
        description: "A portfolio website to showcase my skills, certificates, and projects.",
        tags: ["User-Friendly", "Productivity", "Responsive", "Modern", "UI/UX"],
        image: Portfolio,
        link: "https://manavladeportfolio.netlify.app/",
    },
];
const ProjectCard = ({ title, description, tags, image, link }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-10% 0px -10% 0px" });

    return (
        <motion.div
            ref={cardRef}
            className="flex flex-col bg-gradient-to-r from-white via-gray-50 to-gray-100 shadow-md rounded-lg p-4 hover:shadow-xl transform transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full h-56 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                <img src={image} alt={title} className="object-cover w-full h-full" />
            </div>

            {/* Content */}
            <div className="mt-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mt-2 flex-grow">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Link aligned at bottom */}
                <div className="mt-auto pt-4">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black text-sm font-medium hover:underline"
                    >
                        View project &rarr;
                    </a>
                </div>
            </div>
        </motion.div>
    );
};


const Projects = () => {
    return (
        <div>
            <section className="py-16 px-6 lg:px-20 bg-gradient-to-b from-white to-gray-50" id="projects">
                <div className="text-center mb-12">
                    <p className="text-lg uppercase text-gray-500 tracking-wide">
                        Projects
                    </p>
                    <h2 className="text-2xl lg:text-5xl font-extrabold text-gray-900 mt-2">
                        Explore My Creative Work
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                        A collection of my best projects and achievements.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </section>
            <Experience />
        </div>
    );
};

export default Projects;
