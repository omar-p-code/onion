import { AnimatePresence, motion } from 'framer-motion';
import { useScrollDirection } from '../hooks/useScrollDir';
import Search  from '../assets/search.svg?react';
import SidePannel  from '../assets/side-pannel.svg?react';
import { useEffect, useState } from 'react';
import Nav from './Nav';

export default function Header() {
   const { dir, pos } = useScrollDirection();
   const show = dir === "up" && pos > 100;
   const [ windowSize, setWindowSize ] = useState(window.innerWidth);
   useEffect(() => {
      const handleSize = () => setWindowSize(window.innerWidth)
      window.addEventListener('resize', handleSize)
      return () => window.removeEventListener('resize', handleSize)

   }, [])

   return (
      <AnimatePresence mode='wait'>
         {show &&
               <motion.header 
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -100, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className='w-dvw h-16 bg-white shadow-md fixed top-0 left-0 p-4 flex justify-between items-center px-6 py-3 z-50'
                        
                  >
                     <div className='w-dvw h-16 bg-transparent shadow-md fixed top-0 left-0 p-4 flex justify-between items-center px-6 py-3'>
                        {windowSize < 978 && <div className="icon max-h-full h-full drop-shadow-sm drop-shadow-black/60">
                           <a href="#" className="max-w-full max-h-full">
                              <img decoding='async' loading='lazy' src="/logo_white.webp" alt="Donalfarm"/>
                           </a>
                        </div>}
                        {windowSize >= 978 && <Nav navKey='header' dark={true}/>}
                        <div className="btns flex gap-3">
                           <button className='rounded-btn'><Search className='w-4 h-4 fill-white'/></button>
                           <button className='rounded-btn group'><SidePannel className='fill-white group-hover:text-accent group-hover:fill-accent w-5 h-5'/></button>
                        </div>
                     </div>
                  </motion.header>}
            </AnimatePresence>
   )
}
