import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Concept from './components/Concept';
import Family from './components/Family';
import Flow from './components/Flow';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { CursorProvider } from './contexts/CursorContext';

const App: React.FC = () => {

    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        if (window.Lenis) {
            const lenis = new window.Lenis({
                duration: 1.5,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smooth: true
            });

            function raf(time: number) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }

        // Section rotation effect
        if (window.gsap && window.ScrollTrigger) {
            window.gsap.registerPlugin(window.ScrollTrigger);
            
            const sections = document.querySelectorAll('section');
            sections.forEach((section, i) => {
                window.gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    },
                    rotation: i % 2 === 0 ? 2 : -2,
                    scale: 1.05,
                    ease: "none"
                });
            });
        }
    }, []);

    return (
        <CursorProvider>
            <div className="w-full relative bg-pixel-grid">
                <CustomCursor />
                <Header />
                <main>
                    <Hero />
                    <Marquee />
                    <Concept />
                    <Family />
                    <Flow />
                    <Contact />
                </main>
            </div>
        </CursorProvider>
    );
};

export default App;