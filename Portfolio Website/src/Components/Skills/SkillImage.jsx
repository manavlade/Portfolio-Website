import React from "react";
import { motion, useInView } from "framer-motion";
import { Code, Cpu, Cloud, Server, Database, Link, Lock, Globe } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { useRef } from "react";

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
    const skillsData = [
        {
            title: "Programming Languages and Frameworks",
            icon: <Code className="w-8 h-8 text-indigo-500" />,
            gradient: "from-white via-gray-100 to-gray-200",
            items: [
                { name: "TypeScript", description: "A typed superset of JavaScript" },
                { name: "JavaScript", description: "A versatile scripting language for the web" },
                { name: "Java", description: "A popular, platform-independent language" },
                { name: "Node.js", description: "A runtime for building server-side applications" },
                { name: "Express.js", description: "A lightweight Node.js framework" },
                { name: "Nest.js", description: "A framework for building scalable Node.js apps" },
            ],
        },
        {
            title: "DevOps and Tools",
            icon: <Cpu className="w-8 h-8 text-green-500" />,
            gradient: "from-white via-gray-100 to-gray-200",
            items: [
                { name: "Docker", description: "A tool for containerizing applications" },
                { name: "Git", description: "Version control system for tracking changes" },
                { name: "AWS CLI", description: "Command-line tool for AWS services" },
            ],
        },
        {
            title: "Data Storage and Caching",
            icon: <Database className="w-8 h-8 text-yellow-500" />,
            gradient: "from-white via-gray-100 to-gray-200",
            items: [
                { name: "MongoDB", description: "NoSQL database for flexible schema" },
                { name: "Redis", description: "In-memory key-value store for caching" },
                { name: "MySQL", description: "Relational database management system" },
                { name: "Prisma", description: "Type-safe database ORM" },
            ],
        },
        {
            title: "Frontend Development",
            icon: <Globe className="w-8 h-8 text-pink-500" />,
            gradient: "from-white via-gray-100 to-gray-200",
            items: [
                { name: "React.js", description: "A library for building UI components" },
                { name: "Next.js", description: "A framework for React with server-side rendering" },
                { name: "Tailwind CSS", description: "Utility-first CSS framework" },
                { name: "Redux", description: "State management library for React" },
                { name: "Bootstrap", description: "CSS framework for responsive designs" },
                { name: "UI/UX Design", description: "Creating intuitive and visually appealing designs" },
            ],
        },
        {
            title: "Cloud and AWS",
            icon: <Cloud className="w-8 h-8 text-blue-500" />,
            gradient: "from-white via-gray-100 to-gray-200",
            items: [
                { name: "S3", description: "Scalable object storage service" },
                { name: "EC2", description: "Virtual servers in the cloud" },
                { name: "IAM", description: "Identity and Access Management" },
                { name: "Lambda Functions", description: "Event-driven serverless compute" },
                { name: "CloudWatch", description: "Monitoring and management service" },
            ],
        },
        {
            title: "Integrations and APIs",
            icon: <Link className="w-8 h-8 text-purple-500" />,
            gradient: "from-white via-gray-100 to-gray-200",
            items: [
                { name: "Firebase", description: "Backend-as-a-Service for web and mobile apps" },
                { name: "OpenAI API", description: "AI-powered language and image APIs" },
                { name: "RESTful APIs", description: "APIs following REST principles" },
                { name: "Stripe", description: "Payment gateway integration" },
            ],
        },
        {
            title: "Authentication and Security",
            icon: <Lock className="w-8 h-8 text-teal-500" />,
            gradient: "from-white via-gray-100 to-gray-200",
            items: [
                { name: "Clerk", description: "Authorization framework" },
                { name: "JWT-based Authentication", description: " Stateless Authentication" },
                { name: "Firebase Auth", description: "Authentication service by Firebase" },
                { name: "OTP Authentication", description: "Authentication using OTP" },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <section
            ref={ref}
            className="min-h-screen py-16 bg-gradient-to-b from-white to-gray-50"
        >
            <div>
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-bold text-gray-900">My Skills</h2>
                    <p className="text-lg text-gray-600">
                        A showcase of my expertise across various domains, tools, and technologies.
                    </p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`p-6 rounded-lg shadow-lg bg-gradient-to-r ${skill.gradient} transform hover:scale-105 transition-transform duration-300`}
                        >
                            <div className="flex items-center mb-4">
                                {skill.icon}
                                <h3 className="ml-4 text-2xl font-semibold text-gray-800">
                                    {skill.title}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-4">
                                {skill.items.map((item, i) => (
                                    <TooltipProvider key={i}>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <span className="bg-white border rounded-2xl text-gray-800 text-sm font-medium py-1 px-3 shadow-sm cursor-pointer">
                                                    {item.name}
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <span className="bg-white font-semibold">
                                                    {item.description}
                                                </span>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
