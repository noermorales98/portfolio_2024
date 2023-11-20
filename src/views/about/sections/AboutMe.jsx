import { motion } from "framer-motion";

function AboutMe() {
  return (
    <section className="bg-[#171717] w-full py-20 px-8 flex flex-col gap-2">
      <div className="grid grid-cols-5 max-md:grid-cols-1 max-w-6xl m-auto gap-2">
        <div className="bg-[#222222] col-span-3 max-md:col-span-1 fill-white py-10 pl-10 pr-14 rounded-2xl flex flex-col gap-8">
          <box-icon name="user-circle" size="lg"></box-icon>
          <p className="text-white text-4xl font-semibold pb-4">
            Soy un desarrollador web con experiencia en React,{" "}
            <span className=" text-gray-400">
              también tengo concimientos en el <br /> diseño UX / UI.
            </span>
          </p>
        </div>
        <div className="bg-[#222222] fill-white rounded-2xl col-span-2 max-md:col-span-1 flex flex-col items-center gap-8 justify-between p-10">
          <div className="flex flex-col items-center gap-8">
            <box-icon name="file" size="lg"></box-icon>
            <p className="text-white text-4xl font-semibold">Mas sobre mi</p>
          </div>
          <motion.div
            className="box items-center w-full justify-center flex max-md:mt-6"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a
              download={true}
              href="CV.pdf"
              className="btn border-none w-full bg-blue-500 hover:bg-blue-700 h-16 px-8 rounded-full text-white mt-4"
            >
              Descargar CV
            </a>
          </motion.div>
        </div>
      </div>
      <div className="grid grid-cols-6 max-md:grid-cols-2 gap-2 max-w-6xl m-auto justify-between w-full">
        <article className="bg-[#222222] rounded-full flex items-center justify-center p-4">
          <h3 className="text-white text-lg text-center p-0 m-0 flex items-center justify-center">
            React
          </h3>
        </article>
        <article className="bg-[#222222] rounded-full flex items-center justify-center p-4">
          <h3 className="text-white text-lg text-center p-0 m-0 flex items-center justify-center">
            JavaScript
          </h3>
        </article>
        <article className="bg-[#222222] rounded-full flex items-center justify-center p-4">
          <h3 className="text-white text-lg text-center p-0 m-0 flex items-center justify-center">
            TailwindCSS
          </h3>
        </article>
        <article className="bg-[#222222] rounded-full flex items-center justify-center p-4">
          <h3 className="text-white text-lg text-center p-0 m-0 flex items-center justify-center">
            Figma
          </h3>
        </article>
        <article className="bg-[#222222] rounded-full flex items-center justify-center p-4">
          <h3 className="text-white text-lg text-center p-0 m-0 flex items-center justify-center">
            NodeJS
          </h3>
        </article>
        <article className="bg-[#222222] rounded-full flex items-center justify-center p-4">
          <h3 className="text-white text-lg text-center p-0 m-0 flex items-center justify-center">
            MongoDB
          </h3>
        </article>
      </div>
      <div className="grid grid-cols-5 max-w-6xl m-auto gap-2 max-md:grid-cols-1">
        <div className="bg-[#222222] fill-white rounded-2xl col-span-2 max-md:col-span-1 flex flex-col items-start gap-8 justify-between p-10">
          <div className="flex flex-col items-start gap-8 justify-between">
            <box-icon name="buildings" size="lg"></box-icon>
            <p className="text-white text-4xl font-semibold">
              Con sede en <br /> Cancún, México <br />
              <span className="text-gray-400">UTC-5</span>
            </p>
          </div>
        </div>
        <div className="bg-[#222222] col-span-3 max-md:col-span-1 fill-white py-10 pl-10 pr-14 rounded-2xl flex flex-col gap-8">
          <p className="text-white text-4xl font-semibold pb-4">
            Como desarrollador web independiente, manejo desde sitios web
            básicos hasta aplicaciones web avanzadas. {""}
            <span className=" text-gray-400">
              Mi enfoque es el aprendizaje continuo y la mejora de mis
              habilidades.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
