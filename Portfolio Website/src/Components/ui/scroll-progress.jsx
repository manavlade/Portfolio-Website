import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress({
  className
}) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    (<motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-[#000000] via-[#4F4F4F] to-[#A9A9A9] ",
        className
      )}
      style={{
        scaleX,
      }} />)
  );
}
