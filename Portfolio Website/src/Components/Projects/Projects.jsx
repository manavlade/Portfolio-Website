import React from "react";
import { motion } from "framer-motion";
import AiCompanion from '../../assests/AI.png';
import Experience from "../Shared/Experience";

const projects = [
    {
        title: "Web Design",
        description: "A modern, responsive website for a local business.",
        tags: ["Responsive", "Modern", "UI/UX"],
        image: 'AiCompanion'
    },
    {
        title: "Mobile App",
        description: "An innovative app that simplifies daily task management.",
        tags: ["Cross-platform", "User-Friendly", "Productivity"],
        image: 'AiCompanion'
    },
    ...Array(4).fill({
        title: "Project name here",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        tags: ["Feature A", "Feature B", "Feature C"],
        image: 'AiCompanion'
    }),
];

const ProjectCard = ({ title, description, tags }) => (
    <motion.div
        className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
    >
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
            <img src={AiCompanion} alt="" srcset="" />
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
            <button className="mt-4 text-black text-sm font-medium hover:underline">
                View project &rarr;
            </button>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <div>
            <section className="py-16 px-6 lg:px-20 bg-gray-50">
                <div className="text-center mb-12">
                    <p className="text-lg uppercase text-gray-500 tracking-wide">Projects</p>
                    <h2 className="text-2xl lg:text-5xl font-extrabold text-gray-900 mt-2">Explore My Creative Work</h2>
                    <p className=" text-lg text-gray-600 mt-2">
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
                                staggerChildren: 0.2,
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
                        />
                    ))}
                </motion.div>

            </section>
            <Experience/>
        </div>
    );
};

export default Projects;
