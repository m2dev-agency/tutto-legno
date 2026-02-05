import { useRef, useEffect, useState } from 'react';

interface MarqueeTextProps {
  text: string;
  speed?: number;
  className?: string;
  separator?: string;
}

export default function MarqueeText({ 
  text, 
  speed = 50, 
  className = '',
  separator = '✦'
}: MarqueeTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationDuration, setAnimationDuration] = useState(30);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth / 2;
      const duration = containerWidth / speed;
      setAnimationDuration(duration);
    }
  }, [text, speed]);

  const items = Array(6).fill(text);

  return (
    <div 
      className={`overflow-hidden whitespace-nowrap ${className}`}
      style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
    >
      <div 
        ref={containerRef}
        className="inline-flex"
        style={{
          animation: `marquee ${animationDuration}s linear infinite`,
        }}
      >
        {items.map((item, index) => (
          <span key={index} className="inline-flex items-center">
            <span className="mx-8">{item}</span>
            <span className="text-accent-gold mx-4">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
