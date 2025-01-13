import React from "react";
import { motion } from "framer-motion";
import AiCompanion from '../../assests/AI.png';
import Experience from "../Shared/Experience";
import TalentBridge from "../../assests/JobPortal.png";
import ChildRights from "../../assests/Childrights.jpg";
import Task from "../../assests/task.png";
import Portfolio from "../../assests/portfolio.png";

const projects = [
    {
        title: "AI Companion",
        description: "A modern, responsive website where users can talk to famous people .",
        tags: ["User-Friendly", "Productivity", "Responsive", "Modern", "UI/UX"],
        image: AiCompanion,
        link: "https://github.com/manavlade/Ai-Companion"
    },
    {
        title: "TalentBridge",
        description: "An innovative platform for job seekers and talent seekers with advanced AI features",
        tags: ["User-Friendly", "Productivity", "Responsive", "Modern", "UI/UX"],
        image: TalentBridge,
        link: "https://github.com/manavlade/Job-Search-Platform"
    },
    {
        title: "Child Rights Platform",
        description: "An innovative platform children to help learn about their rights ",
        tags: ["User-Friendly", "Productivity", "Responsive", "Modern", "UI/UX"],
        image: ChildRights,
        link:"https://github.com/manavlade/Child-Rights-Portal"
    },
    {
        title: "Task Management System",
        description: "An innovative platform for users to manage their tasks with reminder functionality",
        tags: ["User-Friendly", "Productivity", "Responsive", "Modern", "UI/UX"],
        image: Task,
        link: "https://github.com/manavlade/Task-Management-App"
    },
    {
        title: "Portfolio Website",
        description: "A portfolio website to showcase my skills, certficates and projects",
        tags: ["User-Friendly", "Productivity", "Responsive", "Modern", "UI/UX"],
        image: Portfolio,
        link: "https://manavladeportfolio.netlify.app/"
    },
    // ...Array(4).fill({
    //     title: "Project name here",
    //     description:
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    //     tags: ["Feature A", "Feature B", "Feature C"],
    //     image: 'AiCompanion'
    // }),
];


const ProjectCard = ({ title, description, tags, image, link, delay }) => (
    <motion.div
        className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
    >
        <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
        <div className="mt-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-xs font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
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

const Projects = () => {
    return (
        <div>
            <section className="py-16 px-6 lg:px-20 bg-gray-50" id="projects">
                <div className="text-center mb-12">
                    <p className="text-lg uppercase text-gray-500 tracking-wide hover:scale-110 transform transition-transform duration-200 cursor-pointer hover:underline">
                        Projects
                    </p>
                    <h2 className="text-2xl lg:text-5xl font-extrabold text-gray-900 mt-2">
                        Explore My Creative Work
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                        A collection of my best projects and achievements.
                    </p>
                </div>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.3, // Stagger animation for children
                            },
                        },
                    }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            image={project.image}
                            link={project.link} // Pass link for navigation
                            delay={index * 0.3} // Add delay to stagger animations
                        />
                    ))}
                </motion.div>
            </section>
            <Experience />
        </div>
    );
};

export default Projects;