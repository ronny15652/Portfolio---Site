import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AlertSend } from "./Alert";
import { AlertError } from "./AlertError";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageAlert, setMessageAlert] = useState("");
  const [descriptionAlert, setDescriptionAlert] = useState("");
  const [sendAlert, setSendAlert] = useState(false);
  const [requiredAlert, setRequiredAlert] = useState(false);

  function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (name == "" || email == "" || message == "") {
      setTimeout(() => {
        setMessageAlert("");
        setDescriptionAlert("");
        setRequiredAlert(false);
        setSendAlert(false)
      }, 3000);
      setMessageAlert("Preencha todos os Campos");
      setDescriptionAlert(
        "Seu email não foi enviado, preencha todos os dados e envie novamente!",
      );
      setSendAlert(false)
      setRequiredAlert(true);
    } else if (name.length > 0  && message.length > 0 && email.length > 0){
      const templateParams = {
        from_name: name,
        email: email,
        message: message,
      };
      emailjs.send(
        "service_g4l29li",
        "template_rps4brd",
        templateParams,
        "-BLOxBr_BTdCrhpO-",
      )
        .then((response) => {
          setTimeout(() => {
            setName("");
            setMessage("");
            setEmail("");
            setSendAlert(false);
          }, 3000);
          setMessageAlert("Email Enviado!");
          setDescriptionAlert(
            "Seu email já foi encaminhado, aguarde que embreve entramos em contato!",
          );
          setSendAlert(true);
        });
    }
   
  }

  return (
    <>
      {sendAlert
        ? 
          <AlertSend
            messageAlert={messageAlert}
            descriptionAlert={descriptionAlert}
          />
        : null}
      {requiredAlert
        ? 
          <AlertError
            messageAlert={messageAlert}
            descriptionAlert={descriptionAlert}
          />
        : null}
      <section className="lg:section py-16 " id="contact">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-10 ">
            {/* text */}
            <motion.div
              variants={fadeIn({ direction: "right", delay: 0.3 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex justify-start items-center"
            >
              <div>
                <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide ">
                  Entre em contato
                </h4>
                <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                  Vamos trabalhar <br /> juntos!
                </h2>
              </div>
            </motion.div>
            {/* form */}
            <motion.form
              variants={fadeIn({ direction: "left", delay: 0.3 })}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              onSubmit={sendEmail}
              className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            >
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all focus:placeholder:text-white/50"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Seu Nome"
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all focus:placeholder:text-white/50"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Seu Email"
              />
              <textarea
                className=" bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all focus:placeholder:text-white/50 resize-none mb-12"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Sua Mensagem"
              />
              <button className="btn btn-lg" value="Enviar" type="submit">
                Enviar Mensagem
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
