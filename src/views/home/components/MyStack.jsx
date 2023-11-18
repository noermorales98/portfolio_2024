import { DatabaseIcon } from "../../../assets/icons/DatabaseIcon";
import { FigmaIcon } from "../../../assets/icons/FigmaIcon";
import { JavaScriptIcon } from "../../../assets/icons/JavaScriptIcon";
import { ReactIcon } from "../../../assets/icons/ReactIcon";
import { TailwindIcon } from "../../../assets/icons/TailwindIcon";
import { WordPressIcon } from "../../../assets/icons/WordPressIcon";
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
      className="card-container"
      initial={offscreen}
      whileInView={onscreen}
      viewport={{ once: true, amount: 0.1 }}
    >
      <section className="flex flex-row justify-between items-center max-w-7xl m-auto px-8 py-24">
        <div className="flex flex-col gap-2 items-center w-full justify-center">
          <h5 className="text-center text-5xl text-[#171717] font-medium">
            Mi stack
          </h5>
          <p className="text-center text-2xl text-[#686868]">
            Estas son las tecnologías que utilizo para crear sitios web.
          </p>
          <div className="MyStack grid grid-cols-6 text-[#979797] fill-[#979797] w-full justify-between text-xl py-8">
            <article className="react flex flex-col items-center justify-center transition-all hover:fill-[#171717] hover:text-[#171717]">
              <ReactIcon />
              <span>React</span>
            </article>
            <article className="javascript flex flex-col items-center justify-center hover:fill-[#171717] transition-all hover:text-[#171717]">
              <JavaScriptIcon />
              <span>JavaScript</span>
            </article>
            <article className="tailwind flex flex-col items-center justify-center transition-all hover:fill-[#171717] hover:text-[#171717]">
              <TailwindIcon />
              <span>TailwindCSS</span>
            </article>
            <article className="figma flex flex-col items-center justify-center transition-all hover:fill-[#171717] hover:text-[#171717]">
              <FigmaIcon />
              <span>Figma</span>
            </article>
            <article className="wordpress flex flex-col items-center justify-center transition-all hover:fill-[#171717] hover:text-[#171717]">
              <WordPressIcon />
              <span>WordPress</span>
            </article>
            <article className="flex flex-col items-center justify-center transition-all hover:fill-[#171717] hover:text-[#171717]">
              <DatabaseIcon />
              <span>MySQL</span>
            </article>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
