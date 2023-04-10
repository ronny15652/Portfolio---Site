import { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../variants";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className="section"
      id="about" 
    >
      <div className="container mx-auto " >
          <div className="flex flex-col gap-y-0 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-[80rem] lg:h-screen ">
          {/* img */}
          <motion.div 
            
            variants={fadeIn({direction: 'right', delay: 0.3})}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[90vh] mix-blend-lighten bg-top">
          </motion.div>
          {/* text */}
          <motion.div 
          
            variants={fadeIn({direction: 'left', delay: 0.5})}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3 }}
            className="flex-1 lg:h-auto" >
            <h2 className="h2 text-accent font-bold">Sobre mim</h2>
            <h3 className="h3 mb-4 ">
              Eu sou um desenvolvedor Front-end e Mobile há 2 anos de
              experiencia e atualmente cursando Design Ui.<br />
            </h3>
            <p className="mb-6">
            Adoro este campo desde a minha infância, ainda mais nos meus 14 anos, quando via filmes de hacker.
            Na época, fui descobrindo mais como as coisas funcionavam e, dessa forma, percebi a relevância da programação para isso. 
            A linguagem Python começou naquele tempo, mas não durou muito tempo, pois, vendo alguns vídeos, descobri que a robótica podia fazer qualquer coisa, 
            desde um controle remoto até uma fechadura com funcionamento por biometria, dali, a minha mente expandiu-se muito ao perceber que essa área não tinha limites. 
            Nesse período, fui descobrindo outros campos, como todo garoto jovem que está descobrindo o que mais gosta, como engenharia mecatrônica, arqueologia, paleontologia, etc.
            </p>
            {/*  Stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12" >
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {isInView ? <CountUp start={0} end={5} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  Anos de <br />
                  Experiencia
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {isInView
                    ? <CountUp start={0} end={100} duration={4} />
                    : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  Projetos <br />
                  Concluidos
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {isInView
                    ? <CountUp start={0} end={5} duration={10} />
                    : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px] ">
                  Clientes <br />
                  Satisfeitos
                </div>
                <div></div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center " ref={ref}>
              <button className="btn btn-lg">Contato</button>
              <a href="https://github.com/ronny15652" className="text-gradient btn-link ">Meu Portifólio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
