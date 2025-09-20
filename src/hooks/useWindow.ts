import { useEffect, useRef, useState } from "react";

export function useWindow(threshold = 10) {

const [windowSize, setWindowSize] = useState(window.innerWidth);


const [pos, setPos] = useState(window.scrollY);


const prev = useRef(window.scrollY);
const [dir, setDir] = useState<"up" | "down" | null>(null);

useEffect(() => {
   const handleResize = () => setWindowSize(window.innerWidth);

   let ticking = false;
   const handleScroll = () => {
      if (!ticking) {
      window.requestAnimationFrame(() => {
         const y = window.scrollY;
         const diff = y - prev.current;

         setPos(y); // 👈 هو ده الأساسي

         if (Math.abs(diff) > threshold) {
            setDir(diff > 0 ? "down" : "up");
            prev.current = y;
         }

         ticking = false;
      });
      ticking = true;
      }
   };

   window.addEventListener("resize", handleResize);
   window.addEventListener("scroll", handleScroll, { passive: true });

   return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
   };
}, [threshold]);

return { windowSize, pos, dir };
}
