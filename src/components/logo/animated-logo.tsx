import { motion } from "framer-motion";

export function AnimatedLogo() {
  return (
    <div className="relative w-10 h-10">
      <motion.img
        src="https://res.cloudinary.com/dtgmhmxlx/image/upload/v1737791264/algomatic/cropped-one_m9ifgz.png"
        alt="Algomatic Logo"
        className="w-full h-full object-contain"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
        }}
      />
    </div>
  );
}