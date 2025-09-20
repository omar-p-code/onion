import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Email from '../assets/email.svg?react';
import ClassicPin from '../assets/classicLocationPin.svg?react';
import Mail from '../assets/mail.svg?react';
import Time from '../assets/time.svg?react';
import Search  from '../assets/search.svg?react';
import SidePannel  from '../assets/side-pannel.svg?react';
import { Nav, Button, Sweper } from ".";
import LeftArrow from "../assets/leftArrow.svg?react";
import RightArrow from "../assets/rightArrow.svg?react";
import Tomato from "../assets/tomato.svg?react";
import Leaf from "../assets/leaf.svg?react";
import Herb from "../assets/herb.svg?react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useTransform} from "framer-motion";
import { useState } from "react";
import { useWindow } from "../hooks/useWindow";
import { useEffect } from "react";

export default function Hero() {
   const [ bg, setBg ] = useState<boolean>(true);
   const { windowSize } = useWindow(10);
   const { pos } = useWindow(10);
   const introScrollY = useMotionValue(0);
   const bgY = useTransform(introScrollY, [0, 200], [0, 30]);
   const sweperItems = [
      {icon: Tomato, Discription: ' 100% Organic Products'},
      {icon: Leaf, Discription: ' Frozen fruits and vegetables industry'},
      {icon: Herb, Discription: ' Efficient and reliable distribution services to ensure timely deliveries'},
      {icon: Tomato, Discription: ' 100% Organic Products'},
      {icon: Leaf, Discription: ' Frozen fruits and vegetables industry'},
      {icon: Herb, Discription: ' Efficient and reliable distribution services to ensure timely deliveries'}];

   useEffect(() => {
      introScrollY.set(pos);
   }, [pos, introScrollY])

   return (
      <motion.section 
      transition={{duration: 0.3, ease: "easeOut"}}
      key='intro-section'
      className={`hero h-fit w-dvw max-w-dvw relative flex flex-col justify-center text-white items-center`}>
         <div className={`intro-bg1 absolute top-0 buttom-0 left-0 right-0 -z-0 transition-[transform] duration-[2s] w-dvw h-fit`} style={{transform: `translateY(${bgY.get()}px)`}}>
            <img src="/hero-bg1.webp" loading='lazy' alt="" className="bg-cover h-dvh z-0 bg-center bg-no-repeat"/>
         </div>
            <div className="end bg-white h-[30%] w-full absolute bottom-0 left-0"></div>
         <AnimatePresence>
            <motion.div
            key='hero'
            initial={{opacity: 0, y: -50}}
            // animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -50}}
            transition={{duration: 0.6, ease: "easeOut"}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false, amount: 0.2}}
            className={`content w-11/12 flex flex-col justify-start items-center text-center gap-6 px-4 pt-7 overflow-hidden relative rounded-4xl my-5 z-20`}>
                     
                     <img
                        src={"/hero-bg2.webp"}
                        loading='lazy'
                        alt="hero background"
                        className={`absolute top-0 left-0 w-full h-full object-cover object-center brightness-70 -z-10 animate-bg transition-all duration-300 ${bg&&'opacity-0 scale-120'}`}
                     />
                     <img
                     loading='lazy'
                     src={"/hero-bg3.webp"}
                     alt="hero background"
                     className={`absolute top-0 left-0 w-full h-full object-cover object-center brightness-70 -z-10 animate-bg transition-all duration-300 ${!bg && 'opacity-0 scale-120'}`}
                     />
                  <img loading='lazy' src="/flow-shape.webp" alt="" className=' hue-rotate-180 brightness-200 absolute bottom-0 right-1/12 animate-flow'/>
                  <img loading='lazy' src="/flow-shape.webp" alt="" className=' hue-rotate-180 brightness-200 absolute bottom-0 left-1/12 animate-flow'/>
                  <div className='grass p-0 absolute bottom-0 left-0 hue-rotate-180 h-[25px] brightness-200 drop-shadow-2xl bg-white mask-bottom drop-shadow-white'></div>
            <motion.header
            key='header'
            initial={{opacity: 0, x: 50}}
            // animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, x: 50}}
            transition={{duration: 0.6, ease: "easeOut"}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: false, amount: 0.2}}
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
                           <div className="info text-start flex flex-col gap-2 justify-center items-start text-nowrap text-[13px]">
                              <h2> <Link to='/contact-us' className="hover:text-white">Address</Link></h2>
                              <div>New Qassasin - Ismailia / Egypt</div>
                           </div>
                        </div>
                     <div className="link">
                        <div className="icon">
                        <Mail className="text-black bg-secondary rounded-full p-3 w-12"/>
                        </div>
                        <div className="info text-start flex flex-col gap-2 justify-center items-start">
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
                           <div className="info text-start flex flex-col gap-2 justify-center items-start text-nowrap text-[13px]">
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
                           <img loading='lazy' src="/logo_white.webp" className="max-w-6/6"/>
                           </div>
                        }
                        {windowSize >1150 && 
                        <Nav navKey='hero' dark={false}/>}

                        <div className="btns w-5/12 flex justify-end items-center max-sm:flex-wrap max-sm:justify-center max-sm:items-end">
                           <button className="round-btn scale-75 bg-accent p-3 flex justify-center items-center group hover:bg-secondary transition-all duration-300 max-sm:flex-[.6]">
                           <Search className="text-[20px]"/>
                           </button>
                           {windowSize >= 768 && <Button buttonKey='button-768px' />}
                           {windowSize < 1150 && <button className="round-btn scale-75 bg-accent p-4 flex justify-center items-center group hover:bg-accent/30 max-sm:flex-[.6]">
                              <SidePannel className="text-[10px] scale-75 group-hover:text-accent"/>
                              </button>}
                        </div>
                     </>
               </div>
               <div className="body"></div>
            </motion.header>
            <div className="control text-center mb-12 relative flex gap-3 w-full justify-center px-5 items-center">
               <div className="left hover:text-secondary flex justify-start transition-colors duration-300 text-white w-[min(40%_,5rem)] absolute left-5 top-[50%] translate-y-[-50%]">
               <LeftArrow onClick={() => setBg(prev => !prev)} className='text-4xl stroke-0 scale-120 cursor-pointer w-[min(40%_,5rem)] rotate-180 ' />
               </div>
               <div className="intro max-sm:w-5/6 sm:4/6 md:w-5/6 p-5 flex flex-col justify-center items-center gap-6">
                  {bg && (<AnimatePresence>
                  <motion.h2
                  key='intro-title'
                  initial={{scale: .3, opacity: 0}}
                  animate={{scale: 1, opacity: 1}}
                  transition={{duration: 0.6, ease: "easeOut"}}
                  exit={{scale: .3, opacity: 0}}
                  className="text-[min(50px,_5vw)] w-full family-farmhouse mt-6"> Every Crop Counts, Every Farmer Matters</motion.h2>
                  <motion.img 
                  key='intro-divider'
                  initial={{clipPath: 'inset(0 100% 0 0)'}}
                  animate={{clipPath: 'inset(0 0 0 0)'}}
                  transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                  exit={{clipPath: 'inset(0 100% 0 0)'}}
                  src="/divider.webp" alt="" className="w-[max(20vw,_180px)] wy-5"
                  
                  ></motion.img>
                  <motion.p
                  key='intro-p'
                  initial={{y: 50, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                  exit={{y: 50, opacity: 0}}
                  className="text-[min(14px,_3vw)] px-2 w-full"
                  
                  >Ogina Foods is a leading company in the frozen fruits and vegetables industry, committed to providing high-quality, nutritious, and fresh-tasting products to consumers and businesses alike.</motion.p>
                     <Button buttonKey='button-1' />
                  </AnimatePresence>
                  )}
                  {!bg && (<AnimatePresence>
                     <motion.h2
                     key='intro-title'
                     initial={{scale: .3, opacity: 0}}
                     animate={{scale: 1, opacity: 1}}
                     transition={{duration: 0.6, ease: "easeOut"}}
                     exit={{scale: .3, opacity: 0}}
                     className="text-[min(50px,_5vw)] w-full family-farmhouse mt-6"> Agriculture that works for the future</motion.h2>
                     <motion.img 
                     key='intro-divider'
                     initial={{clipPath: 'inset(0 100% 0 0)'}}
                     animate={{clipPath: 'inset(0 0 0 0)'}}
                     transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                     exit={{clipPath: 'inset(0 100% 0 0)'}}
                     src="/divider.webp" alt="" className="w-[max(20vw,_80px)] wy-5"
                     
                     ></motion.img>
                     <motion.p
                     key='intro-o'
                     initial={{y: 50, opacity: 0}}
                     animate={{y: 0, opacity: 1}}
                     transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                     exit={{y: 50, opacity: 0}}
                     className="text-[min(14px,_3vw)] max-w-3xl px-2 w-full"
                     >we use advanced freezing technology to preserve the natural flavors, textures, and nutritional value of our produce, ensuring that our customers enjoy the best nature has to offer, any time of the year.</motion.p>
                     <Button buttonKey='button-2' className='' />
                     </AnimatePresence>
                  )}
               </div>
               <div className="right text-white hover:text-secondary transition-colors duration-300 flex justify-end right-5 w-[min(40%_,5rem)] absolute top-[50%] translate-y-[-50%]">
               <RightArrow onClick={() => setBg(prev => !prev)} className='text-4xl stroke-0 scale-120 cursor-pointer w-[min(40%_,5rem)]' />
               </div>
            </div>
            </motion.div>
               <div className="sweperContainer bg-gradient-to-b from-secondary to-black/90 from-0% to-100% p-5 w-fit rounded-md">
               <Sweper className='sweperContainer bg-gradient-to-b from-secondary to-black/90 from-0% to-100% max-w-[97vw] mb-5 flex gap-3 select-none border-1 h-[90%] p-5 border-white border-dotted rounded-2xl'>
               {sweperItems.map((item, index) => (
                  <div key={'sweper-item-' + index} className="item animate-hover-surp gap-4 justify-start items-center text-white min-w-60 border-white/30 border-dotted not-last:border-r-2 px-2 flex flex-col text-shadow-2xs text-shadow-accent">
                     <div className="icon p-3 bg-primary rounded-full flex justify-center items-center">
                        <item.icon className="w-8 h-8 animate"/>
                     </div>
                     <div className="text text-[20] text-center">{item.Discription}</div>
                  </div>
               ))}
               {sweperItems.map((item, index) => (
                  <div key={'sweper-item-' + index} className="item animate-hover-surp gap-4 justify-start items-center text-white min-w-60 border-white/30 border-dotted not-last:border-r-2 px-2 flex flex-col text-shadow-2xs text-shadow-accent">
                     <div className="icon p-3 bg-primary rounded-full flex justify-center items-center">
                        <item.icon className="w-8 h-8 animate"/>
                     </div>
                     <div className="text text-[20] text-center">{item.Discription}</div>
                  </div>
               ))}
            </Sweper>
               </div>
         </AnimatePresence>
      </motion.section>
   )
}
