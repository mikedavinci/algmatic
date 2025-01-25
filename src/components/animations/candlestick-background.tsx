import { motion } from "framer-motion";

function CandleStick({ x, delay, direction = "left" }: { x: number; delay: number; direction?: "left" | "right" }) {
  const yOffset = 800;
  const xOffset = direction === "left" ? -200 : 200;
  
  return (
    <g>
      <motion.line
        x1={x + 25}
        x2={x + 25}
        y1={0}
        y2={100}
        stroke="currentColor"
        strokeWidth={6}
        initial={{ opacity: 0, y: yOffset, x: 0 }}
        animate={{ 
          opacity: [0, 0.8, 0],
          y: [yOffset, -200],
          x: [0, xOffset]
        }}
        transition={{
          duration: 15,
          delay,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.rect
        x={x}
        width={50}
        height={80}
        fill="currentColor"
        initial={{ opacity: 0, y: yOffset, x: 0 }}
        animate={{ 
          opacity: [0, 0.8, 0],
          y: [yOffset, -200],
          x: [0, xOffset]
        }}
        transition={{
          duration: 15,
          delay,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </g>
  );
}

export function CandlestickBackground() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        <motion.svg
          viewBox="0 0 1200 800"
          className="w-full h-full text-primary/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Left side candlesticks */}
          {Array.from({ length: 10 }).map((_, i) => (
            <CandleStick
              key={i}
              x={i * 120}
              delay={i * 0.8}
              direction="left"
            />
          ))}
          {/* Right side candlesticks */}
          {Array.from({ length: 10 }).map((_, i) => (
            <CandleStick
              key={`right-${i}`}
              x={600 + (i * 120)}
              delay={i * 0.8}
              direction="right"
            />
          ))}
        </motion.svg>
      </div>
    </div>
  );
}