import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CursorContextType, CursorType } from '../types';

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cursorType, setCursorType] = useState<CursorType>('default');

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

// Helper component for interactive elements
interface HoverTriggerProps {
    children: ReactNode;
    type?: CursorType;
    className?: string;
    onClick?: () => void;
    // For specific GSAP interactions
    id?: string;
    'data-speed'?: string; 
}

export const HoverTrigger: React.FC<HoverTriggerProps> = ({ 
    children, 
    type = 'hovered', 
    className = '', 
    onClick,
    ...props
}) => {
    const { setCursorType } = useCursor();

    return (
        <div 
            className={`inline-block ${className}`}
            onMouseEnter={() => setCursorType(type)}
            onMouseLeave={() => setCursorType('default')}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
};