import React, { useRef, useEffect } from 'react';
import { HoverTrigger } from '../contexts/CursorContext';

const Concept: React.FC = () => {
    const destroyZoneRef = useRef<HTMLDivElement>(null);
    const pixelLayerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const zone = destroyZoneRef.current;
        const layer = pixelLayerRef.current;

        if (!zone || !layer) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = zone.getBoundingClientRect();
            // Check if cursor is inside the zone
            if (
                e.clientX >= rect.left && 
                e.clientX <= rect.right && 
                e.clientY >= rect.top && 
                e.clientY <= rect.bottom
            ) {
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const dist = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
                const maxDist = rect.width / 1.5;
                const opacity = Math.min(1, dist / maxDist);
                
                if (window.gsap) {
                    window.gsap.to(layer, {
                        opacity: opacity > 0.2 ? opacity : 0,
                        filter: `blur(${(1 - opacity) * 20}px)`,
                        duration: 0.2
                    });
                }
            } else {
                if (window.gsap) {
                    window.gsap.to(layer, { opacity: 0.2, filter: 'blur(0px)', duration: 0.5 });
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // SVG for the house icon
    const houseSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 10 10'%3E%3Cpath fill='%23f0f0f0' d='M5 0 L0 5 L2 5 L2 10 L8 10 L8 5 L10 5 Z'/%3E%3C/svg%3E";

    return (
        <section id="concept" className="relative w-full py-32 px-6 overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="font-mono text-ne-red text-sm mb-4 block">&gt; MISSION 01: CREATE</span>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 font-serif">
                        <span className="text-ne-white" style={{ WebkitTextStroke: '2px var(--ne-black)' }}>壊して、</span><br />
                        <span className="text-ne-yellow" style={{ textShadow: '3px 3px 0 var(--ne-red)' }}>創り変えろ。</span>
                    </h2>
                    <p className="text-ne-white/80 font-mono leading-relaxed mb-8">
                        // 原状回復？ そんな古いルールはバグだ。<br />
                        // 壁を壊せ。色を塗れ。床を剥がせ。<br />
                        // ここは君の実験場。許可はいらない。
                    </p>
                </div>

                <HoverTrigger type="active" className="w-full">
                    <div ref={destroyZoneRef} className="relative w-full aspect-square border-4 border-ne-white p-2 bg-ne-black group overflow-hidden">
                        <div ref={pixelLayerRef} className="absolute inset-0 z-20 transition-all duration-200 pointer-events-none mix-blend-hard-light opacity-20">
                            <div className="w-full h-full bg-repeat image-rendering-pixelated" style={{ backgroundImage: `url("${houseSvg}")`, backgroundSize: '100px 100px' }}></div>
                        </div>
                        
                        <div className="absolute inset-0 z-10 bg-ne-black flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-ne-red via-ne-yellow to-ne-blue opacity-50 animate-spin-slow blur-xl"></div>
                            <h3 className="relative z-30 font-pixel text-5xl md:text-7xl text-ne-white text-center leading-tight">
                                CREATE<br />YOUR<br /><span className="text-ne-green">WORLD</span>
                            </h3>
                            {/* Glitch Overlay */}
                            <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-20 animate-glitch" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Ccircle cx='25' cy='25' r='20' fill='%23fffd2e' opacity='0.1'/%3E%3C/svg%3E")`}}></div>
                        </div>

                        <div className="absolute bottom-4 right-4 font-pixel text-xs text-ne-black bg-ne-white px-2 py-1 z-30 pointer-events-none">
                            [MOVE CURSOR TO DESTROY]
                        </div>
                    </div>
                </HoverTrigger>
            </div>
        </section>
    );
};

export default Concept;