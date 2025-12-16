import React, { useEffect } from 'react';
import { HoverTrigger } from '../contexts/CursorContext';

const Flow: React.FC = () => {

    useEffect(() => {
        if (window.gsap && window.ScrollTrigger) {
            window.gsap.registerPlugin(window.ScrollTrigger);
            
            window.gsap.from("#flow-path", {
                scrollTrigger: {
                    trigger: "#flow",
                    start: "top center",
                    end: "bottom center",
                    scrub: 1
                },
                strokeDashoffset: 1000, 
                ease: "none"
            });
        }
    }, []);

    return (
        <section id="flow" className="relative w-full py-32 bg-ne-black text-ne-white">
            <div className="container mx-auto px-6 relative z-10">
                <span className="font-mono text-ne-green text-sm mb-4 block">&gt; GAME MAP</span>
                <h2 className="text-4xl md:text-6xl font-black mb-16 font-serif">
                    入居までの<br />攻略ルート
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    <svg className="hidden md:block absolute top-1/2 left-0 w-full h-20 -translate-y-1/2 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                        <path id="flow-path" d="M0,10 H33% Q50%,10 50%,50 Q50%,90 66%,90 H100%" stroke="var(--ne-blue)" strokeWidth="4" fill="none" strokeDasharray="10,10" className="animate-pulse" />
                    </svg>

                    {/* Stage 1 */}
                    <HoverTrigger className="h-full">
                        <div className="relative z-10 bg-ne-black border-4 border-ne-blue p-6 hover:shadow-[4px_4px_0px_0px_var(--ne-red)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 shadow-[6px_6px_0px_0px_var(--ne-blue)] h-full">
                            <div className="font-pixel text-ne-yellow text-4xl mb-4 absolute -top-6 -left-4 bg-ne-black px-2">STAGE 1</div>
                            <div className="w-16 h-16 bg-ne-blue mb-6 animate-bounce mx-auto" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div> 
                            <h3 className="text-xl font-bold mb-2 font-serif">サーチ＆内見</h3>
                            <p className="font-mono text-sm text-ne-white/70">
                                // ターゲット物件を発見せよ。<br />現地でリアルな空気感をスキャン。
                            </p>
                        </div>
                    </HoverTrigger>

                    {/* Stage 2 */}
                    <HoverTrigger className="h-full mt-12 md:mt-24">
                        <div className="relative z-10 bg-ne-black border-4 border-ne-red p-6 hover:shadow-[4px_4px_0px_0px_var(--ne-red)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 shadow-[6px_6px_0px_0px_var(--ne-blue)] h-full">
                            <div className="font-pixel text-ne-yellow text-4xl mb-4 absolute -top-6 -left-4 bg-ne-black px-2">STAGE 2</div>
                            <div className="w-16 h-16 bg-ne-red mb-6 animate-spin-slow mx-auto" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}></div> 
                            <h3 className="text-xl font-bold mb-2 font-serif">契約＆作戦会議</h3>
                            <p className="font-mono text-sm text-ne-white/70">
                                // ボス（オーナー）と交渉。<br />DIY計画という名のチートコードを入力。
                            </p>
                        </div>
                    </HoverTrigger>

                    {/* Stage 3 */}
                    <HoverTrigger className="h-full mt-12 md:mt-0">
                        <div className="relative z-10 bg-ne-black border-4 border-ne-green p-6 hover:shadow-[4px_4px_0px_0px_var(--ne-red)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 shadow-[6px_6px_0px_0px_var(--ne-blue)] h-full">
                            <div className="font-pixel text-ne-yellow text-4xl mb-4 absolute -top-6 -left-4 bg-ne-black px-2">STAGE 3</div>
                            <div className="w-16 h-16 bg-ne-green mb-6 animate-pulse mx-auto" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}></div> 
                            <h3 className="text-xl font-bold mb-2 font-serif">ゲームスタート</h3>
                            <p className="font-mono text-sm text-ne-white/70">
                                // 鍵（キーアイテム）を入手。<br />君だけのワールドビルディングが始まる。
                            </p>
                        </div>
                    </HoverTrigger>
                </div>
            </div>
        </section>
    );
};

export default Flow;