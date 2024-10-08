import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from "react-icons/hi"; 
import CountUp from "react-countup"
import {motion} from "framer-motion"


export default function Hero() {
  return (
   <section className="hro-wrapper">
     <div className="paddings innerWidth flexCenter hero-container">

        {/* left-side */}
        <div className="flexColStart hero-left">
            <div className="hero-title">
                <div className="orange-circle"/>
                <motion.h1
                 initial={ {y: "2rem"}}
                 animate={{y: 0, opacity: 1}}
                 transition={{
                    duration: 2,
                    type: "spring"
                 }}
                >

                    Discover <br /> Most Suitable <br /> Property</motion.h1>
            </div>
            <div className="flexColStart hero-des">
                <span>Find a variety of properties that suit you very easily</span>
                <span>Forget all difficulties in finding a residence for you</span>
            </div>

            <div className="search-bar flexCenter">
              <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" />
            <button className="button"> <span>Search</span> </button>
            </div>
                  
            <div className="flexCenter stats ">
                <div className="flexColStart stat">
                    <span>
                       <CountUp start={88000} end={9000} duration={4} />
                     
                       <span>+</span>
                        </span>
                        <span className='secondaryText'>Premium Products</span>
                </div>

                <div className="flexColStart stat">
                    <span>
                       <CountUp start={1950} end={2000} duration={4} />
                     
                       <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                </div>

                <div className="flexColStart stat">
                    <span>
                       <CountUp end={28}  />
                     
                       <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winning</span>
                </div>
            
            
             
                </div>
          
        </div>

     {/* right-side */}
        <div className="flexCenter hero-right">
            <motion.div
            initial={{x: "7rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{ 
                duration: 2,
                type: "spring"
            }}
            className="image-container">
                <img src="./hero-image.png" alt="" />
            </motion.div>
        </div>
     </div>
   </section>
  )
}
