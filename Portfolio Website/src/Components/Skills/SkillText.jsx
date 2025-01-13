import { ArrowRightToLine, Code, Server } from "lucide-react";
import { Button } from "../ui/button";
import { SkillIcon } from "./SkillImage";
import { motion } from "framer-motion";
import Projects from "../Projects/Projects";

const SkillText = () => {
    return (
        <div>
            <div className="py-12 px-6 lg:px-20" id="skills" >
                {/* Title Section */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className=" text-lg text-gray-600 uppercase tracking-wide">
                        Core Competencies
                    </p>
                    <h1 className="text-2xl lg:text-5xl font-extrabold text-gray-900 mt-2">
                        Driving My Success
                    </h1>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="space-y-6">
                            {/* Introduction */}
                            <div className="border-l-4 border-gray-900 pl-6">
                                <h2 className="text-3xl font-semibold text-gray-800">
                                    Mastering the Art of Full Stack Development
                                </h2>
                                <p className="text-lg text-gray-600 mt-4">
                                    With a strong foundation in HTML, CSS, and JavaScript, I create
                                    responsive and user-friendly websites. My projects showcase
                                    innovative solutions that enhance user experience and drive
                                    engagement.
                                </p>
                            </div>

                            {/* Skills Section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
                                {/* Frontend Expertise Card */}
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 1 }}
                                    className="p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 border border-gray-200 rounded-xl shadow-lg transform transition duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-indigo-500 text-white rounded-full">
                                            <Code className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800">Frontend</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Expertise in crafting seamless UI/UX with React, Tailwind CSS, and modern frontend tools.
                                    </p>
                                </motion.div>

                                {/* Backend Expertise Card */}
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: -1 }}
                                    className="p-6 bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 border border-gray-200 rounded-xl shadow-lg transform transition duration-300"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-green-500 text-white rounded-full">
                                            <Server className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800">Backend</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Proficient in building robust backend systems using Node.js, Express, and databases.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 mt-6">
                                <Button className="px-6 py-3 border border-gray-400 rounded-md hover:bg-gray-100" onClick={() => (window.location.href = "https://github.com/manavlade")} >
                                    Learn More
                                </Button>
                                <Button className="px-6 py-3  bg-black text-white rounded-md hover:bg-gray-800 flex  gap-2">
                                   <a href="#projects">
                                        See Projects <ArrowRightToLine />
                                   </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        <SkillIcon />
                    </motion.div>
                </div>
            </div>
            <Projects/>
       </div>
    );
};

export default SkillText;


// import { ArrowRightToLine } from "lucide-react";
// import { Button } from "../ui/button";
// import { SkillIcon } from "./SkillImage";
// import { motion } from "framer-motion";

// const SkillText = () => {
//     return (
//         <div className="relative py-12 px-6 lg:px-20 overflow-hidden">
//             {/* Background Gradient Animation */}
//             <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-30 blur-xl -z-10"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     ease: "easeInOut",
//                 }}
//             ></motion.div>

//             {/* Title Section */}
//             <motion.div
//                 className="text-center mb-10"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//                 <p className="text-sm text-gray-500 uppercase tracking-wide">
//                     Core Competencies
//                 </p>
//                 <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
//                     Driving My Success
//                 </h1>
//             </motion.div>

//             {/* Main Content */}
//             <div className="grid lg:grid-cols-2 gap-10 items-center">
//                 {/* Left Side */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 1, ease: "easeOut" }}
//                 >
//                     <div className="space-y-6">
//                         {/* Introduction */}
//                         <div className="border-l-4 border-gray-900 pl-6">
//                             <h2 className="text-3xl font-semibold text-gray-800">
//                                 Mastering the Art of Full Stack Development
//                             </h2>
//                             <p className="text-lg text-gray-600 mt-4">
//                                 With a strong foundation in HTML, CSS, and JavaScript, I create
//                                 responsive and user-friendly websites. My projects showcase
//                                 innovative solutions that enhance user experience and drive
//                                 engagement.
//                             </p>
//                         </div>

//                         {/* Skills Section */}
//                         <div className="grid grid-cols-2 gap-5">
//                             <motion.div
//                                 whileHover={{ scale: 1.05 }}
//                                 className="p-5 border rounded-lg shadow-lg bg-gray-50"
//                             >
//                                 <h3 className="text-xl font-semibold text-gray-800">Frontend</h3>
//                                 <p className="text-gray-600 mt-2">
//                                     Expertise in crafting seamless UI/UX with React, Tailwind CSS,
//                                     and modern frontend tools.
//                                 </p>
//                             </motion.div>
//                             <motion.div
//                                 whileHover={{ scale: 1.05 }}
//                                 className="p-5 border rounded-lg shadow-lg bg-gray-50"
//                             >
//                                 <h3 className="text-xl font-semibold text-gray-800">Backend</h3>
//                                 <p className="text-gray-600 mt-2">
//                                     Proficient in building robust backend systems using Node.js,
//                                     Express, and databases.
//                                 </p>
//                             </motion.div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex gap-4 mt-6">
//                             <Button className="px-6 py-3 border border-gray-400 rounded-md hover:bg-gray-100">
//                                 Learn More
//                             </Button>
//                             <Button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 flex items-center gap-2">
//                                 See Projects <ArrowRightToLine />
//                             </Button>
//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* Right Side */}
//                 <motion.div
//                     className="flex items-center justify-center relative"
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
//                 >
//                     <SkillIcon />
//                     {/* Subtle Glow Animation */}
//                     <motion.div
//                         className="absolute w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 rounded-full blur-lg -z-10"
//                         initial={{ scale: 0.8, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{
//                             duration: 2,
//                             repeat: Infinity,
//                             repeatType: "reverse",
//                             ease: "easeInOut",
//                         }}
//                     ></motion.div>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default SkillText;

