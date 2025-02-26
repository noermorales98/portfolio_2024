import { Link } from "react-router-dom";
import { ArrowUpRight } from "../../../assets/icons/cards/ArrowUpRight.jsx";
import { DesignIcon } from "../../../assets/icons/cards/DesignIcon.jsx";
import { AboutMeIcon } from "../../../assets/icons/cards/AboutMeIcon.jsx";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="flex flex-col gap-8 max-w-7xl m-auto w-full items-center justify-center max-lg:mt-0 max-md:mt-16">
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
          Desarrollador Web {" "}
          <b>en React.</b>
        </span>
        <span className="text-3xl max-md:text-xl hidden max-md:block">
          Desarrollador web en React. Creo sitios únicos con enfoque en UX/UI y
          diseño moderno.
        </span>
      </div>
      <div className="w-2/5 animate-fade-up flex flex-col items-start gap-4 animate-delay-[100ms] max-md:w-full max-md:text-center max-md:items-center">
        <span className="text-3xl pt-20 max-md:pt-10 max-md:text-lg max-md:hidden">
          Desarrollador web en React. Creo sitios únicos con enfoque en UX/UI y
          diseño moderno.
        </span>
        <motion.div
          className="box items-center justify-center flex max-md:my-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            to="/sobre-mi"
            className="btn bg-[#171717] h-16 px-8 rounded-2xl text-white hover:bg-black mt-4"
          >
            <span className=" text-base p-0 m-0">Sobre mi</span>
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
            src="profile/profile3d.webp"
            width={100}
            height={100}
            className=" h-20 w-20"
            alt="profile"
          />
          <h1 className="text-white text-2xl font-medium mt-4">
            Noelí Rodríguez
          </h1>
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
      <a
        href={"https://dribbble.com/noermorales98"}
        target="_blank"
        rel="noreferrer"
        className="animate-fade-up card active:outline-none focus:outline-none hover:cursor-pointer hover:shadow-md duration-500 transition-all col-span-2 bg-[#90c3ff] rounded-3xl flex flex-row justify-between animate-delay-[150ms] p-8"
      >
        <div className="flex flex-col justify-between w-full max-md:gap-6">
          <span>
            <DesignIcon />
          </span>
          <div className="flex flex-row justify-between w-full items-end">
            <h5 className="text-black font-bold text-3xl max-lg:text-2xl flex flex-col">
              <div className="flex flex-col">
                <span>Diseño</span>
                <span>UX/UI</span>
              </div>
            </h5>
            <span>
              <ArrowUpRight />
            </span>
          </div>
        </div>
      </a>
      <Link
        to={"/portafolio/temperatura"}
        className="animate-fade-up card hover:cursor-pointer hover:shadow-md duration-500 transition-all movil col-span-2 rounded-3xl animate-delay-[200ms] max-lg:h-48"
      ></Link>
      <Link
        to={"/sobre-mi"}
        className="animate-fade-up card hover:cursor-pointer hover:shadow-md duration-500 transition-all col-span-2 bg-[#c7acee] rounded-3xl flex flex-row justify-between animate-delay-[150ms] p-8"
      >
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
      </Link>
      <Link
        to={"/portafolio"}
        className="animate-fade-up card hover:cursor-pointer hover:shadow-md duration-500 transition-all bg-[#b5f2db] rounded-3xl animate-delay-[300ms] h-full"
      >
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
      </Link>
      <Link
        to={"contacto"}
        className="animate-fade-up card hover:cursor-pointer hover:shadow-md duration-500 transition-all bg-[#f9d9e0] rounded-3xl animate-delay-[350ms]"
      >
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
      </Link>
    </div>
  );
}
