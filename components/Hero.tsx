import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (window.gsap && titleRef.current) {
            window.gsap.from(titleRef.current, {
                scale: 1.5,
                opacity: 0,
                filter: "blur(20px)",
                duration: 1.5,
                ease: "elastic.out(1, 0.5)",
                delay: 0.5
            });
        }
    }, []);

    return (
        <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-ne-blue/20 to-transparent" style={{ clipPath: 'polygon(0% 100%, 20% 60%, 40% 80%, 60% 40%, 80% 70%, 100% 50%, 100% 100%)' }}></div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-ne-red/20 to-transparent" style={{ clipPath: 'polygon(0% 100%, 30% 70%, 50% 90%, 70% 60%, 90% 80%, 100% 70%, 100% 100%)' }}></div>
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-ne-yellow rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-20 left-20 text-ne-green font-pixel text-4xl animate-float opacity-50">+</div>
                <div className="absolute bottom-40 right-40 text-ne-red font-pixel text-4xl animate-float opacity-50" style={{ animationDelay: '1s' }}>×</div>
            </div>

            <div className="relative z-10 text-center">
                <h1 ref={titleRef} className="text-6xl md:text-9xl font-black leading-none mb-6 font-pixel relative">
                    <span className="relative inline-block">
                        <span className="absolute top-0 left-0.5 w-full h-full text-ne-red opacity-70 animate-[glitch_3s_infinite_linear_alternate-reverse]" style={{ clipPath: 'rect(24px, 550px, 90px, 0)' }}>YAMAGATA<br/>NEO-RETRO</span>
                        <span className="absolute top-0 -left-0.5 w-full h-full text-ne-blue opacity-70 animate-[glitch_2.5s_infinite_linear_alternate-reverse]" style={{ clipPath: 'rect(85px, 550px, 140px, 0)' }}>YAMAGATA<br/>NEO-RETRO</span>
                        <span className="relative">YAMAGATA<br/>NEO-RETRO</span>
                    </span>
                </h1>
                <p className="text-xl md:text-2xl font-mono tracking-widest text-ne-blue">
                    <span className="bg-ne-white text-ne-black px-2">&gt; 空き家再生、再起動。</span>
                </p>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-pixel text-xs text-ne-white animate-bounce pointer-events-none">
                ↓ SCROLL TO PLAY ↓
            </div>
        </section>
    );
};

export default Hero;