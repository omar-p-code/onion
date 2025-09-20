import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion';
import { type Key } from 'react';

export default function Button({buttonKey, className = '', spanStyle, animation}: {buttonKey: Key, className?: string, spanStyle?: string, animation?: {animate: object, initial: object, exit: object, transition: object}}) {
   return (
      <motion.button
      key={buttonKey}
      initial={{opacity: 0, y: 20, ...animation?.initial}}
      animate={{opacity: 1, y: 0, ...animation?.animate}}
      exit={{opacity: 0, y: 20, ...animation?.exit}}
      transition={{duration: 0.6, delay: .6, ease: 'easeInOut', ...animation?.transition}}
      className={`bg-white text-secondary flex items-center justify-between gap-2 px-2 py-1 text-nowrap w-[min(100%,_220px)] animate-arrow transition-all duration-400 hover:bg-transparent hover:ring-white hover:text-white hover:ring-1 ${className && className}`}>Get Tocuh! 
      <span 
      className={`round-btn translate-x-[5px] bg-primary rounded-full justify-center flex items-center h-[40px] w-[40px] arrow ${spanStyle && spanStyle}`}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></span></motion.button>
   )
}
