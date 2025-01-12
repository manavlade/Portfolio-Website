import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    // Framer Motion variants for animations
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <div className="p-8" id="faq" >
            {/* FAQ Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-8"
            >
                <p className="font-bold text-3xl">FAQ</p>
            </motion.div>

            {/* Accordion Section */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="p-8"
            >
                <Accordion type="single" collapsible className="w-full">
                    {[ // FAQ items as an array for easier mapping
                        {
                            value: "item-1",
                            question: "What services do you offer?",
                            answer:
                                "I provide comprehensive services, including web design, frontend development, and backend development, aimed at empowering businesses to establish a robust online presence. Each project is meticulously customized to align with the unique goals and requirements of my clients.",
                        },
                        {
                            value: "item-2",
                            question: "How can I contact you?",
                            answer:
                                "You can reach me via the social platforms like LinkedIn or directly through the email address provided. I am committed to responding to all inquiries promptly, typically within 24 hours.",
                        },
                        {
                            value: "item-3",
                            question: "What is your experience?",
                            answer:
                                "I have over five years of hands-on experience developing scalable and user-centric web applications using React.js, Next.js, and the MERN stack, with a diverse portfolio showcasing efficient and responsive solutions for various clients while staying updated with industry trends.",
                        },
                        {
                            value: "item-4",
                            question: "Do you provide support?",
                            answer:
                                "Yes, I offer ongoing support for all my projects. Whether you need technical assistance or updates, I'm here to help. My aim is to ensure your satisfaction long after the project is completed.",
                        },
                        {
                            value: "item-5",
                            question: "Can I see your portfolio?",
                            answer:
                                "Absolutely! You can view my portfolio on the dedicated section of my website. It includes examples of my previous work and my work experience. I encourage you to explore it to see my capabilities.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={item.value}
                            variants={itemVariants}
                            className="mb-4"
                        >
                            <AccordionItem value={item.value}>
                                <AccordionTrigger className="text-xl">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-lg">{item.answer}</AccordionContent>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>
            </motion.div>
        </div>
    );
};

export default FAQ;
