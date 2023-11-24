import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { proyectos } from "../../../data/proyectos";
import { useState } from "react";

export default function Proyectos() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  return (
    <section className="flex flex-col w-full items-center justify-center">
      <div className="max-w-7xl m-auto w-full px-8 pt-10">
        <div className="flex flex-row justify-between  max-md:items-center max-md:justify-center">
          <h4 className="text-xl font-bold max-lg:text-center max-md:text-base max-md:hidden">
            Ultimos proyectos
          </h4>
          <div className="flex flex-row gap-1 max-md:text-xs">
            <button
              onClick={() => setCategoriaSeleccionada("todos")}
              className={
                categoriaSeleccionada === "todos"
                  ? "bg-gray-600 text-white rounded-md px-2 py-1"
                  : "bg-gray-200 rounded-md px-2 py-1"
              }
            >
              Todos
            </button>
            <button
              onClick={() => setCategoriaSeleccionada("uxui")}
              className={
                categoriaSeleccionada === "uxui"
                  ? "bg-gray-600 text-white rounded-md px-2 py-1"
                  : "bg-gray-200 rounded-md px-2 py-1"
              }
            >
              Diseño UX/UI
            </button>
            <button
              onClick={() => setCategoriaSeleccionada("web")}
              className={
                categoriaSeleccionada === "web"
                  ? "bg-gray-600 text-white rounded-md px-2 py-1"
                  : "bg-gray-200 rounded-md px-2 py-1"
              }
            >
              Diseño web
            </button>
            <button
              onClick={() => setCategoriaSeleccionada("app")}
              className={
                categoriaSeleccionada === "app"
                  ? "bg-gray-600 text-white rounded-md px-2 py-1"
                  : "bg-gray-200 rounded-md px-2 py-1"
              }
            >
              Aplicaciones web
            </button>
          </div>
        </div>
        <div className="block w-full border-b pt-5"></div>
      </div>
      <GridSection categoria={categoriaSeleccionada} />
    </section>
  );
}

function GridSection({ categoria }) {
  const proyectosFiltrados =
    categoria === "todos"
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.tipo === categoria);
  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-6 justify-between max-w-7xl m-auto w-full px-8 pt-8 pb-32">
      {proyectosFiltrados.map((proyecto) => (
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
          width={500}
          height={500}
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

GridSection.propTypes = {
  categoria: PropTypes.string,
};
