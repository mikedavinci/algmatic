interface GridPatternProps {
  size?: number;
  className?: string;
}

export function GridPattern({ size = 32, className = "" }: GridPatternProps) {
  return (
    <div
      className={`absolute inset-0 bg-[linear-gradient(to_right,#8885_1px,transparent_1px),linear-gradient(to_bottom,#8885_1px,transparent_1px)] pointer-events-none ${className}`}
      style={{
        backgroundSize: `${size}px ${size}px`,
        maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
      }}
    />
  );
}
