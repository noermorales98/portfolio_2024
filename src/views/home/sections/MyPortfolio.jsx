import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const offscreen = {opacity: 0, y: 100};
const onscreen = {
    opacity: 1,
    y: 0,
    transition: {type: "tween", duration: 0.8, ease: "easeInOut"},
};

const projects = [
    {
        name: "FactuSync",
        description: "Aplicación web para la gestión de seguimiento de facturas.",
        image: "portfolio/factusync.jpg",
        alt: "Factusync"
    },
    {
        name: "Noxthify",
        description: "Sitio web de Noxthify, agencia de desarollo de sitios web y apps.",
        image: "portfolio/noxthify.jpg",
        alt: "Noxthify"
    },
    {
        name: "Quirúrgica del Sur",
        description: "Sitio web de la empresa Quirúrgica del Sur, hospital de especialidades médicas.",
        image: "portfolio/qdelsur.png",
        alt: "Quirúrgica del Sur"
    }
];

export default function MyPortfolio() {
    return (
        <motion.div className="card-container" initial={offscreen} whileInView={onscreen}
                    viewport={{once: true, amount: 0.1}}>
            <section className="bg-[#ffffffe2] flex flex-col items-center justify-center w-full gap-8 py-20 px-8">
                <div className="flex flex-col gap-3">
                    <h4 className="text-5xl text-[#171717] text-center font-medium max-md:text-3xl max-md:font-bold">
                        Mi portafolio
                    </h4>
                    <p className="text-2xl text-[#171717] text-center max-md:text-xl">
                        Estos son algunos de los proyectos que he realizado.
                    </p>
                </div>
                <GridSection projects={projects}/>
            </section>
        </motion.div>
    );
}

function GridSection({projects}) {
    return (
        <>
            <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-8 max-w-7xl m-auto gap-4 mt-4 px-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <VerMasBoton/>
        </>
    );
}

function ProjectCard({name, description, image, alt}) {
    return (
        <article className="flex flex-col gap-4">
            <img src={image} alt={alt} className="rounded-2xl border hover:p-2 transition-all duration-500"/>
            <h5 className="text-2xl max-md:text-xl text-[#171717] text-center font-medium">{name}</h5>
            <p className="text-xl max-md:text-base text-[#686868] text-center">{description}</p>
        </article>
    );
}

function VerMasBoton() {
    return (
        <div className="mt-10">
            <motion.div className="box items-center justify-center flex" whileHover={{scale: 1.1}}
                        transition={{type: "spring", stiffness: 400, damping: 10}}>
                <Link to="/portafolio">
                    <span className="bg-[#171717] text-white text-xl font-medium rounded-xl px-8 py-4">
                        Ver más
                    </span>
                </Link>
            </motion.div>
        </div>
    );
}
