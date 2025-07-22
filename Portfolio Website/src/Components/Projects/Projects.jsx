import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AiCompanion from "../../assests/AI.png";
import Experience from "../Shared/Experience";
import TalentBridge from "../../assests/JobPortal.png";
import ChildRights from "../../assests/Childrights.jpg";
import Task from "../../assests/task.png";
import Portfolio from "../../assests/portfolio.png";

const projects = [
    {
        title: "AI Companion",
        description: "A modern, responsive website where users can talk to famous people.",
        tags: ["User-Friendly", "Productivity", "Responsive", "Modern", "UI/UX"],
        image: AiCompanion,
        link: "https://github.com/manavlade/Ai-Companion",
    },
    {
        title: "TalentBridge",
        description: "An innovative platform for job seekers and talent seekers with advanced AI features.",
        tags: ["User-Friendly", "Productivity", "Responsive", "Modern", "UI/UX"],
        image: TalentBridge,
        link: "https://github.com/manavlade/Job-Search-Platform",
    },
    {
        title: "Child Rights Platform",
        description: "An innovative platform for children to help learn about their rights.",
        tags: ["User-Friendly", "Productivity", "Responsive", "Modern", "UI/UX"],
        image: ChildRights,
        link: "https://github.com/manavlade/Child-Rights-Portal",
    },
    {
        title: "Task Management System",
        description: "An innovative platform for users to manage their tasks with reminder functionality.",
        tags: ["User-Friendly", "Productivity", "Responsive", "Modern", "UI/UX", "Data Analytics"],
        image: Task,
        link: "https://github.com/manavlade/Task-Management-App",
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
            className="bg-gradient-to-r from-white via-gray-50 to-gray-100 shadow-md rounded-lg p-6 hover:shadow-xl transform transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full h-56 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
                <img src={image} alt={title} className="object-cover w-full h-full" />
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 mt-2">{description}</p>
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
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-black text-sm font-medium hover:underline"
                >
                    View project &rarr;
                </a>
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
