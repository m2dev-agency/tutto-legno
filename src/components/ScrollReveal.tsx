import { useEffect, useRef, useState } from 'react';
import type { ReactNode, CSSProperties } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delay?: number;
  className?: string;
}

// Stili iniziali per ogni tipo di animazione
const initialStyles: Record<string, CSSProperties> = {
  'fade-up': { opacity: 0, transform: 'translateY(30px)' },
  'fade-in': { opacity: 0 },
  'slide-left': { opacity: 0, transform: 'translateX(-40px)' },
  'slide-right': { opacity: 0, transform: 'translateX(40px)' },
};

// Stili finali (visibili)
const visibleStyles: CSSProperties = {
  opacity: 1,
  transform: 'translateY(0) translateX(0)',
};

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Bidirezionale: si attiva quando entra E quando esce
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {
    ...(isVisible ? visibleStyles : initialStyles[animation]),
    transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={style}
    >
      {children}
    </div>
  );
}
