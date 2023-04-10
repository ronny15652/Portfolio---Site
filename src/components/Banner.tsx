import Image from "../assets/avatar.svg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {fadeIn}  from "../variants";
import { useRef } from "react";
import Modal from "react-modal";
import ModalSocials from "./ModalSocials";

Modal.setAppElement("#root");

export default function Banner() {

  const ref = useRef(null)
 
  return (
    <section
      id="home"
      className="min-h-[90vh] lg:min-h-[100vh] flex items-center "
    >
      <div className="container mx-auto lg:flex-1" >
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 mb-32 ">
          {/* Text */}
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn({direction: "up", delay: 0.3 })}
              initial="hidden"
              whileInView={"show"}
              className="text-[55px] font-bold leading-[0.8]
              lg:text-[110px] "
              ref={ref}
            >
              RONNY <span>SILVA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn({direction: "up", delay: 0.4 })}
              initial="hidden"
              whileInView={"show"}
              className="mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1] "
            >
              <span className="text-white mr-4">Eu sou um</span>
              <TypeAnimation
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
                sequence={[
                  "Dev Front-End",
                  2000,
                  "Dev Mobile",
                  2000,
                  "Designer",
                  2000,
                ]}
                
              />
            </motion.div>
            {/* Description */}
            <motion.p
              variants={fadeIn({direction: "up", delay: 0.5 })}
              initial="hidden"
              whileInView={"show"}
              className="mb-8 max-w-lg mx-auto lg:mx-0 "
            >
              Olá me chamo Ronny, Tenho 19 anos de idade e no 
              momento estou enteressado em participar do seu time!
            </motion.p>
            {/* Button Contact */}
            <motion.div
              variants={fadeIn({direction: "up", delay: 0.6 })}
              initial="hidden"
              whileInView={"show"}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 "
            >
              <button className="btn btn-lg  ">
                Contato
              </button>
              <a href="https://github.com/ronny15652" className="text-gradient btn-link ">Trabalhe Comigo</a>
            </motion.div>
            {/* Socials */}
              <ModalSocials  />
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn({direction: "up", delay: 0.8 })}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="avatar" />
          </motion.div>
        </div>
      </div>
    </section>);
}
