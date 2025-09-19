import { useRef, type ReactNode } from 'react';

interface SwiperComponentProps {
children?: ReactNode;
className?: string;
}

const SwiperComponent: React.FC<SwiperComponentProps> = ({ children, className = '' }) => {
const containerRef = useRef<HTMLDivElement>(null);
const isDragging = useRef<boolean>(false);
const startX = useRef<number>(0);
const scrollLeft = useRef<number>(0);

const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
   isDragging.current = true;
   startX.current = e.pageX - scrollLeft.current;
   scrollLeft.current = containerRef.current?.scrollLeft || 0;
   if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
   }
};

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
   if (!isDragging.current) return;
   e.preventDefault();
   const x = e.pageX;
   const walk = x - startX.current;
   if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft.current - walk;
   }
};

const handleMouseUp = () => {
   isDragging.current = false;
   if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
   }
};

const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
   isDragging.current = true;
   startX.current = e.touches[0].pageX - scrollLeft.current;
   scrollLeft.current = containerRef.current?.scrollLeft || 0;
};

const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
   if (!isDragging.current) return;
   e.preventDefault();
   const x = e.touches[0].pageX;
   const walk = x - startX.current;
   if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft.current - walk;
   }
};

const handleTouchEnd = () => {
   isDragging.current = false;
};

return (
   <div
      ref={containerRef}
      className={`relative w-full bg-accent p-2 overflow-x-auto flex snap-x snap-mandatory scrollbar-hide cursor-all-scroll ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ scrollBehavior: 'smooth' }}
   >
      {children}
   </div>
);
};

export default SwiperComponent;