import { DatabaseIcon } from "../../../assets/icons/stack/DatabaseIcon.jsx";
import { FigmaIcon } from "../../../assets/icons/stack/FigmaIcon.jsx";
import { JavaScriptIcon } from "../../../assets/icons/stack/JavaScriptIcon.jsx";
import { ReactIcon } from "../../../assets/icons/stack/ReactIcon.jsx";
import { TailwindIcon } from "../../../assets/icons/stack/TailwindIcon.jsx";
import { WordPressIcon } from "../../../assets/icons/stack/WordPressIcon.jsx";
import { motion } from "framer-motion";

export default function MyStack() {
  const offscreen = {
    opacity: 0,
    y: 100,
  };

  const onscreen = {
    opacity: 1,
    y: 0, // Mueve a la posición original
    transition: {
      type: "tween", // Usa una transición lineal
      duration: 0.8,
      ease: "easeInOut", // Esto suaviza la entrada y la salida de la animación
    },
  };

  return (
    <motion.div
      className="card-container bg-[#171717] pt-24"
      initial={offscreen}
      whileInView={onscreen}
      viewport={{ once: true, amount: 0.1 }}
    >
      <section className="flex flex-row justify-between items-center max-w-7xl m-auto px-8">
        <div className="flex flex-col gap-2 items-center w-full justify-center">
          <h5 className="text-center text-5xl text-white font-medium">
            Tecnologías que utilizo
          </h5>
          <p className="text-center text-2xl text-[#686868]">
            Estas son las tecnologías que utilizo para crear sitios web.
          </p>
          <div className="MyStack grid grid-cols-6 text-[#979797] fill-[#979797] w-full justify-between text-xl py-8">
            <motion.div
              className="card-container"
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0 }}
            >
              <article className="react flex flex-col items-center justify-center transition-all hover:fill-white hover:text-white">
                <ReactIcon />
                <span>React</span>
              </article>
            </motion.div>
            <motion.div
              className="card-container"
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.2 }}
            >
              <article className="javascript flex flex-col items-center justify-center transition-all hover:fill-white hover:text-white">
                <JavaScriptIcon />
                <span>JavaScript</span>
              </article>
            </motion.div>
            <motion.div
              className="card-container"
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.4 }}
            >
              <article className="tailwind flex flex-col items-center justify-center transition-all hover:fill-white hover:text-white">
                <TailwindIcon />
                <span>TailwindCSS</span>
              </article>
            </motion.div>
            <motion.div
              className="card-container"
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.6 }}
            >
              <article className="figma flex flex-col items-center justify-center transition-all hover:fill-white hover:text-white">
                <FigmaIcon />
                <span>Figma</span>
              </article>
            </motion.div>
            <motion.div
              className="card-container"
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.8 }}
            >
              <article className="wordpress flex flex-col items-center justify-center transition-all hover:fill-white hover:text-white">
                <WordPressIcon />
                <span>WordPress</span>
              </article>
            </motion.div>
            <motion.div
              className="card-container"
              initial={offscreen}
              whileInView={onscreen}
              viewport={{ once: true, amount: 0.9 }}
            >
              <article className="flex flex-col items-center justify-center transition-all hover:fill-white hover:text-white">
                <DatabaseIcon />
                <span>MySQL</span>
              </article>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
