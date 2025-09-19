import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { useScrollDirection } from '../hooks/useScrollDir'

export default function ToTopBtn() {
      const {pos} = useScrollDirection();
      const show = pos > 100;
      return (
            show &&
            <motion.button 
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 100}}
            transition={{duration: 0.4, ease: "linear", delay: 0.3}}
            className='rounded-btn fixed bottom-5 right-5 overflow-hidden animate-round' 
            onClick={() => scroll({top: 0, behavior: 'smooth'})}>
            <span className='animate-bounce' ><FontAwesomeIcon icon={faArrowUp}/></span>
            </motion.button>
      )
}
