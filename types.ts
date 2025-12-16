export type CursorType = 'default' | 'hovered' | 'active';

export interface CursorContextType {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
}

// Global window extensions for the CDN libraries
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    Lenis: any;
  }
}