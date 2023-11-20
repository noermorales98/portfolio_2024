import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { proyectos } from "../../../data/proyectos";

export default function Proyectos() {
  return (
    <section className="flex flex-col w-full items-center justify-center">
      <div className="max-w-7xl m-auto w-full px-8 pt-10">
        <div className="flex flex-row justify-between  max-md:items-center max-md:justify-center">
          <h1 className="text-xl font-bold max-lg:text-center max-md:text-base max-md:hidden">
            Ultimos proyectos
          </h1>
          <div className="flex flex-row gap-1 max-md:text-xs">
            <button className="bg-gray-200 rounded-md px-2 py-1">Todos</button>
            <button className="bg-gray-200 rounded-md px-2 py-1">
              Diseño UX/UI
            </button>
            <button className="bg-gray-200 rounded-md px-2 py-1">
              Diseño web
            </button>
            <button className="bg-gray-200 rounded-md px-2 py-1">
              Aplicaciones web
            </button>
          </div>
        </div>
        <div className="block w-full border-b pt-5"></div>
      </div>
      <GridSection />
    </section>
  );
}

function GridSection() {

  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-6 justify-between max-w-7xl m-auto w-full px-8 pt-8 pb-32">
      {proyectos.map((proyecto) => (
        <Card
          key={proyecto.title}
          code={proyecto.code}
          image={proyecto.image}
          title={proyecto.title}
          description={proyecto.description}
        />
      ))}
    </div>
  );
}

function Card({ code, image, title, description }) {
  return (
    <Link to={`/portafolio/${code}`}>
      <article className="flex flex-col gap-1 cursor-pointer">
        <img
          src={image}
          alt={title}
          className="rounded-xl object-cover border"
        />
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className=" text-sm pr-1">{description}</p>
      </article>
    </Link>
  );
}

Card.propTypes = {
  code: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
