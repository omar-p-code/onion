import { useEffect, useRef, useState } from "react";

export function useScrollDirection(threshold = 10) {
   const prev = useRef(window.scrollY);
   const [dir, setDir] = useState<"up"|"down" | null>(null);
   const [ pos, setPos ] = useState(window.scrollY);

   useEffect(() => {
      let ticking = false;
      const onScroll = () => {
         if (!ticking) {
         window.requestAnimationFrame(() => {
            const y = window.scrollY;
            const diff = y - prev.current;
            if (Math.abs(diff) > threshold) {
               setDir(diff > 0 ? "down" : "up");
               prev.current = y;
            }
            setPos(y);
            ticking = false;
         });
         ticking = true;
         }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
   }, [threshold]);

   return {dir, pos};
}
