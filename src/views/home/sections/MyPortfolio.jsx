import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MyPortfolio() {
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
      <section className="bg-[#ffffffe2] flex flex-col items-center justify-center w-full gap-8 py-20 px-8">
        <div className="flex flex-col gap-3">
          <h4 className="text-5xl text-[#171717] text-center font-medium">
            Mi portafolio
          </h4>
          <p className="text-2xl text-[#171717] text-center">
            Estos son algunos de los proyectos que he realizado.
          </p>
        </div>
        <div className="grid grid-cols-3 max-w-7xl m-auto gap-4 mt-4 px-8">
          <article className="flex flex-col gap-4">
            <img
              src="factusync.jpg"
              alt="Factusync"
              className="rounded-2xl border hover:p-2 transition-all duration-500"
            />
            <h5 className="text-2xl text-[#171717] text-center font-medium">
              FactuSync
            </h5>
            <p className="text-xl text-[#686868] text-center">
              Aplicación web para la gestión de seguimiento de facturas.
            </p>
          </article>
          <article className="flex flex-col gap-4">
            <img
              src="noxthify.jpg"
              alt="Factusync"
              className="rounded-2xl border hover:p-2 transition-all duration-500"
            />
            <h5 className="text-2xl text-[#171717] text-center font-medium">
              Noxthify
            </h5>
            <p className="text-xl text-[#686868] text-center">
              Sitio web de Noxthify, agencia de desarollo de sitios web y apps.
            </p>
          </article>
          <article className="flex flex-col gap-4">
            <img
              src="qdelsur.png"
              alt="Factusync"
              className="rounded-2xl border hover:p-2 transition-all duration-500"
            />
            <h5 className="text-2xl text-[#171717] text-center font-medium">
              Quirúrgica del Sur
            </h5>
            <p className="text-xl text-[#686868] text-center">
              Sitio web de la empresa Quirúrgica del Sur, hospital de
              especialidades médicas.
            </p>
          </article>
        </div>
        <div className="mt-10">
          <Link to="/portafolio">
            <span className="bg-[#171717] text-white text-xl font-medium rounded-xl px-8 py-4">
              Ver más
            </span>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
