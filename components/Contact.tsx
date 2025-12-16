import React from 'react';
import { HoverTrigger } from '../contexts/CursorContext';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-40 text-center bg-ne-blue relative overflow-hidden">
             <div className="absolute inset-0 bg-repeat opacity-20 mix-blend-overlay animate-glitch" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect x='0' y='0' width='50' height='50' fill='%23000' opacity='0.1'/%3E%3C/svg%3E")` }}></div>

            <div className="relative z-10 container mx-auto px-6">
                <h2 className="text-4xl md:text-6xl mb-12 font-serif font-black text-ne-white">
                    準備はいいか？<br />
                    <span className="text-ne-yellow" style={{ textShadow: '3px 3px 0 var(--ne-red)' }}>新しい冒険へ。</span>
                </h2>
                
                <HoverTrigger>
                    <a href="#" className="relative inline-block group my-8">
                        <div className="absolute inset-0 bg-ne-yellow translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform w-full h-full border-4 border-ne-black"></div>
                        <div className="relative bg-ne-red text-ne-white px-12 md:px-24 py-6 font-pixel text-2xl md:text-3xl border-4 border-ne-black active:translate-x-2 active:translate-y-2 transition-transform flex items-center gap-4">
                            <span>PRESS START</span>
                            <span className="animate-pulse">▶</span>
                        </div>
                    </a>
                </HoverTrigger>
                
                <p className="mt-12 text-ne-white/80 font-mono text-sm">
                    // 営業マンは出現しません。<br />// セーブデータは安全です。
                </p>
            </div>

            <footer className="mt-32 text-xs font-pixel text-ne-white/60 relative z-10">
                © 2025 YAR. | GAME OVER / CONTINUE?
            </footer>
        </section>
    );
};

export default Contact;