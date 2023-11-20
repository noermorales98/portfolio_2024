import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className="bg-[#171717] w-full py-20 px-8">
      <div className="flex flex-row max-md:flex-col w-full gap-8 max-w-6xl m-auto justify-between">
        <div className="flex flex-col gap-6 text-start items-start max-md:items-center justify-center w-3/5 max-md:w-full">
          <h5 className="text-5xl font-bold text-white text-center">
            Sobre mi
          </h5>
          <p className="text-white w-4/5 max-md:w-full max-md:text-center">
            Soy desarrollador y diseñador web especializado en frontend con
            React y UX/UI. Realizo proyectos independientes. Autodidacta, me
            mantengo al día con las tecnologías web y en constante aprendizaje.
          </p>
          <motion.div
            className="box items-center justify-center flex"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a
              href="#"
              className="btn bg-white h-16 px-8 transition-all rounded-2xl text-[#171717]"
            >
              Descargar CV
            </a>
          </motion.div>
        </div>
        <div className="grid grid-cols-4 gap-10 bg-gradient-to-r from-[#1f1f1f] to-[#272727] max-md:mt-8 p-16 max-md:p-10 rounded-2xl h-full">
          <div className="circle"></div>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon type="logo" name="html5"></box-icon>
            <h6 className="text-white text-xl max-md:text-xs">HTML</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="tailwind-css" type="logo"></box-icon>
            <h6 className="text-white text-xl max-md:text-xs">Tailwind</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="javascript" type="logo"></box-icon>
            <h6 className="text-white text-xl max-md:text-xs">JavaScript</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="react" type="logo"></box-icon>
            <h6 className="text-white text-xl max-md:text-xs">React</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="figma" type="logo"></box-icon>
            <h6 className="text-white text-xl max-md:text-xs">Figma</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="git" type="logo"></box-icon>
            <h6 className="text-white text-xl max-md:text-xs">Git</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="mongodb" type="logo"></box-icon>
            <h6 className="text-white text-xl max-md:text-xs">MongoDB</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="nodejs" type="logo"></box-icon>
            <h6 className="text-white text-xl max-md:text-xs">NodeJS</h6>
          </article>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
