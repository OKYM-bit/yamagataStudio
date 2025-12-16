import React, { useEffect, useRef } from 'react';
import { HoverTrigger } from '../contexts/CursorContext';

const Family: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const stickersRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !window.gsap) return;

        // Idle animation
        stickersRef.current.forEach((el) => {
            if (!el) return;
            window.gsap.to(el, {
                y: "random(-20, 20)",
                x: "random(-20, 20)",
                rotation: "random(-10, 10)",
                duration: "random(2, 4)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        // Mouse interaction
        const handleMouseMove = (e: MouseEvent) => {
            stickersRef.current.forEach(el => {
                if (!el) return;
                const speed = parseFloat(el.getAttribute('data-speed') || '1');
                const x = (window.innerWidth / 2 - e.clientX) * speed / 20;
                const y = (window.innerHeight / 2 - e.clientY) * speed / 20;
                window.gsap.to(el, {
                    x: x,
                    y: y,
                    duration: 0.5,
                    ease: "back.out(1.5)"
                });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !stickersRef.current.includes(el)) {
            stickersRef.current.push(el);
        }
    };

    return (
        <section className="relative w-full py-32 bg-ne-white text-ne-black overflow-hidden">
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAADNJREFUGBljYGBg+A/E/4F4ExAzAvF/IGaE8hkhDLAJIgqgCqC8/0DMCIT/A/F/IGYEAAbOCw763yW/AAAAAElFTkSuQmCC")` }}></div>
            
            <div className="container mx-auto px-6 text-center relative z-10">
                 <span className="font-mono text-ne-blue text-sm mb-4 block">&gt; MISSION 02: FAMILY</span>
                <h2 className="text-5xl md:text-7xl font-black mb-6 font-serif">
                    全種族、<br />ウェルカム。
                </h2>
                <p className="text-ne-black/70 mb-20 max-w-xl mx-auto font-mono">
                    // 犬、猫、爬虫類、etc...<br />
                    // どんなバディも、ここでは主役だ。
                </p>
            </div>

            <div ref={containerRef} className="relative w-full h-[400px] flex justify-center items-center overflow-hidden" id="sticker-zone">
                <HoverTrigger type="hovered" className="absolute" data-speed="0.8">
                    <div ref={addToRefs} className="sticker font-pixel text-ne-white bg-ne-red p-4 shadow-[4px_4px_0px_0px_var(--ne-black)] rotate-12" data-speed="0.8">
                        <span className="block text-2xl mb-2">👾 DOGS!</span>
                        <div className="w-16 h-8 bg-ne-white mx-auto" style={{ clipPath: 'polygon(0% 20%, 20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)' }}></div>
                    </div>
                </HoverTrigger>

                <HoverTrigger type="hovered" className="absolute top-1/4 left-1/4" data-speed="1.2">
                    <div ref={addToRefs} className="sticker font-pixel text-ne-black bg-ne-yellow p-6 shadow-[4px_4px_0px_0px_var(--ne-black)] -rotate-6" data-speed="1.2">
                        <span className="block text-3xl mb-2">😻 CATS!</span>
                        <div className="w-12 h-12 bg-ne-black mx-auto rounded-full"></div>
                    </div>
                </HoverTrigger>

                <HoverTrigger type="hovered" className="absolute bottom-1/3 right-1/4" data-speed="1.5">
                    <div ref={addToRefs} className="sticker font-pixel text-ne-white bg-ne-blue p-3 shadow-[4px_4px_0px_0px_var(--ne-black)] rotate-[20deg]" data-speed="1.5">
                        <span className="block text-xl">🦕 DINO?</span>
                    </div>
                </HoverTrigger>

                <HoverTrigger type="hovered" className="absolute bottom-1/4 left-1/3" data-speed="0.6">
                    <div ref={addToRefs} className="sticker font-pixel text-ne-white bg-ne-green p-5 shadow-[4px_4px_0px_0px_var(--ne-black)] -rotate-12" data-speed="0.6">
                        <span className="block text-2xl">👽 ALIENS?</span>
                    </div>
                </HoverTrigger>

                <div className="absolute z-0 opacity-10 font-pixel text-[15vw] leading-none text-center pointer-events-none select-none text-ne-blue">
                    ALL<br />OK!
                </div>
            </div>
        </section>
    );
};

export default Family;