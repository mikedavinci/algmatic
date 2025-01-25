import { motion } from "framer-motion";

export function AnimatedLogo() {
  return (
    <div className="relative w-12 h-12">
      <motion.img
        src="https://res.cloudinary.com/dtgmhmxlx/image/upload/v1737832292/algomatic/DALL_E_2025-01-25_01.19.26_-_Auri_is_a_cute_and_magnetic_humanoid_AI_character_with_an_approachable_and_modern_design._She_has_a_youthful_and_friendly_appearance_with_soft_glowin_avl6ch.webp"
        alt="Auri Logo"
        className="w-full h-full object-contain rounded-full"
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