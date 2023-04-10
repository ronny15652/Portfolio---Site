import { motion } from "framer-motion"
import { fadeIn } from "../variants"

import img1 from "../assets/portfolio-img1.png"
import img2 from "../assets/portfolio-img2.png"
import img3 from "../assets/portfolio-img3.png"

export default function Work(){
  return(
   <section className='section ' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn({direction: 'right', delay: 0.3})}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0 '>
          {/* Text */}
          <div>
            <h2 className="h2 leading-tight text-accent ">Meus Últimos Trabalhos.</h2>
            <p className="max-w-sm mb-16">Entre em contato que lhe apresento muito mais!</p>
            <button className="btn btn-sm">
              <a href="https://dribbble.com/oronnydev">Veja os Projetos</a>
            </button>
          </div>
          {/* image */}
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
            {/* overlay */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
            {/* img */}
            <img className="group-hover:scale-125 transition-all duration-500" src={img1} alt="" />
            {/* pre title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
              <span className="text-gradient ">Desenvolvimento<br/>FullStack</span>
            </div>
            {/* itle */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
              <span className="text-3xl text-white ">Waiter App</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({direction: 'left', delay: 0.2})}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3}}
          className="flex-1 flex flex-col gap-y-10 lg:gap-y-0">
          {/* image */}
        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl lg:-top-9 ">
            {/* overlay */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
            {/* img */}
            <img className="group-hover:scale-125 transition-all duration-500" src={img2} alt="" />
            {/* pre title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
              <span className="text-gradient ">Desenvolvimento<br/>Mobile</span>
            </div>
            {/* itle */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
              <span className="text-3xl text-white ">Orion IMC</span>
            </div>
          </div>

          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
            {/* overlay */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
            {/* img */}
            <img className="group-hover:scale-125 transition-all duration-500" src={img3} alt="" />
            {/* pre title */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
              <span className="text-gradient ">Design<br/>UI</span>
            </div>
            {/* itle */}
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
              <span className="text-3xl text-white ">Zl Engenharia</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
   </section>
  ) 
};