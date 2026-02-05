import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const updateCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Dot follows immediately
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    };

    // Smooth follow for outer cursor
    const animateCursor = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      cursorX += dx * 0.15;
      cursorY += dy * 0.15;
      
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      
      requestAnimationFrame(animateCursor);
    };

    // Handle hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('a, button, [data-cursor="pointer"]')) {
        setIsHovering(true);
      }
      
      if (target.closest('[data-cursor-text]')) {
        setCursorText(target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text') || '');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-cursor="pointer"]')) {
        setIsHovering(false);
      }
      if (target.closest('[data-cursor-text]')) {
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    animateCursor();

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Hide on mobile/touch devices
  const isTouchDevice = typeof window !== 'undefined' && 'ontouchstart' in window;
  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer cursor - follows with delay */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 hidden lg:flex items-center justify-center ${
          isHovering ? 'scale-150' : 'scale-100'
        } ${isClicking ? 'scale-90' : ''}`}
        style={{
          width: cursorText ? 'auto' : '40px',
          height: cursorText ? 'auto' : '40px',
        }}
      >
        <div 
          className={`rounded-full border-2 transition-all duration-300 ${
            isHovering 
              ? 'border-accent-gold bg-accent-gold/10 w-16 h-16' 
              : 'border-wood-warm/30 w-10 h-10'
          } ${cursorText ? 'px-4 py-2 bg-wood-dark' : ''}`}
        >
          {cursorText && (
            <span className="text-white text-xs font-medium whitespace-nowrap">
              {cursorText}
            </span>
          )}
        </div>
      </div>
      
      {/* Inner dot - follows immediately */}
      <div
        ref={cursorDotRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block transition-transform duration-100 ${
          isClicking ? 'scale-50' : 'scale-100'
        } ${isHovering ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="w-2 h-2 bg-accent-gold rounded-full" />
      </div>
    </>
  );
}
