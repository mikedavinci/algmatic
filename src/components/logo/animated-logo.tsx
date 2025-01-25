import { motion } from "framer-motion";

export function AnimatedLogo() {
  return (
    <div className="relative w-10 h-10">
      <motion.svg
        viewBox="0 0 24 24"
        className="w-full h-full text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Grid lines */}
        <path
          stroke="currentColor"
          strokeOpacity="0.2"
          strokeWidth="0.5"
          d="M0 6 H24 M0 12 H24 M0 18 H24"
        />

        {/* Candlesticks */}
        <motion.g
          initial={{ y: 4 }}
          animate={{ y: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {/* First candlestick */}
          <motion.rect
            x="4" y="8" width="2" height="6"
            fill="currentColor"
            initial={{ height: 8 }}
            animate={{ height: 6 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <line x1="5" y1="7" x2="5" y2="15" stroke="currentColor" strokeWidth="0.5" />

          {/* Second candlestick */}
          <motion.rect
            x="9" y="6" width="2" height="8"
            fill="currentColor"
            initial={{ height: 6 }}
            animate={{ height: 8 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.2
            }}
          />
          <line x1="10" y1="4" x2="10" y2="14" stroke="currentColor" strokeWidth="0.5" />

          {/* Third candlestick */}
          <motion.rect
            x="14" y="4" width="2" height="10"
            fill="currentColor"
            initial={{ height: 8 }}
            animate={{ height: 10 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.4
            }}
          />
          <line x1="15" y1="2" x2="15" y2="14" stroke="currentColor" strokeWidth="0.5" />

          {/* Fourth candlestick */}
          <motion.rect
            x="19" y="2" width="2" height="12"
            fill="currentColor"
            initial={{ height: 10 }}
            animate={{ height: 12 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.6
            }}
          />
          <line x1="20" y1="1" x2="20" y2="14" stroke="currentColor" strokeWidth="0.5" />
        </motion.g>
      </motion.svg>
    </div>
  );
}