import React from 'react';

const Marquee: React.FC = () => {
    const items = [
        "*** UNLIMITED DIY ***", "[PRESS START]", "*** PETS OK ***", "[INSERT COIN]", "*** SINGLE HOUSE ONLY ***", "[LEVEL UP]",
        "*** UNLIMITED DIY ***", "[PRESS START]", "*** PETS OK ***", "[INSERT COIN]", "*** SINGLE HOUSE ONLY ***", "[LEVEL UP]"
    ];

    return (
        <div className="w-full bg-ne-blue text-ne-white py-3 overflow-hidden border-y-4 border-ne-black">
            <div className="flex overflow-hidden whitespace-nowrap">
                <div className="flex animate-scroll gap-8 pr-8">
                    {items.map((item, index) => (
                        <span key={index} className="font-pixel text-xl">{item}</span>
                    ))}
                </div>
                <div className="flex animate-scroll gap-8 pr-8">
                    {items.map((item, index) => (
                        <span key={`dup-${index}`} className="font-pixel text-xl">{item}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;