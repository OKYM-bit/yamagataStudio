import React from 'react';
import { HoverTrigger } from '../contexts/CursorContext';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference">
      <HoverTrigger>
        <a href="#" className="font-pixel text-2xl text-ne-white">
          <span className="text-ne-red">Y</span>
          <span className="text-ne-blue">A</span>
          <span className="text-ne-yellow">R</span>
          <span className="text-ne-green">.</span>
        </a>
      </HoverTrigger>

      <nav className="hidden md:flex gap-8 font-mono text-sm text-ne-white">
        <HoverTrigger>
            <a href="#concept" onClick={scrollToSection('concept')} className="underline-offset-4 hover:underline decoration-ne-red">CONCEPT</a>
        </HoverTrigger>
        <HoverTrigger>
            <a href="#flow" onClick={scrollToSection('flow')} className="underline-offset-4 hover:underline decoration-ne-blue">FLOW</a>
        </HoverTrigger>
        <HoverTrigger>
            <a href="#contact" onClick={scrollToSection('contact')} className="underline-offset-4 hover:underline decoration-ne-yellow">CONTACT</a>
        </HoverTrigger>
      </nav>

      <div className="md:hidden">
        <HoverTrigger>
            <button className="font-pixel text-sm text-ne-white">[MENU]</button>
        </HoverTrigger>
      </div>
    </header>
  );
};

export default Header;