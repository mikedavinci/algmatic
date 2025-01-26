import { HTMLAttributes } from 'react';

interface GridPatternProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export function GridPattern({ 
  size = 32, 
  className = "", 
  x,
  y,
  width,
  height,
  ...props 
}: GridPatternProps) {
  return (
    <div
      className={`absolute inset-0 bg-[linear-gradient(to_right,#8885_1px,transparent_1px),linear-gradient(to_bottom,#8885_1px,transparent_1px)] pointer-events-none ${className}`}
      style={{
        backgroundSize: `${size}px ${size}px`,
        maskImage: 'linear-gradient(to bottom, transparent, black, transparent)',
        transform: x || y ? `translate(${x}px, ${y}px)` : undefined,
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
      }}
      {...props}
    />
  );
}
