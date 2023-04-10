import { BsArrowUpRight,  } from "react-icons/bs"
import { motion } from "framer-motion"
import { fadeIn } from "../variants"
import { services } from "./Lists/ListService"

export default function Services(){
  return(
  <section className='section' id='services'>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* Text e Image*/}
        <motion.div 
          variants={fadeIn({direction: 'right', delay: 0.3})}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
          <h2 className="h2 text-accent " >O que eu faço.</h2>
          <button className="btn btn-sm">ACOMPANHE MEU TRABALHO</button>

        </motion.div>
        {/* services */}
        <motion.div 
          variants={fadeIn({direction: 'left', delay: 0.5})}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1">
          {/* service list */}
          <div>
            {services.map((service) => {
              return (
                <div className="border-b border-white/20 h-[146px] mb-[38px] flex  " key={service.id}>
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 "> {service.name} </h4>
                    <p className="font-secondary leading-tight "> {service.description} </p>
                  </div> 
                  <div className="flex flex-col flex-1 items-end">
                    <div className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                      <a href="https://dribbble.com/oronnydev" >
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
            }
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  ) 
};