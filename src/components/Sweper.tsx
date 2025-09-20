import { useRef, type ReactNode, useEffect } from "react";

interface SwiperComponentProps {
children?: ReactNode[];
className?: string;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({
children = [],
className = "",
}) => {
const containerRef = useRef<HTMLDivElement>(null);
const isDragging = useRef(false);
const startX = useRef(0);
const scrollLeft = useRef(0);

// speed
const velocity = useRef(0);
const lastX = useRef(0);
const lastTime = useRef(0);
const momentumId = useRef<number | null>(null);

const stopMomentum = () => {
   if (momentumId.current) {
      cancelAnimationFrame(momentumId.current);
      momentumId.current = null;
   }
};

const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
   isDragging.current = true;
   scrollLeft.current = containerRef.current?.scrollLeft || 0;
   startX.current = e.pageX;
   stopMomentum();
   lastX.current = e.pageX;
   lastTime.current = Date.now();
};

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
   if (!isDragging.current) return;
   e.preventDefault();
   const x = e.pageX;
   const walk = x - startX.current;
   if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft.current - walk;
   }

   // calculate velocity
   const now = Date.now();
   const deltaX = x - lastX.current;
   const deltaTime = now - lastTime.current;
   velocity.current = deltaX / deltaTime;
   lastX.current = x;
   lastTime.current = now;
};

const handleMouseUp = () => {
   isDragging.current = false;

   const momentum = () => {
      if (!containerRef.current) return;
      containerRef.current.scrollLeft -= velocity.current * 20;
      velocity.current *= 0.95;

      if (Math.abs(velocity.current) > 0.01) {
      momentumId.current = requestAnimationFrame(momentum);
      }
   };

   momentum();
};

// loop logic
useEffect(() => {
   const container = containerRef.current;
   if (!container) return;

   const handleScroll = () => {
      const scrollWidth = container.scrollWidth;
      const visibleWidth = container.clientWidth;

      // if scrolled to the end
      if (container.scrollLeft + visibleWidth >= scrollWidth - 10) {
      container.scrollLeft = visibleWidth;
      }
      else if (container.scrollLeft <= 0) {
      container.scrollLeft = scrollWidth - 2 * visibleWidth;
      }
   };

   container.addEventListener("scroll", handleScroll);
   return () => container.removeEventListener("scroll", handleScroll);
}, []);


const loopedChildren = [...children, ...children, ...children];

return (
   <div
      ref={containerRef}
      className={`relative w-full overflow-x-auto flex scrollbar-hide cursor-grab active:cursor-grabbing ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ scrollBehavior: "auto" }}
   >
      {loopedChildren}
   </div>
);
};

export default SwiperComponent;
