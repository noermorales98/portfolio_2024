import { Link } from "react-router-dom";
import { ArrowUpRight } from "../../../assets/icons/cards/ArrowUpRight.jsx";
import { DesignIcon } from "../../../assets/icons/cards/DesignIcon.jsx";
import { AboutMeIcon } from "../../../assets/icons/cards/AboutMeIcon.jsx";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="flex flex-col gap-8 max-w-7xl m-auto w-full items-center justify-center max-lg:mt-32 max-md:mt-16">
      <MainInfo />
      <GridSection />
    </section>
  );
}

function MainInfo() {
  return (
    <div className="flex flex-row justify-between items-center font-sans text-[#171717] px-10 max-md:px-8 h-[70vh] max-md:h-[50vh] max-md:flex-col max-md:mt-0 max-md:justify-center">
      <div className="w-3/5 flex flex-col gap-4 animate-fade-up max-md:w-full max-md:text-center">
        <h4 className="text-7xl max-md:text-5xl">
          Hola, soy <b>Noelí</b>
        </h4>
        <span className="text-3xl max-md:text-xl max-md:hidden">
          Te ayudo a construir tu sitio web <br />
          <b>atractivo y funcional.</b>
        </span>
        <span className="text-3xl max-md:text-xl hidden max-md:block">
          Te ayudo a construir tu sitio web <br /> <b>atractivo</b>,{" "}
          <b>funcional</b> y <b>moderno</b>,<br /> optimizado para todos los{" "}
          <br />
          dispositivos y usuarios.
        </span>
      </div>
      <div className="w-2/5 animate-fade-up flex flex-col items-start gap-4 animate-delay-[100ms] max-md:w-full max-md:text-center max-md:items-center">
        <span className="text-3xl pt-20 max-md:pt-10 max-md:text-lg max-md:hidden">
          Lleve su presencia en línea al siguiente nivel con mis servicios de
          diseño web y creación de contenido.
        </span>
        <motion.div
          className="box items-center justify-center flex max-md:my-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            to="/contacto"
            className="btn bg-[#171717] h-16 px-8 rounded-2xl text-white hover:bg-black mt-4"
          >
            <span className=" text-base p-0 m-0">Contáctame</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function GridSection() {
  return (
    <div className="grid grid-cols-6 max-w-7xl m-auto gap-4 max-md:gap-2 px-8 pb-8 max-lg:grid-cols-2">
      <div className="animate-fade-up card row-span-2 col-span-2 bg-[#171717] rounded-3xl p-8 flex flex-col items-start justify-between gap-10 animate-delay-[100ms]">
        <div className="flex flex-col items-start">
          <img
            src="profile/profile3d.png"
            width={100}
            height={100}
            className=" h-20 w-20"
            alt="profile"
          />
          <h5 className="text-white text-2xl font-medium mt-4">
            Noelí Rodríguez
          </h5>
          <span className="text-[#dedede] text-base font-medium">
            Desarrollador Web
          </span>
          <span className=" text-green-300 text-sm flex flex-row gap-1 items-center justify-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="5"
              viewBox="0 0 24 24"
              className="fill-current inline-block mt-1"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path>
            </svg>
            Disponible
          </span>
        </div>
        <div className="flex items-start text-[#dedede] py-8">
          <span className=" text-left text-2xl">
            Resuelvo problemas de manera creativa y eficiente, con un enfoque en
            la <b>experiencia del usuario.</b>
          </span>
        </div>
      </div>
      <div className="animate-fade-up card hover:cursor-pointer hover:shadow-md duration-500 transition-all col-span-2 bg-[#90c3ff] rounded-3xl flex flex-row justify-between animate-delay-[150ms] p-8">
        <div className="flex flex-col justify-between w-full max-md:gap-6">
          <span>
            <DesignIcon />
          </span>
          <div className="flex flex-row justify-between w-full items-end">
            <h5 className="text-black font-bold text-3xl max-lg:text-2xl flex flex-col">
              <div className="flex flex-col">
                <span>Diseño</span>
                <span>auténtico</span>
              </div>
            </h5>
            <span>
              <ArrowUpRight />
            </span>
          </div>
        </div>
      </div>
      <div className="animate-fade-up card hover:cursor-pointer hover:shadow-md duration-500 transition-all movil col-span-2 rounded-3xl animate-delay-[200ms] max-lg:h-48"></div>
      <div className="animate-fade-up card hover:cursor-pointer hover:shadow-md duration-500 transition-all col-span-2 bg-[#c7acee] rounded-3xl flex flex-row justify-between animate-delay-[150ms] p-8">
        <div className="flex flex-col justify-between w-full max-md:gap-6">
          <span>
            <AboutMeIcon />
          </span>
          <div className="flex flex-row justify-between w-full items-end">
            <h5 className="text-black font-bold text-3xl max-lg:text-2xl flex flex-col">
              <div className="flex flex-col">
                <span>Sobre mi</span>
              </div>
            </h5>
            <span>
              <ArrowUpRight />
            </span>
          </div>
        </div>
      </div>
      <div className="animate-fade-up card hover:cursor-pointer hover:shadow-md duration-500 transition-all bg-[#b5f2db] rounded-3xl animate-delay-[300ms] h-full">
        <div className="flex flex-col justify-between w-full items-center h-full p-8 max-md:gap-6">
          <span className="w-full flex items-end flex-row justify-end">
            <ArrowUpRight />
          </span>
          <h5 className="text-black font-bold text-3xl max-lg:text-2xl max-md:text-xl flex flex-col">
            <div className="flex flex-col">
              <span>Mi trabajo</span>
            </div>
          </h5>
        </div>
      </div>
      <div className="animate-fade-up card hover:cursor-pointer hover:shadow-md duration-500 transition-all bg-[#f9d9e0] rounded-3xl animate-delay-[350ms]">
        <div className="flex flex-col justify-between w-full items-center h-full p-8 max-md:gap-6">
          <span className="w-full flex items-end flex-row justify-end">
            <ArrowUpRight />
          </span>
          <h5 className="text-black font-bold text-3xl max-lg:text-2xl max-md:text-xl flex flex-col">
            <div className="flex flex-col">
              <span>Redes Sociales</span>
            </div>
          </h5>
        </div>
      </div>
    </div>
  );
}
