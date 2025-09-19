import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({className = '', spanStyle}: {className?: string, spanStyle?: string}) {
   return (
      <button className={`bg-white text-secondary flex items-center justify-between gap-2 px-2 py-1 text-nowrap w-11/12 animate-arrow transition-all duration-400 hover:bg-transparent hover:ring-white hover:text-white hover:ring-1 ${className && className}`}>Get Tocuh! 
      <span 
      className={`round-btn translate-x-[5px] bg-primary rounded-full justify-center flex items-center h-[40px] w-[40px] arrow ${spanStyle && spanStyle}`}><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></span></button>
   )
}
