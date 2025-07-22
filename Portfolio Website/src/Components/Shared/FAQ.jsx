import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HelpCircle, Mail, Globe, Shield, Layers } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const FAQ = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    const faqItems = [
        {
            value: "item-1",
            question: "What services do you offer?",
            answer:
                "I provide comprehensive services, including web design, frontend development, backend development, and deployment, aimed at empowering businesses to establish a robust online presence. Each project is meticulously customized to align with the unique goals and requirements of my clients.",
            icon: <HelpCircle className="w-6 h-6 text-blue-500" />,
        },

        {
            value: "item-2",
            question: "How can I contact you?",
            answer:
                "You can reach me via the social platforms like LinkedIn or directly through the email address provided. I am committed to responding to all inquiries promptly, typically within 24 hours.",
            icon: <Mail className="w-6 h-6 text-green-500" />,
        },
        {
            value: "item-3",
            question: "What is your experience?",
            answer:
                "I have  one year of hands-on experience developing scalable and user-centric web applications using React.js, Next.js, and the MERN stack, with a diverse portfolio showcasing efficient and responsive solutions for various clients while staying updated with industry trends.",
            icon: <Globe className="w-6 h-6 text-purple-500" />,
        },
        {
            value: "item-4",
            question: "Do you provide support?",
            answer:
                "Yes, I offer ongoing support for all my projects. Whether you need technical assistance or updates, I'm here to help. My aim is to ensure your satisfaction long after the project is completed.",
            icon: <Shield className="w-6 h-6 text-red-500" />,
        },
        {
            value: "item-5",
            question: "Can I see your portfolio?",
            answer:
                "Absolutely! You can view my portfolio on the dedicated section of my website. It includes examples of my previous work and my work experience. I encourage you to explore it to see my capabilities.",
            icon: <Layers className="w-6 h-6 text-orange-500" />,
        },
    ];

    return (
        <div ref={ref} className="px-8 py-16 bg-gradient-to-b from-white to-gray-50" id="faq">
            {/* FAQ Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-8"
            >
                <p className="font-bold text-3xl text-gray-800">FAQ</p>
            </motion.div>

            {/* Accordion Section */}
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="p-8"
            >
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={item.value}
                            variants={itemVariants}
                            className="mb-4"
                        >
                            <AccordionItem value={item.value}>
                                <AccordionTrigger className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="flex items-center space-x-2">
                                        {item.icon}
                                        <span>{item.question}</span>
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="text-lg text-gray-700">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>

            </motion.div>
        </div>
    );
};

export default FAQ;
