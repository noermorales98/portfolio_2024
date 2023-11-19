import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const offscreen = {
    opacity: 0,
    y: 100,
};

const onscreen = {
    opacity: 1,
    y: 0,
    transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeInOut",
    },
};

export default function WebAMedida() {
    return (
        <motion.div
            className="card-container"
            initial={offscreen}
            whileInView={onscreen}
            viewport={{ once: true, amount: 0.1 }}
        >
            <section className="bg-[#ffffffe2] max-w-7xl m-auto flex flex-row max-lg:flex-col justify-between h-full w-full gap-4 py-20 animate-fade-up px-8">
                <div className="w-3/5 max-lg:w-full flex flex-col items-start justify-center bg-[#f5f5f7] p-10 rounded-2xl animate-fade border">
                    <TextoWeb />
                    <BotonContacto />
                </div>
                <ImagenPortafolio />
            </section>
        </motion.div>
    );
}

function TextoWeb() {
    return (
        <div className="flex flex-col items-start gap-2 justify-center pb-10">
            <h4 className="text-2xl text-[#4a4a4a] text-start max-md:hidden">
                Desarrollo de sitios web
            </h4>
            <h4 className="hidden max-md:block text-3xl text-black text-start font-bold">
                Desarrollo Web
            </h4>
            <p className="text-4xl text-[#171717] text-start font-bold pr-8 max-md:text-lg max-md:p-0 max-md:text-[#4a4a4a] max-md:font-medium">
                Creo sitios web a medida, con un{" "}
                <span className="text-[#5157fd]">diseño único </span>y{" "}
                <span className="text-[#5157fd]">personalizado</span>, que se
                adapta a las necesidades de tu negocio.
            </p>
        </div>
    );
}

function BotonContacto() {
    return (
        <motion.div
            className="box items-start flex"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Link to="/contacto">
                <span className="bg-[#171717] text-white text-xl font-medium rounded-xl px-8 py-4">
                    Contáctame
                </span>
            </Link>
        </motion.div>
    );
}

function ImagenPortafolio() {
    return (
        <div className="w-2/5 max-lg:w-full">
            <img
                src="portfolio/techmate.png"
                alt="Factusync"
                className="rounded-2xl"
            />
        </div>
    );
}
