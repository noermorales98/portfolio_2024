import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function WebAMedida() {
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
      <section className="bg-[#ffffffe2] max-w-7xl m-auto flex flex-row justify-between h-full w-full gap-4 py-20 animate-fade-up px-8">
        <div className="w-3/5 flex flex-col justify-between gap-4 bg-[#f5f5f7] p-10 rounded-2xl animate-fade border">
          <div className="flex flex-col gap-2 justify-center h-full">
            <h4 className="text-2xl text-[#4a4a4a] text-start">
              Desarrollo de sitios web
            </h4>
            <p className="text-4xl text-[#171717] text-start font-bold pr-8">
              Creo sitios web a medida, con un{" "}
              <span className="text-[#5157fd]">diseño único </span>y{" "}
              <span className="text-[#5157fd]">personalizado</span>, que se
              adapta a las necesidades de tu negocio.
            </p>
            <Link to="/contacto" className="mt-10">
              <span className="bg-[#171717] text-white text-xl font-medium rounded-xl px-8 py-4 mt-8">
                Contáctame
              </span>
            </Link>
          </div>
        </div>
        <div className="w-2/5">
          <img
            src="techmate.png"
            alt="Factusync"
            className="rounded-2xl border"
          />
        </div>
      </section>
    </motion.div>
  );
}
