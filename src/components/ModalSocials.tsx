import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function ModalSocials() {
  const socials = [
    {
      uri: "https://github.com/ronny15652",
      icon: <FaGithub />,
    },
    {
      uri: "https://www.linkedin.com/in/ronnysilvaa42/",
      icon: <FaLinkedin />,
    },
    {
      uri: "https://dribbble.com/oronnydev",
      icon: <FaDribbble />,
    },
  ];

  return (
      <motion.div 
        variants={fadeIn({direction: "up", delay: 0.7})}
        initial={"hidden"}
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex-1 min-w-[20%] h-[30%]">
        <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
          {socials.map((socials) => (
            <a
              href={socials.uri}
              target="_blank"
            >
              {socials.icon}
            </a>
          ))}
        </div>
        </motion.div>
  );
}
