import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <section className="flex flex-col w-full items-center justify-center mt-28 max-lg:mt-32 max-md:mt-16">
      <div className="max-w-7xl m-auto my-0 px-8 max-md:px-2">
        <div className="flex flex-row justify-center items-center w-full gap-10 m-auto max-lg:flex-col">
          <div className="flex flex-col items-start max-lg:items-center w-1/2 max-lg:w-full px-8 max-md:px-2 gap-4">
            <h1 className="text-5xl font-bold max-lg:text-center">
              Noelí Rodríguez<span className="max-sm:hidden">👋</span>
            </h1>
            <p className="text-xl max-lg:text-center">
              Desarrollador frontend en{" "}
              <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">JavaScript</span> y{" "}
              <span className="font-semibold">diseñador UX/UI</span>, apasionado
              por hacer proyectos útiles, sólidos y utilizables.
            </p>
            <motion.div
              className="box items-center justify-center flex max-md:mt-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                to={"/contacto"}
                className="btn bg-[#171717] h-16 px-8 rounded-2xl text-white hover:bg-black mt-4"
              >
                Contactame
              </Link>
            </motion.div>

            <span className="flex flex-row text-gray-700 fill-gray-700 pt-16">
              <box-icon name="mouse"></box-icon>
              <span id="aboutme" className="pl-2">
                Desliza hacia abajo
              </span>
            </span>
          </div>
          <div>
            <div className="block w-[500px] h-[500px] max-md:w-72 max-md:h-72">
              <img src="profile/aboutme.webp" width={500} height={500} alt="Noelí Rodríguez" className=" justify-self-center bg-contain bg-center bg-no-repeat" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
