import { faChevronRight, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Email from '../assets/email.svg?react';
import ClassicPin from '../assets/classicLocationPin.svg?react';
import Mail from '../assets/mail.svg?react';
import Time from '../assets/time.svg?react';
import Search  from '../assets/search.svg?react';
import SidePannel  from '../assets/side-pannel.svg?react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, scale} from "framer-motion";
import { Nav, Sweper } from "../components";
import LeftArrow from "../assets/leftArrow.svg?react";
import RightArrow from "../assets/rightArrow.svg?react";
import Button from "../components";
// import { article } from "framer-motion/client";


export default function Hero() {
   const [ windowSize, setWindowSize ] = useState(window.innerWidth);
   const [ bg, setBg ] = useState<boolean>(true);
   useEffect(() => {
      const handleSize = () => setWindowSize(window.innerWidth)
      window.addEventListener('resize', handleSize)
      return () => window.removeEventListener('resize', handleSize)

   }, [])
      return (
         <article className="w-full h-fit min-h-dvh max-h-fit flex flex-col justify-start items-center bg-white relative overflow-x-hidden">
            <section className="hero h-fit min-h-[120vh] w-dvw max-w-dvw relative flex justify-center text-white bg-[url('/hero-bg1.webp')] bg-cover bg-center bg-no-repeat">
               <AnimatePresence>
                  <div className="end bg-white h-2/12 w-full absolute bottom-0 left-0"></div>
                  <motion.div
                  key='hero'
                  initial={{opacity: 0, y: -50}}
                  // animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -50}}
                  transition={{duration: 0.6, ease: "easeOut"}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: false, amount: 0.6}}
                  className={`content w-11/12 flex flex-col justify-start items-center text-center gap-6 px-4 pt-7 overflow-hidden relative rounded-4xl my-5 z-20 animate-bg before:bg-cover before:bg-center before:absolute before:w-full before:h-full before:brightness-70 before:-z-10 before:content before:top-0 before:left-0 before:transition-all before:duration-300 transition-all duration-300 ${bg ? 'before:bg-[url("/hero-bg2.webp")]' : 'before:bg-[url("/hero-bg3.webp")]'}`}>
                        <img src="/flow-shape.webp" alt="" className=' hue-rotate-180 brightness-200 absolute bottom-0 right-1/12 animate-flow'/>
                        <img src="/flow-shape.webp" alt="" className=' hue-rotate-180 brightness-200 absolute bottom-0 left-1/12 animate-flow'/>
                     <div className="grass p-0 absolute bottom-0 left-0 mask-bottom">
                        
                        <img src="/grass.webp" alt="" className=' hue-rotate-180 brightness-200'/>
                     </div>
                  <motion.header
                  key='header'
                  initial={{opacity: 0, x: 50}}
                  // animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, x: 50}}
                  transition={{duration: 0.6, ease: "easeOut"}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: false, amount: 0.6}}
                  className="flex flex-col gap-3">
                     <div className="contact flex gap-3 justify-center w-full px-3 items-center">
                        {windowSize < 1150 && (<div className="links flex gap-2 flex-wrap">
                        {windowSize > 976 && <div className="link">
                        {windowSize > 524 && <FontAwesomeIcon icon={faLocationDot} className="min-[976px]:text-secondary min-[976px]:bg-primary rounded-full p-2"/>}
                        <div>New Qassasin - Ismailia / Egypt</div>
                        </div>}
                        <div className="link">
                           {windowSize > 524 && <FontAwesomeIcon icon={faPhone} className="text-secondary bg-primary rounded-full p-2"/>}
                           <a href="tel:+201070765874">+201070765874</a>
                        </div>
                        <div className="link">
                        {windowSize > 524 && <Email className="text-secondary bg-primary rounded-full p-2"/>}
                        <a href="mailto:info@oginafoods.com">info@oginafoods.com</a>
                        </div>
                        </div>)}
                        {windowSize >= 1150 && (<>
                           <div className="icon">
                              <img src="/logo_white.webp" className="max-w-6/6" />
                           </div>
                           <div className="links flex">
                              <div className="link">
                                 <div className="icon">
                                 <ClassicPin className="text-black bg-secondary rounded-full p-3 w-12"/>
                                 </div>
                                 <div className="info text-start flex flex-col gap-2 justify-centre items-start text-nowrap text-[13px]">
                                    <h2> <Link to='/contact-us' className="hover:text-white">Address</Link></h2>
                                    <div>New Qassasin - Ismailia / Egypt</div>
                                 </div>
                              </div>
                           <div className="link">
                              <div className="icon">
                              <Mail className="text-black bg-secondary rounded-full p-3 w-12"/>
                              </div>
                              <div className="info text-start flex flex-col gap-2 justify-centre items-start">
                                 <h2> <Link to='/support' className="hover:text-white">Contact & Support</Link></h2>
                                 <div className="contact flex flex-col text-nowrap text-[13px]">
                                    <span>Mail Us: <a href="">info@oginafoods.com</a></span>
                                    <span>Call Us 24/7: <a href="">+201070765874</a></span>
                                 </div>
                              </div>
                           </div>
                           <div className="link">
                                 <div className="icon">
                                 <Time className="text-black bg-secondary rounded-full p-3 w-12"/>
                                 </div>
                                 <div className="info text-start flex flex-col gap-2 justify-centre items-start text-nowrap text-[13px]">
                                    <h2> <Link to='/contact-us' className="hover:text-white">Working Hours</Link></h2>
                                    <div>From Saturday to Thursday : 8.00am - 16.00pm</div>
                                 </div>
                              </div>
                           </div>
                        </>)}
                     </div>
                     <div className='separator w-full h-[2px]'></div>
                     <div className="nav flex justify-between items-center">
                           <>
                              {windowSize < 1150 &&
                                 <div className="icon w-[max(250px,40%)] max-h-full h-full">
                                 <img src="/logo_white.webp" className="max-w-6/6"/>
                                 </div>
                              }
                              {windowSize >1150 && 
                              <Nav navKey='hero' dark={false}/>}

                              <div className="btns w-5/12 flex justify-end items-center max-sm:flex-wrap max-sm:justify-center max-sm:items-end">
                                 <button className="round-btn scale-75 bg-accent p-3 flex justify-center items-center group hover:bg-secondary transition-all duration-300 max-sm:flex-[.6]">
                                 <Search className="text-[20px]"/>
                                 </button>
                                 {windowSize >= 768 && <button 
                                 className="bg-white text-secondary flex items-center justify-between gap-2 px-2 py-1 text-nowrap w-11/12 animate-arrow transition-all duration-400 hover:bg-transparent hover:ring-white hover:text-white hover:ring-1">
                                    <span className="text flex-3">Get In Touch!</span> 
                                    <span className="round-btn translate-x-[5px] bg-primary rounded-full justify-center flex items-center h-[40px] w-[40px] arrow"> 
                                    <FontAwesomeIcon icon={faChevronRight} className="text-secondary"/>
                                    </span></button>}
                                 {windowSize < 1150 && <button className="round-btn scale-75 bg-accent p-4 flex justify-center items-center group hover:bg-accent/30 max-sm:flex-[.6]">
                                    <SidePannel className="text-[10px] scale-75 group-hover:text-accent"/>
                                    </button>}
                              </div>
                           </>
                     </div>
                     <div className="body"></div>
                  </motion.header>
                  <div className="control mb-[20%] flex gap-3 w-full justify-between px-5 items-center">
                     <div className="left hover:text-secondary flex justify-start transition-colors duration-300 text-white">
                     <LeftArrow onClick={() => setBg(prev => !prev)} className='text-4xl stroke-0 scale-120 cursor-pointer w-[min(40%_,5rem)] rotate-180 ' />
                     </div>
                     <div className="intro flex flex-col justify-center items-center gap-6">
                        {bg && (<AnimatePresence>
                        <motion.h2
                        initial={{scale: .3, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{duration: 0.6, ease: "easeOut"}}
                        exit={{scale: .3, opacity: 0}}
                        className="text-4xl w-full family-farmhouse mt-6"> Every Crop Counts, Every Farmer Matters</motion.h2>
                        <motion.img 
                        initial={{clipPath: 'inset(0 100% 0 0)'}}
                        animate={{clipPath: 'inset(0 0 0 0)'}}
                        transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                        exit={{clipPath: 'inset(0 100% 0 0)'}}
                        src="/divider.webp" alt="" className="w-6/6 wy-5"
                        
                        ></motion.img>
                        <motion.p
                        initial={{y: 50, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                        exit={{y: 50, opacity: 0}}
                        className="text-2xl max-w-3xl px-2 w-full"
                        
                        >Ogina Foods is a leading company in the frozen fruits and vegetables industry, committed to providing high-quality, nutritious, and fresh-tasting products to consumers and businesses alike.</motion.p>
                        </AnimatePresence>
                        )}
                        {!bg && (<AnimatePresence>
                           <motion.h2
                           initial={{scale: .3, opacity: 0}}
                           animate={{scale: 1, opacity: 1}}
                           transition={{duration: 0.6, ease: "easeOut"}}
                           exit={{scale: .3, opacity: 0}}
                           className="text-4xl w-full family-farmhouse mt-6"> Agriculture that works for the future</motion.h2>
                           <motion.img 
                           initial={{clipPath: 'inset(0 100% 0 0)'}}
                           animate={{clipPath: 'inset(0 0 0 0)'}}
                           transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                           exit={{clipPath: 'inset(0 100% 0 0)'}}
                           src="/divider.webp" alt="" className="w-6/6 wy-5"
                           
                           ></motion.img>
                           <motion.p
                           initial={{y: 50, opacity: 0}}
                           animate={{y: 0, opacity: 1}}
                           transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                           exit={{y: 50, opacity: 0}}
                           className="text-2xl max-w-3xl px-2 w-full"
                           >we use advanced freezing technology to preserve the natural flavors, textures, and nutritional value of our produce, ensuring that our customers enjoy the best nature has to offer, any time of the year.</motion.p>
                           </AnimatePresence>
                        )}
                        <Button className='max-w-2/6' />
                     </div>
                     <div className="right text-white hover:text-secondary transition-colors duration-300 flex justify-end">
                     <RightArrow onClick={() => setBg(prev => !prev)} className='text-4xl stroke-0 scale-120 cursor-pointer w-[min(40%_,5rem)]' />
                     </div>
                  </div>
                  </motion.div>
               </AnimatePresence>
            </section>
         </article>
      )
}