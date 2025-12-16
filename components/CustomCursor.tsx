import React, { useEffect, useRef } from 'react';
import { useCursor } from '../contexts/CursorContext';

const CustomCursor: React.FC = () => {
    const { cursorType } = useCursor();
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMouseMove = (e: MouseEvent) => {
            // Using GSAP for smooth following, assuming window.gsap is available via index.html
            if (window.gsap) {
                window.gsap.to(cursor, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.15,
                    ease: "power2.out"
                });
            } else {
                // Fallback if script failed to load
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    // Styles based on state
    const getStyles = () => {
        switch (cursorType) {
            case 'hovered':
                return 'w-12 h-12 bg-ne-red rounded-full shadow-[-4px_-4px_0px_0px_var(--ne-yellow)] mix-blend-difference';
            case 'active':
                return 'w-8 h-8 bg-ne-white rotate-45 shadow-none mix-blend-difference';
            default:
                return 'w-6 h-6 bg-ne-green rounded-none shadow-[4px_4px_0px_0px_var(--ne-blue)] mix-blend-difference';
        }
    };

    return (
        <div 
            ref={cursorRef}
            className={`fixed top-0 left-0 pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 image-rendering-pixelated ${getStyles()}`}
            id="cursor"
        />
    );
};

export default CustomCursor;